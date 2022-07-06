import { Client } from '../client';
export declare type CreateTokenInput = {
    grant_type: string;
    username?: string;
    password?: string;
    client_id?: string;
    client_secret?: string;
    code?: string;
    code_verifier?: string;
    scope?: string;
    refresh_token?: string;
};
export declare type CreateTokenOutput = {
    access_token: string;
};
export declare type IntrospectTokenInput = {
    token: string;
};
export declare type Token = {
    active: boolean;
    user_id: string;
    exp: number;
    jti: string;
    scope: string;
    token_type: string;
};
export declare type AuthorizeInput = {
    response_type?: string;
    client_id?: string;
    redirect_uri?: string;
    state?: string;
    scope?: string;
    code_challenge?: string;
    code_challenge_method?: string;
};
export declare type AuthorizeOutput = {
    redirect_uri: string;
};
export declare class OAuth {
    private readonly client;
    constructor(client: Client);
    token(input: CreateTokenInput): Promise<CreateTokenOutput>;
    introspect(input: IntrospectTokenInput): Promise<Token>;
    authorize(input: AuthorizeInput): Promise<AuthorizeOutput>;
}
