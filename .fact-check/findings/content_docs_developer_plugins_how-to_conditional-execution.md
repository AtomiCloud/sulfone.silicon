<!-- source: content/docs/developer/plugins/how-to/conditional-execution.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/conditional-execution.mdx

> This document describes how to implement conditional execution in Cyan plugins using the `config` property. The SDK import and basic API patterns are accurate, but there are several issues: the documentation references a `cyan.yaml` configuration format that doesn't match the actual implementation (which uses `index.ts`), missing imports in code examples, and some code patterns that would fail at runtime.

### 🔴 Source Code Inaccuracies

1. **Documented**: `plugins` configuration in `cyan.yaml` with `config` property at line 67-76
   **Actual**: The actual `cyan.yaml` files in the codebase (e.g., `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml`) only contain metadata like `username`, `name`, `description`, etc. The plugin configuration with `config` is defined programmatically in `index.ts` files, not in `cyan.yaml`.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml` (lines 1-11) shows only metadata fields. The actual plugin config is in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts` (lines 61-66) which shows `plugins: [{ name: 'ernest/plugin1', config: {} }]`

2. **Documented**: Using `fs` and `path` without imports in Feature Flags example (lines 120-142)
   **Actual**: The code examples use `fs.writeFile()`, `fs.mkdir()`, and `path.join()` without importing them. These are Node.js modules that require explicit imports.
   **Evidence**: Real plugin implementations like `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts` (lines 1-4) show proper imports: `import fs from 'node:fs';` and `import path from 'node:path';`

### 🟡 Documentation Issues

1. **Problem**: Missing import statements in code examples
   **Location**: Lines 16-59 (Using Config), Lines 102-146 (Feature Flags), Lines 150-175 (Conditional Based on Project Type), Lines 179-198 (Using Defaults)
   **Fix**: Add the missing imports at the top of each code example:

   ```ts
   import fs from 'node:fs';
   import path from 'node:path';
   ```

2. **Problem**: Misleading section "Using cyan.yaml" implies that plugin config can be defined in `cyan.yaml`
   **Location**: Lines 65-76
   **Fix**: Either remove this section or clarify that `cyan.yaml` is for template metadata only, and plugin configuration with `config` must be done programmatically in `index.ts` using the return statement.

3. **Problem**: The `using index.ts` section (lines 78-96) shows `answers.installDeps` and `answers.packageManager` which are not defined in the example context
   **Location**: Lines 89-91
   **Fix**: Either show how `answers` is obtained from the template's inquirer prompts, or use literal values for clarity.

4. **Problem**: The example shows `return { processors: [...], plugins: [...] }` but doesn't mention that this return type must conform to the `Cyan` interface from the SDK
   **Location**: Lines 80-96
   **Fix**: Add type annotation or mention the `Cyan` interface requirement.

5. **Problem**: Related link to "Plugin Input/Output" points to `/developer/plugins/reference/sdk/input-output` but the actual plugin input type is `CyanPluginInput` not just "PluginInput"
   **Location**: Line 208
   **Fix**: Consider being more specific about the actual type names used in the SDK.

### 🟠 Other Problems

1. **Problem**: The code examples use Bun's shell template syntax (`await $`command``) which is Bun-specific. This should be noted as a Bun runtime requirement.
**Recommendation**: Either add a note about Bun runtime requirement, or show alternative approaches using Node.js `child_process`.

2. **Problem**: The Advanced Patterns section examples (Feature Flags, Project Type, Using Defaults) don't import `StartPluginWithLambda` from `@atomicloud/cyan-sdk` in the first example block
   **Recommendation**: Ensure all self-contained code examples include necessary imports.

3. **Problem**: The SDK version shown in actual codebase is `2.1.0` (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json` line 3), but the documentation doesn't specify which SDK version it targets.
   **Recommendation**: Add SDK version information to the documentation.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 5     |
| 🟠       | 3     |
