---
name: sats-connect-runes-transfer
description: Request Runes token transfers from the user's wallet, supporting multiple recipient transfers in a single request.
---

# runes_transfer

Request Runes transfers from the user's wallet. You can request multiple transfers in a single request, each specifying a rune, amount, and recipient address.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("runes_transfer", {
    recipients: [
      {
        runeName: "UNCOMMON•GOODS",
        amount: 200,
        address: recipientAddress1,
      },
      {
        runeName: "SATOSHI•NAKAMOTO",
        amount: 100,
        address: recipientAddress2,
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

Returns a `transferRunesResult` object with the transaction ID.

> If the requested transfer requires a Runestone whose size exceeds the `OP_RETURN` payload limit of 80 bytes, `runes_transfer` will return an error.
