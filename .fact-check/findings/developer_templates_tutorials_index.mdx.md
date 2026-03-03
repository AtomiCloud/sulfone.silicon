<!-- source: content/docs/developer/templates/tutorials/index.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/index.mdx

> Index page listing progressive tutorials for learning CyanPrint template development. The index itself has minimal claims but references tutorials that contain significant source code inaccuracies.

### 🔴 Source Code Inaccuracies

1. **Tutorial 3 references `GlobType.Ignore` which does not exist**
   - **Documented**: Tutorial 3 description states "Handling binary files" and the linked tutorial (`03-changing-glob.mdx`) includes a `GlobType.Ignore` option in its GlobType Options table (line 100)
   - **Actual**: Only `GlobType.Template = 0` and `GlobType.Copy = 1` exist in the SDK
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`:
     ```ts
     enum GlobType {
       Template = 0,
       Copy = 1,
     }
     ```

2. **Tutorial 4 uses `d.uuid()` which does not exist on `IDeterminism` interface**
   - **Documented**: Tutorial 4 "Asking Questions" learning path leads to `04-asking-questions.mdx:191` which uses `const uuid = d.uuid();`
   - **Actual**: The `IDeterminism` interface only has `get(key: string, origin: () => string): string` method
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`:
     ```ts
     interface IDeterminism {
       get(key: string, origin: () => string): string;
     }
     ```

3. **Full Example tutorial uses `d.uuid()` which does not exist**
   - **Documented**: Full Example tutorial learning path leads to `full-example.mdx:106` which uses `const projectId = d.uuid();`
   - **Actual**: Same as above - only `get()` method exists on `IDeterminism`
   - **Evidence**: Same as above

4. **Documentation claims `IDefine` interface exists with `uuid()`, `timestamp()`, `seq()` methods**
   - **Documented**: `types.mdx:150-159` shows an `IDefine` interface with these methods
   - **Actual**: The actual interface is `IDeterminism` with only a `get()` method. No `IDefine` interface exists in the SDK
   - **Evidence**: Grep search of `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src` found no `IDefine` interface

5. **`dateSelect()` return type mismatch**
   - **Documented**: `types.mdx:136` shows `dateSelect(...): Promise<Date>`
   - **Actual**: The SDK returns `Promise<string>`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26`:
     ```ts
     dateSelect(q: DateQ): Promise<string>;
     dateSelect(q: string, id: string, help?: string | null): Promise<string>;
     ```

### 🟡 Documentation Issues

1. **Typo in Tutorial 4 description**
   - **Problem**: Line 46 shows "IInquirer interface" with double 'I' at the beginning ("IInquirer" is correct as it's the interface name, but "IInquirer interface" reads awkwardly)
   - **Location**: Line 46: "- IInquirer interface"
   - **Fix**: Change to "- The IInquirer interface" for better readability

2. **Learning path descriptions promise features that don't exist in source code**
   - **Problem**: The learning path descriptions link to tutorials containing significant inaccuracies (e.g., `GlobType.Ignore` in tutorial 3, `d.uuid()` in tutorials 4 and full-example) that cannot be detected from the index alone
   - **Location**: Lines 32-57 (entire Learning Path section)
   - **Fix**: Either update the referenced tutorials to use correct SDK APIs, or update the learning path descriptions to reflect only accurate content

3. **Prerequisites mention "CyanPrint CLI" without installation instructions**
   - **Problem**: Line 64 lists "CyanPrint CLI installed" as a prerequisite but provides no link or instructions for installation
   - **Location**: Line 64
   - **Fix**: Add a link to installation documentation or CLI reference

### 🟠 Other Problems

1. **Documentation-code inconsistency suggests systemic issue**
   - **Problem**: The `types.mdx` reference documents an `IDefine` interface and `GlobType.Ignore` that don't exist in the SDK. This suggests either: (a) the SDK was refactored and documentation was not updated, or (b) documentation was written for a planned API that was never implemented
   - **Recommendation**: Audit all documentation against actual SDK types in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/`

2. **Interface naming inconsistency**
   - **Problem**: Documentation uses `IDefine` while SDK uses `IDeterminism`. The parameter is documented as `d` (for "define") but the interface is about determinism
   - **Recommendation**: Either rename the interface in SDK to `IDefine` (breaking change) or update all documentation to use `IDeterminism` consistently

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 3 |
| 🟠 | 2 |
