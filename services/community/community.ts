// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Attribute } from "./attribute"
import { IdentityProvider_OIDC } from "./idp"
import { Member, Member_Value } from "./member"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts: O): Promise<E>;
}

export class Community {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  JoinSpace<O>(input: JoinSpaceInput, opts?: O): Promise<JoinSpaceOutput> {
    const path = "/members/_self";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  LeaveSpace<O>(input: LeaveSpaceInput, opts?: O): Promise<LeaveSpaceOutput> {
    const path = "/members/_self";

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  RegisterMember<O>(input: RegisterMemberInput, opts?: O): Promise<RegisterMemberOutput> {
    const path = "/members/_self/attributes";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  IntrospectMember<O>(input: IntrospectMemberInput, opts?: O): Promise<IntrospectMemberOutput> {
    const path = "/members/_self";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  AddMember<O>(input: AddMemberInput, opts?: O): Promise<AddMemberOutput> {
    const path = "/members";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateMember<O>(input: UpdateMemberInput, opts?: O): Promise<UpdateMemberOutput> {
    const path = "/members/"+encodeURIComponent(input.memberId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  RemoveMember<O>(input: RemoveMemberInput, opts?: O): Promise<RemoveMemberOutput> {
    const path = "/members/"+encodeURIComponent(input.memberId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeMember<O>(input: DescribeMemberInput, opts?: O): Promise<DescribeMemberOutput> {
    const path = "/members/"+encodeURIComponent(input.memberId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListMembers<O>(input: ListMembersInput, opts?: O): Promise<ListMembersOutput> {
    const path = "/members";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  AddAttribute<O>(input: AddAttributeInput, opts?: O): Promise<AddAttributeOutput> {
    const path = "/attributes";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateAttribute<O>(input: UpdateAttributeInput, opts?: O): Promise<UpdateAttributeOutput> {
    const path = "/attributes/"+encodeURIComponent(input.attributeKey||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.attributeKey);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  RemoveAttribute<O>(input: RemoveAttributeInput, opts?: O): Promise<RemoveAttributeOutput> {
    const path = "/attributes/"+encodeURIComponent(input.attributeKey||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.attributeKey);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeAttribute<O>(input: DescribeAttributeInput, opts?: O): Promise<DescribeAttributeOutput> {
    const path = "/attributes/"+encodeURIComponent(input.attributeKey||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.attributeKey);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListAttributes<O>(input: ListAttributesInput, opts?: O): Promise<ListAttributesOutput> {
    const path = "/attributes";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeIdentityProvider<O>(input: DescribeIdentityProviderInput, opts?: O): Promise<DescribeIdentityProviderOutput> {
    const path = "/idp";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ConfigureIdentityProvider<O>(input: ConfigureIdentityProviderInput, opts?: O): Promise<ConfigureIdentityProviderOutput> {
    const path = "/idp";

    return this.cli.call("PUT", this.url+path, input, opts);
  }
}

export type JoinSpaceInput = {
  name?: string;
  values?: Member_Value[];
}

export type JoinSpaceOutput = {
  ern?: string;
  memberId?: string;
}

export type RegisterMemberInput = {
  values?: Member_Value[];
}

export type RegisterMemberOutput = Record<string, unknown>;

export type LeaveSpaceInput = Record<string, unknown>;

export type LeaveSpaceOutput = Record<string, unknown>;

export type AddMemberInput = {
  member?: Member;
}

export type AddMemberOutput = {
  ern?: string;
  memberId?: string;
}

export type UpdateMemberInput = {
  memberId?: string;
  member?: Member;
}

export type UpdateMemberOutput = Record<string, unknown>;

export type RemoveMemberInput = {
  memberId?: string;
}

export type RemoveMemberOutput = Record<string, unknown>;

export type DescribeMemberInput = {
  memberId?: string;
}

export type DescribeMemberOutput = {
  member?: Member;
}

export type IntrospectMemberInput = Record<string, unknown>;

export type IntrospectMemberOutput = {
  member?: Member;
}

export type ListMembersInput = {
  offset?: number;
  size?: number;
  filters?: ListMembersInput_Filter;
}

export type ListMembersInput_Filter = {
  id?: ExpressionID[];
  userId?: ExpressionID[];
  disabled?: ExpressionBool[];
  name?: ExpressionString[];
}

export type ListMembersOutput = {
  total?: number;
  items?: Member[];
}

export type AddAttributeInput = {
  attributeKey?: string;
  attribute?: Attribute;
}

export type AddAttributeOutput = {
  ern?: string;
}

export type UpdateAttributeInput = {
  attributeKey?: string;
  attribute?: Attribute;
}

export type UpdateAttributeOutput = Record<string, unknown>;

export type RemoveAttributeInput = {
  attributeKey?: string;
}

export type RemoveAttributeOutput = Record<string, unknown>;

export type DescribeAttributeInput = {
  attributeKey?: string;
}

export type DescribeAttributeOutput = {
  attribute?: Attribute;
}

export type ListAttributesInput = {
  offset?: number;
  size?: number;
  filters?: ListAttributesInput_Filter;
}

export type ListAttributesInput_Filter = {
  id?: ExpressionID[];
  key?: ExpressionEnum[];
  hidden?: ExpressionBool[];
  required?: ExpressionBool[];
  type?: ExpressionEnum[];
}

export type ListAttributesOutput = {
  total?: number;
  items?: Attribute[];
}

export type DescribeIdentityProviderInput = Record<string, unknown>;

export type DescribeIdentityProviderOutput = {
  oidc?: IdentityProvider_OIDC;
}

export type ConfigureIdentityProviderInput = {
  oidc?: IdentityProvider_OIDC;
}

export type ConfigureIdentityProviderOutput = Record<string, unknown>;

