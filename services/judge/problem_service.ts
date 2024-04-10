// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Problem, Problem_Attachment, Problem_Statement, Problem_Test } from "./problem"
import { Template } from "./template"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class ProblemService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  ImportProblem(input: ImportProblemInput, opts?: any): Promise<ImportProblemOutput> {
    const path = "/problems";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  SyncProblem(input: SyncProblemInput, opts?: any): Promise<SyncProblemOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/sync";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateProblem(input: UpdateProblemInput, opts?: any): Promise<UpdateProblemOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ListProblems(input: ListProblemsInput, opts?: any): Promise<ListProblemsOutput> {
    const path = "/problems";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeProblem(input: DescribeProblemInput, opts?: any): Promise<DescribeProblemOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeCodeTemplate(input: DescribeCodeTemplateInput, opts?: any): Promise<DescribeCodeTemplateOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/templates/"+encodeURIComponent(input.templateId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.templateId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  LookupCodeTemplate(input: LookupCodeTemplateInput, opts?: any): Promise<LookupCodeTemplateOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/lookup-template";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListStatements(input: ListStatementsInput, opts?: any): Promise<ListStatementsOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/statements";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListAttachments(input: ListAttachmentsInput, opts?: any): Promise<ListAttachmentsOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/attachments";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListExamples(input: ListExamplesInput, opts?: any): Promise<ListExamplesOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/examples";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DeleteProblem(input: DeleteProblemInput, opts?: any): Promise<DeleteProblemOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  RetestProblem(input: RetestProblemInput, opts?: any): Promise<RetestProblemOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/retest";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type ImportProblemInput = {
  contestId?: string;
  importId?: string;
  index?: number;
  submitLimit?: number;
  scoreByBestTestset?: boolean;
}

export type ImportProblemOutput = {
  problemId?: string;
}

export type SyncProblemInput = {
  contestId?: string;
  problemId?: string;
}

export type SyncProblemOutput = Record<string, unknown>;

export type UpdateProblemInput = {
  contestId?: string;
  problemId?: string;
  index?: number;
  submitLimit?: number;
  scoreByBestTestset?: boolean;
}

export type UpdateProblemOutput = Record<string, unknown>;

export type DeleteProblemInput = {
  contestId?: string;
  problemId?: string;
}

export type DeleteProblemOutput = Record<string, unknown>;

export type RetestProblemInput = {
  contestId?: string;
  problemId?: string;
}

export type RetestProblemOutput = Record<string, unknown>;

export type ListProblemsInput = {
  contestId?: string;
  offset?: number;
  size?: number;
}

export type ListProblemsOutput = {
  total?: number;
  items?: Problem[];
}

export type DescribeProblemInput = {
  contestId?: string;
  problemId?: string;
  problemErn?: string;
}

export type DescribeProblemOutput = {
  problem?: Problem;
}

export type DescribeCodeTemplateInput = {
  contestId?: string;
  problemId?: string;
  templateId?: string;
  templateErn?: string;
}

export type DescribeCodeTemplateOutput = {
  template?: Template;
}

export type LookupCodeTemplateInput = {
  contestId?: string;
  problemId?: string;
  problemErn?: string;
  runtime?: string;
}

export type LookupCodeTemplateOutput = {
  template?: Template;
}

export type ListStatementsInput = {
  contestId?: string;
  problemId?: string;
}

export type ListStatementsOutput = {
  total?: number;
  items?: Problem_Statement[];
}

export type ListAttachmentsInput = {
  contestId?: string;
  problemId?: string;
}

export type ListAttachmentsOutput = {
  total?: number;
  items?: Problem_Attachment[];
}

export type ListExamplesInput = {
  contestId?: string;
  problemId?: string;
}

export type ListExamplesOutput = {
  total?: number;
  items?: Problem_Test[];
}

