import { Reply } from "./reply";
import { Scoreboard_Row } from "./scoreboard";
import { Submission } from "./submission";
import { Ticket } from "./ticket";
export declare type SubmissionCompletedEvent = {
    submission?: Submission;
};
export declare type RebuildScoreboardEvent = {
    scoreboardId?: string;
    activityId?: string;
};
export declare type ScoreboardRowUpdatedEvent = {
    row?: Scoreboard_Row;
};
export declare type TicketCreatedEvent = {
    ticket?: Ticket;
};
export declare type TicketUpdatedEvent = {
    ticket?: Ticket;
    reply?: Reply;
};
