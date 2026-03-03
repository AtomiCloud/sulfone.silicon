<!-- source: content/docs/contributor/architecture/execution-flow.mdx -->

# 📄 File: content/docs/contributor/architecture/execution-flow.mdx

> This document describes the CyanPrint execution flow but contains several inaccuracies when compared to the actual source code. The CLI command structure, communication protocols, resource limits, input collection methods, and plugin hook system are all documented incorrectly or without source code evidence.

### 🔴 Source Code Inaccuracies

1. **CLI Command Structure**

   - Documented: `cyan print init my-project`
   - Actual: `cyanprint create <template_ref> [path]` - The CLI uses `create` not `print init`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46` shows the command is `Create { template_ref, path, coordinator_endpoint }`

2. **Communication Protocol**

   - Documented: "Forward chunks via gRPC stream"
   - Actual: Uses HTTP REST with Gin framework, not gRPC. The boron server uses HTTP POST/GET endpoints
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:28` shows `r := gin.Default()` with HTTP routes, not gRPC

3. **Resource Limits Configuration**

   - Documented: CPU: 1 core default, Memory: 512MB default, Timeout: 5 minutes, with `boron-config.yaml` configuration file
   - Actual: No such configuration file or resource limits exist in the codebase. The code uses `runtime.NumCPU()` for parallelism limits only
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:43-47` shows `cpu := rt.NumCPU()` used only for `ParallelismLimit`, no memory or timeout configuration found

4. **Input Collection Methods**

   - Documented: `--input key=value`, `--input-file inputs.yaml`, `CYAN_INPUT_KEY` environment variables, interactive prompts
   - Actual: No evidence of `--input`, `--input-file`, or `CYAN_INPUT_KEY` in the CLI. The template uses interactive prompting via inquirer pattern
   - Evidence: Grep search for `CYAN_INPUT`, `--input`, `input-file` in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium` returned no matches

5. **Plugin Hooks**

   - Documented: `pre-write` and `post-write` plugin hooks
   - Actual: No such hooks exist in the codebase. Plugins have a single `plug` method that takes directory and config
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/service.ts:12-18` shows only a `plug()` method

6. **Zinc Registry API Endpoint**
   - Documented: `GET /templates/my-template`
   - Actual: API uses versioned routes like `api/v{version}/[controller]` - likely `api/v1/template`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:24` shows `[Route("api/v{version:apiVersion}/[controller]")]`

### 🟡 Documentation Issues

1. **Mermaid Diagram Inaccuracy - Container Scheduling**

   - Problem: The diagram shows "Select Executor Node" and "Schedule Container" as separate steps with resource limits
   - Location: Phase 3: Container Scheduling section
   - Fix: The actual code shows containers are created directly without node selection. Resource limits (CPU, memory, timeout) are not implemented

2. **Missing CLI Command Documentation**

   - Problem: The `cyan print init` command doesn't exist; the actual command is `cyanprint create`
   - Location: Overview section, line 12
   - Fix: Update to `cyanprint create <template_ref> [path]`

3. **Incorrect Protocol in Sequence Diagram**

   - Problem: Shows gRPC streaming which doesn't exist
   - Location: Phase 7: Output Streaming section
   - Fix: Update to show HTTP REST with tar.gz streaming via `io.Copy`

4. **Non-existent Configuration File**

   - Problem: `boron-config.yaml` example is fictional
   - Location: Resource Management section, lines 205-220
   - Fix: Remove this section or document actual configuration method (environment variables/CLI flags)

5. **Processor Pipeline Description**

   - Problem: Shows sequential processor pipeline but actual execution is parallel with semaphore-based concurrency
   - Location: Phase 5: Processor Pipeline section
   - Fix: Document that processors run in parallel with CPU-based semaphore limiting

6. **Template Execution Details**
   - Problem: Shows `Call generate function` but actual SDK uses `template()` method
   - Location: Phase 4: Template Execution section
   - Fix: Update to reflect actual SDK API (`template(inquirer, determinism)`)

### 🟠 Other Problems

1. **Container Lifecycle States**

   - Problem: State diagram shows `Scheduled` state but code doesn't have this state - containers go from creation to running
   - Recommendation: Review actual container states from Docker execution code

2. **Error Handling Table**

   - Problem: Several error types listed (Container OOM, Timeout) have no corresponding handling code
   - Recommendation: Verify each error type against actual error handling in `server.go` and `executor.go`

3. **Missing Documentation**

   - Problem: The session ID generation, cleanup process, and volume management are not documented
   - Recommendation: Add documentation for `DefaultSessionIdGenerator` and cleanup flow shown in `main.rs:175-189`

4. **Registry Client Communication**
   - Problem: Shows direct registry communication but actual implementation uses `CyanRegistryClient` wrapper
   - Recommendation: Document the actual HTTP client abstraction layer

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 6     |
| 🟠       | 4     |
