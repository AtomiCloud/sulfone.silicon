<!-- source: content/docs/developer/processors/explanation/read-write-dirs.mdx -->
# File: content/docs/developer/processors/explanation/read-write-dirs.mdx

> Documentation explains read/write directory concepts for processors but uses incorrect property names throughout. The documented `input.readDirectory` and `input.writeDirectory` do not exist - actual properties are `input.readDir` and `input.writeDir`.

### Source Code Inaccuracies

1. **Incorrect input parameter names** | **Documented**: `input.readDirectory` and `input.writeDirectory` | **Actual**: `input.readDir` and `input.writeDir` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:12-13` shows `CyanProcessorInput` uses `readDir` and `writeDir`

2. **Incorrect lambda function signature usage** | **Documented**: `StartProcessorWithLambda(async (input, fileHelper) => { ... return { directory: input.writeDirectory }; })` | **Actual**: `return { directory: input.writeDir }` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` shows `{ directory: input.writeDir }`

3. **Path resolution examples use wrong properties** | **Documented**: `${input.readDirectory}/${file.relative}` and `${input.writeDirectory}/${file.relative}` | **Actual**: `${input.readDir}/${file.relative}` and `${input.writeDir}/${file.relative}` | Evidence: Same property naming error throughout code examples

4. **Console.log examples show wrong property names** | **Documented**: `console.log('Reading from:', input.readDirectory);` and `console.log('Writing to:', input.writeDirectory);` | **Actual**: Should be `input.readDir` and `input.writeDir` | Evidence: Property names don't exist on `CyanProcessorInput`

5. **Comment in example shows wrong property** | **Documented**: `return { directory: input.writeDirectory };` with comment "never change this" | **Actual**: `return { directory: input.writeDir };` | Evidence: `CyanProcessorInput.writeDir` is the correct property

### Documentation Issues

1. **Problem**: All code examples use incorrect property names `readDirectory`/`writeDirectory` instead of `readDir`/`writeDir` | **Location**: Lines 62-72, 93-106, 130-136, 143-162, 168-174, 179-186, 190-211, 215-239 | **Fix**: Replace all occurrences of `input.readDirectory` with `input.readDir` and `input.writeDirectory` with `input.writeDir`

2. **Problem**: Table shows "Path" values as `/workspace/cyanprint/` and `/workspace/output/` but these are environment-specific and may not match all deployments | **Location**: Lines 28-32 | **Fix**: Add note that paths are examples and actual values depend on container/deployment configuration

3. **Problem**: Missing explanation of type distinction - internal `ProcessorInput` (with `readDirectory`/`writeDirectory`) vs SDK-exposed `CyanProcessorInput` (with `readDir`/`writeDir`) | **Location**: Throughout document | **Fix**: Add a note explaining that the SDK uses shorthand property names for developer convenience

### Other Problems

1. **Problem**: The `resolveAll()` method has side effects not documented - it copies Copy-type files first, then returns Template-type files | **Recommendation**: Document that `resolveAll()` performs automatic file copying for Copy-type globs before returning Template-type files for processing

2. **Problem**: The statement "Files not written are not included in output" (Rule 4) is incomplete - it doesn't explain that Copy-type files are automatically written during `resolveAll()` | **Recommendation**: Clarify the distinction between Copy-type files (auto-copied) and Template-type files (must call `writeFile()`)

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 5 |
| Documentation Issues | 3 |
| Other Problems | 2 |
