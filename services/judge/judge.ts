// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionFloat, ExpressionID, ExpressionString, ExpressionTimestamp } from "../wellknown/expression"
import { Announcement } from "./announcement"
import { Contest } from "./contest"
import { Form, Registration } from "./form"
import { Participant } from "./participant"
import { Problem, Statement, Test } from "./problem"
import { Reply } from "./reply"
import { Submission } from "./submission"
import { Ticket } from "./ticket"

interface Client {
  call<R, E>(method: string, args: R): Promise<E>;
}

export class Judge {
  private readonly cli: Client;

  constructor(cli: Client) {
    this.cli = cli;
  }

  CreateContest(input: CreateContestInput): Promise<CreateContestOutput> {
    return this.cli.call("eolymp.judge.Judge/CreateContest", input);
  }

  DeleteContest(input: DeleteContestInput): Promise<DeleteContestOutput> {
    return this.cli.call("eolymp.judge.Judge/DeleteContest", input);
  }

  UpdateContest(input: UpdateContestInput): Promise<UpdateContestOutput> {
    return this.cli.call("eolymp.judge.Judge/UpdateContest", input);
  }

  LookupContest(input: LookupContestInput): Promise<LookupContestOutput> {
    return this.cli.call("eolymp.judge.Judge/LookupContest", input);
  }

