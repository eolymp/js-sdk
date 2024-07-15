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

  CreateAchievement(input: CreateAchievementInput, opts?: any): Promise<CreateAchievementOutput> {
    const path = "/achievements";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateAchievement(input: UpdateAchievementInput, opts?: any): Promise<UpdateAchievementOutput> {
    const path = "/achievements/"+encodeURIComponent(input.achievementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.achievementId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteAchievement(input: DeleteAchievementInput, opts?: any): Promise<DeleteAchievementOutput> {
    const path = "/achievements/"+encodeURIComponent(input.achievementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.achievementId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeAchievement(input: DescribeAchievementInput, opts?: any): Promise<DescribeAchievementOutput> {
    const path = "/achievements/"+encodeURIComponent(input.achievementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.achievementId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListAchievements(input: ListAchievementsInput, opts?: any): Promise<ListAchievementsOutput> {
    const path = "/achievements";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateAchievementInput = {
  achievement?: Achievement;
}

export type CreateAchievementOutput = {
  achievementId?: string;
}

export type UpdateAchievementInput = {
  achievementId?: string;
  achievement?: Achievement;
}

export type UpdateAchievementOutput = Record<string, unknown>;

export type DeleteAchievementInput = {
  achievementId?: string;
}

export type DeleteAchievementOutput = Record<string, unknown>;

export type DescribeAchievementInput = {
  achievementId?: string;
  extra?: string[];
}

export type DescribeAchievementOutput = {
  achievement?: Achievement;
}

export type ListAchievementsInput = {
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

