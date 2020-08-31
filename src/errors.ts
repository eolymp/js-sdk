// UnauthorizedError returned when user didn't provide token or given token has expired
export class UnauthorizedError implements Error {
    message: string;
    name: string;

    constructor(message: string) {
        this.message = message;
        this.name = "UnauthorizedError";
    }
}

// InternalServerError returned when server could not process request due to an internal error
export class InternalServerError implements Error {
    name: string;
    code: string;
    message: string;
    status: number;
    details: any;

    constructor(message?: string, code?: string, status?: number, details: any = null) {
        this.name = "InternalServerError";
        this.code = code ? code : "InternalServerError";
        this.message = message ? message : "server error";
        this.status = status ? status : 0;
        this.details = details;
    }
}

// InternalServerError returned when server could not process request due to an internal error
export class BadRequestError implements Error {
    name: string;
    code: string;
    message: string;
    status: number;
    details: any;

    constructor(message?: string, code?: string, status?: number, details: any = null) {
        this.name = "BadRequestError";
        this.code = code ? code : "BadRequest";
        this.message = message ? message : "bad request";
        this.status = status ? status : 0;
        this.details = details;
    }
}

// InternalServerError returned when server could not process request due to an internal error
export class NotFoundError implements Error {
    message: string;
    name: string;

    constructor(message: string) {
        this.message = message;
        this.name = "NotFoundError";
    }
}
