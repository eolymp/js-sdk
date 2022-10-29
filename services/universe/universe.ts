// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { IdentityProvider_OIDC } from "./idp"
import { Permission } from "./permission"
import { Space, Space_Quota } from "./space"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts: O): Promise<E>;
}

export class Universe {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  LookupSpace<O>(input: LookupSpaceInput, opts?: O): Promise<LookupSpaceOutput> {
    const path = "/spaces/__lookup/"+encodeURIComponent(input.key||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.key);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateSpace<O>(input: CreateSpaceInput, opts?: O): Promise<CreateSpaceOutput> {
    const path = "/spaces";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateSpace<O>(input: UpdateSpaceInput, opts?: O): Promise<UpdateSpaceOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteSpace<O>(input: DeleteSpaceInput, opts?: O): Promise<DeleteSpaceOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeSpace<O>(input: DescribeSpaceInput, opts?: O): Promise<DescribeSpaceOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeQuota<O>(input: DescribeQuotaInput, opts?: O): Promise<DescribeQuotaOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/quota";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListSpaces<O>(input: ListSpacesInput, opts?: O): Promise<ListSpacesOutput> {
    const path = "/spaces";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeIdentityProvider<O>(input: DescribeIdentityProviderInput, opts?: O): Promise<DescribeIdentityProviderOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/idp";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ConfigureIdentityProvider<O>(input: ConfigureIdentityProviderInput, opts?: O): Promise<ConfigureIdentityProviderOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/idp";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  GrantPermission<O>(input: GrantPermissionInput, opts?: O): Promise<GrantPermissionOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/permissions/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);
    delete(input.userId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  RevokePermission<O>(input: RevokePermissionInput, opts?: O): Promise<RevokePermissionOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/permissions/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);
    delete(input.userId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribePermission<O>(input: DescribePermissionInput, opts?: O): Promise<DescribePermissionOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/permissions/"+encodeURIComponent(input.userId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);
    delete(input.userId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  IntrospectPermission<O>(input: IntrospectPermissionInput, opts?: O): Promise<IntrospectPermissionOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/introspect-permission";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListPermissions<O>(input: ListPermissionsInput, opts?: O): Promise<ListPermissionsOutput> {
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

export type DescribeIdentityProviderInput = {
  spaceId?: string;
}

export type DescribeIdentityProviderOutput = {
  oidc?: IdentityProvider_OIDC;
}

export type ConfigureIdentityProviderInput = {
  spaceId?: string;
  oidc?: IdentityProvider_OIDC;
}

export type ConfigureIdentityProviderOutput = Record<string, unknown>;

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

