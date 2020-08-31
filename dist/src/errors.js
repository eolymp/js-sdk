"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.BadRequestError = exports.InternalServerError = exports.UnauthorizedError = void 0;
// UnauthorizedError returned when user didn't provide token or given token has expired
var UnauthorizedError = /** @class */ (function () {
    function UnauthorizedError(message) {
        this.message = message;
        this.name = "UnauthorizedError";
    }
    return UnauthorizedError;
}());
exports.UnauthorizedError = UnauthorizedError;
// InternalServerError returned when server could not process request due to an internal error
var InternalServerError = /** @class */ (function () {
    function InternalServerError(message, code, status, details) {
        if (details === void 0) { details = null; }
        this.name = "InternalServerError";
        this.code = code ? code : "InternalServerError";
        this.message = message ? message : "server error";
        this.status = status ? status : 0;
        this.details = details;
    }
    return InternalServerError;
}());
exports.InternalServerError = InternalServerError;
// InternalServerError returned when server could not process request due to an internal error
var BadRequestError = /** @class */ (function () {
    function BadRequestError(message, code, status, details) {
        if (details === void 0) { details = null; }
        this.name = "BadRequestError";
        this.code = code ? code : "BadRequest";
        this.message = message ? message : "bad request";
        this.status = status ? status : 0;
        this.details = details;
    }
    return BadRequestError;
}());
exports.BadRequestError = BadRequestError;
// InternalServerError returned when server could not process request due to an internal error
var NotFoundError = /** @class */ (function () {
    function NotFoundError(message) {
        this.message = message;
        this.name = "NotFoundError";
    }
    return NotFoundError;
}());
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=errors.js.map