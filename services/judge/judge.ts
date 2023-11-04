// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionFloat, ExpressionID, ExpressionInt, ExpressionString, ExpressionTimestamp } from "../wellknown/expression"
import { Activity } from "./activity"
import { Announcement } from "./announcement"
import { Contest, Contest_Appearance } from "./contest"
import { Participant } from "./participant"
import { Problem, Problem_Attachment, Problem_Statement, Problem_Test } from "./problem"
import { Reply } from "./reply"
import { Result } from "./result"
import { Score } from "./score"
import { Submission } from "./submission"
import { Template } from "./template"
import { Ticket } from "./ticket"

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

  LookupContest(input: LookupContestInput, opts?: any): Promise<LookupContestOutput> {
    const path = "/contests/__lookup";

    return this.cli.call("GET", this.url+path, input, opts);
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

  AddParticipant(input: AddParticipantInput, opts?: any): Promise<AddParticipantOutput> {
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

  RemoveParticipant(input: RemoveParticipantInput, opts?: any): Promise<RemoveParticipantOutput> {
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

  IntrospectParticipant(input: IntrospectParticipantInput, opts?: any): Promise<IntrospectParticipantOutput> {
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

  CreateTicket(input: CreateTicketInput, opts?: any): Promise<CreateTicketOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/tickets";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CloseTicket(input: CloseTicketInput, opts?: any): Promise<CloseTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/close";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  OpenTicket(input: OpenTicketInput, opts?: any): Promise<OpenTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/open";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ReadTicket(input: ReadTicketInput, opts?: any): Promise<ReadTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/read";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteTicket(input: DeleteTicketInput, opts?: any): Promise<DeleteTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeTicket(input: DescribeTicketInput, opts?: any): Promise<DescribeTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListTickets(input: ListTicketsInput, opts?: any): Promise<ListTicketsOutput> {
    const path = "/tickets";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ReplyTicket(input: ReplyTicketInput, opts?: any): Promise<ReplyTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ListReplies(input: ListRepliesInput, opts?: any): Promise<ListRepliesOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DeleteReply(input: DeleteReplyInput, opts?: any): Promise<DeleteReplyOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies/"+encodeURIComponent(input.replyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);
    delete(input.replyId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  UpdateReply(input: UpdateReplyInput, opts?: any): Promise<UpdateReplyOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies/"+encodeURIComponent(input.replyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);
    delete(input.replyId);

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
}

export type CreateContestInput = {
  contest?: Contest;
}

export type CreateContestOutput = {
  contestId?: string;
}

export type DeleteContestInput = {
  contestId?: string;
}

export type DeleteContestOutput = Record<string, unknown>;

export type UpdateContestInput = {
  patch?: string[];
  contestId?: string;
  contest?: Contest;
}

export type UpdateContestOutput = Record<string, unknown>;

export type DescribeContestInput = {
  contestId?: string;
}

export type DescribeContestOutput = {
  contest?: Contest;
}

export type LookupContestInput = {
  key?: string;
}

export type LookupContestOutput = {
  contest?: Contest;
  appearance?: Contest_Appearance;
}

export type ListContestsInput = {
  offset?: number;
  size?: number;
  filters?: ListContestsInput_Filter;
}

export type ListContestsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  name?: ExpressionString[];
  startsAt?: ExpressionTimestamp[];
  endsAt?: ExpressionTimestamp[];
  public?: ExpressionBool[];
  visibility?: ExpressionEnum[];
  format?: ExpressionEnum[];
  status?: ExpressionEnum[];
  featured?: ExpressionBool[];
  year?: ExpressionInt[];
  scale?: ExpressionEnum[];
  series?: ExpressionEnum[];
  difficulty?: ExpressionInt[];
  country?: ExpressionEnum[];
  region?: ExpressionEnum[];
  city?: ExpressionString[];
}

export type ListContestsOutput = {
  items?: Contest[];
  total?: number;
}

export type OpenContestInput = {
  contestId?: string;
}

export type OpenContestOutput = Record<string, unknown>;

export type CloseContestInput = {
  contestId?: string;
}

export type CloseContestOutput = Record<string, unknown>;

export type SuspendContestInput = {
  contestId?: string;
}

export type SuspendContestOutput = Record<string, unknown>;

export type FreezeContestInput = {
  contestId?: string;
}

export type FreezeContestOutput = Record<string, unknown>;

export type ResumeContestInput = {
  contestId?: string;
}

export type ResumeContestOutput = Record<string, unknown>;

export type JoinContestInput = {
  contestId?: string;
}

export type JoinContestOutput = Record<string, unknown>;

export type StartContestInput = {
  contestId?: string;
}

export type StartContestOutput = Record<string, unknown>;

export type ImportProblemInput = {
  contestId?: string;
  importId?: string;
  index?: number;
  submitLimit?: number;
  scoreByBestTestset?: boolean;
}

export type ImportProblemOutput = {
  problemId?: string;
}

export type SyncProblemInput = {
  contestId?: string;
  problemId?: string;
}

export type SyncProblemOutput = Record<string, unknown>;

export type UpdateProblemInput = {
  contestId?: string;
  problemId?: string;
  index?: number;
  submitLimit?: number;
  scoreByBestTestset?: boolean;
}

export type UpdateProblemOutput = Record<string, unknown>;

export type DeleteProblemInput = {
  contestId?: string;
  problemId?: string;
}

export type DeleteProblemOutput = Record<string, unknown>;

export type RetestProblemInput = {
  contestId?: string;
  problemId?: string;
}

export type RetestProblemOutput = Record<string, unknown>;

export type ListProblemsInput = {
  contestId?: string;
  offset?: number;
  size?: number;
}

export type ListProblemsOutput = {
  total?: number;
  items?: Problem[];
}

export type DescribeProblemInput = {
  contestId?: string;
  problemId?: string;
  problemErn?: string;
}

export type DescribeProblemOutput = {
  problem?: Problem;
}

export type ListStatementsInput = {
  contestId?: string;
  problemId?: string;
}

export type ListStatementsOutput = {
  total?: number;
  items?: Problem_Statement[];
}

export type ListAttachmentsInput = {
  contestId?: string;
  problemId?: string;
}

export type ListAttachmentsOutput = {
  total?: number;
  items?: Problem_Attachment[];
}

export type ListExamplesInput = {
  contestId?: string;
  problemId?: string;
}

export type ListExamplesOutput = {
  total?: number;
  items?: Problem_Test[];
}

export type AddParticipantInput = {
  contestId?: string;
  participant?: Participant;
}

export type AddParticipantOutput = {
  participantId?: string;
}

export type EnableParticipantInput = {
  contestId?: string;
  participantId?: string;
}

export type EnableParticipantOutput = Record<string, unknown>;

export type DisableParticipantInput = {
  contestId?: string;
  participantId?: string;
}

export type DisableParticipantOutput = Record<string, unknown>;

export type UpdateParticipantInput = {
  patch?: string[];
  contestId?: string;
  participantId?: string;
  participant?: Participant;
}

export type UpdateParticipantOutput = Record<string, unknown>;

export type RemoveParticipantInput = {
  contestId?: string;
  participantId?: string;
}

export type RemoveParticipantOutput = Record<string, unknown>;

export type VerifyPasscodeInput = {
  contestId?: string;
}

export type VerifyPasscodeOutput = {
  required?: boolean;
  valid?: boolean;
}

export type EnterPasscodeInput = {
  contestId?: string;
  passcode?: string;
}

export type EnterPasscodeOutput = Record<string, unknown>;

export type ResetPasscodeInput = {
  contestId?: string;
  participantId?: string;
}

export type ResetPasscodeOutput = {
  passcode?: string;
}

export type SetPasscodeInput = {
  contestId?: string;
  participantId?: string;
  passcode?: string;
}

export type SetPasscodeOutput = Record<string, unknown>;

export type RemovePasscodeInput = {
  contestId?: string;
  participantId?: string;
}

export type RemovePasscodeOutput = Record<string, unknown>;

export type ListParticipantsInput = {
  contestId?: string;
  offset?: number;
  size?: number;
  filters?: ListParticipantsInput_Filter;
  sort?: string;
  order?: string;
}

export type ListParticipantsInput_Filter = {
  id?: ExpressionID[];
  memberId?: ExpressionID[];
  name?: ExpressionString[];
  status?: ExpressionEnum[];
  score?: ExpressionFloat[];
  penalty?: ExpressionFloat[];
  startedAt?: ExpressionTimestamp[];
  completeAt?: ExpressionTimestamp[];
}

export type ListParticipantsOutput = {
  total?: number;
  items?: Participant[];
}

export type IntrospectParticipantInput = {
  contestId?: string;
}

export type IntrospectParticipantOutput = {
  participant?: Participant;
}

export type DescribeParticipantInput = {
  contestId?: string;
  participantId?: string;
}

export type DescribeParticipantOutput = {
  participant?: Participant;
}

export type CreateSubmissionInput = {
  contestId?: string;
  problemId?: string;
  lang?: string;
  source?: string;
}

export type CreateSubmissionOutput = {
  submissionId?: string;
}

export type ListSubmissionsInput = {
  contestId?: string;
  offset?: number;
  size?: number;
  filters?: ListSubmissionsInput_Filter;
}

export type ListSubmissionsInput_Filter = {
  id?: ExpressionID[];
  participantId?: ExpressionID[];
  problemId?: ExpressionID[];
  status?: ExpressionEnum[];
  lang?: ExpressionEnum[];
  score?: ExpressionFloat[];
  percentage?: ExpressionFloat[];
  submittedAt?: ExpressionTimestamp[];
  signature?: ExpressionEnum[];
}

export type ListSubmissionsOutput = {
  total?: number;
  items?: Submission[];
}

export type DescribeSubmissionInput = {
  contestId?: string;
  submissionId?: string;
}

export type DescribeSubmissionOutput = {
  submission?: Submission;
}

export type WatchSubmissionInput = {
  contestId?: string;
  submissionId?: string;
}

export type WatchSubmissionOutput = {
  submission?: Submission;
}

export type RetestSubmissionInput = {
  contestId?: string;
  submissionId?: string;
}

export type RetestSubmissionOutput = Record<string, unknown>;

export type DeleteSubmissionInput = {
  contestId?: string;
  submissionId?: string;
}

export type DeleteSubmissionOutput = Record<string, unknown>;

export type RestoreSubmissionInput = {
  contestId?: string;
  submissionId?: string;
}

export type RestoreSubmissionOutput = Record<string, unknown>;

export type CreateTicketInput = {
  contestId?: string;
  subject?: string;
  message?: string;
}

export type CreateTicketOutput = {
  ticketId?: string;
}

export type CloseTicketInput = {
  contestId?: string;
  ticketId?: string;
}

export type CloseTicketOutput = Record<string, unknown>;

export type OpenTicketInput = {
  contestId?: string;
  ticketId?: string;
}

export type OpenTicketOutput = Record<string, unknown>;

export type ReadTicketInput = {
  contestId?: string;
  ticketId?: string;
}

export type ReadTicketOutput = Record<string, unknown>;

export type DeleteTicketInput = {
  contestId?: string;
  ticketId?: string;
}

export type DeleteTicketOutput = Record<string, unknown>;

export type DescribeTicketInput = {
  contestId?: string;
  ticketId?: string;
}

export type DescribeTicketOutput = {
  ticket?: Ticket;
}

export type ListTicketsInput = {
  offset?: number;
  size?: number;
  filters?: ListTicketsInput_Filter;
  sort?: string;
  order?: string;
}

export type ListTicketsInput_Filter = {
  id?: ExpressionID[];
  contestId?: ExpressionID[];
  participantId?: ExpressionID[];
  memberId?: ExpressionID[];
  isReadByParticipant?: ExpressionBool[];
  isReadByOwner?: ExpressionBool[];
  isOpen?: ExpressionBool[];
  own?: ExpressionBool[];
}

export type ListTicketsOutput = {
  total?: number;
  items?: Ticket[];
}

export type ReplyTicketInput = {
  ticketId?: string;
  message?: string;
  close?: boolean;
}

export type ReplyTicketOutput = {
  replyId?: string;
}

export type ListRepliesInput = {
  ticketId?: string;
  offset?: number;
  size?: number;
}

export type ListRepliesOutput = {
  total?: number;
  items?: Reply[];
}

export type DeleteReplyInput = {
  ticketId?: string;
  replyId?: string;
}

export type DeleteReplyOutput = Record<string, unknown>;

export type UpdateReplyInput = {
  ticketId?: string;
  replyId?: string;
  message?: string;
}

export type UpdateReplyOutput = Record<string, unknown>;

export type ConfigureRuntimeInput = {
  contestId?: string;
  runtime?: string[];
}

export type ConfigureRuntimeOutput = Record<string, unknown>;

export type DescribeRuntimeInput = {
  contestId?: string;
}

export type DescribeRuntimeOutput = {
  runtime?: string[];
}

export type CreateAnnouncementInput = {
  contestId?: string;
  announcement?: Announcement;
}

export type CreateAnnouncementOutput = {
  id?: string;
}

export type UpdateAnnouncementInput = {
  contestId?: string;
  announcementId?: string;
  announcement?: Announcement;
}

export type UpdateAnnouncementOutput = Record<string, unknown>;

export type DeleteAnnouncementInput = {
  contestId?: string;
  announcementId?: string;
}

export type DeleteAnnouncementOutput = Record<string, unknown>;

export type ReadAnnouncementInput = {
  contestId?: string;
  announcementId?: string;
}

export type ReadAnnouncementOutput = Record<string, unknown>;

export type DescribeAnnouncementInput = {
  contestId?: string;
  announcementId?: string;
}

export type DescribeAnnouncementOutput = {
  announcement?: Announcement;
}

export type DescribeAnnouncementStatusInput = {
  contestId?: string;
  announcementId?: string;
}

export type DescribeAnnouncementStatusOutput = {
  isRead?: boolean;
}

export type ListAnnouncementsInput = {
  contestId?: string;
  offset?: number;
  size?: number;
  filters?: ListAnnouncementsInput_Filter;
}

export type ListAnnouncementsInput_Filter = {
  id?: ExpressionID[];
  isRead?: ExpressionBool[];
}

export type ListAnnouncementsOutput = {
  total?: number;
  items?: Announcement[];
}

export type DescribeCodeTemplateInput = {
  contestId?: string;
  problemId?: string;
  templateId?: string;
  templateErn?: string;
}

export type DescribeCodeTemplateOutput = {
  template?: Template;
}

export type LookupCodeTemplateInput = {
  contestId?: string;
  problemId?: string;
  problemErn?: string;
  runtime?: string;
}

export type LookupCodeTemplateOutput = {
  template?: Template;
}

export type RebuildScoreInput = {
  contestId?: string;
}

export type RebuildScoreOutput = {
  activityId?: string;
}

export type IntrospectScoreInput = {
  contestId?: string;
}

export type IntrospectScoreOutput = {
  score?: Score;
}

export type DescribeScoreInput = {
  contestId?: string;
  participantId?: string;
  mode?: string;
  timeOffset?: number;
}

export type DescribeScoreOutput = {
  score?: Score;
}

export type ImportScoreInput = {
  contestId?: string;
  participantId?: string;
  scores?: Score[];
}

export type ImportScoreOutput = Record<string, unknown>;

export type ExportScoreInput = {
  contestId?: string;
  participantId?: string;
}

export type ExportScoreOutput = {
  scores?: Score[];
}

export type ListResultInput = {
  contestId?: string;
  mode?: string;
  timeOffset?: number;
  offset?: number;
  size?: number;
}

export type ListResultOutput = {
  total?: number;
  items?: Result[];
}

export type ListActivitiesInput = {
  contestId?: string;
  offset?: number;
  size?: number;
}

export type ListActivitiesOutput = {
  total?: number;
  items?: Activity[];
}

export type ConfigureAppearanceInput = {
  contestId?: string;
  appearance?: Contest_Appearance;
}

export type ConfigureAppearanceOutput = Record<string, unknown>;

export type DescribeAppearanceInput = {
  contestId?: string;
}

export type DescribeAppearanceOutput = {
  appearance?: Contest_Appearance;
}

