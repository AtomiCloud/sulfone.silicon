# File: content/docs/developer/plugins/explanation/execution-order.mdx

> Documentation explaining the CyanPrint pipeline execution order: template collection, processing (processors), writing, post-processing (plugins), and output phases.

### Source Code Inaccuracies

1. **Incorrect type name `CyanConfig`**
   - **Documented**: `Template returns CyanConfig with processors and plugins` (line 30)
   - **Actual**: The type is named `Cyan`, not `CyanConfig`. The source code in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27` defines `interface Cyan { processors: CyanProcessor[]; plugins: CyanPlugin[]; }`. There is no `CyanConfig` type in the SDK.
   - **Evidence**: `helium/sdks/node/src/domain/core/cyan.ts:24-27`

2. **Inaccurate processor execution flow description**
   - **Documented**: Processors execute sequentially where "Output directory becomes input for next processor" (lines 55-61)
   - **Actual**: Processors execute in **parallel**, not sequentially. Each processor reads from the same template volume and writes to a unique work area (`/workspace/area/<uuid>`). The merger system then consolidates all processor outputs.
   - **Evidence**: `boron/docker_executor/merger.go:102-177` shows `execProcessors()` using goroutines and a semaphore for parallel execution. Also documented in `boron/docs/developer/features/03-merger-system.md:16-21`.

3. **Missing Phase 2 "Merge" stage**
   - **Documented**: Pipeline has 5 phases: Template Collection, Processing, Writing, Post-Processing, Output
   - **Actual**: The actual pipeline has a distinct **Merge** phase between Processing and Post-Processing (plugins). The merger container consolidates all processor outputs before plugins run.
   - **Evidence**: `boron/docker_executor/merger.go:296-330` shows the 3-stage pipeline: processors (parallel) -> merge -> plugins (sequential). Also `boron/docs/developer/features/03-merger-system.md:15-21`.

4. **Incorrect Phase 3 "Writing" description**
   - **Documented**: "All transformed files are written to the output directory" as a separate phase (lines 64-67)
   - **Actual**: Writing happens during processor execution (each processor writes to its own directory), and the merge operation handles consolidation. There is no separate "Writing" phase.
   - **Evidence**: `boron/docker_executor/merger.go:146-157` shows processors write to `/workspace/area/<uuid>` during execution, not in a separate phase.

5. **Example plugin names may not exist**
   - **Documented**: `atomi/git-init`, `atomi/npm-install`, `atomi/husky-setup`, `atomi/npm-build` (lines 105-107, 169-176)
   - **Actual**: These plugin names could not be verified in the source paths. The only verified plugin name format is `atomi/formatter` (found in boron docs). These appear to be hypothetical examples.
   - **Evidence**: Search of all source paths found no matches for `git-init`, `npm-install`, `husky-setup`, or `npm-build` except in this documentation file itself.

6. **Error handling behavior incomplete**
   - **Documented**: "If any processor fails, the pipeline stops" and "No files are written to output" (lines 140-142)
   - **Actual**: Processors run in parallel, and errors are collected from all processors before stopping. The pipeline returns all errors from failed processors, not just stopping at the first one.
   - **Evidence**: `boron/docker_executor/merger.go:165-176` collects all errors in a slice and returns them together. Also `boron/docs/developer/features/05-parallel-execution.md:54` states "All goroutine errors are collected and returned together".

### Documentation Issues

1. **Incorrect pipeline diagram**
   - **Problem**: The Mermaid diagram at lines 14-22 shows sequential processor execution (Processor 1 -> Processor 2 -> Processor N)
   - **Location**: Lines 14-22
   - **Fix**: Update diagram to show parallel processor execution with a merge step before plugins

2. **Misleading sequence diagram for processors**
   - **Problem**: The sequence diagram at lines 42-53 shows processors passing files to each other sequentially
   - **Location**: Lines 42-53
   - **Fix**: Redraw to show parallel execution with all processors receiving the same input and producing separate outputs that are merged

3. **Inaccurate "What Runs Where" table**
   - **Problem**: Table suggests file filtering happens in processors (line 186), but the actual filtering is done via glob patterns in the merger/processor coordination
   - **Location**: Lines 179-191
   - **Fix**: Clarify that glob pattern matching is part of the processor input configuration, not a separate filtering operation

4. **Unverified example processor names**
   - **Problem**: `custom/formatter` example (line 102) is not verified to exist
   - **Location**: Line 102
   - **Fix**: Use verified processor names like `atomi/typescript` or clearly mark as hypothetical examples

### Other Problems

1. **Missing reference to actual execution documentation**
   - **Problem**: This documentation duplicates/conflicts with the more accurate `boron/docs/developer/features/03-merger-system.md` documentation
   - **Recommendation**: Consider referencing the boron merger system documentation for implementation details, or ensure consistency between the two

2. **Phase numbering inconsistency**
   - **Problem**: Documentation uses 5 phases but the actual system uses 3 stages (processors, merge, plugins)
   - **Recommendation**: Align phase descriptions with the actual 3-stage pipeline or clarify that this is a conceptual view vs implementation view

3. **Missing information about processor isolation**
   - **Problem**: Documentation doesn't mention that each processor runs in its own Docker container with isolated work areas
   - **Recommendation**: Add information about container-based isolation for completeness

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 6 |
| Documentation Issues | 4 |
| Other Problems | 3 |
