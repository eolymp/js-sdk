import { ExpressionBool, ExpressionID, ExpressionString } from "../wellknown/expression";
import { Attribute } from "./attribute";
import { Member, Member_Value } from "./member";
interface Client {
    call<R, E>(method: string, args: R): Promise<E>;
}
export declare class Community {
    private readonly cli;
    constructor(cli: Client);
    JoinSpace(input: JoinSpaceInput): Promise<JoinSpaceOutput>;
    LeaveSpace(input: LeaveSpaceInput): Promise<LeaveSpaceOutput>;
    AddMember(input: AddMemberInput): Promise<AddMemberOutput>;
    UpdateMember(input: UpdateMemberInput): Promise<UpdateMemberOutput>;
    RemoveMember(input: RemoveMemberInput): Promise<RemoveMemberOutput>;
    DescribeMember(input: DescribeMemberInput): Promise<DescribeMemberOutput>;
    IntrospectMember(input: IntrospectMemberInput): Promise<IntrospectMemberOutput>;
    ListMembers(input: ListMembersInput): Promise<ListMembersOutput>;
    AddAttribute(input: AddAttributeInput): Promise<AddAttributeOutput>;
    UpdateAttribute(input: UpdateAttributeInput): Promise<UpdateAttributeOutput>;
    RemoveAttribute(input: RemoveAttributeInput): Promise<RemoveAttributeOutput>;
    DescribeAttribute(input: DescribeAttributeInput): Promise<DescribeAttributeOutput>;
    ListAttributes(input: ListAttributesInput): Promise<ListAttributesOutput>;
}
export declare type JoinSpaceInput = {
    name?: string;
    values?: Member_Value[];
};
export declare type JoinSpaceOutput = {
    memberId?: string;
};
export declare type LeaveSpaceInput = Record<string, unknown>;
export declare type LeaveSpaceOutput = Record<string, unknown>;
export declare type AddMemberInput = {
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
export declare type IntrospectMemberInput = Record<string, unknown>;
export declare type IntrospectMemberOutput = {
    member?: Member;
};
export declare type ListMembersInput = {
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
export declare type AddAttributeInput = {
    attributeKey?: string;
    attribute?: Attribute;
};
export declare type AddAttributeOutput = Record<string, unknown>;
export declare type UpdateAttributeInput = {
    attributeKey?: string;
    attribute?: Attribute;
};
export declare type UpdateAttributeOutput = Record<string, unknown>;
export declare type RemoveAttributeInput = {
    attributeKey?: string;
};
export declare type RemoveAttributeOutput = Record<string, unknown>;
export declare type DescribeAttributeInput = {
    attributeKey?: string;
};
export declare type DescribeAttributeOutput = {
    attribute?: Attribute;
};
export declare type ListAttributesInput = Record<string, unknown>;
export declare type ListAttributesOutput = {
    total?: number;
    items?: Attribute[];
};
export {};
