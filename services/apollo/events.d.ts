import { Score } from "../atlas/score";
import { Submission } from "../atlas/submission";
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
