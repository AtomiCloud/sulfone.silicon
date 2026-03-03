<!-- source: content/docs/developer/templates/tutorials/03-changing-glob.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/03-changing-glob.mdx

> Tutorial covering glob patterns and GlobType enum for controlling file processing in CyanPrint templates. Contains one critical source code inaccuracy (non-existent `GlobType.Ignore`) and one incomplete code example (missing required `plugins` property).

### 🔴 Source Code Inaccuracies

1. **GlobType.Ignore Does Not Exist**
   - **Documented**: `GlobType.Ignore` - "Skip entirely" for temporary files (line 100, table row 3)
   - **Actual**: The `GlobType` enum only has `Template = 0` and `Copy = 1` values. There is no `Ignore` value in any SDK implementation.
   - **Evidence**:
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`:
       ```typescript
       enum GlobType {
         Template = 0,
         Copy = 1,
       }
       ```
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Cyan.cs:3-7`:
       ```csharp
       public enum GlobType
       {
           Template,
           Copy,
       }
       ```
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:6-9`:
       ```python
       @dataclass
       class GlobType(Enum):
           Template = 1
           Copy = 2
       ```
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/http/mapper.rs:201-206`:
       ```rust
       pub fn glob_type_res_mapper(r: &str) -> GlobType {
           match r {
               "template" => GlobType::Template(),
               "copy" => GlobType::Copy(),
               _ => panic!("unknown glob type"),
           }
       }
       ```
   - **Impact**: Users who try to use `GlobType.Ignore` will encounter compilation errors or runtime panics.

2. **Complete Example Missing Required `plugins` Property**
   - **Documented**: The "Complete Example" (lines 44-73) shows a return object with only `processors` array
   - **Actual**: The `Cyan` interface requires both `processors` AND `plugins` properties. Both are required (not optional) in all SDK implementations.
   - **Evidence**:
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27`:
       ```typescript
       interface Cyan {
         processors: CyanProcessor[];
         plugins: CyanPlugin[];
       }
       ```
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Cyan.cs:30-34`:
       ```csharp
       public class Cyan
       {
           public required IEnumerable<CyanProcessor> Processors { get; init; }
           public required IEnumerable<CyanPlugin> Plugins { get; init; }
       }
       ```
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:33-36`:
       ```python
       @dataclass
       class Cyan:
           processors: List[CyanProcessor]
           plugins: List[CyanPlugin]
       ```
   - **Impact**: TypeScript users will get type errors. The code will not compile.

### 🟡 Documentation Issues

1. **GlobType Options Table Contains Non-Existent Value**
   - **Problem**: The GlobType Options table (lines 96-100) includes `GlobType.Ignore` which does not exist in any SDK
   - **Location**: Lines 94-100
   - **Fix**: Remove the `GlobType.Ignore` row from the table, keeping only `Template` and `Copy`:
     ```markdown
     | Type | Behavior | Use Case |
     |------|----------|----------|
     | `GlobType.Template` | Process with variable substitution | Text files, configs |
     | `GlobType.Copy` | Copy without processing | Images, binaries |
     ```

2. **Incomplete Code Example Missing Required Property**
   - **Problem**: The "Complete Example" code will fail type checking because `plugins` is a required property
   - **Location**: Lines 44-73
   - **Fix**: Add `plugins: []` to the return object:
     ```typescript
     return {
       processors: [{
         name: 'cyan/default',
         files: [...],
         config: {...}
       }],
       plugins: []  // Add this required property
     };
     ```

3. **Directory Naming: `templates/` vs `template/`**
   - **Problem**: Documentation uses `templates/` (plural) as root directory in examples, but E2E tests use `template/` (singular)
   - **Location**: Lines 29, 34, 35, 38, 53, 58, 62, 83, 104-113
   - **Evidence**:
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:43` uses `root: 'template'`
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template2/cyan/index.ts:46` uses `root: 'template'`
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template3/cyan/index.ts:42` uses `root: 'template'`
   - **Fix**: Standardize on `template/` (singular) to match actual implementation, or document that either is acceptable

### 🟠 Other Problems

1. **Cross-File Documentation Inconsistency**
   - **Problem**: The same `GlobType.Ignore` inaccuracy appears in other documentation files (types.mdx line 20, globbing.mdx line 139), suggesting a systemic documentation error
   - **Recommendation**: Audit all documentation files that reference `GlobType` to ensure consistency with actual SDK

2. **Root Property Not Documented as Optional**
   - **Problem**: The documentation does not clarify that `root` property in `CyanGlob` is optional and defaults to `.` (current directory)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-7` shows `root?: string | null;` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:24` shows `return path.resolve(this.readDir, g.root ?? '.');`
   - **Recommendation**: Add a note in the documentation that `root` is optional and defaults to the current directory

3. **Lambda Function Parameters Use Cryptic Names**
   - **Problem**: The callback signature `async (i, d) =>` uses abbreviated parameter names without explaining what `i` (IInquirer) and `d` (IDeterminism) represent
   - **Location**: Line 47
   - **Recommendation**: Use more descriptive parameter names or add inline comments: `async (inquirer, determinism) =>`

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 3 |
| 🟠 | 3 |
