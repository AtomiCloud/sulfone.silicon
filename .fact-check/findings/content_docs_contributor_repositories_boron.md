<!-- source: content/docs/contributor/repositories/boron.mdx -->

# 📄 File: content/docs/contributor/repositories/boron.mdx

> Documentation describes Boron as a Rust-based gRPC service, but the actual implementation is a Go HTTP/REST service using Gin framework. Multiple structural and API claims are incorrect.

### 🔴 Source Code Inaccuracies

1. **Tech Stack - Primary Language**

   - Documented: Rust as primary language
   - Actual: Go 1.24 (see `go.mod` line 3: `go 1.24.0`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod:3`

2. **Tech Stack - Async Runtime**

   - Documented: Tokio (Rust async runtime)
   - Actual: No Tokio; Go uses goroutines natively
   - Evidence: No Cargo.toml or Rust files exist; project uses Go concurrency

3. **Tech Stack - gRPC Framework**

   - Documented: Tonic (Rust gRPC framework)
   - Actual: No gRPC; uses Gin HTTP framework
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod:9` shows `github.com/gin-gonic/gin v1.9.1`

4. **Tech Stack - Database Access**

   - Documented: SQLx
   - Actual: No SQLx; no database access layer exists in the codebase
   - Evidence: No SQL/database imports in `go.mod` or any `.go` files

5. **Tech Stack - Missing Actual Technologies**

   - Documented: Tokio, Tonic, SQLx
   - Actual: Uses `urfave/cli/v2` for CLI, `docker/docker` client, `google/uuid`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod:7-12`

6. **Key Files Structure**

   - Documented: `src/main.rs`, `src/scheduler/`, `src/executor/`, `src/api/`, `src/resources/`
   - Actual: `main.go`, `server.go`, `model.go` at root; `docker_executor/` package containing `docker.go`, `executor.go`, `merger.go`, etc.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/` directory listing

7. **API Protocol**

   - Documented: gRPC with `Executor` service
   - Actual: REST HTTP API using Gin framework
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:28-614` shows Gin routes like `r.GET("/")`, `r.POST("/executor")`, `r.DELETE("/executor/:sessionId")`

8. **API Endpoints**

   - Documented: `SubmitJob`, `GetJobStatus`, `StreamJobOutput`, `CancelJob` gRPC methods
   - Actual: REST endpoints: `GET /`, `POST /executor`, `DELETE /executor/:sessionId`, `POST /executor/:sessionId`, `POST /executor/:sessionId/warm`, `POST /template/warm`, `POST /proxy/template/:cyanId/api/template/init`, `POST /proxy/template/:cyanId/api/template/validate`, `POST /merge/:sessionId`, `POST /zip`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:30-612`

9. **Server Port**

   - Documented: gRPC on port 50051
   - Actual: HTTP on port 9000
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:614` shows `r.Run(":9000")`

10. **Configuration File Format**

    - Documented: `boron-config.yaml` with `server.grpc_addr`, `database.url`, etc.
    - Actual: No configuration file used; uses CLI flags (e.g., `--registry` flag)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/main.go:43-55` shows CLI-based configuration

11. **Docker Network Name**

    - Documented: `cyan-bridge`
    - Actual: `cyanprint`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:24` shows `const networkName = "cyanprint"`

12. **Resource Management**

    - Documented: CPU/memory limits and timeouts via YAML configuration
    - Actual: No resource limit configuration; only `ParallelismLimit` based on `runtime.NumCPU()`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/main.go:67` shows `cpu := rt.NumCPU()`

13. **Database**

    - Documented: PostgreSQL database for job queue
    - Actual: No database; state managed in-memory and via Docker
    - Evidence: No database imports in go.mod, no database connection code

14. **Build Commands**
    - Documented: `cargo build`, `cargo test`, `cargo run`
    - Actual: Go build commands: `go build`, `go test`, `go run`
    - Evidence: Project is Go-based, uses `go.mod`

### 🟡 Documentation Issues

1. **Incorrect Architecture Diagram**

   - Problem: Architecture diagram shows "gRPC API" connecting to "Job Queue" with PostgreSQL
   - Location: Lines 36-56 (Mermaid diagram)
   - Fix: Replace with REST HTTP API, remove PostgreSQL, show Gin framework and Docker executor pattern

2. **Incorrect Job Lifecycle States**

   - Problem: Shows states "Queued", "Scheduled", "Running", "Streaming", "Completed", "Failed", "Timeout"
   - Location: Lines 73-84 (Mermaid state diagram)
   - Fix: Actual lifecycle involves Warm -> Start -> Execute -> Clean phases with no explicit queueing

3. **Incorrect Resource Limits Example**

   - Problem: Shows YAML configuration for resource limits that doesn't exist
   - Location: Lines 90-103
   - Fix: Remove or describe actual parallelism-based execution model

4. **Incorrect Configuration Example**

   - Problem: Shows `boron-config.yaml` with database URL and gRPC address
   - Location: Lines 123-142
   - Fix: Document actual CLI-based configuration with `--registry` flag

5. **Incorrect Contributing Guidelines**
   - Problem: References Tokio async handling and protobuf documentation
   - Location: Lines 146-152
   - Fix: Reference Go goroutines, Gin framework, and REST API documentation instead

### 🟠 Other Problems

1. **Missing Key Features Documentation**

   - Problem: Documentation doesn't mention actual features: template warming, processor/plugin execution, merger functionality, file zipping
   - Recommendation: Add documentation for actual endpoints like `/template/warm`, `/merge/:sessionId`, `/zip`

2. **Missing Proxy Functionality**

   - Problem: No mention of the proxy routes for template initialization and validation
   - Recommendation: Document `/proxy/template/:cyanId/api/template/init` and `/proxy/template/:cyanId/api/template/validate` endpoints

3. **Missing Registry Integration**

   - Problem: No mention of how boron connects to the Zinc registry for image resolution
   - Recommendation: Document the `--registry` flag and default registry endpoint

4. **Container Types Not Documented**

   - Problem: Actual implementation supports multiple container types (template, processor, plugin, merger) but this isn't documented
   - Recommendation: Document the different container types and their roles

5. **Volume Management Not Documented**
   - Problem: Boron manages Docker volumes for workspace isolation but this isn't mentioned
   - Recommendation: Add section on volume management and the `DockerVolumeReference` system

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 14    |
| 🟡       | 5     |
| 🟠       | 5     |
