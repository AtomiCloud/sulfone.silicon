<!-- source: content/docs/developer/templates/reference/index.mdx -->
# 📄 File: content/docs/developer/templates/reference/index.mdx

> This file is a template reference index page that links to SDK documentation and provides quick reference tables. Multiple claims in this document are inaccurate when compared to the actual SDK source code in helium/sdks/node.

### 🔴 Source Code Inaccuracies

1. **`GlobType.Ignore` does not exist**
   - **Documented**: `GlobType.Ignore` - "Skip entirely" is a valid file processing type (line 61)
   - **Actual**: The SDK only defines `GlobType.Template = 0` and `GlobType.Copy = 1`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`:
     ```typescript
     enum GlobType {
       Template = 0,
       Copy = 1,
     }
     ```
     Also confirmed in Rust implementation at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:4-7`

2. **`dateSelect()` returns `string`, not `Date`**
   - **Documented**: `dateSelect()` | `Date` | Date selection (line 53)
   - **Actual**: `dateSelect()` returns `Promise<string>` in both the interface and implementation
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26`:
     ```typescript
     dateSelect(q: DateQ): Promise<string>;
     dateSelect(q: string, id: string, help?: string | null): Promise<string>;
     ```

3. **`IDefine`/`IDeterminism` interface methods are incorrect in linked documentation**
   - **Documented** (in linked sdk/index.mdx): `d.uuid()`, `d.timestamp()`, `d.seq()` methods on IDefine
   - **Actual**: The `IDeterminism` interface only has a `get(key: string, origin: () => string): string` method
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`:
     ```typescript
     interface IDeterminism {
       get(key: string, origin: () => string): string;
     }
     ```

4. **Type names in linked documentation don't match SDK**
   - **Documented**: `IProcessor`, `IFileGroup`, `ICyanConfig` type names (in linked cyan-config.mdx)
   - **Actual**: SDK uses `CyanProcessor`, `CyanGlob`, `Cyan` type names
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-27`:
     ```typescript
     interface CyanGlob { ... }
     interface CyanPlugin { ... }
     interface CyanProcessor { ... }
     interface Cyan { ... }
     ```

### 🟡 Documentation Issues

1. **Inconsistent return type for `dateSelect()` in Quick Reference table**
   - **Problem**: The table claims `dateSelect()` returns `Date`, but actual SDK returns `string`
   - **Location**: Line 53 (Question Types table)
   - **Fix**: Change `Date` to `string` in the Returns column

2. **Non-existent `GlobType.Ignore` in File Processing table**
   - **Problem**: The File Processing table lists `GlobType.Ignore` as a valid option, but this doesn't exist in the SDK
   - **Location**: Lines 57-61 (File Processing table)
   - **Fix**: Remove the `GlobType.Ignore` row from the table entirely

3. **SDK Reference links propagate errors**
   - **Problem**: Links to `/developer/templates/reference/sdk/inquirer`, `/developer/templates/reference/sdk/globbing`, `/developer/templates/reference/sdk/types` contain inaccurate information that propagates errors
   - **Location**: Lines 21-24 (SDK Reference section)
   - **Fix**: These linked files need correction to match actual SDK implementation

4. **Entry Point example missing type imports**
   - **Problem**: The example only imports `StartTemplateWithLambda` and `GlobType`, but doesn't show `IInquirer` and `IDeterminism` which are the actual parameter types used
   - **Location**: Lines 30-31 entry point code block
   - **Fix**: Show the full import pattern:
     ```typescript
     import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';
     import type { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';
     ```

### 🟠 Other Problems

1. **Version compatibility may need verification**
   - **Problem**: Documentation claims SDK 2.x with CyanPrint CLI 2.x and Node.js 20+ (in linked sdk/index.mdx)
   - **Recommendation**: Verify current SDK version (helium/sdks/node/package.json shows 2.1.0) matches documented compatibility

2. **Processor name `cyan/default` could be clearer**
   - **Problem**: The quick reference example uses `name: 'cyan/default'` without explaining this is the built-in default processor
   - **Recommendation**: Add a note explaining `cyan/default` is the built-in default processor, or use a more realistic custom processor name

3. **Entry Point example lacks type annotations**
   - **Problem**: The example shows `async (i, d) =>` without type annotations, which works but differs from e2e test templates that use explicit types
   - **Recommendation**: Consider adding type annotations for better developer experience and IDE support: `async (i: IInquirer, d: IDeterminism) =>`

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 4 |
| 🟠 | 3 |
