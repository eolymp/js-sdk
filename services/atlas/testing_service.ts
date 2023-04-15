// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class TestingService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  UpdateChecker(input: UpdateVerifierInput, opts?: any): Promise<UpdateVerifierOutput> {
    const path = "/verifier";

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DescribeChecker(input: DescribeVerifierInput, opts?: any): Promise<DescribeVerifierOutput> {
    const path = "/verifier";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateInteractor(input: UpdateInteractorInput, opts?: any): Promise<UpdateInteractorOutput> {
    const path = "/interactor";

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DescribeInteractor(input: DescribeInteractorInput, opts?: any): Promise<DescribeInteractorOutput> {
    const path = "/interactor";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateTestset(input: CreateTestsetInput, opts?: any): Promise<CreateTestsetOutput> {
    const path = "/testsets";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateTestset(input: UpdateTestsetInput, opts?: any): Promise<UpdateTestsetOutput> {
    const path = "/testsets/"+encodeURIComponent(input.testsetId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.testsetId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteTestset(input: DeleteTestsetInput, opts?: any): Promise<DeleteTestsetOutput> {
    const path = "/testsets/"+encodeURIComponent(input.testsetId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.testsetId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListTestsets(input: ListTestsetsInput, opts?: any): Promise<ListTestsetsOutput> {
    const path = "/testsets";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeTestset(input: DescribeTestsetInput, opts?: any): Promise<DescribeTestsetOutput> {
    const path = "/testsets/"+encodeURIComponent(input.testsetId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.testsetId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateTest(input: CreateTestInput, opts?: any): Promise<CreateTestOutput> {
    const path = "/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.testsetId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateTest(input: UpdateTestInput, opts?: any): Promise<UpdateTestOutput> {
    const path = "/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests/"+encodeURIComponent(input.testId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.testsetId);
    delete(input.testId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteTest(input: DeleteTestInput, opts?: any): Promise<DeleteTestOutput> {
    const path = "/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests/"+encodeURIComponent(input.testId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.testsetId);
    delete(input.testId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListTests(input: ListTestsInput, opts?: any): Promise<ListTestsOutput> {
    const path = "/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.testsetId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListExamples(input: ListExamplesInput, opts?: any): Promise<ListExamplesOutput> {
    const path = "/examples";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeTest(input: DescribeTestInput, opts?: any): Promise<DescribeTestOutput> {
    const path = "/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests/"+encodeURIComponent(input.testId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.testsetId);
    delete(input.testId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

