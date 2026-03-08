<!-- source: content/docs/developer/processors/how-to/resolve-all-files.mdx -->
# File: content/docs/developer/processors/how-to/resolve-all-files.mdx

> Documentation for `resolveAll()` method on CyanFileHelper. The documented API, properties, methods, and code examples were verified against the actual SDK implementation in helium/sdks/node. All factual claims are accurate.

### Source Code Inaccuracies
(for each: Documented | Actual | file:line evidence)

None found. All documented APIs match the actual SDK implementation:
- `resolveAll()` method exists on CyanFileHelper class (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33)
- VirtualFile class has documented properties: `baseRead`, `baseWrite`, `relative`, `content` (helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-38)
- VirtualFile class has documented getters: `read`, `write` (helium/sdks/node/src/domain/core/fs/virtual_file.ts:40-46)
- VirtualFile class has documented method: `writeFile()` (helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54)
- `StartProcessorWithLambda` is correctly exported from `@atomicloud/cyan-sdk` (helium/sdks/node/src/main.ts:106, 170)
- Return type `{ directory: input.writeDir }` matches `ProcessorOutput` interface (helium/sdks/node/src/domain/processor/output.ts:1-5)

### Documentation Issues
(for each: Problem | Location | Fix)

1. **Incomplete property table** | VirtualFile Properties table (lines 49-56) | The table is missing `baseRead` and `baseWrite` properties which are public properties on the VirtualFile class. These are important because they are the source for the `read` and `write` getters.

### Other Problems
(for each: Problem | Recommendation)

1. **Minor comment accuracy** | Line 31 comment states "Copy-type globs are automatically handled - files are copied directly" | While accurate, this could be clearer: Copy-type globs are processed first and copied to output, then only Template-type globs are returned as VirtualFile[]. The implementation at cyan_fs_helper.ts:34-39 shows this two-phase behavior.

2. **Related link path** | Line 111 references `/docs/developer/processors/reference/sdk/file-helper` | This is correct per the instructions that links starting from `/docs` are correct.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 0 |
| Documentation Issues | 1 |
| Other Problems | 2 |
