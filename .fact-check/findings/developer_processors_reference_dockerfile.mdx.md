<!-- source: content/docs/developer/processors/reference/dockerfile.mdx -->
# 📄 File: content/docs/developer/processors/reference/dockerfile.mdx

> This document describes Dockerfile configuration for CyanPrint processors. The documentation is generally accurate but contains some inaccuracies regarding version numbers, lockfile handling conventions, and missing information about Python/.NET processor Dockerfiles.

### 🔴 Source Code Inaccuracies

1. **Documented Bun version `1.1.31` is inconsistent with actual processor Dockerfiles**
   - Documented: `FROM oven/bun:1.1.31` (lines 15, 90, 101, 150, 206, 221)
   - Actual: Real processors use varying versions:
     - `ketone.default-processor/Dockerfile`: uses `oven/bun:1.1.31`
     - `ketone/new-cyanprint/processor/typescript/Dockerfile`: uses `oven/bun:1.3.8`
     - `iridium/e2e/processor1/Dockerfile` and `processor2/Dockerfile`: use `oven/bun:1.0.11`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/ketone.default-processor/Dockerfile:1`, `/Users/erng/Workspace/atomi/runbook/platforms/ketone/new-cyanprint/processor/typescript/Dockerfile:1`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:1`

2. **Documented lockfile pattern `bun.lockb*` does not match source practice**
   - Documented: `COPY package.json bun.lockb* ./` (lines 23, 94, 212, 234)
   - Actual: Source Dockerfiles use separate COPY commands without the glob wildcard:
     - All processor Dockerfiles in iridium/e2e use `COPY package.json .` followed by `COPY bun.lockb .`
     - ketone.default-processor uses same pattern
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:4-5`, `/Users/erng/Workspace/atomi/runbook/platforms/ketone/ketone.default-processor/Dockerfile:4-5`

3. **Documented `--frozen-lockfile` flag usage inconsistent with source**
   - Documented: `RUN bun install --frozen-lockfile` (lines 24, 95, 190, 212, 235)
   - Actual: All source Dockerfiles use `RUN bun install` without the `--frozen-lockfile` flag
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:6`, `/Users/erng/Workspace/atomi/runbook/platforms/ketone/ketone.default-processor/Dockerfile:6`

4. **Missing Python processor Dockerfile documentation**
   - Documented: Only Bun and Node.js examples provided
   - Actual: Python processors exist with different Dockerfile pattern:
     ```dockerfile
     FROM python:3.12.12
     WORKDIR /app
     LABEL cyanprint.dev=true
     COPY requirements.txt .
     RUN pip install --no-cache-dir -r requirements.txt
     COPY . .
     CMD ["python", "-u", "main.py"]
     ```
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/new-cyanprint/processor/python/Dockerfile`

5. **Missing .NET processor Dockerfile documentation**
   - Documented: Only Bun and Node.js examples provided
   - Actual: .NET processors use multi-stage build with explicit port 5551:
     ```dockerfile
     FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
     WORKDIR /app
     FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
     ARG TARGETARCH
     WORKDIR /src
     COPY ["Processor.csproj", "./"]
     RUN dotnet restore -a $TARGETARCH "Processor.csproj"
     COPY . .
     WORKDIR "/src/"
     RUN dotnet build "Processor.csproj" -a $TARGETARCH -c Release -o /app/build
     FROM build AS publish
     RUN dotnet publish "Processor.csproj" -a "$TARGETARCH" -c Release -o /app/publish /p:UseAppHost=false
     FROM base AS final
     LABEL cyanprint.dev=true
     ENV ASPNETCORE_URLS=http://+:5551
     WORKDIR /app
     COPY --from=publish /app/publish .
     ENTRYPOINT ["dotnet", "Processor.dll"]
     ```
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/new-cyanprint/processor/dotnet/Dockerfile`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium-processor-api/Dockerfile`

### 🟡 Documentation Issues

1. **Minimal Dockerfile example should clarify it's a template, not a mandate**
   - Problem: The "Minimal Dockerfile" section presents specific patterns as required, but actual implementations vary significantly across languages
   - Location: Lines 14-31
   - Fix: Add language clarifying this is a recommended starting point for Bun/TypeScript processors, and that Python/.NET have different patterns

2. **Multi-stage build example uses potentially non-existent image variant**
   - Problem: The `oven/bun:1.1.31-slim` image reference in line 101 may not be valid; official Bun images typically use `-alpine` suffix for slim variants
   - Location: Line 101
   - Fix: Verify the slim variant exists or use `-alpine` variant consistently as shown in Full Example (line 206, 221)

3. **CMD variations not fully documented across languages**
   - Problem: Documentation shows `CMD ["bun", "run", "index.ts"]` but Python uses `CMD ["python", "-u", "main.py"]` and .NET uses `ENTRYPOINT ["dotnet", "Processor.dll"]`
   - Location: Lines 53-61
   - Fix: Add CMD/ENTRYPOINT examples for Python and .NET processors in a language comparison table

4. **Port 5551 requirement not mentioned**
   - Problem: Processor SDKs listen on port 5551 by default, but this is not documented in the Dockerfile reference. For .NET processors, the `ASPNETCORE_URLS=http://+:5551` environment variable is required.
   - Location: Entire document
   - Fix: Add section explaining that processors must expose port 5551 (handled automatically by Bun/Python SDKs), but .NET requires explicit `ENV ASPNETCORE_URLS=http://+:5551`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:89`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/main.py:119`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium-processor-api/Dockerfile:17`

5. **Health check example may not work as documented**
   - Problem: `HEALTHCHECK CMD bun -e "process.exit(0)"` may not be valid bun command syntax - bun doesn't have a `-e` flag like Node.js
   - Location: Lines 242-243
   - Fix: Verify bun one-liner syntax or use a different health check approach (e.g., `curl -f http://localhost:5551/` or remove the example)

### 🟠 Other Problems

1. **Inconsistent version recommendations across documentation**
   - Problem: Documentation recommends specific Bun version `1.1.31`, but actual codebase uses various versions (`1.0.11`, `1.1.31`, `1.3.8`)
   - Recommendation: Either update to current stable version (1.3.8 as of ketone/new-cyanprint) or add guidance on version selection criteria

2. **Missing `.dockerignore` file location guidance**
   - Problem: Documentation mentions creating `.dockerignore` but doesn't specify where it should be located in the processor project structure
   - Recommendation: Add reference to project structure documentation or include example showing `.dockerignore` at processor root

3. **Alpine variant usage inconsistent between examples**
   - Problem: "Full Example" uses `oven/bun:1.1.31-alpine` but "Minimal Dockerfile" uses `oven/bun:1.1.31` (Debian-based), and "Multi-Stage Build" uses non-existent `oven/bun:1.1.31-slim`
   - Recommendation: Recommend Alpine consistently for smaller image sizes, or explain the trade-offs between Debian and Alpine variants

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 5 |
| 🟠 | 3 |
