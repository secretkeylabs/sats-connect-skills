---
name: sats-connect-signMultipleTransactions
description: Request signing of multiple PSBTs in a single request. This is an Xverse custom method using the legacy callback API.
---

# signMultipleTransactions

> This is an Xverse custom method. It can only be invoked for users using the Xverse wallet.

Request signing of multiple PSBTs at once. This method uses the legacy callback-based API.

## Usage Example

```ts
import { signMultipleTransactions } from "sats-connect";

const psbtsBase64 = [psbt1Base64, psbt2Base64];

await signMultipleTransactions({
  payload: {
    network: {
      type: network,
    },
    message: "Sign Transaction",
    psbts: [
      {
        psbtBase64: psbtsBase64[0],
        inputsToSign: [
          {
            address: paymentAddress,
            signingIndexes: [0],
            sigHash: btc.SignatureHash.SINGLE | btc.SignatureHash.ANYONECANPAY,
          },
          {
            address: ordinalsAddress,
            signingIndexes: [1],
            sigHash: btc.SignatureHash.SINGLE | btc.SignatureHash.ANYONECANPAY,
          },
        ],
      },
      {
        psbtBase64: psbtsBase64[1],
        inputsToSign: [
          {
            address: paymentAddress,
            signingIndexes: [0],
            sigHash: btc.SignatureHash.SINGLE | btc.SignatureHash.ANYONECANPAY,
          },
          {
            address: ordinalsAddress,
            signingIndexes: [1],
            sigHash: btc.SignatureHash.SINGLE | btc.SignatureHash.ANYONECANPAY,
          },
        ],
      },
    ],
  },
  onFinish: (response) => {
    console.log("Bulk tx signing response:", response);
  },
  onCancel: () => alert("Canceled"),
});
```
