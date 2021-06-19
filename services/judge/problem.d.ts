export declare type Problem = {
    id?: string;
    index?: number;
    score?: number;
    baseId?: string;
    contestId?: string;
    timeLimit?: number;
    memoryLimit?: number;
    fileSizeLimit?: number;
    submitLimit?: number;
};
export declare type Statement = {
    locale?: string;
    title?: string;
    content?: string;
    format?: string;
};
export declare type Test = {
    index?: number;
    example?: boolean;
    inputObjectId?: string;
    answerObjectId?: string;
    score?: number;
};
