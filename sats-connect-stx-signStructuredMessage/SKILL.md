---
name: sats-connect-stx-signStructuredMessage
description: Request the user to sign a structured message following the SIP-018 standard with their Stacks account.
---

# stx_signStructuredMessage

Request the user to sign a structured message following the SIP-018 standard with their Stacks account.

The structured message requires:

- `message` — the Clarity value to sign.
- `domain` — the SIP-018 domain with `name`, `version`, and `chainId`.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("stx_signStructuredMessage", {
    message: '(tuple (amount u1000) (action "transfer"))',
    domain: {
      name: "my-app",
      version: "1.0.0",
      chainId: 1,
    },
  });

  if (response.status === "success") {
    console.log("Signature:", response.result.signature);
    console.log("Public key:", response.result.publicKey);
  } else {
    if (response.error.code === RpcErrorCode.USER_REJECTION) {
      // handle user cancellation
    } else {
      // handle error
    }
  }
} catch (err) {
  console.error(err);
}
```

## Response

Returns a `SignMessageResult` object with `signature` and `publicKey`.
