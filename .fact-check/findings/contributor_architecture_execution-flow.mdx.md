<!-- source: content/docs/contributor/architecture/execution-flow.mdx -->
# File: content/docs/contributor/architecture/execution-flow.mdx

> Documentation accurately describes the CyanPrint execution flow with minor inaccuracies in error handling behavior and API endpoint format. The parallel execution via semaphore-based concurrency and tar.gz streaming output are correctly documented.

### Source Code Inaccuracies

1. **Error Handling for Processor Failure**
   - **Documented**: "Processor failed: Continue with remaining processors, warn user"
   - **Actual**: Processor failure returns an error and stops the merge pipeline entirely. The edge case documentation in boron states: "Processor fails: Returns error from that processor, stops merge"
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/features/03-merger-system.md:168` and `merger.go:300-304` shows that if `execProcessors()` returns errors, the merge stops with error return.

2. **API Endpoint Format for Template Resolution**
   - **Documented**: `GET api/v1/template/{template-ref}`
   - **Actual**: The Zinc registry API uses `/api/v1/template/slug/{username}/{name}` for template resolution by slug, not a single `{template-ref}` parameter
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/docs/developer/surfaces/api/01-template.md:93-94` shows the actual endpoint format.

3. **Plugin Execution Method Name**
   - **Documented**: "plug method called with directory and config"
   - **Actual**: While the endpoint is `/api/plug` and the service method is `plug()`, the `ICyanPlugin` interface method is `plugin()`, not `plug()`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:19-21` shows `plugin(input: CyanPluginInput): Promise<PluginOutput>` not `plug()`.

### Documentation Issues

1. **CLI Command Should Use `pls` Instead of `cyanprint` in Examples**
   - **Problem**: The Iridium CLI documentation uses `pls create` as the primary command format, but the execution-flow doc uses `cyanprint create`
   - **Location**: Lines 14, 39 in the document
   - **Fix**: Either use `pls create` consistently or clarify that `cyanprint` is the binary name while `pls` is an alias. Note: The Iridium docs show `pls create` as the usage format, suggesting this is the preferred user-facing command.

2. **Phase 6 Plugin Application Diagram Shows Sequential Execution Incorrectly**
   - **Problem**: The diagram shows plugins branching to different types (File Modifier, Content Generator, Validator) but then all leading to "plug method called". The actual implementation runs plugins sequentially, not in parallel branches
   - **Location**: Lines 135-145, the Mermaid diagram
   - **Fix**: Clarify that plugins run sequentially (one after another), not as parallel branches. The merger system docs confirm: "Plugins run sequentially - plugin 2 sees the result of plugin 1."

3. **Plugin Output Interface Missing `outputDir` Field in Documentation**
   - **Problem**: The PluginOutput interface documented in Helium shows `{ directory: string }` but the actual API response includes `outputDir` per the PluginRes type
   - **Location**: Phase 6 description
   - **Fix**: The internal `PluginOutput` type has `directory: string`, but the API response (`PluginRes`) returns `outputDir: string`. This distinction should be clarified if documenting the API response.

4. **Phase 5 Parallelism Limit Reference**
   - **Problem**: The diagram shows "Based on runtime.NumCPU" but Go code uses `rt.NumCPU()` which is the same, but the actual field is `ParallelismLimit` which is set to `rt.NumCPU()` at server initialization
   - **Location**: Line 116
   - **Fix**: Minor clarification - the parallelism is indeed based on `runtime.NumCPU()` but is stored in `ParallelismLimit` field of the DockerClient struct.

### Other Problems

1. **Output Streaming Protocol Mismatch**
   - **Problem**: The sequence diagram shows "Boron->CLI: Stream via HTTP REST (io.Copy)" but this describes internal implementation. The actual flow has the merger container generating the tar.gz, which Boron proxies to the CLI
   - **Recommendation**: Clarify that Boron acts as a proxy between the merger container and CLI for the streaming output.

2. **Missing Phase: Session Warming**
   - **Problem**: The execution flow omits the warming phase (`/executor/:sessionId/warm`) which pulls images and creates session volumes before execution
   - **Recommendation**: Consider adding an optional "Phase 0: Session Warm-up" for completeness, especially since the Iridium create command flow shows template warming as part of the process.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 3 |
| Documentation Issues | 4 |
| Other Problems | 2 |
