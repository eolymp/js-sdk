import { Client } from "./client";
export declare class Twirp {
    private readonly client;
    constructor(client: Client);
    call(method: string, args: any): Promise<any>;
}
