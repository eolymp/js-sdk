// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionID } from "../wellknown/expression"
import { Student } from "./student"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class StudentService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeStudent(input: DescribeStudentInput, opts?: any): Promise<DescribeStudentOutput> {
    const path = "/students/"+encodeURIComponent(input.memberId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeViewer(input: DescribeViewerInput, opts?: any): Promise<DescribeViewerOutput> {
    const path = "/viewer/student";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListStudents(input: ListStudentsInput, opts?: any): Promise<ListStudentsOutput> {
    const path = "/students";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type DescribeStudentInput = {
  memberId?: string;
  extra?: string[];
}

export type DescribeStudentOutput = {
  student?: Student;
}

export type DescribeViewerInput = Record<string, unknown>;

export type DescribeViewerOutput = {
  student?: Student;
}

export type ListStudentsInput = {
  offset?: number;
  size?: number;
  filters?: ListStudentsInput_Filter;
  sort?: string;
  order?: string;
  extra?: string[];
}

export type ListStudentsInput_Filter = {
  id?: ExpressionID[];
  memberId?: ExpressionID[];
}

export type ListStudentsOutput = {
  total?: number;
  items?: Student[];
}

