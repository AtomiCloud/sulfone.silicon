<!-- source: content/docs/developer/processors/explanation/memory-loading.mdx -->
# 📄 File: content/docs/developer/processors/explanation/memory-loading.mdx

> Documentation describing processor memory loading methods and strategies. The core API claims are accurate, but there are issues with parameter naming and a missing required parameter in code examples.

### 🔴 Source Code Inaccuracies
1. **Missing `root` parameter in code examples** | Documented: `fileHelper.read({ glob: '**/*', exclude: [], type: GlobType.Template })` | Actual: `CyanGlob` interface requires `root?: string | null`, `glob: string`, `exclude: string[]`, `type: GlobType` - many examples omit `root` which defaults to `.` but should be explicit for clarity | `helium/sdks/node/src/domain/core/cyan.ts:6-11`
2. **Table uses incorrect parameter names** | Documented: `resolveAll()`, `read(glob)`, `get(glob)`, `readAsStream(glob)`, `copy(glob)` | Actual: Methods take a `CyanGlob` object, not a glob string. The methods are: `resolveAll(): VirtualFile[]`, `read(g: CyanGlob): VirtualFile[]`, `get(g: CyanGlob): VirtualFileReference[]`, `readAsStream(g: CyanGlob): VirtualFileStream[]`, `copy(copy: CyanGlob): void` | `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-93`

### 🟡 Documentation Issues
1. **Mermaid diagram references non-existent methods** | The diagram shows `resolveAll`, `read`, `get`, `readAsStream`, `copy` as loading methods, but the actual method signatures take `CyanGlob` objects, not simple method calls | Mermaid chart at lines 14-27 | Update diagram to show the object-based API: `resolveAll()`, `read(CyanGlob)`, `get(CyanGlob)`, `readAsStream(CyanGlob)`, `copy(CyanGlob)`
2. **Best Practices section has incomplete examples** | `fileHelper.read({ glob: '**/*', exclude: [], type: GlobType.Template })` at line 192 missing `root` parameter | Lines 189-203 | Add `root: '.'` or appropriate root directory to examples
3. **Best Practices streaming example missing root** | `fileHelper.readAsStream({ glob: '*.csv', exclude: [], type: GlobType.Template })` at line 198 missing `root` parameter | Line 198 | Add `root: 'data'` or appropriate root directory
4. **Memory estimation formula lacks source verification** | Claims "2x overhead (parsing, transformation)" and "256MB-1GB" default container memory | Lines 118-130 | These values need verification against actual infrastructure configuration

### 🟠 Other Problems
1. **Comment about `ref.copy()` not existing is confusing** | Lines 86, 147 have comments "// Copy via fileHelper - ref.copy() does not exist" which is correct but breaks code flow | Consider restructuring example to be cleaner without inline comments explaining API limitations
2. **`resolveAll()` has side effects** | Documentation correctly notes memory implications but doesn't mention that `resolveAll()` also copies `GlobType.Copy` files automatically (line 34-37 in source) | `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40` | Consider documenting that `resolveAll()` also handles Copy-type globs

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 4 |
| 🟠 | 2 |
