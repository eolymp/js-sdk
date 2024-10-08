// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID } from "../wellknown/expression"
import { AutoReply } from "./auto_reply"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class AutoReplyService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateAutoReply(input: CreateAutoReplyInput, opts?: any): Promise<CreateAutoReplyOutput> {
    const path = "/helpdesk/auto-replies";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateAutoReply(input: UpdateAutoReplyInput, opts?: any): Promise<UpdateAutoReplyOutput> {
    const path = "/helpdesk/auto-replies/"+encodeURIComponent(input.replyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.replyId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteAutoReply(input: DeleteAutoReplyInput, opts?: any): Promise<DeleteAutoReplyOutput> {
    const path = "/helpdesk/auto-replies/"+encodeURIComponent(input.replyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.replyId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListAutoReplies(input: ListAutoRepliesInput, opts?: any): Promise<ListAutoRepliesOutput> {
    const path = "/helpdesk/auto-replies";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeAutoReply(input: DescribeAutoReplyInput, opts?: any): Promise<DescribeAutoReplyOutput> {
    const path = "/helpdesk/auto-replies/"+encodeURIComponent(input.replyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.replyId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateAutoReplyInput = {
  reply?: AutoReply;
}

export type CreateAutoReplyOutput = {
  replyId?: string;
}

export type UpdateAutoReplyInput = {
  replyId?: string;
  reply?: AutoReply;
}

export type UpdateAutoReplyOutput = Record<string, unknown>;

export type DeleteAutoReplyInput = {
  replyId?: string;
}

export type DeleteAutoReplyOutput = Record<string, unknown>;

export type ListAutoRepliesInput = {
  render?: boolean;
  offset?: number;
  size?: number;
  filters?: ListAutoRepliesInput_Filter;
}

export type ListAutoRepliesInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  locale?: ExpressionEnum[];
}

export type ListAutoRepliesOutput = {
  total?: number;
  items?: AutoReply[];
}

export type DescribeAutoReplyInput = {
  replyId?: string;
  render?: boolean;
}

export type DescribeAutoReplyOutput = {
  reply?: AutoReply;
}

