---
name: sats-connect-spark-flashnet-addLiquidity
description: Add liquidity to an existing Flashnet pool. (Coming soon)
---

# spark_flashnet_addLiquidity

> This method is coming soon and is not yet available.

Add liquidity to an existing Flashnet pool. The user will be prompted to approve the liquidity addition.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("spark_flashnet_addLiquidity", {
  poolId: "POOL_ID",
  amountA: 5000,
  amountB: 2500,
});

if (response.status === "success") {
  console.log("Liquidity added:", response.result);
} else {
  console.error(response.error);
}
```
