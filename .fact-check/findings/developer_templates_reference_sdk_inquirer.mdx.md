<!-- source: content/docs/developer/templates/reference/sdk/inquirer.mdx -->
# 📄 File: content/docs/developer/templates/reference/sdk/inquirer.mdx

> Document describes IInquirer API for collecting user input during template generation. The API is mostly accurate but has several issues with property documentation that doesn't match the actual source code.

### 🔴 Source Code Inaccuracies
1. **`confirmation` property type for `PasswordQ`**
   - Documented: `confirmation: string` (line 267) - "Confirmation prompt text"
   - Actual: `confirmation?: boolean | null` (helium/sdks/node/src/domain/core/question.ts:51)
   - The property is a boolean flag, not a string for custom prompt text

2. **`default` type for `DateQ`**
   - Documented: `default: string` (line 260) for Text, Date
   - Actual: `default?: Date | null` for DateQ (helium/sdks/node/src/domain/core/question.ts:39)
   - DateQ's default is `Date | null`, not `string`

3. **`initial` property availability**
   - Documented: `initial: string` available for Text (line 262)
   - Actual: Correct - `initial?: string | null` exists in TextQ (helium/sdks/node/src/domain/core/question.ts:72)
   - This is accurate

### 🟡 Documentation Issues
1. **Inconsistent parameter naming in shorthand forms**
   - Problem: Documentation uses `help` as parameter name in IInquirer interface but calls it "description" in the docs
   - Location: Shorthand form examples (e.g., lines 42-47, 75-82, 134-141)
   - Fix: The source code uses `help?: string | null` as the parameter name. Either clarify that the parameter is called `help` but represents the description, or be consistent with terminology

2. **Object form type annotations use wrong type name for date method**
   - Problem: `dateSelect()` is documented but object form uses `QuestionType.DateSelect` which is correct, but the return type comment says "Returns: string (ISO date format)"
   - Location: Line 207-208
   - Fix: This is accurate - the method does return a string in ISO format. No change needed, but consider clarifying that the validation function receives this ISO string

3. **Missing `validate?: null` for Select and Checkbox in table**
   - Problem: Documentation says "Select, Checkbox, and Confirm do not support custom validation functions" (line 271) but doesn't show that `validate` is explicitly typed as `null` in the source
   - Location: Type-Specific Properties table (lines 258-269)
   - Fix: Consider noting that `validate` is explicitly `null` for these types, not just absent

### 🟠 Other Problems
1. **Minor: Callout says "desc" but shorthand uses third parameter**
   - Problem: The callout on line 31-33 mentions "In shorthand forms, the third parameter is a help/description string. In object forms, use `desc` for the same purpose." This is correct but could be clearer about the parameter name being `help` in the shorthand function signature
   - Recommendation: Consider clarifying that the shorthand parameter is named `help` while the object property is named `desc`

2. **LambdaTemplateFn parameter names**
   - Problem: Documentation shows `StartTemplateWithLambda(async (i, d) => {...})` but doesn't document what `d` represents
   - Location: Lines 23-27
   - Recommendation: The `d` parameter is `IDeterminism` - consider documenting it or using more descriptive variable names in examples

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 3 |
| 🟠 | 2 |
