// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionEnum, ExpressionID } from "../wellknown/expression"
import { Campaign, Campaign_Translation } from "./campaign"
import { Recipient } from "./recipient"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class CampaignService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateCampaign(input: CreateCampaignInput, opts?: any): Promise<CreateCampaignOutput> {
    const path = "/campaigns";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateCampaign(input: UpdateCampaignInput, opts?: any): Promise<UpdateCampaignOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteCampaign(input: DeleteCampaignInput, opts?: any): Promise<DeleteCampaignOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeCampaign(input: DescribeCampaignInput, opts?: any): Promise<DescribeCampaignOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListCampaigns(input: ListCampaignsInput, opts?: any): Promise<ListCampaignsOutput> {
    const path = "/campaigns";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  TestCampaign(input: TestCampaignInput, opts?: any): Promise<TestCampaignOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/test";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  SendCampaign(input: SendCampaignInput, opts?: any): Promise<SendCampaignOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/send";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  TranslateCampaign(input: TranslateCampaignInput, opts?: any): Promise<TranslateCampaignOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/translate";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  CreateTranslation(input: CreateTranslationInput, opts?: any): Promise<CreateTranslationOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/translations";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateTranslation(input: UpdateTranslationInput, opts?: any): Promise<UpdateTranslationOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/translations/"+encodeURIComponent(input.translationId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);
    delete(input.translationId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteTranslation(input: DeleteTranslationInput, opts?: any): Promise<DeleteTranslationOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/translations/"+encodeURIComponent(input.translationId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);
    delete(input.translationId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeTranslation(input: DescribeTranslationInput, opts?: any): Promise<DescribeTranslationOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/translations/"+encodeURIComponent(input.translationId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);
    delete(input.translationId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListTranslations(input: ListTranslationsInput, opts?: any): Promise<ListTranslationsOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/translations";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  CreateRecipient(input: CreateRecipientInput, opts?: any): Promise<CreateRecipientOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/recipients";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  ImportRecipient(input: ImportRecipientInput, opts?: any): Promise<ImportRecipientOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/recipients:import";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteRecipient(input: DeleteRecipientInput, opts?: any): Promise<DeleteRecipientOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/recipients/"+encodeURIComponent(input.recipientId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);
    delete(input.recipientId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListRecipients(input: ListRecipientsInput, opts?: any): Promise<ListRecipientsOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/recipients";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeRecipient(input: DescribeRecipientInput, opts?: any): Promise<DescribeRecipientOutput> {
    const path = "/campaigns/"+encodeURIComponent(input.campaignId||'')+"/recipients/"+encodeURIComponent(input.recipientId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.campaignId);
    delete(input.recipientId);

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateCampaignInput = {
  campaign?: Campaign;
}

export type CreateCampaignOutput = {
  campaignId?: string;
}

export type UpdateCampaignInput = {
  patch?: string[];
  campaignId?: string;
  campaign?: Campaign;
}

export type UpdateCampaignOutput = Record<string, unknown>;

export type DeleteCampaignInput = {
  campaignId?: string;
}

export type DeleteCampaignOutput = Record<string, unknown>;

export type DescribeCampaignInput = {
  campaignId?: string;
  extra?: string[];
}

export type DescribeCampaignOutput = {
  campaign?: Campaign;
}

export type ListCampaignsInput = {
  offset?: number;
  size?: number;
  filters?: ListCampaignsInput_Filter;
  search?: string;
  sort?: string;
  order?: string;
  locale?: string;
  extra?: string[];
}

export type ListCampaignsInput_Filter = {
  id?: ExpressionID[];
  type?: ExpressionEnum[];
}

export type ListCampaignsOutput = {
  total?: number;
  items?: Campaign[];
}

export type TestCampaignInput = {
  campaignId?: string;
  email?: string;
  locale?: string;
  memberId?: string;
}

export type TestCampaignOutput = Record<string, unknown>;

export type SendCampaignInput = {
  campaignId?: string;
  recipientId?: string;
}

export type SendCampaignOutput = Record<string, unknown>;

export type TranslateCampaignInput = {
  campaignId?: string;
  source?: string;
  target?: string[];
  targetAutomatic?: boolean;
  overrideManual?: boolean;
}

export type TranslateCampaignOutput = {
  jobId?: string;
}

export type CreateTranslationInput = {
  campaignId?: string;
  translation?: Campaign_Translation;
}

export type CreateTranslationOutput = {
  translationId?: string;
}

export type UpdateTranslationInput = {
  patch?: string[];
  campaignId?: string;
  translationId?: string;
  translation?: Campaign_Translation;
}

export type UpdateTranslationOutput = Record<string, unknown>;

export type DeleteTranslationInput = {
  campaignId?: string;
  translationId?: string;
}

export type DeleteTranslationOutput = Record<string, unknown>;

export type DescribeTranslationInput = {
  campaignId?: string;
  translationId?: string;
}

export type DescribeTranslationOutput = {
  translation?: Campaign_Translation;
}

export type ListTranslationsInput = {
  campaignId?: string;
  offset?: number;
  size?: number;
  filters?: ListTranslationsInput_Filter;
}

export type ListTranslationsInput_Filter = {
  id?: ExpressionID[];
  locale?: ExpressionEnum[];
}

export type ListTranslationsOutput = {
  total?: number;
  items?: Campaign_Translation[];
}

export type CreateRecipientInput = {
  campaignId?: string;
  memberId?: string;
  parameters?: Record<string, string>;
}

export type CreateRecipientOutput = {
  recipientId?: string;
}

export type ImportRecipientInput = {
  campaignId?: string;
  allMembers?: boolean;
  groupId?: string;
  contestId?: string;
  parameters?: Record<string, string>;
}

export type ImportRecipientOutput = Record<string, unknown>;

export type DeleteRecipientInput = {
  campaignId?: string;
  recipientId?: string;
}

export type DeleteRecipientOutput = Record<string, unknown>;

export type ListRecipientsInput = {
  campaignId?: string;
  offset?: number;
  size?: number;
  filters?: ListRecipientsInput_Filter;
}

export type ListRecipientsInput_Filter = {
  id?: ExpressionID[];
  status?: ExpressionEnum[];
  memberId?: ExpressionID[];
}

export type ListRecipientsOutput = {
  total?: number;
  items?: Recipient[];
}

export type DescribeRecipientInput = {
  campaignId?: string;
  recipientId?: string;
}

export type DescribeRecipientOutput = {
  recipient?: Recipient;
}

