import {BadRequestError, ForbiddenError, InternalServerError, NotFoundError, UnauthorizedError} from "./errors";

export class Options {
    headers?: Record<string, string>;
}

export class Client {
    private readonly url: string;
    private readonly headers: Record<string, string>;

    constructor(url: string, opts: Options = {}) {
        if (!url.endsWith('/')) {
            url += '/';
        }

        this.url = url;
        this.headers = opts.headers || {};
    }

    do<T>(method: string, path: string, body: string, headers: Record<string, string> = {}): Promise<T> {
        const url = this.url + (path.startsWith('/') ? path.substr(1) : path);

        const params: RequestInit = {
            method: method,
            mode: 'cors',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                ...this.headers,
                ...(headers || {}),
            },
            redirect: 'follow',
            body: body,
        };

        return fetch(url, params).then((response) => {
            if (response.status === 404) {
                return response
                  .json()
                  .then(({ message }) => Promise.reject(new NotFoundError(message)))
                  .catch(() => Promise.reject(new NotFoundError('not found')));
            }

            if (response.status === 401) {
                return response
                  .json()
                  .then(({ message }) => Promise.reject(new UnauthorizedError(message)))
                  .catch((e) => Promise.reject(e instanceof UnauthorizedError ? e : new UnauthorizedError('unauthorized')));
            }

            if (response.status === 403) {
                return response
                  .json()
                  .then(({ message }) => Promise.reject(new ForbiddenError(message)))
                  .catch((e) => Promise.reject(e instanceof ForbiddenError ? e : new ForbiddenError('forbidden')));
            }

            if (response.status >= 400 && response.status < 500) {
                return response
                  .json()
                  .then(({ message, code, status, details }) => Promise.reject(new BadRequestError(message, code, status, details)))
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
                  .then(({ message, code, details }) =>
                    Promise.reject(new InternalServerError(message, code, response.status, details))
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

    graphql<R>(query: string, variables: Record<string, any>, opts?: Options) {
        return this.do<R>("POST", "/graphql", JSON.stringify({query, variables}), opts?.headers);
    }

    call<R, E>(method: string, input: R, opts?: Options): Promise<E> {
        return this.do<E>("POST", "/" + method, JSON.stringify(input), opts?.headers)
    }
}
