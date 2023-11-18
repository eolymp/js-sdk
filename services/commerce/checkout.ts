// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.


export type Checkout = {
  spaceId?: string;
  reference?: string;
  currency?: string;
  mode?: string;
  successUrl?: string;
  cancelUrl?: string;
  memberId?: string;
  userId?: string;
  payerEmail?: string;
  items?: Checkout_Item[];
}

export type Checkout_Item = {
  reference?: string;
  name?: string;
  description?: string;
  price?: number;
  recurrence?: string;
}

