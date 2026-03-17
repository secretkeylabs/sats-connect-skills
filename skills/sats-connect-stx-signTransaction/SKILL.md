---
name: sats-connect-stx-signTransaction
description: Request the user to sign a Stacks transaction with their wallet.
---

# stx_signTransaction

Request the user to sign a Stacks transaction with their wallet. The transaction must be serialized as a hex string.

The `broadcast` parameter controls whether the signed transaction is also broadcast to the network.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("stx_signTransaction", {
    transaction: serializedTxHex,
    broadcast: true,
  });

  if (response.status === "success") {
    console.log("Transaction:", response.result.transaction);
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

Returns a `SignTransactionResult` object with:

- `transaction` — the signed transaction hex.
- `txid` — the transaction ID (if `broadcast` was `true`).
