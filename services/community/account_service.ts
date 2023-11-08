// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Member } from "./member"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class AccountService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateAccount(input: CreateAccountInput, opts?: any): Promise<CreateAccountOutput> {
    const path = "/account";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeAccount(input: DescribeAccountInput, opts?: any): Promise<DescribeAccountOutput> {
    const path = "/account";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateAccount(input: UpdateAccountInput, opts?: any): Promise<UpdateAccountOutput> {
    const path = "/account";

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  UploadPicture(input: UploadPictureInput, opts?: any): Promise<UploadPictureOutput> {
    const path = "/account/picture";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteAccount(input: DeleteAccountInput, opts?: any): Promise<DeleteAccountOutput> {
    const path = "/account";

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ResendVerification(input: ResendVerificationInput, opts?: any): Promise<ResendVerificationOutput> {
    const path = "/account/verification/resend";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CompleteVerification(input: CompleteVerificationInput, opts?: any): Promise<CompleteVerificationOutput> {
    const path = "/account/verification/complete";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  StartRecovery(input: StartRecoveryInput, opts?: any): Promise<StartRecoveryOutput> {
    const path = "/account/recovery/start";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CompleteRecovery(input: CompleteRecoverInput, opts?: any): Promise<CompleteRecoverOutput> {
    const path = "/account/recovery/complete";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type CreateAccountInput = {
  member?: Member;
  captcha?: string;
}

export type CreateAccountOutput = {
  memberId?: string;
  hint?: string;
}

export type DescribeAccountInput = Record<string, unknown>;

export type DescribeAccountOutput = {
  member?: Member;
  team?: Member;
}

export type UpdateAccountInput = {
  patch?: string[];
  currentPassword?: string;
  member?: Member;
}

export type UpdateAccountOutput = {
  hint?: string;
}

export type UploadPictureInput = {
  filename?: string;
  data?: string;
  offsetX?: number;
  offsetY?: number;
  size?: number;
}

export type UploadPictureOutput = {
  pictureUrl?: string;
}

export type DeleteAccountInput = Record<string, unknown>;

export type DeleteAccountOutput = Record<string, unknown>;

export type ResendVerificationInput = Record<string, unknown>;

export type ResendVerificationOutput = Record<string, unknown>;

export type CompleteVerificationInput = {
  code?: string;
  memberId?: string;
}

export type CompleteVerificationOutput = Record<string, unknown>;

export type StartRecoveryInput = {
  email?: string;
  locale?: string;
  captcha?: string;
}

export type StartRecoveryOutput = {
  hint?: string;
}

export type CompleteRecoverInput = {
  code?: string;
  password?: string;
  subject?: string;
}

export type CompleteRecoverOutput = Record<string, unknown>;

