// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Price } from "./price"
import { Product } from "./product"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class ProductService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }
}

export type CreateProductInput = {
  product?: Product;
}

export type CreateProductOutput = {
  productId?: string;
}

export type UpdateProductInput = {
  productId?: string;
  product?: Product;
}

export type UpdateProductOutput = Record<string, unknown>;

export type DescribeProductInput = {
  productId?: string;
}

export type DescribeProductOutput = {
  product?: Product;
}

export type DeleteProductInput = {
  productId?: string;
}

export type DeleteProductOutput = Record<string, unknown>;

export type ListProductPricesInput = {
  productId?: string;
  currency?: string;
}

export type ListProductPricesOutput = {
  items?: Price[];
}

export type CreateProductPriceInput = {
  productId?: string;
  price?: Price;
}

export type CreateProductPriceOutput = {
  priceId?: string;
}

export type DeleteProductPriceInput = {
  productId?: string;
  priceId?: string;
}

export type DeleteProductPriceOutput = Record<string, unknown>;

