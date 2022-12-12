// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Agreement } from "./agreement"
import { Consent } from "./consent"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: O): Promise<E>;
}

export class Harmony {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  ListAgreements<O>(input: ListAgreementsInput, opts?: O): Promise<ListAgreementsOutput> {
    const path = "/harmony/agreements";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  GetConsent<O>(input: GetConsentInput, opts?: O): Promise<GetConsentOutput> {
    const path = "/harmony/agreements/"+encodeURIComponent(input.agreementId||'')+"/consent";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.agreementId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  SetConsent<O>(input: SetConsentInput, opts?: O): Promise<SetConsentOutput> {
    const path = "/harmony/agreements/"+encodeURIComponent(input.agreementId||'')+"/consent";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.agreementId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  FollowShortcut<O>(input: FollowShortcutInput, opts?: O): Promise<FollowShortcutOutput> {
    const path = "/harmony/shortcuts/"+encodeURIComponent(input.shortcutId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.shortcutId);

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type ListAgreementsInput = {
  preferredLocales?: string[];
}

export type ListAgreementsOutput = {
  items?: Agreement[];
}

export type GetConsentInput = {
  agreementId?: string;
}

export type GetConsentOutput = {
  consent?: Consent;
}

export type SetConsentInput = {
  agreementId?: string;
  status?: string;
}

export type SetConsentOutput = {
  consent?: Consent;
}

export type FollowShortcutInput = {
  shortcutId?: string;
  status?: string;
}

export type FollowShortcutOutput = Record<string, unknown>;

