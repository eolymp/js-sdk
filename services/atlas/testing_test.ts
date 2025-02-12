// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Test = {
  id?: string;
  testsetId?: string;
  index?: number;
  status?: string;
  statusMessage?: string;
  example?: boolean;
  inactive?: boolean;
  secret?: boolean;
  score?: number;
  exampleInputUrl?: string;
  exampleAnswerUrl?: string;
  generatedInputUrl?: string;
  generatedAnswerUrl?: string;
  inputUrl?: string;
  inputGenerator?: Test_Generator;
  answerUrl?: string;
  answerGenerator?: Test_Generator;
}

export type Test_Generator = {
  scriptName?: string;
  arguments?: string[];
}

