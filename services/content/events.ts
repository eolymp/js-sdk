// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Fragment } from "./fragment"
import { Variant } from "./variant"

export type FragmentChangedEvent = {
  before?: Fragment;
  after?: Fragment;
}

export type VariantChangedEvent = {
  fragment?: Fragment;
  before?: Variant;
  after?: Variant;
}

