---
name: sats-connect-wallet-openReceive
description: Open the wallet's receive screen, allowing the user to view their address and QR code for receiving funds.
---

# wallet_openReceive

Open the wallet's receive screen. This allows the user to view their address and QR code for receiving funds.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("wallet_openReceive", null);

if (response.status === "success") {
  console.log("Receive screen opened:", response.result);
} else {
  console.error(response.error);
}
```
