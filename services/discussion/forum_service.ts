// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionID } from "../wellknown/expression"
import { Forum } from "./forum"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class ForumService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeForum(input: DescribeForumInput, opts?: any): Promise<DescribeForumOutput> {
    const path = "/forums/"+encodeURIComponent(input.forumId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.forumId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListForums(input: ListForumsInput, opts?: any): Promise<ListForumsOutput> {
    const path = "/forums";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateForum(input: CreateForumInput, opts?: any): Promise<CreateForumOutput> {
    const path = "/forums";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateForum(input: UpdateForumInput, opts?: any): Promise<UpdateForumOutput> {
    const path = "/forums/"+encodeURIComponent(input.forumId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.forumId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteForum(input: DeleteForumInput, opts?: any): Promise<DeleteForumOutput> {
    const path = "/forums/"+encodeURIComponent(input.forumId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.forumId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }
}

export type DescribeForumInput = {
  forumId?: string;
  render?: boolean;
}

export type DescribeForumOutput = {
  forum?: Forum;
}

export type ListForumsInput = {
  render?: boolean;
  offset?: number;
  size?: number;
  filters?: ListForumsInput_Filter;
}

export type ListForumsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  parentId?: ExpressionID[];
}

export type ListForumsOutput = {
  total?: number;
  items?: Forum[];
}

export type CreateForumInput = {
  forum?: Forum;
}

export type CreateForumOutput = {
  forumId?: string;
}

export type UpdateForumInput = {
  forumId?: string;
  forum?: Forum;
}

export type UpdateForumOutput = Record<string, unknown>;

export type DeleteForumInput = {
  forumId?: string;
}

export type DeleteForumOutput = Record<string, unknown>;
