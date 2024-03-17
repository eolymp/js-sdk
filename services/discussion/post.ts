// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Content } from "../ecm/content"
import { Node } from "../ecm/node"
import { Link } from "../wellknown/link"

export type Post = {
  id?: string;
  url?: string;
  sourceId?: string;
  sourceUrl?: string;
  draft?: boolean;
  public?: boolean;
  moderation?: string;
  userId?: string;
  memberId?: string;
  createdAt?: string;
  publishedAt?: string;
  updatedAt?: string;
  typeId?: string;
  locale?: string;
  content?: Content;
  preview?: Post_Preview;
  vote?: number;
  voteCount?: number;
  replyCount?: number;
  labels?: string[];
  links?: Link[];
}

export type Post_Image = {
  src?: string;
  width?: number;
  height?: number;
  class?: string[];
}

export type Post_Preview = {
  title?: string;
  image?: Post_Image;
  content?: Node;
}

