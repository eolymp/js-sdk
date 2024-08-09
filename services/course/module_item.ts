// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Content } from "../ecm/content"

export type ModuleItem = {
  id?: string;
  url?: string;
  draft?: boolean;
  name?: string;
  imageUrl?: string;
  index?: number;
  depth?: number;
  grading?: ModuleItem_Grading;
  document?: ModuleItem_Document;
  task?: ModuleItem_Task;
  progress?: number;
  grade?: number;
}

export type ModuleItem_Document = {
  content?: Content;
}

export type ModuleItem_Task = {
  problemId?: string;
}

export type ModuleItem_Grading = {
  maxScore?: number;
  weight?: number;
}

