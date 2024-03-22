// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Content } from "../ecm/content"
import { ExpressionBool, ExpressionID } from "../wellknown/expression"
import { Reply } from "./reply"
import { Ticket } from "./ticket"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class TicketService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateTicket(input: CreateTicketInput, opts?: any): Promise<CreateTicketOutput> {
    const path = "/tickets";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CloseTicket(input: CloseTicketInput, opts?: any): Promise<CloseTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/close";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  OpenTicket(input: OpenTicketInput, opts?: any): Promise<OpenTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/open";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ReadTicket(input: ReadTicketInput, opts?: any): Promise<ReadTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/read";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteTicket(input: DeleteTicketInput, opts?: any): Promise<DeleteTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeTicket(input: DescribeTicketInput, opts?: any): Promise<DescribeTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListTickets(input: ListTicketsInput, opts?: any): Promise<ListTicketsOutput> {
    const path = "/tickets";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ReplyTicket(input: ReplyTicketInput, opts?: any): Promise<ReplyTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ListReplies(input: ListRepliesInput, opts?: any): Promise<ListRepliesOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DeleteReply(input: DeleteReplyInput, opts?: any): Promise<DeleteReplyOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies/"+encodeURIComponent(input.replyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);
    delete(input.replyId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  UpdateReply(input: UpdateReplyInput, opts?: any): Promise<UpdateReplyOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies/"+encodeURIComponent(input.replyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);
    delete(input.replyId);

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type CreateTicketInput = {
  contestId?: string;
  subject?: string;
  message?: Content;
  rawMessage?: string;
}

export type CreateTicketOutput = {
  ticketId?: string;
}

export type CloseTicketInput = {
  contestId?: string;
  ticketId?: string;
}

export type CloseTicketOutput = Record<string, unknown>;

export type OpenTicketInput = {
  contestId?: string;
  ticketId?: string;
}

export type OpenTicketOutput = Record<string, unknown>;

export type ReadTicketInput = {
  contestId?: string;
  ticketId?: string;
}

export type ReadTicketOutput = Record<string, unknown>;

export type DeleteTicketInput = {
  contestId?: string;
  ticketId?: string;
}

export type DeleteTicketOutput = Record<string, unknown>;

export type DescribeTicketInput = {
  contestId?: string;
  ticketId?: string;
  extra?: string[];
}

export type DescribeTicketOutput = {
  ticket?: Ticket;
}

export type ListTicketsInput = {
  offset?: number;
  size?: number;
  filters?: ListTicketsInput_Filter;
  sort?: string;
  order?: string;
  extra?: string[];
}

export type ListTicketsInput_Filter = {
  id?: ExpressionID[];
  contestId?: ExpressionID[];
  participantId?: ExpressionID[];
  memberId?: ExpressionID[];
  isRead?: ExpressionBool[];
  isOpen?: ExpressionBool[];
  own?: ExpressionBool[];
}

export type ListTicketsOutput = {
  total?: number;
  items?: Ticket[];
}

export type ReplyTicketInput = {
  ticketId?: string;
  message?: Content;
  close?: boolean;
}

export type ReplyTicketOutput = {
  replyId?: string;
}

export type WatchTicketsInput = {
  contestId?: string;
  extra?: string[];
}

export type WatchTicketsOutput = {
  event?: string;
  ticket?: Ticket;
  unreadCount?: number;
}

export type ListRepliesInput = {
  ticketId?: string;
  offset?: number;
  size?: number;
  extra?: string[];
}

export type ListRepliesOutput = {
  total?: number;
  items?: Reply[];
}

export type DeleteReplyInput = {
  ticketId?: string;
  replyId?: string;
}

export type DeleteReplyOutput = Record<string, unknown>;

export type UpdateReplyInput = {
  ticketId?: string;
  replyId?: string;
  message?: Content;
}

export type UpdateReplyOutput = Record<string, unknown>;

export type WatchRepliesInput = {
  ticketId?: string;
  cursor?: string;
  extra?: string[];
}

export type WatchRepliesOutput = {
  event?: string;
  reply?: Reply;
}

