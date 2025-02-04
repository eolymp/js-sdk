// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Node } from "../ecm/node"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class SubmissionAssistantService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  RequestDebugAssistance(input: RequestDebugAssistanceInput, opts?: any): Promise<RequestDebugAssistanceOutput> {
    const path = "/submissions/"+encodeURIComponent(input.submissionId||'')+"/assistant:debug";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.submissionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeDebugAssistance(input: DescribeDebugAssistanceInput, opts?: any): Promise<DescribeDebugAssistanceOutput> {
    const path = "/submissions/"+encodeURIComponent(input.submissionId||'')+"/assistant:debug";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.submissionId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  RateDebugAssistance(input: RateDebugAssistanceInput, opts?: any): Promise<RateDebugAssistanceOutput> {
    const path = "/submissions/"+encodeURIComponent(input.submissionId||'')+"/assistant:rate";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.submissionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type DebugAssistanceMessage = {
  id?: string;
  locale?: string;
  message?: Node;
  rating?: number;
}

export type RequestDebugAssistanceInput = {
  submissionId?: string;
  locale?: string;
}

export type RequestDebugAssistanceOutput = {
  message?: DebugAssistanceMessage;
}

export type DescribeDebugAssistanceInput = {
  submissionId?: string;
}

export type DescribeDebugAssistanceOutput = {
  message?: DebugAssistanceMessage;
}

export type RateDebugAssistanceInput = {
  submissionId?: string;
  rating?: number;
}

export type RateDebugAssistanceOutput = Record<string, unknown>;

