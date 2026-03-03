# 📄 File: content/docs/developer/plugins/how-to/run-commands.mdx

> Documentation for executing shell commands in CyanPrint plugins using Bun Shell, Node.js child_process, and execa.

### 🔴 Source Code Inaccuracies

1. **Missing return type in lambda function examples**
   - **Documented**: `StartPluginWithLambda(async (input) => { ... })` without explicit return type
   - **Actual**: Real plugin implementations explicitly type the return as `Promise<PluginOutput>`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5` shows `StartPluginWithLambda(async (input): Promise<PluginOutput> => { ... })`

2. **Bun Shell usage not demonstrated in actual codebase**
   - **Documented**: Examples show importing `$` from 'bun' and using Bun Shell extensively
   - **Actual**: No usage of Bun Shell (`import { $ } from 'bun'`) found in any of the source paths
   - **Evidence**: Grep search across all source paths (argon, boron, helium, iridium, zinc) returned no matches for `from 'bun'`

3. **child_process usage not demonstrated in actual codebase**
   - **Documented**: Examples show importing from 'child_process' for exec and spawn
   - **Actual**: No usage of child_process found in any of the source paths
   - **Evidence**: Grep search across all source paths returned no matches for `child_process`

4. **execa usage not demonstrated in actual codebase**
   - **Documented**: Examples show using execa as an alternative
   - **Actual**: No usage of execa found in any of the source paths
   - **Evidence**: Grep search across all source paths returned no matches for `execa`

### 🟡 Documentation Issues

1. **Missing PluginOutput import in examples**
   - **Problem**: Code examples import only `StartPluginWithLambda` but don't import `PluginOutput` type, yet real implementations do
   - **Location**: All code examples throughout the document
   - **Fix**: Add `import { StartPluginWithLambda, PluginOutput } from '@atomicloud/cyan-sdk';` and use explicit return typing `Promise<PluginOutput>`

2. **Bun Shell features table may not reflect actual API**
   - **Problem**: The Bun Shell features table (lines 39-45) documents API behaviors that cannot be verified against the codebase since no actual usage exists
   - **Location**: Lines 39-45 (Bun Shell Features table)
   - **Fix**: Either verify these features against Bun's official documentation or add a note that these are Bun-specific features external to the Cyan SDK

3. **Related links may be broken or incomplete**
   - **Problem**: Related links at the end point to paths like `/developer/plugins/how-to/modify-files` which need verification
   - **Location**: Lines 222-225
   - **Fix**: Verify all related links exist in the documentation structure

### 🟠 Other Problems

1. **Code examples lack error handling best practices**
   - **Problem**: Most examples show basic try/catch but don't demonstrate proper error propagation or logging patterns used in production
   - **Recommendation**: Add more robust error handling examples that align with how errors should be handled in the CyanPrint ecosystem

2. **No mention of plugin timeout configuration**
   - **Problem**: The warning at line 218 mentions "The plugin timeout is configurable" but provides no details on how to configure it
   - **Recommendation**: Either add configuration details or link to relevant documentation

3. **Git operations examples use generic bot credentials**
   - **Problem**: Lines 183-184 use hardcoded `bot@example.com` and `CyanPrint Bot` - while clearly example values, no guidance on best practices
   - **Recommendation**: Add guidance on using environment variables or configuration for git credentials

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 3 |
| 🟠 | 3 |
