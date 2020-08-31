import {Twirp} from "./twirp"

export class Compete {
    private readonly twirp: Twirp;

    constructor(twirp: Twirp) {
        this.twirp = twirp
    }

    CreateContest(input: CreateContestInput): Promise<CreateContestOutput> {
        return this.twirp.call("eolymp.compete.Compete/CreateContest", input);
    }

    ImportProblem(input: ImportProblemInput): Promise<ImportProblemOutput> {
        return this.twirp.call("eolymp.compete.Compete/ImportProblem", input);
    }

    DeleteProblem(input: DeleteProblemInput): Promise<DeleteProblemOutput> {
        return this.twirp.call("eolymp.compete.Compete/DeleteProblem", input);
    }

    SyncProblem(input: SyncProblemInput): Promise<SyncProblemOutput> {
        return this.twirp.call("eolymp.compete.Compete/SyncProblem", input);
    }

    StartContest(input: StartContestInput): Promise<StartContestOutput> {
        return this.twirp.call("eolymp.compete.Compete/StartContest", input);
    }

    CreateSubmission(input: CreateSubmissionInput): Promise<CreateSubmissionOutput> {
        return this.twirp.call("eolymp.compete.Compete/CreateSubmission", input)
    }

    DescribeSubmission(input: DescribeSubmissionInput): Promise<DescribeSubmissionOutput> {
        return this.twirp.call("eolymp.compete.Compete/DescribeSubmission", input)
    }

    DescribeContest(input: DescribeContestInput): Promise<DescribeContestOutput> {
        return this.twirp.call("eolymp.compete.Compete/DescribeContest", input)
    }

    ListContests(input: ListContestsInput): Promise<ListContestsOutput> {
        return this.twirp.call("eolymp.compete.Compete/ListContests", input)
    }

    ListProblems(input: ListProblemsInput): Promise<ListProblemsOutput> {
        return this.twirp.call("eolymp.compete.Compete/ListProblems", input)
    }

    ListParticipants(input: ListParticipantsInput): Promise<ListParticipantsOutput> {
        return this.twirp.call("eolymp.compete.Compete/ListParticipants", input)
    }

    ListSubmissions(input: ListSubmissionsInput): Promise<ListSubmissionsOutput> {
        return this.twirp.call("eolymp.compete.Compete/ListSubmissions", input)
    }
}

export type CreateContestInput = {
    contest: Contest
};

export type CreateContestOutput = {
    contestId: string
}

export type ImportProblemInput = {
    contestId: string
    importId: string
    index: number
    score: number
};

export type ImportProblemOutput = {
    problemId: string
}

export type DeleteProblemInput = {
    problemId: string
};

export type DeleteProblemOutput = {
}

export type SyncProblemInput = {
    problemId: string
};

export type SyncProblemOutput = {
}

export type StartContestInput = {
    contestId: string
}

export type StartContestOutput = {
}

export type CreateSubmissionInput = {
    lang: string
    source: string
    problemId: string
}

export type CreateSubmissionOutput = {
    submissionId: string
}

export type DescribeSubmissionInput = {
    submissionId: string
}

export type DescribeSubmissionOutput = {
}

export type ListContestsInput = {
    filters?: {
        own?: {
            is_true?: boolean
            is_false?: boolean
        }
    }
}

export type ListContestsOutput = {
    items: Contest[]
    total: number
}

export type ListProblemsInput = {
    contestId: string
    withStatements: boolean
    withContent: boolean
    withVerifier: boolean
    withTests: boolean
    onlyExamples: boolean
}

export type ListProblemsOutput = {
    items: Problem[]
    total: number
}

export type ListParticipantsInput = {
    contestId: string
}

export type ListParticipantsOutput = {
    items: Participant[]
    total: number
}

export type ListSubmissionsInput = {
    contestId: string
}

export type ListSubmissionsOutput = {
    items: Submission[]
    total: number
}

export type DescribeContestInput = {
    contestId: string
}

export type DescribeContestOutput = {
    contest: Contest
}

export type Contest = {
    domain: string
    duration: number
    endsAt: string
    id: string
    name: string
    public: boolean
    startsAt: string
    status: string
    type: string
}

export type Problem = {
    fileSizeLimit: number
    id: string
    index: number
    memoryLimit: number
    score: number
    timeLimit: number
    statements?: Array<Statement>
    verifier?: Verifier
    tests?: Array<Test>
}

export type Statement = {
    content?: string
    default: boolean
    locale: string
    title: string
}

export type Verifier = {
    type: string
    lang?: string
    source?: string
    caseSensitive?: boolean
    precision?: number
}

export type Test = {
    answerObjectId: string
    example: boolean
    index: number
    inputObjectId: string
}

export type Participant = {
    completeAt: string
    id: string
    score: number
    startedAt: string
    status: string
    userId: string
}

export type Submission = {
    contestId: string
    id: string
    lang: string
    participantId: string
    problemId: string
    score: number
    source: string
    status: string
    submittedAt: string
}