  DescribeContest(input: DescribeContestInput): Promise<DescribeContestOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeContest", input);
  }

  ListContests(input: ListContestsInput): Promise<ListContestsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListContests", input);
  }

  OpenContest(input: OpenContestInput): Promise<OpenContestOutput> {
    return this.cli.call("eolymp.judge.Judge/OpenContest", input);
  }

  CloseContest(input: CloseContestInput): Promise<CloseContestOutput> {
    return this.cli.call("eolymp.judge.Judge/CloseContest", input);
  }

  ConfigureRegistrationForm(input: ConfigureRegistrationFormInput): Promise<ConfigureRegistrationFormOutput> {
    return this.cli.call("eolymp.judge.Judge/ConfigureRegistrationForm", input);
  }

  DescribeRegistrationForm(input: DescribeRegistrationFormInput): Promise<DescribeRegistrationFormOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeRegistrationForm", input);
  }

  ConfigureRuntime(input: ConfigureRuntimeInput): Promise<ConfigureRuntimeOutput> {
    return this.cli.call("eolymp.judge.Judge/ConfigureRuntime", input);
  }

  DescribeRuntime(input: DescribeRuntimeInput): Promise<DescribeRuntimeOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeRuntime", input);
  }

  SubmitRegistration(input: SubmitRegistrationInput): Promise<SubmitRegistrationOutput> {
    return this.cli.call("eolymp.judge.Judge/SubmitRegistration", input);
  }

  DescribeRegistration(input: DescribeRegistrationInput): Promise<DescribeRegistrationOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeRegistration", input);
  }

  ImportProblem(input: ImportProblemInput): Promise<ImportProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/ImportProblem", input);
  }

  SyncProblem(input: SyncProblemInput): Promise<SyncProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/SyncProblem", input);
  }

  UpdateProblem(input: UpdateProblemInput): Promise<UpdateProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/UpdateProblem", input);
  }

  ListProblems(input: ListProblemsInput): Promise<ListProblemsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListProblems", input);
  }

  DescribeProblem(input: DescribeProblemInput): Promise<DescribeProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeProblem", input);
  }

  ListStatements(input: ListStatementsInput): Promise<ListStatementsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListStatements", input);
  }

  ListExamples(input: ListExamplesInput): Promise<ListExamplesOutput> {
    return this.cli.call("eolymp.judge.Judge/ListExamples", input);
  }

  DeleteProblem(input: DeleteProblemInput): Promise<DeleteProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/DeleteProblem", input);
  }

  RetestProblem(input: RetestProblemInput): Promise<RetestProblemOutput> {
    return this.cli.call("eolymp.judge.Judge/RetestProblem", input);
  }

  AddParticipant(input: AddParticipantInput): Promise<AddParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/AddParticipant", input);
  }

  EnableParticipant(input: EnableParticipantInput): Promise<EnableParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/EnableParticipant", input);
  }

  DisableParticipant(input: DisableParticipantInput): Promise<DisableParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/DisableParticipant", input);
  }

  VerifyPasscode(input: VerifyPasscodeInput): Promise<VerifyPasscodeOutput> {
    return this.cli.call("eolymp.judge.Judge/VerifyPasscode", input);
  }

  EnterPasscode(input: EnterPasscodeInput): Promise<EnterPasscodeOutput> {
    return this.cli.call("eolymp.judge.Judge/EnterPasscode", input);
  }

  ResetPasscode(input: ResetPasscodeInput): Promise<ResetPasscodeOutput> {
    return this.cli.call("eolymp.judge.Judge/ResetPasscode", input);
  }

  RemovePasscode(input: RemovePasscodeInput): Promise<RemovePasscodeOutput> {
    return this.cli.call("eolymp.judge.Judge/RemovePasscode", input);
  }

  RemoveParticipant(input: RemoveParticipantInput): Promise<RemoveParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/RemoveParticipant", input);
  }

  ListParticipants(input: ListParticipantsInput): Promise<ListParticipantsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListParticipants", input);
  }

  DescribeParticipant(input: DescribeParticipantInput): Promise<DescribeParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeParticipant", input);
  }

  IntrospectParticipant(input: IntrospectParticipantInput): Promise<IntrospectParticipantOutput> {
    return this.cli.call("eolymp.judge.Judge/IntrospectParticipant", input);
  }

  JoinContest(input: JoinContestInput): Promise<JoinContestOutput> {
    return this.cli.call("eolymp.judge.Judge/JoinContest", input);
  }

  StartContest(input: StartContestInput): Promise<StartContestOutput> {
    return this.cli.call("eolymp.judge.Judge/StartContest", input);
  }

  CreateSubmission(input: CreateSubmissionInput): Promise<CreateSubmissionOutput> {
    return this.cli.call("eolymp.judge.Judge/CreateSubmission", input);
  }

  ListSubmissions(input: ListSubmissionsInput): Promise<ListSubmissionsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListSubmissions", input);
  }

  DescribeSubmission(input: DescribeSubmissionInput): Promise<DescribeSubmissionOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeSubmission", input);
  }

  RetestSubmission(input: RetestSubmissionInput): Promise<RetestSubmissionOutput> {
    return this.cli.call("eolymp.judge.Judge/RetestSubmission", input);
  }

  CreateTicket(input: CreateTicketInput): Promise<CreateTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/CreateTicket", input);
  }

  CloseTicket(input: CloseTicketInput): Promise<CloseTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/CloseTicket", input);
  }

  OpenTicket(input: OpenTicketInput): Promise<OpenTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/OpenTicket", input);
  }

  ReadTicket(input: ReadTicketInput): Promise<ReadTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/ReadTicket", input);
  }

  DeleteTicket(input: DeleteTicketInput): Promise<DeleteTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/DeleteTicket", input);
  }

  DescribeTicket(input: DescribeTicketInput): Promise<DescribeTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeTicket", input);
  }

  ListTickets(input: ListTicketsInput): Promise<ListTicketsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListTickets", input);
  }

  ReplyTicket(input: ReplyTicketInput): Promise<ReplyTicketOutput> {
    return this.cli.call("eolymp.judge.Judge/ReplyTicket", input);
  }

  ListReplies(input: ListRepliesInput): Promise<ListRepliesOutput> {
    return this.cli.call("eolymp.judge.Judge/ListReplies", input);
  }

  DeleteReply(input: DeleteReplyInput): Promise<DeleteReplyOutput> {
    return this.cli.call("eolymp.judge.Judge/DeleteReply", input);
  }

  UpdateReply(input: UpdateReplyInput): Promise<UpdateReplyOutput> {
    return this.cli.call("eolymp.judge.Judge/UpdateReply", input);
  }

  CreateAnnouncement(input: CreateAnnouncementInput): Promise<CreateAnnouncementOutput> {
    return this.cli.call("eolymp.judge.Judge/CreateAnnouncement", input);
  }

  UpdateAnnouncement(input: UpdateAnnouncementInput): Promise<UpdateAnnouncementOutput> {
    return this.cli.call("eolymp.judge.Judge/UpdateAnnouncement", input);
  }

  DeleteAnnouncement(input: DeleteAnnouncementInput): Promise<DeleteAnnouncementOutput> {
    return this.cli.call("eolymp.judge.Judge/DeleteAnnouncement", input);
  }

  ReadAnnouncement(input: ReadAnnouncementInput): Promise<ReadAnnouncementOutput> {
    return this.cli.call("eolymp.judge.Judge/ReadAnnouncement", input);
  }

  DescribeAnnouncement(input: DescribeAnnouncementInput): Promise<DescribeAnnouncementOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeAnnouncement", input);
  }

  DescribeAnnouncementStatus(input: DescribeAnnouncementStatusInput): Promise<DescribeAnnouncementStatusOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeAnnouncementStatus", input);
  }

  ListAnnouncements(input: ListAnnouncementsInput): Promise<ListAnnouncementsOutput> {
    return this.cli.call("eolymp.judge.Judge/ListAnnouncements", input);
  }

  DescribeCodeTemplate(input: DescribeCodeTemplateInput): Promise<DescribeCodeTemplateOutput> {
    return this.cli.call("eolymp.judge.Judge/DescribeCodeTemplate", input);
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
}

