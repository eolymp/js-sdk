// Generated by the protocol buffer compiler. DO NOT EDIT!
// See https://github.com/eolymp/contracts/tree/main/cmd/protoc-gen-js-esdk for more details.

import { Notification } from "./notification"
import { Subscription } from "./subscription"

interface Client {
  call<R, E, O>(verb: string, url: string, args: R, opts?: any): Promise<E>;
}

export class NotificationService {
  private readonly cli: Client;
  private readonly url: string;

  constructor(cli: Client, url: string = 'https://api.eolymp.com') {
    this.cli = cli;
    this.url = url;
  }

  DescribeNotification(input: DescribeNotificationInput, opts?: any): Promise<DescribeNotificationOutput> {
    const path = "/notifications/"+encodeURIComponent(input.notificationId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.notificationId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  ReadNotification(input: ReadNotificationInput, opts?: any): Promise<ReadNotificationOutput> {
    const path = "/notifications/"+encodeURIComponent(input.notificationId||'')+"/read";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.notificationId);

    return this.cli.call("POST", this.url+path, input, opts);
  }

  DeleteNotification(input: DeleteNotificationInput, opts?: any): Promise<DeleteNotificationOutput> {
    const path = "/notifications/"+encodeURIComponent(input.notificationId||'');

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.notificationId);

    return this.cli.call("DELETE", this.url+path, input, opts);
  }

  ListNotifications(input: ListNotificationsInput, opts?: any): Promise<ListNotificationsOutput> {
    const path = "/notifications";

    return this.cli.call("GET", this.url+path, input, opts);
  }

  DescribeSubscriptions(input: DescribeSubscriptionsInput, opts?: any): Promise<DescribeSubscriptionsOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/notifications";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("GET", this.url+path, input, opts);
  }

  UpdateSubscriptions(input: UpdateSubscriptionsInput, opts?: any): Promise<UpdateSubscriptionsOutput> {
    const path = "/spaces/"+encodeURIComponent(input.spaceId||'')+"/notifications";

    // Cleanup URL parameters to avoid any ambiguity
    delete(input.spaceId);

    return this.cli.call("POST", this.url+path, input, opts);
  }
}

export type NotificationEvent = {
  notification?: Notification;
}

export type CreateNotificationInput = {
  notification?: Notification;
}

export type CreateNotificationOutput = Record<string, unknown>;

export type DescribeNotificationInput = {
  notificationId?: string;
}

export type DescribeNotificationOutput = {
  notification?: Notification;
}

export type ReadNotificationInput = {
  notificationId?: string;
}

export type ReadNotificationOutput = Record<string, unknown>;

export type DeleteNotificationInput = {
  notificationId?: string;
}

export type DeleteNotificationOutput = Record<string, unknown>;

export type ListNotificationsInput = {
  size?: number;
  after?: string;
}

export type ListNotificationsOutput = {
  total?: number;
  items?: Notification[];
}

export type DescribeSubscriptionsInput = {
  spaceId?: string;
}

export type DescribeSubscriptionsOutput = {
  subscriptions?: Subscription[];
}

export type UpdateSubscriptionsInput = {
  spaceId?: string;
  subscriptions?: Subscription[];
}

export type UpdateSubscriptionsOutput = Record<string, unknown>;

