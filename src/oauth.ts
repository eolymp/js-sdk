import {Client} from "./client";

export type CreateTokenInput = {
    grant_type: string
    code_verifier?: string
    code?: string
}

export type CreateTokenOutput = {
    access_token: string
}

export type IntrospectTokenInput = {
    token: string
}

export type Token = {
    active: boolean
    actor: string
    exp: number
    jti: string
    scope: string
    token_type: string
}

export class OAuth {
    private readonly client: Client;

    constructor(client: Client) {
        this.client = client
    }

    token(input: CreateTokenInput): Promise<CreateTokenOutput> {
        return this.client.do("POST", "/oauth/token", (new URLSearchParams(input as any)).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    }

    introspect(input: IntrospectTokenInput): Promise<Token> {
        return this.client.do("POST", "/oauth/introspect", (new URLSearchParams(input as any)).toString(), {
            'Content-Type': 'application/x-www-form-urlencoded',
        })
    }
}
