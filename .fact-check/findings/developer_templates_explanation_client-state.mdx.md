# File: content/docs/developer/templates/explanation/client-state.mdx

> Documentation describing client state management for template executions, including state file structure, CLI commands, and best practices. The document describes storing state in `.cyan/generation.json` using JSON format.

### Source Code Inaccuracies

1. **State File Path Incorrect**
   - Documented: `.cyan/generation.json` (JSON file)
   - Actual: `.cyan_state.yaml` (YAML file)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/services.rs:58` - `let state_file_path = target_dir.join(".cyan_state.yaml");`

2. **State File Format Incorrect**
   - Documented: JSON format with `version`, `template`, `pin`, `answers`, `generated` fields at root level
   - Actual: YAML format with `templates` map containing template keys, each with `active` and `history` fields
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:6-24` shows the actual structure with `TemplateHistoryEntry`, `TemplateState`, and `CyanState` structs serialized as YAML

3. **"pin" Field Does Not Exist**
   - Documented: `"pin": "abc123-def456-ghi789"` - determinism seed at root level
   - Actual: `deterministic_states: HashMap<String, String>` inside each history entry (not a single "pin")
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:11` - `pub deterministic_states: HashMap<String, String>`

4. **Template Registry Field Not Stored**
   - Documented: `"registry": "https://registry.example.com"` inside template object
   - Actual: Registry is not stored in state file; template key is formatted as `username/template.name`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/services.rs:62` - `let template_key = format!("{}/{}", username, template.template.name);`

5. **"generated" Field Name Incorrect**
   - Documented: `"generated": "2024-01-15T10:30:00Z"`
   - Actual: `"time": "2024-01-15T10:30:00Z"` inside each history entry
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:9` - `pub time: DateTime<Utc>`

6. **Version Type Incorrect**
   - Documented: `"version": "1.0"` (string, schema version)
   - Actual: `version: i64` (integer, template version number)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:8` - `pub version: i64`

7. **Template Structure Incorrect**
   - Documented: `template.name` and `template.version` as nested object
   - Actual: Template is stored as a key in the `templates` map with format `username/template-name`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:21-24` - `pub templates: HashMap<String, TemplateState>`

8. **CLI Command Name Incorrect**
   - Documented: `cyanprint create`, `cyanprint regenerate`, `cyanprint update`
   - Actual: CLI is installed as `pls` (based on iridium documentation), commands are `pls create`, `pls update`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/surfaces/cli/02-create.md:8` - `pls create <template_ref> [path] [options]`

9. **"regenerate" Command Does Not Exist**
   - Documented: `cyanprint regenerate ./my-project`
   - Actual: No `regenerate` command exists. The `update` command handles re-runs when the same version is detected (RerunTemplate flow)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:27-72` - Only `Push`, `Create`, `Update`, `Daemon` commands exist

10. **Update Command Syntax Incorrect**
    - Documented: `cyanprint update ./my-project myorg/template:2.0.0` (with template argument)
    - Actual: `pls update [path]` - no template argument, reads from state file
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:52-72` - Update only takes `path` and options, no template argument

11. **Template Reference Format in State**
    - Documented: `"name": "myorg/my-template"` (combined format)
    - Actual: Template key is `username/template.name` (using template.name from API, not combined at input)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/services.rs:62`

12. **i.text() API Signature Incorrect**
    - Documented: `await i.text('Name?', 'project.name', '...')` with third parameter as default
    - Actual: `i.text(message: str, id: str, desc: Optional[str] = None)` - third parameter is description, not default value
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/inquirer.py:61` - `async def text(self, message: str, id: str, desc: Optional[str] = None) -> str:`

13. **No "registry" Field in State**
    - Documented: `"registry": "https://registry.example.com"` in template object
    - Actual: Registry endpoint is not persisted in state; it's configured via CLI args or environment variable
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:6-24` - No registry field in any model

### Documentation Issues

1. **Outdated State File Documentation**
   - Problem: The entire state file structure documented is based on an old/imagined JSON format
   - Location: Lines 12-29 (What is Client State section)
   - Fix: Update to reflect actual YAML structure from `iridium/cyancoordinator/src/state/models.rs`

2. **Mermaid Diagram References Non-existent Commands**
   - Problem: Flow diagram shows `cyanprint create` and `cyanprint update` but actual CLI uses `pls`
   - Location: Lines 117-132 (State Lifecycle diagram)
   - Fix: Change to `pls create` and `pls update`

3. **Missing Template History Concept**
   - Problem: Documentation doesn't explain that state tracks history of multiple executions per template
   - Location: Entire document
   - Fix: Add explanation of `history` array in state structure

4. **Incorrect Best Practice Examples**
   - Problem: Code examples show incorrect `i.text()` signature with default value parameter
   - Location: Lines 141-143, 162-166, 182-185
   - Fix: Update to correct signature showing `desc` parameter

5. **Missing "active" Field Documentation**
   - Problem: State structure includes `active: bool` field not mentioned in documentation
   - Location: State Structure section
   - Fix: Document the `active` field in TemplateState

### Other Problems

1. **Conceptual Mismatch with Determinism**
   - Problem: Documentation describes "pin" as a single determinism seed, but actual implementation uses `deterministic_states` as a HashMap for multiple keyed values
   - Recommendation: Rewrite the "Pin" section to explain `deterministic_states` as a collection of cached non-deterministic values keyed by string identifiers

2. **Missing Update Type Distinctions**
   - Problem: Documentation doesn't explain NewTemplate, UpgradeTemplate, and RerunTemplate update types
   - Recommendation: Add section explaining the three execution modes and how state determines which is used

3. **Multiple Templates Not Documented**
   - Problem: State file supports tracking multiple templates per project (composition), but this isn't explained
   - Recommendation: Add section on template composition and how state tracks multiple templates

4. **Related Links May Be Broken**
   - Problem: Links to `/developer/templates/explanation/determinism`, `/developer/templates/explanation/3-way-merge`, and `/developer/templates/how-to/use-keys` should be verified
   - Recommendation: Ensure these pages exist and accurately reflect current implementation

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 13 |
| Documentation Issues | 5 |
| Other Problems | 4 |
