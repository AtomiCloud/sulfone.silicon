<!-- source: content/docs/contributor/repositories/iridium.mdx -->

# File: content/docs/contributor/repositories/iridium.mdx

> Major inaccuracies found in CLI command names, directory structure, configuration paths, and default URLs. The documentation does not match the current implementation.

### Source Code Inaccuracies

1. **Documented**: CLI commands `cyan print init`, `cyan print update`, `cyan print search`, `cyan print config set`, `cyan print auth login`
   **Actual**: Commands are `cyanprint push`, `cyanprint create`, `cyanprint update`, `cyanprint daemon` (no init, search, config, or auth commands)
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:28-98` - The actual Commands enum contains Push, Create, Update, and Daemon variants only.

2. **Documented**: Directory structure includes `src/main.rs`, `src/commands/`, `src/config/`, `src/api/`, `src/executor/`
   **Actual**: Source structure is `src/main.rs`, `src/commands.rs`, `src/run.rs`, `src/update.rs`, `src/coord.rs`, `src/util.rs`, `src/errors.rs`, and `src/update/` subdirectory. No `config/`, `api/`, or `executor/` directories exist.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/` directory listing shows actual files.

3. **Documented**: Tech stack lists Clap, Tokio, Reqwest
   **Actual**: Correct, but missing key dependencies: `bollard` (Docker), `inquire` (interactive prompts), `serde_yaml`, `chrono`, `uuid`, `futures`, `rand`
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/Cargo.toml:8-25`

4. **Documented**: Configuration file at `~/.config/cyan-print/config.toml` with registry URL `https://registry.cyanprint.dev`, executor URL `https://executor.cyanprint.dev`
   **Actual**: No configuration file is read from `~/.config/cyan-print/config.toml`. Configuration is done via environment variables (`CYANPRINT_REGISTRY`, `CYANPRINT_COORDINATOR`, `CYAN_TOKEN`) and command-line arguments. Default registry is `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`, default coordinator is `http://coord.cyanprint.dev:9000`.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:9-23,41-44,56-61,91-96,116` - Environment variables and default values defined inline in clap arguments. No `~/.config` path found in codebase.

5. **Documented**: `cyan print init <project-name> --template <template-id>`
   **Actual**: Command is `cyanprint create <template-ref> [path]` with `--coordinator-endpoint` option. Uses template reference format (user/name:version), not `--template` flag.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46`

6. **Documented**: Architecture diagram shows "Registry Client" connecting to "Zinc API" and "Executor Client" connecting to "Boron"
   **Actual**: The terminology is partially correct but the diagram oversimplifies. There is a `CyanRegistryClient` (in cyanregistry crate) for Zinc and `CyanCoordinatorClient` (in cyancoordinator crate) for the coordinator. The coordinator communicates with Boron containers.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:7-9,29-33` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/http/client.rs`

7. **Documented**: `RUST_LOG=debug cargo run -- init my-project`
   **Actual**: Should be `RUST_LOG=debug cargo run -- create <template-ref>` (not init, and requires template reference, not project name)
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46`

### Documentation Issues

1. **Problem**: The documentation states this is "The CyanPrint CLI tool" but the actual binary name is `cyanprint` (not `cyan print`)
   **Location**: Title and Commands section
   **Fix**: Update all command examples to use `cyanprint` as a single word, not `cyan print`

2. **Problem**: Missing documented commands that don't exist: `search`, `config set`, `auth login`
   **Location**: Commands section (lines 37-52)
   **Fix**: Remove non-existent commands and document actual commands: `push` (with subcommands: template, group, plugin, processor), `create`, `update`, `daemon`

3. **Problem**: Configuration section is entirely fictional - no config file at `~/.config/cyan-print/config.toml`
   **Location**: Configuration section (lines 84-98)
   **Fix**: Document actual configuration via environment variables (`CYANPRINT_REGISTRY`, `CYANPRINT_COORDINATOR`, `CYAN_TOKEN`) and command-line flags

4. **Problem**: Iridium is a Rust workspace with 4 crates (cyanprint, cyanprompt, cyanregistry, cyancoordinator), not a single Rust project
   **Location**: Tech Stack and Key Files sections
   **Fix**: Update documentation to reflect workspace structure with member crates

5. **Problem**: Missing mention of Docker dependency (bollard) - critical for the `daemon` command
   **Location**: Tech Stack table
   **Fix**: Add Docker/bollard to the tech stack as it's essential for running coordinators locally

### Other Problems

1. **Problem**: The repository structure documentation is outdated - mentions `src/api/` and `src/executor/` directories that don't exist
   **Recommendation**: Update Key Files table to reflect actual structure: `src/coord.rs` (coordinator client), `src/run.rs` (template execution), `src/update/` (update logic), and note the separate crates for registry (cyanregistry) and coordinator (cyancoordinator) functionality

2. **Problem**: No mention of the subcommands for `push` (template, group, plugin, processor)
   **Recommendation**: Document the push subcommands as they are significant features for publishing different artifact types

3. **Problem**: Missing documentation for the `--interactive` flag on `update` command
   **Recommendation**: Document the `--interactive` flag which allows selecting specific versions during updates

4. **Problem**: Missing documentation for the `--debug` flag available on all commands
   **Recommendation**: Document the global `-d` / `--debug` flag for enabling debug output

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 7     |
| Documentation Issues     | 5     |
| Other Problems           | 4     |
