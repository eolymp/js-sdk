// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Language } from "./language"
import { Runtime } from "./runtime"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class RuntimeService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeLanguage(input: DescribeLanguageInput, opts?: any): Promise<DescribeLanguageOutput> {
    const path = "/languages/"+encodeURIComponent(input.languageId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.languageId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListLanguages(input: ListLanguagesInput, opts?: any): Promise<ListLanguagesOutput> {
    const path = "/languages";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeRuntime(input: DescribeRuntimeInput, opts?: any): Promise<DescribeRuntimeOutput> {
    const path = "/runtime/"+encodeURIComponent(input.runtimeId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.runtimeId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListRuntimes(input: ListRuntimesInput, opts?: any): Promise<ListRuntimesOutput> {
    const path = "/runtime";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeCodeTemplate(input: DescribeCodeTemplateInput, opts?: any): Promise<DescribeCodeTemplateOutput> {
    const path = "/runtime/"+encodeURIComponent(input.runtimeId||'')+"/template";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.runtimeId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

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
  type?: ExpressionEnum[];
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

export type ListRuntimesInput = {
  filters?: ListRuntimesInput_Filter;
}

export type ListRuntimesInput_Filter = {
  id?: ExpressionID[];
  lang?: ExpressionID[];
  version?: ExpressionID[];
  name?: ExpressionString[];
  deprecated?: ExpressionBool[];
  type?: ExpressionEnum[];
}

export type ListRuntimesOutput = {
  items?: Runtime[];
}

export type DescribeCodeTemplateInput = {
  runtimeId?: string;
}

export type DescribeCodeTemplateOutput = {
  template?: string;
}

