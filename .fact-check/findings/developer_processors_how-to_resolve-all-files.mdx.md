<!-- source: content/docs/developer/processors/how-to/resolve-all-files.mdx -->
# 📄 File: content/docs/developer/processors/how-to/resolve-all-files.mdx

> Documentation for the `resolveAll()` method on CyanFileHelper, which loads all files matching the processor's globs into memory.

### 🔴 Source Code Inaccuracies

1. **Incorrect property name `input.writeDirectory`**
   - **Documented**: `return { directory: input.writeDirectory };`
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: The `CyanProcessorInput` interface in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` defines `writeDir`, not `writeDirectory`. Also confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/processor/lambda.ts:6` where `LambdaProcessorFn` uses `CyanProcessorInput` which has `writeDir`.

2. **Incorrect property name in Example: Variable Substitution**
   - **Documented**: `return { directory: input.writeDirectory };`
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: Same as above - `CyanProcessorInput.writeDir` is the correct property name.

3. **Incorrect property name in Example: Filter and Transform**
   - **Documented**: `return { directory: input.writeDirectory };`
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: Same as above - `CyanProcessorInput.writeDir` is the correct property name.

### 🟡 Documentation Issues

1. **Incomplete VirtualFile Properties table**
   - **Problem**: The documentation only lists `content` and `relative` properties, but `VirtualFile` has additional properties that may be useful.
   - **Location**: "VirtualFile Properties" table (lines 47-51)
   - **Fix**: Consider adding the following properties from `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-38`:
     - `baseRead: string` - Base read directory path
     - `baseWrite: string` - Base write directory path
     - `read: string` (getter) - Full read path (baseRead + relative)
     - `write: string` (getter) - Full write path (baseWrite + relative)

2. **Missing `get()` method reference in callout**
   - **Problem**: The callout mentions using `get()` for lazy loading but doesn't explain that `get()` returns `VirtualFileReference[]` (not `VirtualFile[]`), which requires calling `readFile()` to get the content.
   - **Location**: Callout at line 97-99
   - **Fix**: Clarify that `get()` returns references that need `readFile()` called to load content.

### 🟠 Other Problems

1. **No return type documentation for `resolveAll()`**
   - **Problem**: The documentation doesn't explicitly state that `resolveAll()` returns `VirtualFile[]` with the content already loaded.
   - **Recommendation**: Add explicit return type documentation to the Usage section.

2. **Implicit behavior about Copy-type globs**
   - **Problem**: The documentation doesn't mention that `resolveAll()` also handles Copy-type globs by copying them directly before returning Template-type files.
   - **Evidence**: In `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40`, `resolveAll()` filters Copy-type globs and calls `copy()` on them before reading Template-type files.
   - **Recommendation**: Document this side effect so users understand that Copy-type files are automatically handled.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 2 |
| 🟠 | 2 |
