// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-eolymp for more details.

import {Submission} from "./submission"

interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}

export class Apollo {
    private readonly cli: Client;

    constructor(cli: Client) {
        this.cli = cli;
    }

    CreateSubmission(input: CreateSubmissionInput): Promise<CreateSubmissionOutput> {
        return this.cli.call("eolymp.apollo.Apollo/CreateSubmission", input);
    }

    DescribeSubmission(input: DescribeSubmissionInput): Promise<DescribeSubmissionOutput> {
        return this.cli.call("eolymp.apollo.Apollo/DescribeSubmission", input);
    }
}

export type CreateSubmissionInput = {
    problemId?: string;
    lang?: string;
    source?: string;
}

export type CreateSubmissionOutput = {
    submissionId?: string;
}

export type DescribeSubmissionInput = {
    submissionId?: string;
}

export type DescribeSubmissionOutput = {
    submission?: Submission;
}

