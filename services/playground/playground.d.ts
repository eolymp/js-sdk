import { Run } from "./run";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Playground {
    private readonly cli;
    constructor(cli: Client);
    CreateRun(input: CreateRunInput): Promise<CreateRunOutput>;
    DescribeRun(input: DescribeRunInput): Promise<DescribeRunOutput>;
}
export declare type CreateRunInput = {
    lang?: string;
    source?: string;
    input?: string;
    inputContent?: string;
    inputObjectId?: string;
    atlasProblemId?: string;
    judgeProblemId?: string;
};
export declare type CreateRunOutput = {
    runId?: string;
};
export declare type DescribeRunInput = {
    runId?: string;
};
export declare type DescribeRunOutput = {
    run?: Run;
};
export {};
