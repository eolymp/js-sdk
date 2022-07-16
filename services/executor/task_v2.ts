// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Task_Precondition } from "./task"

export type TaskV2 = {
  reference?: string;
  origin?: string;
  preconditions?: Task_Precondition[];
  actors?: TaskV2_Actor[];
  runs?: TaskV2_Run[];
}

export type TaskV2_Actor = {
  name?: string;
  runtime?: string;
  sourceErn?: string;
  initEnv?: Record<string, string>;
  initFiles?: TaskV2_File[];
  args?: string[];
  env?: Record<string, string>;
  stdin?: string;
  stdout?: string;
  stderr?: string;
  mount?: TaskV2_Mount[];
}

export type TaskV2_Mount = {
  fromActor?: string;
  toPath?: string;
}

export type TaskV2_File = {
  path?: string;
  sourceErn?: string;
}

export type TaskV2_Run = {
  reference?: string;
  index?: number;
  labels?: string[];
  steps?: TaskV2_Step[];
}

export type TaskV2_Step = {
  name?: string;
  write?: TaskV2_WriteOp[];
  copy?: TaskV2_CopyOp[];
  execute?: TaskV2_ExecuteOp[];
  upload?: TaskV2_UploadOp[];
}

export type TaskV2_WriteOp = {
  sourceErn?: string;
  targetActor?: string;
  targetPath?: string;
}

export type TaskV2_UploadOp = {
  sourceActor?: string;
  sourcePath?: string;
  targetName?: string;
  optionally?: boolean;
  ttl?: number;
  maxSize?: number;
}

export type TaskV2_CopyOp = {
  sourceActor?: string;
  sourcePath?: string;
  targetActor?: string;
  targetPath?: string;
  optionally?: boolean;
}

export type TaskV2_ExecuteOp = {
  actor?: string;
  args?: string[];
  env?: Record<string, string>;
  wallTimeLimit?: number;
  cpuTimeLimit?: number;
  memoryLimit?: number;
  fileSizeLimit?: number;
}

