// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionFloat, ExpressionID, ExpressionTimestamp } from "../wellknown/expression"
import { Submission } from "./submission"

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

  ListSubmissions(input: ListSubmissionsInput, opts?: any): Promise<ListSubmissionsOutput> {
    const path = "/submissions";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateSubmissionInput = {
  problemId?: string;
  lang?: string;
  source?: string;
}

export type CreateSubmissionOutput = {
  submissionId?: string;
}

export type DescribeSubmissionInput = {
  problemId?: string;
  submissionId?: string;
}

export type DescribeSubmissionOutput = {
  submission?: Submission;
}

export type WatchSubmissionInput = {
  problemId?: string;
  submissionId?: string;
}

export type WatchSubmissionOutput = {
  submission?: Submission;
}

export type RetestSubmissionInput = {
  problemId?: string;
  submissionId?: string;
  debug?: boolean;
}

export type RetestSubmissionOutput = Record<string, unknown>;

export type ListSubmissionsInput = {
  problemId?: string;
  after?: string;
  offset?: number;
  size?: number;
  filters?: ListSubmissionsInput_Filter;
}

export type ListSubmissionsInput_Filter = {
  id?: ExpressionID[];
  problemId?: ExpressionID[];
  userId?: ExpressionID[];
  memberId?: ExpressionID[];
  submittedAt?: ExpressionTimestamp[];
  runtime?: ExpressionEnum[];
  status?: ExpressionEnum[];
  score?: ExpressionFloat[];
  percentage?: ExpressionFloat[];
}

export type ListSubmissionsOutput = {
  total?: number;
  items?: Submission[];
  nextPageCursor?: string;
  prevPageCursor?: string;
}

