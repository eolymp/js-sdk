export declare type Scoreboard = {
    id?: string;
    key?: string;
    name?: string;
    scoringMode?: string;
    contests?: Scoreboard_Contest[];
};
export declare type Scoreboard_Row = {
    name?: string;
    userId?: string;
    score?: number;
    penalty?: number;
    scores?: Scoreboard_Row_Score[];
};
export declare type Scoreboard_Row_Score = {
    contestId?: string;
    problemId?: string;
    attempts?: number;
    solvedIn?: number;
    solvedAt?: string;
    score?: number;
    penalty?: number;
    percentage?: number;
};
export declare type Scoreboard_Contest = {
    contestId?: string;
    name?: string;
    index?: number;
    visible?: boolean;
};
