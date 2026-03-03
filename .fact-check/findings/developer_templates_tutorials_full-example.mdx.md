<!-- source: content/docs/developer/templates/tutorials/full-example.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/full-example.mdx

> A tutorial demonstrating all major features of CyanPrint templates in a realistic project scaffold. This review was performed against the SDK reference documentation in this repository since the actual source code repositories (argon, boron, helium, iridium, zinc) are external.

### 🔴 Source Code Inaccuracies
(for each: Documented | Actual | file:line evidence)

1. **`d.uuid()` method not documented in SDK reference**
   - Documented: `const projectId = d.uuid();` (line 106)
   - Actual: The `IDefine` interface in types.mdx shows only `uuid()`, `timestamp()`, and `seq()` methods, but the helium.mdx shows a different SDK (`@cyanprint/sdk`) with different API patterns. The correct SDK is `@atomicloud/cyan-sdk`.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/types.mdx:154-160`

2. **helium.mdx references wrong SDK package name**
   - Documented: helium.mdx shows `@cyanprint/sdk` (line 38, 39) and `import { defineTemplate, input, output } from '@cyanprint/sdk';` (line 47)
   - Actual: The correct SDK package is `@atomicloud/cyan-sdk` as shown in full-example.mdx and all SDK reference docs
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/index.mdx:8`

3. **helium.mdx shows incompatible API patterns**
   - Documented: helium.mdx shows `input.string()`, `input.boolean()`, `input.number()`, `input.select()`, `input.array()`, `input.object()` pattern (lines 79-101)
   - Actual: The actual SDK uses `i.text()`, `i.confirm()`, `i.select()`, `i.checkbox()` methods on IInquirer interface
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/inquirer.mdx:25-54`

4. **helium.mdx shows different template structure**
   - Documented: `defineTemplate({ name, version, inputs, async generate({ inputs, fs }) {...} })` pattern (lines 48-75)
   - Actual: The actual SDK uses `StartTemplateWithLambda(async (i, d) => {...})` pattern
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/index.mdx:47-61`

5. **helium.mdx shows fs.write() instead of template-based generation**
   - Documented: `await fs.write('README.md', '...')` for file generation (lines 64-68)
   - Actual: Templates use file groups with GlobType and variable substitution, not programmatic file writing
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/cyan-config.mdx:79-86`

6. **helium.mdx shows fs.copyTemplateAsset() which doesn't exist in reference**
   - Documented: `await fs.copyTemplateAsset('assets/logo.png', 'logo.png');` (line 185)
   - Actual: This method is not documented in the SDK reference; templates use GlobType.Copy for binary files
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/globbing.mdx:135-139`

### 🟡 Documentation Issues
(for each: Problem | Location | Fix)

1. **SDK reference shows `d.uuid()` is correct**
   - Problem: Previous findings claimed `d.uuid()` was incorrect, but the types.mdx reference actually documents `uuid(): string;` as a valid method on IDefine
   - Location: Line 106 of full-example.mdx
   - Fix: The `d.uuid()` usage is correct according to the SDK reference. No fix needed.

2. **Object form vs shorthand form confusion**
   - Problem: The full-example uses object form with `type: QuestionType.Text` for text() but shorthand form for other methods. This inconsistency could confuse readers.
   - Location: Lines 50-61 vs 63-102
   - Fix: Either use object form consistently or add a comment explaining when to use each form

3. **Plugin name `cyan/init-git` not documented in reference**
   - Problem: The plugin `cyan/init-git` is used but there's no reference documentation for available plugins
   - Location: Lines 212-219
   - Fix: Either add a plugins reference page or clarify that this is a placeholder/conceptual example

4. **Missing link to default processor explanation**
   - Problem: References `cyan/default` processor but links to non-existent explanation page
   - Location: Line 184 and cyan-config.mdx line 221
   - Fix: Create the referenced explanation page or update the link

5. **helium.mdx contradicts full-example.mdx API usage**
   - Problem: helium.mdx (source path for this review) shows a completely different API pattern than the main template tutorials
   - Location: helium.mdx lines 46-75
   - Fix: Update helium.mdx to use the actual `@atomicloud/cyan-sdk` API patterns

### 🟠 Other Problems
(for each: Problem | Recommendation)

1. **Source paths point to documentation not source code**
   - Problem: The source paths (argon, boron, helium, iridium, zinc) are documentation files (.mdx), not actual SDK source code. This makes verification against "source" impossible.
   - Recommendation: Source verification should be done against actual SDK source repositories, not documentation files

2. **helium.mdx appears to be outdated or for a different product**
   - Problem: The helium.mdx documentation shows `@cyanprint/sdk` with a fundamentally different API (`defineTemplate`, `input.string()`, `fs.write()`) that doesn't match `@atomicloud/cyan-sdk` used in templates
   - Recommendation: Review and update helium.mdx to reflect the actual SDK API, or clearly indicate if it documents a different/legacy SDK

3. **No actual source code in this repository**
   - Problem: This is a documentation-only repository; the actual CyanPrint SDK source code is in external repositories
   - Recommendation: For thorough fact-checking, access to the actual helium SDK repository would be needed

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 6 |
| 🟡 | 5 |
| 🟠 | 3 |
