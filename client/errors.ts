// UnauthorizedError returned when user didn't provide token or given token has expired
export class UnauthorizedError implements Error {
    message: string;
    name: string;

    constructor(message: string) {
        this.message = message;
        this.name = 'UnauthorizedError';
    }
}

// ForbiddenError
export class ForbiddenError implements Error {
    message: string;
    name: string;

    constructor(message: string) {
        this.message = message;
        this.name = 'ForbiddenError';
    }
}

// InternalServerError returned when server could not process request due to an internal error
export class InternalServerError implements Error {
    name: string;
    code: string;
    message: string;
    status: number;
    details: any[];

    constructor(message?: string, code?: string, status?: number, details: any[] = []) {
        this.name = 'InternalServerError';
        this.code = code ? code : 'InternalServerError';
        this.message = message ? message : 'server error';
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
export class BadRequestError implements Error {
    name: string;
    code: string;
    message: string;
    status: number;
    details: any[];

    constructor(message?: string, code?: string, status?: number, details: any[] = []) {
        this.name = 'BadRequestError';
        this.code = code ? code : 'BadRequest';
        this.message = message ? message : 'bad request';
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
export class NotFoundError implements Error {
    message: string;
    name: string;

    constructor(message: string) {
        this.message = message;
        this.name = 'NotFoundError';
    }
}
