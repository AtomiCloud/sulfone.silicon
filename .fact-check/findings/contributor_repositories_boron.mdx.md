# File: content/docs/contributor/repositories/boron.mdx

> This documentation describes Boron as the execution coordinator for CyanPrint template execution. It covers the tech stack, architecture, API, job lifecycle, resource management, and configuration.

## Critical Issues - Documentation is Severely Outdated

The documentation describes Boron as a **Rust-based gRPC service**, but the actual implementation is a **Go-based REST API service**. Nearly all technical claims are incorrect.

---

### Source Code Inaccuracies

#### 1. Programming Language - CRITICAL
- **Documented**: Rust is the primary language
- **Actual**: Go 1.24.0
- **Evidence**: `go.mod` line 3: `go 1.24.0`; All source files use `.go` extension (`main.go`, `server.go`, `docker_executor/*.go`)

#### 2. Async Runtime - CRITICAL
- **Documented**: Tokio (Rust async runtime)
- **Actual**: Go's native goroutines and channels
- **Evidence**: `server.go` uses `go func()` for concurrency throughout (lines 333, 345, 359, etc.)

#### 3. API Framework - CRITICAL
- **Documented**: Tonic (gRPC server and client)
- **Actual**: Gin (HTTP REST framework)
- **Evidence**: `go.mod` line 9: `github.com/gin-gonic/gin v1.9.1`; `server.go` line 29: `r := gin.Default()`

#### 4. Container Management Library - CRITICAL
- **Documented**: bollard (Rust Docker library)
- **Actual**: Docker Docker SDK (official Go library)
- **Evidence**: `go.mod` line 8: `github.com/docker/docker v28.5.2+incompatible`; `docker_executor/docker.go` imports Docker SDK

#### 5. Database - CRITICAL
- **Documented**: SQLx for database access with PostgreSQL
- **Actual**: No database - stateless service using Docker for resource tracking
- **Evidence**: No SQLx dependency in `go.mod`; no database connection code in any source file

#### 6. API Protocol - CRITICAL
- **Documented**: gRPC with protobuf service definition:
  ```protobuf
  service Executor {
      rpc SubmitJob(JobRequest) returns (JobResponse);
      rpc GetJobStatus(JobStatusRequest) returns (JobStatus);
      rpc StreamJobOutput(JobStreamRequest) returns (stream FileChunk);
      rpc CancelJob(CancelRequest) returns (CancelResponse);
  }
  ```
- **Actual**: REST API with JSON over HTTP using Gin framework. Actual endpoints:
  - `GET /` - Health check
  - `POST /executor` - Start executor session
  - `POST /executor/:sessionId` - Build/execute with session
  - `DELETE /executor/:sessionId` - Clean up session
  - `POST /executor/:sessionId/warm` - Warm up executor
  - `POST /template/warm` - Warm up template
  - `POST /proxy/template/:cyanId/api/template/init` - Proxy to template
  - `POST /proxy/template/:cyanId/api/template/validate` - Proxy to template
  - `POST /merge/:sessionId` - Merge files
  - `POST /zip` - Create zip archive
- **Evidence**: `server.go` lines 30-614 define all REST endpoints

#### 7. Key Files Structure - CRITICAL
- **Documented**:
  - `src/main.rs` - Application entry point
  - `src/scheduler/` - Job scheduling logic
  - `src/executor/` - Container execution management
  - `src/api/` - gRPC API definitions
  - `src/resources/` - Resource limit management
- **Actual**:
  - `main.go` - Application entry point with CLI commands
  - `server.go` - HTTP REST API server
  - `model.go` - Request/response models
  - `docker_executor/` - Package with:
    - `docker.go` - Docker client operations
    - `executor.go` - Container execution logic
    - `template_executor.go` - Template-specific execution
    - `merger.go` - File merging operations
    - `registry.go` - Registry client
    - `model.go`, `models.go` - Data structures
    - `domain_model.go` - Domain types
- **Evidence**: Direct listing of `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/` directory

#### 8. Server Port - MAJOR
- **Documented**: `grpc_addr: "0.0.0.0:50051"`
- **Actual**: HTTP server on port 9000
- **Evidence**: `server.go` line 614: `_ = r.Run(":9000")`

#### 9. Network Name - MAJOR
- **Documented**: `network: "cyan-bridge"`
- **Actual**: Network name is `cyanprint`
- **Evidence**: `docker_executor/docker.go` line 24: `const networkName = "cyanprint"`

