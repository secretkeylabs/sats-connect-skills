---
name: sats-connect-wallet-openEarn
description: Open the wallet's earn flow, enabling the user to earn yield on their BTC. (Coming soon)
---

# wallet_openEarn

> This method is coming soon and is not yet available.

Open the wallet's built-in earn flow, enabling the user to participate in BTC earning opportunities.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("wallet_openEarn", null);

if (response.status === "success") {
  console.log("Earn flow opened:", response.result);
} else {
  console.error(response.error);
}
```
