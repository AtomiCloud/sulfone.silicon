<!-- source: content/docs/developer/templates/how-to/ask-checkbox.mdx -->
# 📄 File: content/docs/developer/templates/how-to/ask-checkbox.mdx

> This how-to guide documents checkbox questions but contains significant inaccuracies. The documentation claims that `CheckboxQ` supports `default` and `validate` properties, but the actual SDK implementation does not support these features.

### 🔴 Source Code Inaccuracies

1. **Documented**: `CheckboxQ` has `default: ['ESLint']` property | **Actual**: `CheckboxQ` does NOT have a `default` property | Evidence: `helium/sdks/node/src/domain/core/question.ts:11-19` - `CheckboxQ` interface only has `type`, `id`, `message`, `desc`, `validate`, and `options`. No `default` field exists. Python SDK (`helium/sdks/python/cyanprintsdk/domain/core/question.py:7-14`) also confirms no `default` property.

2. **Documented**: `CheckboxQ` has `validate: (selected) => { ... }` function property | **Actual**: `CheckboxQ` has `validate?: null` (explicitly null, not a function) | Evidence: `helium/sdks/node/src/domain/core/question.ts:16` - `validate?: null`. Python SDK (`helium/sdks/python/cyanprintsdk/domain/core/question.py:12`) shows `validate: None = None`. The comment on line 13 indicates validation was considered but not implemented.

3. **Documented**: "With Defaults" code example shows `default: ['ESLint', 'Prettier']` | **Actual**: This property does not exist on CheckboxQ | Evidence: Same as above - no `default` property in any SDK implementation.

4. **Documented**: "With Validation" code example shows custom `validate` function for checkbox | **Actual**: Checkbox validation is not supported | Evidence: Same as above - `validate` is typed as `null`, not a function.

### 🟡 Documentation Issues

1. **Problem**: Documentation contradicts the official IInquirer Reference page | **Location**: Entire file | **Fix**: The IInquirer reference (`content/docs/developer/templates/reference/sdk/inquirer.mdx:270-272`) correctly states: "Select, Checkbox, and Confirm do not support custom validation functions. Select and Checkbox also do not support default values." This how-to guide should be updated to match.

2. **Problem**: Misleading code examples | **Location**: Lines 24-37 (Object Form with options), Lines 92-106 (With Validation), Lines 111-119 (With Defaults) | **Fix**: Remove examples showing `default` and `validate` for checkbox. Replace with accurate examples.

3. **Problem**: Missing limitation documentation | **Location**: Entire file | **Fix**: Add a clear callout/warning explaining that checkbox questions do not support `default` values or custom `validate` functions.

### 🟠 Other Problems

1. **Problem**: The type definition reference link points to correct documentation, but this creates inconsistency | **Recommendation**: Either update this how-to to match the reference documentation, or if checkbox default/validation support is planned, clearly mark these as "coming soon" features.

2. **Problem**: Shorthand form parameter name inconsistency | **Recommendation**: The shorthand form uses `help` in the IInquirer interface (`helium/sdks/node/src/domain/core/inquirer.ts:6`) but the documentation and object form use `desc`. This is consistent across the docs but developers should be aware of this mapping.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 3 |
| 🟠 | 2 |
