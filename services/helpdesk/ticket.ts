// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Ticket = {
  id?: string;
  type?: string;
  userId?: string;
  userEmail?: string;
  metadata?: Record<string, string>;
  status?: string;
  locale?: string;
  createdAt?: string;
  updatedAt?: string;
  secret?: string;
  subject?: string;
  message?: string;
}

export type Ticket_Comment = {
  id?: string;
  userId?: string;
  userEmail?: string;
  metadata?: Record<string, string>;
  createdAt?: string;
  updatedAt?: string;
  message?: string;
}

