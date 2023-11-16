// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Order } from "./order"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class OrderService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeOrder(input: DescribeOrderInput, opts?: any): Promise<DescribeOrderOutput> {
    const path = "/orders/"+encodeURIComponent(input.orderId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.orderId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateOrder(input: UpdateOrderInput, opts?: any): Promise<UpdateOrderOutput> {
    const path = "/orders/"+encodeURIComponent(input.orderId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.orderId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  PlaceOrder(input: PlaceOrderInput, opts?: any): Promise<PlaceOrderOutput> {
    const path = "/orders/"+encodeURIComponent(input.orderId||'')+"/place";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.orderId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CancelOrder(input: CancelOrderInput, opts?: any): Promise<CancelOrderOutput> {
    const path = "/orders/"+encodeURIComponent(input.orderId||'')+"/cancel";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.orderId);

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type DescribeOrderInput = {
  orderId?: string;
}

export type DescribeOrderOutput = {
  order?: Order;
}

export type UpdateOrderInput = {
  patch?: string[];
  orderId?: string;
  order?: Order;
}

export type UpdateOrderOutput = Record<string, unknown>;

export type PlaceOrderInput = {
  orderId?: string;
}

export type PlaceOrderOutput = Record<string, unknown>;

export type CancelOrderInput = {
  orderId?: string;
}

export type CancelOrderOutput = Record<string, unknown>;

