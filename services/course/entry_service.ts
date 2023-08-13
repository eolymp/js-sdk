// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionID, ExpressionString } from "../wellknown/expression"
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

  CreateEntry(input: CreateEntryInput, opts?: any): Promise<CreateEntryOutput> {
    const path = "/entries";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateEntry(input: UpdateEntryInput, opts?: any): Promise<UpdateEntryOutput> {
    const path = "/entries/"+encodeURIComponent(input.entryId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.entryId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  RenameEntry(input: RenameEntryInput, opts?: any): Promise<RenameEntryOutput> {
    const path = "/entries/"+encodeURIComponent(input.entryId||'')+"/title";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.entryId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  MoveEntry(input: MoveEntryInput, opts?: any): Promise<MoveEntryOutput> {
    const path = "/entries/"+encodeURIComponent(input.entryId||'')+"/position";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.entryId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteEntry(input: DeleteEntryInput, opts?: any): Promise<DeleteEntryOutput> {
    const path = "/entries/"+encodeURIComponent(input.entryId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.entryId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeEntry(input: DescribeEntryInput, opts?: any): Promise<DescribeEntryOutput> {
    const path = "/entries/"+encodeURIComponent(input.entryId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.entryId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListEntries(input: ListEntriesInput, opts?: any): Promise<ListEntriesOutput> {
    const path = "/entries";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeTOC(input: DescribeTOCInput, opts?: any): Promise<DescribeTOCOutput> {
    const path = "/toc";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateEntryInput = {
  entry?: Entry;
}

export type CreateEntryOutput = {
  entryId?: string;
}

export type UpdateEntryInput = {
  patch?: string[];
  entryId?: string;
  entry?: Entry;
}

export type UpdateEntryOutput = Record<string, unknown>;

export type RenameEntryInput = {
  entryId?: string;
  title?: string;
}

export type RenameEntryOutput = Record<string, unknown>;

export type MoveEntryInput = {
  entryId?: string;
  parentId?: string;
  index?: number;
}

export type MoveEntryOutput = Record<string, unknown>;

export type DeleteEntryInput = {
  entryId?: string;
}

export type DeleteEntryOutput = Record<string, unknown>;

export type DescribeEntryInput = {
  entryId?: string;
  render?: boolean;
}

export type DescribeEntryOutput = {
  entry?: Entry;
}

export type ListEntriesInput = {
  render?: boolean;
  offset?: number;
  size?: number;
  filters?: ListEntriesInput_Filter;
  sort?: string;
  order?: string;
}

export type ListEntriesInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  parentId?: ExpressionID[];
  draft?: ExpressionBool[];
  title?: ExpressionString[];
}

export type ListEntriesOutput = {
  total?: number;
  items?: Entry[];
}

export type DescribeTOCInput = {
  rootId?: string;
  depth?: number;
}

export type DescribeTOCOutput = {
  items?: Entry[];
}

