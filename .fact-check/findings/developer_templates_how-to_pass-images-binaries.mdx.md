<!-- source: content/docs/developer/templates/how-to/pass-images-binaries.mdx -->
# 📄 File: content/docs/developer/templates/how-to/pass-images-binaries.mdx

> Documentation explaining how to handle images and binary files in templates using GlobType.Copy vs GlobType.Template. The core concept is accurate, but there are several source code and documentation issues to address.

### 🔴 Source Code Inaccuracies

1. **Processor name `cyan/default` is a conceptual convention, not an actual implementation**
   - **Documented**: `name: 'cyan/default'` (line 63) used throughout examples
   - **Actual**: No processor named `cyan/default` exists in the source code. Actual e2e templates use custom names like `'ernest/processor1'`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:37` uses `name: 'ernest/processor1'`. The `cyan/default` naming convention is documented in boron specs but no implementation exists in any source path.

2. **Lambda parameter names differ from SDK type definitions**
   - **Documented**: `StartTemplateWithLambda(async (i, d) => {` (line 60) - uses short names `i` and `d`
   - **Actual**: The SDK type definition uses semantic names `(inquirer: IInquirer, determinism: IDeterminism)`. While short names work, they don't match official type definitions.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts:6` defines `LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>`

3. **Cross-referenced `GlobType.Ignore` does not exist**
   - **Documented**: The linked globbing reference (`/developer/templates/reference/sdk/globbing`) mentions `GlobType.Ignore` as a valid type (line 139 of globbing.mdx)
   - **Actual**: The GlobType enum only has two values: `Template` (0) and `Copy` (1)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`:
     ```ts
     enum GlobType {
       Template = 0,
       Copy = 1,
     }
     ```

### 🟡 Documentation Issues

1. **Inconsistent `root` property usage in code examples**
   - **Problem**: The "Complete Example" (lines 64-81) and other code blocks show file entries without the `root` property, but the Directory Organization section implies a `templates/` structure. The `CyanGlob` interface shows `root?: string | null` meaning it's optional.
   - **Location**: Lines 64-81 (Complete Example), Lines 30-42 (Solution section)
   - **Fix**: Either consistently show `root: 'templates'` in all examples or add a note explaining that `root` is optional and defaults to current directory.

2. **Template processing explanation is processor-specific**
   - **Problem**: Line 23 states "The template processor tries to find `var__` patterns in binary data" without clarifying this is processor-specific behavior (Eta templating), not inherent to GlobType.Template.
   - **Location**: Line 23
   - **Fix**: Clarify that `var__` pattern processing is specific to the default/eta processor. Different processors may use different templating syntax or none at all.

3. **Related links may have path issues**
   - **Problem**: The Related section links (lines 147-149) should be verified to resolve correctly in the documentation build.
   - **Location**: Lines 147-149
   - **Fix**: Verify paths `/developer/templates/tutorials/03-changing-glob`, `/developer/templates/reference/sdk/globbing`, and `/developer/templates/how-to/conditional-files` resolve correctly.

### 🟠 Other Problems

1. **No explanation of processor requirements**
   - **Problem**: Documentation shows `name: 'cyan/default'` without explaining that processor names reference actual implementations that must be available.
   - **Recommendation**: Add a note that processor names must reference actual processor implementations and link to processor documentation or explain how to create/use processors.

2. **`vars` configuration structure is processor-specific**
   - **Problem**: The example shows `config: { vars: { projectName: 'my-app' } }` but this structure is specific to Eta-based processors. Other processors may use different config structures.
   - **Recommendation**: Add a note that the `config` object structure depends on the specific processor being used.

3. **GlobType enum values differ by SDK language**
   - **Problem**: TypeScript SDK uses 0-indexed values (`Template = 0, Copy = 1`) while Python SDK uses 1-indexed values (`Template = 1, Copy = 2`)
   - **Recommendation**: Document that enum values may differ by language SDK; users should use named constants rather than numeric values.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 3 |
| 🟠 | 3 |
