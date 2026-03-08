<!-- source: content/docs/developer/plugins/tutorials/first-plugin.mdx -->
# 📄 File: content/docs/developer/plugins/tutorials/first-plugin.mdx

> Tutorial for creating a first plugin. The code examples are accurate and follow the SDK conventions correctly. Minor inconsistency found in the type naming table (uses `CyanPluginInput` which is correct) and the template example uses incorrect syntax.

### 🔴 Source Code Inaccuracies

1. **Template Configuration Example - Incorrect Syntax**
   - Documented: `return { processors: [...], plugins: [...] };` (lines 156-170)
   - Actual: Templates return a `Cyan` object via `StartTemplateWithLambda`, not a raw object. The example shows incorrect usage - templates use `StartTemplateWithLambda(async (i, d) => { ... })` which returns a `Cyan` object.
   - Evidence: The template example in the document is misleading - it shows `// In template's index.ts` followed by a `return` statement, but doesn't show the `StartTemplateWithLambda` wrapper that is required. See `/content/docs/developer/templates/reference/sdk/cyan-config.mdx:176-236` for correct template structure.

### 🟡 Documentation Issues

1. **Incomplete Template Integration Example**
   - Problem: The "Use in Template" section (lines 153-170) shows only a partial code snippet without the full `StartTemplateWithLambda` context, which could confuse users
   - Location: Lines 153-170
   - Fix: Wrap the example in the full `StartTemplateWithLambda` function to show complete context, similar to how it's done in `/content/docs/developer/templates/reference/sdk/cyan-config.mdx:176-236`

2. **Missing Type Import in Main Example**
   - Problem: The main code example (lines 39-74) doesn't import `CyanPluginInput` type, which is fine for the inline cast pattern but inconsistent with other docs that show explicit typing
   - Location: Line 39
   - Fix: Either add a note explaining why the type import is optional, or add `type CyanPluginInput` to the import for consistency with the reference docs

3. **Ambiguous "Use in Template" Section**
   - Problem: The comment `// In template's index.ts` suggests this is the template's main file, but templates use `StartTemplateWithLambda` which receives `(i, d)` parameters and returns `Cyan`, not a direct return statement
   - Location: Line 156
   - Fix: Clarify that this is the return value within `StartTemplateWithLambda`, not standalone code

### 🟠 Other Problems

1. **No Verification of bun init -y Command**
   - Problem: The command `bun init -y` (line 30) is documented but not verified against current Bun behavior
   - Recommendation: Verify this command still works as expected with current Bun versions

2. **Docker Image Tag Naming Convention**
   - Problem: The document suggests using `:dev` tag for local development (lines 162, 173) but doesn't explain how CyanPrint resolves local vs registry images
   - Recommendation: Add a note explaining the image resolution order (local first, then registry) or link to relevant documentation

3. **No Error Handling in Tutorial Example**
   - Problem: The tutorial code doesn't show any error handling, which is important for production plugins
   - Recommendation: Either add basic error handling to the example or link to the "Run Shell Commands" page which covers error handling

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 3 |
| 🟠 | 3 |
