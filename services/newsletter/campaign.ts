// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Content } from "../ecm/content"

export type Campaign = {
  id?: string;
  type?: string;
  createdAt?: string;
  subject?: string;
  content?: Content;
  recipientsCount?: number;
  pendingCount?: number;
  sentCount?: number;
  errorCount?: number;
}

export type Campaign_Translation = {
  id?: string;
  locale?: string;
  subject?: string;
  content?: Content;
  automatic?: boolean;
}

