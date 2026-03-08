<!-- source: content/docs/developer/templates/how-to/compose-templates.mdx -->
# File: content/docs/developer/templates/how-to/compose-templates.mdx

> Documentation for template composition feature. The document accurately describes the `templates` key in cyan.yaml, key namespacing patterns, and SDK usage. All SDK imports, function signatures, and CLI references are correct.

### Source Code Inaccuracies
(for each: Documented | Actual | file:line evidence)

None found. All documented APIs and patterns match the SDK and configuration format:

- `templates` key in cyan.yaml is valid (cyan-yaml.mdx lines 134-148, task-spec.md line 104)
- `StartTemplateWithLambda` is correctly exported from `@atomicloud/cyan-sdk` (SDK index.mdx line 22, task-spec.md line 159)
- `GlobType` enum is correctly documented (types.mdx lines 12-21, values: Template = 0, Copy = 1)
- `i.text(q, id, help)` shorthand form is correct (inquirer.mdx lines 39-48)
- `cyan/default` processor name is correct (used throughout SDK docs)
- The return type with `processors` and `plugins` arrays matches the `Cyan` interface (types.mdx lines 68-76)

### Documentation Issues
(for each: Problem | Location | Fix)

1. **Missing `plugins` property in return object** | Lines 112-125 (Composition in Code example) | The code example returns only `{ processors: [...] }` but the `Cyan` interface requires both `processors` and `plugins`. The `plugins` property is missing. Add `plugins: []` to the return object for completeness.

2. **File conflict handling described but not implemented in example** | Lines 89-95 (File Conflicts section) | The section describes three strategies (Override, Merge, Fail) but provides no code example showing how to handle these. Consider adding a brief code example or noting that override is the default behavior.

### Other Problems
(for each: Problem | Recommendation)

1. **Code example line 106-109 uses shorthand form with unconventional argument names** | The `i.text()` call uses `'Project name from base?', 'base-template.project.name', '...'` where `'...'` is a placeholder. While valid, this could be clearer. Consider using a proper description like `'Name from base template'` instead of `'...'`.

2. **Microservice example version numbers are inconsistent** | Lines 139-146 | The example shows version numbers like `company/node-base:2`, `company/docker:3`, etc. without context. Consider noting that versions are auto-incrementing registry integers, not semantic versions (as documented in cyan-yaml.mdx lines 150-158).

3. **Missing link verification note** | All related links were verified:
   - `/docs/developer/templates/how-to/use-keys` - EXISTS (use-keys.mdx)
   - `/docs/developer/templates/explanation/3-way-merge` - EXISTS (3-way-merge.mdx)
   - `/docs/developer/templates/explanation/docker-vs-cyan-registry` - EXISTS (per explanation/index.mdx line 27)

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 0 |
| Documentation Issues | 2 |
| Other Problems | 3 |
