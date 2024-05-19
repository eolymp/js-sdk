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
  featuredUntil?: string;
  duration?: number;
  status?: string;
  visibility?: string;
  joinUnofficially?: boolean;
  participationMode?: string;
  format?: string;
  domain?: string;
  spaceId?: string;
  taxonomy?: Contest_Taxonomy;
  appearance?: Contest_Appearance;
  environment?: Contest_Environment;
  upsolve?: Contest_Upsolve;
  scoreboard?: Contest_Scoreboard;
}

export type Contest_Appearance = {
  title?: string;
  tagline?: string;
  description?: string;
  logoImage?: string;
  primaryColor?: string;
  secondaryColor?: string;
}

export type Contest_Taxonomy = {
  year?: number;
  series?: string;
  scale?: string;
  difficulty?: number;
  country?: string;
  region?: string;
  city?: string;
}

export type Contest_Environment = {
  allowedRuntimes?: string[];
}

export type Contest_Upsolve = {
  freeUpsolve?: boolean;
  virtualUpsolve?: boolean;
}

export type Contest_Scoreboard = {
  visibility?: string;
  freezingTime?: number;
  unfreezeDelay?: number;
  attemptPenalty?: number;
  tieBreaker?: string;
  noSpoilerUi?: boolean;
}

