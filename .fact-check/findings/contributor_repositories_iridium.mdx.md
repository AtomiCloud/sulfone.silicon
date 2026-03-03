# File: content/docs/contributor/repositories/iridium.mdx

> Documentation for the CyanPrint CLI tool (Iridium), describing its architecture, commands, and configuration.

## Source Code Inaccuracies

### 1. Incorrect Key Files Directory Structure
**Documented**: The key files table lists `src/commands/`, `src/config/`, `src/api/`, and `src/executor/` directories
**Actual**: Only `commands.rs` (single file) exists. The directories `src/config/`, `src/api/`, and `src/executor/` do NOT exist.
**Evidence**:
- `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/` contains:
  - `commands.rs` (single file, not a directory)
  - `coord.rs`
  - `errors.rs`
  - `main.rs`
  - `run.rs`
  - `update.rs`
  - `update/` (directory with modular update system)
  - `util.rs`
- Directories `config/`, `api/`, `executor/` do not exist

### 2. Incorrect API Client Description
**Documented**: `src/api/` - API client for Zinc registry
**Actual**: The API client is in `cyanregistry/src/http/client.rs` (different crate)
**Evidence**: The `CyanRegistryClient` is defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/http/client.rs`

### 3. Incorrect Executor Communication Description
**Documented**: `src/executor/` - Communication with Boron executor
**Actual**: The coordinator client is in `cyancoordinator/src/client.rs` (different crate)
**Evidence**: The `CyanCoordinatorClient` is defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/client.rs`

### 4. Incorrect Commands - `init` Command Does Not Exist
**Documented**: `cyan print init <project-name> --template <template-id>`
**Actual**: The command is `cyanprint create <template-ref> [path]` (not `init`)
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46` shows `Create` subcommand with `template_ref` and optional `path` arguments

### 5. Incorrect Commands - `search` Command Does Not Exist
**Documented**: `cyan print search <query>` lists available templates
**Actual**: No `search` command exists in the CLI
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs` only defines: `Push`, `Create`, `Update`, `Daemon`

### 6. Incorrect Commands - `config` Command Does Not Exist
**Documented**: `cyan print config set <key> <value>`
**Actual**: No `config` command exists in the CLI
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs` only defines: `Push`, `Create`, `Update`, `Daemon`

### 7. Incorrect Commands - `auth login` Command Does Not Exist
**Documented**: `cyan print auth login`
**Actual**: No `auth` command exists. Authentication is handled via `--token` flag or `CYAN_TOKEN` environment variable
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:116-117` shows `#[arg(short, long, value_name = "API_TOKEN", env = "CYAN_TOKEN")] pub token: String`

### 8. Incorrect Binary Name
**Documented**: Commands use `cyan print` as the binary name
**Actual**: The binary is named `cyanprint` (single word, no space)
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/Cargo.toml:2` shows `name = "cyanprint"`

### 9. Incorrect Configuration File Path
**Documented**: Configuration stored in `~/.config/cyan-print/config.toml`
**Actual**: No configuration file at this path exists. Configuration is handled via CLI arguments and environment variables
**Evidence**: No code references `~/.config/cyan-print/` path. Configuration comes from:
  - `--registry` flag / `CYANPRINT_REGISTRY` env var
  - `--coordinator-endpoint` flag / `CYANPRINT_COORDINATOR` env var
  - `--token` flag / `CYAN_TOKEN` env variable

### 10. Incorrect Configuration File Format
**Documented**: TOML configuration file with `[registry]`, `[executor]`, `[auth]` sections
**Actual**: No configuration file is used. All settings are CLI flags or environment variables
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:9-24` shows registry is a CLI argument with env fallback, not a config file

### 11. Incorrect Default Registry URL
**Documented**: `url = "https://registry.cyanprint.dev"`
**Actual**: Default registry is `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:13` shows `default_value = "https://api.zinc.sulfone.raichu.cluster.atomi.cloud"`

