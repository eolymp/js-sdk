import { Permission } from "./permission";
import { Problem } from "./problem";
import { Score } from "./score";
import { Submission } from "./submission";
export declare type ProblemUpdatedEvent = {
    problem?: Problem;
};
export declare type ProblemDeletedEvent = {
    problemId?: string;
};
export declare type PermissionsUpdatedEvent = {
    problemId?: string;
    permission?: Permission;
};
export declare type PermissionsDeletedEvent = {
    problemId?: string;
    userId?: string;
};
export declare type SubmissionCompleteEvent = {
    submission?: Submission;
    update?: boolean;
};
export declare type ScoreUpdatedEvent = {
    score?: Score;
};
