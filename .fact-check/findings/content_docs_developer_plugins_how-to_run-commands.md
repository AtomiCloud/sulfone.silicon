<!-- source: content/docs/developer/plugins/how-to/run-commands.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/run-commands.mdx

> Documentation describes how to execute shell commands in CyanPrint plugins using Bun Shell and Node.js child_process APIs. The SDK import and API patterns are accurate, but no actual plugin implementations in the source codebase use Bun Shell or child_process for command execution.

### 🔴 Source Code Inaccuracies

1. **Missing import for PluginOutput type** | Documented shows `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';` | In actual e2e plugins (iridium/e2e/plugin1/index.ts:1), they also import `PluginOutput` type: `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';` | file: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1`
2. **No real-world plugin examples using Bun Shell** | Documentation shows extensive use of Bun Shell (`await $`git -C ${directory} init``) | No plugin in any source path (argon, boron, helium, iridium, zinc) uses Bun Shell (`$` template literal) or shell command execution | Verified via Grep searches across all source paths

### 🟡 Documentation Issues

1. **No Bun Shell import shown in examples** | First code example at line 17-35 imports `$` from 'bun' but doesn't show the import statement in a visible way alongside the SDK import | Add explicit line: `import { $ } from 'bun';` should be clearly shown with SDK import
2. **PluginInput type naming inconsistency** | Documentation uses `CyanPluginInput` in SDK source but refers to it as `input` with destructuring | The SDK exports `CyanPluginInput` not `PluginInput` - see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18`
3. **Promise return type not shown** | Code examples show implicit return types | Real e2e plugins explicitly type the return: `async (input): Promise<PluginOutput>` | file: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5`
4. **Related link paths may be incorrect** | Links to `/developer/plugins/how-to/modify-files` and `/developer/plugins/how-to/conditional-execution` | These paths need verification against actual documentation structure

### 🟠 Other Problems

1. **Bun Shell is Bun-specific** | Documentation heavily features Bun Shell (`$` from 'bun') | Consider adding a note that this is Bun-specific and requires the Bun runtime, or provide alternatives for non-Bun environments
2. **No error handling best practices** | Error handling example only shows try-catch without demonstrating proper error propagation or logging patterns that match the SDK's error handling approach
3. **execa is shown but not in SDK dependencies** | Documentation shows `execa` package usage | The SDK's package.json does not include execa as a dependency - users would need to install it separately, which should be noted
4. **Missing verification of npm --if-present flag** | Documentation uses `npm run lint --if-present` and `npm test --if-present` | These flags may not work as expected with all npm versions or in all contexts

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 4     |
| 🟠       | 4     |
