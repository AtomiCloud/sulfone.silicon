<!-- source: content/docs/developer/processors/how-to/copy-files.mdx -->
# 📄 File: content/docs/developer/processors/how-to/copy-files.mdx

> This document describes the `copy()` method of `CyanFileHelper` for copying files directly without loading into memory. The API signatures and usage patterns are accurate and match the SDK source code.

### 🔴 Source Code Inaccuracies
None found.

### 🟡 Documentation Issues
1. **Incomplete type information for `copy()` parameters** | Performance Comparison table mentions `get() + copy()` | The `get()` method returns `VirtualFileReference[]` which provides lazy loading, but the table description "Conditional copy" could be clearer - `get()` itself doesn't copy, it returns references. Consider clarifying that `get()` is for obtaining file references without loading content.
2. **Example code doesn't show complete type import** | Multiple code examples | The examples use `fileHelper.copy({ root: '...', glob: '...' })` but don't show that the `CyanGlob` interface also has an `exclude` property (shown in "Copy with Glob Patterns" section but not in first example). Consider adding `exclude` to the first example for completeness.

### 🟠 Other Problems
1. **Return type for `copy()` not documented** | Performance Comparison and Usage sections | The documentation doesn't explicitly state that `copy()` returns `void`. This is minor but could help developers understand they can't chain the method or get results back.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 2 |
| 🟠 | 1 |

## Verification Details

**Verified Against Source Code:**
- SDK Package: `@atomicloud/cyan-sdk` (helium/sdks/node/package.json:2)
- `StartProcessorWithLambda`: (helium/sdks/node/src/main.ts:106)
- `LambdaProcessorFn` type: `(i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>` (helium/sdks/node/src/api/processor/lambda.ts:6)
- `CyanProcessorInput.writeDir`: (helium/sdks/node/src/domain/core/cyan_script_model.ts:13)
- `CyanProcessorInput.config`: (helium/sdks/node/src/domain/core/cyan_script_model.ts:15)
- `ProcessorOutput.directory`: (helium/sdks/node/src/domain/processor/output.ts:2)
- `CyanFileHelper.copy()` method: (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:77-93)
- `CyanGlob` interface: root?, glob, exclude[] (helium/sdks/node/src/domain/core/cyan.ts:6-11)
- `VirtualFile.content` property: (helium/sdks/node/src/domain/core/fs/virtual_file.ts:37)
- `VirtualFile.writeFile()` method: (helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54)
- `CyanFileHelper.read()` method: (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:73-75)
- `CyanFileHelper.get()` method: (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:60-71)
- `CyanFileHelper.resolveAll()` method: (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40)
