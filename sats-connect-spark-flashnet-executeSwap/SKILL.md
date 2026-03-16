---
name: sats-connect-spark-flashnet-executeSwap
description: Execute a token swap on the Flashnet. (Coming soon)
---

# spark_flashnet_executeSwap

> This method is coming soon and is not yet available.

Execute a token swap on the Flashnet. The user will be prompted to approve the swap.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("spark_flashnet_executeSwap", {
  tokenIn: tokenInPublicKey,
  tokenOut: tokenOutPublicKey,
  amountIn: 1000,
});

if (response.status === "success") {
  console.log("Swap result:", response.result);
} else {
  console.error(response.error);
}
```
