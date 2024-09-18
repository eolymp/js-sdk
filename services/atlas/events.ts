// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Permission } from "../acl/acl_service"
import { Problem } from "./problem"
import { Score } from "./scoring_score"
import { Statement } from "./statement"
import { Submission } from "./submission"
import { Suggestion } from "./suggestion"

export type SubmissionCompleteEvent = {
  submission?: Submission;
  update?: boolean;
}

export type SubmissionChangedEvent = {
  before?: Submission;
  after?: Submission;
}

export type ScoreUpdatedEvent = {
  score?: Score;
}

export type ProblemChangedEvent = {
  before?: Problem;
  after?: Problem;
}

export type StatementChangedEvent = {
  problemId?: string;
  before?: Statement;
  after?: Statement;
}

export type BookmarkChangedEvent = {
  problemId?: string;
  memberId?: string;
  before?: boolean;
  after?: boolean;
}

export type PermissionChangedEvent = {
  problemId?: string;
  userId?: string;
  before?: Permission;
  after?: Permission;
}

export type SuggestionChangedEvent = {
  problemId?: string;
  before?: Suggestion;
  after?: Suggestion;
}

