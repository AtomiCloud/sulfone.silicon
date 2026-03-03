<!-- source: content/docs/developer/templates/explanation/cyan-object.mdx -->
# 📄 File: content/docs/developer/templates/explanation/cyan-object.mdx

> Documentation explains the Cyan configuration object returned by `StartTemplateWithLambda`. Contains several interface inaccuracies and references to non-existent enum values compared to actual source code in helium SDK.

### 🔴 Source Code Inaccuracies

1. **Non-existent `GlobType.Ignore` value**
   - Documented: `GlobType.Ignore` as a valid enum value for skipping files (line 137)
   - Actual: `GlobType` enum only has two values: `Template = 0` and `Copy = 1`. There is no `Ignore` value.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` - `enum GlobType { Template = 0, Copy = 1 }`

2. **Incorrect interface name `ICyanConfig`**
   - Documented: The top-level interface is named `ICyanConfig` (lines 31-34)
   - Actual: The interface is named `Cyan`, not `ICyanConfig`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27` - `interface Cyan { processors: CyanProcessor[]; plugins: CyanPlugin[]; }`

3. **Incorrect interface name `IProcessor`**
   - Documented: The processor interface is named `IProcessor` (lines 40-44)
   - Actual: The interface is named `CyanProcessor`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:18-22` - `interface CyanProcessor { name: string; files: CyanGlob[]; config: unknown; }`

4. **Incorrect interface name `IFileGroup`**
   - Documented: The file group interface is named `IFileGroup` (lines 50-55)
   - Actual: The interface is named `CyanGlob`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11` - `interface CyanGlob { root?: string | null; glob: string; exclude: string[]; type: GlobType; }`

5. **Incorrect interface name `IPlugin`**
   - Documented: The plugin interface is named `IPlugin` (lines 61-64)
   - Actual: The interface is named `CyanPlugin`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:13-16` - `interface CyanPlugin { name: string; config: unknown; }`

6. **Incorrect type for `config` field**
   - Documented: `config: Record<string, any>` for both Processor and Plugin (lines 43, 63)
   - Actual: `config: unknown` (a more generic type)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:18-22` and lines 13-16

7. **Incorrect `root` field type**
   - Documented: `root: string` as required (line 52)
   - Actual: `root?: string | null` - it's optional and can be null
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7` - `root?: string | null;`

8. **`plugins` field is required, not optional**
   - Documented: `plugins?: IPlugin[]` marked as optional with `?` (line 33)
   - Actual: `plugins: CyanPlugin[]` is a required field, no optional marker
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:26` - `plugins: CyanPlugin[];`

### 🟡 Documentation Issues

1. **Misleading execution flow for Ignore type**
   - Problem: The Mermaid diagram (lines 69-85) shows an `Ignore` path that doesn't exist in the actual code
   - Location: Lines 75-80 (diagram branches F -->|Ignore| I[Skip])
   - Fix: Remove the `Ignore` branch from the diagram

2. **Example uses non-existent GlobType.Ignore**
   - Problem: Line 137 shows `{ root: 'templates', glob: '**/*.test.*', exclude: [], type: GlobType.Ignore }` which uses a non-existent enum value
   - Location: Lines 126-139, the "File Groups" example
   - Fix: Remove this example or use `exclude` patterns instead

3. **Inconsistent interface naming convention**
   - Problem: Documentation uses `I` prefix for interfaces (`ICyanConfig`, `IProcessor`, `IPlugin`, `IFileGroup`) but actual SDK uses `Cyan` prefix (`Cyan`, `CyanProcessor`, `CyanPlugin`, `CyanGlob`)
   - Location: Throughout the document (Structure section lines 26-65)
   - Fix: Update interface names to match actual SDK naming convention

4. **Missing import statements in code examples**
   - Problem: Code examples use `StartTemplateWithLambda`, `GlobType` without showing import statements
   - Location: Lines 13-19, 94-102, 109-117, etc.
   - Fix: Add import statements like `import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';`

### 🟠 Other Problems

1. **Processor/plugin names may be hypothetical**
   - Problem: The `cyan/default`, `cyan/init-git`, and `cyan/npm-install` names are used as examples but may not exist in any registry
   - Recommendation: Verify these exist or clearly label them as placeholder examples

2. **Inconsistent with sibling documentation**
   - Problem: The `cyan-config.mdx` reference page also documents `GlobType.Ignore` in its GlobType Options table
   - Recommendation: Coordinate updates across both documents to ensure consistency

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 8 |
| 🟡 | 4 |
| 🟠 | 2 |
