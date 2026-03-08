<!-- source: content/docs/developer/templates/how-to/default-values.mdx -->
# 📄 File: content/docs/developer/templates/how-to/default-values.mdx

> This document describes how to set default values for question types. Multiple cross-document inconsistencies were found regarding which types support defaults, and the return type of `dateSelect()`.

### 🔴 Source Code Inaccuracies
1. **Checkbox `default` support contradiction**
   - Documented: Line 87 states "`select()` and `checkbox()` question types do **not** support the `default` property"
   - Actual: `content/docs/developer/templates/how-to/ask-checkbox.mdx` lines 31 and 117 show `checkbox()` WITH `default` property: `default: ['ESLint']` and `default: ['ESLint', 'Prettier']`
   - Evidence: The reference docs in `types.mdx` lines 206-213 show `CheckboxQ` interface WITHOUT `default` property, and `inquirer.mdx` line 271 confirms "Select and Checkbox also do not support default values"
   - The `ask-checkbox.mdx` documentation is incorrect and should be fixed, OR the `default-values.mdx` statement is incorrect and needs updating

2. **Checkbox `validate` support contradiction**
   - Documented: Line 171 states "Only `text()`, `confirm()`, and `dateSelect()` support defaults; `select()` and `checkbox()` do not"
   - Actual: `ask-checkbox.mdx` lines 32-36 and 99-105 show `checkbox()` WITH `validate` property
   - Evidence: `types.mdx` lines 206-213 show `CheckboxQ` interface with `validate?: null`, meaning validate is NOT supported. `inquirer.mdx` line 271 confirms "Select, Checkbox, and Confirm do not support custom validation functions"
   - The `ask-checkbox.mdx` documentation is incorrect about validate support

### 🟡 Documentation Issues
1. **`dateSelect()` return type inconsistency**
   - Problem: `default-values.mdx` line 83 states "startDate is a string, e.g., '2024-01-15'", but `ask-date.mdx` line 18 states "// Returns: Date object" and shows code calling `.toISOString()` on the result (lines 41, 75-76)
   - Location: Lines 73-84 and 116
   - Fix: Need to reconcile with `ask-date.mdx` which says return type is Date. The `inquirer.mdx` line 227 confirms "dateSelect() returns a string in ISO date format". The `default-values.mdx` documentation appears correct; `ask-date.mdx` needs fixing.

2. **Shorthand form comment is misleading**
   - Problem: Line 15 shows "Shorthand - no default support" but this could be clearer - shorthand forms simply don't have a parameter for default, they don't actively prevent defaults
   - Location: Lines 14-17
   - Fix: Clarify that shorthand forms don't have a parameter for default values; use object form to specify defaults

3. **Missing return type annotation for Confirm**
   - Problem: Line 67 shows confirm example without return type annotation, making it less clear what the default returns
   - Location: Lines 61-69
   - Fix: Add comment showing return type, e.g., "// Returns: boolean"

### 🟠 Other Problems
1. **Inconsistent code style for return type comments**
   - Problem: Some examples show return type comments (lines 83, 116), others do not (lines 67)
   - Recommendation: Be consistent about showing return types in code examples

2. **Best Practices section could be clearer about validate support**
   - Problem: Line 171 states limits on default support but doesn't mention validate support limits which is related
   - Recommendation: Add note about validate function support: only `text()`, `password()`, and `dateSelect()` support custom validation

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 3 |
| 🟠 | 2 |
