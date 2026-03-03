<!-- source: content/docs/developer/plugins/tutorials/first-plugin.mdx -->
# 📄 File: content/docs/developer/plugins/tutorials/first-plugin.mdx

> Tutorial for creating a CyanPrint plugin that runs post-processing commands after file generation. The documentation is generally accurate but has minor type naming inconsistencies and Dockerfile patterns that differ from e2e test implementations.

### 🔴 Source Code Inaccuracies

1. **Type Name Mismatch: PluginInput vs CyanPluginInput**
   - **Documented**: `PluginInput` (in tables at lines 114-120)
   - **Actual**: `CyanPluginInput` is the exported type name from the SDK
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` exports `CyanPluginInput`, and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` defines `interface CyanPluginInput { directory: string; config: unknown; }`

2. **Dockerfile Bun Version Inconsistency**
   - **Documented**: `FROM oven/bun:1.1.31` (line 82)
   - **Actual**: E2E test plugins use `FROM oven/bun:1.0.11`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/Dockerfile:1` both use `oven/bun:1.0.11`

3. **Dockerfile COPY Pattern Mismatch**
   - **Documented**: `COPY package.json bun.lockb* ./` with wildcard (line 90)
   - **Actual**: E2E Dockerfiles use separate COPY commands without wildcards
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:4-5` shows `COPY package.json .` and `COPY bun.lockb .` as separate lines

### 🟡 Documentation Issues

1. **Implicit Return Type**
   - **Problem**: The tutorial code does not explicitly type the return value as `Promise<PluginOutput>`, which is shown in actual plugin examples
   - **Location**: Lines 42-74 (plugin code example)
   - **Fix**: Add explicit return type `: Promise<PluginOutput>` and import `PluginOutput` type for better type safety, matching the pattern in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5`

2. **Missing Type Import**
   - **Problem**: The code example doesn't import `PluginOutput` type which is used in real implementations
   - **Location**: Lines 38-75 (plugin code example)
   - **Fix**: Show importing `PluginOutput` from `@atomicloud/cyan-sdk` as shown in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1`

3. **Dockerfile COPY Pattern Documentation**
   - **Problem**: Documentation shows combined `COPY package.json bun.lockb* ./` but actual e2e implementation uses separate COPY commands
   - **Location**: Lines 89-91 (Dockerfile example)
   - **Fix**: Either update to match actual implementation (separate COPY lines) or document that both patterns work

4. **Table Type Name Inconsistency**
   - **Problem**: The "PluginInput" table header should be "CyanPluginInput" to match the actual SDK export
   - **Location**: Line 116 (table header)
   - **Fix**: Rename to `CyanPluginInput` to match SDK export at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193`

### 🟠 Other Problems

1. **Bun Version Consistency**
   - **Problem**: The Bun version in Docker examples (1.1.31) doesn't match the version used in e2e plugin tests (1.0.11)
   - **Recommendation**: Update e2e plugin tests to use 1.1.31 for consistency, or document version requirements

2. **Wildcard Pattern Justification**
   - **Problem**: The `bun.lockb*` wildcard pattern suggests the lockfile might sometimes not exist, but this isn't explained
   - **Recommendation**: Add a note explaining when the wildcard is useful (e.g., optional lockfile scenarios)

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 4 |
| 🟠 | 2 |
