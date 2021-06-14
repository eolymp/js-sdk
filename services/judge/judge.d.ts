import { ExpressionBool, ExpressionEnum, ExpressionFloat, ExpressionID, ExpressionString, ExpressionTimestamp } from "../wellknown/expression";
import { Announcement } from "./announcement";
import { Contest } from "./contest";
import { Form, Registration } from "./form";
import { Participant } from "./participant";
import { Problem, Statement, Test } from "./problem";
import { Reply } from "./reply";
import { Submission } from "./submission";
import { Ticket } from "./ticket";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Judge {
    private readonly cli;
    constructor(cli: Client);
    CreateContest(input: CreateContestInput): Promise<CreateContestOutput>;
    DeleteContest(input: DeleteContestInput): Promise<DeleteContestOutput>;
    UpdateContest(input: UpdateContestInput): Promise<UpdateContestOutput>;
    LookupContest(input: LookupContestInput): Promise<LookupContestOutput>;
    DescribeContest(input: DescribeContestInput): Promise<DescribeContestOutput>;
    ListContests(input: ListContestsInput): Promise<ListContestsOutput>;
    OpenContest(input: OpenContestInput): Promise<OpenContestOutput>;
    CloseContest(input: CloseContestInput): Promise<CloseContestOutput>;
    ConfigureRegistrationForm(input: ConfigureRegistrationFormInput): Promise<ConfigureRegistrationFormOutput>;
    DescribeRegistrationForm(input: DescribeRegistrationFormInput): Promise<DescribeRegistrationFormOutput>;
    ConfigureRuntime(input: ConfigureRuntimeInput): Promise<ConfigureRuntimeOutput>;
    DescribeRuntime(input: DescribeRuntimeInput): Promise<DescribeRuntimeOutput>;
    SubmitRegistration(input: SubmitRegistrationInput): Promise<SubmitRegistrationOutput>;
    DescribeRegistration(input: DescribeRegistrationInput): Promise<DescribeRegistrationOutput>;
    ImportProblem(input: ImportProblemInput): Promise<ImportProblemOutput>;
    SyncProblem(input: SyncProblemInput): Promise<SyncProblemOutput>;
    UpdateProblem(input: UpdateProblemInput): Promise<UpdateProblemOutput>;
    ListProblems(input: ListProblemsInput): Promise<ListProblemsOutput>;
    DescribeProblem(input: DescribeProblemInput): Promise<DescribeProblemOutput>;
    ListStatements(input: ListStatementsInput): Promise<ListStatementsOutput>;
    ListExamples(input: ListExamplesInput): Promise<ListExamplesOutput>;
    DeleteProblem(input: DeleteProblemInput): Promise<DeleteProblemOutput>;
    RetestProblem(input: RetestProblemInput): Promise<RetestProblemOutput>;
    AddParticipant(input: AddParticipantInput): Promise<AddParticipantOutput>;
    EnableParticipant(input: EnableParticipantInput): Promise<EnableParticipantOutput>;
    DisableParticipant(input: DisableParticipantInput): Promise<DisableParticipantOutput>;
    VerifyPasscode(input: VerifyPasscodeInput): Promise<VerifyPasscodeOutput>;
    EnterPasscode(input: EnterPasscodeInput): Promise<EnterPasscodeOutput>;
    ResetPasscode(input: ResetPasscodeInput): Promise<ResetPasscodeOutput>;
    RemovePasscode(input: RemovePasscodeInput): Promise<RemovePasscodeOutput>;
    RemoveParticipant(input: RemoveParticipantInput): Promise<RemoveParticipantOutput>;
    ListParticipants(input: ListParticipantsInput): Promise<ListParticipantsOutput>;
    DescribeParticipant(input: DescribeParticipantInput): Promise<DescribeParticipantOutput>;
    IntrospectParticipant(input: IntrospectParticipantInput): Promise<IntrospectParticipantOutput>;
    JoinContest(input: JoinContestInput): Promise<JoinContestOutput>;
    StartContest(input: StartContestInput): Promise<StartContestOutput>;
    CreateSubmission(input: CreateSubmissionInput): Promise<CreateSubmissionOutput>;
    ListSubmissions(input: ListSubmissionsInput): Promise<ListSubmissionsOutput>;
    DescribeSubmission(input: DescribeSubmissionInput): Promise<DescribeSubmissionOutput>;
    RetestSubmission(input: RetestSubmissionInput): Promise<RetestSubmissionOutput>;
    CreateTicket(input: CreateTicketInput): Promise<CreateTicketOutput>;
    CloseTicket(input: CloseTicketInput): Promise<CloseTicketOutput>;
    OpenTicket(input: OpenTicketInput): Promise<OpenTicketOutput>;
    ReadTicket(input: ReadTicketInput): Promise<ReadTicketOutput>;
    DeleteTicket(input: DeleteTicketInput): Promise<DeleteTicketOutput>;
    DescribeTicket(input: DescribeTicketInput): Promise<DescribeTicketOutput>;
    ListTickets(input: ListTicketsInput): Promise<ListTicketsOutput>;
    ReplyTicket(input: ReplyTicketInput): Promise<ReplyTicketOutput>;
    ListReplies(input: ListRepliesInput): Promise<ListRepliesOutput>;
    DeleteReply(input: DeleteReplyInput): Promise<DeleteReplyOutput>;
    UpdateReply(input: UpdateReplyInput): Promise<UpdateReplyOutput>;
    CreateAnnouncement(input: CreateAnnouncementInput): Promise<CreateAnnouncementOutput>;
    UpdateAnnouncement(input: UpdateAnnouncementInput): Promise<UpdateAnnouncementOutput>;
    DeleteAnnouncement(input: DeleteAnnouncementInput): Promise<DeleteAnnouncementOutput>;
    ReadAnnouncement(input: ReadAnnouncementInput): Promise<ReadAnnouncementOutput>;
    DescribeAnnouncement(input: DescribeAnnouncementInput): Promise<DescribeAnnouncementOutput>;
    DescribeAnnouncementStatus(input: DescribeAnnouncementStatusInput): Promise<DescribeAnnouncementStatusOutput>;
    ListAnnouncements(input: ListAnnouncementsInput): Promise<ListAnnouncementsOutput>;
    DescribeCodeTemplate(input: DescribeCodeTemplateInput): Promise<DescribeCodeTemplateOutput>;
}
export declare type CreateContestInput = {
    contest?: Contest;
};
export declare type CreateContestOutput = {
    contestId?: string;
};
export declare type DeleteContestInput = {
    contestId?: string;
};
export declare type DeleteContestOutput = Record<string, unknown>;
export declare type UpdateContestInput = {
    contestId?: string;
    contest?: Contest;
};
export declare type UpdateContestOutput = Record<string, unknown>;
export declare type DescribeContestInput = {
    contestId?: string;
};
export declare type DescribeContestOutput = {
    contest?: Contest;
};
export declare type LookupContestInput = {
    key?: string;
};
export declare type LookupContestOutput = {
    contest?: Contest;
};
export declare type ListContestsInput = {
    offset?: number;
    size?: number;
    filters?: ListContestsInput_Filter;
};
export declare type ListContestsInput_Filter = {
    id?: ExpressionID[];
    own?: ExpressionBool[];
    name?: ExpressionString[];
    startsAt?: ExpressionTimestamp[];
    endsAt?: ExpressionTimestamp[];
    public?: ExpressionBool[];
};
export declare type ListContestsOutput = {
    items?: Contest[];
    total?: number;
};
export declare type OpenContestInput = {
    contestId?: string;
};
export declare type OpenContestOutput = Record<string, unknown>;
export declare type CloseContestInput = {
    contestId?: string;
};
export declare type CloseContestOutput = Record<string, unknown>;
export declare type JoinContestInput = {
    contestId?: string;
};
export declare type JoinContestOutput = Record<string, unknown>;
export declare type StartContestInput = {
    contestId?: string;
};
export declare type StartContestOutput = Record<string, unknown>;
export declare type ImportProblemInput = {
    contestId?: string;
    importId?: string;
    index?: number;
    submitLimit?: number;
};
export declare type ImportProblemOutput = {
    problemId?: string;
};
export declare type SyncProblemInput = {
    problemId?: string;
};
export declare type SyncProblemOutput = Record<string, unknown>;
export declare type UpdateProblemInput = {
    problemId?: string;
    index?: number;
    submitLimit?: number;
};
export declare type UpdateProblemOutput = Record<string, unknown>;
export declare type DeleteProblemInput = {
    problemId?: string;
};
export declare type DeleteProblemOutput = Record<string, unknown>;
export declare type RetestProblemInput = {
    problemId?: string;
};
export declare type RetestProblemOutput = Record<string, unknown>;
export declare type ListProblemsInput = {
    contestId?: string;
    offset?: number;
    size?: number;
};
export declare type ListProblemsOutput = {
    total?: number;
    items?: Problem[];
};
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
export declare type ListExamplesInput = {
    problemId?: string;
};
export declare type ListExamplesOutput = {
    total?: number;
    items?: Test[];
};
export declare type AddParticipantInput = {
    contestId?: string;
    userId?: string;
};
export declare type AddParticipantOutput = {
    participantId?: string;
};
export declare type EnableParticipantInput = {
    participantId?: string;
};
export declare type EnableParticipantOutput = Record<string, unknown>;
export declare type DisableParticipantInput = {
    participantId?: string;
};
export declare type DisableParticipantOutput = Record<string, unknown>;
export declare type RemoveParticipantInput = {
    participantId?: string;
};
export declare type RemoveParticipantOutput = Record<string, unknown>;
export declare type VerifyPasscodeInput = {
    contestId?: string;
};
export declare type VerifyPasscodeOutput = {
    required?: boolean;
    valid?: boolean;
};
export declare type EnterPasscodeInput = {
    contestId?: string;
    passcode?: string;
};
export declare type EnterPasscodeOutput = Record<string, unknown>;
export declare type ResetPasscodeInput = {
    participantId?: string;
};
export declare type ResetPasscodeOutput = {
    passcode?: string;
};
export declare type RemovePasscodeInput = {
    participantId?: string;
};
export declare type RemovePasscodeOutput = Record<string, unknown>;
export declare type ListParticipantsInput = {
    contestId?: string;
    offset?: number;
    size?: number;
    filters?: ListParticipantsInput_Filter;
    sort?: string;
    order?: string;
};
export declare type ListParticipantsInput_Filter = {
    id?: ExpressionID[];
    userId?: ExpressionID[];
    username?: ExpressionString[];
    status?: ExpressionEnum[];
    score?: ExpressionFloat[];
    penalty?: ExpressionFloat[];
    startedAt?: ExpressionTimestamp[];
    completeAt?: ExpressionTimestamp[];
};
export declare type ListParticipantsOutput = {
    total?: number;
    items?: Participant[];
};
export declare type IntrospectParticipantInput = {
    contestId?: string;
};
export declare type IntrospectParticipantOutput = {
    participant?: Participant;
};
export declare type DescribeParticipantInput = {
    participantId?: string;
};
export declare type DescribeParticipantOutput = {
    participant?: Participant;
};
export declare type CreateSubmissionInput = {
    problemId?: string;
    lang?: string;
    source?: string;
};
export declare type CreateSubmissionOutput = {
    submissionId?: string;
};
export declare type ListSubmissionsInput = {
    contestId?: string;
    problemId?: string;
    participantId?: string;
    offset?: number;
    size?: number;
    filters?: ListSubmissionsInput_Filter;
};
export declare type ListSubmissionsInput_Filter = {
    id?: ExpressionID[];
    participantId?: ExpressionID[];
    problemId?: ExpressionID[];
    status?: ExpressionEnum[];
    lang?: ExpressionEnum[];
    score?: ExpressionFloat[];
    percentage?: ExpressionFloat[];
    submittedAt?: ExpressionTimestamp[];
    signature?: ExpressionEnum[];
};
export declare type ListSubmissionsOutput = {
    total?: number;
    items?: Submission[];
};
export declare type DescribeSubmissionInput = {
    submissionId?: string;
};
export declare type DescribeSubmissionOutput = {
    submission?: Submission;
};
export declare type RetestSubmissionInput = {
    submissionId?: string;
};
export declare type RetestSubmissionOutput = Record<string, unknown>;
export declare type CreateTicketInput = {
    contestId?: string;
    subject?: string;
    message?: string;
};
export declare type CreateTicketOutput = {
    ticketId?: string;
};
export declare type CloseTicketInput = {
    ticketId?: string;
};
export declare type CloseTicketOutput = Record<string, unknown>;
export declare type OpenTicketInput = {
    ticketId?: string;
};
export declare type OpenTicketOutput = Record<string, unknown>;
export declare type ReadTicketInput = {
    ticketId?: string;
};
export declare type ReadTicketOutput = Record<string, unknown>;
export declare type DeleteTicketInput = {
    ticketId?: string;
};
export declare type DeleteTicketOutput = Record<string, unknown>;
export declare type DescribeTicketInput = {
    ticketId?: string;
};
export declare type DescribeTicketOutput = {
    ticket?: Ticket;
};
export declare type ListTicketsInput = {
    offset?: number;
    size?: number;
    filters?: ListTicketsInput_Filter;
};
export declare type ListTicketsInput_Filter = {
    id?: ExpressionID[];
    contestId?: ExpressionID[];
    participantId?: ExpressionID[];
    isReadByParticipant?: ExpressionBool[];
    isReadByOwner?: ExpressionBool[];
    isOpen?: ExpressionBool[];
    own?: ExpressionBool[];
    isRead?: ExpressionBool[];
    needsReply?: ExpressionBool[];
};
export declare type ListTicketsOutput = {
    total?: number;
    items?: Ticket[];
};
export declare type ReplyTicketInput = {
    ticketId?: string;
    message?: string;
    close?: boolean;
};
export declare type ReplyTicketOutput = {
    replyId?: string;
};
export declare type ListRepliesInput = {
    ticketId?: string;
    offset?: number;
    size?: number;
};
export declare type ListRepliesOutput = {
    total?: number;
    items?: Reply[];
};
export declare type DeleteReplyInput = {
    replyId?: string;
};
export declare type DeleteReplyOutput = Record<string, unknown>;
export declare type UpdateReplyInput = {
    replyId?: string;
    message?: string;
};
export declare type UpdateReplyOutput = Record<string, unknown>;
export declare type ConfigureRegistrationFormInput = {
    contestId?: string;
    form?: Form;
};
export declare type ConfigureRegistrationFormOutput = Record<string, unknown>;
export declare type DescribeRegistrationFormInput = {
    contestId?: string;
};
export declare type DescribeRegistrationFormOutput = {
    form?: Form;
};
export declare type ConfigureRuntimeInput = {
    contestId?: string;
    runtime?: string[];
};
export declare type ConfigureRuntimeOutput = Record<string, unknown>;
export declare type DescribeRuntimeInput = {
    contestId?: string;
};
export declare type DescribeRuntimeOutput = {
    runtime?: string[];
};
export declare type SubmitRegistrationInput = {
    contestId?: string;
    participantId?: string;
    registration?: Registration;
};
export declare type SubmitRegistrationOutput = Record<string, unknown>;
export declare type DescribeRegistrationInput = {
    participantId?: string;
};
export declare type DescribeRegistrationOutput = {
    registration?: Registration;
};
export declare type CreateAnnouncementInput = {
    contestId?: string;
    announcement?: Announcement;
};
export declare type CreateAnnouncementOutput = {
    id?: string;
};
export declare type UpdateAnnouncementInput = {
    announcementId?: string;
    announcement?: Announcement;
};
export declare type UpdateAnnouncementOutput = Record<string, unknown>;
export declare type DeleteAnnouncementInput = {
    announcementId?: string;
};
export declare type DeleteAnnouncementOutput = Record<string, unknown>;
export declare type ReadAnnouncementInput = {
    announcementId?: string;
};
export declare type ReadAnnouncementOutput = Record<string, unknown>;
export declare type DescribeAnnouncementInput = {
    announcementId?: string;
};
export declare type DescribeAnnouncementOutput = {
    announcement?: Announcement;
};
export declare type DescribeAnnouncementStatusInput = {
    announcementId?: string;
};
export declare type DescribeAnnouncementStatusOutput = {
    isRead?: boolean;
};
export declare type ListAnnouncementsInput = {
    contestId?: string;
    offset?: number;
    size?: number;
    filters?: ListAnnouncementsInput_Filter;
};
export declare type ListAnnouncementsInput_Filter = {
    id?: ExpressionID[];
    isRead?: ExpressionBool[];
};
export declare type ListAnnouncementsOutput = {
    total?: number;
    items?: Announcement[];
};
export declare type DescribeCodeTemplateInput = {
    problemId?: string;
    runtimeId?: string;
};
export declare type DescribeCodeTemplateOutput = {
    template?: string;
};
export {};
