// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID } from "../wellknown/expression"
import { LinkedAccount } from "./linked_account"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class LinkedAccountService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeLinkedAccount(input: DescribeLinkedAccountInput, opts?: any): Promise<DescribeLinkedAccountOutput> {
    const path = "/linked-accounts/"+encodeURIComponent(input.linkId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.linkId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListLinkedAccounts(input: ListLinkedAccountsInput, opts?: any): Promise<ListLinkedAccountsOutput> {
    const path = "/linked-accounts";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DeleteLinkedAccount(input: DeleteLinkedAccountInput, opts?: any): Promise<DeleteLinkedAccountOutput> {
    const path = "/linked-accounts/"+encodeURIComponent(input.linkId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.linkId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }
}

export type DescribeLinkedAccountInput = {
  linkId?: string;
}

export type DescribeLinkedAccountOutput = {
  link?: LinkedAccount;
}

export type ListLinkedAccountsInput = {
  offset?: number;
  size?: number;
  filters?: ListLinkedAccountsInput_Filter;
}

export type ListLinkedAccountsInput_Filter = {
  id?: ExpressionID[];
  type?: ExpressionEnum[];
}

export type ListLinkedAccountsOutput = {
  total?: number;
  items?: LinkedAccount[];
}

export type DeleteLinkedAccountInput = {
  linkId?: string;
}

export type DeleteLinkedAccountOutput = Record<string, unknown>;

