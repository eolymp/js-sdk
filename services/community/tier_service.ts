// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Price } from "../commerce/price"
import { Tier } from "./tier"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class TierService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeTier(input: DescribeTierInput, opts?: any): Promise<DescribeTierOutput> {
    const path = "/tiers/"+encodeURIComponent(input.tierId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.tierId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListTiers(input: ListTiersInput, opts?: any): Promise<ListTiersOutput> {
    const path = "/tiers";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListTierPrices(input: ListTierPricesInput, opts?: any): Promise<ListTierPricesOutput> {
    const path = "/tiers/"+encodeURIComponent(input.tierId||'')+"/prices";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.tierId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type ListTiersInput = {
  offset?: number;
  size?: number;
  render?: boolean;
  locale?: string;
}

export type ListTiersOutput = {
  total?: number;
  items?: Tier[];
}

export type DescribeTierInput = {
  tierId?: string;
  render?: boolean;
  locale?: string;
}

export type DescribeTierOutput = {
  tier?: Tier;
}

export type ListTierPricesInput = {
  tierId?: string;
  currency?: string;
}

export type ListTierPricesOutput = {
  items?: Price[];
}
