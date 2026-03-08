<!-- source: content/docs/developer/plugins/reference/sdk/types.mdx -->
# 📄 File: content/docs/developer/plugins/reference/sdk/types.mdx

> This file documents the type definitions for the CyanPrint plugin SDK. All documented types match the actual SDK exports from `@atomicloud/cyan-sdk`.

### 🔴 Source Code Inaccuracies
None found. All type definitions are accurate.

### 🟡 Documentation Issues

1. **Minor naming inconsistency in related input-output.mdx** | Location: N/A (related file) | Fix: The related file `input-output.mdx` uses `PluginInput` as the interface name, but the actual SDK type is `CyanPluginInput`. This file correctly uses `CyanPluginInput`. Consider ensuring consistency across documentation or noting that both names may appear.

2. **Example uses spread operator without explanation** | Location: Lines 86-94 (Usage Example) | Fix: The code `...(input.config as Partial<GitSetupConfig>)` could benefit from a brief comment explaining that this spreads the partial config to override defaults.

### 🟠 Other Problems
None identified.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 2 |
| 🟠 | 0 |

## Verification Details

### Types Verified Against Source
All type definitions were verified against `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium.../node_modules/@atomicloud/cyan-sdk/dist/main.d.ts`:

| Documented Type | SDK Actual | Match |
|-----------------|------------|-------|
| `CyanPluginInput.directory: string` | `directory: string` | ✓ |
| `CyanPluginInput.config: unknown` | `config: unknown` | ✓ |
| `PluginOutput.directory: string` | `directory: string` | ✓ |
| `LambdaPluginFn` signature | `(input: CyanPluginInput) => Promise<PluginOutput>` | ✓ |
| `StartPluginWithLambda` function | `function StartPluginWithLambda(f: LambdaPluginFn): void` | ✓ |
| Port 5552 | `helium/sdks/node/src/main.ts:65`: `const port = 5552;` | ✓ |
