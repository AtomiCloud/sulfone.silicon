<!-- source: content/docs/developer/processors/reference/sdk/file-helper.mdx -->
# 📄 File: content/docs/developer/processors/reference/sdk/file-helper.mdx

> Documentation for CyanFileHelper API covering file operations for processors. The documentation is mostly accurate but contains a significant inaccuracy regarding VirtualFileStream type descriptions in the properties table, which incorrectly shows Node.js types for a cross-SDK API section.

### 🔴 Source Code Inaccuracies
1. **VirtualFileStream Properties Type Incorrect** | Documented: `fs.ReadStream` and `fs.WriteStream` (Node.js-specific types) | Actual: In .NET SDK, uses `StreamReader` and `StreamWriter`; In Node.js SDK, uses `fs.ReadStream` and `fs.WriteStream` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/FileSystem/VirtualFileStream.cs:3` shows `public record VirtualFileStream(StreamReader Reader, StreamWriter Writer);` while Node.js at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-8` shows `public reader: fs.ReadStream, public writer: fs.WriteStream`

2. **Python GlobType Values Different** | Documented: `GlobType.Template = 0, GlobType.Copy = 1` | Actual: Python SDK uses `GlobType.Template = 1, GlobType.Copy = 2` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:7-9` shows `class GlobType(Enum): Template = 1, Copy = 2` while Node.js at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `enum GlobType { Template = 0, Copy = 1 }`

### 🟡 Documentation Issues
1. **VirtualFileStream Properties Table SDK-Specific** | Problem: The VirtualFileStream properties table shows `fs.ReadStream`/`fs.WriteStream` which are Node.js-specific types, but the section intro mentions both Node.js and .NET SDKs | Location: Lines 313-316 (VirtualFileStream Properties table) | Fix: Either split the documentation by SDK or clarify that types differ by platform (Node.js: `fs.ReadStream`/`fs.WriteStream`, .NET: `StreamReader`/`StreamWriter`)

2. **CyanGlob Type Description Could Be Clearer** | Problem: The `root` property description says "optional, defaults to '.'" but doesn't mention it can also be `null` | Location: Line 91 (`root?: string | null;  // Base directory (optional, defaults to '.')`) | Fix: Update comment to `// Base directory (optional, defaults to '.' or null)`

3. **Code Example Uses Node.js-specific Type** | Problem: The `readAsStream()` usage example shows Node.js stream events but the intro mentions both Node.js and .NET SDKs support this | Location: Lines 199-225 (Usage example) | Fix: Either label the example as "Node.js Example" or provide separate examples for each SDK

### 🟠 Other Problems
1. **Python SDK GlobType Inconsistency** | Problem: The Python SDK uses different enum values (1/2) vs Node.js/.NET (0/1), which could cause confusion for developers working across SDKs | Recommendation: Either document the SDK-specific values explicitly or (ideally) align the Python SDK with the other SDKs

2. **Missing .NET Streaming Example** | Problem: The `readAsStream()` section only shows a Node.js example with event-based streaming, but .NET developers would need different code using `StreamReader`/`StreamWriter` | Recommendation: Add a .NET-specific example showing how to use `StreamReader.ReadLineAsync()` or similar patterns

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 3 |
| 🟠 | 2 |
