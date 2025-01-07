// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Printer } from "./printer"
import { Job } from "./printer_job"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class PrinterService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreatePrinter(input: CreatePrinterInput, opts?: any): Promise<CreatePrinterOutput> {
    const path = "/printers";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdatePrinter(input: UpdatePrinterInput, opts?: any): Promise<UpdatePrinterOutput> {
    const path = "/printers/"+encodeURIComponent(input.printerId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.printerId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeletePrinter(input: DeletePrinterInput, opts?: any): Promise<DeletePrinterOutput> {
    const path = "/printers/"+encodeURIComponent(input.printerId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.printerId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribePrinter(input: DescribePrinterInput, opts?: any): Promise<DescribePrinterOutput> {
    const path = "/printers/"+encodeURIComponent(input.printerId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.printerId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListPrinters(input: ListPrintersInput, opts?: any): Promise<ListPrintersOutput> {
    const path = "/printers";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreatePrinterJob(input: CreatePrinterJobInput, opts?: any): Promise<CreatePrinterJobOutput> {
    const path = "/printers/"+encodeURIComponent(input.printerId||'')+"/jobs";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.printerId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribePrinterJob(input: DescribePrinterJobInput, opts?: any): Promise<DescribePrinterJobOutput> {
    const path = "/printers/"+encodeURIComponent(input.printerId||'')+"/jobs/"+encodeURIComponent(input.jobId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.printerId);
    delete(input.jobId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListPrinterJobs(input: ListPrinterJobsInput, opts?: any): Promise<ListPrinterJobsOutput> {
    const path = "/printers/"+encodeURIComponent(input.printerId||'')+"/jobs";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.printerId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CancelPrinterJob(input: CancelPrinterJobInput, opts?: any): Promise<CancelPrinterJobOutput> {
    const path = "/printers/"+encodeURIComponent(input.printerId||'')+"/jobs/"+encodeURIComponent(input.jobId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.printerId);
    delete(input.jobId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }
}

export type CreatePrinterInput = {
  printer?: Printer;
}

export type CreatePrinterOutput = {
  printerId?: string;
}

export type UpdatePrinterInput = {
  printerId?: string;
  printer?: Printer;
}

export type UpdatePrinterOutput = Record<string, unknown>;

export type DeletePrinterInput = {
  printerId?: string;
}

export type DeletePrinterOutput = Record<string, unknown>;

export type DescribePrinterInput = {
  printerId?: string;
}

export type DescribePrinterOutput = {
  printer?: Printer;
}

export type ListPrintersInput = {
  size?: number;
  offset?: number;
  search?: string;
  filters?: ListPrintersInput_Filter;
}

export type ListPrintersInput_Filter = {
  id?: ExpressionID[];
  status?: ExpressionEnum[];
  name?: ExpressionString[];
}

export type ListPrintersOutput = {
  total?: number;
  items?: Printer[];
}

export type CreatePrinterJobInput = {
  printerId?: string;
  documentUrl?: string;
}

export type CreatePrinterJobOutput = {
  jobId?: string;
}

export type DescribePrinterJobInput = {
  printerId?: string;
  jobId?: string;
}

export type DescribePrinterJobOutput = {
  job?: Job;
}

export type ListPrinterJobsInput = {
  printerId?: string;
  offset?: number;
  size?: number;
  filters?: ListPrinterJobsInput_Filter;
}

export type ListPrinterJobsInput_Filter = {
  id?: ExpressionID[];
  status?: ExpressionEnum[];
}

export type ListPrinterJobsOutput = {
  total?: number;
  items?: Job[];
}

export type CancelPrinterJobInput = {
  printerId?: string;
  jobId?: string;
}

export type CancelPrinterJobOutput = Record<string, unknown>;