#### 10. Configuration File - MAJOR
- **Documented**: Complex YAML configuration with database URL, scheduler settings, resource limits:
  ```yaml
  server:
    grpc_addr: "0.0.0.0:50051"
  database:
    url: "postgresql://localhost/boron"
  container_runtime:
    socket: "/var/run/docker.sock"
    network: "cyan-bridge"
  scheduler:
    max_concurrent_jobs: 100
    job_timeout_default: "5m"
  resources:
    default_cpu: "1"
    default_memory: "512Mi"
  ```
- **Actual**: Configuration via command-line flags only:
  - `--registry` / `-r` for registry endpoint (default: `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`)
- **Evidence**: `main.go` lines 43-48 define CLI flags; no configuration file exists

#### 11. Build Commands - MAJOR
- **Documented**:
  ```bash
  cargo build
  cargo build --release
  cargo test
  cargo run -- --config config/local.yaml
  ```
- **Actual**:
  ```bash
  go build -o bin/sulfone-boron .
  go run . [args]
  go test ./...
  ```
- **Evidence**: `Taskfile.yaml` lines 46-52: `go build -o bin/{{.PLATFORM}}-{{.SERVICE}} .` and `go run . {{.CLI_ARGS}}`

#### 12. Job States/Lifecycle - MAJOR
- **Documented**: States: Queued -> Scheduled -> Running -> Streaming -> Completed/Failed/Timeout
- **Actual**: No explicit state machine. Sessions are created, warmed, executed, and cleaned. The lifecycle is:
  - Warm (pull images, create volumes)
  - Start (create containers for processors, plugins, merger)
  - Execute (via proxy endpoints or build endpoint)
  - Clean (remove containers and volumes)
- **Evidence**: `docker_executor/executor.go` shows `Warm()`, `Start()`, `Clean()` methods

#### 13. Resource Limits - MAJOR
- **Documented**: CPU, memory, and timeout limits with template overrides:
  ```yaml
  resources:
    cpu: "1"
    memory: "512Mi"
    timeout: "5m"
  ```
- **Actual**: No resource limits enforced. Uses host CPU count for parallelism limit:
  - `cpu := rt.NumCPU()` used for `ParallelismLimit`
- **Evidence**: `main.go` line 67 and `server.go` line 70: `cpu := rt.NumCPU()`

---

### Documentation Issues

#### 1. Incorrect Architecture Diagram
- **Problem**: The Mermaid diagram shows gRPC API -> Job Queue -> Scheduler -> Executor Pool with PostgreSQL
- **Location**: Architecture section
- **Fix**: Should show HTTP REST API -> Docker operations with no database

#### 2. Incorrect Job Lifecycle Diagram
- **Problem**: State diagram shows Queued/Scheduled/Running/Streaming/Timeout states that don't exist
- **Location**: Job Lifecycle section
- **Fix**: Remove or replace with actual session lifecycle (Warm -> Start -> Execute -> Clean)

#### 3. Incorrect Contributing Guidelines
- **Problem**: States "Ensure all async code is properly handled with Tokio"
- **Location**: Contributing section, point 1
- **Fix**: Should reference Go concurrency patterns (goroutines, channels, context)

#### 4. Outdated Description
- **Problem**: "The CyanPrint execution coordinator" is partially correct but doesn't mention it's specifically a Docker container orchestrator
- **Location**: Description field
- **Fix**: Update to "Docker-based execution coordinator that manages container lifecycle for CyanPrint template execution"

---

### Other Problems

#### 1. Missing API Documentation
- **Problem**: Actual REST API endpoints are not documented
- **Recommendation**: Document the actual REST endpoints with their request/response schemas based on `server.go`

#### 2. Missing CLI Commands
- **Problem**: CLI commands are not documented:
  - `start` - Start the server with optional registry flag
  - `setup` - Setup network
  - `s` - List Docker images (debug command)
- **Recommendation**: Document CLI usage in the Building/Running section

#### 3. Missing Tech Stack Items
- **Problem**: Actual tech stack includes:
  - urfave/cli/v2 - CLI framework
  - Google UUID - UUID generation
  - OpenTelemetry - Tracing (visible in go.mod)
- **Recommendation**: Update tech stack table with accurate dependencies

#### 4. Missing Workspace Paths
- **Problem**: Container workspace paths are not documented:
  - `/workspace/cyanprint` - Template volume mount
  - `/workspace/area` - Session/work volume mount
- **Recommendation**: Add container volume mount documentation

---

## Summary

| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 13 |
| Documentation Issues | 4 |
| Other Problems | 4 |

**Overall Assessment**: This documentation is **critically outdated** and appears to describe a completely different implementation. It documents a Rust/gRPC/PostgreSQL service that does not exist. The actual Boron is a Go/REST/Docker service with fundamentally different architecture, API, and configuration. A complete rewrite of this documentation is required.
