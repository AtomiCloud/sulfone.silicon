<!-- source: content/docs/developer/processors/explanation/why-processors.mdx -->
# 📄 File: content/docs/developer/processors/explanation/why-processors.mdx

> This document explains the purpose and use cases for custom processors in CyanPrint, including the default processor, templating engines, and code examples for various processing scenarios.

### 🔴 Source Code Inaccuracies

1. **Incorrect property name `writeDirectory` vs `writeDir`**
   - **Documented**: `input.writeDirectory` (lines 68, 86, 105)
   - **Actual**: `input.writeDir`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:12-13` - The `CyanProcessorInput` interface defines `writeDir: string`, not `writeDirectory`. Also confirmed in actual processor implementation at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` which returns `{ directory: input.writeDir }`.

2. **Incomplete CyanGlob parameter in fileHelper.read() calls**
   - **Documented**: `fileHelper.read({ root: 'schemas', glob: '**/*.graphql' })` (line 59) and similar (line 77)
   - **Actual**: `fileHelper.read(g: CyanGlob)` requires complete `CyanGlob` with `exclude: string[]` and `type: GlobType` properties
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11` defines `CyanGlob` interface with required properties: `glob: string`, `exclude: string[]`, `type: GlobType`. The `read(g: CyanGlob)` method at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:73` requires a complete `CyanGlob` object.

3. **GlobType enum values differ between Node and Python SDKs**
   - **Documented**: Uses `GlobType.Template` in code examples (lines 129, 135, 141) without specifying values
   - **Actual**: Node SDK: `Template = 0, Copy = 1`; Python SDK: `Template = 1, Copy = 2`
   - **Evidence**: Node SDK at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `Template = 0, Copy = 1`. Python SDK at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:7-9` shows `Template = 1, Copy = 2`. This inconsistency could cause cross-language issues.

4. **fileHelper.resolveAll() behavior not fully documented**
   - **Documented**: `fileHelper.resolveAll()` returns files that can be iterated (line 96)
   - **Actual**: `resolveAll()` first copies all Copy-type files, then reads and returns Template-type files
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40` shows the implementation copies Copy-type globs before returning Template-type files.

### 🟡 Documentation Issues

1. **Code examples use hypothetical helper functions**
   - **Problem**: Functions like `generateTypeScript()`, `parseTypeScript()`, `addDeprecationComments()`, `printTypeScript()`, `removeDebugCode()` don't exist in the SDK
   - **Location**: Lines 62, 80-82, 100
   - **Fix**: Mark these as pseudo-code examples or clarify they are placeholder function names representing user-defined logic

2. **Default processor naming convention unclear**
   - **Problem**: Document references `cyan/default` as the default processor but doesn't explain the `namespace/processor-name` format
   - **Location**: Line 14
   - **Fix**: Clarify that processor names follow `username/processor-name` format as shown in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml:1-2`

3. **Missing import statements in code examples**
   - **Problem**: Code examples use `StartProcessorWithLambda` and `GlobType` without showing imports
   - **Location**: Lines 56-107, 122-146
   - **Fix**: Add import statements: `import { StartProcessorWithLambda, GlobType } from '@atomicloud/cyan-sdk';`

4. **VirtualFile.relative property modification not explained**
   - **Problem**: Code example shows `schema.relative` being modified (line 63) but doesn't explain this changes the output path
   - **Location**: Lines 63-64
   - **Fix**: Add a comment explaining that modifying `relative` determines the output file path

### 🟠 Other Problems

1. **Mermaid diagrams reference hypothetical processors**
   - **Problem**: Diagram shows `custom/jinja`, `custom/go-templates`, `custom/handlebars` as processor names (lines 41-43) but these are illustrative examples
   - **Recommendation**: Add a note clarifying these are example processor names for illustration purposes

2. **GlobType.Template vs GlobType.Copy not explained**
   - **Problem**: Document references `GlobType.Template` but doesn't explain the difference between Template and Copy types
   - **Recommendation**: Add brief explanation or link to relevant documentation

3. **Processing pipeline example lacks context**
   - **Problem**: Multi-stage pipeline example (lines 122-146) shows processor configuration but doesn't explain this is part of a template's return value
   - **Recommendation**: Add context showing this code belongs in a template's return statement

4. **Templating engine comparison table may mislead**
   - **Problem**: Table (lines 30-36) lists Jinja, Go Templates, Handlebars, Mustache as alternatives but doesn't clarify these require custom processor implementation
   - **Recommendation**: Clarify these are potential custom processors users could implement, not built-in options

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 4 |
| 🟠 | 4 |
