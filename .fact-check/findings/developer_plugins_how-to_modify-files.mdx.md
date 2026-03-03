# File: content/docs/developer/plugins/how-to/modify-files.mdx

> Documentation for modifying files in the generated directory using Cyan SDK plugins. Covers basic file operations (read, write, modify), common patterns (JSON updates, file creation, deletion), and using glob patterns.

### Source Code Inaccuracies

1. **SDK Package Name vs. Actual**
   - **Documented**: `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';`
   - **Actual**: Package name is correct. Verified at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2` - `"name": "@atomicloud/cyan-sdk"`
   - **Status**: Accurate

2. **CyanPluginInput Structure**
   - **Documented**: `const { directory } = input;` and `const { directory, config } = input;`
   - **Actual**: `CyanPluginInput` interface has `directory: string` and `config: unknown` fields
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21`
   - **Status**: Accurate

3. **PluginOutput Structure**
   - **Documented**: `return { directory };`
   - **Actual**: `PluginOutput` interface requires `directory: string`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/output.ts:1-3`
   - **Status**: Accurate

4. **StartPluginWithLambda Function Signature**
   - **Documented**: `StartPluginWithLambda(async (input) => { ... })`
   - **Actual**: Function signature is `StartPluginWithLambda(f: LambdaPluginFn): void` where `LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:82-85` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5`
   - **Status**: Accurate

5. **Glob Import**
   - **Documented**: `import { glob } from 'glob';`
   - **Actual**: The `glob` package is a dependency of `@atomicloud/cyan-sdk` (see package.json line 39: `"glob": "^11.0.0"`), but is NOT re-exported from the SDK. Users must install `glob` separately or use the SDK's internal `CyanFileHelper` class.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:169-181` shows exports, `glob` is not exported. The SDK uses it internally at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:6`
   - **Status**: Potentially misleading - the import works if users have `glob` installed separately, but it's not part of the SDK exports

### Documentation Issues

1. **Missing Return Type Annotation in Examples**
   - **Problem**: Code examples don't show explicit return type `Promise<PluginOutput>` which is required by the LambdaPluginFn type
   - **Location**: All code examples (lines 16-32, 36-45, 49-66, 72-94, 98-124, 128-170, 174-196, 202-228)
   - **Fix**: Consider adding explicit return types for TypeScript clarity, or note that TypeScript will infer them. The real plugin examples at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5` use `: Promise<PluginOutput>`

2. **Missing Import for PluginOutput Type**
   - **Problem**: The "Using Glob Patterns" example (lines 202-228) doesn't show importing `PluginOutput` type, but the function implicitly returns it. For TypeScript users who want explicit typing, they would need `import { PluginOutput } from '@atomicloud/cyan-sdk';`
   - **Location**: Lines 202-228
   - **Fix**: Either add the type import or make the example consistent with other examples

3. **Inconsistent Import Statements**
   - **Problem**: First example shows full imports including `* as fs from 'fs/promises'` and `* as path from 'path'`, but subsequent examples omit these imports while using the same APIs
   - **Location**: Lines 36-45 (Write a File), 49-66 (Modify a File), etc.
   - **Fix**: Either show imports in every example or add a note that imports are assumed from previous examples

4. **Glob Package Dependency Not Clarified**
   - **Problem**: The glob example shows `import { glob } from 'glob';` but doesn't mention that `glob` is a separate package that needs to be installed
   - **Location**: Lines 198-228
   - **Fix**: Add a note that `npm install glob` or `bun add glob` is required, since `glob` is not exported from `@atomicloud/cyan-sdk`

### Other Problems

1. **Node.js fs/promises vs fs Consistency**
   - **Problem**: Documentation uses `import * as fs from 'fs/promises'` (async/await pattern with promises), but the actual plugin examples in the codebase at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts` use `import fs from 'node:fs'` with sync methods (`fs.writeFileSync`, `fs.mkdirSync`)
   - **Recommendation**: Document shows best practice (async), which is fine. Consider adding a note about both approaches being valid

2. **File Path Imports (Node 16+ style)**
   - **Problem**: Documentation uses `import * as fs from 'fs/promises'` and `import * as path from 'path'`, while actual examples use `import fs from 'node:fs'` and `import path from 'node:path'` (Node.js prefix style)
   - **Recommendation**: Consider using `node:` prefix style for consistency with modern Node.js conventions, or note that both styles work

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 0 critical (1 clarification) |
| Documentation Issues | 4 |
| Other Problems | 2 |

### Overall Assessment

The documentation is **technically accurate** regarding the Cyan SDK API. The core claims about:
- `StartPluginWithLambda` function
- `CyanPluginInput` with `directory` and `config` fields
- `PluginOutput` with `directory` field
- Package name `@atomicloud/cyan-sdk`

...are all verified as correct against the source code.

The main issues are documentation quality improvements:
1. Clarify that `glob` is a separate package dependency
2. Show consistent import statements across examples
3. Consider adding explicit return types for TypeScript clarity
