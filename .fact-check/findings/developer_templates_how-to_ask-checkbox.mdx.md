<!-- source: content/docs/developer/templates/how-to/ask-checkbox.mdx -->
# File: content/docs/developer/templates/how-to/ask-checkbox.mdx

> How-to guide for using checkbox questions to collect multi-select input from users. Documents shorthand and object forms with validation and default value patterns.

### Source Code Inaccuracies

1. **checkbox() Object Form - default Property**
   - Documented: `default: ['ESLint']` (line 31)
   - Actual: The `CheckboxQ` interface does NOT have a `default` property. The interface only contains `type`, `id`, `message`, `desc`, `validate`, and `options`.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:11-19` shows `CheckboxQ` interface without `default` field

2. **checkbox() Object Form - validate Property Type**
   - Documented: `validate: (selected) => { ... }` (lines 32-35, 99-104)
   - Actual: The `CheckboxQ` interface defines `validate?: null` - meaning validation is NOT supported for checkbox questions. The type is explicitly `null`, not a function.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:16`

3. **With Defaults Example - default Property**
   - Documented: `default: ['ESLint', 'Prettier']` (line 117)
   - Actual: The `CheckboxQ` interface does NOT have a `default` property.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:11-19`

4. **With Validation Example - validate Property**
   - Documented: `validate: (selected) => { ... }` (lines 99-104)
   - Actual: The `CheckboxQ` interface does NOT support validation - `validate?: null`.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:16`

5. **Shorthand Form Parameter Name - 'Description' vs 'help'**
   - Documented: Fourth parameter labeled as "Description" in comment (line 17)
   - Actual: The parameter is named `help` in the interface, not `desc` or `description`
   - Evidence: `helium/sdks/node/src/domain/core/inquirer.ts:6` shows `help?: string | null` as the fourth parameter

### Documentation Issues

1. **Parameter Naming - 'Key' vs 'id'**
   - Problem: Line 16 comment says `// Key` but the actual property name is `id`. This inconsistency could confuse users.
   - Location: Line 16
   - Fix: Change comment to `// id` or add note that the key parameter is named `id` in the API

2. **Code Examples Use Unsupported Features**
   - Problem: Multiple code examples (Object Form, With Validation, With Defaults) use `default` and `validate` properties that don't exist on CheckboxQ. Users will encounter TypeScript errors.
   - Location: Lines 24-37, 92-106, 110-119
   - Fix: Remove examples using `default` and `validate`, or clearly mark them as aspirational/planned features

3. **Missing Import Statement**
   - Problem: Code examples use `QuestionType` and `GlobType` without showing the import statement. Users need to know to import from `@atomicloud/cyan-sdk`.
   - Location: All code examples
   - Fix: Add import statement example: `import { StartTemplateWithLambda, GlobType, QuestionType } from '@atomicloud/cyan-sdk';`

4. **Validation Pattern Section Misleading**
   - Problem: The entire "With Validation" section (lines 91-106) documents a feature that is NOT supported by the SDK. The validate property on CheckboxQ is typed as `null`.
   - Location: Lines 91-106
   - Fix: Remove the section or replace with a note that validation is not available for checkbox questions

5. **With Defaults Section Misleading**
   - Problem: The "With Defaults" section (lines 108-119) documents a feature that is NOT supported by the SDK. CheckboxQ has no `default` property.
   - Location: Lines 108-119
   - Fix: Remove the section or note that defaults are not available for checkbox questions

6. **Return Type Comment Accurate**
   - The return type `// Returns: string[]` (line 19) is correct per the API.
   - Evidence: `helium/sdks/node/src/domain/core/inquirer.ts:6`

### Other Problems

1. **Conditional Files Example - GlobType.Copy vs Template**
   - Problem: The "Conditional Files Based on Selection" example (lines 75-85) uses `GlobType.Copy` for eslint/jest templates without explaining why Copy vs Template is chosen. New users may not understand the distinction.
   - Recommendation: Add a brief comment explaining when to use `GlobType.Template` (processed templates with variable substitution) vs `GlobType.Copy` (static files copied as-is)

2. **Related Link Verification**
   - Problem: The links to `/developer/templates/reference/sdk/inquirer`, `/developer/templates/how-to/ask-confirm`, and `/developer/templates/how-to/validate-input` should be verified to ensure they exist and are correctly formatted for the Fumadocs routing.
   - Recommendation: Verify all related links resolve correctly

3. **Template Logic Example Context Missing**
   - Problem: The "In Template Logic" example (lines 43-63) shows `config: { vars: { ... } }` structure but doesn't show the complete template context. New users may not understand where this code belongs.
   - Recommendation: Either show the complete template return structure or reference the full example tutorial

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 5 |
| Documentation Issues | 6 |
| Other Problems | 3 |
