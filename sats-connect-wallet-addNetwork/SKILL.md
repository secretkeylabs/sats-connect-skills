---
name: sats-connect-wallet-addNetwork
description: Request adding a new custom network to the user's wallet. The user will be prompted to approve the network addition.
---

# wallet_addNetwork

Request adding a new custom network to the user's wallet. The user will be prompted to approve the network addition.

Note: Custom network details (like name and URL) must be provided in the request.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("wallet_addNetwork", {
  name: "CustomSignet",
  url: "https://custom-signet-node.example.com",
});

if (response.status === "success") {
  console.log("Network added:", response.result);
} else {
  console.error(response.error);
}
```

## Response

Returns information about the added network on success.
