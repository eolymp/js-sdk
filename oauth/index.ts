import { Client } from '../client';

export type TokenInput = {
    grant_type: string;
    username?: string;
    password?: string;
    client_id?: string;
    client_secret?: string;
    code?: string;
    code_verifier?: string;
    scope?: string;
    refresh_token?: string;
    redirect_uri?: string;
};

export type TokenOutput = {
    access_token: string;
    token_type: string;
    expires_in?: string;
    id_token?: string;
    refresh_token?: string;
    scope?: string;
};

export type UserInfoOutput = {
    sub?: string;
    name?: string;
    given_name?: string;
    family_name?: string;
    middle_name?: string;
    nickname?: string;
    picture?: string;
    email?: string;
    email_verified?: boolean;
    locale?: string;
}

export type OAuthConfig = {
    tokenEndpoint?: string
    userinfoEndpoint?: string
}

export class OAuth {
    private readonly client: Client;
    private readonly config?: OAuthConfig;

    constructor(client: Client, config?: OAuthConfig) {
        this.client = client;
        this.config = config;
    }

    token(input: TokenInput): Promise<TokenOutput> {
        if (!this.config?.tokenEndpoint) {
            return Promise.reject(new Error('token endpoint is not configured'));
        }

        return this.client.do(this.config?.tokenEndpoint, 'POST', new URLSearchParams(input as Record<string, string>).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        });
    }

    userinfo(): Promise<UserInfoOutput> {
        if (!this.config?.userinfoEndpoint) {
            return Promise.reject(new Error('userinfo endpoint is not configured'));
        }

        return this.client.do(this.config?.userinfoEndpoint, 'GET', undefined, {});
    }
}
