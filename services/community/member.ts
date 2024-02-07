// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Attribute_Value } from "./attribute"
import { Ghost } from "./member_ghost"
import { Team } from "./member_team"
import { User } from "./member_user"

export type Member = {
  id?: string;
  name?: string;
  active?: boolean;
  incomplete?: boolean;
  unofficial?: boolean;
  secret?: boolean;
  tierId?: string;
  fallbackTierId?: string;
  createdAt?: string;
  user?: User;
  team?: Team;
  ghost?: Ghost;
  stats?: Member_Stats;
  groups?: string[];
  attributes?: Attribute_Value[];
}

export type Member_Stats = {
  rank?: number;
  streak?: number;
  problemsSolved?: number;
  submissionsAccepted?: number;
  submissionsTotal?: number;
}

