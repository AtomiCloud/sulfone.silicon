<!-- source: content/docs/contributor/repositories/helium.mdx -->
# 📄 File: content/docs/contributor/repositories/helium.mdx

> Documentation for sulfone.helium SDKs is mostly accurate with minor issues in Python SDK method names and C# namespace usage.

### 🔴 Source Code Inaccuracies

1. **Python SDK IInquirer method name** | Documented: `dateSelect` | Actual: `date_select`
   - Evidence: `sdks/python/cyanprintsdk/domain/core/inquirer.py:69-71` - The method is `date_select`, not `dateSelect`

2. **Python SDK question type example uses incorrect method name** | Documented: `dateSelect` | Actual: `date_select`
   - Evidence: Documentation line 226 shows `await i.date_select(...)` which is correct, but line 226 contradicts the IInquirer table which shows `dateSelect`

3. **C# SDK namespace for imports** | Documented: `using sulfone_helium;` | Actual: Correct but uses `sulfone_helium` (underscore not hyphen)
   - Evidence: `sdks/dotnet/sulfone-helium/Server.cs:16` - namespace is `sulfone_helium`, the documented code is correct

4. **Python SDK main module path** | Documented: `from cyanprintsdk.main import start_template_with_fn` | Actual: Correct
   - Evidence: `sdks/python/cyanprintsdk/main.py:122` - Function exists and is exported correctly

5. **IDeterminism.get() signature - missing second parameter** | Documented: `d.get('unique-id')` (single argument) | Actual: `get(key: string, origin: () => string): string` (two arguments)
   - Evidence: `sdks/node/src/domain/core/deterministic.ts:2` - The interface requires both `key` and `origin` parameters
   - Evidence: `sdks/python/cyanprintsdk/domain/core/deterministic.py:7` - Python SDK also requires `origin: Callable[[], str]`
   - Evidence: `sdks/dotnet/sulfone-helium/Domain/Core/Deterministic.cs:5` - .NET SDK requires `Func<string> origin`

6. **TypeScript SDK Processor output** | Documented: `return { files: [] };` | Actual: `return { directory: "..." }`
   - Evidence: `sdks/node/src/domain/processor/output.ts:2-3` - ProcessorOutput has `directory: string`, not `files`

7. **TypeScript SDK Plugin output** | Documented: `return {};` | Actual: `return { directory: "..." }`
   - Evidence: `sdks/node/src/domain/plugin/output.ts:2` - PluginOutput has `directory: string`

8. **TypeScript SDK Resolver output** | Documented: `return {};` | Actual: `return { path: "...", content: "..." }`
   - Evidence: `sdks/node/src/domain/resolver/output.ts:1-3` - ResolverOutput has `path` and `content`

9. **C# SDK Processor signature** | Documented: `CyanProcessorInput input, CyanFileHelper fs` | Actual: Correct
   - Evidence: `sdks/dotnet/sulfone-helium/Server.cs:99-101` - Signature is `Func<CyanProcessorInput, CyanFileHelper, Task<ProcessorOutput>>`

10. **C# SDK Processor output** | Documented: `new ProcessorOutput { Files = new List<ProcessorFile>() }` | Actual: `new ProcessorOutput(string Directory)`
    - Evidence: `sdks/dotnet/sulfone-helium/Domain/Processor/Output.cs:3` - `ProcessorOutput` is a record with `Directory` property, not `Files`

11. **C# SDK Plugin output** | Documented: `new PluginOutput()` | Actual: `new PluginOutput(string Directory)`
    - Evidence: `sdks/dotnet/sulfone-helium/Domain/Plugin/Output.cs:3` - `PluginOutput` is a record with `Directory` property

12. **C# SDK Resolver output** | Documented: `new ResolverOutput()` | Actual: `new ResolverOutput(string Path, string Content)`
    - Evidence: `sdks/dotnet/sulfone-helium/Domain/Resolver/Output.cs:3` - `ResolverOutput` is a record with `Path` and `Content` properties

### 🟡 Documentation Issues

1. **Repository structure mentions `tasks/` but documentation focuses on SDKs** | Problem: The tasks directory contains test task definitions, not user-facing tasks | Recommendation: Clarify that `tasks/` is for SDK testing, not general usage

2. **Building section uses `pls` command** | Problem: Documentation uses `pls` which is atomicloud's alias for `task` | Location: Lines 330-337 | Fix: This is correct for the project context, no change needed

3. **IInquirer method name inconsistency** | Problem: Table shows `dateSelect` but Python uses `date_select` | Location: Line 46 table | Fix: Clarify that Python SDK uses snake_case (`date_select`) while TypeScript and C# use camelCase/PascalCase

### 🟠 Other Problems

1. **Python SDK installation mentions `pip install cyanprintsdk`** | Recommendation: Consider mentioning poetry as well since the project uses pyproject.toml with poetry

2. **The IDeterminism interface description is incomplete** | Problem: Documentation says "provides a `get()` method for generating deterministic values" but doesn't mention the required `origin` callback parameter | Recommendation: Update to show the full signature and explain the origin callback

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 12 |
| 🟡 | 3 |
| 🟠 | 2 |
