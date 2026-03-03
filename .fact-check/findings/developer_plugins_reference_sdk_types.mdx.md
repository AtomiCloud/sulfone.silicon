<!-- source: content/docs/developer/plugins/reference/sdk/types.mdx -->
# File: content/docs/developer/plugins/reference/sdk/types.mdx

> Documents the type definitions for the CyanPrint plugin SDK, including PluginInput, PluginOutput, PluginHandler, and StartPluginWithLambda.

### Source Code Inaccuracies

1. **PluginInput type is not publicly exported**
   - **Documented**: `PluginInput` is shown as an importable type from `@atomicloud/cyan-sdk`
   - **Actual**: The SDK exports `CyanPluginInput`, not `PluginInput`. The `PluginInput` type exists internally in `sdks/node/src/domain/plugin/input.ts` but is NOT exported from the main entry point (`main.ts`).
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:183-207` - The export block includes `CyanPluginInput` (line 193) but not `PluginInput`. The internal `PluginInput` is only used within the domain layer.

2. **Usage example uses incorrect import**
   - **Documented**: `import { StartPluginWithLambda, type PluginInput, type PluginOutput } from '@atomicloud/cyan-sdk';`
   - **Actual**: Should be `import { StartPluginWithLambda, type CyanPluginInput, type PluginOutput } from '@atomicloud/cyan-sdk';`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` - Only `CyanPluginInput` is exported. Also confirmed by the e2e test at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1` which does NOT import PluginInput.

3. **LambdaPluginFn uses CyanPluginInput, not PluginInput**
   - **Documented**: `type PluginHandler = (input: PluginInput) => Promise<PluginOutput>;`
   - **Actual**: The actual type is `LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>;`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5` - `type LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>;`

4. **PluginHandler type does not exist in SDK**
   - **Documented**: `type PluginHandler = (input: PluginInput) => Promise<PluginOutput>;` is shown as an SDK type
   - **Actual**: The SDK uses `LambdaPluginFn` as the type name, not `PluginHandler`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:189` - The exported type is `LambdaPluginFn`

5. **Type Guards section uses incorrect import**
   - **Documented**: `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';` (in Type Guards section)
   - **Actual**: This import is correct, but the section references validating `input.config` which comes from the non-existent `PluginInput` type
   - **Evidence**: The code pattern is valid, but relies on the incorrect `PluginInput` naming convention throughout

### Documentation Issues

1. **Type naming inconsistency throughout document**
   - **Problem**: The document consistently uses `PluginInput` when the actual SDK type is `CyanPluginInput`
   - **Location**: Throughout the entire document (lines 14-27, 44-48, 69-70, 83, 123-124, etc.)
   - **Fix**: Replace all occurrences of `PluginInput` with `CyanPluginInput` to match the actual SDK export

2. **Type definition section header is misleading**
   - **Problem**: The "Core Types" section presents `PluginInput`, `PluginOutput`, and `PluginHandler` as the primary types, but only `PluginOutput` is actually exported with that name
   - **Location**: Lines 10-49 (Core Types section)
   - **Fix**: Update to show `CyanPluginInput` instead of `PluginInput`, and `LambdaPluginFn` instead of `PluginHandler`

3. **Usage example would fail at runtime**
   - **Problem**: The "Complete Plugin with Types" example would fail TypeScript compilation because `PluginInput` is not exported from the SDK
   - **Location**: Lines 69-117
   - **Fix**: Update import to use `CyanPluginInput` and update all type annotations accordingly

### Other Problems

1. **Internal vs Public API confusion**
   - **Problem**: The documentation appears to describe internal domain types (`PluginInput` from `domain/plugin/input.ts`) rather than the public API types (`CyanPluginInput` from `domain/core/cyan_script_model.ts`)
   - **Recommendation**: Review the SDK's public API surface in `main.ts` and ensure documentation only covers types that are actually exported to consumers

2. **Missing type documentation**
   - **Problem**: The SDK also exports `ICyanPlugin` interface which is the core plugin interface, but it's not documented
   - **Recommendation**: Consider documenting `ICyanPlugin` for users who want to implement the interface directly rather than using the lambda pattern

## Summary
| Category | Count |
|----------|-------|
| Red | 5 |
| Yellow | 3 |
| Orange | 2 |
