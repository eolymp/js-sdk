export declare type Submission = {
    id?: string;
    problemId?: string;
    userId?: string;
    submittedAt?: string;
    lang?: string;
    source?: string;
    status?: string;
    error?: string;
    score?: number;
    runs?: Submission_Run[];
};
export declare type Submission_Run = {
    id?: string;
    wallTimeUsage?: number;
    cpuTimeUsage?: number;
    memoryUsage?: number;
    testIndex?: number;
    testId?: string;
    status?: string;
};
