<!-- source: content/docs/developer/templates/explanation/container-paths.mdx -->
# 📄 File: content/docs/developer/templates/explanation/container-paths.mdx

> Document describes container paths but contains significant inaccuracies about actual container structure, volume mounts, and working directories.

### 🔴 Source Code Inaccuracies

1. **Container Structure - Wrong Paths**
   - Documented: `/workspace/` with `(output)` subdirectory, `/templates/` for template source, `/cyan/index.ts` for template code
   - Actual: Template files are at `/workspace/cyanprint/`, output work area is at `/workspace/area/`
   - Evidence: `boron/docker_executor/docker.go:216` - volume mounted at `/workspace/cyanprint`; `boron/docker_executor/docker.go:353` - session volume at `/workspace/area`; `boron/docker_executor/merger.go:147` - `ReadDir: "/workspace/cyanprint"`

2. **WORKDIR Statement**
   - Documented: `WORKDIR /workspace`
   - Actual: While the WORKDIR is `/workspace`, the actual template files are under `/workspace/cyanprint/`, not directly in `/workspace/`
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:13` - `WORKDIR /workspace` but the blob extracts to `/workspace/cyanprint` (line 14)

3. **Template Source Path**
   - Documented: `/templates/` is where template source files are placed (from blob)
   - Actual: Template files are placed at `/workspace/cyanprint/` not `/templates/`
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:14` - `CMD [ "tar", "-xzf", "/cyanprint/artifact/cyan.tar.gz", "-C", "/workspace/cyanprint", "--strip-components=1" ]`

4. **Output Path Mapping**
   - Documented: User output directory maps to `/workspace/output`
   - Actual: User output maps to `/workspace/area/` (with UUID subdirectories for processor isolation)
   - Evidence: `boron/docker_executor/docker.go:352-354` - write volume mounted at `/workspace/area`; `boron/docker_executor/merger.go:148` - `WriteDir: "/workspace/area/" + filePath.String()`

5. **Blob Dockerfile Example**
   - Documented: `COPY cyan/templates/ /templates/`
   - Actual: The blob.Dockerfile creates a tarball and extracts to `/workspace/cyanprint/`
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:8,12,14` - creates `/cyanprint/artifact/cyan.tar.gz` and extracts to `/workspace/cyanprint`

6. **root Property Documentation**
   - Documented: `root: 'templates'` -> `/templates/` in container, or simply 'templates' (relative to /workspace)
   - Actual: The `root` property is relative to the `readDir` which is `/workspace/cyanprint/`. In real templates, `root: 'template'` resolves to `/workspace/cyanprint/template/`
   - Evidence: `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:23-24` - `return path.resolve(this.readDir, g.root ?? '.')`; `boron/docker_executor/merger.go:147` - `ReadDir: "/workspace/cyanprint"`

7. **Path Summary Table**
   - Documented: `/workspace/output` as generated files location
   - Actual: `/workspace/area` is the work area (not `/workspace/output`)
   - Evidence: `boron/docker_executor/docker.go:353` - Target: `/workspace/area`

8. **Container Structure Diagram**
   - Documented: Shows `cyan/` directory with `index.ts` at root level
   - Actual: Template code (index.ts) is in the blob image and gets extracted to `/workspace/cyanprint/`, and the template container serves the config via HTTP API (port 5550)
   - Evidence: `helium/sdks/node/src/main.ts:112` - Template server runs on port 5550; blob extracts to `/workspace/cyanprint`

### 🟡 Documentation Issues

1. **Missing Dual Volume Architecture**
   - Problem: Documentation doesn't explain the read-only vs read-write volume separation
   - Location: Container Structure section
   - Fix: Add explanation that processors get `/workspace/cyanprint` (read-only) and `/workspace/area/<uuid>` (read-write)

2. **Incorrect Path Resolution Explanation**
   - Problem: Says relative paths resolve from `/workspace` but they actually resolve from `readDir` (which is `/workspace/cyanprint`)
   - Location: "Relative Paths" section
   - Fix: Change "Relative paths are resolved from `/workspace`" to "Relative paths are resolved from the read directory (`/workspace/cyanprint` for processors)"

3. **Outdated blob.Dockerfile Example**
   - Problem: Example shows simple COPY but actual implementation uses tar archives
   - Location: "Blob Image Paths" section
   - Fix: Update example to show actual tar-based blob structure used in production

4. **Missing Processor Isolation Context**
   - Problem: Doesn't mention that each processor writes to a unique UUID subdirectory under `/workspace/area/`
   - Location: Output Path section
   - Fix: Explain that processor outputs are isolated by UUID for safe parallel execution

5. **Ambiguous cyan/ Directory**
   - Problem: Shows `cyan/index.ts` in container structure but this is the SDK entry point, not a container path
   - Location: Container Structure diagram
   - Fix: Remove `cyan/index.ts` from container structure or clarify it's the development structure, not runtime container path

### 🟠 Other Problems

1. **Confusing Templates vs Cyanprint Terminology**
   - Problem: Documentation uses `/templates/` as a path but the actual path is `/workspace/cyanprint/`
   - Recommendation: Either update all references to use `/workspace/cyanprint/` or clearly explain that "cyanprint" is the internal name for the template volume

2. **Missing Plugin Volume Mount Info**
   - Problem: Documentation doesn't explain that plugins only get `/workspace/area` (no `/workspace/cyanprint`)
   - Recommendation: Add a note about different container types having different volume mounts

3. **Debugging Commands Need Update**
   - Problem: `ls -la /templates` won't work since templates are at `/workspace/cyanprint`
   - Location: "Debugging Paths" section
   - Recommendation: Change to `ls -la /workspace/cyanprint`

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 8 |
| 🟡 | 5 |
| 🟠 | 3 |
