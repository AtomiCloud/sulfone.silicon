# 📄 File: content/docs/developer/plugins/how-to/index.mdx

> Index page linking to four how-to guides: Run Shell Commands, Modify Generated Files, Conditional Execution, and Push to Registry. The guides contain code examples and patterns for plugin development using the CyanPrint SDK.

### 🔴 Source Code Inaccuracies

1. **Incorrect Type Name: `PluginInput` vs `CyanPluginInput`**
   - **Documented**: `PluginInput` interface imported from `@atomicloud/cyan-sdk`
   - **Actual**: The SDK exports `CyanPluginInput`, not `PluginInput`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` exports `CyanPluginInput`, and the type is defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` as `CyanPluginInput`. While there is a `PluginInput` type in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts`, it is NOT exported from the main SDK entry point.
   - **Affected files**:
     - `content/docs/developer/plugins/how-to/run-commands.mdx` - uses `input` without explicit type import
     - `content/docs/developer/plugins/how-to/modify-files.mdx` - uses `input` without explicit type import
     - `content/docs/developer/plugins/how-to/conditional-execution.mdx` - uses `input` without explicit type import
     - `content/docs/developer/plugins/reference/sdk/input-output.mdx:17-20` - documents `PluginInput` interface
     - `content/docs/developer/plugins/reference/sdk/types.mdx:14-27` - documents `PluginInput` interface and suggests importing `type PluginInput` from SDK

2. **Missing Import for `path` Module in Feature Flags Example**
   - **Documented**: Uses `path.join()` without importing `path` module
   - **Actual**: The `path` module must be imported from `node:path`
   - **Evidence**: `content/docs/developer/plugins/how-to/conditional-execution.mdx:119-120` uses `path.join()` but only imports `StartPluginWithLambda` from the SDK and `$` from bun. The `path` import is missing in this example code block.

3. **Missing Import for `fs` Module in Feature Flags Example**
   - **Documented**: Uses `fs.writeFile()` and `fs.mkdir()` without importing `fs` module
   - **Actual**: The `fs` module must be imported from `node:fs/promises`
   - **Evidence**: `content/docs/developer/plugins/how-to/conditional-execution.mdx:120-141` uses `fs.writeFile()` and `fs.mkdir()` but the `fs` import is missing in this example code block.

### 🟡 Documentation Issues

1. **Inconsistent YAML Configuration Format for Templates**
   - **Problem**: The documentation shows plugins configured with `name` and `config` as object properties in template's `cyan.yaml`, but actual template configuration uses `index.ts` with different structure
   - **Location**: `content/docs/developer/plugins/how-to/conditional-execution.mdx:65-76` shows:
     ```yaml
     plugins:
       - name: myorg/setup-plugin
         config:
           git: true
     ```
   - **Actual**: The real template YAML in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:10` shows:
     ```yaml
     plugins: ['ernest/plugin1']
     ```
     And the actual config is passed via `index.ts` not `cyan.yaml`
   - **Fix**: Clarify that plugin config is typically defined in `index.ts` templates, not in `cyan.yaml`. The YAML format shown may be aspirational or for a different use case.

2. **Bun Shell Features Table - Unverified Claims**
   - **Problem**: The Bun Shell features table claims specific syntax support without verification against source
   - **Location**: `content/docs/developer/plugins/how-to/run-commands.mdx:39-45`
   - **Recommendation**: These features (interpolation, quiet mode, output capture, pipes, redirects) are Bun-specific and should be verified against Bun documentation or tested. The syntax examples appear correct for Bun Shell but are not verified against this codebase.

3. **Template `index.ts` Configuration Example - Missing Context**
   - **Problem**: Shows `answers.installDeps` and `answers.packageManager` without explaining where `answers` comes from
   - **Location**: `content/docs/developer/plugins/how-to/conditional-execution.mdx:80-96`
   - **Fix**: Add context showing that `answers` comes from the inquirer prompts in the template function

4. **Missing fs Import in modify-files.mdx Using Glob**
   - **Problem**: The glob example uses `fs.readFile()` and `fs.writeFile()` but only shows importing `glob`
   - **Location**: `content/docs/developer/plugins/how-to/modify-files.mdx:202-228`
   - **Fix**: The example should include `import * as fs from 'fs/promises';` which is shown earlier but not repeated in this section

### 🟠 Other Problems

1. **Index File Provides No Actionable Content**
   - **Problem**: The index.mdx file is purely navigational with no unique content to verify
   - **Recommendation**: This is expected behavior for an index page. No changes needed.

2. **Code Examples Use Different Import Styles**
   - **Problem**: Some examples use `import * as fs from 'fs/promises'` while others use `import fs from 'node:fs'`
   - **Location**: Various files throughout the how-to guides
   - **Recommendation**: Standardize import style for consistency. The actual SDK examples in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:3` use `import fs from 'node:fs';` and `import path from 'node:path';`

3. **Synchronous vs Asynchronous File Operations**
   - **Problem**: Documentation uses `fs/promises` (async) while actual plugin examples use `node:fs` (sync)
   - **Evidence**: Documentation in modify-files.mdx uses `await fs.readFile()` but actual plugins at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:17-18` use `fs.mkdirSync()` and `fs.writeFileSync()`
   - **Recommendation**: Either update documentation to match real usage patterns or clarify that both approaches are valid

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 4 |
| 🟠 | 3 |
