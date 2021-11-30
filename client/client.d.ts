export declare class Options {
    headers?: Record<string, string>;
}
export declare class Client {
    private readonly url;
    private readonly headers;
    constructor(url: string, opts?: Options);
    do<T>(method: string, path: string, body: string, headers?: Record<string, string>): Promise<T>;
    graphql<R>(query: string, variables: Record<string, any>): Promise<R>;
    call<R, E>(method: string, input: R, opts?: Options): Promise<E>;
}
