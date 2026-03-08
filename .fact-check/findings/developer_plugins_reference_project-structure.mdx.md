<!-- source: content/docs/developer/plugins/reference/project-structure.mdx -->
# 📄 File: content/docs/developer/plugins/reference/project-structure.mdx

> This page documents the standard directory layout for plugin projects. Most content is accurate, but there are some minor inconsistencies with other documentation pages and the cyan.yaml `readme` field casing differs from actual source code.

### 🔴 Source Code Inaccuracies
1. **Documented**: `readme: README.md` (lowercase) in cyan.yaml example (line 129)
   **Actual**: Actual plugin cyan.yaml files use `readme: README.MD` (uppercase)
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:8` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/cyan.yaml:8` both show `readme: README.MD`

### 🟡 Documentation Issues
1. **Problem**: Inconsistent type naming - The page uses `PluginInput` in the code comments and descriptions but the actual SDK exports `CyanPluginInput`
   **Location**: Throughout the page (lines 27-38, 152-169)
   **Fix**: The SDK index page (sdk/index.mdx:25) clarifies that `CyanPluginInput` is the primary type with `PluginInput` as an alias. Consider mentioning this alias relationship or using `CyanPluginInput` consistently

2. **Problem**: Inconsistent cyan.yaml example across documentation
   **Location**: Lines 121-130 (cyan.yaml example)
   **Fix**: The cyan.yaml example shows `readme: README.md` while the dedicated Plugin cyan.yaml page shows `readme: README.MD`. Should be consistent - uppercase `README.MD` matches actual source code

3. **Problem**: Missing cyan.yaml fields documentation
   **Location**: Lines 117-130 (cyan.yaml section)
   **Fix**: The cyan.yaml example is labeled as "optional" (line 19) but the dedicated Plugin cyan.yaml page states it is "required for publishing your plugin" (cyan-yaml.mdx:10). Consider clarifying that it's optional for local development but required for registry publishing

### 🟠 Other Problems
1. **Problem**: Dockerfile uses `CMD [ "bun", "run", "index.ts" ]` with array syntax with spaces inside quotes
   **Recommendation**: The Dockerfile example on line 79 has inconsistent spacing in the CMD array syntax: `CMD [ "bun", "run", "index.ts" ]`. Standard Docker convention is `CMD ["bun", "run", "index.ts"]` without spaces after `[` and before `]`. Minor formatting issue.

2. **Problem**: Package.json example shows `"@atomicloud/cyan-sdk": "latest"` but best practice would be to pin the version
   **Recommendation**: Consider adding a note that in production plugins, the SDK version should be pinned rather than using "latest" for reproducibility

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 3 |
| 🟠 | 2 |
