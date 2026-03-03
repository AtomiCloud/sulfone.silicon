<!-- source: content/docs/developer/processors/index.mdx -->
# 📄 File: content/docs/developer/processors/index.mdx

> Documentation for processor development covering architecture, SDK usage, and learning paths. Contains accurate high-level concepts but the Quick Example code has a critical property name error that would cause runtime failures.

### 🔴 Source Code Inaccuracies

1. **Quick Example - input property name is wrong**
   - Documented: `input.writeDirectory` (line 132)
   - Actual: `input.writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `interface CyanProcessorInput { readDir: string; writeDir: string; globs: CyanGlob[]; config: unknown; }`. Also verified in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` - `return { directory: input.writeDir };`

2. **Components table - ProcessorInput type name differs from exported type**
   - Documented: `ProcessorInput` as the input type from template (line 45)
   - Actual: The SDK exports and uses `CyanProcessorInput`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:194` exports `CyanProcessorInput`. The `LambdaProcessorFn` type at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/processor/lambda.ts:6` uses `CyanProcessorInput`. Note: `ProcessorInput` exists internally at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/processor/input.ts:3-8` with different property names (`readDirectory`/`writeDirectory`), but users never interact with this internal type.

### 🟡 Documentation Issues

1. **SDK package installation not documented**
   - Problem: The documentation shows `import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk'` but doesn't explain how to install the package
   - Location: Line 122
   - Fix: Add installation instructions (e.g., `npm install @atomicloud/cyan-sdk` or `bun add @atomicloud/cyan-sdk`)

2. **SDK version not specified**
   - Problem: Documentation doesn't specify which version of `@atomicloud/cyan-sdk` it describes
   - Location: Throughout document
   - Fix: Add version requirement (current SDK is v2.1.0 per `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:3`)

3. **Default processor Eta syntax claim unverified**
   - Problem: Documentation claims "The default processor uses Eta with `var__name__` syntax" (line 52) but this cannot be verified from the provided source paths. The iridium processors show Eta configuration but are example processors, not a "default" processor.
   - Location: Line 52
   - Fix: Either verify this claim against the actual default processor implementation or clarify that this refers to the standard processor template pattern

4. **Mermaid diagram uses informal naming**
   - Problem: The architecture diagram shows method names like `resolveAll`, `read`, `get`, `readAsStream`, `copy` which are accurate, but the flow representation is simplified
   - Location: Lines 24-37
   - Fix: Diagram is acceptable for conceptual understanding but could note it's a simplified flow

### 🟠 Other Problems

1. **Internal vs External type confusion**
   - Problem: The SDK has internal types (`ProcessorInput` with `readDirectory`/`writeDirectory`) and external types (`CyanProcessorInput` with `readDir`/`writeDir`). The documentation uses property names from the internal type but users only interact with the external type.
   - Recommendation: Ensure all documentation consistently uses the exported type names and property names (`CyanProcessorInput`, `readDir`, `writeDir`)

2. **Missing documentation for exported VirtualFile types**
   - Problem: The SDK exports and uses `VirtualFile`, `VirtualFileReference`, `VirtualFileStream` types (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts`) but these are not mentioned in the Learning Path reference links
   - Recommendation: Add documentation for VirtualFile types since users interact with them when calling `resolveAll()`, `get()`, and `readAsStream()`

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 4 |
| 🟠 | 2 |
