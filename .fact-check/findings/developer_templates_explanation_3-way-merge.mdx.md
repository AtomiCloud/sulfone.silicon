# File: content/docs/developer/templates/explanation/3-way-merge.mdx

> This document explains the 3-way merge functionality in CyanPrint for updating templates while preserving user modifications. While the core concepts are accurate, there are several discrepancies between the documentation and the actual implementation in the iridium codebase.

### Source Code Inaccuracies

1. **State Storage Directory Structure**
   - **Documented**: `.cyan/` directory with `generation.json` and `base/` subdirectory
   - **Actual**: `.cyan_state.yaml` single YAML file in the project root
   - **Evidence**: `iridium/cyancoordinator/src/template/history.rs:75` uses `target_dir.join(".cyan_state.yaml")`, and the state persistence documentation at `iridium/docs/developer/features/04-state-persistence.md:3` explicitly states "Stores template execution state...in `.cyan_state.yaml`"

2. **Command Name**
   - **Documented**: `cyanprint update ./my-project`
   - **Actual**: `pls update ./my-project` (the CLI tool is invoked via `pls` wrapper)
   - **Evidence**: `iridium/docs/developer/surfaces/cli/03-update.md:8` shows `pls update [path] [options]`

3. **Command Options**
   - **Documented**: `cyanprint update ./my-project myorg/template:2.0.0` and `--dry-run`
   - **Actual**: No template reference argument or `--dry-run` option exists. Available options are `--coordinator-endpoint`/`-c`, `--interactive`/`-i`
   - **Evidence**: `iridium/cyanprint/src/commands.rs:52-72` defines the Update command with only `path`, `coordinator_endpoint`, and `interactive` options

4. **Determinism API Syntax**
   - **Documented**: `const projectId = d.uuid(); // "abc-123"`
   - **Actual**: The API uses `determinism.get('key', () => origin_function)` pattern, not `d.uuid()`
   - **Evidence**: `helium/docs/developer/concepts/03-determinism.md:27-28` shows `determinism.get('project-id', () => randomUUID())` and the `IDeterminism` interface at `helium/sdks/node/src/domain/core/deterministic.ts:1-5` only has a `get(key: string, origin: () => string): string` method

5. **"Pin System" Terminology**
   - **Documented**: "The pin system ensures IDs remain consistent across updates"
   - **Actual**: The system uses "deterministic states" not "pin system". The term "pin" does not appear in the deterministic states documentation
   - **Evidence**: `iridium/docs/developer/concepts/04-deterministic-states.md` and `helium/docs/developer/concepts/03-determinism.md` refer to "deterministic states" and `deterministicStates`, not pins

6. **State File Metadata Content**
   - **Documented**: `generation.json` contains metadata
   - **Actual**: `.cyan_state.yaml` contains `templates` map with `active` flag, `history` array containing `version`, `time`, `answers`, and `deterministic_states`
   - **Evidence**: `iridium/docs/developer/features/04-state-persistence.md:75-89` shows the actual YAML structure

### Documentation Issues

1. **Incorrect Directory Structure Diagram**
   - **Problem**: The documented `.cyan/` directory structure does not match actual implementation
   - **Location**: Lines 43-49
   - **Fix**: Replace with actual state file format:
     ```yaml
     .cyan_state.yaml    # State file in project root
     ```

2. **Non-existent Command Arguments**
   - **Problem**: Documentation shows template reference argument and `--dry-run` option that don't exist
   - **Location**: Lines 182-191 (Update Command section)
   - **Fix**: Update to reflect actual command syntax:
     ```bash
     # Update to latest version
     pls update ./my-project

     # Update with interactive version selection
     pls update ./my-project --interactive

     # Update current directory
     pls update
     ```

3. **Incorrect Determinism Code Example**
   - **Problem**: Uses `d.uuid()` syntax which doesn't exist in the SDK
   - **Location**: Lines 167-173
   - **Fix**: Use correct API:
     ```ts
     // v1.0 generation
     const projectId = determinism.get('project-id', () => randomUUID()); // "abc-123"

     // v2.0 update with same deterministic states
     const projectId = determinism.get('project-id', () => randomUUID()); // "abc-123" - same!
     ```

4. **Misleading Terminology - "Pin System"**
   - **Problem**: Uses non-standard term "pin system" instead of "deterministic states"
   - **Location**: Lines 165, 225
   - **Fix**: Replace "pin system" with "deterministic states" to match actual codebase terminology

5. **Incorrect Terminology - "Base" Directory**
   - **Problem**: References "base/" directory for storing original files, but actual implementation stores state in YAML
   - **Location**: Lines 43-49, 53-57
   - **Fix**: The "base" version is reconstructed from stored answers and deterministic states during the update process, not stored as a file copy. Update the explanation to reflect this.

### Other Problems

1. **Missing CLI Tool Name Explanation**
   - **Problem**: Documentation uses `cyanprint update` but actual CLI is invoked via `pls` wrapper
   - **Recommendation**: Either explain that `pls` is the CLI wrapper for cyanprint, or use consistent command naming throughout

2. **Incomplete Update Flow Description**
   - **Problem**: The documented update process mentions "Read base - Load original generated files" but actual implementation regenerates the base from stored state
   - **Recommendation**: Clarify that the base version is regenerated using stored answers and deterministic states, not loaded from a file copy

3. **Missing Related Documentation Links**
   - **Problem**: The "Related" section links to determinism and client-state docs that may use different terminology
   - **Recommendation**: Ensure linked documentation uses consistent terminology (deterministic states vs pin system)

4. **Outdated Best Practice for Users**
   - **Problem**: "Keep base files - Don't delete `.cyan/`" references non-existent directory
   - **Recommendation**: Update to "Keep state file - Don't delete `.cyan_state.yaml`"

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 6 |
| Documentation Issues | 5 |
| Other Problems | 4 |
