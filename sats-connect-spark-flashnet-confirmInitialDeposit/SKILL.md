---
name: sats-connect-spark-flashnet-confirmInitialDeposit
description: Confirm the initial deposit for a newly created Flashnet liquidity pool. (Coming soon)
---

# spark_flashnet_confirmInitialDeposit

> This method is coming soon and is not yet available.

Confirm the initial deposit for a newly created Flashnet liquidity pool. The user will be prompted to approve the deposit confirmation.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("spark_flashnet_confirmInitialDeposit", {
  poolId: "POOL_ID",
});

if (response.status === "success") {
  console.log("Initial deposit confirmed:", response.result);
} else {
  console.error(response.error);
}
```
