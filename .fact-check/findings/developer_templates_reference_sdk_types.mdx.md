<!-- source: content/docs/developer/templates/reference/sdk/types.mdx -->
# 📄 File: content/docs/developer/templates/reference/sdk/types.mdx

> Documentation for CyanPrint SDK type definitions (@atomicloud/cyan-sdk v2.1.0) but contains significant naming mismatches and missing/incorrect field definitions compared to actual source code.

### 🔴 Source Code Inaccuracies

1. **GlobType.Ignore enum value does not exist**
   - Documented: `GlobType { Template = 0, Copy = 1, Ignore = 2 }`
   - Actual: `enum GlobType { Template = 0, Copy = 1 }` - only two values
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`

2. **ICyanConfig interface name is wrong - actual is Cyan**
   - Documented: `interface ICyanConfig`
   - Actual: `interface Cyan`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27`

3. **Cyan.plugins is required, not optional**
   - Documented: `plugins?: IPlugin[]`
   - Actual: `plugins: CyanPlugin[]` (required, no optional marker)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27`

4. **IProcessor interface name is wrong - actual is CyanProcessor**
   - Documented: `interface IProcessor`
   - Actual: `interface CyanProcessor`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:18-22`

5. **IProcessor.config type is unknown, not Record<string, any>**
   - Documented: `config: Record<string, any>`
   - Actual: `config: unknown`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:21`

6. **IFileGroup interface name is wrong - actual is CyanGlob**
   - Documented: `interface IFileGroup`
   - Actual: `interface CyanGlob`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11`

7. **CyanGlob.root is optional, not required**
   - Documented: `root: string` (required)
   - Actual: `root?: string | null` (optional)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7`

8. **IPlugin interface name is wrong - actual is CyanPlugin**
   - Documented: `interface IPlugin`
   - Actual: `interface CyanPlugin`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:13-16`

9. **CyanPlugin.config type is unknown, not Record<string, any>**
   - Documented: `config: Record<string, any>`
   - Actual: `config: unknown`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:15`

10. **IInquirer shorthand parameter name is 'help' not 'desc'**
    - Documented: `text(message: string, id: string, desc?: string)`
    - Actual: `text(q: string, id: string, help?: string | null)`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:20-22`

11. **IInquirer.dateSelect returns string, not Date**
    - Documented: `dateSelect(...): Promise<Date>`
    - Actual: `dateSelect(...): Promise<string>`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26`

12. **IDefine interface does not exist - actual is IDeterminism with different API**
    - Documented: `interface IDefine { uuid(), timestamp(), seq(namespace) }`
    - Actual: `interface IDeterminism { get(key: string, origin: () => string): string }`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-3`

13. **ITextQuestion interface name is wrong - actual is TextQ**
    - Documented: `interface ITextQuestion`
    - Actual: `interface TextQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:64-73`

14. **TextQ has additional 'initial' field not documented**
    - Documented: Only `default?: string`
    - Actual: Has both `default?: string | null` and `initial?: string | null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:71-72`

15. **ISelectQuestion interface name is wrong - actual is SelectQ**
    - Documented: `interface ISelectQuestion`
    - Actual: `interface SelectQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:54-62`

16. **SelectQ.validate is null, not a function**
    - Documented: `validate?: (selected: string) => string | null`
    - Actual: `validate?: null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:59`

17. **SelectQ does not have default field**
    - Documented: `default?: string`
    - Actual: No default field exists
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:54-62`

18. **IConfirmQuestion interface name is wrong - actual is ConfirmQ**
    - Documented: `interface IConfirmQuestion`
    - Actual: `interface ConfirmQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:21-30`

19. **ConfirmQ has 'errorMessage' field not documented**
    - Documented: No errorMessage field
    - Actual: `errorMessage?: string | null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:29`

20. **ICheckboxQuestion interface name is wrong - actual is CheckboxQ**
    - Documented: `interface ICheckboxQuestion`
    - Actual: `interface CheckboxQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:11-19`

21. **CheckboxQ.validate is null, not a function**
    - Documented: `validate?: (selected: string[]) => string | null`
    - Actual: `validate?: null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:16`

22. **CheckboxQ does not have default field**
    - Documented: `default?: string[]`
    - Actual: No default field exists
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:11-19`

23. **IPasswordQuestion interface name is wrong - actual is PasswordQ**
    - Documented: `interface IPasswordQuestion`
    - Actual: `interface PasswordQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:44-52`

24. **PasswordQ has 'confirmation' field not documented**
    - Documented: No confirmation field
    - Actual: `confirmation?: boolean | null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:51`

25. **IDateQuestion interface name is wrong - actual is DateQ**
    - Documented: `interface IDateQuestion`
    - Actual: `interface DateQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:32-42`

26. **DateQ.validate parameter is string, not Date**
    - Documented: `validate?: (date: Date) => string | null`
    - Actual: `validate?: (input: string) => string | null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:37`

27. **DateQ has minDate and maxDate fields not documented**
    - Documented: Only default field
    - Actual: Has `minDate?: Date | null` and `maxDate?: Date | null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:40-41`

28. **ValidateFunction type alias does not exist**
    - Documented: `type ValidateFunction<T> = (input: T) => string | null`
    - Actual: Not exported from SDK
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:183-207` - not in export list

### 🟡 Documentation Issues

1. **Question interface desc fields should include null type**
   - Problem: All question interfaces show `desc?: string` but actual types are `desc?: string | null`
   - Location: All question interfaces (lines 166-242)
   - Fix: Add `| null` to desc field types

2. **Usage example parameter naming inconsistent**
   - Problem: IInquirer shorthand forms documented with `desc` parameter but actual API uses `help`
   - Location: Lines 131-136
   - Fix: Change `desc?: string` to `help?: string | null`

3. **Object vs shorthand form distinction unclear**
   - Problem: QuestionType example uses `desc` property in object form but shorthand form uses different parameter
   - Location: Lines 57-62
   - Fix: Clarify distinction between object form properties and shorthand form parameters

### 🟠 Other Problems

1. **Interface naming convention mismatch**
   - Problem: Documentation uses I-prefix convention (IProcessor, IPlugin, IFileGroup) but actual SDK uses Cyan-prefix (CyanProcessor, CyanPlugin, CyanGlob) and Q-suffix for questions (TextQ, SelectQ)
   - Recommendation: Update all interface names to match actual SDK naming convention

2. **IDefine section is entirely fabricated**
   - Problem: The IDefine interface section (lines 150-160) documents an interface that does not exist in the SDK
   - Recommendation: Remove section and document actual IDeterminism interface with `get(key, origin)` method

3. **ValidateFunction section documents non-existent type**
   - Problem: Type alias section documents a type that doesn't exist in SDK
   - Recommendation: Remove this section entirely

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 28 |
| 🟡 | 3 |
| 🟠 | 3 |
