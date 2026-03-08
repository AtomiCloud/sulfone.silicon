<!-- source: content/docs/developer/templates/explanation/default-processor.mdx -->
# File: content/docs/developer/templates/explanation/default-processor.mdx

> Documentation describes the `cyan/default` processor, its Eta templating features, and configuration options. Source code verification shows the e2e test processors (processor1 and processor2) in the iridium repo demonstrate the Eta-based implementation, confirming the `var__name__` syntax, varSyntax configuration, and hardcoded settings like autoEscape and autoTrim.

### Source Code Inaccuracies
1. **Documented**: "Processor Configuration" section shows `parser.varSyntax: [['var__', '__']]` as the default
   **Actual**: Source shows `varSyntax` is an array of tag pairs `[string, string][]` and defaults to `[['var__', '__']]` only when empty, but the documented example shows a nested array structure
   **Evidence**: `iridium/e2e/processor1/index.ts:14` - `varSyntax?: [string, string][];` and line 35 - `if (varSyntax.length === 0) varSyntax.push(['var__', '__']);`

2. **Documented**: Shows `files: [/* ... */]` in processor config example (lines 194-211)
   **Actual**: Processor config structure includes `files` array but documentation doesn't show the correct structure for `files` entries (missing root, glob, exclude, type)
   **Evidence**: See other documentation files like `processors-vs-plugins.mdx` for correct structure with `root`, `glob`, `exclude`, `type`

### Documentation Issues
1. **Problem**: The "flags" property in the interface is not documented
   **Location**: The config interface shows `vars` and `parser` but the actual processor interface (CyanInput) also includes `flags: Flags`
   **Fix**: Either document the `flags` property or clarify it's not part of template author configuration (appears to be for internal processor use)

2. **Problem**: Missing space in "custom delimiters" example for mustache style
   **Location**: Line 116-117 shows `varSyntax: [['{{', '}}']]` but template shows `# {{ name }}`
   **Fix**: The template example shows spaces inside braces `{{ name }}` but the delimiter config doesn't include spaces - clarify if spaces are part of the variable name or delimiters

3. **Problem**: Eta features section mentions conditionals and loops but doesn't clearly explain the limitation
   **Location**: Lines 162-187, specifically the warning at line 186
   **Fix**: Clarify that conditionals/loops require changing delimiters from the default `var__` syntax AND that the default processor's Eta config has `interpolate: ''` (no prefix for interpolation) which affects how expressions work

4. **Problem**: The "filters" option mentioned in callout is not explained
   **Location**: Line 214 mentions "filters" as hardcoded but never explains what filters do
   **Fix**: Either remove reference to filters or explain what they are in the context of Eta

### Other Problems
1. **Problem**: Documentation references processor by name `cyan/default` but no actual source code for this processor exists in the provided source paths
   **Recommendation**: The e2e test processors (processor1, processor2) appear to BE the reference implementation of the default processor logic - confirm this and consider adding a note that `cyan/default` is a built-in processor using this implementation

2. **Problem**: The documentation claims "autoEscape", "autoTrim", and "filters" are hardcoded
   **Recommendation**: This is accurate based on the source (`iridium/e2e/processor1/index.ts:25-26`: `autoTrim: [false, false], autoEscape: false`) - but should specify what these values are set to for completeness

3. **Problem**: Nested variable example shows `var__project.version__` but the implementation uses Eta's `useWith: true` which means variables are accessed directly
   **Recommendation**: Verify the nested access syntax is correct with Eta's configuration - with `useWith: true`, the vars object properties should be accessible via dot notation

## Summary
| Category | Count |
|----------|-------|
| Red | 2 |
| Yellow | 4 |
| Orange | 3 |
