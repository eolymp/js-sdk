// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Checker } from "../executor/checker"
import { Interactor } from "../executor/interactor"
import { TestingConfig } from "./testing_config"
import { Test } from "./testing_test"
import { Testset } from "./testing_testset"

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

  UpdateTestingConfig(input: UpdateTestingConfigInput, opts?: any): Promise<UpdateTestingConfigOutput> {
    const path = "/testing";

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DescribeTestingConfig(input: DescribeTestingConfigInput, opts?: any): Promise<DescribeTestingConfigOutput> {
    const path = "/testing";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateChecker(input: UpdateCheckerInput, opts?: any): Promise<UpdateCheckerOutput> {
    const path = "/checker";

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DescribeChecker(input: DescribeCheckerInput, opts?: any): Promise<DescribeCheckerOutput> {
    const path = "/checker";

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

  DescribeTestset(input: DescribeTestsetInput, opts?: any): Promise<DescribeTestsetOutput> {
    const path = "/testsets/"+encodeURIComponent(input.testsetId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.testsetId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListTestsets(input: ListTestsetsInput, opts?: any): Promise<ListTestsetsOutput> {
    const path = "/testsets";

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

  DescribeTest(input: DescribeTestInput, opts?: any): Promise<DescribeTestOutput> {
    const path = "/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests/"+encodeURIComponent(input.testId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.testsetId);
    delete(input.testId);

    return this.cli.call("GET", this.url+path, input, opts);
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
}

export type UpdateTestingConfigInput = {
  problemId?: string;
  config?: TestingConfig;
}

export type UpdateTestingConfigOutput = Record<string, unknown>;

export type DescribeTestingConfigInput = {
  problemId?: string;
  version?: number;
}

export type DescribeTestingConfigOutput = {
  config?: TestingConfig;
}

export type UpdateCheckerInput = {
  problemId?: string;
  checker?: Checker;
}

export type UpdateCheckerOutput = Record<string, unknown>;

export type DescribeCheckerInput = {
  problemId?: string;
  version?: number;
}

export type DescribeCheckerOutput = {
  checker?: Checker;
}

export type UpdateInteractorInput = {
  problemId?: string;
  interactor?: Interactor;
}

export type UpdateInteractorOutput = Record<string, unknown>;

export type DescribeInteractorInput = {
  problemId?: string;
  version?: number;
}

export type DescribeInteractorOutput = {
  interactor?: Interactor;
}

export type ListTestsetsInput = {
  problemId?: string;
  version?: number;
}

export type ListTestsetsOutput = {
  total?: number;
  items?: Testset[];
}

export type DescribeTestsetInput = {
  problemId?: string;
  testsetId?: string;
  version?: number;
}

export type DescribeTestsetOutput = {
  testset?: Testset;
}

export type CreateTestsetInput = {
  problemId?: string;
  testset?: Testset;
}

export type CreateTestsetOutput = {
  id?: string;
}

export type UpdateTestsetInput = {
  problemId?: string;
  testsetId?: string;
  testset?: Testset;
}

export type UpdateTestsetOutput = Record<string, unknown>;

export type DeleteTestsetInput = {
  problemId?: string;
  testsetId?: string;
}

export type DeleteTestsetOutput = Record<string, unknown>;

export type ListExamplesInput = {
  problemId?: string;
  version?: number;
}

export type ListExamplesOutput = {
  examples?: Test[];
}

export type ListTestsInput = {
  problemId?: string;
  testsetId?: string;
  version?: number;
}

export type ListTestsOutput = {
  total?: number;
  items?: Test[];
}

export type DescribeTestInput = {
  problemId?: string;
  testsetId?: string;
  testId?: string;
  version?: number;
}

export type DescribeTestOutput = {
  test?: Test;
}

export type CreateTestInput = {
  problemId?: string;
  testsetId?: string;
  test?: Test;
}

export type CreateTestOutput = {
  testId?: string;
}

export type UpdateTestInput = {
  problemId?: string;
  testsetId?: string;
  testId?: string;
  test?: Test;
}

export type UpdateTestOutput = Record<string, unknown>;

export type DeleteTestInput = {
  problemId?: string;
  testsetId?: string;
  testId?: string;
}

export type DeleteTestOutput = Record<string, unknown>;

