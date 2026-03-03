<!-- source: content/docs/developer/plugins/explanation/what-are-plugins.mdx -->

# File: content/docs/developer/plugins/explanation/what-are-plugins.mdx

> Documentation for plugins explains their purpose, input/output, and usage patterns. The document has code examples that use Bun shell syntax (`$`), but the actual type names and import patterns have discrepancies with the SDK source code.

### Source Code Inaccuracies

(for each: Documented | Actual | file:line evidence)

1. **Type Name Discrepancy - PluginInput**

   - **Documented**: `PluginInput` interface is used throughout (lines 48-51, code examples)
   - **Actual**: SDK exports `CyanPluginInput`, not `PluginInput`
   - **Evidence**: `helium/sdks/node/src/main.ts:193` exports `CyanPluginInput` as type, `helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` defines `CyanPluginInput`

2. **Import Pattern - Type-only Export**

   - **Documented**: Code examples don't show `type` keyword for type imports (lines 108-117, 123-134, 140-151)
   - **Actual**: `PluginOutput` and `CyanPluginInput` are type-only exports, should be imported with `import type` or inline `type` keyword
   - **Evidence**: `helium/sdks/node/src/main.ts:183-207` uses `export type { ... PluginOutput, CyanPluginInput ... }`

3. **Real Plugin Implementation Pattern**
   - **Documented**: Plugins use Bun shell syntax (`await $`git init`.quiet()`) for all operations
   - **Actual**: Real plugins in the codebase use Node.js `fs` module directly for file operations, not shell commands
   - **Evidence**: `iridium/e2e/plugin1/index.ts:1-22` uses `import fs from 'node:fs'` and `fs.writeFileSync()`, no Bun shell usage

### Documentation Issues

(for each: Problem | Location | Fix)

1. **Type Import Not Shown**

   - **Problem**: Documentation uses `PluginInput` type in examples but doesn't show proper import. The import statement `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk'` doesn't include the type.
   - **Location**: Lines 108-117 (Setup Plugin), 123-134 (Formatter Plugin), 140-151 (Build Plugin)
   - **Fix**: Either add `import type { PluginInput } from '@atomicloud/cyan-sdk'` or use inline type import. Also, the type should be `CyanPluginInput` to match SDK.

2. **Inconsistent Type Naming**

   - **Problem**: Documentation uses `PluginInput` but SDK exports `CyanPluginInput`. This creates confusion and potential import errors.
   - **Location**: Throughout the document, especially in code examples
   - **Fix**: Either update documentation to use `CyanPluginInput` (matching SDK) or note that `PluginInput` is a simplified alias

3. **Bun Shell Dependency Not Explicit**

   - **Problem**: Code examples use `$` from Bun shell without explaining this is a Bun-specific feature, not part of the Cyan SDK
   - **Location**: Lines 112-113, 129, 146
   - **Fix**: Add explicit `import { $ } from 'bun';` to code examples (some examples have this, but not all), or note that Bun shell is optional and alternatives exist

4. **Missing Return Type Annotation**
   - **Problem**: Lambda function examples don't explicitly show return type, making it unclear that `PluginOutput` must be returned
   - **Location**: Lines 108-117, 123-134, 140-151
   - **Fix**: Add explicit `: Promise<PluginOutput>` return type annotation to lambda functions for clarity

### Other Problems

(for each: Problem | Recommendation)

1. **Diagram Inconsistency with Helium Docs**

   - **Problem**: The sequence diagram shows "FS->>PL: Pass directory path" and "PL->>FS: Run commands/modify files" but Helium docs describe plugins as operating on the entire output directory, not receiving files individually
   - **Recommendation**: Update diagram to show that plugins receive the full directory path and operate on the entire directory, not individual file operations

2. **Plugin Output Description Incomplete**

   - **Problem**: The output section (line 70-71) only mentions `directory` return, but doesn't explain why (pipeline continuity)
   - **Recommendation**: Add context that the directory is returned for pipeline chaining when multiple plugins run in sequence

3. **Port Information Not Mentioned**

   - **Problem**: Plugins run an HTTP server on port 5552, but this is not mentioned in the documentation
   - **Recommendation**: Add note about the HTTP server aspect of plugins (visible in `helium/sdks/node/src/main.ts:65`)

4. **Cross-reference Link Not Verified**
   - **Problem**: Link to `/developer/plugins/explanation/plugins-vs-processors` exists but that page has different code example using `writeDirectory` for processors, which may not match actual SDK field names
   - **Recommendation**: Verify cross-references match actual SDK implementation

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 3     |
| Documentation Issues     | 4     |
| Other Problems           | 4     |
