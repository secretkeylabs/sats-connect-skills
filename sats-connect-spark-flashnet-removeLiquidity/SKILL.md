---
name: sats-connect-spark-flashnet-removeLiquidity
description: Remove liquidity from a Flashnet pool. (Coming soon)
---

# spark_flashnet_removeLiquidity

> This method is coming soon and is not yet available.

Remove liquidity from a Flashnet pool, withdrawing your share of the pool's assets. The user will be prompted to approve the withdrawal.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("spark_flashnet_removeLiquidity", {
  poolId: "POOL_ID",
  lpTokenAmount: 1000,
});

if (response.status === "success") {
  console.log("Liquidity removed:", response.result);
} else {
  console.error(response.error);
}
```
