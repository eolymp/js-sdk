// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class Pastebin {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  UploadFile(input: UploadFileInput, opts?: any): Promise<UploadFileOutput> {
    const path = "/pastebin";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  StartMultipartUpload(input: StartMultipartUploadInput, opts?: any): Promise<StartMultipartUploadOutput> {
    const path = "/uploads";

    return this.cli.call("PUT", this.url+path, input, opts);
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

export type UploadFileInput = {
  type?: string;
  name?: string;
  checksumMd5?: string;
  checksumSha1?: string;
  checksumSha256?: string;
  data?: string;
}

export type UploadFileOutput = {
  pasteUrl?: string;
}

export type StartMultipartUploadInput = {
  type?: string;
  name?: string;
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
  checksumMd5?: string;
  checksumSha1?: string;
  checksumSha256?: string;
}

export type CompleteMultipartUploadOutput = {
  pasteUrl?: string;
}

