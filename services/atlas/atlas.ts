// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Interactor } from "../executor/interactor"
import { Verifier } from "../executor/verifier"
import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionTimestamp } from "../wellknown/expression"
import { Category } from "./category"
import { Change } from "./change"
import { Permission } from "./permission"
import { Problem } from "./problem"
import { Score } from "./score"
import { Solution } from "./solution"
import { Statement } from "./statement"
import { Submission } from "./submission"
import { Template } from "./template"
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

  UpdateVisibility(input: UpdateVisibilityInput): Promise<UpdateVisibilityOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UpdateVisibility", input);
  }

  UpdatePrivacy(input: UpdatePrivacyInput): Promise<UpdatePrivacyOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UpdatePrivacy", input);
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

  CreateCodeTemplate(input: CreateCodeTemplateInput): Promise<CreateCodeTemplateOutput> {
    return this.cli.call("eolymp.atlas.Atlas/CreateCodeTemplate", input);
  }

  UpdateCodeTemplate(input: UpdateCodeTemplateInput): Promise<UpdateCodeTemplateOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UpdateCodeTemplate", input);
  }

  DeleteCodeTemplate(input: DeleteCodeTemplateInput): Promise<DeleteCodeTemplateOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DeleteCodeTemplate", input);
  }

  ListCodeTemplates(input: ListCodeTemplatesInput): Promise<ListCodeTemplatesOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListCodeTemplates", input);
  }

  DescribeCodeTemplate(input: DescribeCodeTemplateInput): Promise<DescribeCodeTemplateOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeCodeTemplate", input);
  }

  DescribeChange(input: DescribeChangeInput): Promise<DescribeChangeOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeChange", input);
  }

  ListChanges(input: ListChangesInput): Promise<ListChangesOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListChanges", input);
  }

  ListProblemTop(input: ListProblemTopInput): Promise<ListProblemTopOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListProblemTop", input);
  }

  DescribeProblemGrading(input: DescribeProblemGradingInput): Promise<DescribeProblemGradingOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeProblemGrading", input);
  }

  CreateSolution(input: CreateSolutionInput): Promise<CreateSolutionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/CreateSolution", input);
  }

  UpdateSolution(input: UpdateSolutionInput): Promise<UpdateSolutionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UpdateSolution", input);
  }

  DeleteSolution(input: DeleteSolutionInput): Promise<DeleteSolutionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DeleteSolution", input);
  }

  ListSolutions(input: ListSolutionsInput): Promise<ListSolutionsOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListSolutions", input);
  }

  DescribeSolution(input: DescribeSolutionInput): Promise<DescribeSolutionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeSolution", input);
  }

  PublishSolution(input: PublishSolutionInput): Promise<PublishSolutionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/PublishSolution", input);
  }

  UnpublishSolution(input: UnpublishSolutionInput): Promise<UnpublishSolutionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UnpublishSolution", input);
  }

  ApproveSolution(input: ApproveSolutionInput): Promise<ApproveSolutionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ApproveSolution", input);
  }

  RefuseSolution(input: RefuseSolutionInput): Promise<RefuseSolutionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/RefuseSolution", input);
  }

  CreateCategory(input: CreateCategoryInput): Promise<CreateCategoryOutput> {
    return this.cli.call("eolymp.atlas.Atlas/CreateCategory", input);
  }

  UpdateCategory(input: UpdateCategoryInput): Promise<UpdateCategoryOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UpdateCategory", input);
  }

  DeleteCategory(input: DeleteCategoryInput): Promise<DeleteCategoryOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DeleteCategory", input);
  }

  ListCategories(input: ListCategoriesInput): Promise<ListCategoriesOutput> {
    return this.cli.call("eolymp.atlas.Atlas/ListCategories", input);
  }

  DescribeCategory(input: DescribeCategoryInput): Promise<DescribeCategoryOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeCategory", input);
  }

  AssignCategory(input: AssignCategoryInput): Promise<AssignCategoryOutput> {
    return this.cli.call("eolymp.atlas.Atlas/AssignCategory", input);
  }

  UnassignCategory(input: UnassignCategoryInput): Promise<UnassignCategoryOutput> {
    return this.cli.call("eolymp.atlas.Atlas/UnassignCategory", input);
  }

  CreateSubmission(input: CreateSubmissionInput): Promise<CreateSubmissionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/CreateSubmission", input);
  }

  DescribeSubmission(input: DescribeSubmissionInput): Promise<DescribeSubmissionOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeSubmission", input);
  }

  DescribeScore(input: DescribeScoreInput): Promise<DescribeScoreOutput> {
    return this.cli.call("eolymp.atlas.Atlas/DescribeScore", input);
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

export type CreateCodeTemplateInput = {
  problemId?: string;
  template?: Template;
}

export type CreateCodeTemplateOutput = {
  templateId?: string;
}

export type UpdateCodeTemplateInput = {
  templateId?: string;
  template?: Template;
}

export type UpdateCodeTemplateOutput = Record<string, unknown>;

export type DeleteCodeTemplateInput = {
  templateId?: string;
}

export type DeleteCodeTemplateOutput = Record<string, unknown>;

export type ListCodeTemplatesInput = {
  problemId?: string;
}

export type ListCodeTemplatesOutput = {
  total?: number;
  items?: Template[];
}

export type DescribeCodeTemplateInput = {
  templateId?: string;
}

export type DescribeCodeTemplateOutput = {
  template?: Template;
}

export type DescribeChangeInput = {
  changeId?: string;
}

export type DescribeChangeOutput = {
  change?: Change;
}

export type ListChangesInput = {
  problemId?: string;
  offset?: number;
  size?: number;
  filters?: ListChangesInput_Filter;
}

export type ListChangesInput_Filter = {
  id?: ExpressionID[];
  ipAddress?: ExpressionID[];
  userId?: ExpressionID[];
  timestamp?: ExpressionTimestamp[];
  type?: ExpressionEnum[];
}

export type ListChangesOutput = {
  total?: number;
  items?: Change[];
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
  solutionId?: string;
  solution?: Solution;
}

export type UpdateSolutionOutput = Record<string, unknown>;

export type DeleteSolutionInput = {
  solutionId?: string;
}

export type DeleteSolutionOutput = Record<string, unknown>;

export type ListSolutionsInput = {
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
  solutionId?: string;
}

export type DescribeSolutionOutput = {
  solution?: Solution;
}

export type PublishSolutionInput = {
  solutionId?: string;
}

export type PublishSolutionOutput = Record<string, unknown>;

export type UnpublishSolutionInput = {
  solutionId?: string;
}

export type UnpublishSolutionOutput = Record<string, unknown>;

export type ApproveSolutionInput = {
  solutionId?: string;
}

export type ApproveSolutionOutput = Record<string, unknown>;

export type RefuseSolutionInput = {
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
  submissionId?: string;
}

export type DescribeSubmissionOutput = {
  submission?: Submission;
}

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

