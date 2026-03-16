---
name: sats-connect-runes-estimateMint
description: Estimate the cost of a Rune mint order before executing it.
---

# runes_estimateMint

Estimate the cost of a Rune mint order for the user before executing it. This method does not trigger any mint operation or prompt the user to sign.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("runes_estimateMint", {
  destinationAddress: ordinalsAddress,
  feeRate: 12,
  repeats: 1,
  runeName: "UNCOMMONGOODS",
});

if (response.status === "success") {
  console.log("Total cost:", response.result.totalCost);
  console.log("Total size:", response.result.totalSize);
} else {
  console.error(response.error);
}
```

## Response

Returns an `EstimateMintResponse` object with `totalCost` and `totalSize` among other cost breakdown fields.
