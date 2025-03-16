// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class SSOService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  SignonRequest(input: SignonRequestInput, opts?: any): Promise<SignonRequestOutput> {
    const path = "/sso:request";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  SignonExchange(input: SignonExchangeInput, opts?: any): Promise<SignonExchangeOutput> {
    const path = "/sso:exchange";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type SignonRequestInput = {
  type?: string;
  callbackUri?: string;
}

export type SignonRequestOutput = {
  redirectUri?: string;
}

export type SignonExchangeInput = {
  code?: string;
  state?: string;
}

export type SignonExchangeOutput = {
  accessToken?: string;
  tokenType?: string;
  expiresIn?: number;
  refreshToken?: string;
}

