export declare type Scoreboard = {
    id?: string;
    key?: string;
    name?: string;
    scoringMode?: string;
};
export declare type Scoreboard_Row = {
    id?: string;
    name?: string;
    userId?: string;
    score?: number;
    penalty?: number;
    values?: Scoreboard_Row_Value[];
};
export declare type Scoreboard_Row_Value = {
    id?: string;
    columnId?: string;
    score?: number;
    penalty?: number;
    percentage?: number;
    attempts?: number;
    solvedIn?: number;
};
export declare type Scoreboard_Column = {
    id?: string;
    parentId?: string;
    key?: string;
    name?: string;
    shortName?: string;
    type?: string;
    index?: number;
    visible?: boolean;
    contestScoreboardId?: string;
    contestProblemId?: string;
    columns?: Scoreboard_Column[];
};
