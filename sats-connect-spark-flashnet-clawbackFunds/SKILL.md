---
name: sats-connect-spark-flashnet-clawbackFunds
description: Recover stuck funds from a Flashnet transfer that was not claimed by the recipient.
---

# spark_flashnet_clawbackFunds

Recover stuck funds from a Flashnet transfer that was not claimed by the recipient. The user will be prompted to approve the clawback.

Use `spark_flashnet_getClawbackEligibleTransfers` first to identify eligible transfers.

## Usage Example

```ts
import { request, RpcErrorCode } from "sats-connect";

try {
  const response = await request("spark_flashnet_clawbackFunds", {
    transferId: "TRANSFER_ID",
  });

  if (response.status === "success") {
    console.log("Clawback result:", response.result);
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

Returns a result object with the clawback transaction details.
