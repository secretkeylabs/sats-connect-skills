---
name: sats-connect-runes-getOrder
description: Fetch the status of a Rune mint or etch order.
---

# runes_getOrder

Fetch the status of a Rune mint order or Rune etch order. This method does not trigger any operation or prompt the user.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("runes_getOrder", {
  id: "ORDER_ID",
});

if (response.status === "success") {
  console.log("Order status:", response.result);
} else {
  console.error(response.error);
}
```

## Response

Returns a `GetOrderResponse` object with order status, total cost, and total size details.
