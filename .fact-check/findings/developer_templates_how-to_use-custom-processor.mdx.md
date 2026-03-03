<!-- source: content/docs/developer/templates/how-to/use-custom-processor.mdx -->
# 📄 File: content/docs/developer/templates/how-to/use-custom-processor.mdx

> A how-to guide explaining how to use custom processors in templates, covering processor configuration, multiple processors, and examples using Handlebars and code generation.

### 🔴 Source Code Inaccuracies

1. **Incorrect link to Processor Development page**
   - **Documented**: `[Processor Development](/developer/processors)` (lines 107, 172, 176)
   - **Actual**: The correct path should be `/developer/processors/tutorials/first-processor` or `/developer/processors/explanation/why-processors` based on the actual file structure
   - **Evidence**: Glob search shows processor docs exist at `content/docs/developer/processors/tutorials/first-processor.mdx` and `content/docs/developer/processors/explanation/why-processors.mdx`, not at `/developer/processors` directly

2. **Incorrect Handlebars example configuration**
   - **Documented**: `helpers: { uppercase: (str) => str.toUpperCase(), ... }` (lines 124-127)
   - **Actual**: The HandlebarsConfig class in the .NET SDK only has a `Vars` property, no `helpers` property
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium-processor-api/HandleBarsConfig.cs:3-6` shows only `Dictionary<string, string> Vars`

3. **Incorrect config structure for multiple processors example**
   - **Documented**: `config: { vars: { name: 'my-project' } }` (line 57)
   - **Actual**: The template scripts return config with `vars` nested inside, but the documented format doesn't match the actual structure returned by template scripts
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:46-58` shows `config: { vars: { color, name, ... } }`

4. **Missing parser configuration option in examples**
   - **Documented**: The default processor documentation mentions `parser.varSyntax` but this how-to doesn't show it
   - **Actual**: The actual CyanInput interface supports `parser.varSyntax` for custom delimiters
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:13-16` shows `parser?: { varSyntax?: [string, string][] }`

### 🟡 Documentation Issues

1. **Inconsistent processor name format in examples**
   - **Problem**: Examples use inconsistent processor naming conventions (e.g., `myorg/mustache-processor`, `myorg/handlebars-processor`) that don't follow the actual naming pattern seen in source
   - **Location**: Lines 31, 62, 81, 113, 150
   - **Fix**: Use realistic processor names like `cyan/default` or `username/processorname` format matching actual code patterns

2. **Code generation example is speculative**
   - **Problem**: The "Prisma processor" example (lines 146-161) is entirely hypothetical and doesn't correspond to any actual processor in the codebase
   - **Location**: Lines 146-161
   - **Fix**: Either remove this example or clearly mark it as hypothetical

3. **Handlebars example uses features not in SDK**
   - **Problem**: The Handlebars example shows `helpers` configuration and `{{#each}}` syntax, but the actual Handlebars processor in the codebase only supports basic variable substitution
   - **Location**: Lines 110-143
   - **Fix**: Simplify the example to match actual SDK capabilities or clarify this is for custom implementation

4. **Missing information about processor isolation**
   - **Problem**: The document doesn't mention that processors run in Docker containers with isolation
   - **Location**: Entire document
   - **Fix**: Add note about container-based execution (referenced in boron docs: `docs/developer/features/04-processor-isolation.md`)

5. **Steps for creating custom processors are too vague**
   - **Problem**: Steps 1-4 (lines 165-170) lack actionable detail and don't reference actual SDK documentation
   - **Location**: Lines 165-170
   - **Fix**: Link to actual SDK entry points like `StartProcessorWithLambda`, `ICyanProcessor` interface

### 🟠 Other Problems

1. **No mention of GlobType.Copy**
   - **Problem**: Only `GlobType.Template` is shown in examples, but `GlobType.Copy` is also available for static file copying
   - **Recommendation**: Add example showing Copy type for files that don't need processing

2. **Available Processors table is incomplete**
   - **Problem**: The table (lines 99-104) only lists `cyan/default` and a generic "Custom" entry
   - **Recommendation**: Either remove the table or populate it with actual available processors if they exist

3. **No SDK-specific guidance**
   - **Problem**: Document doesn't distinguish between Node, Python, and .NET SDK implementations
   - **Recommendation**: Add SDK-specific code examples or link to SDK documentation

4. **No error handling guidance**
   - **Problem**: No mention of how to handle errors in custom processors
   - **Recommendation**: Add section on error handling patterns

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 5 |
| 🟠 | 4 |
