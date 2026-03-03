<!-- source: content/docs/developer/plugins/explanation/index.mdx -->

# 📄 File: content/docs/developer/plugins/explanation/index.mdx

> This is an index/navigation file that links to three sub-pages: what-are-plugins.mdx, plugins-vs-processors.mdx, and execution-order.mdx. The index itself contains no factual claims or code references - only navigation links. All factual verification must be done on the linked pages.

### 🔴 Source Code Inaccuracies

1. **Documented (plugins-vs-processors.mdx:47)**: `return { directory: input.writeDirectory };`
   **Actual**: The SDK's `CyanProcessorInput` uses `writeDir` not `writeDirectory`
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:13` defines `writeDir: string;` and the e2e test at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` uses `input.writeDir`

2. **Documented (what-are-plugins.mdx:109-116, plugins-vs-processors.mdx:71-84)**: Plugin code examples show destructuring `const { directory } = input;`
   **Actual**: Correct - The `CyanPluginInput` interface has `directory: string;`
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` - This is accurate

### 🟡 Documentation Issues

1. **Problem**: Inconsistent property naming in processor example
   **Location**: plugins-vs-processors.mdx:47
   **Fix**: Change `input.writeDirectory` to `input.writeDir` to match the actual SDK interface

2. **Problem**: Documentation does not explain the difference between `ProcessorInput` and `CyanProcessorInput` interfaces
   **Location**: plugins-vs-processors.mdx processor example section
   **Recommendation**: The SDK has two interfaces - `ProcessorInput` (internal, uses `readDirectory`/`writeDirectory`) and `CyanProcessorInput` (user-facing, uses `readDir`/`writeDir`). Documentation should clarify which one users receive in their lambda functions.

3. **Problem**: Code examples import from `@atomicloud/cyan-sdk` but don't show the `PluginOutput` type import
   **Location**: what-are-plugins.mdx:109, 124, 141
   **Fix**: The e2e tests show importing `PluginOutput` explicitly (e.g., `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';`). The documentation examples should be consistent.

### 🟠 Other Problems

1. **Problem**: The execution order documentation claims plugins run "after all files are written" but doesn't explain the coordinator's role
   **Recommendation**: Add reference to the iridium/cyancoordinator component which orchestrates the execution flow, as seen in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/template/executor.rs`

2. **Problem**: Documentation uses shell command syntax with bun's `$` template literal (`await $\`git -C ${directory} init\`.quiet();`) but doesn't explain this is a bun-specific feature
   **Location**: what-are-plugins.mdx:112-113, 128-129, 145-146
   **Recommendation**: Add a note that the `$` template literal is from bun's shell API, or show alternative approaches for non-bun environments

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 2     |
