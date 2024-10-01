// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Material } from "./material"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class MaterialService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateMaterial(input: CreateMaterialInput, opts?: any): Promise<CreateMaterialOutput> {
    const path = "/materials";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateMaterial(input: UpdateMaterialInput, opts?: any): Promise<UpdateMaterialOutput> {
    const path = "/materials/"+encodeURIComponent(input.materialId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.materialId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  MoveMaterial(input: MoveMaterialInput, opts?: any): Promise<MoveMaterialOutput> {
    const path = "/materials/"+encodeURIComponent(input.materialId||'')+"/move";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.materialId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteMaterial(input: DeleteMaterialInput, opts?: any): Promise<DeleteMaterialOutput> {
    const path = "/materials/"+encodeURIComponent(input.materialId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.materialId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeMaterial(input: DescribeMaterialInput, opts?: any): Promise<DescribeMaterialOutput> {
    const path = "/materials/"+encodeURIComponent(input.materialId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.materialId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListMaterials(input: ListMaterialsInput, opts?: any): Promise<ListMaterialsOutput> {
    const path = "/materials";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ReportProgress(input: ReportProgressInput, opts?: any): Promise<ReportProgressOutput> {
    const path = "/materials/"+encodeURIComponent(input.materialId||'')+"/progress";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.materialId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  GradeMaterial(input: GradeMaterialInput, opts?: any): Promise<GradeMaterialOutput> {
    const path = "/materials/"+encodeURIComponent(input.materialId||'')+"/grade";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.materialId);

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type CreateMaterialInput = {
  material?: Material;
  moduleId?: string;
}

export type CreateMaterialOutput = {
  materialId?: string;
}

export type UpdateMaterialInput = {
  patch?: string[];
  materialId?: string;
  material?: Material;
}

export type UpdateMaterialOutput = Record<string, unknown>;

export type MoveMaterialInput = {
  materialId?: string;
  newModuleId?: string;
  newIndex?: number;
  newDepth?: number;
}

export type MoveMaterialOutput = Record<string, unknown>;

export type DeleteMaterialInput = {
  materialId?: string;
}

export type DeleteMaterialOutput = Record<string, unknown>;

export type DescribeMaterialInput = {
  materialId?: string;
  memberId?: string;
  extra?: string[];
}

export type DescribeMaterialOutput = {
  material?: Material;
}

export type ListMaterialsInput = {
  moduleId?: string;
  memberId?: string;
  offset?: number;
  size?: number;
  filters?: ListMaterialsInput_Filter;
  sort?: string;
  order?: string;
  extra?: string[];
}

export type ListMaterialsInput_Filter = {
  query?: string;
}

export type ListMaterialsOutput = {
  total?: number;
  items?: Material[];
}

export type ReportProgressInput = {
  materialId?: string;
  progress?: number;
}

export type ReportProgressOutput = Record<string, unknown>;

export type GradeMaterialInput = {
  materialId?: string;
  memberId?: string;
  grade?: number;
  excused?: boolean;
}

export type GradeMaterialOutput = Record<string, unknown>;

