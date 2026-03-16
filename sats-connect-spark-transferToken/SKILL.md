---
name: sats-connect-spark-transferToken
description: Send a Spark BTKN token to a recipient on the Spark layer from the user's wallet.
---

# spark_transferToken

Send a Spark BTKN token to a recipient on the Spark layer from the user's wallet. The user will be prompted to approve the transfer.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("spark_transferToken", {
    tokenPublicKey: tokenBtknPublicKey,
    recipients: [
      {
        address: sparkRecipientAddress,
        amount: 500,
      },
    ],
  });

  if (response.status === "success") {
    console.log("Transfer result:", response.result);
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

Returns a result object with token transfer details.
