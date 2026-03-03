<!-- source: content/docs/developer/templates/how-to/conditional-files.mdx -->
# File: content/docs/developer/templates/how-to/conditional-files.mdx

> Documentation for conditionally including files in templates. The code examples use valid SDK patterns but some structural details differ from actual implementation.

### Source Code Inaccuracies
1. **CyanGlob interface structure - root is optional** | Documented shows `{ root: 'templates/base', glob: '**/*', exclude: [], type: GlobType.Template }` with `root` always present | Actual interface at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11` shows `root?: string | null` (optional). The documented examples are correct and showing `root` explicitly is better practice.

2. **Cyan return type missing plugins field** | Documented at lines 30-36 shows `return { processors: [...] }` without `plugins` | Actual `Cyan` interface at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27` requires both `processors: CyanProcessor[]` AND `plugins: CyanPlugin[]`. The Basic Pattern example omits `plugins` which is required.

3. **Import statement omits type imports used in examples** | Documented at line 42 shows `import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';` | Actual templates at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:1-2` import types separately:
   ```ts
   import { GlobType, StartTemplateWithLambda } from '@atomicloud/cyan-sdk';
   import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';
   ```
   If users want explicit parameter typing `(i: IInquirer, d: IDeterminism)`, they need these type imports.

### Documentation Issues
1. **Missing plugins in return object** | Lines 30-36 (Basic Pattern) and lines 103-117 (Complete Example) | Both return `{ processors: [...] }` without `plugins`. The actual SDK requires `plugins` array. Fix: Add `plugins: []` to all return statements, matching actual SDK interface.

2. **Parameter type annotations not shown** | Lines 44, 105 | Documentation shows `async (i, d) =>` without type annotations. Real templates use `async (i: IInquirer, d: IDeterminism) =>`. Fix: Either add type annotations or add a note explaining that `i` is `IInquirer` and `d` is `IDeterminism`.

3. **Directory structure prefix not explained** | Lines 125-149 | Shows `cyan/templates/` structure but doesn't explain that `root` paths are relative to the `cyan/` directory in the template package. Fix: Add explanation of path resolution.

4. **Exclude Patterns section uses different approach** | Lines 179-196 | Shows single `files.push` with conditional excludes, which differs from the earlier pattern of multiple conditional pushes. Fix: Add a note explaining this is an alternative approach for different use cases.

5. **Template vs Copy type not explained** | Lines 90, 170 use `GlobType.Copy` | No explanation of when to use `GlobType.Template` vs `GlobType.Copy`. The enum at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` defines `Template = 0` and `Copy = 1`. Fix: Add explanation that `Template` processes files through the template engine (variable substitution) while `Copy` copies files as-is.

### Other Problems
1. **No real-world conditional example in source code** | The documentation shows extensive conditional file inclusion patterns, but actual e2e templates in iridium (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template*/cyan/index.ts`) do not use conditional file inclusion. All return a single static `files` array. Recommendation: Add a real conditional example to iridium e2e tests to validate the documented patterns.

2. **Array spread vs push pattern choice not explained** | "Using Array Spread" section (lines 155-172) vs "Complete Example" (lines 63-117) show different patterns with no guidance. Recommendation: Add brief guidance on when to use each approach (spread for functional style, push for imperative).

3. **Related links should be verified** | Lines 199-202 reference `/developer/templates/tutorials/03-changing-glob`, `/developer/templates/tutorials/full-example`, and `/developer/templates/reference/sdk/globbing`. These paths should be verified to exist and contain accurate information.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 3 |
| Documentation Issues | 5 |
| Other Problems | 3 |
