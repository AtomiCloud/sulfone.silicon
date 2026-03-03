<!-- source: content/docs/developer/plugins/reference/dockerfile.mdx -->
# 📄 File: content/docs/developer/plugins/reference/dockerfile.mdx

> Documentation for configuring Dockerfiles for CyanPrint plugins. Covers base images, required labels, entry points, optimization techniques, environment variables, and port configuration.

### 🔴 Source Code Inaccuracies

1. **Bun version in examples doesn't match actual plugin implementations**
   - **Documented**: `FROM oven/bun:1.1.31` (used in all examples)
   - **Actual**: Plugin Dockerfiles in iridium e2e tests use `FROM oven/bun:1.0.11`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/Dockerfile:1` both use `oven/bun:1.0.11`

2. **COPY command syntax differs from actual implementations**
   - **Documented**: `COPY package.json bun.lockb* ./` (with wildcard for optional lockb)
   - **Actual**: `COPY package.json .` followed by `COPY bun.lockb .` (separate commands without wildcard)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:4-5`

3. **Optimization flags not used in actual implementations**
   - **Documented**: Examples show `bun install --frozen-lockfile` and `bun install --production`
   - **Actual**: All plugin Dockerfiles in iridium e2e tests use plain `bun install` without any flags
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:6` - `RUN bun install`

4. **Multi-stage build not used in actual implementations**
   - **Documented**: Shows multi-stage builds with builder pattern and `oven/bun:1.1.31-slim` runtime stage
   - **Actual**: No plugin Dockerfiles in the iridium e2e tests use multi-stage builds
   - **Evidence**: All Dockerfiles in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin*` use single-stage builds

5. **Alpine/slim variants not used in actual plugin implementations**
   - **Documented**: Shows `oven/bun:1.1.31-alpine` and `oven/bun:1.1.31-slim` variants
   - **Actual**: Plugin Dockerfiles use the default Debian-based image without variant suffix
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:1` - `FROM oven/bun:1.0.11` (no variant suffix)

6. **Environment variable PLUGIN_TIMEOUT not found in source code**
   - **Documented**: `ENV PLUGIN_TIMEOUT=300` shown as example
   - **Actual**: No source code references to `PLUGIN_TIMEOUT` environment variable exist in helium SDK or boron executor
   - **Evidence**: Grep search of `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium` found no matches for `PLUGIN_TIMEOUT`

### 🟡 Documentation Issues

1. **Label description could be more precise about filtering mechanism**
   - **Problem**: Documentation says label "identifies the image as a CyanPrint component" but doesn't mention it's specifically used for Docker image filtering
   - **Location**: "CyanPrint Label" section
   - **Fix**: Add context that boron uses `f.Add("label", "cyanprint.dev=true")` to filter/list CyanPrint images via Docker API
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:46`

2. **Port section could include specific endpoint information**
   - **Problem**: Documentation mentions port 5552 and EXPOSE directive but doesn't mention the specific API endpoint `/api/plug`
   - **Location**: "Port Configuration" section
   - **Fix**: Document that plugins serve the POST `/api/plug` endpoint on port 5552
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:68` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:223`

3. **Example .dockerignore includes bun.lockb which contradicts Dockerfile**
   - **Problem**: .dockerignore example lists `bun.lockb` to be excluded, but the Dockerfile examples expect to copy `bun.lockb*`
   - **Location**: ".dockerignore" section, line 154
   - **Fix**: Remove `bun.lockb` from .dockerignore example or clarify when it should/shouldn't be excluded

4. **Additional tools example uses apt-get but doesn't clarify image compatibility**
   - **Problem**: The "With Additional Tools" example shows `apt-get` but doesn't clarify this only works with Debian-based images, not Alpine
   - **Location**: "With Additional Tools" section
   - **Fix**: Add note that apt-get requires Debian-based images; for Alpine use `apk add`

5. **.dockerignore example is more comprehensive than actual implementations**
   - **Problem**: Documented .dockerignore has 18+ entries including node_modules, .git, docs, IDE files, OS files, env files, test files
   - **Actual**: .dockerignore files in iridium only contain 3 entries: `node_modules`, `.idea`, `.vscode`
   - **Location**: ".dockerignore" section
   - **Fix**: Either simplify the example or clarify it's a recommended comprehensive template
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/.dockerignore:1-3`

### 🟠 Other Problems

1. **Version inconsistency across documentation and implementations**
   - **Problem**: Documentation uses Bun `1.1.31`, actual e2e plugins use `1.0.11`, templates use `1.1.31`
   - **Recommendation**: Consider documenting the recommended Bun version or explaining version selection criteria

2. **Size optimization table lacks empirical evidence**
   - **Problem**: Size optimization savings percentages (e.g., "~100MB", "~20%", "~30%") are not backed by actual measurements
   - **Recommendation**: Add actual measured savings or mark as approximate estimates based on testing

3. **Multi-stage build CMD inconsistency**
   - **Problem**: In "Multi-stage Build" example, runtime stage CMD uses `index.ts` but the builder compiled to `dist/index.js`. Later the copy is `COPY --from=builder /app /app` which would include source, making the build step redundant
   - **Recommendation**: Either show proper compiled output usage or simplify to direct copy pattern

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 6 |
| 🟡 | 5 |
| 🟠 | 3 |
