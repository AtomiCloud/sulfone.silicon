# File: content/docs/contributor/architecture/execution-flow.mdx

> This document describes the execution flow of CyanPrint templates, covering template resolution, input collection, container scheduling, template execution via Helium SDK, processor pipelines, plugin application, and output streaming. It includes sequence diagrams and configuration examples for the Boron coordinator.

### Source Code Inaccuracies

1. **gRPC Streaming Not Used for Output**
   - **Documented**: "Boron->>CLI: Forward chunks via gRPC stream" (Line 167, Phase 7 diagram)
   - **Actual**: Boron uses HTTP (Gin framework) with tar/gzip streaming over HTTP, not gRPC. The server.go file shows standard HTTP endpoints (`r.POST`, `r.GET`) and streaming via `io.Copy` to HTTP response writers.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:169` shows `io.Copy(ctx.Writer, resp.Body)` - standard HTTP streaming. No gRPC service definitions exist in the boron codebase.

2. **No Resource Limits Configuration Found**
   - **Documented**: Resource limits section shows `boron-config.yaml` with `cpu_limit`, `memory_limit`, `timeout`, `network_enabled` settings (Lines 203-220)
   - **Actual**: The boron codebase does not implement CPU limits, memory limits, or timeouts for containers. The `docker.go` file creates containers without any resource constraints (`HostConfig` has no `Resources` field set). The `ParallelismLimit` in the code refers to concurrent goroutines, not container CPU/memory limits.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:177-197` - Container creation with no resource limits in HostConfig.

3. **Default Resource Values Not Implemented**
   - **Documented**: "CPU: 1 core default", "Memory: 512MB default", "Timeout: 5 minutes" (Lines 85-88)
   - **Actual**: No such defaults exist in the codebase. Containers are created without resource constraints.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go` - No `NanoCPUs`, `Memory`, or `MemorySwap` settings in container creation.

4. **Template Function Name Incorrect**
   - **Documented**: "Call generate function" (Line 104, Phase 4 diagram)
   - **Actual**: The Helium SDK interface uses `template()` method, not `generate()`. The `ICyanTemplate` interface defines `template(inquirer: IInquirer, determinism: IDeterminism): Promise<Cyan>`.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:12`

5. **Return Type Incorrect**
   - **Documented**: "Return File Tree" (Line 107, Phase 4 diagram)
   - **Actual**: Templates return a `Cyan` object containing `processors` and `plugins` arrays, not a file tree directly. File tree generation is handled by the template's internal logic.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27` shows `Cyan` interface with `processors` and `plugins`.

6. **Input Sources Not Verified**
   - **Documented**: Input sources priority list includes command-line flags, input files, environment variables (`CYAN_INPUT_KEY`), and interactive prompts (Lines 64-68)
   - **Actual**: The documented environment variable pattern `CYAN_INPUT_KEY` and `--input-file` flag were not found in the iridium CLI codebase. The CLI uses `cyanprompt` library for interactive prompts, but the specific input priority mechanism described is not implemented as documented.
   - **Evidence**: Grep searches in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium` found no matches for `CYAN_INPUT`, `input-file`, or related input flag patterns.

7. **CLI Command Format**
   - **Documented**: `cyan print init my-project` (Line 12)
   - **Actual**: The CLI binary is named `cyanprint` (based on Cargo.toml and directory structure). The exact command format should be verified against actual CLI implementation.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/` directory structure and main.rs entry point.

8. **Container Lifecycle States Incomplete**
   - **Documented**: State diagram shows Pending, Scheduled, Running, Succeeded, Failed, Timeout states (Lines 177-187)
   - **Actual**: The boron code does not implement explicit state management with these states. Container status is derived from Docker's container state (`running`, `exited`, etc.) without the intermediate "Scheduled" or "Pending" states managed by Boron itself.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/executor.go` - No state machine implementation.

9. **Registry API Endpoint Format**
   - **Documented**: `GET /templates/my-template` (Line 38)
   - **Actual**: The Zinc registry API uses different endpoint patterns: `api/v1/template/slug/{username}/{name}` for getting templates by slug, or `api/v1/template/id/{userId}/{templateId}` for getting by ID.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:61-68`

### Documentation Issues

1. **Mermaid Diagram Syntax - State Diagram**
   - **Problem**: The state diagram uses `stateDiagram-v2` which may not render correctly in all Fumadocs environments.
   - **Location**: Lines 177-187
   - **Fix**: Verify Mermaid component supports stateDiagram-v2 syntax, or convert to flowchart for broader compatibility.

2. **Config File Format Unverified**
   - **Problem**: The `boron-config.yaml` example shows configuration options that don't exist in the codebase. This is misleading documentation.
   - **Location**: Lines 205-220
   - **Fix**: Remove the configuration example or update it to reflect actual configuration options (if any exist). The actual boron configuration is done via command-line flags (`--registry`).

3. **Phase Description Mismatch**
   - **Problem**: Phase 4 mentions "Initialize SDK Runtime" but the Helium SDK is a simple TypeScript library without a complex runtime initialization.
   - **Location**: Lines 101-109
   - **Fix**: Update to reflect that the container starts an Express.js server with the template logic loaded.

4. **Error Handling Table Unverified**
   - **Problem**: The error handling table (Lines 191-199) describes behaviors like "Increase limits, retry with larger container" which are not implemented in the code.
   - **Location**: Lines 191-199
   - **Fix**: Update to reflect actual error handling, which returns error responses to the client without automatic retry or limit adjustment.

### Other Problems

1. **Missing Architecture Component: Argon**
   - **Problem**: The documentation doesn't mention Argon (the web frontend), which is part of the overall CyanPrint platform. The overview should clarify that Argon provides the web UI while Iridium is the CLI.
   - **Recommendation**: Either add Argon to the architecture overview or clarify this document focuses specifically on CLI-driven execution.

2. **Processor/Plugin Port Numbers Undocumented**
   - **Problem**: The code shows processors use port 5551 and plugins use port 5552 for health checks, but this isn't documented anywhere.
   - **Recommendation**: Document the port assignments for different component types (templates: 5550, processors: 5551, plugins: 5552, merger: 9000).

3. **Network Configuration Missing**
   - **Problem**: Documentation doesn't explain that all containers must be on the `cyanprint` Docker bridge network, which is enforced by the code.
   - **Recommendation**: Add a section about Docker network requirements and how Boron manages the `cyanprint` network.

4. **Session Management Not Explained**
   - **Problem**: The concept of session IDs is central to how Boron tracks containers and volumes, but isn't clearly explained in the execution flow.
   - **Recommendation**: Add explanation of session-based resource isolation and cleanup.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 9 |
| Documentation Issues | 4 |
| Other Problems | 4 |
