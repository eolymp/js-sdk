// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID, ExpressionString } from "../wellknown/expression"
import { Topic, Topic_Translation } from "./taxonomy_topic"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class TopicService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateTopic(input: CreateTopicInput, opts?: any): Promise<CreateTopicOutput> {
    const path = "/topics";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteTopic(input: DeleteTopicInput, opts?: any): Promise<DeleteTopicOutput> {
    const path = "/topics/"+encodeURIComponent(input.topicId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.topicId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  UpdateTopic(input: UpdateTopicInput, opts?: any): Promise<UpdateTopicOutput> {
    const path = "/topics/"+encodeURIComponent(input.topicId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.topicId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DescribeTopic(input: DescribeTopicInput, opts?: any): Promise<DescribeTopicOutput> {
    const path = "/topics/"+encodeURIComponent(input.topicId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.topicId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListTopics(input: ListTopicsInput, opts?: any): Promise<ListTopicsOutput> {
    const path = "/topics";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  TranslateTopic(input: TranslateTopicInput, opts?: any): Promise<TranslateTopicOutput> {
    const path = "/topics/"+encodeURIComponent(input.topicId||'')+"/translations/"+encodeURIComponent(input.locale||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.topicId);
    delete(input.locale);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteTranslation(input: DeleteTranslationInput, opts?: any): Promise<DeleteTranslationOutput> {
    const path = "/topics/"+encodeURIComponent(input.topicId||'')+"/translations/"+encodeURIComponent(input.locale||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.topicId);
    delete(input.locale);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListTranslations(input: ListTranslationsInput, opts?: any): Promise<ListTranslationsOutput> {
    const path = "/topics/"+encodeURIComponent(input.topicId||'')+"/translations";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.topicId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }
}

export type CreateTopicInput = {
  topic?: Topic;
}

export type CreateTopicOutput = {
  topicId?: string;
}

export type DeleteTopicInput = {
  topicId?: string;
}

export type DeleteTopicOutput = Record<string, unknown>;

export type UpdateTopicInput = {
  patch?: string[];
  topicId?: string;
  topic?: Topic;
}

export type UpdateTopicOutput = Record<string, unknown>;

export type DescribeTopicInput = {
  topicId?: string;
  locale?: string;
}

export type DescribeTopicOutput = {
  topic?: Topic;
}

export type ListTopicsInput = {
  offset?: number;
  size?: number;
  filters?: ListTopicsInput_Filter;
  locale?: string;
}

export type ListTopicsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
  name?: ExpressionString[];
}

export type ListTopicsOutput = {
  total?: number;
  items?: Topic[];
}

export type TranslateTopicInput = {
  topicId?: string;
  locale?: string;
  translation?: Topic_Translation;
}

export type TranslateTopicOutput = Record<string, unknown>;

export type DeleteTranslationInput = {
  topicId?: string;
  locale?: string;
}

export type DeleteTranslationOutput = Record<string, unknown>;

export type ListTranslationsInput = {
  topicId?: string;
  offset?: number;
  size?: number;
  filters?: ListTranslationsInput_Filter;
}

export type ListTranslationsInput_Filter = {
  locale?: ExpressionEnum[];
}

export type ListTranslationsOutput = {
  total?: number;
  items?: Topic_Translation[];
}

