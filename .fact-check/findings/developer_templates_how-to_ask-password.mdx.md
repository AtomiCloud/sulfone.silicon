<!-- source: content/docs/developer/templates/how-to/ask-password.mdx -->
# 📄 File: content/docs/developer/templates/how-to/ask-password.mdx

> Documentation for asking password questions with hidden input. The code examples and API usage are generally accurate, but there is a minor issue with the `confirmation` property description.

### 🔴 Source Code Inaccuracies
1. **confirmation property type** | Documented as `confirmation: true` (implied boolean) which is correct in this file, but the linked [IInquirer Reference](/docs/developer/templates/reference/sdk/inquirer) table incorrectly states `confirmation` is type `string` with description "Confirmation prompt text" | Actual: `confirmation?: boolean | null` - it's a boolean flag, not a string. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:51`

### 🟡 Documentation Issues
1. **Inconsistent confirmation documentation across files** | The `ask-password.mdx` file correctly shows `confirmation: true` as a boolean, but the linked `inquirer.mdx` reference incorrectly documents it as `string` type in the Type-Specific Properties table (line 266) | Location: `content/docs/developer/templates/reference/sdk/inquirer.mdx:266` | Fix: Change table entry from `| confirmation | string | Password | Confirmation prompt text |` to `| confirmation | boolean | Password | Enable password confirmation prompt |`

### 🟠 Other Problems
(None found)

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 1 |
| 🟠 | 0 |
