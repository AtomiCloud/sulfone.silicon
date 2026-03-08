<!-- source: content/docs/developer/templates/reference/dockerfiles.mdx -->
# File: content/docs/developer/templates/reference/dockerfiles.mdx

> Document describes Dockerfile configuration for templates and blobs. Several inaccuracies found in Dockerfile examples and endpoint paths.

### Source Code Inaccuracies
1. **Bun image version format**
   - Documented: `FROM oven/bun:1.1.31-alpine`
   - Actual: `FROM oven/bun:1.1.31` (no `-alpine` suffix used in e2e templates)
   - Evidence: `iridium/e2e/template1/cyan/Dockerfile:1`, `iridium/e2e/template3/cyan/Dockerfile:1`, and all other template Dockerfiles use base image without `-alpine`

2. **SDK API endpoints**
   - Documented: "The SDK hosts its API on port 5550 for `/init` and `/validate` endpoints."
   - Actual: Endpoints are `/api/template/init` and `/api/template/validate`
   - Evidence: `helium/sdks/node/src/main.ts:116` shows `app.post('/api/template/init', ...)`, `helium/sdks/node/src/main.ts:123` shows `app.post('/api/template/validate', ...)`

3. **blob.Dockerfile structure - missing RUN apk add tar**
   - Documented: `RUN rm -rf cyan && mkdir -p /cyanprint/artifact && tar -czvf /cyanprint/artifact/cyan.tar.gz /src/`
   - Actual: Requires `RUN apk add tar` before tar commands (alpine doesn't include tar by default)
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:3` shows `RUN apk add tar`

4. **blob.Dockerfile structure - missing multi-stage pattern**
   - Documented: Single-stage build with just RUN and CMD
   - Actual: Uses three-stage build (base, build, runtime) with COPY --from=build
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:1-14` shows complete multi-stage pattern with `FROM alpine:3.21 as base`, `FROM base as build`, `FROM base`

5. **blob.Dockerfile - missing LABEL**
   - Documented: No LABEL in blob.Dockerfile example
   - Actual: `LABEL cyanprint.dev=true` is present in runtime stage
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:11`

6. **blob.Dockerfile - wrong COPY structure**
   - Documented: Does tar creation in single stage
   - Actual: Copies artifact from build stage: `COPY --from=build /cyanprint/artifact/cyan.tar.gz /cyanprint/artifact/cyan.tar.gz`
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:12`

7. **Minimal blob example creates incorrect path**
   - Documented: `COPY . /cyanprint/`
   - Actual: Should copy to workspace path for consistency; extraction path is `/workspace/cyanprint`
   - Evidence: Production blob.Dockerfile shows `WORKDIR /workspace` and CMD extracts to `/workspace/cyanprint`

### Documentation Issues
1. **Inconsistent Bun version format**
   - Problem: Examples show `oven/bun:1.1.31-alpine` but actual codebase uses `oven/bun:1.1.31`
   - Location: Lines 26, 47, 203
   - Fix: Either use `-alpine` consistently or remove it to match actual Dockerfiles

2. **Wrong endpoint paths in Callout**
   - Problem: States `/init` and `/validate` instead of `/api/template/init` and `/api/template/validate`
   - Location: Line 93 (Callout)
   - Fix: Update to correct endpoint paths

3. **blob.Dockerfile example doesn't match real implementation**
   - Problem: Production blob example is significantly simpler than actual implementation
   - Location: Lines 104-122
   - Fix: Update to match actual multi-stage pattern with tar installation and COPY --from=build

4. **Missing .dockerignore files differ from actual**
   - Problem: Example .dockerignore doesn't match actual files used in templates
   - Location: Lines 176-188
   - Evidence: `iridium/e2e/template1/.dockerignore` contains `nix, examples, scripts, .github, .envrc, flake.lock, flake.nix, Taskfile.yaml, README.MD, **/node_modules/**, .git, .idea, .direnv, .DS_Store, .gitignore, .pre-commit-config.yaml, **/.idea/, **/bin/, **/obj/, **/node_modules/, **/env.`

### Other Problems
1. **Python SDK image size estimate**
   - Problem: Documentation lists `python:slim` at ~150MB but actual helium Python template uses `python:3.11-slim`
   - Recommendation: Verify actual image sizes or specify version

2. **.NET example uses generic names**
   - Problem: `CMD ["dotnet", "Template.dll"]` is a placeholder; actual implementation uses `ENTRYPOINT ["dotnet", "sulfone-helium-template-api.dll"]` and uses aspnet base, not runtime
   - Recommendation: Either clarify it's a conceptual example or update to match actual pattern (using `mcr.microsoft.com/dotnet/aspnet:8.0` as base with ENTRYPOINT)

3. **Minimal blob example may be misleading**
   - Problem: `COPY . /cyanprint/` doesn't match the extraction path convention of `/workspace/cyanprint`
   - Recommendation: Clarify when minimal blob is appropriate or update to consistent paths

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 7 |
| Documentation Issues | 4 |
| Other Problems | 3 |
