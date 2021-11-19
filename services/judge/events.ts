// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Reply } from "./reply"
import { Submission } from "./submission"
import { Ticket } from "./ticket"

export type SubmissionCompletedEvent = {
  submission?: Submission;
}

export type TicketCreatedEvent = {
  ticket?: Ticket;
}

export type TicketUpdatedEvent = {
  ticket?: Ticket;
  reply?: Reply;
}

