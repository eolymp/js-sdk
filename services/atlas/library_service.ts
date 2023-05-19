// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionFloat, ExpressionID, ExpressionInt } from "../wellknown/expression"
import { Problem } from "./problem"
import { Statement } from "./statement"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class LibraryService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateProblem(input: CreateProblemInput, opts?: any): Promise<CreateProblemOutput> {
    const path = "/problems";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteProblem(input: DeleteProblemInput, opts?: any): Promise<DeleteProblemOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeProblem(input: DescribeProblemInput, opts?: any): Promise<DescribeProblemOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListProblems(input: ListProblemsInput, opts?: any): Promise<ListProblemsOutput> {
    const path = "/problems";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateProblemInput = {
  problem?: Problem;
  statement?: Statement;
}

export type CreateProblemOutput = {
  problemId?: string;
}

export type DeleteProblemInput = {
  problemId?: string;
}

export type DeleteProblemOutput = Record<string, unknown>;

export type DescribeProblemInput = {
  problemId?: string;
  problemErn?: string;
}

export type DescribeProblemOutput = {
  problem?: Problem;
}

export type ListProblemsInput = {
  offset?: number;
  size?: number;
  filters?: ListProblemsInput_Filter;
}

export type ListProblemsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  topicId?: ExpressionID[];
  isVisible?: ExpressionBool[];
  isPrivate?: ExpressionBool[];
  number?: ExpressionInt[];
  difficulty?: ExpressionInt[];
  status?: ExpressionEnum[];
  score?: ExpressionFloat[];
  isBookmarked?: ExpressionBool[];
}

export type ListProblemsOutput = {
  total?: number;
  items?: Problem[];
}

export type UpdateVisibilityInput = {
  problemId?: string;
  visible?: boolean;
}

export type UpdateVisibilityOutput = Record<string, unknown>;

export type UpdatePrivacyInput = {
  problemId?: string;
  private?: boolean;
}

export type UpdatePrivacyOutput = Record<string, unknown>;

export type UpdateProblemInput = {
  patch?: string[];
  problemId?: string;
  problem?: Problem;
}

export type UpdateProblemOutput = Record<string, unknown>;
