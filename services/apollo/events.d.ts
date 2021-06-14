import { Score } from "./score";
import { Submission } from "./submission";
export declare type SubmissionCompletedEvent = {
    submission?: Submission;
    update?: boolean;
};
export declare type ScoreUpdatedEvent = {
    score?: Score;
};
export declare type StarAddedEvent = {
    problemId?: string;
    userId?: string;
};
export declare type StarRemovedEvent = {
    problemId?: string;
    userId?: string;
};
