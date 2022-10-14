// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Job } from "./job"
import { Language } from "./language"
import { Runtime } from "./runtime"
import { Task } from "./task"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts: O): Promise<E>;
}

export class Executor {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeLanguage<O>(input: DescribeLanguageInput, opts?: O): Promise<DescribeLanguageOutput> {
    const path = "/languages/"+encodeURIComponent(input.languageId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.languageId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListLanguages<O>(input: ListLanguagesInput, opts?: O): Promise<ListLanguagesOutput> {
    const path = "/languages";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeRuntime<O>(input: DescribeRuntimeInput, opts?: O): Promise<DescribeRuntimeOutput> {
    const path = "/runtime/"+encodeURIComponent(input.runtimeId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.runtimeId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListRuntime<O>(input: ListRuntimeInput, opts?: O): Promise<ListRuntimeOutput> {
    const path = "/runtime";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeCodeTemplate<O>(input: DescribeCodeTemplateInput, opts?: O): Promise<DescribeCodeTemplateOutput> {
    const path = "/runtime/"+encodeURIComponent(input.runtimeId||'')+"/template";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.runtimeId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateTaskInput = {
  task?: Task;
  job?: Job;
}

export type CreateTaskOutput = Record<string, unknown>;

export type DescribeLanguageInput = {
  languageId?: string;
}

export type DescribeLanguageOutput = {
  language?: Language;
}

export type ListLanguagesInput = {
  filters?: ListLanguagesInput_Filter;
}

export type ListLanguagesInput_Filter = {
  id?: ExpressionID[];
  name?: ExpressionString[];
  deprecated?: ExpressionBool[];
}

export type ListLanguagesOutput = {
  items?: Language[];
}

export type DescribeRuntimeInput = {
  runtimeId?: string;
}

export type DescribeRuntimeOutput = {
  runtime?: Runtime;
}

export type ListRuntimeInput = {
  filters?: ListRuntimeInput_Filter;
}

export type ListRuntimeInput_Filter = {
  id?: ExpressionID[];
  lang?: ExpressionID[];
  version?: ExpressionID[];
  name?: ExpressionString[];
  deprecated?: ExpressionBool[];
}

export type ListRuntimeOutput = {
  items?: Runtime[];
}

export type DescribeCodeTemplateInput = {
  runtimeId?: string;
}

export type DescribeCodeTemplateOutput = {
  template?: string;
}

