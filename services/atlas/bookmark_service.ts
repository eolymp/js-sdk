// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class BookmarkService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  SetBookmark(input: SetBookmarkInput, opts?: any): Promise<SetBookmarkOutput> {
    const path = "/bookmark";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type SetBookmarkInput = {
  problemId?: string;
  bookmark?: boolean;
}

export type SetBookmarkOutput = Record<string, unknown>;

