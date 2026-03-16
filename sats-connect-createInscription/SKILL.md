---
name: sats-connect-createInscription
description: Request the creation of an inscription via the user's wallet. This is an Xverse custom method using the legacy callback API.
---

# createInscription

> This is an Xverse custom method. It can only be invoked for users using the Xverse wallet.

Request the creation of an inscription via the user's wallet. The inscription transaction will originate from the user's wallet address and the inscribed sats will appear directly in the user's ordinals address. Supports both text and file inscriptions.

You can optionally charge a fee using `appFee` and `appFeeAddress` parameters.

## Usage Example — Text Inscription

```ts
import { createInscription } from "sats-connect";

await createInscription({
  payload: {
    network: {
      type: network,
    },
    contentType: "text/html",
    content: "My inscription text",
    payloadType: "PLAIN_TEXT",
    appFeeAddress: "2NEYt8s1QPVmTmFTefMLidtmy66ZoqfSz7n",
    appFee: 1500,
    suggestedMinerFeeRate: 10,
  },
  onFinish: (response) => {
    console.log("Transaction ID:", response.txId);
  },
  onCancel: () => alert("Canceled"),
});
```

## Usage Example — Image Inscription

```ts
import { createInscription } from "sats-connect";

await createInscription({
  payload: {
    network: {
      type: network,
    },
    contentType: "image/jpeg",
    content: base64EncodedImage,
    payloadType: "BASE_64",
  },
  onFinish: (response) => {
    console.log("Transaction ID:", response.txId);
  },
  onCancel: () => alert("Canceled"),
});
```
