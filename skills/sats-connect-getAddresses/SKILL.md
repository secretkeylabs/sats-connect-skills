---
name: sats-connect-getAddresses
description: Retrieve the current account's Bitcoin addresses (payment and ordinals) from the connected wallet.
---

# getAddresses

Request the current account's Bitcoin addresses with `getAddresses`. The app must have first connected to the wallet and obtained account read permissions.

- Apps can specify which wallet addresses they require using the `purposes` request parameter.
- The `message` request param gives apps the option to display a message when requesting addresses.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("getAddresses", null);
  if (response.status === "success") {
    const paymentAddressItem = response.result.find(
      (address) => address.purpose === "payment",
    );
    const ordinalsAddressItem = response.result.find(
      (address) => address.purpose === "ordinals",
    );
    console.log("Addresses:", response.result);
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

Returns `GetAddressResult`: an array of address objects with `address`, `publicKey`, `purpose` (`"payment"` | `"ordinals"`), and `addressType` (`"p2tr"` | `"p2wpkh"` | `"p2sh"`).
