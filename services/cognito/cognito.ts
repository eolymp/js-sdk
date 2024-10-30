// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { CreateAccessKeyInput, CreateAccessKeyOutput, DeleteAccessKeyInput, DeleteAccessKeyOutput, ListAccessKeysInput, ListAccessKeysOutput } from "./access_key_service"
import { CompleteRecoverInput, CompleteRecoverOutput, CreateUserInput, CreateUserOutput, DescribeUserInput, DescribeUserOutput, IntrospectQuotaInput, IntrospectQuotaOutput, IntrospectUserInput, IntrospectUserOutput, ListUsersInput, ListUsersOutput, ResendEmailVerificationInput, ResendEmailVerificationOutput, SelfDestructInput, SelfDestructOutput, StartRecoveryInput, StartRecoveryOutput, UpdatePasswordInput, UpdatePasswordOutput, UpdatePictureInput, UpdatePictureOutput, UpdateProfileInput, UpdateProfileOutput, VerifyEmailInput, VerifyEmailOutput } from "./user_service"

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

