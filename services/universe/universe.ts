// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Permission } from "./permission"
import { Quota } from "./quota"
import { Space } from "./space"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class Universe {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  LookupSpace(input: LookupSpaceInput, opts?: any): Promise<LookupSpaceOutput> {
    const path = "/spaces/__lookup/"+encodeURIComponent(input.key||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.key);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateSpace(input: CreateSpaceInput, opts?: any): Promise<CreateSpaceOutput> {
    const path = "/spaces";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateSpace(input: UpdateSpaceInput, opts?: any): Promise<UpdateSpaceOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteSpace(input: DeleteSpaceInput, opts?: any): Promise<DeleteSpaceOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeSpace(input: DescribeSpaceInput, opts?: any): Promise<DescribeSpaceOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeQuota(input: DescribeQuotaInput, opts?: any): Promise<DescribeQuotaOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/quota";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateQuota(input: UpdateQuotaInput, opts?: any): Promise<UpdateQuotaOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/quota";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  ListSpaces(input: ListSpacesInput, opts?: any): Promise<ListSpacesOutput> {
    const path = "/spaces";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  GrantPermission(input: GrantPermissionInput, opts?: any): Promise<GrantPermissionOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/permissions/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);
    delete(input.userId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  RevokePermission(input: RevokePermissionInput, opts?: any): Promise<RevokePermissionOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/permissions/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);
    delete(input.userId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribePermission(input: DescribePermissionInput, opts?: any): Promise<DescribePermissionOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/permissions/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  IntrospectPermission(input: IntrospectPermissionInput, opts?: any): Promise<IntrospectPermissionOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/introspect-permission";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListPermissions(input: ListPermissionsInput, opts?: any): Promise<ListPermissionsOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/permissions";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateSpaceInput = {
  space?: Space;
}

export type CreateSpaceOutput = {
  spaceId?: string;
}

export type UpdateSpaceInput = {
  patch?: string[];
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
  quota?: Quota;
}

export type UpdateQuotaInput = {
  spaceId?: string;
  quota?: Quota;
}

export type UpdateQuotaOutput = Record<string, unknown>;

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

