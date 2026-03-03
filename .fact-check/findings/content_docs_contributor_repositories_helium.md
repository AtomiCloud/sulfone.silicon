<!-- source: content/docs/contributor/repositories/helium.mdx -->

# 📄 File: content/docs/contributor/repositories/helium.mdx

> The documentation describes Helium as providing SDKs for CyanPrint templates with TypeScript, Python, and C# support. Analysis reveals significant discrepancies between documented APIs and actual implementation. The SDKs exist but use completely different APIs, package names, and patterns than documented.

### 🔴 Source Code Inaccuracies

1. **TypeScript SDK Package Name**

   - Documented: `@cyanprint/sdk`
   - Actual: `@atomicloud/cyan-sdk`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2` - `"name": "@atomicloud/cyan-sdk"`

2. **Python SDK Package Name**

   - Documented: `cyanprint-sdk`
   - Actual: `cyanprintsdk` (no hyphen)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/pyproject.toml:2` - `name = "cyanprintsdk"`

3. **C# SDK Package Name**

   - Documented: `CyanPrint.SDK`
   - Actual: `AtomiCloud.CyanPrint`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/sulfone-helium.csproj:14` - `<PackageId>AtomiCloud.CyanPrint</PackageId>`

4. **TypeScript SDK API - No `defineTemplate` function**

   - Documented: `import { defineTemplate, input, output } from '@cyanprint/sdk'`
   - Actual: Uses `StartTemplateWithLambda` function with async lambda pattern
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:140` - exports `StartTemplateWithLambda`, not `defineTemplate`

