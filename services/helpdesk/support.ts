// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID, ExpressionTimestamp } from "../wellknown/expression"
import { Ticket } from "./ticket"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts: O): Promise<E>;
}

export class Support {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateTicket<O>(input: CreateTicketInput, opts?: O): Promise<CreateTicketOutput> {
    const path = "/helpdesk/tickets";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateTicket<O>(input: UpdateTicketInput, opts?: O): Promise<UpdateTicketOutput> {
    const path = "/helpdesk/tickets/"+encodeURIComponent(input.ticketId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteTicket<O>(input: DeleteTicketInput, opts?: O): Promise<DeleteTicketOutput> {
    const path = "/helpdesk/tickets/"+encodeURIComponent(input.ticketId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeTicket<O>(input: DescribeTicketInput, opts?: O): Promise<DescribeTicketOutput> {
    const path = "/helpdesk/tickets/"+encodeURIComponent(input.ticketId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListTickets<O>(input: ListTicketsInput, opts?: O): Promise<ListTicketsOutput> {
    const path = "/helpdesk/tickets";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ApproveTicket<O>(input: ApproveTicketInput, opts?: O): Promise<ApproveTicketOutput> {
    const path = "/helpdesk/tickets/"+encodeURIComponent(input.ticketId||'')+"/approve";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  RejectTicket<O>(input: RejectTicketInput, opts?: O): Promise<RejectTicketOutput> {
    const path = "/helpdesk/tickets/"+encodeURIComponent(input.ticketId||'')+"/reject";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CloseTicket<O>(input: CloseTicketInput, opts?: O): Promise<CloseTicketOutput> {
    const path = "/helpdesk/tickets/"+encodeURIComponent(input.ticketId||'')+"/close";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type CreateTicketInput = {
  ticket?: Ticket;
}

export type CreateTicketOutput = {
  ticketId?: string;
}

export type UpdateTicketInput = {
  ticketId?: string;
  ticket?: Ticket;
}

export type UpdateTicketOutput = Record<string, unknown>;

export type DeleteTicketInput = {
  ticketId?: string;
}

export type DeleteTicketOutput = Record<string, unknown>;

export type DescribeTicketInput = {
  ticketId?: string;
}

export type DescribeTicketOutput = {
  ticket?: Ticket;
}

export type ListTicketsInput = {
  offset?: number;
  size?: number;
  filters?: ListTicketsInput_Filter;
}

export type ListTicketsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  userId?: ExpressionID[];
  userEmail?: ExpressionEnum[];
  status?: ExpressionEnum[];
  type?: ExpressionEnum[];
  createdAt?: ExpressionTimestamp[];
  updatedAt?: ExpressionTimestamp[];
}

export type ListTicketsOutput = {
  total?: number;
  items?: Ticket[];
}

export type ApproveTicketInput = {
  ticketId?: string;
  comment?: string;
}

export type ApproveTicketOutput = Record<string, unknown>;

export type RejectTicketInput = {
  ticketId?: string;
  comment?: string;
}

export type RejectTicketOutput = Record<string, unknown>;

export type CloseTicketInput = {
  ticketId?: string;
  comment?: string;
}

export type CloseTicketOutput = Record<string, unknown>;

