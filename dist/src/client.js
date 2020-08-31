"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Client = void 0;
var errors_1 = require("./errors");
var Client = /** @class */ (function () {
    function Client(url) {
        if (!url.endsWith('/')) {
            url += '/';
        }
        this.url = url;
    }
    Client.prototype.setAccessToken = function (token) {
        localStorage.setItem("access_token", token);
    };
    Client.prototype.do = function (method, path, body, headers) {
        if (headers === void 0) { headers = {}; }
        if (path.startsWith('/')) {
            path = path.substr(1);
        }
        var params = {
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
            .then(function (r) {
            return new Promise(function (resolve, reject) {
                if (r.status === 404) {
                    r.json().then(function (r) { return reject(new errors_1.NotFoundError(r.error)); })
                        .catch(function () { return reject(new errors_1.NotFoundError('not found')); });
                    return;
                }
                if (r.status === 401) {
                    r.json().then(function (r) { return reject(new errors_1.UnauthorizedError(r.error)); })
                        .catch(function () { return reject(new errors_1.UnauthorizedError('unauthorized')); });
                    return;
                }
                if (Math.floor(r.status / 100) === 4) {
                    r.json().then(function (r) { return reject(new errors_1.BadRequestError(r.error, r.code, r.status, r.details)); })
                        .catch(function () { return reject(new errors_1.BadRequestError("server error (" + r.status + ")", undefined, r.status)); });
                    return;
                }
                if (Math.floor(r.status / 100) === 5) {
                    r.json().then(function (r) { return reject(new errors_1.InternalServerError(r.error, r.code, r.status, r.details)); })
                        .catch(function () { return reject(new errors_1.InternalServerError("server error (" + r.status + ")", undefined, r.status)); });
                    return;
                }
                resolve(r);
            });
        })
            .then(function (r) { return r.json(); });
    };
    return Client;
}());
exports.Client = Client;
//# sourceMappingURL=client.js.map