<!-- source: content/docs/developer/templates/how-to/validate-input.mdx -->
# 📄 File: content/docs/developer/templates/how-to/validate-input.mdx

> Documentation explaining how to use the `validate` function for user input validation in templates. The document contains examples for multiple question types but incorrectly claims CheckboxQ supports validation.

### 🔴 Source Code Inaccuracies
1. **Checkbox validation not supported** | Documented: `validate: (selected) => {...}` on checkbox questions | Actual: `validate?: null` in TypeScript, `validate: None = None` in Python, `readonly Func<string, string?>? Validate => null` in C# | Evidence: `helium/sdks/node/src/domain/core/question.ts:16`, `helium/sdks/python/cyanprintsdk/domain/core/question.py:12`, `helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/CheckboxQ.cs:6`

2. **Checkbox validate parameter type incorrect** | Documented: `validate: (selected) => {...}` with `selected` as array | Actual: Validate function signature is always `(input: string) => string | null` - receives string, not array | Evidence: `helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/IQuestion.cs` shows `Func<string, string?>? Validate`

3. **Select validation not supported** | Documented (via related link): validate on select() | Actual: `validate?: null` for SelectQ | Evidence: `helium/sdks/node/src/domain/core/question.ts:59`, `helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/SelectQ.cs:6`

4. **Confirm validation not supported** | Documented (implied): object form supports validate | Actual: `validate?: null` for ConfirmQ | Evidence: `helium/sdks/node/src/domain/core/question.ts:26`

### 🟡 Documentation Issues
1. **Checkbox Validation section shows non-working code** | Lines 155-170 | Remove this section or mark as unsupported since CheckboxQ.validate is always null

2. **Missing clarification on supported question types** | Throughout document | Add table showing validation support: Text (YES), Password (YES), DateSelect (YES), Select (NO), Checkbox (NO), Confirm (NO)

3. **Related link may have conflicting information** | Line 201 | The IInquirer reference may also show unsupported validation patterns - needs consistency check

### 🟠 Other Problems
1. **No architectural context for validation execution** | Document doesn't explain validation runs server-side via `/api/template/validate` endpoint | Add section explaining validation architecture

2. **No working examples in codebase** | None of the Iridium e2e templates (template1, template2, template3) use validate property | Consider adding a working example template

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 3 |
| 🟠 | 2 |
