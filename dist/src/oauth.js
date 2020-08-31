"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth = void 0;
var OAuth = /** @class */ (function () {
    function OAuth(client) {
        this.client = client;
    }
    OAuth.prototype.token = function (input) {
        return this.client.do("POST", "/oauth/token", (new URLSearchParams(input)).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    };
    OAuth.prototype.introspect = function (input) {
        return this.client.do("POST", "/oauth/introspect", (new URLSearchParams(input)).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    };
    return OAuth;
}());
exports.OAuth = OAuth;
//# sourceMappingURL=oauth.js.map