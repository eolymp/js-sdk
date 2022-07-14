export declare type Score = {
    offset?: number;
    score?: number;
    penalty?: number;
    breakdown?: Score_Problem[];
};
export declare type Score_Problem = {
    problemId?: string;
    score?: number;
    penalty?: number;
    solved?: boolean;
    percentage?: number;
    attempts?: number;
    solvedAt?: string;
    solvedIn?: number;
    breakdown?: Score_Testset[];
};
export declare type Score_Testset = {
    testsetId?: string;
    index?: number;
    cost?: number;
    score?: number;
};
