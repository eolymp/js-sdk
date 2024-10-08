// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type IdentityProvider = Record<string, unknown>;

export type IdentityProvider_Basecamp = Record<string, unknown>;

export type IdentityProvider_Local = {
  allowModifyNickname?: boolean;
  allowModifyBasics?: boolean;
  allowModifyEmail?: boolean;
  allowModifyPassword?: boolean;
}

export type IdentityProvider_OIDC = {
  clientId?: string;
  clientSecret?: string;
  issuer?: string;
  authorizeEndpoint?: string;
  tokenEndpoint?: string;
  keysEndpoint?: string;
  userinfoEndpoint?: string;
  redirectUri?: string;
}

