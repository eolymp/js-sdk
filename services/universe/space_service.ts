// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Quota } from "./quota"
import { Space } from "./space"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class SpaceService {
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

  ListSpaces(input: ListSpacesInput, opts?: any): Promise<ListSpacesOutput> {
    const path = "/spaces";

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
  extra?: string[];
}

export type LookupSpaceOutput = {
  space?: Space;
}

export type DescribeSpaceInput = {
  spaceId?: string;
  extra?: string[];
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
  extra?: string[];
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

