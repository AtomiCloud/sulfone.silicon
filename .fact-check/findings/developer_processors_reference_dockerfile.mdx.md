<!-- source: content/docs/developer/processors/reference/dockerfile.mdx -->
# 📄 File: content/docs/developer/processors/reference/dockerfile.mdx

> Document covers Dockerfile patterns for processor containers. Most patterns are accurate, but Bun version examples are outdated compared to actual codebase. The .NET port configuration statement is misleading - .NET SDK does not automatically configure port 5551, it relies on the ASPNETCORE_URLS environment variable.

### 🔴 Source Code Inaccuracies
1. **Bun version examples outdated**
   - Documented: `FROM oven/bun:1.3.8` and "Current stable versions include `1.3.8` and later"
   - Actual: Source code Dockerfiles use `oven/bun:1.0.11` (iridium/e2e/processor1, processor2, plugin1) and `oven/bun:1.1.31` (iridium/e2e/template1, template2, template3)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:1` uses `FROM oven/bun:1.0.11`

2. **.NET SDK port claim is misleading**
   - Documented: ".NET SDK: Requires explicit configuration: `ENV ASPNETCORE_URLS=http://+:5551`"
   - Actual: The .NET SDK `StartProcessor` method does NOT set any port - it just calls `app.Run()` without a URL, relying entirely on external configuration (like ASPNETCORE_URLS environment variable). The SDK itself does not automatically listen on 5551.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Server.cs:96` - `app.Run()` with no URL parameter for processor, contrasted with `app.Run("http://0.0.0.0:5553")` for resolver (line 182)

3. **Python version example may be outdated**
   - Documented: `FROM python:3.12.12`
   - Actual: No Python Dockerfile examples found in the source repositories to verify this version
   - Evidence: No Dockerfile with Python base image found in boron, iridium, zinc, helium, or argon repos

### 🟡 Documentation Issues
1. **Version pinning recommendation inconsistent with examples**
   - Problem: The doc recommends `oven/bun:1.3.8` but none of the actual project Dockerfiles use this version
   - Location: Lines 15, 146, 158, 208, 275, 291
   - Fix: Update to match actual versions in use (e.g., `1.1.31` or later) or note that these are example versions

2. **.dockerignore example suggests excluding bun.lockb**
   - Problem: The `.dockerignore` example includes `bun.lockb` but the Dockerfile best practices section says to include lockfile
   - Location: Lines 236-243
   - Fix: Remove `bun.lockb` from the `.dockerignore` example or clarify the distinction

3. **Multi-stage build example copies node_modules incorrectly**
   - Problem: `COPY --from=builder /app/node_modules ./node_modules` suggests copying node_modules from builder, but the builder stage runs `bun build` which creates a bundled output - typically you wouldn't need node_modules in this case
   - Location: Lines 164-166
   - Fix: Either remove the node_modules copy (if truly bundled) or clarify when it's needed

### 🟠 Other Problems
1. **Missing LABEL example for cyanprint.name**
   - Problem: The boron Dockerfile uses `LABEL cyanprint.name="sulfone-boron"` but this is not documented as a recommended label
   - Recommendation: Consider documenting additional useful labels like `cyanprint.name` for better container identification

2. **Inconsistent spacing in CMD examples**
   - Problem: Some CMD examples have spaces inside brackets `[ "bun", ... ]` while others don't `["bun", ...]`
   - Recommendation: Standardize formatting throughout the document

3. **No alpine variant used in minimal example**
   - Problem: The "Minimal Dockerfile" uses `oven/bun:1.3.8` (non-alpine) but multi-stage example uses `-alpine` variant
   - Recommendation: Consider recommending `-alpine` variants for smaller image sizes in all examples

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 3 |
| 🟠 | 3 |
