---
name: sats-connect-stx-deployContract
description: Deploy a Clarity smart contract to the Stacks blockchain through the user's wallet.
---

# stx_deployContract

Deploy a Clarity smart contract to the Stacks blockchain through the user's wallet. The user will be prompted to approve and sign the deployment transaction.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("stx_deployContract", {
    name: "my-contract",
    clarityCode: `
      (define-data-var counter uint u0)
      (define-public (increment)
        (begin
          (var-set counter (+ (var-get counter) u1))
          (ok (var-get counter))
        )
      )
    `,
    clarityVersion: "3",
  });

  if (response.status === "success") {
    console.log("Transaction ID:", response.result.txid);
  } else {
    if (response.error.code === RpcErrorCode.USER_REJECTION) {
      // handle user cancellation
    } else {
      // handle error
    }
  }
} catch (err) {
  console.error(err);
}
```

## Response

Returns a `DeployContractResult` object with the transaction ID (`txid`) and the signed `transaction` hex.
