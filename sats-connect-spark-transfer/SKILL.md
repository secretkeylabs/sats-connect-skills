---
name: sats-connect-spark-transfer
description: Send BTC to a recipient on the Spark layer from the user's wallet.
---

# spark_transfer

Send BTC to a recipient on the Spark layer from the user's wallet. The user will be prompted to approve the transfer.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("spark_transfer", {
    recipients: [
      {
        address: sparkRecipientAddress,
        amount: 1000, // amount in sats
      },
    ],
  });

  if (response.status === "success") {
    console.log("Transfer ID:", response.result.transferId);
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

Returns a result object with transfer details.
