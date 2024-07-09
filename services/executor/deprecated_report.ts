// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ResourceUsage } from "./usage"

export type Report = {
  reference?: string;
  origin?: string;
  agentName?: string;
  version?: number;
  state?: string;
  actors?: Report_Actor[];
  runs?: Report_Run[];
  error?: string;
}

export type Report_Actor = {
  name?: string;
  signature?: string;
  errorCode?: string;
  errorMessage?: string;
}

export type Report_Run = {
  reference?: string;
  state?: string;
  errorMessage?: string;
  steps?: Report_Step[];
}

export type Report_Step = {
  name?: string;
  outcome?: string;
  execute?: Report_Step_Execute;
  upload?: Report_Step_Upload;
  group?: Report_Step_Group;
}

export type Report_Step_Execute = {
  actor?: string;
  exitStatus?: string;
  values?: Record<string, string>;
  wallTimeUsage?: number;
  wallTimeLimit?: number;
  cpuTimeUsage?: number;
  cpuTimeLimit?: number;
  memoryUsage?: number;
  memoryLimit?: number;
  exitCode?: number;
  signal?: number;
  resourceUsage?: ResourceUsage;
}

export type Report_Step_Upload = {
  targetName?: string;
  targetUrl?: string;
}

export type Report_Step_Group = {
  processes?: Report_Step_Execute[];
}
