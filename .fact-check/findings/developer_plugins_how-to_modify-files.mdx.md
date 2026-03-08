<!-- source: content/docs/developer/plugins/how-to/modify-files.mdx -->
# 📄 File: content/docs/developer/plugins/how-to/modify-files.mdx

> Documentation for modifying files in plugins using Node.js fs module and glob patterns. Overall accuracy is good with minor issues around type naming consistency and glob import style.

### 🔴 Source Code Inaccuracies
1. **Documented**: Import statement uses `import { StartPluginWithLambda, PluginOutput } from '@atomicloud/cyan-sdk';`
   **Actual**: The correct import should include `CyanPluginInput` type instead of inline `input` type, and the actual function signature uses `CyanPluginInput` not an implicit input type. The SDK exports both `CyanPluginInput` and `PluginOutput` types.
   **Evidence**: helium/sdks/node/src/main.ts:183-207 shows exports include `CyanPluginInput` and `PluginOutput`; helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21 defines `CyanPluginInput`

2. **Documented**: `const { directory } = input;` with input typed implicitly
   **Actual**: The input parameter to the lambda function is of type `CyanPluginInput`, which is exported from the SDK. Documentation should be consistent about this type name.
   **Evidence**: helium/sdks/node/src/api/plugin/lambda.ts:5 shows `type LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>;`

3. **Documented**: `const { directory, config } = input;` with `const cfg = config as { author?: string };`
   **Actual**: This is correct, but the input type should be explicitly `CyanPluginInput` for clarity and consistency with the SDK.
   **Evidence**: helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21

### 🟡 Documentation Issues
1. **Problem**: Inconsistent type naming - the documentation sometimes uses implicit typing for `input` instead of explicitly showing `CyanPluginInput`
   **Location**: Throughout the document (lines 21, 37, 50, 73, 99, 129, 175, 205)
   **Fix**: Add explicit type annotations like `async (input: CyanPluginInput)` in at least the first example for clarity, and show import of `CyanPluginInput` type

2. **Problem**: The glob import example shows `import { glob } from 'glob';` but the SDK already includes glob as a dependency (version ^11.0.0)
   **Location**: Line 200 says "install separately: `npm install glob`" and line 203
   **Fix**: While this is technically correct that plugins need to install it in their own package.json, clarify that the SDK uses glob internally but plugin authors should install it in their plugin project

3. **Problem**: The glob example uses named import `{ glob }` but glob v11+ supports both default and named exports
   **Location**: Line 203
   **Fix**: Verify this matches glob v11 API - the SDK itself uses `import { glob } from 'glob';` at helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:6, so this is correct

4. **Problem**: Missing import statement for `path` and `fs/promises` in some examples
   **Location**: Lines 36-44 (Write a File example) and lines 49-65 (Modify a File example) don't show imports
   **Fix**: Either add imports to each example or clearly state that imports from first example apply

5. **Problem**: The "Using Glob Patterns" section header could mention this is an external package
   **Location**: Line 198
   **Fix**: Already noted in text, but could be clearer that glob is not part of the SDK itself

### 🟠 Other Problems
1. **Problem**: Code examples use `fs/promises` import but real plugin examples in iridium use synchronous `fs` module
   **Recommendation**: The async `fs/promises` approach shown in documentation is valid and often preferred. However, showing both async and sync approaches might be helpful since actual plugins (iridium/e2e/plugin1, plugin2) use synchronous `fs` operations

2. **Problem**: No error handling examples for file operations
   **Recommendation**: Consider adding a brief example showing try/catch for file operations, especially for cases where files might not exist or have permission issues

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 5 |
| 🟠 | 2 |
