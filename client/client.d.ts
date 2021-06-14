export declare class Client {
    private readonly url;
    private token?;
    constructor(url: string, token?: string);
    authorize(token?: string): void;
    do<T>(method: string, path: string, body: string, headers?: Record<string, string>): Promise<T>;
    graphql<R>(query: string, variables: Record<string, any>): Promise<R>;
    call<R, E>(method: string, input: R): Promise<E>;
}
