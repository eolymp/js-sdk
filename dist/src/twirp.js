"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Twirp = void 0;
var Twirp = /** @class */ (function () {
    function Twirp(client) {
        this.client = client;
    }
    Twirp.prototype.call = function (method, args) {
        return this.client.do("POST", "/twirp/" + method, JSON.stringify(args));
    };
    return Twirp;
}());
exports.Twirp = Twirp;
//# sourceMappingURL=twirp.js.map