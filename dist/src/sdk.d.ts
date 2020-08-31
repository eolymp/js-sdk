import { Executor } from "./executor";
import { Cognito } from "./cognito";
import { Compete } from "./compete";
import { OAuth } from "./oauth";
import { Client } from "./client";
export declare class SDK {
    readonly executor: Executor;
    readonly cognito: Cognito;
    readonly compete: Compete;
    readonly oauth: OAuth;
    readonly graphql: (query: string, variables: any) => Promise<any>;
    readonly token: (token: string | null) => void;
    private readonly client;
    private readonly twirp;
    constructor(client: Client);
}
