// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Task = {
  id?: string;
  type?: string;
  inputs?: Record<string, string>;
  createdAt?: string;
  startedAt?: string;
  progressAt?: string;
  completeAt?: string;
  progress?: number;
  total?: number;
  status?: string;
  outputs?: Record<string, string>;
  logs?: string;
}

