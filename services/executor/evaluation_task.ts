// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Checker } from "./checker"
import { File } from "./file"
import { Interactor } from "./interactor"
import { Script } from "./script"

export type EvaluationTask = {
  taskId?: string;
  reference?: string;
  origin?: string;
  priority?: number;
  runtime?: string;
  sourceUrl?: string;
  headerUrl?: string;
  footerUrl?: string;
  files?: File[];
  solution?: Script;
  redirectStderrToStdout?: boolean;
  runCount?: number;
  preconditions?: EvaluationTask_Precondition[];
  constraints?: EvaluationTask_Constraint[];
  checker?: Checker;
  interactor?: Interactor;
  scripts?: Script[];
  runs?: EvaluationTask_Run[];
}

export type EvaluationTask_Generator = {
  scriptName?: string;
  arguments?: string[];
}

export type EvaluationTask_Run = {
  reference?: string;
  index?: number;
  debug?: boolean;
  cost?: number;
  env?: Record<string, string>;
  labels?: string[];
  inputUrl?: string;
  inputContent?: string;
  inputGenerator?: EvaluationTask_Generator;
  answerUrl?: string;
  answerContent?: string;
  answerGenerator?: EvaluationTask_Generator;
}

export type EvaluationTask_Precondition = {
  selector?: string[];
  dependsOn?: string[];
  dependencyMode?: string;
  stopOnFailure?: boolean;
  maxExecutionTime?: number;
}

export type EvaluationTask_Constraint = {
  selector?: string[];
  actor?: string;
  wallTimeLimit?: number;
  cpuTimeLimit?: number;
  memoryLimit?: number;
  fileSizeLimit?: number;
}

