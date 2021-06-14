"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
const errors_1 = require("./errors");
class Client {
    constructor(url, token) {
        if (!url.endsWith('/')) {
            url += '/';
        }
        this.url = url;
    }
    authorize(token) {
        this.token = token;
    }
    do(method, path, body, headers = {}) {
        const url = this.url + (path.startsWith('/') ? path.substr(1) : path);
        const auth = this.token ? {} : {
            'Authorization': 'Bearer ' + this.token
        };
        const params = {
            method: method,
            mode: 'cors',
            credentials: 'omit',
            headers: Object.assign(Object.assign({ 'Content-Type': 'application/json' }, auth), (headers || {})),
            redirect: 'follow',
            body: body,
        };
        return fetch(url, params).then((response) => {
            if (response.status === 404) {
                return response
                    .json()
                    .then(({ error }) => Promise.reject(new errors_1.NotFoundError(error)))
                    .catch(() => Promise.reject(new errors_1.NotFoundError('not found')));
            }
            if (response.status === 401) {
                return response
                    .json()
                    .then(({ error }) => Promise.reject(new errors_1.UnauthorizedError(error)))
                    .catch((e) => Promise.reject(e instanceof errors_1.UnauthorizedError ? e : new errors_1.UnauthorizedError('unauthorized')));
            }
            if (response.status >= 400 && response.status < 500) {
                return response
                    .json()
                    .then(({ error, code, status, details }) => Promise.reject(new errors_1.BadRequestError(error, code, status, details)))
                    .catch((e) => Promise.reject(e instanceof errors_1.BadRequestError
                    ? e
                    : new errors_1.BadRequestError(`server error (${response.status})`, undefined, response.status)));
            }
            if (response.status >= 500) {
                return response
                    .json()
                    .then(({ error, code, details }) => Promise.reject(new errors_1.InternalServerError(error, code, response.status, details)))
                    .catch((e) => Promise.reject(e instanceof errors_1.InternalServerError
                    ? e
                    : new errors_1.InternalServerError(`server error (${response.status})`, undefined, response.status)));
            }
            return Promise.resolve(response.json());
        });
    }
    graphql(query, variables) {
        return this.do("POST", "/graphql", JSON.stringify({ query, variables }));
    }
    call(method, input) {
        return this.do("POST", "/twirp/" + method, JSON.stringify(input));
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map