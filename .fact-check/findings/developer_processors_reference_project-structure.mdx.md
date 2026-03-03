# File: content/docs/developer/processors/reference/project-structure.mdx

> Documentation describing the standard file layout for processor projects, including entry point, package.json, Dockerfile, cyan.yaml, and tsconfig.json.

### Source Code Inaccuracies

1. **Property name mismatch in `index.ts` example**
   - **Documented**: `input.writeDirectory` (line 43)
   - **Actual**: `input.writeDir`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` uses `input.writeDir`. The SDK type `CyanProcessorInput` defines `writeDir`, not `writeDirectory` (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:13`).

2. **Dockerfile Bun version mismatch**
   - **Documented**: `FROM oven/bun:1.1.31` (line 74)
   - **Actual**: `FROM oven/bun:1.0.11` (used in actual processor Dockerfiles)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor2/Dockerfile:1` use `oven/bun:1.0.11`. Only templates use 1.1.31 (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile:1`).

3. **Dockerfile install command difference**
   - **Documented**: `RUN bun install --frozen-lockfile` (line 83)
   - **Actual**: `RUN bun install` (without `--frozen-lockfile` flag)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:6` uses `bun install` without the frozen lockfile flag.

4. **Dockerfile COPY pattern difference**
   - **Documented**: `COPY package.json bun.lockb* ./` (line 82, with wildcard for optional bun.lockb)
   - **Actual**: `COPY package.json .` and `COPY bun.lockb .` (separate lines, no wildcard)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:4-5` copies files separately without wildcards.

5. **package.json structure differences**
   - **Documented**: Uses `"@types/bun": "latest"` in devDependencies (lines 64-65)
   - **Actual**: Uses `"bun-types": "latest"` in devDependencies
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/package.json:6` uses `bun-types`, not `@types/bun`.

6. **package.json missing `version` and `scripts` fields**
   - **Documented**: Includes `version: "1.0.0"` and `scripts` section (lines 54-59)
   - **Actual**: Real processor package.json files omit `version` and `scripts` fields
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/package.json` has no `version` or `scripts` keys. Uses `"module": "index.ts"` instead of scripts.

7. **package.json dependency version format**
   - **Documented**: `"@atomicloud/cyan-sdk": "^1.0.0"` (with caret and specific version)
   - **Actual**: `"@atomicloud/cyan-sdk": "latest"` (no caret, uses latest tag)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/package.json:12` uses `"latest"` tag.

8. **tsconfig.json structure differences**
   - **Documented**: Uses `"target": "ES2022"`, `"module": "ESNext"`, `"esModuleInterop": true` (lines 117-123)
   - **Actual**: Uses `"target": "esnext"`, `"module": "esnext"`, includes additional fields like `"lib": ["ESNext"]`, `"noEmit": true`, `"composite": true`, `"allowSyntheticDefaultImports": true`, and `"types": ["bun-types"]`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/tsconfig.json` has different structure with `esnext` targets and Bun-specific configuration.

9. **cyan.yaml structure differences**
   - **Documented**: Uses `name: myorg/my-processor`, `version: 1.0.0`, `license: MIT`, `processor.inputs` section (lines 96-109)
   - **Actual**: Uses `username: ernest`, `name: processor1`, no `version`, no `license`, no `processor.inputs` section. Has `project`, `source`, `email`, `tags`, `readme` fields.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml` shows actual structure with `username`, `name` (not org/name format), `project`, `source`, `email`, `tags`, `readme` fields.

### Documentation Issues

1. **Code example uses incorrect property name**
   - **Problem**: The `index.ts` example uses `input.writeDirectory` which doesn't exist on the actual SDK type.
   - **Location**: Line 43 in the code example
   - **Fix**: Change `return { directory: input.writeDirectory };` to `return { directory: input.writeDir };`

2. **Multi-file example uses incorrect property name**
   - **Problem**: Same issue in the multi-file example section.
   - **Location**: Line 179 in the multi-file example
   - **Fix**: Change `input.writeDirectory` to `input.writeDir`

3. **package.json example shows incorrect structure**
   - **Problem**: The documented package.json doesn't match actual processor implementations.
   - **Location**: Lines 51-67
   - **Fix**: Update to reflect actual structure with `bun-types` instead of `@types/bun`, remove version/scripts if not typically used, show `peerDependencies` for TypeScript, and consider using `"latest"` for SDK version or explain versioning strategy.

4. **tsconfig.json example lacks Bun-specific configuration**
   - **Problem**: The documented tsconfig is too generic and lacks Bun-specific settings that actual processors use.
   - **Location**: Lines 115-127
   - **Fix**: Include Bun-specific settings like `"types": ["bun-types"]`, `"noEmit": true`, `"allowSyntheticDefaultImports": true`, etc.

5. **cyan.yaml example shows incorrect structure**
   - **Problem**: The documented cyan.yaml structure doesn't match actual processor implementations.
   - **Location**: Lines 93-109
   - **Fix**: Update to show actual fields: `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`. Either remove `processor.inputs` section or clarify where input configuration is actually defined (likely in templates, not processors).

### Other Problems

1. **Dockerfile version inconsistency**
   - **Problem**: Documentation shows Bun 1.1.31, but actual processors use 1.0.11. Templates use 1.1.31.
   - **Recommendation**: Either update documentation to use a consistent version (recommend 1.1.31 or later) or explain version selection criteria.

2. **Missing `.dockerignore` and `.gitignore` in basic structure**
   - **Problem**: Real processor projects include `.dockerignore` and `.gitignore` files that aren't shown in the basic structure diagram.
   - **Recommendation**: Add these files to the basic structure diagram for completeness.

3. **Missing `README.MD` in basic structure**
   - **Problem**: Real processor projects include a `README.MD` file (referenced in cyan.yaml) that isn't shown in the basic structure.
   - **Recommendation**: Add `README.MD` to the basic structure diagram.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 9 |
| Documentation Issues | 5 |
| Other Problems | 3 |
