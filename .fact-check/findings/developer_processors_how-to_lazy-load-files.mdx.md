<!-- source: content/docs/developer/processors/how-to/lazy-load-files.mdx -->
# 📄 File: content/docs/developer/processors/how-to/lazy-load-files.mdx

> Documentation describes lazy loading files using `fileHelper.get()` but contains multiple API inaccuracies. The documented method names and signatures do not match the actual SDK implementation.

### 🔴 Source Code Inaccuracies

1. **VirtualFileReference.load() method does not exist**
   - Documented: `const content = await ref.load();` (line 34) - async method returning `Promise<string>`
   - Actual: Method is named `readFile()` and is synchronous, returning `VirtualFile` object
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:26-29` shows `readFile(): VirtualFile { const content = fs.readFileSync(this.read, 'utf-8'); return new VirtualFile(...); }`

2. **VirtualFileReference.writeFile(content) signature is wrong**
   - Documented: `ref.writeFile(transformed);` accepts content parameter (line 37)
   - Actual: `writeFile()` is a method on `VirtualFile` class, not `VirtualFileReference`, and takes no parameters - content is already on the object
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54` shows `writeFile(): void` on `VirtualFile` class

3. **VirtualFileReference.copy() method does not exist**
   - Documented: `ref.copy();` copies file without loading (line 40)
   - Actual: No `copy()` method exists on `VirtualFileReference`. Copying is done via `fileHelper.copy(glob)` on CyanFileHelper
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - VirtualFileReference class only has `read`, `write` getters and `readFile()` method

4. **VirtualFileReference.getSize() method does not exist**
   - Documented: `const size = await ref.getSize();` (line 93)
   - Actual: No `getSize()` method exists on `VirtualFileReference`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - VirtualFileReference class has no such method

5. **CyanGlob parameter structure is incomplete**
   - Documented: `fileHelper.get({ root: 'templates', glob: '**/*' })` (line 26)
   - Actual: CyanGlob interface requires `exclude: string[]` and `type: GlobType` properties, though these may be auto-filled by the processor runtime
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11` shows `interface CyanGlob { root?: string | null; glob: string; exclude: string[]; type: GlobType; }`

6. **VirtualFileReference properties table incomplete**
   - Documented: Only lists `relative: string` property
   - Actual: Also has `baseRead: string`, `baseWrite: string`, and getter properties `read: string`, `write: string`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-24`

### 🟡 Documentation Issues

1. **Example code will not compile/run**
   - Problem: All three code examples use non-existent methods (`ref.load()`, `ref.copy()`, `ref.getSize()`, `ref.writeFile()`)
   - Location: Lines 21-46, 64-83, 87-109
   - Fix: Rewrite examples to use correct API: `ref.readFile()` returns `VirtualFile`, then access `content` property and call `writeFile()` on that object

2. **Method return types in table are incorrect**
   - Problem: Table states `load()` returns `Promise<string>` and `writeFile(content)` returns `void`
   - Location: Lines 54-60 (VirtualFileReference Methods table)
   - Fix: Update to reflect actual API - `readFile()` returns `VirtualFile` (synchronous), and `writeFile()` is on `VirtualFile` not `VirtualFileReference`

3. **Missing VirtualFile class documentation**
   - Problem: The workflow requires using both VirtualFileReference and VirtualFile classes, but VirtualFile is not documented
   - Location: Entire document
   - Fix: Add documentation for VirtualFile class with its `content` property and `writeFile()` method

### 🟠 Other Problems

1. **Lazy loading is not truly lazy**
   - Problem: The documented approach suggests memory efficiency, but `readFile()` uses `fs.readFileSync` which loads the entire file into memory synchronously
   - Recommendation: Clarify that "lazy" refers to deferred loading by the developer, not streaming/lazy I/O. For truly memory-efficient large file handling, use `readAsStream()` instead

2. **Correct workflow should be documented**
   - Problem: The actual workflow is: `VirtualFileReference.readFile()` -> `VirtualFile` with `content` property -> `VirtualFile.writeFile()`
   - Recommendation: Show the correct two-step process where you get a VirtualFile from readFile(), access its content, modify it, and call writeFile() on the VirtualFile object

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 6 |
| 🟡 | 3 |
| 🟠 | 2 |
