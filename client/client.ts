import {BadRequestError, InternalServerError, NotFoundError, UnauthorizedError} from "./errors";

export class Client {
    private readonly url: string;
    private token?: string;

    constructor(url: string, token?: string) {
        if (!url.endsWith('/')) {
            url += '/';
        }

        this.url = url;
    }

    authorize(token?: string) {
        this.token = token;
    }

    do<T>(method: string, path: string, body: string, headers: Record<string, string> = {}): Promise<T> {
        const url = this.url + (path.startsWith('/') ? path.substr(1) : path);

        const auth: Record<string, string> = this.token ? {} : {
            'Authorization': 'Bearer ' + this.token
        };

        const params: RequestInit = {
            method: method,
            mode: 'cors',
            credentials: 'omit',
            headers: {
                'Content-Type': 'application/json',
                ...auth,
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
        return this.do<E>("POST", "/twirp/" + method, JSON.stringify(input))
    }
}