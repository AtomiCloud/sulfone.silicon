# File: content/docs/developer/basics/architecture.mdx

> This document describes the CyanPrint system architecture including container communication, execution flow, container path mechanics, and SDK port assignments.

### Source Code Inaccuracies

1. **Registry API Endpoint Format**
   - **Documented**: `GET /templates/atomi/template` (Line 58)
   - **Actual**: `GET /api/v1/Template/slug/{username}/{name}/versions/latest?bumpDownload=true`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/http/client.rs:219-224` - The actual Zinc API uses a versioned endpoint with `/api/v{version}/Template/slug/{username}/{name}/versions/latest` format, not `/templates/{user}/{name}`.

2. **Output Directory Path**
   - **Documented**: `/workspace/output` (Lines 89, 98)
   - **Actual**: `/workspace/area`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:352-353` - The write volume is mounted at `/workspace/area`, not `/workspace/output`. Also in `merger.go:148,313` - Processor write directories are `/workspace/area/{uuid}` and merge path is `/workspace/area/{merge-uuid}`.

3. **Critical Paths Table - Incorrect Path**
   - **Documented**: `/workspace/output` owned by Coordinator (Line 98)
   - **Actual**: `/workspace/area` is the read-write volume mount point for processor/plugin outputs
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:343-356` - Shows `/workspace/cyanprint` (read-only) and `/workspace/area` (read-write) as the two mount points.

4. **Execution Flow Sequence - Missing Merger Component**
   - **Documented**: Shows `Coordinator->>Processor: POST /api/process` directly (Line 63)
   - **Actual**: The Merger component calls processors, not the Coordinator directly. The Coordinator starts the Merger container which then orchestrates processor execution.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:102-177` - The Merger struct has `execProcessors` method that calls processor endpoints. Also `executor.go:61-91` shows `startMerger` is called alongside processors/plugins.

5. **Container Communication Table - Missing Merger Role**
   - **Documented**: Only Template, Processor, Plugin containers listed (Lines 78-82)
   - **Actual**: A Merger container exists and plays a critical role in orchestrating processor execution and merging outputs.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:15-20` - Merger struct definition. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/executor.go:61-91` - `startMerger` method showing merger container startup on port 9000.

6. **Step-by-Step Description Oversimplified**
   - **Documented**: "Processing - Processor transforms files using the config" (Line 74)
   - **Actual**: The processing step involves the Merger component which: (1) Executes all processors in parallel, (2) Merges outputs into a single directory, (3) Executes plugins on the merged output.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:296-329` - The `Merge` function shows the complete flow: execProcessors -> merge -> execPlugins.

### Documentation Issues

1. **Incomplete Architecture Diagram**
   - **Problem**: The Mermaid diagram at line 12-35 does not show the Merger container which is a critical component.
   - **Location**: Lines 12-35 (System Components diagram)
   - **Fix**: Add Merger container to the "Remote Executor" subgraph and show it as the component that calls processors and plugins.

2. **Misleading Path Warning**
   - **Problem**: Warning says `/workspace` "WILL BE OVERRIDDEN" but the actual behavior is more nuanced - `/workspace/cyanprint` contains the extracted blob and `/workspace/area` is the working directory.
   - **Location**: Lines 94-99 (Critical Paths table)
   - **Fix**: Update the table to show correct paths: `/workspace/cyanprint` (read-only template volume) and `/workspace/area` (read-write session volume).

3. **Missing Merger Port Information**
   - **Problem**: SDK Port Assignments table (Lines 100-107) does not include the Merger container which runs on port 9000.
   - **Location**: Lines 100-107
   - **Fix**: Add Merger row: Port 9000, endpoint `POST /merge/{sessionId}`.

4. **Execution Flow Diagram Simplification**
   - **Problem**: The sequence diagram (Lines 49-66) shows Coordinator calling Processor directly, but actually the Merger component does this.
   - **Location**: Lines 49-66
   - **Fix**: Add Merger as a participant and show: Coordinator -> Merger -> Processor flow.

### Other Problems

1. **Terminology: "Coordinator" vs "Boron"**
   - **Problem**: The documentation uses "Coordinator" generically but the actual implementation is in the "boron" repository and the code references "sulfone-boron" as the coordinator image.
   - **Recommendation**: Consider clarifying that the Coordinator is the Boron component, or use consistent terminology.

2. **Registry Name Ambiguity**
   - **Problem**: The document refers to "Zinc API" but the actual API endpoints use `/api/v1/Template/...` format with "Template" (capitalized) as the controller name.
   - **Recommendation**: Ensure consistent naming between documentation and actual API paths.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 6 |
| Documentation Issues | 4 |
| Other Problems | 2 |
