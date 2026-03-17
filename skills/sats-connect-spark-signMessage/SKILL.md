---
name: sats-connect-spark-signMessage
description: Request the user to sign a message with their Spark key.
---

# spark_signMessage

Request the user to sign a message with their Spark key. The user will be prompted to approve the signing.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("spark_signMessage", {
    message: "Hello from Spark!",
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

Returns a result object with the message `signature`.
