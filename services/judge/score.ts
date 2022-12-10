// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Score = {
  validAfter?: number;
  validUntil?: number;
  timestamp?: string;
  score?: number;
  penalty?: number;
  breakdown?: Score_Problem[];
}

export type Score_Problem = {
  problemId?: string;
  score?: number;
  penalty?: number;
  solved?: boolean;
  percentage?: number;
  attempts?: number;
  solvedAt?: string;
  solvedIn?: number;
  changed?: boolean;
  breakdown?: Score_Testset[];
}

export type Score_Testset = {
  testsetId?: string;
  index?: number;
  cost?: number;
  score?: number;
}

