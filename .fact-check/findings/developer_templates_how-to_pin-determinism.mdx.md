<!-- source: content/docs/developer/templates/how-to/pin-determinism.mdx -->
# File: content/docs/developer/templates/how-to/pin-determinism.mdx

> This document documents API methods (`d.uuid()`, `d.timestamp()`, `d.seq()`) that do not exist in the SDK. The actual IDeterminism interface only provides `d.get(key, origin)`. Additionally, there are state file inconsistencies.

### Source Code Inaccuracies
1. **Non-existent method `d.uuid()`** | Documented: `d.uuid()` returns deterministic UUID (lines 17, 49, 61, 95) | Actual: IDeterminism interface only has `get(key: string, origin: () => string): string` | Evidence: content/docs/developer/templates/reference/sdk/types.mdx lines 149-156 shows the actual interface; content/docs/developer/templates/explanation/determinism.mdx lines 65-77 shows correct usage with `d.get()`

2. **Non-existent method `d.timestamp()`** | Documented: `d.timestamp()` returns deterministic timestamp (lines 50, 69, 96) | Actual: No such method exists; must use `d.get('key', () => Date.now().toString())` | Evidence: content/docs/developer/templates/reference/sdk/types.mdx lines 149-156; content/docs/developer/templates/explanation/determinism.mdx lines 132-136 shows correct pattern

3. **Non-existent method `d.seq()`** | Documented: `d.seq('namespace')` returns sequential numbers (lines 76-78, 103-104, 107) | Actual: No such method exists; sequential values must use `d.get()` with unique keys | Evidence: content/docs/developer/templates/reference/sdk/types.mdx lines 149-156; content/docs/developer/templates/explanation/determinism.mdx lines 151-161 shows correct pattern using `d.get('user-id-1', () => '1')`

4. **Incorrect state file path** | Documented: `.cyan/generation.json` (lines 32-33) | Actual: Both `.cyan/generation.json` AND `.cyan_state.yaml` are used | Evidence: content/docs/developer/templates/explanation/determinism.mdx lines 48-61 documents `.cyan_state.yaml` for deterministic_states; content/docs/developer/templates/explanation/client-state.mdx lines 12-29 documents `.cyan/generation.json` for client state; content/docs/user/reference/cli-commands.mdx line 60 mentions `.cyan_state.yaml` for updates

5. **Incorrect interface name** | Documented: `IDefine` interface (line 44) | Actual: Interface is named `IDeterminism` | Evidence: content/docs/developer/templates/reference/sdk/types.mdx line 149; content/docs/developer/templates/explanation/determinism.mdx line 65; content/docs/contributor/repositories/helium.mdx line 49

### Documentation Issues
1. **Cross-document API inconsistency** | Problem: This document uses `d.uuid()`, `d.timestamp()`, `d.seq()` while sibling docs use correct `d.get(key, origin)` pattern | Location: Throughout document | Fix: Rewrite all code examples to use `d.get()` pattern per content/docs/developer/templates/explanation/determinism.mdx

2. **Inconsistent with 3-way-merge.mdx** | Problem: content/docs/developer/templates/explanation/3-way-merge.mdx also uses `d.uuid()` (lines 169, 172) | Location: Lines 169-173 of 3-way-merge.mdx | Fix: Update 3-way-merge.mdx to use `d.get('project-id', () => crypto.randomUUID())`

3. **Inconsistent with full-example.mdx tutorial** | Problem: content/docs/developer/templates/tutorials/full-example.mdx uses `d.uuid()` (lines 108, 316) | Location: Lines 108, 316 of full-example.mdx | Fix: Update tutorial to use correct API

4. **Missing import statement** | Problem: Code examples use `crypto.randomUUID()` and `Date.now()` without showing they should be wrapped in `d.get()` | Location: Lines 85-97 | Fix: Show complete example with proper `d.get()` wrapping

### Other Problems
1. **Conceptual confusion between 'pin' and 'deterministic states'** | Problem: Document talks about "pin" enabling determinism but doesn't explain the relationship to `deterministic_states` in `.cyan_state.yaml` | Recommendation: Clarify that the pin is stored in `.cyan/generation.json` while deterministic values are stored in `.cyan_state.yaml`, and explain how they work together

2. **State file location needs clarification** | Problem: Document mentions only `.cyan/generation.json` but update workflow (line 60 in cli-commands.mdx) mentions `.cyan_state.yaml` | Recommendation: Document both files and their purposes - `.cyan/generation.json` for metadata/answers/pin, `.cyan_state.yaml` for deterministic_states cache

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 5 |
| Documentation Issues | 4 |
| Other Problems | 2 |
