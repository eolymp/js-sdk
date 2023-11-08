// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { IdentityProvider_Basecamp, IdentityProvider_Local, IdentityProvider_OIDC } from "./configuration_idp"

export type IdentityConfig = {
  local?: IdentityProvider_Local;
  basecamp?: IdentityProvider_Basecamp;
  oidc?: IdentityProvider_OIDC;
  displayNameType?: string;
  displayNameAttribute?: string;
}

