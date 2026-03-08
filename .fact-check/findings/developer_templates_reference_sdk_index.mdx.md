<!-- source: content/docs/developer/templates/reference/sdk/index.mdx -->
# 📄 File: content/docs/developer/templates/reference/sdk/index.mdx

> The SDK Overview page documents the `@atomicloud/cyan-sdk` package for template development. The claims are largely accurate with minor documentation completeness issues. The source code could not be directly verified as the source directories (../helium, etc.) are not available in the workspace, but cross-referencing with other documentation files and the task-spec.md shows consistency.

### 🔴 Source Code Inaccuracies
- None identified (source directories not available for direct verification)

### 🟡 Documentation Issues
- Problem: The "Using IInquirer" section does not include the `password()` method, which is documented in the linked inquirer.mdx reference page | Location: Lines 65-81 | Fix: Add a `password` example: `const apiKey = await i.password('API Key?', 'secrets.apiKey', 'Your API key');`
- Problem: Version Compatibility table (SDK Version, CyanPrint CLI, Node.js) cannot be verified against source code | Location: Lines 105-109 | Fix: Verify against actual SDK package.json and CLI version compatibility, or note that this is based on documented requirements

### 🟠 Other Problems
- Problem: The IDeterminism.get() example comments say "Get deterministic value with key and origin function" but don't explain that the origin function is called only when the key doesn't exist in cache | Location: Lines 84-95 | Recommendation: Add a note explaining the cache-through behavior (similar to the determinism.mdx explanation)
- Problem: The SDK Reference Sections links at lines 97-102 show 4 sub-pages but there's no mention of the input-output.mdx or start-plugin/start-processor pages that exist in the plugins and processors SDK sections | Location: Lines 97-102 | Recommendation: This is appropriate for templates SDK (different from plugins/processors SDK), no change needed

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 2 |
| 🟠 | 1 |
