// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionID } from "../wellknown/expression"
import { Assignment } from "./assignment"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class AssignmentService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateAssignment(input: CreateAssignmentInput, opts?: any): Promise<CreateAssignmentOutput> {
    const path = "/assignments";

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  UpdateAssignment(input: UpdateAssignmentInput, opts?: any): Promise<UpdateAssignmentOutput> {
    const path = "/assignments/"+encodeURIComponent(input.assignmentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.assignmentId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteAssignment(input: DeleteAssignmentInput, opts?: any): Promise<DeleteAssignmentOutput> {
    const path = "/assignments/"+encodeURIComponent(input.assignmentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.assignmentId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeAssignment(input: DescribeAssignmentInput, opts?: any): Promise<DescribeAssignmentOutput> {
    const path = "/assignments/"+encodeURIComponent(input.assignmentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.assignmentId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  IntrospectAssignment(input: IntrospectAssignmentInput, opts?: any): Promise<IntrospectAssignmentOutput> {
    const path = "/viewer/assignment";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListAssignments(input: ListAssignmentsInput, opts?: any): Promise<ListAssignmentsOutput> {
    const path = "/assignments";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  StartAssignment(input: StartAssignmentInput, opts?: any): Promise<StartAssignmentOutput> {
    const path = "/assignments/"+encodeURIComponent(input.assignmentId||'')+"/start";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.assignmentId);

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type ListAssignmentsInput = {
  offset?: number;
  size?: number;
  filters?: ListAssignmentsInput_Filter;
  sort?: string;
  order?: string;
  extra?: string[];
}

export type ListAssignmentsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  memberId?: ExpressionID[];
  groupId?: ExpressionID[];
}

export type ListAssignmentsOutput = {
  total?: number;
  items?: Assignment[];
}

export type DescribeAssignmentInput = {
  assignmentId?: string;
  extra?: string[];
}

export type DescribeAssignmentOutput = {
  assignment?: Assignment;
}

export type IntrospectAssignmentInput = Record<string, unknown>;

export type IntrospectAssignmentOutput = {
  assignment?: Assignment;
}

export type CreateAssignmentInput = {
  assignment?: Assignment;
}

export type CreateAssignmentOutput = {
  assignmentId?: string;
}

export type UpdateAssignmentInput = {
  patch?: string[];
  assignmentId?: string;
  assignment?: Assignment;
}

export type UpdateAssignmentOutput = Record<string, unknown>;

export type DeleteAssignmentInput = {
  assignmentId?: string;
}

export type DeleteAssignmentOutput = Record<string, unknown>;

export type StartAssignmentInput = {
  assignmentId?: string;
}

export type StartAssignmentOutput = Record<string, unknown>;

