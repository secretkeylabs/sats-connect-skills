---
name: sats-connect-runes-etch
description: Execute a Rune etch order and prompt the user to sign the funding transaction.
---

# runes_etch

Execute a Rune etch order and prompt the user to sign the funding transaction. Sats Connect uses a two-phase commit/reveal procedure to protect etching from front-running.

Use `runes_estimateEtch` to estimate costs before executing.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("runes_etch", {
  runeName: "MYRUNENAME",
  premine: "1000000",
  isMintable: true,
  destinationAddress: ordinalsAddress,
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

Returns a `RunesEtchResponse` object with `orderId` and `fundTransactionId`. Track the order status with `runes_getOrder`.
