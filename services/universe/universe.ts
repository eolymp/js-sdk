// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Permission } from "./permission"
import { Space, Space_Quota } from "./space"

interface Client {
  call<R, E, O>(method: string, args: R, opts: O): Promise<E>;
}

export class Universe {
  private readonly cli: Client;

  constructor(cli: Client) {
    this.cli = cli;
  }

  LookupSpace<O>(input: LookupSpaceInput, opts?: O): Promise<LookupSpaceOutput> {
    return this.cli.call("eolymp.universe.Universe/LookupSpace", input, opts);
  }

  CreateSpace<O>(input: CreateSpaceInput, opts?: O): Promise<CreateSpaceOutput> {
    return this.cli.call("eolymp.universe.Universe/CreateSpace", input, opts);
  }

  UpdateSpace<O>(input: UpdateSpaceInput, opts?: O): Promise<UpdateSpaceOutput> {
    return this.cli.call("eolymp.universe.Universe/UpdateSpace", input, opts);
  }

  DeleteSpace<O>(input: DeleteSpaceInput, opts?: O): Promise<DeleteSpaceOutput> {
    return this.cli.call("eolymp.universe.Universe/DeleteSpace", input, opts);
  }

  DescribeSpace<O>(input: DescribeSpaceInput, opts?: O): Promise<DescribeSpaceOutput> {
    return this.cli.call("eolymp.universe.Universe/DescribeSpace", input, opts);
  }

  DescribeQuota<O>(input: DescribeQuotaInput, opts?: O): Promise<DescribeQuotaOutput> {
    return this.cli.call("eolymp.universe.Universe/DescribeQuota", input, opts);
  }

  ListSpaces<O>(input: ListSpacesInput, opts?: O): Promise<ListSpacesOutput> {
    return this.cli.call("eolymp.universe.Universe/ListSpaces", input, opts);
  }

  GrantPermission<O>(input: GrantPermissionInput, opts?: O): Promise<GrantPermissionOutput> {
    return this.cli.call("eolymp.universe.Universe/GrantPermission", input, opts);
  }

  RevokePermission<O>(input: RevokePermissionInput, opts?: O): Promise<RevokePermissionOutput> {
    return this.cli.call("eolymp.universe.Universe/RevokePermission", input, opts);
  }

  DescribePermission<O>(input: DescribePermissionInput, opts?: O): Promise<DescribePermissionOutput> {
    return this.cli.call("eolymp.universe.Universe/DescribePermission", input, opts);
  }

  IntrospectPermission<O>(input: IntrospectPermissionInput, opts?: O): Promise<IntrospectPermissionOutput> {
    return this.cli.call("eolymp.universe.Universe/IntrospectPermission", input, opts);
  }

  ListPermissions<O>(input: ListPermissionsInput, opts?: O): Promise<ListPermissionsOutput> {
    return this.cli.call("eolymp.universe.Universe/ListPermissions", input, opts);
  }
}

export type CreateSpaceInput = {
  space?: Space;
}

export type CreateSpaceOutput = {
  spaceId?: string;
}

export type UpdateSpaceInput = {
  spaceId?: string;
  space?: Space;
}

export type UpdateSpaceOutput = Record<string, unknown>;

export type DeleteSpaceInput = {
  spaceId?: string;
}

export type DeleteSpaceOutput = Record<string, unknown>;

export type LookupSpaceInput = {
  key?: string;
}

export type LookupSpaceOutput = {
  space?: Space;
}

export type DescribeSpaceInput = {
  spaceId?: string;
}

export type DescribeSpaceOutput = {
  space?: Space;
}

export type DescribeQuotaInput = {
  spaceId?: string;
}

export type DescribeQuotaOutput = {
  quota?: Space_Quota;
}

export type ListSpacesInput = {
  offset?: number;
  size?: number;
  filters?: ListSpacesInput_Filter;
}

export type ListSpacesInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  key?: ExpressionID[];
  name?: ExpressionString[];
  own?: ExpressionBool[];
  member?: ExpressionBool[];
}

export type ListSpacesOutput = {
  total?: number;
  items?: Space[];
}

export type GrantPermissionInput = {
  spaceId?: string;
  role?: string;
  userId?: string;
}

export type GrantPermissionOutput = Record<string, unknown>;

export type RevokePermissionInput = {
  spaceId?: string;
  userId?: string;
}

export type RevokePermissionOutput = Record<string, unknown>;

export type DescribePermissionInput = {
  spaceId?: string;
  userId?: string;
}

export type DescribePermissionOutput = {
  permission?: Permission;
}

export type IntrospectPermissionInput = {
  spaceId?: string;
}

export type IntrospectPermissionOutput = {
  permission?: Permission;
}

export type ListPermissionsInput = {
  spaceId?: string;
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

