import {Twirp} from "./twirp";

export class Executor {
    private twirp: Twirp;

    constructor(twirp: Twirp) {
        this.twirp = twirp
    }

    CreateTask(input: CreateTaskInput): Promise<CreateTaskOutput> {
        return this.twirp.call("eolymp.executor.Executor/CreateTask", input);
    }

    DescribeTask(input: DescribeTaskInput): Promise<DescribeTaskOutput> {
        return this.twirp.call("eolymp.executor.Executor/DescribeTask", input)
    }
}

export type CreateTaskInput = {
    input: string
    lang: string
    source: string
}

export type CreateTaskOutput = {
    taskId: string
}

export type DescribeTaskInput = {
    taskId: string
}

export type DescribeTaskOutput = {
    status: string
}
