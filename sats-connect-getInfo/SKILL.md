---
name: sats-connect-getInfo
description: Retrieve information about the wallet provider, including the provider name, version, supported methods, and supported address purposes.
---

# getInfo

Retrieve information about the wallet provider. Returns useful information such as the name, version, supported methods, and supported address purposes.

This is a utility function, not an RPC method. Import `getInfo` directly from `sats-connect`.

## Usage Example

```ts
import { getInfo, type GetInfoResult } from "sats-connect";

const info: GetInfoResult = await getInfo();
console.log("Provider:", info.name);
console.log("Version:", info.version);
console.log("Methods:", info.methods);
```

## Response

Returns a `GetInfoResult` object containing:

- `name` — the wallet provider name.
- `version` — the wallet provider version.
- `methods` — list of supported RPC methods.
- `supports` — supported address purposes.
