// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class FreelancerService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeFreelancerStatus(input: DescribeFreelancerStatusInput, opts?: any): Promise<DescribeFreelancerStatusOutput> {
    const path = "/basecamp/freelancer-status";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateFreelancerStatus(input: UpdateFreelancerStatusInput, opts?: any): Promise<UpdateFreelancerStatusOutput> {
    const path = "/basecamp/freelancer-status";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type DescribeFreelancerStatusInput = Record<string, unknown>;

export type DescribeFreelancerStatusOutput = {
  status?: string;
}

export type UpdateFreelancerStatusInput = {
  firstName?: string;
  lastName?: string;
  address?: string;
}

export type UpdateFreelancerStatusOutput = {
  signUrl?: string;
}

