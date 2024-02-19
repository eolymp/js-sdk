// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Quota } from "./quota"

export type Space = {
  id?: string;
  key?: string;
  url?: string;
  homeUrl?: string;
  issuerUrl?: string;
  graphqlUrl?: string;
  name?: string;
  image?: string;
  type?: string;
  visibility?: string;
  status?: string;
  subscription?: Space_Subscription;
  quota?: Quota;
  plan?: string;
  seats?: number;
  affiliation?: string;
}

export type Space_Subscription = {
  plan?: string;
  seats?: number;
  quota?: Quota;
  billingPeriodStart?: string;
  billingPeriodEnd?: string;
  quotaPeriodStart?: string;
  quotaPeriodEnd?: string;
}

