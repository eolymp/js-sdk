// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Run } from "./run"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class Playground {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateRun(input: CreateRunInput, opts?: any): Promise<CreateRunOutput> {
    const path = "/playground/runs";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeRun(input: DescribeRunInput, opts?: any): Promise<DescribeRunOutput> {
    const path = "/playground/runs/"+encodeURIComponent(input.runId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.runId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateRunInput = {
  runtime?: string;
  source?: string;
  inputUrl?: string;
  problemUrl?: string;
}

export type CreateRunOutput = {
  runId?: string;
}

export type DescribeRunInput = {
  runId?: string;
}

export type DescribeRunOutput = {
  run?: Run;
}

