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

    constructor(client: Client) {
        this.client = client;
    }

    token(input: CreateTokenInput): Promise<CreateTokenOutput> {
        return this.client.do('POST', '/oauth/token', new URLSearchParams(input as Record<string, string>).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    }

    introspect(input: IntrospectTokenInput): Promise<Token> {
        return this.client.do('POST', '/oauth/introspect', new URLSearchParams(input as Record<string, string>).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    }

    authorize(input: AuthorizeInput): Promise<AuthorizeOutput> {
        return this.client.do('POST', '/oauth/authorize', JSON.stringify(input), {
            'Content-Type': 'application/json',
        });
    }
}
