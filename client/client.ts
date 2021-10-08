import {BadRequestError, ForbiddenError, InternalServerError, NotFoundError, UnauthorizedError} from "./errors";

export class Options {
    token?: string;
    space?: string;
    headers?: Record<string, string>;
}

export class Client {
    private readonly url: string;
    private readonly headers: Record<string, string>;
    private token?: string;
    private space?: string;

    constructor(url: string, opts: Options = {}) {
        if (!url.endsWith('/')) {
            url += '/';
        }

        this.url = url;
        this.token = opts.token;
        this.space = opts.space;
        this.headers = opts.headers || {};
    }

    setToken(token?: string) {
        this.token = token;
    }

    setSpace(space?: string) {
        this.space = space;
    }

    do<T>(method: string, path: string, body: string, headers: Record<string, string> = {}): Promise<T> {
        const url = this.url + (path.startsWith('/') ? path.substr(1) : path);

        const auth: Record<string, string> = {}
        if (this.token) {
            auth['Authorization'] = 'Bearer ' + this.token
        }

        if (this.space) {
            auth['Eolymp-Space'] = this.space
        }

        const params: RequestInit = {
            method: method,
            mode: 'cors',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...(auth || {}),
                ...(headers || {}),
            },
            redirect: 'follow',
            body: body,
        };

        return fetch(url, params).then((response) => {
            if (response.status === 404) {
                return response
                  .json()
                  .then(({ error }) => Promise.reject(new NotFoundError(error)))
                  .catch(() => Promise.reject(new NotFoundError('not found')));
            }

            if (response.status === 401) {
                return response
                  .json()
                  .then(({ error }) => Promise.reject(new UnauthorizedError(error)))
                  .catch((e) => Promise.reject(e instanceof UnauthorizedError ? e : new UnauthorizedError('unauthorized')));
            }

            if (response.status === 403) {
                return response
                  .json()
                  .then(({ error }) => Promise.reject(new ForbiddenError(error)))
                  .catch((e) => Promise.reject(e instanceof ForbiddenError ? e : new ForbiddenError('forbidden')));
            }

            if (response.status >= 400 && response.status < 500) {
                return response
                  .json()
                  .then(({ error, code, status, details }) => Promise.reject(new BadRequestError(error, code, status, details)))
                  .catch((e) =>
                    Promise.reject(
                      e instanceof BadRequestError
                        ? e
                        : new BadRequestError(`server error (${response.status})`, undefined, response.status)
                    )
                  );
            }

            if (response.status >= 500) {
                return response
                  .json()
                  .then(({ error, code, details }) =>
                    Promise.reject(new InternalServerError(error, code, response.status, details))
                  )
                  .catch((e) =>
                    Promise.reject(
                      e instanceof InternalServerError
                        ? e
                        : new InternalServerError(`server error (${response.status})`, undefined, response.status)
                    )
                  );
            }

            return Promise.resolve(response.json());
        });
    }

    graphql<R>(query: string, variables: Record<string, any>) {
        return this.do<R>("POST", "/graphql", JSON.stringify({query, variables}));
    }

    call<R, E>(method: string, input: R): Promise<E> {
        return this.do<E>("POST", "/" + method, JSON.stringify(input))
    }
}