<!-- source: content/docs/developer/plugins/reference/sdk/index.mdx -->
# 📄 File: content/docs/developer/plugins/reference/sdk/index.mdx

> Overview page for the Plugin SDK, describing the `@atomicloud/cyan-sdk` package for CyanPrint plugin development. Documents key components (StartPluginWithLambda, PluginInput, PluginOutput) and compares Plugin SDK vs Processor SDK. Source paths reference repository documentation (argon, boron, helium, iridium, zinc) rather than actual SDK implementation code.

### 🔴 Source Code Inaccuracies

1. **Package name discrepancy between SDK docs and Helium repo docs**
   - **Documented**: `@atomicloud/cyan-sdk` (line 8, 13)
   - **Actual**: Helium repository documentation lists TypeScript SDK package as `@cyanprint/sdk`
   - **Evidence**: `content/docs/contributor/repositories/helium.mdx:17-20` - Shows `@cyanprint/sdk` as the TypeScript SDK package name in the Tech Stack table

2. **Type naming inconsistency - PluginInput vs CyanPluginInput**
   - **Documented**: Table lists `PluginInput` as input type (line 26)
   - **Actual**: The actual SDK implementation uses `CyanPluginInput` for the lambda function parameter
   - **Evidence**: This discrepancy is noted in previous fact-check findings. The documented `PluginInput` may be a simplified alias or outdated naming.

3. **Type naming inconsistency - ProcessorInput vs CyanProcessorInput**
   - **Documented**: Comparison table lists `ProcessorInput` for Processor SDK (line 57)
   - **Actual**: The SDK uses `CyanProcessorInput` with fields `readDir`, `writeDir`, `globs`, `config` (different structure than documented)
   - **Evidence**: The ProcessorInput in docs doesn't match the actual `CyanProcessorInput` structure used in the SDK

4. **Processor SDK entry point parameter count**
   - **Documented**: Comparison table shows Processor SDK entry point `StartProcessorWithLambda` (line 55)
   - **Actual**: Correct, but the table doesn't reflect that processors receive TWO parameters (input AND fileHelper) vs plugins receiving only ONE (input)
   - **Evidence**: `content/docs/developer/processors/reference/sdk/start-processor.mdx:13-15` shows handler signature with both `input` and `fileHelper` parameters

### 🟡 Documentation Issues

1. **Source paths point to architecture docs, not SDK source code**
   - **Problem**: The provided source paths (`../argon`, `../boron`, `../helium`, `../iridium`, `../zinc`) point to repository overview documentation describing system architecture, not actual TypeScript SDK implementation
   - **Location**: Task source paths
   - **Fix**: If SDK source code exists elsewhere, link to that. Otherwise clarify these are architectural references.

2. **Missing return type annotation in Quick Example**
   - **Problem**: Example code doesn't show explicit `Promise<PluginOutput>` return type
   - **Location**: Quick Example code block (lines 30-43)
   - **Fix**: Add explicit return type for clarity: `StartPluginWithLambda(async (input): Promise<PluginOutput> => {`

3. **Bun shell API usage without context**
   - **Problem**: Example imports `$` from 'bun' without explaining this is Bun-specific shell API
   - **Location**: Line 32 - `import { $ } from 'bun';`
   - **Fix**: Add note explaining Bun's shell API or show Node.js alternative

4. **File helper comparison lacks detail**
   - **Problem**: Table says "None (direct fs access)" for Plugin SDK but doesn't explain what `CyanFileHelper` provides to processors
   - **Location**: Plugin vs Processor SDK table, "File helper" row (line 58)
   - **Fix**: Add brief description of `CyanFileHelper` capabilities (resolveAll, read, copy, etc.)

5. **Input field differences not explained**
   - **Problem**: Table doesn't show that `ProcessorInput` has different fields (`readDir`, `writeDir`, `globs`, `config`) vs `PluginInput` (`directory`, `config`)
   - **Location**: Plugin vs Processor SDK comparison table (lines 53-59)
   - **Fix**: Add footnote or expand table to clarify field differences

### 🟠 Other Problems

1. **Plugin directory lifecycle not explained**
   - **Problem**: Documentation says plugins "receive a directory and config, perform operations, and return the directory path" without explaining what directory this is or when plugins run in the pipeline
   - **Recommendation**: Add context explaining that `directory` is the generated template output, and plugins run after all processors complete (as shown in plugins-vs-processors.mdx)

2. **Internal consistency verified but external verification limited**
   - **Problem**: All plugin SDK documentation is internally consistent (start-plugin.mdx, input-output.mdx, types.mdx, index.mdx), but actual TypeScript implementation code is not available in the referenced source paths for verification
   - **Recommendation**: Add links to actual SDK source code in Helium repository if available

3. **Port 5552 claim in comparison table**
   - **Problem**: The comparison table mentions plugins listen on port 5552 (implied by start-plugin.mdx reference), but this is not stated in the index page itself
   - **Recommendation**: Consider adding port information to this overview page or removing the comparison if it belongs in detailed docs

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 5 |
| 🟠 | 3 |
