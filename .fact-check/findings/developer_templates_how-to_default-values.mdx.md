<!-- source: content/docs/developer/templates/how-to/default-values.mdx -->
# 📄 File: content/docs/developer/templates/how-to/default-values.mdx

> Documentation explaining how to set default values for question types in the IInquirer API. Contains significant inaccuracies regarding which question types support defaults and the actual API structure.

### 🔴 Source Code Inaccuracies

1. **SelectQ `default` property does not exist**
   - Documented: `select()` with a `default: 'MIT'` property (lines 44-52)
   - Actual: `SelectQ` interface does NOT have a `default` property in any SDK
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:54-62` - `SelectQ` only has `type`, `id`, `message`, `desc?`, `validate?`, and `options` - no `default`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/SelectQ.cs:1-13` - no `Default` property
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/question.py:47-54` - no `default` field

2. **CheckboxQ `default` property does not exist**
   - Documented: `checkbox()` with a `default: ['ESLint', 'Prettier']` property (lines 69-78)
   - Actual: `CheckboxQ` interface does NOT have a `default` property in any SDK
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:11-19` - `CheckboxQ` only has `type`, `id`, `message`, `desc?`, `validate?`, and `options` - no `default`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/CheckboxQ.cs:1-12` - no `Default` property
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/question.py:6-13` - no `default` field

3. **Conditional Defaults example uses non-existent SelectQ default**
   - Documented: Lines 124-142 show conditional defaults for `select()` with `default: 'React'` and `default: framework === 'Vue' ? 'Vitest' : 'Jest'`
   - Actual: `SelectQ` does not support `default` property at all
   - Evidence: Same as issue #1 above

4. **`dateSelect()` return type is `string`, not `Date`**
   - Documented: Example at lines 82-89 shows `default: new Date()` and implies the return value is a Date object
   - Actual: `dateSelect()` returns `Promise<string>`, not `Promise<Date>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24` - `dateSelect(q: DateQ): Promise<string>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/inquirer.py:69-72` - `-> str` return type

5. **Computed Defaults example for dateSelect uses incorrect default type**
   - Documented: Lines 107-118 show `default: defaultDeadline` where `defaultDeadline` is a `Date` object
   - Actual: While `DateQ.default` accepts `Date | null` in TypeScript, the return type is still `string`, which may cause confusion for users expecting a Date object back
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:32-42` - `default?: Date | null` is valid, but the return is still `Promise<string>`

### 🟡 Documentation Issues

1. **No mention of `initial` property for TextQ**
   - Problem: `TextQ` has both `default` and `initial` properties, but only `default` is documented
   - Location: Lines 32-40 (Text section)
   - Fix: Document the `initial` property and explain the difference between `default` and `initial`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:64-73` shows both `default?: string | null` and `initial?: string | null`

2. **No mention that SelectQ and CheckboxQ do NOT support defaults**
   - Problem: Documentation implies all question types support defaults, but Select and Checkbox do not
   - Location: "Default by Question Type" section (lines 28-90)
   - Fix: Add a clear note that Select and Checkbox do NOT support the `default` property, or remove those sections entirely

3. **SelectQ and CheckboxQ `validate` property is `null`, not a function**
   - Problem: Documentation shows `validate` functions for Select and Checkbox, but actual types show `validate?: null`
   - Location: Lines 44-52 (Select) and lines 69-78 (Checkbox)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:54-62` - `validate?: null` for SelectQ
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:11-19` - `validate?: null` for CheckboxQ
   - Fix: Either remove validate examples from Select/Checkbox or document that validation is not supported for these types

4. **Related link path inconsistency**
   - Problem: The "Related" section links to `/developer/templates/reference/sdk/inquirer` - should verify this matches Fumadocs routing
   - Location: Line 154
   - Fix: Verify the link resolves correctly

### 🟠 Other Problems

1. **Inconsistency between SDKs for DateQ.default type**
   - Problem: TypeScript SDK uses `Date | null` for default, but C# SDK uses `DateOnly?`
   - Recommendation: Document the type difference per SDK language

2. **Cross-file inconsistency in documentation**
   - Problem: The `inquirer.mdx` reference file also shows `default` for Select and Checkbox, perpetuating the same inaccuracies
   - Recommendation: Fix all documentation files consistently

3. **DateQ default in C# uses DateOnly, not DateTime**
   - Problem: Documentation shows `new Date()` (JavaScript Date) but C# SDK uses `DateOnly?`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/DateQ.cs:8` - `public DateOnly? Default { get; set; }`
   - Recommendation: Add language-specific examples or notes

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 4 |
| 🟠 | 3 |
