import { ExpressionID, ExpressionString } from "../wellknown/expression";
import { Quota } from "./quota";
import { User } from "./user";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Cognito {
    private readonly cli;
    constructor(cli: Client);
    CreateToken(input: CreateTokenInput): Promise<CreateTokenOutput>;
    IntrospectToken(input: IntrospectTokenInput): Promise<IntrospectTokenOutput>;
    CreateAuthorization(input: CreateAuthorizationInput): Promise<CreateAuthorizationOutput>;
    CreateUser(input: CreateUserInput): Promise<CreateUserOutput>;
    VerifyEmail(input: VerifyEmailInput): Promise<VerifyEmailOutput>;
    UpdateEmail(input: UpdateEmailInput): Promise<UpdateEmailOutput>;
    StartRecovery(input: StartRecoveryInput): Promise<StartRecoveryOutput>;
    CompleteRecovery(input: CompleteRecoverInput): Promise<CompleteRecoverOutput>;
    IntrospectUser(input: IntrospectUserInput): Promise<IntrospectUserOutput>;
    DescribeUser(input: DescribeUserInput): Promise<DescribeUserOutput>;
    ListUsers(input: ListUsersInput): Promise<ListUsersOutput>;
    IntrospectQuota(input: IntrospectQuotaInput): Promise<IntrospectQuotaOutput>;
    IntrospectRoles(input: IntrospectRolesInput): Promise<IntrospectRolesOutput>;
    ListRoles(input: ListRolesInput): Promise<ListRolesOutput>;
    UpdateRoles(input: UpdateRolesInput): Promise<UpdateRolesOutput>;
    ListServiceEntitlements(input: ListServiceEntitlementsInput): Promise<ListServiceEntitlementsOutput>;
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
export declare type ListServiceEntitlementsInput = Record<string, unknown>;
export declare type ListServiceEntitlementsOutput = {
    entitlements?: string[];
};
export {};
