import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression";
import { Permission } from "./permission";
import { Space } from "./space";
interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Universe {
    private readonly cli;
    constructor(cli: Client);
    CreateSpace<O>(input: CreateSpaceInput, opts?: O): Promise<CreateSpaceOutput>;
    UpdateSpace<O>(input: UpdateSpaceInput, opts?: O): Promise<UpdateSpaceOutput>;
    DeleteSpace<O>(input: DeleteSpaceInput, opts?: O): Promise<DeleteSpaceOutput>;
    LookupSpace<O>(input: LookupSpaceInput, opts?: O): Promise<LookupSpaceOutput>;
    DescribeSpace<O>(input: DescribeSpaceInput, opts?: O): Promise<DescribeSpaceOutput>;
    ListSpaces<O>(input: ListSpacesInput, opts?: O): Promise<ListSpacesOutput>;
    GrantPermission<O>(input: GrantPermissionInput, opts?: O): Promise<GrantPermissionOutput>;
    RevokePermission<O>(input: RevokePermissionInput, opts?: O): Promise<RevokePermissionOutput>;
    DescribePermission<O>(input: DescribePermissionInput, opts?: O): Promise<DescribePermissionOutput>;
    IntrospectPermission<O>(input: IntrospectPermissionInput, opts?: O): Promise<IntrospectPermissionOutput>;
    ListPermissions<O>(input: ListPermissionsInput, opts?: O): Promise<ListPermissionsOutput>;
}
export declare type CreateSpaceInput = {
    space?: Space;
};
export declare type CreateSpaceOutput = {
    spaceId?: string;
};
export declare type UpdateSpaceInput = {
    spaceId?: string;
    space?: Space;
};
export declare type UpdateSpaceOutput = Record<string, unknown>;
export declare type DeleteSpaceInput = {
    spaceId?: string;
};
export declare type DeleteSpaceOutput = Record<string, unknown>;
export declare type LookupSpaceInput = {
    key?: string;
};
export declare type LookupSpaceOutput = {
    space?: Space;
};
export declare type DescribeSpaceInput = {
    spaceId?: string;
};
export declare type DescribeSpaceOutput = {
    space?: Space;
};
export declare type ListSpacesInput = {
    offset?: number;
    size?: number;
    filters?: ListSpacesInput_Filter;
};
export declare type ListSpacesInput_Filter = {
    id?: ExpressionID[];
    key?: ExpressionID[];
    name?: ExpressionString[];
    own?: ExpressionBool[];
    member?: ExpressionBool[];
};
export declare type ListSpacesOutput = {
    total?: number;
    items?: Space[];
};
export declare type GrantPermissionInput = {
    spaceId?: string;
    role?: string;
    userId?: string;
};
export declare type GrantPermissionOutput = Record<string, unknown>;
export declare type RevokePermissionInput = {
    spaceId?: string;
    userId?: string;
};
export declare type RevokePermissionOutput = Record<string, unknown>;
export declare type DescribePermissionInput = {
    spaceId?: string;
    userId?: string;
};
export declare type DescribePermissionOutput = {
    permission?: Permission;
};
export declare type IntrospectPermissionInput = {
    spaceId?: string;
};
export declare type IntrospectPermissionOutput = {
    permission?: Permission;
};
export declare type ListPermissionsInput = {
    spaceId?: string;
    offset?: number;
    size?: number;
    filters?: ListPermissionsInput_Filter;
};
export declare type ListPermissionsInput_Filter = {
    id?: ExpressionID[];
    userId?: ExpressionID[];
    role?: ExpressionEnum[];
};
export declare type ListPermissionsOutput = {
    total?: number;
    items?: Permission[];
};
export {};
