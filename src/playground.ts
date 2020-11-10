import {Twirp} from "./twirp";

export class Playground {
    private twirp: Twirp;

    constructor(twirp: Twirp) {
        this.twirp = twirp
    }

    CreateRun(input: CreateRunInput): Promise<CreateRunOutput> {
        return this.twirp.call("eolymp.playground.Service/CreateRun", input);
    }

    DescribeRun(input: DescribeRunInput): Promise<DescribeRunOutput> {
        return this.twirp.call("eolymp.playground.Service/DescribeRun", input)
    }
}

export type CreateRunInput = {
    input: string
    lang: string
    source: string
}

export type CreateRunOutput = {
    runId: string
}

export type DescribeRunInput = {
    runId: string
}

export type DescribeRunOutput = {
    status: string
}
