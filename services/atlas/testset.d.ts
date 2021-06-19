export declare type Testset = {
    id?: string;
    problemId?: string;
    index?: number;
    timeLimit?: number;
    memoryLimit?: number;
    fileSizeLimit?: number;
    dependencies?: number[];
    scoringMode?: string;
    feedbackPolicy?: string;
};
