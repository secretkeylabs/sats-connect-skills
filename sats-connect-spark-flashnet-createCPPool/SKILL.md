---
name: sats-connect-spark-flashnet-createCPPool
description: Create a constant product liquidity pool on the Flashnet. (Coming soon)
---

# spark_flashnet_createCPPool

> This method is coming soon and is not yet available.

Create a constant product (x\*y=k) liquidity pool on the Flashnet. The user will be prompted to approve the pool creation.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("spark_flashnet_createCPPool", {
  tokenA: tokenAPublicKey,
  tokenB: tokenBPublicKey,
  amountA: 10000,
  amountB: 5000,
});

if (response.status === "success") {
  console.log("Pool created:", response.result);
} else {
  console.error(response.error);
}
```
