<!-- source: content/docs/developer/templates/explanation/determinism.mdx -->
# 📄 File: content/docs/developer/templates/explanation/determinism.mdx

> Documentation explaining determinism in CyanPrint templates. The document correctly describes the `IDeterminism` interface with `d.get(key, origin)` pattern and the `.cyan_state.yaml` state file format. However, there are inconsistencies with other documentation files and the CLI command reference.

### 🔴 Source Code Inaccuracies
1. **Update command syntax with template reference** | Documented: `cyanprint update ./my-project myorg/template:2.0.0` (line 37) | Actual: CLI reference shows `cyanprint update [PATH]` without template reference argument | Evidence: `content/docs/user/reference/cli-commands.mdx:62-64` shows only `cyanprint update [PATH]` with no template reference; `content/docs/user/how-to/update-project.mdx:9-17` shows only path argument, no template reference

### 🟡 Documentation Issues
1. **Cross-document inconsistency with pin-determinism.mdx** | Problem: This document correctly shows `d.get(key, origin)` pattern, but `content/docs/developer/templates/how-to/pin-determinism.mdx` documents non-existent methods `d.uuid()`, `d.timestamp()`, `d.seq()` (lines 17-18, 47-53, 60-78) | Location: Lines 65-77 | Fix: The pin-determinism.mdx file needs to be updated to use the correct `d.get(key, origin)` pattern, or the SDK needs to document these methods if they exist

2. **Cross-document inconsistency with 3-way-merge.mdx** | Problem: `content/docs/developer/templates/explanation/3-way-merge.mdx` uses `d.uuid()` method (lines 169, 172) which is not documented in SDK types | Location: This document is consistent with SDK but inconsistent with sibling docs | Fix: Update 3-way-merge.mdx to use `d.get('key', () => crypto.randomUUID())` pattern

3. **Update command dry-run option not documented in CLI reference** | Problem: This document and 3-way-merge.mdx show `cyanprint update ./my-project --dry-run` but CLI reference doesn't document this option | Location: Line 190 in 3-way-merge.mdx | Fix: Either add `--dry-run` to CLI reference or remove from example

4. **State file format differs from 3-way-merge.mdx** | Problem: This document correctly shows `.cyan_state.yaml` format (line 49), but 3-way-merge.mdx shows `.cyan/generation.json` and `.cyan/base/` directory (lines 43-49) | Location: Line 49 | Fix: Update 3-way-merge.mdx to use correct `.cyan_state.yaml` format

### 🟠 Other Problems
1. **Related link to pin-determinism may confuse readers** | Problem: The "Pin Determinism" how-to guide linked at line 212 uses completely different API (`d.uuid()`, `d.timestamp()`, `d.seq()`) which contradicts this document's `d.get()` pattern | Recommendation: Either update pin-determinism.mdx to match this document's API or add a note explaining version differences

2. **Mermaid diagram uses internal term** | Problem: Diagram references "deterministic_states" but doesn't explain what it is before the diagram | Location: Lines 167-174 | Recommendation: The diagram is technically correct but could be clearer by referencing the earlier YAML example

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 4 |
| 🟠 | 2 |
