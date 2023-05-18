// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Score } from "./scoring_score"
import { Submission } from "./submission"

export type PermissionsDeletedEvent = {
  problemId?: string;
  userId?: string;
}

export type SubmissionCompleteEvent = {
  submission?: Submission;
  update?: boolean;
}

export type ScoreUpdatedEvent = {
  score?: Score;
}

