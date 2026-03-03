<!-- source: content/docs/developer/processors/explanation/memory-loading.mdx -->
# 📄 File: content/docs/developer/processors/explanation/memory-loading.mdx

> This documentation file explains memory loading strategies for processors. While the conceptual information about memory management is sound, there are several critical API inaccuracies where documented method names and signatures do not match the actual SDK implementation in helium.

### 🔴 Source Code Inaccuracies

1. **VirtualFileReference.load() method does not exist**
   - Documented: `const content = await ref.load();` (lines 82-84, 142)
   - Actual: The method is named `readFile()`, returns a `VirtualFile` object (not a string), and is synchronous, not async
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:26-29` - `readFile(): VirtualFile { const content = fs.readFileSync(this.read, 'utf-8'); return new VirtualFile(..., content); }`

2. **VirtualFileReference.copy() method does not exist**
   - Documented: `ref.copy();` for copying without loading (lines 86, 136, 145)
   - Actual: `VirtualFileReference` has no `copy()` method. The `copy()` method exists only on `CyanFileHelper`, not on the reference object
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - VirtualFileReference class only has `read`, `write` properties and `readFile()` method

3. **VirtualFileStream.read() method does not exist**
   - Documented: `for await (const chunk of stream.read())` (lines 99, 169)
   - Actual: `VirtualFileStream` has a `reader` property (a `fs.ReadStream`), not a `read()` method. Usage should iterate over `stream.reader` directly
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9` - `class VirtualFileStream { constructor(public reader: fs.ReadStream, public writer: fs.WriteStream) {} }`

4. **VirtualFileStream.writeFile() method does not exist**
   - Documented: `stream.writeFile(transform(content));` (referenced in file-helper.mdx line 173)
   - Actual: `VirtualFileStream` has a `writer` property (a `fs.WriteStream`), not a `writeFile()` method
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

5. **readAsStream returns synchronous array, not async iterable**
   - Documented: `for await (const stream of streams)` (lines 97, 151)
   - Actual: `readAsStream()` returns `VirtualFileStream[]` synchronously, not an async iterable. The `for await` is misleading - regular `for...of` should be used for array iteration
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:42` - `readAsStream(g: CyanGlob): VirtualFileStream[]`

6. **VirtualFile.writeFile() takes no parameters**
   - Documented: `ref.writeFile(transform(content));` (line 143)
   - Actual: `writeFile()` takes no parameters - it writes the `content` property of the VirtualFile instance. Pattern must be: `file.content = transform(file.content); file.writeFile();`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54` - `writeFile(): void { ... fs.writeFileSync(this.write, this.content, 'utf-8'); }`

7. **CyanGlob interface missing required properties in examples**
   - Documented: `fileHelper.read({ root: 'docs', glob: '**/*.md' })` (lines 70, 78, 95, etc.)
   - Actual: `CyanGlob` interface requires `exclude: string[]` and `type: GlobType` properties. The `type` property is required to distinguish Template vs Copy handling
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts` - `interface CyanGlob { root?: string | null; glob: string; exclude: string[]; type: GlobType; }`

### 🟡 Documentation Issues

1. **Incorrect async/await usage in code examples**
   - Problem: Multiple code examples use `await ref.load()` but the actual method `readFile()` is synchronous
   - Location: Lines 82-84, 142
   - Fix: Change `const content = await ref.load();` to `const file = ref.readFile(); const content = file.content;`

2. **Missing required CyanGlob properties throughout**
   - Problem: All code examples using `read()`, `get()`, `readAsStream()`, and `copy()` omit required `type` and `exclude` properties
   - Location: Lines 70, 78, 95, 109, 136, 139, 150, 156-157, 187, 203
   - Fix: Add `type: GlobType.Template` (for read/get/readAsStream) or `type: GlobType.Copy` (for copy) and `exclude: []` to each CyanGlob object

3. **Stream iteration example is fundamentally incorrect**
   - Problem: Cannot use `for await (const stream of streams)` with a regular array, and `stream.read()` doesn't exist
   - Location: Lines 97-101, 151-153, 189-192
   - Fix: Show correct stream usage:
     ```ts
     const streams = fileHelper.readAsStream({ root: 'data', glob: '*.csv', exclude: [], type: GlobType.Template });
     for (const stream of streams) {
       // Use stream.reader (Node.js ReadStream) directly
       for await (const chunk of stream.reader) {
         // Process chunk
       }
     }
     ```

4. **Container memory range is speculative**
   - Problem: "Default processor containers typically have 256MB-1GB" is not verified against actual deployment configuration
   - Location: Line 128
   - Fix: Verify against actual infrastructure configuration or add disclaimer that this varies by deployment

5. **Best Practices code example uses undefined variable**
   - Problem: Line 184 uses `fileHelper.read(glob)` but `glob` is undefined - should be a CyanGlob object literal
   - Location: Line 184
   - Fix: Replace `glob` with a proper CyanGlob object example

### 🟠 Other Problems

1. **Practical Example section has multiple critical issues**
   - Problem: The mixed approach example (lines 133-161) uses non-existent methods (`ref.load()`, `ref.copy()`), incorrect async patterns, and missing CyanGlob properties
   - Recommendation: Rewrite the example using actual API methods. The lazy-load pattern using `get()` followed by `readFile()` works, but `copy()` must be called on `fileHelper`, not on `ref`:
     ```ts
     StartProcessorWithLambda(async (input, fileHelper) => {
       // Small files: load all
       const configs = fileHelper.read({ root: 'config', glob: '**/*.{json,yaml}', exclude: [], type: GlobType.Template });

       // Medium files: conditional load
       const docRefs = fileHelper.get({ root: 'docs', glob: '**/*.md', exclude: [], type: GlobType.Template });
       for (const ref of docRefs) {
         if (ref.relative.includes('api')) {
           const file = ref.readFile();
           file.content = transform(file.content);
           file.writeFile();
         } else {
           // Must use fileHelper.copy() - ref.copy() does not exist
           fileHelper.copy({ root: 'docs', glob: ref.relative, exclude: [], type: GlobType.Copy });
         }
       }

       // Static files: copy directly
       fileHelper.copy({ root: 'images', glob: '**/*', exclude: [], type: GlobType.Copy });

       return { directory: input.writeDirectory };
     });
     ```

2. **VirtualFileStream API varies by SDK**
   - Problem: The streaming API is documented generically but actual usage differs significantly between SDKs. Node.js exposes raw `fs.ReadStream`/`fs.WriteStream`, while .NET uses `StreamReader`/`StreamWriter`
   - Recommendation: Add SDK-specific streaming examples or clarify that streaming requires working with platform-native stream APIs

3. **Memory estimation formula is speculative**
   - Problem: The 2x overhead factor is presented as fact without verification against actual runtime behavior
   - Recommendation: Mark this as an approximate guideline or provide actual measured overhead from profiling

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 7 |
| 🟡 | 5 |
| 🟠 | 3 |
