# 📄 File: content/docs/contributor/repositories/helium.mdx

> Documentation for the Helium repository which provides CyanPrint SDKs. The documentation contains significant inaccuracies regarding package names, repository structure, and API usage.

### 🔴 Source Code Inaccuracies

1. **TypeScript Package Name**
   - Documented: `@cyanprint/sdk`
   - Actual: `@atomicloud/cyan-sdk`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2` shows `"name": "@atomicloud/cyan-sdk"`

2. **Python Package Name**
   - Documented: `cyanprint-sdk`
   - Actual: `cyanprintsdk` (no hyphen)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/pyproject.toml:2` shows `name = "cyanprintsdk"`

3. **C# Package Name**
   - Documented: `CyanPrint.SDK`
   - Actual: `AtomiCloud.CyanPrint`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/sulfone-helium.csproj:14` shows `<PackageId>AtomiCloud.CyanPrint</PackageId>`

4. **Repository Structure**
   - Documented: `packages/typescript/`, `packages/python/`, `packages/dotnet/`, `protocols/`, `examples/`
   - Actual: `sdks/node/`, `sdks/python/`, `sdks/dotnet/` - no `packages/`, `protocols/`, or `examples/` directories exist
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/` root directory contains `sdks/` not `packages/`, and neither `protocols/` nor `examples/` directories exist

5. **TypeScript SDK Import Statement**
   - Documented: `import { defineTemplate, input, output } from '@cyanprint/sdk';`
   - Actual: SDK exports `StartTemplate`, `StartTemplateWithLambda`, `StartProcessor`, `StartProcessorWithLambda`, `StartPlugin`, `StartPluginWithLambda`, `StartResolver`, `StartResolverWithLambda`, `CyanFileHelper`, `GlobType`, `QuestionType` - no `defineTemplate`, `input`, or `output` exports
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:169-207` shows actual exports

6. **TypeScript Template Definition Pattern**
   - Documented: Uses `defineTemplate()` function with `inputs` and `generate()` method
   - Actual: Uses class-based `ICyanTemplate` interface with `template(inquirer: IInquirer, determinism: IDeterminism): Promise<Cyan>` method
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:11-13` shows the actual interface

7. **TypeScript Input Types API**
   - Documented: `input.string()`, `input.boolean()`, `input.number()`, `input.select()`, `input.array()`, `input.object()`
   - Actual: No `input` object exists. Instead, SDK uses `IInquirer` interface with methods: `text()`, `confirm()`, `select()`, `checkbox()`, `password()`, `dateSelect()`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:3-27` shows actual inquirer interface

8. **Python SDK Import Statement**
   - Documented: `from cyanprint import Template, Input, Output`
   - Actual: SDK uses `from cyanprintsdk.domain.core.cyan_script import ICyanTemplate, ICyanProcessor, ICyanPlugin, ICyanResolver`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/main.py:22-27` shows actual imports

9. **Python Template Definition Pattern**
   - Documented: Class-based with `name`, `version`, `inputs` attributes and `generate()` method
   - Actual: Uses abstract class `ICyanTemplate` with `template(inquirer: IInquirer, determinism: IDeterminism) -> Cyan` method
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan_script.py:17-20` shows actual interface

10. **Python Package Installation Command**
    - Documented: `pip install cyanprint-sdk`
    - Actual: Should be `pip install cyanprintsdk` (no hyphen)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/pyproject.toml:2` shows package name is `cyanprintsdk`

11. **C# SDK Namespace and Pattern**
    - Documented: `using CyanPrint;` with `Template` base class, `[Input]` attributes, `Generate()` method
    - Actual: Uses `sulfone_helium` namespace with `ICyanTemplate` interface having `Template(IInquirer inquirer, IDeterminism determinism)` method
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/CyanScript.cs:8-11` shows actual interface

12. **File System API**
    - Documented: `fs.write()`, `fs.writeBinary()`, `fs.mkdir()`, `fs.chmod()`, `fs.copyTemplateAsset()`
    - Actual: `CyanFileHelper` class provides: `resolveAll()`, `readAsStream()`, `get()`, `read()`, `copy()` methods with different signatures
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:8-94` shows actual implementation

13. **Build Commands**
    - Documented: `bun run build:all`, `bun run build:typescript`, `bun run build:python`, `bun run test`
    - Actual: Uses Taskfile with commands like `task setup`, `task template`, `task resolver`. No `build:all`, `build:typescript`, `build:python` scripts exist
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/Taskfile.yaml` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:13-15` shows no such scripts

### 🟡 Documentation Issues

1. **Incorrect Installation Instructions**
   - Problem: TypeScript SDK installation shows wrong package name
   - Location: Lines 38-42
   - Fix: Change `@cyanprint/sdk` to `@atomicloud/cyan-sdk`

2. **Missing SDK Concept Explanation**
   - Problem: Documentation doesn't explain that SDKs are HTTP server-based (not CLI libraries). Templates/Processors/Plugins/Resolvers run as HTTP services with specific ports
   - Location: Entire TypeScript/Python/C# SDK sections
   - Fix: Add explanation that SDKs start HTTP servers (Template:5550, Processor:5551, Plugin:5552, Resolver:5553)

3. **Missing Core Exports**
   - Problem: Documentation doesn't mention `ICyanProcessor`, `ICyanPlugin`, `ICyanResolver` interfaces which are equally important
   - Location: SDK usage sections
   - Fix: Document all four interface types (Template, Processor, Plugin, Resolver)

4. **Incorrect Python Package Reference**
   - Problem: Python import uses `cyanprint` but package is `cyanprintsdk`
   - Location: Lines 114-115
   - Fix: Update import to `from cyanprintsdk import ...`

5. **Missing IInquirer Methods Documentation**
   - Problem: Documentation shows non-existent `input.*` methods but doesn't document actual `IInquirer` methods (text, confirm, select, checkbox, password, dateSelect)
   - Location: Lines 77-102
   - Fix: Replace with actual inquirer methods and their signatures

### 🟠 Other Problems

1. **Documentation Appears Fabricated**
   - Problem: The entire API documentation appears to be written without reference to actual source code. None of the documented patterns match the implementation
   - Recommendation: Rewrite entire SDK documentation based on actual source code in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/`

2. **No Version Information**
   - Problem: Documentation doesn't mention SDK version (currently 2.1.0)
   - Recommendation: Add version information from pyproject.toml and package.json

3. **Missing Determinism Interface**
   - Problem: `IDeterminism` interface is used in actual code but not documented
   - Recommendation: Document the `IDeterminism` interface that templates receive

4. **Missing Cyan Output Type**
   - Problem: Templates return `Cyan` type containing `processors` and `plugins` arrays, not files directly
   - Recommendation: Document the `Cyan` interface structure

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 13 |
| 🟡 | 5 |
| 🟠 | 4 |
