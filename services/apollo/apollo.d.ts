import { Submission } from "./submission";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Apollo {
    private readonly cli;
    constructor(cli: Client);
    CreateSubmission(input: CreateSubmissionInput): Promise<CreateSubmissionOutput>;
    DescribeSubmission(input: DescribeSubmissionInput): Promise<DescribeSubmissionOutput>;
}
export declare type CreateSubmissionInput = {
    problemId?: string;
    lang?: string;
    source?: string;
};
export declare type CreateSubmissionOutput = {
    submissionId?: string;
};
export declare type DescribeSubmissionInput = {
    submissionId?: string;
};
export declare type DescribeSubmissionOutput = {
    submission?: Submission;
};
export {};
