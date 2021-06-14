export declare type Http = {
    rules?: HttpRule[];
    fullyDecodeReservedExpansion?: boolean;
};
export declare type HttpRule = {
    selector?: string;
    get?: string;
    put?: string;
    post?: string;
    delete?: string;
    patch?: string;
    custom?: CustomHttpPattern;
    body?: string;
    responseBody?: string;
    additionalBindings?: HttpRule[];
};
export declare type CustomHttpPattern = {
    kind?: string;
    path?: string;
};
