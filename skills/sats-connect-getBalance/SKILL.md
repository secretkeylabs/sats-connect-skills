---
name: sats-connect-getBalance
description: Retrieve the user's Bitcoin balance from their connected wallet's payment address.
---

# getBalance

Retrieve the user's Bitcoin balance (BTC held by their connected wallet's payment address). The app must have first connected to the wallet and obtained account read permissions.

No query parameters are required.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("getBalance", undefined);

if (response.status === "success") {
  console.log(response.result);
} else {
  console.error(response.error);
}
```

## Response

Returns an object representing the connected wallet's payment address BTC holdings.
