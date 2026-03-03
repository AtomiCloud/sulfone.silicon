<!-- source: content/docs/developer/processors/reference/sdk/file-helper.mdx -->
# 📄 File: content/docs/developer/processors/reference/sdk/file-helper.mdx

> Documentation for the `CyanFileHelper` API with significant inaccuracies in method names, return types, missing properties, and SDK feature availability.

### 🔴 Source Code Inaccuracies

1. **VirtualFileReference.load() method does not exist**
   - Documented: `load()` method returning `Promise<string>` (lines 133, 242, 297)
   - Actual: Method is named `readFile()`, returns `VirtualFile` (not `Promise<string>`), and is synchronous
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:26` - `readFile(): VirtualFile`

2. **VirtualFileReference.copy() method does not exist**
   - Documented: `copy()` method on VirtualFileReference returning `void` (lines 136, 244, 300)
   - Actual: No `copy()` method exists on VirtualFileReference class
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - only has `read`, `write` properties and `readFile()` method

3. **VirtualFileStream.read() method does not exist**
   - Documented: `read()` method returning `AsyncIterable<Buffer>` (line 262)
   - Actual: VirtualFileStream only exposes `reader: fs.ReadStream` and `writer: fs.WriteStream` properties
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

4. **VirtualFileStream.writeFile() method does not exist**
   - Documented: `writeFile(content)` method returning `void` (line 263)
   - Actual: VirtualFileStream has no `writeFile()` method
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

5. **VirtualFileStream.relative property does not exist**
   - Documented: `relative: string` property (line 256)
   - Actual: VirtualFileStream has no `relative` property
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

6. **CyanGlob.root is optional with null support**
   - Documented: `root: string; // Base directory` (line 77) - shown as required
   - Actual: `root?: string | null;` (optional, can be null)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7`

7. **CyanGlob.exclude is required, not optional**
   - Documented: `exclude?: string[]; // Patterns to exclude` (line 79) - shown as optional
   - Actual: `exclude: string[];` (required, though can be empty array)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:9`

8. **CyanGlob missing required `type` property in documentation**
   - Documented: CyanGlob interface shows only `root`, `glob`, `exclude` properties (lines 76-80)
   - Actual: CyanGlob has a required `type: GlobType` property
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:10`

9. **Python SDK missing readAsStream entirely**
   - Documented: `readAsStream(glob)` method and `VirtualFileStream` type available
   - Actual: Python SDK has no `readAsStream` method or `VirtualFileStream` class
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/fs/cyan_fs_helper.py` - no readAsStream; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/fs/virtual_file.py` - no VirtualFileStream

10. **VirtualFileReference.writeFile() signature incorrect**
    - Documented: `writeFile(content)` taking content parameter (line 243)
    - Actual: `writeFile()` takes no parameters - it writes the `content` property of VirtualFile
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54`

### 🟡 Documentation Issues

1. **Missing `read` and `write` properties on VirtualFile and VirtualFileReference**
   - Problem: Both classes expose `read` and `write` getter properties providing full paths, but these are not documented
   - Location: VirtualFile (lines 215-224) and VirtualFileReference (lines 233-244) property tables
   - Fix: Add documentation for `read: string` (full source path) and `write: string` (full destination path) properties

2. **Code example uses incorrect async pattern**
   - Problem: Example at lines 129-138 uses `await ref.load()` but `readFile()` is synchronous
   - Location: `get(glob)` usage section (lines 126-139)
   - Fix: Remove `await` and change `load()` to `readFile()`

3. **readAsStream code example is non-functional**
   - Problem: Example at lines 163-174 uses `stream.read()` which doesn't exist; should use `stream.reader` directly
   - Location: `readAsStream(glob)` usage section (lines 161-175)
   - Fix: Rewrite to use `stream.reader` (Node.js ReadStream) with proper stream iteration

4. **Best Practices example has multiple errors**
   - Problem: Lines 281-306 use `await ref.load()` (wrong method, wrong async), `ref.writeFile(transform(content))` (wrong signature), and `ref.copy()` (doesn't exist)
   - Location: Memory Efficiency section (lines 279-306)
   - Fix: Rewrite entire example using correct API methods

5. **Missing CyanFileHelper properties**
   - Problem: `CyanFileHelper` has `readDir` and `writeDir` getter properties not documented
   - Location: Methods Overview section
   - Fix: Add documentation for `readDir: string` and `writeDir: string` properties

6. **No SDK feature parity warning**
   - Problem: Documentation implies all features work across all SDKs, but Python lacks readAsStream
   - Location: Throughout document
   - Fix: Add note indicating `readAsStream` is only available in Node.js and .NET SDKs

### 🟠 Other Problems

1. **Method naming differs by SDK language**
   - Problem: Documentation uses TypeScript naming but doesn't clarify language-specific conventions (Python: `read_file`, C#: `ReadFile`)
   - Recommendation: Either clarify this is TypeScript-specific documentation or add language-specific sections

2. **VirtualFileStream provides only raw streams**
   - Problem: VirtualFileStream only exposes raw Node.js streams without the convenience methods (`read()`, `writeFile()`, `relative`) documented
   - Recommendation: Either update implementation to match documentation or update documentation to show raw stream access pattern

3. **Missing GlobType enum documentation**
   - Problem: CyanGlob.type uses GlobType enum (Template=0, Copy=1) which affects resolveAll() behavior but isn't documented
   - Recommendation: Add GlobType enum documentation or link to relevant documentation

4. **Best Practices example modifies readonly property**
   - Problem: Line 286-287 shows `f.content = transform(f.content)` but content is a constructor parameter
   - Recommendation: Verify if this is valid TypeScript or show correct mutation pattern

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 10 |
| 🟡 | 6 |
| 🟠 | 4 |
