// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Entry } from "./entry"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class EntryService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  ListEntries(input: ListEntriesInput, opts?: any): Promise<ListEntriesOutput> {
    const path = "/feed";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeEntry(input: DescribeEntryInput, opts?: any): Promise<DescribeEntryOutput> {
    const path = "/feed/"+encodeURIComponent(input.entryId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.entryId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type ListEntriesInput = {
  size?: number;
  after?: string;
}

export type ListEntriesOutput = {
  total?: number;
  items?: Entry[];
}

export type DescribeEntryInput = {
  entryId?: string;
}

export type DescribeEntryOutput = {
  entry?: Entry;
}

