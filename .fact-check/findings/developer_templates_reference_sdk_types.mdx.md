<!-- source: content/docs/developer/templates/reference/sdk/types.mdx -->
# 📄 File: content/docs/developer/templates/reference/sdk/types.mdx

> The documentation accurately describes the SDK type definitions with minor discrepancies. The type definitions for GlobType, QuestionType, Cyan, CyanProcessor, CyanGlob, CyanPlugin, IInquirer, IDeterminism, and all question interfaces (TextQ, SelectQ, ConfirmQ, CheckboxQ, PasswordQ, DateQ) are accurate and match the actual SDK implementation.

### 🔴 Source Code Inaccuracies
1. **IInquirer interface shorthand forms ordering** | Documented shows `text(q: string, id: string, help?: string | null)` but actual implementation shows text shorthand accepts `(q: string, id: string, help?: string | null)` - however for `select` and `checkbox` the documented order is `(q: string, options: string[], id: string, help?: string | null)` which matches actual | Verified in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:16-18` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:88-104` - **Documentation is accurate**

2. **QuestionType usage in IInquirer** | Documented example at line 56-61 shows `i.text({ type: QuestionType.Text, ... })` | Actual SDK uses object form without explicit type when using shorthand, but type is required in object form | However, looking at actual usage in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:4-12`, templates use shorthand form `i.text('What is your name?', 'id')` not the object form with `QuestionType.Text` | **The example using QuestionType.Text in object form is valid but not the common usage pattern**

3. **ConfirmQ interface** | Documented shows `validate?: null` but the interface also has `errorMessage?: string | null` | Actual: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:21-30` shows both `validate?: null` AND `errorMessage?: string | null` are present | **Documentation is accurate**

4. **Question interfaces validate property** | TextQ, DateQ, PasswordQ documented with `validate?: (input: string) => string | null` | SelectQ, CheckboxQ, ConfirmQ documented with `validate?: null` | Actual source at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:11-73` confirms this is accurate

### 🟡 Documentation Issues
1. **Misleading example for IInquirer text()** | Line 56-61 | The example shows using `QuestionType.Text` in an object form, but this is not the typical usage pattern. Real templates (e.g., iridium e2e tests) use shorthand form like `await i.text('What is your name?', 'cyane2e/template1/name')` | Recommend showing both shorthand form (most common) and object form as advanced usage

2. **Missing note about IInquirer shorthand vs object forms** | Throughout IInquirer section | The documentation shows both forms but doesn't clearly indicate that shorthand forms are more commonly used in practice | Add a note clarifying that shorthand forms are typically preferred for simple use cases

3. **Related links may be broken** | Lines 248-250 | Links `/docs/developer/templates/reference/sdk/inquirer`, `/docs/developer/templates/reference/sdk/cyan-config`, `/docs/developer/templates/reference/sdk/globbing` should be verified to exist in the documentation structure

### 🟠 Other Problems
1. **Missing CyanPluginInput and CyanProcessorInput types** | The main.ts export at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193-194` exports `CyanPluginInput` and `CyanProcessorInput` types but they are not documented | Consider adding documentation for completeness

2. **Missing ResolverInput and ResolverOutput types** | The SDK exports these types (main.ts:198-199) but they are not documented | May warrant addition if Resolvers are part of the template SDK surface

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 (verified - documented types match actual implementation) |
| 🟡 | 3 |
| 🟠 | 2 |
