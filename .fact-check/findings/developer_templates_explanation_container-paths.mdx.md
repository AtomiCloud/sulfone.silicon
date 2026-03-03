# File: content/docs/developer/templates/explanation/container-paths.mdx

> Documentation explaining container path conventions for templates running in Docker containers, including directory structure, path variables, blob Dockerfile configuration, and output path mapping.

### Source Code Inaccuracies

1. **Container Structure - Incorrect Template Directory Name**
   - Documented: `/templates/` - "Template source files (from blob)"
   - Actual: Template files are stored in a `template/` directory (singular), not `templates/` (plural)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:43` uses `root: 'template'` (singular). The actual template directory is at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/template/`

2. **Container Structure - Incorrect Cyan Directory Location**
   - Documented: `/cyan/` directory with `index.ts` at container root
   - Actual: The blob.Dockerfile does NOT place cyan/ at the container root. Instead, files are archived as a tar.gz and extracted at runtime
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile:8-14` shows the actual process: files are tarred into `/cyanprint/artifact/cyan.tar.gz` and extracted to `/workspace/cyanprint` at runtime

3. **Blob Dockerfile Example - Uses Non-Existent Pattern**
   - Documented: `COPY cyan/templates/ /templates/` pattern
   - Actual: The actual blob.Dockerfile uses a multi-stage build that creates a tar.gz archive, not a direct COPY to `/templates/`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile:1-14` shows the actual pattern:
     ```dockerfile
     FROM alpine:3.21 as base
     RUN apk add tar
     FROM base as build
     WORKDIR /src
     COPY . .
     RUN rm -rf cyan && mkdir -p /cyanprint/artifact && tar -czvf /cyanprint/artifact/cyan.tar.gz /src/
     FROM base
     LABEL cyanprint.dev=true
     COPY --from=build /cyanprint/artifact/cyan.tar.gz  /cyanprint/artifact/cyan.tar.gz
     WORKDIR /workspace
     CMD [ "tar",  "-xzf",  "/cyanprint/artifact/cyan.tar.gz", "-C", "/workspace/cyanprint", "--strip-components=1" ]
     ```

4. **File Group root Property - Incorrect Example Path**
   - Documented: `root: 'templates'` or `root: '/templates'`
   - Actual: Templates use `root: 'template'` (singular), and this is relative to the extracted archive path `/workspace/cyanprint`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:43` shows `root: 'template'`

5. **Output Path Mapping - Unverified Claim**
   - Documented: "Inside the container, this maps to `/workspace/output`"
   - Actual: No evidence found in source code to support this mapping. The actual extraction goes to `/workspace/cyanprint`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile:14` shows extraction to `/workspace/cyanprint`

6. **Path Summary Table - Incorrect Paths**
   - Documented: `/templates` as "Template source" and `/workspace/output` as "Generated files"
   - Actual: Template files are in `template/` (relative to `/workspace/cyanprint`), and output path mapping is not `/workspace/output`
   - Evidence: Based on all findings above

7. **Multiple Source Directories Example - Non-Existent Pattern**
   - Documented: Multiple COPY commands for `/templates/`, `/static/`, `/configs/`
   - Actual: The actual blob.Dockerfile pattern doesn't use separate COPY commands for different directories
   - Evidence: See blob.Dockerfile content in finding #3

### Documentation Issues

1. **Misleading Container Structure Diagram**
   - Problem: The container structure diagram shows a simplified view that doesn't match the actual multi-stage build pattern
   - Location: Lines 16-23 (Container Structure diagram)
   - Fix: Update diagram to reflect actual archive-based file distribution or clearly indicate this is a conceptual view

2. **Example Code Doesn't Match Real Templates**
   - Problem: All code examples use `root: 'templates'` or `/templates` but actual templates use `root: 'template'`
   - Location: Throughout the document (lines 41-68, 89-104, 120-166)
   - Fix: Update all examples to use `root: 'template'` to match actual implementation

3. **Missing Documentation of Actual Archive Pattern**
   - Problem: Documentation doesn't explain the tar.gz archive pattern used in actual blob.Dockerfiles
   - Location: Blob Image Paths section (lines 50-69)
   - Fix: Document the actual multi-stage build pattern with tar.gz archives

4. **GlobType Copy Not Explained**
   - Problem: Examples show `type: GlobType.Copy` but there's no explanation of when/why to use Copy vs Template
   - Location: Lines 139, Common Patterns section
   - Fix: Add explanation of the difference between GlobType.Template and GlobType.Copy

5. **Ambiguous Relative Path Resolution**
   - Problem: Documentation says "Relative paths are resolved from `/workspace`" but doesn't clarify that files are actually extracted to `/workspace/cyanprint`
   - Location: Lines 96-104
   - Fix: Clarify the actual base path for relative path resolution

### Other Problems

1. **No Source Code Reference for cyanprint CLI**
   - Problem: The CLI command `cyanprint create` is documented but there's no reference to where this is defined in source
   - Recommendation: Consider linking to or referencing the actual CLI implementation at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/`

2. **Documentation Doesn't Match Current Implementation**
   - Problem: The documentation appears to describe an idealized or older architecture that doesn't match the current blob.Dockerfile implementation
   - Recommendation: Review and update documentation to reflect current implementation patterns, or clarify if the documentation describes a different template style

3. **Missing Information on /workspace/cyanprint Directory**
   - Problem: The actual extraction path `/workspace/cyanprint` is not mentioned anywhere in the documentation
   - Recommendation: Add documentation about the `/workspace/cyanprint` directory and its role in the container filesystem

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 7 |
| Documentation Issues | 5 |
| Other Problems | 3 |
