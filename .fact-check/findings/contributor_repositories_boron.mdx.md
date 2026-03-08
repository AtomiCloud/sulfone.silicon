<!-- source: content/docs/contributor/repositories/boron.mdx -->
# 📄 File: content/docs/contributor/repositories/boron.mdx

> Documentation for the Boron execution coordinator. Most technical claims are accurate but there are some minor discrepancies in Go version format, API endpoint behavior, and the CLI command structure.

### 🔴 Source Code Inaccuracies

1. **Go Version Format**
   - Documented: `Go 1.24`
   - Actual: `go 1.24.0` (with toolchain `go1.24.3`)
   - Evidence: `go.mod:3` - `go 1.24.0`

2. **CLI Command Structure**
   - Documented: `boron --registry <zinc-registry-endpoint>`
   - Actual: `sulfone-boron start --registry <zinc-registry-endpoint>` (uses subcommands)
   - Evidence: `main.go:18` - app name is `sulfone-boron`, `main.go:42-55` - registry flag is under `start` command

3. **Run Command**
   - Documented: `go run . --registry <registry-endpoint>`
   - Actual: `go run . start --registry <registry-endpoint>` (requires `start` subcommand)
   - Evidence: `main.go:42-55` - the `--registry` flag is defined under the `start` command

### 🟡 Documentation Issues

1. **Missing CLI Commands** | Location: Configuration section | Fix: Document all available CLI commands: `s` (image list), `start` (run server), `setup` (enforce network)

2. **Missing API Endpoint Details** | Location: API section | Fix: The `/merge/:sessionId` endpoint accepts `MergeReq` body with `fromDirs`, `toDir`, and `template` fields; the `/zip` endpoint accepts `ZipReq` with `target_dir` field

3. **Incomplete Container Types Description** | Location: Container Types section | Fix: Document that Template containers use port 5550, Processors use 5551, Plugins use 5552, and Mergers use 9000

4. **Default Registry Value** | Location: Configuration section | Fix: Document the default registry value `https://api.zinc.sulfone.raichu.cluster.atomi.cloud` which is set in `main.go:47`

5. **Health Check Timeout** | Location: Container Lifecycle section | Fix: Document that health checks use 60 maximum attempts with 1-second intervals

6. **Volume Paths** | Location: Volume Management section | Fix: Document that volumes are mounted at `/workspace/cyanprint` (read) and `/workspace/area` (write)

### 🟠 Other Problems

1. **Incomplete Architecture Diagram** | The diagram shows "Warm Container Pool" but the actual implementation does not maintain a warm pool - containers are created on demand. Consider updating the diagram to reflect actual behavior.

2. **Missing Setup Command Documentation** | The `setup` command enforces network creation but is not documented. It's a prerequisite step before running the server.

3. **Network Name** | The Docker network is named `cyanprint` (constant in `docker.go:24`), which should be mentioned in the Architecture section.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 6 |
| 🟠 | 3 |
