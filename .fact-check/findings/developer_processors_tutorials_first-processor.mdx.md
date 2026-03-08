<!-- source: content/docs/developer/processors/tutorials/first-processor.mdx -->
# File: content/docs/developer/processors/tutorials/first-processor.mdx

> Tutorial for creating a first processor - API and code samples verified against helium SDK and iridium examples. Minor issues found with input type naming and Dockerfile version.

### Source Code Inaccuracies
1. **Input Type Name** | Documented: `ProcessorInput` | Actual: `CyanProcessorInput` | helium/sdks/node/src/domain/core/cyan_script_model.ts:11 - The SDK type is `CyanProcessorInput` with properties `readDir`, `writeDir`, `globs`, `config`. The documented `ProcessorInput` is an internal type in helium/sdks/node/src/domain/processor/input.ts.

2. **Input Property Names** | Documented: `input.writeDirectory` (line 55) | Actual: `input.writeDir` | helium/sdks/node/src/domain/core/cyan_script_model.ts:13 and iridium/e2e/processor1/index.ts:55 - The actual property is `writeDir`, not `writeDirectory`.

3. **Dockerfile Bun Version** | Documented: `oven/bun:1.1.31` | Actual: `oven/bun:1.0.11` in examples | iridium/e2e/processor1/Dockerfile:1 and iridium/e2e/processor2/Dockerfile:1 - The example Dockerfiles use 1.0.11. Note: 1.1.31 may be intentional as a newer recommended version, but this is inconsistent with actual e2e tests.

4. **Bun.lockb Copy Pattern** | Documented: `COPY package.json bun.lockb* ./` (with wildcard) | Actual: `COPY bun.lockb .` (without wildcard) | iridium/e2e/processor1/Dockerfile:5 - The wildcard pattern is a valid improvement for optional lockfile, but differs from actual examples.

### Documentation Issues
1. **Inconsistent Input Property Reference** | Location: Line 55 code example `return { directory: input.writeDirectory };` | Fix: Change to `return { directory: input.writeDir };` to match the actual SDK type `CyanProcessorInput`.

2. **Type Name Mismatch in Table** | Location: Line 92 table `ProcessorInput` | Fix: Change to `CyanProcessorInput` to match the exported SDK type, or clarify that this is the conceptual name.

3. **Missing ProcessorInput Import** | Location: Code example at line 38-56 | Fix: The code example doesn't import `ProcessorInput` but references it conceptually. The actual SDK exports `CyanProcessorInput` type, not `ProcessorInput`. Consider either showing the import or adjusting the table to use correct type name.

### Other Problems
1. **Processor Return Directory Property** | Recommendation: The documentation shows `return { directory: input.writeDirectory }` but real examples use `return { directory: input.writeDir }`. Ensure consistency with SDK - the `ProcessorOutput` interface only requires a `directory` property, which should point to the write directory.

2. **Template Test Code Example** | Location: Lines 132-141 | The example shows an inline comment `// In template's index.ts` but the actual format would use `StartTemplateWithLambda`. Consider providing a more complete example or linking to the template tutorials for context.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 4 |
| Documentation Issues | 3 |
| Other Problems | 2 |
