import { ExpressionBool, ExpressionEnum, ExpressionFloat, ExpressionID, ExpressionString, ExpressionTimestamp } from "../wellknown/expression";
import { Activity } from "./activity";
import { Announcement } from "./announcement";
import { Contest, Contest_Appearance } from "./contest";
import { Form, Registration } from "./form";
import { Participant } from "./participant";
import { Problem, Problem_Attachment, Problem_Statement, Problem_Test } from "./problem";
import { Reply } from "./reply";
import { Scoreboard, Scoreboard_Row } from "./scoreboard";
import { Submission } from "./submission";
import { Ticket } from "./ticket";
interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Judge {
    private readonly cli;
    constructor(cli: Client);
    CreateContest<O>(input: CreateContestInput, opts: O): Promise<CreateContestOutput>;
    DeleteContest<O>(input: DeleteContestInput, opts: O): Promise<DeleteContestOutput>;
    UpdateContest<O>(input: UpdateContestInput, opts: O): Promise<UpdateContestOutput>;
    LookupContest<O>(input: LookupContestInput, opts: O): Promise<LookupContestOutput>;
    DescribeContest<O>(input: DescribeContestInput, opts: O): Promise<DescribeContestOutput>;
    ListContests<O>(input: ListContestsInput, opts: O): Promise<ListContestsOutput>;
    OpenContest<O>(input: OpenContestInput, opts: O): Promise<OpenContestOutput>;
    CloseContest<O>(input: CloseContestInput, opts: O): Promise<CloseContestOutput>;
    ConfigureRegistrationForm<O>(input: ConfigureRegistrationFormInput, opts: O): Promise<ConfigureRegistrationFormOutput>;
    DescribeRegistrationForm<O>(input: DescribeRegistrationFormInput, opts: O): Promise<DescribeRegistrationFormOutput>;
    ConfigureRuntime<O>(input: ConfigureRuntimeInput, opts: O): Promise<ConfigureRuntimeOutput>;
    DescribeRuntime<O>(input: DescribeRuntimeInput, opts: O): Promise<DescribeRuntimeOutput>;
    ConfigureAppearance<O>(input: ConfigureAppearanceInput, opts: O): Promise<ConfigureAppearanceOutput>;
    DescribeAppearance<O>(input: DescribeAppearanceInput, opts: O): Promise<DescribeAppearanceOutput>;
    SubmitRegistration<O>(input: SubmitRegistrationInput, opts: O): Promise<SubmitRegistrationOutput>;
    DescribeRegistration<O>(input: DescribeRegistrationInput, opts: O): Promise<DescribeRegistrationOutput>;
    ImportProblem<O>(input: ImportProblemInput, opts: O): Promise<ImportProblemOutput>;
    SyncProblem<O>(input: SyncProblemInput, opts: O): Promise<SyncProblemOutput>;
    UpdateProblem<O>(input: UpdateProblemInput, opts: O): Promise<UpdateProblemOutput>;
    ListProblems<O>(input: ListProblemsInput, opts: O): Promise<ListProblemsOutput>;
    DescribeProblem<O>(input: DescribeProblemInput, opts: O): Promise<DescribeProblemOutput>;
    DescribeCodeTemplate<O>(input: DescribeCodeTemplateInput, opts: O): Promise<DescribeCodeTemplateOutput>;
    ListStatements<O>(input: ListStatementsInput, opts: O): Promise<ListStatementsOutput>;
    ListAttachments<O>(input: ListAttachmentsInput, opts: O): Promise<ListAttachmentsOutput>;
    ListExamples<O>(input: ListExamplesInput, opts: O): Promise<ListExamplesOutput>;
    DeleteProblem<O>(input: DeleteProblemInput, opts: O): Promise<DeleteProblemOutput>;
    RetestProblem<O>(input: RetestProblemInput, opts: O): Promise<RetestProblemOutput>;
    AddParticipant<O>(input: AddParticipantInput, opts: O): Promise<AddParticipantOutput>;
    EnableParticipant<O>(input: EnableParticipantInput, opts: O): Promise<EnableParticipantOutput>;
    DisableParticipant<O>(input: DisableParticipantInput, opts: O): Promise<DisableParticipantOutput>;
    UpdateParticipant<O>(input: UpdateParticipantInput, opts: O): Promise<UpdateParticipantOutput>;
    RemoveParticipant<O>(input: RemoveParticipantInput, opts: O): Promise<RemoveParticipantOutput>;
    ListParticipants<O>(input: ListParticipantsInput, opts: O): Promise<ListParticipantsOutput>;
    DescribeParticipant<O>(input: DescribeParticipantInput, opts: O): Promise<DescribeParticipantOutput>;
    IntrospectParticipant<O>(input: IntrospectParticipantInput, opts: O): Promise<IntrospectParticipantOutput>;
    JoinContest<O>(input: JoinContestInput, opts: O): Promise<JoinContestOutput>;
    StartContest<O>(input: StartContestInput, opts: O): Promise<StartContestOutput>;
    VerifyPasscode<O>(input: VerifyPasscodeInput, opts: O): Promise<VerifyPasscodeOutput>;
    EnterPasscode<O>(input: EnterPasscodeInput, opts: O): Promise<EnterPasscodeOutput>;
    ResetPasscode<O>(input: ResetPasscodeInput, opts: O): Promise<ResetPasscodeOutput>;
    RemovePasscode<O>(input: RemovePasscodeInput, opts: O): Promise<RemovePasscodeOutput>;
    CreateSubmission<O>(input: CreateSubmissionInput, opts: O): Promise<CreateSubmissionOutput>;
    ListSubmissions<O>(input: ListSubmissionsInput, opts: O): Promise<ListSubmissionsOutput>;
    DescribeSubmission<O>(input: DescribeSubmissionInput, opts: O): Promise<DescribeSubmissionOutput>;
    RetestSubmission<O>(input: RetestSubmissionInput, opts: O): Promise<RetestSubmissionOutput>;
    CreateTicket<O>(input: CreateTicketInput, opts: O): Promise<CreateTicketOutput>;
    CloseTicket<O>(input: CloseTicketInput, opts: O): Promise<CloseTicketOutput>;
    OpenTicket<O>(input: OpenTicketInput, opts: O): Promise<OpenTicketOutput>;
    ReadTicket<O>(input: ReadTicketInput, opts: O): Promise<ReadTicketOutput>;
    DeleteTicket<O>(input: DeleteTicketInput, opts: O): Promise<DeleteTicketOutput>;
    DescribeTicket<O>(input: DescribeTicketInput, opts: O): Promise<DescribeTicketOutput>;
    ListTickets<O>(input: ListTicketsInput, opts: O): Promise<ListTicketsOutput>;
    ReplyTicket<O>(input: ReplyTicketInput, opts: O): Promise<ReplyTicketOutput>;
    ListReplies<O>(input: ListRepliesInput, opts: O): Promise<ListRepliesOutput>;
    DeleteReply<O>(input: DeleteReplyInput, opts: O): Promise<DeleteReplyOutput>;
    UpdateReply<O>(input: UpdateReplyInput, opts: O): Promise<UpdateReplyOutput>;
    CreateAnnouncement<O>(input: CreateAnnouncementInput, opts: O): Promise<CreateAnnouncementOutput>;
    UpdateAnnouncement<O>(input: UpdateAnnouncementInput, opts: O): Promise<UpdateAnnouncementOutput>;
    DeleteAnnouncement<O>(input: DeleteAnnouncementInput, opts: O): Promise<DeleteAnnouncementOutput>;
    ReadAnnouncement<O>(input: ReadAnnouncementInput, opts: O): Promise<ReadAnnouncementOutput>;
    DescribeAnnouncement<O>(input: DescribeAnnouncementInput, opts: O): Promise<DescribeAnnouncementOutput>;
    DescribeAnnouncementStatus<O>(input: DescribeAnnouncementStatusInput, opts: O): Promise<DescribeAnnouncementStatusOutput>;
    ListAnnouncements<O>(input: ListAnnouncementsInput, opts: O): Promise<ListAnnouncementsOutput>;
    CreateScoreboard<O>(input: CreateScoreboardInput, opts: O): Promise<CreateScoreboardOutput>;
    UpdateScoreboard<O>(input: UpdateScoreboardInput, opts: O): Promise<UpdateScoreboardOutput>;
    RebuildScoreboard<O>(input: RebuildScoreboardInput, opts: O): Promise<RebuildScoreboardOutput>;
    DeleteScoreboard<O>(input: DeleteScoreboardInput, opts: O): Promise<DeleteScoreboardOutput>;
    DescribeScoreboard<O>(input: DescribeScoreboardInput, opts: O): Promise<DescribeScoreboardOutput>;
    DescribeDefaultScoreboard<O>(input: DescribeDefaultScoreboardInput, opts: O): Promise<DescribeDefaultScoreboardOutput>;
    ListScoreboards<O>(input: ListScoreboardsInput, opts: O): Promise<ListScoreboardsOutput>;
    DescribeScoreboardHeader<O>(input: DescribeScoreboardHeaderInput, opts: O): Promise<DescribeScoreboardHeaderOutput>;
    DescribeScoreboardFooter<O>(input: DescribeScoreboardFooterInput, opts: O): Promise<DescribeScoreboardFooterOutput>;
    DescribeScoreboardRow<O>(input: DescribeScoreboardRowInput, opts: O): Promise<DescribeScoreboardRowOutput>;
    DescribeDefaultScoreboardRow<O>(input: DescribeDefaultScoreboardRowInput, opts: O): Promise<DescribeDefaultScoreboardRowOutput>;
    ListScoreboardRows<O>(input: ListScoreboardRowsInput, opts: O): Promise<ListScoreboardRowsOutput>;
    ListDefaultScoreboardRows<O>(input: ListDefaultScoreboardRowsInput, opts: O): Promise<ListDefaultScoreboardRowsOutput>;
    ListEntitlements<O>(input: ListEntitlementsInput, opts: O): Promise<ListEntitlementsOutput>;
    ListActivities<O>(input: ListActivitiesInput, opts: O): Promise<ListActivitiesOutput>;
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
    appearance?: Contest_Appearance;
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
    visibility?: ExpressionEnum[];
    format?: ExpressionEnum[];
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
    items?: Problem_Statement[];
};
export declare type ListAttachmentsInput = {
    problemId?: string;
};
export declare type ListAttachmentsOutput = {
    total?: number;
    items?: Problem_Attachment[];
};
export declare type ListExamplesInput = {
    problemId?: string;
};
export declare type ListExamplesOutput = {
    total?: number;
    items?: Problem_Test[];
};
export declare type AddParticipantInput = {
    contestId?: string;
    memberId?: string;
    name?: string;
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
export declare type UpdateParticipantInput = {
    participantId?: string;
    patch?: string;
    name?: string;
    bonusTime?: number;
};
export declare type UpdateParticipantOutput = Record<string, unknown>;
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
    memberId?: ExpressionID[];
    name?: ExpressionString[];
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
    sort?: string;
    order?: string;
};
export declare type ListTicketsInput_Filter = {
    id?: ExpressionID[];
    contestId?: ExpressionID[];
    participantId?: ExpressionID[];
    isReadByParticipant?: ExpressionBool[];
    isReadByOwner?: ExpressionBool[];
    isOpen?: ExpressionBool[];
    own?: ExpressionBool[];
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
export declare type CreateScoreboardInput = {
    contestId?: string;
    scoreboard?: Scoreboard;
};
export declare type CreateScoreboardOutput = {
    scoreboardId?: string;
};
export declare type UpdateScoreboardInput = {
    scoreboardId?: string;
    scoreboard?: Scoreboard;
};
export declare type UpdateScoreboardOutput = Record<string, unknown>;
export declare type RebuildScoreboardInput = {
    scoreboardId?: string;
};
export declare type RebuildScoreboardOutput = {
    activityId?: string;
};
export declare type DeleteScoreboardInput = {
    scoreboardId?: string;
};
export declare type DeleteScoreboardOutput = Record<string, unknown>;
export declare type DescribeScoreboardInput = {
    scoreboardId?: string;
};
export declare type DescribeScoreboardOutput = {
    scoreboard?: Scoreboard;
};
export declare type DescribeDefaultScoreboardInput = {
    contestId?: string;
};
export declare type DescribeDefaultScoreboardOutput = {
    scoreboard?: Scoreboard;
};
export declare type ListScoreboardsInput = {
    contestId?: string;
    offset?: number;
    size?: number;
    filters?: ListScoreboardsInput_Filter;
};
export declare type ListScoreboardsInput_Filter = {
    id?: ExpressionID[];
    visible?: ExpressionBool[];
    default?: ExpressionBool[];
};
export declare type ListScoreboardsOutput = {
    total?: number;
    items?: Scoreboard[];
};
export declare type DescribeScoreboardHeaderInput = {
    scoreboardId?: string;
};
export declare type DescribeScoreboardHeaderOutput = {
    problems?: DescribeScoreboardHeaderOutput_Problem[];
};
export declare type DescribeScoreboardHeaderOutput_Problem = {
    problemId?: string;
    shortName?: string;
};
export declare type DescribeScoreboardFooterInput = {
    scoreboardId?: string;
};
export declare type DescribeScoreboardFooterOutput = {
    problems?: DescribeScoreboardFooterOutput_Problem[];
};
export declare type DescribeScoreboardFooterOutput_Problem = {
    problemId?: string;
    totalAttempts?: number;
    successAttempts?: number;
};
export declare type DescribeScoreboardRowInput = {
    scoreboardId?: string;
    participantId?: string;
};
export declare type DescribeScoreboardRowOutput = {
    row?: Scoreboard_Row;
};
export declare type DescribeDefaultScoreboardRowInput = {
    contestId?: string;
    participantId?: string;
};
export declare type DescribeDefaultScoreboardRowOutput = {
    row?: Scoreboard_Row;
};
export declare type ListScoreboardRowsInput = {
    scoreboardId?: string;
    offset?: number;
    size?: number;
    filters?: ListScoreboardRowsInput_Filter;
};
export declare type ListScoreboardRowsInput_Filter = {
    participantId?: ExpressionID[];
    memberId?: ExpressionID[];
    name?: ExpressionString[];
    status?: ExpressionEnum[];
    score?: ExpressionFloat[];
    penalty?: ExpressionFloat[];
    startedAt?: ExpressionTimestamp[];
    completeAt?: ExpressionTimestamp[];
};
export declare type ListScoreboardRowsOutput = {
    total?: number;
    items?: Scoreboard_Row[];
};
export declare type ListDefaultScoreboardRowsInput = {
    contestId?: string;
    offset?: number;
    size?: number;
    filters?: ListScoreboardRowsInput_Filter;
};
export declare type ListDefaultScoreboardRowsOutput = {
    total?: number;
    items?: Scoreboard_Row[];
};
export declare type ListEntitlementsInput = {
    contestId?: string;
    submissionId?: string;
    ticketId?: string;
    participantId?: string;
};
export declare type ListEntitlementsOutput = {
    entitlements?: string[];
};
export declare type ListActivitiesInput = {
    contestId?: string;
    offset?: number;
    size?: number;
};
export declare type ListActivitiesOutput = {
    total?: number;
    items?: Activity[];
};
export declare type ConfigureAppearanceInput = {
    contestId?: string;
    appearance?: Contest_Appearance;
};
export declare type ConfigureAppearanceOutput = Record<string, unknown>;
export declare type DescribeAppearanceInput = {
    contestId?: string;
};
export declare type DescribeAppearanceOutput = {
    appearance?: Contest_Appearance;
};
export {};
