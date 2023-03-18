// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID } from "../wellknown/expression"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class Acl {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  GrantPermission(input: GrantPermissionInput, opts?: any): Promise<GrantPermissionOutput> {
    const path = "/acl/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  RevokePermission(input: RevokePermissionInput, opts?: any): Promise<RevokePermissionOutput> {
    const path = "/acl/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribePermission(input: DescribePermissionInput, opts?: any): Promise<DescribePermissionOutput> {
    const path = "/acl/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListPermissions(input: ListPermissionsInput, opts?: any): Promise<ListPermissionsOutput> {
    const path = "/acl";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  IntrospectPermission(input: IntrospectPermissionInput, opts?: any): Promise<IntrospectPermissionOutput> {
    const path = "/whoami";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type Permission = {
  id?: string;
  role?: string;
  userId?: string;
  entitlements?: string[];
}

export type GrantPermissionInput = {
  userId?: string;
  role?: string;
  entitlements?: string[];
}

export type GrantPermissionOutput = Record<string, unknown>;

export type RevokePermissionInput = {
  userId?: string;
}

export type RevokePermissionOutput = Record<string, unknown>;

export type DescribePermissionInput = {
  userId?: string;
}

export type DescribePermissionOutput = {
  permission?: Permission;
}

export type ListPermissionsInput = {
  offset?: number;
  size?: number;
  filters?: ListPermissionsInput_Filter;
}

export type ListPermissionsInput_Filter = {
  id?: ExpressionID[];
  userId?: ExpressionID[];
  role?: ExpressionEnum[];
}

export type ListPermissionsOutput = {
  total?: number;
  items?: Permission[];
}

export type IntrospectPermissionInput = Record<string, unknown>;

export type IntrospectPermissionOutput = {
  permission?: Permission;
}

