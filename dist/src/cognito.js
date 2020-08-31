"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cognito = void 0;
var Cognito = /** @class */ (function () {
    function Cognito(twirp) {
        this.twirp = twirp;
    }
    Cognito.prototype.IntrospectUser = function () {
        return this.twirp.call("eolymp.cognito.Cognito/IntrospectUser", {});
    };
    return Cognito;
}());
exports.Cognito = Cognito;
//# sourceMappingURL=cognito.js.map