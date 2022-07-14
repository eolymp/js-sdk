import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression";
import { Attribute } from "./attribute";
import { Member, Member_Value } from "./member";
interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Community {
    private readonly cli;
    constructor(cli: Client);
    JoinSpace<O>(input: JoinSpaceInput, opts?: O): Promise<JoinSpaceOutput>;
    LeaveSpace<O>(input: LeaveSpaceInput, opts?: O): Promise<LeaveSpaceOutput>;
    RegisterMember<O>(input: RegisterMemberInput, opts?: O): Promise<RegisterMemberOutput>;
    IntrospectMember<O>(input: IntrospectMemberInput, opts?: O): Promise<IntrospectMemberOutput>;
    AddMember<O>(input: AddMemberInput, opts?: O): Promise<AddMemberOutput>;
    UpdateMember<O>(input: UpdateMemberInput, opts?: O): Promise<UpdateMemberOutput>;
    RemoveMember<O>(input: RemoveMemberInput, opts?: O): Promise<RemoveMemberOutput>;
    DescribeMember<O>(input: DescribeMemberInput, opts?: O): Promise<DescribeMemberOutput>;
    ListMembers<O>(input: ListMembersInput, opts?: O): Promise<ListMembersOutput>;
    AddAttribute<O>(input: AddAttributeInput, opts?: O): Promise<AddAttributeOutput>;
    UpdateAttribute<O>(input: UpdateAttributeInput, opts?: O): Promise<UpdateAttributeOutput>;
    RemoveAttribute<O>(input: RemoveAttributeInput, opts?: O): Promise<RemoveAttributeOutput>;
    DescribeAttribute<O>(input: DescribeAttributeInput, opts?: O): Promise<DescribeAttributeOutput>;
    ListAttributes<O>(input: ListAttributesInput, opts?: O): Promise<ListAttributesOutput>;
}
export declare type JoinSpaceInput = {
    name?: string;
    values?: Member_Value[];
};
export declare type JoinSpaceOutput = {
    ern?: string;
    memberId?: string;
};
export declare type RegisterMemberInput = {
    values?: Member_Value[];
};
export declare type RegisterMemberOutput = Record<string, unknown>;
export declare type LeaveSpaceInput = Record<string, unknown>;
export declare type LeaveSpaceOutput = Record<string, unknown>;
export declare type AddMemberInput = {
    member?: Member;
};
export declare type AddMemberOutput = {
    ern?: string;
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
export declare type AddAttributeOutput = {
    ern?: string;
};
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
export declare type ListAttributesInput = {
    offset?: number;
    size?: number;
    filters?: ListAttributesInput_Filter;
};
export declare type ListAttributesInput_Filter = {
    id?: ExpressionID[];
    key?: ExpressionEnum[];
    hidden?: ExpressionBool[];
    required?: ExpressionBool[];
    type?: ExpressionEnum[];
};
export declare type ListAttributesOutput = {
    total?: number;
    items?: Attribute[];
};
export {};
