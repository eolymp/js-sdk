// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Content } from "../ecm/content"
import { Node } from "../ecm/node"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class RenderService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  RenderContent(input: RenderContentInput, opts?: any): Promise<RenderContentOutput> {
    const path = "/content:render";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type RenderContentInput = {
  content?: Content;
}

export type RenderContentOutput = {
  render?: Node;
}

