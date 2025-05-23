// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Member } from "../community/member"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class AdmissionService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  RequestAdmission(input: RequestAdmissionInput, opts?: any): Promise<RequestAdmissionOutput> {
    const path = "/admission:request";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeAdmission(input: DescribeAdmissionInput, opts?: any): Promise<DescribeAdmissionOutput> {
    const path = "/admission:request";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  AcceptAdmission(input: AcceptAdmissionInput, opts?: any): Promise<AcceptAdmissionOutput> {
    const path = "/admission:accept";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type RequestAdmissionInput = Record<string, unknown>;

export type RequestAdmissionOutput = {
  required?: boolean;
  code?: string;
}

export type AcceptAdmissionInput = {
  code?: string;
}

export type AcceptAdmissionOutput = Record<string, unknown>;

export type DescribeAdmissionInput = {
  code?: string;
}

export type DescribeAdmissionOutput = {
  participantId?: string;
  sessionId?: string;
  member?: Member;
}

export type WatchAdmissionInput = {
  code?: string;
}

export type WatchAdmissionOutput = {
  status?: string;
}

