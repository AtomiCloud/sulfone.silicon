<!-- source: content/docs/developer/processors/how-to/stream-large-files.mdx -->
# 📄 File: content/docs/developer/processors/how-to/stream-large-files.mdx

> This documentation describes a `readAsStream()` API that exists but the `VirtualFileStream` interface documented is completely incorrect. The actual class only exposes raw Node.js streams (`reader`/`writer`) and does NOT have the `relative` property, `read()` method, or `writeFile(content)` method documented. All code examples are non-functional as written.

### 🔴 Source Code Inaccuracies

1. **VirtualFileStream.relative property**
   - Documented: `relative: string` - "Path relative to read directory"
   - Actual: `VirtualFileStream` class has no `relative` property. The class only has `reader: fs.ReadStream` and `writer: fs.WriteStream` properties.
   - Evidence: `helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

2. **VirtualFileStream.read() method**
   - Documented: `read(): AsyncIterable<Buffer>` - "Read file as chunks"
   - Actual: `VirtualFileStream` class has no `read()` method. The `reader` property is a Node.js `fs.ReadStream` that must be used directly.
   - Evidence: `helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

3. **VirtualFileStream.writeFile(content) method**
   - Documented: `writeFile(content): void` - "Write content to output"
   - Actual: `VirtualFileStream` class has no `writeFile(content)` method. The class only has a `writer: fs.WriteStream` property.
   - Evidence: `helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

4. **Input parameter writeDirectory property**
   - Documented: `input.writeDirectory` in return statement
   - Actual: `CyanProcessorInput` (what LambdaProcessorFn receives) has `writeDir`, NOT `writeDirectory`
   - Evidence: `helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` and `helium/sdks/node/src/domain/processor/service.ts:16-24`

5. **All code examples are non-functional**
   - Documented: Multiple code examples using `stream.relative`, `stream.read()`, `stream.writeFile()`
   - Actual: None of these APIs exist on `VirtualFileStream`. Examples would throw runtime errors.
   - Evidence: `helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

### 🟡 Documentation Issues

1. **VirtualFileStream Properties table is incorrect**
   - Problem: Table documents `relative: string` but this property doesn't exist on `VirtualFileStream`
   - Location: Lines 47-51
   - Fix: Document actual properties: `reader: fs.ReadStream` and `writer: fs.WriteStream`

2. **VirtualFileStream Methods table is incorrect**
   - Problem: Table documents non-existent methods `read()` and `writeFile(content)`
   - Location: Lines 53-58
   - Fix: Remove this table or document that users should work with `reader`/`writer` streams directly using Node.js stream APIs

3. **Usage example code is non-functional**
   - Problem: Code uses `stream.relative`, `stream.read()`, `stream.writeFile()` which don't exist
   - Location: Lines 22-45
   - Fix: Rewrite using `stream.reader` and `stream.writer` with Node.js stream APIs

4. **Line-by-Line Processing example is non-functional**
   - Problem: Same issue - uses non-existent APIs
   - Location: Lines 62-86
   - Fix: Rewrite using actual `VirtualFileStream` API

5. **Binary File Processing example is non-functional**
   - Problem: Same issue - uses non-existent APIs
   - Location: Lines 90-111
   - Fix: Rewrite using actual `VirtualFileStream` API

6. **Transform While Streaming example is non-functional**
   - Problem: Same issue - uses non-existent APIs
   - Location: Lines 115-139
   - Fix: Rewrite using actual `VirtualFileStream` API

### 🟠 Other Problems

1. **VirtualFileStream is a thin wrapper without utility methods**
   - Problem: The actual `VirtualFileStream` class is extremely minimal - it just holds two Node.js streams without any helper methods for tracking file paths or content processing
   - Recommendation: Either enhance the `VirtualFileStream` class to add `relative`, `read()`, and `writeFile()` methods as documented, or update documentation to reflect the raw Node.js stream API

2. **Missing relative path tracking**
   - Problem: `VirtualFileStream` doesn't track the relative path of the file being streamed, making it impossible to know which file is being processed
   - Recommendation: Add `relative: string` property to `VirtualFileStream` constructor similar to `VirtualFileReference`

3. **Callout about copy() method lacks context**
   - Problem: The callout recommends using `copy()` for massive files but doesn't explain how to use `fileHelper.copy()` instead of streaming
   - Recommendation: Clarify that `fileHelper.copy()` should be called on the `CyanFileHelper` instance

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 6 |
| 🟠 | 3 |