export type ImportProblemOutput = {
  problemId?: string;
}

export type SyncProblemInput = {
  problemId?: string;
}

export type SyncProblemOutput = Record<string, unknown>;

export type UpdateProblemInput = {
  problemId?: string;
  index?: number;
  submitLimit?: number;
}

export type UpdateProblemOutput = Record<string, unknown>;

export type DeleteProblemInput = {
  problemId?: string;
}

export type DeleteProblemOutput = Record<string, unknown>;

export type RetestProblemInput = {
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

export type ListExamplesInput = {
  problemId?: string;
}

export type ListExamplesOutput = {
  total?: number;
  items?: Test[];
}

export type AddParticipantInput = {
  contestId?: string;
  userId?: string;
}

export type AddParticipantOutput = {
  participantId?: string;
}

export type EnableParticipantInput = {
  participantId?: string;
}

export type EnableParticipantOutput = Record<string, unknown>;

export type DisableParticipantInput = {
  participantId?: string;
}

export type DisableParticipantOutput = Record<string, unknown>;

export type RemoveParticipantInput = {
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
  participantId?: string;
}

export type ResetPasscodeOutput = {
  passcode?: string;
}

export type RemovePasscodeInput = {
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
  userId?: ExpressionID[];
  username?: ExpressionString[];
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
  participantId?: string;
}

export type DescribeParticipantOutput = {
  participant?: Participant;
}

export type CreateSubmissionInput = {
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
  submissionId?: string;
}

export type DescribeSubmissionOutput = {
  submission?: Submission;
}

export type RetestSubmissionInput = {
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
  ticketId?: string;
}

export type CloseTicketOutput = Record<string, unknown>;

export type OpenTicketInput = {
  ticketId?: string;
}

export type OpenTicketOutput = Record<string, unknown>;

export type ReadTicketInput = {
  ticketId?: string;
}

export type ReadTicketOutput = Record<string, unknown>;

export type DeleteTicketInput = {
  ticketId?: string;
}

export type DeleteTicketOutput = Record<string, unknown>;

export type DescribeTicketInput = {
  ticketId?: string;
}

export type DescribeTicketOutput = {
  ticket?: Ticket;
}

export type ListTicketsInput = {
  offset?: number;
  size?: number;
  filters?: ListTicketsInput_Filter;
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
  replyId?: string;
}

export type DeleteReplyOutput = Record<string, unknown>;

export type UpdateReplyInput = {
  replyId?: string;
  message?: string;
}

export type UpdateReplyOutput = Record<string, unknown>;

export type ConfigureRegistrationFormInput = {
  contestId?: string;
  form?: Form;
}

export type ConfigureRegistrationFormOutput = Record<string, unknown>;

export type DescribeRegistrationFormInput = {
  contestId?: string;
}

export type DescribeRegistrationFormOutput = {
  form?: Form;
}

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

export type SubmitRegistrationInput = {
  participantId?: string;
  registration?: Registration;
}

export type SubmitRegistrationOutput = Record<string, unknown>;

export type DescribeRegistrationInput = {
  participantId?: string;
}

export type DescribeRegistrationOutput = {
  registration?: Registration;
}

export type CreateAnnouncementInput = {
  contestId?: string;
  announcement?: Announcement;
}

export type CreateAnnouncementOutput = {
  id?: string;
}

export type UpdateAnnouncementInput = {
  announcementId?: string;
  announcement?: Announcement;
}

export type UpdateAnnouncementOutput = Record<string, unknown>;

export type DeleteAnnouncementInput = {
  announcementId?: string;
}

export type DeleteAnnouncementOutput = Record<string, unknown>;

export type ReadAnnouncementInput = {
  announcementId?: string;
}

export type ReadAnnouncementOutput = Record<string, unknown>;

export type DescribeAnnouncementInput = {
  announcementId?: string;
}

export type DescribeAnnouncementOutput = {
  announcement?: Announcement;
}

export type DescribeAnnouncementStatusInput = {
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
  problemId?: string;
  runtimeId?: string;
}

export type DescribeCodeTemplateOutput = {
  template?: string;
}

