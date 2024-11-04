// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { DescribeUserInput, DescribeUserOutput, IntrospectUserInput, IntrospectUserOutput, ListUsersInput, ListUsersOutput } from "./user_service"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class Cognito {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  IntrospectUser(input: IntrospectUserInput, opts?: any): Promise<IntrospectUserOutput> {
    const path = "/self";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeUser(input: DescribeUserInput, opts?: any): Promise<DescribeUserOutput> {
    const path = "/users/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListUsers(input: ListUsersInput, opts?: any): Promise<ListUsersOutput> {
    const path = "/users";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

