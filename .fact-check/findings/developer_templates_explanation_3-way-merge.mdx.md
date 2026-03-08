<!-- source: content/docs/developer/templates/explanation/3-way-merge.mdx -->
# 📄 File: content/docs/developer/templates/explanation/3-way-merge.mdx

> This document describes 3-way merge for template updates. The concept exists in the codebase but several implementation details are inaccurate.

### 🔴 Source Code Inaccuracies

1. **Directory Structure** | Documented: `.cyan/generation.json` and `.cyan/base/` | Actual: `.cyan_state.yaml` (single YAML file, no separate base directory) | iridium/docs/developer/features/04-state-persistence.md:75-89

2. **Update Command - Version Argument** | Documented: `cyanprint update ./my-project myorg/template:2.0.0` (supports specifying template reference) | Actual: `cyanprint update [path]` - no template reference argument supported | iridium/cyanprint/src/commands.rs:52-72

3. **Update Command - Dry Run** | Documented: `cyanprint update ./my-project --dry-run` | Actual: `--dry-run` option does not exist in the CLI | iridium/cyanprint/src/commands.rs:52-72 (no dry-run flag defined)

4. **Merge Algorithm Flow** | Documented: "Compare Base vs Ours" then "Compare Base vs Theirs" decision tree | Actual: Uses git2 library to create temporary git repository with three branches (base, current, incoming) and performs a real git merge | iridium/cyancoordinator/src/fs/merger.rs:134-300

5. **Base Files Storage** | Documented: Base files stored in `.cyan/base/` directory | Actual: Base VFS is regenerated from stored answers/deterministic_states in `.cyan_state.yaml`, not persisted as files | iridium/docs/developer/features/04-state-persistence.md:77-89

6. **Command Name** | Documented: Uses `cyanprint` | Actual: Correct - binary is `cyanprint` | iridium/cyanprint/src/main.rs confirms this

### 🟡 Documentation Issues

1. **Misleading Directory Tree** | The `.cyan/` directory structure shown at lines 43-49 does not match actual implementation. The state is stored in `.cyan_state.yaml`, not in a `.cyan/` directory with `generation.json` and `base/` subdirectory. | Lines 43-49 | Replace with `.cyan_state.yaml` file structure showing templates, history, answers, and deterministic_states

2. **Missing CLI Command Prefix** | The update command examples use `cyanprint update` which is correct, but the source documentation in iridium uses `pls update`. The document correctly uses `cyanprint`. | N/A | No change needed, but ensure consistency

3. **Update Process Steps Incomplete** | The documented 5-step update process (Read base, Read ours, Generate theirs, Merge, Report conflicts) is simplified. The actual process includes: BUILD specs, MAP (execute templates), LAYER (merge VFS), MERGE (3-way with local), WRITE | Lines 52-57 | Update to reflect actual batch_process flow: PHASE 1 BUILD -> PHASE 2-4 BATCH PROCESS (MAP -> LAYER -> MERGE+WRITE)

4. **Conflict Marker Format** | Documented: Uses `<<<<<<< OURS` and `>>>>>>> THEIRS` | Actual: Git2 standard conflict markers are used, which are `<<<<<<<`, `=======`, `>>>>>>>` (the labels may differ) | iridium/cyancoordinator/src/fs/merger.rs:262-268

### 🟠 Other Problems

1. **Terminology Mismatch** | The document uses "Ours/Theirs" terminology while the codebase uses "current/incoming". Consider aligning terminology or noting the equivalence. | Recommendation: Add a note clarifying that "Ours" = "current/local" and "Theirs" = "incoming"

2. **Missing Rename Detection Feature** | The actual merger supports configurable rename detection with similarity threshold (0-100), which is not mentioned in the documentation. | iridium/cyancoordinator/src/fs/merger.rs:231-233 | Recommendation: Document the rename detection capability

3. **Fast-Forward Case Not Documented** | The merge algorithm handles three cases: up-to-date, fast-forward, and normal merge. Only normal merge with conflicts is documented. | iridium/cyancoordinator/src/fs/merger.rs:242-299 | Recommendation: Document all three merge scenarios

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 6 |
| 🟡 | 4 |
| 🟠 | 3 |
