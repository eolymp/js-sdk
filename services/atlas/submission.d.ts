export declare type Submission = {
    id?: string;
    problemId?: string;
    userId?: string;
    submittedAt?: string;
    lang?: string;
    source?: string;
    signature?: string;
    status?: string;
    error?: string;
    cost?: number;
    score?: number;
    percentage?: number;
    groups?: Submission_Group[];
};
export declare type Submission_Run = {
    id?: string;
    wallTimeUsage?: number;
    cpuTimeUsage?: number;
    memoryUsage?: number;
    index?: number;
    testId?: string;
    cost?: number;
    score?: number;
    status?: string;
};
export declare type Submission_Group = {
    index?: number;
    testsetId?: string;
    status?: string;
    dependencies?: number[];
    cost?: number;
    score?: number;
    scoringMode?: string;
    feedbackPolicy?: string;
    wallTimeUsage?: number;
    cpuTimeUsage?: number;
    memoryUsage?: number;
    runs?: Submission_Run[];
};
