import { ExpressionID } from "../wellknown/expression";
import { Scoreboard, Scoreboard_Column, Scoreboard_Row } from "./scoreboard";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Ranker {
    private readonly cli;
    constructor(cli: Client);
    CreateScoreboard(input: CreateScoreboardInput): Promise<CreateScoreboardOutput>;
    UpdateScoreboard(input: UpdateScoreboardInput): Promise<UpdateScoreboardOutput>;
    RebuildScoreboard(input: RebuildScoreboardInput): Promise<RebuildScoreboardOutput>;
    DeleteScoreboard(input: DeleteScoreboardInput): Promise<DeleteScoreboardOutput>;
    LookupScoreboard(input: LookupScoreboardInput): Promise<LookupScoreboardOutput>;
    DescribeScoreboard(input: DescribeScoreboardInput): Promise<DescribeScoreboardOutput>;
    ListScoreboards(input: ListScoreboardsInput): Promise<ListScoreboardsOutput>;
    DescribeScoreboardRow(input: DescribeScoreboardRowInput): Promise<DescribeScoreboardRowOutput>;
    ListScoreboardRows(input: ListScoreboardRowsInput): Promise<ListScoreboardRowsOutput>;
    AddScoreboardColumn(input: AddScoreboardColumnInput): Promise<AddScoreboardColumnOutput>;
    DeleteScoreboardColumn(input: DeleteScoreboardColumnInput): Promise<DeleteScoreboardColumnOutput>;
    DescribeScoreboardColumn(input: DescribeScoreboardColumnInput): Promise<DescribeScoreboardColumnOutput>;
    ListScoreboardColumns(input: ListScoreboardColumnsInput): Promise<ListScoreboardColumnsOutput>;
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
export declare type DescribeScoreboardRowInput = {
    rowId?: string;
};
export declare type DescribeScoreboardRowOutput = {
    row?: Scoreboard_Row;
};
export declare type ListScoreboardRowsInput = {
    scoreboardId?: string;
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
export {};
