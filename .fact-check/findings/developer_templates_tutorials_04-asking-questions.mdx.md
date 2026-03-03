<!-- source: content/docs/developer/templates/tutorials/04-asking-questions.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/04-asking-questions.mdx

> Tutorial documentation for the IInquirer interface and question types. Contains significant inaccuracies regarding the IDeterminism interface methods.

### 🔴 Source Code Inaccuracies
1. **Documented: `d.uuid()` method in Complete Example** | **Actual: `IDeterminism` interface only has `get(key: string, origin: () => string): string` method** | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5` - The interface only defines `get(key: string, origin: () => string): string`. No `uuid()` method exists anywhere in the SDK (verified via grep search).

2. **Documented: `dateSelect()` returns `Date`** | **Actual: Returns `Promise<string>` in Node SDK** | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26` - `dateSelect(q: DateQ): Promise<string>` returns string, not Date. (Note: .NET SDK returns `Task<DateOnly>` as shown in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Inquirer.cs:17-18`)

3. **Documented: Line 191-192 shows `const uuid = d.uuid();`** | **Actual: No such method exists on IDeterminism** | Evidence: Comprehensive grep search of `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src` for `.uuid(`, `.timestamp(`, `.seq(` returned no matches.

### 🟡 Documentation Issues
1. **Problem: Complete Example uses non-existent `d.uuid()` method** | Location: Lines 191-192 ("Generate deterministic values" comment) and Line 209 | Fix: Either document the correct `d.get()` method usage or remove the uuid usage from the example. The correct pattern would be `d.get('uuid', () => crypto.randomUUID())` if a deterministic UUID is needed.

2. **Problem: Question Types table says `dateSelect()` returns `Date`** | Location: Line 80 | Fix: Update to indicate it returns `string` (ISO date string) in TypeScript/Node SDK. Consider adding a note about platform differences (.NET returns `DateOnly`).

3. **Problem: "What You Learned" section incomplete** | Location: Line 219 | Fix: Claims to teach "all question types" but only mentions "text, select, confirm, checkbox" - omits `password()` and `dateSelect()`. Either include all 6 types or rephrase to "basic question types".

### 🟠 Other Problems
1. **Problem: Documentation inconsistency across multiple files** | Recommendation: The `determinism.mdx`, `pin-determinism.mdx`, `full-example.mdx`, and this file all reference non-existent methods `d.uuid()`, `d.timestamp()`, and `d.seq()`. This suggests either: (a) the SDK was refactored and documentation was not updated, or (b) there's a separate enhanced interface not found in the searched paths. Recommend auditing all documentation referencing IDeterminism methods.

2. **Problem: Interface naming confusion** | Recommendation: The parameter is documented as `d` with interface `IDeterminism`, but some docs (e.g., `pin-determinism.mdx` line 44) refer to it as "IDefine". Recommend standardizing the interface name across all documentation.

### ✅ Verified Correct
1. SDK package name `@atomicloud/cyan-sdk` is correct - confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2`

2. GlobType enum values (`GlobType.Template`, `GlobType.Copy`) are correct - confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`

3. `StartTemplateWithLambda` function signature is correct - confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:140-143`

4. All IInquirer methods (`text`, `select`, `confirm`, `checkbox`, `password`, `dateSelect`) exist - confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:3-27`

5. All links verified to exist:
   - `/developer/templates/how-to` - `content/docs/developer/templates/how-to/index.mdx`
   - `/developer/templates/tutorials/full-example` - `content/docs/developer/templates/tutorials/full-example.mdx`
   - `/developer/templates/reference/sdk/inquirer` - `content/docs/developer/templates/reference/sdk/inquirer.mdx`

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 3 |
| 🟠 | 2 |
