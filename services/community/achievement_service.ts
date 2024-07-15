// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionID } from "../wellknown/expression"
import { Achievement } from "./achievement"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class AchievementService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  AssignAchievement(input: AssignAchievementInput, opts?: any): Promise<AssignAchievementOutput> {
    const path = "/achievements/"+encodeURIComponent(input.achievementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.achievementId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  UnassignAchievement(input: UnassignAchievementInput, opts?: any): Promise<UnassignAchievementOutput> {
    const path = "/achievements/"+encodeURIComponent(input.achievementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.achievementId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListAchievements(input: ListAchievementsInput, opts?: any): Promise<ListAchievementsOutput> {
    const path = "/achievements";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type AssignAchievementInput = {
  achievementId?: string;
  setTo?: number;
  incBy?: number;
}

export type AssignAchievementOutput = {
  quantity?: number;
}

export type UnassignAchievementInput = {
  achievementId?: string;
}

export type UnassignAchievementOutput = Record<string, unknown>;

export type ListAchievementsInput = {
  locale?: string;
  offset?: number;
  size?: number;
  filters?: ListAchievementsInput_Filter;
  extra?: string[];
}

export type ListAchievementsInput_Filter = {
  query?: string;
  id?: ExpressionID[];
}

export type ListAchievementsOutput = {
  total?: number;
  items?: Achievement[];
}

