---
name: sats-connect-signMultipleMessages
description: Request the user to sign multiple messages in a single batch. This is an Xverse custom method.
---

# signMultipleMessages

> This is an Xverse custom method. It can only be invoked for users using the Xverse wallet.

Request the user to sign multiple messages with their wallet's Bitcoin addresses in a single batch, instead of requiring multiple individual `signMessage` calls.

The request payload is an array of message objects with:

- `address` (required) — the address to sign with.
- `message` (required) — the message to sign.
- `protocol` (optional) — `"ECDSA"` or `"BIP322"`.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("signMultipleMessages", [
    {
      address,
      message: "Message #1 to sign",
    },
    {
      address,
      message: "Message #2 to sign",
      protocol: "ECDSA",
    },
    {
      address,
      message: "Message #3 to sign",
      protocol: "BIP322",
    },
  ]);

  if (response.status === "success") {
    console.log(response.result);
  } else {
    if (response.error.code === RpcErrorCode.USER_REJECTION) {
      // handle user request cancellation
    } else {
      // handle request error
    }
  }
} catch (err) {
  console.error(err);
}
```

## Response

Returns an array of `SignMessageResult` objects in the same order as the request payload. Each item contains `signature` and `messageHash`.
