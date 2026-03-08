<!-- source: content/docs/developer/templates/how-to/add-plugins.mdx -->
# 📄 File: content/docs/developer/templates/how-to/add-plugins.mdx

> How-to guide for adding plugins to templates. The code examples use correct TypeScript/JavaScript syntax and the interface definitions (CyanPlugin with name and config) match the SDK. However, the specific plugin names (cyan/init-git, cyan/npm-install) cannot be verified against source code - they appear to be example/hypothetical plugins rather than confirmed built-in plugins.

### 🔴 Source Code Inaccuracies
1. **Plugin names `cyan/init-git` and `cyan/npm-install` cannot be verified**
   - Documented: `cyan/init-git` and `cyan/npm-install` as "available plugins"
   - Actual: No evidence found in source code (helium, iridium, zinc, boron, argon) that these plugins exist as built-in or official plugins
   - Evidence: Searched all source directories; the SDK exports types but no plugin registry or built-in plugins found. The iridium registry stores plugin metadata (username, name, version) but no actual plugin implementations.

2. **Config options for init-git plugin are unverified**
   - Documented: `commitMessage` and `branch` config options for `cyan/init-git`
   - Actual: Cannot verify these config options exist; no plugin implementation found
   - Evidence: No init-git plugin source code found in any of the source paths

3. **Config options for npm-install plugin are unverified**
   - Documented: `packageManager` (npm, yarn, pnpm, bun) and `dev` config options for `cyan/npm-install`
   - Actual: Cannot verify these config options exist; no plugin implementation found
   - Evidence: No npm-install plugin source code found in any of the source paths

### 🟡 Documentation Issues
1. **Misleading presentation of example plugins as "Available Plugins"**
   - Problem: The section header "Available Plugins" implies these are real, available plugins in the Cyan ecosystem. The plugins listed (cyan/init-git, cyan/npm-install) appear to be example/hypothetical plugins.
   - Location: Lines 50-75 (Available Plugins section)
   - Fix: Change section title to "Example Plugins" or add a disclaimer that these are examples. Alternatively, add a note explaining that plugin names and config options depend on your Cyan registry configuration.

2. **Link to Plugin Development is broken**
   - Problem: The Callout at line 205 links to `/docs/developer/plugins` which should be correct based on the instructions
   - Location: Line 205-206
   - Fix: Link appears correct per instructions, but should verify the actual path exists

3. **"Custom Plugins" section shows hypothetical plugin**
   - Problem: The example `myorg/setup-tooling` plugin with config options like `installDeps`, `runLint`, `runFormat` is presented as if it's a real plugin pattern
   - Location: Lines 77-87
   - Fix: Clarify this is a hypothetical example showing the structure for any custom plugin

4. **YAML vs TypeScript inconsistency in plugin declaration**
   - Problem: Documentation shows plugins can be declared in both cyan.yaml (lines 27-32) and in TypeScript template code (lines 36-48). However, the cyan.yaml reference in templates/reference/cyan-yaml.mdx shows plugins as simple string references (e.g., `- cyan/init-git`), not objects with config.
   - Location: Lines 27-32 show plugins with config in YAML; compare with cyan-yaml.mdx which shows simple string format
   - Fix: Clarify that cyan.yaml declares plugin dependencies (just the plugin reference), while the TypeScript code provides the runtime config. Or verify if both patterns are valid.

### 🟠 Other Problems
1. **No verification possible for plugin execution order guarantees**
   - Problem: The documentation implies plugins execute in order (comments say "First:", "Second:", "Third:"), but no source code verification was possible for this behavior
   - Recommendation: This is consistent with other documentation (execution-order.mdx confirms sequential execution), so likely accurate

2. **Callout mentions "Plugin Development" link without clarification**
   - Problem: The callout says "See Plugin Development for creating custom plugins" but doesn't clarify that creating custom plugins requires implementing the IPlugin interface and publishing to a registry
   - Recommendation: Consider adding a brief note about what plugin development entails

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 4 |
| 🟠 | 2 |
