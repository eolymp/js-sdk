// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { CreateAnnouncementInput, CreateAnnouncementOutput, DeleteAnnouncementInput, DeleteAnnouncementOutput, DescribeAnnouncementInput, DescribeAnnouncementOutput, DescribeAnnouncementStatusInput, DescribeAnnouncementStatusOutput, ListAnnouncementsInput, ListAnnouncementsOutput, ReadAnnouncementInput, ReadAnnouncementOutput, UpdateAnnouncementInput, UpdateAnnouncementOutput } from "./announcement_service"
import { CloseContestInput, CloseContestOutput, CreateContestInput, CreateContestOutput, DeleteContestInput, DeleteContestOutput, DescribeContestInput, DescribeContestOutput, DescribeContestUsageInput, DescribeContestUsageOutput, FreezeContestInput, FreezeContestOutput, ListActivitiesInput, ListActivitiesOutput, ListContestsInput, ListContestsOutput, OpenContestInput, OpenContestOutput, ResumeContestInput, ResumeContestOutput, SuspendContestInput, SuspendContestOutput, UpdateContestInput, UpdateContestOutput } from "./contest_service"
import { AssignParticipantInput, AssignParticipantOutput, DeleteParticipantInput, DeleteParticipantOutput, DescribeParticipantInput, DescribeParticipantOutput, DescribeViewerInput, DescribeViewerOutput, DisableParticipantInput, DisableParticipantOutput, EnableParticipantInput, EnableParticipantOutput, JoinContestInput, JoinContestOutput, ListParticipantsInput, ListParticipantsOutput, StartContestInput, StartContestOutput, UpdateParticipantInput, UpdateParticipantOutput } from "./participant_service"
import { EnterPasscodeInput, EnterPasscodeOutput, RemovePasscodeInput, RemovePasscodeOutput, ResetPasscodeInput, ResetPasscodeOutput, SetPasscodeInput, SetPasscodeOutput, VerifyPasscodeInput, VerifyPasscodeOutput } from "./passcode_service"
import { DeleteProblemInput, DeleteProblemOutput, DescribeCodeTemplateInput, DescribeCodeTemplateOutput, DescribeProblemInput, DescribeProblemOutput, ImportProblemInput, ImportProblemOutput, ListAttachmentsInput, ListAttachmentsOutput, ListExamplesInput, ListExamplesOutput, ListProblemsInput, ListProblemsOutput, ListStatementsInput, ListStatementsOutput, LookupCodeTemplateInput, LookupCodeTemplateOutput, SyncProblemInput, SyncProblemOutput, UpdateProblemInput, UpdateProblemOutput } from "./problem_service"
import { DescribeScoreInput, DescribeScoreOutput, ExportScoreInput, ExportScoreOutput, ImportScoreInput, ImportScoreOutput, IntrospectScoreInput, IntrospectScoreOutput, ListResultInput, ListResultOutput, RebuildScoreInput, RebuildScoreOutput } from "./score_service"
import { CreateSubmissionInput, CreateSubmissionOutput, DeleteSubmissionInput, DeleteSubmissionOutput, DescribeSubmissionInput, DescribeSubmissionOutput, ListSubmissionsInput, ListSubmissionsOutput, RestoreSubmissionInput, RestoreSubmissionOutput, RetestProblemInput, RetestProblemOutput, RetestSubmissionInput, RetestSubmissionOutput, WatchSubmissionInput, WatchSubmissionOutput } from "./submission_service"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class Judge {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateContest(input: CreateContestInput, opts?: any): Promise<CreateContestOutput> {
    const path = "/contests";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteContest(input: DeleteContestInput, opts?: any): Promise<DeleteContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  UpdateContest(input: UpdateContestInput, opts?: any): Promise<UpdateContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DescribeContest(input: DescribeContestInput, opts?: any): Promise<DescribeContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListContests(input: ListContestsInput, opts?: any): Promise<ListContestsOutput> {
    const path = "/contests";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  OpenContest(input: OpenContestInput, opts?: any): Promise<OpenContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/open";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CloseContest(input: CloseContestInput, opts?: any): Promise<CloseContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/close";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  SuspendContest(input: SuspendContestInput, opts?: any): Promise<SuspendContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/suspend";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  FreezeContest(input: FreezeContestInput, opts?: any): Promise<FreezeContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/freeze";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ResumeContest(input: ResumeContestInput, opts?: any): Promise<ResumeContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/resume";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ImportProblem(input: ImportProblemInput, opts?: any): Promise<ImportProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  SyncProblem(input: SyncProblemInput, opts?: any): Promise<SyncProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/sync";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateProblem(input: UpdateProblemInput, opts?: any): Promise<UpdateProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ListProblems(input: ListProblemsInput, opts?: any): Promise<ListProblemsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeProblem(input: DescribeProblemInput, opts?: any): Promise<DescribeProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeCodeTemplate(input: DescribeCodeTemplateInput, opts?: any): Promise<DescribeCodeTemplateOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/templates/"+encodeURIComponent(input.templateId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);
    delete(input.templateId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  LookupCodeTemplate(input: LookupCodeTemplateInput, opts?: any): Promise<LookupCodeTemplateOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/lookup-template";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListStatements(input: ListStatementsInput, opts?: any): Promise<ListStatementsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/statements";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListAttachments(input: ListAttachmentsInput, opts?: any): Promise<ListAttachmentsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/attachments";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListExamples(input: ListExamplesInput, opts?: any): Promise<ListExamplesOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/examples";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DeleteProblem(input: DeleteProblemInput, opts?: any): Promise<DeleteProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  RetestProblem(input: RetestProblemInput, opts?: any): Promise<RetestProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/retest";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  AssignParticipant(input: AssignParticipantInput, opts?: any): Promise<AssignParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  EnableParticipant(input: EnableParticipantInput, opts?: any): Promise<EnableParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/enable";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DisableParticipant(input: DisableParticipantInput, opts?: any): Promise<DisableParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/disable";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateParticipant(input: UpdateParticipantInput, opts?: any): Promise<UpdateParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteParticipant(input: DeleteParticipantInput, opts?: any): Promise<DeleteParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListParticipants(input: ListParticipantsInput, opts?: any): Promise<ListParticipantsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeParticipant(input: DescribeParticipantInput, opts?: any): Promise<DescribeParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeViewer(input: DescribeViewerInput, opts?: any): Promise<DescribeViewerOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/introspect";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  JoinContest(input: JoinContestInput, opts?: any): Promise<JoinContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/join";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  StartContest(input: StartContestInput, opts?: any): Promise<StartContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/start";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  VerifyPasscode(input: VerifyPasscodeInput, opts?: any): Promise<VerifyPasscodeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/verify-passcode";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  EnterPasscode(input: EnterPasscodeInput, opts?: any): Promise<EnterPasscodeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/enter-passcode";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ResetPasscode(input: ResetPasscodeInput, opts?: any): Promise<ResetPasscodeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/passcode";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  SetPasscode(input: SetPasscodeInput, opts?: any): Promise<SetPasscodeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/passcode";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  RemovePasscode(input: RemovePasscodeInput, opts?: any): Promise<RemovePasscodeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/passcode";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  CreateSubmission(input: CreateSubmissionInput, opts?: any): Promise<CreateSubmissionOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/submissions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ListSubmissions(input: ListSubmissionsInput, opts?: any): Promise<ListSubmissionsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/submissions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeSubmission(input: DescribeSubmissionInput, opts?: any): Promise<DescribeSubmissionOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/submissions/"+encodeURIComponent(input.submissionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.submissionId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  RetestSubmission(input: RetestSubmissionInput, opts?: any): Promise<RetestSubmissionOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/submissions/"+encodeURIComponent(input.submissionId||'')+"/retest";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.submissionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteSubmission(input: DeleteSubmissionInput, opts?: any): Promise<DeleteSubmissionOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/submissions/"+encodeURIComponent(input.submissionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.submissionId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  RestoreSubmission(input: RestoreSubmissionInput, opts?: any): Promise<RestoreSubmissionOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/submissions/"+encodeURIComponent(input.submissionId||'')+"/restore";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.submissionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CreateAnnouncement(input: CreateAnnouncementInput, opts?: any): Promise<CreateAnnouncementOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateAnnouncement(input: UpdateAnnouncementInput, opts?: any): Promise<UpdateAnnouncementOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements/"+encodeURIComponent(input.announcementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.announcementId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteAnnouncement(input: DeleteAnnouncementInput, opts?: any): Promise<DeleteAnnouncementOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements/"+encodeURIComponent(input.announcementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.announcementId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ReadAnnouncement(input: ReadAnnouncementInput, opts?: any): Promise<ReadAnnouncementOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements/"+encodeURIComponent(input.announcementId||'')+"/read";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.announcementId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeAnnouncement(input: DescribeAnnouncementInput, opts?: any): Promise<DescribeAnnouncementOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements/"+encodeURIComponent(input.announcementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.announcementId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeAnnouncementStatus(input: DescribeAnnouncementStatusInput, opts?: any): Promise<DescribeAnnouncementStatusOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements/"+encodeURIComponent(input.announcementId||'')+"/status";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.announcementId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListAnnouncements(input: ListAnnouncementsInput, opts?: any): Promise<ListAnnouncementsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  IntrospectScore(input: IntrospectScoreInput, opts?: any): Promise<IntrospectScoreOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/introspect/score";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeScore(input: DescribeScoreInput, opts?: any): Promise<DescribeScoreOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/score";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ImportScore(input: ImportScoreInput, opts?: any): Promise<ImportScoreOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/scores";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ExportScore(input: ExportScoreInput, opts?: any): Promise<ExportScoreOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/scores";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListResult(input: ListResultInput, opts?: any): Promise<ListResultOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/results";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  RebuildScore(input: RebuildScoreInput, opts?: any): Promise<RebuildScoreOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/rebuild";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ListActivities(input: ListActivitiesInput, opts?: any): Promise<ListActivitiesOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/activities";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeContestUsage(input: DescribeContestUsageInput, opts?: any): Promise<DescribeContestUsageOutput> {
    const path = "/usage/contests";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

