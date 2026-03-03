<!-- source: content/docs/developer/templates/index.mdx -->
# 📄 File: content/docs/developer/templates/index.mdx

> The index.mdx file provides a comprehensive overview of template development with CyanPrint SDK. Most content is accurate, but there are several discrepancies between documentation and actual SDK source code, primarily around enum values and type definitions in the linked reference documentation.

### 🔴 Source Code Inaccuracies

1. **GlobType Enum - Missing Value (in linked types.mdx)**
   - **Documented**: `GlobType.Ignore = 2` in types.mdx and cyan-config.mdx
   - **Actual**: `GlobType` only has `Template = 0` and `Copy = 1` in the SDK
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`
   ```ts
   enum GlobType {
     Template = 0,
     Copy = 1,
   }
   ```

2. **IDeterminism Interface (in linked types.mdx)**
   - **Documented**: `IDeterminism` has methods `uuid()`, `timestamp()`, `seq(namespace)`
   - **Actual**: `IDeterminism` only has `get(key: string, origin: () => string): string`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`
   ```ts
   interface IDeterminism {
     get(key: string, origin: () => string): string;
   }
   ```

3. **dateSelect() Return Type (in linked types.mdx and inquirer.mdx)**
   - **Documented**: `dateSelect()` returns `Promise<Date>`
   - **Actual**: `dateSelect()` returns `Promise<string>` based on IInquirer interface
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26`
   ```ts
   dateSelect(q: DateQ): Promise<string>;
   dateSelect(q: string, id: string, help?: string | null): Promise<string>;
   ```

4. **IFileGroup.root Property (in linked types.mdx)**
   - **Documented**: `root: string` (required)
   - **Actual**: `root?: string | null` (optional)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11`
   ```ts
   interface CyanGlob {
     root?: string | null;
     glob: string;
     exclude: string[];
     type: GlobType;
   }
   ```

5. **config Property Types (in linked types.mdx)**
   - **Documented**: `config: Record<string, any>` for IProcessor and IPlugin
   - **Actual**: `config: unknown` for both CyanProcessor and CyanPlugin
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:13-22`
   ```ts
   interface CyanPlugin {
     name: string;
     config: unknown;
   }
   interface CyanProcessor {
     name: string;
     files: CyanGlob[];
     config: unknown;
   }
   ```

### 🟡 Documentation Issues

1. **Inconsistent Interface Names**
   - **Problem**: Documentation uses `ICyanConfig`, `IProcessor`, `IPlugin`, `IFileGroup` but SDK exports `Cyan`, `CyanProcessor`, `CyanPlugin`, `CyanGlob`
   - **Location**: types.mdx and cyan-config.mdx (linked from index.mdx)
   - **Fix**: Update interface names to match SDK exports or clarify the naming convention

2. **Directory Naming Inconsistency**
   - **Problem**: Quick Example shows `root: 'templates'` (plural) but actual e2e templates use `root: 'template'` (singular)
   - **Location**: index.mdx line 112
   - **Fix**: Use `root: 'template'` for consistency with actual codebase, or document that this is customizable

3. **Missing Type Annotations in Quick Example**
   - **Problem**: Quick Example parameters `i` and `d` lack explicit types, while e2e templates include them: `async (i: IInquirer, d: IDeterminism)`
   - **Location**: index.mdx lines 103-117
   - **Fix**: Add explicit type annotations for clarity, or add IInquirer and IDeterminism to imports

4. **Template Variable Syntax Not Explained**
   - **Problem**: Template file example shows `var__name__` without explaining the syntax
   - **Location**: index.mdx line 122
   - **Fix**: Add brief explanation or link to Default Processor explanation

### 🟠 Other Problems

1. **Processor Name Convention Unclear**
   - **Problem**: Documentation uses `cyan/default` but e2e examples use `ernest/processor1`, `ernest/processor2`
   - **Recommendation**: Clarify naming convention - is `cyan/default` a built-in processor? What's the registration process?

2. **Plugin Names Not Verified**
   - **Problem**: Linked documentation references `cyan/init-git`, `cyan/npm-install` as plugins but these are not found in source code; e2e uses `ernest/plugin1`, `ernest/plugin2`
   - **Recommendation**: Verify these plugin names exist or document actual available plugins

3. **SDK Version Not Documented**
   - **Problem**: Documentation doesn't specify SDK version requirements; actual package is `@atomicloud/cyan-sdk` version 2.1.0
   - **Recommendation**: Add version information to documentation for API stability tracking

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 4 |
| 🟠 | 3 |
