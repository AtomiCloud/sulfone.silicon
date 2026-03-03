<!-- source: content/docs/developer/templates/how-to/index.mdx -->
# 📄 File: content/docs/developer/templates/how-to/index.mdx

> Index page listing how-to guides for template development. This is a navigation/hub page that links to 14 individual how-to guides. Source code verification against the helium SDK repository reveals significant discrepancies between documented APIs and actual SDK interfaces.

### 🔴 Source Code Inaccuracies
1. **CheckboxQ `default` property does not exist** | Documented: `default: ['ESLint']` for checkbox questions | Actual: `CheckboxQ` interface only has `type`, `id`, `message`, `desc?`, `validate?`, and `options` | Evidence: helium/sdks/node/src/domain/core/question.ts:11-19

2. **SelectQ `default` property does not exist** | Documented: `default: 'MIT'` for select questions | Actual: `SelectQ` interface has no `default` property | Evidence: helium/sdks/node/src/domain/core/question.ts:54-62

3. **CheckboxQ `validate` property is hardcoded to null** | Documented: `validate: (selected) => {...}` for checkbox | Actual: `CheckboxQ.validate` typed as `validate?: null` | Evidence: helium/sdks/node/src/domain/core/question.ts:16

4. **SelectQ `validate` property is hardcoded to null** | Documented: `validate: (selected) => {...}` for select | Actual: `SelectQ.validate` typed as `validate?: null` | Evidence: helium/sdks/node/src/domain/core/question.ts:59

5. **`d.uuid()`, `d.timestamp()`, `d.seq()` methods do not exist** | Documented: pin-determinism.mdx shows these methods on `IDeterminism` | Actual: `IDeterminism` only has `get(key: string, origin: () => string): string` method | Evidence: helium/sdks/node/src/domain/core/deterministic.ts:1-5

6. **`dateSelect()` returns `string`, not `Date`** | Documented: `// Returns: Date object` | Actual: `dateSelect(q: DateQ): Promise<string>` | Evidence: helium/sdks/node/src/domain/core/inquirer.ts:24-26

7. **Date validation function receives `string`, not `Date`** | Documented: `validate: (date) => { if (date < new Date()) {...} }` | Actual: `validate?: (input: string) => string | null` | Evidence: helium/sdks/node/src/domain/core/question.ts:37

### 🟡 Documentation Issues
1. **Missing Select question type from index** | Lines 14-17 | Add entry for "Ask Select Questions" since it is a core question type available in the SDK

2. **Missing Text question type from index** | Lines 14-17 | Add entry for "Ask Text Questions" since it is the most commonly used question type

3. **Anchor link may not resolve** | ask-confirm.mdx:119 | Link to `/developer/templates/reference/sdk/inquirer#select` should be verified

### 🟠 Other Problems
1. **Inconsistent return type for dateSelect** | All date examples show Date object methods (`.toISOString()`, `.getTime()`) but SDK returns string | Update documentation to show string parsing

2. **IDeterminism usage examples are incorrect** | pin-determinism.mdx shows non-existent methods | Rewrite using correct `d.get(key, originFn)` pattern

3. **Checkbox validation examples will fail** | validate property cannot accept functions | Remove validation examples for Checkbox or document limitation

4. **Select validation examples will fail** | validate property cannot accept functions | Remove validation examples for Select or document limitation

5. **Checkbox default values examples will fail** | default property not supported | Remove default examples for Checkbox

6. **Select default values examples will fail** | default property not supported | Remove default examples for Select

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 7 |
| 🟡 | 3 |
| 🟠 | 6 |
