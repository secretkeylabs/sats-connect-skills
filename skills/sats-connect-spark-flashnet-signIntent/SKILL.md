---
name: sats-connect-spark-flashnet-signIntent
description: Sign a Flashnet intent using the user's wallet. Intents represent actions to be executed on the Flashnet.
---

# spark_flashnet_signIntent

Sign a Flashnet intent using the user's wallet. Intents represent actions to be executed on the Flashnet network. The user will be prompted to approve the signing.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("spark_flashnet_signIntent", {
    intent: intentPayload,
  });

  if (response.status === "success") {
    console.log("Signed intent:", response.result);
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

Returns the signed intent object.
