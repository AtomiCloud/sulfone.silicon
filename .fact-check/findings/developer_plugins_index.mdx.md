# 📄 File: content/docs/developer/plugins/index.mdx

> Overview page for Plugin Development documentation. Describes plugin architecture, capabilities, and provides a quick example with learning path links.

### 🔴 Source Code Inaccuracies

1. **`PluginInput` type is not exported from SDK**
   - **Documented**: The Components table lists `PluginInput` as a component available from the system (line 41)
   - **Actual**: The SDK exports `CyanPluginInput`, not `PluginInput`. While `PluginInput` exists internally in `helium/sdks/node/src/domain/plugin/input.ts`, it is NOT exported from `main.ts`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:183-207` - The export block includes `CyanPluginInput` but not `PluginInput`

2. **Quick Example uses incorrect import for type annotation**
   - **Documented**: The quick example (lines 107-125) destructures `input` but doesn't explicitly import types. However, linked reference docs suggest importing `PluginInput`
   - **Actual**: Real plugins in the codebase use `PluginOutput` only and don't import `PluginInput`:
     ```ts
     import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';
     ```
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/index.ts:1`

### 🟡 Documentation Issues

1. **Type naming inconsistency across documentation**
   - **Problem**: The index.mdx table mentions `PluginInput` and `PluginOutput` as components, but the actual exported type from the SDK is `CyanPluginInput`. This creates confusion because:
     - SDK exports: `CyanPluginInput`, `PluginOutput`
     - Documentation uses: `PluginInput`, `PluginOutput`
   - **Location**: Line 41 (Components table)
   - **Fix**: Either update documentation to use `CyanPluginInput` or request SDK to export `PluginInput` as an alias

2. **Linked reference docs perpetuate type naming error**
   - **Problem**: The referenced `/developer/plugins/reference/sdk/input-output.mdx` documents `PluginInput` interface but users cannot import it as shown
   - **Location**: Line 87 (link to PluginInput/Output reference)
   - **Fix**: Update reference docs to show `CyanPluginInput` as the actual type name, or note that it's the parameter type inferred from the lambda signature

3. **Linked types.mdx shows unimportable type**
   - **Problem**: The types.mdx shows `import { StartPluginWithLambda, type PluginInput, type PluginOutput }` but `PluginInput` cannot be imported
   - **Location**: Line 88 (link to Type Definitions)
   - **Fix**: Update to use `CyanPluginInput` or remove the import example

### 🟠 Other Problems

1. **Missing import statement in Quick Example**
   - **Problem**: The quick example (lines 107-125) doesn't show the `import { $ } from 'bun'` statement, but uses `$` for shell commands
   - **Recommendation**: Add the bun import to make the example complete and runnable:
     ```ts
     import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';
     import { $ } from 'bun';
     ```

2. **Port 5552 not documented in index**
   - **Problem**: While the reference docs mention port 5552, the overview doesn't mention that plugins run an HTTP server internally
   - **Recommendation**: Consider adding a brief note that plugins run an HTTP server on port 5552 for communication with CyanPrint

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 3 |
| 🟠 | 2 |
