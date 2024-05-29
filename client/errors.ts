// UnauthorizedError returned when user didn't provide token or given token has expired
export class UnauthorizedError extends Error {
    name: string;

    constructor(message: string) {
        super('UnauthorizedError: ' + message);
        this.name = 'UnauthorizedError';
    }
}

// ForbiddenError
export class ForbiddenError extends Error {
    name: string;

    constructor(message: string) {
        super('ForbiddenError: ' + message);
        this.name = 'ForbiddenError';
    }
}

// InternalServerError returned when server could not process request due to an internal error
export class InternalServerError extends Error {
    name: string;
    code: string;
    status: number;
    details: any[];

    constructor(message?: string, code?: string, status?: number, details: any[] = []) {
        super('InternalServerError: ' + (message ?? 'server error'));
        this.name = 'InternalServerError';
        this.code = code ? code : 'InternalServerError';
        this.status = status ? status : 0;
        this.details = details;
    }

    detail<T>(type: string): T | null {
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

// InternalServerError returned when server could not process request due to an internal error
export class BadRequestError extends Error {
    name: string;
    code: string;
    status: number;
    details: any[];

    constructor(message?: string, code?: string, status?: number, details: any[] = []) {
        super('BadRequestError: ' + (message ?? 'bad request'));
        this.name = 'BadRequestError';
        this.code = code ? code : 'BadRequest';
        this.status = status ? status : 0;
        this.details = details;
    }

    detail<T>(type: string): T | null {
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

// InternalServerError returned when server could not process request due to an internal error
export class NotFoundError extends Error {
    name: string;

    constructor(message: string) {
        super('NotFoundError: ' + message);
        this.name = 'NotFoundError';
    }
}
