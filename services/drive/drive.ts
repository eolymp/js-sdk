// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID, ExpressionInt, ExpressionString, ExpressionTimestamp } from "../wellknown/expression"
import { File } from "./file"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class Drive {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  UploadFile(input: UploadFileInput, opts?: any): Promise<UploadFileOutput> {
    const path = "/files";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeFile(input: DescribeFileInput, opts?: any): Promise<DescribeFileOutput> {
    const path = "/files/"+encodeURIComponent(input.fileId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.fileId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListFiles(input: ListFilesInput, opts?: any): Promise<ListFilesOutput> {
    const path = "/files";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateFile(input: UpdateFileInput, opts?: any): Promise<UpdateFileOutput> {
    const path = "/files/"+encodeURIComponent(input.fileId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.fileId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteFile(input: DeleteFileInput, opts?: any): Promise<DeleteFileOutput> {
    const path = "/files/"+encodeURIComponent(input.fileId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.fileId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  StartMultipartUpload(input: StartMultipartUploadInput, opts?: any): Promise<StartMultipartUploadOutput> {
    const path = "/uploads";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UploadPart(input: UploadPartInput, opts?: any): Promise<UploadPartOutput> {
    const path = "/uploads/"+encodeURIComponent(input.uploadId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.uploadId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CompleteMultipartUpload(input: CompleteMultipartUploadInput, opts?: any): Promise<CompleteMultipartUploadOutput> {
    const path = "/uploads/"+encodeURIComponent(input.uploadId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.uploadId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }
}

export type DescribeFileInput = {
  fileId?: string;
}

export type DescribeFileOutput = {
  file?: File;
}

export type ListFilesInput = {
  offset?: number;
  size?: number;
  filters?: ListFilesInput_Filter;
}

export type ListFilesInput_Filter = {
  id?: ExpressionID[];
  path?: ExpressionString[];
  etag?: ExpressionEnum[];
  size?: ExpressionInt[];
  type?: ExpressionEnum[];
  createdAt?: ExpressionTimestamp[];
  updatedAt?: ExpressionTimestamp[];
}

export type ListFilesOutput = {
  total?: number;
  items?: File[];
}

export type UploadFileInput = {
  path?: string;
  type?: string;
  acl?: string;
  attributes?: Record<string, string>;
  data?: string;
}

export type UploadFileOutput = {
  fileId?: string;
  fileUrl?: string;
  fileEtag?: string;
}

export type UpdateFileInput = {
  fileId?: string;
  file?: File;
}

export type UpdateFileOutput = Record<string, unknown>;

export type DeleteFileInput = {
  fileId?: string;
}

export type DeleteFileOutput = Record<string, unknown>;

export type StartMultipartUploadInput = {
  path?: string;
  type?: string;
  acl?: string;
  attributes?: Record<string, string>;
}

export type StartMultipartUploadOutput = {
  uploadId?: string;
}

export type UploadPartInput = {
  uploadId?: string;
  partNumber?: number;
  data?: string;
}

export type UploadPartOutput = {
  etag?: string;
}

export type CompleteMultipartUploadInput = {
  uploadId?: string;
  parts?: CompleteMultipartUploadInput_Part[];
}

export type CompleteMultipartUploadInput_Part = {
  number?: number;
  etag?: string;
  checksumSha1?: string;
}

export type CompleteMultipartUploadOutput = {
  fileId?: string;
  fileUrl?: string;
  fileEtag?: string;
}

