// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionFloat, ExpressionID, ExpressionString, ExpressionTimestamp } from "../wellknown/expression"
import { Activity } from "./activity"
import { Announcement } from "./announcement"
import { Contest, Contest_Appearance, Contest_Scoring } from "./contest"
import { Participant } from "./participant"
import { Problem, Problem_Attachment, Problem_Statement, Problem_Test } from "./problem"
import { Reply } from "./reply"
import { Result } from "./result"
import { Score } from "./score"
import { Submission } from "./submission"
import { Template } from "./template"
import { Ticket } from "./ticket"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts: O): Promise<E>;
}

export class Judge {
  private readonly cli: Client;
  private readonly url: string;

  constructor(url: string, cli: Client) {
    this.cli = cli;
    this.url = url;
  }

  LookupContest<O>(input: LookupContestInput, opts?: O): Promise<LookupContestOutput> {
    const path = "/contests/__lookup";

    return this.cli.call("GET", this.url + path, input, opts);
  }

  CreateContest<O>(input: CreateContestInput, opts?: O): Promise<CreateContestOutput> {
    const path = "/contests";

    return this.cli.call("POST", this.url + path, input, opts);
  }

  DeleteContest<O>(input: DeleteContestInput, opts?: O): Promise<DeleteContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("DELETE", this.url + path, input, opts);
  }

  UpdateContest<O>(input: UpdateContestInput, opts?: O): Promise<UpdateContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("PUT", this.url + path, input, opts);
  }

  DescribeContest<O>(input: DescribeContestInput, opts?: O): Promise<DescribeContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ListContests<O>(input: ListContestsInput, opts?: O): Promise<ListContestsOutput> {
    const path = "/contests";

    return this.cli.call("GET", this.url + path, input, opts);
  }

  OpenContest<O>(input: OpenContestInput, opts?: O): Promise<OpenContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/open";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  CloseContest<O>(input: CloseContestInput, opts?: O): Promise<CloseContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/close";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  ConfigureRuntime<O>(input: ConfigureRuntimeInput, opts?: O): Promise<ConfigureRuntimeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/runtime";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  DescribeRuntime<O>(input: DescribeRuntimeInput, opts?: O): Promise<DescribeRuntimeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/runtime";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ConfigureAppearance<O>(input: ConfigureAppearanceInput, opts?: O): Promise<ConfigureAppearanceOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/appearance";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  DescribeAppearance<O>(input: DescribeAppearanceInput, opts?: O): Promise<DescribeAppearanceOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/appearance";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ConfigureScoring<O>(input: ConfigureScoringInput, opts?: O): Promise<ConfigureScoringOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/scoring";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  DescribeScoring<O>(input: DescribeScoringInput, opts?: O): Promise<DescribeScoringOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/scoring";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ImportProblem<O>(input: ImportProblemInput, opts?: O): Promise<ImportProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  SyncProblem<O>(input: SyncProblemInput, opts?: O): Promise<SyncProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/sync";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  UpdateProblem<O>(input: UpdateProblemInput, opts?: O): Promise<UpdateProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  ListProblems<O>(input: ListProblemsInput, opts?: O): Promise<ListProblemsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  DescribeProblem<O>(input: DescribeProblemInput, opts?: O): Promise<DescribeProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  DescribeCodeTemplate<O>(input: DescribeCodeTemplateInput, opts?: O): Promise<DescribeCodeTemplateOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/templates/"+encodeURIComponent(input.templateId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);
    delete(input.templateId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  LookupCodeTemplate<O>(input: LookupCodeTemplateInput, opts?: O): Promise<LookupCodeTemplateOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/lookup-template";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ListStatements<O>(input: ListStatementsInput, opts?: O): Promise<ListStatementsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/statements";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ListAttachments<O>(input: ListAttachmentsInput, opts?: O): Promise<ListAttachmentsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/attachments";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ListExamples<O>(input: ListExamplesInput, opts?: O): Promise<ListExamplesOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/examples";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  DeleteProblem<O>(input: DeleteProblemInput, opts?: O): Promise<DeleteProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("DELETE", this.url + path, input, opts);
  }

  RetestProblem<O>(input: RetestProblemInput, opts?: O): Promise<RetestProblemOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/retest";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  AddParticipant<O>(input: AddParticipantInput, opts?: O): Promise<AddParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  EnableParticipant<O>(input: EnableParticipantInput, opts?: O): Promise<EnableParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/enable";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  DisableParticipant<O>(input: DisableParticipantInput, opts?: O): Promise<DisableParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/disable";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  UpdateParticipant<O>(input: UpdateParticipantInput, opts?: O): Promise<UpdateParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("PUT", this.url + path, input, opts);
  }

  RemoveParticipant<O>(input: RemoveParticipantInput, opts?: O): Promise<RemoveParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("DELETE", this.url + path, input, opts);
  }

  ListParticipants<O>(input: ListParticipantsInput, opts?: O): Promise<ListParticipantsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  DescribeParticipant<O>(input: DescribeParticipantInput, opts?: O): Promise<DescribeParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  IntrospectParticipant<O>(input: IntrospectParticipantInput, opts?: O): Promise<IntrospectParticipantOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/introspect";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  JoinContest<O>(input: JoinContestInput, opts?: O): Promise<JoinContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/join";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  StartContest<O>(input: StartContestInput, opts?: O): Promise<StartContestOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/start";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  VerifyPasscode<O>(input: VerifyPasscodeInput, opts?: O): Promise<VerifyPasscodeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/verify-passcode";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  EnterPasscode<O>(input: EnterPasscodeInput, opts?: O): Promise<EnterPasscodeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/enter-passcode";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  ResetPasscode<O>(input: ResetPasscodeInput, opts?: O): Promise<ResetPasscodeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/passcode";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  RemovePasscode<O>(input: RemovePasscodeInput, opts?: O): Promise<RemovePasscodeOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/passcode";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("DELETE", this.url + path, input, opts);
  }

  CreateSubmission<O>(input: CreateSubmissionInput, opts?: O): Promise<CreateSubmissionOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/problems/"+encodeURIComponent(input.problemId||'')+"/submissions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.problemId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  ListSubmissions<O>(input: ListSubmissionsInput, opts?: O): Promise<ListSubmissionsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/submissions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  DescribeSubmission<O>(input: DescribeSubmissionInput, opts?: O): Promise<DescribeSubmissionOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/submissions/"+encodeURIComponent(input.submissionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.submissionId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  RetestSubmission<O>(input: RetestSubmissionInput, opts?: O): Promise<RetestSubmissionOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/submissions/"+encodeURIComponent(input.submissionId||'')+"/retest";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.submissionId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  CreateTicket<O>(input: CreateTicketInput, opts?: O): Promise<CreateTicketOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/tickets";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  CloseTicket<O>(input: CloseTicketInput, opts?: O): Promise<CloseTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/close";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  OpenTicket<O>(input: OpenTicketInput, opts?: O): Promise<OpenTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/open";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  ReadTicket<O>(input: ReadTicketInput, opts?: O): Promise<ReadTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/read";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  DeleteTicket<O>(input: DeleteTicketInput, opts?: O): Promise<DeleteTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("DELETE", this.url + path, input, opts);
  }

  DescribeTicket<O>(input: DescribeTicketInput, opts?: O): Promise<DescribeTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ListTickets<O>(input: ListTicketsInput, opts?: O): Promise<ListTicketsOutput> {
    const path = "/tickets";

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ReplyTicket<O>(input: ReplyTicketInput, opts?: O): Promise<ReplyTicketOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  ListReplies<O>(input: ListRepliesInput, opts?: O): Promise<ListRepliesOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  DeleteReply<O>(input: DeleteReplyInput, opts?: O): Promise<DeleteReplyOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies/"+encodeURIComponent(input.replyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);
    delete(input.replyId);

    return this.cli.call("DELETE", this.url + path, input, opts);
  }

  UpdateReply<O>(input: UpdateReplyInput, opts?: O): Promise<UpdateReplyOutput> {
    const path = "/tickets/"+encodeURIComponent(input.ticketId||'')+"/replies/"+encodeURIComponent(input.replyId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ticketId);
    delete(input.replyId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  CreateAnnouncement<O>(input: CreateAnnouncementInput, opts?: O): Promise<CreateAnnouncementOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  UpdateAnnouncement<O>(input: UpdateAnnouncementInput, opts?: O): Promise<UpdateAnnouncementOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements/"+encodeURIComponent(input.announcementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.announcementId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  DeleteAnnouncement<O>(input: DeleteAnnouncementInput, opts?: O): Promise<DeleteAnnouncementOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements/"+encodeURIComponent(input.announcementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.announcementId);

    return this.cli.call("DELETE", this.url + path, input, opts);
  }

  ReadAnnouncement<O>(input: ReadAnnouncementInput, opts?: O): Promise<ReadAnnouncementOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements/"+encodeURIComponent(input.announcementId||'')+"/read";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.announcementId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  DescribeAnnouncement<O>(input: DescribeAnnouncementInput, opts?: O): Promise<DescribeAnnouncementOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements/"+encodeURIComponent(input.announcementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.announcementId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  DescribeAnnouncementStatus<O>(input: DescribeAnnouncementStatusInput, opts?: O): Promise<DescribeAnnouncementStatusOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements/"+encodeURIComponent(input.announcementId||'')+"/status";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.announcementId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ListAnnouncements<O>(input: ListAnnouncementsInput, opts?: O): Promise<ListAnnouncementsOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/announcements";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  IntrospectScore<O>(input: IntrospectScoreInput, opts?: O): Promise<IntrospectScoreOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/introspect/score";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  DescribeScore<O>(input: DescribeScoreInput, opts?: O): Promise<DescribeScoreOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/score";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ImportScore<O>(input: ImportScoreInput, opts?: O): Promise<ImportScoreOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/participants/"+encodeURIComponent(input.participantId||'')+"/scores";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);
    delete(input.participantId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  ListResult<O>(input: ListResultInput, opts?: O): Promise<ListResultOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/results";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  RebuildScore<O>(input: RebuildScoreInput, opts?: O): Promise<RebuildScoreOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/rebuild";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  ListEntitlements<O>(input: ListEntitlementsInput, opts?: O): Promise<ListEntitlementsOutput> {
    const path = "/__judge/entitlements";

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ListActivities<O>(input: ListActivitiesInput, opts?: O): Promise<ListActivitiesOutput> {
    const path = "/contests/"+encodeURIComponent(input.contestId||'')+"/activities";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.contestId);

    return this.cli.call("GET", this.url + path, input, opts);
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
  id?: ExpressionID[];
  own?: ExpressionBool[];
  name?: ExpressionString[];
  startsAt?: ExpressionTimestamp[];
  endsAt?: ExpressionTimestamp[];
  public?: ExpressionBool[];
  visibility?: ExpressionEnum[];
  format?: ExpressionEnum[];
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
  memberId?: string;
  name?: string;
  outOfCompetition?: boolean;
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
  contestId?: string;
  participantId?: string;
  patch?: string;
  name?: string;
  bonusTime?: number;
  outOfCompetition?: boolean;
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

export type RetestSubmissionInput = {
  contestId?: string;
  submissionId?: string;
}

export type RetestSubmissionOutput = Record<string, unknown>;

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

export type ConfigureScoringInput = {
  contestId?: string;
  scoring?: Contest_Scoring;
}

export type ConfigureScoringOutput = Record<string, unknown>;

export type DescribeScoringInput = {
  contestId?: string;
}

export type DescribeScoringOutput = {
  scoring?: Contest_Scoring;
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

export type ListEntitlementsInput = {
  contestId?: string;
  submissionId?: string;
  ticketId?: string;
  participantId?: string;
}

export type ListEntitlementsOutput = {
  entitlements?: string[];
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

