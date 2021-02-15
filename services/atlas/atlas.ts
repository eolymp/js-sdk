// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Interactor } from "../executor/interactor"
import { Verifier } from "../executor/verifier"
import { Permission } from "./permission"
import { Problem } from "./problem"
import { Statement } from "./statement"
import { Test } from "./test"
import { Testset } from "./testset"

interface Client {
  call<R, E>(method: string, args: R): Promise<E>;
}

export class Atlas {
  private readonly cli: Client;

  constructor(cli: Client) {
    this.cli = cli;
  }

  CreateProblem(input: CreateProblemInput): Promise<CreateProblemOutput> {
    return this.cli.call("eolymp.atlas.Atlas/CreateProblem", input);
  }

  DeleteProblem(input: DeleteProblemInput): Promise<DeleteProblemOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DeleteProblem", input);
  }

  ListProblems(input: ListProblemsInput): Promise<ListProblemsOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListProblems", input);
  }

  DescribeProblem(input: DescribeProblemInput): Promise<DescribeProblemOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeProblem", input);
  }

  ListExamples(input: ListExamplesInput): Promise<ListExamplesOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListExamples", input);
  }

  UpdateVerifier(input: UpdateVerifierInput): Promise<UpdateVerifierOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UpdateVerifier", input);
  }

  DescribeVerifier(input: DescribeVerifierInput): Promise<DescribeVerifierOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeVerifier", input);
  }

  UpdateInteractor(input: UpdateInteractorInput): Promise<UpdateInteractorOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UpdateInteractor", input);
  }

  DescribeInteractor(input: DescribeInteractorInput): Promise<DescribeInteractorOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeInteractor", input);
  }

  CreateStatement(input: CreateStatementInput): Promise<CreateStatementOutput> {
    return this.cli.call("eolymp.atlas.Atlas/CreateStatement", input);
  }

  UpdateStatement(input: UpdateStatementInput): Promise<UpdateStatementOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UpdateStatement", input);
  }

  DeleteStatement(input: DeleteStatementInput): Promise<DeleteStatementOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DeleteStatement", input);
  }

  ListStatements(input: ListStatementsInput): Promise<ListStatementsOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListStatements", input);
  }

  DescribeStatement(input: DescribeStatementInput): Promise<DescribeStatementOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeStatement", input);
  }

  CreateTestset(input: CreateTestsetInput): Promise<CreateTestsetOutput> {
    return this.cli.call("eolymp.atlas.Atlas/CreateTestset", input);
  }

  UpdateTestset(input: UpdateTestsetInput): Promise<UpdateTestsetOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UpdateTestset", input);
  }

  DeleteTestset(input: DeleteTestsetInput): Promise<DeleteTestsetOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DeleteTestset", input);
  }

  ListTestsets(input: ListTestsetsInput): Promise<ListTestsetsOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListTestsets", input);
  }

  DescribeTestset(input: DescribeTestsetInput): Promise<DescribeTestsetOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeTestset", input);
  }

  CreateTest(input: CreateTestInput): Promise<CreateTestOutput> {
    return this.cli.call("eolymp.atlas.Atlas/CreateTest", input);
  }

  UpdateTest(input: UpdateTestInput): Promise<UpdateTestOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UpdateTest", input);
  }

  DeleteTest(input: DeleteTestInput): Promise<DeleteTestOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DeleteTest", input);
  }

  ListTests(input: ListTestsInput): Promise<ListTestsOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListTests", input);
  }

  DescribeTest(input: DescribeTestInput): Promise<DescribeTestOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeTest", input);
  }

  GrantPermission(input: GrantPermissionInput): Promise<GrantPermissionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/GrantPermission", input);
  }

  RevokePermission(input: RevokePermissionInput): Promise<RevokePermissionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/RevokePermission", input);
  }

  ListPermissions(input: ListPermissionsInput): Promise<ListPermissionsOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListPermissions", input);
  }
}

export type ListProblemsInput = {
  offset?: number;
  size?: number;
}

export type ListProblemsOutput = {
  total?: number;
  items?: Problem[];
}

export type CreateProblemInput = {
  problem?: Problem;
}

export type CreateProblemOutput = {
  problemId?: string;
}

export type DeleteProblemInput = {
  problemId?: string;
}

export type DeleteProblemOutput = Record<string, unknown>;

export type DescribeProblemInput = {
  problemId?: string;
}

export type DescribeProblemOutput = {
  problem?: Problem;
}

export type ListStatementsInput = {
  problemId?: string;
}

export type ListStatementsOutput = {
  total?: number;
  items?: Statement[];
}

export type DescribeStatementInput = {
  statementId?: string;
}

export type DescribeStatementOutput = {
  statement?: Statement;
}

export type CreateStatementInput = {
  problemId?: string;
  statement?: Statement;
}

export type CreateStatementOutput = {
  id?: string;
}

export type UpdateStatementInput = {
  statementId?: string;
  statement?: Statement;
}

export type UpdateStatementOutput = Record<string, unknown>;

export type DeleteStatementInput = {
  statementId?: string;
}

export type DeleteStatementOutput = Record<string, unknown>;

export type UpdateVerifierInput = {
  problemId?: string;
  verifier?: Verifier;
}

export type UpdateVerifierOutput = Record<string, unknown>;

export type DescribeVerifierInput = {
  problemId?: string;
}

export type DescribeVerifierOutput = {
  verifier?: Verifier;
}

export type UpdateInteractorInput = {
  problemId?: string;
  interactor?: Interactor;
}

export type UpdateInteractorOutput = Record<string, unknown>;

export type DescribeInteractorInput = {
  problemId?: string;
}

export type DescribeInteractorOutput = {
  interactor?: Interactor;
}

export type ListTestsetsInput = {
  problemId?: string;
}

export type ListTestsetsOutput = {
  total?: number;
  items?: Testset[];
}

export type DescribeTestsetInput = {
  testsetId?: string;
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
  testsetId?: string;
  testset?: Testset;
}

export type UpdateTestsetOutput = Record<string, unknown>;

export type DeleteTestsetInput = {
  testsetId?: string;
}

export type DeleteTestsetOutput = Record<string, unknown>;

export type ListExamplesInput = {
  problemId?: string;
}

export type ListExamplesOutput = {
  examples?: Test[];
}

export type ListTestsInput = {
  testsetId?: string;
}

export type ListTestsOutput = {
  total?: number;
  items?: Test[];
}

export type DescribeTestInput = {
  testId?: string;
}

export type DescribeTestOutput = {
  test?: Test;
}

export type CreateTestInput = {
  testsetId?: string;
  test?: Test;
}

export type CreateTestOutput = {
  id?: string;
}

export type UpdateTestInput = {
  testId?: string;
  test?: Test;
}

export type UpdateTestOutput = Record<string, unknown>;

export type DeleteTestInput = {
  testId?: string;
}

export type DeleteTestOutput = Record<string, unknown>;

export type ListPermissionsInput = {
  problemId?: string;
}

export type ListPermissionsOutput = {
  items?: Permission[];
}

export type GrantPermissionInput = {
  problemId?: string;
  permission?: Permission;
}

export type GrantPermissionOutput = Record<string, unknown>;

export type RevokePermissionInput = {
  problemId?: string;
  userId?: string;
}

export type RevokePermissionOutput = Record<string, unknown>;

