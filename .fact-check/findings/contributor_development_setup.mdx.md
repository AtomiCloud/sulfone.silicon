# File: content/docs/contributor/development/setup.mdx

> This document covers development setup instructions for contributing to CyanPrint, including prerequisites, quick start guides, repository-specific setup, development workflow, code style, testing, IDE setup, and troubleshooting.

### Source Code Inaccuracies

1. **Boron language mismatch**
   - Documented: Boron is listed under "Rust (Iridium/Boron/Zinc)" and shows Rust commands (`cargo build`, `cargo test`)
   - Actual: Boron is a Go project, not Rust
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod` shows `module github.com/AtomiCloud/sulfone.boron` with `go 1.24.0`; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/main.go` contains Go code; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/Taskfile.yaml` shows `go build` and `go run` commands

2. **Zinc language mismatch**
   - Documented: Zinc is listed under "Rust (Iridium/Boron/Zinc)" and shows Rust commands (`cargo build`, `cargo test`, `sqlx migrate run`, `cargo run --bin seed`)
   - Actual: Zinc is a .NET/C# project, not Rust
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj` shows `<TargetFramework>net8.0</TargetFramework>`; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml` shows `dotnet` commands

3. **Boron setup instructions incorrect**
   - Documented: `docker-compose up -d postgres`, `sqlx migrate run`, `cargo run -- --config config/local.yaml`
   - Actual: No `config/local.yaml` exists, no postgres dependency, uses Go not Cargo
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/artifact/docker-compose.yml` shows only a `boron` service with no postgres; no `config/` directory exists in boron repository

4. **Zinc setup instructions incorrect**
   - Documented: `docker-compose up -d postgres elasticsearch`, `sqlx migrate run`, `cargo run --bin seed`, `cargo run`
   - Actual: Zinc uses `dotnet ef migrations` for migrations, Tilt for development, and k3d for local Kubernetes. No docker-compose, sqlx, or cargo
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml` shows `dotnet ef migrations` commands; no `docker-compose*.yml` files exist; no elasticsearch dependency found

5. **Iridium config/dev.toml does not exist**
   - Documented: `cp config/dev.toml ~/.config/cyan-print/config.toml`
   - Actual: No `config/` directory exists in the iridium repository
   - Evidence: `ls /Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/` shows no `config/` directory

6. **cargo-make not required for Iridium**
   - Documented: `cargo install cargo-make` as additional setup for Iridium
   - Actual: Iridium uses Taskfile (go-task) for task running, not cargo-make
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Taskfile.yaml` exists; no references to cargo-make found

7. **Helium Python SDK uses Poetry, not pip**
   - Documented: `pip install -e ".[dev]"` and `pytest`
   - Actual: Python SDK uses Poetry for dependency management
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/pyproject.toml` uses Poetry build system; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/Taskfile.yaml` shows `poetry install` and `poetry run python`

8. **Helium TypeScript SDK uses bun, not shown correctly**
   - Documented: Shows `bun install` and `bun run build` for TypeScript SDK under `packages/typescript`
   - Actual: The TypeScript SDK is under `sdks/node` not `packages/typescript`, and uses `bun install` but has no build script in Taskfile
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/Taskfile.yaml` shows setup with `bun install`; directory structure is `sdks/node` not `packages/typescript`

9. **Helium directory structure incorrect**
   - Documented: `cd packages/typescript`, `cd ../python`, `cd ../dotnet`
   - Actual: SDKs are under `sdks/` not `packages/`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/` contains `dotnet`, `node`, and `python` directories

10. **Argon uses bun, not shown correctly in prerequisite table**
    - Documented: Argon is TypeScript (correct), but implies npm compatibility
    - Actual: Argon uses bun exclusively (correct in tab but should be clearer)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml` shows `bun i`, `bun run dev`, `bun run build`

11. **Argon has no .env.example file**
    - Documented: `cp .env.example .env.local`
    - Actual: No `.env.example` file exists, only `.envrc` and `.env`
    - Evidence: Glob search found only `.envrc` and `.env` files, no `.env.example`

12. **Argon test command is different**
    - Documented: `bun run test`
    - Actual: The test command runs both integration and unit tests via npm script
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json` line 9 shows `"test": "npm run test:integration && npm run test:unit"`

