---
name: sats-connect-runes-estimateRbfOrder
description: Estimate the cost of speeding up a Rune mint or etch order using Replace-by-Fee (RBF).
---

# runes_estimateRbfOrder

Estimate the cost of speeding up a Rune mint or etch order using the Replace-by-Fee (RBF) mechanism. This method does not trigger any operation or prompt the user.

> Currently only supports Etch orders; Mint order support coming soon.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("runes_estimateRbfOrder", {
  id: "ORDER_ID",
  newFeeRate: 500,
});

if (response.status === "success") {
  console.log("RBF amount:", response.result.rbfAmount);
  console.log("Funding address:", response.result.fundingAddress);
} else {
  console.error(response.error);
}
```

## Response

Returns an `EstimateRbfOrderResponse` object with the additional cost of speeding up the order.
