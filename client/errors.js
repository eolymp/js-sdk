"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotFoundError = exports.BadRequestError = exports.InternalServerError = exports.ForbiddenError = exports.UnauthorizedError = void 0;
// UnauthorizedError returned when user didn't provide token or given token has expired
class UnauthorizedError {
    constructor(message) {
        this.message = message;
        this.name = 'UnauthorizedError';
    }
}
exports.UnauthorizedError = UnauthorizedError;
// ForbiddenError
class ForbiddenError {
    constructor(message) {
        this.message = message;
        this.name = 'ForbiddenError';
    }
}
exports.ForbiddenError = ForbiddenError;
// InternalServerError returned when server could not process request due to an internal error
class InternalServerError {
    constructor(message, code, status, details = []) {
        this.name = 'InternalServerError';
        this.code = code ? code : 'InternalServerError';
        this.message = message ? message : 'server error';
        this.status = status ? status : 0;
        this.details = details;
    }
    detail(type) {
        if (!this.details) {
            return null;
        }
        for (let i = 0; i < this.details.length; i++) {
            const detail = this.details[i];
            if ('@type' in detail && detail['@type'] === type) {
                return detail;
            }
        }
        return null;
    }
}
exports.InternalServerError = InternalServerError;
// InternalServerError returned when server could not process request due to an internal error
class BadRequestError {
    constructor(message, code, status, details = []) {
        this.name = 'BadRequestError';
        this.code = code ? code : 'BadRequest';
        this.message = message ? message : 'bad request';
        this.status = status ? status : 0;
        this.details = details;
    }
    detail(type) {
        if (!this.details) {
            return null;
        }
        for (let i = 0; i < this.details.length; i++) {
            const detail = this.details[i];
            if ('@type' in detail && detail['@type'] === type) {
                return detail;
            }
        }
        return null;
    }
}
exports.BadRequestError = BadRequestError;
// InternalServerError returned when server could not process request due to an internal error
class NotFoundError {
    constructor(message) {
        this.message = message;
        this.name = 'NotFoundError';
    }
}
exports.NotFoundError = NotFoundError;
//# sourceMappingURL=errors.js.map