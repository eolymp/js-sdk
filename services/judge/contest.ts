// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Contest = {
  id?: string;
  url?: string;
  name?: string;
  startsAt?: string;
  startsIn?: number;
  endsAt?: string;
  endsIn?: number;
  duration?: number;
  status?: string;
  visibility?: string;
  participationMode?: string;
  endless?: boolean;
  format?: string;
  domain?: string;
  spaceId?: string;
}

export type Contest_Appearance = {
  title?: string;
  tagline?: string;
  logoImage?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export type Contest_Scoring = {
  showScoreboard?: boolean;
  attemptPenalty?: number;
  freezingTime?: number;
  unfreezeDelay?: number;
  allowUpsolving?: boolean;
  useNameInScoreboard?: boolean;
}

