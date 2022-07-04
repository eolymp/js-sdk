// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Scoreboard = {
  id?: string;
  contestId?: string;
  name?: string;
  default?: boolean;
  visible?: boolean;
  attemptPenalty?: number;
  status?: string;
  freezeTime?: string;
  freezeIn?: number;
}

export type Scoreboard_Row = {
  participantId?: string;
  scoreboardId?: string;
  name?: string;
  score?: number;
  penalty?: number;
  rank?: number;
  rankLower?: number;
  breakdown?: Scoreboard_Score[];
}

export type Scoreboard_Score = {
  problemId?: string;
  score?: number;
  penalty?: number;
  solved?: boolean;
  percentage?: number;
  attempts?: number;
  solvedAt?: string;
  solvedIn?: number;
  breakdown?: Scoreboard_Testset[];
}

export type Scoreboard_Testset = {
  testsetId?: string;
  index?: number;
  cost?: number;
  score?: number;
}