5. **TypeScript SDK API - No `input` namespace**

   - Documented: `input.string()`, `input.boolean()`, `input.number()`, `input.select()`, `input.array()`, `input.object()`
   - Actual: Uses `IInquirer` interface methods directly (e.g., `i.text()`, `i.confirm()`, `i.select()`, `i.checkbox()`, `i.password()`, `i.dateSelect()`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:3-27` - IInquirer interface defines text, confirm, select, checkbox, password, dateSelect methods

6. **TypeScript SDK - No `generate` function with `fs` parameter**

   - Documented: `async generate({ inputs, fs })` with `fs.write()` method
   - Actual: Templates return `Cyan` object with processors/plugins configuration, file handling is separate via `CyanFileHelper`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:139-169` - Returns Cyan object, no fs parameter

7. **Python SDK API - No `Template` base class**

   - Documented: `class MyTemplate(Template):` with `name`, `version`, `inputs` attributes
   - Actual: Uses `start_template_with_fn()` function with async lambda taking `IInquirer` and `IDeterminism`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/main.py:122-123` - `start_template_with_fn(f: LambdaTemplateFn)`

8. **Python SDK API - No `Input` namespace**

   - Documented: `Input.string()`, `Input.boolean()`
   - Actual: Uses `IInquirer` interface methods (e.g., `i.text()`, `i.confirm()`, `i.select()`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/inquirer.py:14-76`

9. **C# SDK API - No `Template` base class**

   - Documented: `public class MyTemplate : Template`
   - Actual: Uses `ICyanTemplate` interface or lambda function with `CyanEngine.StartTemplate`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Server.cs:108-152` - `StartTemplate(string[] args, ICyanTemplate template)` or `StartTemplate(string[] args, Func<IInquirer, IDeterminism, Task<Cyan>> f)`

10. **C# SDK API - No `[Input]` attribute**

    - Documented: `[Input(Description = "Name of the project")]` attribute on properties
    - Actual: Uses `IInquirer` interface methods to ask questions
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Inquirer.cs:5-19` - IInquirer interface

11. **File System API - Methods don't exist**

    - Documented: `fs.write()`, `fs.writeBinary()`, `fs.mkdir()`, `fs.chmod()`, `fs.copyTemplateAsset()`
    - Actual: `CyanFileHelper` has methods: `resolveAll()`, `get()`, `read()`, `copy()`, `readAsStream()`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:8-94`

12. **Input Types - No `input.number()`, `input.array()`, `input.object()`**

    - Documented: Number, array, and object input types
    - Actual: Only TextQ, SelectQ, CheckboxQ, ConfirmQ, PasswordQ, DateQ exist
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:1-79`

13. **Repository Structure - No `packages/` directory**

    - Documented: `packages/typescript/`, `packages/python/`, `packages/dotnet/`
    - Actual: `sdks/node/`, `sdks/python/`, `sdks/dotnet/`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/` directory listing

14. **Repository Structure - No `protocols/` directory**

    - Documented: `protocols/` - Shared protocol definitions
    - Actual: Does not exist
    - Evidence: `ls /Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/protocols/` returns "No such file or directory"

15. **Repository Structure - No `examples/` directory**

    - Documented: `examples/` - Example templates
    - Actual: Does not exist (test files are in SDK directories)
    - Evidence: `ls /Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/examples/` returns "No such file or directory"

16. **Build Commands - Non-existent commands**
    - Documented: `bun run build:all`, `bun run build:typescript`, `bun run build:python`, `bun run test`
    - Actual: Uses Taskfile with tasks like `task dotnet:setup`, `task node:setup`, `task python:setup`, or individual poetry/bun commands
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/Taskfile.yaml:1-40`

### 🟡 Documentation Issues

1. **Completely Wrong API Patterns**

   - Problem: Documentation shows a declarative config-based API (`defineTemplate` with `inputs` object) but actual SDK uses functional/inquirer pattern with async questions
   - Location: Lines 46-75 (TypeScript), 114-131 (Python), 143-165 (C#)
   - Fix: Rewrite all code examples to match actual SDK patterns using IInquirer interface

2. **Missing Concept: Determinism**

   - Problem: Documentation never mentions `IDeterminism` interface which is core to all SDKs
   - Location: Throughout the document
   - Fix: Add section explaining determinism and the `d.get()` pattern

3. **Missing Concept: Cyan Output Structure**

   - Problem: Documentation shows `generate()` function writing files directly, but actual SDK returns `Cyan` object with `plugins` and `processors` arrays
   - Location: Lines 64-74
   - Fix: Document the `Cyan`, `CyanProcessor`, `CyanGlob` types and how file processing works

4. **Missing Question Types Documentation**

   - Problem: Only string/boolean/number/select/array/object mentioned, but actual types are text/confirm/select/checkbox/password/date
   - Location: Lines 77-102
   - Fix: Replace with actual question types: TextQ, ConfirmQ, SelectQ, CheckboxQ, PasswordQ, DateQ

5. **Wrong Python Import Statement**
   - Problem: `from cyanprint import Template, Input, Output`
   - Actual: `from cyanprintsdk.domain.core.question import TextQ, ConfirmQ, ...` and `from cyanprintsdk.main import start_template_with_fn`
   - Location: Line 115
   - Fix: Update import to match actual package structure

### 🟠 Other Problems

1. **Documentation appears to be for a different SDK version or product**

   - Problem: The documented API patterns bear no resemblance to the actual implementation. The documented patterns look like a config-based template system while actual SDK is an inquirer-based question system
   - Recommendation: Verify if documentation was written for a different product or if SDK was completely redesigned. Consider marking documentation as needing complete rewrite

2. **No version alignment**

   - Problem: Documentation doesn't specify SDK version. SDKs are at v2.1.0 but docs may describe v1.x or a planned future version
   - Recommendation: Add version information to documentation and ensure it matches the actual SDK version

3. **Tech Stack table needs correction**
   - Problem: Package names are all wrong and the "Purpose" column is vague
   - Recommendation: Update with correct package names (@atomicloud/cyan-sdk, cyanprintsdk, AtomiCloud.CyanPrint) and clarify that they build HTTP services for CyanPrint components

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 16    |
| 🟡       | 5     |
| 🟠       | 3     |
