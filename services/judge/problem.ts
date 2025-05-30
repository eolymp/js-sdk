// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Node } from "../ecm/node"

export type Problem = {
  id?: string;
  url?: string;
  type?: string;
  index?: number;
  score?: number;
  baseId?: string;
  baseNumber?: number;
  baseSpaceId?: string;
  contestId?: string;
  feedbackPolicy?: string;
  timeLimit?: number;
  cpuLimit?: number;
  memoryLimit?: number;
  fileSizeLimit?: number;
  submitLimit?: number;
  scoreByBestTestset?: boolean;
}

export type Problem_Statement = {
  locale?: string;
  title?: string;
  content?: Node;
  downloadLink?: string;
}

export type Problem_Test = {
  index?: number;
  example?: boolean;
  inputUrl?: string;
  answerUrl?: string;
  score?: number;
}

export type Problem_Attachment = {
  id?: string;
  name?: string;
  link?: string;
}

