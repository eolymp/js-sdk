export declare class Client {
    private url;
    constructor(url: string);
    setAccessToken(token: string): void;
    do(method: string, path: string, body: string, headers?: any): Promise<any>;
}
