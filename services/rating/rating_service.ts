// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionID, ExpressionTimestamp } from "../wellknown/expression"
import { Rating } from "./rating"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class RatingService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  SetRating(input: SetRatingInput, opts?: any): Promise<SetRatingOutput> {
    const path = "/rating";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateRating(input: UpdateRatingInput, opts?: any): Promise<UpdateRatingOutput> {
    const path = "/rating/"+encodeURIComponent(input.ratingId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ratingId);

    return this.cli.call("PUT", this.url+path, input, opts);
  }

  DeleteRating(input: DeleteRatingInput, opts?: any): Promise<DeleteRatingOutput> {
    const path = "/rating/"+encodeURIComponent(input.ratingId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ratingId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  DescribeRating(input: DescribeRatingInput, opts?: any): Promise<DescribeRatingOutput> {
    const path = "/rating/"+encodeURIComponent(input.ratingId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.ratingId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListRating(input: ListRatingInput, opts?: any): Promise<ListRatingOutput> {
    const path = "/members/"+encodeURIComponent(input.memberId||'')+"/rating";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.memberId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeRatingBoundaries(input: DescribeRatingBoundariesInput, opts?: any): Promise<DescribeRatingBoundariesOutput> {
    const path = "/rating-boundaries";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeRatingDistribution(input: DescribeRatingDistributionInput, opts?: any): Promise<DescribeRatingDistributionOutput> {
    const path = "/rating-distribution";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type SetRatingInput = {
  rating?: Rating;
}

export type SetRatingOutput = {
  ratingId?: string;
}

export type UpdateRatingInput = {
  ratingId?: string;
  rating?: Rating;
}

export type UpdateRatingOutput = Record<string, unknown>;

export type DeleteRatingInput = {
  ratingId?: string;
  rating?: Rating;
}

export type DeleteRatingOutput = Record<string, unknown>;

export type DescribeRatingInput = {
  ratingId?: string;
}

export type DescribeRatingOutput = {
  rating?: Rating;
}

export type ListRatingInput = {
  memberId?: string;
  offset?: number;
  size?: number;
  after?: string;
  filters?: ListRatingInput_Filter;
  sort?: string;
  order?: string;
}

export type ListRatingInput_Filter = {
  id?: ExpressionID[];
  contestId?: ExpressionID[];
  timestamp?: ExpressionTimestamp[];
}

export type ListRatingOutput = {
  total?: number;
  items?: Rating[];
}

export type DescribeRatingBoundariesInput = Record<string, unknown>;

export type DescribeRatingBoundariesOutput = {
  levels?: DescribeRatingBoundariesOutput_Level[];
}

export type DescribeRatingBoundariesOutput_Level = {
  id?: number;
  rating?: number;
  count?: number;
}

export type DescribeRatingDistributionInput = Record<string, unknown>;

export type DescribeRatingDistributionOutput = {
  buckets?: DescribeRatingDistributionOutput_Bucket[];
}

export type DescribeRatingDistributionOutput_Bucket = {
  minRating?: number;
  maxRating?: number;
  count?: number;
}

