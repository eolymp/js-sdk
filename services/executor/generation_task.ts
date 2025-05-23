// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Script } from "./script"

export type GenerationTask = {
  taskId?: string;
  reference?: string;
  origin?: string;
  metadata?: Record<string, string>;
  runCount?: number;
  interactiveFollowup?: boolean;
  interactor?: Script;
  validator?: Script;
  scripts?: Script[];
  runs?: GenerationTask_Run[];
}

export type GenerationTask_Generator = {
  scriptName?: string;
  arguments?: string[];
}

export type GenerationTask_Run = {
  reference?: string;
  index?: number;
  group?: number;
  cost?: number;
  env?: Record<string, string>;
  inputUrl?: string;
  inputContent?: string;
  inputGenerator?: GenerationTask_Generator;
  answerUrl?: string;
  answerContent?: string;
  answerGenerator?: GenerationTask_Generator;
}

