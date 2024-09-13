// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Policy } from "./policy"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class PolicyService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreatePolicy(input: CreatePolicyInput, opts?: any): Promise<CreatePolicyOutput> {
    const path = "/policies";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdatePolicy(input: UpdatePolicyInput, opts?: any): Promise<UpdatePolicyOutput> {
    const path = "/policies/"+encodeURIComponent(input.policyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.policyId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeletePolicy(input: DeletePolicyInput, opts?: any): Promise<DeletePolicyOutput> {
    const path = "/policies/"+encodeURIComponent(input.policyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.policyId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribePolicy(input: DescribePolicyInput, opts?: any): Promise<DescribePolicyOutput> {
    const path = "/policies/"+encodeURIComponent(input.policyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.policyId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListPolicies(input: ListPoliciesInput, opts?: any): Promise<ListPoliciesOutput> {
    const path = "/policies";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreatePolicyInput = {
  policy?: Policy;
}

export type CreatePolicyOutput = {
  policyId?: string;
}

export type UpdatePolicyInput = {
  patch?: string[];
  policyId?: string;
  policy?: Policy;
}

export type UpdatePolicyOutput = Record<string, unknown>;

export type DeletePolicyInput = {
  policyId?: string;
}

export type DeletePolicyOutput = Record<string, unknown>;

export type DescribePolicyInput = {
  policyId?: string;
}

export type DescribePolicyOutput = {
  policy?: Policy;
}

export type ListPoliciesInput = {
  offset?: number;
  size?: number;
  filters?: ListPoliciesInput_Filter;
}

export type ListPoliciesInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  subject?: ExpressionID[];
  name?: ExpressionString[];
  resource?: ExpressionEnum[];
}

export type ListPoliciesOutput = {
  total?: number;
  items?: Policy[];
}

