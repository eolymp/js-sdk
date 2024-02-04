import {BadRequestError, ForbiddenError, InternalServerError, NotFoundError, UnauthorizedError} from "./errors";

const sleep = (delay: number) => new Promise((resolve) => setTimeout(resolve, delay));

export type Fetch = (req: RequestInfo|URL, opts?: RequestInit) => Promise<Response>;
export type Middleware = (fetch: Fetch) => Fetch

export interface CallOptions {
  signal?: AbortSignal | null;
  headers?: Record<string, string>;
  request?: RequestInit; // deprecated: use headers and signal directly
}

export interface ClientOptions {
  retry?: number;
  headers?: Record<string, string>;
  token?: string;
  middleware?: Middleware[];
  authenticate?: () => Promise<string>;
}

export class Client {
  public readonly fetch: Fetch;

  private readonly retry: number;
  private readonly headers: Record<string, string>;
  private readonly authenticate?: () => Promise<string>;

  private token?: string;

  constructor(opts: ClientOptions = {}) {
    this.retry = opts.retry || 3;
    this.token = opts.token || undefined;
    this.headers = opts.headers || {};
    this.authenticate = opts.authenticate || undefined;

    // construct fetch with middleware
    this.fetch = this._fetch.bind(this);
    for (const mw of opts?.middleware || []) {
      this.fetch = mw(this.fetch);
    }
  }

  // fetch compatible function which mixes in auth header, error handling and retry logic.
  async _fetch(req: RequestInfo | URL, opts?: RequestInit): Promise<Response> {
    const max = Math.max(1, this.retry);

    for (let retry = 0; retry < max; retry++) {
      const last = retry >= max - 1

      if (!this.token && this.authenticate) {
        this.token = await this.authenticate()
      }

      const headers = new Headers(this.headers);
      if (opts?.headers) {
        const normal = new Headers(opts?.headers);
        for (const [key, value] of normal) {
          headers.append(key, value);
        }
      }

      if (this.token) {
        headers.append('Authorization', `Bearer ${this.token}`)
      }

      const init: RequestInit = {
        mode: 'cors',
        credentials: 'omit',
        redirect: 'follow',
        ...opts,
        headers,
      };

      const response = await fetch(req, init);
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

      return response;
    }

    return fetch(req, opts)
  }

  async send<T>(method: string, url: string, body: string | undefined, opts?: CallOptions): Promise<T> {
    const response = await this.fetch(url, {
      ...opts?.request,
      method: method,
      body: body,
      signal: opts?.signal,
      headers: {'Content-Type': 'application/json', ...opts?.headers},
    });

    return await response.json() as T;
  }

  async call<R, E>(method: string, url: string, input: R, opts?: CallOptions): Promise<E> {
    const data = JSON.stringify(input);
    if (method == "GET") {
      const query = data != '{}' ? `?q=${encodeURIComponent(data)}` : '';
      return this.send<E>(method, url + query, undefined, opts)
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
