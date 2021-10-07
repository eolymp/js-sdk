import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression";
import { Member } from "./member";
import { Permission } from "./permission";
import { Space } from "./space";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Universe {
    private readonly cli;
    constructor(cli: Client);
    CreateSpace(input: CreateSpaceInput): Promise<CreateSpaceOutput>;
    UpdateSpace(input: UpdateSpaceInput): Promise<UpdateSpaceOutput>;
    DeleteSpace(input: DeleteSpaceInput): Promise<DeleteSpaceOutput>;
    LookupSpace(input: LookupSpaceInput): Promise<LookupSpaceOutput>;
    DescribeSpace(input: DescribeSpaceInput): Promise<DescribeSpaceOutput>;
    ListSpaces(input: ListSpacesInput): Promise<ListSpacesOutput>;
    GrantPermission(input: GrantPermissionInput): Promise<GrantPermissionOutput>;
    RevokePermission(input: RevokePermissionInput): Promise<RevokePermissionOutput>;
    DescribePermission(input: DescribePermissionInput): Promise<DescribePermissionOutput>;
    IntrospectPermission(input: IntrospectPermissionInput): Promise<IntrospectPermissionOutput>;
    ListPermissions(input: ListPermissionsInput): Promise<ListPermissionsOutput>;
    AddMember(input: AddMemberInput): Promise<AddMemberOutput>;
    UpdateMember(input: UpdateMemberInput): Promise<UpdateMemberOutput>;
    RemoveMember(input: RemoveMemberInput): Promise<RemoveMemberOutput>;
    DescribeMember(input: DescribeMemberInput): Promise<DescribeMemberOutput>;
    IntrospectMember(input: IntrospectMemberInput): Promise<IntrospectMemberOutput>;
    ListMembers(input: ListMembersInput): Promise<ListMembersOutput>;
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
export declare type AddMemberInput = {
    spaceId?: string;
    member?: Member;
};
export declare type AddMemberOutput = {
    memberId?: string;
};
export declare type UpdateMemberInput = {
    memberId?: string;
    member?: Member;
};
export declare type UpdateMemberOutput = Record<string, unknown>;
export declare type RemoveMemberInput = {
    memberId?: string;
};
export declare type RemoveMemberOutput = Record<string, unknown>;
export declare type DescribeMemberInput = {
    memberId?: string;
};
export declare type DescribeMemberOutput = {
    member?: Member;
};
export declare type IntrospectMemberInput = {
    spaceId?: string;
};
export declare type IntrospectMemberOutput = {
    member?: Member;
};
export declare type ListMembersInput = {
    spaceId?: string;
    offset?: number;
    size?: number;
    filters?: ListMembersInput_Filter;
};
export declare type ListMembersInput_Filter = {
    id?: ExpressionID[];
    userId?: ExpressionID[];
    disabled?: ExpressionBool[];
    name?: ExpressionString[];
};
export declare type ListMembersOutput = {
    total?: number;
    items?: Member[];
};
export {};
