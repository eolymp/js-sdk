import {Client} from '../client';

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

export type RevokeInput = {
  token: string;
};

export type RevokeOutput = {[key: string]: string};

export type UserInfoOutput = {
  sub?: string;
  name?: string;
  given_name?: string;
  family_name?: string;
  middle_name?: string;
  nickname?: string;
  picture?: string;
  profile?: string;
  email?: string;
  email_verified?: boolean;
  email_restricted?: boolean;
  locale?: string;
}

export type OAuthConfig = {
  tokenEndpoint?: string
  revokeEndpoint?: string
  userinfoEndpoint?: string
}

export class OAuth {
  private readonly client: Client;
  private readonly config?: OAuthConfig;

  constructor(client: Client, config?: OAuthConfig) {
    this.client = client;
    this.config = config;
  }

  async token(input: TokenInput): Promise<TokenOutput> {
    if (!this.config?.tokenEndpoint) {
      return Promise.reject(new Error('token endpoint is not configured'));
    }

    const resp = await this.client.fetch(this.config?.tokenEndpoint, {
      method: 'POST',
      body: new URLSearchParams(input as Record<string, string>).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return await resp.json() as TokenOutput;
  }

  async revoke(input: RevokeInput): Promise<RevokeOutput> {
    if (!this.config?.revokeEndpoint) {
      return Promise.reject(new Error('revoke endpoint is not configured'));
    }

    const resp = await this.client.fetch(this.config?.revokeEndpoint, {
      method: 'POST',
      body: new URLSearchParams(input as Record<string, string>).toString(),
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });

    return await resp.json() as RevokeOutput;
  }

  async userinfo(): Promise<UserInfoOutput> {
    if (!this.config?.userinfoEndpoint) {
      return Promise.reject(new Error('userinfo endpoint is not configured'));
    }

    const resp = await this.client.fetch(this.config?.userinfoEndpoint);
    return await resp.json() as UserInfoOutput;
  }
}
