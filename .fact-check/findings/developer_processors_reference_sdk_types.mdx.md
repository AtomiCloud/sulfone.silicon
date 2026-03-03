<!-- source: content/docs/developer/processors/reference/sdk/types.mdx -->
# 📄 File: content/docs/developer/processors/reference/sdk/types.mdx

> Documentation for processor SDK type definitions with significant inaccuracies compared to actual source code in helium/sdks/node/src. Many documented types are fictional or have wrong signatures.

### 🔴 Source Code Inaccuracies

1. **CyanGlob.root property is optional, not required**
   - Documented: `root: string` (required with example `"templates"`)
   - Actual: `root?: string | null` (optional, can be null)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7` - `root?: string | null;`

2. **CyanGlob.exclude is required, not optional**
   - Documented: `exclude?: string[]` (marked as @optional)
   - Actual: `exclude: string[]` (required, no optional marker)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:9` - `exclude: string[];`

3. **CyanGlob is missing required `type` property**
   - Documented: Only `root`, `glob`, `exclude` properties
   - Actual: Has `type: GlobType` property which is required
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:10` - `type: GlobType;`

4. **VirtualFileReference.load() method does not exist**
   - Documented: `load(): Promise<string>` - "Load file content, returns Promise resolving to file content"
   - Actual: No `load()` method exists. Instead there is `readFile(): VirtualFile` (synchronous, returns VirtualFile, not Promise<string>)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:26-29` - `readFile(): VirtualFile { ... }`

5. **VirtualFileReference.writeFile() does not exist**
   - Documented: `writeFile(content: string): void` - "Write content to output directory"
   - Actual: No `writeFile(content: string)` method on VirtualFileReference. Must call `readFile()` first to get VirtualFile, then call `writeFile()` on that.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - VirtualFileReference class has no writeFile method

6. **VirtualFileReference.copy() does not exist**
   - Documented: `copy(): void` - "Copy file to output without loading"
   - Actual: No `copy()` method on VirtualFileReference. Copying is done via `CyanFileHelper.copy(glob)`.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - VirtualFileReference class has no copy method

7. **VirtualFileReference has undocumented `read` and `write` getter properties**
   - Documented: Not mentioned
   - Actual: Has `read: string` and `write: string` getters for full paths
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:18-24`

8. **VirtualFileStream interface is completely different**
   - Documented: Has `relative: string`, `read(): AsyncIterable<Buffer>`, `writeFile(content: string): void`
   - Actual: Has `reader: fs.ReadStream`, `writer: fs.WriteStream` (no `relative`, no `read()` method, no `writeFile()` method)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9` - `constructor(public reader: fs.ReadStream, public writer: fs.WriteStream)`

9. **VirtualFile has undocumented `read` and `write` getter properties**
   - Documented: Only `content`, `relative`, `writeFile()` mentioned
   - Actual: Also has `read: string` and `write: string` getters for full paths
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:40-46`

10. **VirtualFile has undocumented `baseRead` and `baseWrite` properties**
    - Documented: Not mentioned
    - Actual: Constructor takes `baseRead: string`, `baseWrite: string`, `relative: string`, `content: string`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-38`

