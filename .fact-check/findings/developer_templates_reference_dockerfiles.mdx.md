<!-- source: content/docs/developer/templates/reference/dockerfiles.mdx -->
# 📄 File: content/docs/developer/templates/reference/dockerfiles.mdx

> Reference documentation for template and blob Dockerfile configuration in CyanPrint templates. The documentation contains significant discrepancies when compared against actual source code from iridium e2e templates, helium SDK Dockerfiles, and the task-spec.md specification.

### 🔴 Source Code Inaccuracies
(for each: Documented | Actual | file:line evidence)

1. **Base Image for Template Dockerfiles** | Documented: `FROM node:20-alpine` | Actual: `FROM oven/bun:1.1.31` (e2e templates), `FROM oven/bun:1.0.30` (helium SDK), `FROM python:3.11-slim` (Python SDK), `FROM mcr.microsoft.com/dotnet/sdk:8.0` (.NET SDK) | iridium/e2e/template1/cyan/Dockerfile:1, helium/sdks/node/template.Dockerfile:1

2. **Package Manager Commands** | Documented: `RUN npm install` and `CMD ["node", "index.ts"]` | Actual: `RUN bun install` and `CMD ["bun", "run", "index.ts"]` | iridium/e2e/template1/cyan/Dockerfile:6,8

3. **Working Directory** | Documented: `WORKDIR /workspace` | Actual: `WORKDIR /app` | iridium/e2e/template1/cyan/Dockerfile:2

4. **Template Source Path (COPY Commands)** | Documented: `COPY cyan/package.json ./` and `COPY cyan/ ./` | Actual: Dockerfile is built from within the `cyan/` directory, so `COPY package.json .` and `COPY . .` are used | iridium/e2e/template1/cyan/Dockerfile:4-7, iridium/e2e/publish-template.sh:33-37

5. **Blob Dockerfile Structure** | Documented: Simple `COPY cyan/templates/ /templates/` pattern | Actual: Complex multi-stage build with tar archival: `RUN rm -rf cyan && mkdir -p /cyanprint/artifact && tar -czvf /cyanprint/artifact/cyan.tar.gz /src/` and `CMD [ "tar", "-xzf", "/cyanprint/artifact/cyan.tar.gz", "-C", "/workspace/cyanprint", "--strip-components=1" ]` | iridium/e2e/template1/blob.Dockerfile:8,14

6. **Blob Base Image** | Documented: `FROM alpine:latest` or `FROM scratch` | Actual: `FROM alpine:3.21 as base` | iridium/e2e/template1/blob.Dockerfile:1

7. **Directory Structure - cyan/templates/ Does Not Exist** | Documented: `COPY cyan/templates/ /templates/` | Actual: No `cyan/templates/` directory exists in any source project. Template files are in `template/` directory at the root level (sibling to `cyan/`) | iridium/e2e/template1/template/ directory exists, glob search confirmed no cyan/templates/

8. **cyan/static/ and cyan/configs/ Directories** | Documented: `COPY cyan/static/ /static/` and `COPY cyan/configs/ /configs/` | Actual: These directories do not exist in any source project | Glob search for **/cyan/static/** and **/cyan/configs/** returned no results

9. **Multi-Stage Build Example** | Documented: `RUN npm run build` and `COPY --from=builder /build/dist/ ./` | Actual: .NET SDK uses `dotnet publish` with different paths; Node templates use Bun without a build step | helium/sdks/dotnet/template.Dockerfile:14

10. **Missing LABEL Directive** | Documented: No LABEL directive in examples | Actual: `LABEL cyanprint.dev=true` is present in all e2e template Dockerfiles | iridium/e2e/template1/cyan/Dockerfile:3

11. **Missing SDK Port Documentation** | Documented: No mention of port 5550 | Actual: Template SDK hosts API on port 5550 for `/init` and `/validate` endpoints | spec/v1/CU-86et8z80y/task-spec.md:276-279

12. **Blob Destination Path Wrong** | Documented: `COPY cyan/templates/ /templates/` | Actual: Must extract to `/workspace/cyanprint/` (not `/templates/`) | spec/v1/CU-86et8z80y/task-spec.md:269-272

### 🟡 Documentation Issues
(for each: Problem | Location | Fix)

1. **Wrong Runtime Examples** | Documentation uses `node:20-alpine` and `npm` commands throughout (lines 25-81) | Update examples to use Bun (`oven/bun:1.1.31`) as the primary runtime, matching actual implementation

2. **Incorrect Directory Paths** | The `cyan/templates/` directory path is referenced throughout but does not exist | Lines 78, 92, 100, 112, 160, 165 | Update to reflect actual structure where template files are in `template/` at root level

3. **Non-existent Directories Documented** | The `cyan/static/` and `cyan/configs/` directories are documented but do not exist | Lines 101-102 | Remove these examples or clarify they are optional/conceptual

4. **Overly Simplified Blob Dockerfile** | Blob Dockerfile example doesn't match the actual tar-based archival implementation | Lines 87-113 | Update to show actual multi-stage tar-based pattern used in production

5. **Missing Required LABEL** | No `LABEL cyanprint.dev=true` directive in template Dockerfile examples | Lines 25-81 | Add LABEL directive to all examples as it's required

6. **Incomplete .dockerignore** | Example is minimal compared to actual implementation | Lines 143-151 | Expand to include common exclusions like `nix`, `.direnv`, `flake.nix`, etc.

7. **Inconsistent Best Practices** | Template Dockerfile section recommends Node.js while processor/plugin docs use Bun | Align with processor and plugin Dockerfile documentation which correctly use Bun

8. **Image Size Table Outdated** | Table references `node:alpine` and `node:slim` but actual implementation uses `oven/bun` | Lines 206-212 | Update table to include Bun image sizes

### 🟠 Other Problems
(for each: Problem | Recommendation)

1. **No Multi-Language SDK Coverage** | Documentation doesn't mention the different runtime options (Bun vs Node.js vs Python vs .NET) | Add a section showing Dockerfile patterns for different language SDKs with tabbed examples

2. **Build Context Not Explained** | Docs suggest building from project root with `-f cyan/template.Dockerfile`, but actual script builds from within `cyan/` directory | Clarify build context and path differences; add note about `./cyan` context vs repo root

3. **Inconsistent Terminology** | publish-template.sh uses `$template-script` naming, but docs call it "template image" | Clarify naming conventions between "template image" and "script image"

4. **Missing Container Path Context** | No explanation of `/workspace/cyanprint/` vs `/workspace` paths and their significance | Cross-reference or include content from container-paths.mdx for context

5. **No Debugging Guidance** | Missing guidance on how to debug Dockerfile issues locally | Add section on running containers locally to verify paths and configuration

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 12 |
| 🟡 | 8 |
| 🟠 | 5 |
