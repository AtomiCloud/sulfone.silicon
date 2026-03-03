<!-- source: content/docs/developer/templates/reference/sdk/index.mdx -->
# 📄 File: content/docs/developer/templates/reference/sdk/index.mdx

> SDK Overview documentation for CyanPrint SDK (`@atomicloud/cyan-sdk`), describing entry points, interfaces, types, and usage examples. The documentation contains multiple inaccuracies when compared to the actual SDK source code.

### 🔴 Source Code Inaccuracies

1. **IDefine Interface Does Not Exist**
   - **Documented**: `IDefine` interface with methods `uuid()`, `timestamp()`, `seq()` listed under "Interfaces" table
   - **Actual**: The interface is named `IDeterminism`, not `IDefine`. It only has a single method: `get(key: string, origin: () => string): string`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5` shows `interface IDeterminism { get(key: string, origin: () => string): string; }`

2. **IDefine Methods Do Not Exist**
   - **Documented**: `d.uuid()`, `d.timestamp()`, `d.seq('users')` methods shown in "Using IDefine" section
   - **Actual**: The `IDeterminism` interface only has a `get(key: string, origin: () => string): string` method. No `uuid()`, `timestamp()`, or `seq()` methods exist.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`

3. **ICyanConfig Interface Not Exported**
   - **Documented**: `ICyanConfig` listed under "Interfaces" table with description "Template configuration structure"
   - **Actual**: No `ICyanConfig` interface exists in the SDK. The configuration type is `Cyan` (which contains processors and plugins).
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:183-207` shows all exported types; `ICyanConfig` is not among them. The actual config type is `Cyan` defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27`

4. **IProcessor Interface Not Exported**
   - **Documented**: `IProcessor` listed under "Interfaces" table with description "Processor definition"
   - **Actual**: No `IProcessor` interface exists. The SDK uses `CyanProcessor` type internally.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:18-22` defines `interface CyanProcessor`

5. **FileGroup Type Does Not Exist**
   - **Documented**: `FileGroup` listed under "Types" table with description "File group configuration"
   - **Actual**: No `FileGroup` type is exported. The equivalent type is `CyanGlob`.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:196` exports `CyanGlob`, not `FileGroup`

6. **GlobType.Ignore Does Not Exist**
   - **Documented**: `GlobType` shows three values: Template, Copy, Ignore (implied from types reference)
   - **Actual**: The `GlobType` enum only has two values: `Template = 0` and `Copy = 1`. There is no `Ignore` value.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `enum GlobType { Template = 0, Copy = 1 }`

7. **dateSelect Return Type Incorrect**
   - **Documented**: `dateSelect()` returns `Promise<Date>` in "Using IInquirer" section
   - **Actual**: `dateSelect()` returns `Promise<string>`, not `Promise<Date>`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26` shows `dateSelect(q: DateQ): Promise<string>;` and `dateSelect(q: string, id: string, help?: string | null): Promise<string>;`

8. **CyanGlob.root is Optional, Not Required**
   - **Documented**: Quick Start example shows `root: 'templates'` as a required field
   - **Actual**: The `root` field is optional (`root?: string | null`)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7` shows `root?: string | null;`

9. **Cyan.plugins is Required, Not Optional**
   - **Documented**: Quick Start example implies plugins may be optional (not included in basic example)
   - **Actual**: The `plugins` field is required on the `Cyan` interface (not `plugins?:`)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:26` shows `plugins: CyanPlugin[];` (no `?`)

10. **Comment in Quick Start Example Uses Wrong Type Name**
    - **Documented**: Comment says `// d: IDefine - get deterministic values`
    - **Actual**: The actual type is `IDeterminism`, not `IDefine`
    - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts:6` shows `type LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>`

### 🟡 Documentation Issues

1. **Missing Export: StartResolverWithLambda**
   - **Problem**: The SDK exports `StartResolverWithLambda` and `StartResolver` as additional entry points, but these are not documented.
   - **Location**: "Entry Points" table (lines 18-25)
   - **Fix**: Add `StartResolverWithLambda` and `StartResolver` to the entry points table

2. **Missing Types in Documentation**
   - **Problem**: Several exported types are not documented: `Cyan`, `CyanGlob`, `CyanProcessorInput`, `CyanPluginInput`, `ProcessorOutput`, `PluginOutput`, `ResolverOutput`, `ResolverInput`, `CheckboxQ`, `ConfirmQ`, `DateQ`, `PasswordQ`, `SelectQ`, `TextQ`, `ICyanPlugin`, `ICyanProcessor`, `ICyanResolver`, `ICyanTemplate`, `LambdaTemplateFn`, `LambdaPluginFn`, `LambdaResolverFn`
   - **Location**: "Interfaces" and "Types" tables (lines 26-42)
   - **Fix**: Update the tables to reflect actual SDK exports or link to comprehensive API reference

3. **IInquirer Parameter Naming: desc vs help**
   - **Problem**: Documentation examples use third parameter described as "description" but actual SDK parameter name is `help`
   - **Location**: Lines 67-78 "Using IInquirer" examples
   - **Fix**: Update examples to use `help` terminology or clarify the parameter purpose

4. **SDK Reference Links Consistency**
   - **Problem**: Links to SDK reference pages exist but the naming in those pages should be verified to match actual SDK types (e.g., `cyan-config` should document `Cyan` type, not `ICyanConfig` which doesn't exist)
   - **Location**: Lines 94-98 "SDK Reference Sections"
   - **Fix**: Verify linked pages use correct interface/type names from actual SDK

5. **Missing dateSelect Method Example**
   - **Problem**: The `IInquirer` interface has a `dateSelect` method that is not shown in the "Using IInquirer" examples
   - **Location**: Lines 64-78 "Using IInquirer" section
   - **Fix**: Add an example for `dateSelect` method

6. **Version Compatibility Table Unverified**
   - **Problem**: SDK version 2.x maps to CyanPrint CLI 2.x and Node.js 20+ - this cannot be verified from source code alone
   - **Location**: Lines 100-106 "Version Compatibility"
   - **Fix**: Add note that this is guidance based on testing, or verify against release notes

### 🟠 Other Problems

1. **SDK Description Could Be More Specific**
   - **Problem**: The description mentions "plugins" but doesn't clarify what plugins do vs processors
   - **Recommendation**: Add brief description of the difference between processors and plugins in the overview

2. **Installation Command May Need Version Pinning**
   - **Problem**: The installation command `npm install @atomicloud/cyan-sdk` installs latest, but the version compatibility table suggests specific version matching matters
   - **Recommendation**: Consider adding guidance on version pinning or version selection

3. **Using IDefine Section Completely Wrong**
   - **Problem**: The entire "Using IDefine" section (lines 80-91) documents non-existent methods. The actual `IDeterminism` interface has a completely different API.
   - **Recommendation**: Either remove this section entirely or replace with correct documentation of `IDeterminism.get(key, origin)` method

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 10 |
| 🟡 | 6 |
| 🟠 | 3 |
