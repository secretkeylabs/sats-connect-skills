---
name: sats-connect-spark-flashnet-createBondingPool
description: Create a bonding curve liquidity pool on the Flashnet. (Coming soon)
---

# spark_flashnet_createBondingPool

> This method is coming soon and is not yet available.

Create a bonding curve liquidity pool on the Flashnet. The user will be prompted to approve the pool creation.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("spark_flashnet_createBondingPool", {
  token: tokenPublicKey,
  initialSupply: 1000000,
});

if (response.status === "success") {
  console.log("Bonding pool created:", response.result);
} else {
  console.error(response.error);
}
```
