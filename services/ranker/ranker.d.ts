import { ExpressionID } from "../wellknown/expression";
import { Activity } from "./activity";
import { Scoreboard, Scoreboard_Column, Scoreboard_Row } from "./scoreboard";
interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Ranker {
    private readonly cli;
    constructor(cli: Client);
    CreateScoreboard<O>(input: CreateScoreboardInput, opts?: O): Promise<CreateScoreboardOutput>;
    UpdateScoreboard<O>(input: UpdateScoreboardInput, opts?: O): Promise<UpdateScoreboardOutput>;
    RebuildScoreboard<O>(input: RebuildScoreboardInput, opts?: O): Promise<RebuildScoreboardOutput>;
    DeleteScoreboard<O>(input: DeleteScoreboardInput, opts?: O): Promise<DeleteScoreboardOutput>;
    DescribeScoreboard<O>(input: DescribeScoreboardInput, opts?: O): Promise<DescribeScoreboardOutput>;
    ListScoreboards<O>(input: ListScoreboardsInput, opts?: O): Promise<ListScoreboardsOutput>;
    DescribeScoreboardRow<O>(input: DescribeScoreboardRowInput, opts?: O): Promise<DescribeScoreboardRowOutput>;
    ListScoreboardRows<O>(input: ListScoreboardRowsInput, opts?: O): Promise<ListScoreboardRowsOutput>;
    AddScoreboardColumn<O>(input: AddScoreboardColumnInput, opts?: O): Promise<AddScoreboardColumnOutput>;
    DeleteScoreboardColumn<O>(input: DeleteScoreboardColumnInput, opts?: O): Promise<DeleteScoreboardColumnOutput>;
    DescribeScoreboardColumn<O>(input: DescribeScoreboardColumnInput, opts?: O): Promise<DescribeScoreboardColumnOutput>;
    ListScoreboardColumns<O>(input: ListScoreboardColumnsInput, opts?: O): Promise<ListScoreboardColumnsOutput>;
    ListActivities<O>(input: ListActivitiesInput, opts?: O): Promise<ListActivitiesOutput>;
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
export declare type RebuildScoreboardOutput = {
    activityId?: string;
};
export declare type DeleteScoreboardInput = {
    scoreboardId?: string;
};
export declare type DeleteScoreboardOutput = Record<string, unknown>;
export declare type DescribeScoreboardInput = {
    scoreboardId?: string;
    scoreboardKey?: string;
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
export declare type DescribeScoreboardRowInput = {
    scoreboardId?: string;
    memberId?: string;
};
export declare type DescribeScoreboardRowOutput = {
    row?: Scoreboard_Row;
};
export declare type ListScoreboardRowsInput = {
    scoreboardId?: string;
    offset?: number;
    size?: number;
    filters?: ListScoreboardRowsInput_Filter;
};
export declare type ListScoreboardRowsInput_Filter = {
    memberId?: ExpressionID[];
};
export declare type ListScoreboardRowsOutput = {
    total?: number;
    items?: Scoreboard_Row[];
};
export declare type AddScoreboardColumnInput = {
    scoreboardId?: string;
    column?: Scoreboard_Column;
};
export declare type AddScoreboardColumnOutput = {
    columnId?: string;
};
export declare type DeleteScoreboardColumnInput = {
    columnId?: string;
};
export declare type DeleteScoreboardColumnOutput = Record<string, unknown>;
export declare type DescribeScoreboardColumnInput = {
    columnId?: string;
};
export declare type DescribeScoreboardColumnOutput = {
    column?: Scoreboard_Column;
};
export declare type ListScoreboardColumnsInput = {
    scoreboardId?: string;
};
export declare type ListScoreboardColumnsOutput = {
    total?: number;
    items?: Scoreboard_Column[];
};
export declare type ListActivitiesInput = {
    scoreboardId?: string;
    offset?: number;
    size?: number;
};
export declare type ListActivitiesOutput = {
    total?: number;
    items?: Activity[];
};
export {};
