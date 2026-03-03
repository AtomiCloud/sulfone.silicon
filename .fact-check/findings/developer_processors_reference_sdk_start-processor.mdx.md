<!-- source: content/docs/developer/processors/reference/sdk/start-processor.mdx -->
# 📄 File: content/docs/developer/processors/reference/sdk/start-processor.mdx

> Documentation for the `StartProcessorWithLambda` function which is the entry point for CyanPrint processors. Multiple inaccuracies found between documented types/signatures and actual source code implementation.

### 🔴 Source Code Inaccuracies

1. **ProcessorInput property names mismatch**
   - Documented: `readDirectory`, `writeDirectory`
   - Actual: `readDir`, `writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` shows `CyanProcessorInput` has `readDir` and `writeDir`, not `readDirectory` and `writeDirectory`

2. **ProcessorInput type name mismatch**
   - Documented: Handler receives `ProcessorInput` type
   - Actual: Handler receives `CyanProcessorInput` type
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/processor/lambda.ts:6` shows `LambdaProcessorFn = (i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>`

3. **Usage example uses wrong property names**
   - Documented: `input.writeDirectory` in all examples
   - Actual: Should be `input.writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` shows `return { directory: input.writeDir };`

4. **ProcessorInput table documents wrong property names**
   - Documented: `readDirectory`, `writeDirectory`
   - Actual: `readDir`, `writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16`

5. **Default path values may be incorrect**
   - Documented: `readDirectory` defaults to `/workspace/cyanprint/`, `writeDirectory` defaults to `/workspace/output/`
   - Actual: These paths are determined by the caller (CLI), not defined in the SDK types. The SDK only defines these as `string` without default values.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16`

### 🟡 Documentation Issues

1. **Import statement may be incorrect**
   - Problem: Documentation shows `import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk';`
   - Location: Lines 34, 73
   - Fix: Verify the actual package name. The SDK source is in `@atomicloud/cyan-sdk` based on the e2e examples (processor1/index.ts line 1), so this appears correct. However, the package name should be confirmed against package.json.

2. **Signature doesn't match actual TypeScript signature**
   - Problem: Documented signature shows `handler: (input: ProcessorInput, fileHelper: CyanFileHelper)` but actual is `(i: CyanProcessorInput, fileHelper: CyanFileHelper)`
   - Location: Lines 12-16
   - Fix: Update signature to use `CyanProcessorInput` or note that `ProcessorInput` is a type alias

3. **File property `relative` not documented**
   - Problem: The examples use `file.relative` (line 80) but the VirtualFile properties are not documented
   - Location: Usage examples throughout
   - Fix: Add a section documenting VirtualFile properties (`baseRead`, `baseWrite`, `relative`, `content`, `read`, `write`)

4. **Missing CyanGlob structure documentation**
   - Problem: Documentation mentions `globs: CyanGlob[]` but doesn't document the CyanGlob interface
   - Location: ProcessorInput table, line 61
   - Fix: Add CyanGlob interface documentation showing `root?: string | null`, `glob: string`, `exclude: string[]`, `type: GlobType`

5. **fileHelper.read() signature incomplete**
   - Problem: Example shows `fileHelper.read({ root: 'templates', glob: '**/*.md' })` but doesn't document that this takes a `CyanGlob` object, nor mentions the required `type` and `exclude` properties
   - Location: Line 120
   - Fix: Document that `read()` takes a `CyanGlob` parameter (minus type which may be defaulted)

### 🟠 Other Problems

1. **Inconsistent domain model types**
   - Problem: The SDK has both `ProcessorInput` (in `/domain/processor/input.ts`) and `CyanProcessorInput` (in `/domain/core/cyan_script_model.ts`). The `LambdaProcessorFn` uses `CyanProcessorInput`, which has `readDir`/`writeDir`, while `ProcessorInput` has `readDirectory`/`writeDirectory`. This internal inconsistency may be causing the documentation confusion.
   - Recommendation: Clarify which type users should expect, or unify the types in the SDK

2. **fileHelper.resolveAll() behavior not fully documented**
   - Problem: The documentation shows `fileHelper.resolveAll()` returning files that can be modified, but doesn't explain that it also copies files with `GlobType.Copy` automatically
   - Recommendation: Document that `resolveAll()` processes both Copy and Template glob types differently

3. **Missing exports documentation**
   - Problem: The main.ts exports many more items than documented (StartProcessor, StartTemplate, StartTemplateWithLambda, etc.)
   - Recommendation: Either document all exports or clarify this page is specifically for processor entry points

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 5 |
| 🟠 | 3 |
