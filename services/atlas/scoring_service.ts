// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class ScoringService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeScore(input: DescribeScoreInput, opts?: any): Promise<DescribeScoreOutput> {
    const path = "/scores/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeProblemGrading(input: DescribeProblemGradingInput, opts?: any): Promise<DescribeProblemGradingOutput> {
    const path = "/grading";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListProblemTop(input: ListProblemTopInput, opts?: any): Promise<ListProblemTopOutput> {
    const path = "/top";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

