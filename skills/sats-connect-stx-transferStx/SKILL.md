---
name: sats-connect-stx-transferStx
description: Request a STX token transfer from the user's Stacks account to a recipient address.
---

# stx_transferStx

Request a STX token transfer from the user's Stacks account.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("stx_transferStx", {
    recipient: recipientAddress,
    amount: "1000000", // amount in micro-STX (1 STX = 1,000,000 micro-STX)
    memo: "Payment for services",
  });

  if (response.status === "success") {
    console.log("Transaction ID:", response.result.txid);
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

Returns a `TransferStxResult` object with the transaction ID (`txid`).
