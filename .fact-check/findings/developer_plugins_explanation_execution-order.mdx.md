<!-- source: content/docs/developer/plugins/explanation/execution-order.mdx -->
# 📄 File: content/docs/developer/plugins/explanation/execution-order.mdx

> This document describes the execution order of processors and plugins in the CyanPrint pipeline. The general flow is accurate (processors run in parallel, plugins run sequentially), but there are some inaccuracies in type names and API details.

### 🔴 Source Code Inaccuracies
1. **Type Name Error** | Documented: `CyanConfig` | Actual: `Cyan` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27` - The interface is named `Cyan`, not `CyanConfig`. Also confirmed in exports at `main.ts:195`.

2. **CyanFileHelper Method Signature** | Documented: `read()` (no parameters) | Actual: `read(g: CyanGlob)` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:73-75` - The `read()` method requires a `CyanGlob` parameter.

3. **CyanFileHelper Method Signature** | Documented: `get()` (no parameters) | Actual: `get(g: CyanGlob)` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:60-71` - The `get()` method requires a `CyanGlob` parameter.

4. **CyanFileHelper Method Signature** | Documented: `copy()` described as a general file copy method | Actual: `copy(copy: CyanGlob)` - internal method | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:77-93` - The `copy()` method takes a `CyanGlob` and is used internally for files with `GlobType.Copy`.

5. **CyanFileHelper Method Signature** | Documented: `readAsStream()` (no parameters) | Actual: `readAsStream(g: CyanGlob)` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:42-58` - The `readAsStream()` method requires a `CyanGlob` parameter.

6. **Processor files field representation** | Documented: `files: { /* CyanGlob configuration */ }` (object) | Actual: `files: CyanGlob[]` (array) | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:18-22` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:40-47` - The `files` field is an array of `CyanGlob` objects, not a single object.

### 🟡 Documentation Issues
1. **Incomplete CyanFileHelper API description** | Location: Phase 2, step 2 | Fix: The methods listed (`resolveAll()`, `read()`, `get()`, `copy()`, `readAsStream()`) should clearly indicate that only `resolveAll()` takes no parameters, while all others require a `CyanGlob` argument. Consider showing the actual method signatures.

2. **Ambiguous return type for template function** | Location: Phase 1, code example line 40 | Fix: The comment says "returns `CyanConfig`" but should say "returns `Cyan`" to match the actual SDK type.

3. **Missing GlobType import** | Location: Phase 1, code example | Fix: The code example uses `/* CyanGlob configuration */` but to create valid `CyanGlob` objects, developers need `GlobType` enum. The import should include `GlobType` for complete examples (as shown in actual templates at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:1`).

4. **Example pipeline uses incorrect files structure** | Location: Example Pipeline section, lines 143-145 | Fix: The `files` property should be an array `files: [{ include: [...], exclude: [...] }]` not an object. Also, `CyanGlob` uses `glob` and `exclude` properties, not `include` and `exclude`. See actual structure at `cyan.ts:6-11`.

### 🟠 Other Problems
1. **No CLI commands to verify** | This document focuses on architecture and execution flow. No CLI commands are mentioned, so no `cyanprint` vs `cyan` issues.

2. **Error handling description needs verification** | Location: Error Handling section | The documentation states "Processors execute in parallel; if one fails, others continue running" - this appears accurate based on the goroutine implementation in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:102-177` where errors are collected via channels without cancellation. However, the statement "After parallel execution completes, the pipeline returns any errors and stops" is accurate - see `merger.go:300-304`.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 6 |
| 🟡 | 4 |
| 🟠 | 2 |
