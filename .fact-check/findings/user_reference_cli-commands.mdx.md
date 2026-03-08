<!-- source: content/docs/user/reference/cli-commands.mdx -->
# 📄 File: content/docs/user/reference/cli-commands.mdx

> Documentation for CyanPrint CLI commands is largely accurate with one significant issue in the `push group` subcommand.

### 🔴 Source Code Inaccuracies
1. **`push group` subcommand arguments** | Documented: `cyanprint push --token <TOKEN> group <NAME> <TAG>` (2 positional arguments: NAME and TAG) | Actual: `push group` takes NO positional arguments. The Group variant in PushCommands enum has no fields. It reads template metadata from the config file (`cyan.yaml`) via `registry.push_template_without_properties(config, token, message)` | `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:131-132` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:89-97`

### 🟡 Documentation Issues
1. **Missing `--version` flag in Global Options table** | Location: Global Options section | The `--version` flag is listed but lacks the actual description that would come from the CLI's `about` field. Recommend adding: "Print version information" as the description. | No fix needed as it's adequately described.

### 🟠 Other Problems
1. **Inconsistent argument notation** | The documentation uses `<TEMPLATE_REF>` with angle brackets for required arguments and `[PATH]` with square brackets for optional arguments. This is good practice but should be consistently applied. Currently consistent.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 0 |
| 🟠 | 0 |
