// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Content } from "../ecm/content"
import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionTimestamp } from "../wellknown/expression"
import { Participant } from "./participant"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class ParticipantService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  AssignParticipant(input: AssignParticipantInput, opts?: any): Promise<AssignParticipantOutput> {
    const path = "/participants";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  EnableParticipant(input: EnableParticipantInput, opts?: any): Promise<EnableParticipantOutput> {
    const path = "/participants/"+encodeURIComponent(input.participantId||'')+"/enable";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.participantId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DisableParticipant(input: DisableParticipantInput, opts?: any): Promise<DisableParticipantOutput> {
    const path = "/participants/"+encodeURIComponent(input.participantId||'')+"/disable";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.participantId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateParticipant(input: UpdateParticipantInput, opts?: any): Promise<UpdateParticipantOutput> {
    const path = "/participants/"+encodeURIComponent(input.participantId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.participantId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DisqualifyParticipant(input: DisqualifyParticipantInput, opts?: any): Promise<DisqualifyParticipantOutput> {
    const path = "/participants/"+encodeURIComponent(input.participantId||'')+"/disqualify";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.participantId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteParticipant(input: DeleteParticipantInput, opts?: any): Promise<DeleteParticipantOutput> {
    const path = "/participants/"+encodeURIComponent(input.participantId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.participantId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeParticipant(input: DescribeParticipantInput, opts?: any): Promise<DescribeParticipantOutput> {
    const path = "/participants/"+encodeURIComponent(input.participantId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.participantId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListParticipants(input: ListParticipantsInput, opts?: any): Promise<ListParticipantsOutput> {
    const path = "/participants";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeViewer(input: DescribeViewerInput, opts?: any): Promise<DescribeViewerOutput> {
    const path = "/introspect";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  JoinContest(input: JoinContestInput, opts?: any): Promise<JoinContestOutput> {
    const path = "/join";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  StartContest(input: StartContestInput, opts?: any): Promise<StartContestOutput> {
    const path = "/start";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type ParticipantChangedEvent = {
  contestId?: string;
  before?: Participant;
  after?: Participant;
}

export type ParticipantJoinedEvent = {
  contestId?: string;
  participant?: Participant;
}

export type ParticipantFinalizedEvent = {
  contestId?: string;
  participant?: Participant;
}

export type AssignParticipantInput = {
  contestId?: string;
  participant?: Participant;
  memberId?: string;
  groupId?: string;
  unofficial?: boolean;
  inactive?: boolean;
}

export type AssignParticipantOutput = {
  participantId?: string;
}

export type EnableParticipantInput = {
  contestId?: string;
  participantId?: string;
}

export type EnableParticipantOutput = Record<string, unknown>;

export type DisableParticipantInput = {
  contestId?: string;
  participantId?: string;
}

export type DisableParticipantOutput = Record<string, unknown>;

export type UpdateParticipantInput = {
  patch?: string[];
  contestId?: string;
  participantId?: string;
  participant?: Participant;
}

export type UpdateParticipantOutput = Record<string, unknown>;

export type DisqualifyParticipantInput = {
  contestId?: string;
  participantId?: string;
  disqualify?: boolean;
  reason?: Content;
}

export type DisqualifyParticipantOutput = Record<string, unknown>;

export type DeleteParticipantInput = {
  contestId?: string;
  participantId?: string;
}

export type DeleteParticipantOutput = Record<string, unknown>;

export type DescribeParticipantInput = {
  contestId?: string;
  participantId?: string;
}

export type DescribeParticipantOutput = {
  participant?: Participant;
}

export type ListParticipantsInput = {
  contestId?: string;
  offset?: number;
  size?: number;
  search?: string;
  filters?: ListParticipantsInput_Filter;
  sort?: string;
  order?: string;
}

export type ListParticipantsInput_Filter = {
  id?: ExpressionID[];
  memberId?: ExpressionID[];
  groupId?: ExpressionID[];
  status?: ExpressionEnum[];
  startedAt?: ExpressionTimestamp[];
  unofficial?: ExpressionBool[];
  disqualified?: ExpressionBool[];
  inactive?: ExpressionBool[];
}

export type ListParticipantsOutput = {
  total?: number;
  items?: Participant[];
}

export type WatchParticipantInput = {
  contestId?: string;
  participantId?: string;
}

export type WatchParticipantOutput = {
  participant?: Participant;
}

export type DescribeViewerInput = {
  contestId?: string;
}

export type DescribeViewerOutput = {
  participant?: Participant;
}

export type JoinContestInput = {
  contestId?: string;
}

export type JoinContestOutput = Record<string, unknown>;

export type StartContestInput = {
  contestId?: string;
}

export type StartContestOutput = Record<string, unknown>;

