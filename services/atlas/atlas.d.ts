import { Interactor } from "../executor/interactor";
import { Verifier } from "../executor/verifier";
import { Permission } from "./permission";
import { Problem } from "./problem";
import { Statement } from "./statement";
import { Template } from "./template";
import { Test } from "./test";
import { Testset } from "./testset";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Atlas {
    private readonly cli;
    constructor(cli: Client);
    CreateProblem(input: CreateProblemInput): Promise<CreateProblemOutput>;
    DeleteProblem(input: DeleteProblemInput): Promise<DeleteProblemOutput>;
    ListProblems(input: ListProblemsInput): Promise<ListProblemsOutput>;
    DescribeProblem(input: DescribeProblemInput): Promise<DescribeProblemOutput>;
    ListExamples(input: ListExamplesInput): Promise<ListExamplesOutput>;
    UpdateVerifier(input: UpdateVerifierInput): Promise<UpdateVerifierOutput>;
    DescribeVerifier(input: DescribeVerifierInput): Promise<DescribeVerifierOutput>;
    UpdateInteractor(input: UpdateInteractorInput): Promise<UpdateInteractorOutput>;
    DescribeInteractor(input: DescribeInteractorInput): Promise<DescribeInteractorOutput>;
    CreateStatement(input: CreateStatementInput): Promise<CreateStatementOutput>;
    UpdateStatement(input: UpdateStatementInput): Promise<UpdateStatementOutput>;
    DeleteStatement(input: DeleteStatementInput): Promise<DeleteStatementOutput>;
    ListStatements(input: ListStatementsInput): Promise<ListStatementsOutput>;
    DescribeStatement(input: DescribeStatementInput): Promise<DescribeStatementOutput>;
    CreateTestset(input: CreateTestsetInput): Promise<CreateTestsetOutput>;
    UpdateTestset(input: UpdateTestsetInput): Promise<UpdateTestsetOutput>;
    DeleteTestset(input: DeleteTestsetInput): Promise<DeleteTestsetOutput>;
    ListTestsets(input: ListTestsetsInput): Promise<ListTestsetsOutput>;
    DescribeTestset(input: DescribeTestsetInput): Promise<DescribeTestsetOutput>;
    CreateTest(input: CreateTestInput): Promise<CreateTestOutput>;
    UpdateTest(input: UpdateTestInput): Promise<UpdateTestOutput>;
    DeleteTest(input: DeleteTestInput): Promise<DeleteTestOutput>;
    ListTests(input: ListTestsInput): Promise<ListTestsOutput>;
    DescribeTest(input: DescribeTestInput): Promise<DescribeTestOutput>;
    GrantPermission(input: GrantPermissionInput): Promise<GrantPermissionOutput>;
    RevokePermission(input: RevokePermissionInput): Promise<RevokePermissionOutput>;
    ListPermissions(input: ListPermissionsInput): Promise<ListPermissionsOutput>;
    CreateCodeTemplate(input: CreateCodeTemplateInput): Promise<CreateCodeTemplateOutput>;
    UpdateCodeTemplate(input: UpdateCodeTemplateInput): Promise<UpdateCodeTemplateOutput>;
    DeleteCodeTemplate(input: DeleteCodeTemplateInput): Promise<DeleteCodeTemplateOutput>;
    ListCodeTemplates(input: ListCodeTemplatesInput): Promise<ListCodeTemplatesOutput>;
    DescribeCodeTemplate(input: DescribeCodeTemplateInput): Promise<DescribeCodeTemplateOutput>;
}
export declare type ListProblemsInput = {
    offset?: number;
    size?: number;
};
export declare type ListProblemsOutput = {
    total?: number;
    items?: Problem[];
};
export declare type CreateProblemInput = {
    problem?: Problem;
};
export declare type CreateProblemOutput = {
    problemId?: string;
};
export declare type DeleteProblemInput = {
    problemId?: string;
};
export declare type DeleteProblemOutput = Record<string, unknown>;
export declare type DescribeProblemInput = {
    problemId?: string;
};
export declare type DescribeProblemOutput = {
    problem?: Problem;
};
export declare type ListStatementsInput = {
    problemId?: string;
};
export declare type ListStatementsOutput = {
    total?: number;
    items?: Statement[];
};
export declare type DescribeStatementInput = {
    statementId?: string;
};
export declare type DescribeStatementOutput = {
    statement?: Statement;
};
export declare type CreateStatementInput = {
    problemId?: string;
    statement?: Statement;
};
export declare type CreateStatementOutput = {
    id?: string;
};
export declare type UpdateStatementInput = {
    statementId?: string;
    statement?: Statement;
};
export declare type UpdateStatementOutput = Record<string, unknown>;
export declare type DeleteStatementInput = {
    statementId?: string;
};
export declare type DeleteStatementOutput = Record<string, unknown>;
export declare type UpdateVerifierInput = {
    problemId?: string;
    verifier?: Verifier;
};
export declare type UpdateVerifierOutput = Record<string, unknown>;
export declare type DescribeVerifierInput = {
    problemId?: string;
};
export declare type DescribeVerifierOutput = {
    verifier?: Verifier;
};
export declare type UpdateInteractorInput = {
    problemId?: string;
    interactor?: Interactor;
};
export declare type UpdateInteractorOutput = Record<string, unknown>;
export declare type DescribeInteractorInput = {
    problemId?: string;
};
export declare type DescribeInteractorOutput = {
    interactor?: Interactor;
};
export declare type ListTestsetsInput = {
    problemId?: string;
};
export declare type ListTestsetsOutput = {
    total?: number;
    items?: Testset[];
};
export declare type DescribeTestsetInput = {
    testsetId?: string;
};
export declare type DescribeTestsetOutput = {
    testset?: Testset;
};
export declare type CreateTestsetInput = {
    problemId?: string;
    testset?: Testset;
};
export declare type CreateTestsetOutput = {
    id?: string;
};
export declare type UpdateTestsetInput = {
    testsetId?: string;
    testset?: Testset;
};
export declare type UpdateTestsetOutput = Record<string, unknown>;
export declare type DeleteTestsetInput = {
    testsetId?: string;
};
export declare type DeleteTestsetOutput = Record<string, unknown>;
export declare type ListExamplesInput = {
    problemId?: string;
};
export declare type ListExamplesOutput = {
    examples?: Test[];
};
export declare type ListTestsInput = {
    testsetId?: string;
};
export declare type ListTestsOutput = {
    total?: number;
    items?: Test[];
};
export declare type DescribeTestInput = {
    testId?: string;
};
export declare type DescribeTestOutput = {
    test?: Test;
};
export declare type CreateTestInput = {
    testsetId?: string;
    test?: Test;
};
export declare type CreateTestOutput = {
    id?: string;
};
export declare type UpdateTestInput = {
    testId?: string;
    test?: Test;
};
export declare type UpdateTestOutput = Record<string, unknown>;
export declare type DeleteTestInput = {
    testId?: string;
};
export declare type DeleteTestOutput = Record<string, unknown>;
export declare type ListPermissionsInput = {
    problemId?: string;
};
export declare type ListPermissionsOutput = {
    items?: Permission[];
};
export declare type GrantPermissionInput = {
    problemId?: string;
    permission?: Permission;
};
export declare type GrantPermissionOutput = Record<string, unknown>;
export declare type RevokePermissionInput = {
    problemId?: string;
    userId?: string;
};
export declare type RevokePermissionOutput = Record<string, unknown>;
export declare type CreateCodeTemplateInput = {
    problemId?: string;
    template?: Template;
};
export declare type CreateCodeTemplateOutput = {
    templateId?: string;
};
export declare type UpdateCodeTemplateInput = {
    templateId?: string;
    template?: Template;
};
export declare type UpdateCodeTemplateOutput = Record<string, unknown>;
export declare type DeleteCodeTemplateInput = {
    templateId?: string;
};
export declare type DeleteCodeTemplateOutput = Record<string, unknown>;
export declare type ListCodeTemplatesInput = {
    problemId?: string;
};
export declare type ListCodeTemplatesOutput = {
    total?: number;
    items?: Template[];
};
export declare type DescribeCodeTemplateInput = {
    templateId?: string;
};
export declare type DescribeCodeTemplateOutput = {
    template?: Template;
};
export {};
