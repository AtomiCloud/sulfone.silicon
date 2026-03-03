<!-- source: content/docs/developer/plugins/reference/sdk/start-plugin.mdx -->
# 📄 File: content/docs/developer/plugins/reference/sdk/start-plugin.mdx

> This document describes the StartPluginWithLambda function for CyanPrint plugins. The documentation is generally accurate for the workflow and endpoint details, but contains a critical type naming inconsistency where it uses `PluginInput` instead of the actual exported type `CyanPluginInput`.

### 🔴 Source Code Inaccuracies
1. **Type name mismatch in function signature**
   - Documented: `handler: (input: PluginInput) => Promise<PluginOutput>`
   - Actual: `handler: (input: CyanPluginInput) => Promise<PluginOutput>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5` - `type LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>;`

2. **Exported type name is different**
   - Documented: Type `PluginInput` is available from `@atomicloud/cyan-sdk`
   - Actual: SDK exports `CyanPluginInput`, NOT `PluginInput`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` - exports `CyanPluginInput`, not `PluginInput`

3. **Related documentation files also incorrect**
   - Documented: The input-output.mdx and types.mdx files show importing `PluginInput` from SDK
   - Actual: These files show `import { type PluginInput } from '@atomicloud/cyan-sdk'` which would fail at runtime
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/plugins/reference/sdk/types.mdx:70` shows import of non-existent `PluginInput` type

### 🟡 Documentation Issues
1. **Missing import example for types**
   - Problem: The basic usage example doesn't show how to import types if needed
   - Location: Lines 28-38 (Basic usage section)
   - Fix: Add example showing `import { StartPluginWithLambda, type CyanPluginInput, type PluginOutput } from '@atomicloud/cyan-sdk';` if type annotations are needed

2. **Inconsistent type naming convention**
   - Problem: Documentation uses `PluginInput` but SDK uses `CyanPluginInput` (Cyan prefix)
   - Location: Throughout the document (signature, parameters table)
   - Fix: Either update documentation to use `CyanPluginInput` or add a note explaining the type alias

### 🟠 Other Problems
1. **Cross-file consistency issue**
   - Problem: The types.mdx file shows importing `PluginInput` which doesn't exist in the SDK
   - Recommendation: Audit all SDK documentation files to ensure consistent type naming - either all use `CyanPluginInput` or SDK adds a type alias `PluginInput = CyanPluginInput`

2. **No type alias exists in SDK**
   - Problem: No `PluginInput` type alias exists in the SDK to provide a simpler name
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts:6` has a `PluginInput` but it's internal and not exported from main.ts
   - Recommendation: Consider adding `export type PluginInput = CyanPluginInput;` to the SDK for better developer experience

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 2 |
| 🟠 | 2 |

### Verified Accurate
- Port 5552 is correct (main.ts:65)
- POST /api/plug endpoint is correct (main.ts:68)
- `PluginOutput` type is correctly named and exported
- Handler function signature structure is correct (just type name differs)
- Return value requirement to return `{ directory }` is accurate
- Sequence diagram flow is accurate
