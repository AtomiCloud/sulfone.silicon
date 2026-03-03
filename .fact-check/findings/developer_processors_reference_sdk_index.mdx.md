# 📄 File: content/docs/developer/processors/reference/sdk/index.mdx

> SDK Overview page documenting the CyanPrint SDK (`@atomicloud/cyan-sdk`) for processor development, including installation, core exports, and a quick start example.

### 🔴 Source Code Inaccuracies

1. **`ProcessorInput` type is NOT exported from SDK**
   - Documented: `ProcessorInput` listed as an interface export
   - Actual: The SDK exports `CyanProcessorInput` (not `ProcessorInput`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:194` exports `CyanProcessorInput`; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/processor/input.ts` defines `ProcessorInput` but it's not re-exported from main.ts

2. **`VirtualFile` type is NOT exported from SDK**
   - Documented: `VirtualFile` listed as a type export
   - Actual: The class is defined but NOT exported from the SDK's main entry point
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` has no `VirtualFile` in exports; defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:32`

3. **`VirtualFileReference` type is NOT exported from SDK**
   - Documented: `VirtualFileReference` listed as a type export
   - Actual: The class is defined but NOT exported from the SDK's main entry point
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` has no `VirtualFileReference` in exports; defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11`

4. **`VirtualFileStream` type is NOT exported from SDK**
   - Documented: `VirtualFileStream` listed as a type export
   - Actual: The class is defined but NOT exported from the SDK's main entry point
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` has no `VirtualFileStream` in exports; defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4`

5. **Quick Start example uses wrong property names for input**
   - Documented: `input.readDirectory`, `input.writeDirectory`
   - Actual: The `CyanProcessorInput` type uses `readDir` and `writeDir` (not `readDirectory` and `writeDirectory`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` defines `CyanProcessorInput` with `readDir` and `writeDir`

### 🟡 Documentation Issues

1. **Comment in Quick Start shows wrong property names**
   - Problem: The comment `//   - readDirectory: Source files location` and `//   - writeDirectory: Output location` are incorrect
   - Location: Lines 50-51 in the Quick Start code block
   - Fix: Change to `readDir` and `writeDir` to match the actual `CyanProcessorInput` interface

2. **Missing `CyanProcessorInput` from interface documentation**
   - Problem: The actual exported type `CyanProcessorInput` is not documented; instead, a non-existent `ProcessorInput` is shown
   - Location: "Interfaces" table (lines 27-34)
   - Fix: Replace `ProcessorInput` with `CyanProcessorInput` and update description accordingly

3. **Types section documents non-exported types**
   - Problem: `VirtualFile`, `VirtualFileReference`, and `VirtualFileStream` are documented as exports but are internal implementation details not exposed via the SDK's public API
   - Location: "Types" table (lines 36-41)
   - Fix: Either remove these from the documentation or add them to the SDK exports in main.ts

### 🟠 Other Problems

1. **SDK Version Compatibility table may be outdated**
   - Problem: The table references SDK versions 1.x and 2.x with Node.js requirements, but the actual SDK package.json shows version 2.1.0. The compatibility claims have not been verified against actual CLI versions.
   - Recommendation: Verify version compatibility with the actual CyanPrint CLI releases and update accordingly

2. **Quick Start code may not work as written**
   - Problem: The Quick Start example accesses `input.writeDirectory` which doesn't exist on `CyanProcessorInput`. This would cause a TypeScript error or return `undefined` at runtime.
   - Recommendation: Update the return statement to use `input.writeDir` instead of `input.writeDirectory`

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 3 |
| 🟠 | 2 |
