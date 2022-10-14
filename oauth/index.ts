import { Client } from '../client';

export type CreateTokenInput = {
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

export type CreateTokenOutput = {
    access_token: string;
    refresh_token: string;
};

export type IntrospectTokenInput = {
    token: string;
};

export type Token = {
    active: boolean;
    user_id: string;
    exp: number;
    jti: string;
    scope: string;
    token_type: string;
};

export type AuthorizeInput = {
    response_type?: string;
    client_id?: string;
    redirect_uri?: string;
    state?: string;
    scope?: string;
    code_challenge?: string;
    code_challenge_method?: string;
};

export type AuthorizeOutput = {
    redirect_uri: string;
};

export class OAuth {
    private readonly client: Client;
    private readonly tokenUrl?: string;
    private readonly introspectUrl?: string;

    constructor(client: Client, tokenUrl?: string, introspectUrl?: string) {
        this.client = client;
        this.tokenUrl = tokenUrl;
        this.introspectUrl = introspectUrl;
    }

    token(input: CreateTokenInput): Promise<CreateTokenOutput> {
        if (!this.tokenUrl) {
            return Promise.reject(new Error('token URL is not configured'));
        }

        return this.client.do('POST', this.tokenUrl, new URLSearchParams(input as Record<string, string>).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    }

    introspect(input: IntrospectTokenInput): Promise<Token> {
        if (!this.introspectUrl) {
            return Promise.reject(new Error('token URL is not configured'));
        }

        return this.client.do('POST', this.introspectUrl, new URLSearchParams(input as Record<string, string>).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    }
}
