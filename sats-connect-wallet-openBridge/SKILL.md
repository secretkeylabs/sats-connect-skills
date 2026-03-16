---
name: sats-connect-wallet-openBridge
description: Open the wallet's bridge flow, enabling the user to bridge assets between networks.
---

# wallet_openBridge

Open the wallet's built-in bridge flow, enabling the user to bridge assets between networks (e.g., Bitcoin to Stacks).

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("wallet_openBridge", null);

if (response.status === "success") {
  console.log("Bridge flow opened:", response.result);
} else {
  console.error(response.error);
}
```
