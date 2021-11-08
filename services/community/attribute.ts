// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Attribute = {
  key?: string;
  description?: Attribute_Description[];
  type?: string;
  required?: boolean;
  hidden?: boolean;
  regexp?: string;
  min?: number;
  max?: number;
  choices?: string[];
}

export type Attribute_Description = {
  default?: boolean;
  locale?: string;
  label?: string;
  help?: string;
  choices?: string[];
}

