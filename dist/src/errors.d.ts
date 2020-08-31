export declare class UnauthorizedError implements Error {
    message: string;
    name: string;
    constructor(message: string);
}
export declare class InternalServerError implements Error {
    name: string;
    code: string;
    message: string;
    status: number;
    details: any;
    constructor(message?: string, code?: string, status?: number, details?: any);
}
export declare class BadRequestError implements Error {
    name: string;
    code: string;
    message: string;
    status: number;
    details: any;
    constructor(message?: string, code?: string, status?: number, details?: any);
}
export declare class NotFoundError implements Error {
    message: string;
    name: string;
    constructor(message: string);
}
