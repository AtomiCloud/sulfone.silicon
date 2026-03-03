<!-- source: content/docs/developer/templates/explanation/default-processor.mdx -->
# File: content/docs/developer/templates/explanation/default-processor.mdx

> Documentation for the cyan/default processor. The core variable syntax and varSyntax configuration are accurate, but several claimed configuration options (filters, autoEscape, autoTrim) are not actually exposed by the default processor implementation.

### Source Code Inaccuracies

1. **Documented: `filters` configuration option in parser**
   **Actual: The default processor does NOT support filters**
   Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:10-17`
   ```ts
   interface CyanInput {
     vars: Vars;
     flags: Flags;
     parser?: {
       varSyntax?: [string, string][];
       // flagSyntax?: [string, string][],
     };
   }
   ```
   The CyanInput interface only defines `varSyntax` in the parser config. There is no `filters` property. The Eta filter feature is NOT exposed to template authors.

2. **Documented: `autoEscape` and `autoTrim` as configurable options**
   **Actual: These are hardcoded in the processor implementation, not configurable**
   Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:22-32`
   ```ts
   const varEtaConfig: Partial<EtaConfig> = {
     useWith: true,
     tags: ['var__', '__'],
     autoTrim: [false, false],
     autoEscape: false,
     parse: {
       raw: '~',
       exec: '=',
       interpolate: '',
     },
   };
   ```
   The `autoEscape: false` and `autoTrim: [false, false]` values are hardcoded constants, not derived from the input config. Template authors cannot override these.

3. **Documented: Eta conditional and loop features are usable with custom delimiters**
   **Actual: While technically possible with custom varSyntax, the default processor's `interpolate: ''` config prevents standard Eta interpolation**
   Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:27-31`
   The `parse: { interpolate: '' }` means the default interpolation syntax is disabled. Conditionals and loops would require using the exec prefix (`=`) which may not work as documented examples suggest.

4. **Documented: GlobType.Ignore exists (in referenced cyan-config.mdx)**
   **Actual: Only GlobType.Template and GlobType.Copy exist**
   Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`
   ```ts
   enum GlobType {
     Template = 0,
     Copy = 1,
   }
   ```
   There is no `GlobType.Ignore` value in the SDK. The documentation in cyan-config.mdx incorrectly lists this option.

### Documentation Issues

1. **Problem: The "Filters" section (lines 186-203) describes a feature that does not exist in the default processor**
   **Location: Lines 186-203**
   **Fix: Remove the Filters section entirely, or clearly mark it as a feature available only in custom processors, not in cyan/default.

2. **Problem: The "Full configuration options" example (lines 209-234) includes options that cannot be configured**
   **Location: Lines 209-234**
   **Fix: Remove `filters`, `autoEscape`, and `autoTrim` from the example. Only `vars` and `parser.varSyntax` are actually configurable.

3. **Problem: The Eta Features section (lines 160-203) implies capabilities that are not fully supported**
   **Location: Lines 160-203**
   **Fix: Either remove or significantly revise this section. The conditionals/loops examples would require changes to how the processor is implemented (the `interpolate: ''` setting affects how Eta parses templates).

4. **Problem: The cyan-config.mdx reference document only documents `vars` and `varSyntax` as configurable options**
   **Location: Cross-reference inconsistency**
   **Fix: The default-processor.mdx should be aligned with cyan-config.mdx, which accurately shows only `vars` and `parser.varSyntax` as the available options.

### Other Problems

1. **Problem: The documentation does not clarify that `cyan/default` is a specific processor implementation, not a built-in platform feature**
   **Recommendation: Add a note explaining that cyan/default is the reference processor implementation, and different registries/organizations may provide their own default processors with different capabilities.

2. **Problem: No link to actual processor source code for developers who want to understand the exact behavior**
   **Recommendation: Consider adding a link to the processor implementation or explaining where to find the source code in the registry.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 4 |
| Documentation Issues | 4 |
| Other Problems | 2 |
