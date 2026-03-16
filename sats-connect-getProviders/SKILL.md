---
name: sats-connect-getProviders
description: Detect installed wallet providers that support the WBIP-004 Wallet Provider standard, returning an array of available wallet providers.
---

# getProviders

Detect installed wallet providers that support the WBIP-004 Wallet Provider standard. Returns an array of available wallet providers.

This is a utility function, not an RPC method. Import `getProviders` directly from `sats-connect`.

## Usage Example

```ts
import { getProviders, type Provider } from "sats-connect";

const providers: Provider[] = getProviders();
providers.forEach((provider) => {
  console.log("Provider:", provider.name);
});
```

## Response

Returns an array of `Provider` objects representing available wallet providers.
