// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class EditorService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  PrintCode(input: PrintCodeInput, opts?: any): Promise<PrintCodeOutput> {
    const path = "/editor:print";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type PrintCodeInput = {
  source?: string;
}

export type PrintCodeOutput = Record<string, unknown>;

