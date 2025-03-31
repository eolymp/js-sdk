// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionInt, ExpressionString, ExpressionTimestamp } from "../wellknown/expression"
import { Activity } from "./activity"
import { Contest } from "./contest"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class ContestService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateContest(input: CreateContestInput, opts?: any): Promise<CreateContestOutput> {
    const path = "/contests";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteContest(input: DeleteContestInput, opts?: any): Promise<DeleteContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  UpdateContest(input: UpdateContestInput, opts?: any): Promise<UpdateContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  CopyContest(input: CopyContestInput, opts?: any): Promise<CopyContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/copy";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeContest(input: DescribeContestInput, opts?: any): Promise<DescribeContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListContests(input: ListContestsInput, opts?: any): Promise<ListContestsOutput> {
    const path = "/contests";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  OpenContest(input: OpenContestInput, opts?: any): Promise<OpenContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/open";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CloseContest(input: CloseContestInput, opts?: any): Promise<CloseContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/close";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  SuspendContest(input: SuspendContestInput, opts?: any): Promise<SuspendContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/suspend";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  FreezeContest(input: FreezeContestInput, opts?: any): Promise<FreezeContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/freeze";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  FinalizeContest(input: FinalizeContestInput, opts?: any): Promise<FinalizeContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/finalize";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ResumeContest(input: ResumeContestInput, opts?: any): Promise<ResumeContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/resume";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ListActivities(input: ListActivitiesInput, opts?: any): Promise<ListActivitiesOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/activities";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeContestUsage(input: DescribeContestUsageInput, opts?: any): Promise<DescribeContestUsageOutput> {
    const path = "/usage/contests";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type ContestChangedEvent = {
  before?: Contest;
  after?: Contest;
}

export type CreateContestInput = {
  contest?: Contest;
}

export type CreateContestOutput = {
  contestId?: string;
}

export type DeleteContestInput = {
  contestId?: string;
}

export type DeleteContestOutput = Record<string, unknown>;

export type UpdateContestInput = {
  patch?: string[];
  contestId?: string;
  contest?: Contest;
}

export type UpdateContestOutput = Record<string, unknown>;

export type CopyContestInput = {
  contestId?: string;
  copyScope?: string[];
  copyName?: string;
  copyVisibility?: string;
}

export type CopyContestOutput = {
  copyContestId?: string;
}

export type DescribeContestInput = {
  contestId?: string;
}

export type DescribeContestOutput = {
  contest?: Contest;
}

export type ListContestsInput = {
  offset?: number;
  size?: number;
  search?: string;
  filters?: ListContestsInput_Filter;
}

export type ListContestsInput_Filter = {
  id?: ExpressionID[];
  name?: ExpressionString[];
  startsAt?: ExpressionTimestamp[];
  endsAt?: ExpressionTimestamp[];
  public?: ExpressionBool[];
  visibility?: ExpressionEnum[];
  format?: ExpressionEnum[];
  status?: ExpressionEnum[];
  featured?: ExpressionBool[];
  year?: ExpressionInt[];
  scale?: ExpressionEnum[];
  series?: ExpressionEnum[];
  difficulty?: ExpressionInt[];
  country?: ExpressionEnum[];
  region?: ExpressionEnum[];
  city?: ExpressionString[];
}

export type ListContestsOutput = {
  items?: Contest[];
  total?: number;
}

export type OpenContestInput = {
  contestId?: string;
}

export type OpenContestOutput = Record<string, unknown>;

export type CloseContestInput = {
  contestId?: string;
}

export type CloseContestOutput = Record<string, unknown>;

export type SuspendContestInput = {
  contestId?: string;
}

export type SuspendContestOutput = Record<string, unknown>;

export type FreezeContestInput = {
  contestId?: string;
}

export type FreezeContestOutput = Record<string, unknown>;

export type FinalizeContestInput = {
  contestId?: string;
}

export type FinalizeContestOutput = Record<string, unknown>;

export type ResumeContestInput = {
  contestId?: string;
}

export type ResumeContestOutput = Record<string, unknown>;

export type WatchContestInput = {
  contestId?: string;
}

export type WatchContestOutput = {
  contest?: Contest;
}

export type ListActivitiesInput = {
  contestId?: string;
  offset?: number;
  size?: number;
}

export type ListActivitiesOutput = {
  total?: number;
  items?: Activity[];
}

export type DescribeContestUsageInput = {
  periodStart?: string;
  periodEnd?: string;
}

export type DescribeContestUsageOutput = {
  totalContests?: number;
  activeContests?: number;
  monthlyContests?: number;
}

