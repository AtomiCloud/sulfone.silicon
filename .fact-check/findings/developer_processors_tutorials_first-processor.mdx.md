# File: content/docs/developer/processors/tutorials/first-processor.mdx

> Tutorial for creating a basic processor that transforms files using `StartProcessorWithLambda` and `CyanFileHelper`.

### Source Code Inaccuracies

1. **Wrong property name on input object**
   - **Documented**: `return { directory: input.writeDirectory };` (line 55)
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: `helium/sdks/node/src/domain/core/cyan_script_model.ts:12-16` - `CyanProcessorInput` interface has `writeDir`, not `writeDirectory`. Also confirmed by actual usage in `iridium/e2e/processor1/index.ts:55` which uses `input.writeDir`.

2. **Incorrect type name in documentation table**
   - **Documented**: `ProcessorInput` type in the `StartProcessorWithLambda` arguments table (line 92)
   - **Actual**: `CyanProcessorInput` type
   - **Evidence**: `helium/sdks/node/src/api/processor/lambda.ts:6` - The lambda function signature is `(i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>`. Note that `ProcessorInput` is a different internal type used by the service layer (`helium/sdks/node/src/domain/processor/input.ts:3-8`).

3. **CyanFileHelper table incorrectly documents method signatures**
   - **Documented**: `read(glob)`, `get(glob)`, `readAsStream(glob)`, `copy(glob)` (lines 101-105)
   - **Actual**: All methods require a `CyanGlob` object, not just a glob string
   - **Evidence**: `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:73` - `read(g: CyanGlob): VirtualFile[]`, line 60 - `get(g: CyanGlob): VirtualFileReference[]`, line 42 - `readAsStream(g: CyanGlob): VirtualFileStream[]`, line 77 - `copy(copy: CyanGlob): void`.

### Documentation Issues

1. **VirtualFile properties table is incomplete**
   - **Problem**: The VirtualFile table (lines 109-118) only lists `content` and `relative` properties, but `VirtualFile` has additional properties: `baseRead`, `baseWrite`, and computed getters `read` and `write`.
   - **Location**: Lines 109-118
   - **Fix**: Either add the additional properties or clarify this is a simplified view. The additional properties are: `baseRead: string`, `baseWrite: string`, `read: string` (getter), `write: string` (getter).

2. **Missing return type import in code example**
   - **Problem**: The code example (lines 38-57) does not import or specify `ProcessorOutput` return type, but actual processors (like in e2e tests) explicitly type the return: `Promise<ProcessorOutput>`.
   - **Location**: Lines 38-57
   - **Fix**: Either add explicit return type annotation or add `ProcessorOutput` to the import statement for clarity.

3. **Template test code example has incorrect property name**
   - **Problem**: The test example (lines 132-141) shows `files: [{ root: 'templates', glob: '**/*', exclude: [], type: GlobType.Template }]` but the root should be `template` (singular) to match actual e2e test usage.
   - **Location**: Lines 132-141
   - **Fix**: Change `root: 'templates'` to `root: 'template'` to match actual usage in `iridium/e2e/template1/cyan/index.ts:43`.

4. **Missing GlobType import in code example**
   - **Problem**: The test template code uses `GlobType.Template` but doesn't show importing `GlobType` from the SDK.
   - **Location**: Lines 132-141
   - **Fix**: Add `GlobType` to the imports or note that it should be imported from `@atomicloud/cyan-sdk`.

5. **Incorrect file structure description for test template**
   - **Problem**: The test template code example (lines 132-141) says "// In template's index.ts" but the actual location based on e2e tests would be `cyan/index.ts` within the template directory.
   - **Location**: Line 133
   - **Fix**: Change comment to "// In template's cyan/index.ts".

### Other Problems

1. **Code example uses forEach instead of idiomatic approach**
   - **Problem**: The example uses `files.forEach(file => {...})` which mutates files in place. Actual processor implementations (e.g., `iridium/e2e/processor1/index.ts:46-53`) use `.map().map()` chain for functional transformation.
   - **Recommendation**: While `forEach` works, showing a more idiomatic functional approach with `.map()` would better align with actual codebase patterns.

2. **Documentation references non-existent internal type**
   - **Problem**: The table mentions `ProcessorInput` type which exists internally in the service layer but is not the type exposed to processor developers. This could cause confusion if developers try to find this type in the SDK exports.
   - **Recommendation**: Use the correct exported type name `CyanProcessorInput` in all documentation.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 3 |
| Documentation Issues | 5 |
| Other Problems | 2 |
