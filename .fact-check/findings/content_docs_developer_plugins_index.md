<!-- source: content/docs/developer/plugins/index.mdx -->

# 📄 File: content/docs/developer/plugins/index.mdx

> Overview page for Plugin Development documentation. Describes plugin architecture, capabilities, and provides a quick example with learning path links. The documentation is generally accurate but contains type naming inconsistencies and minor code example issues.

### 🔴 Source Code Inaccuracies

1. **`PluginInput` type is not exported from SDK**

   - **Documented**: The Components table (line 41) lists `PluginInput` as a component. The Quick Example (lines 107-125) and linked reference docs suggest using `PluginInput`.
   - **Actual**: The SDK exports `CyanPluginInput`, not `PluginInput`. While `PluginInput` exists internally in `helium/sdks/node/src/domain/plugin/input.ts`, it is NOT exported from `main.ts`. The actual exported type is `CyanPluginInput`.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` - The export block includes `CyanPluginInput` but not `PluginInput`

2. **Type naming mismatch between SDK and documentation**

   - **Documented**: Documentation consistently uses `PluginInput` and `PluginOutput` as the type names
   - **Actual**: The SDK exports `CyanPluginInput` (not `PluginInput`) and `PluginOutput`. Real plugins in the codebase only import `PluginOutput`:
     ```ts
     import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';
     ```
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/index.ts:1`

3. **Dockerfile version mismatch in tutorials**
   - **Documented**: First Plugin tutorial shows `FROM oven/bun:1.1.31` (lines 82, 99 in first-plugin.mdx)
   - **Actual**: Real plugin Dockerfiles in the codebase use `FROM oven/bun:1.0.11`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/Dockerfile:1`

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

4. **CyanConfig type does not exist in SDK**
   - **Problem**: The execution-order.mdx (linked from learning path) mentions "Template returns `CyanConfig` with processors and plugins" but this type does not exist in the SDK. The actual return type from the template is `Cyan`.
   - **Location**: Referenced from index.mdx learning path -> execution-order.mdx
   - **Fix**: Update to use `Cyan` type instead of `CyanConfig`

### 🟠 Other Problems

1. **Port 5552 not mentioned in overview**

   - **Problem**: While the reference docs mention port 5552, the overview doesn't mention that plugins run an HTTP server internally on this port
   - **Recommendation**: Consider adding a brief note that plugins run an HTTP server on port 5552 for communication with CyanPrint, as this is confirmed in the source code at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:65`

2. **Dockerfile version should be updated**

   - **Problem**: Documentation shows `oven/bun:1.1.31` but actual plugins use `oven/bun:1.0.11`. While newer versions are generally better, this inconsistency could cause confusion
   - **Recommendation**: Either align documentation with actual plugin implementations or update the plugin implementations to match the documented version

3. **LambdaPluginFn type shows correct input type**
   - **Problem**: The `LambdaPluginFn` type in the SDK uses `CyanPluginInput` as the parameter type (not `PluginInput`), which is correct. Documentation should align with this.
   - **Recommendation**: Update documentation examples to reflect that the input parameter type is `CyanPluginInput`

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 4     |
| 🟠       | 3     |
