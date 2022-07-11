import { File } from "./file";
import { Project } from "./project";
interface Client {
    call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}
export declare class Workspace {
    private readonly cli;
    constructor(cli: Client);
    DescribeProject<O>(input: DescribeProjectInput, opts?: O): Promise<DescribeProjectOutput>;
    ListProjects<O>(input: ListProjectsInput, opts?: O): Promise<ListProjectsOutput>;
    CreateProject<O>(input: CreateProjectInput, opts?: O): Promise<CreateProjectOutput>;
    UpdateProject<O>(input: UpdateProjectInput, opts?: O): Promise<UpdateProjectOutput>;
    DeleteProject<O>(input: DeleteProjectInput, opts?: O): Promise<DeleteProjectOutput>;
    ListFiles<O>(input: ListFilesInput, opts?: O): Promise<ListFilesOutput>;
    DescribeFile<O>(input: DescribeFileInput, opts?: O): Promise<DescribeFileOutput>;
    UploadFile<O>(input: UploadFileInput, opts?: O): Promise<UploadFileOutput>;
    RemoveFile<O>(input: RemoveFileInput, opts?: O): Promise<RemoveFileOutput>;
}
export declare type DescribeProjectInput = {
    projectId?: string;
};
export declare type DescribeProjectOutput = {
    project?: Project;
};
export declare type ListProjectsInput = {
    offset?: number;
    size?: number;
    filters?: ListProjectsInput_Filter;
};
export declare type ListProjectsInput_Filter = {
    query?: string;
};
export declare type ListProjectsOutput = {
    total?: number;
    items?: Project[];
};
export declare type CreateProjectInput = {
    project?: Project;
};
export declare type CreateProjectOutput = {
    projectId?: string;
};
export declare type UpdateProjectInput = {
    projectId?: string;
    project?: Project;
};
export declare type UpdateProjectOutput = Record<string, unknown>;
export declare type DeleteProjectInput = {
    projectId?: string;
};
export declare type DeleteProjectOutput = Record<string, unknown>;
export declare type ListFilesInput = {
    projectId?: string;
    offset?: number;
    size?: number;
};
export declare type ListFilesOutput = {
    total?: number;
    items?: File[];
};
export declare type DescribeFileInput = {
    projectId?: string;
    name?: string;
};
export declare type DescribeFileOutput = {
    file?: File;
};
export declare type UploadFileInput = {
    projectId?: string;
    name?: string;
    content?: string;
};
export declare type UploadFileOutput = Record<string, unknown>;
export declare type RemoveFileInput = {
    projectId?: string;
    name?: string;
};
export declare type RemoveFileOutput = Record<string, unknown>;
export {};
