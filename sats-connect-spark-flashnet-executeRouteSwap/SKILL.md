---
name: sats-connect-spark-flashnet-executeRouteSwap
description: Execute a multi-hop token swap on the Flashnet, routing through multiple pools. (Coming soon)
---

# spark_flashnet_executeRouteSwap

> This method is coming soon and is not yet available.

Execute a multi-hop token swap on the Flashnet, routing through multiple pools for optimal pricing. The user will be prompted to approve the swap.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("spark_flashnet_executeRouteSwap", {
  route: [pool1Address, pool2Address],
  amountIn: 1000,
});

if (response.status === "success") {
  console.log("Route swap result:", response.result);
} else {
  console.error(response.error);
}
```
