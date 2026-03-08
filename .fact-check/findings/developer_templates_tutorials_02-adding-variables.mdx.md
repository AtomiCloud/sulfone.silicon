<!-- source: content/docs/developer/templates/tutorials/02-adding-variables.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/02-adding-variables.mdx

> Tutorial documentation for adding variable substitution to templates using GlobType.Template and the default processor. Most code examples are accurate, but there are no imports shown in code examples, and the nested variable access syntax may not work as documented.

### 🔴 Source Code Inaccuracies
1. **Missing import statements in code examples** | Document shows code without imports | Actual requires `import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';` | Evidence: `helium/sdks/node/src/main.ts:169-180` exports these from SDK; all e2e templates include imports (`iridium/e2e/template1/cyan/index.ts:1-2`)

2. **Nested variable syntax `var__user.name__` may not work as expected** | Documented: `var__user.name__` for nested variable access | Actual: Eta config uses `useWith: true` (see `iridium/e2e/processor1/index.ts:23`) which means nested variables would be accessed via `var__user.name__` only if the vars object has that nested structure. The dot notation works because Eta's `useWith: true` allows direct property access within the template context | Evidence: `iridium/e2e/processor1/index.ts:22-32` shows Eta config

### 🟡 Documentation Issues
1. **No import statements shown** | Location: Lines 17-19, 29-36, 58-77 | The code examples show SDK usage without import statements. Users following the tutorial may be confused. | Fix: Add `import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';` at the start of code blocks or reference Tutorial 1 for setup

2. **`cyan/default` processor assumed but not explained** | Location: Line 64 | The document references `cyan/default` processor but doesn't explain that this is CyanPrint's built-in default processor. The e2e tests use custom processors (`cyane2e/processor1`, `cyane2e/processor2`) | Fix: Add a brief note that `cyan/default` is the built-in default processor included with CyanPrint

3. **Variable syntax table incomplete** | Location: Lines 84-88 | The table shows only `var__name__` and `var__user.name__` but doesn't mention that Eta templating supports more features like conditionals and loops (with different delimiters) | Fix: Either add more rows or link to the Default Processor explanation page for complete syntax

### 🟠 Other Problems
1. **Tutorial 3 link uses correct path** | Location: Line 22 | Link `/docs/developer/templates/tutorials/03-changing-glob` is correct per instructions

2. **CLI command correctly uses `cyanprint`** | Location: Line 100 | `cyanprint create my-first-template:dev ../test-output` - correctly uses `cyanprint` binary name

3. **Docker build command has no version tag issue** | Location: Line 97 | `docker build -f cyan/Dockerfile -t my-first-template:dev .` - This is a dev tag which is appropriate for tutorial purposes

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 3 |
| 🟠 | 3 |