11. **VirtualFileReference has undocumented `baseRead` and `baseWrite` properties**
    - Documented: Not mentioned
    - Actual: Constructor takes `baseRead: string`, `baseWrite: string`, `relative: string`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:12-16`

12. **ProcessorHandler type is not exported; actual type is LambdaProcessorFn**
    - Documented: `type ProcessorHandler = (input: ProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>`
    - Actual: The type is `LambdaProcessorFn` and uses `CyanProcessorInput` (not `ProcessorInput`). `CyanProcessorInput` has `readDir`/`writeDir` (not `readDirectory`/`writeDirectory`).
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/processor/lambda.ts:6` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16`

13. **StartProcessorWithLambda handler receives CyanProcessorInput, not ProcessorInput**
    - Documented: Handler parameter type is `ProcessorHandler` with `ProcessorInput`
    - Actual: Handler receives `CyanProcessorInput` with `readDir` and `writeDir` (not `readDirectory` and `writeDirectory`)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `readDir: string; writeDir: string;`

14. **ProcessorError, FileNotFoundError, TransformError classes do not exist**
    - Documented: Full class definitions with constructors for `ProcessorError`, `FileNotFoundError`, `TransformError`
    - Actual: These error classes do not exist in the SDK
    - Evidence: Grep search for these class names in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks` returned no matches

15. **Utility Types (VariableConfig, FeatureConfig, FormatConfig, ProcessorConfig) do not exist**
    - Documented: Full interface definitions for config patterns
    - Actual: These are not defined anywhere in the SDK - they are example/documentation-only patterns
    - Evidence: These appear to be illustrative examples, not actual SDK types

16. **Type Guards example function `isVariableConfig` does not exist**
    - Documented: Full function implementation
    - Actual: This function does not exist in the SDK
    - Evidence: Not found in SDK source - appears to be an illustrative example

17. **CyanFileHelper is a class, not an interface**
    - Documented: Shown as `interface CyanFileHelper`
    - Actual: It's exported as a class with a constructor
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:8` - `export class CyanFileHelper`

18. **CyanFileHelper has undocumented `readDir` and `writeDir` getter properties**
    - Documented: Not mentioned
    - Actual: Has `readDir: string` and `writeDir: string` getters
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:15-21`

### 🟡 Documentation Issues

1. **Inconsistent property naming between layers**
   - Problem: Documentation uses `readDirectory`/`writeDirectory` but the actual processor handler receives `readDir`/`writeDir` (CyanProcessorInput). The `ProcessorInput` interface exists separately with `readDirectory`/`writeDirectory` but is internal to ProcessorService.
   - Location: ProcessorInput section and Handler Function section
   - Fix: Clarify that `ProcessorInput` is the API request model, while handlers receive `CyanProcessorInput` with shortened property names, OR document both and explain the mapping.

2. **VirtualFile types are classes, not interfaces**
   - Problem: All VirtualFile types are documented as interfaces but are actually classes with constructors
   - Location: VirtualFile, VirtualFileReference, VirtualFileStream sections
   - Fix: Update to show as classes with constructor signatures

3. **Missing GlobType enum documentation**
   - Problem: `GlobType` enum is required for CyanGlob but not documented
   - Location: CyanGlob section
   - Fix: Add GlobType enum documentation showing `Template = 0` and `Copy = 1`

4. **Example code in Type Guards section won't work as shown**
   - Problem: The example uses `input.config` but shows `isVariableConfig(input.config)` - this would work but the `VariableConfig` interface doesn't exist in SDK
   - Location: Type Guards section
   - Fix: Mark this as "Example pattern" not actual SDK types, or remove if misleading

### 🟠 Other Problems

1. **VirtualFileStream documentation is entirely fictional**
   - Problem: The documented interface bears no resemblance to the actual implementation. The actual class just wraps Node.js streams directly.
   - Recommendation: Either rewrite to match actual implementation (ReadStream/WriteStream) or remove this section if streaming API is not intended for direct use.

2. **Documentation mixes internal and public API**
   - Problem: `ProcessorInput` is an internal type used by ProcessorService, while the actual handler function receives `CyanProcessorInput`. This creates confusion.
   - Recommendation: Document `CyanProcessorInput` as the primary type that handlers receive, or clearly distinguish between external API types and internal types.

3. **Error classes section should be removed or marked as examples**
   - Problem: Error classes are documented as if they exist in the SDK but they don't
   - Recommendation: Remove this section or clearly mark it as "Suggested patterns for custom error handling"

4. **Utility Types section should be marked as examples**
   - Problem: Config interfaces are presented as SDK types but don't exist
   - Recommendation: Clearly label as "Common patterns" or "Example configurations" rather than presenting as SDK types

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 18 |
| 🟡 | 4 |
| 🟠 | 4 |
