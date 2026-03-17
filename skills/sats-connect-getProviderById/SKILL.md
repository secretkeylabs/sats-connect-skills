---
name: sats-connect-getProviderById
description: Select a specific wallet provider by its unique identifier for targeted RPC calls.
---

# getProviderById

Select a specific wallet provider by its unique identifier. Useful when multiple wallet providers are installed and you want to target a specific one.

This is a utility function, not an RPC method. Import `getProviderById` directly from `sats-connect`.

## Usage Example

```ts
import { getProviderById, type Provider } from "sats-connect";

const provider: Provider | undefined = getProviderById(
  "XverseProviders.BitcoinProvider",
);

if (provider) {
  console.log("Found provider:", provider.name);
}
```

## Response

Returns the matching `Provider` object, or `undefined` if the specified provider is not found.
