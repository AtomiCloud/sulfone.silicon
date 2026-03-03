<!-- source: content/docs/developer/templates/how-to/add-plugins.mdx -->
# 📄 File: content/docs/developer/templates/how-to/add-plugins.mdx

> Documentation for adding plugins to Cyan templates, covering configuration in cyan.yaml and template code, with examples for git initialization and dependency installation plugins.

### 🔴 Source Code Inaccuracies

1. **Plugin names `cyan/init-git` and `cyan/npm-install` do not exist in source code**
   - **Documented**: `cyan/init-git` (for git initialization with `commitMessage` and `branch` config) and `cyan/npm-install` (for dependency installation with `packageManager` config)
   - **Actual**: No plugins named `cyan/init-git` or `cyan/npm-install` exist in any of the source paths (argon, boron, helium, iridium, zinc). The actual plugins in the codebase use names like `ernest/plugin1`, `ernest/plugin2`
   - **Evidence**: Searched all source paths with `grep -r "cyan/init-git|cyan/npm-install"` - no matches found. Actual plugins are in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/index.ts` with names like `ernest/plugin1`

2. **Plugin config options are fabricated**
   - **Documented**: `commitMessage`, `branch` for init-git; `packageManager`, `dev` for npm-install
   - **Actual**: The actual `CyanPlugin` interface only has `name: string` and `config: unknown` - there are no predefined config schemas
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:13-16` - `interface CyanPlugin { name: string; config: unknown; }`

3. **Plugin input/output structure differs from implied usage**
   - **Documented**: Implies plugins receive config with properties like `commitMessage`, `packageManager`
   - **Actual**: `CyanPluginInput` only has `directory: string` and `config: unknown` - plugins receive the output directory and arbitrary config
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts:1-4`

4. **cyan.yaml format in documentation differs from actual format**
   - **Documented**: Shows plugins defined directly in cyan.yaml with `plugins:` key at root level with objects containing `name` and `config`
   - **Actual**: Actual cyan.yaml files have different structure - plugins can be specified as simple string arrays like `plugins: ['ernest/plugin1']`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml` - shows `plugins: ['ernest/plugin1']` as simple string array

### 🟡 Documentation Issues

1. **Hypothetical plugins presented as built-in**
   - **Problem**: The documentation presents `cyan/init-git` and `cyan/npm-install` as if they are official/built-in plugins, but they do not exist in the codebase
   - **Location**: Lines 52-74, throughout the document
   - **Fix**: Either remove references to these plugins, mark them as hypothetical examples, or create actual implementations

2. **Link to Plugin Development may be unclear**
   - **Problem**: The callout at line 204-206 references `/developer/plugins` which exists but is a separate section - the link text "Plugin Development" could be clearer
   - **Location**: Line 204-206
   - **Fix**: Clarify the link destination or ensure the path resolves correctly

3. **Inconsistent plugin name format**
   - **Problem**: Documentation uses `cyan/` prefix for plugins (e.g., `cyan/init-git`, `cyan/npm-install`) but actual codebase uses organization prefixes (e.g., `ernest/plugin1`)
   - **Location**: Throughout document
   - **Fix**: Either explain the naming convention or use realistic example names

4. **Custom plugin example uses made-up config structure**
   - **Problem**: The `myorg/setup-tooling` example shows `installDeps`, `runLint`, `runFormat` config options that have no basis in actual plugin implementations
   - **Location**: Lines 76-87
   - **Fix**: Use config options that match actual plugin implementations or clearly mark as examples

### 🟠 Other Problems

1. **Plugin execution order verified**
   - **Problem**: Documentation claims plugins execute sequentially in order - this IS verified in source code
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/features/06-plugin-lifecycle.md:14-19` confirms plugins run sequentially, one at a time

2. **Missing reference to actual plugin implementations**
   - **Problem**: Documentation doesn't link to or reference any actual working plugin examples from the codebase
   - **Recommendation**: Add references to actual plugin implementations in iridium/e2e

3. **Template code examples may not compile**
   - **Problem**: The TypeScript examples use `@atomicloud/cyan-sdk` imports but the actual SDK export structure differs (exports `StartPluginWithLambda`, `StartTemplateWithLambda` from main.ts)
   - **Recommendation**: Verify import paths match actual SDK structure

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 4 |
| 🟠 | 3 |
