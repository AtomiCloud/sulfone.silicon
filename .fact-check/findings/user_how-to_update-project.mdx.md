<!-- source: content/docs/user/how-to/update-project.mdx -->
# 📄 File: content/docs/user/how-to/update-project.mdx

> Documentation accurately describes the `cyanprint update` command with correct CLI syntax, options, and environment variables. The update process steps align with source code implementation.

### 🔴 Source Code Inaccuracies
(None found)

### 🟡 Documentation Issues
1. **Update Process Steps Could Be More Precise** | Lines 27-31 | The documented 5-step process is a simplified summary. The actual implementation has 4 phases: (1) Read state and build specs, (2) MAP - execute templates to VFS, (3) LAYER - merge VFS outputs, (4) MERGE+WRITE - 3-way merge with local files and write. Consider updating to reflect the actual phase names for users who may see them in debug output.

### 🟠 Other Problems
1. **Missing debug flag documentation** | CLI Options table | The codebase supports a global `--debug` flag (see `commands.rs:20-24`) that can be useful for troubleshooting update issues. This is not documented in the CLI options or troubleshooting section.

2. **Troubleshooting could include more scenarios** | Troubleshooting section | Common issues like "No templates found in state file" (when `.cyan_state.yaml` exists but has no active templates) could be added based on the warning message in `orchestrator.rs:52-54`.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 1 |
| 🟠 | 2 |
