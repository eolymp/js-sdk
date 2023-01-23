import {BadRequestError, ForbiddenError, InternalServerError, NotFoundError, UnauthorizedError} from "./errors";

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

export class Options {
  retry?: number;
  headers?: Record<string, string>;
  token?: string;
  request?: RequestInit;
  authenticate?: () => Promise<string>;
}

export class Client {
  private readonly retry: number;
  private readonly headers: Record<string, string>;
  private readonly authenticate?: () => Promise<string>;

  private token?: string;

  constructor(opts: Options = {}) {
    this.retry = opts.retry || 3;
    this.token = opts.token || undefined;
    this.headers = opts.headers || {};
    this.authenticate = opts.authenticate || undefined;
  }

  async send<T>(method: string, url: string, body: string|undefined, opts?: Options): Promise<T> {
    const max = Math.max(1, this.retry);
    for (let retry = 0; retry < max; retry++) {
      const last = retry >= max-1

      if (!this.token && this.authenticate) {
        this.token = await this.authenticate()
      }

      const auth: Record<string, string> = {}
      if (this.token) {
        auth['Authorization'] = `Bearer ${this.token}`;
      }

      const params: RequestInit = {
        mode: 'cors',
        credentials: 'omit',
        redirect: 'follow',
        method: method,
        body: body,
        headers: {
          'Content-Type': 'application/json',
          ...auth,
          ...this.headers,
          ...(opts?.headers || {}),
        },
        ...opts?.request,
      };

      const response = await fetch(url, params);
      if (response.status === 404) {
        const {message} = await Client.getResponseErrorData(response, 'not found')
        throw new NotFoundError(message);
      }

      if (response.status === 401) {
        if (retry === 0 && this.authenticate) { // if we got 401 on first attempt, reset token and retry
          this.token = undefined;
          continue;
        }

        const {message} = await Client.getResponseErrorData(response, 'unauthorized')
        throw new UnauthorizedError(message)
      }

      if (response.status === 403) {
        const {message} = await Client.getResponseErrorData(response, 'forbidden')
        throw new ForbiddenError(message)
      }

      if (response.status === 429 && !last) {
        await sleep((retry + 1) * 1000)
        continue
      }

      if (response.status >= 400 && response.status < 500) {
        const {
          message,
          code,
          status,
          details
        } = await Client.getResponseErrorData(response, `bad request (${response.status})`)
        throw new BadRequestError(message, code, status, details);
      }

      if (response.status >= 500) {
        const {
          message,
          code,
          details
        } = await Client.getResponseErrorData(response, `server error (${response.status})`)
        throw new InternalServerError(message, code, response.status, details);
      }

      return await response.json();
    }

    return {} as T;
  }

  // deprecated: use send instead
  async do<T>(url: string, method: string, body: string|undefined, headers: Record<string, string> = {}): Promise<T> {
    return this.send(method, url, body, {headers})
  }

  graphql<R>(url: string, query: string, variables: Record<string, any>, opts?: Options) {
    const body = JSON.stringify({
      query: query.replace(/\s{2,}/g, ' ').trim(),
      variables,
    })

    return this.send<R>("POST", url, body, opts);
  }

  call<R, E>(method: string, url: string, input: R, opts?: Options): Promise<E> {
    const data = JSON.stringify(input);

    if (method == "GET") {
      const query = data != '{}' ? `?q=${encodeURIComponent(data)}` : '';
      return this.send<E>(method, url+query, undefined, opts)
    }

    return this.send<E>(method, url, data, opts)
  }

  private static async getResponseErrorData(response: Response, message: string): Promise<Record<string, any>> {
    try {
      return await response.json()
    } catch (error) {
      return {message, error}
    }
  }
}
