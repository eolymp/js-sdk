"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OAuth = void 0;
class OAuth {
    constructor(client) {
        this.client = client;
    }
    token(input) {
        return this.client.do('POST', '/oauth/token', new URLSearchParams(input).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    }
    introspect(input) {
        return this.client.do('POST', '/oauth/introspect', new URLSearchParams(input).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    }
    authorize(input) {
        return this.client.do('POST', '/oauth/authorize', JSON.stringify(input), {
            'Content-Type': 'application/json',
        });
    }
}
exports.OAuth = OAuth;
//# sourceMappingURL=index.js.map