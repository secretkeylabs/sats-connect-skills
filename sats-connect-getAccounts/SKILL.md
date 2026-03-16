---
name: sats-connect-getAccounts
description: "Legacy method to connect to the user's wallet and get account data. Superseded by wallet_connect."
---

# getAccounts (Legacy)

> **Deprecated.** Use `wallet_connect` instead. This legacy method is preserved for backward compatibility.

Connect to the user's wallet and retrieve account data, including Bitcoin and Stacks addresses.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("getAccounts", {
    purposes: ["payment", "ordinals"],
    message: "Connect to My App",
  });

  if (response.status === "success") {
    console.log(response.result);
  } else {
    if (response.error.code === RpcErrorCode.USER_REJECTION) {
      // handle user cancellation
    } else {
      // handle error
    }
  }
} catch (err) {
  console.error(err);
}
```

## Response

Returns an array of address objects with `address`, `publicKey`, `purpose`, and `addressType`.
