import {BadRequestError, InternalServerError, NotFoundError, UnauthorizedError} from "./errors";

export class Client {
    private url: string;

    constructor(url: string) {
        if (!url.endsWith('/')) {
            url += '/';
        }

        this.url = url;
    }

    setAccessToken(token: string) {
        localStorage.setItem("access_token", token);
    }

    do(method: string, path: string, body: string, headers: any = {}) {
        if (path.startsWith('/')) {
            path = path.substr(1);
        }

        const params: any = {
            method: method,
            mode: 'cors',
            credentials: 'omit',
            headers: Object.assign({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem("access_token"),
            }, headers || {}),
            redirect: 'follow',
            body: body,
        };

        return fetch(this.url + path, params)
            .then(r => {
                return new Promise<Response>((resolve, reject) => {
                    if (r.status === 404) {
                        r.json().then((r: any) => reject(new NotFoundError(r.error)))
                            .catch(() => reject(new NotFoundError('not found')));

                        return
                    }

                    if (r.status === 401) {
                        r.json().then((r: any) => reject(new UnauthorizedError(r.error)))
                            .catch(() => reject(new UnauthorizedError('unauthorized')));

                        return
                    }

                    if (Math.floor(r.status/100) === 4) {
                        r.json().then((r: any) => reject(new BadRequestError(r.error, r.code, r.status, r.details)))
                            .catch(() => reject(new BadRequestError(`server error (${r.status})`, undefined, r.status)));

                        return
                    }

                    if (Math.floor(r.status/100) === 5) {
                        r.json().then((r: any) => reject(new InternalServerError(r.error, r.code, r.status, r.details)))
                            .catch(() => reject(new InternalServerError(`server error (${r.status})`, undefined, r.status)));

                        return
                    }

                    resolve(r)
                })
            })
            .then(r => r.json())
    }
}