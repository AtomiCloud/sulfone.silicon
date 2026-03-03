<!-- source: content/docs/developer/templates/explanation/index.mdx -->
# 📄 File: content/docs/developer/templates/explanation/index.mdx

> Index file for CyanPrint template explanation documentation. Contains navigation links, high-level Mermaid diagram, and FAQ-style key questions. Multiple significant discrepancies found between documentation and actual source code.

### 🔴 Source Code Inaccuracies

1. **State File Location (client-state.mdx, linked from index)**
   - Documented: `.cyan/generation.json`
   - Actual: `.cyan_state.yaml`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/services.rs:58` - `let state_file_path = target_dir.join(".cyan_state.yaml");`

2. **State File Structure (client-state.mdx, linked from index)**
   - Documented: JSON format with `version`, `template`, `pin`, `answers`, `generated` fields
   - Actual: YAML format with `templates` HashMap containing `TemplateState` objects with `active` and `history` fields
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:20-24` - `pub struct CyanState { #[serde(flatten)] pub templates: HashMap<String, TemplateState> }`

3. **Deterministic Methods (determinism.mdx, linked from index)**
   - Documented: `d.uuid()`, `d.timestamp()`, `d.seq()` methods on IDeterminism interface
   - Actual: IDeterminism interface defined in external `@atomicloud/cyan-sdk` package. E2e templates import IDeterminism but never invoke methods on `d`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:2` - `import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';` - `d` parameter never used

4. **Built-in Plugin Names (processors-vs-plugins.mdx, linked from index)**
   - Documented: `cyan/init-git` and `cyan/npm-install` as built-in plugins
   - Actual: No evidence of these plugins in source code. E2e tests use custom plugins like `ernest/plugin1`
   - Evidence: No matches found in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/` for `cyan/init-git` or `cyan/npm-install`

5. **GlobType.Ignore (cyan-object.mdx, linked from index)**
   - Documented: `GlobType.Ignore` as a valid file group type
   - Actual: Source code only defines `GlobType::Template()` and `GlobType::Copy()` - no `Ignore` variant
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:4-7` - `pub enum GlobType { Template(), Copy() }`

### 🟡 Documentation Issues

1. **Unverifiable SDK Interfaces**
   - Problem: Documentation describes `IInquirer`, `IDeterminism`, `IProcessor`, `IPlugin`, `ICyanConfig` interfaces with specific methods, but these are defined in external `@atomicloud/cyan-sdk` package not present in source directories
   - Location: Multiple pages (cyan-object.mdx, determinism.mdx, default-processor.mdx)
   - Fix: Either add SDK source code to verification paths or clearly note that SDK interfaces are external dependencies

2. **Registry vs Coordinator Endpoints (docker-vs-cyan-registry.mdx, linked from index)**
   - Problem: Documentation mentions `registry.cyanprint.io` as official CyanPrint registry, but source code uses `http://coord.cyanprint.dev:9000` as coordinator endpoint
   - Location: docker-vs-cyan-registry.mdx lines 147-149
   - Fix: Clarify distinction between registry and coordinator endpoints, or update to match actual implementation
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:42,60` - default coordinator is `http://coord.cyanprint.dev:9000`

3. **Filters Configuration (default-processor.mdx, linked from index)**
   - Problem: Documentation shows `parser.filters` configuration option for the default processor, but actual processor implementation in e2e tests does not reference filters
   - Location: default-processor.mdx lines 188-203
   - Fix: Verify filters are actually supported in the SDK or remove from documentation
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts` - uses `varSyntax` but no `filters` property in config

4. **State Directory Structure (3-way-merge.mdx, linked from index)**
   - Problem: Documentation describes `.cyan/` directory with `generation.json` and `base/` subdirectory, but actual implementation uses single `.cyan_state.yaml` file at project root
   - Location: 3-way-merge.mdx lines 43-49
   - Fix: Update to reflect actual `.cyan_state.yaml` structure
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/fs/loader.rs:25,78-79` - skips `.cyan_state.yaml` files, no reference to `.cyan/` directory

### 🟠 Other Problems

1. **Inconsistent Plugin/Processor Namespacing**
   - Problem: Documentation uses `cyan/*` namespacing for built-in plugins and processors, but actual e2e tests use `ernest/*` namespacing. No evidence of official `cyan/*` packages existing
   - Recommendation: Either create official `cyan/*` plugins/processors or update documentation to reflect actual naming conventions used in practice

2. **Pin System Implementation Unclear**
   - Problem: Documentation describes pin system in detail with storage in `.cyan/generation.json`, but actual implementation stores `deterministic_states` HashMap in `.cyan_state.yaml` with different structure
   - Recommendation: Verify pin system implementation matches documentation or update documentation to reflect actual state management approach

3. **Container Paths Unverifiable**
   - Problem: Documentation describes container paths (`/workspace`, `/templates`, `/cyan`) as internal Docker container paths, but these cannot be verified from source code in the specified source paths (argon, boron, helium, iridium, zinc)
   - Recommendation: Add Docker configuration files to source paths for verification, or clearly mark as infrastructure documentation that cannot be verified from application source code

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 4 |
| 🟠 | 3 |
