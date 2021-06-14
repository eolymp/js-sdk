// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Score } from "../atlas/score"
import { Submission } from "../atlas/submission"

export type SubmissionCompletedEvent = {
  submission?: Submission;
  update?: boolean;
}

export type ScoreUpdatedEvent = {
  score?: Score;
}

export type StarAddedEvent = {
  problemId?: string;
  userId?: string;
}

export type StarRemovedEvent = {
  problemId?: string;
  userId?: string;
}

