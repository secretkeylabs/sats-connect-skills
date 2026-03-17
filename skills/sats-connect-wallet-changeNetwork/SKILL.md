---
name: sats-connect-wallet-changeNetwork
description: Request the user's wallet to switch to a different network (e.g. from mainnet to testnet).
---

# wallet_changeNetwork

Request the user's wallet to switch to a different network. The user will be prompted to approve the network change.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("wallet_changeNetwork", {
  name: "Testnet4",
});

if (response.status === "success") {
  console.log("Network changed to:", response.result);
} else {
  console.error(response.error);
}
```

## Response

Returns the new network configuration after switching.
