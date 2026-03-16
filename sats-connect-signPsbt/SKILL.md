---
name: sats-connect-signPsbt
description: Request the user to sign a Partially Signed Bitcoin Transaction (PSBT) with their Bitcoin wallet addresses.
---

# signPsbt

Request the signature of a Partially Signed Bitcoin Transaction (PSBT) from the user's Bitcoin wallet addresses. The PSBT must be base64-encoded.

You can specify:

- `psbt` — the base64-encoded PSBT.
- `signInputs` — a mapping of addresses to input indexes to sign.
- `broadcast` — whether to finalize and broadcast after signing.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("signPsbt", {
    psbt: psbtBase64,
    signInputs: {
      [paymentAddress]: [0],
      [ordinalsAddress]: [1, 2],
    },
  });

  if (response.status === "success") {
    // response.result contains the signed PSBT
    console.log(response.result);
  } else {
    if (response.error.code === RpcErrorCode.USER_REJECTION) {
      // handle user request cancellation
    } else {
      // handle error
    }
  }
} catch (err) {
  console.error(err);
}
```

## Response

Returns a `SignPsbtResult` object with the signed PSBT. If `broadcast` was set to `true`, the transaction is also finalized and broadcast.
