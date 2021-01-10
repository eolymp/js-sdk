// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-eolymp for more details.


export type Submission = {
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
}

export type Submission_Run = {
    id?: string;
    timeUsage?: number;
    memoryUsage?: number;
    testIndex?: number;
    testId?: string;
    status?: string;
}

