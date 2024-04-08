// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Assignment } from "./assignment"
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

  CreateStudent(input: CreateStudentInput, opts?: any): Promise<CreateStudentOutput> {
    const path = "/students";

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  UpdateStudent(input: UpdateStudentInput, opts?: any): Promise<UpdateStudentOutput> {
    const path = "/students/"+encodeURIComponent(input.studentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.studentId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteStudent(input: DeleteStudentInput, opts?: any): Promise<DeleteStudentOutput> {
    const path = "/students/"+encodeURIComponent(input.studentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.studentId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeStudent(input: DescribeStudentInput, opts?: any): Promise<DescribeStudentOutput> {
    const path = "/students/"+encodeURIComponent(input.studentId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.studentId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListStudents(input: ListStudentsInput, opts?: any): Promise<ListStudentsOutput> {
    const path = "/students";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeAssignment(input: DescribeAssignmentInput, opts?: any): Promise<DescribeAssignmentOutput> {
    const path = "/students/"+encodeURIComponent(input.studentId||'')+"/assignments/"+encodeURIComponent(input.entryId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.studentId);
    delete(input.entryId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateAssignment(input: UpdateAssignmentInput, opts?: any): Promise<UpdateAssignmentOutput> {
    const path = "/students/"+encodeURIComponent(input.studentId||'')+"/assignments/"+encodeURIComponent(input.entryId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.studentId);
    delete(input.entryId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  StartCourse(input: StartCourseInput, opts?: any): Promise<StartCourseOutput> {
    const path = "/start";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  StartAssignment(input: StartAssignmentInput, opts?: any): Promise<StartAssignmentOutput> {
    const path = "/students/"+encodeURIComponent(input.studentId||'')+"/assignments/"+encodeURIComponent(input.entryId||'')+"/start";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.studentId);
    delete(input.entryId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeViewer(input: DescribeViewerInput, opts?: any): Promise<DescribeViewerOutput> {
    const path = "/viewer";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type CreateStudentInput = {
  student?: Student;
}

export type CreateStudentOutput = {
  studentId?: string;
}

export type UpdateStudentInput = {
  patch?: string[];
  studentId?: string;
  student?: Student;
}

export type UpdateStudentOutput = Record<string, unknown>;

export type DeleteStudentInput = {
  studentId?: string;
}

export type DeleteStudentOutput = Record<string, unknown>;

export type DescribeStudentInput = {
  studentId?: string;
}

export type DescribeStudentOutput = {
  student?: Student;
}

export type ListStudentsInput = {
  offset?: number;
  size?: number;
  filters?: ListStudentsInput_Filter;
  sort?: string;
  order?: string;
}

export type ListStudentsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  memberId?: ExpressionID[];
  name?: ExpressionString[];
  status?: ExpressionEnum[];
}

export type ListStudentsOutput = {
  total?: number;
  items?: Student[];
}

export type DescribeAssignmentInput = {
  studentId?: string;
  entryId?: string;
}

export type DescribeAssignmentOutput = {
  assignment?: Assignment;
}

export type UpdateAssignmentInput = {
  studentId?: string;
  entryId?: string;
  assignment?: Assignment;
}

export type UpdateAssignmentOutput = Record<string, unknown>;

export type StartCourseInput = Record<string, unknown>;

export type StartCourseOutput = Record<string, unknown>;

export type StartAssignmentInput = {
  entryId?: string;
}

export type StartAssignmentOutput = Record<string, unknown>;

export type DescribeViewerInput = Record<string, unknown>;

export type DescribeViewerOutput = {
  student?: Student;
}

