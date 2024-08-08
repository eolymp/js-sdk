// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool } from "../wellknown/expression"
import { Module } from "./module"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class ModuleService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateModule(input: CreateModuleInput, opts?: any): Promise<CreateModuleOutput> {
    const path = "/modules";

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  UpdateModule(input: UpdateModuleInput, opts?: any): Promise<UpdateModuleOutput> {
    const path = "/modules/"+encodeURIComponent(input.moduleId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.moduleId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteModule(input: DeleteModuleInput, opts?: any): Promise<DeleteModuleOutput> {
    const path = "/modules/"+encodeURIComponent(input.moduleId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.moduleId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeModule(input: DescribeModuleInput, opts?: any): Promise<DescribeModuleOutput> {
    const path = "/modules/"+encodeURIComponent(input.moduleId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.moduleId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListModules(input: ListModulesInput, opts?: any): Promise<ListModulesOutput> {
    const path = "/modules";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateModuleInput = {
  module?: Module;
}

export type CreateModuleOutput = {
  moduleId?: string;
}

export type UpdateModuleInput = {
  patch?: string[];
  moduleId?: string;
  module?: Module;
}

export type UpdateModuleOutput = Record<string, unknown>;

export type DeleteModuleInput = {
  moduleId?: string;
}

export type DeleteModuleOutput = Record<string, unknown>;

export type DescribeModuleInput = {
  moduleId?: string;
  extra?: string[];
}

export type DescribeModuleOutput = {
  module?: Module;
}

export type ListModulesInput = {
  offset?: number;
  size?: number;
  filters?: ListModulesInput_Filter;
  sort?: string;
  order?: string;
  extra?: string[];
}

export type ListModulesInput_Filter = {
  query?: string;
  draft?: ExpressionBool[];
}

export type ListModulesOutput = {
  total?: number;
  items?: Module[];
}

