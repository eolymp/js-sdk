import { ExpressionID } from "../wellknown/expression";
import { Scoreboard, Scoreboard_Contest, Scoreboard_Row } from "./scoreboard";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Ranker {
    private readonly cli;
    constructor(cli: Client);
    CreateScoreboard(input: CreateScoreboardInput): Promise<CreateScoreboardOutput>;
    UpdateScoreboard(input: UpdateScoreboardInput): Promise<UpdateScoreboardOutput>;
    RebuildScoreboard(input: RebuildScoreboardInput): Promise<RebuildScoreboardOutput>;
    AssignContest(input: AssignContestInput): Promise<AssignContestOutput>;
    UnassignContest(input: UnassignContestInput): Promise<UnassignContestOutput>;
    DeleteScoreboard(input: DeleteScoreboardInput): Promise<DeleteScoreboardOutput>;
    LookupScoreboard(input: LookupScoreboardInput): Promise<LookupScoreboardOutput>;
    DescribeScoreboard(input: DescribeScoreboardInput): Promise<DescribeScoreboardOutput>;
    ListScoreboards(input: ListScoreboardsInput): Promise<ListScoreboardsOutput>;
    ListScoreboardRows(input: ListScoreboardRowsInput): Promise<ListScoreboardRowsOutput>;
}
export declare type CreateScoreboardInput = {
    scoreboard?: Scoreboard;
};
export declare type CreateScoreboardOutput = {
    scoreboardId?: string;
};
export declare type UpdateScoreboardInput = {
    scoreboardId?: string;
    scoreboard?: Scoreboard;
};
export declare type UpdateScoreboardOutput = Record<string, unknown>;
export declare type RebuildScoreboardInput = {
    scoreboardId?: string;
};
export declare type RebuildScoreboardOutput = Record<string, unknown>;
export declare type AssignContestInput = {
    scoreboardId?: string;
    contest?: Scoreboard_Contest;
};
export declare type AssignContestOutput = Record<string, unknown>;
export declare type UnassignContestInput = {
    scoreboardId?: string;
    contestId?: string;
};
export declare type UnassignContestOutput = Record<string, unknown>;
export declare type DeleteScoreboardInput = {
    scoreboardId?: string;
};
export declare type DeleteScoreboardOutput = Record<string, unknown>;
export declare type LookupScoreboardInput = {
    key?: string;
};
export declare type LookupScoreboardOutput = {
    scoreboard?: Scoreboard;
};
export declare type DescribeScoreboardInput = {
    scoreboardId?: string;
};
export declare type DescribeScoreboardOutput = {
    scoreboard?: Scoreboard;
};
export declare type ListScoreboardsInput = {
    offset?: number;
    size?: number;
    filters?: ListScoreboardsInput_Filter;
};
export declare type ListScoreboardsInput_Filter = {
    id?: ExpressionID[];
};
export declare type ListScoreboardsOutput = {
    total?: number;
    items?: Scoreboard[];
};
export declare type ListScoreboardRowsInput = {
    scoreboardId?: string;
};
export declare type ListScoreboardRowsOutput = {
    total?: number;
    items?: Scoreboard_Row[];
};
export {};
