<!-- source: content/docs/contributor/development/setup.mdx -->

# File: content/docs/contributor/development/setup.mdx

> This documentation describes development setup for CyanPrint repositories, but contains multiple inaccuracies regarding technology stacks, configuration files, and commands. Several repositories use different languages and tools than documented.

### Source Code Inaccuracies

1. **Boron Technology Stack**

   - Documented: Rust project using `cargo build`, `cargo test`, `sqlx migrate run`
   - Actual: Go project (go 1.24.0), uses `go mod tidy`, `go build`, `go run`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod` line 1-5 shows `module github.com/AtomiCloud/sulfone.boron` and `go 1.24.0`. Taskfile.yaml line 31 shows `go mod tidy`, line 48 shows `go build`.

2. **Zinc Technology Stack**

   - Documented: Rust project using `cargo build`, `cargo test`, `sqlx migrate run`, with docker-compose for postgres and elasticsearch
   - Actual: .NET 8.0 project using `dotnet build`, `dotnet test`, Entity Framework migrations (`dotnet ef migrations`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj` line 4 shows `<TargetFramework>net8.0</TargetFramework>`. Taskfile.yml lines 18, 24, 30 use `dotnet ef migrations`.

3. **Iridium cargo-make Requirement**

   - Documented: Requires `cargo install cargo-make` for task running
   - Actual: Uses go-task (Taskfile.yaml), not cargo-make
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Taskfile.yaml` exists and defines tasks. No cargo-make references found.

4. **Iridium config/dev.toml File**

   - Documented: `cp config/dev.toml ~/.config/cyan-print/config.toml`
   - Actual: No `config/dev.toml` file exists in the repository
   - Evidence: Glob search for `**/dev.toml` and `**/config.toml` in iridium returned no files.

5. **Boron docker-compose for postgres**

   - Documented: `docker-compose up -d postgres`
   - Actual: docker-compose.yml exists at `artifact/docker-compose.yml` but only defines a boron service, no postgres service
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/artifact/docker-compose.yml` only defines `boron` service and `cyanprint` network.

6. **Boron local.yaml config**

   - Documented: `cargo run -- --config config/local.yaml`
   - Actual: No `config/local.yaml` file exists; Boron is Go-based, not Rust
   - Evidence: Glob search for `**/local.yaml` in boron returned no files.

7. **Zinc docker-compose for postgres and elasticsearch**

   - Documented: `docker-compose up -d postgres elasticsearch`
   - Actual: No docker-compose files found in zinc repository; uses Kubernetes/Helm charts
   - Evidence: Glob search for `**/*docker-compose*` in zinc returned no files.

8. **Zinc seed binary**

   - Documented: `cargo run --bin seed`
   - Actual: No seed binary exists; Zinc is .NET-based, not Rust
   - Evidence: Zinc uses Entity Framework migrations, not cargo.

9. **Argon .env.example file**

   - Documented: `cp .env.example .env.local`
   - Actual: No `.env.example` file exists in the repository
   - Evidence: Glob search for `**/.env.example*` in argon returned no files.

10. **Argon NEXT_PUBLIC_API_URL environment variable**

    - Documented: `# NEXT_PUBLIC_API_URL=http://localhost:8080`
    - Actual: No such variable used; actual .env uses AUTH_SECRET, DESCOPE_ID, DESCOPE_SECRET, PUBLIC_LANDSCAPE
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/.env` contains different variables.

11. **Helium TypeScript SDK directory structure**

    - Documented: `cd packages/typescript`
    - Actual: SDK located at `sdks/node`, not `packages/typescript`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/` exists.

12. **Helium Python SDK setup command**

    - Documented: `pip install -e ".[dev]"`
    - Actual: Uses poetry (`poetry install`)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/Taskfile.yaml` line 7 shows `poetry install`. pyproject.toml confirms poetry usage.

13. **Python pytest command**

    - Documented: `pytest` for testing
    - Actual: Uses poetry to run tests (`poetry run python template_test.py`)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/Taskfile.yaml` lines 19, 23 show poetry-based commands.

14. **Boron sqlx migrate run**

    - Documented: `sqlx migrate run` for database migrations
    - Actual: No sqlx usage; Boron is a Go project without sqlx migrations
    - Evidence: Grep for "sqlx" in boron returned no files. No migrations directory found.

15. **Zinc sqlx migrate run**

    - Documented: `sqlx migrate run` for database migrations
    - Actual: Uses Entity Framework Core migrations (`dotnet ef migrations`)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml` lines 14-30 show `dotnet ef migrations` commands.

16. **Silicon test command**
    - Documented: `bun run test` in testing table
    - Actual: No test script defined in package.json; silicon Taskfile has no test task
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon/package.json` has no "test" script. Taskfile.yaml only has setup, dev, build tasks.

### Documentation Issues

1. **Repository directory names incorrect**

   - Problem: Documentation uses `sulfone.REPO_NAME` and `cd sulfone.iridium` etc.
   - Location: Lines 30-33, 101-114, 118-130, 134-149, 153-165, 168-185, 188-201
   - Fix: Update to match actual repository directory structure

2. **Prerequisites table incorrect for Boron and Zinc**

   - Problem: Lists Rust 1.75+ for Iridium, Boron, Zinc but only Iridium uses Rust
   - Location: Lines 21-22
   - Fix: Update to show Go for Boron and .NET for Zinc

3. **VS Code extensions recommendations incomplete**

   - Problem: Recommends Rust and Python extensions but not Go extension for Boron
   - Location: Lines 293-304
   - Fix: Add Go extension for Boron development

4. **Integration tests section inaccurate**
   - Problem: Shows `cargo test --features integration` but this doesn't apply to Go or .NET projects
   - Location: Lines 272-285
   - Fix: Provide separate integration test commands per language/ecosystem

### Other Problems

1. **Code Style section incomplete**

   - Problem: Missing Go formatting section for Boron
   - Recommendation: Add Go section with `go fmt` and `golangci-lint` commands

2. **Helium SDK structure unclear**

   - Problem: Documentation shows `packages/typescript`, `packages/python`, `packages/dotnet` but actual structure is `sdks/node`, `sdks/python`, `sdks/dotnet`
   - Recommendation: Update directory paths to match actual structure

3. **Missing Nix/direnv setup documentation**

   - Problem: All repositories use Nix flakes and direnv for development environment, but this is not mentioned
   - Recommendation: Add section on Nix/direnv setup as it's used across all repositories

4. **Missing go-task (Task) documentation**
   - Problem: All repositories use Taskfile.yaml with go-task, but documentation focuses on cargo/npm/pip commands
   - Recommendation: Document go-task as the primary task runner and show `task setup`, `task dev`, `task build` commands

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 16    |
| Documentation Issues     | 4     |
| Other Problems           | 4     |
