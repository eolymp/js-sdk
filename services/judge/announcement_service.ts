// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { ExpressionBool, ExpressionID } from "../wellknown/expression"
import { Announcement } from "./announcement"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class AnnouncementService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  CreateAnnouncement(input: CreateAnnouncementInput, opts?: any): Promise<CreateAnnouncementOutput> {
    const path = "/announcements";

    return this.cli.call("POST", this.url+path, input, opts);
  }

  UpdateAnnouncement(input: UpdateAnnouncementInput, opts?: any): Promise<UpdateAnnouncementOutput> {
    const path = "/announcements/"+encodeURIComponent(input.announcementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.announcementId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteAnnouncement(input: DeleteAnnouncementInput, opts?: any): Promise<DeleteAnnouncementOutput> {
    const path = "/announcements/"+encodeURIComponent(input.announcementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.announcementId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ReadAnnouncement(input: ReadAnnouncementInput, opts?: any): Promise<ReadAnnouncementOutput> {
    const path = "/announcements/"+encodeURIComponent(input.announcementId||'')+"/read";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.announcementId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DescribeAnnouncement(input: DescribeAnnouncementInput, opts?: any): Promise<DescribeAnnouncementOutput> {
    const path = "/announcements/"+encodeURIComponent(input.announcementId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.announcementId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeAnnouncementStatus(input: DescribeAnnouncementStatusInput, opts?: any): Promise<DescribeAnnouncementStatusOutput> {
    const path = "/announcements/"+encodeURIComponent(input.announcementId||'')+"/status";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.announcementId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ListAnnouncements(input: ListAnnouncementsInput, opts?: any): Promise<ListAnnouncementsOutput> {
    const path = "/announcements";

    return this.cli.call("GET", this.url+path, input, opts);
  }
}

export type CreateAnnouncementInput = {
  contestId?: string;
  announcement?: Announcement;
}

export type CreateAnnouncementOutput = {
  id?: string;
}

export type UpdateAnnouncementInput = {
  contestId?: string;
  announcementId?: string;
  announcement?: Announcement;
}

export type UpdateAnnouncementOutput = Record<string, unknown>;

export type DeleteAnnouncementInput = {
  contestId?: string;
  announcementId?: string;
}

export type DeleteAnnouncementOutput = Record<string, unknown>;

export type ReadAnnouncementInput = {
  contestId?: string;
  announcementId?: string;
}

export type ReadAnnouncementOutput = Record<string, unknown>;

export type DescribeAnnouncementInput = {
  contestId?: string;
  announcementId?: string;
  extra?: string[];
}

export type DescribeAnnouncementOutput = {
  announcement?: Announcement;
}

export type DescribeAnnouncementStatusInput = {
  contestId?: string;
  announcementId?: string;
}

export type DescribeAnnouncementStatusOutput = {
  isRead?: boolean;
}

export type ListAnnouncementsInput = {
  contestId?: string;
  offset?: number;
  size?: number;
  filters?: ListAnnouncementsInput_Filter;
  extra?: string[];
}

export type ListAnnouncementsInput_Filter = {
  id?: ExpressionID[];
  isRead?: ExpressionBool[];
}

export type ListAnnouncementsOutput = {
  total?: number;
  items?: Announcement[];
}

export type WatchAnnouncementInput = {
  announcementId?: string;
  extra?: string[];
}

export type WatchAnnouncementOutput = {
  announcement?: Announcement;
}

export type WatchAnnouncementsInput = {
  extra?: string[];
}

export type WatchAnnouncementsOutput = {
  event?: string;
  announcement?: Announcement;
}

export type WatchAnnouncementSummaryInput = Record<string, unknown>;

export type WatchAnnouncementSummaryOutput = {
  unreadCount?: number;
}
