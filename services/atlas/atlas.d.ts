import { Interactor } from "../executor/interactor";
import { Verifier } from "../executor/verifier";
import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionInt, ExpressionString, ExpressionTimestamp } from "../wellknown/expression";
import { Attachment } from "./attachment";
import { Category } from "./category";
import { Change } from "./change";
import { Permission } from "./permission";
import { Problem } from "./problem";
import { Score } from "./score";
import { Solution } from "./solution";
import { Statement } from "./statement";
import { Submission } from "./submission";
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
    UpdateVisibility(input: UpdateVisibilityInput): Promise<UpdateVisibilityOutput>;
    UpdatePrivacy(input: UpdatePrivacyInput): Promise<UpdatePrivacyOutput>;
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
    CreateAttachment(input: CreateAttachmentInput): Promise<CreateAttachmentOutput>;
    UpdateAttachment(input: UpdateAttachmentInput): Promise<UpdateAttachmentOutput>;
    DeleteAttachment(input: DeleteAttachmentInput): Promise<DeleteAttachmentOutput>;
    ListAttachments(input: ListAttachmentsInput): Promise<ListAttachmentsOutput>;
    DescribeAttachment(input: DescribeAttachmentInput): Promise<DescribeAttachmentOutput>;
    DescribeChange(input: DescribeChangeInput): Promise<DescribeChangeOutput>;
    ListChanges(input: ListChangesInput): Promise<ListChangesOutput>;
    ListProblemTop(input: ListProblemTopInput): Promise<ListProblemTopOutput>;
    DescribeProblemGrading(input: DescribeProblemGradingInput): Promise<DescribeProblemGradingOutput>;
    CreateSolution(input: CreateSolutionInput): Promise<CreateSolutionOutput>;
    UpdateSolution(input: UpdateSolutionInput): Promise<UpdateSolutionOutput>;
    DeleteSolution(input: DeleteSolutionInput): Promise<DeleteSolutionOutput>;
    ListSolutions(input: ListSolutionsInput): Promise<ListSolutionsOutput>;
    DescribeSolution(input: DescribeSolutionInput): Promise<DescribeSolutionOutput>;
    PublishSolution(input: PublishSolutionInput): Promise<PublishSolutionOutput>;
    UnpublishSolution(input: UnpublishSolutionInput): Promise<UnpublishSolutionOutput>;
    ApproveSolution(input: ApproveSolutionInput): Promise<ApproveSolutionOutput>;
    RefuseSolution(input: RefuseSolutionInput): Promise<RefuseSolutionOutput>;
    CreateCategory(input: CreateCategoryInput): Promise<CreateCategoryOutput>;
    UpdateCategory(input: UpdateCategoryInput): Promise<UpdateCategoryOutput>;
    DeleteCategory(input: DeleteCategoryInput): Promise<DeleteCategoryOutput>;
    ListCategories(input: ListCategoriesInput): Promise<ListCategoriesOutput>;
    DescribeCategory(input: DescribeCategoryInput): Promise<DescribeCategoryOutput>;
    AssignCategory(input: AssignCategoryInput): Promise<AssignCategoryOutput>;
    UnassignCategory(input: UnassignCategoryInput): Promise<UnassignCategoryOutput>;
    CreateSubmission(input: CreateSubmissionInput): Promise<CreateSubmissionOutput>;
    DescribeSubmission(input: DescribeSubmissionInput): Promise<DescribeSubmissionOutput>;
    DescribeScore(input: DescribeScoreInput): Promise<DescribeScoreOutput>;
}
export declare type ListProblemsInput = {
    offset?: number;
    size?: number;
    filters?: ListProblemsInput_Filter;
};
export declare type ListProblemsInput_Filter = {
    id?: ExpressionID[];
    categoryId?: ExpressionID[];
    isVisible?: ExpressionBool[];
    isPrivate?: ExpressionBool[];
    number?: ExpressionInt[];
};
export declare type ListProblemsOutput = {
    total?: number;
    items?: Problem[];
};
export declare type CreateProblemInput = {
    problem?: Problem;
    statement?: Statement;
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
export declare type CreateAttachmentInput = {
    problemId?: string;
    attachment?: Attachment;
};
export declare type CreateAttachmentOutput = {
    attachmentId?: string;
};
export declare type UpdateAttachmentInput = {
    attachmentId?: string;
    attachment?: Attachment;
};
export declare type UpdateAttachmentOutput = Record<string, unknown>;
export declare type DeleteAttachmentInput = {
    attachmentId?: string;
};
export declare type DeleteAttachmentOutput = Record<string, unknown>;
export declare type ListAttachmentsInput = {
    problemId?: string;
    offset?: number;
    size?: number;
    filters?: ListAttachmentsInput_Filter;
};
export declare type ListAttachmentsInput_Filter = {
    id?: ExpressionID[];
    name?: ExpressionString[];
};
export declare type ListAttachmentsOutput = {
    total?: number;
    items?: Attachment[];
};
export declare type DescribeAttachmentInput = {
    attachmentId?: string;
};
export declare type DescribeAttachmentOutput = {
    attachment?: Attachment;
};
export declare type DescribeChangeInput = {
    changeId?: string;
};
export declare type DescribeChangeOutput = {
    change?: Change;
};
export declare type ListChangesInput = {
    problemId?: string;
    offset?: number;
    size?: number;
    filters?: ListChangesInput_Filter;
};
export declare type ListChangesInput_Filter = {
    id?: ExpressionID[];
    ipAddress?: ExpressionID[];
    userId?: ExpressionID[];
    timestamp?: ExpressionTimestamp[];
    type?: ExpressionEnum[];
};
export declare type ListChangesOutput = {
    total?: number;
    items?: Change[];
};
export declare type ListProblemTopInput = {
    problemId?: string;
};
export declare type ListProblemTopOutput = {
    items?: Submission[];
};
export declare type DescribeProblemGradingInput = {
    problemId?: string;
};
export declare type DescribeProblemGradingOutput = {
    ranges?: DescribeProblemGradingOutput_Range[];
};
export declare type DescribeProblemGradingOutput_Range = {
    grade?: number;
    upperBound?: number;
};
export declare type CreateSolutionInput = {
    problemId?: string;
    solution?: Solution;
};
export declare type CreateSolutionOutput = {
    solutionId?: string;
};
export declare type UpdateSolutionInput = {
    solutionId?: string;
    solution?: Solution;
};
export declare type UpdateSolutionOutput = Record<string, unknown>;
export declare type DeleteSolutionInput = {
    solutionId?: string;
};
export declare type DeleteSolutionOutput = Record<string, unknown>;
export declare type ListSolutionsInput = {
    offset?: number;
    size?: number;
    filters?: ListSolutionsInput_Filter;
};
export declare type ListSolutionsInput_Filter = {
    id?: ExpressionID[];
    problemId?: ExpressionID[];
    authorId?: ExpressionID[];
    moderationStatus?: ExpressionEnum[];
    published?: ExpressionBool[];
    lang?: ExpressionEnum[];
};
export declare type ListSolutionsOutput = {
    total?: number;
    items?: Solution[];
};
export declare type DescribeSolutionInput = {
    solutionId?: string;
};
export declare type DescribeSolutionOutput = {
    solution?: Solution;
};
export declare type PublishSolutionInput = {
    solutionId?: string;
};
export declare type PublishSolutionOutput = Record<string, unknown>;
export declare type UnpublishSolutionInput = {
    solutionId?: string;
};
export declare type UnpublishSolutionOutput = Record<string, unknown>;
export declare type ApproveSolutionInput = {
    solutionId?: string;
};
export declare type ApproveSolutionOutput = Record<string, unknown>;
export declare type RefuseSolutionInput = {
    solutionId?: string;
    comment?: string;
};
export declare type RefuseSolutionOutput = Record<string, unknown>;
export declare type ListCategoriesInput = {
    offset?: number;
    size?: number;
    filters?: ListCategoriesInput_Filter;
};
export declare type ListCategoriesInput_Filter = {
    id?: ExpressionID[];
    parentId?: ExpressionID[];
    isVisible?: ExpressionBool[];
};
export declare type ListCategoriesOutput = {
    total?: number;
    items?: Category[];
};
export declare type CreateCategoryInput = {
    category?: Category;
};
export declare type CreateCategoryOutput = {
    categoryId?: string;
};
export declare type UpdateCategoryInput = {
    categoryId?: string;
    category?: Category;
};
export declare type UpdateCategoryOutput = Record<string, unknown>;
export declare type DeleteCategoryInput = {
    categoryId?: string;
};
export declare type DeleteCategoryOutput = Record<string, unknown>;
export declare type DescribeCategoryInput = {
    categoryId?: string;
};
export declare type DescribeCategoryOutput = {
    category?: Category;
};
export declare type AssignCategoryInput = {
    categoryId?: string;
    problemId?: string;
    index?: number;
};
export declare type AssignCategoryOutput = Record<string, unknown>;
export declare type UnassignCategoryInput = {
    categoryId?: string;
    problemId?: string;
};
export declare type UnassignCategoryOutput = Record<string, unknown>;
export declare type CreateSubmissionInput = {
    problemId?: string;
    lang?: string;
    source?: string;
};
export declare type CreateSubmissionOutput = {
    submissionId?: string;
};
export declare type DescribeSubmissionInput = {
    submissionId?: string;
};
export declare type DescribeSubmissionOutput = {
    submission?: Submission;
};
export declare type DescribeScoreInput = {
    problemId?: string;
    userId?: string;
};
export declare type DescribeScoreOutput = {
    score?: Score;
};
export declare type UpdateVisibilityInput = {
    problemId?: string;
    visible?: boolean;
};
export declare type UpdateVisibilityOutput = Record<string, unknown>;
export declare type UpdatePrivacyInput = {
    problemId?: string;
    private?: boolean;
};
export declare type UpdatePrivacyOutput = Record<string, unknown>;
export {};
