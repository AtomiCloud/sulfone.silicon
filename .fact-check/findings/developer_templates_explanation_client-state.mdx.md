<!-- source: content/docs/developer/templates/explanation/client-state.mdx -->
# File: content/docs/developer/templates/explanation/client-state.mdx

> This document describes client state management but contains critical inconsistencies with other documentation files regarding the state file location, format, and command syntax.

### Source Code Inaccuracies

1. **State file location and format** | Documented: `.cyan/generation.json` (lines 12-29, 62) | Actual: `.cyan_state.yaml` | Evidence: `content/docs/user/reference/cli-commands.mdx:60` states "This command uses the `.cyan_state.yaml` file"; `content/docs/user/how-to/update-project.mdx:27` states "Loads `.cyan_state.yaml`"; `content/docs/developer/templates/reference/project-structure.mdx:194` shows `.cyan_state.yaml` as the output file

2. **State file JSON structure** | Documented: JSON format with `version`, `template`, `pin`, `answers`, `generated` fields (lines 14-28) | Actual: YAML format with different structure | Evidence: `content/docs/developer/templates/explanation/determinism.mdx:48-61` shows the actual YAML structure with `templates:` containing `active`, `history`, `answers`, and `deterministic_states` fields

3. **Template state field structure** | Documented: `template.registry` field (line 83-84) | Actual: Not present in the actual state structure | Evidence: `content/docs/developer/templates/explanation/determinism.mdx:48-61` shows no `registry` field within template info

4. **Pin storage location** | Documented: Top-level `pin` field in state (lines 88-93) | Actual: `deterministic_states` nested under template history | Evidence: `content/docs/developer/templates/explanation/determinism.mdx:58-60` shows `deterministic_states` as nested object within history entries

5. **Command `cyanprint regenerate`** | Documented: `cyanprint regenerate ./my-project` (line 42) | Actual: No `regenerate` command exists | Evidence: `content/docs/user/reference/cli-commands.mdx` lists only `create`, `update`, `daemon`, `push` commands; `content/docs/contributor/repositories/iridium.mdx:53-78` lists same commands without `regenerate`

6. **`cyanprint update` with template argument** | Documented: `cyanprint update ./my-project myorg/template:2.0.0` (line 54) | Actual: Update command does not accept a template reference argument | Evidence: `content/docs/user/reference/cli-commands.mdx:63` shows `cyanprint update [PATH]` with no template argument; `content/docs/contributor/repositories/iridium.mdx:61` shows same

### Documentation Issues

1. **Inconsistent state file location across docs** | Problem: This document uses `.cyan/generation.json` while 3-way-merge.mdx uses `.cyan/` directory (lines 44-48) with `generation.json` AND `base/` subdirectory, while CLI reference and update-project docs use `.cyan_state.yaml` | Location: Lines 12, 62, 190 | Fix: Standardize to actual format (`.cyan_state.yaml`) across all documentation

2. **Inconsistent directory structure for base files** | Problem: This document doesn't mention the `.cyan/base/` directory for storing original generated files, but 3-way-merge.mdx does (lines 44-48) | Location: State Structure section | Fix: Either clarify that `.cyan/base/` exists separately or document the complete state structure

3. **State lifecycle diagram inaccurate** | Problem: Mermaid diagram (lines 117-132) shows `F[Write .cyan/generation.json]` which is incorrect file name | Location: Lines 117-132 | Fix: Update to show `.cyan_state.yaml`

4. **Missing reference to deterministic_states** | Problem: Document mentions `pin` field but doesn't explain the `deterministic_states` structure that actually stores deterministic values | Location: Pin section (lines 88-93) | Fix: Reference the actual deterministic_states mechanism or clarify relationship

5. **Registry field in template example** | Problem: Example shows `registry` field in template object (line 83-84) which doesn't appear in actual state file structure | Location: Lines 79-85 | Fix: Remove or verify this field exists

6. **Command examples in Mermaid use incorrect command** | Problem: Diagram shows `cyanprint create` and `cyanprint update` flow but refers to non-existent regenerate flow | Location: Lines 117-132 | Fix: Verify and update command flow to match actual CLI behavior

### Other Problems

1. **Confusion between two state mechanisms** | Problem: The documentation appears to conflate two different state storage mechanisms - `.cyan/generation.json` (this doc) vs `.cyan_state.yaml` (other docs) vs `.cyan/base/` (3-way-merge). This creates confusion about what actually exists. | Recommendation: Audit all documentation to establish canonical state file format and location, then update all references consistently

2. **Missing cross-reference to actual state file docs** | Problem: This document should cross-reference the determinism.mdx which shows the actual `.cyan_state.yaml` structure | Recommendation: Add explicit link to determinism.mdx or merge content

3. **Key storage explanation inconsistent with actual behavior** | Problem: States that answers are stored "by key" (line 97) but doesn't clarify that keys are actually stored in `answers` object within `history` array under template name | Recommendation: Update to match actual YAML structure from determinism.mdx

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 6 |
| Documentation Issues | 6 |
| Other Problems | 3 |
