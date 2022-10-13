// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { File } from "./file"
import { Project } from "./project"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts: O): Promise<E>;
}

export class Workspace {
  private readonly cli: Client;
  private readonly url: string;

  constructor(url: string, cli: Client) {
    this.cli = cli;
    this.url = url;
  }

  DescribeProject<O>(input: DescribeProjectInput, opts?: O): Promise<DescribeProjectOutput> {
    const path = "/workspace/projects/"+encodeURIComponent(input.projectId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.projectId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  ListProjects<O>(input: ListProjectsInput, opts?: O): Promise<ListProjectsOutput> {
    const path = "/workspace/projects";

    return this.cli.call("GET", this.url + path, input, opts);
  }

  CreateProject<O>(input: CreateProjectInput, opts?: O): Promise<CreateProjectOutput> {
    const path = "/workspace/projects";

    return this.cli.call("POST", this.url + path, input, opts);
  }

  UpdateProject<O>(input: UpdateProjectInput, opts?: O): Promise<UpdateProjectOutput> {
    const path = "/workspace/projects/"+encodeURIComponent(input.projectId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.projectId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  DeleteProject<O>(input: DeleteProjectInput, opts?: O): Promise<DeleteProjectOutput> {
    const path = "/workspace/projects/"+encodeURIComponent(input.projectId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.projectId);

    return this.cli.call("DELETE", this.url + path, input, opts);
  }

  ListFiles<O>(input: ListFilesInput, opts?: O): Promise<ListFilesOutput> {
    const path = "/workspace/projects/"+encodeURIComponent(input.projectId||'')+"/files";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.projectId);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  DescribeFile<O>(input: DescribeFileInput, opts?: O): Promise<DescribeFileOutput> {
    const path = "/workspace/projects/"+encodeURIComponent(input.projectId||'')+"/files/"+encodeURIComponent(input.name||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.projectId);
    delete(input.name);

    return this.cli.call("GET", this.url + path, input, opts);
  }

  UploadFile<O>(input: UploadFileInput, opts?: O): Promise<UploadFileOutput> {
    const path = "/workspace/projects/"+encodeURIComponent(input.projectId||'')+"/files";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.projectId);

    return this.cli.call("POST", this.url + path, input, opts);
  }

  RemoveFile<O>(input: RemoveFileInput, opts?: O): Promise<RemoveFileOutput> {
    const path = "/workspace/projects/"+encodeURIComponent(input.projectId||'')+"/files/"+encodeURIComponent(input.name||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.projectId);
    delete(input.name);

    return this.cli.call("DELETE", this.url + path, input, opts);
  }
}

export type DescribeProjectInput = {
  projectId?: string;
  projectErn?: string;
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
  projectErn?: string;
}

export type UpdateProjectInput = {
  projectId?: string;
  projectErn?: string;
  project?: Project;
}

export type UpdateProjectOutput = Record<string, unknown>;

export type DeleteProjectInput = {
  projectId?: string;
  projectErn?: string;
}

export type DeleteProjectOutput = Record<string, unknown>;

export type ListFilesInput = {
  projectId?: string;
  projectErn?: string;
  offset?: number;
  size?: number;
}

export type ListFilesOutput = {
  total?: number;
  items?: File[];
}

export type DescribeFileInput = {
  fileErn?: string;
  projectId?: string;
  name?: string;
}

export type DescribeFileOutput = {
  file?: File;
}

export type UploadFileInput = {
  projectId?: string;
  projectErn?: string;
  name?: string;
  content?: string;
}

export type UploadFileOutput = {
  fileErn?: string;
}

export type RemoveFileInput = {
  fileErn?: string;
  projectId?: string;
  name?: string;
}

export type RemoveFileOutput = Record<string, unknown>;

