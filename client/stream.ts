import {BadRequestError, ForbiddenError, InternalServerError, NotFoundError, UnauthorizedError} from "./errors";

// Status is the google.rpc.Status an error event carries.
export type Status = {
  code?: number;
  message?: string;
  details?: any[];
};

// Stream is an open server-sent event stream. Messages arrive on the "message" event, a stream which ran
// to its end fires "eof", and one which failed fires "error"; both are final, nothing follows them.
//
//   const stream = tasks.WatchTask({taskId});
//
//   stream.on("message", (out) => console.log(out.task));
//   stream.on("eof", () => console.log("done"));
//   stream.on("error", (err) => console.error(err));
//
// Call close() to stop listening, eg. when a component unmounts. A connection which drops without an eof
// event is reported as an error, the stream never reconnects on its own.
export class Stream<T> {
  private readonly messageHandlers: ((message: T) => void)[] = [];
  private readonly errorHandlers: ((error: Error) => void)[] = [];
  private readonly eofHandlers: (() => void)[] = [];

  private readonly controller = new AbortController();
  private done = false;

  constructor(open: (signal: AbortSignal) => Promise<Response>, signal?: AbortSignal | null) {
    if (signal) {
      if (signal.aborted) {
        this.done = true;
      } else {
        signal.addEventListener('abort', () => this.close());
      }
    }

    if (!this.done) {
      this.consume(open).catch((error) => this.fail(error));
    }
  }

  on(event: "message", handler: (message: T) => void): this;
  on(event: "error", handler: (error: Error) => void): this;
  on(event: "eof", handler: () => void): this;
  on(event: string, handler: any): this {
    switch (event) {
      case "message":
        this.messageHandlers.push(handler);
        break;
      case "error":
        this.errorHandlers.push(handler);
        break;
      case "eof":
        this.eofHandlers.push(handler);
        break;
    }

    return this;
  }

  close(): void {
    if (this.done) {
      return;
    }

    this.done = true;
    this.controller.abort();
  }

  get closed(): boolean {
    return this.done;
  }

  private async consume(open: (signal: AbortSignal) => Promise<Response>): Promise<void> {
    const response = await open(this.controller.signal);
    if (!response.body) {
      throw new InternalServerError('response carries no body');
    }

    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    while (!this.done) {
      const {value, done} = await reader.read();
      if (done) {
        break;
      }

      buffer += decoder.decode(value, {stream: true}).replace(/\r\n/g, "\n");

      // a blank line terminates an event, whatever follows the last one is still incomplete
      for (let end = buffer.indexOf("\n\n"); end >= 0; end = buffer.indexOf("\n\n")) {
        const event = buffer.slice(0, end);
        buffer = buffer.slice(end + 2);

        if (!this.dispatch(event)) {
          return;
        }
      }
    }

    // the body ended without an eof event, so the connection dropped mid stream
    this.fail(new InternalServerError('stream closed unexpectedly'));
  }

  // dispatch reports whether the stream goes on
  private dispatch(event: string): boolean {
    let name = '';
    const data: string[] = [];

    for (const line of event.split("\n")) {
      // a comment carries no event, it is how the server keeps the connection alive
      if (line === '' || line.startsWith(':')) {
        continue;
      }

      const colon = line.indexOf(':');
      const field = colon < 0 ? line : line.slice(0, colon);
      const value = colon < 0 ? '' : line.slice(colon + 1).replace(/^ /, '');

      switch (field) {
        case 'event':
          name = value;
          break;
        case 'data':
          data.push(value);
          break;
      }
    }

    if (data.length === 0) {
      return true;
    }

    const payload = data.join("\n");

    if (name === 'eof') {
      this.done = true;
      this.controller.abort();
      this.eofHandlers.forEach((handler) => handler());

      return false;
    }

    if (name === 'error') {
      this.fail(statusError(JSON.parse(payload) as Status));

      return false;
    }

    const message = JSON.parse(payload) as T;
    this.messageHandlers.forEach((handler) => handler(message));

    return true;
  }

  private fail(error: Error): void {
    // a stream closed by the caller ends with an abort error, which no one asked to hear about
    if (this.done) {
      return;
    }

    this.done = true;
    this.controller.abort();
    this.errorHandlers.forEach((handler) => handler(error));
  }
}

// gRPC status code to HTTP status, mirroring what the API does with a failed call
const httpStatus: Record<number, number> = {
  1: 504, 2: 500, 3: 400, 4: 504, 5: 404, 6: 409, 7: 403, 8: 429,
  9: 412, 10: 503, 11: 416, 12: 501, 13: 500, 14: 503, 15: 500, 16: 401,
};

// statusError converts a failed stream into the same error a failed call would have thrown
export function statusError(status: Status): Error {
  const code = status.code ?? 2;
  const message = status.message ?? 'stream failed';
  const http = httpStatus[code] ?? 500;

  switch (http) {
    case 401:
      return new UnauthorizedError(message);
    case 403:
      return new ForbiddenError(message);
    case 404:
      return new NotFoundError(message);
  }

  if (http < 500) {
    return new BadRequestError(message, String(code), http, status.details);
  }

  return new InternalServerError(message, String(code), http, status.details);
}
