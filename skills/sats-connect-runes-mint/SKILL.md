---
name: sats-connect-runes-mint
description: Execute a Rune mint order and prompt the user to sign the funding transaction.
---

# runes_mint

Execute a Rune mint order and prompt the user to sign the funding transaction required to process the order.

Use `runes_estimateMint` to estimate costs before executing.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("runes_mint", {
  destinationAddress: ordinalsAddress,
  feeRate: 12,
  repeats: 1,
  runeName: "UNCOMMONGOODS",
  refundAddress: paymentAddress,
});

if (response.status === "success") {
  console.log("Fund TX ID:", response.result.fundTransactionId);
  console.log("Order ID:", response.result.orderId);
} else {
  console.error(response.error);
}
```

## Response

Returns a `RunesMintResponse` object with `orderId` and `fundTransactionId`. Track the order status with `runes_getOrder`.
