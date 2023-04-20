// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { CreateSubmissionInput, CreateSubmissionOutput, DescribeSubmissionInput, DescribeSubmissionOutput, RetestSubmissionInput, RetestSubmissionOutput } from "./atlas"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class SubmissionService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateSubmission(input: CreateSubmissionInput, opts?: any): Promise<CreateSubmissionOutput> {
    const path = "/submissions";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  RetestSubmission(input: RetestSubmissionInput, opts?: any): Promise<RetestSubmissionOutput> {
    const path = "/submissions/"+encodeURIComponent(input.submissionId||'')+"/retest";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.submissionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeSubmission(input: DescribeSubmissionInput, opts?: any): Promise<DescribeSubmissionOutput> {
    const path = "/submissions/"+encodeURIComponent(input.submissionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.submissionId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

