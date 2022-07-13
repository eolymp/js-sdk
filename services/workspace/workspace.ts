// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { File } from "./file"
import { Project } from "./project"

interface Client {
  call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}

export class Workspace {
  private readonly cli: Client;

  constructor(cli: Client) {
    this.cli = cli;
  }

  DescribeProject<O>(input: DescribeProjectInput, opts?: O): Promise<DescribeProjectOutput> {
    return this.cli.call("eolymp.workspace.Workspace/DescribeProject", input, opts);
  }

  ListProjects<O>(input: ListProjectsInput, opts?: O): Promise<ListProjectsOutput> {
    return this.cli.call("eolymp.workspace.Workspace/ListProjects", input, opts);
  }

  CreateProject<O>(input: CreateProjectInput, opts?: O): Promise<CreateProjectOutput> {
    return this.cli.call("eolymp.workspace.Workspace/CreateProject", input, opts);
  }

  UpdateProject<O>(input: UpdateProjectInput, opts?: O): Promise<UpdateProjectOutput> {
    return this.cli.call("eolymp.workspace.Workspace/UpdateProject", input, opts);
  }

  DeleteProject<O>(input: DeleteProjectInput, opts?: O): Promise<DeleteProjectOutput> {
    return this.cli.call("eolymp.workspace.Workspace/DeleteProject", input, opts);
  }

  ListFiles<O>(input: ListFilesInput, opts?: O): Promise<ListFilesOutput> {
    return this.cli.call("eolymp.workspace.Workspace/ListFiles", input, opts);
  }

  DescribeFile<O>(input: DescribeFileInput, opts?: O): Promise<DescribeFileOutput> {
    return this.cli.call("eolymp.workspace.Workspace/DescribeFile", input, opts);
  }

  UploadFile<O>(input: UploadFileInput, opts?: O): Promise<UploadFileOutput> {
    return this.cli.call("eolymp.workspace.Workspace/UploadFile", input, opts);
  }

  RemoveFile<O>(input: RemoveFileInput, opts?: O): Promise<RemoveFileOutput> {
    return this.cli.call("eolymp.workspace.Workspace/RemoveFile", input, opts);
  }
}

export type DescribeProjectInput = {
  projectId?: string;
}

export type DescribeProjectOutput = {
  project?: Project;
}

export type ListProjectsInput = {
  offset?: number;
  size?: number;
  filters?: ListProjectsInput_Filter;
}

export type ListProjectsInput_Filter = {
  query?: string;
}

export type ListProjectsOutput = {
  total?: number;
  items?: Project[];
}

export type CreateProjectInput = {
  project?: Project;
}

export type CreateProjectOutput = {
  projectId?: string;
  ern?: string;
}

export type UpdateProjectInput = {
  projectId?: string;
  project?: Project;
}

export type UpdateProjectOutput = Record<string, unknown>;

export type DeleteProjectInput = {
  projectId?: string;
}

export type DeleteProjectOutput = Record<string, unknown>;

export type ListFilesInput = {
  projectId?: string;
  offset?: number;
  size?: number;
}

export type ListFilesOutput = {
  total?: number;
  items?: File[];
}

export type DescribeFileInput = {
  projectId?: string;
  name?: string;
}

export type DescribeFileOutput = {
  file?: File;
}

export type UploadFileInput = {
  projectId?: string;
  name?: string;
  content?: string;
}

export type UploadFileOutput = Record<string, unknown>;

export type RemoveFileInput = {
  projectId?: string;
  name?: string;
}

export type RemoveFileOutput = Record<string, unknown>;

