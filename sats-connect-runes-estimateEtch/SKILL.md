---
name: sats-connect-runes-estimateEtch
description: Estimate the cost of a Rune etch order before executing it.
---

# runes_estimateEtch

Estimate the cost of a Rune etch order for the user before executing it. This method does not trigger any etch operation or prompt the user to sign.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("runes_estimateEtch", {
  runeName: "MYRUNENAME",
  premine: "1000000",
  isMintable: true,
  destinationAddress: ordinalsAddress,
});

if (response.status === "success") {
  console.log("Total cost:", response.result.totalCost);
  console.log("Total size:", response.result.totalSize);
} else {
  console.error(response.error);
}
```

## Response

Returns an `EstimateEtchResponse` object with cost breakdown fields.
