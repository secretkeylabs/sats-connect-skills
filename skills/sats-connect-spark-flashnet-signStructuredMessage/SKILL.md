---
name: sats-connect-spark-flashnet-signStructuredMessage
description: Sign a structured Flashnet message using the user's wallet, typically used for typed or domain-specific data signing.
---

# spark_flashnet_signStructuredMessage

Sign a structured Flashnet message using the user's wallet. This is typically used for typed or domain-specific data signing on the Flashnet. The user will be prompted to approve the signing.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("spark_flashnet_signStructuredMessage", {
    message: structuredMessage,
  });

  if (response.status === "success") {
    console.log("Signature:", response.result.signature);
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

Returns an object with the `signature` of the structured message.
