// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Scoreboard = {
  id?: string;
  key?: string;
  name?: string;
  scoringMode?: string;
  contests?: Scoreboard_Contest[];
}

export type Scoreboard_Row = {
  name?: string;
  userId?: string;
  score?: number;
  penalty?: number;
  scores?: Scoreboard_Row_Score[];
}

export type Scoreboard_Row_Score = {
  contestId?: string;
  problemId?: string;
  attempts?: number;
  solvedIn?: number;
  solvedAt?: string;
  score?: number;
  penalty?: number;
  percentage?: number;
}

export type Scoreboard_Contest = {
  contestId?: string;
  name?: string;
  index?: number;
  visible?: boolean;
}

