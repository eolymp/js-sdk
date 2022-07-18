// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ResourceUsage } from "../executor/usage"

export type Run = {
  id?: string;
  lang?: string;
  runtime?: string;
  source?: string;
  sourceErn?: string;
  input?: string;
  inputErn?: string;
  status?: string;
  error?: string;
  exitCode?: number;
  signal?: number;
  wallTimeUsage?: number;
  cpuTimeUsage?: number;
  memoryUsage?: number;
  resourceUsage?: ResourceUsage;
  output?: string;
  outputErn?: string;
  problemErn?: string;
}

