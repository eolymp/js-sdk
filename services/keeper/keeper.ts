// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: O): Promise<E>;
}

export class Keeper {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateObject<O>(input: CreateObjectInput, opts?: O): Promise<CreateObjectOutput> {
    const path = "/objects";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeObject<O>(input: DescribeObjectInput, opts?: O): Promise<DescribeObjectOutput> {
    const path = "/objects/"+encodeURIComponent(input.key||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.key);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DownloadObject<O>(input: DownloadObjectInput, opts?: O): Promise<DownloadObjectOutput> {
    const path = "/objects/"+encodeURIComponent(input.key||'')+"/data";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.key);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  StartMultipartUpload<O>(input: StartMultipartUploadInput, opts?: O): Promise<StartMultipartUploadOutput> {
    const path = "/uploads";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UploadPart<O>(input: UploadPartInput, opts?: O): Promise<UploadPartOutput> {
    const path = "/objects/"+encodeURIComponent(input.objectId||'')+"/parts";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.objectId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CompleteMultipartUpload<O>(input: CompleteMultipartUploadInput, opts?: O): Promise<CompleteMultipartUploadOutput> {
    const path = "/objects/"+encodeURIComponent(input.objectId||'')+"/complete";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.objectId);

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type CreateObjectInput = {
  data?: string;
}

export type CreateObjectOutput = {
  key?: string;
  blobErn?: string;
  blobHash?: string;
}

export type DescribeObjectInput = {
  key?: string;
}

export type DescribeObjectOutput = {
  size?: number;
}

export type DownloadObjectInput = {
  key?: string;
  offset?: number;
  size?: number;
}

export type DownloadObjectOutput = {
  data?: string;
  size?: number;
}

export type StartMultipartUploadInput = Record<string, unknown>;

export type StartMultipartUploadOutput = {
  objectId?: string;
  uploadId?: string;
}

export type UploadPartInput = {
  objectId?: string;
  uploadId?: string;
  partNumber?: number;
  data?: string;
}

export type UploadPartOutput = {
  etag?: string;
}

export type CompleteMultipartUploadInput = {
  objectId?: string;
  uploadId?: string;
  parts?: CompleteMultipartUploadInput_Part[];
}

export type CompleteMultipartUploadInput_Part = {
  number?: number;
  etag?: string;
  checksumSha1?: string;
}

export type CompleteMultipartUploadOutput = Record<string, unknown>;

