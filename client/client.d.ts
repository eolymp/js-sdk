export declare class Options {
    token?: string;
    space?: string;
    headers?: Record<string, string>;
}
export declare class Client {
    private readonly url;
    private readonly headers;
    private token?;
    private space?;
    constructor(url: string, opts?: Options);
    setToken(token?: string): void;
    setSpace(space?: string): void;
    do<T>(method: string, path: string, body: string, headers?: Record<string, string>): Promise<T>;
    graphql<R>(query: string, variables: Record<string, any>): Promise<R>;
    call<R, E>(method: string, input: R): Promise<E>;
}
