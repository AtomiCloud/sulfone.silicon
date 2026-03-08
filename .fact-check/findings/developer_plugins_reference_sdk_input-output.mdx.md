<!-- source: content/docs/developer/plugins/reference/sdk/input-output.mdx -->
# 📄 File: content/docs/developer/plugins/reference/sdk/input-output.mdx

> Documentation for Plugin Input/Output types. The type name `PluginInput` used throughout this document is incorrect - the SDK exports `CyanPluginInput`. The interface structure and `PluginOutput` are correct.

### 🔴 Source Code Inaccuracies

1. **Type Name: `PluginInput` vs `CyanPluginInput`**
   - Documented: `PluginInput` (used throughout the document)
   - Actual: `CyanPluginInput`
   - Evidence: `helium/sdks/node/src/main.ts:193` exports `CyanPluginInput`, not `PluginInput`. The internal type `PluginInput` in `helium/sdks/node/src/domain/plugin/input.ts:1-6` is NOT exported from the SDK's main entry point.

2. **Import Statement in Examples**
   - Documented: `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';` (implies using `PluginInput`)
   - Actual: Should be `import { StartPluginWithLambda, type CyanPluginInput } from '@atomicloud/cyan-sdk';`
   - Evidence: `helium/sdks/node/src/main.ts:183-207` shows the actual exported types. Only `CyanPluginInput` is exported (line 193).

3. **Interface Definition Section**
   - Documented: `interface PluginInput { directory: string; config: unknown; }`
   - Actual: The exported interface is `CyanPluginInput` with the same structure
   - Evidence: `helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` shows `CyanPluginInput` interface definition.

4. **Property Table References**
   - Documented: Uses `PluginInput` in section headers
   - Actual: Should use `CyanPluginInput`
   - Evidence: Same as above.

### 🟡 Documentation Issues

1. **Inconsistent Type Naming Across Docs**
   - Problem: The related docs (`start-plugin.mdx` and `types.mdx`) correctly use `CyanPluginInput`, but this document uses `PluginInput`
   - Location: Entire document (title, interface definitions, tables, code examples)
   - Fix: Replace all occurrences of `PluginInput` with `CyanPluginInput` to match the SDK exports and sibling documentation files

2. **Missing Type Import in Examples**
   - Problem: Code examples don't show importing the input type, which would fail if users try to type their handlers
   - Location: "Usage" section (lines 38-47) and "Full Example" (lines 160-213)
   - Fix: Add `type CyanPluginInput` to the import statement

3. **Misleading Section Header**
   - Problem: Section "## PluginInput" implies this is the exported type name
   - Location: Line 10
   - Fix: Change to "## CyanPluginInput"

### 🟠 Other Problems

1. **Internal Type Name Collision**
   - Problem: There is an internal `PluginInput` type in `helium/sdks/node/src/domain/plugin/input.ts` that is NOT exported, which could cause confusion
   - Recommendation: Either export `PluginInput` as an alias for `CyanPluginInput`, or rename the internal type to avoid confusion

2. **API Endpoint Comment Inconsistency**
   - Problem: The `start-plugin.mdx` document mentions "POST /api/plug with PluginInput" in the "How It Works" section (line 89), which should also be `CyanPluginInput` for consistency
   - Recommendation: Cross-check all plugin documentation for consistent type naming

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 3 |
| 🟠 | 2 |
