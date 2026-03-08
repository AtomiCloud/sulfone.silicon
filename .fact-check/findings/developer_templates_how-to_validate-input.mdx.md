<!-- source: content/docs/developer/templates/how-to/validate-input.mdx -->
# 📄 File: content/docs/developer/templates/how-to/validate-input.mdx

> Documentation describes validation patterns for user input in Cyan templates. The API examples and patterns are generally accurate, but there is a minor inconsistency regarding `confirmation` property type.

### 🔴 Source Code Inaccuracies
1. **PasswordQ confirmation property type** | Documented as `string` in inquirer reference, but actual type is `boolean | null` | helium/sdks/node/src/domain/core/question.ts:51: `confirmation?: boolean | null;`

### 🟡 Documentation Issues
1. **No import statement shown** | Code examples don't include imports | Add `import { StartTemplateWithLambda, QuestionType } from '@atomicloud/cyan-sdk';` at the beginning or reference the setup documentation
2. **Inquirer reference link path inconsistency** | The related link `/docs/developer/templates/reference/sdk/inquirer` points to the correct file, but the inquirer.mdx has a minor issue in its own documentation | The `confirmation` property type in the reference table shows `string` but should be `boolean`
3. **Missing context about where validation runs** | The documentation doesn't explain that validation is executed client-side during the interactive prompt phase | Consider adding a note about the validation execution context

### 🟠 Other Problems
1. **Code examples assume knowledge of template structure** | The examples show `i.text()` calls without wrapping them in `StartTemplateWithLambda` context | Consider adding a brief setup reminder or linking to quickstart
2. **No error handling shown** | Examples don't show what happens when validation fails repeatedly or how to handle edge cases | Consider adding a note about validation loop behavior

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 3 |
| 🟠 | 2 |
