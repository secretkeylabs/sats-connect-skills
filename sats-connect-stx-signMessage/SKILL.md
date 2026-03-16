---
name: sats-connect-stx-signMessage
description: Request the user to sign a message with their Stacks account.
---

# stx_signMessage

Request the user to sign a message with their Stacks account.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("stx_signMessage", {
    message: "Hello, Stacks!",
  });

  if (response.status === "success") {
    console.log("Signature:", response.result.signature);
    console.log("Public key:", response.result.publicKey);
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

Returns a `SignMessageResult` object with `signature` and `publicKey`.
