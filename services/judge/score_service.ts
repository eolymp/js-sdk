// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Result } from "./result"
import { Score } from "./score"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class ScoreService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  IntrospectScore(input: IntrospectScoreInput, opts?: any): Promise<IntrospectScoreOutput> {
    const path = "/introspect/score";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeScore(input: DescribeScoreInput, opts?: any): Promise<DescribeScoreOutput> {
    const path = "/participants/"+encodeURIComponent(input.participantId||'')+"/score";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.participantId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ImportScore(input: ImportScoreInput, opts?: any): Promise<ImportScoreOutput> {
    const path = "/participants/"+encodeURIComponent(input.participantId||'')+"/scores";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.participantId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ExportScore(input: ExportScoreInput, opts?: any): Promise<ExportScoreOutput> {
    const path = "/participants/"+encodeURIComponent(input.participantId||'')+"/scores";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.participantId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListResult(input: ListResultInput, opts?: any): Promise<ListResultOutput> {
    const path = "/results";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  RebuildScore(input: RebuildScoreInput, opts?: any): Promise<RebuildScoreOutput> {
    const path = "/rebuild";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type RebuildScoreInput = {
  contestId?: string;
}

export type RebuildScoreOutput = {
  activityId?: string;
}

export type IntrospectScoreInput = {
  contestId?: string;
}

export type IntrospectScoreOutput = {
  score?: Score;
}

export type DescribeScoreInput = {
  contestId?: string;
  participantId?: string;
  mode?: string;
  timeOffset?: number;
}

export type DescribeScoreOutput = {
  score?: Score;
}

export type ImportScoreInput = {
  contestId?: string;
  participantId?: string;
  scores?: Score[];
}

export type ImportScoreOutput = Record<string, unknown>;

export type ExportScoreInput = {
  contestId?: string;
  participantId?: string;
}

export type ExportScoreOutput = {
  scores?: Score[];
}

export type ListResultInput = {
  contestId?: string;
  mode?: string;
  timeOffset?: number;
  offset?: number;
  size?: number;
}

export type ListResultOutput = {
  total?: number;
  items?: Result[];
}

