// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Submission = {
  id?: string;
  url?: string;
  contestId?: string;
  problemId?: string;
  participantId?: string;
  submittedAt?: string;
  deleted?: boolean;
  lang?: string;
  source?: string;
  sourceUrl?: string;
  signature?: string;
  status?: string;
  verdict?: string;
  error?: string;
  errorUrl?: string;
  cost?: number;
  score?: number;
  percentage?: number;
  groups?: Submission_Group[];
}

export type Submission_CheckerExecutionData = {
  logUrl?: string;
  wallTimeUsage?: number;
  memoryUsage?: number;
  exitCode?: number;
}

export type Submission_InteractorExecutionData = {
  logUrl?: string;
  wallTimeUsage?: number;
  memoryUsage?: number;
  exitCode?: number;
}

export type Submission_Run = {
  id?: string;
  wallTimeUsage?: number;
  cpuTimeUsage?: number;
  memoryUsage?: number;
  outputUrl?: string;
  stderrUrl?: string;
  index?: number;
  testId?: string;
  cost?: number;
  score?: number;
  status?: string;
  verdict?: string;
  checkerExecutionData?: Submission_CheckerExecutionData;
  interactorExecutionData?: Submission_InteractorExecutionData;
}

export type Submission_Group = {
  index?: number;
  testsetId?: string;
  status?: string;
  verdict?: string;
  dependencies?: number[];
  cost?: number;
  score?: number;
  scoringMode?: string;
  feedbackPolicy?: string;
  wallTimeUsage?: number;
  cpuTimeUsage?: number;
  memoryUsage?: number;
  runs?: Submission_Run[];
}

