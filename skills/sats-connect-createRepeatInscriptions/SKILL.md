---
name: sats-connect-createRepeatInscriptions
description: Inscribe the same content multiple times via the user's wallet. This is an Xverse custom method using the legacy callback API.
---

# createRepeatInscriptions

> This is an Xverse custom method. It can only be invoked for users using the Xverse wallet.

Inscribe the same content multiple times via the user's wallet. Particularly useful for BRC-20 mints, allowing multiple token mints in a single request.

You can optionally charge a fee using `appFee` and `appFeeAddress` parameters.

## Usage Example

```ts
import { createRepeatInscriptions } from "sats-connect";

await createRepeatInscriptions({
  payload: {
    network: {
      type: network,
    },
    repeat: 5,
    contentType: "text/plain",
    content: "Repeated inscription content",
    payloadType: "PLAIN_TEXT",
    suggestedMinerFeeRate: 10,
  },
  onFinish: (response) => {
    console.log("Commit TX:", response.txId);
  },
  onCancel: () => alert("Canceled"),
});
```
