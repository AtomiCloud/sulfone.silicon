<!-- source: content/docs/developer/plugins/explanation/what-are-plugins.mdx -->
# File: content/docs/developer/plugins/explanation/what-are-plugins.mdx

> Documentation explains plugin architecture, input/output types, and usage patterns. Several inaccuracies found in code examples and technical claims.

### Source Code Inaccuracies
1. **Import from 'bun' is not used in actual codebase**
   - Documented: `import { $ } from 'bun';`
   - Actual: Real plugins (iridium/e2e/plugin1, plugin2) use `import fs from 'node:fs'` and `import path from 'node:path'` for file operations. No shell template literal API exists in the SDK.
   - Evidence: /Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1-4 shows `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk'; import fs from 'node:fs'; import path from 'node:path';`

2. **Shell command examples use non-standard API**
   - Documented: `await $`git -C ${directory} init`.quiet();` and `await $`cd ${directory} && npm install`.quiet();`
   - Actual: The SDK does not provide a shell API. Bun's `$` template literal is a Bun-specific feature, but actual plugins use Node.js fs/path modules directly.
   - Evidence: Grep search across helium and iridium directories found no usage of `from 'bun'` in actual source code.

3. **Claim about "only component with shell access" is misleading**
   - Documented: "Plugins are the only component with shell access. Processors are isolated and cannot execute commands."
   - Actual: Neither plugins nor processors have explicit shell access in the SDK. Both receive directory paths and can technically execute shell commands using Node.js APIs (child_process). The isolation is conceptual/design-based, not technically enforced by the SDK.
   - Evidence: /Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts:1-6 shows PluginInput only has `directory` and `config` - no shell API provided.

### Documentation Issues
1. **Examples use Bun-specific shell API that isn't part of @atomicloud/cyan-sdk**
   - Problem: All three code examples (Setup Plugin, Formatter Plugin, Build Plugin) use `import { $ } from 'bun'` which is not part of the SDK
   - Location: Lines 108-121, 127-142, 148-163
   - Fix: Replace with Node.js `child_process` examples or `node:fs` operations, or clearly document that Bun runtime is required for shell operations

2. **"config" property usage is ambiguous in examples**
   - Problem: Examples cast `config` to custom types without explaining the type structure
   - Location: Lines 134, 155 - `const cfg = config as { formatter?: string };`
   - Fix: Add explanation of how config is passed from the template's cyan.yaml

### Other Problems
1. **Missing explanation of how shell operations work in containerized environment**
   - Problem: Documentation doesn't explain whether shell commands (like `git init`, `npm install`) actually work when plugins run in containers
   - Recommendation: Clarify the runtime environment and whether tools like git/npm are available

2. **Design philosophy section could be more specific**
   - Problem: "Simple - Minimal API, just receive directory and return it" doesn't explain what operations are actually available
   - Recommendation: Link to relevant SDK reference documentation for available APIs

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 3 |
| Documentation Issues | 2 |
| Other Problems | 2 |
