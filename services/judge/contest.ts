// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Contest = {
  id?: string;
  url?: string;
  name?: string;
  logoUrl?: string;
  startsAt?: string;
  startsIn?: number;
  endsAt?: string;
  endsIn?: number;
  duration?: number;
  status?: string;
  visibility?: string;
  joinUnofficially?: boolean;
  participationMode?: string;
  requireAdmission?: boolean;
  allowPause?: boolean;
  allowFinishEarly?: boolean;
  format?: string;
  key?: string;
  problemCount?: number;
  problemCountHidden?: boolean;
  participantCount?: number;
  participantCountHidden?: boolean;
  featuredUntil?: string;
  printerId?: string;
  taxonomy?: Contest_Taxonomy;
  appearance?: Contest_Appearance;
  environment?: Contest_Environment;
  upsolve?: Contest_Upsolve;
  scoreboard?: Contest_Scoreboard;
  certification?: Contest_Certification;
}

export type Contest_Appearance = {
  title?: string;
  description?: string;
  logoUrl?: string;
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
  shareKey?: string;
}

export type Contest_Certification = {
  enabled?: boolean;
  affiliation?: string;
  signers?: Contest_Certification_Signer[];
}

export type Contest_Certification_Signer = {
  name?: string;
  title?: string;
}

