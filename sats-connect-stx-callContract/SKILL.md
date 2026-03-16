---
name: sats-connect-stx-callContract
description: Request a smart contract function call on the Stacks blockchain through the user's wallet.
---

# stx_callContract

Request a Stacks smart contract function call through the user's wallet. The user will be prompted to approve and sign the transaction.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("stx_callContract", {
    contract: "SP000000000000000000002Q6VF78.pox-4",
    functionName: "stack-stx",
    functionArgs: ["u1000000000", "(tuple (hashbytes 0x00) (version 0x00))"],
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

Returns a `CallContractResult` object with the transaction ID (`txid`) and the signed `transaction` hex.
