// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionID } from "../wellknown/expression"
import { Enrollment } from "./enrollment"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class EnrollmentService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateEnrollment(input: CreateEnrollmentInput, opts?: any): Promise<CreateEnrollmentOutput> {
    const path = "/enrollments";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateEnrollment(input: UpdateEnrollmentInput, opts?: any): Promise<UpdateEnrollmentOutput> {
    const path = "/enrollments/"+encodeURIComponent(input.enrollmentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.enrollmentId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteEnrollment(input: DeleteEnrollmentInput, opts?: any): Promise<DeleteEnrollmentOutput> {
    const path = "/enrollments/"+encodeURIComponent(input.enrollmentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.enrollmentId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeEnrollment(input: DescribeEnrollmentInput, opts?: any): Promise<DescribeEnrollmentOutput> {
    const path = "/enrollments/"+encodeURIComponent(input.enrollmentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.enrollmentId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListEnrollments(input: ListEnrollmentsInput, opts?: any): Promise<ListEnrollmentsOutput> {
    const path = "/enrollments";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateEnrollmentInput = {
  enrollment?: Enrollment;
}

export type CreateEnrollmentOutput = {
  enrollmentId?: string;
}

export type UpdateEnrollmentInput = {
  patch?: string[];
  enrollmentId?: string;
  enrollment?: Enrollment;
}

export type UpdateEnrollmentOutput = Record<string, unknown>;

export type DeleteEnrollmentInput = {
  enrollmentId?: string;
}

export type DeleteEnrollmentOutput = Record<string, unknown>;

export type ListEnrollmentsInput = {
  offset?: number;
  size?: number;
  filters?: ListEnrollmentsInput_Filter;
  sort?: string;
  order?: string;
  extra?: string[];
}

export type ListEnrollmentsInput_Filter = {
  id?: ExpressionID[];
  memberId?: ExpressionID[];
  groupId?: ExpressionID[];
}

export type ListEnrollmentsOutput = {
  total?: number;
  items?: Enrollment[];
}

export type DescribeEnrollmentInput = {
  enrollmentId?: string;
  extra?: string[];
}

export type DescribeEnrollmentOutput = {
  enrollment?: Enrollment;
}

