export declare type Participant = {
    id?: string;
    userId?: string;
    contestId?: string;
    username?: string;
    score?: number;
    penalty?: number;
    breakdown?: Participant_Score[];
    status?: string;
    startedAt?: string;
    startedIn?: number;
    completeAt?: string;
    completeIn?: number;
    passcode?: string;
};
export declare type Participant_Score = {
    problemId?: string;
    score?: number;
    penalty?: number;
    solved?: boolean;
    percentage?: number;
    submits?: number;
    attempts?: number;
    solvedAt?: string;
    solvedIn?: number;
};