### 12. Incorrect Default Coordinator URL
**Documented**: `url = "https://executor.cyanprint.dev"` with `timeout = "5m"`
**Actual**: Default coordinator is `http://coord.cyanprint.dev:9000` (no timeout in config)
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:42` shows `default_value = "http://coord.cyanprint.dev:9000"`

### 13. Incorrect Architecture Diagram - Missing Components
**Documented**: Architecture shows "Template Resolver", "Update Handler", "Registry Client", "Executor Client"
**Actual**: The actual components are:
  - `TemplateOperator` and `CompositionOperator` (in cyancoordinator)
  - `CyanRegistryClient` (in cyanregistry)
  - `CyanCoordinatorClient` (in cyancoordinator)
  - VFS system with 3-way merge
**Evidence**: See `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/run.rs` and `update.rs`

### 14. Missing Workspace Crate Structure
**Documented**: Only mentions `src/main.rs` as entry point
**Actual**: Iridium is a multi-crate workspace with 4 crates: `cyanprint`, `cyanprompt`, `cyanregistry`, `cyancoordinator`
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Cargo.toml:5-10` shows workspace members

### 15. Incorrect `update` Command Syntax
**Documented**: `cyan print update <project-name>`
**Actual**: `cyanprint update [path]` with optional `--interactive` flag
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:48-72` shows Update takes `path` (default: ".") and `--interactive` flag

## Documentation Issues

### 1. Missing Push Command Documentation
**Problem**: The `push` command is not documented at all
**Location**: Commands section
**Fix**: Add documentation for `push` subcommands:
  - `cyanprint push template <blob-image> <blob-tag> <template-image> <template-tag>`
  - `cyanprint push group` (for template groups without Docker artifacts)
  - `cyanprint push plugin <image> <tag>`
  - `cyanprint push processor <image> <tag>`

### 2. Missing Daemon Command Documentation
**Problem**: The `daemon` command is not documented
**Location**: Commands section
**Fix**: Add documentation for `cyanprint daemon [version] --port <PORT> --registry <URL>`

### 3. Missing Environment Variables Documentation
**Problem**: Environment variables are not documented
**Location**: Configuration section
**Fix**: Document `CYANPRINT_REGISTRY`, `CYANPRINT_COORDINATOR`, and `CYAN_TOKEN` environment variables

### 4. Outdated Architecture Description
**Problem**: Architecture diagram and description don't reflect the actual modular design
**Location**: Architecture section
**Fix**: Update to reflect the 4-crate workspace structure and actual component names

### 5. Missing Template State File Documentation
**Problem**: The `.cyan_state.yaml` file used for tracking template history is not mentioned
**Location**: Configuration section
**Fix**: Add documentation for the template state file format

### 6. Missing Interactive Mode Documentation
**Problem**: The `--interactive` flag for `update` command is not documented
**Location**: Commands section
**Fix**: Document the interactive version selection feature

### 7. Missing Debug Flag Documentation
**Problem**: The `--debug` / `-d` flag is not documented
**Location**: Commands section
**Fix**: Add documentation for the debug output flag

## Other Problems

### 1. Inconsistent Command Naming Convention
**Problem**: Documentation uses `cyan print` (two words) but actual binary is `cyanprint` (one word)
**Recommendation**: Update all command examples to use correct `cyanprint` binary name

### 2. Missing Crate Dependencies
**Problem**: Tech stack table misses key dependencies like `bollard` (Docker), `inquire` (prompts), `serde_yaml`, `chrono`
**Recommendation**: Update tech stack table to include all major dependencies

### 3. Missing Build Tooling Documentation
**Problem**: Documentation mentions `cargo` commands but project uses Nix and `pls` task runner
**Recommendation**: Add documentation for Nix development environment and `pls` commands

### 4. Repository URL May Be Incorrect
**Problem**: Documentation shows `github.com/AtomiCloud/sulfone.iridium` but this should be verified
**Recommendation**: Verify the actual GitHub repository URL

### 5. Missing Contributing Details
**Problem**: Contributing section is generic and doesn't mention project-specific requirements like `pls lint` mandate
**Recommendation**: Add project-specific contributing guidelines from LLM.MD

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 15 |
| Documentation Issues | 7 |
| Other Problems | 5 |
