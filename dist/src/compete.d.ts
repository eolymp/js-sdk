import { Twirp } from "./twirp";
export declare class Compete {
    private readonly twirp;
    constructor(twirp: Twirp);
    CreateContest(input: CreateContestInput): Promise<CreateContestOutput>;
    ImportProblem(input: ImportProblemInput): Promise<ImportProblemOutput>;
    DeleteProblem(input: DeleteProblemInput): Promise<DeleteProblemOutput>;
    SyncProblem(input: SyncProblemInput): Promise<SyncProblemOutput>;
    StartContest(input: StartContestInput): Promise<StartContestOutput>;
    CreateSubmission(input: CreateSubmissionInput): Promise<CreateSubmissionOutput>;
    DescribeSubmission(input: DescribeSubmissionInput): Promise<DescribeSubmissionOutput>;
    DescribeContest(input: DescribeContestInput): Promise<DescribeContestOutput>;
    ListContests(input: ListContestsInput): Promise<ListContestsOutput>;
    ListProblems(input: ListProblemsInput): Promise<ListProblemsOutput>;
    ListParticipants(input: ListParticipantsInput): Promise<ListParticipantsOutput>;
    ListSubmissions(input: ListSubmissionsInput): Promise<ListSubmissionsOutput>;
}
export declare type CreateContestInput = {
    contest: Contest;
};
export declare type CreateContestOutput = {
    contestId: string;
};
export declare type ImportProblemInput = {
    contestId: string;
    importId: string;
    index: number;
    score: number;
};
export declare type ImportProblemOutput = {
    problemId: string;
};
export declare type DeleteProblemInput = {
    problemId: string;
};
export declare type DeleteProblemOutput = {};
export declare type SyncProblemInput = {
    problemId: string;
};
export declare type SyncProblemOutput = {};
export declare type StartContestInput = {
    contestId: string;
};
export declare type StartContestOutput = {};
export declare type CreateSubmissionInput = {
    lang: string;
    source: string;
    problemId: string;
};
export declare type CreateSubmissionOutput = {
    submissionId: string;
};
export declare type DescribeSubmissionInput = {
    submissionId: string;
};
export declare type DescribeSubmissionOutput = {};
export declare type ListContestsInput = {
    filters?: {
        own?: {
            is_true?: boolean;
            is_false?: boolean;
        };
    };
};
export declare type ListContestsOutput = {
    items: Contest[];
    total: number;
};
export declare type ListProblemsInput = {
    contestId: string;
    withStatements: boolean;
    withContent: boolean;
    withVerifier: boolean;
    withTests: boolean;
    onlyExamples: boolean;
};
export declare type ListProblemsOutput = {
    items: Problem[];
    total: number;
};
export declare type ListParticipantsInput = {
    contestId: string;
};
export declare type ListParticipantsOutput = {
    items: Participant[];
    total: number;
};
export declare type ListSubmissionsInput = {
    contestId: string;
};
export declare type ListSubmissionsOutput = {
    items: Submission[];
    total: number;
};
export declare type DescribeContestInput = {
    contestId: string;
};
export declare type DescribeContestOutput = {
    contest: Contest;
};
export declare type Contest = {
    domain: string;
    duration: number;
    endsAt: string;
    id: string;
    name: string;
    public: boolean;
    startsAt: string;
    status: string;
    type: string;
};
export declare type Problem = {
    fileSizeLimit: number;
    id: string;
    index: number;
    memoryLimit: number;
    score: number;
    timeLimit: number;
    statements?: Array<Statement>;
    verifier?: Verifier;
    tests?: Array<Test>;
};
export declare type Statement = {
    content?: string;
    default: boolean;
    locale: string;
    title: string;
};
export declare type Verifier = {
    type: string;
    lang?: string;
    source?: string;
    caseSensitive?: boolean;
    precision?: number;
};
export declare type Test = {
    answerObjectId: string;
    example: boolean;
    index: number;
    inputObjectId: string;
};
export declare type Participant = {
    completeAt: string;
    id: string;
    score: number;
    startedAt: string;
    status: string;
    userId: string;
};
export declare type Submission = {
    contestId: string;
    id: string;
    lang: string;
    participantId: string;
    problemId: string;
    score: number;
    source: string;
    status: string;
    submittedAt: string;
};
