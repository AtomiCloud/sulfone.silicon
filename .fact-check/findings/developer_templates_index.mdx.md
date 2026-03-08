<!-- source: content/docs/developer/templates/index.mdx -->
# 📄 File: content/docs/developer/templates/index.mdx

> Documentation describes template development as an overview/index page. The page provides accurate information about template architecture, SDK imports, and code examples. The SDK package name `@atomicloud/cyan-sdk` and the `StartTemplateWithLambda` function are correctly documented. No CLI commands are present in this file, so no `cyanprint` vs `cyan` issues.

### 🔴 Source Code Inaccuracies

1. **Documentation: `i.text('Project name?', 'project.name', 'Enter project name')`** | **Actual: `text(q: string, id: string, help?: string | null)`** | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:22`
   - The documentation example at line 107 shows 3 arguments: `('Project name?', 'project.name', 'Enter project name')` suggesting the second parameter is an ID like `project.name`.
   - However, examining the SDK interface and the actual template_test.ts usage, the `id` parameter should be a simple string identifier (e.g., `'q1'`, `'name'`), not a dotted path like `'project.name'`.
   - While technically valid as a string, the convention shown differs from actual SDK usage patterns in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:4` where IDs are simple strings like `'q1'`, `'q2'`, etc.

### 🟡 Documentation Issues

1. **Problem: Inconsistent ID naming convention in example code** | **Location: Line 107** | **Fix**: Consider using a simpler ID format like `'projectName'` or `'name'` instead of `'project.name'` to match SDK test conventions, or document the dotted-path ID convention if intentional.

2. **Problem: Example uses shorthand form but doesn't show object form alternative** | **Location: Lines 102-117** | **Fix**: Consider adding a note that `i.text()` also accepts an object form with additional options like `validate`, `default`, `initial` as shown in SDK test file.

### 🟠 Other Problems

1. **Problem: The variable substitution example shows `var__name__` in template file but doesn't explain that this requires the `cyan/default` processor** | **Recommendation**: Add a brief note linking the variable syntax to the default processor, similar to line 127 which mentions it.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 2 |
| 🟠 | 1 |
