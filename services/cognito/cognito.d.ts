import { ExpressionID, ExpressionString } from "../wellknown/expression";
import { Quota } from "./quota";
import { User } from "./user";
interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Cognito {
    private readonly cli;
    constructor(cli: Client);
    CreateToken<O>(input: CreateTokenInput, opts?: O): Promise<CreateTokenOutput>;
    IntrospectToken<O>(input: IntrospectTokenInput, opts?: O): Promise<IntrospectTokenOutput>;
    CreateAuthorization<O>(input: CreateAuthorizationInput, opts?: O): Promise<CreateAuthorizationOutput>;
    RevokeToken<O>(input: RevokeTokenInput, opts?: O): Promise<RevokeTokenOutput>;
    Signout<O>(input: SignoutInput, opts?: O): Promise<SignoutOutput>;
    CreateUser<O>(input: CreateUserInput, opts?: O): Promise<CreateUserOutput>;
    VerifyEmail<O>(input: VerifyEmailInput, opts?: O): Promise<VerifyEmailOutput>;
    UpdateEmail<O>(input: UpdateEmailInput, opts?: O): Promise<UpdateEmailOutput>;
    StartRecovery<O>(input: StartRecoveryInput, opts?: O): Promise<StartRecoveryOutput>;
    CompleteRecovery<O>(input: CompleteRecoverInput, opts?: O): Promise<CompleteRecoverOutput>;
    IntrospectUser<O>(input: IntrospectUserInput, opts?: O): Promise<IntrospectUserOutput>;
    DescribeUser<O>(input: DescribeUserInput, opts?: O): Promise<DescribeUserOutput>;
    ListUsers<O>(input: ListUsersInput, opts?: O): Promise<ListUsersOutput>;
    IntrospectQuota<O>(input: IntrospectQuotaInput, opts?: O): Promise<IntrospectQuotaOutput>;
    IntrospectRoles<O>(input: IntrospectRolesInput, opts?: O): Promise<IntrospectRolesOutput>;
    ListRoles<O>(input: ListRolesInput, opts?: O): Promise<ListRolesOutput>;
    UpdateRoles<O>(input: UpdateRolesInput, opts?: O): Promise<UpdateRolesOutput>;
    ListEntitlements<O>(input: ListEntitlementsInput, opts?: O): Promise<ListEntitlementsOutput>;
}
export declare type CreateTokenInput = {
    grantType?: string;
    username?: string;
    password?: string;
    clientId?: string;
    clientSecret?: string;
    code?: string;
    codeVerifier?: string;
    scope?: string;
    refreshToken?: string;
};
export declare type CreateTokenOutput = {
    token?: string;
    type?: string;
    expiresAt?: string;
    scopes?: string[];
    refreshToken?: string;
    userId?: string;
    username?: string;
};
export declare type IntrospectTokenInput = {
    token?: string;
};
export declare type IntrospectTokenOutput = {
    active?: boolean;
    token?: string;
    type?: string;
    expiresAt?: string;
    scopes?: string[];
    userId?: string;
    username?: string;
};
export declare type CreateAuthorizationInput = {
    clientId?: string;
    codeChallenge?: string;
    codeChallengeMethod?: string;
    redirectUri?: string;
    responseType?: string;
    scope?: string;
    state?: string;
};
export declare type CreateAuthorizationOutput = {
    authorizationCode?: string;
    redirectUri?: string;
};
export declare type IntrospectQuotaInput = Record<string, unknown>;
export declare type IntrospectQuotaOutput = {
    contestsPerUser?: Quota;
    problemsPerContest?: Quota;
    participantsPerContest?: Quota;
    problemsPerUser?: Quota;
};
export declare type IntrospectUserInput = Record<string, unknown>;
export declare type IntrospectUserOutput = {
    user?: User;
};
export declare type DescribeUserInput = {
    userId?: string;
};
export declare type DescribeUserOutput = {
    user?: User;
};
export declare type ListUsersInput = {
    offset?: number;
    size?: number;
    filters?: ListUsersInput_Filter;
};
export declare type ListUsersInput_Filter = {
    id?: ExpressionID[];
    username?: ExpressionString[];
};
export declare type ListUsersOutput = {
    total?: number;
    items?: User[];
};
export declare type CreateUserInput = {
    username?: string;
    fullName?: string;
    email?: string;
    password?: string;
    captcha?: string;
    locale?: string;
};
export declare type CreateUserOutput = {
    userId?: string;
    emailConfirmationHint?: string;
};
export declare type NotifyUserInput = {
    userId?: string;
    template?: string;
    parameters?: Record<string, string>;
};
export declare type NotifyUserOutput = {
    notificationId?: string;
};
export declare type VerifyEmailInput = {
    userId?: string;
    secret?: string;
};
export declare type VerifyEmailOutput = Record<string, unknown>;
export declare type UpdateEmailInput = {
    email?: string;
};
export declare type UpdateEmailOutput = {
    emailConfirmationHint?: string;
};
export declare type StartRecoveryInput = {
    email?: string;
    captcha?: string;
    locale?: string;
};
export declare type StartRecoveryOutput = {
    emailRecoveryHint?: string;
};
export declare type CompleteRecoverInput = {
    userId?: string;
    secret?: string;
    password?: string;
};
export declare type CompleteRecoverOutput = Record<string, unknown>;
export declare type IntrospectRolesInput = Record<string, unknown>;
export declare type IntrospectRolesOutput = {
    roles?: string[];
};
export declare type ListRolesInput = {
    userId?: string;
};
export declare type ListRolesOutput = {
    roles?: string[];
};
export declare type UpdateRolesInput = {
    userId?: string;
    roles?: string[];
};
export declare type UpdateRolesOutput = Record<string, unknown>;
export declare type ListEntitlementsInput = Record<string, unknown>;
export declare type ListEntitlementsOutput = {
    entitlements?: string[];
};
export declare type RevokeTokenInput = {
    token?: string;
};
export declare type RevokeTokenOutput = Record<string, unknown>;
export declare type SignoutInput = {
    everywhere?: boolean;
};
export declare type SignoutOutput = Record<string, unknown>;
export {};
