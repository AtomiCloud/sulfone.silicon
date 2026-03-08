<!-- source: content/docs/developer/processors/explanation/read-write-dirs.mdx -->
# 📄 File: content/docs/developer/processors/explanation/read-write-dirs.mdx

> Documentation explaining readDir and writeDir directories for processors, including usage patterns and rules. Contains one significant inaccuracy regarding the writeDir path value.

### 🔴 Source Code Inaccuracies

1. **writeDir path is incorrect**
   - Documented: `/workspace/output/`
   - Actual: `/workspace/area/<uuid>` (unique UUID per processor)
   - Evidence: `boron/docker_executor/merger.go:147-148` shows `WriteDir: "/workspace/area/" + filePath.String()` where filePath is a UUID. Also confirmed in `boron/docs/developer/features/03-merger-system.md:121` which shows `"writeDir": "/workspace/area/<uuid>"`

### 🟡 Documentation Issues

1. **Inconsistent path examples throughout document**
   - Problem: Multiple code examples use `/workspace/output/` which is incorrect
   - Location: Lines 31, 89, 120, 139-140, 198-199, 228-241
   - Fix: Replace `/workspace/output/` with `/workspace/area/<uuid>/` or use a note explaining it's a simplified example

2. **readDir path has trailing slash inconsistency**
   - Problem: Documentation shows `/workspace/cyanprint/` with trailing slash, but source code uses `/workspace/cyanprint` without
   - Location: Lines 30-31, 44-45
   - Evidence: `boron/docker_executor/merger.go:147` shows `ReadDir: "/workspace/cyanprint"` (no trailing slash)
   - Fix: Either remove trailing slashes or clarify that both forms are equivalent

3. **Callout claims paths are "typical examples" but should clarify they are representative**
   - Problem: The info callout says "Actual values depend on your container or deployment configuration" but the readDir value is actually fixed in the codebase
   - Location: Lines 33-35
   - Fix: Clarify that readDir is always `/workspace/cyanprint` (fixed) while writeDir is always `/workspace/area/<uuid>` (unique per processor)

4. **VirtualFile class name inconsistency**
   - Problem: Documentation uses `VirtualFile` but the helper class is `CyanFileHelper`
   - Location: Line 113 "VirtualFile Paths" section title
   - Evidence: The class in `helium/sdks/node/src/domain/core/fs/virtual_file.ts:32` is `VirtualFile` but it's accessed via `CyanFileHelper`
   - Fix: Consider renaming section to "File Paths" or clarify that `VirtualFile` is the type returned by `resolveAll()`

### 🟠 Other Problems

1. **Ambiguity about readDir access**
   - Problem: Documentation says "never access directly" but the `VirtualFile` class has a `read` getter that constructs the full path
   - Recommendation: Clarify that `file.read` property is acceptable for reading, but direct `fs.readFileSync(input.readDir + '/...')` is not

2. **Missing detail about writeDir uniqueness**
   - Problem: Documentation doesn't explain that each processor gets a unique writeDir to enable parallel processing
   - Recommendation: Add explanation that the UUID suffix prevents conflicts when multiple processors run in parallel

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 4 |
| 🟠 | 2 |
