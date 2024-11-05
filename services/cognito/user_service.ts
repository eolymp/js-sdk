// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionID, ExpressionString } from "../wellknown/expression"
import { User } from "./user"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class UserService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
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

export type UserChangedEvent = {
  before?: User;
  after?: User;
}

export type IntrospectUserInput = Record<string, unknown>;

export type IntrospectUserOutput = {
  user?: User;
}

export type DescribeUserInput = {
  userId?: string;
}

export type DescribeUserOutput = {
  user?: User;
}

export type ListUsersInput = {
  offset?: number;
  size?: number;
  filters?: ListUsersInput_Filter;
}

export type ListUsersInput_Filter = {
  id?: ExpressionID[];
  username?: ExpressionString[];
}

export type ListUsersOutput = {
  total?: number;
  items?: User[];
}
