# File: content/docs/developer/plugins/how-to/conditional-execution.mdx

> Documentation explaining how to implement conditional execution in plugins based on configuration passed from templates. Covers using the `config` property, feature flags, project type conditionals, and providing defaults.

### Source Code Inaccuracies

1. **SDK package name mismatch**
   - Documented: `@atomicloud/cyan-sdk`
   - Actual: `@atomicloud/cyan-sdk`
   - Evidence: The SDK package name is confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2` which shows `"name": "@atomicloud/cyan-sdk"`. The e2e plugins in iridium also use this import (e.g., `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1`).

2. **Missing import for `fs` and `path` modules in Advanced Patterns section**
   - Documented: Code uses `fs.writeFile` and `path.join` without imports
   - Actual: These require explicit imports from Node.js
   - Evidence: In `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:2-3`, explicit imports are shown: `import fs from 'node:fs';` and `import path from 'node:path';`. The documentation code snippets in the "Advanced Patterns" section (lines 102-145) use `fs.writeFile`, `fs.mkdir`, and `path.join` without showing these imports.

3. **Missing PluginOutput type annotation**
   - Documented: Lambda function returns `{ directory }` without explicit type
   - Actual: Real implementations use explicit `Promise<PluginOutput>` return type
   - Evidence: In `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5`, the function signature is `async (input): Promise<PluginOutput>`. The documentation examples don't show this explicit typing.

4. **Template configuration in cyan.yaml format differs from documented**
   - Documented: Plugin config with nested properties shown in YAML format (lines 67-76)
   - Actual: Real cyan.yaml files use simple array format for plugins without config blocks
   - Evidence: In `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:10`, plugins are listed as `plugins: ['ernest/plugin1']` - a simple array of strings. The config is passed programmatically in index.ts (line 61-65), not in the YAML file.

5. **answers variable usage differs from template patterns**
   - Documented: `answers.installDeps` and `answers.packageManager` (line 89-90)
   - Actual: Templates use direct variable assignment from inquirer prompts
   - Evidence: In `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:4-32`, answers from inquirer are stored in individual variables (e.g., `const color = await i.select(...)`) and then used directly in the config object, not accessed via `answers.X` pattern.

### Documentation Issues

1. **Inconsistent import statement**
   - Problem: Line 17 shows `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';` but real implementations also import `PluginOutput` type
   - Location: Lines 16-18, 102-104, 150-152, 179-181
   - Fix: Add `PluginOutput` to imports: `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';`

2. **Missing Node.js module imports**
   - Problem: Advanced patterns code uses `fs` and `path` without imports
   - Location: Lines 102-145 (Feature Flags section)
   - Fix: Add `import fs from 'node:fs';` and `import path from 'node:path';` to code examples

3. **Confusing cyan.yaml vs index.ts configuration explanation**
   - Problem: Documentation suggests plugin config can be defined in cyan.yaml, but real examples show config is only defined programmatically in index.ts
   - Location: Lines 61-96 (Template Configuration section)
   - Fix: Clarify that cyan.yaml only lists plugin names, while config is passed in the template's programmatic output (index.ts)

4. **Misleading answers object usage**
   - Problem: Shows `answers.installDeps` and `answers.packageManager` pattern which doesn't match real template implementations
   - Location: Lines 89-90
   - Fix: Show direct variable usage like `installDeps` and `packageManager` from inquirer prompts, matching actual template patterns

5. **Missing Bun import**
   - Problem: Uses `$` from bun without import
   - Location: Lines 18, 34-55
   - Fix: Either add `import { $ } from 'bun';` or clarify this is Bun-specific syntax

### Other Problems

1. **No explicit return type shown**
   - Problem: Lambda functions don't show explicit `Promise<PluginOutput>` return type which is best practice
   - Recommendation: Add explicit return types to all lambda examples for type safety

2. **Bun-specific shell commands without context**
   - Problem: Uses Bun's `$` template literal syntax throughout without explaining it's Bun-specific
   - Recommendation: Add a note that the `$` syntax is from Bun's shell API, and alternatives for non-Bun environments

3. **fs.promises vs fs sync methods inconsistency**
   - Problem: Documentation uses `await fs.writeFile()` which implies promises API, but real examples use `fs.writeFileSync()`
   - Recommendation: Be consistent - either use `fs.promises.writeFile` with await, or use `fs.writeFileSync` without await

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 5 |
| Documentation Issues | 5 |
| Other Problems | 3 |
