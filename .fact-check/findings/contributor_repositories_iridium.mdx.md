<!-- source: content/docs/contributor/repositories/iridium.mdx -->
# 📄 File: content/docs/contributor/repositories/iridium.mdx

> Fact-check findings for Iridium documentation. Most structural claims are accurate, but push command syntax is significantly wrong. The binary name `cyanprint` is correctly used throughout.

### 🔴 Source Code Inaccuracies

1. **Push command syntax for template is incorrect**
   - Documented: `cyanprint push template <path>`
   - Actual: `cyanprint push template <blob_image> <blob_tag> <template_image> <template_tag> --config <path> --token <token> [--message <msg>]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:122-130` - Template subcommand requires `blob_image`, `blob_tag`, `template_image`, `template_tag` as positional arguments, not a single path.

2. **Push command syntax for group is incomplete**
   - Documented: `cyanprint push group <path>`
   - Actual: `cyanprint push group --config <path> --token <token> [--message <msg>]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:131-132` - Group subcommand takes no positional arguments. Config path is provided via `--config` flag (from PushArgs).

3. **Push command syntax for plugin is incorrect**
   - Documented: `cyanprint push plugin <path>`
   - Actual: `cyanprint push plugin <image> <tag> --config <path> --token <token> [--message <msg>]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:133-137` - Plugin subcommand requires `image` and `tag` as positional arguments.

4. **Push command syntax for processor is incorrect**
   - Documented: `cyanprint push processor <path>`
   - Actual: `cyanprint push processor <image> <tag> --config <path> --token <token> [--message <msg>]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:138-142` - Processor subcommand requires `image` and `tag` as positional arguments.

5. **Daemon command missing --registry flag in documentation**
   - Documented: `cyanprint daemon`
   - Actual: `cyanprint daemon [version] [--port <port>] [--registry <url>]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:74-97` - Daemon command has optional `version` (default: "latest"), `--port` (default: 9000), and `--registry` flags.

### 🟡 Documentation Issues

1. **Missing required --token flag for push commands**
   - Problem: The push commands require `--token` (or `CYAN_TOKEN` env var) but this is not shown in the examples.
   - Location: Lines 67-71 (Push command examples)
   - Fix: Add `--token <token>` or mention `CYAN_TOKEN` environment variable requirement.

2. **Missing --config flag documentation**
   - Problem: Push commands use `--config` flag (default: "cyan.yaml") but documentation shows positional path argument.
   - Location: Lines 67-71
   - Fix: Update examples to show `--config cyan.yaml` syntax instead of positional `<path>`.

3. **Inaccurate key file path for update submodules**
   - Problem: Documentation lists `cyanprint/src/update.rs` AND `cyanprint/src/update/` as separate entries, but `update.rs` is a thin wrapper that re-exports from `update/` submodules. The actual implementation is in `update/orchestrator.rs`, `update/spec.rs`, `update/version_manager.rs`, `update/operator_factory.rs`.
   - Location: Lines 43-47 (Key Files table)
   - Fix: Either merge these entries or be more specific about what each contains.

### 🟠 Other Problems

1. **Crate descriptions could be more precise**
   - Problem: The crate purpose descriptions are accurate but could be more specific. `cyancoordinator` is described as "Coordinator client for Boron communication" but it also handles file system operations (VFS, unpacking, merging, writing).
   - Recommendation: Expand the description to mention file system operations, or add a note about the crate's broader scope.

2. **Tech stack table is missing some dependencies**
   - Problem: The tech stack table lists major dependencies but omits others that are significant (e.g., `serde`, `serde_json`, `serde_yaml` for serialization, `chrono` for datetime handling, `uuid` for session IDs, `futures`/`futures-util`).
   - Recommendation: Consider adding a "Key Dependencies" note or expand the table with additional important crates.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 3 |
| 🟠 | 2 |
