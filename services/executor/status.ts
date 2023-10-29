// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Status = {
  reference?: string;
  origin?: string;
  type?: string;
  error?: string;
  failure?: string;
  runs?: Status_Run[];
  signature?: string;
  version?: number;
  agent?: string;
}

export type Status_Run = {
  reference?: string;
  status?: string;
  score?: number;
  cost?: number;
  wallTimeUsage?: number;
  wallTimeLimit?: number;
  cpuTimeUsage?: number;
  cpuTimeLimit?: number;
  memoryUsage?: number;
  memoryLimit?: number;
  exitCode?: number;
  signal?: number;
  output?: string;
  stderr?: string;
  verifierLog?: string;
  verifierLogUrl?: string;
  verifierWallTimeUsage?: number;
  verifierMemoryUsage?: number;
  verifierExitCode?: number;
  interactorLog?: string;
  interactorLogUrl?: string;
  interactorWallTimeUsage?: number;
  interactorMemoryUsage?: number;
  interactorExitCode?: number;
}

