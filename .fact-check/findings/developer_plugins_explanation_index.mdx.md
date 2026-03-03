# 📄 File: content/docs/developer/plugins/explanation/index.mdx

> Index file for Plugin Explanation documentation, linking to three conceptual pages about plugins: What Are Plugins, Plugins vs Processors, and Execution Order. The index itself contains no code claims, but the linked pages contain code examples and API references that need verification against the actual SDK.

### 🔴 Source Code Inaccuracies

1. **Processor return value - `writeDirectory` vs `writeDir`**
   - **Documented:** `return { directory: input.writeDirectory };` (plugins-vs-processors.mdx line 47)
   - **Actual:** `return { directory: input.writeDir };`
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:12-15` defines `CyanProcessorInput` with `writeDir: string;`, and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` shows actual usage: `return { directory: input.writeDir };`

2. **Processor example - incorrect `writeDirectory` property**
   - **Documented:** `return { directory: input.writeDirectory };` (execution-order.mdx example line 47)
   - **Actual:** `return { directory: input.writeDir };`
   - **Evidence:** Same as above - SDK defines `writeDir`, not `writeDirectory`

### 🟡 Documentation Issues

1. **Missing import for `$` shell API**
   - **Problem:** Code examples use `$` template literal without showing the import from 'bun'
   - **Location:** what-are-plugins.mdx lines 108-117, 124-134, 141-151
   - **Fix:** Add `import { $ } from 'bun';` to the code examples or note that this requires Bun runtime

2. **Missing type annotation for plugin input**
   - **Problem:** Plugin examples don't show explicit type annotation for `input` parameter
   - **Location:** what-are-plugins.mdx lines 109, 124, 141
   - **Fix:** Show the type annotation pattern: `async (input): Promise<PluginOutput>` as seen in actual implementations at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5`

3. **Plugin input properties - missing `config` type safety note**
   - **Problem:** Documentation shows `config` access but doesn't explain it's `unknown` type requiring casting
   - **Location:** what-are-plugins.mdx lines 125-127, 143-145
   - **Fix:** Add note that `config` is typed as `unknown` and needs type assertion (as shown in the examples)

4. **Processor example - `CyanFileHelper.resolveAll()` return type clarification**
   - **Problem:** Documentation shows `fileHelper.resolveAll()` but doesn't clarify that it returns `VirtualFile[]` with mutable `content` property
   - **Location:** plugins-vs-processors.mdx lines 39-45
   - **Fix:** Clarify that files returned have `content` (string), `relative` (string path), and `writeFile()` method

5. **Inconsistent processor return property name in examples**
   - **Problem:** Different examples use different property names (`writeDirectory` vs actual `writeDir`)
   - **Location:** plugins-vs-processors.mdx line 47 and execution-order.mdx
   - **Fix:** Standardize on `writeDir` which matches the SDK

### 🟠 Other Problems

1. **No mention of Bun runtime requirement**
   - **Problem:** The documentation uses Bun-specific APIs (`$` shell template literal from 'bun') without clearly stating that plugins require Bun runtime
   - **Recommendation:** Add a note explaining that plugins are executed in a Bun environment and have access to Bun's shell API

2. **Plugin execution environment unclear**
   - **Problem:** Documentation mentions "shell access" but doesn't clarify the execution context (Bun runtime, available APIs, etc.)
   - **Recommendation:** Add a section clarifying the plugin execution environment

3. **Missing `PluginOutput` import in examples**
   - **Problem:** Actual implementations import `PluginOutput` type for explicit return type annotation, but documentation examples don't show this
   - **Recommendation:** Show complete import statement: `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';`

4. **SDK package name verification**
   - **Problem:** Documentation uses `@atomicloud/cyan-sdk` which is correct
   - **Evidence:** Verified at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2`
   - **Status:** This is accurate - no change needed

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 5 |
| 🟠 | 4 |

### Key Findings

**Critical Issues:**
- The property name `writeDirectory` used in processor examples is incorrect. The actual SDK uses `writeDir`. This is a direct code accuracy issue that would cause runtime errors if users copy the code.

**Verified Accurate:**
- SDK package name: `@atomicloud/cyan-sdk` is correct
- Function names: `StartPluginWithLambda`, `StartProcessorWithLambda` are correct
- Plugin input structure: `{ directory: string, config: unknown }` is correct
- Plugin output structure: `{ directory: string }` is correct
- `CyanFileHelper` class name and `resolveAll()` method are correct
- VirtualFile has `content`, `relative`, and `writeFile()` as documented
