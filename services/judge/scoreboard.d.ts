export declare type Scoreboard = {
    id?: string;
    contestId?: string;
    name?: string;
    default?: boolean;
    visible?: boolean;
    attemptPenalty?: number;
    status?: string;
    freezeTime?: string;
    freezeIn?: number;
};
export declare type Scoreboard_Row = {
    participantId?: string;
    scoreboardId?: string;
    name?: string;
    score?: number;
    penalty?: number;
    rank?: number;
    rankLower?: number;
    breakdown?: Scoreboard_Score[];
};
export declare type Scoreboard_Score = {
    problemId?: string;
    score?: number;
    penalty?: number;
    solved?: boolean;
    percentage?: number;
    attempts?: number;
    solvedAt?: string;
    solvedIn?: number;
    breakdown?: Scoreboard_Testset[];
};
export declare type Scoreboard_Testset = {
    testsetId?: string;
    index?: number;
    cost?: number;
    score?: number;
};
