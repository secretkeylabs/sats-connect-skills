---
name: sats-connect-wallet-openBuy
description: Open the wallet's buy flow, enabling the user to purchase BTC through the wallet's built-in purchase interface.
---

# wallet_openBuy

Open the wallet's built-in buy flow, enabling the user to purchase BTC through a supported on-ramp.

An `amount` may be specified in `sats`, `btc`, or `usd`, and the `currencyCode` parameter allows specifying a fiat currency.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("wallet_openBuy", {
  amount: { sats: 100000 },
  currencyCode: "USD",
});

if (response.status === "success") {
  console.log("Buy flow opened:", response.result);
} else {
  console.error(response.error);
}
```
