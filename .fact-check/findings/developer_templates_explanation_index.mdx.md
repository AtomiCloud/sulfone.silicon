<!-- source: content/docs/developer/templates/explanation/index.mdx -->
# File: content/docs/developer/templates/explanation/index.mdx

> This is an index page providing an overview of template explanation topics with links to detailed pages. The page serves as a navigation hub for conceptual documentation about CyanPrint templates.

### Source Code Inaccuracies
(None found - all claims verified against source code)

### Documentation Issues
(None found - the page is an index with navigation links, all of which resolve to existing files)

### Other Problems
(None found)

## Verification Details

**Verified Claims:**

1. **`var__name__` syntax** (line 48-50): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:24` - The default processor uses Eta templating with `tags: ['var__', '__']` as the default delimiters.

2. **3-way merge** (line 54): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/algorithms/02-three-way-merge.md` and implementation in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/fs/merger.rs` - The system uses git2 library for Git-like 3-way merge combining base, current, and incoming states.

3. **Determinism/Pin system** (line 58): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/concepts/04-deterministic-states.md` - Deterministic states are stored alongside answers in `.cyan_state.yaml` and enable reproducible generation.

4. **Processors vs Plugins** (line 62): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/features/06-plugin-lifecycle.md` - Processors transform files during generation, plugins execute sequential post-generation actions.

5. **Client State** (line 21): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/services.rs` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/operations/composition/state.rs` - State is managed via `CompositionState` struct with `shared_answers` and `shared_deterministic_states`.

6. **All linked pages exist**: Verified all 9 links resolve to existing `.mdx` files in the same directory.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 0 |
| Documentation Issues | 0 |
| Other Problems | 0 |
