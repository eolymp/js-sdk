// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Content } from "../ecm/content"

export type Achievement = {
  id?: string;
  value?: number;
  rarity?: number;
  name?: string;
  imageUrl?: string;
  summary?: Content;
  cursor?: string;
}

export type Achievement_Translation = {
  id?: string;
  locale?: string;
  name?: string;
  summary?: Content;
}

