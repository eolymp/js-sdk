// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E>(method: string, args: R): Promise<E>;
}

export class Keeper {
  private readonly cli: Client;

  constructor(cli: Client) {
    this.cli = cli;
  }

  CreateObject(input: CreateObjectInput): Promise<CreateObjectOutput> {
    return this.cli.call("eolymp.keeper.Keeper/CreateObject", input);
  }

  DescribeObject(input: DescribeObjectInput): Promise<DescribeObjectOutput> {
    return this.cli.call("eolymp.keeper.Keeper/DescribeObject", input);
  }

  DownloadObject(input: DownloadObjectInput): Promise<DownloadObjectOutput> {
    return this.cli.call("eolymp.keeper.Keeper/DownloadObject", input);
  }
}

export type CreateObjectInput = {
  data?: string;
}

export type CreateObjectOutput = {
  key?: string;
}

export type DescribeObjectInput = {
  key?: string;
}

export type DescribeObjectOutput = Record<string, unknown>;

export type DownloadObjectInput = {
  key?: string;
}

export type DownloadObjectOutput = {
  data?: string;
}

