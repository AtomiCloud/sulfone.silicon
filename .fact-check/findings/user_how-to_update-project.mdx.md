<!-- source: content/docs/user/how-to/update-project.mdx -->
# 📄 File: content/docs/user/how-to/update-project.mdx

> This is a minimal documentation page covering the `cyanprint update` command. The documentation is generally accurate but very brief and could benefit from more comprehensive information. No critical source code inaccuracies found.

### 🔴 Source Code Inaccuracies
None found. The documented commands and options match the source code implementation:
- `cyanprint update` command exists at `iridium/cyanprint/src/commands.rs:48-72`
- `-i, --interactive` flag exists with correct default value `false` at line 66-71
- Command implementation at `iridium/cyanprint/src/main.rs:192-227`
- 3-way merge mechanism confirmed in `iridium/docs/developer/surfaces/cli/03-update.md`

### 🟡 Documentation Issues

1. **Missing path argument documentation** | Location: CLI usage section | Fix: Document that `[path]` argument is optional (defaults to current directory `.`) - see `commands.rs:53-54` where `default_value = "."` is set

2. **Missing coordinator endpoint option** | Location: CLI usage section | Fix: Add `-c, --coordinator-endpoint` option documentation with default value `http://coord.cyanprint.dev:9000` - see `commands.rs:56-63`

3. **Missing CYANPRINT_COORDINATOR environment variable** | Location: CLI usage section | Fix: Document the `CYANPRINT_COORDINATOR` environment variable that can override the coordinator endpoint - see `commands.rs:61` (`env = "CYANPRINT_COORDINATOR"`)

4. **Brief/incomplete explanation** | Location: "How Updates Work" section | Fix: Expand with more details about what happens during update (reads `.cyan_state.yaml`, fetches latest templates, performs 3-way merge, writes merged files, cleans up sessions) - see `iridium/docs/developer/surfaces/cli/03-update.md` for comprehensive flow

5. **Missing state file reference** | Location: "How Updates Work" section | Fix: Mention that updates read from `.cyan_state.yaml` to determine template history and current versions - see `orchestrator.rs:39-41`

### 🟠 Other Problems

1. **Incomplete compared to developer docs** | The developer documentation at `iridium/docs/developer/surfaces/cli/03-update.md` contains significantly more detail (exit codes, flow diagrams, state file format, update detection behavior) that could be adapted for user documentation

2. **No troubleshooting information** | Recommendation: Add common issues and solutions (e.g., what happens if `.cyan_state.yaml` is missing, conflict resolution during 3-way merge)

3. **No examples section** | Recommendation: Add practical examples showing different update scenarios (basic update, interactive mode, updating a specific path)

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 5 |
| 🟠 | 3 |
