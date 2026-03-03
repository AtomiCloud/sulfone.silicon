<!-- source: content/docs/developer/templates/reference/sdk/cyan-config.mdx -->
# 📄 File: content/docs/developer/templates/reference/sdk/cyan-config.mdx

> Documentation describes the Cyan configuration object returned by StartTemplateWithLambda. Contains multiple inaccuracies regarding enum values, interface definitions, and naming conventions.

### 🔴 Source Code Inaccuracies

1. **GlobType.Ignore enum value does not exist**
   - Documented: `GlobType.Ignore = 2` with behavior "Skip entirely"
   - Actual: GlobType only has `Template = 0` and `Copy = 1`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `enum GlobType { Template = 0, Copy = 1, }`

2. **ICyanConfig interface name is incorrect**
   - Documented: `interface ICyanConfig`
   - Actual: `interface Cyan`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27` shows `interface Cyan { processors: CyanProcessor[]; plugins: CyanPlugin[]; }`

3. **plugins property is required, not optional**
   - Documented: `plugins?: IPlugin[]` (optional)
   - Actual: `plugins: CyanPlugin[]` (required)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:26` shows `plugins: CyanPlugin[]` without optional marker

4. **IProcessor interface name and config type incorrect**
   - Documented: `interface IProcessor { name: string; files: IFileGroup[]; config: Record<string, any>; }`
   - Actual: `interface CyanProcessor { name: string; files: CyanGlob[]; config: unknown; }`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:18-22`

5. **IFileGroup interface name and root property incorrect**
   - Documented: `interface IFileGroup { root: string; glob: string; exclude: string[]; type: GlobType; }`
   - Actual: `interface CyanGlob { root?: string | null; glob: string; exclude: string[]; type: GlobType; }`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11`

6. **IPlugin interface name and config type incorrect**
   - Documented: Implied `interface IPlugin` with `config: Record<string, any>`
   - Actual: `interface CyanPlugin { name: string; config: unknown; }`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:13-16`

### 🟡 Documentation Issues

1. **GlobType table includes non-existent Ignore value**
   - Problem: Table shows `GlobType.Ignore` with behavior "Skip entirely" which does not exist in SDK
   - Location: Lines 89-94, GlobType Options table
   - Fix: Remove the `GlobType.Ignore` row from the table

2. **Structure Overview uses wrong interface name**
   - Problem: Documentation uses `ICyanConfig` but SDK exports `Cyan`
   - Location: Lines 12-17, Structure Overview section
   - Fix: Update interface name to `Cyan` to match SDK exports

3. **IProcessor interface section uses wrong names**
   - Problem: Uses `IProcessor` and `IFileGroup` but SDK uses `CyanProcessor` and `CyanGlob`
   - Location: Lines 67-86, Processor Configuration section
   - Fix: Update interface names to match SDK exports

4. **Default Processor Config structure not verified**
   - Problem: The `parser.varSyntax` configuration is documented but the `cyan/default` processor itself is not found in source code
   - Location: Lines 96-107, Default Processor Config section
   - Fix: Clarify that `cyan/default` is a convention/example, or verify against actual processor implementation

5. **Plugin examples use fictitious plugin names**
   - Problem: Uses `cyan/init-git` and `cyan/npm-install` as examples
   - Location: Lines 113-145, Plugins section
   - Fix: Mark these as hypothetical examples or use actual plugin names from the codebase

6. **Complete Example has misleading third parameter**
   - Problem: `i.text('Project name?', 'template.name', '...')` - the third parameter is `help` text, not a default value
   - Location: Line 172, Complete Example
   - Fix: Either remove the third parameter or use object form for default values

### 🟠 Other Problems

1. **Inconsistent naming convention between documentation and SDK**
   - Problem: Documentation uses "I" prefix convention (ICyanConfig, IProcessor) while SDK does not (Cyan, CyanProcessor)
   - Recommendation: Align documentation naming with actual SDK exports or add a note explaining the naming difference

2. **Missing SDK version information**
   - Problem: Documentation does not specify which version of `@atomicloud/cyan-sdk` it applies to
   - Recommendation: Add version information to help developers verify compatibility

3. **root property should be marked as optional in documentation**
   - Problem: Documentation shows `root: string` as required but it's actually `root?: string | null`
   - Recommendation: Update to show root is optional with possible null value

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 6 |
| 🟡 | 6 |
| 🟠 | 3 |
