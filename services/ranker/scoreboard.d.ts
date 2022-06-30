export declare type Scoreboard = {
    id?: string;
    key?: string;
    name?: string;
    format?: string;
};
export declare type Scoreboard_Row = {
    id?: string;
    name?: string;
    memberId?: string;
    score?: number;
    penalty?: number;
    rank?: number;
    rankLower?: number;
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
    valueString?: string;
    valueNumber?: number;
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
    judgeContestId?: string;
    judgeProblemId?: string;
    communityAttributeKey?: string;
    columns?: Scoreboard_Column[];
};
