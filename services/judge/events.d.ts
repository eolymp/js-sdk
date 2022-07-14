import { Reply } from "./reply";
import { Score } from "./score";
import { Submission } from "./submission";
import { Ticket } from "./ticket";
export declare type SubmissionCompletedEvent = {
    submission?: Submission;
};
export declare type RebuildScoreEvent = {
    contestId?: string;
    activityId?: string;
};
export declare type ScoreUpdatedEvent = {
    contestId?: string;
    participantId?: string;
    score?: Score;
};
export declare type TicketCreatedEvent = {
    ticket?: Ticket;
};
export declare type TicketUpdatedEvent = {
    ticket?: Ticket;
    reply?: Reply;
};
