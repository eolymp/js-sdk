// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Message } from "./message"
import { Post, Post_Translation } from "./post"

export type MessageChangedEvent = {
  before?: Message;
  after?: Message;
}

export type PostChangedEvent = {
  before?: Post;
  after?: Post;
}

export type PostTranslationChangedEvent = {
  post?: Post;
  before?: Post_Translation;
  after?: Post_Translation;
}

