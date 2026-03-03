# File: content/docs/developer/plugins/explanation/plugins-vs-processors.mdx

> Documentation comparing plugins and processors in the CyanPrint generation pipeline, explaining their roles, timing, and use cases.

### Source Code Inaccuracies

1. **Processor Example - `writeDirectory` property name is incorrect**
   - **Documented**: `return { directory: input.writeDirectory };`
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:12` defines `writeDir: string;` (not `writeDirectory`), and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` shows actual usage: `return { directory: input.writeDir };`

2. **Plugin Example - Hypothetical code not verified in codebase**
   - **Documented**: Plugin example uses `import { $ } from 'bun';` and `await $`git -C ${directory} init`.quiet();`
   - **Actual**: No usage of `import { $ } from 'bun'` or shell execution via Bun's `$` template literal found in any plugin implementations in the codebase
   - **Evidence**: Grep searches across `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium` found no matches for `from 'bun'` or `await $`. Actual plugins use Node.js `fs` module directly (e.g., `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1-22`)

3. **Processor Example - `file.content` usage is correct but `file.relative` should also be shown for complete transformation**
   - **Documented**: Shows only `file.content` transformation
   - **Actual**: Real processors also transform `file.relative` (file path) for variable substitution
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:49-51` shows both `x.content` and `x.relative` are transformed in actual processor implementations

### Documentation Issues

1. **Plugin Example Uses Unverified Shell Execution Pattern**
   - **Problem**: The plugin example shows using Bun's `$` template literal for shell commands, but this pattern is not found anywhere in the actual codebase. The example should either be marked as hypothetical or use patterns that actually exist in the codebase.
   - **Location**: Lines 71-84
   - **Fix**: Either mark the example as conceptual/hypothetical, or replace with realistic example based on actual plugin implementations that use Node.js `fs` module

2. **Inconsistent Property Naming in Example Code**
   - **Problem**: The processor example uses `input.writeDirectory` which is incorrect and would cause a TypeScript/runtime error
   - **Location**: Line 47
   - **Fix**: Change `input.writeDirectory` to `input.writeDir`

3. **Missing Import Statement in "Using Both Together" Example**
   - **Problem**: The combined example references `GlobType` without importing it
   - **Location**: Lines 139-155
   - **Fix**: Add `GlobType` to the import statement (though it's not shown, the code uses `GlobType.Template`)

4. **Incomplete Processor Example - Missing `Eta` Import and Configuration**
   - **Problem**: Real-world processors use the Eta templating engine, but the simplified example doesn't reflect the actual implementation pattern used in the codebase
   - **Location**: Lines 35-49
   - **Recommendation**: Consider noting that the example is simplified, or show a more complete example based on actual implementations

### Other Problems

1. **Table API Reference Could Be More Precise**
   - **Problem**: The comparison table states "API: `CyanFileHelper`" for processors, but doesn't clarify that this is passed as a parameter, not an import
   - **Location**: Line 20
   - **Recommendation**: Clarify that `CyanFileHelper` is passed as the second parameter to the processor function

2. **Plugin Capabilities Section Incomplete**
   - **Problem**: Documentation states plugins "Can execute any shell command" but actual implementations in the codebase use direct filesystem operations via Node.js `fs` module, not shell commands
   - **Location**: Lines 86-91
   - **Recommendation**: Either show a working example that uses shell commands, or clarify that plugins typically use filesystem APIs directly

3. **No Version Information for SDK**
   - **Problem**: Documentation imports from `@atomicloud/cyan-sdk` but doesn't specify version requirements
   - **Location**: Lines 36, 72
   - **Recommendation**: Consider adding SDK version information (helium docs show version 2.0.1)

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 3 |
| Documentation Issues | 4 |
| Other Problems | 3 |
