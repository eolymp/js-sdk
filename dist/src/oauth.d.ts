import { Client } from "./client";
export declare type CreateTokenInput = {
    grant_type: string;
    code_verifier?: string;
    code?: string;
};
export declare type CreateTokenOutput = {
    access_token: string;
};
export declare type IntrospectTokenInput = {
    token: string;
};
export declare type Token = {
    active: boolean;
    actor: string;
    exp: number;
    jti: string;
    scope: string;
    token_type: string;
};
export declare class OAuth {
    private readonly client;
    constructor(client: Client);
    token(input: CreateTokenInput): Promise<CreateTokenOutput>;
    introspect(input: IntrospectTokenInput): Promise<Token>;
}
