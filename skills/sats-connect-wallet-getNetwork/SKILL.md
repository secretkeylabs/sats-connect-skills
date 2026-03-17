---
name: sats-connect-wallet-getNetwork
description: Retrieve the currently active Bitcoin and Stacks network (mainnet, testnet, etc.) from the user's wallet.
---

# wallet_getNetwork

Retrieve the currently active network from the user's wallet. Returns the Bitcoin and Stacks network configuration.

The app must have first connected to the wallet and obtained account read permissions.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("wallet_getNetwork", null);

if (response.status === "success") {
  console.log(response.result);
} else {
  console.error(response.error);
}
```

## Response

Returns a `GetNetworkResult` object with the currently active Bitcoin and Stacks network configuration.
