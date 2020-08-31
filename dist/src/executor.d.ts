import { Twirp } from "./twirp";
export declare class Executor {
    private twirp;
    constructor(twirp: Twirp);
    CreateTask(input: CreateTaskInput): Promise<CreateTaskOutput>;
    DescribeTask(input: DescribeTaskInput): Promise<DescribeTaskOutput>;
}
export declare type CreateTaskInput = {
    input: string;
    lang: string;
    source: string;
};
export declare type CreateTaskOutput = {
    taskId: string;
};
export declare type DescribeTaskInput = {
    taskId: string;
};
export declare type DescribeTaskOutput = {
    status: string;
};
