---
name: sats-connect-spark-getBalance
description: Retrieve the user's Spark BTC balance from their connected wallet.
---

# spark_getBalance

Retrieve the user's Spark BTC balance from their connected wallet.

The app must have first connected to the wallet and obtained account read permissions. No query parameters are required.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("spark_getBalance", null);

if (response.status === "success") {
  console.log("Spark balance:", response.result);
} else {
  console.error(response.error);
}
```

## Response

Returns an object representing the user's Spark BTC balance.
