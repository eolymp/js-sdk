// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionID, ExpressionString } from "../wellknown/expression"
import { AccessKey } from "./access_key"
import { Quota } from "./quota"
import { User } from "./user"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts: O): Promise<E>;
}

export class Cognito {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  Signout<O>(input: SignoutInput, opts?: O): Promise<SignoutOutput> {
    const path = "/self/signout";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CreateAccessKey<O>(input: CreateAccessKeyInput, opts?: O): Promise<CreateAccessKeyOutput> {
    const path = "/access-keys";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteAccessKey<O>(input: DeleteAccessKeyInput, opts?: O): Promise<DeleteAccessKeyOutput> {
    const path = "/access-keys/"+encodeURIComponent(input.keyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.keyId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListAccessKeys<O>(input: ListAccessKeysInput, opts?: O): Promise<ListAccessKeysOutput> {
    const path = "/access-keys";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateUser<O>(input: CreateUserInput, opts?: O): Promise<CreateUserOutput> {
    const path = "/users";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  VerifyEmail<O>(input: VerifyEmailInput, opts?: O): Promise<VerifyEmailOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'')+"/verify";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateEmail<O>(input: UpdateEmailInput, opts?: O): Promise<UpdateEmailOutput> {
    const path = "/self/email";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateProfile<O>(input: UpdateProfileInput, opts?: O): Promise<UpdateProfileOutput> {
    const path = "/self";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdatePicture<O>(input: UpdatePictureInput, opts?: O): Promise<UpdatePictureOutput> {
    const path = "/self/picture";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdatePassword<O>(input: UpdatePasswordInput, opts?: O): Promise<UpdatePasswordOutput> {
    const path = "/self/password";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  StartRecovery<O>(input: StartRecoveryInput, opts?: O): Promise<StartRecoveryOutput> {
    const path = "/self/recovery";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CompleteRecovery<O>(input: CompleteRecoverInput, opts?: O): Promise<CompleteRecoverOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'')+"/recover";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  IntrospectUser<O>(input: IntrospectUserInput, opts?: O): Promise<IntrospectUserOutput> {
    const path = "/self";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeUser<O>(input: DescribeUserInput, opts?: O): Promise<DescribeUserOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListUsers<O>(input: ListUsersInput, opts?: O): Promise<ListUsersOutput> {
    const path = "/users";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  IntrospectQuota<O>(input: IntrospectQuotaInput, opts?: O): Promise<IntrospectQuotaOutput> {
    const path = "/self/quota";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  IntrospectRoles<O>(input: IntrospectRolesInput, opts?: O): Promise<IntrospectRolesOutput> {
    const path = "/self/roles";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListRoles<O>(input: ListRolesInput, opts?: O): Promise<ListRolesOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'')+"/roles";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateRoles<O>(input: UpdateRolesInput, opts?: O): Promise<UpdateRolesOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'')+"/roles";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  ListEntitlements<O>(input: ListEntitlementsInput, opts?: O): Promise<ListEntitlementsOutput> {
    const path = "/__cognito/entitlements";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  SelfDestruct<O>(input: SelfDestructInput, opts?: O): Promise<SelfDestructOutput> {
    const path = "/self";

    return this.cli.call("DELETE", this.url+path, input, opts);
  }
}

export type CreateTokenInput = {
  grantType?: string;
  username?: string;
  password?: string;
  clientId?: string;
  clientSecret?: string;
  code?: string;
  codeVerifier?: string;
  scope?: string;
  refreshToken?: string;
}

export type CreateTokenOutput = {
  token?: string;
  type?: string;
  expiresAt?: string;
  scopes?: string[];
  refreshToken?: string;
  userId?: string;
  username?: string;
}

export type IntrospectTokenInput = {
  token?: string;
}

export type IntrospectTokenOutput = {
  active?: boolean;
  token?: string;
  type?: string;
  expiresAt?: string;
  scopes?: string[];
  userId?: string;
  username?: string;
}

export type CreateAuthorizationInput = {
  clientId?: string;
  codeChallenge?: string;
  codeChallengeMethod?: string;
  redirectUri?: string;
  responseType?: string;
  scope?: string;
  state?: string;
}

export type CreateAuthorizationOutput = {
  authorizationCode?: string;
  redirectUri?: string;
}

export type IntrospectQuotaInput = Record<string, unknown>;

export type IntrospectQuotaOutput = {
  contestsPerUser?: Quota;
  problemsPerContest?: Quota;
  participantsPerContest?: Quota;
  problemsPerUser?: Quota;
}

export type IntrospectUserInput = Record<string, unknown>;

export type IntrospectUserOutput = {
  user?: User;
}

export type DescribeUserInput = {
  userId?: string;
}

export type DescribeUserOutput = {
  user?: User;
}

export type ListUsersInput = {
  offset?: number;
  size?: number;
  filters?: ListUsersInput_Filter;
}

export type ListUsersInput_Filter = {
  id?: ExpressionID[];
  username?: ExpressionString[];
}

export type ListUsersOutput = {
  total?: number;
  items?: User[];
}

export type CreateUserInput = {
  username?: string;
  fullName?: string;
  email?: string;
  password?: string;
  captcha?: string;
  locale?: string;
}

export type CreateUserOutput = {
  userId?: string;
  emailConfirmationHint?: string;
}

export type NotifyUserInput = {
  userId?: string;
  template?: string;
  parameters?: Record<string, string>;
}

export type NotifyUserOutput = {
  notificationId?: string;
}

export type VerifyEmailInput = {
  userId?: string;
  secret?: string;
}

export type VerifyEmailOutput = Record<string, unknown>;

export type UpdateEmailInput = {
  email?: string;
}

export type UpdateEmailOutput = {
  emailConfirmationHint?: string;
}

export type UpdateProfileInput = {
  patch?: string[];
  username?: string;
  email?: string;
  name?: string;
  company?: string;
  occupation?: string;
  country?: string;
  city?: string;
  birthday?: string;
}

export type UpdateProfileOutput = {
  emailConfirmationHint?: string;
}

export type UpdatePictureInput = {
  filename?: string;
  data?: string;
  offsetX?: number;
  offsetY?: number;
  size?: number;
}

export type UpdatePictureOutput = Record<string, unknown>;

export type UpdatePasswordInput = {
  currentPassword?: string;
  newPassword?: string;
}

export type UpdatePasswordOutput = Record<string, unknown>;

export type StartRecoveryInput = {
  email?: string;
  captcha?: string;
  locale?: string;
}

export type StartRecoveryOutput = {
  emailRecoveryHint?: string;
}

export type CompleteRecoverInput = {
  userId?: string;
  secret?: string;
  password?: string;
}

export type CompleteRecoverOutput = Record<string, unknown>;

export type IntrospectRolesInput = Record<string, unknown>;

export type IntrospectRolesOutput = {
  roles?: string[];
}

export type ListRolesInput = {
  userId?: string;
}

export type ListRolesOutput = {
  roles?: string[];
}

export type UpdateRolesInput = {
  userId?: string;
  roles?: string[];
}

export type UpdateRolesOutput = Record<string, unknown>;

export type ListEntitlementsInput = Record<string, unknown>;

export type ListEntitlementsOutput = {
  entitlements?: string[];
}

export type SelfDestructInput = Record<string, unknown>;

export type SelfDestructOutput = {
  deleteOn?: string;
}

export type RevokeTokenInput = {
  token?: string;
}

export type RevokeTokenOutput = Record<string, unknown>;

export type SignoutInput = {
  everywhere?: boolean;
}

export type SignoutOutput = Record<string, unknown>;

export type CreateAccessKeyInput = {
  name?: string;
  scope?: string;
  expiresIn?: number;
}

export type CreateAccessKeyOutput = {
  keyId?: string;
  secret?: string;
}

export type DeleteAccessKeyInput = {
  keyId?: string;
}

export type DeleteAccessKeyOutput = Record<string, unknown>;

export type ListAccessKeysInput = {
  offset?: number;
  size?: number;
}

export type ListAccessKeysOutput = {
  total?: number;
  items?: AccessKey[];
}

