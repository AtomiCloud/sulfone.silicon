<!-- source: content/docs/user/reference/cli-commands.mdx -->
# 📄 File: content/docs/user/reference/cli-commands.mdx

> This CLI reference documents the CyanPrint CLI commands but contains several inaccuracies when compared to the actual source code implementation in iridium/cyanprint. Key issues include missing global options, incorrect default values, missing environment variable documentation, and incomplete push command documentation.

### 🔴 Source Code Inaccuracies

1. **Global Option `-V, --version` - Not Explicitly Defined**
   - Documented: `-V, --version` flag to print version
   - Actual: No explicit `-V` short flag defined. The `--version` flag works via clap's default `#[command(version)]` attribute, but `-V` is not a valid short flag.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:4` - Shows `#[command(author, version, about = ...)]` without explicit `-V` short flag.

2. **Global Option `-r, --registry` - Missing Default Value**
   - Documented: No default value shown in Global Options table
   - Actual: Default is `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:13` - `default_value = "https://api.zinc.sulfone.raichu.cluster.atomi.cloud"`

3. **Global Option `-r, --registry` - Missing Environment Variable**
   - Documented: No environment variable mentioned for `-r, --registry`
   - Actual: `CYANPRINT_REGISTRY` environment variable is supported
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:14` - `env = "CYANPRINT_REGISTRY"`

4. **`create` Command - Missing Environment Variable for `--coordinator-endpoint`**
   - Documented: No environment variable mentioned
   - Actual: `CYANPRINT_COORDINATOR` environment variable is supported
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:43` - `env = "CYANPRINT_COORDINATOR"`

5. **`update` Command - Missing Environment Variable for `--coordinator-endpoint`**
   - Documented: No environment variable mentioned
   - Actual: `CYANPRINT_COORDINATOR` environment variable is supported
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:60` - `env = "CYANPRINT_COORDINATOR"`

6. **`daemon` Command - Missing `--registry` Option**
   - Documented: Only `-p, --port` option listed for daemon command
   - Actual: The daemon command also supports `--registry` option with default `https://api.zinc.sulfone.raichu.cluster.atomi.cloud` and `CYANPRINT_REGISTRY` env var
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:88-96`

7. **`push` Command - Missing `push group` Subcommand**
   - Documented: Only `push template`, `push processor`, `push plugin` are documented
   - Actual: `push group` command exists for pushing template groups (meta-templates with no Docker artifacts)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:131-132` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:89-108`

8. **`push` Command - Missing `--config` Option**
   - Documented: Not mentioned
   - Actual: `-c, --config <CONFIG_PATH>` with default `cyan.yaml`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:105` - `#[arg(short, long, value_name = "CONFIG_PATH", default_value = "cyan.yaml")] pub config: String`

9. **`push` Command - Missing `--message` Option**
   - Documented: Not mentioned
   - Actual: `-m, --message <PUBLISH_MESSAGE>` with default `No description`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:108-113` - `#[arg(short, long, value_name = "PUBLISH_MESSAGE", default_value = "No description")] pub message: String`

10. **`push` Command - Missing `--token` Environment Variable**
    - Documented: Only `--token <TOKEN>` shown in examples
    - Actual: `CYAN_TOKEN` environment variable is supported
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:116` - `env = "CYAN_TOKEN"`

11. **`push template` - Incorrect Option Placement in Syntax**
    - Documented: `cyanprint push template --token <TOKEN> <BLOB_IMG> <BLOB_TAG> <TEMPLATE_IMG> <TEMPLATE_TAG>`
    - Actual: Options belong to `push` command, not the subcommand: `cyanprint push --token <TOKEN> template <BLOB_IMAGE> <BLOB_TAG> <TEMPLATE_IMAGE> <TEMPLATE_TAG>`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:100-118` - PushArgs is the parent struct containing `token`, `config`, `message` before PushCommands subcommand

### 🟡 Documentation Issues

1. **Short Flag `-c` Conflict Not Explained**
   - Problem: `-c` is used for `--coordinator-endpoint` in `create`/`update` but for `--config` in `push`
   - Location: Options tables throughout document
   - Fix: Note the context-dependent meaning of `-c` or use full flag names in examples

2. **Template Reference Format Not Explained**
   - Problem: The `create` command uses `<TEMPLATE_REF>` but doesn't explain the format `<username>/<name>:<version>`
   - Location: `cyanprint create` Arguments table
   - Fix: Add explanation of template reference format with version being optional

3. **Push Command Options Table Missing**
   - Problem: The push subcommands should show the correct option structure with `--config`, `--message`, `--token` as global push options
   - Location: `cyanprint push` section
   - Fix: Add an Options table for the `push` command itself showing `--config`, `--message`, `--token`

4. **Missing Exit Codes Documentation**
   - Problem: Source code and docs show exit codes (0 for success, 1 for errors) but not documented here
   - Location: Throughout the document
   - Fix: Add exit codes section for each command

5. **Missing State File Documentation for `update`**
   - Problem: The `update` command works with `.cyan_state.yaml` but this isn't mentioned
   - Location: `cyanprint update` section
   - Fix: Add brief mention of state file handling and 3-way merge behavior

### 🟠 Other Problems

1. **Environment Variables Not Documented**
   - Problem: Three environment variables are supported (`CYANPRINT_REGISTRY`, `CYANPRINT_COORDINATOR`, `CYAN_TOKEN`) but none are documented
   - Recommendation: Add a dedicated "Environment Variables" section listing all supported environment variables

2. **Command Aliases Not Documented**
   - Problem: Commands have short aliases (`p` for push, `c` for create, `u` for update, `d` for daemon) but not shown
   - Recommendation: Add alias information to command headers or a dedicated "Command Aliases" section

3. **Binary Name Inconsistency**
   - Problem: The documentation uses `cyanprint` as the binary name, but the source docs mention `pls` as a development alias
   - Recommendation: Add a note explaining that `pls` is a development alias for `cargo run` while `cyanprint` is the installed binary name

4. **Missing Prerequisites for `daemon` Command**
   - Problem: The daemon command requires Docker to be running, but this prerequisite isn't documented
   - Recommendation: Add a "Prerequisites" section for the daemon command noting Docker is required

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 11 |
| 🟡 | 5 |
| 🟠 | 4 |
