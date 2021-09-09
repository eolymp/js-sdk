import { Reply } from "./reply";
import { Submission } from "./submission";
import { Ticket } from "./ticket";
export declare type SubmissionCompletedEvent = {
    submission?: Submission;
};
export declare type RebuildScoreboardEvent = {
    scoreboardId?: string;
};
export declare type TicketCreatedEvent = {
    ticket?: Ticket;
};
export declare type TicketUpdatedEvent = {
    ticket?: Ticket;
    reply?: Reply;
};
