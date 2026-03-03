<!-- source: content/docs/developer/processors/explanation/stateless-nature.mdx -->
# 📄 File: content/docs/developer/processors/explanation/stateless-nature.mdx

> Documentation explaining the stateless nature of processors, including what it means to be stateless, benefits, implications, and best practices for designing stateless processors. The conceptual content is accurate, but there are API inaccuracies in code examples that use incorrect property names.

### 🔴 Source Code Inaccuracies

1. **Wrong Property Name `input.writeDirectory`**
   - **Documented**: `return { directory: input.writeDirectory };`
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `CyanProcessorInput` interface defines `writeDir` (not `writeDirectory`). Also verified in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` which returns `{ directory: input.writeDir }`.

2. **CLI Command Name Inconsistency**
   - **Documented**: `cyanprint create myorg/my-template output1`
   - **Actual**: Command exists as both `cyanprint create` and via `pls` wrapper
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46` defines the Create command. The CLI binary is `cyanprint`. Documentation reference in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/surfaces/cli/02-create.md:8` shows `pls create <template_ref> [path]`.

3. **Non-existent Function in Testing Example**
   - **Documented**: `import { processFiles } from './processor';` and `const result1 = processFiles(input, config);`
   - **Actual**: No such `processFiles` function exists in the SDK
   - **Evidence**: Searched the helium SDK codebase - no `processFiles` function found. The actual processor API uses `StartProcessorWithLambda` with a callback function pattern.

4. **Wrong Test Input Structure in Testing Example**
   - **Documented**: Test input has `content` and `relative` properties directly on the input object
   - **Actual**: The processor input (`CyanProcessorInput`) has `readDir`, `writeDir`, `globs`, and `config` properties
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `CyanProcessorInput` interface structure.

### 🟡 Documentation Issues

1. **Misleading Test Example Structure**
   - **Problem**: The testing example (lines 177-196) shows a unit test pattern that doesn't match how processors are actually invoked. Processors use `StartProcessorWithLambda` with a callback, not a `processFiles` function.
   - **Location**: Lines 172-196
   - **Fix**: Either remove the test example or rewrite it to show how to actually test a processor (mocking fileHelper and input structures, or using integration tests).

2. **Wrong Output Type in Test Assertion**
   - **Problem**: The test example uses `expect(result1).toBe('Hello World')` but actual processor output is a `ProcessorOutput` object with a `directory` property, not a string.
   - **Location**: Lines 193-194
   - **Fix**: Update the test example to reflect that `ProcessorOutput` is `{ directory: string }`, not a content string.

3. **Abstract Transform Function Without Definition**
   - **Problem**: Line 89 shows `file.content = transform(file.content);` with undefined `transform` function
   - **Location**: Lines 82-100
   - **Fix**: Either show a concrete transformation example or add comment indicating pseudocode.

4. **Conceptual Model Inconsistency**
   - **Problem**: Line 20 shows `output = processor(input, files)` but actual signature is `(input, fileHelper)` and files are obtained via `fileHelper.resolveAll()`
   - **Location**: Line 18-22
   - **Fix**: Update to `output = processor(input, fileHelper)` or add clarifying comment about the conceptual nature.

### 🟠 Other Problems

1. **SDK Package Name Not Documented**
   - **Problem**: Documentation doesn't specify the exact SDK package name (`@atomicloud/cyan-sdk`)
   - **Recommendation**: Add import statement showing `import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk';` in code examples.

2. **Real-World Examples Not Referenced**
   - **Problem**: Actual processor implementations exist in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts` but documentation uses abstract examples
   - **Recommendation**: Consider linking to actual processor examples for more concrete understanding.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 4 |
| 🟠 | 2 |
