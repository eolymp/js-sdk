// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionEnum, ExpressionID, ExpressionTimestamp } from "../wellknown/expression"
import { Post, Post_Translation } from "./post"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class PostService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribePost(input: DescribePostInput, opts?: any): Promise<DescribePostOutput> {
    const path = "/posts/"+encodeURIComponent(input.postId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.postId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListPosts(input: ListPostsInput, opts?: any): Promise<ListPostsOutput> {
    const path = "/posts";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreatePost(input: CreatePostInput, opts?: any): Promise<CreatePostOutput> {
    const path = "/posts";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdatePost(input: UpdatePostInput, opts?: any): Promise<UpdatePostOutput> {
    const path = "/posts/"+encodeURIComponent(input.postId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.postId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeletePost(input: DeletePostInput, opts?: any): Promise<DeletePostOutput> {
    const path = "/posts/"+encodeURIComponent(input.postId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.postId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  VotePost(input: VotePostInput, opts?: any): Promise<VotePostOutput> {
    const path = "/posts/"+encodeURIComponent(input.postId||'')+"/vote";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.postId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribePostTranslation(input: DescribePostTranslationInput, opts?: any): Promise<DescribePostTranslationOutput> {
    const path = "/posts/"+encodeURIComponent(input.postId||'')+"/translations/"+encodeURIComponent(input.translationId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.postId);
    delete(input.translationId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListPostTranslations(input: ListPostTranslationsInput, opts?: any): Promise<ListPostTranslationsOutput> {
    const path = "/posts/"+encodeURIComponent(input.postId||'')+"/translations";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.postId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreatePostTranslation(input: CreatePostTranslationInput, opts?: any): Promise<CreatePostTranslationOutput> {
    const path = "/posts/"+encodeURIComponent(input.postId||'')+"/translations";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.postId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdatePostTranslation(input: UpdatePostTranslationInput, opts?: any): Promise<UpdatePostTranslationOutput> {
    const path = "/posts/"+encodeURIComponent(input.postId||'')+"/translations/"+encodeURIComponent(input.translationId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.postId);
    delete(input.translationId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeletePostTranslation(input: DeletePostTranslationInput, opts?: any): Promise<DeletePostTranslationOutput> {
    const path = "/posts/"+encodeURIComponent(input.postId||'')+"/translations/"+encodeURIComponent(input.translationId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.postId);
    delete(input.translationId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }
}

export type DescribePostInput = {
  postId?: string;
  extra?: string[];
}

export type DescribePostOutput = {
  post?: Post;
}

export type ListPostsInput = {
  after?: string;
  size?: number;
  offset?: number;
  sort?: string;
  order?: string;
  filters?: ListPostsInput_Filter;
  displayLocale?: string;
  extra?: string[];
}

export type ListPostsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  sourceId?: ExpressionID[];
  userId?: ExpressionID[];
  memberId?: ExpressionID[];
  typeId?: ExpressionID[];
  createdAt?: ExpressionTimestamp[];
  publishedAt?: ExpressionTimestamp[];
  draft?: ExpressionBool[];
  public?: ExpressionBool[];
  moderation?: ExpressionEnum[];
  locale?: ExpressionEnum[];
  label?: ExpressionEnum[];
}

export type ListPostsOutput = {
  total?: number;
  items?: Post[];
  nextPageCursor?: string;
}

export type CreatePostInput = {
  post?: Post;
}

export type CreatePostOutput = {
  postId?: string;
}

export type UpdatePostInput = {
  patch?: string[];
  postId?: string;
  post?: Post;
}

export type UpdatePostOutput = Record<string, unknown>;

export type DeletePostInput = {
  postId?: string;
}

export type DeletePostOutput = Record<string, unknown>;

export type VotePostInput = {
  postId?: string;
  vote?: number;
}

export type VotePostOutput = {
  voteCount?: number;
}

export type DescribePostTranslationInput = {
  postId?: string;
  translationId?: string;
  extra?: string[];
}

export type DescribePostTranslationOutput = {
  translation?: Post_Translation;
}

export type ListPostTranslationsInput = {
  postId?: string;
  offset?: number;
  size?: number;
  filters?: ListPostTranslationsInput_Filter;
  extra?: string[];
}

export type ListPostTranslationsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  locale?: ExpressionEnum[];
}

export type ListPostTranslationsOutput = {
  total?: number;
  items?: Post_Translation[];
}

export type CreatePostTranslationInput = {
  postId?: string;
  translation?: Post_Translation;
}

export type CreatePostTranslationOutput = {
  translationId?: string;
}

export type UpdatePostTranslationInput = {
  patch?: string[];
  postId?: string;
  translationId?: string;
  translation?: Post_Translation;
}

export type UpdatePostTranslationOutput = Record<string, unknown>;

export type DeletePostTranslationInput = {
  postId?: string;
  translationId?: string;
}

export type DeletePostTranslationOutput = Record<string, unknown>;

