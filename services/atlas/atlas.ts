// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { CreateAttachmentInput, CreateAttachmentOutput, DeleteAttachmentInput, DeleteAttachmentOutput, DescribeAttachmentInput, DescribeAttachmentOutput, ListAttachmentsInput, ListAttachmentsOutput, UpdateAttachmentInput, UpdateAttachmentOutput } from "./attachment_service"
import { GetBookmarkInput, GetBookmarkOutput, SetBookmarkInput, SetBookmarkOutput } from "./bookmark_service"
import { CreateCodeTemplateInput, CreateCodeTemplateOutput, DeleteCodeTemplateInput, DeleteCodeTemplateOutput, DescribeCodeTemplateInput, DescribeCodeTemplateOutput, ListCodeTemplatesInput, ListCodeTemplatesOutput, LookupCodeTemplateInput, LookupCodeTemplateOutput, UpdateCodeTemplateInput, UpdateCodeTemplateOutput } from "./code_template_service"
import { CreateProblemInput, CreateProblemOutput, DeleteProblemInput, DeleteProblemOutput, DescribeProblemInput, DescribeProblemOutput, ListProblemsInput, ListProblemsOutput, UpdateProblemInput, UpdateProblemOutput } from "./library_service"
import { ListVersionsInput, ListVersionsOutput } from "./problem_service"
import { DescribeProblemGradingInput, DescribeProblemGradingOutput, DescribeScoreInput, DescribeScoreOutput, ListProblemTopInput, ListProblemTopOutput } from "./scoring_service"
import { CreateStatementInput, CreateStatementOutput, DeleteStatementInput, DeleteStatementOutput, DescribeStatementInput, DescribeStatementOutput, ListStatementsInput, ListStatementsOutput, LookupStatementInput, LookupStatementOutput, PreviewStatementInput, PreviewStatementOutput, UpdateStatementInput, UpdateStatementOutput } from "./statement_service"
import { CreateSubmissionInput, CreateSubmissionOutput, DescribeSubmissionInput, DescribeSubmissionOutput, ListSubmissionsInput, ListSubmissionsOutput, RetestSubmissionInput, RetestSubmissionOutput } from "./submission_service"
import { CreateTestInput, CreateTestOutput, CreateTestsetInput, CreateTestsetOutput, DeleteTestInput, DeleteTestOutput, DeleteTestsetInput, DeleteTestsetOutput, DescribeInteractorInput, DescribeInteractorOutput, DescribeTestInput, DescribeTestOutput, DescribeTestingConfigInput, DescribeTestingConfigOutput, DescribeTestsetInput, DescribeTestsetOutput, DescribeVerifierInput, DescribeVerifierOutput, ListExamplesInput, ListExamplesOutput, ListTestsInput, ListTestsOutput, ListTestsetsInput, ListTestsetsOutput, UpdateInteractorInput, UpdateInteractorOutput, UpdateTestInput, UpdateTestOutput, UpdateTestingConfigInput, UpdateTestingConfigOutput, UpdateTestsetInput, UpdateTestsetOutput, UpdateVerifierInput, UpdateVerifierOutput } from "./testing_service"

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

  UpdateProblem(input: UpdateProblemInput, opts?: any): Promise<UpdateProblemOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  SetBookmark(input: SetBookmarkInput, opts?: any): Promise<SetBookmarkOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/bookmark";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  GetBookmark(input: GetBookmarkInput, opts?: any): Promise<GetBookmarkOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/bookmark";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListExamples(input: ListExamplesInput, opts?: any): Promise<ListExamplesOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/examples";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateTestingConfig(input: UpdateTestingConfigInput, opts?: any): Promise<UpdateTestingConfigOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testing";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DescribeTestingConfig(input: DescribeTestingConfigInput, opts?: any): Promise<DescribeTestingConfigOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/testing";

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

  LookupCodeTemplate(input: LookupCodeTemplateInput, opts?: any): Promise<LookupCodeTemplateOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/template";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);

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

  ListSubmissions(input: ListSubmissionsInput, opts?: any): Promise<ListSubmissionsOutput> {
    const path = "/submissions";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeScore(input: DescribeScoreInput, opts?: any): Promise<DescribeScoreOutput> {
    const path = "/problems/"+encodeURIComponent(input.problemId||'')+"/scores/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.problemId);
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

