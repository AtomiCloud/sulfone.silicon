<!-- source: content/docs/developer/basics/architecture.mdx -->

# 📄 File: content/docs/developer/basics/architecture.mdx

> Documentation accurately describes the CyanPrint containerized architecture with accurate port assignments and API endpoints. Minor inaccuracies found in registry API path format and container path descriptions.

### 🔴 Source Code Inaccuracies

1. **Registry API Path Format**

   - Documented: `GET /templates/atomi/template`
   - Actual: `GET /api/v1/Template/slug/{username}/{name}/versions/latest`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/http/client.rs:219-224` shows the actual endpoint format for fetching templates is `/api/v1/Template/slug/{username}/{name}/versions/latest?bumpDownload=true`. The documentation shows a simplified path that does not match the actual API.

2. **Container Output Path**
   - Documented: `/workspace/output` as "Final output before delivery to CLI"
   - Actual: `/workspace/area/<uuid>` is used for processor outputs, and the merged output is at `/workspace/area/<merge-uuid>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:147-148` shows `WriteDir: "/workspace/area/" + filePath.String()` for processor output, and line 313 shows `mergePath := "/workspace/area/" + mergeDir.String()`. There is no `/workspace/output` path in the codebase.

### 🟡 Documentation Issues

1. **Missing API Version in Registry Endpoint**

   - Problem: The sequence diagram shows `GET /templates/atomi/template` but the actual Zinc API uses versioned endpoints with `/api/v1/Template/slug/...` format
   - Location: Execution Flow sequence diagram (line 58)
   - Fix: Update to show `GET /api/v1/Template/slug/atomi/template/versions/latest` or clarify this is a simplified representation

2. **Path Description Inconsistency**

   - Problem: The Critical Paths table lists `/workspace/output` which does not exist in the codebase. The actual flow uses `/workspace/area/<uuid>` for individual processor outputs and `/workspace/area/<merge-uuid>` for merged output.
   - Location: Container Path Mechanics section (lines 94-98)
   - Fix: Replace `/workspace/output` with `/workspace/area/<uuid>` and clarify the merging process

3. **Merger Container Not Listed**

   - Problem: The Container Communication table lists Template, Processor, and Plugin containers but does not mention the Merger container which is a key component
   - Location: Container Communication table (lines 78-82)
   - Fix: Add a row for the Merger container which operates on port 9000 with endpoint `POST /merge/:sessionId` and `POST /zip`

4. **Missing Coordinator Port**
   - Problem: The SDK Port Assignments table only lists artifact ports (5550, 5551, 5552) but does not mention the Coordinator's port 9000
   - Location: SDK Port Assignments section (lines 100-108)
   - Fix: Add Coordinator port 9000 for completeness, or clarify this table is specifically for artifact SDKs

### 🟠 Other Problems

1. **Simplified Execution Flow**

   - Problem: The execution flow diagram oversimplifies the actual process. The actual flow includes warming, session management, and zipping phases not shown
   - Recommendation: Consider adding a note that this is a simplified view, or expand to include the warm phase and zipping phase

2. **Argon Web UI Connection**
   - Problem: The diagram shows UI --> API connection but does not explain that Argon is a SvelteKit frontend that connects to Zinc API
   - Recommendation: Add brief description of Argon's role as the web interface for browsing templates

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 4     |
| 🟠       | 2     |
