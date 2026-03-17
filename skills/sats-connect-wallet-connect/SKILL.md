---
name: sats-connect-wallet-connect
description: Connect your app to the user's Xverse wallet using wallet_connect, which grants read permissions and returns account data like addresses and network info.
---

# wallet_connect

Connect your app to the user's Xverse wallet. This method grants read permissions on the account selected by the user and returns commonly used data about the account, such as addresses and current network.

You can optionally specify:

- Which wallet addresses you require (Bitcoin ordinals, Bitcoin payment, Spark, Starknet, or Stacks) using the `addresses` request parameter.
- A custom connection `message` to show the user.
- The `network` the wallet should use.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("wallet_connect", null);
  if (response.status === "success") {
    const paymentAddressItem = response.result.addresses.find(
      (address) => address.purpose === "payment",
    );
    const ordinalsAddressItem = response.result.addresses.find(
      (address) => address.purpose === "ordinals",
    );
    const stacksAddressItem = response.result.addresses.find(
      (address) => address.purpose === "stacks",
    );
    console.log("Connected:", response.result);
  } else {
    if (response.error.code === RpcErrorCode.USER_REJECTION) {
      // handle user cancellation error
    } else {
      // handle error
    }
  }
} catch (err) {
  console.error(err);
}
```

## Response

On success, returns an object with:

- `addresses` — array of address objects, each containing `address`, `publicKey`, `purpose`, and `addressType`.
- `network` — the network configuration for Bitcoin and Stacks.
