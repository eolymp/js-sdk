"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = exports.Options = void 0;
const errors_1 = require("./errors");
const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
class Options {
}
exports.Options = Options;
class Client {
    constructor(url, opts = {}) {
        if (!url.endsWith('/')) {
            url += '/';
        }
        this.url = url;
        this.retry = opts.retry || 3;
        this.token = opts.token || undefined;
        this.headers = opts.headers || {};
        this.authenticate = opts.authenticate || undefined;
    }
    do(method, path, body, headers = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const url = this.url + (path.startsWith('/') ? path.substr(1) : path);
            const max = Math.max(1, this.retry);
            for (let retry = 0; retry < max; retry++) {
                const last = retry >= max - 1;
                if (!this.token && this.authenticate) {
                    this.token = yield this.authenticate();
                }
                const auth = {};
                if (this.token) {
                    auth['Authorization'] = `Bearer ${this.token}`;
                }
                const params = {
                    method: method,
                    mode: 'cors',
                    credentials: 'omit',
                    headers: Object.assign(Object.assign(Object.assign({ 'Content-Type': 'application/json' }, auth), this.headers), (headers || {})),
                    redirect: 'follow',
                    body: body,
                };
                const response = yield fetch(url, params);
                if (response.status === 404) {
                    const { message } = yield Client.getResponseErrorData(response, 'not found');
                    throw new errors_1.NotFoundError(message);
                }
                if (response.status === 401) {
                    if (retry === 0 && this.authenticate) { // if we got 401 on first attempt, reset token and retry
                        this.token = undefined;
                        continue;
                    }
                    const { message } = yield Client.getResponseErrorData(response, 'unauthorized');
                    throw new errors_1.UnauthorizedError(message);
                }
                if (response.status === 403) {
                    const { message } = yield Client.getResponseErrorData(response, 'forbidden');
                    throw new errors_1.ForbiddenError(message);
                }
                if (response.status === 429 && !last) {
                    yield sleep((retry + 1) * 1000);
                    continue;
                }
                if (response.status >= 400 && response.status < 500) {
                    const { message, code, status, details } = yield Client.getResponseErrorData(response, `bad request (${response.status})`);
                    throw new errors_1.BadRequestError(message, code, status, details);
                }
                if (response.status >= 500) {
                    const { message, code, details } = yield Client.getResponseErrorData(response, `server error (${response.status})`);
                    throw new errors_1.InternalServerError(message, code, response.status, details);
                }
                return yield response.json();
            }
            return {};
        });
    }
    graphql(query, variables, opts) {
        return this.do("POST", "/graphql", JSON.stringify({ query, variables }), opts === null || opts === void 0 ? void 0 : opts.headers);
    }
    call(method, input, opts) {
        return this.do("POST", "/" + method, JSON.stringify(input), opts === null || opts === void 0 ? void 0 : opts.headers);
    }
    static getResponseErrorData(response, message) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield response.json();
            }
            catch (error) {
                return { message, error };
            }
        });
    }
}
exports.Client = Client;
//# sourceMappingURL=client.js.map