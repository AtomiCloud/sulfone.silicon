<!-- source: content/docs/developer/processors/how-to/stream-large-files.mdx -->
# 📄 File: content/docs/developer/processors/how-to/stream-large-files.mdx

> Document describes `readAsStream()` method for streaming large files. The API and usage patterns are mostly accurate, but there are some minor issues with the return type description and table formatting.

### 🔴 Source Code Inaccuracies
1. **VirtualFileStream properties type** | Documented as `fs.ReadStream` and `fs.WriteStream` | Actual: Uses `fs.ReadStream` and `fs.WriteStream` from 'node:fs' | Evidence: `helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-8` shows `public reader: fs.ReadStream, public writer: fs.WriteStream` - this is CORRECT

2. **VirtualFileStream not exported from SDK** | Documented as if users can use `VirtualFileStream` type directly | Actual: `VirtualFileStream` is NOT exported from `@atomicloud/cyan-sdk` main.ts | Evidence: `helium/sdks/node/src/main.ts` exports only `CyanFileHelper, GlobType, QuestionType` and various types - `VirtualFileStream` is defined in `virtual_file.ts` but not re-exported from main.ts

### 🟡 Documentation Issues
1. **Missing type import for VirtualFileStream** | The table documents VirtualFileStream properties but users cannot import this type from `@atomicloud/cyan-sdk` | Add note that the type is inferred from return of `readAsStream()` or consider exporting it from the SDK

2. **Incomplete type signature** | The table uses `fs.ReadStream` and `fs.WriteStream` but doesn't show that users need to import `fs` from Node.js to use proper typing | Recommend using `NodeJS.ReadableStream` and `NodeJS.WritableStream` or noting these are Node.js stream types

3. **Minor inconsistency in glob usage** | Code example uses `glob: '**/*'` which would match all files including directories, but the actual implementation uses `nodir: true` option | Evidence: `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:44-49` shows `nodir: true` - documentation could clarify this filters out directories

### 🟠 Other Problems
1. **Writer usage pattern** | The examples show `writer.write(processed)` but the actual `fs.WriteStream` may need encoding specification for strings | Recommend adding encoding parameter like `writer.write(processed, 'utf-8')` for text data

2. **Error handling not mentioned** | No discussion of error handling for stream operations which can fail | Consider adding guidance on handling stream errors with `.on('error', ...)` events

3. **Stream closing in error cases** | Examples don't show proper cleanup if an error occurs mid-stream | Recommend adding `.destroy()` or try/finally patterns for proper resource cleanup

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 3 |
| 🟠 | 3 |
