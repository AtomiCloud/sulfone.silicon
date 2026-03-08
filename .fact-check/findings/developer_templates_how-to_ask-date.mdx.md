<!-- source: content/docs/developer/templates/how-to/ask-date.mdx -->
# 📄 File: content/docs/developer/templates/how-to/ask-date.mdx

> Documentation for using dateSelect questions in templates. Contains significant inaccuracies regarding the return type of dateSelect.

### 🔴 Source Code Inaccuracies
1. **Return type of dateSelect**
   - Documented: Returns `Date` object (line 18: `// Returns: Date object`)
   - Actual: Returns `string`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26` shows `dateSelect(q: DateQ): Promise<string>` and `dateSelect(q: string, id: string, help?: string | null): Promise<string>`

2. **Date method usage on result**
   - Documented: Using Date methods like `.toISOString()`, `.getTime()`, `.getFullYear()`, `.getMonth()` on the returned value (lines 41, 47-48, 71, 125-126)
   - Actual: The returned value is a string, not a Date object, so these methods would fail
   - Evidence: Same as above - return type is `Promise<string>`

3. **Validation function parameter type**
   - Documented: `validate: (date) => { if (date < new Date()) {...} }` treating parameter as Date (lines 107-112)
   - Actual: `validate?: (input: string) => string | null` - the parameter is a string
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:37`

4. **Date calculations using .getTime()**
   - Documented: `endDate.getTime() - startDate.getTime()` (line 71)
   - Actual: Since the return type is string, you must convert to Date first
   - Evidence: Test file shows proper usage: `const date = new Date(x)` then operations on the Date object

5. **Date formatting using .toISOString()**
   - Documented: `deadline.toISOString().split('T')[0]` (line 41)
   - Actual: Result is already a string; cannot call .toISOString() on it
   - Evidence: Return type is `Promise<string>`

### 🟡 Documentation Issues
1. **Missing conversion step** | Throughout document | Should show that string result needs to be converted to Date for manipulations: `const date = new Date(dateString)`

2. **Incorrect code examples** | Lines 37-51, 66-80, 86-97, 101-114, 118-135 | All code examples assume Date return type but should work with string

### 🟠 Other Problems
1. **Inconsistency with test file** | The actual test file (`template_test.ts`) shows the correct pattern: validation receives a string and converts it to Date with `new Date(x)`. The documentation should follow this pattern.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 2 |
| 🟠 | 1 |
