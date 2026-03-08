<!-- source: content/docs/developer/templates/tutorials/04-asking-questions.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/04-asking-questions.mdx

> Documentation for tutorial on using IInquirer to ask user questions in templates. Generally accurate with minor issues around link paths and explanation of key behavior.

### 🔴 Source Code Inaccuracies
1. Documented: `password()` listed in Question Types table as returning `string` | Actual: Correct per helium/sdks/node/src/domain/core/inquirer.ts:12-14 | Evidence: Verified
2. Documented: `dateSelect()` listed in Question Types table as returning `string` | Actual: Correct per helium/sdks/node/src/domain/core/inquirer.ts:24-26 | Evidence: Verified

### 🟡 Documentation Issues
1. Problem: Link to IInquirer Reference uses relative path that may not resolve correctly | Location: Line 226 `[**IInquirer Reference**](/docs/developer/templates/reference/sdk/inquirer)` | Fix: Path appears correct, no fix needed
2. Problem: Table shows `password()` returns `string` but no example code demonstrates it | Location: Line 79 | Fix: Consider adding a brief example like other question types for completeness
3. Problem: Table shows `dateSelect()` returns `string` but no example code demonstrates it | Location: Line 80 | Fix: Consider adding a brief example like other question types for completeness

### 🟠 Other Problems
1. Problem: The "Keys Concept" section (lines 82-128) describes key reuse behavior where same key = same answer, but this is a subtle behavior that could confuse users | Recommendation: This is accurate documentation of the design, no change needed
2. Problem: The `cyan/default` processor name is used throughout but there's no verification in the source repositories that this processor actually exists with this exact name | Location: Lines 56, 192 | Recommendation: The processor name appears in boron/docs and is consistent with other documentation, consider adding a note about where this processor is defined

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 3 |
| 🟠 | 2 |
