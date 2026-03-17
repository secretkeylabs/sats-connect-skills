---
name: sats-connect-spark-flashnet-getJWT
description: Request a Flashnet JSON Web Token (JWT) from the user's wallet, used to authenticate with Flashnet services.
---

# spark_flashnet_getJWT

Request a Flashnet JSON Web Token (JWT) from the user's wallet. The JWT is used to authenticate with Flashnet services.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("spark_flashnet_getJWT", null);

  if (response.status === "success") {
    console.log("JWT:", response.result.jwt);
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

Returns an object containing the Flashnet `jwt` token.
