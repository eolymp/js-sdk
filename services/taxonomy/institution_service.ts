// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Institution } from "./institution"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class InstitutionService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  ListInstitutions(input: ListInstitutionsInput, opts?: any): Promise<ListInstitutionsOutput> {
    const path = "/institutions";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeInstitution(input: DescribeInstitutionInput, opts?: any): Promise<DescribeInstitutionOutput> {
    const path = "/institutions/"+encodeURIComponent(input.institutionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.institutionId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type DescribeInstitutionInput = {
  institutionId?: string;
}

export type DescribeInstitutionOutput = {
  institution?: Institution;
}

export type ListInstitutionsInput = {
  offset?: number;
  size?: number;
  filters?: ListInstitutionsInput_Filter;
}

export type ListInstitutionsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  name?: ExpressionString[];
  abbr?: ExpressionString[];
  countryId?: ExpressionID[];
  regionId?: ExpressionID[];
  class?: ExpressionEnum[];
  type?: ExpressionEnum[];
  governance?: ExpressionEnum[];
}

export type ListInstitutionsOutput = {
  total?: number;
  items?: Institution[];
}

