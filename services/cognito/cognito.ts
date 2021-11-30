// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionID, ExpressionString } from "../wellknown/expression"
import { Quota } from "./quota"
import { User } from "./user"

interface Client {
  call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}

export class Cognito {
  private readonly cli: Client;

  constructor(cli: Client) {
    this.cli = cli;
  }

  CreateToken<O>(input: CreateTokenInput, opts: O): Promise<CreateTokenOutput> {
    return this.cli.call("eolymp.cognito.Cognito/CreateToken", input, opts);
  }

  IntrospectToken<O>(input: IntrospectTokenInput, opts: O): Promise<IntrospectTokenOutput> {
    return this.cli.call("eolymp.cognito.Cognito/IntrospectToken", input, opts);
  }

  CreateAuthorization<O>(input: CreateAuthorizationInput, opts: O): Promise<CreateAuthorizationOutput> {
    return this.cli.call("eolymp.cognito.Cognito/CreateAuthorization", input, opts);
  }

  RevokeToken<O>(input: RevokeTokenInput, opts: O): Promise<RevokeTokenOutput> {
    return this.cli.call("eolymp.cognito.Cognito/RevokeToken", input, opts);
  }

  Signout<O>(input: SignoutInput, opts: O): Promise<SignoutOutput> {
    return this.cli.call("eolymp.cognito.Cognito/Signout", input, opts);
  }

  CreateUser<O>(input: CreateUserInput, opts: O): Promise<CreateUserOutput> {
    return this.cli.call("eolymp.cognito.Cognito/CreateUser", input, opts);
  }

  VerifyEmail<O>(input: VerifyEmailInput, opts: O): Promise<VerifyEmailOutput> {
    return this.cli.call("eolymp.cognito.Cognito/VerifyEmail", input, opts);
  }

  UpdateEmail<O>(input: UpdateEmailInput, opts: O): Promise<UpdateEmailOutput> {
    return this.cli.call("eolymp.cognito.Cognito/UpdateEmail", input, opts);
  }

  StartRecovery<O>(input: StartRecoveryInput, opts: O): Promise<StartRecoveryOutput> {
    return this.cli.call("eolymp.cognito.Cognito/StartRecovery", input, opts);
  }

  CompleteRecovery<O>(input: CompleteRecoverInput, opts: O): Promise<CompleteRecoverOutput> {
    return this.cli.call("eolymp.cognito.Cognito/CompleteRecovery", input, opts);
  }

  IntrospectUser<O>(input: IntrospectUserInput, opts: O): Promise<IntrospectUserOutput> {
    return this.cli.call("eolymp.cognito.Cognito/IntrospectUser", input, opts);
  }

  DescribeUser<O>(input: DescribeUserInput, opts: O): Promise<DescribeUserOutput> {
    return this.cli.call("eolymp.cognito.Cognito/DescribeUser", input, opts);
  }

  ListUsers<O>(input: ListUsersInput, opts: O): Promise<ListUsersOutput> {
    return this.cli.call("eolymp.cognito.Cognito/ListUsers", input, opts);
  }

  IntrospectQuota<O>(input: IntrospectQuotaInput, opts: O): Promise<IntrospectQuotaOutput> {
    return this.cli.call("eolymp.cognito.Cognito/IntrospectQuota", input, opts);
  }

  IntrospectRoles<O>(input: IntrospectRolesInput, opts: O): Promise<IntrospectRolesOutput> {
    return this.cli.call("eolymp.cognito.Cognito/IntrospectRoles", input, opts);
  }

  ListRoles<O>(input: ListRolesInput, opts: O): Promise<ListRolesOutput> {
    return this.cli.call("eolymp.cognito.Cognito/ListRoles", input, opts);
  }

  UpdateRoles<O>(input: UpdateRolesInput, opts: O): Promise<UpdateRolesOutput> {
    return this.cli.call("eolymp.cognito.Cognito/UpdateRoles", input, opts);
  }

  ListEntitlements<O>(input: ListEntitlementsInput, opts: O): Promise<ListEntitlementsOutput> {
    return this.cli.call("eolymp.cognito.Cognito/ListEntitlements", input, opts);
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

export type RevokeTokenInput = {
  token?: string;
}

export type RevokeTokenOutput = Record<string, unknown>;

export type SignoutInput = {
  everywhere?: boolean;
}

export type SignoutOutput = Record<string, unknown>;

