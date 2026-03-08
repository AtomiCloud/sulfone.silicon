<!-- source: content/docs/developer/plugins/index.mdx -->
# 📄 File: content/docs/developer/plugins/index.mdx

> Overview page for plugin development documentation. Generally accurate but contains some issues with code examples that use Bun-specific APIs and a naming inconsistency in the Components table.

### 🔴 Source Code Inaccuracies
1. **Documented**: Components table lists "CyanPluginInput" as the input type
   **Actual**: The Components table on line 42 shows "CyanPluginInput" which is correct, but this naming is inconsistent with the reference documentation (input-output.mdx) which shows the interface name as "PluginInput" not "CyanPluginInput"
   **Evidence**: content/docs/developer/plugins/reference/sdk/input-output.mdx:17-21 shows `interface PluginInput` not `CyanPluginInput`; however types.mdx:15 shows `interface CyanPluginInput` - there is an internal inconsistency in the documentation

2. **Documented**: Quick example uses `import { $ } from 'bun';` for shell commands
   **Actual**: The Bun `$` shell API is a Bun-specific feature not part of @atomicloud/cyan-sdk. Actual plugin examples in the codebase use Node.js fs/path modules directly, not shell commands
   **Evidence**: Previous fact-check of what-are-plugins.mdx found iridium/e2e/plugin1 uses `import fs from 'node:fs'` and `import path from 'node:path'`, no Bun imports

3. **Documented**: Shell commands `await $`git -C ${directory} init`.quiet();` and `await $`cd ${directory} && npm install`.quiet();`
   **Actual**: These are Bun-specific shell template literals. While they work in Bun runtime, they are not part of the CyanPrint SDK and require Bun to be available in the container
   **Evidence**: The SDK does not export a shell API - it only provides StartPluginWithLambda, input/output types, and file helpers

### 🟡 Documentation Issues
1. **Problem**: Components table on line 42 shows "CyanPluginInput" but the linked reference page (input-output.mdx) shows the interface as "PluginInput"
   **Location**: Line 42
   **Fix**: Ensure consistent naming - either use CyanPluginInput everywhere (as types.mdx shows) or PluginInput everywhere; the actual SDK exports CyanPluginInput

2. **Problem**: The "What Plugins Can Do" table on lines 49-57 shows shell commands like `git init`, `npm install`, `prettier --write .` but doesn't explain that these require Bun's `$` API or child_process
   **Location**: Lines 49-57
   **Fix**: Add a note explaining that shell command execution requires Bun runtime with `$` API or Node.js child_process

3. **Problem**: Quick Example section (lines 103-125) doesn't indicate that Bun runtime is required for the `$` template literal syntax
   **Location**: Lines 103-125
   **Fix**: Either note that this example requires Bun runtime, or provide an alternative using Node.js child_process or fs operations

4. **Problem**: Callout states "Plugins are the only component that can execute shell commands" but doesn't clarify that this is a design choice, not a technical enforcement
   **Location**: Lines 59-61
   **Fix**: Clarify that while plugins are designed for shell operations, both plugins and processors could technically execute commands via Node.js APIs - the distinction is architectural

### 🟠 Other Problems
1. **Problem**: No explicit mention of the plugin port number (5552) on this overview page
   **Recommendation**: The start-plugin.mdx reference mentions port 5552 - consider adding this to the architecture overview or components table

2. **Problem**: Learning path section links to pages that may have inconsistent type naming (CyanPluginInput vs PluginInput)
   **Recommendation**: Audit all linked pages to ensure consistent type naming

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 4 |
| 🟠 | 2 |
