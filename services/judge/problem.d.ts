export declare type Problem = {
    id?: string;
    index?: number;
    score?: number;
    baseId?: string;
    contestId?: string;
    feedbackPolicy?: string;
    timeLimit?: number;
    memoryLimit?: number;
    fileSizeLimit?: number;
    submitLimit?: number;
};
export declare type Problem_Statement = {
    locale?: string;
    title?: string;
    content?: string;
    format?: string;
};
export declare type Problem_Test = {
    index?: number;
    example?: boolean;
    inputObjectId?: string;
    answerObjectId?: string;
    score?: number;
};
