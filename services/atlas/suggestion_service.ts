// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Content } from "../ecm/content"
import { ExpressionID, ExpressionString } from "../wellknown/expression"
import { Suggestion } from "./suggestion"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class SuggestionService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateSuggestion(input: CreateSuggestionInput, opts?: any): Promise<CreateSuggestionOutput> {
    const path = "/suggestions/";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateSuggestion(input: UpdateSuggestionInput, opts?: any): Promise<UpdateSuggestionOutput> {
    const path = "/suggestions/"+encodeURIComponent(input.suggestionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.suggestionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ReviewSuggestion(input: ReviewSuggestionInput, opts?: any): Promise<ReviewSuggestionOutput> {
    const path = "/suggestions/"+encodeURIComponent(input.suggestionId||'')+"/review";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.suggestionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ResubmitSuggestion(input: ResubmitSuggestionInput, opts?: any): Promise<ResubmitSuggestionOutput> {
    const path = "/suggestions/"+encodeURIComponent(input.suggestionId||'')+"/resubmit";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.suggestionId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteSuggestion(input: DeleteSuggestionInput, opts?: any): Promise<DeleteSuggestionOutput> {
    const path = "/suggestions/"+encodeURIComponent(input.suggestionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.suggestionId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListSuggestions(input: ListSuggestionsInput, opts?: any): Promise<ListSuggestionsOutput> {
    const path = "/suggestions";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeSuggestion(input: DescribeSuggestionInput, opts?: any): Promise<DescribeSuggestionOutput> {
    const path = "/suggestions/"+encodeURIComponent(input.suggestionId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.suggestionId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateSuggestionInput = {
  problemId?: string;
  suggestion?: Suggestion;
}

export type CreateSuggestionOutput = {
  suggestionId?: string;
}

export type UpdateSuggestionInput = {
  problemId?: string;
  suggestionId?: string;
  suggestion?: Suggestion;
}

export type UpdateSuggestionOutput = Record<string, unknown>;

export type DeleteSuggestionInput = {
  problemId?: string;
  suggestionId?: string;
}

export type DeleteSuggestionOutput = Record<string, unknown>;

export type ReviewSuggestionInput = {
  problemId?: string;
  suggestionId?: string;
  status?: string;
  comment?: Content;
}

export type ReviewSuggestionOutput = Record<string, unknown>;

export type ResubmitSuggestionInput = {
  problemId?: string;
  suggestionId?: string;
}

export type ResubmitSuggestionOutput = Record<string, unknown>;

export type ListSuggestionsInput = {
  problemId?: string;
  offset?: number;
  size?: number;
  filters?: ListSuggestionsInput_Filter;
  version?: number;
}

export type ListSuggestionsInput_Filter = {
  id?: ExpressionID[];
  name?: ExpressionString[];
}

export type ListSuggestionsOutput = {
  total?: number;
  items?: Suggestion[];
}

export type DescribeSuggestionInput = {
  problemId?: string;
  suggestionId?: string;
  version?: number;
}

export type DescribeSuggestionOutput = {
  suggestion?: Suggestion;
}

