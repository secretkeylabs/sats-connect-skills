---
name: sats-connect-runes-getBalance
description: Retrieve all Rune token balances owned by the user's connected wallet address.
---

# runes_getBalance

Retrieve all Rune token balances owned by the user's connected wallet address.

The app must have first connected to the wallet and obtained account read permissions. No query parameters are required.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("runes_getBalance", null);

if (response.status === "success") {
  console.log(response.result);
} else {
  console.error(response.error);
}
```

## Response

Returns an array of `balance` objects, each representing holdings of a rune token.
