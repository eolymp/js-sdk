import { ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression";
import { Member } from "./member";
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
};
export declare type ListSpacesOutput = {
    total?: number;
    items?: Space[];
};
export declare type AddMemberInput = {
    spaceId?: string;
    userId?: string;
    role?: string;
};
export declare type AddMemberOutput = {
    memberId?: string;
};
export declare type UpdateMemberInput = {
    memberId?: string;
    role?: string;
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
    role?: ExpressionEnum[];
    username?: ExpressionString[];
};
export declare type ListMembersOutput = {
    total?: number;
    items?: Member[];
};
export {};
