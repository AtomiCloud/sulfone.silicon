# 📄 File: content/docs/developer/plugins/reference/sdk/input-output.mdx

> Documentation for Plugin Input/Output types used with the `StartPluginWithLambda` function from `@atomicloud/cyan-sdk`.

### 🔴 Source Code Inaccuracies

1. **PluginInput type name is incorrect**
   - **Documented**: `interface PluginInput` as a type imported/used from `@atomicloud/cyan-sdk`
   - **Actual**: The SDK exports `CyanPluginInput`, not `PluginInput`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` exports `CyanPluginInput`, and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5` defines `LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>`
   - **Impact**: All code examples showing `import { ... PluginInput ... } from '@atomicloud/cyan-sdk'` will fail because `PluginInput` is not exported

2. **LambdaPluginFn input type mismatch**
   - **Documented**: Documentation implies the lambda function receives `PluginInput`
   - **Actual**: `LambdaPluginFn` receives `CyanPluginInput`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5`: `type LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>`

3. **PluginInput exists but is internal**
   - **Documented**: `PluginInput` appears to be a public SDK type
   - **Actual**: `PluginInput` exists in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts` but is NOT exported from `main.ts`. It's an internal type used by the service layer.
   - **Evidence**: Compare `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts` (PluginInput) with the exports at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:183-207` (only `CyanPluginInput` is exported)

### 🟡 Documentation Issues

1. **Incorrect import statement in Usage example**
   - **Problem**: The Usage section shows importing `StartPluginWithLambda` from `@atomicloud/cyan-sdk` without any type imports, which is correct. However, the related types.mdx file shows `import { StartPluginWithLambda, type PluginInput, type PluginOutput }` which is incorrect since `PluginInput` is not exported.
   - **Location**: Lines 38-47 (Usage section) and cross-referenced types.mdx
   - **Fix**: Either update SDK to export `PluginInput` as an alias for `CyanPluginInput`, or update all documentation to use `CyanPluginInput`

2. **Type definition shown is not the actual exported type**
   - **Problem**: The documentation shows `interface PluginInput { ... }` but users will need to use `CyanPluginInput` when importing from the SDK
   - **Location**: Lines 16-21 (Definition section)
   - **Fix**: Either rename to `CyanPluginInput` in documentation or add a note that `CyanPluginInput` is the actual exported type

3. **Inconsistent type naming convention**
   - **Problem**: The documentation uses `PluginInput` but the SDK uses `CyanPluginInput`, which may confuse users who try to copy code examples
   - **Location**: Throughout the document
   - **Fix**: Align documentation with actual SDK exports

### 🟠 Other Problems

1. **The code examples may still work due to TypeScript inference**
   - **Problem**: The code examples in input-output.mdx don't explicitly import `PluginInput`, so they may work because TypeScript infers the type from the lambda parameter. However, this creates inconsistency with the types.mdx file which explicitly imports `PluginInput`.
   - **Recommendation**: Ensure all documentation files use consistent type names that match SDK exports

2. **Related documentation file has the same issue**
   - **Problem**: The related file `types.mdx` explicitly imports `PluginInput` which doesn't exist in SDK exports
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/plugins/reference/sdk/types.mdx:70` shows: `import { StartPluginWithLambda, type PluginInput, type PluginOutput } from '@atomicloud/cyan-sdk';`
   - **Recommendation**: Update types.mdx to use `CyanPluginInput` instead of `PluginInput`

3. **Actual e2e test plugins don't use explicit type imports**
   - **Problem**: The real plugins in iridium e2e tests use `PluginOutput` but don't explicitly type the input, relying on inference
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5` uses `async (input): Promise<PluginOutput>` without explicit input type
   - **Recommendation**: Documentation should match real-world usage patterns

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 3 |
| 🟠 | 3 |

### Key Finding
The documentation uses `PluginInput` as the type name, but the SDK actually exports `CyanPluginInput`. While the `PluginInput` interface exists in the codebase at `domain/plugin/input.ts`, it is an internal type that is NOT exported from the main SDK entry point. The public API uses `CyanPluginInput` (defined in `domain/core/cyan_script_model.ts` and exported from `main.ts`).

### Recommended Actions
1. **Option A**: Update SDK to export `PluginInput` as an alias: `export type { CyanPluginInput as PluginInput }`
2. **Option B**: Update all documentation to use `CyanPluginInput` instead of `PluginInput`
3. **Option C**: Document both names and explain the relationship
