---
name: sats-connect-runes-rbfOrder
description: Speed up a Rune mint or etch order by replacing stuck transactions at a higher fee rate using RBF.
---

# runes_rbfOrder

Speed up a Rune mint or etch order using the Replace-by-Fee (RBF) mechanism. Prompts the user to sign a funding transaction at an increased fee rate.

> Currently only supports Etch orders; Mint order support coming soon.

Use `runes_estimateRbfOrder` to estimate costs before executing.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("runes_rbfOrder", {
  id: "ORDER_ID",
  newFeeRate: 500,
});

if (response.status === "success") {
  console.log("RBF Fund TX:", response.result.fundRBFTransactionId);
} else {
  console.error(response.error);
}
```

## Response

Returns an `RBFOrderResponse` object with the `fundRBFTransactionId`. Track the order with `runes_getOrder`.