13. **No docker-compose.test.yml exists**
    - Documented: `docker-compose -f docker-compose.test.yml up -d` for integration tests
    - Actual: No `docker-compose.test.yml` file found in any repository
    - Evidence: Glob search for `**/docker-compose.test.yml` returned no results

14. **Zinc has no seed binary**
    - Documented: `cargo run --bin seed` for Zinc
    - Actual: Zinc is .NET, not Rust, and has no seed command
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml` shows no seed-related commands

15. **Prerequisites language assignments incorrect**
    - Documented: Rust 1.75+ for Iridium, Boron, Zinc
    - Actual: Rust is only for Iridium; Boron uses Go 1.24; Zinc uses .NET 8.0
    - Evidence: See above evidence for each project

16. **Python prerequisite incomplete**
    - Documented: Python 3.11+ for Helium Python SDK
    - Actual: Correct, but should also mention Poetry as it's required for dependency management
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/pyproject.toml` shows Poetry build system

17. **Missing Go prerequisite**
    - Documented: No Go version listed
    - Actual: Go 1.24+ is required for Boron
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod` shows `go 1.24.0`

### Documentation Issues

1. **Missing Go language in tabs**
   - Problem: The Install Dependencies tabs group doesn't include Go (Boron)
   - Location: Lines 37-95
   - Fix: Add a new tab for Go with appropriate setup commands (`go mod tidy`, `go build`, `go test ./...`)

2. **Incorrect tab group label**
   - Problem: Tab label "Rust (Iridium/Boron/Zinc)" incorrectly groups three projects under Rust
   - Location: Line 38
   - Fix: Change to "Rust (Iridium)" and create separate tabs for Go (Boron) and .NET (Zinc)

3. **Repository-specific setup sections need reordering**
   - Problem: Boron and Zinc sections show incorrect commands for wrong languages
   - Location: Lines 116-149 (Boron), Lines 132-149 (Zinc)
   - Fix: Rewrite Boron section with Go commands and Zinc section with .NET commands

4. **Test commands table incorrect**
   - Problem: Boron shows `cargo test`, Zinc shows `cargo test`
   - Location: Lines 261-270
   - Fix: Boron should show `go test ./...` or `go test ./...`; Zinc should show `dotnet test`

5. **Code Style section missing Go**
   - Problem: No Go code style section for Boron
   - Location: Lines 221-253
   - Fix: Add Go section with `go fmt` and `golangci-lint` commands

6. **Code Style section incorrect for .NET**
   - Problem: No .NET code style section for Zinc
   - Location: Lines 221-253
   - Fix: Add .NET section with `dotnet format` command

7. **Argon lint command incorrect**
   - Problem: Shows `bun run lint:fix` or `biome lint --write .`
   - Actual: Argon uses eslint (no lint:fix script exists)
   - Location: Lines 237-240
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json` line 12 shows `"lint": "eslint"`

### Other Problems

1. **Python SDK pytest command may need Poetry wrapper**
   - Problem: Documentation shows `pytest` directly but Poetry manages the environment
   - Recommendation: Change to `poetry run pytest` for consistency with Poetry-based setup

2. **Iridium init command may be incorrect**
   - Problem: Documentation shows `cargo run -- init test-project`
   - Recommendation: Verify the CLI subcommand structure in the actual codebase

3. **Silicon setup already documented correctly**
   - The Silicon (documentation) setup section is accurate
   - Evidence: Commands match the current repository structure

4. **Integration test section lacks repository-specific details**
   - Problem: Generic integration test instructions may not apply to all repositories
   - Recommendation: Provide repository-specific integration test instructions or note which repos support them

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 17 |
| Documentation Issues | 7 |
| Other Problems | 4 |
