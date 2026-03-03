<!-- source: content/docs/developer/templates/reference/sdk/inquirer.mdx -->
# 📄 File: content/docs/developer/templates/reference/sdk/inquirer.mdx

> Complete API reference for the IInquirer interface used for collecting user input during template generation. Documents text(), select(), confirm(), checkbox(), password(), and dateSelect() methods with shorthand and object forms.

### 🔴 Source Code Inaccuracies

1. **dateSelect() Return Type**
   - Documented: `// Returns: Date` (line 208)
   - Actual: `Promise<string>` in TypeScript
   - Evidence: `helium/sdks/node/src/domain/core/inquirer.ts:24` - `dateSelect(q: DateQ): Promise<string>;`

2. **select() Object Form - default Property**
   - Documented: `default: 'MIT'` (line 84)
   - Actual: SelectQ has no `default` property
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:54-62` - SelectQ interface has no default field

3. **select() Object Form - validate Property**
   - Documented: `validate: (selected) => { ... }` (lines 85-89)
   - Actual: `validate?: null` (explicitly null, not a function)
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:59` - `validate?: null`

4. **checkbox() Object Form - default Property**
   - Documented: `default: ['ESLint']` (line 148)
   - Actual: CheckboxQ has no `default` property
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:11-19` - CheckboxQ interface has no default field

5. **checkbox() Object Form - validate Property**
   - Documented: `validate: (selected) => { ... }` (lines 149-153)
   - Actual: `validate?: null` (explicitly null, not a function)
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:16` - `validate?: null`

6. **confirm() Object Form - validate Property**
   - Documented: validate available in table (line 251)
   - Actual: `validate?: null` (explicitly null, not a function)
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:26` - `validate?: null`

7. **Object Form Properties Table - validate Row**
   - Documented: `validate: (input) => string | null` for all types
   - Actual: Only available for TextQ, PasswordQ, DateQ. Explicitly null for SelectQ, CheckboxQ, ConfirmQ.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:11-73`

8. **Object Form Properties Table - default Row**
   - Documented: `default: varies` for all types
   - Actual: Only available for TextQ, ConfirmQ, DateQ. Does NOT exist for SelectQ, CheckboxQ, PasswordQ.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:11-73`

### 🟡 Documentation Issues

1. **SDK Package Name Not Mentioned**
   - Problem: No import statement showing package name (`@atomicloud/cyan-sdk`)
   - Location: Throughout the document
   - Fix: Add import example: `import { StartTemplateWithLambda, IInquirer, QuestionType } from '@atomicloud/cyan-sdk';`

2. **Parameter Naming Inconsistency**
   - Problem: Documentation uses "description" but API parameter is "help" (shorthand) or "desc" (object form)
   - Location: All shorthand form examples
   - Fix: Use "help" consistently or explicitly note the mapping

3. **Missing Properties from Object Form Examples**
   - Problem: Several question types have undocumented properties: `initial` (TextQ), `minDate/maxDate` (DateQ), `errorMessage` (ConfirmQ), `confirmation` (PasswordQ)
   - Location: Object form examples for each method
   - Fix: Add these properties to examples or the properties table

4. **Object Form Properties Table Incomplete**
   - Problem: Table missing rows for `initial`, `errorMessage`, `confirmation`, `minDate`, `maxDate`
   - Location: Lines 240-253
   - Fix: Add rows for type-specific properties

5. **Parameter Order Inconsistency**
   - Problem: Shorthand forms have different parameter orders (text/confirm/password/dateSelect vs select/checkbox)
   - Location: All shorthand examples
   - Fix: Add a note explaining the difference or make more explicit

### 🟠 Other Problems

1. **No Mention of Cross-Language Differences**
   - Problem: Documentation only covers TypeScript SDK; Python and .NET have different naming conventions
   - Recommendation: Add note about language-specific differences or create separate pages

2. **No Type Safety Warning for Object Forms**
   - Problem: The `type` property in object forms must match the method called, but no warning about mismatches
   - Recommendation: Add a note that type property must match the method

3. **Related Links Not Verified**
   - Problem: Links like `/developer/templates/how-to/use-keys` should be verified to exist
   - Recommendation: Verify all related links work correctly

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 8 |
| 🟡 | 5 |
| 🟠 | 3 |
