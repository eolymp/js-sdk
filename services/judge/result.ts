// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Score } from "./score"

export type Result = {
  participantId?: string;
  memberId?: string;
  contestId?: string;
  name?: string;
  unofficial?: boolean;
  rank?: number;
  rankLower?: number;
  score?: Score;
}

