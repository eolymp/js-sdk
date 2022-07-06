export declare class Options {
    retry?: number;
    headers?: Record<string, string>;
    token?: string;
    authenticate?: () => Promise<string>;
}
export declare class Client {
    private readonly url;
    private readonly retry;
    private readonly headers;
    private readonly authenticate?;
    private token?;
    constructor(url: string, opts?: Options);
    do<T>(method: string, path: string, body: string, headers?: Record<string, string>): Promise<T>;
    graphql<R>(query: string, variables: Record<string, any>, opts?: Options): Promise<R>;
    call<R, E>(method: string, input: R, opts?: Options): Promise<E>;
    private static getResponseErrorData;
}
