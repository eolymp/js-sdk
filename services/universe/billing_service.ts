// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Invoice } from "../commerce/invoice"
import { Billing_Information, Billing_Subscription } from "./billing"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class BillingService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeBillingInformation(input: DescribeBillingInformationInput, opts?: any): Promise<DescribeBillingInformationOutput> {
    const path = "/billing/info";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateBillingInformation(input: UpdateBillingInformationInput, opts?: any): Promise<UpdateBillingInformationOutput> {
    const path = "/billing/info";

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DescribeSubscription(input: DescribeSubscriptionInput, opts?: any): Promise<DescribeSubscriptionOutput> {
    const path = "/billing/subscription";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateSubscription(input: CreateSubscriptionInput, opts?: any): Promise<CreateSubscriptionOutput> {
    const path = "/billing/subscription";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateSubscription(input: UpdateSubscriptionInput, opts?: any): Promise<UpdateSubscriptionOutput> {
    const path = "/billing/subscription";

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  CancelSubscription(input: CancelSubscriptionInput, opts?: any): Promise<CancelSubscriptionOutput> {
    const path = "/billing/subscription";

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  SimulateSubscription(input: SimulateSubscriptionInput, opts?: any): Promise<SimulateSubscriptionOutput> {
    const path = "/billing/subscription/simulate";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CreatePortalLink(input: CreatePortalLinkInput, opts?: any): Promise<CreatePortalLinkOutput> {
    const path = "/billing/portal-link";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpcomingInvoice(input: UpcomingInvoiceInput, opts?: any): Promise<UpcomingInvoiceOutput> {
    const path = "/billing/upcoming";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeInvoice(input: DescribeInvoiceInput, opts?: any): Promise<DescribeInvoiceOutput> {
    const path = "/billing/invoice/"+encodeURIComponent(input.invoiceId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.invoiceId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  PayInvoice(input: PayInvoiceInput, opts?: any): Promise<PayInvoiceOutput> {
    const path = "/billing/invoice/"+encodeURIComponent(input.invoiceId||'')+"/pay";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.invoiceId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ListInvoices(input: ListInvoicesInput, opts?: any): Promise<ListInvoicesOutput> {
    const path = "/billing/invoices";

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type DescribeBillingInformationInput = Record<string, unknown>;

export type DescribeBillingInformationOutput = {
  info?: Billing_Information;
}

export type UpdateBillingInformationInput = {
  info?: Billing_Information;
}

export type UpdateBillingInformationOutput = Record<string, unknown>;

export type DescribeSubscriptionInput = Record<string, unknown>;

export type DescribeSubscriptionOutput = {
  current?: Billing_Subscription;
  upcoming?: Billing_Subscription;
}

export type CreateSubscriptionInput = {
  planId?: string;
  variantId?: string;
  seats?: number;
  trial?: boolean;
}

export type CreateSubscriptionOutput = {
  checkoutUrl?: string;
}

export type UpdateSubscriptionInput = {
  planId?: string;
  variantId?: string;
  seats?: number;
  trial?: boolean;
}

export type UpdateSubscriptionOutput = {
  checkoutUrl?: string;
}

export type CancelSubscriptionInput = Record<string, unknown>;

export type CancelSubscriptionOutput = Record<string, unknown>;

export type SimulateSubscriptionInput = {
  planId?: string;
  variantId?: string;
  seats?: number;
  coupon?: string;
}

export type SimulateSubscriptionOutput = {
  due?: Invoice;
  invoice?: Invoice;
}

export type CreatePortalLinkInput = {
  flow?: string;
  backUrl?: string;
  returnUrl?: string;
  completeUrl?: string;
}

export type CreatePortalLinkOutput = {
  portalLink?: string;
}

export type UpcomingInvoiceInput = Record<string, unknown>;

export type UpcomingInvoiceOutput = {
  invoice?: Invoice;
}

export type DescribeInvoiceInput = {
  invoiceId?: string;
}

export type DescribeInvoiceOutput = {
  invoice?: Invoice;
}

export type PayInvoiceInput = {
  invoiceId?: string;
}

export type PayInvoiceOutput = {
  checkoutUrl?: string;
}

export type ListInvoicesInput = {
  size?: number;
  after?: string;
  before?: string;
}

export type ListInvoicesOutput = {
  total?: number;
  items?: Invoice[];
}

