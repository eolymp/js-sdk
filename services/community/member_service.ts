// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Content } from "../ecm/content"
import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionInt, ExpressionString, ExpressionTimestamp } from "../wellknown/expression"
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

  UpdateMemberPicture(input: UpdateMemberPictureInput, opts?: any): Promise<UpdateMemberPictureOutput> {
    const path = "/members/"+encodeURIComponent(input.memberId||'')+"/picture";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteMember(input: DeleteMemberInput, opts?: any): Promise<DeleteMemberOutput> {
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

  NotifyMember(input: NotifyMemberInput, opts?: any): Promise<NotifyMemberOutput> {
    const path = "/members/"+encodeURIComponent(input.memberId||'')+"/notify";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeMemberUsage(input: DescribeMemberUsageInput, opts?: any): Promise<DescribeMemberUsageOutput> {
    const path = "/usage/members";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type MemberChangedEvent = {
  before?: Member;
  after?: Member;
}

export type CreateMemberInput = {
  member?: Member;
}

export type CreateMemberOutput = {
  memberId?: string;
}

export type UpdateMemberInput = {
  patch?: string[];
  memberId?: string;
  member?: Member;
}

export type UpdateMemberOutput = Record<string, unknown>;

export type UpdateMemberPictureInput = {
  memberId?: string;
  filename?: string;
  data?: string;
  offsetX?: number;
  offsetY?: number;
  size?: number;
}

export type UpdateMemberPictureOutput = {
  pictureUrl?: string;
}

export type DeleteMemberInput = {
  memberId?: string;
  forceDelete?: boolean;
}

export type DeleteMemberOutput = Record<string, unknown>;

export type RestoreMemberInput = {
  memberId?: string;
}

export type RestoreMemberOutput = Record<string, unknown>;

export type DescribeMemberInput = {
  memberId?: string;
  extra?: string[];
}

export type DescribeMemberOutput = {
  member?: Member;
}

export type ListMembersInput = {
  offset?: number;
  size?: number;
  filters?: ListMembersInput_Filter;
  search?: string;
  sort?: string;
  order?: string;
  extra?: string[];
}

export type ListMembersInput_ExpressionAttribute = {
  attributeKey?: string;
  number?: ExpressionInt;
  string?: ExpressionInt;
}

export type ListMembersInput_Filter = {
  id?: ExpressionID[];
  type?: ExpressionEnum[];
  name?: ExpressionString[];
  inactive?: ExpressionBool[];
  incomplete?: ExpressionBool[];
  unofficial?: ExpressionBool[];
  seated?: ExpressionBool[];
  teamId?: ExpressionID[];
  groupId?: ExpressionID[];
  userIssuer?: ExpressionString[];
  userSubject?: ExpressionString[];
  userEmail?: ExpressionString[];
  userName?: ExpressionString[];
  userNickname?: ExpressionString[];
  birthday?: ExpressionTimestamp[];
  country?: ExpressionID[];
  score?: ExpressionInt[];
  attribute?: ListMembersInput_ExpressionAttribute[];
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

export type DescribeMemberUsageInput = {
  periodStart?: string;
  periodEnd?: string;
}

export type DescribeMemberUsageOutput = {
  totalMembers?: number;
  activeMembers?: number;
  newMembers?: number;
}

export type NotifyMemberInput = {
  memberId?: string;
  type?: string;
  locale?: string;
  subject?: string;
  content?: Content;
  parameters?: Record<string, string>;
}

export type NotifyMemberOutput = {
  messageId?: string;
}

