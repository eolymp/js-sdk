// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Address } from "./address"

export type Customer = {
  id?: string;
  name?: string;
  description?: string;
  email?: string;
  phone?: string;
  taxIdType?: string;
  taxIdValue?: string;
  address?: Address;
  currency?: string;
  language?: string;
  metadata?: Record<string, string>;
}
