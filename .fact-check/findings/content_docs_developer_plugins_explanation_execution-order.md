<!-- source: content/docs/developer/plugins/explanation/execution-order.mdx -->

# 📄 File: content/docs/developer/plugins/explanation/execution-order.mdx

> This document describes the execution order of the CyanPrint pipeline, including processors and plugins phases. Most claims are accurate, but there are some issues with example plugin names that don't exist in the codebase and some oversimplifications about error handling.

### 🔴 Source Code Inaccuracies

1. **Example plugin names are fictional** | Documented: `atomi/git-init`, `atomi/npm-install`, `atomi/husky-setup`, `atomi/npm-build` | Actual: No plugins with these names exist in the source code. The only plugins found in the e2e tests are `ernest/plugin1`, `ernest/plugin2` (iridium/e2e/plugin1/index.ts:1, iridium/e2e/plugin2/index.ts:1)

2. **Example processor name is fictional** | Documented: `cyan/default` as a processor name | Actual: While `cyan/default` is referenced in specs, actual e2e test processors use names like `ernest/processor1`, `ernest/processor2` (iridium/e2e/processor1/index.ts:1)

3. **Error handling during processing is oversimplified** | Documented: "If any processor fails, the pipeline stops. No files are written to output." | Actual: The boron merger.go shows processors execute in parallel (line 102-177) with goroutines and semaphore-based parallelism. If one processor fails, others continue running, but the pipeline does return errors and stops. Files may be partially written to individual processor output directories before the merge phase. (boron/docker_executor/merger.go:102-177)

4. **Plugin error handling is oversimplified** | Documented: "If a plugin fails, the pipeline stops. Partial files may exist." | Actual: Plugins execute sequentially (not in parallel like processors). If a plugin fails, the function returns immediately with the error, stopping subsequent plugins. However, the merged processor output already exists at this point. (boron/docker_executor/merger.go:216-236)

### 🟡 Documentation Issues

1. **Missing IDeterminism parameter** | Location: Phase 1: Template Collection, code example | Fix: The template function signature shows it takes two parameters: `(i: IInquirer, d: IDeterminism)`, not just IInquirer. The documentation should mention IDeterminism or at least show it in the example. (helium/sdks/node/src/api/template/lambda.ts:6)

2. **Code example uses incorrect return structure** | Location: Phase 1 code example lines 32-38 | Fix: The example shows `return { processors: [...], plugins: [...] }` but actual templates return a `Cyan` object where processors have a `files` property (required), not just `name` and `config`. The example should show the `files` property with `CyanGlob` structure. (helium/sdks/node/src/domain/core/cyan.ts:24-27, iridium/e2e/template1/cyan/index.ts:34-59)

3. **ProcessorInput property names differ** | Location: Phase 2 description line 57 | Fix: Documentation says "Processor receives input (files, config, directories)" but the actual `ProcessorInput` interface uses `readDirectory`, `writeDirectory`, `globs`, `config` as property names. The `CyanProcessorInput` passed to processors uses `readDir`, `writeDir`, `globs`, `config`. (helium/sdks/node/src/domain/processor/input.ts:3-8, helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16)

4. **Phase 3 (Writing) is misleading** | Location: Lines 63-67 | Fix: The documentation suggests writing happens after all processors complete. However, looking at the code, each processor writes to its own output directory (`/workspace/area/{uuid}`) during Phase 2, and then the merger combines all outputs. There is no separate "Phase 3: Writing" - the merge operation combines processor outputs into the final directory. (boron/docker_executor/merger.go:296-329)

5. **Missing Merger component** | Location: Entire document | Fix: The documentation omits the Merger component which is a critical part of the pipeline. After processors run in parallel, their outputs are merged by the coordinator/merger before plugins execute. This should be documented as part of the pipeline. (boron/docker_executor/merger.go:238-261, 296-329)

### 🟠 Other Problems

1. **Plugin input/output types not documented** | Recommendation: The documentation should clarify that `PluginInput` contains `directory` and `config`, and `PluginOutput` returns `directory`. This is important for plugin developers to understand the interface contract. (helium/sdks/node/src/domain/plugin/input.ts:1-6, helium/sdks/node/src/domain/plugin/output.ts:1-5)

2. **Processor parallelism not documented** | Recommendation: Document that processors execute in parallel (subject to `ParallelismLimit`), while plugins execute sequentially. This is an important performance consideration for developers. (boron/docker_executor/merger.go:102-177 for processors, 216-236 for sequential plugins)

3. **CyanFileHelper methods not fully documented** | Recommendation: The documentation mentions `CyanFileHelper` but doesn't explain its key methods like `resolveAll()`, `read()`, `get()`, `copy()`, and `readAsStream()`. These are essential for processor development. (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-94)

4. **Plugin receives merged directory, not individual processor outputs** | Recommendation: Clarify that plugins receive the merged output of all processors, not individual processor outputs. This is important for understanding the data flow. (boron/docker_executor/merger.go:323)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 5     |
| 🟠       | 4     |
