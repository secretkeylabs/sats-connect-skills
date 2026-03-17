---
name: sats-connect-stx-getAccounts
description: Retrieve the user's Stacks (STX) account addresses from their connected wallet.
---

# stx_getAccounts

Retrieve the user's Stacks account addresses from their connected wallet.

The app must have first connected to the wallet and obtained account read permissions.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("stx_getAccounts", null);

  if (response.status === "success") {
    const account = response.result[0];
    console.log("STX address:", account.address);
    console.log("Public key:", account.publicKey);
  } else {
    if (response.error.code === RpcErrorCode.USER_REJECTION) {
      // handle user cancellation error
    } else {
      // handle error
    }
  }
} catch (err) {
  console.error(err);
}
```

## Response

Returns `GetAccountResult`: an array of account objects with `address`, `publicKey`, and other account information.
