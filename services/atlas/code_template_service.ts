// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class CodeTemplateService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateCodeTemplate(input: CreateCodeTemplateInput, opts?: any): Promise<CreateCodeTemplateOutput> {
    const path = "/templates";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateCodeTemplate(input: UpdateCodeTemplateInput, opts?: any): Promise<UpdateCodeTemplateOutput> {
    const path = "/templates/"+encodeURIComponent(input.templateId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.templateId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteCodeTemplate(input: DeleteCodeTemplateInput, opts?: any): Promise<DeleteCodeTemplateOutput> {
    const path = "/templates/"+encodeURIComponent(input.templateId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.templateId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListCodeTemplates(input: ListCodeTemplatesInput, opts?: any): Promise<ListCodeTemplatesOutput> {
    const path = "/templates";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeCodeTemplate(input: DescribeCodeTemplateInput, opts?: any): Promise<DescribeCodeTemplateOutput> {
    const path = "/templates/"+encodeURIComponent(input.templateId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.templateId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

