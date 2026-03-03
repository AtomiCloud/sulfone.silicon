<!-- source: content/docs/developer/templates/how-to/pin-determinism.mdx -->
# File: content/docs/developer/templates/how-to/pin-determinism.mdx

> Documentation for pinning determinism to ensure reproducible template generation. The documented API methods (`d.uuid()`, `d.timestamp()`, `d.seq()`) do not exist in the actual SDK - the `IDeterminism` interface only provides a `get(key, origin)` method.

### Source Code Inaccuracies

1. **`d.uuid()` method does not exist**
   - Documented: `const id = d.uuid();  // "550e8400-e29b-41d4-a716-446655440000"` (lines 16, 49, 61)
   - Actual: The `IDeterminism` interface only has a `get(key: string, origin: () => string): string` method. UUID generation must be done via `d.get('some-key', () => randomUUID())`.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`:
     ```typescript
     interface IDeterminism {
       get(key: string, origin: () => string): string;
     }
     ```

2. **`d.timestamp()` method does not exist**
   - Documented: `const timestamp = d.timestamp();  // Same timestamp every time` (lines 50, 69)
   - Actual: Must use `d.get('timestamp-key', () => Date.now().toString())` instead.
   - Evidence: Same as above - `IDeterminism` interface only has `get()` method.

3. **`d.seq()` method does not exist**
   - Documented: `const userId1 = d.seq('users');  // 1` and `const userId2 = d.seq('users');  // 2` (lines 76-78, 103-104)
   - Actual: There is no `seq()` method on `IDeterminism`. Sequential IDs would need to be implemented differently.
   - Evidence: Same as above - `IDeterminism` interface only has `get()` method.

4. **State File Path is Incorrect**
   - Documented: `.cyan/generation.json` (lines 32-33)
   - Actual: `.cyan_state.yaml`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/update/orchestrator.rs:39`:
     ```rust
     let state_file_path = target_dir.join(".cyan_state.yaml");
     ```

5. **State File Format is Incorrect**
   - Documented: JSON format with `pin`, `template`, `answers` fields
   - Actual: YAML format with `templates` hashmap containing history entries with `deterministic_states`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:6-24`:
     ```rust
     pub struct TemplateHistoryEntry {
         pub version: i64,
         pub time: DateTime<Utc>,
         pub answers: HashMap<String, Answer>,
         pub deterministic_states: HashMap<String, String>,
     }
     ```

6. **Interface Name Inconsistency**
   - Documented: Uses both `IDefine` (line 44: "The `d` (IDefine) interface") and `d` as the determinism parameter
   - Actual: The interface is named `IDeterminism`, not `IDefine`
   - Evidence: All SDK sources show the interface is `IDeterminism`:
     - Node SDK: `import type { IDeterminism } from './domain/core/deterministic.js'`
     - Python SDK: `class IDeterminism(ABC)`
     - .NET SDK: `public interface IDeterminism`

7. **Actual Usage Pattern Differs from Documentation**
   - Documented: Direct method calls like `d.uuid()`, `d.timestamp()`, `d.seq()`
   - Actual: The SDK uses `d.get(key, () => defaultValue)` pattern
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:137`:
     ```typescript
     const t = d.get('time', () => '7');
     ```

### Documentation Issues

1. **Entire "Deterministic Methods" section is invalid**
   - Problem: Lines 56-108 describe methods that don't exist in the SDK
   - Location: Lines 56-108
   - Fix: Replace all examples with the correct `d.get(key, origin)` pattern:
     ```typescript
     // UUID generation
     import { randomUUID } from 'node:crypto';
     const projectId = d.get('project-id', () => randomUUID());

     // Timestamp
     const createdAt = d.get('created-at', () => Date.now().toString());

     // Sequential IDs (not directly supported, would need custom implementation)
     ```

2. **Best Practices section uses non-existent methods**
   - Problem: The "Always Use IDefine for IDs" section (lines 83-97) shows `d.uuid()` and `d.timestamp()` which don't exist
   - Location: Lines 83-97
   - Fix: Update to show correct usage:
     ```typescript
     // Bad - breaks determinism
     const id = crypto.randomUUID();
     const now = Date.now();

     // Good - deterministic with caching
     const id = d.get('project-id', () => crypto.randomUUID());
     const now = d.get('timestamp', () => Date.now().toString());
     ```

3. **Namespace Sequences section is entirely invalid**
   - Problem: The entire section on "Namespace Sequences" (lines 99-108) relies on the non-existent `seq()` method
   - Location: Lines 99-108
   - Fix: Remove this section or explain that sequential IDs need custom implementation using `get()` with incrementing keys

4. **Related documentation also contains same inaccuracies**
   - Problem: The linked explanation document `/developer/templates/explanation/determinism` also describes the same non-existent methods (`d.uuid()`, `d.timestamp()`, `d.seq()`), creating consistency in error
   - Location: Cross-reference issue
   - Fix: Both documents need to be updated together to reflect the actual `IDeterminism` interface

### Other Problems

1. **No working example in actual codebase**
   - Problem: The iridium e2e templates don't use the `d` (determinism) parameter at all in practice - they just pass it unused. There's no real-world example showing the correct `d.get()` usage pattern
   - Recommendation: Add a working example showing the correct usage pattern, similar to what's in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:137`

2. **Documentation claims vs SDK reality mismatch**
   - Problem: The helium SDK documentation at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/docs/developer/concepts/03-determinism.md` correctly documents the `get(key, origin)` pattern, but the silicon documentation creates a fictional convenience API
   - Recommendation: Align silicon documentation with helium SDK documentation to use the actual `get()` method pattern

3. **Inconsistent State File Location Across Docs**
   - Problem: Multiple documentation files reference `.cyan/generation.json` but actual implementation uses `.cyan_state.yaml`
   - Recommendation: Audit all documentation for state file references and update consistently

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 7 |
| Documentation Issues | 4 |
| Other Problems | 3 |
