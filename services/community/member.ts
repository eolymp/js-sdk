// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Member = {
  id?: string;
  ern?: string;
  name?: string;
  disabled?: boolean;
  registered?: boolean;
  staffed?: boolean;
  ghost?: boolean;
  outOfCompetition?: boolean;
  status?: string;
  users?: Member_User[];
  values?: Member_Value[];
}

export type Member_User = {
  userId?: string;
  issuer?: string;
  subject?: string;
  name?: string;
  givenName?: string;
  familyName?: string;
  middleName?: string;
  nickname?: string;
  picture?: string;
  email?: string;
  emailVerified?: boolean;
  profile?: string;
  locale?: string;
}

export type Member_Value = {
  attributeKey?: string;
  attributeType?: string;
  valueString?: string;
  valueNumber?: number;
}

