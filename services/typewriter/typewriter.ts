// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: O): Promise<E>;
}

export class Typewriter {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  UploadAsset<O>(input: UploadAssetInput, opts?: O): Promise<UploadAssetOutput> {
    const path = "/assets";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type UploadAssetInput = {
  filename?: string;
  data?: string;
}

export type UploadAssetOutput = {
  link?: string;
}

