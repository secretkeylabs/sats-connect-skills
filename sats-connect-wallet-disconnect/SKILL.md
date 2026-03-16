---
name: sats-connect-wallet-disconnect
description: Disconnect your app from the user's wallet, clearing all permissions for all wallet accounts.
---

# wallet_disconnect

Disconnect your app from the user's wallet. This method clears the app's permissions for all wallet accounts, effectively disconnecting the user.

Your app will need to connect to the user's account again to fetch account data.

## Usage Example

```ts
import { request } from "sats-connect";

await request("wallet_disconnect", null);
```
