// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Content } from "../ecm/content"

export type Penalty = {
  id?: string;
  summary?: string;
  description?: Content;
  scope?: string[];
  createdAt?: string;
  expiresAt?: string;
  cancelledAt?: string;
}

