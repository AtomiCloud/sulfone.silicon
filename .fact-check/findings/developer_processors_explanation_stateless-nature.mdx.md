<!-- source: content/docs/developer/processors/explanation/stateless-nature.mdx -->
# 📄 File: content/docs/developer/processors/explanation/stateless-nature.mdx

> Documentation explaining the stateless nature of processors, including what it means, why it's important, implications, and testing approaches. Most factual claims are accurate, but the testing section presents mock utilities that don't exist in the SDK.

### 🔴 Source Code Inaccuracies
1. **Testing section uses non-existent mock utilities** | The documentation presents `createMockFileHelper()` and `MockFile` types as if they exist | Evidence: Searched `helium/sdks/node` - no `createMockFileHelper` or `MockFile` exports found. The SDK only exports `CyanFileHelper` class, not any mock utilities. File: helium/sdks/node/src/main.ts:169-207

### 🟡 Documentation Issues
1. **Testing code is conceptual only** | Lines 184-219 | Add a disclaimer that the test code is conceptual/pseudo-code and users need to implement their own mock utilities, OR provide actual testing utilities in the SDK
2. **Test code uses `processor(mockInput, mockFileHelper)`** | Line 204 | The `StartProcessorWithLambda` function doesn't return a callable - it starts an HTTP server on port 5551. You cannot call the processor function directly for testing. File: helium/sdks/node/src/main.ts:87-109
3. **Test expectation incorrect** | Line 217 | `expect(mockFiles[0].content).toBe('Hello World')` - The test mutates mockFiles but the actual SDK's `VirtualFile` is immutable after creation from `resolveAll()`. The example is misleading about how files work.

### 🟠 Other Problems
1. **No actual testing guidance** | The documentation should either point to a real testing approach (e.g., integration testing with the HTTP server, or creating actual test utilities) rather than showing non-functional mock code
2. **SDK doesn't export testing utilities** | Consider exporting test helpers (like a mock file helper factory) from the SDK to make the documentation example actually usable

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 3 |
| 🟠 | 2 |

## Verified Accurate Claims
- `StartProcessorWithLambda` function exists and takes a lambda function (helium/sdks/node/src/main.ts:106-108)
- Lambda signature `(input: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>` is correct (helium/sdks/node/src/api/processor/lambda.ts:6)
- `CyanProcessorInput` has `readDir`, `writeDir`, `globs`, `config` properties (helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16)
- `fileHelper.resolveAll()` returns `VirtualFile[]` (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40)
- `VirtualFile` has `content` property and `writeFile()` method (helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-54)
- `ProcessorOutput` has `directory` property (helium/sdks/node/src/domain/processor/output.ts:1-5)
- `GlobType` enum exists with `Template` and `Copy` values (helium/sdks/node/src/domain/core/cyan.ts:1-4)
- SDK package name `@atomicloud/cyan-sdk` is correct (helium/sdks/node/package.json:2)
- CLI command `cyanprint create` is correct (iridium/cyanprint/LLM.MD:119)
- Related links to why-processors, read-write-dirs, and memory-loading exist in the content structure
