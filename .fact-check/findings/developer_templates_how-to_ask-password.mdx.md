<!-- source: content/docs/developer/templates/how-to/ask-password.mdx -->
# 📄 File: content/docs/developer/templates/how-to/ask-password.mdx

> Documentation for password questions in templates. The password method API is documented correctly but has some inconsistencies with parameter naming conventions. The Environment File Pattern example has a non-functional code structure.

### 🔴 Source Code Inaccuracies
1. **Parameter naming convention mismatch** | Documented uses `desc` but shorthand form examples show the third parameter as "Description" | The actual IInquirer interface (helium/sdks/node/src/domain/core/inquirer.ts:14) uses `help` as the parameter name: `password(q: string, id: string, help?: string | null): Promise<string>;` The documentation consistently uses `desc` in object forms but the shorthand form's third parameter description should clarify it maps to `help` in some SDKs.

2. **Environment File Pattern - Invalid return structure** | Documented shows `return { processors: [...] }` at file level | The `return` statement on line 75-89 is not valid in template context. Templates use `StartTemplateWithLambda` which should return a `Cyan` object, not a raw object with processors. The correct pattern should use the `d` (draft) parameter to set processors.

### 🟡 Documentation Issues
1. **Inconsistent parameter name between SDKs** | Multiple locations use `desc` | The Node SDK uses `help` as the parameter name (inquirer.ts:14), while the documentation uses `desc`. The object form's `desc` property is correct per question.ts:47, but shorthand form parameter naming could be clarified.

2. **Missing confirmation property documentation** | Object form section | PasswordQ interface (question.ts:44-52) includes a `confirmation?: boolean | null` property that allows password confirmation prompts, but this is not documented in the how-to guide.

3. **QuestionType enum value not shown** | Object form examples | The QuestionType.Password enum value is `4` according to question.ts:7, but the documentation shows `QuestionType.Password` without mentioning the numeric value which could help with debugging.

4. **Validate return type could be clearer** | Validation patterns section | The validate function returns `string | null` where string is the error message, but this could be more explicitly stated for clarity.

### 🟠 Other Problems
1. **No import statement shown** | All code examples | The code examples use `i.password()` and `QuestionType.Password` but don't show the necessary import statements for `QuestionType` from the SDK.

2. **Safe Patterns section incomplete** | Lines 47-65 | The example shows `config: { vars: { ... } }` but doesn't clarify this should be inside a processor's config, not a standalone config object.

3. **No link to related types documentation** | End of document | The "Related" section links to the IInquirer reference but could also link to PasswordQ type documentation if it exists.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 4 |
| 🟠 | 3 |
