---
name: sats-connect-wallet-getAccount
description: Get the user's wallet account information, including the wallet type and account creation method.
---

# wallet_getAccount

Get the user's wallet account information. Returns the wallet type and the account creation method.

The app must have first connected to the wallet and obtained account read permissions.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("wallet_getAccount", null);

if (response.status === "success") {
  console.log(response.result);
} else {
  console.error(response.error);
}
```

## Response

Returns an object with information about how the wallet was created.
