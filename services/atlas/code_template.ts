// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { File } from "./file"

export type Template = {
  id?: string;
  problemId?: string;
  runtime?: string;
  secret?: boolean;
  source?: string;
  header?: string;
  footer?: string;
  files?: File[];
}

