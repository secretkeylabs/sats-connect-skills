---
name: sats-connect-ord-getInscriptions
description: Retrieve all inscriptions owned by the user's connected wallet's ordinal address.
---

# ord_getInscriptions

Retrieve all inscriptions owned by the user's connected wallet's ordinal address. The response is paginated for large datasets.

The app must have first connected to the wallet and obtained account read permissions.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request("ord_getInscriptions", undefined);

if (response.status === "success") {
  console.log(response.result);
} else {
  console.error(response.error);
}
```

## Response

Returns an `inscriptions` object detailing the connected ordinal address's inscription holdings.
