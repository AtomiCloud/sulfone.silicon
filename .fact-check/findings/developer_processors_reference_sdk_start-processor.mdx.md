<!-- source: content/docs/developer/processors/reference/sdk/start-processor.mdx -->
# 📄 File: content/docs/developer/processors/reference/sdk/start-processor.mdx

> Documentation for the StartProcessorWithLambda entry point is accurate and aligns with source code. The function signature, parameters, return types, and code examples are all correct. Minor issue: one related document (file-helper.mdx) has an inconsistent property name in an example.

### 🔴 Source Code Inaccuracies
(none found)

### 🟡 Documentation Issues
1. **Inconsistent property name in related file** | Documented: `input.writeDir` | Actual: Related file `file-helper.mdx` uses `input.writeDirectory` in example (line 376) | Location: `file-helper.mdx` line 376 | Fix: Change `input.writeDirectory` to `input.writeDir` in file-helper.mdx to match the actual `CyanProcessorInput` interface

### 🟠 Other Problems
(none)

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 1 |
| 🟠 | 0 |

## Verified Accurate Claims
- `StartProcessorWithLambda` function exists (helium/sdks/node/src/main.ts:106-108)
- Function signature `(handler: LambdaProcessorFn) => void` is correct
- Lambda type `LambdaProcessorFn = (input: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>` is correct (helium/sdks/node/src/api/processor/lambda.ts:6)
- `CyanProcessorInput` has `readDir`, `writeDir`, `globs`, `config` properties (helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16)
- `ProcessorOutput` has `directory` property (helium/sdks/node/src/domain/processor/output.ts:1-5)
- `fileHelper.resolveAll()` returns `VirtualFile[]` (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40)
- `VirtualFile` has `content`, `relative` properties and `writeFile()` method (helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-54)
- `fileHelper.read(glob)`, `fileHelper.copy(glob)` methods exist (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts)
- `CyanGlob` interface with `root`, `glob`, `exclude`, `type` properties is correct
- SDK package name `@atomicloud/cyan-sdk` is correct (helium/sdks/node/package.json:2)
- Typical directory paths `/workspace/cyanprint/` and `/workspace/output/` are correct defaults
- Related links are valid internal documentation links
