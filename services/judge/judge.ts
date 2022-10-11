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
  call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}

export class Judge {
  private readonly cli: Client;

  constructor(cli: Client) {
    this.cli = cli;
  }

  LookupContest<O>(input: LookupContestInput, opts?: O): Promise<LookupContestOutput> {
    return this.cli.call("eolymp.judge.Judge/LookupContest", input, opts);
  }

  CreateContest<O>(input: CreateContestInput, opts?: O): Promise<CreateContestOutput> {
    return this.cli.call("eolymp.judge.Judge/CreateContest", input, opts);
  }

  DeleteContest<O>(input: DeleteContestInput, opts?: O): Promise<DeleteContestOutput> {
    return this.cli.call("eolymp.judge.Judge/DeleteContest", input, opts);
  }

  UpdateContest<O>(input: UpdateContestInput, opts?: O): Promise<UpdateContestOutput> {
    return this.cli.call("eolymp.judge.Judge/UpdateContest", input, opts);
  }

  DescribeContest<O>(input: DescribeContestInput, opts?: O): Promise<DescribeContestOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeContest", input, opts);
  }

  ListContests<O>(input: ListContestsInput, opts?: O): Promise<ListContestsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListContests", input, opts);
  }

  OpenContest<O>(input: OpenContestInput, opts?: O): Promise<OpenContestOutput> {
    return this.cli.call("eolymp.judge.Judge/OpenContest", input, opts);
  }

  CloseContest<O>(input: CloseContestInput, opts?: O): Promise<CloseContestOutput> {
    return this.cli.call("eolymp.judge.Judge/CloseContest", input, opts);
  }

  ConfigureRuntime<O>(input: ConfigureRuntimeInput, opts?: O): Promise<ConfigureRuntimeOutput> {
    return this.cli.call("eolymp.judge.Judge/ConfigureRuntime", input, opts);
  }

  DescribeRuntime<O>(input: DescribeRuntimeInput, opts?: O): Promise<DescribeRuntimeOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeRuntime", input, opts);
  }

  ConfigureAppearance<O>(input: ConfigureAppearanceInput, opts?: O): Promise<ConfigureAppearanceOutput> {
    return this.cli.call("eolymp.judge.Judge/ConfigureAppearance", input, opts);
  }

  DescribeAppearance<O>(input: DescribeAppearanceInput, opts?: O): Promise<DescribeAppearanceOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeAppearance", input, opts);
  }

  ConfigureScoring<O>(input: ConfigureScoringInput, opts?: O): Promise<ConfigureScoringOutput> {
    return this.cli.call("eolymp.judge.Judge/ConfigureScoring", input, opts);
  }

  DescribeScoring<O>(input: DescribeScoringInput, opts?: O): Promise<DescribeScoringOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeScoring", input, opts);
  }

  ImportProblem<O>(input: ImportProblemInput, opts?: O): Promise<ImportProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/ImportProblem", input, opts);
  }

  SyncProblem<O>(input: SyncProblemInput, opts?: O): Promise<SyncProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/SyncProblem", input, opts);
  }

  UpdateProblem<O>(input: UpdateProblemInput, opts?: O): Promise<UpdateProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/UpdateProblem", input, opts);
  }

  ListProblems<O>(input: ListProblemsInput, opts?: O): Promise<ListProblemsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListProblems", input, opts);
  }

  DescribeProblem<O>(input: DescribeProblemInput, opts?: O): Promise<DescribeProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeProblem", input, opts);
  }

  DescribeCodeTemplate<O>(input: DescribeCodeTemplateInput, opts?: O): Promise<DescribeCodeTemplateOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeCodeTemplate", input, opts);
  }

  LookupCodeTemplate<O>(input: LookupCodeTemplateInput, opts?: O): Promise<LookupCodeTemplateOutput> {
    return this.cli.call("eolymp.judge.Judge/LookupCodeTemplate", input, opts);
  }

  ListStatements<O>(input: ListStatementsInput, opts?: O): Promise<ListStatementsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListStatements", input, opts);
  }

  ListAttachments<O>(input: ListAttachmentsInput, opts?: O): Promise<ListAttachmentsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListAttachments", input, opts);
  }

  ListExamples<O>(input: ListExamplesInput, opts?: O): Promise<ListExamplesOutput> {
    return this.cli.call("eolymp.judge.Judge/ListExamples", input, opts);
  }

  DeleteProblem<O>(input: DeleteProblemInput, opts?: O): Promise<DeleteProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/DeleteProblem", input, opts);
  }

  RetestProblem<O>(input: RetestProblemInput, opts?: O): Promise<RetestProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/RetestProblem", input, opts);
  }

  AddParticipant<O>(input: AddParticipantInput, opts?: O): Promise<AddParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/AddParticipant", input, opts);
  }

  EnableParticipant<O>(input: EnableParticipantInput, opts?: O): Promise<EnableParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/EnableParticipant", input, opts);
  }

  DisableParticipant<O>(input: DisableParticipantInput, opts?: O): Promise<DisableParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/DisableParticipant", input, opts);
  }

  UpdateParticipant<O>(input: UpdateParticipantInput, opts?: O): Promise<UpdateParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/UpdateParticipant", input, opts);
  }

  RemoveParticipant<O>(input: RemoveParticipantInput, opts?: O): Promise<RemoveParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/RemoveParticipant", input, opts);
  }

  ListParticipants<O>(input: ListParticipantsInput, opts?: O): Promise<ListParticipantsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListParticipants", input, opts);
  }

  DescribeParticipant<O>(input: DescribeParticipantInput, opts?: O): Promise<DescribeParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeParticipant", input, opts);
  }

  IntrospectParticipant<O>(input: IntrospectParticipantInput, opts?: O): Promise<IntrospectParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/IntrospectParticipant", input, opts);
  }

  JoinContest<O>(input: JoinContestInput, opts?: O): Promise<JoinContestOutput> {
    return this.cli.call("eolymp.judge.Judge/JoinContest", input, opts);
  }

  StartContest<O>(input: StartContestInput, opts?: O): Promise<StartContestOutput> {
    return this.cli.call("eolymp.judge.Judge/StartContest", input, opts);
  }

  VerifyPasscode<O>(input: VerifyPasscodeInput, opts?: O): Promise<VerifyPasscodeOutput> {
    return this.cli.call("eolymp.judge.Judge/VerifyPasscode", input, opts);
  }

  EnterPasscode<O>(input: EnterPasscodeInput, opts?: O): Promise<EnterPasscodeOutput> {
    return this.cli.call("eolymp.judge.Judge/EnterPasscode", input, opts);
  }

  ResetPasscode<O>(input: ResetPasscodeInput, opts?: O): Promise<ResetPasscodeOutput> {
    return this.cli.call("eolymp.judge.Judge/ResetPasscode", input, opts);
  }

  RemovePasscode<O>(input: RemovePasscodeInput, opts?: O): Promise<RemovePasscodeOutput> {
    return this.cli.call("eolymp.judge.Judge/RemovePasscode", input, opts);
  }

  CreateSubmission<O>(input: CreateSubmissionInput, opts?: O): Promise<CreateSubmissionOutput> {
    return this.cli.call("eolymp.judge.Judge/CreateSubmission", input, opts);
  }

  ListSubmissions<O>(input: ListSubmissionsInput, opts?: O): Promise<ListSubmissionsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListSubmissions", input, opts);
  }

  DescribeSubmission<O>(input: DescribeSubmissionInput, opts?: O): Promise<DescribeSubmissionOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeSubmission", input, opts);
  }

  RetestSubmission<O>(input: RetestSubmissionInput, opts?: O): Promise<RetestSubmissionOutput> {
    return this.cli.call("eolymp.judge.Judge/RetestSubmission", input, opts);
  }

  CreateTicket<O>(input: CreateTicketInput, opts?: O): Promise<CreateTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/CreateTicket", input, opts);
  }

  CloseTicket<O>(input: CloseTicketInput, opts?: O): Promise<CloseTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/CloseTicket", input, opts);
  }

  OpenTicket<O>(input: OpenTicketInput, opts?: O): Promise<OpenTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/OpenTicket", input, opts);
  }

  ReadTicket<O>(input: ReadTicketInput, opts?: O): Promise<ReadTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/ReadTicket", input, opts);
  }

  DeleteTicket<O>(input: DeleteTicketInput, opts?: O): Promise<DeleteTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/DeleteTicket", input, opts);
  }

  DescribeTicket<O>(input: DescribeTicketInput, opts?: O): Promise<DescribeTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeTicket", input, opts);
  }

  ListTickets<O>(input: ListTicketsInput, opts?: O): Promise<ListTicketsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListTickets", input, opts);
  }

  ReplyTicket<O>(input: ReplyTicketInput, opts?: O): Promise<ReplyTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/ReplyTicket", input, opts);
  }

  ListReplies<O>(input: ListRepliesInput, opts?: O): Promise<ListRepliesOutput> {
    return this.cli.call("eolymp.judge.Judge/ListReplies", input, opts);
  }

  DeleteReply<O>(input: DeleteReplyInput, opts?: O): Promise<DeleteReplyOutput> {
    return this.cli.call("eolymp.judge.Judge/DeleteReply", input, opts);
  }

  UpdateReply<O>(input: UpdateReplyInput, opts?: O): Promise<UpdateReplyOutput> {
    return this.cli.call("eolymp.judge.Judge/UpdateReply", input, opts);
  }

  CreateAnnouncement<O>(input: CreateAnnouncementInput, opts?: O): Promise<CreateAnnouncementOutput> {
    return this.cli.call("eolymp.judge.Judge/CreateAnnouncement", input, opts);
  }

  UpdateAnnouncement<O>(input: UpdateAnnouncementInput, opts?: O): Promise<UpdateAnnouncementOutput> {
    return this.cli.call("eolymp.judge.Judge/UpdateAnnouncement", input, opts);
  }

  DeleteAnnouncement<O>(input: DeleteAnnouncementInput, opts?: O): Promise<DeleteAnnouncementOutput> {
    return this.cli.call("eolymp.judge.Judge/DeleteAnnouncement", input, opts);
  }

  ReadAnnouncement<O>(input: ReadAnnouncementInput, opts?: O): Promise<ReadAnnouncementOutput> {
    return this.cli.call("eolymp.judge.Judge/ReadAnnouncement", input, opts);
  }

  DescribeAnnouncement<O>(input: DescribeAnnouncementInput, opts?: O): Promise<DescribeAnnouncementOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeAnnouncement", input, opts);
  }

  DescribeAnnouncementStatus<O>(input: DescribeAnnouncementStatusInput, opts?: O): Promise<DescribeAnnouncementStatusOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeAnnouncementStatus", input, opts);
  }

  ListAnnouncements<O>(input: ListAnnouncementsInput, opts?: O): Promise<ListAnnouncementsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListAnnouncements", input, opts);
  }

  IntrospectScore<O>(input: IntrospectScoreInput, opts?: O): Promise<IntrospectScoreOutput> {
    return this.cli.call("eolymp.judge.Judge/IntrospectScore", input, opts);
  }

  DescribeScore<O>(input: DescribeScoreInput, opts?: O): Promise<DescribeScoreOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeScore", input, opts);
  }

  ImportScore<O>(input: ImportScoreInput, opts?: O): Promise<ImportScoreOutput> {
    return this.cli.call("eolymp.judge.Judge/ImportScore", input, opts);
  }

  ListResult<O>(input: ListResultInput, opts?: O): Promise<ListResultOutput> {
    return this.cli.call("eolymp.judge.Judge/ListResult", input, opts);
  }

  RebuildScore<O>(input: RebuildScoreInput, opts?: O): Promise<RebuildScoreOutput> {
    return this.cli.call("eolymp.judge.Judge/RebuildScore", input, opts);
  }

  ListEntitlements<O>(input: ListEntitlementsInput, opts?: O): Promise<ListEntitlementsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListEntitlements", input, opts);
  }

  ListActivities<O>(input: ListActivitiesInput, opts?: O): Promise<ListActivitiesOutput> {
    return this.cli.call("eolymp.judge.Judge/ListActivities", input, opts);
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

