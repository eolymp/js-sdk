// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Task_Precondition } from "./task"

export type Job = {
  reference?: string;
  origin?: string;
  preconditions?: Task_Precondition[];
  actors?: Job_Actor[];
  scenario?: Job_Step[];
  runs?: Job_Run[];
}

export type Job_Actor = {
  name?: string;
  runtime?: string;
  sourceErn?: string;
  initEnv?: Record<string, string>;
  initFiles?: Job_File[];
  args?: string[];
  env?: Record<string, string>;
  stdin?: string;
  stdout?: string;
  stderr?: string;
  stdinLast?: boolean;
  mount?: Job_Mount[];
}

export type Job_Mount = {
  fromActor?: string;
  toPath?: string;
}

export type Job_File = {
  path?: string;
  sourceErn?: string;
}

export type Job_Run = {
  reference?: string;
  index?: number;
  labels?: string[];
  steps?: Job_Step[];
}

export type Job_Step = {
  name?: string;
  write?: Job_Step_Write;
  copy?: Job_Step_Copy;
  execute?: Job_Step_Execute;
  upload?: Job_Step_Upload;
  group?: Job_Step_Group;
}

export type Job_Step_Write = {
  sourceErn?: string;
  targetActor?: string;
  targetPath?: string;
  fixCrlf?: boolean;
}

export type Job_Step_Upload = {
  sourceActor?: string;
  sourcePath?: string;
  targetName?: string;
  optionally?: boolean;
  ttl?: number;
  maxSize?: number;
}

export type Job_Step_Copy = {
  sourceActor?: string;
  sourcePath?: string;
  targetActor?: string;
  targetPath?: string;
  optionally?: boolean;
}

export type Job_Step_Execute = {
  actor?: string;
  args?: string[];
  env?: Record<string, string>;
  outputFormat?: string;
  wallTimeLimit?: number;
  cpuTimeLimit?: number;
  memoryLimit?: number;
  fileSizeLimit?: number;
}

export type Job_Step_Group = {
  processes?: Job_Step_Execute[];
}

