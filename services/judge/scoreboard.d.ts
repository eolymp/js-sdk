export declare type Scoreboard = {
    id?: string;
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
    score?: number;
    penalty?: number;
    breakdown?: Scoreboard_Score[];
};
export declare type Scoreboard_Score = {
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
