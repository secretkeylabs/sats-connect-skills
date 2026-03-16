---
name: sats-connect-spark-getAddress
description: Retrieve the user's Spark address from their connected wallet for receiving BTC on the Spark layer.
---

# spark_getAddress

Retrieve the user's Spark address from their connected wallet. Spark addresses are used for receiving BTC on the Spark layer.

The app must have first connected to the wallet and obtained account read permissions.

> **Note:** Although the method is commonly referred to as `spark_getAddress`, the actual RPC method name is `spark_getAddresses` (plural).

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("spark_getAddresses", null);

  if (response.status === "success") {
    const sparkAddress = response.result[0];
    console.log("Spark address:", sparkAddress.address);
    console.log("Public key:", sparkAddress.publicKey);
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

Returns an array of Spark address objects with `address` and `publicKey`.
