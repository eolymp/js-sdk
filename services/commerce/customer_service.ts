// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Customer } from "./customer"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class CustomerService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }
}

export type CreateCustomerInput = {
  customer?: Customer;
}

export type CreateCustomerOutput = {
  customerId?: string;
}

export type UpdateCustomerInput = {
  customerId?: string;
  customer?: Customer;
}

export type UpdateCustomerOutput = Record<string, unknown>;

export type ListCustomersInput = Record<string, unknown>;

export type ListCustomersOutput = {
  total?: number;
  items?: Customer[];
}

export type DescribeCustomerInput = {
  customerId?: string;
}

export type DescribeCustomerOutput = {
  customer?: Customer;
}

export type DeleteCustomerInput = {
  customerId?: string;
}

export type DeleteCustomerOutput = Record<string, unknown>;
