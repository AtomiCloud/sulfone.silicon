<!-- source: content/docs/developer/templates/how-to/use-custom-processor.mdx -->
# File: content/docs/developer/templates/how-to/use-custom-processor.mdx

> Document describes how to use custom processors in templates, with examples for Mustache, Handlebars, and Prisma processors. Overall structure and concepts are accurate, but several config examples use invented/misleading option names.

### Source Code Inaccuracies
1. **Mustache processor config uses invented options**
   - Documented: `delimiters: ['{{', '}}'], escapeDelimiter: '{{{'` (lines 35-36)
   - Actual: The default processor uses `parser.varSyntax: [['var__', '__']]` format for delimiter configuration (see spec.md lines 140-146). The `delimiters` and `escapeDelimiter` options are not documented anywhere in the SDK or spec.
   - Evidence: `spec/v1/CU-86et8z80y/task-spec.md` lines 140-146; `content/docs/developer/templates/explanation/default-processor.mdx` lines 96-101

2. **Processor config structure shows incorrect nesting**
   - Documented: `config: { vars: {...}, options: {...} }` (lines 79-97)
   - Actual: The default processor config uses `vars` at the top level and `parser` for syntax config, not `options`. The `options` nested object is not documented.
   - Evidence: `spec/v1/CU-86et8z80y/task-spec.md` lines 139-146; `content/docs/developer/templates/reference/sdk/cyan-config.mdx` lines 99-108

3. **Handlebars processor helpers as config is misleading**
   - Documented: `helpers: { uppercase: (str) => str.toUpperCase(), ... }` (lines 124-127)
   - Actual: Config is passed as `unknown` type (JSON-serializable data), not executable functions. Functions cannot be passed through the config object from template to processor.
   - Evidence: `content/docs/developer/processors/reference/sdk/types.mdx` line 39 shows `config: unknown`; `content/docs/developer/processors/how-to/access-config.mdx` lines 190-193

4. **Prisma processor options are invented**
   - Documented: `generateClient: true, outputDir: 'src/db', previewFeatures: ['fullTextSearch']` (lines 155-158)
   - Actual: No evidence these options exist in any actual processor. While custom processors CAN accept any config, presenting these as if they're real options is misleading.
   - Evidence: No matching config options found in any source code or spec files

### Documentation Issues
1. **Examples present hypothetical processors as if they exist**
   - Problem: The document uses `myorg/mustache-processor`, `myorg/handlebars-processor`, `myorg/codegen-processor`, `myorg/prisma-processor` as examples without clarifying these are hypothetical
   - Location: Lines 30-40, 112-131, 145-161
   - Fix: Add a disclaimer that these are example processor names and configs to illustrate patterns, not actual available processors

2. **"Available Processors" table is misleading**
   - Problem: Table (lines 99-104) shows "Custom | Any engine | Depends on implementation" as if it's an available processor
   - Location: Lines 99-104
   - Fix: Clarify that only `cyan/default` is a built-in processor; custom processors must be created or obtained from a registry

3. **Callout link text doesn't match actual page structure**
   - Problem: Callout says "See [Processor Development](/docs/developer/processors)" but this links to an index page, not a specific "Processor Development" page
   - Location: Lines 106-108
   - Fix: This is acceptable as it links to the processor section index which contains development guides

### Other Problems
1. **Missing TypeScript import in first example**
   - Problem: First code example (lines 27-41) uses `GlobType.Template` but doesn't show the import statement
   - Recommendation: Add `import { GlobType } from '@atomicloud/cyan-sdk';` for completeness

2. **No mention of multi-language SDK support**
   - Problem: According to spec.md, SDK examples should be provided in TypeScript, Python, and C# (lines 486-487)
   - Recommendation: Consider adding tabbed examples for all 3 languages as per project standards

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 4 |
| Documentation Issues | 3 |
| Other Problems | 2 |
