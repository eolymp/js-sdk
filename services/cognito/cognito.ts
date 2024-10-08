// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionID, ExpressionString } from "../wellknown/expression"
import { AccessKey } from "./access_key"
import { Quota } from "./quota"
import { User } from "./user"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class Cognito {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  Signout(input: SignoutInput, opts?: any): Promise<SignoutOutput> {
    const path = "/self/signout";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CreateAccessKey(input: CreateAccessKeyInput, opts?: any): Promise<CreateAccessKeyOutput> {
    const path = "/access-keys";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteAccessKey(input: DeleteAccessKeyInput, opts?: any): Promise<DeleteAccessKeyOutput> {
    const path = "/access-keys/"+encodeURIComponent(input.keyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.keyId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListAccessKeys(input: ListAccessKeysInput, opts?: any): Promise<ListAccessKeysOutput> {
    const path = "/access-keys";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateUser(input: CreateUserInput, opts?: any): Promise<CreateUserOutput> {
    const path = "/users";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  VerifyEmail(input: VerifyEmailInput, opts?: any): Promise<VerifyEmailOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'')+"/verify";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ResendEmailVerification(input: ResendEmailVerificationInput, opts?: any): Promise<ResendEmailVerificationOutput> {
    const path = "/self/email/resend-verification";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateEmail(input: UpdateEmailInput, opts?: any): Promise<UpdateEmailOutput> {
    const path = "/self/email";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateProfile(input: UpdateProfileInput, opts?: any): Promise<UpdateProfileOutput> {
    const path = "/self";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdatePicture(input: UpdatePictureInput, opts?: any): Promise<UpdatePictureOutput> {
    const path = "/self/picture";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdatePassword(input: UpdatePasswordInput, opts?: any): Promise<UpdatePasswordOutput> {
    const path = "/self/password";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  IntrospectUser(input: IntrospectUserInput, opts?: any): Promise<IntrospectUserOutput> {
    const path = "/self";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeUser(input: DescribeUserInput, opts?: any): Promise<DescribeUserOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListUsers(input: ListUsersInput, opts?: any): Promise<ListUsersOutput> {
    const path = "/users";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  IntrospectQuota(input: IntrospectQuotaInput, opts?: any): Promise<IntrospectQuotaOutput> {
    const path = "/self/quota";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  IntrospectRoles(input: IntrospectRolesInput, opts?: any): Promise<IntrospectRolesOutput> {
    const path = "/self/roles";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListRoles(input: ListRolesInput, opts?: any): Promise<ListRolesOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'')+"/roles";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateRoles(input: UpdateRolesInput, opts?: any): Promise<UpdateRolesOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'')+"/roles";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  StartRecovery(input: StartRecoveryInput, opts?: any): Promise<StartRecoveryOutput> {
    const path = "/self/recovery";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CompleteRecovery(input: CompleteRecoverInput, opts?: any): Promise<CompleteRecoverOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'')+"/recover";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  SelfDestruct(input: SelfDestructInput, opts?: any): Promise<SelfDestructOutput> {
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
  scope?: string;
  expire?: string;
  subject?: string;
  audience?: string;
  issuer?: string;
  name?: string;
  nickname?: string;
  picture?: string;
  email?: string;
  emailVerified?: boolean;
  locale?: string;
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
  country?: string;
  birthday?: string;
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
  locale?: string;
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

export type ResendEmailVerificationInput = Record<string, unknown>;

export type ResendEmailVerificationOutput = {
  emailConfirmationHint?: string;
}

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

export type SelfDestructInput = Record<string, unknown>;

export type SelfDestructOutput = {
  deleteOn?: string;
}

export type RevokeTokenInput = {
  token?: string;
}

export type RevokeTokenOutput = Record<string, unknown>;

export type SigninInput = {
  username?: string;
  password?: string;
}

export type SigninOutput = {
  user?: User;
}

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

