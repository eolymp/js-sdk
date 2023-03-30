// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Interactor } from "../executor/interactor"
import { Verifier } from "../executor/verifier"
import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionInt, ExpressionString, ExpressionTimestamp } from "../wellknown/expression"
import { Attachment } from "./attachment"
import { Category } from "./category"
import { Permission } from "./permission"
import { Problem } from "./problem"
import { Score } from "./score"
import { Solution } from "./solution"
import { Statement } from "./statement"
import { Submission } from "./submission"
import { Template } from "./template"
import { Test } from "./test"
import { Testset } from "./testset"
import { Version } from "./version"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class Atlas {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateProblem(input: CreateProblemInput, opts?: any): Promise<CreateProblemOutput> {
    const path = "/problems";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteProblem(input: DeleteProblemInput, opts?: any): Promise<DeleteProblemOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListProblems(input: ListProblemsInput, opts?: any): Promise<ListProblemsOutput> {
    const path = "/problems";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeProblem(input: DescribeProblemInput, opts?: any): Promise<DescribeProblemOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateVisibility(input: UpdateVisibilityInput, opts?: any): Promise<UpdateVisibilityOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/visibility";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdatePrivacy(input: UpdatePrivacyInput, opts?: any): Promise<UpdatePrivacyOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/privacy";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ListExamples(input: ListExamplesInput, opts?: any): Promise<ListExamplesOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/examples";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateVerifier(input: UpdateVerifierInput, opts?: any): Promise<UpdateVerifierOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/verifier";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DescribeVerifier(input: DescribeVerifierInput, opts?: any): Promise<DescribeVerifierOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/verifier";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateInteractor(input: UpdateInteractorInput, opts?: any): Promise<UpdateInteractorOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/interactor";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DescribeInteractor(input: DescribeInteractorInput, opts?: any): Promise<DescribeInteractorOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/interactor";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateStatement(input: CreateStatementInput, opts?: any): Promise<CreateStatementOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/statements";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  UpdateStatement(input: UpdateStatementInput, opts?: any): Promise<UpdateStatementOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/statements/"+encodeURIComponent(input.statementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.statementId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteStatement(input: DeleteStatementInput, opts?: any): Promise<DeleteStatementOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/statements/"+encodeURIComponent(input.statementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.statementId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListStatements(input: ListStatementsInput, opts?: any): Promise<ListStatementsOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/statements";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeStatement(input: DescribeStatementInput, opts?: any): Promise<DescribeStatementOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/statements/"+encodeURIComponent(input.statementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.statementId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  LookupStatement(input: LookupStatementInput, opts?: any): Promise<LookupStatementOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/translate";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  PreviewStatement(input: PreviewStatementInput, opts?: any): Promise<PreviewStatementOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/renders";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CreateTestset(input: CreateTestsetInput, opts?: any): Promise<CreateTestsetOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testsets";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateTestset(input: UpdateTestsetInput, opts?: any): Promise<UpdateTestsetOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testsets/"+encodeURIComponent(input.testsetId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.testsetId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteTestset(input: DeleteTestsetInput, opts?: any): Promise<DeleteTestsetOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testsets/"+encodeURIComponent(input.testsetId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.testsetId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListTestsets(input: ListTestsetsInput, opts?: any): Promise<ListTestsetsOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testsets";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeTestset(input: DescribeTestsetInput, opts?: any): Promise<DescribeTestsetOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testsets/"+encodeURIComponent(input.testsetId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.testsetId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateTest(input: CreateTestInput, opts?: any): Promise<CreateTestOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.testsetId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateTest(input: UpdateTestInput, opts?: any): Promise<UpdateTestOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests/"+encodeURIComponent(input.testId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.testsetId);
    delete(input.testId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteTest(input: DeleteTestInput, opts?: any): Promise<DeleteTestOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests/"+encodeURIComponent(input.testId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.testsetId);
    delete(input.testId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListTests(input: ListTestsInput, opts?: any): Promise<ListTestsOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.testsetId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeTest(input: DescribeTestInput, opts?: any): Promise<DescribeTestOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testsets/"+encodeURIComponent(input.testsetId||'')+"/tests/"+encodeURIComponent(input.testId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.testsetId);
    delete(input.testId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  GrantPermission(input: GrantPermissionInput, opts?: any): Promise<GrantPermissionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/permissions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  RevokePermission(input: RevokePermissionInput, opts?: any): Promise<RevokePermissionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/permissions/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.userId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListPermissions(input: ListPermissionsInput, opts?: any): Promise<ListPermissionsOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/permissions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  IntrospectPermission(input: IntrospectPermissionInput, opts?: any): Promise<IntrospectPermissionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/introspect-permission";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateCodeTemplate(input: CreateCodeTemplateInput, opts?: any): Promise<CreateCodeTemplateOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/templates";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateCodeTemplate(input: UpdateCodeTemplateInput, opts?: any): Promise<UpdateCodeTemplateOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/templates/"+encodeURIComponent(input.templateId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.templateId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteCodeTemplate(input: DeleteCodeTemplateInput, opts?: any): Promise<DeleteCodeTemplateOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/templates/"+encodeURIComponent(input.templateId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.templateId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListCodeTemplates(input: ListCodeTemplatesInput, opts?: any): Promise<ListCodeTemplatesOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/templates";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeCodeTemplate(input: DescribeCodeTemplateInput, opts?: any): Promise<DescribeCodeTemplateOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/templates/"+encodeURIComponent(input.templateId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.templateId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateAttachment(input: CreateAttachmentInput, opts?: any): Promise<CreateAttachmentOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/attachments";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateAttachment(input: UpdateAttachmentInput, opts?: any): Promise<UpdateAttachmentOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/attachments/"+encodeURIComponent(input.attachmentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.attachmentId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteAttachment(input: DeleteAttachmentInput, opts?: any): Promise<DeleteAttachmentOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/attachments/"+encodeURIComponent(input.attachmentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.attachmentId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListAttachments(input: ListAttachmentsInput, opts?: any): Promise<ListAttachmentsOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/attachments";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeAttachment(input: DescribeAttachmentInput, opts?: any): Promise<DescribeAttachmentOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/attachments/"+encodeURIComponent(input.attachmentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.attachmentId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListVersions(input: ListVersionsInput, opts?: any): Promise<ListVersionsOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/versions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListProblemTop(input: ListProblemTopInput, opts?: any): Promise<ListProblemTopOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/top";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeProblemGrading(input: DescribeProblemGradingInput, opts?: any): Promise<DescribeProblemGradingOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/grading";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateSolution(input: CreateSolutionInput, opts?: any): Promise<CreateSolutionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/solutions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateSolution(input: UpdateSolutionInput, opts?: any): Promise<UpdateSolutionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/solutions/"+encodeURIComponent(input.solutionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.solutionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteSolution(input: DeleteSolutionInput, opts?: any): Promise<DeleteSolutionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/solutions/"+encodeURIComponent(input.solutionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.solutionId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListSolutions(input: ListSolutionsInput, opts?: any): Promise<ListSolutionsOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/solutions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeSolution(input: DescribeSolutionInput, opts?: any): Promise<DescribeSolutionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/solutions/"+encodeURIComponent(input.solutionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.solutionId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  PublishSolution(input: PublishSolutionInput, opts?: any): Promise<PublishSolutionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/solutions/"+encodeURIComponent(input.solutionId||'')+"/publish";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.solutionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UnpublishSolution(input: UnpublishSolutionInput, opts?: any): Promise<UnpublishSolutionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/solutions/"+encodeURIComponent(input.solutionId||'')+"/unpublish";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.solutionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ApproveSolution(input: ApproveSolutionInput, opts?: any): Promise<ApproveSolutionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/solutions/"+encodeURIComponent(input.solutionId||'')+"/approve";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.solutionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  RefuseSolution(input: RefuseSolutionInput, opts?: any): Promise<RefuseSolutionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/solutions/"+encodeURIComponent(input.solutionId||'')+"/refuse";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.solutionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CreateCategory(input: CreateCategoryInput, opts?: any): Promise<CreateCategoryOutput> {
    const path = "/categories";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateCategory(input: UpdateCategoryInput, opts?: any): Promise<UpdateCategoryOutput> {
    const path = "/categories/"+encodeURIComponent(input.categoryId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.categoryId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteCategory(input: DeleteCategoryInput, opts?: any): Promise<DeleteCategoryOutput> {
    const path = "/categories/"+encodeURIComponent(input.categoryId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.categoryId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListCategories(input: ListCategoriesInput, opts?: any): Promise<ListCategoriesOutput> {
    const path = "/categories";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeCategory(input: DescribeCategoryInput, opts?: any): Promise<DescribeCategoryOutput> {
    const path = "/categories/"+encodeURIComponent(input.categoryId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.categoryId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  AssignCategory(input: AssignCategoryInput, opts?: any): Promise<AssignCategoryOutput> {
    const path = "/categories/"+encodeURIComponent(input.categoryId||'')+"/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.categoryId);
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UnassignCategory(input: UnassignCategoryInput, opts?: any): Promise<UnassignCategoryOutput> {
    const path = "/categories/"+encodeURIComponent(input.categoryId||'')+"/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.categoryId);
    delete(input.problemId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  CreateSubmission(input: CreateSubmissionInput, opts?: any): Promise<CreateSubmissionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/submissions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeSubmission(input: DescribeSubmissionInput, opts?: any): Promise<DescribeSubmissionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/submissions/"+encodeURIComponent(input.submissionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.submissionId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  RetestSubmission(input: RetestSubmissionInput, opts?: any): Promise<RetestSubmissionOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/submissions/"+encodeURIComponent(input.submissionId||'')+"/retest";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.submissionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeScore(input: DescribeScoreInput, opts?: any): Promise<DescribeScoreOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/scores/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type ListProblemsInput = {
  offset?: number;
  size?: number;
  filters?: ListProblemsInput_Filter;
}

export type ListProblemsInput_Filter = {
  id?: ExpressionID[];
  categoryId?: ExpressionID[];
  isVisible?: ExpressionBool[];
  isPrivate?: ExpressionBool[];
  number?: ExpressionInt[];
}

export type ListProblemsOutput = {
  total?: number;
  items?: Problem[];
}

export type CreateProblemInput = {
  problem?: Problem;
  statement?: Statement;
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
  problemErn?: string;
}

export type DescribeProblemOutput = {
  problem?: Problem;
}

export type ListStatementsInput = {
  problemId?: string;
  version?: number;
}

export type ListStatementsOutput = {
  total?: number;
  items?: Statement[];
}

export type DescribeStatementInput = {
  problemId?: string;
  statementId?: string;
  rendered?: boolean;
  version?: number;
}

export type DescribeStatementOutput = {
  statement?: Statement;
}

export type LookupStatementInput = {
  problemId?: string;
  preferredLocale?: string[];
  rendered?: boolean;
  version?: number;
}

export type LookupStatementOutput = {
  statement?: Statement;
}

export type PreviewStatementInput = {
  problemId?: string;
  statement?: Statement;
}

export type PreviewStatementOutput = {
  statement?: Statement;
}

export type CreateStatementInput = {
  problemId?: string;
  statement?: Statement;
}

export type CreateStatementOutput = {
  statementId?: string;
}

export type UpdateStatementInput = {
  problemId?: string;
  statementId?: string;
  statement?: Statement;
}

export type UpdateStatementOutput = Record<string, unknown>;

export type DeleteStatementInput = {
  problemId?: string;
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
  version?: number;
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

export type IntrospectPermissionInput = {
  problemId?: string;
}

export type IntrospectPermissionOutput = {
  permission?: Permission;
}

export type CreateCodeTemplateInput = {
  problemId?: string;
  template?: Template;
}

export type CreateCodeTemplateOutput = {
  templateId?: string;
}

export type UpdateCodeTemplateInput = {
  problemId?: string;
  templateId?: string;
  template?: Template;
}

export type UpdateCodeTemplateOutput = Record<string, unknown>;

export type DeleteCodeTemplateInput = {
  problemId?: string;
  templateId?: string;
}

export type DeleteCodeTemplateOutput = Record<string, unknown>;

export type ListCodeTemplatesInput = {
  problemId?: string;
  version?: number;
}

export type ListCodeTemplatesOutput = {
  total?: number;
  items?: Template[];
}

export type DescribeCodeTemplateInput = {
  problemId?: string;
  templateId?: string;
  templateErn?: string;
  version?: number;
}

export type DescribeCodeTemplateOutput = {
  template?: Template;
}

export type CreateAttachmentInput = {
  problemId?: string;
  attachment?: Attachment;
}

export type CreateAttachmentOutput = {
  attachmentId?: string;
}

export type UpdateAttachmentInput = {
  problemId?: string;
  attachmentId?: string;
  attachment?: Attachment;
}

export type UpdateAttachmentOutput = Record<string, unknown>;

export type DeleteAttachmentInput = {
  problemId?: string;
  attachmentId?: string;
}

export type DeleteAttachmentOutput = Record<string, unknown>;

export type ListAttachmentsInput = {
  problemId?: string;
  offset?: number;
  size?: number;
  filters?: ListAttachmentsInput_Filter;
  version?: number;
}

export type ListAttachmentsInput_Filter = {
  id?: ExpressionID[];
  name?: ExpressionString[];
}

export type ListAttachmentsOutput = {
  total?: number;
  items?: Attachment[];
}

export type DescribeAttachmentInput = {
  problemId?: string;
  attachmentId?: string;
  version?: number;
}

export type DescribeAttachmentOutput = {
  attachment?: Attachment;
}

export type ListVersionsInput = {
  problemId?: string;
  offset?: number;
  size?: number;
  filters?: ListVersionsInput_Filter;
}

export type ListVersionsInput_Filter = {
  number?: ExpressionInt[];
  createdBy?: ExpressionID[];
  createdAt?: ExpressionTimestamp[];
  changeOp?: ExpressionEnum[];
  changePath?: ExpressionString[];
}

export type ListVersionsOutput = {
  total?: number;
  items?: Version[];
}

export type ListProblemTopInput = {
  problemId?: string;
}

export type ListProblemTopOutput = {
  items?: Submission[];
}

export type DescribeProblemGradingInput = {
  problemId?: string;
}

export type DescribeProblemGradingOutput = {
  ranges?: DescribeProblemGradingOutput_Range[];
}

export type DescribeProblemGradingOutput_Range = {
  grade?: number;
  upperBound?: number;
}

export type CreateSolutionInput = {
  problemId?: string;
  solution?: Solution;
}

export type CreateSolutionOutput = {
  solutionId?: string;
}

export type UpdateSolutionInput = {
  problemId?: string;
  solutionId?: string;
  solution?: Solution;
}

export type UpdateSolutionOutput = Record<string, unknown>;

export type DeleteSolutionInput = {
  problemId?: string;
  solutionId?: string;
}

export type DeleteSolutionOutput = Record<string, unknown>;

export type ListSolutionsInput = {
  problemId?: string;
  offset?: number;
  size?: number;
  filters?: ListSolutionsInput_Filter;
}

export type ListSolutionsInput_Filter = {
  id?: ExpressionID[];
  problemId?: ExpressionID[];
  authorId?: ExpressionID[];
  moderationStatus?: ExpressionEnum[];
  published?: ExpressionBool[];
  lang?: ExpressionEnum[];
}

export type ListSolutionsOutput = {
  total?: number;
  items?: Solution[];
}

export type DescribeSolutionInput = {
  problemId?: string;
  solutionId?: string;
}

export type DescribeSolutionOutput = {
  solution?: Solution;
}

export type PublishSolutionInput = {
  problemId?: string;
  solutionId?: string;
}

export type PublishSolutionOutput = Record<string, unknown>;

export type UnpublishSolutionInput = {
  problemId?: string;
  solutionId?: string;
}

export type UnpublishSolutionOutput = Record<string, unknown>;

export type ApproveSolutionInput = {
  problemId?: string;
  solutionId?: string;
}

export type ApproveSolutionOutput = Record<string, unknown>;

export type RefuseSolutionInput = {
  problemId?: string;
  solutionId?: string;
  comment?: string;
}

export type RefuseSolutionOutput = Record<string, unknown>;

export type ListCategoriesInput = {
  offset?: number;
  size?: number;
  filters?: ListCategoriesInput_Filter;
}

export type ListCategoriesInput_Filter = {
  id?: ExpressionID[];
  parentId?: ExpressionID[];
  problemId?: ExpressionID[];
  isVisible?: ExpressionBool[];
}

export type ListCategoriesOutput = {
  total?: number;
  items?: Category[];
}

export type CreateCategoryInput = {
  category?: Category;
}

export type CreateCategoryOutput = {
  categoryId?: string;
}

export type UpdateCategoryInput = {
  categoryId?: string;
  category?: Category;
}

export type UpdateCategoryOutput = Record<string, unknown>;

export type DeleteCategoryInput = {
  categoryId?: string;
}

export type DeleteCategoryOutput = Record<string, unknown>;

export type DescribeCategoryInput = {
  categoryId?: string;
}

export type DescribeCategoryOutput = {
  category?: Category;
}

export type AssignCategoryInput = {
  categoryId?: string;
  problemId?: string;
  index?: number;
}

export type AssignCategoryOutput = Record<string, unknown>;

export type UnassignCategoryInput = {
  categoryId?: string;
  problemId?: string;
}

export type UnassignCategoryOutput = Record<string, unknown>;

export type CreateSubmissionInput = {
  problemId?: string;
  lang?: string;
  source?: string;
}

export type CreateSubmissionOutput = {
  submissionId?: string;
}

export type DescribeSubmissionInput = {
  problemId?: string;
  submissionId?: string;
}

export type DescribeSubmissionOutput = {
  submission?: Submission;
}

export type RetestSubmissionInput = {
  problemId?: string;
  submissionId?: string;
  debug?: boolean;
}

export type RetestSubmissionOutput = Record<string, unknown>;

export type DescribeScoreInput = {
  problemId?: string;
  userId?: string;
}

export type DescribeScoreOutput = {
  score?: Score;
}

export type UpdateVisibilityInput = {
  problemId?: string;
  visible?: boolean;
}

export type UpdateVisibilityOutput = Record<string, unknown>;

export type UpdatePrivacyInput = {
  problemId?: string;
  private?: boolean;
}

export type UpdatePrivacyOutput = Record<string, unknown>;

