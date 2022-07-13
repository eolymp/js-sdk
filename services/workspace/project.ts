// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Project = {
  ern?: string;
  id?: string;
  name?: string;
  runtime?: string;
  visibility?: string;
  authorId?: string;
  createdOn?: string;
  updatedOn?: string;
  target?: Project_Target;
  targetErn?: string;
  labels?: string[];
}

export type Project_Target = {
  spaceId?: string;
  problemId?: string;
}

