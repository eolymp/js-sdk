// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Scoreboard = {
  id?: string;
  key?: string;
  name?: string;
  format?: string;
}

export type Scoreboard_Row = {
  id?: string;
  name?: string;
  userId?: string;
  score?: number;
  penalty?: number;
  values?: Scoreboard_Row_Value[];
}

export type Scoreboard_Row_Value = {
  id?: string;
  columnId?: string;
  score?: number;
  penalty?: number;
  percentage?: number;
  attempts?: number;
  solvedIn?: number;
}

export type Scoreboard_Column = {
  id?: string;
  parentId?: string;
  key?: string;
  name?: string;
  shortName?: string;
  type?: string;
  index?: number;
  visible?: boolean;
  contestScoreboardId?: string;
  contestProblemId?: string;
  columns?: Scoreboard_Column[];
}

