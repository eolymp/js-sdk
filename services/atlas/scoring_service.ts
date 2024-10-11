// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Score } from "./scoring_score"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class ScoringService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeScore(input: DescribeScoreInput, opts?: any): Promise<DescribeScoreOutput> {
    const path = "/scores/"+encodeURIComponent(input.memberId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeProblemGrading(input: DescribeProblemGradingInput, opts?: any): Promise<DescribeProblemGradingOutput> {
    const path = "/grading";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type ScoreChangedEvent = {
  problemId?: string;
  memberId?: string;
  before?: Score;
  after?: Score;
}

export type DescribeScoreInput = {
  memberId?: string;
}

export type DescribeScoreOutput = {
  score?: Score;
}

export type DescribeProblemGradingInput = Record<string, unknown>;

export type DescribeProblemGradingOutput = {
  ranges?: DescribeProblemGradingOutput_Range[];
}

export type DescribeProblemGradingOutput_Range = {
  grade?: number;
  upperBound?: number;
}

