<!-- source: content/docs/developer/processors/how-to/copy-files.mdx -->
# File: content/docs/developer/processors/how-to/copy-files.mdx

> This page documents the `copy()` method for copying files without loading into memory. The code examples use incorrect property names (`writeDirectory` vs `writeDir`). The underlying SDK types and APIs are documented incorrectly across the documentation set.

### Source Code Inaccuracies

1. **Input property name mismatch**
   - Documented: `input.writeDirectory`
   - Actual: `input.writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` shows `CyanProcessorInput` interface has `writeDir: string` not `writeDirectory: string`. All code examples on this page (lines 40, 61, 93, 114) incorrectly use `input.writeDirectory`.

2. **SDK interface name mismatch (documentation-wide issue)**
   - Documented: `ProcessorInput` interface with `readDirectory` and `writeDirectory`
   - Actual: `CyanProcessorInput` interface with `readDir` and `writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:194` exports `CyanProcessorInput`, not `ProcessorInput`.

3. **CyanGlob interface discrepancy**
   - Documented: `root: string` (required), `exclude?: string[]` (optional)
   - Actual: `root?: string | null` (optional), `exclude: string[]` (required), plus `type: GlobType` (missing from docs)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11`

4. **VirtualFileReference API mismatch (affects related pages)**
   - Documented: `load(): Promise<string>`, `writeFile(content: string): void`, `copy(): void`
   - Actual: `readFile(): VirtualFile` (synchronous, not async), `read: string` getter, `write: string` getter, no `load()`, no `copy()`, no `writeFile(content)`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30`

5. **VirtualFileStream API mismatch (affects related pages)**
   - Documented: `relative: string` property, `read(): AsyncIterable<Buffer>` method, `writeFile(content: string): void`
   - Actual: `reader: fs.ReadStream`, `writer: fs.WriteStream` - no `relative`, no `read()` method, no `writeFile()`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

### Documentation Issues

1. **All code examples use wrong property name**
   - Problem: All 4 code examples use `input.writeDirectory` which does not exist on `CyanProcessorInput`
   - Location: Lines 40, 61, 93, 114
   - Fix: Change `input.writeDirectory` to `input.writeDir`

2. **Performance comparison table claims unverified**
   - Problem: The performance comparison table (lines 124-129) makes claims about memory usage and speed that cannot be verified from source code
   - Location: Lines 122-130
   - Fix: Either verify these claims with benchmarks or mark them as conceptual comparisons rather than measured data

3. **Callout claim about memory efficiency**
   - Problem: The callout (lines 118-120) states `copy()` transfers files "without being loaded into the processor's memory" - this is accurate based on implementation, but should be verified against actual file copy mechanism
   - Location: Lines 118-120
   - Recommendation: The claim appears accurate based on `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:77-93` which uses `fs.copyFileSync`

### Other Problems

1. **Documentation describes idealized API that doesn't match SDK**
   - Problem: The documentation appears to describe an aspirational or planned API rather than the actual implemented SDK. Methods like `VirtualFileReference.load()`, `VirtualFileReference.copy()`, `VirtualFileStream.read()` don't exist in the actual code.
   - Recommendation: Either update the documentation to match the current SDK, or update the SDK to implement the documented API.

2. **Real-world example uses correct property**
   - The actual processor implementations in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` correctly use `input.writeDir`, confirming the documentation is wrong.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 5 |
| Documentation Issues | 3 |
| Other Problems | 2 |
