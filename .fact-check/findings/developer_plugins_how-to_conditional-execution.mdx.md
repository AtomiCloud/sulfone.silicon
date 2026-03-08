<!-- source: content/docs/developer/plugins/how-to/conditional-execution.mdx -->
# 📄 File: content/docs/developer/plugins/how-to/conditional-execution.mdx

> This page documents plugin conditional execution patterns using config. The plugin code examples are correct, but the Template Configuration section has a significant error showing the wrong function signature.

### 🔴 Source Code Inaccuracies

1. **Template function signature is wrong**
   - Documented: `export default async function (input: CyanPluginInput): Promise<Cyan>`
   - Actual: `async (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>`
   - Evidence: `../helium/sdks/node/src/api/template/lambda.ts:6` - `type LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>;`
   - Also confirmed in `../iridium/e2e/template1/cyan/index.ts:3` - `StartTemplateWithLambda(async (i: IInquirer, d: IDeterminism) => {`

2. **Wrong type used in template example**
   - Documented: Uses `CyanPluginInput` for template function parameter
   - Actual: Templates use `IInquirer` and `IDeterminism` parameters; `CyanPluginInput` is only for plugins
   - Evidence: `../helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` - `CyanPluginInput` has `{ directory, config }` fields which don't match template inputs

### 🟡 Documentation Issues

1. **Template Configuration example needs complete rewrite**
   - Problem: The entire "Template Configuration" section (lines 61-88) shows incorrect template code that wouldn't compile
   - Location: Lines 65-88 (the code block)
   - Fix: Replace with correct pattern showing `StartTemplateWithLambda(async (i: IInquirer, d: IDeterminism) => { ... })` with inquirer prompts and return of `Cyan` object

2. **Import example in Template Configuration is misleading**
   - Problem: Shows `import type { Cyan } from '@atomicloud/cyan-sdk';` but the function signature is wrong
   - Location: Line 66
   - Fix: Add `IInquirer` and `IDeterminism` imports which are actually needed for templates

### 🟠 Other Problems

1. **Link text refers to wrong type name**
   - Problem: The related link at line 215 references `CyanPluginInput` in the title, but the linked page uses `PluginInput`
   - Location: Line 215
   - Recommendation: Verify which type name is correct and ensure consistency across documentation

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 2 |
| 🟠 | 1 |
