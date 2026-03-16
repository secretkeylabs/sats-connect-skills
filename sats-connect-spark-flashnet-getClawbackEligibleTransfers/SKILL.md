---
name: sats-connect-spark-flashnet-getClawbackEligibleTransfers
description: Check for pending Flashnet transfers that are eligible for clawback recovery.
---

# spark_flashnet_getClawbackEligibleTransfers

Check for pending Flashnet transfers that are eligible for clawback recovery. This allows users to identify and recover funds from transfers that have not been claimed by the recipient.

## Usage Example

```ts
import { request } from "sats-connect";

const response = await request(
  "spark_flashnet_getClawbackEligibleTransfers",
  null,
);

if (response.status === "success") {
  console.log("Eligible transfers:", response.result);
} else {
  console.error(response.error);
}
```

## Response

Returns an array of transfer objects that are eligible for clawback.
