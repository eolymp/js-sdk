import { Run } from "./run";
interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Playground {
    private readonly cli;
    constructor(cli: Client);
    CreateRun<O>(input: CreateRunInput, opts?: O): Promise<CreateRunOutput>;
    DescribeRun<O>(input: DescribeRunInput, opts?: O): Promise<DescribeRunOutput>;
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
