---
name: sats-connect-ord-sendInscriptions
description: Request inscription transfers from the user's connected wallet's ordinal address.
---

# ord_sendInscriptions

Request inscription transfers from the user's connected wallet's ordinal address. You can request multiple transfers in a single request.

Each transfer specifies an `inscriptionId` and recipient `address`.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("ord_sendInscriptions", {
    transfers: [
      {
        inscriptionId:
          "22e63b19dede2882b2478f7182aa4ea8cd4a8289acd7a7d5dde96fcaaf4cd089i0",
        address: recipientAddress1,
      },
      {
        inscriptionId:
          "9a83420dbe566531114066a03d8022425064a78992710fab7006948eaa1d3546i0",
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

Returns a `sendInscriptionsResult` object with the transaction ID (`txid`).
