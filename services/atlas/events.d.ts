import { Permission } from "./permission";
import { Problem } from "./problem";
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
