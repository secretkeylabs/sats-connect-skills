---
name: sats-connect-signMessage
description: Request the user to sign a message with their Bitcoin wallet address.
---

# signMessage

Request the user to sign a message with their wallet's Bitcoin addresses.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("signMessage", {
    address,
    message,
  });
  if (response.status === "success") {
    console.log("Signature:", response.result.signature);
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

Returns a `SignMessageResult` object with `signature` and `messageHash`.
