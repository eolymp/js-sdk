// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type User = {
  issuer?: string;
  subject?: string;
  nickname?: string;
  nicknameChangeTimeout?: number;
  email?: string;
  emailVerified?: boolean;
  password?: string;
  passwordAge?: number;
  name?: string;
  picture?: string;
  birthday?: string;
  country?: string;
  city?: string;
  teamId?: string;
  preferences?: User_Preferences;
}

export type User_Preferences = {
  locale?: string;
  timezone?: string;
  runtime?: string;
  notifications?: string[];
}

