<!-- source: content/docs/developer/templates/tutorials/03-changing-glob.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/03-changing-glob.mdx

> Documentation tutorial about controlling which files are processed (Template) vs copied (Copy) using GlobType. Covers multiple file groups, exclude patterns, and project structure best practices.

### 🔴 Source Code Inaccuracies
(None found)

### 🟡 Documentation Issues

1. **Problem**: The example uses the shorthand `inquirer` parameter name without type annotation, which differs from the actual e2e test examples that use typed imports.
   - **Location**: Line 47 - `StartTemplateWithLambda(async (inquirer, determinism) => {`
   - **Fix**: Consider showing explicit typing like the e2e tests: `async (i: IInquirer, d: IDeterminism) =>` or explain that the type is inferred. The e2e examples in iridium use `async (i: IInquirer, d: IDeterminism)` format which requires importing types separately: `import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';`

2. **Problem**: The example imports types from a single import statement but the actual e2e tests use two separate imports.
   - **Location**: Line 45 - `import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';`
   - **Fix**: The e2e tests show: `import { GlobType, StartTemplateWithLambda } from '@atomicloud/cyan-sdk';` followed by `import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';`. Either the documentation should show both imports or clarify that all types can be imported from a single statement (which is supported since all are exported from main.ts).

### 🟠 Other Problems

1. **Problem**: The `cyan/default` processor name is used throughout but there's no actual source code for this processor in the provided source paths (boron, iridium, zinc, helium, argon). The iridium e2e tests use `cyane2e/processor1` and `cyane2e/processor2`.
   - **Recommendation**: The `cyan/default` processor appears to be a built-in/default processor name convention used throughout the documentation ecosystem. This is consistent across all docs. Consider adding a note in a central location explaining that `cyan/default` refers to the built-in Eta-based templating processor, or link to the default-processor explanation page.

2. **Problem**: Documentation claims "Order matters - More specific patterns should come first" but doesn't explain what happens when overlapping patterns exist or provide an example of this.
   - **Location**: Line 118 - "Order matters"
   - **Recommendation**: Either remove this claim if it's not significant, or provide a concrete example showing what happens with overlapping patterns (e.g., `**/*.ts` vs `**/*.spec.ts`).

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 2 |
| 🟠 | 2 |
