<!-- source: content/docs/developer/templates/how-to/ask-confirm.mdx -->
# 📄 File: content/docs/developer/templates/how-to/ask-confirm.mdx

> Documentation for using confirm questions in Cyanprint templates. Covers the shorthand and object forms of the `i.confirm()` method, return type, and common patterns.

### 🔴 Source Code Inaccuracies
1. **Shorthand form signature mismatch** | Documented: `i.confirm('Message', 'project.typescript', 'Add TypeScript config')` (message, key, description) | Actual: `confirm(q: string, id: string, help?: string | null)` (message, id, help) | helium/sdks/node/src/domain/core/inquirer.ts:10 and helium/sdks/node/src/domain/service/stateless_inquirer.ts:48-60
   - The documentation uses the comment "Key" for the second parameter, which matches the actual `id` parameter, but the third parameter comment says "Description" when the actual parameter is named `help` (help text). While functionally equivalent, the naming differs.

2. **Related link - "Ask Select" page does not exist** | Documented: `[Ask Select](/docs/developer/templates/reference/sdk/inquirer#select)` | Actual: No dedicated "Ask Select" how-to page exists. The link correctly points to the fragment on the inquirer reference page, but the label implies a separate how-to guide that doesn't exist.

### 🟡 Documentation Issues
1. **Inconsistent comment naming in shorthand form** | Problem: Line 16 says `// Key` for the `id` parameter, which is correct, but could be clearer as `// id (key)` for consistency with the reference documentation. | Location: Line 16 | Fix: Change comment to `// id (key)` for consistency.

2. **Object form property naming** | Problem: The documentation uses `desc` property in the object form which is correct per source (`desc?: string | null`), but doesn't mention that `errorMessage` is also available for ConfirmQ. | Location: Object form examples (lines 24-30, 106-112) | Recommendation: Consider mentioning `errorMessage` property for completeness, though not strictly necessary for a how-to guide.

### 🟠 Other Problems
1. **Example uses `files.push()` pattern which may be confusing** | The "In Template Logic" example (lines 37-51) uses `files.push()` which isn't standard Cyan template API - templates typically return a `Cyan` object with `processors` array containing `files`. | Recommendation: The example at lines 56-80 showing the full return structure is better; consider removing or clarifying the `files.push()` example.

2. **GlobType.Template and GlobType.Copy usage not explained** | The examples use `GlobType.Template` and `GlobType.Copy` without explaining the difference in this how-to guide. | Recommendation: Add a brief note or link to documentation about GlobType differences.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 2 |
| 🟠 | 2 |
