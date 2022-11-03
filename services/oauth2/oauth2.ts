// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts: O): Promise<E>;
}

export class OAuth2 {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  Token<O>(input: TokenInput, opts?: O): Promise<TokenOutput> {
    const path = "/oauth2/token";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  Authorize<O>(input: AuthorizeInput, opts?: O): Promise<AuthorizeOutput> {
    const path = "/oauth2/authorize";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  Callback<O>(input: CallbackInput, opts?: O): Promise<CallbackOutput> {
    const path = "/oauth2/callback";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UserInfo<O>(input: UserInfoInput, opts?: O): Promise<UserInfoOutput> {
    const path = "/oauth2/userinfo";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  Introspect<O>(input: IntrospectInput, opts?: O): Promise<IntrospectOutput> {
    const path = "/oauth2/introspect";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  Revoke<O>(input: RevokeInput, opts?: O): Promise<RevokeOutput> {
    const path = "/oauth2/revoke";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type TokenInput = {
  grantType?: string;
  username?: string;
  password?: string;
  clientId?: string;
  clientSecret?: string;
  code?: string;
  codeVerifier?: string;
  scope?: string;
  refreshToken?: string;
  redirectUri?: string;
}

export type TokenOutput = {
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
  refreshToken?: string;
  scope?: string;
  idToken?: string;
}

export type AuthorizeInput = {
  clientId?: string;
  codeChallenge?: string;
  codeChallengeMethod?: string;
  redirectUri?: string;
  responseType?: string;
  scope?: string;
  state?: string;
}

export type AuthorizeOutput = {
  redirectUri?: string;
}

export type CallbackInput = {
  code?: string;
  state?: string;
}

export type CallbackOutput = {
  redirectUri?: string;
}

export type UserInfoInput = Record<string, unknown>;

export type UserInfoOutput = {
  issuer?: string;
  subject?: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  middleName?: string;
  nickname?: string;
  picture?: string;
  email?: string;
  emailVerified?: boolean;
  locale?: string;
  profile?: string;
}

export type IntrospectInput = {
  token?: string;
}

export type IntrospectOutput = {
  active?: boolean;
  token?: string;
  type?: string;
  expiresAt?: string;
  scopes?: string[];
  userId?: string;
  username?: string;
}

export type RevokeInput = {
  token?: string;
}

export type RevokeOutput = Record<string, unknown>;

