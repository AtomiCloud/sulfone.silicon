<!-- source: content/docs/developer/templates/how-to/ask-confirm.mdx -->
# 📄 File: content/docs/developer/templates/how-to/ask-confirm.mdx

> Documentation for the `i.confirm()` method for boolean yes/no questions. The API signatures and return types are accurate against the source code. Minor issues found with parameter naming and code examples.

### 🔴 Source Code Inaccuracies
1. **Parameter naming inconsistency in shorthand form comments** | Documented: `// Key` and `// Description` | Actual: IInquirer interface shows `id` and `help` as parameter names | `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:10`
   - Documentation shows: `i.confirm('Use TypeScript?', 'project.typescript', 'Add TypeScript config')` with comments `// Key` and `// Description`
   - Actual signature: `confirm(q: string, id: string, help?: string | null): Promise<boolean>;`
   - The 2nd parameter is `id` (not "Key"), 3rd is `help` (not "Description")

### 🟡 Documentation Issues
1. **Inconsistent comment style in shorthand example** | Lines 14-16 | Change `// Key` and `// Description` to `// id` and `// help` to match actual parameter names in the IInquirer interface

2. **Object form uses inconsistent property description** | Lines 27-28 | The example shows `desc: 'Add TypeScript configuration'` but there's no explanation that this maps to the `help` parameter in the shorthand form

3. **Link to Ask Select uses anchor that may not exist** | Line 119 | Link `/developer/templates/reference/sdk/inquirer#select` - The inquirer.mdx file has `### select()` heading but heading anchors in Fumadocs may be auto-generated differently

### 🟠 Other Problems
1. **No mention of `errorMessage` property** | Recommendation: The ConfirmQ interface supports an `errorMessage?: string | null` property (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:29`), which is not documented in the "Object Form (with default)" example. This property could be useful for customizing validation error messages.

2. **No mention that `validate` is not supported for ConfirmQ** | The ConfirmQ interface shows `validate?: null` indicating validation is not available for confirm questions, unlike other question types. This should be noted in the documentation.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 3 |
| 🟠 | 2 |
