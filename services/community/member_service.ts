// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Member } from "./member"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class MemberService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateMember(input: CreateMemberInput, opts?: any): Promise<CreateMemberOutput> {
    const path = "/members";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateMember(input: UpdateMemberInput, opts?: any): Promise<UpdateMemberOutput> {
    const path = "/members/"+encodeURIComponent(input.memberId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  RemoveMember(input: RemoveMemberInput, opts?: any): Promise<RemoveMemberOutput> {
    const path = "/members/"+encodeURIComponent(input.memberId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  RestoreMember(input: RestoreMemberInput, opts?: any): Promise<RestoreMemberOutput> {
    const path = "/members/"+encodeURIComponent(input.memberId||'')+"/restore";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeMember(input: DescribeMemberInput, opts?: any): Promise<DescribeMemberOutput> {
    const path = "/members/"+encodeURIComponent(input.memberId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListMembers(input: ListMembersInput, opts?: any): Promise<ListMembersOutput> {
    const path = "/members";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  AssignMember(input: AssignMemberInput, opts?: any): Promise<AssignMemberOutput> {
    const path = "/members/"+encodeURIComponent(input.teamId||'')+"/users/"+encodeURIComponent(input.memberId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.teamId);
    delete(input.memberId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  UnassignMember(input: UnassignMemberInput, opts?: any): Promise<UnassignMemberOutput> {
    const path = "/members/"+encodeURIComponent(input.teamId||'')+"/users/"+encodeURIComponent(input.memberId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.teamId);
    delete(input.memberId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }
}

export type CreateMemberInput = {
  member?: Member;
}

export type CreateMemberOutput = {
  memberId?: string;
}

export type UpdateMemberInput = {
  patch?: string[];
  patchAccountProps?: string[];
  patchAttributeKeys?: string[];
  memberId?: string;
  member?: Member;
}

export type UpdateMemberOutput = Record<string, unknown>;

export type RemoveMemberInput = {
  memberId?: string;
  forceDelete?: boolean;
}

export type RemoveMemberOutput = Record<string, unknown>;

export type RestoreMemberInput = {
  memberId?: string;
}

export type RestoreMemberOutput = Record<string, unknown>;

export type DescribeMemberInput = {
  memberId?: string;
}

export type DescribeMemberOutput = {
  member?: Member;
}

export type ListMembersInput = {
  offset?: number;
  size?: number;
  filters?: ListMembersInput_Filter;
  sort?: string;
  order?: string;
}

export type ListMembersInput_Filter = {
  id?: ExpressionID[];
  type?: ExpressionEnum[];
  nickname?: ExpressionString[];
  active?: ExpressionBool[];
  registered?: ExpressionBool[];
  unofficial?: ExpressionBool[];
  teamId?: ExpressionID[];
  userIssuer?: ExpressionString[];
  userSubject?: ExpressionString[];
  userEmail?: ExpressionString[];
  userName?: ExpressionString[];
}

export type ListMembersOutput = {
  total?: number;
  items?: Member[];
}

export type AssignMemberInput = {
  teamId?: string;
  memberId?: string;
}

export type AssignMemberOutput = Record<string, unknown>;

export type UnassignMemberInput = {
  teamId?: string;
  memberId?: string;
}

export type UnassignMemberOutput = Record<string, unknown>;
