---
name: sats-connect-sendTransfer
description: Request a Bitcoin transfer to one or more recipients from the user's wallet.
---

# sendTransfer

Request a transfer of any amount of Bitcoin to one or more recipients from the user's wallet.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("sendTransfer", {
    recipients: [
      {
        address: recipientAddress,
        amount: 1000, // amount in sats
      },
    ],
  });
  if (response.status === "success") {
    console.log("Transaction ID:", response.result.txid);
  } else {
    if (response.error.code === RpcErrorCode.USER_REJECTION) {
      // handle user cancellation error
    } else {
      // handle error
    }
  }
} catch (err) {
  console.error(err);
}
```

## Response

Returns a `sendTransferResult` object with the transaction ID (`txid`).
