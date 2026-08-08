# JavaScript SDK

JavaScript SDK provides handy JavaScript library to access Eolymp API.

## Watching a stream

A server streaming method returns a stream instead of a promise. Messages arrive on `message`, a stream
which ran to its end fires `eof`, and one which failed fires `error`; both are final.

```typescript
import { Client } from "@eolymp/js-sdk/client";
import { TaskService } from "@eolymp/js-sdk/services/tasks/task_service";

const tasks = new TaskService(new Client({ token }), problem.url);
const stream = tasks.WatchTask({ taskId });

stream.on("message", (out) => console.log(out.task?.status));
stream.on("eof", () => console.log("finished"));
stream.on("error", (err) => console.error(err));
```

Call `close()` to stop listening, which also disconnects:

```typescript
useEffect(() => {
  const stream = tasks.WatchTask({ taskId });
  stream.on("message", (out) => setTask(out.task));

  return () => stream.close();
}, [taskId]);
```

The error is the same one the equivalent call would have thrown, `ForbiddenError`, `NotFoundError` and the
rest, so a stream needs no error handling of its own. A connection which drops without an `eof` is reported
as an error too: the stream never reconnects on its own, leaving the caller to decide whether to open a new
one.
