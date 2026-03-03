<!-- source: content/docs/developer/templates/how-to/ask-date.mdx -->
# 📄 File: content/docs/developer/templates/how-to/ask-date.mdx

> Documentation for the `dateSelect` API for asking date questions in templates. Contains critical inaccuracies regarding return types (returns string, not Date), validation function input type (receives string, not Date), and all code examples that use Date methods on the returned value would fail at runtime.

### 🔴 Source Code Inaccuracies

1. **Return Type Incorrect**
   - **Documented:** `// Returns: Date object` (line 18)
   - **Actual:** `Promise<string>` - The dateSelect method returns a string, not a Date object
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26` shows `dateSelect(q: DateQ): Promise<string>;` and `dateSelect(q: string, id: string, help?: string | null): Promise<string>;`

2. **Return Type Used in Code Examples Incorrect**
   - **Documented:** Code examples use `deadline.toISOString()`, `deadline.getFullYear()`, `deadline.getMonth()`, `endDate.getTime()`, `licenseExpiry.getTime()`, `date < new Date()` comparison
   - **Actual:** The return type is `string`, not `Date`, so these Date methods would fail at runtime
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:148` shows `if (isStringAnswer(answer)) return Promise.resolve(answer.answer);` - returns a string

3. **Validation Function Receives String, Not Date**
   - **Documented:** `validate: (date) => { if (date < new Date()) ... }` (lines 107-111) - implies date parameter is a Date object
   - **Actual:** The validate function receives a `string`, not a Date object
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:37` shows `validate?: (input: string) => string | null;`

4. **Date Calculations Would Fail**
   - **Documented:** Lines 70-71 show `endDate.getTime() - startDate.getTime()` which requires Date objects
   - **Actual:** Since `dateSelect` returns strings, you would need to parse them first: `new Date(endDate).getTime() - new Date(startDate).getTime()`
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26`

5. **Formatting Examples Incorrect**
   - **Documented:** Lines 41-49 show `deadline.toISOString().split('T')[0]` to format the date
   - **Actual:** Since `dateSelect` returns a string (likely already in ISO format like "2024-12-31"), calling `.toISOString()` on a string would fail
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:148`

### 🟡 Documentation Issues

1. **Missing minDate/maxDate Properties**
   - **Problem:** The documentation does not mention the `minDate` and `maxDate` properties available on DateQ
   - **Location:** Object Form section (lines 23-31)
   - **Fix:** Add examples showing `minDate` and `maxDate` usage for date range constraints
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:40-41` shows `minDate?: Date | null;` and `maxDate?: Date | null;`

2. **Test File Shows Additional Properties**
   - **Problem:** The test file shows additional properties like `maxDate`, `minDate` being used but not documented
   - **Location:** Common Patterns section
   - **Fix:** Document the `minDate` and `maxDate` properties for constraining date selection
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:47-64`

### 🟠 Other Problems

1. **Inconsistent Return Type Across SDKs**
   - **Problem:** The .NET SDK returns `DateOnly` while Node SDK returns `string`
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Inquirer.cs:17` shows `Task<DateOnly> DateSelect(DateQ q);`
   - **Recommendation:** Document this difference clearly or note which SDK this documentation applies to

2. **Validation Example Needs Conversion**
   - **Problem:** The validation example compares `date < new Date()` but `date` is a string
   - **Recommendation:** Update validation example to: `validate: (dateStr) => { if (new Date(dateStr) < new Date()) { return 'Start date must be in the future'; } return null; }`

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 2 |
| 🟠 | 2 |
