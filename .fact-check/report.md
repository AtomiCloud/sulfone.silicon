# Fact Check Report

> Generated: 2026-03-03
> Docs: content/docs/ (105 files)
> Sources: ../argon, ../boron, ../helium, ../iridium, ../zinc
> Findings: 129 files analyzed

## Overall Summary

| Category                    | Total Issues |
| --------------------------- | ------------ |
| 🔴 Source Code Inaccuracies | 712          |
| 🟡 Documentation Issues     | 529          |
| 🟠 Other Problems           | 369          |
| **Total**                   | **1610**     |

## Files with Issues

| File                                                     | 🔴  | 🟡  | 🟠  | Total |
| -------------------------------------------------------- | --- | --- | --- | ----- |
| developer/templates/reference/sdk/typesx                 | 28  | 3   | 3   | 34    |
| contributor/development/setupx                           | 17  | 7   | 4   | 28    |
| contributor/repositories/iridiumx                        | 15  | 7   | 5   | 27    |
| developer/processors/reference/sdk/typesx                | 18  | 4   | 4   | 26    |
| contributor/repositories/zincx                           | 15  | 6   | 4   | 25    |
| developer/templates/reference/dockerfilesx               | 12  | 8   | 5   | 25    |
| contributor/development/setup                            | 16  | 4   | 4   | 24    |
| contributor/repositories/boron                           | 14  | 5   | 5   | 24    |
| contributor/repositories/helium                          | 16  | 5   | 3   | 24    |
| developer/templates/reference/project-structurex         | 11  | 9   | 4   | 24    |
| contributor/repositories/zinc                            | 15  | 3   | 5   | 23    |
| developer/templates/reference/cyan-yamlx                 | 13  | 7   | 3   | 23    |
| contributor/repositories/argon                           | 17  | 3   | 2   | 22    |
| contributor/repositories/heliumx                         | 13  | 5   | 4   | 22    |
| developer/templates/explanation/client-statex            | 13  | 5   | 4   | 22    |
| contributor/repositories/boronx                          | 13  | 4   | 4   | 21    |
| developer/processors/reference/sdk/file-helperx          | 10  | 6   | 4   | 20    |
| user/reference/cli-commandsx                             | 11  | 5   | 4   | 20    |
| developer/plugins/reference/cyan-yamlx                   | 9   | 7   | 3   | 19    |
| developer/templates/reference/sdk/indexx                 | 10  | 6   | 3   | 19    |
| contributor/repositories/argonx                          | 12  | 4   | 2   | 18    |
| contributor/architecture/execution-flowx                 | 9   | 4   | 4   | 17    |
| developer/processors/explanation/input-configx           | 6   | 6   | 5   | 17    |
| developer/processors/reference/cyan-yamlx                | 9   | 5   | 3   | 17    |
| developer/processors/reference/project-structurex        | 9   | 5   | 3   | 17    |
| contributor/architecture/execution-flow                  | 6   | 6   | 4   | 16    |
| contributor/repositories/iridium                         | 7   | 5   | 4   | 16    |
| developer/templates/explanation/docker-vs-cyan-registryx | 7   | 4   | 5   | 16    |
| developer/templates/how-to/indexx                        | 7   | 3   | 6   | 16    |
| developer/templates/how-to/push-to-registryx             | 6   | 5   | 5   | 16    |
| developer/templates/reference/sdk/inquirerx              | 8   | 5   | 3   | 16    |
| developer/processors/explanation/memory-loadingx         | 7   | 5   | 3   | 15    |
| developer/processors/how-to/push-to-registryx            | 6   | 6   | 3   | 15    |
| developer/templates/explanation/3-way-mergex             | 6   | 5   | 4   | 15    |
| developer/templates/explanation/container-pathsx         | 7   | 5   | 3   | 15    |
| developer/templates/reference/sdk/cyan-configx           | 6   | 6   | 3   | 15    |
| developer/plugins/reference/dockerfilex                  | 6   | 5   | 3   | 14    |
| developer/plugins/reference/project-structurex           | 7   | 3   | 4   | 14    |
| developer/processors/how-to/stream-large-filesx          | 5   | 6   | 3   | 14    |
| developer/processors/reference/sdk/input-outputx         | 7   | 5   | 2   | 14    |
| developer/templates/explanation/cyan-objectx             | 8   | 4   | 2   | 14    |
| developer/templates/explanation/determinismx             | 6   | 5   | 3   | 14    |
| developer/templates/how-to/ask-checkboxx                 | 5   | 6   | 3   | 14    |
| developer/templates/how-to/pin-determinismx              | 7   | 4   | 3   | 14    |
| developer/templates/tutorials/full-examplex              | 6   | 5   | 3   | 14    |
| user/indexx                                              | 7   | 4   | 3   | 14    |
| developer/plugins/explanation/execution-order            | 4   | 5   | 4   | 13    |
| developer/plugins/explanation/execution-orderx           | 6   | 4   | 3   | 13    |
| developer/plugins/how-to/conditional-executionx          | 5   | 5   | 3   | 13    |
| developer/plugins/how-to/push-to-registryx               | 5   | 5   | 3   | 13    |
| developer/processors/reference/dockerfilex               | 5   | 5   | 3   | 13    |
| developer/processors/reference/sdk/start-processorx      | 5   | 5   | 3   | 13    |
| developer/templates/how-to/use-custom-processorx         | 4   | 5   | 4   | 13    |
| user/reference/registry-uix                              | 4   | 6   | 3   | 13    |
| developer/basics/architecturex                           | 6   | 4   | 2   | 12    |
| developer/basics/introduction                            | 4   | 5   | 3   | 12    |
| developer/plugins/reference/sdk/indexx                   | 4   | 5   | 3   | 12    |
| developer/processors/explanation/why-processorsx         | 4   | 4   | 4   | 12    |
| developer/templates/explanation/indexx                   | 5   | 4   | 3   | 12    |
| developer/templates/how-to/compose-templatesx            | 5   | 5   | 2   | 12    |
| developer/templates/how-to/default-valuesx               | 5   | 4   | 3   | 12    |
| developer/templates/indexx                               | 5   | 4   | 3   | 12    |
| developer/plugins/explanation/indexx                     | 2   | 5   | 4   | 11    |
| developer/plugins/explanation/what-are-plugins           | 3   | 4   | 4   | 11    |
| developer/plugins/how-to/push-to-registry                | 3   | 5   | 3   | 11    |
| developer/processors/how-to/lazy-load-filesx             | 6   | 3   | 2   | 11    |
| developer/templates/how-to/add-pluginsx                  | 4   | 4   | 3   | 11    |
| developer/templates/how-to/conditional-filesx            | 3   | 5   | 3   | 11    |
| developer/templates/reference/indexx                     | 4   | 4   | 3   | 11    |
| developer/templates/tutorials/02-adding-variablesx       | 4   | 4   | 3   | 11    |
| user/tutorials/get-startedx                              | 3   | 5   | 3   | 11    |
| contributor/architecture/overviewx                       | 3   | 4   | 3   | 10    |
| developer/plugins/explanation/plugins-vs-processorsx     | 3   | 4   | 3   | 10    |
| developer/plugins/how-to/conditional-execution           | 2   | 5   | 3   | 10    |
| developer/plugins/how-to/indexx                          | 3   | 4   | 3   | 10    |
| developer/plugins/how-to/run-commands                    | 2   | 4   | 4   | 10    |
| developer/plugins/how-to/run-commandsx                   | 4   | 3   | 3   | 10    |
| developer/plugins/index                                  | 3   | 4   | 3   | 10    |
| developer/plugins/reference/sdk/typesx                   | 5   | 3   | 2   | 10    |
| developer/processors/explanation/read-write-dirsx        | 5   | 3   | 2   | 10    |
| developer/processors/explanation/stateless-naturex       | 4   | 4   | 2   | 10    |
| developer/processors/how-to/copy-filesx                  | 5   | 3   | 2   | 10    |
| developer/processors/reference/sdk/indexx                | 5   | 3   | 2   | 10    |
| developer/processors/tutorials/first-processorx          | 3   | 5   | 2   | 10    |
| developer/templates/explanation/default-processorx       | 4   | 4   | 2   | 10    |
| developer/templates/tutorials/01-blank-templatex         | 4   | 3   | 3   | 10    |
| developer/templates/tutorials/indexx                     | 5   | 3   | 2   | 10    |
| developer/plugins/reference/sdk/input-outputx            | 3   | 3   | 3   | 9     |
| developer/plugins/tutorials/first-pluginx                | 3   | 4   | 2   | 9     |
| developer/templates/how-to/ask-datex                     | 5   | 2   | 2   | 9     |
| developer/templates/how-to/ask-passwordx                 | 2   | 4   | 3   | 9     |
| developer/templates/how-to/pass-images-binariesx         | 3   | 3   | 3   | 9     |
| developer/templates/how-to/validate-inputx               | 4   | 3   | 2   | 9     |
| developer/templates/reference/sdk/globbingx              | 2   | 3   | 4   | 9     |
| contributor/indexx                                       | 3   | 3   | 2   | 8     |
| contributor/repositories/indexx                          | 4   | 2   | 2   | 8     |
| developer/basics/architecture                            | 2   | 4   | 2   | 8     |
| developer/basics/introductionx                           | 1   | 5   | 2   | 8     |
| developer/processors/indexx                              | 2   | 4   | 2   | 8     |
| developer/templates/tutorials/03-changing-globx          | 2   | 3   | 3   | 8     |
| developer/templates/tutorials/04-asking-questionsx       | 3   | 3   | 2   | 8     |
| user/how-to/create-projectx                              | 2   | 4   | 2   | 8     |
| user/how-to/installx                                     | 3   | 3   | 2   | 8     |
| user/how-to/update-projectx                              | 0   | 5   | 3   | 8     |
| contributor/architecture/overview                        | 2   | 3   | 2   | 7     |
| developer/plugins/explanation/index                      | 2   | 3   | 2   | 7     |
| developer/plugins/explanation/plugins-vs-processors      | 3   | 3   | 1   | 7     |
| developer/plugins/explanation/what-are-pluginsx          | 2   | 3   | 2   | 7     |
| developer/plugins/how-to/index                           | 2   | 3   | 2   | 7     |
| developer/plugins/indexx                                 | 2   | 3   | 2   | 7     |
| developer/plugins/reference/sdk/start-pluginx            | 3   | 2   | 2   | 7     |
| developer/processors/how-to/access-configx               | 2   | 3   | 2   | 7     |
| developer/processors/how-to/resolve-all-filesx           | 3   | 2   | 2   | 7     |
| user/explanation/3-way-mergex                            | 1   | 4   | 2   | 7     |
| user/explanation/template-lifecyclex                     | 3   | 3   | 1   | 7     |
| contributor/repositories/index                           | 0   | 4   | 2   | 6     |
| developer/plugins/how-to/modify-filesx                   | 0   | 4   | 2   | 6     |
| developer/templates/how-to/ask-confirmx                  | 1   | 3   | 2   | 6     |
| contributor/index                                        | 1   | 2   | 2   | 5     |
| developer/basics/quickstartx                             | 0   | 2   | 3   | 5     |
| developer/index                                          | 1   | 2   | 2   | 5     |
| developer/templates/explanation/processors-vs-pluginsx   | 2   | 2   | 1   | 5     |
| developer/templates/how-to/use-keysx                     | 0   | 3   | 2   | 5     |
| user/how-to/browse-templatesx                            | 1   | 2   | 2   | 5     |
| developer/basics/quickstart                              | 0   | 1   | 3   | 4     |
| developer/plugins/how-to/modify-files                    | 1   | 2   | 1   | 4     |
| developer/plugins/reference/indexx                       | 0   | 1   | 2   | 3     |
| developer/plugins/tutorials/indexx                       | 0   | 3   | 0   | 3     |
| developer/indexx                                         | 0   | 0   | 0   | 0     |

---

## Detailed Findings

### developer/templates/reference/sdk/typesx

<!-- source: content/docs/developer/templates/reference/sdk/types.mdx -->

# 📄 File: content/docs/developer/templates/reference/sdk/types.mdx

> Documentation for CyanPrint SDK type definitions (@atomicloud/cyan-sdk v2.1.0) but contains significant naming mismatches and missing/incorrect field definitions compared to actual source code.

### 🔴 Source Code Inaccuracies

1. **GlobType.Ignore enum value does not exist**

   - Documented: `GlobType { Template = 0, Copy = 1, Ignore = 2 }`
   - Actual: `enum GlobType { Template = 0, Copy = 1 }` - only two values
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`

2. **ICyanConfig interface name is wrong - actual is Cyan**

   - Documented: `interface ICyanConfig`
   - Actual: `interface Cyan`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27`

3. **Cyan.plugins is required, not optional**

   - Documented: `plugins?: IPlugin[]`
   - Actual: `plugins: CyanPlugin[]` (required, no optional marker)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27`

4. **IProcessor interface name is wrong - actual is CyanProcessor**

   - Documented: `interface IProcessor`
   - Actual: `interface CyanProcessor`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:18-22`

5. **IProcessor.config type is unknown, not Record<string, any>**

   - Documented: `config: Record<string, any>`
   - Actual: `config: unknown`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:21`

6. **IFileGroup interface name is wrong - actual is CyanGlob**

   - Documented: `interface IFileGroup`
   - Actual: `interface CyanGlob`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11`

7. **CyanGlob.root is optional, not required**

   - Documented: `root: string` (required)
   - Actual: `root?: string | null` (optional)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7`

8. **IPlugin interface name is wrong - actual is CyanPlugin**

   - Documented: `interface IPlugin`
   - Actual: `interface CyanPlugin`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:13-16`

9. **CyanPlugin.config type is unknown, not Record<string, any>**

   - Documented: `config: Record<string, any>`
   - Actual: `config: unknown`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:15`

10. **IInquirer shorthand parameter name is 'help' not 'desc'**

    - Documented: `text(message: string, id: string, desc?: string)`
    - Actual: `text(q: string, id: string, help?: string | null)`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:20-22`

11. **IInquirer.dateSelect returns string, not Date**

    - Documented: `dateSelect(...): Promise<Date>`
    - Actual: `dateSelect(...): Promise<string>`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26`

12. **IDefine interface does not exist - actual is IDeterminism with different API**

    - Documented: `interface IDefine { uuid(), timestamp(), seq(namespace) }`
    - Actual: `interface IDeterminism { get(key: string, origin: () => string): string }`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-3`

13. **ITextQuestion interface name is wrong - actual is TextQ**

    - Documented: `interface ITextQuestion`
    - Actual: `interface TextQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:64-73`

14. **TextQ has additional 'initial' field not documented**

    - Documented: Only `default?: string`
    - Actual: Has both `default?: string | null` and `initial?: string | null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:71-72`

15. **ISelectQuestion interface name is wrong - actual is SelectQ**

    - Documented: `interface ISelectQuestion`
    - Actual: `interface SelectQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:54-62`

16. **SelectQ.validate is null, not a function**

    - Documented: `validate?: (selected: string) => string | null`
    - Actual: `validate?: null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:59`

17. **SelectQ does not have default field**

    - Documented: `default?: string`
    - Actual: No default field exists
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:54-62`

18. **IConfirmQuestion interface name is wrong - actual is ConfirmQ**

    - Documented: `interface IConfirmQuestion`
    - Actual: `interface ConfirmQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:21-30`

19. **ConfirmQ has 'errorMessage' field not documented**

    - Documented: No errorMessage field
    - Actual: `errorMessage?: string | null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:29`

20. **ICheckboxQuestion interface name is wrong - actual is CheckboxQ**

    - Documented: `interface ICheckboxQuestion`
    - Actual: `interface CheckboxQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:11-19`

21. **CheckboxQ.validate is null, not a function**

    - Documented: `validate?: (selected: string[]) => string | null`
    - Actual: `validate?: null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:16`

22. **CheckboxQ does not have default field**

    - Documented: `default?: string[]`
    - Actual: No default field exists
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:11-19`

23. **IPasswordQuestion interface name is wrong - actual is PasswordQ**

    - Documented: `interface IPasswordQuestion`
    - Actual: `interface PasswordQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:44-52`

24. **PasswordQ has 'confirmation' field not documented**

    - Documented: No confirmation field
    - Actual: `confirmation?: boolean | null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:51`

25. **IDateQuestion interface name is wrong - actual is DateQ**

    - Documented: `interface IDateQuestion`
    - Actual: `interface DateQ`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:32-42`

26. **DateQ.validate parameter is string, not Date**

    - Documented: `validate?: (date: Date) => string | null`
    - Actual: `validate?: (input: string) => string | null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:37`

27. **DateQ has minDate and maxDate fields not documented**

    - Documented: Only default field
    - Actual: Has `minDate?: Date | null` and `maxDate?: Date | null`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:40-41`

28. **ValidateFunction type alias does not exist**
    - Documented: `type ValidateFunction<T> = (input: T) => string | null`
    - Actual: Not exported from SDK
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:183-207` - not in export list

### 🟡 Documentation Issues

1. **Question interface desc fields should include null type**

   - Problem: All question interfaces show `desc?: string` but actual types are `desc?: string | null`
   - Location: All question interfaces (lines 166-242)
   - Fix: Add `| null` to desc field types

2. **Usage example parameter naming inconsistent**

   - Problem: IInquirer shorthand forms documented with `desc` parameter but actual API uses `help`
   - Location: Lines 131-136
   - Fix: Change `desc?: string` to `help?: string | null`

3. **Object vs shorthand form distinction unclear**
   - Problem: QuestionType example uses `desc` property in object form but shorthand form uses different parameter
   - Location: Lines 57-62
   - Fix: Clarify distinction between object form properties and shorthand form parameters

### 🟠 Other Problems

1. **Interface naming convention mismatch**

   - Problem: Documentation uses I-prefix convention (IProcessor, IPlugin, IFileGroup) but actual SDK uses Cyan-prefix (CyanProcessor, CyanPlugin, CyanGlob) and Q-suffix for questions (TextQ, SelectQ)
   - Recommendation: Update all interface names to match actual SDK naming convention

2. **IDefine section is entirely fabricated**

   - Problem: The IDefine interface section (lines 150-160) documents an interface that does not exist in the SDK
   - Recommendation: Remove section and document actual IDeterminism interface with `get(key, origin)` method

3. **ValidateFunction section documents non-existent type**
   - Problem: Type alias section documents a type that doesn't exist in SDK
   - Recommendation: Remove this section entirely

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 28    |
| 🟡       | 3     |
| 🟠       | 3     |

---

### contributor/development/setupx

# File: content/docs/contributor/development/setup.mdx

> This document covers development setup instructions for contributing to CyanPrint, including prerequisites, quick start guides, repository-specific setup, development workflow, code style, testing, IDE setup, and troubleshooting.

### Source Code Inaccuracies

1. **Boron language mismatch**

   - Documented: Boron is listed under "Rust (Iridium/Boron/Zinc)" and shows Rust commands (`cargo build`, `cargo test`)
   - Actual: Boron is a Go project, not Rust
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod` shows `module github.com/AtomiCloud/sulfone.boron` with `go 1.24.0`; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/main.go` contains Go code; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/Taskfile.yaml` shows `go build` and `go run` commands

2. **Zinc language mismatch**

   - Documented: Zinc is listed under "Rust (Iridium/Boron/Zinc)" and shows Rust commands (`cargo build`, `cargo test`, `sqlx migrate run`, `cargo run --bin seed`)
   - Actual: Zinc is a .NET/C# project, not Rust
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj` shows `<TargetFramework>net8.0</TargetFramework>`; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml` shows `dotnet` commands

3. **Boron setup instructions incorrect**

   - Documented: `docker-compose up -d postgres`, `sqlx migrate run`, `cargo run -- --config config/local.yaml`
   - Actual: No `config/local.yaml` exists, no postgres dependency, uses Go not Cargo
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/artifact/docker-compose.yml` shows only a `boron` service with no postgres; no `config/` directory exists in boron repository

4. **Zinc setup instructions incorrect**

   - Documented: `docker-compose up -d postgres elasticsearch`, `sqlx migrate run`, `cargo run --bin seed`, `cargo run`
   - Actual: Zinc uses `dotnet ef migrations` for migrations, Tilt for development, and k3d for local Kubernetes. No docker-compose, sqlx, or cargo
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml` shows `dotnet ef migrations` commands; no `docker-compose*.yml` files exist; no elasticsearch dependency found

5. **Iridium config/dev.toml does not exist**

   - Documented: `cp config/dev.toml ~/.config/cyan-print/config.toml`
   - Actual: No `config/` directory exists in the iridium repository
   - Evidence: `ls /Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/` shows no `config/` directory

6. **cargo-make not required for Iridium**

   - Documented: `cargo install cargo-make` as additional setup for Iridium
   - Actual: Iridium uses Taskfile (go-task) for task running, not cargo-make
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Taskfile.yaml` exists; no references to cargo-make found

7. **Helium Python SDK uses Poetry, not pip**

   - Documented: `pip install -e ".[dev]"` and `pytest`
   - Actual: Python SDK uses Poetry for dependency management
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/pyproject.toml` uses Poetry build system; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/Taskfile.yaml` shows `poetry install` and `poetry run python`

8. **Helium TypeScript SDK uses bun, not shown correctly**

   - Documented: Shows `bun install` and `bun run build` for TypeScript SDK under `packages/typescript`
   - Actual: The TypeScript SDK is under `sdks/node` not `packages/typescript`, and uses `bun install` but has no build script in Taskfile
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/Taskfile.yaml` shows setup with `bun install`; directory structure is `sdks/node` not `packages/typescript`

9. **Helium directory structure incorrect**

   - Documented: `cd packages/typescript`, `cd ../python`, `cd ../dotnet`
   - Actual: SDKs are under `sdks/` not `packages/`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/` contains `dotnet`, `node`, and `python` directories

10. **Argon uses bun, not shown correctly in prerequisite table**

    - Documented: Argon is TypeScript (correct), but implies npm compatibility
    - Actual: Argon uses bun exclusively (correct in tab but should be clearer)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml` shows `bun i`, `bun run dev`, `bun run build`

11. **Argon has no .env.example file**

    - Documented: `cp .env.example .env.local`
    - Actual: No `.env.example` file exists, only `.envrc` and `.env`
    - Evidence: Glob search found only `.envrc` and `.env` files, no `.env.example`

12. **Argon test command is different**

    - Documented: `bun run test`
    - Actual: The test command runs both integration and unit tests via npm script
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json` line 9 shows `"test": "npm run test:integration && npm run test:unit"`

13. **No docker-compose.test.yml exists**

    - Documented: `docker-compose -f docker-compose.test.yml up -d` for integration tests
    - Actual: No `docker-compose.test.yml` file found in any repository
    - Evidence: Glob search for `**/docker-compose.test.yml` returned no results

14. **Zinc has no seed binary**

    - Documented: `cargo run --bin seed` for Zinc
    - Actual: Zinc is .NET, not Rust, and has no seed command
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml` shows no seed-related commands

15. **Prerequisites language assignments incorrect**

    - Documented: Rust 1.75+ for Iridium, Boron, Zinc
    - Actual: Rust is only for Iridium; Boron uses Go 1.24; Zinc uses .NET 8.0
    - Evidence: See above evidence for each project

16. **Python prerequisite incomplete**

    - Documented: Python 3.11+ for Helium Python SDK
    - Actual: Correct, but should also mention Poetry as it's required for dependency management
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/pyproject.toml` shows Poetry build system

17. **Missing Go prerequisite**
    - Documented: No Go version listed
    - Actual: Go 1.24+ is required for Boron
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod` shows `go 1.24.0`

### Documentation Issues

1. **Missing Go language in tabs**

   - Problem: The Install Dependencies tabs group doesn't include Go (Boron)
   - Location: Lines 37-95
   - Fix: Add a new tab for Go with appropriate setup commands (`go mod tidy`, `go build`, `go test ./...`)

2. **Incorrect tab group label**

   - Problem: Tab label "Rust (Iridium/Boron/Zinc)" incorrectly groups three projects under Rust
   - Location: Line 38
   - Fix: Change to "Rust (Iridium)" and create separate tabs for Go (Boron) and .NET (Zinc)

3. **Repository-specific setup sections need reordering**

   - Problem: Boron and Zinc sections show incorrect commands for wrong languages
   - Location: Lines 116-149 (Boron), Lines 132-149 (Zinc)
   - Fix: Rewrite Boron section with Go commands and Zinc section with .NET commands

4. **Test commands table incorrect**

   - Problem: Boron shows `cargo test`, Zinc shows `cargo test`
   - Location: Lines 261-270
   - Fix: Boron should show `go test ./...` or `go test ./...`; Zinc should show `dotnet test`

5. **Code Style section missing Go**

   - Problem: No Go code style section for Boron
   - Location: Lines 221-253
   - Fix: Add Go section with `go fmt` and `golangci-lint` commands

6. **Code Style section incorrect for .NET**

   - Problem: No .NET code style section for Zinc
   - Location: Lines 221-253
   - Fix: Add .NET section with `dotnet format` command

7. **Argon lint command incorrect**
   - Problem: Shows `bun run lint:fix` or `biome lint --write .`
   - Actual: Argon uses eslint (no lint:fix script exists)
   - Location: Lines 237-240
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json` line 12 shows `"lint": "eslint"`

### Other Problems

1. **Python SDK pytest command may need Poetry wrapper**

   - Problem: Documentation shows `pytest` directly but Poetry manages the environment
   - Recommendation: Change to `poetry run pytest` for consistency with Poetry-based setup

2. **Iridium init command may be incorrect**

   - Problem: Documentation shows `cargo run -- init test-project`
   - Recommendation: Verify the CLI subcommand structure in the actual codebase

3. **Silicon setup already documented correctly**

   - The Silicon (documentation) setup section is accurate
   - Evidence: Commands match the current repository structure

4. **Integration test section lacks repository-specific details**
   - Problem: Generic integration test instructions may not apply to all repositories
   - Recommendation: Provide repository-specific integration test instructions or note which repos support them

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 17    |
| Documentation Issues     | 7     |
| Other Problems           | 4     |

---

### contributor/repositories/iridiumx

# File: content/docs/contributor/repositories/iridium.mdx

> Documentation for the CyanPrint CLI tool (Iridium), describing its architecture, commands, and configuration.

## Source Code Inaccuracies

### 1. Incorrect Key Files Directory Structure

**Documented**: The key files table lists `src/commands/`, `src/config/`, `src/api/`, and `src/executor/` directories
**Actual**: Only `commands.rs` (single file) exists. The directories `src/config/`, `src/api/`, and `src/executor/` do NOT exist.
**Evidence**:

- `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/` contains:
  - `commands.rs` (single file, not a directory)
  - `coord.rs`
  - `errors.rs`
  - `main.rs`
  - `run.rs`
  - `update.rs`
  - `update/` (directory with modular update system)
  - `util.rs`
- Directories `config/`, `api/`, `executor/` do not exist

### 2. Incorrect API Client Description

**Documented**: `src/api/` - API client for Zinc registry
**Actual**: The API client is in `cyanregistry/src/http/client.rs` (different crate)
**Evidence**: The `CyanRegistryClient` is defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/http/client.rs`

### 3. Incorrect Executor Communication Description

**Documented**: `src/executor/` - Communication with Boron executor
**Actual**: The coordinator client is in `cyancoordinator/src/client.rs` (different crate)
**Evidence**: The `CyanCoordinatorClient` is defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/client.rs`

### 4. Incorrect Commands - `init` Command Does Not Exist

**Documented**: `cyan print init <project-name> --template <template-id>`
**Actual**: The command is `cyanprint create <template-ref> [path]` (not `init`)
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46` shows `Create` subcommand with `template_ref` and optional `path` arguments

### 5. Incorrect Commands - `search` Command Does Not Exist

**Documented**: `cyan print search <query>` lists available templates
**Actual**: No `search` command exists in the CLI
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs` only defines: `Push`, `Create`, `Update`, `Daemon`

### 6. Incorrect Commands - `config` Command Does Not Exist

**Documented**: `cyan print config set <key> <value>`
**Actual**: No `config` command exists in the CLI
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs` only defines: `Push`, `Create`, `Update`, `Daemon`

### 7. Incorrect Commands - `auth login` Command Does Not Exist

**Documented**: `cyan print auth login`
**Actual**: No `auth` command exists. Authentication is handled via `--token` flag or `CYAN_TOKEN` environment variable
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:116-117` shows `#[arg(short, long, value_name = "API_TOKEN", env = "CYAN_TOKEN")] pub token: String`

### 8. Incorrect Binary Name

**Documented**: Commands use `cyan print` as the binary name
**Actual**: The binary is named `cyanprint` (single word, no space)
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/Cargo.toml:2` shows `name = "cyanprint"`

### 9. Incorrect Configuration File Path

**Documented**: Configuration stored in `~/.config/cyan-print/config.toml`
**Actual**: No configuration file at this path exists. Configuration is handled via CLI arguments and environment variables
**Evidence**: No code references `~/.config/cyan-print/` path. Configuration comes from:

- `--registry` flag / `CYANPRINT_REGISTRY` env var
- `--coordinator-endpoint` flag / `CYANPRINT_COORDINATOR` env var
- `--token` flag / `CYAN_TOKEN` env variable

### 10. Incorrect Configuration File Format

**Documented**: TOML configuration file with `[registry]`, `[executor]`, `[auth]` sections
**Actual**: No configuration file is used. All settings are CLI flags or environment variables
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:9-24` shows registry is a CLI argument with env fallback, not a config file

### 11. Incorrect Default Registry URL

**Documented**: `url = "https://registry.cyanprint.dev"`
**Actual**: Default registry is `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:13` shows `default_value = "https://api.zinc.sulfone.raichu.cluster.atomi.cloud"`

### 12. Incorrect Default Coordinator URL

**Documented**: `url = "https://executor.cyanprint.dev"` with `timeout = "5m"`
**Actual**: Default coordinator is `http://coord.cyanprint.dev:9000` (no timeout in config)
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:42` shows `default_value = "http://coord.cyanprint.dev:9000"`

### 13. Incorrect Architecture Diagram - Missing Components

**Documented**: Architecture shows "Template Resolver", "Update Handler", "Registry Client", "Executor Client"
**Actual**: The actual components are:

- `TemplateOperator` and `CompositionOperator` (in cyancoordinator)
- `CyanRegistryClient` (in cyanregistry)
- `CyanCoordinatorClient` (in cyancoordinator)
- VFS system with 3-way merge
  **Evidence**: See `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/run.rs` and `update.rs`

### 14. Missing Workspace Crate Structure

**Documented**: Only mentions `src/main.rs` as entry point
**Actual**: Iridium is a multi-crate workspace with 4 crates: `cyanprint`, `cyanprompt`, `cyanregistry`, `cyancoordinator`
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Cargo.toml:5-10` shows workspace members

### 15. Incorrect `update` Command Syntax

**Documented**: `cyan print update <project-name>`
**Actual**: `cyanprint update [path]` with optional `--interactive` flag
**Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:48-72` shows Update takes `path` (default: ".") and `--interactive` flag

## Documentation Issues

### 1. Missing Push Command Documentation

**Problem**: The `push` command is not documented at all
**Location**: Commands section
**Fix**: Add documentation for `push` subcommands:

- `cyanprint push template <blob-image> <blob-tag> <template-image> <template-tag>`
- `cyanprint push group` (for template groups without Docker artifacts)
- `cyanprint push plugin <image> <tag>`
- `cyanprint push processor <image> <tag>`

### 2. Missing Daemon Command Documentation

**Problem**: The `daemon` command is not documented
**Location**: Commands section
**Fix**: Add documentation for `cyanprint daemon [version] --port <PORT> --registry <URL>`

### 3. Missing Environment Variables Documentation

**Problem**: Environment variables are not documented
**Location**: Configuration section
**Fix**: Document `CYANPRINT_REGISTRY`, `CYANPRINT_COORDINATOR`, and `CYAN_TOKEN` environment variables

### 4. Outdated Architecture Description

**Problem**: Architecture diagram and description don't reflect the actual modular design
**Location**: Architecture section
**Fix**: Update to reflect the 4-crate workspace structure and actual component names

### 5. Missing Template State File Documentation

**Problem**: The `.cyan_state.yaml` file used for tracking template history is not mentioned
**Location**: Configuration section
**Fix**: Add documentation for the template state file format

### 6. Missing Interactive Mode Documentation

**Problem**: The `--interactive` flag for `update` command is not documented
**Location**: Commands section
**Fix**: Document the interactive version selection feature

### 7. Missing Debug Flag Documentation

**Problem**: The `--debug` / `-d` flag is not documented
**Location**: Commands section
**Fix**: Add documentation for the debug output flag

## Other Problems

### 1. Inconsistent Command Naming Convention

**Problem**: Documentation uses `cyan print` (two words) but actual binary is `cyanprint` (one word)
**Recommendation**: Update all command examples to use correct `cyanprint` binary name

### 2. Missing Crate Dependencies

**Problem**: Tech stack table misses key dependencies like `bollard` (Docker), `inquire` (prompts), `serde_yaml`, `chrono`
**Recommendation**: Update tech stack table to include all major dependencies

### 3. Missing Build Tooling Documentation

**Problem**: Documentation mentions `cargo` commands but project uses Nix and `pls` task runner
**Recommendation**: Add documentation for Nix development environment and `pls` commands

### 4. Repository URL May Be Incorrect

**Problem**: Documentation shows `github.com/AtomiCloud/sulfone.iridium` but this should be verified
**Recommendation**: Verify the actual GitHub repository URL

### 5. Missing Contributing Details

**Problem**: Contributing section is generic and doesn't mention project-specific requirements like `pls lint` mandate
**Recommendation**: Add project-specific contributing guidelines from LLM.MD

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 15    |
| Documentation Issues     | 7     |
| Other Problems           | 5     |

---

### developer/processors/reference/sdk/typesx

<!-- source: content/docs/developer/processors/reference/sdk/types.mdx -->

# 📄 File: content/docs/developer/processors/reference/sdk/types.mdx

> Documentation for processor SDK type definitions with significant inaccuracies compared to actual source code in helium/sdks/node/src. Many documented types are fictional or have wrong signatures.

### 🔴 Source Code Inaccuracies

1. **CyanGlob.root property is optional, not required**

   - Documented: `root: string` (required with example `"templates"`)
   - Actual: `root?: string | null` (optional, can be null)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7` - `root?: string | null;`

2. **CyanGlob.exclude is required, not optional**

   - Documented: `exclude?: string[]` (marked as @optional)
   - Actual: `exclude: string[]` (required, no optional marker)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:9` - `exclude: string[];`

3. **CyanGlob is missing required `type` property**

   - Documented: Only `root`, `glob`, `exclude` properties
   - Actual: Has `type: GlobType` property which is required
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:10` - `type: GlobType;`

4. **VirtualFileReference.load() method does not exist**

   - Documented: `load(): Promise<string>` - "Load file content, returns Promise resolving to file content"
   - Actual: No `load()` method exists. Instead there is `readFile(): VirtualFile` (synchronous, returns VirtualFile, not Promise<string>)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:26-29` - `readFile(): VirtualFile { ... }`

5. **VirtualFileReference.writeFile() does not exist**

   - Documented: `writeFile(content: string): void` - "Write content to output directory"
   - Actual: No `writeFile(content: string)` method on VirtualFileReference. Must call `readFile()` first to get VirtualFile, then call `writeFile()` on that.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - VirtualFileReference class has no writeFile method

6. **VirtualFileReference.copy() does not exist**

   - Documented: `copy(): void` - "Copy file to output without loading"
   - Actual: No `copy()` method on VirtualFileReference. Copying is done via `CyanFileHelper.copy(glob)`.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - VirtualFileReference class has no copy method

7. **VirtualFileReference has undocumented `read` and `write` getter properties**

   - Documented: Not mentioned
   - Actual: Has `read: string` and `write: string` getters for full paths
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:18-24`

8. **VirtualFileStream interface is completely different**

   - Documented: Has `relative: string`, `read(): AsyncIterable<Buffer>`, `writeFile(content: string): void`
   - Actual: Has `reader: fs.ReadStream`, `writer: fs.WriteStream` (no `relative`, no `read()` method, no `writeFile()` method)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9` - `constructor(public reader: fs.ReadStream, public writer: fs.WriteStream)`

9. **VirtualFile has undocumented `read` and `write` getter properties**

   - Documented: Only `content`, `relative`, `writeFile()` mentioned
   - Actual: Also has `read: string` and `write: string` getters for full paths
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:40-46`

10. **VirtualFile has undocumented `baseRead` and `baseWrite` properties**

    - Documented: Not mentioned
    - Actual: Constructor takes `baseRead: string`, `baseWrite: string`, `relative: string`, `content: string`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-38`

11. **VirtualFileReference has undocumented `baseRead` and `baseWrite` properties**

    - Documented: Not mentioned
    - Actual: Constructor takes `baseRead: string`, `baseWrite: string`, `relative: string`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:12-16`

12. **ProcessorHandler type is not exported; actual type is LambdaProcessorFn**

    - Documented: `type ProcessorHandler = (input: ProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>`
    - Actual: The type is `LambdaProcessorFn` and uses `CyanProcessorInput` (not `ProcessorInput`). `CyanProcessorInput` has `readDir`/`writeDir` (not `readDirectory`/`writeDirectory`).
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/processor/lambda.ts:6` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16`

13. **StartProcessorWithLambda handler receives CyanProcessorInput, not ProcessorInput**

    - Documented: Handler parameter type is `ProcessorHandler` with `ProcessorInput`
    - Actual: Handler receives `CyanProcessorInput` with `readDir` and `writeDir` (not `readDirectory` and `writeDirectory`)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `readDir: string; writeDir: string;`

14. **ProcessorError, FileNotFoundError, TransformError classes do not exist**

    - Documented: Full class definitions with constructors for `ProcessorError`, `FileNotFoundError`, `TransformError`
    - Actual: These error classes do not exist in the SDK
    - Evidence: Grep search for these class names in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks` returned no matches

15. **Utility Types (VariableConfig, FeatureConfig, FormatConfig, ProcessorConfig) do not exist**

    - Documented: Full interface definitions for config patterns
    - Actual: These are not defined anywhere in the SDK - they are example/documentation-only patterns
    - Evidence: These appear to be illustrative examples, not actual SDK types

16. **Type Guards example function `isVariableConfig` does not exist**

    - Documented: Full function implementation
    - Actual: This function does not exist in the SDK
    - Evidence: Not found in SDK source - appears to be an illustrative example

17. **CyanFileHelper is a class, not an interface**

    - Documented: Shown as `interface CyanFileHelper`
    - Actual: It's exported as a class with a constructor
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:8` - `export class CyanFileHelper`

18. **CyanFileHelper has undocumented `readDir` and `writeDir` getter properties**
    - Documented: Not mentioned
    - Actual: Has `readDir: string` and `writeDir: string` getters
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:15-21`

### 🟡 Documentation Issues

1. **Inconsistent property naming between layers**

   - Problem: Documentation uses `readDirectory`/`writeDirectory` but the actual processor handler receives `readDir`/`writeDir` (CyanProcessorInput). The `ProcessorInput` interface exists separately with `readDirectory`/`writeDirectory` but is internal to ProcessorService.
   - Location: ProcessorInput section and Handler Function section
   - Fix: Clarify that `ProcessorInput` is the API request model, while handlers receive `CyanProcessorInput` with shortened property names, OR document both and explain the mapping.

2. **VirtualFile types are classes, not interfaces**

   - Problem: All VirtualFile types are documented as interfaces but are actually classes with constructors
   - Location: VirtualFile, VirtualFileReference, VirtualFileStream sections
   - Fix: Update to show as classes with constructor signatures

3. **Missing GlobType enum documentation**

   - Problem: `GlobType` enum is required for CyanGlob but not documented
   - Location: CyanGlob section
   - Fix: Add GlobType enum documentation showing `Template = 0` and `Copy = 1`

4. **Example code in Type Guards section won't work as shown**
   - Problem: The example uses `input.config` but shows `isVariableConfig(input.config)` - this would work but the `VariableConfig` interface doesn't exist in SDK
   - Location: Type Guards section
   - Fix: Mark this as "Example pattern" not actual SDK types, or remove if misleading

### 🟠 Other Problems

1. **VirtualFileStream documentation is entirely fictional**

   - Problem: The documented interface bears no resemblance to the actual implementation. The actual class just wraps Node.js streams directly.
   - Recommendation: Either rewrite to match actual implementation (ReadStream/WriteStream) or remove this section if streaming API is not intended for direct use.

2. **Documentation mixes internal and public API**

   - Problem: `ProcessorInput` is an internal type used by ProcessorService, while the actual handler function receives `CyanProcessorInput`. This creates confusion.
   - Recommendation: Document `CyanProcessorInput` as the primary type that handlers receive, or clearly distinguish between external API types and internal types.

3. **Error classes section should be removed or marked as examples**

   - Problem: Error classes are documented as if they exist in the SDK but they don't
   - Recommendation: Remove this section or clearly mark it as "Suggested patterns for custom error handling"

4. **Utility Types section should be marked as examples**
   - Problem: Config interfaces are presented as SDK types but don't exist
   - Recommendation: Clearly label as "Common patterns" or "Example configurations" rather than presenting as SDK types

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 18    |
| 🟡       | 4     |
| 🟠       | 4     |

---

### contributor/repositories/zincx

# File: content/docs/contributor/repositories/zinc.mdx

> This documentation describes Zinc as the CyanPrint registry API built with Rust/Axum, storing template metadata with PostgreSQL and Elasticsearch. The documentation covers tech stack, key files, architecture, API endpoints, data model, building, and configuration.

### Source Code Inaccuracies

1. **Tech Stack - Programming Language**

   - Documented: Rust as primary language with Axum web framework, SQLx for database access, Tower for middleware
   - Actual: .NET 8 (C#) with ASP.NET Core, Entity Framework Core, FluentValidation
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj:4` shows `<TargetFramework>net8.0</TargetFramework>`. The project uses ASP.NET Core packages like `Microsoft.AspNetCore.Authentication.JwtBearer`, `Npgsql.EntityFrameworkCore.PostgreSQL`, etc. No Rust/Cargo files exist in the repository.

2. **Tech Stack - Web Framework**

   - Documented: Axum
   - Actual: ASP.NET Core with API versioning (`Asp.Versioning.Http`)
   - Evidence: Controllers in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/` use `[ApiController]` and `[Route]` attributes from ASP.NET Core.

3. **Tech Stack - Database Access**

   - Documented: SQLx
   - Actual: Entity Framework Core with Npgsql PostgreSQL provider
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj:36` shows `Npgsql.EntityFrameworkCore.PostgreSQL` package.

4. **Tech Stack - Middleware**

   - Documented: Tower
   - Actual: ASP.NET Core built-in middleware pipeline
   - Evidence: No Tower or Rust middleware libraries exist. Configuration in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/StartUp/` shows .NET middleware patterns.

5. **Key Files - Directory Structure**

   - Documented: `src/main.rs`, `src/api/`, `src/models/`, `src/auth/`, `src/storage/`
   - Actual: No `src/` directory exists. Actual structure is `App/Program.cs`, `App/Modules/Cyan/API/V1/Controllers/`, `App/Modules/Cyan/Data/Models/`, `App/StartUp/Options/Auth/`, `App/StartUp/BlockStorage/`
   - Evidence: `ls /Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/src/` returns "No such file or directory". Entry point is `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Program.cs`.

6. **Architecture - Search Service with Elasticsearch**

   - Documented: Search Service connecting to Elasticsearch (ES)
   - Actual: No Elasticsearch integration. Search is done via PostgreSQL full-text search (`NpgsqlTsVector`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Models/TemplateData.cs:26` shows `NpgsqlTsVector SearchVector` for full-text search. No Elasticsearch packages or configuration found.

7. **API Endpoints - Templates**

   - Documented: `GET /api/v1/templates`, `GET /api/v1/templates/{id}`, `GET /api/v1/templates/search?q={query}`, `GET /api/v1/templates/{id}/versions`
   - Actual: Endpoints use different patterns: `GET /api/v1/template` (search), `GET /api/v1/template/id/{userId}/{templateId:guid}`, `GET /api/v1/template/slug/{username}/{name}`, `GET /api/v1/template/slug/{username}/{templateName}/versions`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:24` shows `[Route("api/v{version:apiVersion}/[controller]")]` which resolves to `/api/v1/template` (singular).

8. **API Endpoints - Authentication**

   - Documented: `POST /api/v1/auth/login`, `POST /api/v1/auth/refresh`, `POST /api/v1/auth/logout`
   - Actual: No auth controller or these endpoints exist. Authentication is handled via JWT bearer tokens validated by external identity provider. No login/refresh/logout endpoints in the codebase.
   - Evidence: Grep for "auth/login", "auth/refresh", "auth/logout" returns no matching controller endpoints. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/StartUp/Options/Auth/AuthOption.cs` shows JWT bearer authentication configuration.

9. **API Endpoints - Users**

   - Documented: `GET /api/v1/users/me`, `PATCH /api/v1/users/me`
   - Actual: `GET /api/v1/user/Me`, `GET /api/v1/user/{id}`, `PUT /api/v1/user/{id}` (not PATCH)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Users/API/V1/UserController.cs:21` shows `[Route("api/v{version:apiVersion}/[controller]")]` resolving to `/api/v1/user`. Line 45 shows `[HttpGet("Me")]`, line 118 shows `[HttpPut("{id}")]` not PATCH.

10. **Data Model - USERS table**

    - Documented: `uuid id PK`, `string email`, `string password_hash`, `timestamp created_at`
    - Actual: `string Id` (not uuid), `string Username` - no email, no password_hash, no created_at fields
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/User.cs:20-24` shows `UserPrincipal` with `string Id` and `UserRecord` with `Username` only. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Users/Data/UserData.cs:6-9` confirms no email, password_hash, or created_at.

11. **Data Model - TEMPLATES table**

    - Documented: `uuid id PK`, `string name`, `string description`, `uuid author_id FK`, `jsonb input_schema`, `timestamp created_at`
    - Actual: Has `Guid Id`, `string Name`, `string Description`, `string UserId`, but NO `input_schema` field, and created_at is in versions not templates. Additional fields: `Project`, `Source`, `Email`, `Tags`, `Readme`, `Downloads`, `SearchVector`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Models/TemplateData.cs:6-35` shows all fields.

12. **Data Model - VERSIONS table**

    - Documented: `uuid id PK`, `uuid template_id FK`, `string version`, `string container_image`, `timestamp created_at`
    - Actual: `Guid Id`, `Guid TemplateId`, `ulong Version` (not string), `string BlobDockerReference`, `string BlobDockerTag`, `string TemplateDockerReference`, `string TemplateDockerTag`, `DateTime CreatedAt`, `string Description`, `bool Empty`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Models/TemplateVersionData.cs:3-37` shows actual fields.

13. **Building - Commands**

    - Documented: `cargo build`, `cargo build --release`, `cargo test`, `sqlx migrate run`, `cargo run -- --config config/local.yaml`
    - Actual: `dotnet build`, `dotnet test`, `dotnet ef migrations`, `dotnet run` or `dotnet watch run`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml:37-40` shows `dotnet build --no-restore`. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml:17-18` shows `dotnet ef migrations`.

14. **Configuration - File Name**

    - Documented: `zinc-config.yaml`
    - Actual: `settings.yaml`, `settings.{landscape}.yaml`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Program.cs:15-16` shows configuration loading.

15. **Configuration - Structure**
    - Documented: `server.http_addr`, `database.url`, `auth.jwt_secret`, `auth.token_expiry`, `storage.type`, `storage.bucket`, `storage.region`
    - Actual: Different structure: `Kestrel.Endpoints.Http.Url`, `Database.Main.Host/Port/User/Password/Database`, `Auth.Settings.Domain/Audience/TokenValidation`, `BlockStorage.Main.Host/Port/Bucket/Policy` (no region)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml:1-200` shows actual configuration structure.

### Documentation Issues

1. **Missing Entity Types**

   - Problem: Documentation only mentions Templates, Versions, Tags, and Users. The actual system has Plugins, Processors, and Resolvers as first-class entities with their own versioning.
   - Location: Architecture diagram and Data Model sections
   - Fix: Add Plugin, Processor, Resolver entities and their relationships to the architecture diagram and data model

2. **Missing Controllers/APIs**

   - Problem: Documentation only covers Template and User endpoints. Missing PluginController, ProcessorController, ResolverController with their full API surface.
   - Location: API Endpoints section
   - Fix: Document `/api/v1/plugin`, `/api/v1/processor`, `/api/v1/resolver` endpoints

3. **Missing Token Management**

   - Problem: Documentation doesn't mention API token management which is a significant feature (`/api/v1/user/{userId}/tokens`)
   - Location: API Endpoints section
   - Fix: Add token CRUD endpoints: GET/POST/PUT/DELETE tokens, POST revoke token

4. **Incorrect Route Naming**

   - Problem: Controller name is singular (`TemplateController` -> `/api/v1/template`, `UserController` -> `/api/v1/user`)
   - Location: API Endpoints section
   - Fix: Change all `/api/v1/templates` to `/api/v1/template` and `/api/v1/users` to `/api/v1/user`

5. **Missing Like Functionality**

   - Problem: Templates, Plugins, Processors, Resolvers all support like/unlike functionality which is not documented
   - Location: API Endpoints section
   - Fix: Add like endpoints for each entity type

6. **Missing Push Endpoints**
   - Problem: All entity types have a `/push/{username}` endpoint for atomic create-or-update operations
   - Location: API Endpoints section
   - Fix: Document push endpoints

### Other Problems

1. **Repository Description**

   - Problem: Documentation describes Zinc as "CyanPrint registry API" but README.MD says "App API - Microservice written in .NET 8"
   - Recommendation: Update documentation title and description to accurately reflect the .NET implementation

2. **Architecture Diagram Mismatch**

   - Problem: Architecture diagram shows Rust-based services (Auth Middleware, API Routes, Template/User/Search Services) but actual architecture uses ASP.NET Core middleware pipeline and different service structure
   - Recommendation: Redraw architecture diagram to show .NET ASP.NET Core architecture with actual modules (Cyan, Users, System)

3. **Clients Section**

   - Problem: Diagram shows "Iridium CLI" and "Argon Web UI" as clients, but this should be verified against those codebases
   - Recommendation: Verify client names and connections are accurate

4. **Configuration Schema**
   - Problem: Configuration example shows a simplified YAML that doesn't match the actual complex nested structure with OpenTelemetry, tracing, metrics, etc.
   - Recommendation: Either provide a simplified example that clearly indicates it's simplified, or show the full configuration structure

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 15    |
| Documentation Issues     | 6     |
| Other Problems           | 4     |

---

### developer/templates/reference/dockerfilesx

<!-- source: content/docs/developer/templates/reference/dockerfiles.mdx -->

# 📄 File: content/docs/developer/templates/reference/dockerfiles.mdx

> Reference documentation for template and blob Dockerfile configuration in CyanPrint templates. The documentation contains significant discrepancies when compared against actual source code from iridium e2e templates, helium SDK Dockerfiles, and the task-spec.md specification.

### 🔴 Source Code Inaccuracies

(for each: Documented | Actual | file:line evidence)

1. **Base Image for Template Dockerfiles** | Documented: `FROM node:20-alpine` | Actual: `FROM oven/bun:1.1.31` (e2e templates), `FROM oven/bun:1.0.30` (helium SDK), `FROM python:3.11-slim` (Python SDK), `FROM mcr.microsoft.com/dotnet/sdk:8.0` (.NET SDK) | iridium/e2e/template1/cyan/Dockerfile:1, helium/sdks/node/template.Dockerfile:1

2. **Package Manager Commands** | Documented: `RUN npm install` and `CMD ["node", "index.ts"]` | Actual: `RUN bun install` and `CMD ["bun", "run", "index.ts"]` | iridium/e2e/template1/cyan/Dockerfile:6,8

3. **Working Directory** | Documented: `WORKDIR /workspace` | Actual: `WORKDIR /app` | iridium/e2e/template1/cyan/Dockerfile:2

4. **Template Source Path (COPY Commands)** | Documented: `COPY cyan/package.json ./` and `COPY cyan/ ./` | Actual: Dockerfile is built from within the `cyan/` directory, so `COPY package.json .` and `COPY . .` are used | iridium/e2e/template1/cyan/Dockerfile:4-7, iridium/e2e/publish-template.sh:33-37

5. **Blob Dockerfile Structure** | Documented: Simple `COPY cyan/templates/ /templates/` pattern | Actual: Complex multi-stage build with tar archival: `RUN rm -rf cyan && mkdir -p /cyanprint/artifact && tar -czvf /cyanprint/artifact/cyan.tar.gz /src/` and `CMD [ "tar", "-xzf", "/cyanprint/artifact/cyan.tar.gz", "-C", "/workspace/cyanprint", "--strip-components=1" ]` | iridium/e2e/template1/blob.Dockerfile:8,14

6. **Blob Base Image** | Documented: `FROM alpine:latest` or `FROM scratch` | Actual: `FROM alpine:3.21 as base` | iridium/e2e/template1/blob.Dockerfile:1

7. **Directory Structure - cyan/templates/ Does Not Exist** | Documented: `COPY cyan/templates/ /templates/` | Actual: No `cyan/templates/` directory exists in any source project. Template files are in `template/` directory at the root level (sibling to `cyan/`) | iridium/e2e/template1/template/ directory exists, glob search confirmed no cyan/templates/

8. **cyan/static/ and cyan/configs/ Directories** | Documented: `COPY cyan/static/ /static/` and `COPY cyan/configs/ /configs/` | Actual: These directories do not exist in any source project | Glob search for **/cyan/static/** and **/cyan/configs/** returned no results

9. **Multi-Stage Build Example** | Documented: `RUN npm run build` and `COPY --from=builder /build/dist/ ./` | Actual: .NET SDK uses `dotnet publish` with different paths; Node templates use Bun without a build step | helium/sdks/dotnet/template.Dockerfile:14

10. **Missing LABEL Directive** | Documented: No LABEL directive in examples | Actual: `LABEL cyanprint.dev=true` is present in all e2e template Dockerfiles | iridium/e2e/template1/cyan/Dockerfile:3

11. **Missing SDK Port Documentation** | Documented: No mention of port 5550 | Actual: Template SDK hosts API on port 5550 for `/init` and `/validate` endpoints | spec/v1/CU-86et8z80y/task-spec.md:276-279

12. **Blob Destination Path Wrong** | Documented: `COPY cyan/templates/ /templates/` | Actual: Must extract to `/workspace/cyanprint/` (not `/templates/`) | spec/v1/CU-86et8z80y/task-spec.md:269-272

### 🟡 Documentation Issues

(for each: Problem | Location | Fix)

1. **Wrong Runtime Examples** | Documentation uses `node:20-alpine` and `npm` commands throughout (lines 25-81) | Update examples to use Bun (`oven/bun:1.1.31`) as the primary runtime, matching actual implementation

2. **Incorrect Directory Paths** | The `cyan/templates/` directory path is referenced throughout but does not exist | Lines 78, 92, 100, 112, 160, 165 | Update to reflect actual structure where template files are in `template/` at root level

3. **Non-existent Directories Documented** | The `cyan/static/` and `cyan/configs/` directories are documented but do not exist | Lines 101-102 | Remove these examples or clarify they are optional/conceptual

4. **Overly Simplified Blob Dockerfile** | Blob Dockerfile example doesn't match the actual tar-based archival implementation | Lines 87-113 | Update to show actual multi-stage tar-based pattern used in production

5. **Missing Required LABEL** | No `LABEL cyanprint.dev=true` directive in template Dockerfile examples | Lines 25-81 | Add LABEL directive to all examples as it's required

6. **Incomplete .dockerignore** | Example is minimal compared to actual implementation | Lines 143-151 | Expand to include common exclusions like `nix`, `.direnv`, `flake.nix`, etc.

7. **Inconsistent Best Practices** | Template Dockerfile section recommends Node.js while processor/plugin docs use Bun | Align with processor and plugin Dockerfile documentation which correctly use Bun

8. **Image Size Table Outdated** | Table references `node:alpine` and `node:slim` but actual implementation uses `oven/bun` | Lines 206-212 | Update table to include Bun image sizes

### 🟠 Other Problems

(for each: Problem | Recommendation)

1. **No Multi-Language SDK Coverage** | Documentation doesn't mention the different runtime options (Bun vs Node.js vs Python vs .NET) | Add a section showing Dockerfile patterns for different language SDKs with tabbed examples

2. **Build Context Not Explained** | Docs suggest building from project root with `-f cyan/template.Dockerfile`, but actual script builds from within `cyan/` directory | Clarify build context and path differences; add note about `./cyan` context vs repo root

3. **Inconsistent Terminology** | publish-template.sh uses `$template-script` naming, but docs call it "template image" | Clarify naming conventions between "template image" and "script image"

4. **Missing Container Path Context** | No explanation of `/workspace/cyanprint/` vs `/workspace` paths and their significance | Cross-reference or include content from container-paths.mdx for context

5. **No Debugging Guidance** | Missing guidance on how to debug Dockerfile issues locally | Add section on running containers locally to verify paths and configuration

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 12    |
| 🟡       | 8     |
| 🟠       | 5     |

---

### contributor/development/setup

<!-- source: content/docs/contributor/development/setup.mdx -->

# File: content/docs/contributor/development/setup.mdx

> This documentation describes development setup for CyanPrint repositories, but contains multiple inaccuracies regarding technology stacks, configuration files, and commands. Several repositories use different languages and tools than documented.

### Source Code Inaccuracies

1. **Boron Technology Stack**

   - Documented: Rust project using `cargo build`, `cargo test`, `sqlx migrate run`
   - Actual: Go project (go 1.24.0), uses `go mod tidy`, `go build`, `go run`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod` line 1-5 shows `module github.com/AtomiCloud/sulfone.boron` and `go 1.24.0`. Taskfile.yaml line 31 shows `go mod tidy`, line 48 shows `go build`.

2. **Zinc Technology Stack**

   - Documented: Rust project using `cargo build`, `cargo test`, `sqlx migrate run`, with docker-compose for postgres and elasticsearch
   - Actual: .NET 8.0 project using `dotnet build`, `dotnet test`, Entity Framework migrations (`dotnet ef migrations`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj` line 4 shows `<TargetFramework>net8.0</TargetFramework>`. Taskfile.yml lines 18, 24, 30 use `dotnet ef migrations`.

3. **Iridium cargo-make Requirement**

   - Documented: Requires `cargo install cargo-make` for task running
   - Actual: Uses go-task (Taskfile.yaml), not cargo-make
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Taskfile.yaml` exists and defines tasks. No cargo-make references found.

4. **Iridium config/dev.toml File**

   - Documented: `cp config/dev.toml ~/.config/cyan-print/config.toml`
   - Actual: No `config/dev.toml` file exists in the repository
   - Evidence: Glob search for `**/dev.toml` and `**/config.toml` in iridium returned no files.

5. **Boron docker-compose for postgres**

   - Documented: `docker-compose up -d postgres`
   - Actual: docker-compose.yml exists at `artifact/docker-compose.yml` but only defines a boron service, no postgres service
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/artifact/docker-compose.yml` only defines `boron` service and `cyanprint` network.

6. **Boron local.yaml config**

   - Documented: `cargo run -- --config config/local.yaml`
   - Actual: No `config/local.yaml` file exists; Boron is Go-based, not Rust
   - Evidence: Glob search for `**/local.yaml` in boron returned no files.

7. **Zinc docker-compose for postgres and elasticsearch**

   - Documented: `docker-compose up -d postgres elasticsearch`
   - Actual: No docker-compose files found in zinc repository; uses Kubernetes/Helm charts
   - Evidence: Glob search for `**/*docker-compose*` in zinc returned no files.

8. **Zinc seed binary**

   - Documented: `cargo run --bin seed`
   - Actual: No seed binary exists; Zinc is .NET-based, not Rust
   - Evidence: Zinc uses Entity Framework migrations, not cargo.

9. **Argon .env.example file**

   - Documented: `cp .env.example .env.local`
   - Actual: No `.env.example` file exists in the repository
   - Evidence: Glob search for `**/.env.example*` in argon returned no files.

10. **Argon NEXT_PUBLIC_API_URL environment variable**

    - Documented: `# NEXT_PUBLIC_API_URL=http://localhost:8080`
    - Actual: No such variable used; actual .env uses AUTH_SECRET, DESCOPE_ID, DESCOPE_SECRET, PUBLIC_LANDSCAPE
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/.env` contains different variables.

11. **Helium TypeScript SDK directory structure**

    - Documented: `cd packages/typescript`
    - Actual: SDK located at `sdks/node`, not `packages/typescript`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/` exists.

12. **Helium Python SDK setup command**

    - Documented: `pip install -e ".[dev]"`
    - Actual: Uses poetry (`poetry install`)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/Taskfile.yaml` line 7 shows `poetry install`. pyproject.toml confirms poetry usage.

13. **Python pytest command**

    - Documented: `pytest` for testing
    - Actual: Uses poetry to run tests (`poetry run python template_test.py`)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/Taskfile.yaml` lines 19, 23 show poetry-based commands.

14. **Boron sqlx migrate run**

    - Documented: `sqlx migrate run` for database migrations
    - Actual: No sqlx usage; Boron is a Go project without sqlx migrations
    - Evidence: Grep for "sqlx" in boron returned no files. No migrations directory found.

15. **Zinc sqlx migrate run**

    - Documented: `sqlx migrate run` for database migrations
    - Actual: Uses Entity Framework Core migrations (`dotnet ef migrations`)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml` lines 14-30 show `dotnet ef migrations` commands.

16. **Silicon test command**
    - Documented: `bun run test` in testing table
    - Actual: No test script defined in package.json; silicon Taskfile has no test task
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon/package.json` has no "test" script. Taskfile.yaml only has setup, dev, build tasks.

### Documentation Issues

1. **Repository directory names incorrect**

   - Problem: Documentation uses `sulfone.REPO_NAME` and `cd sulfone.iridium` etc.
   - Location: Lines 30-33, 101-114, 118-130, 134-149, 153-165, 168-185, 188-201
   - Fix: Update to match actual repository directory structure

2. **Prerequisites table incorrect for Boron and Zinc**

   - Problem: Lists Rust 1.75+ for Iridium, Boron, Zinc but only Iridium uses Rust
   - Location: Lines 21-22
   - Fix: Update to show Go for Boron and .NET for Zinc

3. **VS Code extensions recommendations incomplete**

   - Problem: Recommends Rust and Python extensions but not Go extension for Boron
   - Location: Lines 293-304
   - Fix: Add Go extension for Boron development

4. **Integration tests section inaccurate**
   - Problem: Shows `cargo test --features integration` but this doesn't apply to Go or .NET projects
   - Location: Lines 272-285
   - Fix: Provide separate integration test commands per language/ecosystem

### Other Problems

1. **Code Style section incomplete**

   - Problem: Missing Go formatting section for Boron
   - Recommendation: Add Go section with `go fmt` and `golangci-lint` commands

2. **Helium SDK structure unclear**

   - Problem: Documentation shows `packages/typescript`, `packages/python`, `packages/dotnet` but actual structure is `sdks/node`, `sdks/python`, `sdks/dotnet`
   - Recommendation: Update directory paths to match actual structure

3. **Missing Nix/direnv setup documentation**

   - Problem: All repositories use Nix flakes and direnv for development environment, but this is not mentioned
   - Recommendation: Add section on Nix/direnv setup as it's used across all repositories

4. **Missing go-task (Task) documentation**
   - Problem: All repositories use Taskfile.yaml with go-task, but documentation focuses on cargo/npm/pip commands
   - Recommendation: Document go-task as the primary task runner and show `task setup`, `task dev`, `task build` commands

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 16    |
| Documentation Issues     | 4     |
| Other Problems           | 4     |

---

### contributor/repositories/boron

<!-- source: content/docs/contributor/repositories/boron.mdx -->

# 📄 File: content/docs/contributor/repositories/boron.mdx

> Documentation describes Boron as a Rust-based gRPC service, but the actual implementation is a Go HTTP/REST service using Gin framework. Multiple structural and API claims are incorrect.

### 🔴 Source Code Inaccuracies

1. **Tech Stack - Primary Language**

   - Documented: Rust as primary language
   - Actual: Go 1.24 (see `go.mod` line 3: `go 1.24.0`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod:3`

2. **Tech Stack - Async Runtime**

   - Documented: Tokio (Rust async runtime)
   - Actual: No Tokio; Go uses goroutines natively
   - Evidence: No Cargo.toml or Rust files exist; project uses Go concurrency

3. **Tech Stack - gRPC Framework**

   - Documented: Tonic (Rust gRPC framework)
   - Actual: No gRPC; uses Gin HTTP framework
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod:9` shows `github.com/gin-gonic/gin v1.9.1`

4. **Tech Stack - Database Access**

   - Documented: SQLx
   - Actual: No SQLx; no database access layer exists in the codebase
   - Evidence: No SQL/database imports in `go.mod` or any `.go` files

5. **Tech Stack - Missing Actual Technologies**

   - Documented: Tokio, Tonic, SQLx
   - Actual: Uses `urfave/cli/v2` for CLI, `docker/docker` client, `google/uuid`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod:7-12`

6. **Key Files Structure**

   - Documented: `src/main.rs`, `src/scheduler/`, `src/executor/`, `src/api/`, `src/resources/`
   - Actual: `main.go`, `server.go`, `model.go` at root; `docker_executor/` package containing `docker.go`, `executor.go`, `merger.go`, etc.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/` directory listing

7. **API Protocol**

   - Documented: gRPC with `Executor` service
   - Actual: REST HTTP API using Gin framework
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:28-614` shows Gin routes like `r.GET("/")`, `r.POST("/executor")`, `r.DELETE("/executor/:sessionId")`

8. **API Endpoints**

   - Documented: `SubmitJob`, `GetJobStatus`, `StreamJobOutput`, `CancelJob` gRPC methods
   - Actual: REST endpoints: `GET /`, `POST /executor`, `DELETE /executor/:sessionId`, `POST /executor/:sessionId`, `POST /executor/:sessionId/warm`, `POST /template/warm`, `POST /proxy/template/:cyanId/api/template/init`, `POST /proxy/template/:cyanId/api/template/validate`, `POST /merge/:sessionId`, `POST /zip`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:30-612`

9. **Server Port**

   - Documented: gRPC on port 50051
   - Actual: HTTP on port 9000
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:614` shows `r.Run(":9000")`

10. **Configuration File Format**

    - Documented: `boron-config.yaml` with `server.grpc_addr`, `database.url`, etc.
    - Actual: No configuration file used; uses CLI flags (e.g., `--registry` flag)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/main.go:43-55` shows CLI-based configuration

11. **Docker Network Name**

    - Documented: `cyan-bridge`
    - Actual: `cyanprint`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:24` shows `const networkName = "cyanprint"`

12. **Resource Management**

    - Documented: CPU/memory limits and timeouts via YAML configuration
    - Actual: No resource limit configuration; only `ParallelismLimit` based on `runtime.NumCPU()`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/main.go:67` shows `cpu := rt.NumCPU()`

13. **Database**

    - Documented: PostgreSQL database for job queue
    - Actual: No database; state managed in-memory and via Docker
    - Evidence: No database imports in go.mod, no database connection code

14. **Build Commands**
    - Documented: `cargo build`, `cargo test`, `cargo run`
    - Actual: Go build commands: `go build`, `go test`, `go run`
    - Evidence: Project is Go-based, uses `go.mod`

### 🟡 Documentation Issues

1. **Incorrect Architecture Diagram**

   - Problem: Architecture diagram shows "gRPC API" connecting to "Job Queue" with PostgreSQL
   - Location: Lines 36-56 (Mermaid diagram)
   - Fix: Replace with REST HTTP API, remove PostgreSQL, show Gin framework and Docker executor pattern

2. **Incorrect Job Lifecycle States**

   - Problem: Shows states "Queued", "Scheduled", "Running", "Streaming", "Completed", "Failed", "Timeout"
   - Location: Lines 73-84 (Mermaid state diagram)
   - Fix: Actual lifecycle involves Warm -> Start -> Execute -> Clean phases with no explicit queueing

3. **Incorrect Resource Limits Example**

   - Problem: Shows YAML configuration for resource limits that doesn't exist
   - Location: Lines 90-103
   - Fix: Remove or describe actual parallelism-based execution model

4. **Incorrect Configuration Example**

   - Problem: Shows `boron-config.yaml` with database URL and gRPC address
   - Location: Lines 123-142
   - Fix: Document actual CLI-based configuration with `--registry` flag

5. **Incorrect Contributing Guidelines**
   - Problem: References Tokio async handling and protobuf documentation
   - Location: Lines 146-152
   - Fix: Reference Go goroutines, Gin framework, and REST API documentation instead

### 🟠 Other Problems

1. **Missing Key Features Documentation**

   - Problem: Documentation doesn't mention actual features: template warming, processor/plugin execution, merger functionality, file zipping
   - Recommendation: Add documentation for actual endpoints like `/template/warm`, `/merge/:sessionId`, `/zip`

2. **Missing Proxy Functionality**

   - Problem: No mention of the proxy routes for template initialization and validation
   - Recommendation: Document `/proxy/template/:cyanId/api/template/init` and `/proxy/template/:cyanId/api/template/validate` endpoints

3. **Missing Registry Integration**

   - Problem: No mention of how boron connects to the Zinc registry for image resolution
   - Recommendation: Document the `--registry` flag and default registry endpoint

4. **Container Types Not Documented**

   - Problem: Actual implementation supports multiple container types (template, processor, plugin, merger) but this isn't documented
   - Recommendation: Document the different container types and their roles

5. **Volume Management Not Documented**
   - Problem: Boron manages Docker volumes for workspace isolation but this isn't mentioned
   - Recommendation: Add section on volume management and the `DockerVolumeReference` system

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 14    |
| 🟡       | 5     |
| 🟠       | 5     |

---

### contributor/repositories/helium

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

---

### developer/templates/reference/project-structurex

<!-- source: content/docs/developer/templates/reference/project-structure.mdx -->

# 📄 File: content/docs/developer/templates/reference/project-structure.mdx

> This document describes the structure of CyanPrint template projects. The documentation has several inaccuracies compared to actual source code implementations found in the iridium and helium repositories.

### 🔴 Source Code Inaccuracies

1. **Directory structure: `cyan/templates/` vs `template/`**

   - Documented: `cyan/templates/` directory for source template files (lines 18-20, 36-40, 63-74)
   - Actual: Real templates use `template/` directory at root level (sibling to `cyan/`), not `cyan/templates/`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/` shows `template/` at root, not inside `cyan/`. Same for template2 and template3.

2. **Standard Structure Tree Inaccurate**

   - Documented: Shows `cyan/templates/` containing `README.md` and `package.json` (lines 12-23)
   - Actual: Template files are in separate `template/` directory at root, `package.json` is inside `cyan/`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/` structure: `blob.Dockerfile`, `cyan/`, `cyan.yaml`, `template/`

3. **Dockerfile naming: `template.Dockerfile` vs `Dockerfile`**

   - Documented: `template.Dockerfile` and `blob.Dockerfile` inside `cyan/` directory (lines 16-17, 33-35)
   - Actual: `Dockerfile` inside `cyan/` directory (not `template.Dockerfile`), `blob.Dockerfile` at root level
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile` exists, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile` at root

4. **Dockerfile base image and commands**

   - Documented: `FROM node:20-alpine`, `CMD ["node", "index.ts"]` (lines 113, 125)
   - Actual: Uses `FROM oven/bun:1.1.31`, `CMD ["bun", "run", "index.ts"]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile:1,8`

5. **Dockerfile COPY paths**

   - Documented: `COPY cyan/package.json ./` and `COPY cyan/ ./` (lines 118-122)
   - Actual: `COPY package.json .` and `COPY . .` (Dockerfile is already inside `cyan/`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile:4-7`

6. **blob.Dockerfile content**

   - Documented: Simple `FROM alpine:latest` with `COPY cyan/templates/ /templates/` (lines 132-136)
   - Actual: Multi-stage build with `FROM alpine:3.21`, tar compression, different COPY paths
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile` shows complex multi-stage build with `tar -czvf`

7. **package.json location and structure**

   - Documented: `package.json` at root level with `"@atomicloud/cyan-sdk": "^1.0.0"` (lines 96-104)
   - Actual: `package.json` is inside `cyan/` directory, uses `"@atomicloud/cyan-sdk": "latest"` and Bun config with `"module": "index.ts"`, `"type": "module"`, `"bun-types": "latest"`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/package.json`

8. **index.ts function signature comment**

   - Documented: Comments show `// i: IInquirer` and `// d: IDefine` (lines 51-52)
   - Actual: SDK uses `IDeterminism`, not `IDefine`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts:6` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:3`

9. **cyan.yaml structure completely different**

   - Documented: Uses `name: myorg/my-template`, `version: 1.0.0`, `description`, `author`, `compose` fields (lines 80-90)
   - Actual: Uses `username`, `name` (separate), `description`, `project`, `source`, `email`, `tags`, `readme`, `processors`, `plugins`, `templates` fields - no `version`, `author`, or `compose`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:1-11`

10. **compose field vs templates field**

    - Documented: Shows `compose:` field with template references (lines 87-89)
    - Actual: Real templates use `templates:` field, not `compose:`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template3/cyan.yaml:11-13`

11. **Generated output metadata file incorrect**
    - Documented: `.cyan/generation.json` (lines 173-184)
    - Actual: `.cyan_state.yaml` at root level, not `.cyan/generation.json`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/sample/.cyan_state.yaml` shows YAML format with `active`, `history`, `answers`, `deterministic_states`

### 🟡 Documentation Issues

1. **Incorrect Code Example Comments - IDefine vs IDeterminism**

   - Problem: Comments say `// d: IDefine` but should be `IDeterminism`
   - Location: Lines 51-52
   - Fix: Change to `// i: IInquirer - ask questions` and `// d: IDeterminism - get deterministic values`

2. **Missing type imports in index.ts example**

   - Problem: Example only shows `import { StartTemplateWithLambda, GlobType }` but real templates also import `IInquirer` and `IDeterminism` types
   - Location: Lines 47-48
   - Fix: Add `import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';` or combine imports
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:1-2`

3. **GlobType not fully explained**

   - Problem: Mentions only `GlobType.Copy` for binary files (line 73), doesn't explain `GlobType.Template` vs `GlobType.Copy`
   - Location: Line 73
   - Fix: Explain both `GlobType.Template` (for text substitution) and `GlobType.Copy` (for binary files)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:4-7`

4. **Missing LABEL in Dockerfile Example**

   - Problem: Real Dockerfiles include `LABEL cyanprint.dev=true` which is not shown
   - Location: Lines 112-126 (template.Dockerfile example)
   - Fix: Add `LABEL cyanprint.dev=true` to the Dockerfile example

5. **Missing bun.lockb in Dockerfile Example**

   - Problem: Real Dockerfiles copy `bun.lockb` for reproducible builds
   - Location: Lines 112-126
   - Fix: Add `COPY bun.lockb .` before `RUN bun install`

6. **blob.Dockerfile example misleading**

   - Problem: The example is overly simplified and doesn't match real multi-stage implementation
   - Location: Lines 129-136
   - Fix: Show realistic multi-stage build or clarify this is a simplified example

7. **Working directory in Dockerfile**

   - Problem: Documentation shows `WORKDIR /workspace` but real templates use `WORKDIR /app`
   - Location: Line 115
   - Fix: Update to `WORKDIR /app` to match real implementation

8. **Missing cyan.yaml fields documentation**

   - Problem: Key fields like `username`, `project`, `source`, `email`, `processors`, `plugins`, `templates` are not documented
   - Location: Lines 77-90
   - Fix: Document all actual cyan.yaml fields used in real templates

9. **Non-existent cyan.yaml fields shown**
   - Problem: Shows `author` and `version` fields which don't exist in real cyan.yaml
   - Location: Lines 83-84
   - Fix: Remove or replace with actual fields (`email` instead of `author`, no `version` at template level)

### 🟠 Other Problems

1. **Template vs templates Directory Confusion**

   - Problem: Documentation consistently uses `cyan/templates/` but actual implementation uses root-level `template/`
   - Recommendation: Update documentation to reflect actual `template/` directory at root level, or clarify if both patterns are supported

2. **File Organization Patterns Not Verified**

   - Problem: The "By Type" and "By Feature" organization patterns (lines 139-165) are theoretical suggestions not found in actual templates
   - Recommendation: Mark as recommendations/best practices rather than standard structure

3. **Missing index.ts imports for types**

   - Problem: Real templates import types separately: `import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:2`
   - Recommendation: Add type imports to the example for completeness

4. **Generated output section may be misplaced**
   - Problem: The "Generated Output" section (lines 167-184) describes user output, not template structure
   - Recommendation: Consider moving to a different page or clarifying this is output, not template structure

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 11    |
| 🟡       | 9     |
| 🟠       | 4     |

---

### contributor/repositories/zinc

<!-- source: content/docs/contributor/repositories/zinc.mdx -->

# 📄 File: content/docs/contributor/repositories/zinc.mdx

> Major documentation inaccuracies found. The documentation describes Zinc as a Rust/Axum project, but it is actually an F#/.NET 8 project. API endpoints, data models, key files structure, configuration format, and build commands are all incorrect.

### 🔴 Source Code Inaccuracies

1. **Tech Stack - Primary Language**

   - Documented: Rust as primary language
   - Actual: F#/.NET 8 (microservice written in .NET 8)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/README.MD:3` - "Microservice written in .NET 8"; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Domain.csproj` exist; `App.sln` solution file present

2. **Tech Stack - Web Framework**

   - Documented: Axum web framework
   - Actual: ASP.NET Core with Kestrel
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:14` - uses `Microsoft.AspNetCore.Mvc`; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.yaml:5-7` - Kestrel configuration

3. **Tech Stack - Database Access**

   - Documented: SQLx for PostgreSQL
   - Actual: Entity Framework Core
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.yaml:63-64` - "EFCore: Enabled: true"; Repository files in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Repositories/`

4. **Tech Stack - Authentication**

   - Documented: JWT for authentication tokens
   - Actual: Descope authentication service
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.yaml:143-145` - "Domain: api.descope.com/P2Wskb04HSJQRfckShfhtWXwUiUd"

5. **Key Files Structure**

   - Documented: `src/main.rs`, `src/api/`, `src/models/`, `src/auth/`, `src/storage/`
   - Actual: `App/Program.cs`, `App/Modules/Cyan/API/V1/Controllers/`, `Domain/Model/`, `App/Modules/Users/API/Auth/`, no direct storage directory
   - Evidence: Directory listing shows `App/`, `Domain/` structure with `.csproj` files, not Rust `src/` structure

6. **API Endpoints - Templates**

   - Documented: `GET /api/v1/templates`, `GET /api/v1/templates/{id}`, `GET /api/v1/templates/search?q={query}`, `GET /api/v1/templates/{id}/versions`
   - Actual: `GET /api/v{version}/template` (search), `GET /api/v{version}/template/id/{userId}/{templateId:guid}`, `GET /api/v{version}/template/slug/{username}/{name}`, `GET /api/v{version}/template/slug/{username}/{templateName}/versions`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:24` - Route is `[controller]` (template, not templates); lines 38-49, 51-69, 159-171

7. **API Endpoints - Authentication (Missing)**

   - Documented: `POST /api/v1/auth/login`, `POST /api/v1/auth/refresh`, `POST /api/v1/auth/logout`
   - Actual: No such endpoints exist. Authentication is handled via Descope external service with API key authentication
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Users/API/Auth/ApiKeyAuthenticationOptions.cs` - API key auth, not login endpoints

8. **API Endpoints - Users**

   - Documented: `GET /api/v1/users/me`, `PATCH /api/v1/users/me`
   - Actual: `GET /api/v{version}/user/Me`, `PUT /api/v{version}/user/{id}` (not PATCH, requires id)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Users/API/V1/UserController.cs:45-49` - `HttpGet("Me")`; lines 118-138 - `HttpPut("{id}")` not PATCH

9. **API Endpoints - Missing Entity Types**

   - Documented: Only Templates mentioned
   - Actual: Plugins, Processors, and Resolvers also exist as first-class entities with full CRUD and versioning
   - Evidence: Controllers exist at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/PluginController.cs`, `ProcessorController.cs`, `ResolverController.cs`

10. **Data Model - User Fields**

    - Documented: `uuid id PK`, `string email`, `string password_hash`, `timestamp created_at`
    - Actual: `string Id`, `Username` in UserRecord; no email, password_hash, or created_at fields
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/User.cs:20-29` - UserPrincipal has Id (string, not uuid) and UserRecord; UserRecord only has Username

11. **Data Model - Template Fields**

    - Documented: `uuid id PK`, `string name`, `string description`, `uuid author_id FK`, `jsonb input_schema`, `timestamp created_at`
    - Actual: `Guid Id`, `string UserId`, `TemplateMetadata` (Project, Source, Email, Tags, Description, Readme), `TemplateRecord` (Name only), `TemplateInfo` (Downloads, Stars)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Template.cs:23-55` - no input_schema field

12. **Data Model - Version Fields**

    - Documented: `uuid id PK`, `uuid template_id FK`, `string version`, `string container_image`, `timestamp created_at`
    - Actual: `Guid Id`, `ulong Version` (numeric, not string), `DateTime CreatedAt`, `TemplateVersionRecord` (Description), `TemplateVersionProperty` (BlobDockerReference, BlobDockerTag, TemplateDockerReference, TemplateDockerTag)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/TemplateVersion.cs:29-56` - Version is ulong, has multiple docker reference fields

13. **Architecture - Search Service**

    - Documented: Search Service connects to Elasticsearch
    - Actual: No Elasticsearch integration; search is done via database queries
    - Evidence: No ES configuration in settings.yaml; search endpoints use service.Search() which queries the database via repositories

14. **Building Commands**

    - Documented: `cargo build`, `cargo build --release`, `cargo test`, `sqlx migrate run`, `cargo run -- --config config/local.yaml`
    - Actual: `pls setup`, `pls start`, `dotnet build`, `dotnet test`, Entity Framework migrations
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/README.MD:15-26` - "pls setup", "pls start"

15. **Configuration Format**
    - Documented: YAML with `server.http_addr`, `database.url`, `auth.jwt_secret`, `auth.token_expiry`, `storage.type`, `storage.bucket`, `storage.region`
    - Actual: YAML with `Kestrel.Endpoints.Http.Url`, `Database.MAIN.*`, `Auth.Settings.*` (Descope config), no storage configuration
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.yaml` - completely different structure

### 🟡 Documentation Issues

1. **Repository Description Incomplete**

   - Problem: Description mentions "handles authentication" but authentication is delegated to Descope
   - Location: Line 8
   - Fix: Clarify that authentication is handled by external Descope service

2. **Missing Entity Documentation**

   - Problem: Documentation only covers Templates but the registry also manages Plugins, Processors, and Resolvers
   - Location: API Endpoints section
   - Fix: Add documentation for Plugin, Processor, and Resolver endpoints

3. **Incorrect Description**
   - Problem: Describes as "CyanPrint registry API" but it's more accurately described as the "Sulfone-Zinc: Registry API for CyanPrint" per the actual Swagger description
   - Location: Line 3-4 (description)
   - Fix: Update description to match actual service description from settings.yaml

### 🟠 Other Problems

1. **Elasticsearch Mentioned but Not Implemented**

   - Problem: Architecture diagram shows Elasticsearch for Search Service but it's not actually used
   - Recommendation: Either remove ES from architecture diagram or implement it

2. **Token Management Not Documented**

   - Problem: The actual API has extensive token management endpoints (`GET/POST/PUT/DELETE /api/v{version}/user/{userId}/tokens/*`) not mentioned in documentation
   - Recommendation: Document the token management API for API key access

3. **Versioning Scheme Not Documented**

   - Problem: Versions are numeric (ulong) not semantic version strings
   - Recommendation: Document the version numbering scheme

4. **Like/Stars Feature Not Documented**

   - Problem: Controllers show Like endpoints for templates, plugins, processors, resolvers but this is not documented
   - Recommendation: Document the social features (liking/starring)

5. **Push Endpoint Not Documented**
   - Problem: All entity types have a `POST /push/{username}` endpoint for atomic create-or-update operations
   - Recommendation: Document the push endpoints for CI/CD workflows

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 15    |
| 🟡       | 3     |
| 🟠       | 5     |

---

### developer/templates/reference/cyan-yamlx

<!-- source: content/docs/developer/templates/reference/cyan-yaml.mdx -->

# 📄 File: content/docs/developer/templates/reference/cyan-yaml.mdx

> The documentation completely fabricates the cyan.yaml format. The actual format is fundamentally different from what is documented. The documented format uses NPM-like `name: myorg/my-template`, `version: 1.0.0`, and `compose` fields, while the actual format uses `username`, `name`, `processors`, `plugins`, and `templates` arrays as simple string references.

### 🔴 Source Code Inaccuracies

1. **`name` field format** | Documented: `myorg/my-template` format | Actual: Uses separate `username` and `name` fields | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:1-2` shows `username: ernest` and `name: template1` as separate fields

2. **`version` field** | Documented: Required field with semantic versioning (`version: 1.0.0`) | Actual: No version field exists in cyan.yaml; versions are auto-incrementing integers managed by the registry | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:1-24` shows CyanTemplateConfig struct has no version field

3. **`author` field** | Documented: Optional `author` field | Actual: No `author` field; uses `email` instead | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:13` shows `email` field, no author

4. **`license` field** | Documented: Optional `license` field | Actual: No `license` field exists | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:1-24` shows no license field

5. **`keywords` field** | Documented: Optional `keywords` array | Actual: Uses `tags` array instead | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:7` shows `tags: []`, not keywords

6. **`homepage` field** | Documented: Optional `homepage` URL | Actual: Uses `project` field instead | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:4` shows `project: https://google.com`

7. **`repository` field** | Documented: Object with `type` and `url` | Actual: Uses simple `source` string field | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:5` shows `source: https://google.com`

8. **`compose` field** | Documented: Array with `name`, `version`, and optional `condition` | Actual: Uses `templates` array with simple string references `username/name[:version]` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template4/cyan.yaml:11-13` shows `templates:\n  - ernest/template3:4`

9. **Version constraints in compose** | Documented: Supports `"1.0.0"`, `"^1.0.0"`, `">=1.0.0 <2.0.0"` | Actual: Uses integer version after colon (`username/name:4`) or versionless (`username/name`) | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md:50-52` states "Version is optional: `cyan/default` (versionless) or `atomi/typescript:3` (versioned)"

10. **Conditional composition** | Documented: `condition: ${usesDocker}` syntax | Actual: No conditional composition support | Evidence: No code found supporting conditionals in templates

11. **`plugins` field format** | Documented: Objects with `name` and `config` | Actual: Simple string array `['username/pluginname']` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:10` shows `plugins: ['ernest/plugin1']`

12. **Required fields** | Documented: `name` and `version` are required | Actual: `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme` are the actual fields; version not in yaml | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Template.cs:47-55` shows TemplateMetadata fields

13. **Version format** | Documented: Semantic versioning (MAJOR.MINOR.PATCH) | Actual: Auto-incrementing integers starting from 1 | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/docs/developer/concepts/04-version.md:6-19` states "Type: `ulong` (simple integer)" and explicitly notes "NOT Semantic versioning"

### 🟡 Documentation Issues

1. **Wrong identifier format** | Location: Lines 26-34 | Fix: Change from `name: myorg/my-template` to separate `username` and `name` fields

2. **Invented version field** | Location: Lines 37-47 | Fix: Remove the version field documentation entirely; explain versions are registry-managed integers

3. **Wrong optional fields** | Location: Lines 58-101 | Fix: Replace `author`, `license`, `keywords`, `homepage`, `repository` with actual fields: `email`, `tags`, `project`, `source`, `readme`

4. **Wrong compose section** | Location: Lines 103-131 | Fix: Rename `compose` to `templates` and update format to simple string arrays with optional `:version` suffix

5. **Wrong version constraint syntax** | Location: Lines 119-122 | Fix: Replace semver constraints with integer version syntax (`:3` for version 3)

6. **Wrong plugins section** | Location: Lines 133-146 | Fix: Update to show plugins as simple string array, not objects with config

7. **Fabricated complete example** | Location: Lines 148-190 | Fix: Replace with example matching actual format from e2e tests

### 🟠 Other Problems

1. **Documentation appears to be completely fabricated** | The documented format resembles NPM package.json or Cargo.toml but bears no resemblance to the actual cyan.yaml format used by the system. Recommend complete rewrite based on actual source code and existing examples.

2. **Confusion between cyan.yaml (template metadata) and Cyan object (runtime config)** | The documentation conflates two separate concepts. The cyan.yaml defines static template metadata, while the Cyan object returned by scripts defines runtime processor/plugin configuration. See `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md` for the correct explanation.

3. **Missing documentation for `processors` field** | The actual cyan.yaml has `processors` field for declaring processor dependencies (similar to templates/plugins), which is completely absent from the documentation.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 13    |
| 🟡       | 7     |
| 🟠       | 3     |

---

### contributor/repositories/argon

<!-- source: content/docs/contributor/repositories/argon.mdx -->

# 📄 File: content/docs/contributor/repositories/argon.mdx

> The documentation describes Argon as a Next.js-based web UI for CyanPrint templates using tRPC. The actual repository uses SvelteKit, not Next.js. There are significant inaccuracies in tech stack, architecture, and file structure claims. The package.json shows the project is named "carbon" not "argon".

### 🔴 Source Code Inaccuracies

1. **Framework**: Documented as "Next.js" | Actual: SvelteKit

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/svelte.config.js:1` - Uses `@sveltejs/kit` and `@sveltejs/adapter-auto`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:19` - Lists `@sveltejs/kit` as dependency

2. **Package Name**: Documented as "sulfone.argon" | Actual: "carbon"

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:2` - `"name": "carbon"`

3. **API Client**: Documented as "tRPC" | Actual: Swagger-generated HTTP client

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/api/core/Api.ts:3-9` - Generated via `swagger-typescript-api`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:29` - Uses `swagger-typescript-api`

4. **Key Files - prisma/ directory**: Documented as existing | Actual: Does not exist

   - Evidence: `prisma/` directory not found in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/`

5. **Key Files - src/server/ directory**: Documented as existing | Actual: Does not exist

   - Evidence: `src/server/` directory not found in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/`

6. **Key Files - src/app/ (Next.js App Router)**: Documented as existing | Actual: Uses SvelteKit routes at `src/routes/`

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/` - SvelteKit routing convention with `+page.svelte` and `+layout.svelte` files

7. **Page Structure - /search route**: Documented as `/search` | Actual: Search is at `/registry`

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte` - Contains search functionality with `searchTerm` variable

8. **Page Structure - /user/login route**: Documented as existing | Actual: No `/user/` routes found

   - Evidence: `src/routes/user/` directory does not exist

9. **Page Structure - /user/profile route**: Documented as existing | Actual: Profile is at `/profile`, not `/user/profile`

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/profile/+page.svelte`

10. **Page Structure - /templates/[id] route**: Documented as `/templates/[id]` | Actual: `/templates/[user_id]/[template_id]`

    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte`

11. **Page Structure - /templates/[id]/v/[version] route**: Documented as existing | Actual: No version route found

    - Evidence: No `/v/` or version route under templates

12. **Authentication**: Documented as "GitHub OAuth" | Actual: Descope OIDC

    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/hooks.server.ts:17-27` - Uses Descope OIDC provider, not GitHub

13. **Configuration Environment Variables**: Documented env vars `NEXT_PUBLIC_API_URL`, `ZINC_API_URL`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` | Actual: Uses `DESCOPE_ID`, `DESCOPE_SECRET`, `AUTH_SECRET`, `PUBLIC_LANDSCAPE`

    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/config/server/raichu.config.ts:2` - Uses `DESCOPE_ID`, `DESCOPE_SECRET`, `AUTH_SECRET`

14. **TemplateCard Component Props**: Documented props include `author`, `downloads` | Actual: Uses `userId`, `email`, no `downloads` on principal

    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/components/cards/template.svelte:8` - Uses `TemplatePrincipalResp` which has `userId`, `email` but not `author` or `downloads`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/api/core/data-contracts.ts:315-326` - `TemplatePrincipalResp` has `userId`, `email` but not `author`

15. **SearchBar Component**: Documented as existing component | Actual: No `SearchBar` component found

    - Evidence: Grep for `SearchBar` returned no matches in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/`

16. **Build Commands**: Documented as `bun run test`, `bun run typecheck` | Actual: Uses `npm run test:integration && npm run test:unit`, `svelte-kit sync && svelte-check`

    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:9-14` - Scripts use different commands

17. **Storybook**: Documented to "Add Storybook stories for new components" | Actual: No Storybook configured
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/.storybook/` directory does not exist

### 🟡 Documentation Issues

1. **README Reference**: README identifies project as "Sulfone Carbon" not "Argon"

   - Location: First line of documentation
   - Fix: Verify project naming convention - documentation says "sulfone.argon" but README and package.json say "carbon"

2. **Architecture Diagram Inaccuracy**: Shows "Next.js Pages" and "tRPC Client" but actual implementation uses SvelteKit and swagger-generated HTTP client

   - Location: Architecture Mermaid diagram
   - Fix: Update diagram to show SvelteKit pages and HTTP client instead of tRPC

3. **Additional Routes Not Documented**: Documentation misses `/plugins/`, `/processors/`, `/resolvers/`, `/tokens/`, `/register/` routes
   - Location: Page Structure section
   - Fix: Add these routes to the page structure documentation

### 🟠 Other Problems

1. **Missing Information**: No documentation for:

   - Multi-landscape configuration (pichu, pikachu, raichu, lapras)
   - Error portal integration
   - API domain configuration

2. **Recommendation**: The entire documentation needs to be rewritten to reflect the actual SvelteKit implementation instead of Next.js. The tech stack table, key files, architecture diagram, page structure, building commands, and configuration sections are all incorrect.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 17    |
| 🟡       | 3     |
| 🟠       | 2     |

---

### contributor/repositories/heliumx

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
| -------- | ----- |
| 🔴       | 13    |
| 🟡       | 5     |
| 🟠       | 4     |

---

### developer/templates/explanation/client-statex

# File: content/docs/developer/templates/explanation/client-state.mdx

> Documentation describing client state management for template executions, including state file structure, CLI commands, and best practices. The document describes storing state in `.cyan/generation.json` using JSON format.

### Source Code Inaccuracies

1. **State File Path Incorrect**

   - Documented: `.cyan/generation.json` (JSON file)
   - Actual: `.cyan_state.yaml` (YAML file)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/services.rs:58` - `let state_file_path = target_dir.join(".cyan_state.yaml");`

2. **State File Format Incorrect**

   - Documented: JSON format with `version`, `template`, `pin`, `answers`, `generated` fields at root level
   - Actual: YAML format with `templates` map containing template keys, each with `active` and `history` fields
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:6-24` shows the actual structure with `TemplateHistoryEntry`, `TemplateState`, and `CyanState` structs serialized as YAML

3. **"pin" Field Does Not Exist**

   - Documented: `"pin": "abc123-def456-ghi789"` - determinism seed at root level
   - Actual: `deterministic_states: HashMap<String, String>` inside each history entry (not a single "pin")
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:11` - `pub deterministic_states: HashMap<String, String>`

4. **Template Registry Field Not Stored**

   - Documented: `"registry": "https://registry.example.com"` inside template object
   - Actual: Registry is not stored in state file; template key is formatted as `username/template.name`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/services.rs:62` - `let template_key = format!("{}/{}", username, template.template.name);`

5. **"generated" Field Name Incorrect**

   - Documented: `"generated": "2024-01-15T10:30:00Z"`
   - Actual: `"time": "2024-01-15T10:30:00Z"` inside each history entry
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:9` - `pub time: DateTime<Utc>`

6. **Version Type Incorrect**

   - Documented: `"version": "1.0"` (string, schema version)
   - Actual: `version: i64` (integer, template version number)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:8` - `pub version: i64`

7. **Template Structure Incorrect**

   - Documented: `template.name` and `template.version` as nested object
   - Actual: Template is stored as a key in the `templates` map with format `username/template-name`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:21-24` - `pub templates: HashMap<String, TemplateState>`

8. **CLI Command Name Incorrect**

   - Documented: `cyanprint create`, `cyanprint regenerate`, `cyanprint update`
   - Actual: CLI is installed as `pls` (based on iridium documentation), commands are `pls create`, `pls update`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/surfaces/cli/02-create.md:8` - `pls create <template_ref> [path] [options]`

9. **"regenerate" Command Does Not Exist**

   - Documented: `cyanprint regenerate ./my-project`
   - Actual: No `regenerate` command exists. The `update` command handles re-runs when the same version is detected (RerunTemplate flow)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:27-72` - Only `Push`, `Create`, `Update`, `Daemon` commands exist

10. **Update Command Syntax Incorrect**

    - Documented: `cyanprint update ./my-project myorg/template:2.0.0` (with template argument)
    - Actual: `pls update [path]` - no template argument, reads from state file
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:52-72` - Update only takes `path` and options, no template argument

11. **Template Reference Format in State**

    - Documented: `"name": "myorg/my-template"` (combined format)
    - Actual: Template key is `username/template.name` (using template.name from API, not combined at input)
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/services.rs:62`

12. **i.text() API Signature Incorrect**

    - Documented: `await i.text('Name?', 'project.name', '...')` with third parameter as default
    - Actual: `i.text(message: str, id: str, desc: Optional[str] = None)` - third parameter is description, not default value
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/inquirer.py:61` - `async def text(self, message: str, id: str, desc: Optional[str] = None) -> str:`

13. **No "registry" Field in State**
    - Documented: `"registry": "https://registry.example.com"` in template object
    - Actual: Registry endpoint is not persisted in state; it's configured via CLI args or environment variable
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:6-24` - No registry field in any model

### Documentation Issues

1. **Outdated State File Documentation**

   - Problem: The entire state file structure documented is based on an old/imagined JSON format
   - Location: Lines 12-29 (What is Client State section)
   - Fix: Update to reflect actual YAML structure from `iridium/cyancoordinator/src/state/models.rs`

2. **Mermaid Diagram References Non-existent Commands**

   - Problem: Flow diagram shows `cyanprint create` and `cyanprint update` but actual CLI uses `pls`
   - Location: Lines 117-132 (State Lifecycle diagram)
   - Fix: Change to `pls create` and `pls update`

3. **Missing Template History Concept**

   - Problem: Documentation doesn't explain that state tracks history of multiple executions per template
   - Location: Entire document
   - Fix: Add explanation of `history` array in state structure

4. **Incorrect Best Practice Examples**

   - Problem: Code examples show incorrect `i.text()` signature with default value parameter
   - Location: Lines 141-143, 162-166, 182-185
   - Fix: Update to correct signature showing `desc` parameter

5. **Missing "active" Field Documentation**
   - Problem: State structure includes `active: bool` field not mentioned in documentation
   - Location: State Structure section
   - Fix: Document the `active` field in TemplateState

### Other Problems

1. **Conceptual Mismatch with Determinism**

   - Problem: Documentation describes "pin" as a single determinism seed, but actual implementation uses `deterministic_states` as a HashMap for multiple keyed values
   - Recommendation: Rewrite the "Pin" section to explain `deterministic_states` as a collection of cached non-deterministic values keyed by string identifiers

2. **Missing Update Type Distinctions**

   - Problem: Documentation doesn't explain NewTemplate, UpgradeTemplate, and RerunTemplate update types
   - Recommendation: Add section explaining the three execution modes and how state determines which is used

3. **Multiple Templates Not Documented**

   - Problem: State file supports tracking multiple templates per project (composition), but this isn't explained
   - Recommendation: Add section on template composition and how state tracks multiple templates

4. **Related Links May Be Broken**
   - Problem: Links to `/developer/templates/explanation/determinism`, `/developer/templates/explanation/3-way-merge`, and `/developer/templates/how-to/use-keys` should be verified
   - Recommendation: Ensure these pages exist and accurately reflect current implementation

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 13    |
| Documentation Issues     | 5     |
| Other Problems           | 4     |

---

### contributor/repositories/boronx

# File: content/docs/contributor/repositories/boron.mdx

> This documentation describes Boron as the execution coordinator for CyanPrint template execution. It covers the tech stack, architecture, API, job lifecycle, resource management, and configuration.

## Critical Issues - Documentation is Severely Outdated

The documentation describes Boron as a **Rust-based gRPC service**, but the actual implementation is a **Go-based REST API service**. Nearly all technical claims are incorrect.

---

### Source Code Inaccuracies

#### 1. Programming Language - CRITICAL

- **Documented**: Rust is the primary language
- **Actual**: Go 1.24.0
- **Evidence**: `go.mod` line 3: `go 1.24.0`; All source files use `.go` extension (`main.go`, `server.go`, `docker_executor/*.go`)

#### 2. Async Runtime - CRITICAL

- **Documented**: Tokio (Rust async runtime)
- **Actual**: Go's native goroutines and channels
- **Evidence**: `server.go` uses `go func()` for concurrency throughout (lines 333, 345, 359, etc.)

#### 3. API Framework - CRITICAL

- **Documented**: Tonic (gRPC server and client)
- **Actual**: Gin (HTTP REST framework)
- **Evidence**: `go.mod` line 9: `github.com/gin-gonic/gin v1.9.1`; `server.go` line 29: `r := gin.Default()`

#### 4. Container Management Library - CRITICAL

- **Documented**: bollard (Rust Docker library)
- **Actual**: Docker Docker SDK (official Go library)
- **Evidence**: `go.mod` line 8: `github.com/docker/docker v28.5.2+incompatible`; `docker_executor/docker.go` imports Docker SDK

#### 5. Database - CRITICAL

- **Documented**: SQLx for database access with PostgreSQL
- **Actual**: No database - stateless service using Docker for resource tracking
- **Evidence**: No SQLx dependency in `go.mod`; no database connection code in any source file

#### 6. API Protocol - CRITICAL

- **Documented**: gRPC with protobuf service definition:
  ```protobuf
  service Executor {
      rpc SubmitJob(JobRequest) returns (JobResponse);
      rpc GetJobStatus(JobStatusRequest) returns (JobStatus);
      rpc StreamJobOutput(JobStreamRequest) returns (stream FileChunk);
      rpc CancelJob(CancelRequest) returns (CancelResponse);
  }
  ```
- **Actual**: REST API with JSON over HTTP using Gin framework. Actual endpoints:
  - `GET /` - Health check
  - `POST /executor` - Start executor session
  - `POST /executor/:sessionId` - Build/execute with session
  - `DELETE /executor/:sessionId` - Clean up session
  - `POST /executor/:sessionId/warm` - Warm up executor
  - `POST /template/warm` - Warm up template
  - `POST /proxy/template/:cyanId/api/template/init` - Proxy to template
  - `POST /proxy/template/:cyanId/api/template/validate` - Proxy to template
  - `POST /merge/:sessionId` - Merge files
  - `POST /zip` - Create zip archive
- **Evidence**: `server.go` lines 30-614 define all REST endpoints

#### 7. Key Files Structure - CRITICAL

- **Documented**:
  - `src/main.rs` - Application entry point
  - `src/scheduler/` - Job scheduling logic
  - `src/executor/` - Container execution management
  - `src/api/` - gRPC API definitions
  - `src/resources/` - Resource limit management
- **Actual**:
  - `main.go` - Application entry point with CLI commands
  - `server.go` - HTTP REST API server
  - `model.go` - Request/response models
  - `docker_executor/` - Package with:
    - `docker.go` - Docker client operations
    - `executor.go` - Container execution logic
    - `template_executor.go` - Template-specific execution
    - `merger.go` - File merging operations
    - `registry.go` - Registry client
    - `model.go`, `models.go` - Data structures
    - `domain_model.go` - Domain types
- **Evidence**: Direct listing of `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/` directory

#### 8. Server Port - MAJOR

- **Documented**: `grpc_addr: "0.0.0.0:50051"`
- **Actual**: HTTP server on port 9000
- **Evidence**: `server.go` line 614: `_ = r.Run(":9000")`

#### 9. Network Name - MAJOR

- **Documented**: `network: "cyan-bridge"`
- **Actual**: Network name is `cyanprint`
- **Evidence**: `docker_executor/docker.go` line 24: `const networkName = "cyanprint"`

#### 10. Configuration File - MAJOR

- **Documented**: Complex YAML configuration with database URL, scheduler settings, resource limits:
  ```yaml
  server:
    grpc_addr: '0.0.0.0:50051'
  database:
    url: 'postgresql://localhost/boron'
  container_runtime:
    socket: '/var/run/docker.sock'
    network: 'cyan-bridge'
  scheduler:
    max_concurrent_jobs: 100
    job_timeout_default: '5m'
  resources:
    default_cpu: '1'
    default_memory: '512Mi'
  ```
- **Actual**: Configuration via command-line flags only:
  - `--registry` / `-r` for registry endpoint (default: `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`)
- **Evidence**: `main.go` lines 43-48 define CLI flags; no configuration file exists

#### 11. Build Commands - MAJOR

- **Documented**:
  ```bash
  cargo build
  cargo build --release
  cargo test
  cargo run -- --config config/local.yaml
  ```
- **Actual**:
  ```bash
  go build -o bin/sulfone-boron .
  go run . [args]
  go test ./...
  ```
- **Evidence**: `Taskfile.yaml` lines 46-52: `go build -o bin/{{.PLATFORM}}-{{.SERVICE}} .` and `go run . {{.CLI_ARGS}}`

#### 12. Job States/Lifecycle - MAJOR

- **Documented**: States: Queued -> Scheduled -> Running -> Streaming -> Completed/Failed/Timeout
- **Actual**: No explicit state machine. Sessions are created, warmed, executed, and cleaned. The lifecycle is:
  - Warm (pull images, create volumes)
  - Start (create containers for processors, plugins, merger)
  - Execute (via proxy endpoints or build endpoint)
  - Clean (remove containers and volumes)
- **Evidence**: `docker_executor/executor.go` shows `Warm()`, `Start()`, `Clean()` methods

#### 13. Resource Limits - MAJOR

- **Documented**: CPU, memory, and timeout limits with template overrides:
  ```yaml
  resources:
    cpu: '1'
    memory: '512Mi'
    timeout: '5m'
  ```
- **Actual**: No resource limits enforced. Uses host CPU count for parallelism limit:
  - `cpu := rt.NumCPU()` used for `ParallelismLimit`
- **Evidence**: `main.go` line 67 and `server.go` line 70: `cpu := rt.NumCPU()`

---

### Documentation Issues

#### 1. Incorrect Architecture Diagram

- **Problem**: The Mermaid diagram shows gRPC API -> Job Queue -> Scheduler -> Executor Pool with PostgreSQL
- **Location**: Architecture section
- **Fix**: Should show HTTP REST API -> Docker operations with no database

#### 2. Incorrect Job Lifecycle Diagram

- **Problem**: State diagram shows Queued/Scheduled/Running/Streaming/Timeout states that don't exist
- **Location**: Job Lifecycle section
- **Fix**: Remove or replace with actual session lifecycle (Warm -> Start -> Execute -> Clean)

#### 3. Incorrect Contributing Guidelines

- **Problem**: States "Ensure all async code is properly handled with Tokio"
- **Location**: Contributing section, point 1
- **Fix**: Should reference Go concurrency patterns (goroutines, channels, context)

#### 4. Outdated Description

- **Problem**: "The CyanPrint execution coordinator" is partially correct but doesn't mention it's specifically a Docker container orchestrator
- **Location**: Description field
- **Fix**: Update to "Docker-based execution coordinator that manages container lifecycle for CyanPrint template execution"

---

### Other Problems

#### 1. Missing API Documentation

- **Problem**: Actual REST API endpoints are not documented
- **Recommendation**: Document the actual REST endpoints with their request/response schemas based on `server.go`

#### 2. Missing CLI Commands

- **Problem**: CLI commands are not documented:
  - `start` - Start the server with optional registry flag
  - `setup` - Setup network
  - `s` - List Docker images (debug command)
- **Recommendation**: Document CLI usage in the Building/Running section

#### 3. Missing Tech Stack Items

- **Problem**: Actual tech stack includes:
  - urfave/cli/v2 - CLI framework
  - Google UUID - UUID generation
  - OpenTelemetry - Tracing (visible in go.mod)
- **Recommendation**: Update tech stack table with accurate dependencies

#### 4. Missing Workspace Paths

- **Problem**: Container workspace paths are not documented:
  - `/workspace/cyanprint` - Template volume mount
  - `/workspace/area` - Session/work volume mount
- **Recommendation**: Add container volume mount documentation

---

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 13    |
| Documentation Issues     | 4     |
| Other Problems           | 4     |

**Overall Assessment**: This documentation is **critically outdated** and appears to describe a completely different implementation. It documents a Rust/gRPC/PostgreSQL service that does not exist. The actual Boron is a Go/REST/Docker service with fundamentally different architecture, API, and configuration. A complete rewrite of this documentation is required.

---

### developer/processors/reference/sdk/file-helperx

<!-- source: content/docs/developer/processors/reference/sdk/file-helper.mdx -->

# 📄 File: content/docs/developer/processors/reference/sdk/file-helper.mdx

> Documentation for the `CyanFileHelper` API with significant inaccuracies in method names, return types, missing properties, and SDK feature availability.

### 🔴 Source Code Inaccuracies

1. **VirtualFileReference.load() method does not exist**

   - Documented: `load()` method returning `Promise<string>` (lines 133, 242, 297)
   - Actual: Method is named `readFile()`, returns `VirtualFile` (not `Promise<string>`), and is synchronous
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:26` - `readFile(): VirtualFile`

2. **VirtualFileReference.copy() method does not exist**

   - Documented: `copy()` method on VirtualFileReference returning `void` (lines 136, 244, 300)
   - Actual: No `copy()` method exists on VirtualFileReference class
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - only has `read`, `write` properties and `readFile()` method

3. **VirtualFileStream.read() method does not exist**

   - Documented: `read()` method returning `AsyncIterable<Buffer>` (line 262)
   - Actual: VirtualFileStream only exposes `reader: fs.ReadStream` and `writer: fs.WriteStream` properties
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

4. **VirtualFileStream.writeFile() method does not exist**

   - Documented: `writeFile(content)` method returning `void` (line 263)
   - Actual: VirtualFileStream has no `writeFile()` method
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

5. **VirtualFileStream.relative property does not exist**

   - Documented: `relative: string` property (line 256)
   - Actual: VirtualFileStream has no `relative` property
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

6. **CyanGlob.root is optional with null support**

   - Documented: `root: string; // Base directory` (line 77) - shown as required
   - Actual: `root?: string | null;` (optional, can be null)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7`

7. **CyanGlob.exclude is required, not optional**

   - Documented: `exclude?: string[]; // Patterns to exclude` (line 79) - shown as optional
   - Actual: `exclude: string[];` (required, though can be empty array)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:9`

8. **CyanGlob missing required `type` property in documentation**

   - Documented: CyanGlob interface shows only `root`, `glob`, `exclude` properties (lines 76-80)
   - Actual: CyanGlob has a required `type: GlobType` property
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:10`

9. **Python SDK missing readAsStream entirely**

   - Documented: `readAsStream(glob)` method and `VirtualFileStream` type available
   - Actual: Python SDK has no `readAsStream` method or `VirtualFileStream` class
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/fs/cyan_fs_helper.py` - no readAsStream; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/fs/virtual_file.py` - no VirtualFileStream

10. **VirtualFileReference.writeFile() signature incorrect**
    - Documented: `writeFile(content)` taking content parameter (line 243)
    - Actual: `writeFile()` takes no parameters - it writes the `content` property of VirtualFile
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54`

### 🟡 Documentation Issues

1. **Missing `read` and `write` properties on VirtualFile and VirtualFileReference**

   - Problem: Both classes expose `read` and `write` getter properties providing full paths, but these are not documented
   - Location: VirtualFile (lines 215-224) and VirtualFileReference (lines 233-244) property tables
   - Fix: Add documentation for `read: string` (full source path) and `write: string` (full destination path) properties

2. **Code example uses incorrect async pattern**

   - Problem: Example at lines 129-138 uses `await ref.load()` but `readFile()` is synchronous
   - Location: `get(glob)` usage section (lines 126-139)
   - Fix: Remove `await` and change `load()` to `readFile()`

3. **readAsStream code example is non-functional**

   - Problem: Example at lines 163-174 uses `stream.read()` which doesn't exist; should use `stream.reader` directly
   - Location: `readAsStream(glob)` usage section (lines 161-175)
   - Fix: Rewrite to use `stream.reader` (Node.js ReadStream) with proper stream iteration

4. **Best Practices example has multiple errors**

   - Problem: Lines 281-306 use `await ref.load()` (wrong method, wrong async), `ref.writeFile(transform(content))` (wrong signature), and `ref.copy()` (doesn't exist)
   - Location: Memory Efficiency section (lines 279-306)
   - Fix: Rewrite entire example using correct API methods

5. **Missing CyanFileHelper properties**

   - Problem: `CyanFileHelper` has `readDir` and `writeDir` getter properties not documented
   - Location: Methods Overview section
   - Fix: Add documentation for `readDir: string` and `writeDir: string` properties

6. **No SDK feature parity warning**
   - Problem: Documentation implies all features work across all SDKs, but Python lacks readAsStream
   - Location: Throughout document
   - Fix: Add note indicating `readAsStream` is only available in Node.js and .NET SDKs

### 🟠 Other Problems

1. **Method naming differs by SDK language**

   - Problem: Documentation uses TypeScript naming but doesn't clarify language-specific conventions (Python: `read_file`, C#: `ReadFile`)
   - Recommendation: Either clarify this is TypeScript-specific documentation or add language-specific sections

2. **VirtualFileStream provides only raw streams**

   - Problem: VirtualFileStream only exposes raw Node.js streams without the convenience methods (`read()`, `writeFile()`, `relative`) documented
   - Recommendation: Either update implementation to match documentation or update documentation to show raw stream access pattern

3. **Missing GlobType enum documentation**

   - Problem: CyanGlob.type uses GlobType enum (Template=0, Copy=1) which affects resolveAll() behavior but isn't documented
   - Recommendation: Add GlobType enum documentation or link to relevant documentation

4. **Best Practices example modifies readonly property**
   - Problem: Line 286-287 shows `f.content = transform(f.content)` but content is a constructor parameter
   - Recommendation: Verify if this is valid TypeScript or show correct mutation pattern

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 10    |
| 🟡       | 6     |
| 🟠       | 4     |

---

### user/reference/cli-commandsx

<!-- source: content/docs/user/reference/cli-commands.mdx -->

# 📄 File: content/docs/user/reference/cli-commands.mdx

> This CLI reference documents the CyanPrint CLI commands but contains several inaccuracies when compared to the actual source code implementation in iridium/cyanprint. Key issues include missing global options, incorrect default values, missing environment variable documentation, and incomplete push command documentation.

### 🔴 Source Code Inaccuracies

1. **Global Option `-V, --version` - Not Explicitly Defined**

   - Documented: `-V, --version` flag to print version
   - Actual: No explicit `-V` short flag defined. The `--version` flag works via clap's default `#[command(version)]` attribute, but `-V` is not a valid short flag.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:4` - Shows `#[command(author, version, about = ...)]` without explicit `-V` short flag.

2. **Global Option `-r, --registry` - Missing Default Value**

   - Documented: No default value shown in Global Options table
   - Actual: Default is `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:13` - `default_value = "https://api.zinc.sulfone.raichu.cluster.atomi.cloud"`

3. **Global Option `-r, --registry` - Missing Environment Variable**

   - Documented: No environment variable mentioned for `-r, --registry`
   - Actual: `CYANPRINT_REGISTRY` environment variable is supported
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:14` - `env = "CYANPRINT_REGISTRY"`

4. **`create` Command - Missing Environment Variable for `--coordinator-endpoint`**

   - Documented: No environment variable mentioned
   - Actual: `CYANPRINT_COORDINATOR` environment variable is supported
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:43` - `env = "CYANPRINT_COORDINATOR"`

5. **`update` Command - Missing Environment Variable for `--coordinator-endpoint`**

   - Documented: No environment variable mentioned
   - Actual: `CYANPRINT_COORDINATOR` environment variable is supported
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:60` - `env = "CYANPRINT_COORDINATOR"`

6. **`daemon` Command - Missing `--registry` Option**

   - Documented: Only `-p, --port` option listed for daemon command
   - Actual: The daemon command also supports `--registry` option with default `https://api.zinc.sulfone.raichu.cluster.atomi.cloud` and `CYANPRINT_REGISTRY` env var
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:88-96`

7. **`push` Command - Missing `push group` Subcommand**

   - Documented: Only `push template`, `push processor`, `push plugin` are documented
   - Actual: `push group` command exists for pushing template groups (meta-templates with no Docker artifacts)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:131-132` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:89-108`

8. **`push` Command - Missing `--config` Option**

   - Documented: Not mentioned
   - Actual: `-c, --config <CONFIG_PATH>` with default `cyan.yaml`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:105` - `#[arg(short, long, value_name = "CONFIG_PATH", default_value = "cyan.yaml")] pub config: String`

9. **`push` Command - Missing `--message` Option**

   - Documented: Not mentioned
   - Actual: `-m, --message <PUBLISH_MESSAGE>` with default `No description`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:108-113` - `#[arg(short, long, value_name = "PUBLISH_MESSAGE", default_value = "No description")] pub message: String`

10. **`push` Command - Missing `--token` Environment Variable**

    - Documented: Only `--token <TOKEN>` shown in examples
    - Actual: `CYAN_TOKEN` environment variable is supported
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:116` - `env = "CYAN_TOKEN"`

11. **`push template` - Incorrect Option Placement in Syntax**
    - Documented: `cyanprint push template --token <TOKEN> <BLOB_IMG> <BLOB_TAG> <TEMPLATE_IMG> <TEMPLATE_TAG>`
    - Actual: Options belong to `push` command, not the subcommand: `cyanprint push --token <TOKEN> template <BLOB_IMAGE> <BLOB_TAG> <TEMPLATE_IMAGE> <TEMPLATE_TAG>`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:100-118` - PushArgs is the parent struct containing `token`, `config`, `message` before PushCommands subcommand

### 🟡 Documentation Issues

1. **Short Flag `-c` Conflict Not Explained**

   - Problem: `-c` is used for `--coordinator-endpoint` in `create`/`update` but for `--config` in `push`
   - Location: Options tables throughout document
   - Fix: Note the context-dependent meaning of `-c` or use full flag names in examples

2. **Template Reference Format Not Explained**

   - Problem: The `create` command uses `<TEMPLATE_REF>` but doesn't explain the format `<username>/<name>:<version>`
   - Location: `cyanprint create` Arguments table
   - Fix: Add explanation of template reference format with version being optional

3. **Push Command Options Table Missing**

   - Problem: The push subcommands should show the correct option structure with `--config`, `--message`, `--token` as global push options
   - Location: `cyanprint push` section
   - Fix: Add an Options table for the `push` command itself showing `--config`, `--message`, `--token`

4. **Missing Exit Codes Documentation**

   - Problem: Source code and docs show exit codes (0 for success, 1 for errors) but not documented here
   - Location: Throughout the document
   - Fix: Add exit codes section for each command

5. **Missing State File Documentation for `update`**
   - Problem: The `update` command works with `.cyan_state.yaml` but this isn't mentioned
   - Location: `cyanprint update` section
   - Fix: Add brief mention of state file handling and 3-way merge behavior

### 🟠 Other Problems

1. **Environment Variables Not Documented**

   - Problem: Three environment variables are supported (`CYANPRINT_REGISTRY`, `CYANPRINT_COORDINATOR`, `CYAN_TOKEN`) but none are documented
   - Recommendation: Add a dedicated "Environment Variables" section listing all supported environment variables

2. **Command Aliases Not Documented**

   - Problem: Commands have short aliases (`p` for push, `c` for create, `u` for update, `d` for daemon) but not shown
   - Recommendation: Add alias information to command headers or a dedicated "Command Aliases" section

3. **Binary Name Inconsistency**

   - Problem: The documentation uses `cyanprint` as the binary name, but the source docs mention `pls` as a development alias
   - Recommendation: Add a note explaining that `pls` is a development alias for `cargo run` while `cyanprint` is the installed binary name

4. **Missing Prerequisites for `daemon` Command**
   - Problem: The daemon command requires Docker to be running, but this prerequisite isn't documented
   - Recommendation: Add a "Prerequisites" section for the daemon command noting Docker is required

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 11    |
| 🟡       | 5     |
| 🟠       | 4     |

---

### developer/plugins/reference/cyan-yamlx

<!-- source: content/docs/developer/plugins/reference/cyan-yaml.mdx -->

# 📄 File: content/docs/developer/plugins/reference/cyan-yaml.mdx

> This documentation describes a cyan.yaml schema that is **completely different** from the actual implementation. The documented properties, types, and structure do not match the source code.

### 🔴 Source Code Inaccuracies

1. **Documented: `name: org/my-plugin` (org/name format)**
   **Actual: `username` and `name` are separate fields**

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs:4-6`

   ```rust
   pub struct CyanPluginFileConfig {
       pub username: String,
       pub name: String,
   ```

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:1-2`

   ```yaml
   username: ernest
   name: plugin1
   ```

2. **Documented: `version: 1.0.0` as a required property**
   **Actual: No `version` field exists in plugin cyan.yaml**

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs` - no `version` field
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml` - no `version` field
   - Versions are managed by the registry, not declared in cyan.yaml

3. **Documented: `author: Your Name` as a property**
   **Actual: No `author` field exists - uses `username` and `email` instead**

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs` - no `author` field
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Plugin.cs:53-61` - PluginMetadata has no `author` field

4. **Documented: `license: MIT` as a property**
   **Actual: No `license` field exists in the schema**

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs` - no `license` field
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Plugin.cs:53-61` - PluginMetadata has no `license` field

5. **Documented: `repository: https://...` as a property**
   **Actual: Uses `source` and `project` fields instead**

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs:9-11`

   ```rust
   pub project: String,
   pub source: String,
   ```

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:4-5`

   ```yaml
   project: https://atomi.cloud
   source: https://atomi.cloud
   ```

6. **Documented: `keywords: string[]` as a property**
   **Actual: Uses `tags: string[]` instead**

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs:15`

   ```rust
   pub tags: Vec<String>,
   ```

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:7`

   ```yaml
   tags: []
   ```

7. **Documented: `config: object` with config schema definition**
   **Actual: No `config` field exists in plugin cyan.yaml**

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs` - no `config` field
   - Config is passed at runtime by templates, not defined in plugin metadata

8. **Documented: Plugin name format `org/name:version` in templates**
   **Actual: Plugin reference format is `username/name[:version]`**

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:34-38`

   ```rust
   pub struct CyanPluginRef {
       pub username: String,
       pub name: String,
       pub version: Option<i64>,
   }
   ```

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md:49-51`

   ```yaml
   plugins: ['atomi/formatter']
   ```

9. **Documented: Required properties `name` and `version`**
   **Actual: Required properties are `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`**
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Validators/PluginValidator.cs:16-28` - CreatePluginReqValidator requires Name, Project, Source, Email, Tags, Description, Readme

### 🟡 Documentation Issues

1. **Problem: The "Properties" table lists incorrect fields**
   **Location**: Lines 22-31
   **Fix**: Replace with actual schema:
   | Property | Type | Required | Description |
   |----------|------|----------|-------------|
   | `username` | `string` | Yes | Owner username |
   | `name` | `string` | Yes | Plugin name |
   | `description` | `string` | Yes | Brief description |
   | `project` | `string` | Yes | Project URL |
   | `source` | `string` | Yes | Source repository URL |
   | `email` | `string` | Yes | Contact email |
   | `tags` | `string[]` | Yes | Search tags |
   | `readme` | `string` | Yes | Path to README file |

2. **Problem: "Basic Structure" example uses wrong format**
   **Location**: Lines 12-18
   **Fix**: Replace with actual format:

   ```yaml
   username: atomi
   name: my-plugin
   description: A plugin that performs post-processing operations
   project: https://github.com/atomi/my-plugin
   source: https://github.com/atomi/my-plugin.git
   email: admin@atomi.cloud
   tags: [formatting, post-process]
   readme: README.MD
   ```

3. **Problem: "Full Example" shows completely wrong structure**
   **Location**: Lines 35-68
   **Fix**: Remove `version`, `author`, `license`, `repository`, `keywords`, `config` sections and use actual fields

4. **Problem: "Config Schema" section describes non-existent feature**
   **Location**: Lines 70-102
   **Fix**: Remove entirely - plugins don't define config schemas in cyan.yaml. Config is passed by templates at runtime.

5. **Problem: "Usage in Templates" section uses wrong reference format**
   **Location**: Lines 104-117
   **Fix**: Update to use `username/name` format and remove `config` block:

   ```yaml
   # In template's cyan.yaml
   plugins:
     - atomi/setup-plugin:1
   ```

6. **Problem: "Versioning Best Practices" section is misleading**
   **Location**: Lines 119-133
   **Fix**: Version is specified as integer after colon (e.g., `username/name:3`), not semantic version strings. The `version` field shown in examples does not exist in plugin cyan.yaml.

7. **Problem: Missing required `readme` field in all examples**
   **Location**: Throughout document
   **Fix**: Add `readme: README.MD` or similar to all examples

### 🟠 Other Problems

1. **Problem: Documentation appears to describe a different system entirely**
   **Recommendation**: This document needs a complete rewrite based on the actual cyan.yaml schema found in iridium/cyanregistry/src/cli/models/plugin_config.rs. Consider reviewing existing working examples in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/cyan.yaml`.

2. **Problem: Documentation conflates plugin metadata with plugin configuration**
   **Recommendation**: Clarify that cyan.yaml only contains metadata (for registry/discovery). Runtime config is provided by the template script when invoking plugins.

3. **Problem: The document title says "Plugin cyan.yaml" but the content could confuse users with the template cyan.yaml**
   **Recommendation**: Add a note distinguishing plugin cyan.yaml from template cyan.yaml. Templates have additional fields (`processors`, `plugins`, `templates` arrays) that plugins don't have.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 9     |
| 🟡       | 7     |
| 🟠       | 3     |

---

### developer/templates/reference/sdk/indexx

<!-- source: content/docs/developer/templates/reference/sdk/index.mdx -->

# 📄 File: content/docs/developer/templates/reference/sdk/index.mdx

> SDK Overview documentation for CyanPrint SDK (`@atomicloud/cyan-sdk`), describing entry points, interfaces, types, and usage examples. The documentation contains multiple inaccuracies when compared to the actual SDK source code.

### 🔴 Source Code Inaccuracies

1. **IDefine Interface Does Not Exist**

   - **Documented**: `IDefine` interface with methods `uuid()`, `timestamp()`, `seq()` listed under "Interfaces" table
   - **Actual**: The interface is named `IDeterminism`, not `IDefine`. It only has a single method: `get(key: string, origin: () => string): string`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5` shows `interface IDeterminism { get(key: string, origin: () => string): string; }`

2. **IDefine Methods Do Not Exist**

   - **Documented**: `d.uuid()`, `d.timestamp()`, `d.seq('users')` methods shown in "Using IDefine" section
   - **Actual**: The `IDeterminism` interface only has a `get(key: string, origin: () => string): string` method. No `uuid()`, `timestamp()`, or `seq()` methods exist.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`

3. **ICyanConfig Interface Not Exported**

   - **Documented**: `ICyanConfig` listed under "Interfaces" table with description "Template configuration structure"
   - **Actual**: No `ICyanConfig` interface exists in the SDK. The configuration type is `Cyan` (which contains processors and plugins).
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:183-207` shows all exported types; `ICyanConfig` is not among them. The actual config type is `Cyan` defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27`

4. **IProcessor Interface Not Exported**

   - **Documented**: `IProcessor` listed under "Interfaces" table with description "Processor definition"
   - **Actual**: No `IProcessor` interface exists. The SDK uses `CyanProcessor` type internally.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:18-22` defines `interface CyanProcessor`

5. **FileGroup Type Does Not Exist**

   - **Documented**: `FileGroup` listed under "Types" table with description "File group configuration"
   - **Actual**: No `FileGroup` type is exported. The equivalent type is `CyanGlob`.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:196` exports `CyanGlob`, not `FileGroup`

6. **GlobType.Ignore Does Not Exist**

   - **Documented**: `GlobType` shows three values: Template, Copy, Ignore (implied from types reference)
   - **Actual**: The `GlobType` enum only has two values: `Template = 0` and `Copy = 1`. There is no `Ignore` value.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `enum GlobType { Template = 0, Copy = 1 }`

7. **dateSelect Return Type Incorrect**

   - **Documented**: `dateSelect()` returns `Promise<Date>` in "Using IInquirer" section
   - **Actual**: `dateSelect()` returns `Promise<string>`, not `Promise<Date>`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26` shows `dateSelect(q: DateQ): Promise<string>;` and `dateSelect(q: string, id: string, help?: string | null): Promise<string>;`

8. **CyanGlob.root is Optional, Not Required**

   - **Documented**: Quick Start example shows `root: 'templates'` as a required field
   - **Actual**: The `root` field is optional (`root?: string | null`)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7` shows `root?: string | null;`

9. **Cyan.plugins is Required, Not Optional**

   - **Documented**: Quick Start example implies plugins may be optional (not included in basic example)
   - **Actual**: The `plugins` field is required on the `Cyan` interface (not `plugins?:`)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:26` shows `plugins: CyanPlugin[];` (no `?`)

10. **Comment in Quick Start Example Uses Wrong Type Name**
    - **Documented**: Comment says `// d: IDefine - get deterministic values`
    - **Actual**: The actual type is `IDeterminism`, not `IDefine`
    - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts:6` shows `type LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>`

### 🟡 Documentation Issues

1. **Missing Export: StartResolverWithLambda**

   - **Problem**: The SDK exports `StartResolverWithLambda` and `StartResolver` as additional entry points, but these are not documented.
   - **Location**: "Entry Points" table (lines 18-25)
   - **Fix**: Add `StartResolverWithLambda` and `StartResolver` to the entry points table

2. **Missing Types in Documentation**

   - **Problem**: Several exported types are not documented: `Cyan`, `CyanGlob`, `CyanProcessorInput`, `CyanPluginInput`, `ProcessorOutput`, `PluginOutput`, `ResolverOutput`, `ResolverInput`, `CheckboxQ`, `ConfirmQ`, `DateQ`, `PasswordQ`, `SelectQ`, `TextQ`, `ICyanPlugin`, `ICyanProcessor`, `ICyanResolver`, `ICyanTemplate`, `LambdaTemplateFn`, `LambdaPluginFn`, `LambdaResolverFn`
   - **Location**: "Interfaces" and "Types" tables (lines 26-42)
   - **Fix**: Update the tables to reflect actual SDK exports or link to comprehensive API reference

3. **IInquirer Parameter Naming: desc vs help**

   - **Problem**: Documentation examples use third parameter described as "description" but actual SDK parameter name is `help`
   - **Location**: Lines 67-78 "Using IInquirer" examples
   - **Fix**: Update examples to use `help` terminology or clarify the parameter purpose

4. **SDK Reference Links Consistency**

   - **Problem**: Links to SDK reference pages exist but the naming in those pages should be verified to match actual SDK types (e.g., `cyan-config` should document `Cyan` type, not `ICyanConfig` which doesn't exist)
   - **Location**: Lines 94-98 "SDK Reference Sections"
   - **Fix**: Verify linked pages use correct interface/type names from actual SDK

5. **Missing dateSelect Method Example**

   - **Problem**: The `IInquirer` interface has a `dateSelect` method that is not shown in the "Using IInquirer" examples
   - **Location**: Lines 64-78 "Using IInquirer" section
   - **Fix**: Add an example for `dateSelect` method

6. **Version Compatibility Table Unverified**
   - **Problem**: SDK version 2.x maps to CyanPrint CLI 2.x and Node.js 20+ - this cannot be verified from source code alone
   - **Location**: Lines 100-106 "Version Compatibility"
   - **Fix**: Add note that this is guidance based on testing, or verify against release notes

### 🟠 Other Problems

1. **SDK Description Could Be More Specific**

   - **Problem**: The description mentions "plugins" but doesn't clarify what plugins do vs processors
   - **Recommendation**: Add brief description of the difference between processors and plugins in the overview

2. **Installation Command May Need Version Pinning**

   - **Problem**: The installation command `npm install @atomicloud/cyan-sdk` installs latest, but the version compatibility table suggests specific version matching matters
   - **Recommendation**: Consider adding guidance on version pinning or version selection

3. **Using IDefine Section Completely Wrong**
   - **Problem**: The entire "Using IDefine" section (lines 80-91) documents non-existent methods. The actual `IDeterminism` interface has a completely different API.
   - **Recommendation**: Either remove this section entirely or replace with correct documentation of `IDeterminism.get(key, origin)` method

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 10    |
| 🟡       | 6     |
| 🟠       | 3     |

---

### contributor/repositories/argonx

# File: content/docs/contributor/repositories/argon.mdx

> Documentation for Argon, described as a Next.js/React/tRPC-based web UI for the CyanPrint registry. This documentation claims it provides a visual interface to browse, search, and manage CyanPrint templates.

### Source Code Inaccuracies

1. **Tech Stack - Framework**

   - **Documented**: React (UI framework), Next.js (Full-stack framework)
   - **Actual**: SvelteKit with Svelte components
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:6-7` shows `"dev": "vite dev"` and uses `@sveltejs/kit`, `svelte` dependencies. No React or Next.js present.

2. **Tech Stack - tRPC**

   - **Documented**: tRPC (Type-safe API client)
   - **Actual**: OpenAPI-generated HTTP client using `swagger-typescript-api`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:29` includes `"swagger-typescript-api": "^13.0.3"`. The API client at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/api/core/Api.ts` is auto-generated from Swagger/OpenAPI spec, not tRPC.

3. **Project Name**

   - **Documented**: sulfone.argon
   - **Actual**: The package.json shows `"name": "carbon"` and README shows "Sulfone Carbon"
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:2` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.md:1`

4. **Key Files - Directory Structure**

   - **Documented**: `src/app/` (Next.js App Router pages), `src/server/` (Server-side code), `prisma/` (Database schema)
   - **Actual**: Uses SvelteKit routes at `src/routes/`, no `src/app/` directory, no `src/server/` directory, no Prisma
   - **Evidence**: Directory listing shows routes at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/`. No `prisma/` folder found via glob search. Server config is at `src/config/server/` not `src/server/`.

5. **Architecture Diagram**

   - **Documented**: Shows "Next.js Pages", "React Components", "tRPC Client", "tRPC Routers"
   - **Actual**: Should show SvelteKit routes, Svelte components, and OpenAPI HTTP client
   - **Evidence**: The entire codebase uses SvelteKit patterns with `.svelte` files, SvelteKit auth (`@auth/sveltekit`), and generated API client.

6. **Building Commands**

   - **Documented**: `bun run dev`, `bun run build`, `bun run test`, `bun run typecheck`
   - **Actual**: Uses `pls dev`, `pls build` via Taskfile, no `typecheck` script
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml:24-42` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:5-14` shows scripts like `"dev": "vite dev"` and `"check": "svelte-kit sync && svelte-check"`, not `typecheck`.

7. **Configuration - Environment Variables**

   - **Documented**: `NEXT_PUBLIC_API_URL`, `ZINC_API_URL`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`
   - **Actual**: No Next.js env vars (those are Next.js-specific). Uses Descope OIDC for auth, not GitHub OAuth directly. Config loaded from `src/config/` files.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/hooks.server.ts:17-26` shows Descope OIDC provider, not GitHub OAuth. No `NEXT_PUBLIC_*` or `ZINC_API_URL` found in codebase.

8. **Key Components - TemplateCard**

   - **Documented**: React component `<TemplateCard>` with JSX syntax
   - **Actual**: Svelte component at `src/lib/components/cards/template.svelte`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/components/cards/template.svelte` is a Svelte file using Svelte syntax (`<script lang="ts">`, `export let template`)

9. **Key Components - SearchBar**

   - **Documented**: React component `<SearchBar>` with autocomplete
   - **Actual**: No dedicated SearchBar component; search is inline in `registry/+page.svelte` using basic Input component without autocomplete
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte:128` uses `<Input>` with simple `bind:value={searchTerm}`. No autocomplete functionality.

10. **Authentication**

    - **Documented**: GitHub OAuth authentication
    - **Actual**: Descope OIDC authentication
    - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/hooks.server.ts:17-25` shows `id: 'descope'` provider with OIDC.

11. **Features - Category Navigation**

    - **Documented**: "Category-based navigation"
    - **Actual**: No category-based navigation found; search filters by resource type (template/plugin/processor)
    - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte:24-40` shows resource type selector (Template/Plugin/Processor), not categories.

12. **Page Structure - Routes**
    - **Documented**: `/templates/[id]`, `/templates/[id]/v/[version]`, `/search`, `/user/login`, `/user/profile`
    - **Actual**: Routes are `/templates/[user_id]/[template_id]`, no `/search` route (search is on `/registry`), no `/user/login` or `/user/profile` (has `/profile` and `/register`)
    - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/` shows actual routes: `templates/[user_id]/[template_id]`, `registry`, `profile`, `register`, `tokens`.

### Documentation Issues

1. **Component Example Syntax**

   - **Problem**: Documentation shows JSX/TSX syntax for components
   - **Location**: "Key Components" section (lines 122-143)
   - **Fix**: Update to show Svelte component syntax

2. **Storybook Mention**

   - **Problem**: Documentation mentions "Add Storybook stories for new components"
   - **Location**: "Contributing" section (line 152)
   - **Fix**: Remove Storybook reference - no Storybook configuration found in the repository

3. **React Best Practices**

   - **Problem**: Documentation says "Follow React best practices and hooks patterns"
   - **Location**: "Contributing" section (line 149)
   - **Fix**: Update to "Follow Svelte best practices"

4. **Type Checking Command**
   - **Problem**: Documents `bun run typecheck` which doesn't exist
   - **Location**: "Building" section (lines 102-103)
   - **Fix**: Change to `bun run check` or `pls check` (via Taskfile)

### Other Problems

1. **Name Confusion**

   - **Problem**: Documentation refers to "Argon" but package.json shows name "carbon" and README says "Sulfone Carbon"
   - **Recommendation**: Clarify whether this is Argon or Carbon, or if names are used interchangeably for different environments

2. **Stale/Incorrect Documentation**
   - **Problem**: This appears to be documentation for a completely different project (Next.js/React/tRPC) than what exists (SvelteKit)
   - **Recommendation**: Documentation needs complete rewrite to match actual SvelteKit implementation

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 12    |
| Documentation Issues     | 4     |
| Other Problems           | 2     |

---

### contributor/architecture/execution-flowx

# File: content/docs/contributor/architecture/execution-flow.mdx

> This document describes the execution flow of CyanPrint templates, covering template resolution, input collection, container scheduling, template execution via Helium SDK, processor pipelines, plugin application, and output streaming. It includes sequence diagrams and configuration examples for the Boron coordinator.

### Source Code Inaccuracies

1. **gRPC Streaming Not Used for Output**

   - **Documented**: "Boron->>CLI: Forward chunks via gRPC stream" (Line 167, Phase 7 diagram)
   - **Actual**: Boron uses HTTP (Gin framework) with tar/gzip streaming over HTTP, not gRPC. The server.go file shows standard HTTP endpoints (`r.POST`, `r.GET`) and streaming via `io.Copy` to HTTP response writers.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:169` shows `io.Copy(ctx.Writer, resp.Body)` - standard HTTP streaming. No gRPC service definitions exist in the boron codebase.

2. **No Resource Limits Configuration Found**

   - **Documented**: Resource limits section shows `boron-config.yaml` with `cpu_limit`, `memory_limit`, `timeout`, `network_enabled` settings (Lines 203-220)
   - **Actual**: The boron codebase does not implement CPU limits, memory limits, or timeouts for containers. The `docker.go` file creates containers without any resource constraints (`HostConfig` has no `Resources` field set). The `ParallelismLimit` in the code refers to concurrent goroutines, not container CPU/memory limits.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:177-197` - Container creation with no resource limits in HostConfig.

3. **Default Resource Values Not Implemented**

   - **Documented**: "CPU: 1 core default", "Memory: 512MB default", "Timeout: 5 minutes" (Lines 85-88)
   - **Actual**: No such defaults exist in the codebase. Containers are created without resource constraints.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go` - No `NanoCPUs`, `Memory`, or `MemorySwap` settings in container creation.

4. **Template Function Name Incorrect**

   - **Documented**: "Call generate function" (Line 104, Phase 4 diagram)
   - **Actual**: The Helium SDK interface uses `template()` method, not `generate()`. The `ICyanTemplate` interface defines `template(inquirer: IInquirer, determinism: IDeterminism): Promise<Cyan>`.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:12`

5. **Return Type Incorrect**

   - **Documented**: "Return File Tree" (Line 107, Phase 4 diagram)
   - **Actual**: Templates return a `Cyan` object containing `processors` and `plugins` arrays, not a file tree directly. File tree generation is handled by the template's internal logic.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27` shows `Cyan` interface with `processors` and `plugins`.

6. **Input Sources Not Verified**

   - **Documented**: Input sources priority list includes command-line flags, input files, environment variables (`CYAN_INPUT_KEY`), and interactive prompts (Lines 64-68)
   - **Actual**: The documented environment variable pattern `CYAN_INPUT_KEY` and `--input-file` flag were not found in the iridium CLI codebase. The CLI uses `cyanprompt` library for interactive prompts, but the specific input priority mechanism described is not implemented as documented.
   - **Evidence**: Grep searches in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium` found no matches for `CYAN_INPUT`, `input-file`, or related input flag patterns.

7. **CLI Command Format**

   - **Documented**: `cyan print init my-project` (Line 12)
   - **Actual**: The CLI binary is named `cyanprint` (based on Cargo.toml and directory structure). The exact command format should be verified against actual CLI implementation.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/` directory structure and main.rs entry point.

8. **Container Lifecycle States Incomplete**

   - **Documented**: State diagram shows Pending, Scheduled, Running, Succeeded, Failed, Timeout states (Lines 177-187)
   - **Actual**: The boron code does not implement explicit state management with these states. Container status is derived from Docker's container state (`running`, `exited`, etc.) without the intermediate "Scheduled" or "Pending" states managed by Boron itself.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/executor.go` - No state machine implementation.

9. **Registry API Endpoint Format**
   - **Documented**: `GET /templates/my-template` (Line 38)
   - **Actual**: The Zinc registry API uses different endpoint patterns: `api/v1/template/slug/{username}/{name}` for getting templates by slug, or `api/v1/template/id/{userId}/{templateId}` for getting by ID.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:61-68`

### Documentation Issues

1. **Mermaid Diagram Syntax - State Diagram**

   - **Problem**: The state diagram uses `stateDiagram-v2` which may not render correctly in all Fumadocs environments.
   - **Location**: Lines 177-187
   - **Fix**: Verify Mermaid component supports stateDiagram-v2 syntax, or convert to flowchart for broader compatibility.

2. **Config File Format Unverified**

   - **Problem**: The `boron-config.yaml` example shows configuration options that don't exist in the codebase. This is misleading documentation.
   - **Location**: Lines 205-220
   - **Fix**: Remove the configuration example or update it to reflect actual configuration options (if any exist). The actual boron configuration is done via command-line flags (`--registry`).

3. **Phase Description Mismatch**

   - **Problem**: Phase 4 mentions "Initialize SDK Runtime" but the Helium SDK is a simple TypeScript library without a complex runtime initialization.
   - **Location**: Lines 101-109
   - **Fix**: Update to reflect that the container starts an Express.js server with the template logic loaded.

4. **Error Handling Table Unverified**
   - **Problem**: The error handling table (Lines 191-199) describes behaviors like "Increase limits, retry with larger container" which are not implemented in the code.
   - **Location**: Lines 191-199
   - **Fix**: Update to reflect actual error handling, which returns error responses to the client without automatic retry or limit adjustment.

### Other Problems

1. **Missing Architecture Component: Argon**

   - **Problem**: The documentation doesn't mention Argon (the web frontend), which is part of the overall CyanPrint platform. The overview should clarify that Argon provides the web UI while Iridium is the CLI.
   - **Recommendation**: Either add Argon to the architecture overview or clarify this document focuses specifically on CLI-driven execution.

2. **Processor/Plugin Port Numbers Undocumented**

   - **Problem**: The code shows processors use port 5551 and plugins use port 5552 for health checks, but this isn't documented anywhere.
   - **Recommendation**: Document the port assignments for different component types (templates: 5550, processors: 5551, plugins: 5552, merger: 9000).

3. **Network Configuration Missing**

   - **Problem**: Documentation doesn't explain that all containers must be on the `cyanprint` Docker bridge network, which is enforced by the code.
   - **Recommendation**: Add a section about Docker network requirements and how Boron manages the `cyanprint` network.

4. **Session Management Not Explained**
   - **Problem**: The concept of session IDs is central to how Boron tracks containers and volumes, but isn't clearly explained in the execution flow.
   - **Recommendation**: Add explanation of session-based resource isolation and cleanup.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 9     |
| Documentation Issues     | 4     |
| Other Problems           | 4     |

---

### developer/processors/explanation/input-configx

<!-- source: content/docs/developer/processors/explanation/input-config.mdx -->

# 📄 File: content/docs/developer/processors/explanation/input-config.mdx

> The documentation describes how configuration flows from templates to processors via `input.config`. The core concepts are accurate, but there are several API naming discrepancies between the documentation and the actual SDK implementation.

### 🔴 Source Code Inaccuracies

(for each: Documented | Actual | file:line evidence)

1. **input.writeDirectory** | **input.writeDir** | The documentation consistently uses `input.writeDirectory` but the actual SDK type is `writeDir`. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:13` shows `writeDir: string;` not `writeDirectory`. Also seen in actual processor implementations at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` returning `{ directory: input.writeDir }`.

2. **input.readDirectory** | **input.readDir** | The documentation uses `input.readDirectory` but the actual SDK type is `readDir`. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:12` shows `readDir: string;` not `readDirectory`.

3. **GlobType.Template value** | **GlobType.Template = 0** | Documentation shows `type: GlobType.Template` in examples, which is correct, but the actual enum value is numeric (0). Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `enum GlobType { Template = 0, Copy = 1 }`. While the usage is correct, developers should be aware of the underlying numeric values for debugging.

4. **i.text() parameter order** | **i.text(q, id, help?)** | Documentation at line 31 shows `i.text('Project name?', 'project.name', 'Enter name')` with 3 parameters. The actual API is `text(q: string, id: string, help?: string | null)`. The 3rd parameter `help` is optional - this is correctly shown but not explicitly documented as optional. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:22`.

5. **i.checkbox() parameter order** | **i.checkbox(q, options, id, help?)** | Documentation at line 32 shows `i.checkbox('Features?', ['auth', 'api'], 'project.features', 'Select')` but doesn't clarify that the signature is `checkbox(q: string, options: string[], id: string, help?: string | null)`. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:6`.

6. **i.select() parameter order** | **i.select(q, options, id, help?)** | Documentation at line 33 shows `i.select('Format?', ['json', 'yaml'], 'config.format', 'Choose')` - the API signature is `select(q: string, options: string[], id: string, help?: string | null)`. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:18`.

### 🟡 Documentation Issues

(for each: Problem | Location | Fix)

1. **Inconsistent property naming across documentation** | Lines 90, 132, 176, etc. | The documentation uses `input.writeDirectory` and `input.readDirectory` throughout, but the actual SDK uses `input.writeDir` and `input.readDir`. This inconsistency appears in multiple code examples. Should update all instances to use the correct `writeDir` and `readDir` property names.

2. **CyanGlob type definition incomplete** | Lines 38, 96-110 | Documentation shows `CyanGlob` with `root` as required but the actual type has `root?: string | null` (optional). Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11` shows `root?: string | null;`. Also missing `type: GlobType` field which is required.

3. **Template callback parameters not documented** | Lines 29-51 | The template lambda signature `(i, d)` is used but the types aren't explained. Should clarify that `i` is `IInquirer` and `d` is `IDeterminism`.

4. **Processor callback fileHelper type not documented** | Lines 72-91 | The `fileHelper` parameter type `CyanFileHelper` should be explicitly mentioned in the function signature explanation.

5. **cyan.yaml processor.inputs not verified in actual code** | Lines 276-306 | The documentation shows an elaborate `processor.inputs` schema in `cyan.yaml` but actual processor `cyan.yaml` files in the codebase (e.g., `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml`) only contain basic metadata like `username`, `name`, `description`, etc. The `processor.inputs` feature may be aspirational or from a different version.

6. **Related link inconsistency** | Line 310-312 | Links to `/developer/processors/how-to/access-config` and `/developer/processors/reference/cyan-yaml` and `/developer/processors/reference/sdk/input-output` - should verify these paths exist and are correct.

### 🟠 Other Problems

(for each: Problem | Recommendation)

1. **No mention of LambdaProcessorFn type** | The documentation could benefit from explicitly showing the type signature: `type LambdaProcessorFn = (i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>`. This would help TypeScript users understand the exact function signature.

2. **No mention of LambdaTemplateFn type** | Similarly, the template function type could be documented: `type LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>`.

3. **VirtualFile properties not documented** | The documentation shows `file.content` and `file.writeFile()` but doesn't explain the full `VirtualFile` interface which includes `baseRead`, `baseWrite`, `relative`, `read`, `write` properties.

4. **Default processor uses vars not mentioned** | The actual processor examples (processor1, processor2) use a `vars` config pattern with Eta templating, but this common pattern isn't referenced as the "default" behavior mentioned at line 224.

5. **Missing import statements** | Code examples don't show required imports like `import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk';` consistently across all examples.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 6     |
| 🟠       | 5     |

---

### developer/processors/reference/cyan-yamlx

<!-- source: content/docs/developer/processors/reference/cyan-yaml.mdx -->

# 📄 File: content/docs/developer/processors/reference/cyan-yaml.mdx

> This documentation describes a cyan.yaml format that significantly differs from the actual implementation. The documented schema includes fields like `version`, `author`, `license`, `repository`, `keywords`, and `processor.inputs` that do not exist in the actual source code. The actual cyan.yaml schema for processors uses different fields: `username`, `name`, `description`, `project`, `source`, `email`, `tags`, and `readme`.

### 🔴 Source Code Inaccuracies

1. **Documented Required Field `name` format vs Actual**

   - Documented: `name` in "org/name format" (e.g., `myorg/my-processor`)
   - Actual: `name` is a simple string without org prefix (e.g., `processor1`, `dotnet-handlebar`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml:2` shows `name: processor1`

2. **Documented Required Field `version` Does Not Exist**

   - Documented: `version` is a required field (string, semantic version)
   - Actual: `version` field does not exist in processor cyan.yaml schema
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - `CyanProcessorFileConfig` struct has no `version` field

3. **Documented Optional Field `author` Does Not Exist**

   - Documented: `author` is an optional string field
   - Actual: `author` field does not exist; the schema uses `username` and `email` instead
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - No `author` field present

4. **Documented Optional Field `license` Does Not Exist**

   - Documented: `license` is an optional SPDX license identifier
   - Actual: `license` field does not exist in processor cyan.yaml schema
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - No `license` field

5. **Documented Optional Field `repository` Does Not Exist**

   - Documented: `repository` is an optional source repository URL
   - Actual: `repository` field does not exist; schema uses `project` and `source` fields instead
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - Has `project` and `source`, no `repository`

6. **Documented Optional Field `keywords` Does Not Exist**

   - Documented: `keywords` is an optional string array
   - Actual: `keywords` field does not exist; schema uses `tags` field instead
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - Has `tags: Vec<String>`, no `keywords`

7. **Documented `processor.inputs` Configuration Schema Does Not Exist**

   - Documented: Entire `processor.inputs` schema with `name`, `type`, `required`, `default`, `description`, `enum`, `properties`, `items` fields
   - Actual: No `processor` object or `inputs` array exists in cyan.yaml. Config is passed dynamically via templates at runtime, not defined in cyan.yaml
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - No `processor` field in struct

8. **Actual Required Fields Missing from Documentation**

   - Documented: Only `name` and `version` as required
   - Actual: `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme` are all required fields
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - All fields are non-optional in Rust struct

9. **Code Example Uses Wrong Config Pattern**
   - Documented: `input.config` contains properties like `features`, `frontmatter`, `headingPrefix`, `formatting`
   - Actual: `input.config` is typed as `unknown` and is populated by template configuration, not cyan.yaml
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `CyanProcessorInput.config: unknown`

### 🟡 Documentation Issues

1. **Incorrect Example Organization Name**

   - Problem: Full example uses `atomicloud/markdown-processor` with org format
   - Location: Lines 88-89
   - Fix: Should use simple name like `markdown-processor` and include `username` field separately

2. **Missing Actual Fields from Documentation**

   - Problem: Documentation does not mention actual required fields: `username`, `project`, `source`, `email`, `readme`
   - Location: Required/Optional Fields tables (lines 23-37)
   - Fix: Add tables documenting the actual schema fields

3. **Misleading Config Documentation**

   - Problem: The entire "Processor Configuration Schema" section (lines 39-73) describes a non-existent feature
   - Location: Lines 39-73
   - Fix: Remove or clarify that config is defined in templates, not in processor's cyan.yaml

4. **Incorrect TypeScript Interface Example**

   - Problem: The `MarkdownConfig` interface example implies config is defined in cyan.yaml
   - Location: Lines 144-168
   - Fix: Clarify that config types are user-defined and passed from templates at runtime

5. **Incorrect Full Example Structure**
   - Problem: Full example shows `license: Apache-2.0`, `repository` URL, `keywords` array - none of which exist
   - Location: Lines 87-137
   - Fix: Update example to match actual schema with `username`, `project`, `source`, `email`, `tags`, `readme`

### 🟠 Other Problems

1. **Confusion Between Template and Processor cyan.yaml**

   - Problem: Template cyan.yaml includes `processors`, `plugins`, `templates` arrays for composition, but processor cyan.yaml is purely metadata
   - Recommendation: Clearly distinguish that processor cyan.yaml is only for registry metadata, not for defining processor behavior or configuration schema

2. **Config Schema Definition Location Unclear**

   - Problem: Documentation suggests defining config inputs in cyan.yaml, but config is actually defined when templates reference processors with config overrides
   - Recommendation: Document that processor config is defined at the template level, not in the processor's cyan.yaml

3. **Version Handling Not Documented**
   - Problem: Version is managed by the registry system (as `version_description` in requests), not in cyan.yaml
   - Recommendation: Explain that versioning is handled by the registry, not the yaml file

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 9     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/processors/reference/project-structurex

# File: content/docs/developer/processors/reference/project-structure.mdx

> Documentation describing the standard file layout for processor projects, including entry point, package.json, Dockerfile, cyan.yaml, and tsconfig.json.

### Source Code Inaccuracies

1. **Property name mismatch in `index.ts` example**

   - **Documented**: `input.writeDirectory` (line 43)
   - **Actual**: `input.writeDir`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` uses `input.writeDir`. The SDK type `CyanProcessorInput` defines `writeDir`, not `writeDirectory` (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:13`).

2. **Dockerfile Bun version mismatch**

   - **Documented**: `FROM oven/bun:1.1.31` (line 74)
   - **Actual**: `FROM oven/bun:1.0.11` (used in actual processor Dockerfiles)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor2/Dockerfile:1` use `oven/bun:1.0.11`. Only templates use 1.1.31 (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile:1`).

3. **Dockerfile install command difference**

   - **Documented**: `RUN bun install --frozen-lockfile` (line 83)
   - **Actual**: `RUN bun install` (without `--frozen-lockfile` flag)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:6` uses `bun install` without the frozen lockfile flag.

4. **Dockerfile COPY pattern difference**

   - **Documented**: `COPY package.json bun.lockb* ./` (line 82, with wildcard for optional bun.lockb)
   - **Actual**: `COPY package.json .` and `COPY bun.lockb .` (separate lines, no wildcard)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:4-5` copies files separately without wildcards.

5. **package.json structure differences**

   - **Documented**: Uses `"@types/bun": "latest"` in devDependencies (lines 64-65)
   - **Actual**: Uses `"bun-types": "latest"` in devDependencies
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/package.json:6` uses `bun-types`, not `@types/bun`.

6. **package.json missing `version` and `scripts` fields**

   - **Documented**: Includes `version: "1.0.0"` and `scripts` section (lines 54-59)
   - **Actual**: Real processor package.json files omit `version` and `scripts` fields
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/package.json` has no `version` or `scripts` keys. Uses `"module": "index.ts"` instead of scripts.

7. **package.json dependency version format**

   - **Documented**: `"@atomicloud/cyan-sdk": "^1.0.0"` (with caret and specific version)
   - **Actual**: `"@atomicloud/cyan-sdk": "latest"` (no caret, uses latest tag)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/package.json:12` uses `"latest"` tag.

8. **tsconfig.json structure differences**

   - **Documented**: Uses `"target": "ES2022"`, `"module": "ESNext"`, `"esModuleInterop": true` (lines 117-123)
   - **Actual**: Uses `"target": "esnext"`, `"module": "esnext"`, includes additional fields like `"lib": ["ESNext"]`, `"noEmit": true`, `"composite": true`, `"allowSyntheticDefaultImports": true`, and `"types": ["bun-types"]`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/tsconfig.json` has different structure with `esnext` targets and Bun-specific configuration.

9. **cyan.yaml structure differences**
   - **Documented**: Uses `name: myorg/my-processor`, `version: 1.0.0`, `license: MIT`, `processor.inputs` section (lines 96-109)
   - **Actual**: Uses `username: ernest`, `name: processor1`, no `version`, no `license`, no `processor.inputs` section. Has `project`, `source`, `email`, `tags`, `readme` fields.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml` shows actual structure with `username`, `name` (not org/name format), `project`, `source`, `email`, `tags`, `readme` fields.

### Documentation Issues

1. **Code example uses incorrect property name**

   - **Problem**: The `index.ts` example uses `input.writeDirectory` which doesn't exist on the actual SDK type.
   - **Location**: Line 43 in the code example
   - **Fix**: Change `return { directory: input.writeDirectory };` to `return { directory: input.writeDir };`

2. **Multi-file example uses incorrect property name**

   - **Problem**: Same issue in the multi-file example section.
   - **Location**: Line 179 in the multi-file example
   - **Fix**: Change `input.writeDirectory` to `input.writeDir`

3. **package.json example shows incorrect structure**

   - **Problem**: The documented package.json doesn't match actual processor implementations.
   - **Location**: Lines 51-67
   - **Fix**: Update to reflect actual structure with `bun-types` instead of `@types/bun`, remove version/scripts if not typically used, show `peerDependencies` for TypeScript, and consider using `"latest"` for SDK version or explain versioning strategy.

4. **tsconfig.json example lacks Bun-specific configuration**

   - **Problem**: The documented tsconfig is too generic and lacks Bun-specific settings that actual processors use.
   - **Location**: Lines 115-127
   - **Fix**: Include Bun-specific settings like `"types": ["bun-types"]`, `"noEmit": true`, `"allowSyntheticDefaultImports": true`, etc.

5. **cyan.yaml example shows incorrect structure**
   - **Problem**: The documented cyan.yaml structure doesn't match actual processor implementations.
   - **Location**: Lines 93-109
   - **Fix**: Update to show actual fields: `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`. Either remove `processor.inputs` section or clarify where input configuration is actually defined (likely in templates, not processors).

### Other Problems

1. **Dockerfile version inconsistency**

   - **Problem**: Documentation shows Bun 1.1.31, but actual processors use 1.0.11. Templates use 1.1.31.
   - **Recommendation**: Either update documentation to use a consistent version (recommend 1.1.31 or later) or explain version selection criteria.

2. **Missing `.dockerignore` and `.gitignore` in basic structure**

   - **Problem**: Real processor projects include `.dockerignore` and `.gitignore` files that aren't shown in the basic structure diagram.
   - **Recommendation**: Add these files to the basic structure diagram for completeness.

3. **Missing `README.MD` in basic structure**
   - **Problem**: Real processor projects include a `README.MD` file (referenced in cyan.yaml) that isn't shown in the basic structure.
   - **Recommendation**: Add `README.MD` to the basic structure diagram.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 9     |
| Documentation Issues     | 5     |
| Other Problems           | 3     |

---

### contributor/architecture/execution-flow

<!-- source: content/docs/contributor/architecture/execution-flow.mdx -->

# 📄 File: content/docs/contributor/architecture/execution-flow.mdx

> This document describes the CyanPrint execution flow but contains several inaccuracies when compared to the actual source code. The CLI command structure, communication protocols, resource limits, input collection methods, and plugin hook system are all documented incorrectly or without source code evidence.

### 🔴 Source Code Inaccuracies

1. **CLI Command Structure**

   - Documented: `cyan print init my-project`
   - Actual: `cyanprint create <template_ref> [path]` - The CLI uses `create` not `print init`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46` shows the command is `Create { template_ref, path, coordinator_endpoint }`

2. **Communication Protocol**

   - Documented: "Forward chunks via gRPC stream"
   - Actual: Uses HTTP REST with Gin framework, not gRPC. The boron server uses HTTP POST/GET endpoints
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:28` shows `r := gin.Default()` with HTTP routes, not gRPC

3. **Resource Limits Configuration**

   - Documented: CPU: 1 core default, Memory: 512MB default, Timeout: 5 minutes, with `boron-config.yaml` configuration file
   - Actual: No such configuration file or resource limits exist in the codebase. The code uses `runtime.NumCPU()` for parallelism limits only
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:43-47` shows `cpu := rt.NumCPU()` used only for `ParallelismLimit`, no memory or timeout configuration found

4. **Input Collection Methods**

   - Documented: `--input key=value`, `--input-file inputs.yaml`, `CYAN_INPUT_KEY` environment variables, interactive prompts
   - Actual: No evidence of `--input`, `--input-file`, or `CYAN_INPUT_KEY` in the CLI. The template uses interactive prompting via inquirer pattern
   - Evidence: Grep search for `CYAN_INPUT`, `--input`, `input-file` in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium` returned no matches

5. **Plugin Hooks**

   - Documented: `pre-write` and `post-write` plugin hooks
   - Actual: No such hooks exist in the codebase. Plugins have a single `plug` method that takes directory and config
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/service.ts:12-18` shows only a `plug()` method

6. **Zinc Registry API Endpoint**
   - Documented: `GET /templates/my-template`
   - Actual: API uses versioned routes like `api/v{version}/[controller]` - likely `api/v1/template`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:24` shows `[Route("api/v{version:apiVersion}/[controller]")]`

### 🟡 Documentation Issues

1. **Mermaid Diagram Inaccuracy - Container Scheduling**

   - Problem: The diagram shows "Select Executor Node" and "Schedule Container" as separate steps with resource limits
   - Location: Phase 3: Container Scheduling section
   - Fix: The actual code shows containers are created directly without node selection. Resource limits (CPU, memory, timeout) are not implemented

2. **Missing CLI Command Documentation**

   - Problem: The `cyan print init` command doesn't exist; the actual command is `cyanprint create`
   - Location: Overview section, line 12
   - Fix: Update to `cyanprint create <template_ref> [path]`

3. **Incorrect Protocol in Sequence Diagram**

   - Problem: Shows gRPC streaming which doesn't exist
   - Location: Phase 7: Output Streaming section
   - Fix: Update to show HTTP REST with tar.gz streaming via `io.Copy`

4. **Non-existent Configuration File**

   - Problem: `boron-config.yaml` example is fictional
   - Location: Resource Management section, lines 205-220
   - Fix: Remove this section or document actual configuration method (environment variables/CLI flags)

5. **Processor Pipeline Description**

   - Problem: Shows sequential processor pipeline but actual execution is parallel with semaphore-based concurrency
   - Location: Phase 5: Processor Pipeline section
   - Fix: Document that processors run in parallel with CPU-based semaphore limiting

6. **Template Execution Details**
   - Problem: Shows `Call generate function` but actual SDK uses `template()` method
   - Location: Phase 4: Template Execution section
   - Fix: Update to reflect actual SDK API (`template(inquirer, determinism)`)

### 🟠 Other Problems

1. **Container Lifecycle States**

   - Problem: State diagram shows `Scheduled` state but code doesn't have this state - containers go from creation to running
   - Recommendation: Review actual container states from Docker execution code

2. **Error Handling Table**

   - Problem: Several error types listed (Container OOM, Timeout) have no corresponding handling code
   - Recommendation: Verify each error type against actual error handling in `server.go` and `executor.go`

3. **Missing Documentation**

   - Problem: The session ID generation, cleanup process, and volume management are not documented
   - Recommendation: Add documentation for `DefaultSessionIdGenerator` and cleanup flow shown in `main.rs:175-189`

4. **Registry Client Communication**
   - Problem: Shows direct registry communication but actual implementation uses `CyanRegistryClient` wrapper
   - Recommendation: Document the actual HTTP client abstraction layer

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 6     |
| 🟠       | 4     |

---

### contributor/repositories/iridium

<!-- source: content/docs/contributor/repositories/iridium.mdx -->

# File: content/docs/contributor/repositories/iridium.mdx

> Major inaccuracies found in CLI command names, directory structure, configuration paths, and default URLs. The documentation does not match the current implementation.

### Source Code Inaccuracies

1. **Documented**: CLI commands `cyan print init`, `cyan print update`, `cyan print search`, `cyan print config set`, `cyan print auth login`
   **Actual**: Commands are `cyanprint push`, `cyanprint create`, `cyanprint update`, `cyanprint daemon` (no init, search, config, or auth commands)
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:28-98` - The actual Commands enum contains Push, Create, Update, and Daemon variants only.

2. **Documented**: Directory structure includes `src/main.rs`, `src/commands/`, `src/config/`, `src/api/`, `src/executor/`
   **Actual**: Source structure is `src/main.rs`, `src/commands.rs`, `src/run.rs`, `src/update.rs`, `src/coord.rs`, `src/util.rs`, `src/errors.rs`, and `src/update/` subdirectory. No `config/`, `api/`, or `executor/` directories exist.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/` directory listing shows actual files.

3. **Documented**: Tech stack lists Clap, Tokio, Reqwest
   **Actual**: Correct, but missing key dependencies: `bollard` (Docker), `inquire` (interactive prompts), `serde_yaml`, `chrono`, `uuid`, `futures`, `rand`
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/Cargo.toml:8-25`

4. **Documented**: Configuration file at `~/.config/cyan-print/config.toml` with registry URL `https://registry.cyanprint.dev`, executor URL `https://executor.cyanprint.dev`
   **Actual**: No configuration file is read from `~/.config/cyan-print/config.toml`. Configuration is done via environment variables (`CYANPRINT_REGISTRY`, `CYANPRINT_COORDINATOR`, `CYAN_TOKEN`) and command-line arguments. Default registry is `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`, default coordinator is `http://coord.cyanprint.dev:9000`.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:9-23,41-44,56-61,91-96,116` - Environment variables and default values defined inline in clap arguments. No `~/.config` path found in codebase.

5. **Documented**: `cyan print init <project-name> --template <template-id>`
   **Actual**: Command is `cyanprint create <template-ref> [path]` with `--coordinator-endpoint` option. Uses template reference format (user/name:version), not `--template` flag.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46`

6. **Documented**: Architecture diagram shows "Registry Client" connecting to "Zinc API" and "Executor Client" connecting to "Boron"
   **Actual**: The terminology is partially correct but the diagram oversimplifies. There is a `CyanRegistryClient` (in cyanregistry crate) for Zinc and `CyanCoordinatorClient` (in cyancoordinator crate) for the coordinator. The coordinator communicates with Boron containers.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:7-9,29-33` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/http/client.rs`

7. **Documented**: `RUST_LOG=debug cargo run -- init my-project`
   **Actual**: Should be `RUST_LOG=debug cargo run -- create <template-ref>` (not init, and requires template reference, not project name)
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46`

### Documentation Issues

1. **Problem**: The documentation states this is "The CyanPrint CLI tool" but the actual binary name is `cyanprint` (not `cyan print`)
   **Location**: Title and Commands section
   **Fix**: Update all command examples to use `cyanprint` as a single word, not `cyan print`

2. **Problem**: Missing documented commands that don't exist: `search`, `config set`, `auth login`
   **Location**: Commands section (lines 37-52)
   **Fix**: Remove non-existent commands and document actual commands: `push` (with subcommands: template, group, plugin, processor), `create`, `update`, `daemon`

3. **Problem**: Configuration section is entirely fictional - no config file at `~/.config/cyan-print/config.toml`
   **Location**: Configuration section (lines 84-98)
   **Fix**: Document actual configuration via environment variables (`CYANPRINT_REGISTRY`, `CYANPRINT_COORDINATOR`, `CYAN_TOKEN`) and command-line flags

4. **Problem**: Iridium is a Rust workspace with 4 crates (cyanprint, cyanprompt, cyanregistry, cyancoordinator), not a single Rust project
   **Location**: Tech Stack and Key Files sections
   **Fix**: Update documentation to reflect workspace structure with member crates

5. **Problem**: Missing mention of Docker dependency (bollard) - critical for the `daemon` command
   **Location**: Tech Stack table
   **Fix**: Add Docker/bollard to the tech stack as it's essential for running coordinators locally

### Other Problems

1. **Problem**: The repository structure documentation is outdated - mentions `src/api/` and `src/executor/` directories that don't exist
   **Recommendation**: Update Key Files table to reflect actual structure: `src/coord.rs` (coordinator client), `src/run.rs` (template execution), `src/update/` (update logic), and note the separate crates for registry (cyanregistry) and coordinator (cyancoordinator) functionality

2. **Problem**: No mention of the subcommands for `push` (template, group, plugin, processor)
   **Recommendation**: Document the push subcommands as they are significant features for publishing different artifact types

3. **Problem**: Missing documentation for the `--interactive` flag on `update` command
   **Recommendation**: Document the `--interactive` flag which allows selecting specific versions during updates

4. **Problem**: Missing documentation for the `--debug` flag available on all commands
   **Recommendation**: Document the global `-d` / `--debug` flag for enabling debug output

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 7     |
| Documentation Issues     | 5     |
| Other Problems           | 4     |

---

### developer/templates/explanation/docker-vs-cyan-registryx

# File: content/docs/developer/templates/explanation/docker-vs-cyan-registry.mdx

> This document explains the difference between Docker registries and CyanPrint registry for template publishing. Several inaccuracies were found regarding CLI commands, Dockerfile paths, and registry URLs.

### Source Code Inaccuracies

1. **Incorrect CLI command syntax for `push template`**

   - **Documented**: `cyanprint push template --token $CYAN_TOKEN myorg/my-template-blob 1.0.0 myorg/my-template 1.0.0`
   - **Actual**: `pls push template <blob_image> <blob_tag> <template_image> <template_tag>` with `--token` and `--config` flags
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:120-130` shows `PushCommands::Template` takes 4 positional arguments: `blob_image`, `blob_tag`, `template_image`, `template_tag`. The `--token` and `--config` flags are part of `PushArgs`, not inline options after the subcommand.

2. **Missing `--config` flag in push command**

   - **Documented**: Command shows `--token` only
   - **Actual**: The push command requires `--config cyan.yaml` (default: `cyan.yaml`) and `--token` flags
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:100-118` shows `PushArgs` struct with `config` and `token` fields.

3. **Non-existent `search` CLI command**

   - **Documented**: `cyanprint search nodejs`
   - **Actual**: No `search` command exists in the CLI
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:27-98` shows only `Push`, `Create`, `Update`, and `Daemon` commands. Template search is done via the web UI at registry.cyanprint.dev, not CLI. Additionally, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:38-49` confirms a Search API endpoint exists (`GET /api/v1/Template`) for programmatic access.

4. **Incorrect Dockerfile paths**

   - **Documented**: `-f cyan/template.Dockerfile` and `-f cyan/blob.Dockerfile`
   - **Actual**: The blob Dockerfile is at `./blob.Dockerfile` (root level), and the template Dockerfile is at `./cyan/Dockerfile`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:27` shows `-f "./blob.Dockerfile"` and line 35 shows `-f "./cyan/Dockerfile"`. The actual e2e templates have `blob.Dockerfile` at the project root and `Dockerfile` inside the `cyan/` directory.

5. **Incorrect CyanPrint Cloud registry URL**

   - **Documented**: `registry.cyanprint.io`
   - **Actual**: The actual registry endpoints are `https://api.zinc.sulfone.raichu.cluster.atomi.cloud` (API) and `registry.cyanprint.dev` (web UI)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:13` shows default registry as `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`. Other docs reference `registry.cyanprint.dev` for the web UI.

6. **Non-existent `list` and `info` CLI commands**

   - **Documented** (in related push-to-registry.mdx): `cyanprint list myorg/` and `cyanprint info myorg/my-template:1.0.0`
   - **Actual**: No `list` or `info` commands exist in the CLI
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:27-98` shows only `Push`, `Create`, `Update`, and `Daemon` commands.

7. **Metadata fields in CyanPrint registry incomplete description**
   - **Documented**: "Template metadata - Name, version, description" and "Image references - Links to Docker images"
   - **Actual**: The actual stored fields include `BlobDockerReference`, `BlobDockerTag`, `TemplateDockerReference`, `TemplateDockerTag` for templates, and `DockerReference`, `DockerTag` for plugins/processors. Also includes `Processors`, `Plugins`, `Templates`, and `Resolvers` arrays for composition.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/TemplateVersion.cs:47-56` shows the full property structure. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/models.go:11-16` shows the `PropertyRes` structure used by the executor.

### Documentation Issues

1. **Inconsistent CLI binary name**

   - **Problem**: Documentation uses `cyanprint` but the actual CLI alias is `pls`
   - **Location**: Throughout the document (lines 77-79, 126-128, 135-138, 167-172)
   - **Fix**: Either clarify that `cyanprint` is the full command while `pls` is the alias used in development, or consistently use `pls` which is the documented task runner alias per `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/LLM.MD:17-18`

2. **Misleading "Direct Docker Usage" section**

   - **Problem**: The section suggests using Docker image references directly with `cyanprint create`, but this capability is not documented in the CLI source
   - **Location**: Lines 163-178
   - **Fix**: Verify if direct Docker image references are supported. The CLI appears to only support `<username>/<name>:<version>` format per `parse_ref()` function.

3. **Missing documentation of default values**

   - **Problem**: Document doesn't mention default values for `--config` (`cyan.yaml`) and `--message` (`"No description"`)
   - **Location**: Registration section (lines 76-80)
   - **Fix**: Add note about default values or show full command syntax

4. **Workflow section Dockerfile path inconsistency**
   - **Problem**: The Workflow section (lines 113-129) uses `cyan/template.Dockerfile` and `cyan/blob.Dockerfile` but the actual paths are `./cyan/Dockerfile` and `./blob.Dockerfile`
   - **Location**: Lines 116-122
   - **Fix**: Update to correct Dockerfile paths: `-f ./cyan/Dockerfile` and `-f ./blob.Dockerfile`

### Other Problems

1. **Template image naming inconsistency**

   - **Problem**: Documentation refers to "template image" but the e2e tests use "script image" terminology
   - **Recommendation**: Clarify terminology - is it "template image" or "script image"? The e2e script at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:32` uses `script_image` variable name.

2. **Registry URL confusion**

   - **Problem**: Multiple registry URLs are referenced across documentation (`registry.cyanprint.io`, `registry.cyanprint.dev`, `api.zinc.sulfone.raichu.cluster.atomi.cloud`)
   - **Recommendation**: Clearly distinguish between the web UI URL (`registry.cyanprint.dev`), API endpoint (`api.zinc.sulfone.raichu.cluster.atomi.cloud`), and any public-facing marketing URL.

3. **Missing search alternative**

   - **Problem**: Since `cyanprint search` doesn't exist as a CLI command, users need to know how to search for templates
   - **Recommendation**: Document that template search is available via the web UI at registry.cyanprint.dev, as confirmed by `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/docs/developer/features/05-registry-search.md`

4. **Mermaid diagram accuracy**

   - **Problem**: The workflow diagram (lines 96-104) shows "User Searches Registry" step but CLI search doesn't exist. The actual workflow would be "User browses registry via web UI"
   - **Recommendation**: Update the Mermaid diagram to accurately reflect that search is done via web UI, not CLI

5. **Configurable registry endpoint not documented**
   - **Problem**: The boron server accepts a `--registry` flag (line 51 in main.go), indicating the registry endpoint is configurable, but this isn't mentioned in the document
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/main.go:45-52` shows `--registry` flag
   - **Recommendation**: Document that the registry endpoint is configurable for self-hosted deployments

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 7     |
| Documentation Issues     | 4     |
| Other Problems           | 5     |

### Additional Verification from Source Code

**Verified from zinc (registry backend):**

- Two-image architecture (template + blob): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/TemplateVersion.cs:47-56` showing `BlobDockerReference`, `BlobDockerTag`, `TemplateDockerReference`, `TemplateDockerTag`
- Search API exists: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:38-49` has Search endpoint
- Push endpoint exists: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:360-405` has Push endpoint

**Verified from boron (executor/coordinator):**

- Registry client resolves processors/plugins: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/registry.go` has `getProcessorVersion`, `getPluginVersion` functions
- Template version model matches: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/models.go:3-55` shows `TemplateVersionRes`, `PropertyRes`
- Configurable registry: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/main.go:45-52` shows `--registry` flag
- Internal container path `/workspace/cyanprint`: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:216`

---

### developer/templates/how-to/indexx

<!-- source: content/docs/developer/templates/how-to/index.mdx -->

# 📄 File: content/docs/developer/templates/how-to/index.mdx

> Index page listing how-to guides for template development. This is a navigation/hub page that links to 14 individual how-to guides. Source code verification against the helium SDK repository reveals significant discrepancies between documented APIs and actual SDK interfaces.

### 🔴 Source Code Inaccuracies

1. **CheckboxQ `default` property does not exist** | Documented: `default: ['ESLint']` for checkbox questions | Actual: `CheckboxQ` interface only has `type`, `id`, `message`, `desc?`, `validate?`, and `options` | Evidence: helium/sdks/node/src/domain/core/question.ts:11-19

2. **SelectQ `default` property does not exist** | Documented: `default: 'MIT'` for select questions | Actual: `SelectQ` interface has no `default` property | Evidence: helium/sdks/node/src/domain/core/question.ts:54-62

3. **CheckboxQ `validate` property is hardcoded to null** | Documented: `validate: (selected) => {...}` for checkbox | Actual: `CheckboxQ.validate` typed as `validate?: null` | Evidence: helium/sdks/node/src/domain/core/question.ts:16

4. **SelectQ `validate` property is hardcoded to null** | Documented: `validate: (selected) => {...}` for select | Actual: `SelectQ.validate` typed as `validate?: null` | Evidence: helium/sdks/node/src/domain/core/question.ts:59

5. **`d.uuid()`, `d.timestamp()`, `d.seq()` methods do not exist** | Documented: pin-determinism.mdx shows these methods on `IDeterminism` | Actual: `IDeterminism` only has `get(key: string, origin: () => string): string` method | Evidence: helium/sdks/node/src/domain/core/deterministic.ts:1-5

6. **`dateSelect()` returns `string`, not `Date`** | Documented: `// Returns: Date object` | Actual: `dateSelect(q: DateQ): Promise<string>` | Evidence: helium/sdks/node/src/domain/core/inquirer.ts:24-26

7. **Date validation function receives `string`, not `Date`** | Documented: `validate: (date) => { if (date < new Date()) {...} }` | Actual: `validate?: (input: string) => string | null` | Evidence: helium/sdks/node/src/domain/core/question.ts:37

### 🟡 Documentation Issues

1. **Missing Select question type from index** | Lines 14-17 | Add entry for "Ask Select Questions" since it is a core question type available in the SDK

2. **Missing Text question type from index** | Lines 14-17 | Add entry for "Ask Text Questions" since it is the most commonly used question type

3. **Anchor link may not resolve** | ask-confirm.mdx:119 | Link to `/developer/templates/reference/sdk/inquirer#select` should be verified

### 🟠 Other Problems

1. **Inconsistent return type for dateSelect** | All date examples show Date object methods (`.toISOString()`, `.getTime()`) but SDK returns string | Update documentation to show string parsing

2. **IDeterminism usage examples are incorrect** | pin-determinism.mdx shows non-existent methods | Rewrite using correct `d.get(key, originFn)` pattern

3. **Checkbox validation examples will fail** | validate property cannot accept functions | Remove validation examples for Checkbox or document limitation

4. **Select validation examples will fail** | validate property cannot accept functions | Remove validation examples for Select or document limitation

5. **Checkbox default values examples will fail** | default property not supported | Remove default examples for Checkbox

6. **Select default values examples will fail** | default property not supported | Remove default examples for Select

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 7     |
| 🟡       | 3     |
| 🟠       | 6     |

---

### developer/templates/how-to/push-to-registryx

<!-- source: content/docs/developer/templates/how-to/push-to-registry.mdx -->

# 📄 File: content/docs/developer/templates/how-to/push-to-registry.mdx

> This document describes how to build and push CyanPrint templates to a registry. Multiple inaccuracies were found regarding CLI command syntax, Dockerfile structure, and available CLI commands.

### 🔴 Source Code Inaccuracies

1. **Incorrect Dockerfile path for template image**

   - Documented: `-f cyan/template.Dockerfile`
   - Actual: `-f cyan/Dockerfile` (no "template." prefix in actual usage)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:35` uses `-f "./cyan/Dockerfile"`
   - Note: Some templates in ketone do use `template.Dockerfile` naming convention, but the e2e scripts use `Dockerfile`

2. **Incorrect Dockerfile path for blob image**

   - Documented: `-f cyan/blob.Dockerfile`
   - Actual: `-f blob.Dockerfile` (no "cyan/" prefix, blob is at repo root)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:27` uses `-f "./blob.Dockerfile"`

3. **CLI command argument order for `cyanprint push template`**

   - Documented: `cyanprint push template --token $CYAN_TOKEN myorg/my-template-blob 1.0.0 myorg/my-template 1.0.0`
   - Actual: `cyanprint push template <BLOB_IMAGE> <BLOB_TAG> <TEMPLATE_IMAGE> <TEMPLATE_TAG>` with positional arguments
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:122-130`:
     ```rust
     Template {
         blob_image: String,
         blob_tag: String,
         template_image: String,
         template_tag: String,
     }
     ```
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:39` shows: `cyanprint push template "$blob_image" "$tag" "$script_image" "$tag"`

4. **Verification commands `cyanprint list` and `cyanprint info` do not exist**

   - Documented: `cyanprint list myorg/` and `cyanprint info myorg/my-template:1.0.0`
   - Actual: These commands do not exist in the CLI. Available commands are: `push`, `create`, `update`, and `daemon`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:28-98` shows only `Push`, `Create`, `Update`, and `Daemon` subcommands

5. **Missing CLI flags documentation**

   - Documented: Commands only show `--token` flag
   - Actual: CLI has additional flags: `-c, --config` (default: `cyan.yaml`) and `-m, --message` (default: "No description")
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:105-117`

6. **blob.Dockerfile structure differs significantly**
   - Documented: Simple `FROM alpine:latest` with `COPY cyan/templates/ /templates/`
   - Actual: Multi-stage build with tar creation, specific extraction paths to `/workspace/cyanprint`, and `LABEL cyanprint.dev=true`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/blob.Dockerfile:1-14`

### 🟡 Documentation Issues

1. **Missing context about cyan.yaml configuration file**

   - Problem: The guide does not mention that a `cyan.yaml` configuration file is required in the working directory
   - Location: Step 3 "Register with CyanPrint" section
   - Fix: Add a prerequisite or note that `cyan.yaml` must exist (default path, configurable via `--config` flag)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:105-106`

2. **Inconsistent image naming in examples**

   - Problem: Documentation uses `myorg/my-template-blob` but actual examples use `$template-blob` and `$template-script`
   - Location: Steps 1 and 2 build commands
   - Fix: Clarify blob image vs template image naming conventions

3. **Missing CYAN_TOKEN environment variable documentation**

   - Problem: The `--token` flag's env var alternative is not documented
   - Location: Step 3 and CI/CD section
   - Fix: Note that `CYAN_TOKEN` env var can be used instead of `--token` flag
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:116` shows `env = "CYAN_TOKEN"`

4. **GitHub Actions example has incorrect cyanprint command syntax**

   - Problem: The GitHub Actions example may use incorrect argument order for `cyanprint push template`
   - Location: Lines 171-175
   - Fix: Verify argument order matches actual CLI: `<blob_image> <blob_tag> <template_image> <template_tag>`

5. **Registry verification section uses non-existent commands**
   - Problem: The "Verification" section documents commands that don't exist
   - Location: Lines 118-128
   - Fix: Remove or replace with actual verification method (registry web UI or API)

### 🟠 Other Problems

1. **No distinction between local testing and production publishing**

   - Problem: The guide shows `--push` flag but doesn't adequately explain the `--load` workflow for local testing
   - Recommendation: Add section: build with `--load` -> test locally -> push to Docker registry -> register with CyanPrint

2. **Missing prerequisite: docker buildx setup**

   - Problem: Multi-arch builds require buildx to be configured with `docker buildx create --use`
   - Recommendation: Add prerequisite step for buildx setup or link to Docker documentation

3. **No troubleshooting section**

   - Problem: No guidance for authentication errors, registry connectivity issues, or missing cyan.yaml
   - Recommendation: Add common error scenarios and solutions

4. **GitHub Actions example missing CYAN_TOKEN secret documentation**

   - Problem: The example references `${{ secrets.CYAN_TOKEN }}` without explaining setup
   - Recommendation: Document how to configure the CYAN_TOKEN secret in GitHub repository settings

5. **blob.Dockerfile documentation inconsistent with actual implementation**
   - Problem: The documented simple blob.Dockerfile doesn't match the actual multi-stage build with tar extraction
   - Recommendation: Either update examples to match actual implementation or document both approaches

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 5     |
| 🟠       | 5     |

---

### developer/templates/reference/sdk/inquirerx

<!-- source: content/docs/developer/templates/reference/sdk/inquirer.mdx -->

# 📄 File: content/docs/developer/templates/reference/sdk/inquirer.mdx

> Complete API reference for the IInquirer interface used for collecting user input during template generation. Documents text(), select(), confirm(), checkbox(), password(), and dateSelect() methods with shorthand and object forms.

### 🔴 Source Code Inaccuracies

1. **dateSelect() Return Type**

   - Documented: `// Returns: Date` (line 208)
   - Actual: `Promise<string>` in TypeScript
   - Evidence: `helium/sdks/node/src/domain/core/inquirer.ts:24` - `dateSelect(q: DateQ): Promise<string>;`

2. **select() Object Form - default Property**

   - Documented: `default: 'MIT'` (line 84)
   - Actual: SelectQ has no `default` property
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:54-62` - SelectQ interface has no default field

3. **select() Object Form - validate Property**

   - Documented: `validate: (selected) => { ... }` (lines 85-89)
   - Actual: `validate?: null` (explicitly null, not a function)
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:59` - `validate?: null`

4. **checkbox() Object Form - default Property**

   - Documented: `default: ['ESLint']` (line 148)
   - Actual: CheckboxQ has no `default` property
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:11-19` - CheckboxQ interface has no default field

5. **checkbox() Object Form - validate Property**

   - Documented: `validate: (selected) => { ... }` (lines 149-153)
   - Actual: `validate?: null` (explicitly null, not a function)
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:16` - `validate?: null`

6. **confirm() Object Form - validate Property**

   - Documented: validate available in table (line 251)
   - Actual: `validate?: null` (explicitly null, not a function)
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:26` - `validate?: null`

7. **Object Form Properties Table - validate Row**

   - Documented: `validate: (input) => string | null` for all types
   - Actual: Only available for TextQ, PasswordQ, DateQ. Explicitly null for SelectQ, CheckboxQ, ConfirmQ.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:11-73`

8. **Object Form Properties Table - default Row**
   - Documented: `default: varies` for all types
   - Actual: Only available for TextQ, ConfirmQ, DateQ. Does NOT exist for SelectQ, CheckboxQ, PasswordQ.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:11-73`

### 🟡 Documentation Issues

1. **SDK Package Name Not Mentioned**

   - Problem: No import statement showing package name (`@atomicloud/cyan-sdk`)
   - Location: Throughout the document
   - Fix: Add import example: `import { StartTemplateWithLambda, IInquirer, QuestionType } from '@atomicloud/cyan-sdk';`

2. **Parameter Naming Inconsistency**

   - Problem: Documentation uses "description" but API parameter is "help" (shorthand) or "desc" (object form)
   - Location: All shorthand form examples
   - Fix: Use "help" consistently or explicitly note the mapping

3. **Missing Properties from Object Form Examples**

   - Problem: Several question types have undocumented properties: `initial` (TextQ), `minDate/maxDate` (DateQ), `errorMessage` (ConfirmQ), `confirmation` (PasswordQ)
   - Location: Object form examples for each method
   - Fix: Add these properties to examples or the properties table

4. **Object Form Properties Table Incomplete**

   - Problem: Table missing rows for `initial`, `errorMessage`, `confirmation`, `minDate`, `maxDate`
   - Location: Lines 240-253
   - Fix: Add rows for type-specific properties

5. **Parameter Order Inconsistency**
   - Problem: Shorthand forms have different parameter orders (text/confirm/password/dateSelect vs select/checkbox)
   - Location: All shorthand examples
   - Fix: Add a note explaining the difference or make more explicit

### 🟠 Other Problems

1. **No Mention of Cross-Language Differences**

   - Problem: Documentation only covers TypeScript SDK; Python and .NET have different naming conventions
   - Recommendation: Add note about language-specific differences or create separate pages

2. **No Type Safety Warning for Object Forms**

   - Problem: The `type` property in object forms must match the method called, but no warning about mismatches
   - Recommendation: Add a note that type property must match the method

3. **Related Links Not Verified**
   - Problem: Links like `/developer/templates/how-to/use-keys` should be verified to exist
   - Recommendation: Verify all related links work correctly

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 8     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/processors/explanation/memory-loadingx

<!-- source: content/docs/developer/processors/explanation/memory-loading.mdx -->

# 📄 File: content/docs/developer/processors/explanation/memory-loading.mdx

> This documentation file explains memory loading strategies for processors. While the conceptual information about memory management is sound, there are several critical API inaccuracies where documented method names and signatures do not match the actual SDK implementation in helium.

### 🔴 Source Code Inaccuracies

1. **VirtualFileReference.load() method does not exist**

   - Documented: `const content = await ref.load();` (lines 82-84, 142)
   - Actual: The method is named `readFile()`, returns a `VirtualFile` object (not a string), and is synchronous, not async
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:26-29` - `readFile(): VirtualFile { const content = fs.readFileSync(this.read, 'utf-8'); return new VirtualFile(..., content); }`

2. **VirtualFileReference.copy() method does not exist**

   - Documented: `ref.copy();` for copying without loading (lines 86, 136, 145)
   - Actual: `VirtualFileReference` has no `copy()` method. The `copy()` method exists only on `CyanFileHelper`, not on the reference object
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - VirtualFileReference class only has `read`, `write` properties and `readFile()` method

3. **VirtualFileStream.read() method does not exist**

   - Documented: `for await (const chunk of stream.read())` (lines 99, 169)
   - Actual: `VirtualFileStream` has a `reader` property (a `fs.ReadStream`), not a `read()` method. Usage should iterate over `stream.reader` directly
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9` - `class VirtualFileStream { constructor(public reader: fs.ReadStream, public writer: fs.WriteStream) {} }`

4. **VirtualFileStream.writeFile() method does not exist**

   - Documented: `stream.writeFile(transform(content));` (referenced in file-helper.mdx line 173)
   - Actual: `VirtualFileStream` has a `writer` property (a `fs.WriteStream`), not a `writeFile()` method
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

5. **readAsStream returns synchronous array, not async iterable**

   - Documented: `for await (const stream of streams)` (lines 97, 151)
   - Actual: `readAsStream()` returns `VirtualFileStream[]` synchronously, not an async iterable. The `for await` is misleading - regular `for...of` should be used for array iteration
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:42` - `readAsStream(g: CyanGlob): VirtualFileStream[]`

6. **VirtualFile.writeFile() takes no parameters**

   - Documented: `ref.writeFile(transform(content));` (line 143)
   - Actual: `writeFile()` takes no parameters - it writes the `content` property of the VirtualFile instance. Pattern must be: `file.content = transform(file.content); file.writeFile();`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54` - `writeFile(): void { ... fs.writeFileSync(this.write, this.content, 'utf-8'); }`

7. **CyanGlob interface missing required properties in examples**
   - Documented: `fileHelper.read({ root: 'docs', glob: '**/*.md' })` (lines 70, 78, 95, etc.)
   - Actual: `CyanGlob` interface requires `exclude: string[]` and `type: GlobType` properties. The `type` property is required to distinguish Template vs Copy handling
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts` - `interface CyanGlob { root?: string | null; glob: string; exclude: string[]; type: GlobType; }`

### 🟡 Documentation Issues

1. **Incorrect async/await usage in code examples**

   - Problem: Multiple code examples use `await ref.load()` but the actual method `readFile()` is synchronous
   - Location: Lines 82-84, 142
   - Fix: Change `const content = await ref.load();` to `const file = ref.readFile(); const content = file.content;`

2. **Missing required CyanGlob properties throughout**

   - Problem: All code examples using `read()`, `get()`, `readAsStream()`, and `copy()` omit required `type` and `exclude` properties
   - Location: Lines 70, 78, 95, 109, 136, 139, 150, 156-157, 187, 203
   - Fix: Add `type: GlobType.Template` (for read/get/readAsStream) or `type: GlobType.Copy` (for copy) and `exclude: []` to each CyanGlob object

3. **Stream iteration example is fundamentally incorrect**

   - Problem: Cannot use `for await (const stream of streams)` with a regular array, and `stream.read()` doesn't exist
   - Location: Lines 97-101, 151-153, 189-192
   - Fix: Show correct stream usage:
     ```ts
     const streams = fileHelper.readAsStream({ root: 'data', glob: '*.csv', exclude: [], type: GlobType.Template });
     for (const stream of streams) {
       // Use stream.reader (Node.js ReadStream) directly
       for await (const chunk of stream.reader) {
         // Process chunk
       }
     }
     ```

4. **Container memory range is speculative**

   - Problem: "Default processor containers typically have 256MB-1GB" is not verified against actual deployment configuration
   - Location: Line 128
   - Fix: Verify against actual infrastructure configuration or add disclaimer that this varies by deployment

5. **Best Practices code example uses undefined variable**
   - Problem: Line 184 uses `fileHelper.read(glob)` but `glob` is undefined - should be a CyanGlob object literal
   - Location: Line 184
   - Fix: Replace `glob` with a proper CyanGlob object example

### 🟠 Other Problems

1. **Practical Example section has multiple critical issues**

   - Problem: The mixed approach example (lines 133-161) uses non-existent methods (`ref.load()`, `ref.copy()`), incorrect async patterns, and missing CyanGlob properties
   - Recommendation: Rewrite the example using actual API methods. The lazy-load pattern using `get()` followed by `readFile()` works, but `copy()` must be called on `fileHelper`, not on `ref`:

     ```ts
     StartProcessorWithLambda(async (input, fileHelper) => {
       // Small files: load all
       const configs = fileHelper.read({
         root: 'config',
         glob: '**/*.{json,yaml}',
         exclude: [],
         type: GlobType.Template,
       });

       // Medium files: conditional load
       const docRefs = fileHelper.get({ root: 'docs', glob: '**/*.md', exclude: [], type: GlobType.Template });
       for (const ref of docRefs) {
         if (ref.relative.includes('api')) {
           const file = ref.readFile();
           file.content = transform(file.content);
           file.writeFile();
         } else {
           // Must use fileHelper.copy() - ref.copy() does not exist
           fileHelper.copy({ root: 'docs', glob: ref.relative, exclude: [], type: GlobType.Copy });
         }
       }

       // Static files: copy directly
       fileHelper.copy({ root: 'images', glob: '**/*', exclude: [], type: GlobType.Copy });

       return { directory: input.writeDirectory };
     });
     ```

2. **VirtualFileStream API varies by SDK**

   - Problem: The streaming API is documented generically but actual usage differs significantly between SDKs. Node.js exposes raw `fs.ReadStream`/`fs.WriteStream`, while .NET uses `StreamReader`/`StreamWriter`
   - Recommendation: Add SDK-specific streaming examples or clarify that streaming requires working with platform-native stream APIs

3. **Memory estimation formula is speculative**
   - Problem: The 2x overhead factor is presented as fact without verification against actual runtime behavior
   - Recommendation: Mark this as an approximate guideline or provide actual measured overhead from profiling

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 7     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/processors/how-to/push-to-registryx

<!-- source: content/docs/developer/processors/how-to/push-to-registry.mdx -->

# 📄 File: content/docs/developer/processors/how-to/push-to-registry.mdx

> Documentation for publishing processors to registries. The document describes Docker registry operations but the actual AtomiCloud system uses the Zinc registry (a custom entity registry) combined with Docker image references. Contains several significant inaccuracies regarding the registry workflow and data structures.

### 🔴 Source Code Inaccuracies

1. **Documented**: "Publish your processor to a Docker registry so others can use it in their templates."
   **Actual**: Processors are registered in the Zinc registry, not directly published to Docker registries. The Zinc registry stores metadata including `dockerImage` and `dockerTag` fields that reference Docker images.
   **Evidence**: `zinc/docs/developer/surfaces/api/02-processor.md:485-524` - Shows POST `/api/v1/processor/slug/{username}/{name}/versions` endpoint with `dockerImage` and `dockerTag` fields as separate properties

2. **Documented**: Version format using semantic versioning like `1.0.0`, `1.2.3`
   **Actual**: The version resolution system uses auto-incremented integer version numbers (1, 2, 3, etc.), not semantic versioning strings. The registry returns `version: 1`, `version: 2`, etc.
   **Evidence**: `zinc/docs/developer/surfaces/api/02-processor.md:376-384` shows `"version": 1` as integer; `boron/docker_executor/registry.go:150-201` shows integer version handling

3. **Documented**: The "Use in Templates" code example shows `type: GlobType.Template`
   **Actual**: The `CyanGlobReq` struct uses a `Type string` field (plain string), not a `GlobType.Template` enum access pattern.
   **Evidence**: `boron/docker_executor/model.go:3-8` - Shows `CyanGlobReq` struct with `Type string` field

4. **Documented**: `cyan.yaml` with `processor.inputs[]` and `processor.configSchema` sections
   **Actual**: The actual template `cyan.yaml` format uses simple string arrays: `processors: ['cyan/default', 'atomi/typescript:3']`. No nested `processor` object with `inputs` or `configSchema` exists.
   **Evidence**: `boron/docs/developer/concepts/template-vs-cyan-processors.md:34-46` shows actual format with string arrays

5. **Documented**: `name: myorg/my-processor` format in cyan.yaml
   **Actual**: The actual config uses separate `username` and `name` fields in the registry config.
   **Evidence**: `boron/docs/developer/concepts/template-vs-cyan-processors.md:35-36` shows `username: atomi` and `name: shared` as separate fields

6. **Documented**: `author` and `license` fields in cyan.yaml
   **Actual**: These fields do not exist in the actual processor config structure.
   **Evidence**: `boron/docs/developer/concepts/template-vs-cyan-processors.md:34-46` shows actual fields: `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`

### 🟡 Documentation Issues

1. **Problem**: The documentation describes Docker CLI operations (docker tag, docker push) but the actual system requires using the Zinc registry API to register processor metadata.
   **Location**: Entire "Publish Process" section (lines 19-68)
   **Fix**: Document the two-step process: (1) Push Docker image to container registry, (2) Register processor with Zinc registry via API or CLI. Reference `POST /api/v1/processor/slug/{username}/{name}/versions`

2. **Problem**: The `cyan.yaml` example includes a `processor` section with `inputs` and `configSchema` that doesn't match the actual format.
   **Location**: "Creating cyan.yaml" section (lines 101-133)
   **Fix**: Update to match the actual format which uses simple string arrays for `processors`, `plugins`, `templates` and metadata fields like `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`

3. **Problem**: The naming conventions table suggests Docker registry naming patterns, but the actual system uses `username/name` format for Zinc registry references with separate `dockerImage`/`dockerTag` fields.
   **Location**: "Naming Conventions" section (lines 71-99)
   **Fix**: Document the Zinc registry reference format: `username/name` or `username/name:version` where version is an integer

4. **Problem**: The "Use in Templates" example structure doesn't accurately show the CyanProcessorReq structure.
   **Location**: Lines 57-67
   **Fix**: Show correct structure: `{ name: 'username/name:version', config: {...}, files: [{ root: 'templates', glob: '**/*', exclude: [], type: 'template' }] }`

5. **Problem**: The GitHub Actions CI/CD example only shows Docker push, missing the registry registration step.
   **Location**: "CI/CD Integration" section (lines 135-176)
   **Fix**: Add step to call Zinc registry API (`POST /api/v1/processor/push/{username}`) after Docker push

6. **Problem**: Version tags section shows semver format but registry uses integers.
   **Location**: "Version Tags" section (lines 83-99)
   **Fix**: Clarify that Docker tags can use any format (semver recommended) but Zinc registry versions are auto-incremented integers

### 🟠 Other Problems

1. **Problem**: The documentation conflates "Docker registry" with "Zinc registry" which are two different concepts. The Zinc registry is an entity registry that stores metadata about processors, including Docker image references (`dockerReference` and `dockerTag`).
   **Recommendation**: Add a clear distinction section explaining: (1) Docker registry stores actual container images, (2) Zinc registry stores processor metadata and points to Docker images

2. **Problem**: Missing documentation about the version resolution system that validates processor requests against template definitions at runtime.
   **Recommendation**: Add a note that processor versions must be declared in the template's `cyan.yaml` and are validated against the template's pinned versions during execution. Reference `boron/docs/developer/features/02-version-resolution.md`

3. **Problem**: The "Best Practices" section is generic Docker advice without CyanPrint-specific guidance.
   **Recommendation**: Add CyanPrint-specific best practices such as: using correct `dockerReference`/`dockerTag` format, declaring processors in template cyan.yaml, understanding version pinning behavior

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 6     |
| 🟠       | 3     |

---

### developer/templates/explanation/3-way-mergex

# File: content/docs/developer/templates/explanation/3-way-merge.mdx

> This document explains the 3-way merge functionality in CyanPrint for updating templates while preserving user modifications. While the core concepts are accurate, there are several discrepancies between the documentation and the actual implementation in the iridium codebase.

### Source Code Inaccuracies

1. **State Storage Directory Structure**

   - **Documented**: `.cyan/` directory with `generation.json` and `base/` subdirectory
   - **Actual**: `.cyan_state.yaml` single YAML file in the project root
   - **Evidence**: `iridium/cyancoordinator/src/template/history.rs:75` uses `target_dir.join(".cyan_state.yaml")`, and the state persistence documentation at `iridium/docs/developer/features/04-state-persistence.md:3` explicitly states "Stores template execution state...in `.cyan_state.yaml`"

2. **Command Name**

   - **Documented**: `cyanprint update ./my-project`
   - **Actual**: `pls update ./my-project` (the CLI tool is invoked via `pls` wrapper)
   - **Evidence**: `iridium/docs/developer/surfaces/cli/03-update.md:8` shows `pls update [path] [options]`

3. **Command Options**

   - **Documented**: `cyanprint update ./my-project myorg/template:2.0.0` and `--dry-run`
   - **Actual**: No template reference argument or `--dry-run` option exists. Available options are `--coordinator-endpoint`/`-c`, `--interactive`/`-i`
   - **Evidence**: `iridium/cyanprint/src/commands.rs:52-72` defines the Update command with only `path`, `coordinator_endpoint`, and `interactive` options

4. **Determinism API Syntax**

   - **Documented**: `const projectId = d.uuid(); // "abc-123"`
   - **Actual**: The API uses `determinism.get('key', () => origin_function)` pattern, not `d.uuid()`
   - **Evidence**: `helium/docs/developer/concepts/03-determinism.md:27-28` shows `determinism.get('project-id', () => randomUUID())` and the `IDeterminism` interface at `helium/sdks/node/src/domain/core/deterministic.ts:1-5` only has a `get(key: string, origin: () => string): string` method

5. **"Pin System" Terminology**

   - **Documented**: "The pin system ensures IDs remain consistent across updates"
   - **Actual**: The system uses "deterministic states" not "pin system". The term "pin" does not appear in the deterministic states documentation
   - **Evidence**: `iridium/docs/developer/concepts/04-deterministic-states.md` and `helium/docs/developer/concepts/03-determinism.md` refer to "deterministic states" and `deterministicStates`, not pins

6. **State File Metadata Content**
   - **Documented**: `generation.json` contains metadata
   - **Actual**: `.cyan_state.yaml` contains `templates` map with `active` flag, `history` array containing `version`, `time`, `answers`, and `deterministic_states`
   - **Evidence**: `iridium/docs/developer/features/04-state-persistence.md:75-89` shows the actual YAML structure

### Documentation Issues

1. **Incorrect Directory Structure Diagram**

   - **Problem**: The documented `.cyan/` directory structure does not match actual implementation
   - **Location**: Lines 43-49
   - **Fix**: Replace with actual state file format:
     ```yaml
     .cyan_state.yaml # State file in project root
     ```

2. **Non-existent Command Arguments**

   - **Problem**: Documentation shows template reference argument and `--dry-run` option that don't exist
   - **Location**: Lines 182-191 (Update Command section)
   - **Fix**: Update to reflect actual command syntax:

     ```bash
     # Update to latest version
     pls update ./my-project

     # Update with interactive version selection
     pls update ./my-project --interactive

     # Update current directory
     pls update
     ```

3. **Incorrect Determinism Code Example**

   - **Problem**: Uses `d.uuid()` syntax which doesn't exist in the SDK
   - **Location**: Lines 167-173
   - **Fix**: Use correct API:

     ```ts
     // v1.0 generation
     const projectId = determinism.get('project-id', () => randomUUID()); // "abc-123"

     // v2.0 update with same deterministic states
     const projectId = determinism.get('project-id', () => randomUUID()); // "abc-123" - same!
     ```

4. **Misleading Terminology - "Pin System"**

   - **Problem**: Uses non-standard term "pin system" instead of "deterministic states"
   - **Location**: Lines 165, 225
   - **Fix**: Replace "pin system" with "deterministic states" to match actual codebase terminology

5. **Incorrect Terminology - "Base" Directory**
   - **Problem**: References "base/" directory for storing original files, but actual implementation stores state in YAML
   - **Location**: Lines 43-49, 53-57
   - **Fix**: The "base" version is reconstructed from stored answers and deterministic states during the update process, not stored as a file copy. Update the explanation to reflect this.

### Other Problems

1. **Missing CLI Tool Name Explanation**

   - **Problem**: Documentation uses `cyanprint update` but actual CLI is invoked via `pls` wrapper
   - **Recommendation**: Either explain that `pls` is the CLI wrapper for cyanprint, or use consistent command naming throughout

2. **Incomplete Update Flow Description**

   - **Problem**: The documented update process mentions "Read base - Load original generated files" but actual implementation regenerates the base from stored state
   - **Recommendation**: Clarify that the base version is regenerated using stored answers and deterministic states, not loaded from a file copy

3. **Missing Related Documentation Links**

   - **Problem**: The "Related" section links to determinism and client-state docs that may use different terminology
   - **Recommendation**: Ensure linked documentation uses consistent terminology (deterministic states vs pin system)

4. **Outdated Best Practice for Users**
   - **Problem**: "Keep base files - Don't delete `.cyan/`" references non-existent directory
   - **Recommendation**: Update to "Keep state file - Don't delete `.cyan_state.yaml`"

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 6     |
| Documentation Issues     | 5     |
| Other Problems           | 4     |

---

### developer/templates/explanation/container-pathsx

# File: content/docs/developer/templates/explanation/container-paths.mdx

> Documentation explaining container path conventions for templates running in Docker containers, including directory structure, path variables, blob Dockerfile configuration, and output path mapping.

### Source Code Inaccuracies

1. **Container Structure - Incorrect Template Directory Name**

   - Documented: `/templates/` - "Template source files (from blob)"
   - Actual: Template files are stored in a `template/` directory (singular), not `templates/` (plural)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:43` uses `root: 'template'` (singular). The actual template directory is at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/template/`

2. **Container Structure - Incorrect Cyan Directory Location**

   - Documented: `/cyan/` directory with `index.ts` at container root
   - Actual: The blob.Dockerfile does NOT place cyan/ at the container root. Instead, files are archived as a tar.gz and extracted at runtime
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile:8-14` shows the actual process: files are tarred into `/cyanprint/artifact/cyan.tar.gz` and extracted to `/workspace/cyanprint` at runtime

3. **Blob Dockerfile Example - Uses Non-Existent Pattern**

   - Documented: `COPY cyan/templates/ /templates/` pattern
   - Actual: The actual blob.Dockerfile uses a multi-stage build that creates a tar.gz archive, not a direct COPY to `/templates/`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile:1-14` shows the actual pattern:
     ```dockerfile
     FROM alpine:3.21 as base
     RUN apk add tar
     FROM base as build
     WORKDIR /src
     COPY . .
     RUN rm -rf cyan && mkdir -p /cyanprint/artifact && tar -czvf /cyanprint/artifact/cyan.tar.gz /src/
     FROM base
     LABEL cyanprint.dev=true
     COPY --from=build /cyanprint/artifact/cyan.tar.gz  /cyanprint/artifact/cyan.tar.gz
     WORKDIR /workspace
     CMD [ "tar",  "-xzf",  "/cyanprint/artifact/cyan.tar.gz", "-C", "/workspace/cyanprint", "--strip-components=1" ]
     ```

4. **File Group root Property - Incorrect Example Path**

   - Documented: `root: 'templates'` or `root: '/templates'`
   - Actual: Templates use `root: 'template'` (singular), and this is relative to the extracted archive path `/workspace/cyanprint`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:43` shows `root: 'template'`

5. **Output Path Mapping - Unverified Claim**

   - Documented: "Inside the container, this maps to `/workspace/output`"
   - Actual: No evidence found in source code to support this mapping. The actual extraction goes to `/workspace/cyanprint`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile:14` shows extraction to `/workspace/cyanprint`

6. **Path Summary Table - Incorrect Paths**

   - Documented: `/templates` as "Template source" and `/workspace/output` as "Generated files"
   - Actual: Template files are in `template/` (relative to `/workspace/cyanprint`), and output path mapping is not `/workspace/output`
   - Evidence: Based on all findings above

7. **Multiple Source Directories Example - Non-Existent Pattern**
   - Documented: Multiple COPY commands for `/templates/`, `/static/`, `/configs/`
   - Actual: The actual blob.Dockerfile pattern doesn't use separate COPY commands for different directories
   - Evidence: See blob.Dockerfile content in finding #3

### Documentation Issues

1. **Misleading Container Structure Diagram**

   - Problem: The container structure diagram shows a simplified view that doesn't match the actual multi-stage build pattern
   - Location: Lines 16-23 (Container Structure diagram)
   - Fix: Update diagram to reflect actual archive-based file distribution or clearly indicate this is a conceptual view

2. **Example Code Doesn't Match Real Templates**

   - Problem: All code examples use `root: 'templates'` or `/templates` but actual templates use `root: 'template'`
   - Location: Throughout the document (lines 41-68, 89-104, 120-166)
   - Fix: Update all examples to use `root: 'template'` to match actual implementation

3. **Missing Documentation of Actual Archive Pattern**

   - Problem: Documentation doesn't explain the tar.gz archive pattern used in actual blob.Dockerfiles
   - Location: Blob Image Paths section (lines 50-69)
   - Fix: Document the actual multi-stage build pattern with tar.gz archives

4. **GlobType Copy Not Explained**

   - Problem: Examples show `type: GlobType.Copy` but there's no explanation of when/why to use Copy vs Template
   - Location: Lines 139, Common Patterns section
   - Fix: Add explanation of the difference between GlobType.Template and GlobType.Copy

5. **Ambiguous Relative Path Resolution**
   - Problem: Documentation says "Relative paths are resolved from `/workspace`" but doesn't clarify that files are actually extracted to `/workspace/cyanprint`
   - Location: Lines 96-104
   - Fix: Clarify the actual base path for relative path resolution

### Other Problems

1. **No Source Code Reference for cyanprint CLI**

   - Problem: The CLI command `cyanprint create` is documented but there's no reference to where this is defined in source
   - Recommendation: Consider linking to or referencing the actual CLI implementation at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/`

2. **Documentation Doesn't Match Current Implementation**

   - Problem: The documentation appears to describe an idealized or older architecture that doesn't match the current blob.Dockerfile implementation
   - Recommendation: Review and update documentation to reflect current implementation patterns, or clarify if the documentation describes a different template style

3. **Missing Information on /workspace/cyanprint Directory**
   - Problem: The actual extraction path `/workspace/cyanprint` is not mentioned anywhere in the documentation
   - Recommendation: Add documentation about the `/workspace/cyanprint` directory and its role in the container filesystem

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 7     |
| Documentation Issues     | 5     |
| Other Problems           | 3     |

---

### developer/templates/reference/sdk/cyan-configx

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
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 6     |
| 🟠       | 3     |

---

### developer/plugins/reference/dockerfilex

<!-- source: content/docs/developer/plugins/reference/dockerfile.mdx -->

# 📄 File: content/docs/developer/plugins/reference/dockerfile.mdx

> Documentation for configuring Dockerfiles for CyanPrint plugins. Covers base images, required labels, entry points, optimization techniques, environment variables, and port configuration.

### 🔴 Source Code Inaccuracies

1. **Bun version in examples doesn't match actual plugin implementations**

   - **Documented**: `FROM oven/bun:1.1.31` (used in all examples)
   - **Actual**: Plugin Dockerfiles in iridium e2e tests use `FROM oven/bun:1.0.11`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/Dockerfile:1` both use `oven/bun:1.0.11`

2. **COPY command syntax differs from actual implementations**

   - **Documented**: `COPY package.json bun.lockb* ./` (with wildcard for optional lockb)
   - **Actual**: `COPY package.json .` followed by `COPY bun.lockb .` (separate commands without wildcard)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:4-5`

3. **Optimization flags not used in actual implementations**

   - **Documented**: Examples show `bun install --frozen-lockfile` and `bun install --production`
   - **Actual**: All plugin Dockerfiles in iridium e2e tests use plain `bun install` without any flags
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:6` - `RUN bun install`

4. **Multi-stage build not used in actual implementations**

   - **Documented**: Shows multi-stage builds with builder pattern and `oven/bun:1.1.31-slim` runtime stage
   - **Actual**: No plugin Dockerfiles in the iridium e2e tests use multi-stage builds
   - **Evidence**: All Dockerfiles in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin*` use single-stage builds

5. **Alpine/slim variants not used in actual plugin implementations**

   - **Documented**: Shows `oven/bun:1.1.31-alpine` and `oven/bun:1.1.31-slim` variants
   - **Actual**: Plugin Dockerfiles use the default Debian-based image without variant suffix
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:1` - `FROM oven/bun:1.0.11` (no variant suffix)

6. **Environment variable PLUGIN_TIMEOUT not found in source code**
   - **Documented**: `ENV PLUGIN_TIMEOUT=300` shown as example
   - **Actual**: No source code references to `PLUGIN_TIMEOUT` environment variable exist in helium SDK or boron executor
   - **Evidence**: Grep search of `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium` found no matches for `PLUGIN_TIMEOUT`

### 🟡 Documentation Issues

1. **Label description could be more precise about filtering mechanism**

   - **Problem**: Documentation says label "identifies the image as a CyanPrint component" but doesn't mention it's specifically used for Docker image filtering
   - **Location**: "CyanPrint Label" section
   - **Fix**: Add context that boron uses `f.Add("label", "cyanprint.dev=true")` to filter/list CyanPrint images via Docker API
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:46`

2. **Port section could include specific endpoint information**

   - **Problem**: Documentation mentions port 5552 and EXPOSE directive but doesn't mention the specific API endpoint `/api/plug`
   - **Location**: "Port Configuration" section
   - **Fix**: Document that plugins serve the POST `/api/plug` endpoint on port 5552
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:68` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:223`

3. **Example .dockerignore includes bun.lockb which contradicts Dockerfile**

   - **Problem**: .dockerignore example lists `bun.lockb` to be excluded, but the Dockerfile examples expect to copy `bun.lockb*`
   - **Location**: ".dockerignore" section, line 154
   - **Fix**: Remove `bun.lockb` from .dockerignore example or clarify when it should/shouldn't be excluded

4. **Additional tools example uses apt-get but doesn't clarify image compatibility**

   - **Problem**: The "With Additional Tools" example shows `apt-get` but doesn't clarify this only works with Debian-based images, not Alpine
   - **Location**: "With Additional Tools" section
   - **Fix**: Add note that apt-get requires Debian-based images; for Alpine use `apk add`

5. **.dockerignore example is more comprehensive than actual implementations**
   - **Problem**: Documented .dockerignore has 18+ entries including node_modules, .git, docs, IDE files, OS files, env files, test files
   - **Actual**: .dockerignore files in iridium only contain 3 entries: `node_modules`, `.idea`, `.vscode`
   - **Location**: ".dockerignore" section
   - **Fix**: Either simplify the example or clarify it's a recommended comprehensive template
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/.dockerignore:1-3`

### 🟠 Other Problems

1. **Version inconsistency across documentation and implementations**

   - **Problem**: Documentation uses Bun `1.1.31`, actual e2e plugins use `1.0.11`, templates use `1.1.31`
   - **Recommendation**: Consider documenting the recommended Bun version or explaining version selection criteria

2. **Size optimization table lacks empirical evidence**

   - **Problem**: Size optimization savings percentages (e.g., "~100MB", "~20%", "~30%") are not backed by actual measurements
   - **Recommendation**: Add actual measured savings or mark as approximate estimates based on testing

3. **Multi-stage build CMD inconsistency**
   - **Problem**: In "Multi-stage Build" example, runtime stage CMD uses `index.ts` but the builder compiled to `dist/index.js`. Later the copy is `COPY --from=builder /app /app` which would include source, making the build step redundant
   - **Recommendation**: Either show proper compiled output usage or simplify to direct copy pattern

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/plugins/reference/project-structurex

<!-- source: content/docs/developer/plugins/reference/project-structure.mdx -->

# 📄 File: content/docs/developer/plugins/reference/project-structure.mdx

> Documentation describes the standard directory layout for CyanPrint plugin projects. The document covers required files (index.ts, package.json, Dockerfile) and optional files (.dockerignore, README.md, cyan.yaml). Analysis verified against actual plugin implementations in iridium/e2e/ directory.

### 🔴 Source Code Inaccuracies

1. **Dockerfile Bun version mismatch**

   - Documented: `FROM oven/bun:1.1.31`
   - Actual: Most plugin Dockerfiles use `oven/bun:1.0.11` (plugin1, plugin2, processor1, processor2), while template1/cyan uses `oven/bun:1.1.31`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:1:FROM oven/bun:1.0.11`

2. **Dockerfile COPY command syntax**

   - Documented: `COPY package.json bun.lockb* ./`
   - Actual: All Dockerfiles use separate COPY commands without glob pattern: `COPY package.json .` followed by `COPY bun.lockb .`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:4:COPY package.json .` and line 5: `COPY bun.lockb .`

3. **package.json structure differs**

   - Documented: `"dependencies": { "@atomicloud/cyan-sdk": "^1.0.0" }`
   - Actual: All plugins use `"@atomicloud/cyan-sdk": "latest"` not a pinned version
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/package.json:12:"@atomicloud/cyan-sdk": "latest"`

4. **package.json missing "module" field in documentation**

   - Documented: Shows only "name", "version", "type", "dependencies" fields
   - Actual: All plugins include `"module": "index.ts"` field
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/package.json:3:"module": "index.ts"`

5. **package.json missing devDependencies and peerDependencies**

   - Documented: Does not show devDependencies or peerDependencies
   - Actual: All plugins include `devDependencies: { "bun-types": "latest" }` and `peerDependencies: { "typescript": "^5.0.0" }`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/package.json:5-10`

6. **cyan.yaml structure differs significantly**

   - Documented: Shows `name: org/my-plugin`, `version: 1.0.0`, `description`, `author`
   - Actual: Uses `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme` fields - no `version` or `author` fields
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:1-8`

7. **.dockerignore content differs**
   - Documented: Shows `.git`, `.gitignore`, `*.md`, `.env`, `.env.*`, `.DS_Store`
   - Actual: Only contains `node_modules`, `.idea`, `.vscode`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/.dockerignore:1-3`

### 🟡 Documentation Issues

1. **Plugin vs Template/Processor distinction unclear**

   - Problem: The document is titled "Plugin Project Structure" but shows `StartPluginWithLambda` while actual codebase has three types: `StartPluginWithLambda`, `StartProcessorWithLambda`, and `StartTemplateWithLambda`
   - Location: Throughout the document
   - Fix: Clarify that this is specifically for plugins, and create separate docs for processors and templates

2. **Missing tsconfig.json in project structure**

   - Problem: Directory tree shows `index.ts`, `package.json`, `bun.lockb`, `Dockerfile`, `.dockerignore`, `cyan.yaml`, `README.md` but all actual plugins include `tsconfig.json` and `.gitignore`
   - Location: Lines 10-19 (directory tree)
   - Fix: Add `tsconfig.json` and `.gitignore` to the project structure

3. **PluginOutput type not shown in basic example**
   - Problem: The basic index.ts example doesn't import or use `PluginOutput` type, but actual plugins explicitly type the return: `Promise<PluginOutput>`
   - Location: Lines 27-36 (basic index.ts example)
   - Fix: Either show the type import or explain it's optional

### 🟠 Other Problems

1. **Version pinning inconsistency**

   - Problem: Documentation shows pinned version `^1.0.0` for SDK, but actual implementations use `latest`. This could lead to reproducibility issues.
   - Recommendation: Document best practices for version pinning vs using `latest`

2. **No mention of bun.lockb requirement**

   - Problem: Dockerfile copies `bun.lockb` but documentation doesn't explain the importance of committing this file for reproducible builds
   - Recommendation: Add note about committing bun.lockb for reproducible builds

3. **Missing .gitignore in documentation**

   - Problem: All actual plugins include a `.gitignore` file (typically 2.2k in size) but it's not mentioned in the documentation
   - Recommendation: Add `.gitignore` to the required/optional files section

4. **Dockerfile CMD format inconsistency**
   - Problem: Documentation shows `CMD ["bun", "run", "index.ts"]` with commas, but some actual Dockerfiles have slightly different spacing/formatting
   - Recommendation: Standardize Dockerfile formatting in documentation

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 7     |
| 🟡       | 3     |
| 🟠       | 4     |

---

### developer/processors/how-to/stream-large-filesx

<!-- source: content/docs/developer/processors/how-to/stream-large-files.mdx -->

# 📄 File: content/docs/developer/processors/how-to/stream-large-files.mdx

> This documentation describes a `readAsStream()` API that exists but the `VirtualFileStream` interface documented is completely incorrect. The actual class only exposes raw Node.js streams (`reader`/`writer`) and does NOT have the `relative` property, `read()` method, or `writeFile(content)` method documented. All code examples are non-functional as written.

### 🔴 Source Code Inaccuracies

1. **VirtualFileStream.relative property**

   - Documented: `relative: string` - "Path relative to read directory"
   - Actual: `VirtualFileStream` class has no `relative` property. The class only has `reader: fs.ReadStream` and `writer: fs.WriteStream` properties.
   - Evidence: `helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

2. **VirtualFileStream.read() method**

   - Documented: `read(): AsyncIterable<Buffer>` - "Read file as chunks"
   - Actual: `VirtualFileStream` class has no `read()` method. The `reader` property is a Node.js `fs.ReadStream` that must be used directly.
   - Evidence: `helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

3. **VirtualFileStream.writeFile(content) method**

   - Documented: `writeFile(content): void` - "Write content to output"
   - Actual: `VirtualFileStream` class has no `writeFile(content)` method. The class only has a `writer: fs.WriteStream` property.
   - Evidence: `helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

4. **Input parameter writeDirectory property**

   - Documented: `input.writeDirectory` in return statement
   - Actual: `CyanProcessorInput` (what LambdaProcessorFn receives) has `writeDir`, NOT `writeDirectory`
   - Evidence: `helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` and `helium/sdks/node/src/domain/processor/service.ts:16-24`

5. **All code examples are non-functional**
   - Documented: Multiple code examples using `stream.relative`, `stream.read()`, `stream.writeFile()`
   - Actual: None of these APIs exist on `VirtualFileStream`. Examples would throw runtime errors.
   - Evidence: `helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

### 🟡 Documentation Issues

1. **VirtualFileStream Properties table is incorrect**

   - Problem: Table documents `relative: string` but this property doesn't exist on `VirtualFileStream`
   - Location: Lines 47-51
   - Fix: Document actual properties: `reader: fs.ReadStream` and `writer: fs.WriteStream`

2. **VirtualFileStream Methods table is incorrect**

   - Problem: Table documents non-existent methods `read()` and `writeFile(content)`
   - Location: Lines 53-58
   - Fix: Remove this table or document that users should work with `reader`/`writer` streams directly using Node.js stream APIs

3. **Usage example code is non-functional**

   - Problem: Code uses `stream.relative`, `stream.read()`, `stream.writeFile()` which don't exist
   - Location: Lines 22-45
   - Fix: Rewrite using `stream.reader` and `stream.writer` with Node.js stream APIs

4. **Line-by-Line Processing example is non-functional**

   - Problem: Same issue - uses non-existent APIs
   - Location: Lines 62-86
   - Fix: Rewrite using actual `VirtualFileStream` API

5. **Binary File Processing example is non-functional**

   - Problem: Same issue - uses non-existent APIs
   - Location: Lines 90-111
   - Fix: Rewrite using actual `VirtualFileStream` API

6. **Transform While Streaming example is non-functional**
   - Problem: Same issue - uses non-existent APIs
   - Location: Lines 115-139
   - Fix: Rewrite using actual `VirtualFileStream` API

### 🟠 Other Problems

1. **VirtualFileStream is a thin wrapper without utility methods**

   - Problem: The actual `VirtualFileStream` class is extremely minimal - it just holds two Node.js streams without any helper methods for tracking file paths or content processing
   - Recommendation: Either enhance the `VirtualFileStream` class to add `relative`, `read()`, and `writeFile()` methods as documented, or update documentation to reflect the raw Node.js stream API

2. **Missing relative path tracking**

   - Problem: `VirtualFileStream` doesn't track the relative path of the file being streamed, making it impossible to know which file is being processed
   - Recommendation: Add `relative: string` property to `VirtualFileStream` constructor similar to `VirtualFileReference`

3. **Callout about copy() method lacks context**
   - Problem: The callout recommends using `copy()` for massive files but doesn't explain how to use `fileHelper.copy()` instead of streaming
   - Recommendation: Clarify that `fileHelper.copy()` should be called on the `CyanFileHelper` instance

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 6     |
| 🟠       | 3     |

---

### developer/processors/reference/sdk/input-outputx

<!-- source: content/docs/developer/processors/reference/sdk/input-output.mdx -->

# 📄 File: content/docs/developer/processors/reference/sdk/input-output.mdx

> Documentation for Processor Input/Output types, but contains significant inaccuracies: the documented `ProcessorInput` interface is not the type actually passed to lambda functions, and `CyanGlob` is missing the required `type` property.

### 🔴 Source Code Inaccuracies

1. **ProcessorInput property names are incorrect**

   - Documented: `readDirectory`, `writeDirectory`
   - Actual: `readDir`, `writeDir` (on `CyanProcessorInput`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16`

   ```ts
   interface CyanProcessorInput {
     readDir: string;
     writeDir: string;
     globs: CyanGlob[];
     config: unknown;
   }
   ```

2. **ProcessorInput is not the type passed to lambda functions**

   - Documented: `ProcessorInput` is the input type
   - Actual: `CyanProcessorInput` is the type passed to `LambdaProcessorFn`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/processor/lambda.ts:6`

   ```ts
   type LambdaProcessorFn = (i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>;
   ```

3. **ProcessorInput is not exported from SDK**

   - Documented: Implied that `ProcessorInput` is the public API
   - Actual: SDK exports `CyanProcessorInput`, not `ProcessorInput`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193-194` shows exports include `CyanProcessorInput` but not `ProcessorInput`

4. **CyanGlob.root is optional, not required**

   - Documented: `root` marked as Required (Yes)
   - Actual: `root?: string | null` (optional)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11`

   ```ts
   interface CyanGlob {
     root?: string | null; // optional
     glob: string;
     exclude: string[];
     type: GlobType;
   }
   ```

5. **CyanGlob.exclude is required, not optional**

   - Documented: `exclude?: string[]` (Required: No)
   - Actual: `exclude: string[]` (required)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:9`

6. **CyanGlob missing required `type` property**

   - Documented: Only `root`, `glob`, `exclude?`
   - Actual: Also includes required `type: GlobType`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:10`

7. **Usage examples use wrong property names**
   - Documented: `input.readDirectory`, `input.writeDirectory`
   - Actual: Should be `input.readDir`, `input.writeDir`
   - Evidence: All code examples in lines 43-53, 77-84, 161-172, 211-244 reference incorrect property names

### 🟡 Documentation Issues

1. **Missing GlobType enum documentation**

   - Problem: The `CyanGlob.type` property requires a `GlobType` enum value (Template=0, Copy=1) but this is not documented
   - Location: CyanGlob section (lines 88-143)
   - Fix: Add documentation for the `type` property and `GlobType` enum

2. **Interface name inconsistency**

   - Problem: Documentation refers to `ProcessorInput` but the actual exported type users receive is `CyanProcessorInput`
   - Location: Throughout the document (title, definitions, examples)
   - Fix: Update to use `CyanProcessorInput` or clarify the distinction

3. **CyanGlob examples missing required properties**

   - Problem: All CyanGlob examples omit the required `type` property and show `exclude` as optional when it's required
   - Location: Lines 112-131
   - Fix: Add `type: GlobType.Template` to examples and include `exclude: []` when no exclusions needed

4. **Full Example will not compile**

   - Problem: The full example code uses `input.readDirectory` and `input.writeDirectory` which don't exist on `CyanProcessorInput`
   - Location: Lines 199-245
   - Fix: Change to `input.readDir` and `input.writeDir`

5. **Typical Values table uses wrong property names**
   - Problem: Table shows `readDirectory` and `writeDirectory` as property names
   - Location: Lines 36-40
   - Fix: Update to `readDir` and `writeDir`

### 🟠 Other Problems

1. **Internal vs Public API confusion**

   - Problem: The `ProcessorInput` type exists internally (`/helium/sdks/node/src/domain/processor/input.ts`) with `readDirectory`/`writeDirectory`, but is not exported. The public API uses `CyanProcessorInput` with `readDir`/`writeDir`.
   - Recommendation: Document only the public API types, or clearly mark internal types

2. **SDK package name should be verified**
   - Problem: Documentation shows `import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk'` - this should be verified against the actual published package name
   - Recommendation: Confirm the npm package name matches what's published

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 7     |
| 🟡       | 5     |
| 🟠       | 2     |

---

### developer/templates/explanation/cyan-objectx

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
| -------- | ----- |
| 🔴       | 8     |
| 🟡       | 4     |
| 🟠       | 2     |

---

### developer/templates/explanation/determinismx

<!-- source: content/docs/developer/templates/explanation/determinism.mdx -->

# 📄 File: content/docs/developer/templates/explanation/determinism.mdx

> Documentation explaining determinism in CyanPrint templates. Contains significant inaccuracies regarding the IDeterminism interface methods and the state file format.

### 🔴 Source Code Inaccuracies

1. **IDefine Interface Methods**

   - **Documented**: `IDefine` interface with methods `d.uuid()`, `d.timestamp()`, `d.seq()`
   - **Actual**: The interface is `IDeterminism` with only a single method `get(key: string, origin: () => string): string`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`:
     ```typescript
     interface IDeterminism {
       get(key: string, origin: () => string): string;
     }
     ```

2. **Non-existent Methods `uuid()`, `timestamp()`, `seq()`**

   - **Documented**: Methods `d.uuid()`, `d.timestamp()`, `d.seq()` on the `d` parameter
   - **Actual**: None of these methods exist in the actual `IDeterminism` interface. The only method is `get(key, origin)`.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/deterministic.py:5-8`:
     ```python
     class IDeterminism(ABC):
         @abstractmethod
         def get(self, key: str, origin: Callable[[], str]) -> str:
             pass
     ```

3. **Wrong Interface Name**

   - **Documented**: Interface referred to as `IDefine` (line 59, 84)
   - **Actual**: The interface is named `IDeterminism`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:20` exports `IDeterminism`

4. **Wrong State File Path and Format**

   - **Documented**: `.cyan/generation.json` with structure containing `"pin": "abc123def456"`
   - **Actual**: State is stored in `.cyan_state.yaml` (YAML format, not JSON) and contains `deterministic_states: {}` not a `pin` field
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/features/04-state-persistence.md:75-89` shows the actual format:
     ```yaml
     templates:
       username/template-name:
         active: true
         history:
           - version: 1
             time: '2024-01-15T10:30:00Z'
             answers:
               project-name: 'my-project'
             deterministic_states:
               timestamp: '2024-01-15T10:30:00Z'
     ```

5. **Pin Concept Does Not Exist**

   - **Documented**: A "pin" seeds deterministic value generation, stored in `.cyan/generation.json`
   - **Actual**: There is no "pin" concept in the source code. Determinism is achieved through `deterministic_states` which stores key-value pairs
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/concepts/04-deterministic-states.md:17-30` shows deterministic states are stored as key-value pairs, not a single pin

6. **Usage Example Does Not Match Actual Implementation**
   - **Documented**: Example showing `d.uuid()`, `d.timestamp()`, `d.seq()` usage
   - **Actual**: The actual usage is `d.get('key', () => generateValue())`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:137`:
     ```typescript
     const t = d.get('time', () => '7');
     ```
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/docs/developer/concepts/03-determinism.md:27`:
     ```typescript
     const projectId = determinism.get('project-id', () => randomUUID());
     ```

### 🟡 Documentation Issues

1. **Inconsistent Parameter Naming**

   - **Problem**: Documentation uses `IDefine` as the interface name, but the actual interface is `IDeterminism`
   - **Location**: Lines 59, 84, and throughout the document
   - **Fix**: Replace `IDefine` with `IDeterminism` everywhere

2. **Incorrect Code Examples**

   - **Problem**: All code examples show non-existent methods (`d.uuid()`, `d.timestamp()`, `d.seq()`)
   - **Location**: Lines 62-75, 83-86, 93-96, 101-106, 134-148
   - **Fix**: Rewrite examples to use the correct `d.get(key, origin)` pattern:
     ```typescript
     const projectId = d.get('project-id', () => crypto.randomUUID());
     const timestamp = d.get('timestamp', () => Date.now().toString());
     ```

3. **Misleading Pin System Description**

   - **Problem**: Documentation describes a "pin" system with a unique identifier, but the actual implementation uses `deterministic_states` dictionary
   - **Location**: Lines 44-55 (Pin System section)
   - **Fix**: Describe the actual deterministic states mechanism - a key-value cache that stores generated values

4. **Misleading Callout Warning**

   - **Problem**: Callout at line 108 warns against using `Date.now()`, `Math.random()`, `crypto.randomUUID()` but the actual interface requires providing an origin function that can use these
   - **Location**: Lines 108-110
   - **Fix**: Clarify that these functions should be wrapped in `d.get()`:
     ```typescript
     // Correct usage - wrap non-deterministic calls in d.get()
     const id = d.get('project-id', () => crypto.randomUUID());
     ```

5. **Incorrect Pin Lifecycle Diagram**
   - **Problem**: The Mermaid diagram at lines 114-122 references a "Pin" concept that doesn't exist in the implementation
   - **Location**: Lines 114-122
   - **Fix**: Update diagram to reflect actual deterministic_states flow

### 🟠 Other Problems

1. **Concept Mismatch with Actual Implementation**

   - **Problem**: The documentation describes a high-level convenience API (`uuid()`, `timestamp()`, `seq()`) that doesn't exist. The actual API is a lower-level caching mechanism via `get(key, origin)`.
   - **Recommendation**: Either:
     a) Update documentation to reflect the actual `get(key, origin)` API, or
     b) Implement the convenience methods described in the documentation as wrappers around `get()`

2. **SDK Reference Types Mismatch**

   - **Problem**: The `types.mdx` file documents an `IDefine` interface with `uuid()`, `timestamp()`, `seq()` methods that don't exist in the actual SDK
   - **Recommendation**: Update the types documentation to match the actual `IDeterminism` interface with its single `get()` method

3. **Missing Documentation of Actual Usage Pattern**
   - **Problem**: The documentation doesn't explain the actual `d.get(key, origin)` pattern used by the SDK
   - **Recommendation**: Add examples showing:
     - How to generate deterministic UUIDs: `d.get('project-id', () => randomUUID())`
     - How to cache timestamps: `d.get('timestamp', () => Date.now().toString())`
     - How the caching mechanism works with the key-value storage

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/templates/how-to/ask-checkboxx

<!-- source: content/docs/developer/templates/how-to/ask-checkbox.mdx -->

# File: content/docs/developer/templates/how-to/ask-checkbox.mdx

> How-to guide for using checkbox questions to collect multi-select input from users. Documents shorthand and object forms with validation and default value patterns.

### Source Code Inaccuracies

1. **checkbox() Object Form - default Property**

   - Documented: `default: ['ESLint']` (line 31)
   - Actual: The `CheckboxQ` interface does NOT have a `default` property. The interface only contains `type`, `id`, `message`, `desc`, `validate`, and `options`.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:11-19` shows `CheckboxQ` interface without `default` field

2. **checkbox() Object Form - validate Property Type**

   - Documented: `validate: (selected) => { ... }` (lines 32-35, 99-104)
   - Actual: The `CheckboxQ` interface defines `validate?: null` - meaning validation is NOT supported for checkbox questions. The type is explicitly `null`, not a function.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:16`

3. **With Defaults Example - default Property**

   - Documented: `default: ['ESLint', 'Prettier']` (line 117)
   - Actual: The `CheckboxQ` interface does NOT have a `default` property.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:11-19`

4. **With Validation Example - validate Property**

   - Documented: `validate: (selected) => { ... }` (lines 99-104)
   - Actual: The `CheckboxQ` interface does NOT support validation - `validate?: null`.
   - Evidence: `helium/sdks/node/src/domain/core/question.ts:16`

5. **Shorthand Form Parameter Name - 'Description' vs 'help'**
   - Documented: Fourth parameter labeled as "Description" in comment (line 17)
   - Actual: The parameter is named `help` in the interface, not `desc` or `description`
   - Evidence: `helium/sdks/node/src/domain/core/inquirer.ts:6` shows `help?: string | null` as the fourth parameter

### Documentation Issues

1. **Parameter Naming - 'Key' vs 'id'**

   - Problem: Line 16 comment says `// Key` but the actual property name is `id`. This inconsistency could confuse users.
   - Location: Line 16
   - Fix: Change comment to `// id` or add note that the key parameter is named `id` in the API

2. **Code Examples Use Unsupported Features**

   - Problem: Multiple code examples (Object Form, With Validation, With Defaults) use `default` and `validate` properties that don't exist on CheckboxQ. Users will encounter TypeScript errors.
   - Location: Lines 24-37, 92-106, 110-119
   - Fix: Remove examples using `default` and `validate`, or clearly mark them as aspirational/planned features

3. **Missing Import Statement**

   - Problem: Code examples use `QuestionType` and `GlobType` without showing the import statement. Users need to know to import from `@atomicloud/cyan-sdk`.
   - Location: All code examples
   - Fix: Add import statement example: `import { StartTemplateWithLambda, GlobType, QuestionType } from '@atomicloud/cyan-sdk';`

4. **Validation Pattern Section Misleading**

   - Problem: The entire "With Validation" section (lines 91-106) documents a feature that is NOT supported by the SDK. The validate property on CheckboxQ is typed as `null`.
   - Location: Lines 91-106
   - Fix: Remove the section or replace with a note that validation is not available for checkbox questions

5. **With Defaults Section Misleading**

   - Problem: The "With Defaults" section (lines 108-119) documents a feature that is NOT supported by the SDK. CheckboxQ has no `default` property.
   - Location: Lines 108-119
   - Fix: Remove the section or note that defaults are not available for checkbox questions

6. **Return Type Comment Accurate**
   - The return type `// Returns: string[]` (line 19) is correct per the API.
   - Evidence: `helium/sdks/node/src/domain/core/inquirer.ts:6`

### Other Problems

1. **Conditional Files Example - GlobType.Copy vs Template**

   - Problem: The "Conditional Files Based on Selection" example (lines 75-85) uses `GlobType.Copy` for eslint/jest templates without explaining why Copy vs Template is chosen. New users may not understand the distinction.
   - Recommendation: Add a brief comment explaining when to use `GlobType.Template` (processed templates with variable substitution) vs `GlobType.Copy` (static files copied as-is)

2. **Related Link Verification**

   - Problem: The links to `/developer/templates/reference/sdk/inquirer`, `/developer/templates/how-to/ask-confirm`, and `/developer/templates/how-to/validate-input` should be verified to ensure they exist and are correctly formatted for the Fumadocs routing.
   - Recommendation: Verify all related links resolve correctly

3. **Template Logic Example Context Missing**
   - Problem: The "In Template Logic" example (lines 43-63) shows `config: { vars: { ... } }` structure but doesn't show the complete template context. New users may not understand where this code belongs.
   - Recommendation: Either show the complete template return structure or reference the full example tutorial

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 5     |
| Documentation Issues     | 6     |
| Other Problems           | 3     |

---

### developer/templates/how-to/pin-determinismx

<!-- source: content/docs/developer/templates/how-to/pin-determinism.mdx -->

# File: content/docs/developer/templates/how-to/pin-determinism.mdx

> Documentation for pinning determinism to ensure reproducible template generation. The documented API methods (`d.uuid()`, `d.timestamp()`, `d.seq()`) do not exist in the actual SDK - the `IDeterminism` interface only provides a `get(key, origin)` method.

### Source Code Inaccuracies

1. **`d.uuid()` method does not exist**

   - Documented: `const id = d.uuid();  // "550e8400-e29b-41d4-a716-446655440000"` (lines 16, 49, 61)
   - Actual: The `IDeterminism` interface only has a `get(key: string, origin: () => string): string` method. UUID generation must be done via `d.get('some-key', () => randomUUID())`.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`:
     ```typescript
     interface IDeterminism {
       get(key: string, origin: () => string): string;
     }
     ```

2. **`d.timestamp()` method does not exist**

   - Documented: `const timestamp = d.timestamp();  // Same timestamp every time` (lines 50, 69)
   - Actual: Must use `d.get('timestamp-key', () => Date.now().toString())` instead.
   - Evidence: Same as above - `IDeterminism` interface only has `get()` method.

3. **`d.seq()` method does not exist**

   - Documented: `const userId1 = d.seq('users');  // 1` and `const userId2 = d.seq('users');  // 2` (lines 76-78, 103-104)
   - Actual: There is no `seq()` method on `IDeterminism`. Sequential IDs would need to be implemented differently.
   - Evidence: Same as above - `IDeterminism` interface only has `get()` method.

4. **State File Path is Incorrect**

   - Documented: `.cyan/generation.json` (lines 32-33)
   - Actual: `.cyan_state.yaml`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/update/orchestrator.rs:39`:
     ```rust
     let state_file_path = target_dir.join(".cyan_state.yaml");
     ```

5. **State File Format is Incorrect**

   - Documented: JSON format with `pin`, `template`, `answers` fields
   - Actual: YAML format with `templates` hashmap containing history entries with `deterministic_states`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:6-24`:
     ```rust
     pub struct TemplateHistoryEntry {
         pub version: i64,
         pub time: DateTime<Utc>,
         pub answers: HashMap<String, Answer>,
         pub deterministic_states: HashMap<String, String>,
     }
     ```

6. **Interface Name Inconsistency**

   - Documented: Uses both `IDefine` (line 44: "The `d` (IDefine) interface") and `d` as the determinism parameter
   - Actual: The interface is named `IDeterminism`, not `IDefine`
   - Evidence: All SDK sources show the interface is `IDeterminism`:
     - Node SDK: `import type { IDeterminism } from './domain/core/deterministic.js'`
     - Python SDK: `class IDeterminism(ABC)`
     - .NET SDK: `public interface IDeterminism`

7. **Actual Usage Pattern Differs from Documentation**
   - Documented: Direct method calls like `d.uuid()`, `d.timestamp()`, `d.seq()`
   - Actual: The SDK uses `d.get(key, () => defaultValue)` pattern
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:137`:
     ```typescript
     const t = d.get('time', () => '7');
     ```

### Documentation Issues

1. **Entire "Deterministic Methods" section is invalid**

   - Problem: Lines 56-108 describe methods that don't exist in the SDK
   - Location: Lines 56-108
   - Fix: Replace all examples with the correct `d.get(key, origin)` pattern:

     ```typescript
     // UUID generation
     import { randomUUID } from 'node:crypto';
     const projectId = d.get('project-id', () => randomUUID());

     // Timestamp
     const createdAt = d.get('created-at', () => Date.now().toString());

     // Sequential IDs (not directly supported, would need custom implementation)
     ```

2. **Best Practices section uses non-existent methods**

   - Problem: The "Always Use IDefine for IDs" section (lines 83-97) shows `d.uuid()` and `d.timestamp()` which don't exist
   - Location: Lines 83-97
   - Fix: Update to show correct usage:

     ```typescript
     // Bad - breaks determinism
     const id = crypto.randomUUID();
     const now = Date.now();

     // Good - deterministic with caching
     const id = d.get('project-id', () => crypto.randomUUID());
     const now = d.get('timestamp', () => Date.now().toString());
     ```

3. **Namespace Sequences section is entirely invalid**

   - Problem: The entire section on "Namespace Sequences" (lines 99-108) relies on the non-existent `seq()` method
   - Location: Lines 99-108
   - Fix: Remove this section or explain that sequential IDs need custom implementation using `get()` with incrementing keys

4. **Related documentation also contains same inaccuracies**
   - Problem: The linked explanation document `/developer/templates/explanation/determinism` also describes the same non-existent methods (`d.uuid()`, `d.timestamp()`, `d.seq()`), creating consistency in error
   - Location: Cross-reference issue
   - Fix: Both documents need to be updated together to reflect the actual `IDeterminism` interface

### Other Problems

1. **No working example in actual codebase**

   - Problem: The iridium e2e templates don't use the `d` (determinism) parameter at all in practice - they just pass it unused. There's no real-world example showing the correct `d.get()` usage pattern
   - Recommendation: Add a working example showing the correct usage pattern, similar to what's in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:137`

2. **Documentation claims vs SDK reality mismatch**

   - Problem: The helium SDK documentation at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/docs/developer/concepts/03-determinism.md` correctly documents the `get(key, origin)` pattern, but the silicon documentation creates a fictional convenience API
   - Recommendation: Align silicon documentation with helium SDK documentation to use the actual `get()` method pattern

3. **Inconsistent State File Location Across Docs**
   - Problem: Multiple documentation files reference `.cyan/generation.json` but actual implementation uses `.cyan_state.yaml`
   - Recommendation: Audit all documentation for state file references and update consistently

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 7     |
| Documentation Issues     | 4     |
| Other Problems           | 3     |

---

### developer/templates/tutorials/full-examplex

<!-- source: content/docs/developer/templates/tutorials/full-example.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/full-example.mdx

> A tutorial demonstrating all major features of CyanPrint templates in a realistic project scaffold. This review was performed against the SDK reference documentation in this repository since the actual source code repositories (argon, boron, helium, iridium, zinc) are external.

### 🔴 Source Code Inaccuracies

(for each: Documented | Actual | file:line evidence)

1. **`d.uuid()` method not documented in SDK reference**

   - Documented: `const projectId = d.uuid();` (line 106)
   - Actual: The `IDefine` interface in types.mdx shows only `uuid()`, `timestamp()`, and `seq()` methods, but the helium.mdx shows a different SDK (`@cyanprint/sdk`) with different API patterns. The correct SDK is `@atomicloud/cyan-sdk`.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/types.mdx:154-160`

2. **helium.mdx references wrong SDK package name**

   - Documented: helium.mdx shows `@cyanprint/sdk` (line 38, 39) and `import { defineTemplate, input, output } from '@cyanprint/sdk';` (line 47)
   - Actual: The correct SDK package is `@atomicloud/cyan-sdk` as shown in full-example.mdx and all SDK reference docs
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/index.mdx:8`

3. **helium.mdx shows incompatible API patterns**

   - Documented: helium.mdx shows `input.string()`, `input.boolean()`, `input.number()`, `input.select()`, `input.array()`, `input.object()` pattern (lines 79-101)
   - Actual: The actual SDK uses `i.text()`, `i.confirm()`, `i.select()`, `i.checkbox()` methods on IInquirer interface
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/inquirer.mdx:25-54`

4. **helium.mdx shows different template structure**

   - Documented: `defineTemplate({ name, version, inputs, async generate({ inputs, fs }) {...} })` pattern (lines 48-75)
   - Actual: The actual SDK uses `StartTemplateWithLambda(async (i, d) => {...})` pattern
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/index.mdx:47-61`

5. **helium.mdx shows fs.write() instead of template-based generation**

   - Documented: `await fs.write('README.md', '...')` for file generation (lines 64-68)
   - Actual: Templates use file groups with GlobType and variable substitution, not programmatic file writing
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/cyan-config.mdx:79-86`

6. **helium.mdx shows fs.copyTemplateAsset() which doesn't exist in reference**
   - Documented: `await fs.copyTemplateAsset('assets/logo.png', 'logo.png');` (line 185)
   - Actual: This method is not documented in the SDK reference; templates use GlobType.Copy for binary files
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/templates/reference/sdk/globbing.mdx:135-139`

### 🟡 Documentation Issues

(for each: Problem | Location | Fix)

1. **SDK reference shows `d.uuid()` is correct**

   - Problem: Previous findings claimed `d.uuid()` was incorrect, but the types.mdx reference actually documents `uuid(): string;` as a valid method on IDefine
   - Location: Line 106 of full-example.mdx
   - Fix: The `d.uuid()` usage is correct according to the SDK reference. No fix needed.

2. **Object form vs shorthand form confusion**

   - Problem: The full-example uses object form with `type: QuestionType.Text` for text() but shorthand form for other methods. This inconsistency could confuse readers.
   - Location: Lines 50-61 vs 63-102
   - Fix: Either use object form consistently or add a comment explaining when to use each form

3. **Plugin name `cyan/init-git` not documented in reference**

   - Problem: The plugin `cyan/init-git` is used but there's no reference documentation for available plugins
   - Location: Lines 212-219
   - Fix: Either add a plugins reference page or clarify that this is a placeholder/conceptual example

4. **Missing link to default processor explanation**

   - Problem: References `cyan/default` processor but links to non-existent explanation page
   - Location: Line 184 and cyan-config.mdx line 221
   - Fix: Create the referenced explanation page or update the link

5. **helium.mdx contradicts full-example.mdx API usage**
   - Problem: helium.mdx (source path for this review) shows a completely different API pattern than the main template tutorials
   - Location: helium.mdx lines 46-75
   - Fix: Update helium.mdx to use the actual `@atomicloud/cyan-sdk` API patterns

### 🟠 Other Problems

(for each: Problem | Recommendation)

1. **Source paths point to documentation not source code**

   - Problem: The source paths (argon, boron, helium, iridium, zinc) are documentation files (.mdx), not actual SDK source code. This makes verification against "source" impossible.
   - Recommendation: Source verification should be done against actual SDK source repositories, not documentation files

2. **helium.mdx appears to be outdated or for a different product**

   - Problem: The helium.mdx documentation shows `@cyanprint/sdk` with a fundamentally different API (`defineTemplate`, `input.string()`, `fs.write()`) that doesn't match `@atomicloud/cyan-sdk` used in templates
   - Recommendation: Review and update helium.mdx to reflect the actual SDK API, or clearly indicate if it documents a different/legacy SDK

3. **No actual source code in this repository**
   - Problem: This is a documentation-only repository; the actual CyanPrint SDK source code is in external repositories
   - Recommendation: For thorough fact-checking, access to the actual helium SDK repository would be needed

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### user/indexx

<!-- source: content/docs/user/index.mdx -->

# 📄 File: content/docs/user/index.mdx

> This is a minimal index/landing page for user documentation that links to four main sections (Tutorials, How-To Guides, Reference, Explanation). The document itself is accurate as a navigation hub. Factual verification was performed against source code in argon (registry UI), boron (coordinator), helium (prompt service), iridium (CLI), and zinc (registry). However, issues were found in the linked documentation files that the index points to.

### 🔴 Source Code Inaccuracies

1. **Documented**: `cyanprint push template --token <TOKEN> <BLOB_IMG> <BLOB_TAG> <TEMPLATE_IMG> <TEMPLATE_TAG>` (content/docs/user/reference/cli-commands.mdx:72)
   **Actual**: The push command requires `--config` and `--message` flags. Correct signature: `cyanprint push template --token <TOKEN> --config <CONFIG_PATH> --message <MSG> <BLOB_IMG> <BLOB_TAG> <TEMPLATE_IMG> <TEMPLATE_TAG>`. The `--config` flag defaults to "cyan.yaml" and `--message` defaults to "No description" per iridium/cyanprint/src/commands.rs:105-114.
   **Evidence**: iridium/cyanprint/src/commands.rs:100-118

2. **Documented**: `cyanprint push processor --token <TOKEN> <IMAGE> <TAG>` (content/docs/user/reference/cli-commands.mdx:75)
   **Actual**: Same issue - missing `--config` and `--message` flags. Correct: `cyanprint push processor --token <TOKEN> --config <CONFIG_PATH> --message <MSG> <IMAGE> <TAG>`.
   **Evidence**: iridium/cyanprint/src/commands.rs:100-118

3. **Documented**: `cyanprint push plugin --token <TOKEN> <IMAGE> <TAG>` (content/docs/user/reference/cli-commands.mdx:78)
   **Actual**: Same issue - missing `--config` and `--message` flags. Correct: `cyanprint push plugin --token <TOKEN> --config <CONFIG_PATH> --message <MSG> <IMAGE> <TAG>`.
   **Evidence**: iridium/cyanprint/src/commands.rs:100-118

4. **Documented**: Global option `-r, --registry <URL>` with description "Registry endpoint" (content/docs/user/reference/cli-commands.mdx:12)
   **Actual**: The flag value name is `REGISTRY_ENDPOINT` and default value is `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`, not simply "Registry endpoint". Additionally, it can be set via environment variable `CYANPRINT_REGISTRY`.
   **Evidence**: iridium/cyanprint/src/commands.rs:9-16

5. **Documented**: `-c, --coordinator-endpoint` default is "http://coord.cyanprint.dev:9000" for create command (content/docs/user/reference/cli-commands.mdx:35)
   **Actual**: While the default value is correct, the documentation omits the environment variable `CYANPRINT_COORDINATOR` that can also be used to set this value.
   **Evidence**: iridium/cyanprint/src/commands.rs:38-45

6. **Documented**: `cyanprint daemon [VERSION]` description "Start the CyanPrint daemon for local development" (content/docs/user/reference/cli-commands.mdx:52-64)
   **Actual**: The argument name is `COORDINATOR_VERSION` not just `VERSION`. Additionally, the daemon command has a `--registry` option that is not documented, which accepts a registry endpoint URL for the coordinator to use (with environment variable `CYANPRINT_REGISTRY`). The image used is `ghcr.io/atomicloud/sulfone.boron/sulfone-boron:<VERSION>`.
   **Evidence**: iridium/cyanprint/src/commands.rs:74-97, iridium/cyanprint/src/main.rs:240-241

7. **Documented**: Push command subcommands are template, processor, plugin (content/docs/user/reference/cli-commands.mdx:66-79)
   **Actual**: There is an undocumented fourth subcommand `group` for pushing template groups. This is implemented in the CLI: `cyanprint push group --token <TOKEN> --config <CONFIG_PATH> --message <MSG>`.
   **Evidence**: iridium/cyanprint/src/commands.rs:131-132, iridium/cyanprint/src/main.rs:89-109

### 🟡 Documentation Issues

1. **Problem**: The `-V, --version` flag description "Print version" is incomplete.
   **Location**: content/docs/user/reference/cli-commands.mdx:14
   **Fix**: The flag is automatically provided by clap's `#[command(author, version, about)]` directive. Consider noting this outputs both version and author information per the CLI definition.

2. **Problem**: Description for the `create` command options table is inconsistent - only shows the coordinator-endpoint option but the column headers suggest multiple options could be shown.
   **Location**: content/docs/user/reference/cli-commands.mdx:33-35
   **Fix**: The table shows only one option but the column headers suggest multiple. Either add more options or clarify this is the primary option.

3. **Problem**: The `update` command options table is incomplete.
   **Location**: content/docs/user/reference/cli-commands.mdx:46-51
   **Fix**: The `-c, --coordinator-endpoint` option is also available for update (with same default and env var as create). Add this to match the create command structure.

4. **Problem**: The installation description says "6 platforms" but the tabs show "Nix Shell" and "Nix Profile" as separate options.
   **Location**: content/docs/user/how-to/install.mdx:2
   **Fix**: The count is technically correct (Nix Shell, Nix Profile, Brew, Scoop, APT, YUM = 6), but "Nix Shell" and "Nix Profile" are both Nix variants. Consider clarifying that Nix has two installation modes.

### 🟠 Other Problems

1. **Problem**: The registry UI reference claims the registry is at "registry.cyanprint.dev" but the actual API endpoint in the CLI source code is "https://api.zinc.sulfone.raichu.cluster.atomi.cloud".
   **Recommendation**: Clarify the distinction between the user-facing web UI (registry.cyanprint.dev) and the API endpoint used by the CLI. Users may be confused if they try to configure a custom registry endpoint.

2. **Problem**: The 3-way merge documentation is simplified and doesn't mention the `similarity_threshold` parameter used for rename detection in the actual implementation.
   **Recommendation**: While not strictly inaccurate, consider adding a note that the merge uses git-style rename detection with a configurable similarity threshold.

3. **Problem**: The "under a minute" claim in get-started.mdx is marketing language that may not hold true for all users depending on network conditions and template complexity.
   **Recommendation**: Consider softening this claim to "quickly" or similar to avoid potential user frustration if it takes longer.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 7     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### developer/plugins/explanation/execution-order

<!-- source: content/docs/developer/plugins/explanation/execution-order.mdx -->

# 📄 File: content/docs/developer/plugins/explanation/execution-order.mdx

> This document describes the execution order of the CyanPrint pipeline, including processors and plugins phases. Most claims are accurate, but there are some issues with example plugin names that don't exist in the codebase and some oversimplifications about error handling.

### 🔴 Source Code Inaccuracies

1. **Example plugin names are fictional** | Documented: `atomi/git-init`, `atomi/npm-install`, `atomi/husky-setup`, `atomi/npm-build` | Actual: No plugins with these names exist in the source code. The only plugins found in the e2e tests are `ernest/plugin1`, `ernest/plugin2` (iridium/e2e/plugin1/index.ts:1, iridium/e2e/plugin2/index.ts:1)

2. **Example processor name is fictional** | Documented: `cyan/default` as a processor name | Actual: While `cyan/default` is referenced in specs, actual e2e test processors use names like `ernest/processor1`, `ernest/processor2` (iridium/e2e/processor1/index.ts:1)

3. **Error handling during processing is oversimplified** | Documented: "If any processor fails, the pipeline stops. No files are written to output." | Actual: The boron merger.go shows processors execute in parallel (line 102-177) with goroutines and semaphore-based parallelism. If one processor fails, others continue running, but the pipeline does return errors and stops. Files may be partially written to individual processor output directories before the merge phase. (boron/docker_executor/merger.go:102-177)

4. **Plugin error handling is oversimplified** | Documented: "If a plugin fails, the pipeline stops. Partial files may exist." | Actual: Plugins execute sequentially (not in parallel like processors). If a plugin fails, the function returns immediately with the error, stopping subsequent plugins. However, the merged processor output already exists at this point. (boron/docker_executor/merger.go:216-236)

### 🟡 Documentation Issues

1. **Missing IDeterminism parameter** | Location: Phase 1: Template Collection, code example | Fix: The template function signature shows it takes two parameters: `(i: IInquirer, d: IDeterminism)`, not just IInquirer. The documentation should mention IDeterminism or at least show it in the example. (helium/sdks/node/src/api/template/lambda.ts:6)

2. **Code example uses incorrect return structure** | Location: Phase 1 code example lines 32-38 | Fix: The example shows `return { processors: [...], plugins: [...] }` but actual templates return a `Cyan` object where processors have a `files` property (required), not just `name` and `config`. The example should show the `files` property with `CyanGlob` structure. (helium/sdks/node/src/domain/core/cyan.ts:24-27, iridium/e2e/template1/cyan/index.ts:34-59)

3. **ProcessorInput property names differ** | Location: Phase 2 description line 57 | Fix: Documentation says "Processor receives input (files, config, directories)" but the actual `ProcessorInput` interface uses `readDirectory`, `writeDirectory`, `globs`, `config` as property names. The `CyanProcessorInput` passed to processors uses `readDir`, `writeDir`, `globs`, `config`. (helium/sdks/node/src/domain/processor/input.ts:3-8, helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16)

4. **Phase 3 (Writing) is misleading** | Location: Lines 63-67 | Fix: The documentation suggests writing happens after all processors complete. However, looking at the code, each processor writes to its own output directory (`/workspace/area/{uuid}`) during Phase 2, and then the merger combines all outputs. There is no separate "Phase 3: Writing" - the merge operation combines processor outputs into the final directory. (boron/docker_executor/merger.go:296-329)

5. **Missing Merger component** | Location: Entire document | Fix: The documentation omits the Merger component which is a critical part of the pipeline. After processors run in parallel, their outputs are merged by the coordinator/merger before plugins execute. This should be documented as part of the pipeline. (boron/docker_executor/merger.go:238-261, 296-329)

### 🟠 Other Problems

1. **Plugin input/output types not documented** | Recommendation: The documentation should clarify that `PluginInput` contains `directory` and `config`, and `PluginOutput` returns `directory`. This is important for plugin developers to understand the interface contract. (helium/sdks/node/src/domain/plugin/input.ts:1-6, helium/sdks/node/src/domain/plugin/output.ts:1-5)

2. **Processor parallelism not documented** | Recommendation: Document that processors execute in parallel (subject to `ParallelismLimit`), while plugins execute sequentially. This is an important performance consideration for developers. (boron/docker_executor/merger.go:102-177 for processors, 216-236 for sequential plugins)

3. **CyanFileHelper methods not fully documented** | Recommendation: The documentation mentions `CyanFileHelper` but doesn't explain its key methods like `resolveAll()`, `read()`, `get()`, `copy()`, and `readAsStream()`. These are essential for processor development. (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-94)

4. **Plugin receives merged directory, not individual processor outputs** | Recommendation: Clarify that plugins receive the merged output of all processors, not individual processor outputs. This is important for understanding the data flow. (boron/docker_executor/merger.go:323)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 5     |
| 🟠       | 4     |

---

### developer/plugins/explanation/execution-orderx

# File: content/docs/developer/plugins/explanation/execution-order.mdx

> Documentation explaining the CyanPrint pipeline execution order: template collection, processing (processors), writing, post-processing (plugins), and output phases.

### Source Code Inaccuracies

1. **Incorrect type name `CyanConfig`**

   - **Documented**: `Template returns CyanConfig with processors and plugins` (line 30)
   - **Actual**: The type is named `Cyan`, not `CyanConfig`. The source code in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27` defines `interface Cyan { processors: CyanProcessor[]; plugins: CyanPlugin[]; }`. There is no `CyanConfig` type in the SDK.
   - **Evidence**: `helium/sdks/node/src/domain/core/cyan.ts:24-27`

2. **Inaccurate processor execution flow description**

   - **Documented**: Processors execute sequentially where "Output directory becomes input for next processor" (lines 55-61)
   - **Actual**: Processors execute in **parallel**, not sequentially. Each processor reads from the same template volume and writes to a unique work area (`/workspace/area/<uuid>`). The merger system then consolidates all processor outputs.
   - **Evidence**: `boron/docker_executor/merger.go:102-177` shows `execProcessors()` using goroutines and a semaphore for parallel execution. Also documented in `boron/docs/developer/features/03-merger-system.md:16-21`.

3. **Missing Phase 2 "Merge" stage**

   - **Documented**: Pipeline has 5 phases: Template Collection, Processing, Writing, Post-Processing, Output
   - **Actual**: The actual pipeline has a distinct **Merge** phase between Processing and Post-Processing (plugins). The merger container consolidates all processor outputs before plugins run.
   - **Evidence**: `boron/docker_executor/merger.go:296-330` shows the 3-stage pipeline: processors (parallel) -> merge -> plugins (sequential). Also `boron/docs/developer/features/03-merger-system.md:15-21`.

4. **Incorrect Phase 3 "Writing" description**

   - **Documented**: "All transformed files are written to the output directory" as a separate phase (lines 64-67)
   - **Actual**: Writing happens during processor execution (each processor writes to its own directory), and the merge operation handles consolidation. There is no separate "Writing" phase.
   - **Evidence**: `boron/docker_executor/merger.go:146-157` shows processors write to `/workspace/area/<uuid>` during execution, not in a separate phase.

5. **Example plugin names may not exist**

   - **Documented**: `atomi/git-init`, `atomi/npm-install`, `atomi/husky-setup`, `atomi/npm-build` (lines 105-107, 169-176)
   - **Actual**: These plugin names could not be verified in the source paths. The only verified plugin name format is `atomi/formatter` (found in boron docs). These appear to be hypothetical examples.
   - **Evidence**: Search of all source paths found no matches for `git-init`, `npm-install`, `husky-setup`, or `npm-build` except in this documentation file itself.

6. **Error handling behavior incomplete**
   - **Documented**: "If any processor fails, the pipeline stops" and "No files are written to output" (lines 140-142)
   - **Actual**: Processors run in parallel, and errors are collected from all processors before stopping. The pipeline returns all errors from failed processors, not just stopping at the first one.
   - **Evidence**: `boron/docker_executor/merger.go:165-176` collects all errors in a slice and returns them together. Also `boron/docs/developer/features/05-parallel-execution.md:54` states "All goroutine errors are collected and returned together".

### Documentation Issues

1. **Incorrect pipeline diagram**

   - **Problem**: The Mermaid diagram at lines 14-22 shows sequential processor execution (Processor 1 -> Processor 2 -> Processor N)
   - **Location**: Lines 14-22
   - **Fix**: Update diagram to show parallel processor execution with a merge step before plugins

2. **Misleading sequence diagram for processors**

   - **Problem**: The sequence diagram at lines 42-53 shows processors passing files to each other sequentially
   - **Location**: Lines 42-53
   - **Fix**: Redraw to show parallel execution with all processors receiving the same input and producing separate outputs that are merged

3. **Inaccurate "What Runs Where" table**

   - **Problem**: Table suggests file filtering happens in processors (line 186), but the actual filtering is done via glob patterns in the merger/processor coordination
   - **Location**: Lines 179-191
   - **Fix**: Clarify that glob pattern matching is part of the processor input configuration, not a separate filtering operation

4. **Unverified example processor names**
   - **Problem**: `custom/formatter` example (line 102) is not verified to exist
   - **Location**: Line 102
   - **Fix**: Use verified processor names like `atomi/typescript` or clearly mark as hypothetical examples

### Other Problems

1. **Missing reference to actual execution documentation**

   - **Problem**: This documentation duplicates/conflicts with the more accurate `boron/docs/developer/features/03-merger-system.md` documentation
   - **Recommendation**: Consider referencing the boron merger system documentation for implementation details, or ensure consistency between the two

2. **Phase numbering inconsistency**

   - **Problem**: Documentation uses 5 phases but the actual system uses 3 stages (processors, merge, plugins)
   - **Recommendation**: Align phase descriptions with the actual 3-stage pipeline or clarify that this is a conceptual view vs implementation view

3. **Missing information about processor isolation**
   - **Problem**: Documentation doesn't mention that each processor runs in its own Docker container with isolated work areas
   - **Recommendation**: Add information about container-based isolation for completeness

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 6     |
| Documentation Issues     | 4     |
| Other Problems           | 3     |

---

### developer/plugins/how-to/conditional-executionx

# File: content/docs/developer/plugins/how-to/conditional-execution.mdx

> Documentation explaining how to implement conditional execution in plugins based on configuration passed from templates. Covers using the `config` property, feature flags, project type conditionals, and providing defaults.

### Source Code Inaccuracies

1. **SDK package name mismatch**

   - Documented: `@atomicloud/cyan-sdk`
   - Actual: `@atomicloud/cyan-sdk`
   - Evidence: The SDK package name is confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2` which shows `"name": "@atomicloud/cyan-sdk"`. The e2e plugins in iridium also use this import (e.g., `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1`).

2. **Missing import for `fs` and `path` modules in Advanced Patterns section**

   - Documented: Code uses `fs.writeFile` and `path.join` without imports
   - Actual: These require explicit imports from Node.js
   - Evidence: In `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:2-3`, explicit imports are shown: `import fs from 'node:fs';` and `import path from 'node:path';`. The documentation code snippets in the "Advanced Patterns" section (lines 102-145) use `fs.writeFile`, `fs.mkdir`, and `path.join` without showing these imports.

3. **Missing PluginOutput type annotation**

   - Documented: Lambda function returns `{ directory }` without explicit type
   - Actual: Real implementations use explicit `Promise<PluginOutput>` return type
   - Evidence: In `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5`, the function signature is `async (input): Promise<PluginOutput>`. The documentation examples don't show this explicit typing.

4. **Template configuration in cyan.yaml format differs from documented**

   - Documented: Plugin config with nested properties shown in YAML format (lines 67-76)
   - Actual: Real cyan.yaml files use simple array format for plugins without config blocks
   - Evidence: In `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:10`, plugins are listed as `plugins: ['ernest/plugin1']` - a simple array of strings. The config is passed programmatically in index.ts (line 61-65), not in the YAML file.

5. **answers variable usage differs from template patterns**
   - Documented: `answers.installDeps` and `answers.packageManager` (line 89-90)
   - Actual: Templates use direct variable assignment from inquirer prompts
   - Evidence: In `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:4-32`, answers from inquirer are stored in individual variables (e.g., `const color = await i.select(...)`) and then used directly in the config object, not accessed via `answers.X` pattern.

### Documentation Issues

1. **Inconsistent import statement**

   - Problem: Line 17 shows `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';` but real implementations also import `PluginOutput` type
   - Location: Lines 16-18, 102-104, 150-152, 179-181
   - Fix: Add `PluginOutput` to imports: `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';`

2. **Missing Node.js module imports**

   - Problem: Advanced patterns code uses `fs` and `path` without imports
   - Location: Lines 102-145 (Feature Flags section)
   - Fix: Add `import fs from 'node:fs';` and `import path from 'node:path';` to code examples

3. **Confusing cyan.yaml vs index.ts configuration explanation**

   - Problem: Documentation suggests plugin config can be defined in cyan.yaml, but real examples show config is only defined programmatically in index.ts
   - Location: Lines 61-96 (Template Configuration section)
   - Fix: Clarify that cyan.yaml only lists plugin names, while config is passed in the template's programmatic output (index.ts)

4. **Misleading answers object usage**

   - Problem: Shows `answers.installDeps` and `answers.packageManager` pattern which doesn't match real template implementations
   - Location: Lines 89-90
   - Fix: Show direct variable usage like `installDeps` and `packageManager` from inquirer prompts, matching actual template patterns

5. **Missing Bun import**
   - Problem: Uses `$` from bun without import
   - Location: Lines 18, 34-55
   - Fix: Either add `import { $ } from 'bun';` or clarify this is Bun-specific syntax

### Other Problems

1. **No explicit return type shown**

   - Problem: Lambda functions don't show explicit `Promise<PluginOutput>` return type which is best practice
   - Recommendation: Add explicit return types to all lambda examples for type safety

2. **Bun-specific shell commands without context**

   - Problem: Uses Bun's `$` template literal syntax throughout without explaining it's Bun-specific
   - Recommendation: Add a note that the `$` syntax is from Bun's shell API, and alternatives for non-Bun environments

3. **fs.promises vs fs sync methods inconsistency**
   - Problem: Documentation uses `await fs.writeFile()` which implies promises API, but real examples use `fs.writeFileSync()`
   - Recommendation: Be consistent - either use `fs.promises.writeFile` with await, or use `fs.writeFileSync` without await

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 5     |
| Documentation Issues     | 5     |
| Other Problems           | 3     |

---

### developer/plugins/how-to/push-to-registryx

# File: content/docs/developer/plugins/how-to/push-to-registry.mdx

> Documentation for building and publishing plugins to container registries. Covers Docker tagging, pushing to registries (Docker Hub, GHCR, private), naming conventions, versioning, and CI/CD automation.

### Source Code Inaccuracies

1. **Documented CLI syntax for push command is incorrect**

   - **Documented**: The documentation suggests using `pls push plugin --image registry/user/plugin:latest --tag latest` with `--image` and `--tag` flags
   - **Actual**: The CLI uses positional arguments, not flags. The correct syntax is `pls push plugin <image> <tag>` where image and tag are positional arguments
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:133-137` shows `Plugin { image: String, tag: String }` as positional arguments. Also confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-plugin.sh:29` which uses `cyanprint push plugin "$DOCKER_USERNAME/$plugin" "$tag"` with positional arguments

2. **Documented GitHub Actions workflow uses incorrect CLI flags**

   - **Documented**: `--template-image`, `--template-tag`, `--blob-image`, `--blob-tag` flags in GitHub Actions example
   - **Actual**: The CLI uses positional arguments, not these flags. For templates, it should be `pls push template <blob_image> <blob_tag> <template_image> <template_tag>`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:122-130` shows `Template { blob_image: String, blob_tag: String, template_image: String, template_tag: String }` as positional arguments

3. **Missing documentation about registry push flow**

   - **Documented**: The documentation describes using raw Docker commands to push images directly to registries
   - **Actual**: CyanPrint has its own registry API (`POST /api/v1/plugin/push/{username}`) that must be used to register plugin metadata and Docker image references with the Zinc registry. The `cyanprint push plugin` command handles this automatically by reading the `cyan.yaml` configuration
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/http/client.rs:77-92` shows `push_plugin_internal` calls `/api/v1/Plugin/push/{username}` endpoint. Also `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/docs/developer/surfaces/api/03-plugin.md:620-670` documents the Push Plugin API

4. **Naming convention recommendation conflicts with actual system**

   - **Documented**: Suggests using `cyan-plugin-` prefix for Docker images
   - **Actual**: The system uses internal naming like `cyan-plugin-<uuid>-<session>` for container names, but the Docker image reference (`dockerReference` and `dockerTag`) is stored as provided and doesn't require any specific prefix
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/models.go:103-127` shows `RegistryPluginVersionPrincipalRes` stores `DockerReference` and `DockerTag` as provided. Container naming in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/features/01-session-management.md:90` shows `cyan-plugin-<uuid>-<session>` pattern

5. **Using in Templates section has incorrect YAML format**
   - **Documented**: Shows plugins configured as `plugins: - name: org/my-plugin:1.0.0 config: {}`
   - **Actual**: In `cyan.yaml`, plugins are declared as simple string arrays: `plugins: ['username/plugin-name']` or `plugins: ['username/plugin-name:version']`. The `name` and `config` structure is for the runtime Cyan object returned by the template script, not the `cyan.yaml` configuration
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md:43-46` shows `plugins: ['atomi/formatter']` format for cyan.yaml. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/model.go:10-13` shows `CyanPluginReq` with `name` and `config` is for runtime requests

### Documentation Issues

1. **Missing prerequisite: CyanPrint CLI and registry account**

   - **Problem**: Documentation lists Docker and registry access as prerequisites but doesn't mention the need for the CyanPrint CLI (`cyanprint` or `pls`) or a Zinc registry account with API token
   - **Location**: Prerequisites section (lines 14-18)
   - **Fix**: Add "CyanPrint CLI installed" and "Zinc registry account with API token (set via CYAN_TOKEN environment variable)" to prerequisites

2. **Missing step: Register with Zinc registry**

   - **Problem**: Documentation only covers Docker push, but plugins must also be registered with the Zinc registry via `cyanprint push plugin` for the system to discover and use them
   - **Location**: Build and Push section (lines 20-83)
   - **Fix**: Add a step explaining that after Docker push, you must run `cyanprint push plugin` to register the plugin with the Zinc registry

3. **Incorrect CLI usage examples throughout**

   - **Problem**: All CLI examples use `--image` and `--tag` flags which don't exist
   - **Location**: Lines 94-99 (push plugin example) and lines 45-52 (push template example in docs/iridium reference)
   - **Fix**: Update to use positional arguments: `cyanprint push plugin <image> <tag>` and `cyanprint push template <blob_image> <blob_tag> <template_image> <template_tag>`

4. **Missing documentation about cyan.yaml format for plugins**

   - **Problem**: Documentation doesn't explain the required `cyan.yaml` format for plugins
   - **Location**: Missing from entire document
   - **Fix**: Add section explaining that plugins need a `cyan.yaml` with fields like `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`

5. **Related links may be broken or incorrect**
   - **Problem**: Links to `/developer/plugins/reference/dockerfile` and `/developer/plugins/tutorials/first-plugin` - need verification these exist
   - **Location**: Related section (lines 234-238)
   - **Fix**: Verify links exist and are correct

### Other Problems

1. **Documentation describes generic Docker workflow instead of CyanPrint-specific workflow**

   - **Problem**: The entire document is written as generic Docker documentation rather than CyanPrint-specific plugin publishing. It should focus on the CyanPrint CLI and registry workflow
   - **Recommendation**: Rewrite to focus on: 1) Create plugin with cyan.yaml, 2) Build Docker image, 3) Push Docker image to registry, 4) Run `cyanprint push plugin` to register with Zinc

2. **Versioning section doesn't match actual version system**

   - **Problem**: Documentation describes semantic versioning with tags like `:1.0.0`, but the actual system uses integer version numbers that auto-increment
   - **Recommendation**: Update to explain that the Zinc registry assigns integer version numbers (1, 2, 3...) automatically when you push, and `dockerTag` is separate from the logical version

3. **GitHub Actions example incomplete**
   - **Problem**: The GitHub Actions workflow only shows Docker build/push, missing the crucial `cyanprint push plugin` step to register with Zinc
   - **Recommendation**: Add step that runs `cyanprint push plugin` after Docker push, with proper token handling

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 5     |
| Documentation Issues     | 5     |
| Other Problems           | 3     |

---

### developer/processors/reference/dockerfilex

<!-- source: content/docs/developer/processors/reference/dockerfile.mdx -->

# 📄 File: content/docs/developer/processors/reference/dockerfile.mdx

> This document describes Dockerfile configuration for CyanPrint processors. The documentation is generally accurate but contains some inaccuracies regarding version numbers, lockfile handling conventions, and missing information about Python/.NET processor Dockerfiles.

### 🔴 Source Code Inaccuracies

1. **Documented Bun version `1.1.31` is inconsistent with actual processor Dockerfiles**

   - Documented: `FROM oven/bun:1.1.31` (lines 15, 90, 101, 150, 206, 221)
   - Actual: Real processors use varying versions:
     - `ketone.default-processor/Dockerfile`: uses `oven/bun:1.1.31`
     - `ketone/new-cyanprint/processor/typescript/Dockerfile`: uses `oven/bun:1.3.8`
     - `iridium/e2e/processor1/Dockerfile` and `processor2/Dockerfile`: use `oven/bun:1.0.11`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/ketone.default-processor/Dockerfile:1`, `/Users/erng/Workspace/atomi/runbook/platforms/ketone/new-cyanprint/processor/typescript/Dockerfile:1`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:1`

2. **Documented lockfile pattern `bun.lockb*` does not match source practice**

   - Documented: `COPY package.json bun.lockb* ./` (lines 23, 94, 212, 234)
   - Actual: Source Dockerfiles use separate COPY commands without the glob wildcard:
     - All processor Dockerfiles in iridium/e2e use `COPY package.json .` followed by `COPY bun.lockb .`
     - ketone.default-processor uses same pattern
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:4-5`, `/Users/erng/Workspace/atomi/runbook/platforms/ketone/ketone.default-processor/Dockerfile:4-5`

3. **Documented `--frozen-lockfile` flag usage inconsistent with source**

   - Documented: `RUN bun install --frozen-lockfile` (lines 24, 95, 190, 212, 235)
   - Actual: All source Dockerfiles use `RUN bun install` without the `--frozen-lockfile` flag
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:6`, `/Users/erng/Workspace/atomi/runbook/platforms/ketone/ketone.default-processor/Dockerfile:6`

4. **Missing Python processor Dockerfile documentation**

   - Documented: Only Bun and Node.js examples provided
   - Actual: Python processors exist with different Dockerfile pattern:
     ```dockerfile
     FROM python:3.12.12
     WORKDIR /app
     LABEL cyanprint.dev=true
     COPY requirements.txt .
     RUN pip install --no-cache-dir -r requirements.txt
     COPY . .
     CMD ["python", "-u", "main.py"]
     ```
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/new-cyanprint/processor/python/Dockerfile`

5. **Missing .NET processor Dockerfile documentation**
   - Documented: Only Bun and Node.js examples provided
   - Actual: .NET processors use multi-stage build with explicit port 5551:
     ```dockerfile
     FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
     WORKDIR /app
     FROM --platform=$BUILDPLATFORM mcr.microsoft.com/dotnet/sdk:8.0 AS build
     ARG TARGETARCH
     WORKDIR /src
     COPY ["Processor.csproj", "./"]
     RUN dotnet restore -a $TARGETARCH "Processor.csproj"
     COPY . .
     WORKDIR "/src/"
     RUN dotnet build "Processor.csproj" -a $TARGETARCH -c Release -o /app/build
     FROM build AS publish
     RUN dotnet publish "Processor.csproj" -a "$TARGETARCH" -c Release -o /app/publish /p:UseAppHost=false
     FROM base AS final
     LABEL cyanprint.dev=true
     ENV ASPNETCORE_URLS=http://+:5551
     WORKDIR /app
     COPY --from=publish /app/publish .
     ENTRYPOINT ["dotnet", "Processor.dll"]
     ```
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/new-cyanprint/processor/dotnet/Dockerfile`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium-processor-api/Dockerfile`

### 🟡 Documentation Issues

1. **Minimal Dockerfile example should clarify it's a template, not a mandate**

   - Problem: The "Minimal Dockerfile" section presents specific patterns as required, but actual implementations vary significantly across languages
   - Location: Lines 14-31
   - Fix: Add language clarifying this is a recommended starting point for Bun/TypeScript processors, and that Python/.NET have different patterns

2. **Multi-stage build example uses potentially non-existent image variant**

   - Problem: The `oven/bun:1.1.31-slim` image reference in line 101 may not be valid; official Bun images typically use `-alpine` suffix for slim variants
   - Location: Line 101
   - Fix: Verify the slim variant exists or use `-alpine` variant consistently as shown in Full Example (line 206, 221)

3. **CMD variations not fully documented across languages**

   - Problem: Documentation shows `CMD ["bun", "run", "index.ts"]` but Python uses `CMD ["python", "-u", "main.py"]` and .NET uses `ENTRYPOINT ["dotnet", "Processor.dll"]`
   - Location: Lines 53-61
   - Fix: Add CMD/ENTRYPOINT examples for Python and .NET processors in a language comparison table

4. **Port 5551 requirement not mentioned**

   - Problem: Processor SDKs listen on port 5551 by default, but this is not documented in the Dockerfile reference. For .NET processors, the `ASPNETCORE_URLS=http://+:5551` environment variable is required.
   - Location: Entire document
   - Fix: Add section explaining that processors must expose port 5551 (handled automatically by Bun/Python SDKs), but .NET requires explicit `ENV ASPNETCORE_URLS=http://+:5551`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:89`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/main.py:119`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium-processor-api/Dockerfile:17`

5. **Health check example may not work as documented**
   - Problem: `HEALTHCHECK CMD bun -e "process.exit(0)"` may not be valid bun command syntax - bun doesn't have a `-e` flag like Node.js
   - Location: Lines 242-243
   - Fix: Verify bun one-liner syntax or use a different health check approach (e.g., `curl -f http://localhost:5551/` or remove the example)

### 🟠 Other Problems

1. **Inconsistent version recommendations across documentation**

   - Problem: Documentation recommends specific Bun version `1.1.31`, but actual codebase uses various versions (`1.0.11`, `1.1.31`, `1.3.8`)
   - Recommendation: Either update to current stable version (1.3.8 as of ketone/new-cyanprint) or add guidance on version selection criteria

2. **Missing `.dockerignore` file location guidance**

   - Problem: Documentation mentions creating `.dockerignore` but doesn't specify where it should be located in the processor project structure
   - Recommendation: Add reference to project structure documentation or include example showing `.dockerignore` at processor root

3. **Alpine variant usage inconsistent between examples**
   - Problem: "Full Example" uses `oven/bun:1.1.31-alpine` but "Minimal Dockerfile" uses `oven/bun:1.1.31` (Debian-based), and "Multi-Stage Build" uses non-existent `oven/bun:1.1.31-slim`
   - Recommendation: Recommend Alpine consistently for smaller image sizes, or explain the trade-offs between Debian and Alpine variants

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/processors/reference/sdk/start-processorx

<!-- source: content/docs/developer/processors/reference/sdk/start-processor.mdx -->

# 📄 File: content/docs/developer/processors/reference/sdk/start-processor.mdx

> Documentation for the `StartProcessorWithLambda` function which is the entry point for CyanPrint processors. Multiple inaccuracies found between documented types/signatures and actual source code implementation.

### 🔴 Source Code Inaccuracies

1. **ProcessorInput property names mismatch**

   - Documented: `readDirectory`, `writeDirectory`
   - Actual: `readDir`, `writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` shows `CyanProcessorInput` has `readDir` and `writeDir`, not `readDirectory` and `writeDirectory`

2. **ProcessorInput type name mismatch**

   - Documented: Handler receives `ProcessorInput` type
   - Actual: Handler receives `CyanProcessorInput` type
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/processor/lambda.ts:6` shows `LambdaProcessorFn = (i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>`

3. **Usage example uses wrong property names**

   - Documented: `input.writeDirectory` in all examples
   - Actual: Should be `input.writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` shows `return { directory: input.writeDir };`

4. **ProcessorInput table documents wrong property names**

   - Documented: `readDirectory`, `writeDirectory`
   - Actual: `readDir`, `writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16`

5. **Default path values may be incorrect**
   - Documented: `readDirectory` defaults to `/workspace/cyanprint/`, `writeDirectory` defaults to `/workspace/output/`
   - Actual: These paths are determined by the caller (CLI), not defined in the SDK types. The SDK only defines these as `string` without default values.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16`

### 🟡 Documentation Issues

1. **Import statement may be incorrect**

   - Problem: Documentation shows `import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk';`
   - Location: Lines 34, 73
   - Fix: Verify the actual package name. The SDK source is in `@atomicloud/cyan-sdk` based on the e2e examples (processor1/index.ts line 1), so this appears correct. However, the package name should be confirmed against package.json.

2. **Signature doesn't match actual TypeScript signature**

   - Problem: Documented signature shows `handler: (input: ProcessorInput, fileHelper: CyanFileHelper)` but actual is `(i: CyanProcessorInput, fileHelper: CyanFileHelper)`
   - Location: Lines 12-16
   - Fix: Update signature to use `CyanProcessorInput` or note that `ProcessorInput` is a type alias

3. **File property `relative` not documented**

   - Problem: The examples use `file.relative` (line 80) but the VirtualFile properties are not documented
   - Location: Usage examples throughout
   - Fix: Add a section documenting VirtualFile properties (`baseRead`, `baseWrite`, `relative`, `content`, `read`, `write`)

4. **Missing CyanGlob structure documentation**

   - Problem: Documentation mentions `globs: CyanGlob[]` but doesn't document the CyanGlob interface
   - Location: ProcessorInput table, line 61
   - Fix: Add CyanGlob interface documentation showing `root?: string | null`, `glob: string`, `exclude: string[]`, `type: GlobType`

5. **fileHelper.read() signature incomplete**
   - Problem: Example shows `fileHelper.read({ root: 'templates', glob: '**/*.md' })` but doesn't document that this takes a `CyanGlob` object, nor mentions the required `type` and `exclude` properties
   - Location: Line 120
   - Fix: Document that `read()` takes a `CyanGlob` parameter (minus type which may be defaulted)

### 🟠 Other Problems

1. **Inconsistent domain model types**

   - Problem: The SDK has both `ProcessorInput` (in `/domain/processor/input.ts`) and `CyanProcessorInput` (in `/domain/core/cyan_script_model.ts`). The `LambdaProcessorFn` uses `CyanProcessorInput`, which has `readDir`/`writeDir`, while `ProcessorInput` has `readDirectory`/`writeDirectory`. This internal inconsistency may be causing the documentation confusion.
   - Recommendation: Clarify which type users should expect, or unify the types in the SDK

2. **fileHelper.resolveAll() behavior not fully documented**

   - Problem: The documentation shows `fileHelper.resolveAll()` returning files that can be modified, but doesn't explain that it also copies files with `GlobType.Copy` automatically
   - Recommendation: Document that `resolveAll()` processes both Copy and Template glob types differently

3. **Missing exports documentation**
   - Problem: The main.ts exports many more items than documented (StartProcessor, StartTemplate, StartTemplateWithLambda, etc.)
   - Recommendation: Either document all exports or clarify this page is specifically for processor entry points

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/templates/how-to/use-custom-processorx

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
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 5     |
| 🟠       | 4     |

---

### user/reference/registry-uix

<!-- source: content/docs/user/reference/registry-ui.mdx -->

# 📄 File: content/docs/user/reference/registry-ui.mdx

> This documentation describes the CyanPrint Registry UI but is incomplete and contains inaccuracies. It only describes template-related functionality, but the actual Registry UI supports searching and viewing templates, plugins, processors, AND resolvers. The documentation also misses key features like the Dependencies tab and provides incomplete descriptions of search capabilities.

### 🔴 Source Code Inaccuracies

1. **Documented: "Search for templates by: Template name, Author/username, Tags"**

   - **Actual: Search is a unified full-text search, NOT separate filters.** The search API uses a single `Search` parameter (line 59-61 in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte`) that performs a general search across multiple fields. There is no explicit option to filter specifically by template name, author/username, or tags as separate search modes.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte:59-62`

2. **Documented: Only "templates" can be searched**

   - **Actual: The Registry UI supports 4 resource types: Templates, Plugins, Processors, AND Resolvers.** The resource selector dropdown clearly shows all four options.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte:26-46` - options array includes "template", "plugin", "processor", and "resolver"

3. **Documented: Template details include "Usage statistics" and "Author information"**

   - **Actual: Template details page shows:**
     - Stars and downloads counts (not general "usage statistics") - lines 100-107
     - Username (in title as `username/template-name`) and email (not comprehensive "author information") - line 68, and line 29 in card component
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:68,100-107`

4. **Documented: "Browse all available versions of a template"**
   - **Actual: The versions tab shows Version number, Description, and Created At date with filtering capability.** The documentation is vague about what information is actually displayed.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:131-165`

### 🟡 Documentation Issues

1. **Problem: Documentation is severely incomplete - missing 3 resource types**

   - **Location:** Entire document, particularly "Features" section (lines 10-31)
   - **Fix:** Add sections documenting Plugins, Processors, and Resolvers which are all searchable in the Registry UI. Each has its own detail page route.

2. **Problem: Missing "Dependencies" tab documentation**

   - **Location:** Template Details section (lines 20-27)
   - **Fix:** The template details page has 3 tabs: Documentation (ReadMe), Versions, and Dependencies (line 114-117). The Dependencies tab shows resolvers, plugins, and processors used by the template. This should be documented.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:114-117,167-226`

3. **Problem: Template details section is incomplete**

   - **Location:** Lines 20-27
   - **Fix:** Add the following items that are actually displayed:
     - Project URL (link icon)
     - Source URL (code icon)
     - Stars count
     - Download count
     - Tags (displayed as badges)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:79-108`

4. **Problem: Search section is misleading**

   - **Location:** Lines 14-18 (Search section)
   - **Fix:** Update to clarify that the search bar performs a unified full-text search across template name, description, author username, and tags all at once - not as separate filter options.

5. **Problem: Version History section lacks detail**

   - **Location:** Lines 29-31
   - **Fix:** Document that each version displays: Version number, Description, Created At timestamp. Also note that versions can be filtered using a search box.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:140-161`

6. **Problem: Missing URL pattern documentation**
   - **Location:** Line 8 (URL mention)
   - **Fix:** Add documentation for URL patterns:
     - Registry search: `/registry`
     - Template details: `/templates/{user_id}/{template_id}`
     - Plugin details: `/plugins/{user_id}/{plugin_id}`
     - Processor details: `/processors/{user_id}/{processor_id}`
     - Resolver details: `/resolvers/{user_id}/{resolver_id}`

### 🟠 Other Problems

1. **Problem: No authentication requirements documented**

   - **Recommendation:** Document if/when authentication is required (e.g., for starring templates, managing tokens). The codebase has `/tokens` and `/profile` routes suggesting authenticated features.

2. **Problem: The registry URL `registry.cyanprint.dev` should be verified against configuration**

   - **Recommendation:** Verify this URL against configuration files in the argon codebase (e.g., check `config/shared/*.config.ts` files for environment-specific URLs)

3. **Problem: No screenshots or visual examples**
   - **Recommendation:** Add screenshots of the actual registry UI showing the search interface, resource type selector, and template detail page tabs

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 6     |
| 🟠       | 3     |

---

### developer/basics/architecturex

# File: content/docs/developer/basics/architecture.mdx

> This document describes the CyanPrint system architecture including container communication, execution flow, container path mechanics, and SDK port assignments.

### Source Code Inaccuracies

1. **Registry API Endpoint Format**

   - **Documented**: `GET /templates/atomi/template` (Line 58)
   - **Actual**: `GET /api/v1/Template/slug/{username}/{name}/versions/latest?bumpDownload=true`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/http/client.rs:219-224` - The actual Zinc API uses a versioned endpoint with `/api/v{version}/Template/slug/{username}/{name}/versions/latest` format, not `/templates/{user}/{name}`.

2. **Output Directory Path**

   - **Documented**: `/workspace/output` (Lines 89, 98)
   - **Actual**: `/workspace/area`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:352-353` - The write volume is mounted at `/workspace/area`, not `/workspace/output`. Also in `merger.go:148,313` - Processor write directories are `/workspace/area/{uuid}` and merge path is `/workspace/area/{merge-uuid}`.

3. **Critical Paths Table - Incorrect Path**

   - **Documented**: `/workspace/output` owned by Coordinator (Line 98)
   - **Actual**: `/workspace/area` is the read-write volume mount point for processor/plugin outputs
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:343-356` - Shows `/workspace/cyanprint` (read-only) and `/workspace/area` (read-write) as the two mount points.

4. **Execution Flow Sequence - Missing Merger Component**

   - **Documented**: Shows `Coordinator->>Processor: POST /api/process` directly (Line 63)
   - **Actual**: The Merger component calls processors, not the Coordinator directly. The Coordinator starts the Merger container which then orchestrates processor execution.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:102-177` - The Merger struct has `execProcessors` method that calls processor endpoints. Also `executor.go:61-91` shows `startMerger` is called alongside processors/plugins.

5. **Container Communication Table - Missing Merger Role**

   - **Documented**: Only Template, Processor, Plugin containers listed (Lines 78-82)
   - **Actual**: A Merger container exists and plays a critical role in orchestrating processor execution and merging outputs.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:15-20` - Merger struct definition. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/executor.go:61-91` - `startMerger` method showing merger container startup on port 9000.

6. **Step-by-Step Description Oversimplified**
   - **Documented**: "Processing - Processor transforms files using the config" (Line 74)
   - **Actual**: The processing step involves the Merger component which: (1) Executes all processors in parallel, (2) Merges outputs into a single directory, (3) Executes plugins on the merged output.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:296-329` - The `Merge` function shows the complete flow: execProcessors -> merge -> execPlugins.

### Documentation Issues

1. **Incomplete Architecture Diagram**

   - **Problem**: The Mermaid diagram at line 12-35 does not show the Merger container which is a critical component.
   - **Location**: Lines 12-35 (System Components diagram)
   - **Fix**: Add Merger container to the "Remote Executor" subgraph and show it as the component that calls processors and plugins.

2. **Misleading Path Warning**

   - **Problem**: Warning says `/workspace` "WILL BE OVERRIDDEN" but the actual behavior is more nuanced - `/workspace/cyanprint` contains the extracted blob and `/workspace/area` is the working directory.
   - **Location**: Lines 94-99 (Critical Paths table)
   - **Fix**: Update the table to show correct paths: `/workspace/cyanprint` (read-only template volume) and `/workspace/area` (read-write session volume).

3. **Missing Merger Port Information**

   - **Problem**: SDK Port Assignments table (Lines 100-107) does not include the Merger container which runs on port 9000.
   - **Location**: Lines 100-107
   - **Fix**: Add Merger row: Port 9000, endpoint `POST /merge/{sessionId}`.

4. **Execution Flow Diagram Simplification**
   - **Problem**: The sequence diagram (Lines 49-66) shows Coordinator calling Processor directly, but actually the Merger component does this.
   - **Location**: Lines 49-66
   - **Fix**: Add Merger as a participant and show: Coordinator -> Merger -> Processor flow.

### Other Problems

1. **Terminology: "Coordinator" vs "Boron"**

   - **Problem**: The documentation uses "Coordinator" generically but the actual implementation is in the "boron" repository and the code references "sulfone-boron" as the coordinator image.
   - **Recommendation**: Consider clarifying that the Coordinator is the Boron component, or use consistent terminology.

2. **Registry Name Ambiguity**
   - **Problem**: The document refers to "Zinc API" but the actual API endpoints use `/api/v1/Template/...` format with "Template" (capitalized) as the controller name.
   - **Recommendation**: Ensure consistent naming between documentation and actual API paths.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 6     |
| Documentation Issues     | 4     |
| Other Problems           | 2     |

---

### developer/basics/introduction

<!-- source: content/docs/developer/basics/introduction.mdx -->

# 📄 File: content/docs/developer/basics/introduction.mdx

> The introduction document claims there are "three artifacts" in CyanPrint but the source code shows there are actually four. Additionally, the SDK port assignments are accurate for the three documented artifacts, but the fourth artifact (Resolver) is completely missing from the documentation.

### 🔴 Source Code Inaccuracies

1. **Documented**: "CyanPrint is a template-based project generator with three extensible components called **artifacts**" (line 8)

   - **Actual**: There are **four** artifacts: Templates, Processors, Plugins, and Resolvers
   - **Evidence**:
     - `helium/sdks/node/src/main.ts:145-166` - `StartResolver()` and `StartResolverWithLambda()` functions defined
     - `helium/sdks/node/src/domain/core/cyan_script.ts:23-25` - `ICyanResolver` interface defined alongside other artifact interfaces
     - `helium/spec/CU-86ewrbr69/v1/task-spec.md:14` - "Implement Resolver SDKs for Node.js, Python, and .NET that enable developers to create resolvers - stateless services on port 5553"
     - `helium/spec/CU-86ewrbr69/v1/task-spec.md:62` - Port table shows Resolver on port 5553

2. **Documented**: SDK Port table lists only three artifacts with ports 5550, 5551, 5552 (lines 12-16)

   - **Actual**: Missing Resolver artifact which runs on port 5553
   - **Evidence**:
     - `helium/sdks/node/src/main.ts:147` - `const port = 5553;` in `StartResolver()`
     - `helium/sdks/python/cyanprintsdk/main.py:185-212` - Python SDK has `start_resolver()` on port 5553
     - `helium/docker-compose.resolver.yaml:7-9` - Docker compose exposes port 5553 for resolvers

3. **Documented**: Processors purpose is "Transform files (templating, syntax conversion)" with examples like "Mustache templating, syntax conversion" (lines 16, 31)

   - **Actual**: No evidence of Mustache or syntax conversion in the codebase. Processors receive `CyanProcessorInput` with read/write directories and globs, and return a `ProcessorOutput` with just a directory path
   - **Evidence**:
     - `helium/sdks/node/src/domain/processor/service.ts:13-25` - Processor receives `readDirectory`, `writeDirectory`, `globs`, `config`
     - `helium/sdks/node/src/domain/processor/output.ts:1-5` - `ProcessorOutput` only contains `directory: string`
     - Grep search for "Mustache" in boron/iridium/helium returned no matches

4. **Documented**: Plugins purpose includes "Execute shell commands, Modify file permissions, Initialize git repositories, Install dependencies" (lines 38-41)
   - **Actual**: The `ICyanPlugin` interface only receives `directory` and `config`, with no specific SDK-level support for these operations listed
   - **Evidence**:
     - `helium/sdks/node/src/domain/plugin/input.ts:1-6` - `PluginInput` only has `directory: string` and `config: unknown`
     - `helium/sdks/node/src/domain/plugin/output.ts:1-5` - `PluginOutput` only has `directory: string`
     - The listed capabilities are implementation details, not SDK guarantees

### 🟡 Documentation Issues

1. **Problem**: Missing fourth artifact type (Resolver) completely from documentation

   - **Location**: Lines 10-16 (artifacts table) and lines 34-41 (Plugins section)
   - **Fix**: Add a new row to the table: `| **Resolvers** | Resolve file conflicts from layered templates | 5553 |` and add a Resolvers subsection explaining that resolvers receive multiple versions of the same file from different template layers and return merged content

2. **Problem**: The workflow diagram and description don't mention Resolvers

   - **Location**: Lines 43-55 (How They Work Together section)
   - **Fix**: Update the Mermaid diagram to include Resolver between Processor and Plugin, or add a note about optional Resolver step for layered templates

3. **Problem**: "Choose Your Path" section doesn't include Resolver development path

   - **Location**: Lines 57-61
   - **Fix**: Add `- [Create a Resolver](/developer/resolvers) - Build conflict resolvers`

4. **Problem**: Misleading examples for Processor transformations

   - **Location**: Line 31 - "Apply transformations (e.g., Mustache templating, syntax conversion)"
   - **Fix**: Remove specific examples like "Mustache templating" unless there's evidence in source code. Use more generic description like "Apply custom file transformations based on configuration"

5. **Problem**: Plugin capabilities listed are implementation possibilities, not SDK features
   - **Location**: Lines 38-41
   - **Fix**: Clarify that these are examples of what plugins CAN do, not built-in SDK capabilities. The SDK only provides the interface contract

### 🟠 Other Problems

1. **Problem**: Documentation title and description use "CyanPrint" but the project structure suggests "Sulfone" as the platform name with CyanPrint as a component

   - **Recommendation**: Ensure consistent naming conventions throughout documentation

2. **Problem**: The term "Cyan config" is used (line 53) but the actual type is `Cyan`

   - **Evidence**: `helium/sdks/node/src/domain/core/cyan.ts:24-27` - `interface Cyan { processors: CyanProcessor[]; plugins: CyanPlugin[]; }`
   - **Recommendation**: Use consistent terminology - either "Cyan object" or "Cyan configuration" but not "Cyan config"

3. **Problem**: No mention of Resolvers being part of the composition system for layered templates
   - **Recommendation**: Add context about when Resolvers are needed (when composing multiple templates that may have conflicting files)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/plugins/reference/sdk/indexx

<!-- source: content/docs/developer/plugins/reference/sdk/index.mdx -->

# 📄 File: content/docs/developer/plugins/reference/sdk/index.mdx

> Overview page for the Plugin SDK, describing the `@atomicloud/cyan-sdk` package for CyanPrint plugin development. Documents key components (StartPluginWithLambda, PluginInput, PluginOutput) and compares Plugin SDK vs Processor SDK. Source paths reference repository documentation (argon, boron, helium, iridium, zinc) rather than actual SDK implementation code.

### 🔴 Source Code Inaccuracies

1. **Package name discrepancy between SDK docs and Helium repo docs**

   - **Documented**: `@atomicloud/cyan-sdk` (line 8, 13)
   - **Actual**: Helium repository documentation lists TypeScript SDK package as `@cyanprint/sdk`
   - **Evidence**: `content/docs/contributor/repositories/helium.mdx:17-20` - Shows `@cyanprint/sdk` as the TypeScript SDK package name in the Tech Stack table

2. **Type naming inconsistency - PluginInput vs CyanPluginInput**

   - **Documented**: Table lists `PluginInput` as input type (line 26)
   - **Actual**: The actual SDK implementation uses `CyanPluginInput` for the lambda function parameter
   - **Evidence**: This discrepancy is noted in previous fact-check findings. The documented `PluginInput` may be a simplified alias or outdated naming.

3. **Type naming inconsistency - ProcessorInput vs CyanProcessorInput**

   - **Documented**: Comparison table lists `ProcessorInput` for Processor SDK (line 57)
   - **Actual**: The SDK uses `CyanProcessorInput` with fields `readDir`, `writeDir`, `globs`, `config` (different structure than documented)
   - **Evidence**: The ProcessorInput in docs doesn't match the actual `CyanProcessorInput` structure used in the SDK

4. **Processor SDK entry point parameter count**
   - **Documented**: Comparison table shows Processor SDK entry point `StartProcessorWithLambda` (line 55)
   - **Actual**: Correct, but the table doesn't reflect that processors receive TWO parameters (input AND fileHelper) vs plugins receiving only ONE (input)
   - **Evidence**: `content/docs/developer/processors/reference/sdk/start-processor.mdx:13-15` shows handler signature with both `input` and `fileHelper` parameters

### 🟡 Documentation Issues

1. **Source paths point to architecture docs, not SDK source code**

   - **Problem**: The provided source paths (`../argon`, `../boron`, `../helium`, `../iridium`, `../zinc`) point to repository overview documentation describing system architecture, not actual TypeScript SDK implementation
   - **Location**: Task source paths
   - **Fix**: If SDK source code exists elsewhere, link to that. Otherwise clarify these are architectural references.

2. **Missing return type annotation in Quick Example**

   - **Problem**: Example code doesn't show explicit `Promise<PluginOutput>` return type
   - **Location**: Quick Example code block (lines 30-43)
   - **Fix**: Add explicit return type for clarity: `StartPluginWithLambda(async (input): Promise<PluginOutput> => {`

3. **Bun shell API usage without context**

   - **Problem**: Example imports `$` from 'bun' without explaining this is Bun-specific shell API
   - **Location**: Line 32 - `import { $ } from 'bun';`
   - **Fix**: Add note explaining Bun's shell API or show Node.js alternative

4. **File helper comparison lacks detail**

   - **Problem**: Table says "None (direct fs access)" for Plugin SDK but doesn't explain what `CyanFileHelper` provides to processors
   - **Location**: Plugin vs Processor SDK table, "File helper" row (line 58)
   - **Fix**: Add brief description of `CyanFileHelper` capabilities (resolveAll, read, copy, etc.)

5. **Input field differences not explained**
   - **Problem**: Table doesn't show that `ProcessorInput` has different fields (`readDir`, `writeDir`, `globs`, `config`) vs `PluginInput` (`directory`, `config`)
   - **Location**: Plugin vs Processor SDK comparison table (lines 53-59)
   - **Fix**: Add footnote or expand table to clarify field differences

### 🟠 Other Problems

1. **Plugin directory lifecycle not explained**

   - **Problem**: Documentation says plugins "receive a directory and config, perform operations, and return the directory path" without explaining what directory this is or when plugins run in the pipeline
   - **Recommendation**: Add context explaining that `directory` is the generated template output, and plugins run after all processors complete (as shown in plugins-vs-processors.mdx)

2. **Internal consistency verified but external verification limited**

   - **Problem**: All plugin SDK documentation is internally consistent (start-plugin.mdx, input-output.mdx, types.mdx, index.mdx), but actual TypeScript implementation code is not available in the referenced source paths for verification
   - **Recommendation**: Add links to actual SDK source code in Helium repository if available

3. **Port 5552 claim in comparison table**
   - **Problem**: The comparison table mentions plugins listen on port 5552 (implied by start-plugin.mdx reference), but this is not stated in the index page itself
   - **Recommendation**: Consider adding port information to this overview page or removing the comparison if it belongs in detailed docs

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/processors/explanation/why-processorsx

<!-- source: content/docs/developer/processors/explanation/why-processors.mdx -->

# 📄 File: content/docs/developer/processors/explanation/why-processors.mdx

> This document explains the purpose and use cases for custom processors in CyanPrint, including the default processor, templating engines, and code examples for various processing scenarios.

### 🔴 Source Code Inaccuracies

1. **Incorrect property name `writeDirectory` vs `writeDir`**

   - **Documented**: `input.writeDirectory` (lines 68, 86, 105)
   - **Actual**: `input.writeDir`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:12-13` - The `CyanProcessorInput` interface defines `writeDir: string`, not `writeDirectory`. Also confirmed in actual processor implementation at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` which returns `{ directory: input.writeDir }`.

2. **Incomplete CyanGlob parameter in fileHelper.read() calls**

   - **Documented**: `fileHelper.read({ root: 'schemas', glob: '**/*.graphql' })` (line 59) and similar (line 77)
   - **Actual**: `fileHelper.read(g: CyanGlob)` requires complete `CyanGlob` with `exclude: string[]` and `type: GlobType` properties
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11` defines `CyanGlob` interface with required properties: `glob: string`, `exclude: string[]`, `type: GlobType`. The `read(g: CyanGlob)` method at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:73` requires a complete `CyanGlob` object.

3. **GlobType enum values differ between Node and Python SDKs**

   - **Documented**: Uses `GlobType.Template` in code examples (lines 129, 135, 141) without specifying values
   - **Actual**: Node SDK: `Template = 0, Copy = 1`; Python SDK: `Template = 1, Copy = 2`
   - **Evidence**: Node SDK at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `Template = 0, Copy = 1`. Python SDK at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:7-9` shows `Template = 1, Copy = 2`. This inconsistency could cause cross-language issues.

4. **fileHelper.resolveAll() behavior not fully documented**
   - **Documented**: `fileHelper.resolveAll()` returns files that can be iterated (line 96)
   - **Actual**: `resolveAll()` first copies all Copy-type files, then reads and returns Template-type files
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40` shows the implementation copies Copy-type globs before returning Template-type files.

### 🟡 Documentation Issues

1. **Code examples use hypothetical helper functions**

   - **Problem**: Functions like `generateTypeScript()`, `parseTypeScript()`, `addDeprecationComments()`, `printTypeScript()`, `removeDebugCode()` don't exist in the SDK
   - **Location**: Lines 62, 80-82, 100
   - **Fix**: Mark these as pseudo-code examples or clarify they are placeholder function names representing user-defined logic

2. **Default processor naming convention unclear**

   - **Problem**: Document references `cyan/default` as the default processor but doesn't explain the `namespace/processor-name` format
   - **Location**: Line 14
   - **Fix**: Clarify that processor names follow `username/processor-name` format as shown in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml:1-2`

3. **Missing import statements in code examples**

   - **Problem**: Code examples use `StartProcessorWithLambda` and `GlobType` without showing imports
   - **Location**: Lines 56-107, 122-146
   - **Fix**: Add import statements: `import { StartProcessorWithLambda, GlobType } from '@atomicloud/cyan-sdk';`

4. **VirtualFile.relative property modification not explained**
   - **Problem**: Code example shows `schema.relative` being modified (line 63) but doesn't explain this changes the output path
   - **Location**: Lines 63-64
   - **Fix**: Add a comment explaining that modifying `relative` determines the output file path

### 🟠 Other Problems

1. **Mermaid diagrams reference hypothetical processors**

   - **Problem**: Diagram shows `custom/jinja`, `custom/go-templates`, `custom/handlebars` as processor names (lines 41-43) but these are illustrative examples
   - **Recommendation**: Add a note clarifying these are example processor names for illustration purposes

2. **GlobType.Template vs GlobType.Copy not explained**

   - **Problem**: Document references `GlobType.Template` but doesn't explain the difference between Template and Copy types
   - **Recommendation**: Add brief explanation or link to relevant documentation

3. **Processing pipeline example lacks context**

   - **Problem**: Multi-stage pipeline example (lines 122-146) shows processor configuration but doesn't explain this is part of a template's return value
   - **Recommendation**: Add context showing this code belongs in a template's return statement

4. **Templating engine comparison table may mislead**
   - **Problem**: Table (lines 30-36) lists Jinja, Go Templates, Handlebars, Mustache as alternatives but doesn't clarify these require custom processor implementation
   - **Recommendation**: Clarify these are potential custom processors users could implement, not built-in options

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 4     |
| 🟠       | 4     |

---

### developer/templates/explanation/indexx

<!-- source: content/docs/developer/templates/explanation/index.mdx -->

# 📄 File: content/docs/developer/templates/explanation/index.mdx

> Index file for CyanPrint template explanation documentation. Contains navigation links, high-level Mermaid diagram, and FAQ-style key questions. Multiple significant discrepancies found between documentation and actual source code.

### 🔴 Source Code Inaccuracies

1. **State File Location (client-state.mdx, linked from index)**

   - Documented: `.cyan/generation.json`
   - Actual: `.cyan_state.yaml`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/services.rs:58` - `let state_file_path = target_dir.join(".cyan_state.yaml");`

2. **State File Structure (client-state.mdx, linked from index)**

   - Documented: JSON format with `version`, `template`, `pin`, `answers`, `generated` fields
   - Actual: YAML format with `templates` HashMap containing `TemplateState` objects with `active` and `history` fields
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/models.rs:20-24` - `pub struct CyanState { #[serde(flatten)] pub templates: HashMap<String, TemplateState> }`

3. **Deterministic Methods (determinism.mdx, linked from index)**

   - Documented: `d.uuid()`, `d.timestamp()`, `d.seq()` methods on IDeterminism interface
   - Actual: IDeterminism interface defined in external `@atomicloud/cyan-sdk` package. E2e templates import IDeterminism but never invoke methods on `d`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:2` - `import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';` - `d` parameter never used

4. **Built-in Plugin Names (processors-vs-plugins.mdx, linked from index)**

   - Documented: `cyan/init-git` and `cyan/npm-install` as built-in plugins
   - Actual: No evidence of these plugins in source code. E2e tests use custom plugins like `ernest/plugin1`
   - Evidence: No matches found in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/` for `cyan/init-git` or `cyan/npm-install`

5. **GlobType.Ignore (cyan-object.mdx, linked from index)**
   - Documented: `GlobType.Ignore` as a valid file group type
   - Actual: Source code only defines `GlobType::Template()` and `GlobType::Copy()` - no `Ignore` variant
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:4-7` - `pub enum GlobType { Template(), Copy() }`

### 🟡 Documentation Issues

1. **Unverifiable SDK Interfaces**

   - Problem: Documentation describes `IInquirer`, `IDeterminism`, `IProcessor`, `IPlugin`, `ICyanConfig` interfaces with specific methods, but these are defined in external `@atomicloud/cyan-sdk` package not present in source directories
   - Location: Multiple pages (cyan-object.mdx, determinism.mdx, default-processor.mdx)
   - Fix: Either add SDK source code to verification paths or clearly note that SDK interfaces are external dependencies

2. **Registry vs Coordinator Endpoints (docker-vs-cyan-registry.mdx, linked from index)**

   - Problem: Documentation mentions `registry.cyanprint.io` as official CyanPrint registry, but source code uses `http://coord.cyanprint.dev:9000` as coordinator endpoint
   - Location: docker-vs-cyan-registry.mdx lines 147-149
   - Fix: Clarify distinction between registry and coordinator endpoints, or update to match actual implementation
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:42,60` - default coordinator is `http://coord.cyanprint.dev:9000`

3. **Filters Configuration (default-processor.mdx, linked from index)**

   - Problem: Documentation shows `parser.filters` configuration option for the default processor, but actual processor implementation in e2e tests does not reference filters
   - Location: default-processor.mdx lines 188-203
   - Fix: Verify filters are actually supported in the SDK or remove from documentation
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts` - uses `varSyntax` but no `filters` property in config

4. **State Directory Structure (3-way-merge.mdx, linked from index)**
   - Problem: Documentation describes `.cyan/` directory with `generation.json` and `base/` subdirectory, but actual implementation uses single `.cyan_state.yaml` file at project root
   - Location: 3-way-merge.mdx lines 43-49
   - Fix: Update to reflect actual `.cyan_state.yaml` structure
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/fs/loader.rs:25,78-79` - skips `.cyan_state.yaml` files, no reference to `.cyan/` directory

### 🟠 Other Problems

1. **Inconsistent Plugin/Processor Namespacing**

   - Problem: Documentation uses `cyan/*` namespacing for built-in plugins and processors, but actual e2e tests use `ernest/*` namespacing. No evidence of official `cyan/*` packages existing
   - Recommendation: Either create official `cyan/*` plugins/processors or update documentation to reflect actual naming conventions used in practice

2. **Pin System Implementation Unclear**

   - Problem: Documentation describes pin system in detail with storage in `.cyan/generation.json`, but actual implementation stores `deterministic_states` HashMap in `.cyan_state.yaml` with different structure
   - Recommendation: Verify pin system implementation matches documentation or update documentation to reflect actual state management approach

3. **Container Paths Unverifiable**
   - Problem: Documentation describes container paths (`/workspace`, `/templates`, `/cyan`) as internal Docker container paths, but these cannot be verified from source code in the specified source paths (argon, boron, helium, iridium, zinc)
   - Recommendation: Add Docker configuration files to source paths for verification, or clearly mark as infrastructure documentation that cannot be verified from application source code

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### developer/templates/how-to/compose-templatesx

<!-- source: content/docs/developer/templates/how-to/compose-templates.mdx -->

# 📄 File: content/docs/developer/templates/how-to/compose-templates.mdx

> This document describes template composition using YAML configuration. The document contains significant inaccuracies regarding the YAML schema and feature support.

### 🔴 Source Code Inaccuracies

1. **Documented YAML key `compose` | Actual key is `templates`**

   - Documentation shows: `compose:` as the YAML key for template composition
   - Actual code: `templates:` is the correct key in `CyanTemplateFileConfig`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/template_config.rs:25` shows `pub templates: Vec<String>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template3/cyan.yaml:11-13` shows actual usage: `templates:\n  - ernest/template1\n  - ernest/template2`

2. **Documented template reference format uses `name` and `version` properties | Actual format is `username/name:version` string**

   - Documentation shows:
     ```yaml
     compose:
       - name: my-org/base-setup
         version: '1.0.0'
     ```
   - Actual code: Template references are simple strings in format `username/name:version`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/template_config.rs:25` shows `pub templates: Vec<String>` (array of strings, not objects)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template4/cyan.yaml:11-12` shows: `templates:\n  - ernest/template3:4`

3. **Documented version format uses semver strings | Actual version is an integer**

   - Documentation shows: `version: "1.0.0"`, `version: "2.0.0"`, etc.
   - Actual code: Version is parsed as `i64` (integer) after the colon
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:44` shows `pub version: Option<i64>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/mapper.rs:72-75` shows `v.parse::<i64>().ok()`

4. **Documented `condition` property for conditional composition | Feature does not exist**

   - Documentation shows:
     ```yaml
     compose:
       - name: features/typescript
         condition: ${usesTypescript}
     ```
   - Actual code: No `condition` property exists in `CyanTemplateFileConfig` or `CyanTemplateRef`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/template_config.rs:4-26` - no condition field
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:41-45` - CyanTemplateRef has only username, name, version

5. **Documented `name` property inside compose items | Actual uses inline reference format**
   - Documentation shows: `- name: my-org/base-setup`
   - Actual code: `- username/name:version` format directly as string
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/mapper.rs:61-82` - `template_reference_mapper` parses string format `username/name:version`

### 🟡 Documentation Issues

1. **Incorrect YAML key throughout document | Multiple locations**

   - Problem: All YAML examples use `compose:` instead of `templates:`
   - Locations: Lines 16-23, 35-44, 50-60, 142-157
   - Fix: Replace `compose:` with `templates:` and reformat to string array syntax

2. **Incorrect template reference syntax | Multiple locations**

   - Problem: Examples show object syntax with `name` and `version` properties
   - Locations: Lines 18-22, 147-156
   - Fix: Use string format `- username/name:version` instead

3. **Semver version format not supported | Lines 19, 21, 147-156**

   - Problem: Documentation shows semver versions like `"1.0.0"`, `"2.0.0"`
   - Fix: Use integer versions like `:1`, `:2`, etc.

4. **Unsupported conditional composition feature | Lines 54-59**

   - Problem: Documentation describes `condition: ${usesTypescript}` feature that does not exist
   - Recommendation: Remove this section entirely or mark as planned feature

5. **Code example parameter order unclear | Lines 106-131**
   - Problem: Documentation shows `StartTemplateWithLambda(async (i, d) => {` but doesn't explain parameters
   - Actual: `LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts:6`

### 🟠 Other Problems

1. **Documentation may describe a planned or deprecated API**

   - Problem: The `compose` key and object-based syntax suggest this documentation may be describing a different version or planned feature
   - Recommendation: Verify with product team whether this describes a future API or should be completely rewritten to match current implementation

2. **Inconsistent naming conventions in examples**
   - Problem: Examples mix `my-org/`, `shared/`, `company/`, `base/`, `features/` prefixes without explaining the username/name convention
   - Recommendation: Use consistent `username/template-name:version` format throughout

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 5     |
| 🟠       | 2     |

---

### developer/templates/how-to/default-valuesx

<!-- source: content/docs/developer/templates/how-to/default-values.mdx -->

# 📄 File: content/docs/developer/templates/how-to/default-values.mdx

> Documentation explaining how to set default values for question types in the IInquirer API. Contains significant inaccuracies regarding which question types support defaults and the actual API structure.

### 🔴 Source Code Inaccuracies

1. **SelectQ `default` property does not exist**

   - Documented: `select()` with a `default: 'MIT'` property (lines 44-52)
   - Actual: `SelectQ` interface does NOT have a `default` property in any SDK
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:54-62` - `SelectQ` only has `type`, `id`, `message`, `desc?`, `validate?`, and `options` - no `default`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/SelectQ.cs:1-13` - no `Default` property
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/question.py:47-54` - no `default` field

2. **CheckboxQ `default` property does not exist**

   - Documented: `checkbox()` with a `default: ['ESLint', 'Prettier']` property (lines 69-78)
   - Actual: `CheckboxQ` interface does NOT have a `default` property in any SDK
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:11-19` - `CheckboxQ` only has `type`, `id`, `message`, `desc?`, `validate?`, and `options` - no `default`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/CheckboxQ.cs:1-12` - no `Default` property
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/question.py:6-13` - no `default` field

3. **Conditional Defaults example uses non-existent SelectQ default**

   - Documented: Lines 124-142 show conditional defaults for `select()` with `default: 'React'` and `default: framework === 'Vue' ? 'Vitest' : 'Jest'`
   - Actual: `SelectQ` does not support `default` property at all
   - Evidence: Same as issue #1 above

4. **`dateSelect()` return type is `string`, not `Date`**

   - Documented: Example at lines 82-89 shows `default: new Date()` and implies the return value is a Date object
   - Actual: `dateSelect()` returns `Promise<string>`, not `Promise<Date>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24` - `dateSelect(q: DateQ): Promise<string>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/inquirer.py:69-72` - `-> str` return type

5. **Computed Defaults example for dateSelect uses incorrect default type**
   - Documented: Lines 107-118 show `default: defaultDeadline` where `defaultDeadline` is a `Date` object
   - Actual: While `DateQ.default` accepts `Date | null` in TypeScript, the return type is still `string`, which may cause confusion for users expecting a Date object back
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:32-42` - `default?: Date | null` is valid, but the return is still `Promise<string>`

### 🟡 Documentation Issues

1. **No mention of `initial` property for TextQ**

   - Problem: `TextQ` has both `default` and `initial` properties, but only `default` is documented
   - Location: Lines 32-40 (Text section)
   - Fix: Document the `initial` property and explain the difference between `default` and `initial`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:64-73` shows both `default?: string | null` and `initial?: string | null`

2. **No mention that SelectQ and CheckboxQ do NOT support defaults**

   - Problem: Documentation implies all question types support defaults, but Select and Checkbox do not
   - Location: "Default by Question Type" section (lines 28-90)
   - Fix: Add a clear note that Select and Checkbox do NOT support the `default` property, or remove those sections entirely

3. **SelectQ and CheckboxQ `validate` property is `null`, not a function**

   - Problem: Documentation shows `validate` functions for Select and Checkbox, but actual types show `validate?: null`
   - Location: Lines 44-52 (Select) and lines 69-78 (Checkbox)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:54-62` - `validate?: null` for SelectQ
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:11-19` - `validate?: null` for CheckboxQ
   - Fix: Either remove validate examples from Select/Checkbox or document that validation is not supported for these types

4. **Related link path inconsistency**
   - Problem: The "Related" section links to `/developer/templates/reference/sdk/inquirer` - should verify this matches Fumadocs routing
   - Location: Line 154
   - Fix: Verify the link resolves correctly

### 🟠 Other Problems

1. **Inconsistency between SDKs for DateQ.default type**

   - Problem: TypeScript SDK uses `Date | null` for default, but C# SDK uses `DateOnly?`
   - Recommendation: Document the type difference per SDK language

2. **Cross-file inconsistency in documentation**

   - Problem: The `inquirer.mdx` reference file also shows `default` for Select and Checkbox, perpetuating the same inaccuracies
   - Recommendation: Fix all documentation files consistently

3. **DateQ default in C# uses DateOnly, not DateTime**
   - Problem: Documentation shows `new Date()` (JavaScript Date) but C# SDK uses `DateOnly?`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/DateQ.cs:8` - `public DateOnly? Default { get; set; }`
   - Recommendation: Add language-specific examples or notes

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### developer/templates/indexx

<!-- source: content/docs/developer/templates/index.mdx -->

# 📄 File: content/docs/developer/templates/index.mdx

> The index.mdx file provides a comprehensive overview of template development with CyanPrint SDK. Most content is accurate, but there are several discrepancies between documentation and actual SDK source code, primarily around enum values and type definitions in the linked reference documentation.

### 🔴 Source Code Inaccuracies

1. **GlobType Enum - Missing Value (in linked types.mdx)**

   - **Documented**: `GlobType.Ignore = 2` in types.mdx and cyan-config.mdx
   - **Actual**: `GlobType` only has `Template = 0` and `Copy = 1` in the SDK
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`

   ```ts
   enum GlobType {
     Template = 0,
     Copy = 1,
   }
   ```

2. **IDeterminism Interface (in linked types.mdx)**

   - **Documented**: `IDeterminism` has methods `uuid()`, `timestamp()`, `seq(namespace)`
   - **Actual**: `IDeterminism` only has `get(key: string, origin: () => string): string`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`

   ```ts
   interface IDeterminism {
     get(key: string, origin: () => string): string;
   }
   ```

3. **dateSelect() Return Type (in linked types.mdx and inquirer.mdx)**

   - **Documented**: `dateSelect()` returns `Promise<Date>`
   - **Actual**: `dateSelect()` returns `Promise<string>` based on IInquirer interface
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26`

   ```ts
   dateSelect(q: DateQ): Promise<string>;
   dateSelect(q: string, id: string, help?: string | null): Promise<string>;
   ```

4. **IFileGroup.root Property (in linked types.mdx)**

   - **Documented**: `root: string` (required)
   - **Actual**: `root?: string | null` (optional)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11`

   ```ts
   interface CyanGlob {
     root?: string | null;
     glob: string;
     exclude: string[];
     type: GlobType;
   }
   ```

5. **config Property Types (in linked types.mdx)**
   - **Documented**: `config: Record<string, any>` for IProcessor and IPlugin
   - **Actual**: `config: unknown` for both CyanProcessor and CyanPlugin
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:13-22`
   ```ts
   interface CyanPlugin {
     name: string;
     config: unknown;
   }
   interface CyanProcessor {
     name: string;
     files: CyanGlob[];
     config: unknown;
   }
   ```

### 🟡 Documentation Issues

1. **Inconsistent Interface Names**

   - **Problem**: Documentation uses `ICyanConfig`, `IProcessor`, `IPlugin`, `IFileGroup` but SDK exports `Cyan`, `CyanProcessor`, `CyanPlugin`, `CyanGlob`
   - **Location**: types.mdx and cyan-config.mdx (linked from index.mdx)
   - **Fix**: Update interface names to match SDK exports or clarify the naming convention

2. **Directory Naming Inconsistency**

   - **Problem**: Quick Example shows `root: 'templates'` (plural) but actual e2e templates use `root: 'template'` (singular)
   - **Location**: index.mdx line 112
   - **Fix**: Use `root: 'template'` for consistency with actual codebase, or document that this is customizable

3. **Missing Type Annotations in Quick Example**

   - **Problem**: Quick Example parameters `i` and `d` lack explicit types, while e2e templates include them: `async (i: IInquirer, d: IDeterminism)`
   - **Location**: index.mdx lines 103-117
   - **Fix**: Add explicit type annotations for clarity, or add IInquirer and IDeterminism to imports

4. **Template Variable Syntax Not Explained**
   - **Problem**: Template file example shows `var__name__` without explaining the syntax
   - **Location**: index.mdx line 122
   - **Fix**: Add brief explanation or link to Default Processor explanation

### 🟠 Other Problems

1. **Processor Name Convention Unclear**

   - **Problem**: Documentation uses `cyan/default` but e2e examples use `ernest/processor1`, `ernest/processor2`
   - **Recommendation**: Clarify naming convention - is `cyan/default` a built-in processor? What's the registration process?

2. **Plugin Names Not Verified**

   - **Problem**: Linked documentation references `cyan/init-git`, `cyan/npm-install` as plugins but these are not found in source code; e2e uses `ernest/plugin1`, `ernest/plugin2`
   - **Recommendation**: Verify these plugin names exist or document actual available plugins

3. **SDK Version Not Documented**
   - **Problem**: Documentation doesn't specify SDK version requirements; actual package is `@atomicloud/cyan-sdk` version 2.1.0
   - **Recommendation**: Add version information to documentation for API stability tracking

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### developer/plugins/explanation/indexx

# 📄 File: content/docs/developer/plugins/explanation/index.mdx

> Index file for Plugin Explanation documentation, linking to three conceptual pages about plugins: What Are Plugins, Plugins vs Processors, and Execution Order. The index itself contains no code claims, but the linked pages contain code examples and API references that need verification against the actual SDK.

### 🔴 Source Code Inaccuracies

1. **Processor return value - `writeDirectory` vs `writeDir`**

   - **Documented:** `return { directory: input.writeDirectory };` (plugins-vs-processors.mdx line 47)
   - **Actual:** `return { directory: input.writeDir };`
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:12-15` defines `CyanProcessorInput` with `writeDir: string;`, and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` shows actual usage: `return { directory: input.writeDir };`

2. **Processor example - incorrect `writeDirectory` property**
   - **Documented:** `return { directory: input.writeDirectory };` (execution-order.mdx example line 47)
   - **Actual:** `return { directory: input.writeDir };`
   - **Evidence:** Same as above - SDK defines `writeDir`, not `writeDirectory`

### 🟡 Documentation Issues

1. **Missing import for `$` shell API**

   - **Problem:** Code examples use `$` template literal without showing the import from 'bun'
   - **Location:** what-are-plugins.mdx lines 108-117, 124-134, 141-151
   - **Fix:** Add `import { $ } from 'bun';` to the code examples or note that this requires Bun runtime

2. **Missing type annotation for plugin input**

   - **Problem:** Plugin examples don't show explicit type annotation for `input` parameter
   - **Location:** what-are-plugins.mdx lines 109, 124, 141
   - **Fix:** Show the type annotation pattern: `async (input): Promise<PluginOutput>` as seen in actual implementations at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5`

3. **Plugin input properties - missing `config` type safety note**

   - **Problem:** Documentation shows `config` access but doesn't explain it's `unknown` type requiring casting
   - **Location:** what-are-plugins.mdx lines 125-127, 143-145
   - **Fix:** Add note that `config` is typed as `unknown` and needs type assertion (as shown in the examples)

4. **Processor example - `CyanFileHelper.resolveAll()` return type clarification**

   - **Problem:** Documentation shows `fileHelper.resolveAll()` but doesn't clarify that it returns `VirtualFile[]` with mutable `content` property
   - **Location:** plugins-vs-processors.mdx lines 39-45
   - **Fix:** Clarify that files returned have `content` (string), `relative` (string path), and `writeFile()` method

5. **Inconsistent processor return property name in examples**
   - **Problem:** Different examples use different property names (`writeDirectory` vs actual `writeDir`)
   - **Location:** plugins-vs-processors.mdx line 47 and execution-order.mdx
   - **Fix:** Standardize on `writeDir` which matches the SDK

### 🟠 Other Problems

1. **No mention of Bun runtime requirement**

   - **Problem:** The documentation uses Bun-specific APIs (`$` shell template literal from 'bun') without clearly stating that plugins require Bun runtime
   - **Recommendation:** Add a note explaining that plugins are executed in a Bun environment and have access to Bun's shell API

2. **Plugin execution environment unclear**

   - **Problem:** Documentation mentions "shell access" but doesn't clarify the execution context (Bun runtime, available APIs, etc.)
   - **Recommendation:** Add a section clarifying the plugin execution environment

3. **Missing `PluginOutput` import in examples**

   - **Problem:** Actual implementations import `PluginOutput` type for explicit return type annotation, but documentation examples don't show this
   - **Recommendation:** Show complete import statement: `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';`

4. **SDK package name verification**
   - **Problem:** Documentation uses `@atomicloud/cyan-sdk` which is correct
   - **Evidence:** Verified at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2`
   - **Status:** This is accurate - no change needed

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 5     |
| 🟠       | 4     |

### Key Findings

**Critical Issues:**

- The property name `writeDirectory` used in processor examples is incorrect. The actual SDK uses `writeDir`. This is a direct code accuracy issue that would cause runtime errors if users copy the code.

**Verified Accurate:**

- SDK package name: `@atomicloud/cyan-sdk` is correct
- Function names: `StartPluginWithLambda`, `StartProcessorWithLambda` are correct
- Plugin input structure: `{ directory: string, config: unknown }` is correct
- Plugin output structure: `{ directory: string }` is correct
- `CyanFileHelper` class name and `resolveAll()` method are correct
- VirtualFile has `content`, `relative`, and `writeFile()` as documented

---

### developer/plugins/explanation/what-are-plugins

<!-- source: content/docs/developer/plugins/explanation/what-are-plugins.mdx -->

# File: content/docs/developer/plugins/explanation/what-are-plugins.mdx

> Documentation for plugins explains their purpose, input/output, and usage patterns. The document has code examples that use Bun shell syntax (`$`), but the actual type names and import patterns have discrepancies with the SDK source code.

### Source Code Inaccuracies

(for each: Documented | Actual | file:line evidence)

1. **Type Name Discrepancy - PluginInput**

   - **Documented**: `PluginInput` interface is used throughout (lines 48-51, code examples)
   - **Actual**: SDK exports `CyanPluginInput`, not `PluginInput`
   - **Evidence**: `helium/sdks/node/src/main.ts:193` exports `CyanPluginInput` as type, `helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` defines `CyanPluginInput`

2. **Import Pattern - Type-only Export**

   - **Documented**: Code examples don't show `type` keyword for type imports (lines 108-117, 123-134, 140-151)
   - **Actual**: `PluginOutput` and `CyanPluginInput` are type-only exports, should be imported with `import type` or inline `type` keyword
   - **Evidence**: `helium/sdks/node/src/main.ts:183-207` uses `export type { ... PluginOutput, CyanPluginInput ... }`

3. **Real Plugin Implementation Pattern**
   - **Documented**: Plugins use Bun shell syntax (`await $`git init`.quiet()`) for all operations
   - **Actual**: Real plugins in the codebase use Node.js `fs` module directly for file operations, not shell commands
   - **Evidence**: `iridium/e2e/plugin1/index.ts:1-22` uses `import fs from 'node:fs'` and `fs.writeFileSync()`, no Bun shell usage

### Documentation Issues

(for each: Problem | Location | Fix)

1. **Type Import Not Shown**

   - **Problem**: Documentation uses `PluginInput` type in examples but doesn't show proper import. The import statement `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk'` doesn't include the type.
   - **Location**: Lines 108-117 (Setup Plugin), 123-134 (Formatter Plugin), 140-151 (Build Plugin)
   - **Fix**: Either add `import type { PluginInput } from '@atomicloud/cyan-sdk'` or use inline type import. Also, the type should be `CyanPluginInput` to match SDK.

2. **Inconsistent Type Naming**

   - **Problem**: Documentation uses `PluginInput` but SDK exports `CyanPluginInput`. This creates confusion and potential import errors.
   - **Location**: Throughout the document, especially in code examples
   - **Fix**: Either update documentation to use `CyanPluginInput` (matching SDK) or note that `PluginInput` is a simplified alias

3. **Bun Shell Dependency Not Explicit**

   - **Problem**: Code examples use `$` from Bun shell without explaining this is a Bun-specific feature, not part of the Cyan SDK
   - **Location**: Lines 112-113, 129, 146
   - **Fix**: Add explicit `import { $ } from 'bun';` to code examples (some examples have this, but not all), or note that Bun shell is optional and alternatives exist

4. **Missing Return Type Annotation**
   - **Problem**: Lambda function examples don't explicitly show return type, making it unclear that `PluginOutput` must be returned
   - **Location**: Lines 108-117, 123-134, 140-151
   - **Fix**: Add explicit `: Promise<PluginOutput>` return type annotation to lambda functions for clarity

### Other Problems

(for each: Problem | Recommendation)

1. **Diagram Inconsistency with Helium Docs**

   - **Problem**: The sequence diagram shows "FS->>PL: Pass directory path" and "PL->>FS: Run commands/modify files" but Helium docs describe plugins as operating on the entire output directory, not receiving files individually
   - **Recommendation**: Update diagram to show that plugins receive the full directory path and operate on the entire directory, not individual file operations

2. **Plugin Output Description Incomplete**

   - **Problem**: The output section (line 70-71) only mentions `directory` return, but doesn't explain why (pipeline continuity)
   - **Recommendation**: Add context that the directory is returned for pipeline chaining when multiple plugins run in sequence

3. **Port Information Not Mentioned**

   - **Problem**: Plugins run an HTTP server on port 5552, but this is not mentioned in the documentation
   - **Recommendation**: Add note about the HTTP server aspect of plugins (visible in `helium/sdks/node/src/main.ts:65`)

4. **Cross-reference Link Not Verified**
   - **Problem**: Link to `/developer/plugins/explanation/plugins-vs-processors` exists but that page has different code example using `writeDirectory` for processors, which may not match actual SDK field names
   - **Recommendation**: Verify cross-references match actual SDK implementation

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 3     |
| Documentation Issues     | 4     |
| Other Problems           | 4     |

---

### developer/plugins/how-to/push-to-registry

<!-- source: content/docs/developer/plugins/how-to/push-to-registry.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/push-to-registry.mdx

> This document describes how to push plugin Docker images to a container registry. The documentation provides general Docker guidance but has several issues: it uses `cyan-plugin-` prefix suggestion that doesn't match actual system usage, the `cyan.yaml` configuration examples are inconsistent with actual source code patterns, and the template configuration examples use a format that doesn't match how plugins are actually referenced in the CyanPrint system.

### 🔴 Source Code Inaccuracies

1. **Naming Convention Inconsistency**

   - Documented: `username/cyan-plugin-my-plugin:latest` (line 30) - suggests using `cyan-plugin-` prefix
   - Actual: The source code uses `username/name` or `username/name:version` format. The `parseCyanReference` function in `boron/docker_executor/merger.go:84-100` parses references as `username/name[:version]` only. The `cyan-plugin-` prefix is used internally for container naming (e.g., `cyan-plugin-<uuid>-<session>`), not for Docker image naming.
   - Evidence: `boron/docker_executor/merger.go:84-100` shows the parsing logic only expects `user/name` or `user/name:version` format.

2. **Template Plugin Configuration Format**

   - Documented: `name: org/my-plugin:1.0.0` in template's cyan.yaml (lines 123-134)
   - Actual: The source code shows `CyanPluginReq` structure has `Name` as a string field that gets parsed by `parseCyanReference`. While the format `org/name:version` is technically correct, the documentation implies the name includes the full Docker registry path, but the actual system uses a separate registry (Zinc) to resolve plugin references to Docker images. Plugins are referenced by `username/name[:version]` format, not by Docker image reference directly.
   - Evidence: `boron/docker_executor/model.go:10-13` shows `CyanPluginReq` structure; `boron/docker_executor/registry.go:205-258` shows how plugins are resolved via the Zinc registry API to get `DockerReference` and `DockerTag`.

3. **Registry System Not Explained**
   - Documented: Push directly to Docker Hub, GHCR, or private registry (lines 28-69)
   - Actual: The CyanPrint system uses a separate registry service (Zinc) to store plugin metadata including `DockerReference` and `DockerTag`. The Docker image is pushed to a container registry, but plugin metadata must also be registered in the Zinc registry for the system to find and use it. The documentation doesn't explain this two-part registration process.
   - Evidence: `boron/docker_executor/registry.go:81-145` shows the `getPluginVersion` functions that query `/api/v1/Plugin/slug/username/name/versions/version` endpoint.

### 🟡 Documentation Issues

1. **Missing Registry Registration Step**

   - Problem: The documentation only covers pushing Docker images to a container registry but doesn't explain that plugin metadata must also be registered in the CyanPrint/Zinc registry. Without this step, the system cannot discover or use the plugin.
   - Location: Entire "Push to Registry" section (lines 20-83)
   - Fix: Add a section explaining the Zinc registry and how plugin metadata (`DockerReference`, `DockerTag`) must be registered for the system to resolve plugin references.

2. **Misleading Naming Convention Table**

   - Problem: The naming convention table (lines 89-93) shows patterns that don't align with the actual system. The `cyan-plugin-` prefix suggestion is misleading as it's used internally for container names, not for Docker image names.
   - Location: Lines 85-97
   - Fix: Update the naming convention to show `username/plugin-name` format and remove the `cyan-plugin-` prefix recommendation. Explain that container names are auto-generated by the system.

3. **Inconsistent Version Reference Format**

   - Problem: The versioning section shows `org/my-plugin:1` as "Latest 1.x.x" (line 132), but the source code treats version as a string that's passed directly to the registry API. The system doesn't perform semantic version range matching - it queries for specific versions or latest.
   - Location: Lines 99-134
   - Fix: Clarify that version references are exact matches or "latest" only. Remove the suggestion that `org/plugin:1` resolves to "latest 1.x.x".

4. **Missing cyan.yaml Required Fields Context**

   - Problem: The documentation shows a `cyan.yaml` example in templates (lines 123-134) but doesn't explain how the plugin's own `cyan.yaml` relates to registration. The plugin's `cyan.yaml` has different fields than what's shown for template configuration.
   - Location: Lines 119-134
   - Fix: Distinguish between the plugin's `cyan.yaml` (metadata) and the template's plugin configuration format. Reference the Plugin cyan.yaml documentation.

5. **Missing LABEL Requirement**
   - Problem: The documentation doesn't mention the required `LABEL cyanprint.dev=true` in the Dockerfile. Without this label, the Docker client won't recognize the image as a CyanPrint component.
   - Location: Prerequisites and Build sections
   - Fix: Add prerequisite or note about the required Dockerfile LABEL directive. Reference the Dockerfile documentation.

### 🟠 Other Problems

1. **GitHub Actions Example May Be Incomplete**

   - Problem: The GitHub Actions workflow example (lines 140-177) pushes to GHCR but doesn't show how to register the plugin with the Zinc registry. This would result in an image that's pushed but not discoverable by the CyanPrint system.
   - Recommendation: Add a step to register the plugin metadata with the CyanPrint/Zinc registry, or note that this is a Docker-only example.

2. **No Verification Against Actual Registry**

   - Problem: The "Verify the Push" section (lines 73-81) only verifies the Docker pull, not whether the CyanPrint system can actually use the plugin.
   - Recommendation: Add verification steps that test the plugin through the CyanPrint system, such as using it in a template generation.

3. **README Template Shows Wrong Config Format**
   - Problem: The README example (lines 209-232) shows `plugins:` with `- name: org/my-plugin:1.0.0` but this is template configuration, not plugin documentation format. Plugin README should document available config options, not how to add the plugin to a template.
   - Recommendation: Focus the README example on documenting plugin configuration options and their effects, not on template syntax.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/processors/how-to/lazy-load-filesx

<!-- source: content/docs/developer/processors/how-to/lazy-load-files.mdx -->

# 📄 File: content/docs/developer/processors/how-to/lazy-load-files.mdx

> Documentation describes lazy loading files using `fileHelper.get()` but contains multiple API inaccuracies. The documented method names and signatures do not match the actual SDK implementation.

### 🔴 Source Code Inaccuracies

1. **VirtualFileReference.load() method does not exist**

   - Documented: `const content = await ref.load();` (line 34) - async method returning `Promise<string>`
   - Actual: Method is named `readFile()` and is synchronous, returning `VirtualFile` object
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:26-29` shows `readFile(): VirtualFile { const content = fs.readFileSync(this.read, 'utf-8'); return new VirtualFile(...); }`

2. **VirtualFileReference.writeFile(content) signature is wrong**

   - Documented: `ref.writeFile(transformed);` accepts content parameter (line 37)
   - Actual: `writeFile()` is a method on `VirtualFile` class, not `VirtualFileReference`, and takes no parameters - content is already on the object
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54` shows `writeFile(): void` on `VirtualFile` class

3. **VirtualFileReference.copy() method does not exist**

   - Documented: `ref.copy();` copies file without loading (line 40)
   - Actual: No `copy()` method exists on `VirtualFileReference`. Copying is done via `fileHelper.copy(glob)` on CyanFileHelper
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - VirtualFileReference class only has `read`, `write` getters and `readFile()` method

4. **VirtualFileReference.getSize() method does not exist**

   - Documented: `const size = await ref.getSize();` (line 93)
   - Actual: No `getSize()` method exists on `VirtualFileReference`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30` - VirtualFileReference class has no such method

5. **CyanGlob parameter structure is incomplete**

   - Documented: `fileHelper.get({ root: 'templates', glob: '**/*' })` (line 26)
   - Actual: CyanGlob interface requires `exclude: string[]` and `type: GlobType` properties, though these may be auto-filled by the processor runtime
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11` shows `interface CyanGlob { root?: string | null; glob: string; exclude: string[]; type: GlobType; }`

6. **VirtualFileReference properties table incomplete**
   - Documented: Only lists `relative: string` property
   - Actual: Also has `baseRead: string`, `baseWrite: string`, and getter properties `read: string`, `write: string`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-24`

### 🟡 Documentation Issues

1. **Example code will not compile/run**

   - Problem: All three code examples use non-existent methods (`ref.load()`, `ref.copy()`, `ref.getSize()`, `ref.writeFile()`)
   - Location: Lines 21-46, 64-83, 87-109
   - Fix: Rewrite examples to use correct API: `ref.readFile()` returns `VirtualFile`, then access `content` property and call `writeFile()` on that object

2. **Method return types in table are incorrect**

   - Problem: Table states `load()` returns `Promise<string>` and `writeFile(content)` returns `void`
   - Location: Lines 54-60 (VirtualFileReference Methods table)
   - Fix: Update to reflect actual API - `readFile()` returns `VirtualFile` (synchronous), and `writeFile()` is on `VirtualFile` not `VirtualFileReference`

3. **Missing VirtualFile class documentation**
   - Problem: The workflow requires using both VirtualFileReference and VirtualFile classes, but VirtualFile is not documented
   - Location: Entire document
   - Fix: Add documentation for VirtualFile class with its `content` property and `writeFile()` method

### 🟠 Other Problems

1. **Lazy loading is not truly lazy**

   - Problem: The documented approach suggests memory efficiency, but `readFile()` uses `fs.readFileSync` which loads the entire file into memory synchronously
   - Recommendation: Clarify that "lazy" refers to deferred loading by the developer, not streaming/lazy I/O. For truly memory-efficient large file handling, use `readAsStream()` instead

2. **Correct workflow should be documented**
   - Problem: The actual workflow is: `VirtualFileReference.readFile()` -> `VirtualFile` with `content` property -> `VirtualFile.writeFile()`
   - Recommendation: Show the correct two-step process where you get a VirtualFile from readFile(), access its content, modify it, and call writeFile() on the VirtualFile object

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### developer/templates/how-to/add-pluginsx

<!-- source: content/docs/developer/templates/how-to/add-plugins.mdx -->

# 📄 File: content/docs/developer/templates/how-to/add-plugins.mdx

> Documentation for adding plugins to Cyan templates, covering configuration in cyan.yaml and template code, with examples for git initialization and dependency installation plugins.

### 🔴 Source Code Inaccuracies

1. **Plugin names `cyan/init-git` and `cyan/npm-install` do not exist in source code**

   - **Documented**: `cyan/init-git` (for git initialization with `commitMessage` and `branch` config) and `cyan/npm-install` (for dependency installation with `packageManager` config)
   - **Actual**: No plugins named `cyan/init-git` or `cyan/npm-install` exist in any of the source paths (argon, boron, helium, iridium, zinc). The actual plugins in the codebase use names like `ernest/plugin1`, `ernest/plugin2`
   - **Evidence**: Searched all source paths with `grep -r "cyan/init-git|cyan/npm-install"` - no matches found. Actual plugins are in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/index.ts` with names like `ernest/plugin1`

2. **Plugin config options are fabricated**

   - **Documented**: `commitMessage`, `branch` for init-git; `packageManager`, `dev` for npm-install
   - **Actual**: The actual `CyanPlugin` interface only has `name: string` and `config: unknown` - there are no predefined config schemas
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:13-16` - `interface CyanPlugin { name: string; config: unknown; }`

3. **Plugin input/output structure differs from implied usage**

   - **Documented**: Implies plugins receive config with properties like `commitMessage`, `packageManager`
   - **Actual**: `CyanPluginInput` only has `directory: string` and `config: unknown` - plugins receive the output directory and arbitrary config
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts:1-4`

4. **cyan.yaml format in documentation differs from actual format**
   - **Documented**: Shows plugins defined directly in cyan.yaml with `plugins:` key at root level with objects containing `name` and `config`
   - **Actual**: Actual cyan.yaml files have different structure - plugins can be specified as simple string arrays like `plugins: ['ernest/plugin1']`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml` - shows `plugins: ['ernest/plugin1']` as simple string array

### 🟡 Documentation Issues

1. **Hypothetical plugins presented as built-in**

   - **Problem**: The documentation presents `cyan/init-git` and `cyan/npm-install` as if they are official/built-in plugins, but they do not exist in the codebase
   - **Location**: Lines 52-74, throughout the document
   - **Fix**: Either remove references to these plugins, mark them as hypothetical examples, or create actual implementations

2. **Link to Plugin Development may be unclear**

   - **Problem**: The callout at line 204-206 references `/developer/plugins` which exists but is a separate section - the link text "Plugin Development" could be clearer
   - **Location**: Line 204-206
   - **Fix**: Clarify the link destination or ensure the path resolves correctly

3. **Inconsistent plugin name format**

   - **Problem**: Documentation uses `cyan/` prefix for plugins (e.g., `cyan/init-git`, `cyan/npm-install`) but actual codebase uses organization prefixes (e.g., `ernest/plugin1`)
   - **Location**: Throughout document
   - **Fix**: Either explain the naming convention or use realistic example names

4. **Custom plugin example uses made-up config structure**
   - **Problem**: The `myorg/setup-tooling` example shows `installDeps`, `runLint`, `runFormat` config options that have no basis in actual plugin implementations
   - **Location**: Lines 76-87
   - **Fix**: Use config options that match actual plugin implementations or clearly mark as examples

### 🟠 Other Problems

1. **Plugin execution order verified**

   - **Problem**: Documentation claims plugins execute sequentially in order - this IS verified in source code
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/features/06-plugin-lifecycle.md:14-19` confirms plugins run sequentially, one at a time

2. **Missing reference to actual plugin implementations**

   - **Problem**: Documentation doesn't link to or reference any actual working plugin examples from the codebase
   - **Recommendation**: Add references to actual plugin implementations in iridium/e2e

3. **Template code examples may not compile**
   - **Problem**: The TypeScript examples use `@atomicloud/cyan-sdk` imports but the actual SDK export structure differs (exports `StartPluginWithLambda`, `StartTemplateWithLambda` from main.ts)
   - **Recommendation**: Verify import paths match actual SDK structure

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### developer/templates/how-to/conditional-filesx

<!-- source: content/docs/developer/templates/how-to/conditional-files.mdx -->

# File: content/docs/developer/templates/how-to/conditional-files.mdx

> Documentation for conditionally including files in templates. The code examples use valid SDK patterns but some structural details differ from actual implementation.

### Source Code Inaccuracies

1. **CyanGlob interface structure - root is optional** | Documented shows `{ root: 'templates/base', glob: '**/*', exclude: [], type: GlobType.Template }` with `root` always present | Actual interface at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11` shows `root?: string | null` (optional). The documented examples are correct and showing `root` explicitly is better practice.

2. **Cyan return type missing plugins field** | Documented at lines 30-36 shows `return { processors: [...] }` without `plugins` | Actual `Cyan` interface at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27` requires both `processors: CyanProcessor[]` AND `plugins: CyanPlugin[]`. The Basic Pattern example omits `plugins` which is required.

3. **Import statement omits type imports used in examples** | Documented at line 42 shows `import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';` | Actual templates at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:1-2` import types separately:
   ```ts
   import { GlobType, StartTemplateWithLambda } from '@atomicloud/cyan-sdk';
   import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';
   ```
   If users want explicit parameter typing `(i: IInquirer, d: IDeterminism)`, they need these type imports.

### Documentation Issues

1. **Missing plugins in return object** | Lines 30-36 (Basic Pattern) and lines 103-117 (Complete Example) | Both return `{ processors: [...] }` without `plugins`. The actual SDK requires `plugins` array. Fix: Add `plugins: []` to all return statements, matching actual SDK interface.

2. **Parameter type annotations not shown** | Lines 44, 105 | Documentation shows `async (i, d) =>` without type annotations. Real templates use `async (i: IInquirer, d: IDeterminism) =>`. Fix: Either add type annotations or add a note explaining that `i` is `IInquirer` and `d` is `IDeterminism`.

3. **Directory structure prefix not explained** | Lines 125-149 | Shows `cyan/templates/` structure but doesn't explain that `root` paths are relative to the `cyan/` directory in the template package. Fix: Add explanation of path resolution.

4. **Exclude Patterns section uses different approach** | Lines 179-196 | Shows single `files.push` with conditional excludes, which differs from the earlier pattern of multiple conditional pushes. Fix: Add a note explaining this is an alternative approach for different use cases.

5. **Template vs Copy type not explained** | Lines 90, 170 use `GlobType.Copy` | No explanation of when to use `GlobType.Template` vs `GlobType.Copy`. The enum at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` defines `Template = 0` and `Copy = 1`. Fix: Add explanation that `Template` processes files through the template engine (variable substitution) while `Copy` copies files as-is.

### Other Problems

1. **No real-world conditional example in source code** | The documentation shows extensive conditional file inclusion patterns, but actual e2e templates in iridium (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template*/cyan/index.ts`) do not use conditional file inclusion. All return a single static `files` array. Recommendation: Add a real conditional example to iridium e2e tests to validate the documented patterns.

2. **Array spread vs push pattern choice not explained** | "Using Array Spread" section (lines 155-172) vs "Complete Example" (lines 63-117) show different patterns with no guidance. Recommendation: Add brief guidance on when to use each approach (spread for functional style, push for imperative).

3. **Related links should be verified** | Lines 199-202 reference `/developer/templates/tutorials/03-changing-glob`, `/developer/templates/tutorials/full-example`, and `/developer/templates/reference/sdk/globbing`. These paths should be verified to exist and contain accurate information.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 3     |
| Documentation Issues     | 5     |
| Other Problems           | 3     |

---

### developer/templates/reference/indexx

<!-- source: content/docs/developer/templates/reference/index.mdx -->

# 📄 File: content/docs/developer/templates/reference/index.mdx

> This file is a template reference index page that links to SDK documentation and provides quick reference tables. Multiple claims in this document are inaccurate when compared to the actual SDK source code in helium/sdks/node.

### 🔴 Source Code Inaccuracies

1. **`GlobType.Ignore` does not exist**

   - **Documented**: `GlobType.Ignore` - "Skip entirely" is a valid file processing type (line 61)
   - **Actual**: The SDK only defines `GlobType.Template = 0` and `GlobType.Copy = 1`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`:
     ```typescript
     enum GlobType {
       Template = 0,
       Copy = 1,
     }
     ```
     Also confirmed in Rust implementation at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:4-7`

2. **`dateSelect()` returns `string`, not `Date`**

   - **Documented**: `dateSelect()` | `Date` | Date selection (line 53)
   - **Actual**: `dateSelect()` returns `Promise<string>` in both the interface and implementation
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26`:
     ```typescript
     dateSelect(q: DateQ): Promise<string>;
     dateSelect(q: string, id: string, help?: string | null): Promise<string>;
     ```

3. **`IDefine`/`IDeterminism` interface methods are incorrect in linked documentation**

   - **Documented** (in linked sdk/index.mdx): `d.uuid()`, `d.timestamp()`, `d.seq()` methods on IDefine
   - **Actual**: The `IDeterminism` interface only has a `get(key: string, origin: () => string): string` method
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`:
     ```typescript
     interface IDeterminism {
       get(key: string, origin: () => string): string;
     }
     ```

4. **Type names in linked documentation don't match SDK**
   - **Documented**: `IProcessor`, `IFileGroup`, `ICyanConfig` type names (in linked cyan-config.mdx)
   - **Actual**: SDK uses `CyanProcessor`, `CyanGlob`, `Cyan` type names
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-27`:
     ```typescript
     interface CyanGlob { ... }
     interface CyanPlugin { ... }
     interface CyanProcessor { ... }
     interface Cyan { ... }
     ```

### 🟡 Documentation Issues

1. **Inconsistent return type for `dateSelect()` in Quick Reference table**

   - **Problem**: The table claims `dateSelect()` returns `Date`, but actual SDK returns `string`
   - **Location**: Line 53 (Question Types table)
   - **Fix**: Change `Date` to `string` in the Returns column

2. **Non-existent `GlobType.Ignore` in File Processing table**

   - **Problem**: The File Processing table lists `GlobType.Ignore` as a valid option, but this doesn't exist in the SDK
   - **Location**: Lines 57-61 (File Processing table)
   - **Fix**: Remove the `GlobType.Ignore` row from the table entirely

3. **SDK Reference links propagate errors**

   - **Problem**: Links to `/developer/templates/reference/sdk/inquirer`, `/developer/templates/reference/sdk/globbing`, `/developer/templates/reference/sdk/types` contain inaccurate information that propagates errors
   - **Location**: Lines 21-24 (SDK Reference section)
   - **Fix**: These linked files need correction to match actual SDK implementation

4. **Entry Point example missing type imports**
   - **Problem**: The example only imports `StartTemplateWithLambda` and `GlobType`, but doesn't show `IInquirer` and `IDeterminism` which are the actual parameter types used
   - **Location**: Lines 30-31 entry point code block
   - **Fix**: Show the full import pattern:
     ```typescript
     import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';
     import type { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';
     ```

### 🟠 Other Problems

1. **Version compatibility may need verification**

   - **Problem**: Documentation claims SDK 2.x with CyanPrint CLI 2.x and Node.js 20+ (in linked sdk/index.mdx)
   - **Recommendation**: Verify current SDK version (helium/sdks/node/package.json shows 2.1.0) matches documented compatibility

2. **Processor name `cyan/default` could be clearer**

   - **Problem**: The quick reference example uses `name: 'cyan/default'` without explaining this is the built-in default processor
   - **Recommendation**: Add a note explaining `cyan/default` is the built-in default processor, or use a more realistic custom processor name

3. **Entry Point example lacks type annotations**
   - **Problem**: The example shows `async (i, d) =>` without type annotations, which works but differs from e2e test templates that use explicit types
   - **Recommendation**: Consider adding type annotations for better developer experience and IDE support: `async (i: IInquirer, d: IDeterminism) =>`

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### developer/templates/tutorials/02-adding-variablesx

<!-- source: content/docs/developer/templates/tutorials/02-adding-variables.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/02-adding-variables.mdx

> Tutorial covering variable substitution using GlobType.Template, defining variables in processor config, and using the var**name** syntax with the default processor. The core concepts are accurate, but several details don't match the actual source code implementation.

### 🔴 Source Code Inaccuracies

1. **Dockerfile path mismatch**

   - **Documented**: `docker build -f cyan/template.Dockerfile -t my-first-template:dev .` (line 97)
   - **Actual**: Actual e2e templates use `cyan/Dockerfile`, not `cyan/template.Dockerfile`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile` exists as `Dockerfile`, not `template.Dockerfile`. The same pattern is seen in template2 and template3.

2. **Processor name `cyan/default` does not exist as an implemented processor**

   - **Documented**: Uses `name: 'cyan/default'` as the processor name (lines 64, 86)
   - **Actual**: No processor named `cyan/default` exists in the source code. Actual templates use specific processor names like `ernest/processor1`, `ernest/processor2`, or simple names like `hello`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:37` uses `name: 'ernest/processor1'`. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:143` uses `name: 'hello'`. No `cyan/default` processor implementation found in any source path.

3. **Template directory path mismatch**

   - **Documented**: Uses `root: 'templates'` (line 18, 66) and `cyan/templates/README.md` (line 43)
   - **Actual**: Actual e2e templates use `root: 'template'` (singular) and place files in `template/` directory
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:43` uses `root: 'template'`. The directory is `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/template/` not `templates/`

4. **Variable syntax table row 2 is misleading**
   - **Documented**: Table claims `var__author__` is for "Nested variable access" (line 87)
   - **Actual**: `var__author__` is simple variable substitution, not nested. Nested access would use dot notation like `var__user.name__`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/template/profile.yaml:1-9` shows only flat variable substitution with no nested access

### 🟡 Documentation Issues

1. **Example code uses different project structure than actual templates**

   - **Problem**: The complete example shows `templates/` directory but actual e2e templates use `template/` (singular)
   - **Location**: Lines 43, 66, 83-84
   - **Fix**: Either update the documentation to use `template/` or note that the directory name is configurable

2. **Project structure example missing from this tutorial**

   - **Problem**: Unlike Tutorial 1, this tutorial doesn't show where to create the README.md file. It references `cyan/templates/README.md` without explaining the directory structure
   - **Location**: Line 43
   - **Fix**: Add a step showing how to create the templates directory and README.md file

3. **Ambiguous description of default processor**

   - **Problem**: The documentation states "the default processor uses `var__name__` syntax" but doesn't clarify that `cyan/default` is a conceptual reference to a processor pattern, not an actual registered processor
   - **Location**: Lines 41-42, 82-91
   - **Fix**: Clarify that `cyan/default` refers to the default processor pattern (Eta templating with var\_\_ \_\_ delimiters) that users implement, or reference an actual built-in processor if one exists

4. **Missing explanation of vars relationship to questions**
   - **Problem**: Tutorial shows hardcoded vars (`name: 'my-project'`) but doesn't explain that in real templates, vars typically come from user answers to questions (covered in Tutorial 4)
   - **Location**: Lines 29-36
   - **Fix**: Add a brief note that vars can be hardcoded for testing or dynamically set from user input

### 🟠 Other Problems

1. **Variable syntax table is incomplete**

   - **Problem**: The Variable Syntax table (lines 84-87) shows only `var__name__` and `var__author__` but doesn't explain other Eta features like conditionals or loops
   - **Recommendation**: Either expand the table to show more syntax options or link to full Eta documentation

2. **No explanation of how the var\_\_ \_\_ delimiter is configured**

   - **Problem**: The documentation doesn't explain that the delimiter is configurable in the processor config via `parser.varSyntax`
   - **Recommendation**: Add a note showing that the delimiter can be customized:
     ```ts
     config: {
       parser: { varSyntax: [['var__', '__']] },
       vars: { ... }
     }
     ```

3. **Test command may fail without proper setup**
   - **Problem**: The test command `cyanprint create my-first-template:dev ../test-output` assumes CyanPrint CLI is installed and configured, but prerequisites only mention it briefly in Tutorial 1
   - **Recommendation**: Add a brief reminder about CLI installation or link to setup instructions

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### user/tutorials/get-startedx

<!-- source: content/docs/user/tutorials/get-started.mdx -->

# 📄 File: content/docs/user/tutorials/get-started.mdx

> Quick-start tutorial for creating a first CyanPrint project in under a minute. Documents installation via Nix, Brew, Scoop, APT, YUM and a simple project creation example using the `atomi/nix-init` template.

### 🔴 Source Code Inaccuracies

1. **Scoop Installation for Windows - Deprecated Platform**

   - **Documented**: `scoop bucket add atomi https://github.com/AtomiCloud/scoop-bucket.git` and `scoop install atomi/cyanprint` (lines 32-34)
   - **Actual**: Windows support was deprecated in v1.7.0. The goreleaser.yaml only builds for `linux` and `darwin` (macOS). No Windows binaries are produced, and there is no `scoops` section in goreleaser.yaml.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Changelog.md:214` - "deprecate windows support"; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.goreleaser.yaml:16-21` - only lists `linux` and `darwin` under `goos`

2. **APT Repository URL Case Mismatch**

   - **Documented**: `https://apt.fury.io/AtomiCloud/` (capitalized "AtomiCloud") (line 40)
   - **Actual**: The fury.io push script pushes to `atomicloud` (lowercase). Fury.io repositories are case-sensitive.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/scripts/fury.sh:13` - `curl -F package=@"$file" "https://${FURY_TOKEN}@push.fury.io/atomicloud/"` (lowercase)

3. **YUM Repository URL is Correct**
   - **Documented**: `baseurl=https://yum.fury.io/atomicloud/` (lowercase) (line 50)
   - **Actual**: This matches the fury.sh script which pushes to `atomicloud/` (lowercase)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/scripts/fury.sh:13` - correct lowercase used

### 🟡 Documentation Issues

1. **Scoop Tab Missing Deprecation Notice**

   - **Problem**: The Scoop tab is presented without any warning that Windows is no longer supported. Users attempting to use Scoop will fail since no Windows binaries are published.
   - **Location**: Lines 29-35 (Scoop tab)
   - **Fix**: Either remove the Scoop tab entirely or add a clear deprecation notice stating that Windows support was deprecated in v1.7.0

2. **Template Reference Example Omits Version**

   - **Problem**: The example `cyanprint create atomi/nix-init my-project` (line 62) omits the version component. While the CLI defaults to latest when version is omitted, new users may not understand the versioning system from this example alone.
   - **Location**: Line 62
   - **Fix**: Add a note explaining that version is optional and defaults to latest, or show both examples: `cyanprint create atomi/nix-init my-project` (latest) and `cyanprint create atomi/nix-init:1 my-project` (specific version)

3. **Inconsistent Tab Grouping vs install.mdx**

   - **Problem**: `get-started.mdx` uses `groupId="installer"` with items `['Nix', 'Brew', 'Scoop', 'APT', 'YUM']` (5 tabs), while `install.mdx` uses items `['Nix Shell', 'Nix Profile', 'Brew', 'Scoop', 'APT', 'YUM']` (6 tabs with Nix split into two). This inconsistency may confuse users navigating between pages.
   - **Location**: Line 14
   - **Fix**: Standardize the tab group structure across all documentation files

4. **APT Commands Simplified vs install.mdx**

   - **Problem**: `get-started.mdx` shows simpler APT commands without `software-properties-common` prerequisite and `-y` flags, while `install.mdx` includes them. This could cause issues for users on fresh systems.
   - **Location**: Lines 39-42
   - **Fix**: Either add the prerequisite step or add a note linking to the full installation guide

5. **Template Example Cannot Be Verified as Published**
   - **Problem**: While the template `atomi/nix-init` exists in the source repository (`/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan.yaml` with `username: atomi` and `name: nix-init`), there is no guarantee it is actually published to the production registry.
   - **Location**: Line 62
   - **Fix**: Verify the template is published to the registry, or add a troubleshooting note explaining what to do if a template is not found

### 🟠 Other Problems

1. **Missing Prerequisites Section**

   - **Problem**: The tutorial jumps straight to installation without mentioning prerequisites (e.g., Docker for the coordinator service, network access to registry.cyanprint.dev).
   - **Recommendation**: Add a brief "Prerequisites" section mentioning any system requirements like Docker or network connectivity.

2. **Homebrew Tap Name Should Be Verified**

   - **Problem**: Documentation shows `brew install AtomiCloud/tap/cyanprint` which should resolve to `AtomiCloud/homebrew-tap` repository. This appears correct based on goreleaser.yaml but should be verified.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.goreleaser.yaml:48-52` shows `repository: { owner: AtomiCloud, name: homebrew-tap }`
   - **Recommendation**: Verify the homebrew-tap repository exists at github.com/AtomiCloud/homebrew-tap with the cyanprint formula

3. **No Windows Support Documented Anywhere**
   - **Problem**: The documentation implies cross-platform support with Scoop, but the actual CLI doesn't build for Windows. This affects both this file and install.mdx.
   - **Recommendation**: Either add Windows support (update goreleaser.yaml to include `windows` in `goos` and add a `scoops` section) or remove Windows-related installation instructions from all documentation

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### contributor/architecture/overviewx

# 📄 File: content/docs/contributor/architecture/overview.mdx

> This document provides a high-level overview of the CyanPrint system architecture, including component relationships, data flow diagrams, and execution environment details. It describes the distributed template execution platform consisting of CLI (Iridium), Web UI (Argon), Registry API (Zinc), Execution Coordinator (Boron), and SDKs (Helium).

### 🔴 Source Code Inaccuracies

1. **CLI Command Reference**

   - **Documented**: `cyan print init my-project`
   - **Actual**: The CLI uses `cyan create` command (no `print init` subcommand exists)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46` - The Commands enum shows `Create`, `Update`, `Push`, and `Daemon` subcommands. There is no `print` or `init` command.

2. **Argon Repository Name Mismatch**

   - **Documented**: The project is called "Argon" in the Web UI component table
   - **Actual**: The package.json and README.md refer to the project as "carbon" and "Sulfone Carbon"
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:2` shows `"name": "carbon"` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.md:1` shows "# Sulfone Carbon"

3. **SDK Languages in Diagram**
   - **Documented**: The architecture diagram shows TypeScript SDK, Python SDK, and .NET SDK as separate boxes with dotted lines between them
   - **Actual**: The SDKs are indeed in separate directories (node, python, dotnet) but the dotted lines suggesting cross-language relationships may be misleading. Each SDK is independent.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/` contains `node/`, `python/`, `dotnet/` directories. The node SDK package.json at line 2 shows `"name": "@atomicloud/cyan-sdk"`, python pyproject.toml at line 2 shows `name = "cyanprintsdk"`.

### 🟡 Documentation Issues

1. **Missing CLI Command Documentation**

   - **Problem**: The sequence diagram shows `cyan print init my-project` but the actual CLI doesn't have this command structure
   - **Location**: Line 89 in the sequence diagram
   - **Fix**: Update to show the correct command structure, e.g., `cyan create user/template-ref my-project`

2. **Inconsistent Project Naming**

   - **Problem**: Documentation refers to "Argon" but the actual codebase is named "Carbon"
   - **Location**: Component Overview table, line 59
   - **Fix**: Either update the documentation to use "Carbon" or note that "Argon (also known as Carbon)" for clarity

3. **Missing Daemon Command Documentation**

   - **Problem**: The CLI has a `daemon` command that is not mentioned in the architecture overview
   - **Location**: Missing from CLI description
   - **Fix**: Add mention of the `daemon` command that allows local coordinator execution

4. **Container Types Not Fully Explained**
   - **Problem**: The architecture diagram shows Template Container, Processor Container, and Plugin Container but doesn't explain their distinct roles
   - **Location**: Lines 20-22 in Mermaid diagram
   - **Fix**: Add brief explanation of what each container type does (Template runs the template logic, Processor transforms files, Plugin provides additional functionality)

### 🟠 Other Problems

1. **Outdated Registry Default URL**

   - **Problem**: The default registry endpoint is `https://api.zinc.sulfone.raichu.cluster.atomi.cloud` which appears to be a development/cluster-specific URL
   - **Recommendation**: Consider documenting that this is configurable and what the production URL would be

2. **Mermaid Diagram Complexity**

   - **Problem**: The high-level architecture diagram includes SDK relationships (dotted lines between TS, Python, C#) that may confuse readers about how these SDKs interact
   - **Recommendation**: Either remove the dotted lines or add a note explaining what relationship they represent

3. **Missing Webhooks/Events Implementation Details**
   - **Problem**: The Communication Patterns diagram mentions Webhooks and Events but these aren't documented anywhere in the actual codebase
   - **Recommendation**: Either remove these from the diagram or add documentation about their implementation status

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### developer/plugins/explanation/plugins-vs-processorsx

# File: content/docs/developer/plugins/explanation/plugins-vs-processors.mdx

> Documentation comparing plugins and processors in the CyanPrint generation pipeline, explaining their roles, timing, and use cases.

### Source Code Inaccuracies

1. **Processor Example - `writeDirectory` property name is incorrect**

   - **Documented**: `return { directory: input.writeDirectory };`
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:12` defines `writeDir: string;` (not `writeDirectory`), and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` shows actual usage: `return { directory: input.writeDir };`

2. **Plugin Example - Hypothetical code not verified in codebase**

   - **Documented**: Plugin example uses `import { $ } from 'bun';` and `await $`git -C ${directory} init`.quiet();`
   - **Actual**: No usage of `import { $ } from 'bun'` or shell execution via Bun's `$` template literal found in any plugin implementations in the codebase
   - **Evidence**: Grep searches across `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium` found no matches for `from 'bun'` or `await $`. Actual plugins use Node.js `fs` module directly (e.g., `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1-22`)

3. **Processor Example - `file.content` usage is correct but `file.relative` should also be shown for complete transformation**
   - **Documented**: Shows only `file.content` transformation
   - **Actual**: Real processors also transform `file.relative` (file path) for variable substitution
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:49-51` shows both `x.content` and `x.relative` are transformed in actual processor implementations

### Documentation Issues

1. **Plugin Example Uses Unverified Shell Execution Pattern**

   - **Problem**: The plugin example shows using Bun's `$` template literal for shell commands, but this pattern is not found anywhere in the actual codebase. The example should either be marked as hypothetical or use patterns that actually exist in the codebase.
   - **Location**: Lines 71-84
   - **Fix**: Either mark the example as conceptual/hypothetical, or replace with realistic example based on actual plugin implementations that use Node.js `fs` module

2. **Inconsistent Property Naming in Example Code**

   - **Problem**: The processor example uses `input.writeDirectory` which is incorrect and would cause a TypeScript/runtime error
   - **Location**: Line 47
   - **Fix**: Change `input.writeDirectory` to `input.writeDir`

3. **Missing Import Statement in "Using Both Together" Example**

   - **Problem**: The combined example references `GlobType` without importing it
   - **Location**: Lines 139-155
   - **Fix**: Add `GlobType` to the import statement (though it's not shown, the code uses `GlobType.Template`)

4. **Incomplete Processor Example - Missing `Eta` Import and Configuration**
   - **Problem**: Real-world processors use the Eta templating engine, but the simplified example doesn't reflect the actual implementation pattern used in the codebase
   - **Location**: Lines 35-49
   - **Recommendation**: Consider noting that the example is simplified, or show a more complete example based on actual implementations

### Other Problems

1. **Table API Reference Could Be More Precise**

   - **Problem**: The comparison table states "API: `CyanFileHelper`" for processors, but doesn't clarify that this is passed as a parameter, not an import
   - **Location**: Line 20
   - **Recommendation**: Clarify that `CyanFileHelper` is passed as the second parameter to the processor function

2. **Plugin Capabilities Section Incomplete**

   - **Problem**: Documentation states plugins "Can execute any shell command" but actual implementations in the codebase use direct filesystem operations via Node.js `fs` module, not shell commands
   - **Location**: Lines 86-91
   - **Recommendation**: Either show a working example that uses shell commands, or clarify that plugins typically use filesystem APIs directly

3. **No Version Information for SDK**
   - **Problem**: Documentation imports from `@atomicloud/cyan-sdk` but doesn't specify version requirements
   - **Location**: Lines 36, 72
   - **Recommendation**: Consider adding SDK version information (helium docs show version 2.0.1)

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 3     |
| Documentation Issues     | 4     |
| Other Problems           | 3     |

---

### developer/plugins/how-to/conditional-execution

<!-- source: content/docs/developer/plugins/how-to/conditional-execution.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/conditional-execution.mdx

> This document describes how to implement conditional execution in Cyan plugins using the `config` property. The SDK import and basic API patterns are accurate, but there are several issues: the documentation references a `cyan.yaml` configuration format that doesn't match the actual implementation (which uses `index.ts`), missing imports in code examples, and some code patterns that would fail at runtime.

### 🔴 Source Code Inaccuracies

1. **Documented**: `plugins` configuration in `cyan.yaml` with `config` property at line 67-76
   **Actual**: The actual `cyan.yaml` files in the codebase (e.g., `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml`) only contain metadata like `username`, `name`, `description`, etc. The plugin configuration with `config` is defined programmatically in `index.ts` files, not in `cyan.yaml`.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml` (lines 1-11) shows only metadata fields. The actual plugin config is in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts` (lines 61-66) which shows `plugins: [{ name: 'ernest/plugin1', config: {} }]`

2. **Documented**: Using `fs` and `path` without imports in Feature Flags example (lines 120-142)
   **Actual**: The code examples use `fs.writeFile()`, `fs.mkdir()`, and `path.join()` without importing them. These are Node.js modules that require explicit imports.
   **Evidence**: Real plugin implementations like `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts` (lines 1-4) show proper imports: `import fs from 'node:fs';` and `import path from 'node:path';`

### 🟡 Documentation Issues

1. **Problem**: Missing import statements in code examples
   **Location**: Lines 16-59 (Using Config), Lines 102-146 (Feature Flags), Lines 150-175 (Conditional Based on Project Type), Lines 179-198 (Using Defaults)
   **Fix**: Add the missing imports at the top of each code example:

   ```ts
   import fs from 'node:fs';
   import path from 'node:path';
   ```

2. **Problem**: Misleading section "Using cyan.yaml" implies that plugin config can be defined in `cyan.yaml`
   **Location**: Lines 65-76
   **Fix**: Either remove this section or clarify that `cyan.yaml` is for template metadata only, and plugin configuration with `config` must be done programmatically in `index.ts` using the return statement.

3. **Problem**: The `using index.ts` section (lines 78-96) shows `answers.installDeps` and `answers.packageManager` which are not defined in the example context
   **Location**: Lines 89-91
   **Fix**: Either show how `answers` is obtained from the template's inquirer prompts, or use literal values for clarity.

4. **Problem**: The example shows `return { processors: [...], plugins: [...] }` but doesn't mention that this return type must conform to the `Cyan` interface from the SDK
   **Location**: Lines 80-96
   **Fix**: Add type annotation or mention the `Cyan` interface requirement.

5. **Problem**: Related link to "Plugin Input/Output" points to `/developer/plugins/reference/sdk/input-output` but the actual plugin input type is `CyanPluginInput` not just "PluginInput"
   **Location**: Line 208
   **Fix**: Consider being more specific about the actual type names used in the SDK.

### 🟠 Other Problems

1. **Problem**: The code examples use Bun's shell template syntax (`await $`command``) which is Bun-specific. This should be noted as a Bun runtime requirement.
**Recommendation**: Either add a note about Bun runtime requirement, or show alternative approaches using Node.js `child_process`.

2. **Problem**: The Advanced Patterns section examples (Feature Flags, Project Type, Using Defaults) don't import `StartPluginWithLambda` from `@atomicloud/cyan-sdk` in the first example block
   **Recommendation**: Ensure all self-contained code examples include necessary imports.

3. **Problem**: The SDK version shown in actual codebase is `2.1.0` (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json` line 3), but the documentation doesn't specify which SDK version it targets.
   **Recommendation**: Add SDK version information to the documentation.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### developer/plugins/how-to/indexx

# 📄 File: content/docs/developer/plugins/how-to/index.mdx

> Index page linking to four how-to guides: Run Shell Commands, Modify Generated Files, Conditional Execution, and Push to Registry. The guides contain code examples and patterns for plugin development using the CyanPrint SDK.

### 🔴 Source Code Inaccuracies

1. **Incorrect Type Name: `PluginInput` vs `CyanPluginInput`**

   - **Documented**: `PluginInput` interface imported from `@atomicloud/cyan-sdk`
   - **Actual**: The SDK exports `CyanPluginInput`, not `PluginInput`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` exports `CyanPluginInput`, and the type is defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` as `CyanPluginInput`. While there is a `PluginInput` type in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts`, it is NOT exported from the main SDK entry point.
   - **Affected files**:
     - `content/docs/developer/plugins/how-to/run-commands.mdx` - uses `input` without explicit type import
     - `content/docs/developer/plugins/how-to/modify-files.mdx` - uses `input` without explicit type import
     - `content/docs/developer/plugins/how-to/conditional-execution.mdx` - uses `input` without explicit type import
     - `content/docs/developer/plugins/reference/sdk/input-output.mdx:17-20` - documents `PluginInput` interface
     - `content/docs/developer/plugins/reference/sdk/types.mdx:14-27` - documents `PluginInput` interface and suggests importing `type PluginInput` from SDK

2. **Missing Import for `path` Module in Feature Flags Example**

   - **Documented**: Uses `path.join()` without importing `path` module
   - **Actual**: The `path` module must be imported from `node:path`
   - **Evidence**: `content/docs/developer/plugins/how-to/conditional-execution.mdx:119-120` uses `path.join()` but only imports `StartPluginWithLambda` from the SDK and `$` from bun. The `path` import is missing in this example code block.

3. **Missing Import for `fs` Module in Feature Flags Example**
   - **Documented**: Uses `fs.writeFile()` and `fs.mkdir()` without importing `fs` module
   - **Actual**: The `fs` module must be imported from `node:fs/promises`
   - **Evidence**: `content/docs/developer/plugins/how-to/conditional-execution.mdx:120-141` uses `fs.writeFile()` and `fs.mkdir()` but the `fs` import is missing in this example code block.

### 🟡 Documentation Issues

1. **Inconsistent YAML Configuration Format for Templates**

   - **Problem**: The documentation shows plugins configured with `name` and `config` as object properties in template's `cyan.yaml`, but actual template configuration uses `index.ts` with different structure
   - **Location**: `content/docs/developer/plugins/how-to/conditional-execution.mdx:65-76` shows:
     ```yaml
     plugins:
       - name: myorg/setup-plugin
         config:
           git: true
     ```
   - **Actual**: The real template YAML in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:10` shows:
     ```yaml
     plugins: ['ernest/plugin1']
     ```
     And the actual config is passed via `index.ts` not `cyan.yaml`
   - **Fix**: Clarify that plugin config is typically defined in `index.ts` templates, not in `cyan.yaml`. The YAML format shown may be aspirational or for a different use case.

2. **Bun Shell Features Table - Unverified Claims**

   - **Problem**: The Bun Shell features table claims specific syntax support without verification against source
   - **Location**: `content/docs/developer/plugins/how-to/run-commands.mdx:39-45`
   - **Recommendation**: These features (interpolation, quiet mode, output capture, pipes, redirects) are Bun-specific and should be verified against Bun documentation or tested. The syntax examples appear correct for Bun Shell but are not verified against this codebase.

3. **Template `index.ts` Configuration Example - Missing Context**

   - **Problem**: Shows `answers.installDeps` and `answers.packageManager` without explaining where `answers` comes from
   - **Location**: `content/docs/developer/plugins/how-to/conditional-execution.mdx:80-96`
   - **Fix**: Add context showing that `answers` comes from the inquirer prompts in the template function

4. **Missing fs Import in modify-files.mdx Using Glob**
   - **Problem**: The glob example uses `fs.readFile()` and `fs.writeFile()` but only shows importing `glob`
   - **Location**: `content/docs/developer/plugins/how-to/modify-files.mdx:202-228`
   - **Fix**: The example should include `import * as fs from 'fs/promises';` which is shown earlier but not repeated in this section

### 🟠 Other Problems

1. **Index File Provides No Actionable Content**

   - **Problem**: The index.mdx file is purely navigational with no unique content to verify
   - **Recommendation**: This is expected behavior for an index page. No changes needed.

2. **Code Examples Use Different Import Styles**

   - **Problem**: Some examples use `import * as fs from 'fs/promises'` while others use `import fs from 'node:fs'`
   - **Location**: Various files throughout the how-to guides
   - **Recommendation**: Standardize import style for consistency. The actual SDK examples in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:3` use `import fs from 'node:fs';` and `import path from 'node:path';`

3. **Synchronous vs Asynchronous File Operations**
   - **Problem**: Documentation uses `fs/promises` (async) while actual plugin examples use `node:fs` (sync)
   - **Evidence**: Documentation in modify-files.mdx uses `await fs.readFile()` but actual plugins at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:17-18` use `fs.mkdirSync()` and `fs.writeFileSync()`
   - **Recommendation**: Either update documentation to match real usage patterns or clarify that both approaches are valid

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### developer/plugins/how-to/run-commands

<!-- source: content/docs/developer/plugins/how-to/run-commands.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/run-commands.mdx

> Documentation describes how to execute shell commands in CyanPrint plugins using Bun Shell and Node.js child_process APIs. The SDK import and API patterns are accurate, but no actual plugin implementations in the source codebase use Bun Shell or child_process for command execution.

### 🔴 Source Code Inaccuracies

1. **Missing import for PluginOutput type** | Documented shows `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';` | In actual e2e plugins (iridium/e2e/plugin1/index.ts:1), they also import `PluginOutput` type: `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';` | file: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1`
2. **No real-world plugin examples using Bun Shell** | Documentation shows extensive use of Bun Shell (`await $`git -C ${directory} init``) | No plugin in any source path (argon, boron, helium, iridium, zinc) uses Bun Shell (`$` template literal) or shell command execution | Verified via Grep searches across all source paths

### 🟡 Documentation Issues

1. **No Bun Shell import shown in examples** | First code example at line 17-35 imports `$` from 'bun' but doesn't show the import statement in a visible way alongside the SDK import | Add explicit line: `import { $ } from 'bun';` should be clearly shown with SDK import
2. **PluginInput type naming inconsistency** | Documentation uses `CyanPluginInput` in SDK source but refers to it as `input` with destructuring | The SDK exports `CyanPluginInput` not `PluginInput` - see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18`
3. **Promise return type not shown** | Code examples show implicit return types | Real e2e plugins explicitly type the return: `async (input): Promise<PluginOutput>` | file: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5`
4. **Related link paths may be incorrect** | Links to `/developer/plugins/how-to/modify-files` and `/developer/plugins/how-to/conditional-execution` | These paths need verification against actual documentation structure

### 🟠 Other Problems

1. **Bun Shell is Bun-specific** | Documentation heavily features Bun Shell (`$` from 'bun') | Consider adding a note that this is Bun-specific and requires the Bun runtime, or provide alternatives for non-Bun environments
2. **No error handling best practices** | Error handling example only shows try-catch without demonstrating proper error propagation or logging patterns that match the SDK's error handling approach
3. **execa is shown but not in SDK dependencies** | Documentation shows `execa` package usage | The SDK's package.json does not include execa as a dependency - users would need to install it separately, which should be noted
4. **Missing verification of npm --if-present flag** | Documentation uses `npm run lint --if-present` and `npm test --if-present` | These flags may not work as expected with all npm versions or in all contexts

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 4     |
| 🟠       | 4     |

---

### developer/plugins/how-to/run-commandsx

# 📄 File: content/docs/developer/plugins/how-to/run-commands.mdx

> Documentation for executing shell commands in CyanPrint plugins using Bun Shell, Node.js child_process, and execa.

### 🔴 Source Code Inaccuracies

1. **Missing return type in lambda function examples**

   - **Documented**: `StartPluginWithLambda(async (input) => { ... })` without explicit return type
   - **Actual**: Real plugin implementations explicitly type the return as `Promise<PluginOutput>`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5` shows `StartPluginWithLambda(async (input): Promise<PluginOutput> => { ... })`

2. **Bun Shell usage not demonstrated in actual codebase**

   - **Documented**: Examples show importing `$` from 'bun' and using Bun Shell extensively
   - **Actual**: No usage of Bun Shell (`import { $ } from 'bun'`) found in any of the source paths
   - **Evidence**: Grep search across all source paths (argon, boron, helium, iridium, zinc) returned no matches for `from 'bun'`

3. **child_process usage not demonstrated in actual codebase**

   - **Documented**: Examples show importing from 'child_process' for exec and spawn
   - **Actual**: No usage of child_process found in any of the source paths
   - **Evidence**: Grep search across all source paths returned no matches for `child_process`

4. **execa usage not demonstrated in actual codebase**
   - **Documented**: Examples show using execa as an alternative
   - **Actual**: No usage of execa found in any of the source paths
   - **Evidence**: Grep search across all source paths returned no matches for `execa`

### 🟡 Documentation Issues

1. **Missing PluginOutput import in examples**

   - **Problem**: Code examples import only `StartPluginWithLambda` but don't import `PluginOutput` type, yet real implementations do
   - **Location**: All code examples throughout the document
   - **Fix**: Add `import { StartPluginWithLambda, PluginOutput } from '@atomicloud/cyan-sdk';` and use explicit return typing `Promise<PluginOutput>`

2. **Bun Shell features table may not reflect actual API**

   - **Problem**: The Bun Shell features table (lines 39-45) documents API behaviors that cannot be verified against the codebase since no actual usage exists
   - **Location**: Lines 39-45 (Bun Shell Features table)
   - **Fix**: Either verify these features against Bun's official documentation or add a note that these are Bun-specific features external to the Cyan SDK

3. **Related links may be broken or incomplete**
   - **Problem**: Related links at the end point to paths like `/developer/plugins/how-to/modify-files` which need verification
   - **Location**: Lines 222-225
   - **Fix**: Verify all related links exist in the documentation structure

### 🟠 Other Problems

1. **Code examples lack error handling best practices**

   - **Problem**: Most examples show basic try/catch but don't demonstrate proper error propagation or logging patterns used in production
   - **Recommendation**: Add more robust error handling examples that align with how errors should be handled in the CyanPrint ecosystem

2. **No mention of plugin timeout configuration**

   - **Problem**: The warning at line 218 mentions "The plugin timeout is configurable" but provides no details on how to configure it
   - **Recommendation**: Either add configuration details or link to relevant documentation

3. **Git operations examples use generic bot credentials**
   - **Problem**: Lines 183-184 use hardcoded `bot@example.com` and `CyanPrint Bot` - while clearly example values, no guidance on best practices
   - **Recommendation**: Add guidance on using environment variables or configuration for git credentials

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 3     |
| 🟠       | 3     |

---

### developer/plugins/index

<!-- source: content/docs/developer/plugins/index.mdx -->

# 📄 File: content/docs/developer/plugins/index.mdx

> Overview page for Plugin Development documentation. Describes plugin architecture, capabilities, and provides a quick example with learning path links. The documentation is generally accurate but contains type naming inconsistencies and minor code example issues.

### 🔴 Source Code Inaccuracies

1. **`PluginInput` type is not exported from SDK**

   - **Documented**: The Components table (line 41) lists `PluginInput` as a component. The Quick Example (lines 107-125) and linked reference docs suggest using `PluginInput`.
   - **Actual**: The SDK exports `CyanPluginInput`, not `PluginInput`. While `PluginInput` exists internally in `helium/sdks/node/src/domain/plugin/input.ts`, it is NOT exported from `main.ts`. The actual exported type is `CyanPluginInput`.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` - The export block includes `CyanPluginInput` but not `PluginInput`

2. **Type naming mismatch between SDK and documentation**

   - **Documented**: Documentation consistently uses `PluginInput` and `PluginOutput` as the type names
   - **Actual**: The SDK exports `CyanPluginInput` (not `PluginInput`) and `PluginOutput`. Real plugins in the codebase only import `PluginOutput`:
     ```ts
     import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';
     ```
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/index.ts:1`

3. **Dockerfile version mismatch in tutorials**
   - **Documented**: First Plugin tutorial shows `FROM oven/bun:1.1.31` (lines 82, 99 in first-plugin.mdx)
   - **Actual**: Real plugin Dockerfiles in the codebase use `FROM oven/bun:1.0.11`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/Dockerfile:1`

### 🟡 Documentation Issues

1. **Type naming inconsistency across documentation**

   - **Problem**: The index.mdx table mentions `PluginInput` and `PluginOutput` as components, but the actual exported type from the SDK is `CyanPluginInput`. This creates confusion because:
     - SDK exports: `CyanPluginInput`, `PluginOutput`
     - Documentation uses: `PluginInput`, `PluginOutput`
   - **Location**: Line 41 (Components table)
   - **Fix**: Either update documentation to use `CyanPluginInput` or request SDK to export `PluginInput` as an alias

2. **Linked reference docs perpetuate type naming error**

   - **Problem**: The referenced `/developer/plugins/reference/sdk/input-output.mdx` documents `PluginInput` interface but users cannot import it as shown
   - **Location**: Line 87 (link to PluginInput/Output reference)
   - **Fix**: Update reference docs to show `CyanPluginInput` as the actual type name, or note that it's the parameter type inferred from the lambda signature

3. **Linked types.mdx shows unimportable type**

   - **Problem**: The types.mdx shows `import { StartPluginWithLambda, type PluginInput, type PluginOutput }` but `PluginInput` cannot be imported
   - **Location**: Line 88 (link to Type Definitions)
   - **Fix**: Update to use `CyanPluginInput` or remove the import example

4. **CyanConfig type does not exist in SDK**
   - **Problem**: The execution-order.mdx (linked from learning path) mentions "Template returns `CyanConfig` with processors and plugins" but this type does not exist in the SDK. The actual return type from the template is `Cyan`.
   - **Location**: Referenced from index.mdx learning path -> execution-order.mdx
   - **Fix**: Update to use `Cyan` type instead of `CyanConfig`

### 🟠 Other Problems

1. **Port 5552 not mentioned in overview**

   - **Problem**: While the reference docs mention port 5552, the overview doesn't mention that plugins run an HTTP server internally on this port
   - **Recommendation**: Consider adding a brief note that plugins run an HTTP server on port 5552 for communication with CyanPrint, as this is confirmed in the source code at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:65`

2. **Dockerfile version should be updated**

   - **Problem**: Documentation shows `oven/bun:1.1.31` but actual plugins use `oven/bun:1.0.11`. While newer versions are generally better, this inconsistency could cause confusion
   - **Recommendation**: Either align documentation with actual plugin implementations or update the plugin implementations to match the documented version

3. **LambdaPluginFn type shows correct input type**
   - **Problem**: The `LambdaPluginFn` type in the SDK uses `CyanPluginInput` as the parameter type (not `PluginInput`), which is correct. Documentation should align with this.
   - **Recommendation**: Update documentation examples to reflect that the input parameter type is `CyanPluginInput`

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### developer/plugins/reference/sdk/typesx

<!-- source: content/docs/developer/plugins/reference/sdk/types.mdx -->

# File: content/docs/developer/plugins/reference/sdk/types.mdx

> Documents the type definitions for the CyanPrint plugin SDK, including PluginInput, PluginOutput, PluginHandler, and StartPluginWithLambda.

### Source Code Inaccuracies

1. **PluginInput type is not publicly exported**

   - **Documented**: `PluginInput` is shown as an importable type from `@atomicloud/cyan-sdk`
   - **Actual**: The SDK exports `CyanPluginInput`, not `PluginInput`. The `PluginInput` type exists internally in `sdks/node/src/domain/plugin/input.ts` but is NOT exported from the main entry point (`main.ts`).
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:183-207` - The export block includes `CyanPluginInput` (line 193) but not `PluginInput`. The internal `PluginInput` is only used within the domain layer.

2. **Usage example uses incorrect import**

   - **Documented**: `import { StartPluginWithLambda, type PluginInput, type PluginOutput } from '@atomicloud/cyan-sdk';`
   - **Actual**: Should be `import { StartPluginWithLambda, type CyanPluginInput, type PluginOutput } from '@atomicloud/cyan-sdk';`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` - Only `CyanPluginInput` is exported. Also confirmed by the e2e test at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1` which does NOT import PluginInput.

3. **LambdaPluginFn uses CyanPluginInput, not PluginInput**

   - **Documented**: `type PluginHandler = (input: PluginInput) => Promise<PluginOutput>;`
   - **Actual**: The actual type is `LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>;`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5` - `type LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>;`

4. **PluginHandler type does not exist in SDK**

   - **Documented**: `type PluginHandler = (input: PluginInput) => Promise<PluginOutput>;` is shown as an SDK type
   - **Actual**: The SDK uses `LambdaPluginFn` as the type name, not `PluginHandler`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:189` - The exported type is `LambdaPluginFn`

5. **Type Guards section uses incorrect import**
   - **Documented**: `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';` (in Type Guards section)
   - **Actual**: This import is correct, but the section references validating `input.config` which comes from the non-existent `PluginInput` type
   - **Evidence**: The code pattern is valid, but relies on the incorrect `PluginInput` naming convention throughout

### Documentation Issues

1. **Type naming inconsistency throughout document**

   - **Problem**: The document consistently uses `PluginInput` when the actual SDK type is `CyanPluginInput`
   - **Location**: Throughout the entire document (lines 14-27, 44-48, 69-70, 83, 123-124, etc.)
   - **Fix**: Replace all occurrences of `PluginInput` with `CyanPluginInput` to match the actual SDK export

2. **Type definition section header is misleading**

   - **Problem**: The "Core Types" section presents `PluginInput`, `PluginOutput`, and `PluginHandler` as the primary types, but only `PluginOutput` is actually exported with that name
   - **Location**: Lines 10-49 (Core Types section)
   - **Fix**: Update to show `CyanPluginInput` instead of `PluginInput`, and `LambdaPluginFn` instead of `PluginHandler`

3. **Usage example would fail at runtime**
   - **Problem**: The "Complete Plugin with Types" example would fail TypeScript compilation because `PluginInput` is not exported from the SDK
   - **Location**: Lines 69-117
   - **Fix**: Update import to use `CyanPluginInput` and update all type annotations accordingly

### Other Problems

1. **Internal vs Public API confusion**

   - **Problem**: The documentation appears to describe internal domain types (`PluginInput` from `domain/plugin/input.ts`) rather than the public API types (`CyanPluginInput` from `domain/core/cyan_script_model.ts`)
   - **Recommendation**: Review the SDK's public API surface in `main.ts` and ensure documentation only covers types that are actually exported to consumers

2. **Missing type documentation**
   - **Problem**: The SDK also exports `ICyanPlugin` interface which is the core plugin interface, but it's not documented
   - **Recommendation**: Consider documenting `ICyanPlugin` for users who want to implement the interface directly rather than using the lambda pattern

## Summary

| Category | Count |
| -------- | ----- |
| Red      | 5     |
| Yellow   | 3     |
| Orange   | 2     |

---

### developer/processors/explanation/read-write-dirsx

<!-- source: content/docs/developer/processors/explanation/read-write-dirs.mdx -->

# File: content/docs/developer/processors/explanation/read-write-dirs.mdx

> Documentation explains read/write directory concepts for processors but uses incorrect property names throughout. The documented `input.readDirectory` and `input.writeDirectory` do not exist - actual properties are `input.readDir` and `input.writeDir`.

### Source Code Inaccuracies

1. **Incorrect input parameter names** | **Documented**: `input.readDirectory` and `input.writeDirectory` | **Actual**: `input.readDir` and `input.writeDir` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:12-13` shows `CyanProcessorInput` uses `readDir` and `writeDir`

2. **Incorrect lambda function signature usage** | **Documented**: `StartProcessorWithLambda(async (input, fileHelper) => { ... return { directory: input.writeDirectory }; })` | **Actual**: `return { directory: input.writeDir }` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` shows `{ directory: input.writeDir }`

3. **Path resolution examples use wrong properties** | **Documented**: `${input.readDirectory}/${file.relative}` and `${input.writeDirectory}/${file.relative}` | **Actual**: `${input.readDir}/${file.relative}` and `${input.writeDir}/${file.relative}` | Evidence: Same property naming error throughout code examples

4. **Console.log examples show wrong property names** | **Documented**: `console.log('Reading from:', input.readDirectory);` and `console.log('Writing to:', input.writeDirectory);` | **Actual**: Should be `input.readDir` and `input.writeDir` | Evidence: Property names don't exist on `CyanProcessorInput`

5. **Comment in example shows wrong property** | **Documented**: `return { directory: input.writeDirectory };` with comment "never change this" | **Actual**: `return { directory: input.writeDir };` | Evidence: `CyanProcessorInput.writeDir` is the correct property

### Documentation Issues

1. **Problem**: All code examples use incorrect property names `readDirectory`/`writeDirectory` instead of `readDir`/`writeDir` | **Location**: Lines 62-72, 93-106, 130-136, 143-162, 168-174, 179-186, 190-211, 215-239 | **Fix**: Replace all occurrences of `input.readDirectory` with `input.readDir` and `input.writeDirectory` with `input.writeDir`

2. **Problem**: Table shows "Path" values as `/workspace/cyanprint/` and `/workspace/output/` but these are environment-specific and may not match all deployments | **Location**: Lines 28-32 | **Fix**: Add note that paths are examples and actual values depend on container/deployment configuration

3. **Problem**: Missing explanation of type distinction - internal `ProcessorInput` (with `readDirectory`/`writeDirectory`) vs SDK-exposed `CyanProcessorInput` (with `readDir`/`writeDir`) | **Location**: Throughout document | **Fix**: Add a note explaining that the SDK uses shorthand property names for developer convenience

### Other Problems

1. **Problem**: The `resolveAll()` method has side effects not documented - it copies Copy-type files first, then returns Template-type files | **Recommendation**: Document that `resolveAll()` performs automatic file copying for Copy-type globs before returning Template-type files for processing

2. **Problem**: The statement "Files not written are not included in output" (Rule 4) is incomplete - it doesn't explain that Copy-type files are automatically written during `resolveAll()` | **Recommendation**: Clarify the distinction between Copy-type files (auto-copied) and Template-type files (must call `writeFile()`)

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 5     |
| Documentation Issues     | 3     |
| Other Problems           | 2     |

---

### developer/processors/explanation/stateless-naturex

<!-- source: content/docs/developer/processors/explanation/stateless-nature.mdx -->

# 📄 File: content/docs/developer/processors/explanation/stateless-nature.mdx

> Documentation explaining the stateless nature of processors, including what it means to be stateless, benefits, implications, and best practices for designing stateless processors. The conceptual content is accurate, but there are API inaccuracies in code examples that use incorrect property names.

### 🔴 Source Code Inaccuracies

1. **Wrong Property Name `input.writeDirectory`**

   - **Documented**: `return { directory: input.writeDirectory };`
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `CyanProcessorInput` interface defines `writeDir` (not `writeDirectory`). Also verified in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` which returns `{ directory: input.writeDir }`.

2. **CLI Command Name Inconsistency**

   - **Documented**: `cyanprint create myorg/my-template output1`
   - **Actual**: Command exists as both `cyanprint create` and via `pls` wrapper
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:32-46` defines the Create command. The CLI binary is `cyanprint`. Documentation reference in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/surfaces/cli/02-create.md:8` shows `pls create <template_ref> [path]`.

3. **Non-existent Function in Testing Example**

   - **Documented**: `import { processFiles } from './processor';` and `const result1 = processFiles(input, config);`
   - **Actual**: No such `processFiles` function exists in the SDK
   - **Evidence**: Searched the helium SDK codebase - no `processFiles` function found. The actual processor API uses `StartProcessorWithLambda` with a callback function pattern.

4. **Wrong Test Input Structure in Testing Example**
   - **Documented**: Test input has `content` and `relative` properties directly on the input object
   - **Actual**: The processor input (`CyanProcessorInput`) has `readDir`, `writeDir`, `globs`, and `config` properties
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `CyanProcessorInput` interface structure.

### 🟡 Documentation Issues

1. **Misleading Test Example Structure**

   - **Problem**: The testing example (lines 177-196) shows a unit test pattern that doesn't match how processors are actually invoked. Processors use `StartProcessorWithLambda` with a callback, not a `processFiles` function.
   - **Location**: Lines 172-196
   - **Fix**: Either remove the test example or rewrite it to show how to actually test a processor (mocking fileHelper and input structures, or using integration tests).

2. **Wrong Output Type in Test Assertion**

   - **Problem**: The test example uses `expect(result1).toBe('Hello World')` but actual processor output is a `ProcessorOutput` object with a `directory` property, not a string.
   - **Location**: Lines 193-194
   - **Fix**: Update the test example to reflect that `ProcessorOutput` is `{ directory: string }`, not a content string.

3. **Abstract Transform Function Without Definition**

   - **Problem**: Line 89 shows `file.content = transform(file.content);` with undefined `transform` function
   - **Location**: Lines 82-100
   - **Fix**: Either show a concrete transformation example or add comment indicating pseudocode.

4. **Conceptual Model Inconsistency**
   - **Problem**: Line 20 shows `output = processor(input, files)` but actual signature is `(input, fileHelper)` and files are obtained via `fileHelper.resolveAll()`
   - **Location**: Line 18-22
   - **Fix**: Update to `output = processor(input, fileHelper)` or add clarifying comment about the conceptual nature.

### 🟠 Other Problems

1. **SDK Package Name Not Documented**

   - **Problem**: Documentation doesn't specify the exact SDK package name (`@atomicloud/cyan-sdk`)
   - **Recommendation**: Add import statement showing `import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk';` in code examples.

2. **Real-World Examples Not Referenced**
   - **Problem**: Actual processor implementations exist in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts` but documentation uses abstract examples
   - **Recommendation**: Consider linking to actual processor examples for more concrete understanding.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 4     |
| 🟠       | 2     |

---

### developer/processors/how-to/copy-filesx

<!-- source: content/docs/developer/processors/how-to/copy-files.mdx -->

# File: content/docs/developer/processors/how-to/copy-files.mdx

> This page documents the `copy()` method for copying files without loading into memory. The code examples use incorrect property names (`writeDirectory` vs `writeDir`). The underlying SDK types and APIs are documented incorrectly across the documentation set.

### Source Code Inaccuracies

1. **Input property name mismatch**

   - Documented: `input.writeDirectory`
   - Actual: `input.writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` shows `CyanProcessorInput` interface has `writeDir: string` not `writeDirectory: string`. All code examples on this page (lines 40, 61, 93, 114) incorrectly use `input.writeDirectory`.

2. **SDK interface name mismatch (documentation-wide issue)**

   - Documented: `ProcessorInput` interface with `readDirectory` and `writeDirectory`
   - Actual: `CyanProcessorInput` interface with `readDir` and `writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:194` exports `CyanProcessorInput`, not `ProcessorInput`.

3. **CyanGlob interface discrepancy**

   - Documented: `root: string` (required), `exclude?: string[]` (optional)
   - Actual: `root?: string | null` (optional), `exclude: string[]` (required), plus `type: GlobType` (missing from docs)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11`

4. **VirtualFileReference API mismatch (affects related pages)**

   - Documented: `load(): Promise<string>`, `writeFile(content: string): void`, `copy(): void`
   - Actual: `readFile(): VirtualFile` (synchronous, not async), `read: string` getter, `write: string` getter, no `load()`, no `copy()`, no `writeFile(content)`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11-30`

5. **VirtualFileStream API mismatch (affects related pages)**
   - Documented: `relative: string` property, `read(): AsyncIterable<Buffer>` method, `writeFile(content: string): void`
   - Actual: `reader: fs.ReadStream`, `writer: fs.WriteStream` - no `relative`, no `read()` method, no `writeFile()`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-9`

### Documentation Issues

1. **All code examples use wrong property name**

   - Problem: All 4 code examples use `input.writeDirectory` which does not exist on `CyanProcessorInput`
   - Location: Lines 40, 61, 93, 114
   - Fix: Change `input.writeDirectory` to `input.writeDir`

2. **Performance comparison table claims unverified**

   - Problem: The performance comparison table (lines 124-129) makes claims about memory usage and speed that cannot be verified from source code
   - Location: Lines 122-130
   - Fix: Either verify these claims with benchmarks or mark them as conceptual comparisons rather than measured data

3. **Callout claim about memory efficiency**
   - Problem: The callout (lines 118-120) states `copy()` transfers files "without being loaded into the processor's memory" - this is accurate based on implementation, but should be verified against actual file copy mechanism
   - Location: Lines 118-120
   - Recommendation: The claim appears accurate based on `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:77-93` which uses `fs.copyFileSync`

### Other Problems

1. **Documentation describes idealized API that doesn't match SDK**

   - Problem: The documentation appears to describe an aspirational or planned API rather than the actual implemented SDK. Methods like `VirtualFileReference.load()`, `VirtualFileReference.copy()`, `VirtualFileStream.read()` don't exist in the actual code.
   - Recommendation: Either update the documentation to match the current SDK, or update the SDK to implement the documented API.

2. **Real-world example uses correct property**
   - The actual processor implementations in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` correctly use `input.writeDir`, confirming the documentation is wrong.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 5     |
| Documentation Issues     | 3     |
| Other Problems           | 2     |

---

### developer/processors/reference/sdk/indexx

# 📄 File: content/docs/developer/processors/reference/sdk/index.mdx

> SDK Overview page documenting the CyanPrint SDK (`@atomicloud/cyan-sdk`) for processor development, including installation, core exports, and a quick start example.

### 🔴 Source Code Inaccuracies

1. **`ProcessorInput` type is NOT exported from SDK**

   - Documented: `ProcessorInput` listed as an interface export
   - Actual: The SDK exports `CyanProcessorInput` (not `ProcessorInput`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:194` exports `CyanProcessorInput`; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/processor/input.ts` defines `ProcessorInput` but it's not re-exported from main.ts

2. **`VirtualFile` type is NOT exported from SDK**

   - Documented: `VirtualFile` listed as a type export
   - Actual: The class is defined but NOT exported from the SDK's main entry point
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` has no `VirtualFile` in exports; defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:32`

3. **`VirtualFileReference` type is NOT exported from SDK**

   - Documented: `VirtualFileReference` listed as a type export
   - Actual: The class is defined but NOT exported from the SDK's main entry point
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` has no `VirtualFileReference` in exports; defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:11`

4. **`VirtualFileStream` type is NOT exported from SDK**

   - Documented: `VirtualFileStream` listed as a type export
   - Actual: The class is defined but NOT exported from the SDK's main entry point
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` has no `VirtualFileStream` in exports; defined in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4`

5. **Quick Start example uses wrong property names for input**
   - Documented: `input.readDirectory`, `input.writeDirectory`
   - Actual: The `CyanProcessorInput` type uses `readDir` and `writeDir` (not `readDirectory` and `writeDirectory`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` defines `CyanProcessorInput` with `readDir` and `writeDir`

### 🟡 Documentation Issues

1. **Comment in Quick Start shows wrong property names**

   - Problem: The comment `//   - readDirectory: Source files location` and `//   - writeDirectory: Output location` are incorrect
   - Location: Lines 50-51 in the Quick Start code block
   - Fix: Change to `readDir` and `writeDir` to match the actual `CyanProcessorInput` interface

2. **Missing `CyanProcessorInput` from interface documentation**

   - Problem: The actual exported type `CyanProcessorInput` is not documented; instead, a non-existent `ProcessorInput` is shown
   - Location: "Interfaces" table (lines 27-34)
   - Fix: Replace `ProcessorInput` with `CyanProcessorInput` and update description accordingly

3. **Types section documents non-exported types**
   - Problem: `VirtualFile`, `VirtualFileReference`, and `VirtualFileStream` are documented as exports but are internal implementation details not exposed via the SDK's public API
   - Location: "Types" table (lines 36-41)
   - Fix: Either remove these from the documentation or add them to the SDK exports in main.ts

### 🟠 Other Problems

1. **SDK Version Compatibility table may be outdated**

   - Problem: The table references SDK versions 1.x and 2.x with Node.js requirements, but the actual SDK package.json shows version 2.1.0. The compatibility claims have not been verified against actual CLI versions.
   - Recommendation: Verify version compatibility with the actual CyanPrint CLI releases and update accordingly

2. **Quick Start code may not work as written**
   - Problem: The Quick Start example accesses `input.writeDirectory` which doesn't exist on `CyanProcessorInput`. This would cause a TypeScript error or return `undefined` at runtime.
   - Recommendation: Update the return statement to use `input.writeDir` instead of `input.writeDirectory`

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### developer/processors/tutorials/first-processorx

# File: content/docs/developer/processors/tutorials/first-processor.mdx

> Tutorial for creating a basic processor that transforms files using `StartProcessorWithLambda` and `CyanFileHelper`.

### Source Code Inaccuracies

1. **Wrong property name on input object**

   - **Documented**: `return { directory: input.writeDirectory };` (line 55)
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: `helium/sdks/node/src/domain/core/cyan_script_model.ts:12-16` - `CyanProcessorInput` interface has `writeDir`, not `writeDirectory`. Also confirmed by actual usage in `iridium/e2e/processor1/index.ts:55` which uses `input.writeDir`.

2. **Incorrect type name in documentation table**

   - **Documented**: `ProcessorInput` type in the `StartProcessorWithLambda` arguments table (line 92)
   - **Actual**: `CyanProcessorInput` type
   - **Evidence**: `helium/sdks/node/src/api/processor/lambda.ts:6` - The lambda function signature is `(i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>`. Note that `ProcessorInput` is a different internal type used by the service layer (`helium/sdks/node/src/domain/processor/input.ts:3-8`).

3. **CyanFileHelper table incorrectly documents method signatures**
   - **Documented**: `read(glob)`, `get(glob)`, `readAsStream(glob)`, `copy(glob)` (lines 101-105)
   - **Actual**: All methods require a `CyanGlob` object, not just a glob string
   - **Evidence**: `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:73` - `read(g: CyanGlob): VirtualFile[]`, line 60 - `get(g: CyanGlob): VirtualFileReference[]`, line 42 - `readAsStream(g: CyanGlob): VirtualFileStream[]`, line 77 - `copy(copy: CyanGlob): void`.

### Documentation Issues

1. **VirtualFile properties table is incomplete**

   - **Problem**: The VirtualFile table (lines 109-118) only lists `content` and `relative` properties, but `VirtualFile` has additional properties: `baseRead`, `baseWrite`, and computed getters `read` and `write`.
   - **Location**: Lines 109-118
   - **Fix**: Either add the additional properties or clarify this is a simplified view. The additional properties are: `baseRead: string`, `baseWrite: string`, `read: string` (getter), `write: string` (getter).

2. **Missing return type import in code example**

   - **Problem**: The code example (lines 38-57) does not import or specify `ProcessorOutput` return type, but actual processors (like in e2e tests) explicitly type the return: `Promise<ProcessorOutput>`.
   - **Location**: Lines 38-57
   - **Fix**: Either add explicit return type annotation or add `ProcessorOutput` to the import statement for clarity.

3. **Template test code example has incorrect property name**

   - **Problem**: The test example (lines 132-141) shows `files: [{ root: 'templates', glob: '**/*', exclude: [], type: GlobType.Template }]` but the root should be `template` (singular) to match actual e2e test usage.
   - **Location**: Lines 132-141
   - **Fix**: Change `root: 'templates'` to `root: 'template'` to match actual usage in `iridium/e2e/template1/cyan/index.ts:43`.

4. **Missing GlobType import in code example**

   - **Problem**: The test template code uses `GlobType.Template` but doesn't show importing `GlobType` from the SDK.
   - **Location**: Lines 132-141
   - **Fix**: Add `GlobType` to the imports or note that it should be imported from `@atomicloud/cyan-sdk`.

5. **Incorrect file structure description for test template**
   - **Problem**: The test template code example (lines 132-141) says "// In template's index.ts" but the actual location based on e2e tests would be `cyan/index.ts` within the template directory.
   - **Location**: Line 133
   - **Fix**: Change comment to "// In template's cyan/index.ts".

### Other Problems

1. **Code example uses forEach instead of idiomatic approach**

   - **Problem**: The example uses `files.forEach(file => {...})` which mutates files in place. Actual processor implementations (e.g., `iridium/e2e/processor1/index.ts:46-53`) use `.map().map()` chain for functional transformation.
   - **Recommendation**: While `forEach` works, showing a more idiomatic functional approach with `.map()` would better align with actual codebase patterns.

2. **Documentation references non-existent internal type**
   - **Problem**: The table mentions `ProcessorInput` type which exists internally in the service layer but is not the type exposed to processor developers. This could cause confusion if developers try to find this type in the SDK exports.
   - **Recommendation**: Use the correct exported type name `CyanProcessorInput` in all documentation.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 3     |
| Documentation Issues     | 5     |
| Other Problems           | 2     |

---

### developer/templates/explanation/default-processorx

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
   \*\*Fix: Remove the Filters section entirely, or clearly mark it as a feature available only in custom processors, not in cyan/default.

2. **Problem: The "Full configuration options" example (lines 209-234) includes options that cannot be configured**
   **Location: Lines 209-234**
   \*\*Fix: Remove `filters`, `autoEscape`, and `autoTrim` from the example. Only `vars` and `parser.varSyntax` are actually configurable.

3. **Problem: The Eta Features section (lines 160-203) implies capabilities that are not fully supported**
   **Location: Lines 160-203**
   \*\*Fix: Either remove or significantly revise this section. The conditionals/loops examples would require changes to how the processor is implemented (the `interpolate: ''` setting affects how Eta parses templates).

4. **Problem: The cyan-config.mdx reference document only documents `vars` and `varSyntax` as configurable options**
   **Location: Cross-reference inconsistency**
   \*\*Fix: The default-processor.mdx should be aligned with cyan-config.mdx, which accurately shows only `vars` and `parser.varSyntax` as the available options.

### Other Problems

1. **Problem: The documentation does not clarify that `cyan/default` is a specific processor implementation, not a built-in platform feature**
   \*\*Recommendation: Add a note explaining that cyan/default is the reference processor implementation, and different registries/organizations may provide their own default processors with different capabilities.

2. **Problem: No link to actual processor source code for developers who want to understand the exact behavior**
   \*\*Recommendation: Consider adding a link to the processor implementation or explaining where to find the source code in the registry.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 4     |
| Documentation Issues     | 4     |
| Other Problems           | 2     |

---

### developer/templates/tutorials/01-blank-templatex

<!-- source: content/docs/developer/templates/tutorials/01-blank-template.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/01-blank-template.mdx

> Tutorial documenting how to create a blank template using the meta template. Contains minor inaccuracies in code examples and project structure description.

### 🔴 Source Code Inaccuracies

1. **Incorrect parameter type name**

   - Documented: `d` parameter described as `IDefine`
   - Actual: `IDeterminism`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:192` exports `IDeterminism`, and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5` defines the interface. All actual templates use `IDeterminism` (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:2-3`)

2. **Incorrect project structure - Dockerfile naming inconsistency**

   - Documented: `template.Dockerfile` in `cyan/` directory
   - Actual: Varies between projects - nix-init and workspace use `cyan/template.Dockerfile`, but the meta template (cyan/cyan) uses `cyan/Dockerfile`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/template.Dockerfile` exists, `/Users/erng/Workspace/atomi/runbook/platforms/ketone/cyan/cyan/Dockerfile` (not template.Dockerfile)

3. **Project structure lockfile naming inconsistency**

   - Documented: `bun.lockb`
   - Actual: nix-init uses `bun.lockb`, meta template uses `bun.lock`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/bun.lockb` vs `/Users/erng/Workspace/atomi/runbook/platforms/ketone/cyan/cyan/bun.lock`

4. **Missing package.json in cyan/ directory**
   - Documented: `package.json` at project root only
   - Actual: `package.json` exists in `cyan/` directory for templates (required for SDK dependencies)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/package.json` exists

### 🟡 Documentation Issues

1. **Unverified CLI command for meta template**

   - Problem: The command `cyanprint create cyan/new my-first-template` references a meta template `cyan/new` - the registry name `cyan/new` could not be verified against actual published templates
   - Location: Line 26
   - Fix: Verify this meta template exists in the registry or provide alternative setup instructions

2. **Missing package.json in documented project structure**

   - Problem: The documented structure shows `package.json` only at root level, but actual templates have it inside `cyan/` directory
   - Location: Lines 41-49 (project structure diagram)
   - Fix: Add `package.json` to the `cyan/` directory in the structure diagram

3. **Incomplete table description for `d` parameter**
   - Problem: Table shows `d` as `IDefine - access deterministic values` but doesn't explain the interface methods
   - Location: Lines 73-80 (Understanding the Code table)
   - Fix: Update to `IDeterminism - access deterministic values via get(key, origin) method`

### 🟠 Other Problems

1. **Prerequisites missing Bun**

   - Problem: Prerequisites mention Docker, CyanPrint CLI, and Node.js 18+ but don't mention Bun which is the actual runtime used in Dockerfiles
   - Recommendation: Add Bun to prerequisites or clarify that Node.js is only for local development while Docker uses Bun

2. **Code example consistency**

   - Problem: The code example uses shorthand parameter form `(i, d)` while the task spec recommends explicit typing
   - Recommendation: Either add explicit types like `(i: IInquirer, d: IDeterminism)` or explain both forms are valid

3. **Template files directory naming ambiguity**
   - Problem: Documentation uses `templates/` (plural) in the mkdir command, but should clarify this is a user-defined directory name
   - Recommendation: Note that the directory name is configurable via the `root` property in the processor config

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 3     |
| 🟠       | 3     |

---

### developer/templates/tutorials/indexx

<!-- source: content/docs/developer/templates/tutorials/index.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/index.mdx

> Index page listing progressive tutorials for learning CyanPrint template development. The index itself has minimal claims but references tutorials that contain significant source code inaccuracies.

### 🔴 Source Code Inaccuracies

1. **Tutorial 3 references `GlobType.Ignore` which does not exist**

   - **Documented**: Tutorial 3 description states "Handling binary files" and the linked tutorial (`03-changing-glob.mdx`) includes a `GlobType.Ignore` option in its GlobType Options table (line 100)
   - **Actual**: Only `GlobType.Template = 0` and `GlobType.Copy = 1` exist in the SDK
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`:
     ```ts
     enum GlobType {
       Template = 0,
       Copy = 1,
     }
     ```

2. **Tutorial 4 uses `d.uuid()` which does not exist on `IDeterminism` interface**

   - **Documented**: Tutorial 4 "Asking Questions" learning path leads to `04-asking-questions.mdx:191` which uses `const uuid = d.uuid();`
   - **Actual**: The `IDeterminism` interface only has `get(key: string, origin: () => string): string` method
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`:
     ```ts
     interface IDeterminism {
       get(key: string, origin: () => string): string;
     }
     ```

3. **Full Example tutorial uses `d.uuid()` which does not exist**

   - **Documented**: Full Example tutorial learning path leads to `full-example.mdx:106` which uses `const projectId = d.uuid();`
   - **Actual**: Same as above - only `get()` method exists on `IDeterminism`
   - **Evidence**: Same as above

4. **Documentation claims `IDefine` interface exists with `uuid()`, `timestamp()`, `seq()` methods**

   - **Documented**: `types.mdx:150-159` shows an `IDefine` interface with these methods
   - **Actual**: The actual interface is `IDeterminism` with only a `get()` method. No `IDefine` interface exists in the SDK
   - **Evidence**: Grep search of `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src` found no `IDefine` interface

5. **`dateSelect()` return type mismatch**
   - **Documented**: `types.mdx:136` shows `dateSelect(...): Promise<Date>`
   - **Actual**: The SDK returns `Promise<string>`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26`:
     ```ts
     dateSelect(q: DateQ): Promise<string>;
     dateSelect(q: string, id: string, help?: string | null): Promise<string>;
     ```

### 🟡 Documentation Issues

1. **Typo in Tutorial 4 description**

   - **Problem**: Line 46 shows "IInquirer interface" with double 'I' at the beginning ("IInquirer" is correct as it's the interface name, but "IInquirer interface" reads awkwardly)
   - **Location**: Line 46: "- IInquirer interface"
   - **Fix**: Change to "- The IInquirer interface" for better readability

2. **Learning path descriptions promise features that don't exist in source code**

   - **Problem**: The learning path descriptions link to tutorials containing significant inaccuracies (e.g., `GlobType.Ignore` in tutorial 3, `d.uuid()` in tutorials 4 and full-example) that cannot be detected from the index alone
   - **Location**: Lines 32-57 (entire Learning Path section)
   - **Fix**: Either update the referenced tutorials to use correct SDK APIs, or update the learning path descriptions to reflect only accurate content

3. **Prerequisites mention "CyanPrint CLI" without installation instructions**
   - **Problem**: Line 64 lists "CyanPrint CLI installed" as a prerequisite but provides no link or instructions for installation
   - **Location**: Line 64
   - **Fix**: Add a link to installation documentation or CLI reference

### 🟠 Other Problems

1. **Documentation-code inconsistency suggests systemic issue**

   - **Problem**: The `types.mdx` reference documents an `IDefine` interface and `GlobType.Ignore` that don't exist in the SDK. This suggests either: (a) the SDK was refactored and documentation was not updated, or (b) documentation was written for a planned API that was never implemented
   - **Recommendation**: Audit all documentation against actual SDK types in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/`

2. **Interface naming inconsistency**
   - **Problem**: Documentation uses `IDefine` while SDK uses `IDeterminism`. The parameter is documented as `d` (for "define") but the interface is about determinism
   - **Recommendation**: Either rename the interface in SDK to `IDefine` (breaking change) or update all documentation to use `IDeterminism` consistently

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### developer/plugins/reference/sdk/input-outputx

# 📄 File: content/docs/developer/plugins/reference/sdk/input-output.mdx

> Documentation for Plugin Input/Output types used with the `StartPluginWithLambda` function from `@atomicloud/cyan-sdk`.

### 🔴 Source Code Inaccuracies

1. **PluginInput type name is incorrect**

   - **Documented**: `interface PluginInput` as a type imported/used from `@atomicloud/cyan-sdk`
   - **Actual**: The SDK exports `CyanPluginInput`, not `PluginInput`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` exports `CyanPluginInput`, and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5` defines `LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>`
   - **Impact**: All code examples showing `import { ... PluginInput ... } from '@atomicloud/cyan-sdk'` will fail because `PluginInput` is not exported

2. **LambdaPluginFn input type mismatch**

   - **Documented**: Documentation implies the lambda function receives `PluginInput`
   - **Actual**: `LambdaPluginFn` receives `CyanPluginInput`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5`: `type LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>`

3. **PluginInput exists but is internal**
   - **Documented**: `PluginInput` appears to be a public SDK type
   - **Actual**: `PluginInput` exists in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts` but is NOT exported from `main.ts`. It's an internal type used by the service layer.
   - **Evidence**: Compare `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts` (PluginInput) with the exports at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:183-207` (only `CyanPluginInput` is exported)

### 🟡 Documentation Issues

1. **Incorrect import statement in Usage example**

   - **Problem**: The Usage section shows importing `StartPluginWithLambda` from `@atomicloud/cyan-sdk` without any type imports, which is correct. However, the related types.mdx file shows `import { StartPluginWithLambda, type PluginInput, type PluginOutput }` which is incorrect since `PluginInput` is not exported.
   - **Location**: Lines 38-47 (Usage section) and cross-referenced types.mdx
   - **Fix**: Either update SDK to export `PluginInput` as an alias for `CyanPluginInput`, or update all documentation to use `CyanPluginInput`

2. **Type definition shown is not the actual exported type**

   - **Problem**: The documentation shows `interface PluginInput { ... }` but users will need to use `CyanPluginInput` when importing from the SDK
   - **Location**: Lines 16-21 (Definition section)
   - **Fix**: Either rename to `CyanPluginInput` in documentation or add a note that `CyanPluginInput` is the actual exported type

3. **Inconsistent type naming convention**
   - **Problem**: The documentation uses `PluginInput` but the SDK uses `CyanPluginInput`, which may confuse users who try to copy code examples
   - **Location**: Throughout the document
   - **Fix**: Align documentation with actual SDK exports

### 🟠 Other Problems

1. **The code examples may still work due to TypeScript inference**

   - **Problem**: The code examples in input-output.mdx don't explicitly import `PluginInput`, so they may work because TypeScript infers the type from the lambda parameter. However, this creates inconsistency with the types.mdx file which explicitly imports `PluginInput`.
   - **Recommendation**: Ensure all documentation files use consistent type names that match SDK exports

2. **Related documentation file has the same issue**

   - **Problem**: The related file `types.mdx` explicitly imports `PluginInput` which doesn't exist in SDK exports
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/plugins/reference/sdk/types.mdx:70` shows: `import { StartPluginWithLambda, type PluginInput, type PluginOutput } from '@atomicloud/cyan-sdk';`
   - **Recommendation**: Update types.mdx to use `CyanPluginInput` instead of `PluginInput`

3. **Actual e2e test plugins don't use explicit type imports**
   - **Problem**: The real plugins in iridium e2e tests use `PluginOutput` but don't explicitly type the input, relying on inference
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5` uses `async (input): Promise<PluginOutput>` without explicit input type
   - **Recommendation**: Documentation should match real-world usage patterns

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 3     |
| 🟠       | 3     |

### Key Finding

The documentation uses `PluginInput` as the type name, but the SDK actually exports `CyanPluginInput`. While the `PluginInput` interface exists in the codebase at `domain/plugin/input.ts`, it is an internal type that is NOT exported from the main SDK entry point. The public API uses `CyanPluginInput` (defined in `domain/core/cyan_script_model.ts` and exported from `main.ts`).

### Recommended Actions

1. **Option A**: Update SDK to export `PluginInput` as an alias: `export type { CyanPluginInput as PluginInput }`
2. **Option B**: Update all documentation to use `CyanPluginInput` instead of `PluginInput`
3. **Option C**: Document both names and explain the relationship

---

### developer/plugins/tutorials/first-pluginx

<!-- source: content/docs/developer/plugins/tutorials/first-plugin.mdx -->

# 📄 File: content/docs/developer/plugins/tutorials/first-plugin.mdx

> Tutorial for creating a CyanPrint plugin that runs post-processing commands after file generation. The documentation is generally accurate but has minor type naming inconsistencies and Dockerfile patterns that differ from e2e test implementations.

### 🔴 Source Code Inaccuracies

1. **Type Name Mismatch: PluginInput vs CyanPluginInput**

   - **Documented**: `PluginInput` (in tables at lines 114-120)
   - **Actual**: `CyanPluginInput` is the exported type name from the SDK
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` exports `CyanPluginInput`, and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` defines `interface CyanPluginInput { directory: string; config: unknown; }`

2. **Dockerfile Bun Version Inconsistency**

   - **Documented**: `FROM oven/bun:1.1.31` (line 82)
   - **Actual**: E2E test plugins use `FROM oven/bun:1.0.11`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/Dockerfile:1` both use `oven/bun:1.0.11`

3. **Dockerfile COPY Pattern Mismatch**
   - **Documented**: `COPY package.json bun.lockb* ./` with wildcard (line 90)
   - **Actual**: E2E Dockerfiles use separate COPY commands without wildcards
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:4-5` shows `COPY package.json .` and `COPY bun.lockb .` as separate lines

### 🟡 Documentation Issues

1. **Implicit Return Type**

   - **Problem**: The tutorial code does not explicitly type the return value as `Promise<PluginOutput>`, which is shown in actual plugin examples
   - **Location**: Lines 42-74 (plugin code example)
   - **Fix**: Add explicit return type `: Promise<PluginOutput>` and import `PluginOutput` type for better type safety, matching the pattern in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5`

2. **Missing Type Import**

   - **Problem**: The code example doesn't import `PluginOutput` type which is used in real implementations
   - **Location**: Lines 38-75 (plugin code example)
   - **Fix**: Show importing `PluginOutput` from `@atomicloud/cyan-sdk` as shown in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1`

3. **Dockerfile COPY Pattern Documentation**

   - **Problem**: Documentation shows combined `COPY package.json bun.lockb* ./` but actual e2e implementation uses separate COPY commands
   - **Location**: Lines 89-91 (Dockerfile example)
   - **Fix**: Either update to match actual implementation (separate COPY lines) or document that both patterns work

4. **Table Type Name Inconsistency**
   - **Problem**: The "PluginInput" table header should be "CyanPluginInput" to match the actual SDK export
   - **Location**: Line 116 (table header)
   - **Fix**: Rename to `CyanPluginInput` to match SDK export at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193`

### 🟠 Other Problems

1. **Bun Version Consistency**

   - **Problem**: The Bun version in Docker examples (1.1.31) doesn't match the version used in e2e plugin tests (1.0.11)
   - **Recommendation**: Update e2e plugin tests to use 1.1.31 for consistency, or document version requirements

2. **Wildcard Pattern Justification**
   - **Problem**: The `bun.lockb*` wildcard pattern suggests the lockfile might sometimes not exist, but this isn't explained
   - **Recommendation**: Add a note explaining when the wildcard is useful (e.g., optional lockfile scenarios)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 4     |
| 🟠       | 2     |

---

### developer/templates/how-to/ask-datex

<!-- source: content/docs/developer/templates/how-to/ask-date.mdx -->

# 📄 File: content/docs/developer/templates/how-to/ask-date.mdx

> Documentation for the `dateSelect` API for asking date questions in templates. Contains critical inaccuracies regarding return types (returns string, not Date), validation function input type (receives string, not Date), and all code examples that use Date methods on the returned value would fail at runtime.

### 🔴 Source Code Inaccuracies

1. **Return Type Incorrect**

   - **Documented:** `// Returns: Date object` (line 18)
   - **Actual:** `Promise<string>` - The dateSelect method returns a string, not a Date object
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26` shows `dateSelect(q: DateQ): Promise<string>;` and `dateSelect(q: string, id: string, help?: string | null): Promise<string>;`

2. **Return Type Used in Code Examples Incorrect**

   - **Documented:** Code examples use `deadline.toISOString()`, `deadline.getFullYear()`, `deadline.getMonth()`, `endDate.getTime()`, `licenseExpiry.getTime()`, `date < new Date()` comparison
   - **Actual:** The return type is `string`, not `Date`, so these Date methods would fail at runtime
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:148` shows `if (isStringAnswer(answer)) return Promise.resolve(answer.answer);` - returns a string

3. **Validation Function Receives String, Not Date**

   - **Documented:** `validate: (date) => { if (date < new Date()) ... }` (lines 107-111) - implies date parameter is a Date object
   - **Actual:** The validate function receives a `string`, not a Date object
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:37` shows `validate?: (input: string) => string | null;`

4. **Date Calculations Would Fail**

   - **Documented:** Lines 70-71 show `endDate.getTime() - startDate.getTime()` which requires Date objects
   - **Actual:** Since `dateSelect` returns strings, you would need to parse them first: `new Date(endDate).getTime() - new Date(startDate).getTime()`
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26`

5. **Formatting Examples Incorrect**
   - **Documented:** Lines 41-49 show `deadline.toISOString().split('T')[0]` to format the date
   - **Actual:** Since `dateSelect` returns a string (likely already in ISO format like "2024-12-31"), calling `.toISOString()` on a string would fail
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:148`

### 🟡 Documentation Issues

1. **Missing minDate/maxDate Properties**

   - **Problem:** The documentation does not mention the `minDate` and `maxDate` properties available on DateQ
   - **Location:** Object Form section (lines 23-31)
   - **Fix:** Add examples showing `minDate` and `maxDate` usage for date range constraints
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:40-41` shows `minDate?: Date | null;` and `maxDate?: Date | null;`

2. **Test File Shows Additional Properties**
   - **Problem:** The test file shows additional properties like `maxDate`, `minDate` being used but not documented
   - **Location:** Common Patterns section
   - **Fix:** Document the `minDate` and `maxDate` properties for constraining date selection
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:47-64`

### 🟠 Other Problems

1. **Inconsistent Return Type Across SDKs**

   - **Problem:** The .NET SDK returns `DateOnly` while Node SDK returns `string`
   - **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Inquirer.cs:17` shows `Task<DateOnly> DateSelect(DateQ q);`
   - **Recommendation:** Document this difference clearly or note which SDK this documentation applies to

2. **Validation Example Needs Conversion**
   - **Problem:** The validation example compares `date < new Date()` but `date` is a string
   - **Recommendation:** Update validation example to: `validate: (dateStr) => { if (new Date(dateStr) < new Date()) { return 'Start date must be in the future'; } return null; }`

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 2     |
| 🟠       | 2     |

---

### developer/templates/how-to/ask-passwordx

<!-- source: content/docs/developer/templates/how-to/ask-password.mdx -->

# 📄 File: content/docs/developer/templates/how-to/ask-password.mdx

> Documentation for password questions in templates. The password method API is documented correctly but has some inconsistencies with parameter naming conventions. The Environment File Pattern example has a non-functional code structure.

### 🔴 Source Code Inaccuracies

1. **Parameter naming convention mismatch** | Documented uses `desc` but shorthand form examples show the third parameter as "Description" | The actual IInquirer interface (helium/sdks/node/src/domain/core/inquirer.ts:14) uses `help` as the parameter name: `password(q: string, id: string, help?: string | null): Promise<string>;` The documentation consistently uses `desc` in object forms but the shorthand form's third parameter description should clarify it maps to `help` in some SDKs.

2. **Environment File Pattern - Invalid return structure** | Documented shows `return { processors: [...] }` at file level | The `return` statement on line 75-89 is not valid in template context. Templates use `StartTemplateWithLambda` which should return a `Cyan` object, not a raw object with processors. The correct pattern should use the `d` (draft) parameter to set processors.

### 🟡 Documentation Issues

1. **Inconsistent parameter name between SDKs** | Multiple locations use `desc` | The Node SDK uses `help` as the parameter name (inquirer.ts:14), while the documentation uses `desc`. The object form's `desc` property is correct per question.ts:47, but shorthand form parameter naming could be clarified.

2. **Missing confirmation property documentation** | Object form section | PasswordQ interface (question.ts:44-52) includes a `confirmation?: boolean | null` property that allows password confirmation prompts, but this is not documented in the how-to guide.

3. **QuestionType enum value not shown** | Object form examples | The QuestionType.Password enum value is `4` according to question.ts:7, but the documentation shows `QuestionType.Password` without mentioning the numeric value which could help with debugging.

4. **Validate return type could be clearer** | Validation patterns section | The validate function returns `string | null` where string is the error message, but this could be more explicitly stated for clarity.

### 🟠 Other Problems

1. **No import statement shown** | All code examples | The code examples use `i.password()` and `QuestionType.Password` but don't show the necessary import statements for `QuestionType` from the SDK.

2. **Safe Patterns section incomplete** | Lines 47-65 | The example shows `config: { vars: { ... } }` but doesn't clarify this should be inside a processor's config, not a standalone config object.

3. **No link to related types documentation** | End of document | The "Related" section links to the IInquirer reference but could also link to PasswordQ type documentation if it exists.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 4     |
| 🟠       | 3     |

---

### developer/templates/how-to/pass-images-binariesx

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
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 3     |
| 🟠       | 3     |

---

### developer/templates/how-to/validate-inputx

<!-- source: content/docs/developer/templates/how-to/validate-input.mdx -->

# 📄 File: content/docs/developer/templates/how-to/validate-input.mdx

> Documentation explaining how to use the `validate` function for user input validation in templates. The document contains examples for multiple question types but incorrectly claims CheckboxQ supports validation.

### 🔴 Source Code Inaccuracies

1. **Checkbox validation not supported** | Documented: `validate: (selected) => {...}` on checkbox questions | Actual: `validate?: null` in TypeScript, `validate: None = None` in Python, `readonly Func<string, string?>? Validate => null` in C# | Evidence: `helium/sdks/node/src/domain/core/question.ts:16`, `helium/sdks/python/cyanprintsdk/domain/core/question.py:12`, `helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/CheckboxQ.cs:6`

2. **Checkbox validate parameter type incorrect** | Documented: `validate: (selected) => {...}` with `selected` as array | Actual: Validate function signature is always `(input: string) => string | null` - receives string, not array | Evidence: `helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/IQuestion.cs` shows `Func<string, string?>? Validate`

3. **Select validation not supported** | Documented (via related link): validate on select() | Actual: `validate?: null` for SelectQ | Evidence: `helium/sdks/node/src/domain/core/question.ts:59`, `helium/sdks/dotnet/sulfone-helium/Domain/Core/Questions/SelectQ.cs:6`

4. **Confirm validation not supported** | Documented (implied): object form supports validate | Actual: `validate?: null` for ConfirmQ | Evidence: `helium/sdks/node/src/domain/core/question.ts:26`

### 🟡 Documentation Issues

1. **Checkbox Validation section shows non-working code** | Lines 155-170 | Remove this section or mark as unsupported since CheckboxQ.validate is always null

2. **Missing clarification on supported question types** | Throughout document | Add table showing validation support: Text (YES), Password (YES), DateSelect (YES), Select (NO), Checkbox (NO), Confirm (NO)

3. **Related link may have conflicting information** | Line 201 | The IInquirer reference may also show unsupported validation patterns - needs consistency check

### 🟠 Other Problems

1. **No architectural context for validation execution** | Document doesn't explain validation runs server-side via `/api/template/validate` endpoint | Add section explaining validation architecture

2. **No working examples in codebase** | None of the Iridium e2e templates (template1, template2, template3) use validate property | Consider adding a working example template

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### developer/templates/reference/sdk/globbingx

<!-- source: content/docs/developer/templates/reference/sdk/globbing.mdx -->

# 📄 File: content/docs/developer/templates/reference/sdk/globbing.mdx

> This document provides globbing pattern reference for templates. Several inaccuracies were found regarding GlobType enum values and unsupported features.

### 🔴 Source Code Inaccuracies

1. **GlobType.Ignore does not exist** | Documented: `GlobType.Ignore` with use case "Files to skip entirely" | Actual: Only `GlobType.Template` and `GlobType.Copy` exist | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`:

   ```typescript
   enum GlobType {
     Template = 0,
     Copy = 1,
   }
   ```

   Same in Python SDK (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:6-9`), .NET SDK (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Cyan.cs:3-7`), and Iridium/Rust (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:4-7`).

2. **Python SDK has different enum values** | Documented: `GlobType.Template` = 0, `GlobType.Copy` = 1 (implicitly via Node SDK) | Actual: Python SDK uses `Template = 1`, `Copy = 2` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:6-9`:
   ```python
   @dataclass
   class GlobType(Enum):
       Template = 1
       Copy = 2
   ```
   Note: The `@dataclass` decorator on an Enum class is incorrect Python usage (enums should not be dataclasses), but this is a code bug, not documentation issue.

### 🟡 Documentation Issues

1. **Extglob syntax examples may not work universally** | Problem: Patterns like `**/*.ts?(x)` and `**/*.@(js|ts)?(x)` are documented, but the callout admits they "may not be supported in all versions" | Location: Lines 66-78 | Fix: Either remove these examples or clarify which SDK versions/platforms support them. The glob library v11 uses minimatch which supports extglob by default, but this should be tested and documented clearly.

2. **Inconsistent terminology** | Problem: The documentation uses "files" array in examples but doesn't explain that `CyanGlob` objects are configured per-processor within `CyanProcessor.files` | Location: Throughout the document | Fix: Add context that glob patterns are part of the `Cyan` configuration structure, not standalone configuration.

3. **Testing patterns section inaccurate** | Problem: The `find` command example `find templates -name "**/*.md"` is incorrect - `find` doesn't support `**` globbing in `-name` by default, and the syntax shown would look for literal `**` in filenames | Location: Lines 183-188 | Fix: Use correct commands like `find templates -name "*.md"` or use shell globbing with `ls templates/**/*.md`.

### 🟠 Other Problems

1. **Missing brace expansion syntax** | Problem: The pattern syntax table omits brace expansion `{a,b,c}` which is commonly used and supported by the glob library | Recommendation: Add `{a,b,c}` pattern to the syntax table (e.g., `*.{ts,tsx,js,jsx}`).

2. **No SDK-specific notes** | Problem: The document doesn't differentiate between SDKs (Node, Python, .NET) which have slightly different implementations | Recommendation: Add a section noting SDK-specific differences, particularly for Python which has different enum values and the field naming convention (`root` vs `Root`, etc.).

3. **Missing import statement in examples** | Problem: Code examples show `GlobType.Template` usage but do not show the required import statement | Recommendation: Add import example: `import { GlobType } from '@atomicloud/cyan-sdk';`.

4. **`root` property default not documented** | Problem: The documentation does not explain that the `root` property in `CyanGlob` defaults to `.` (current directory) when not specified | Recommendation: Document that `root` is optional and defaults to the read directory.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 4     |

---

### contributor/indexx

# File: content/docs/contributor/index.mdx

> This is an overview page for contributors to the CyanPrint platform. It provides a high-level introduction to the platform's components and links to more detailed documentation sections (Architecture, Repositories, Development).

### Source Code Inaccuracies

1. **Argon Repository Purpose - Incorrect Name Reference**

   - **Documented**: Argon repository is "sulfone.argon" with purpose "Registry Web UI"
   - **Actual**: The README in the argon repository refers to itself as "Sulfone Carbon" and the package.json shows `"name": "carbon"`. While it is indeed a SvelteKit frontend for the CyanPrint Registry, the internal naming uses "Carbon" not "Argon".
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.md:1` - "Sulfone Carbon", `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:2` - `"name": "carbon"`

2. **Helium SDK Languages - Missing C# Naming**

   - **Documented**: Helium provides "SDKs (TypeScript, Python, C#)"
   - **Actual**: The SDKs are correctly listed, but the .NET SDK is more accurately described as ".NET" rather than "C#" in the source documentation. The source uses ".NET" terminology.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/docs/developer/00-README.md:7-11` - Lists ".NET" not "C#"

3. **Helium Package Names Not Documented**
   - **Documented**: Just says "SDKs (TypeScript, Python, C#)"
   - **Actual**: The actual package names are:
     - Node.js: `@atomicloud/cyan-sdk` (v2.1.0)
     - Python: `cyanprintsdk` (v2.1.0)
     - .NET: `AtomiCloud.CyanPrint` (v2.1.0)
   - **Evidence**:
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2` - `"name": "@atomicloud/cyan-sdk"`
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/pyproject.toml:2` - `name = "cyanprintsdk"`
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/sulfone-helium.csproj:14` - `<PackageId>AtomiCloud.CyanPrint</PackageId>`

### Documentation Issues

1. **Argon Description Ambiguity**

   - **Problem**: The Argon component is described as "Registry Web UI" but the source code refers to itself as "Carbon" which could cause confusion for contributors trying to navigate the codebase.
   - **Location**: Line 29 - Argon table row
   - **Fix**: Either note that Argon is internally named "Carbon" in the source, or update to clarify the naming convention (e.g., "Argon (internally 'Carbon') - Registry Web UI")

2. **Missing SDK Package Information**

   - **Problem**: The Helium row mentions "SDKs (TypeScript, Python, C#)" but does not provide the actual package names that developers would need to use or reference.
   - **Location**: Line 30 - Helium table row
   - **Fix**: Include the actual package names (`@atomicloud/cyan-sdk`, `cyanprintsdk`, `AtomiCloud.CyanPrint`) or link to the Helium documentation where these are listed

3. **Helium Version Mismatch in Source**
   - **Problem**: The helium source documentation (`docs/developer/00-README.md`) lists SDK versions as 2.0.1, but the actual packages are at version 2.1.0. This is a source code documentation issue that could mislead contributors.
   - **Location**: Not directly in contributor/index.mdx, but related to Helium documentation
   - **Fix**: Update helium docs/developer/00-README.md to reflect actual versions (2.1.0)

### Other Problems

1. **Inconsistent Repository Naming Convention**

   - **Problem**: The documentation uses the naming pattern "sulfone.{component}" (e.g., sulfone.iridium, sulfone.boron) for GitHub repository references, but the actual GitHub URLs use a mix of patterns. The Zinc docs reference links like `https://github.com/AtomiCloud/argon` (without sulfone prefix), `https://github.com/AtomiCloud/iridium`, etc.
   - **Recommendation**: Verify the actual GitHub repository URLs and update the documentation to use consistent naming or clarify the relationship between the internal "sulfone.{component}" naming and the public GitHub repository names.

2. **Silicon Repository Purpose Could Be More Descriptive**
   - **Problem**: Silicon is described only as "Documentation site" without mentioning it's built with Fumadocs/Next.js which could be useful context for contributors.
   - **Recommendation**: Consider adding technology context (e.g., "Documentation site (Fumadocs/Next.js)") to help contributors understand the tech stack.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 3     |
| Documentation Issues     | 3     |
| Other Problems           | 2     |

---

### contributor/repositories/indexx

# File: content/docs/contributor/repositories/index.mdx

> Overview page listing all CyanPrint repositories with their tech stacks, purposes, and links to detailed documentation.

### Source Code Inaccuracies

1. **Boron Tech Stack**

   - Documented: Rust, Tokio
   - Actual: Go, Gin
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod:1` shows `module github.com/AtomiCloud/sulfone.boron` with `go 1.24.0`, and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/go.mod:9` shows `github.com/gin-gonic/gin v1.9.1`. The main server in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/server.go:17` imports `github.com/gin-gonic/gin`.

2. **Zinc Tech Stack**

   - Documented: Rust, Axum
   - Actual: C#, ASP.NET Core
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/App.csproj:1` shows `<Project Sdk="Microsoft.NET.Sdk.Web">` with `<TargetFramework>net8.0</TargetFramework>`. The solution file at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App.sln` is a Visual Studio solution with C# projects. No Rust or Axum files exist in the repository.

3. **Argon Tech Stack**

   - Documented: TypeScript, React, Next.js
   - Actual: TypeScript, SvelteKit (not React/Next.js)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:1` shows `"name": "carbon"` and lists `@sveltejs/kit`, `svelte` as dependencies. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/svelte.config.js` confirms SvelteKit configuration. The README at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.md:3` states "This is the frontend project for CyanPrint Registry written in SvelteKit."

4. **Argon Repository Name**
   - Documented: sulfone.argon
   - Actual: The internal package name is "carbon" (not argon)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:2` shows `"name": "carbon"`. The README title at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.md:1` is "Sulfone Carbon".

### Documentation Issues

1. **Inconsistent Repository Naming**

   - Problem: The documentation refers to "sulfone.argon" but the actual package.json and README refer to it as "carbon" (Sulfone Carbon).
   - Location: Table row for Argon and Argon (Web UI) section
   - Fix: Either update documentation to use "carbon" consistently, or update the package.json name to match "argon".

2. **Framework descriptions are incorrect**
   - Problem: The framework column lists frameworks that don't match actual implementations.
   - Location: Repository Overview table (lines 36-43)
   - Fix: Update table to show:
     - Boron: Go, Gin (not Rust, Tokio)
     - Zinc: C#, ASP.NET Core (not Rust, Axum)
     - Argon: TypeScript, SvelteKit (not React, Next.js)

### Other Problems

1. **Mermaid Diagram Labels**

   - Problem: The Mermaid diagram shows repository names but doesn't reflect the actual technology choices. Consider adding tech stack annotations.
   - Recommendation: Consider updating the diagram to show actual technologies (e.g., "Boron<br/>Go/Gin" instead of just "Boron<br/>Executor") for better clarity.

2. **Missing Repository Key Features Verification**
   - Problem: The "Key Features" listed for each repository (lines 53, 63, 73, 83, 92) could not be fully verified against source code in the scope of this review.
   - Recommendation: Conduct additional verification of claimed features against actual implementation.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 4     |
| Documentation Issues     | 2     |
| Other Problems           | 2     |

---

### developer/basics/architecture

<!-- source: content/docs/developer/basics/architecture.mdx -->

# 📄 File: content/docs/developer/basics/architecture.mdx

> Documentation accurately describes the CyanPrint containerized architecture with accurate port assignments and API endpoints. Minor inaccuracies found in registry API path format and container path descriptions.

### 🔴 Source Code Inaccuracies

1. **Registry API Path Format**

   - Documented: `GET /templates/atomi/template`
   - Actual: `GET /api/v1/Template/slug/{username}/{name}/versions/latest`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/http/client.rs:219-224` shows the actual endpoint format for fetching templates is `/api/v1/Template/slug/{username}/{name}/versions/latest?bumpDownload=true`. The documentation shows a simplified path that does not match the actual API.

2. **Container Output Path**
   - Documented: `/workspace/output` as "Final output before delivery to CLI"
   - Actual: `/workspace/area/<uuid>` is used for processor outputs, and the merged output is at `/workspace/area/<merge-uuid>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:147-148` shows `WriteDir: "/workspace/area/" + filePath.String()` for processor output, and line 313 shows `mergePath := "/workspace/area/" + mergeDir.String()`. There is no `/workspace/output` path in the codebase.

### 🟡 Documentation Issues

1. **Missing API Version in Registry Endpoint**

   - Problem: The sequence diagram shows `GET /templates/atomi/template` but the actual Zinc API uses versioned endpoints with `/api/v1/Template/slug/...` format
   - Location: Execution Flow sequence diagram (line 58)
   - Fix: Update to show `GET /api/v1/Template/slug/atomi/template/versions/latest` or clarify this is a simplified representation

2. **Path Description Inconsistency**

   - Problem: The Critical Paths table lists `/workspace/output` which does not exist in the codebase. The actual flow uses `/workspace/area/<uuid>` for individual processor outputs and `/workspace/area/<merge-uuid>` for merged output.
   - Location: Container Path Mechanics section (lines 94-98)
   - Fix: Replace `/workspace/output` with `/workspace/area/<uuid>` and clarify the merging process

3. **Merger Container Not Listed**

   - Problem: The Container Communication table lists Template, Processor, and Plugin containers but does not mention the Merger container which is a key component
   - Location: Container Communication table (lines 78-82)
   - Fix: Add a row for the Merger container which operates on port 9000 with endpoint `POST /merge/:sessionId` and `POST /zip`

4. **Missing Coordinator Port**
   - Problem: The SDK Port Assignments table only lists artifact ports (5550, 5551, 5552) but does not mention the Coordinator's port 9000
   - Location: SDK Port Assignments section (lines 100-108)
   - Fix: Add Coordinator port 9000 for completeness, or clarify this table is specifically for artifact SDKs

### 🟠 Other Problems

1. **Simplified Execution Flow**

   - Problem: The execution flow diagram oversimplifies the actual process. The actual flow includes warming, session management, and zipping phases not shown
   - Recommendation: Consider adding a note that this is a simplified view, or expand to include the warm phase and zipping phase

2. **Argon Web UI Connection**
   - Problem: The diagram shows UI --> API connection but does not explain that Argon is a SvelteKit frontend that connects to Zinc API
   - Recommendation: Add brief description of Argon's role as the web interface for browsing templates

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 4     |
| 🟠       | 2     |

---

### developer/basics/introductionx

# File: content/docs/developer/basics/introduction.mdx

> This document introduces CyanPrint development and describes the three artifact types: Templates, Processors, and Plugins. It includes a table with artifact names, purposes, and SDK ports, followed by brief descriptions of each artifact and a workflow diagram.

### Source Code Inaccuracies

1. **Missing Resolver Artifact**
   - **Documented**: Only three artifacts (Templates, Processors, Plugins) are listed
   - **Actual**: There is a fourth artifact type called "Resolver" with SDK port 5553
   - **Evidence**:
     - `helium/sdks/python/cyanprintsdk/main.py:84` - Plugin runs on port 5552
     - `helium/sdks/python/cyanprintsdk/main.py:119` - Processor runs on port 5551
     - `helium/sdks/python/cyanprintsdk/main.py:178` - Template runs on port 5550
     - `helium/sdks/python/cyanprintsdk/main.py:212` - Resolver runs on port 5553
     - `helium/sdks/node/src/main.ts:65` - Plugin port 5552
     - `helium/sdks/node/src/main.ts:89` - Processor port 5551
     - `helium/sdks/node/src/main.ts:112` - Template port 5550
     - `helium/sdks/node/src/main.ts:147` - Resolver port 5553
     - `helium/sdks/dotnet/sulfone-helium/Server.cs:182` - Resolver explicitly runs on `http://0.0.0.0:5553`
     - `helium/sdks/node/src/domain/core/cyan_script.ts:23-25` - `ICyanResolver` interface defined alongside other artifact interfaces
     - `zinc/docs/developer/surfaces/api/06-resolver.md` - Full Resolver API documentation exists in Zinc registry

### Documentation Issues

1. **Incomplete Artifact Table**

   - **Problem**: The table in "The Three Artifacts" section only lists three artifacts but source code shows four
   - **Location**: Lines 12-16 (artifact table)
   - **Fix**: Add Resolver row: `| **Resolvers** | Resolve template dependencies dynamically | 5553 |`

2. **Missing Resolver Section**

   - **Problem**: No description section for Resolvers like there is for Templates, Processors, and Plugins
   - **Location**: After line 41 (after Plugins section)
   - **Fix**: Add a "### Resolvers" section explaining their purpose (resolving template dependencies dynamically)

3. **Missing Resolver in "How They Work Together" Diagram**

   - **Problem**: The workflow diagram and numbered steps don't include Resolvers
   - **Location**: Lines 45-55
   - **Fix**: Consider whether Resolvers should be part of the workflow documentation or clarify that they are a separate/optional component

4. **Missing Resolver Link in "Choose Your Path"**

   - **Problem**: No link to Resolver documentation in the navigation section
   - **Location**: Lines 57-61
   - **Fix**: Add `- [Create a Resolver](/developer/resolvers) - Build dependency resolvers` (if Resolver docs exist)

5. **Inconsistent Title Count**
   - **Problem**: Section title says "The Three Artifacts" but source code shows four artifacts
   - **Location**: Line 10
   - **Fix**: Change to "The Four Artifacts" or "CyanPrint Artifacts" if Resolver is considered a primary artifact

### Other Problems

1. **Ambiguous Column Header "SDK Port"**

   - **Problem**: The column header "SDK Port" may be confusing - it's the port that each artifact type's server listens on when running in a container
   - **Recommendation**: Consider renaming to "Default Port" or "Container Port" for clarity

2. **Resolver Status Unclear**
   - **Problem**: The Resolver artifact is fully implemented in the SDK (Python, Node, .NET) and has API documentation in Zinc, but is not mentioned in this introduction document
   - **Recommendation**: Clarify whether Resolvers are:
     - A fourth primary artifact that should be documented
     - An internal/advanced feature that doesn't need introduction coverage
     - An experimental feature in development

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 1     |
| Documentation Issues     | 5     |
| Other Problems           | 2     |

---

### developer/processors/indexx

<!-- source: content/docs/developer/processors/index.mdx -->

# 📄 File: content/docs/developer/processors/index.mdx

> Documentation for processor development covering architecture, SDK usage, and learning paths. Contains accurate high-level concepts but the Quick Example code has a critical property name error that would cause runtime failures.

### 🔴 Source Code Inaccuracies

1. **Quick Example - input property name is wrong**

   - Documented: `input.writeDirectory` (line 132)
   - Actual: `input.writeDir`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `interface CyanProcessorInput { readDir: string; writeDir: string; globs: CyanGlob[]; config: unknown; }`. Also verified in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` - `return { directory: input.writeDir };`

2. **Components table - ProcessorInput type name differs from exported type**
   - Documented: `ProcessorInput` as the input type from template (line 45)
   - Actual: The SDK exports and uses `CyanProcessorInput`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:194` exports `CyanProcessorInput`. The `LambdaProcessorFn` type at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/processor/lambda.ts:6` uses `CyanProcessorInput`. Note: `ProcessorInput` exists internally at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/processor/input.ts:3-8` with different property names (`readDirectory`/`writeDirectory`), but users never interact with this internal type.

### 🟡 Documentation Issues

1. **SDK package installation not documented**

   - Problem: The documentation shows `import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk'` but doesn't explain how to install the package
   - Location: Line 122
   - Fix: Add installation instructions (e.g., `npm install @atomicloud/cyan-sdk` or `bun add @atomicloud/cyan-sdk`)

2. **SDK version not specified**

   - Problem: Documentation doesn't specify which version of `@atomicloud/cyan-sdk` it describes
   - Location: Throughout document
   - Fix: Add version requirement (current SDK is v2.1.0 per `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:3`)

3. **Default processor Eta syntax claim unverified**

   - Problem: Documentation claims "The default processor uses Eta with `var__name__` syntax" (line 52) but this cannot be verified from the provided source paths. The iridium processors show Eta configuration but are example processors, not a "default" processor.
   - Location: Line 52
   - Fix: Either verify this claim against the actual default processor implementation or clarify that this refers to the standard processor template pattern

4. **Mermaid diagram uses informal naming**
   - Problem: The architecture diagram shows method names like `resolveAll`, `read`, `get`, `readAsStream`, `copy` which are accurate, but the flow representation is simplified
   - Location: Lines 24-37
   - Fix: Diagram is acceptable for conceptual understanding but could note it's a simplified flow

### 🟠 Other Problems

1. **Internal vs External type confusion**

   - Problem: The SDK has internal types (`ProcessorInput` with `readDirectory`/`writeDirectory`) and external types (`CyanProcessorInput` with `readDir`/`writeDir`). The documentation uses property names from the internal type but users only interact with the external type.
   - Recommendation: Ensure all documentation consistently uses the exported type names and property names (`CyanProcessorInput`, `readDir`, `writeDir`)

2. **Missing documentation for exported VirtualFile types**
   - Problem: The SDK exports and uses `VirtualFile`, `VirtualFileReference`, `VirtualFileStream` types (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts`) but these are not mentioned in the Learning Path reference links
   - Recommendation: Add documentation for VirtualFile types since users interact with them when calling `resolveAll()`, `get()`, and `readAsStream()`

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 4     |
| 🟠       | 2     |

---

### developer/templates/tutorials/03-changing-globx

<!-- source: content/docs/developer/templates/tutorials/03-changing-glob.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/03-changing-glob.mdx

> Tutorial covering glob patterns and GlobType enum for controlling file processing in CyanPrint templates. Contains one critical source code inaccuracy (non-existent `GlobType.Ignore`) and one incomplete code example (missing required `plugins` property).

### 🔴 Source Code Inaccuracies

1. **GlobType.Ignore Does Not Exist**

   - **Documented**: `GlobType.Ignore` - "Skip entirely" for temporary files (line 100, table row 3)
   - **Actual**: The `GlobType` enum only has `Template = 0` and `Copy = 1` values. There is no `Ignore` value in any SDK implementation.
   - **Evidence**:
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`:
       ```typescript
       enum GlobType {
         Template = 0,
         Copy = 1,
       }
       ```
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Cyan.cs:3-7`:
       ```csharp
       public enum GlobType
       {
           Template,
           Copy,
       }
       ```
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:6-9`:
       ```python
       @dataclass
       class GlobType(Enum):
           Template = 1
           Copy = 2
       ```
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/http/mapper.rs:201-206`:
       ```rust
       pub fn glob_type_res_mapper(r: &str) -> GlobType {
           match r {
               "template" => GlobType::Template(),
               "copy" => GlobType::Copy(),
               _ => panic!("unknown glob type"),
           }
       }
       ```
   - **Impact**: Users who try to use `GlobType.Ignore` will encounter compilation errors or runtime panics.

2. **Complete Example Missing Required `plugins` Property**
   - **Documented**: The "Complete Example" (lines 44-73) shows a return object with only `processors` array
   - **Actual**: The `Cyan` interface requires both `processors` AND `plugins` properties. Both are required (not optional) in all SDK implementations.
   - **Evidence**:
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27`:
       ```typescript
       interface Cyan {
         processors: CyanProcessor[];
         plugins: CyanPlugin[];
       }
       ```
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Cyan.cs:30-34`:
       ```csharp
       public class Cyan
       {
           public required IEnumerable<CyanProcessor> Processors { get; init; }
           public required IEnumerable<CyanPlugin> Plugins { get; init; }
       }
       ```
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:33-36`:
       ```python
       @dataclass
       class Cyan:
           processors: List[CyanProcessor]
           plugins: List[CyanPlugin]
       ```
   - **Impact**: TypeScript users will get type errors. The code will not compile.

### 🟡 Documentation Issues

1. **GlobType Options Table Contains Non-Existent Value**

   - **Problem**: The GlobType Options table (lines 96-100) includes `GlobType.Ignore` which does not exist in any SDK
   - **Location**: Lines 94-100
   - **Fix**: Remove the `GlobType.Ignore` row from the table, keeping only `Template` and `Copy`:
     ```markdown
     | Type                | Behavior                           | Use Case            |
     | ------------------- | ---------------------------------- | ------------------- |
     | `GlobType.Template` | Process with variable substitution | Text files, configs |
     | `GlobType.Copy`     | Copy without processing            | Images, binaries    |
     ```

2. **Incomplete Code Example Missing Required Property**

   - **Problem**: The "Complete Example" code will fail type checking because `plugins` is a required property
   - **Location**: Lines 44-73
   - **Fix**: Add `plugins: []` to the return object:
     ```typescript
     return {
       processors: [{
         name: 'cyan/default',
         files: [...],
         config: {...}
       }],
       plugins: []  // Add this required property
     };
     ```

3. **Directory Naming: `templates/` vs `template/`**
   - **Problem**: Documentation uses `templates/` (plural) as root directory in examples, but E2E tests use `template/` (singular)
   - **Location**: Lines 29, 34, 35, 38, 53, 58, 62, 83, 104-113
   - **Evidence**:
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:43` uses `root: 'template'`
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template2/cyan/index.ts:46` uses `root: 'template'`
     - `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template3/cyan/index.ts:42` uses `root: 'template'`
   - **Fix**: Standardize on `template/` (singular) to match actual implementation, or document that either is acceptable

### 🟠 Other Problems

1. **Cross-File Documentation Inconsistency**

   - **Problem**: The same `GlobType.Ignore` inaccuracy appears in other documentation files (types.mdx line 20, globbing.mdx line 139), suggesting a systemic documentation error
   - **Recommendation**: Audit all documentation files that reference `GlobType` to ensure consistency with actual SDK

2. **Root Property Not Documented as Optional**

   - **Problem**: The documentation does not clarify that `root` property in `CyanGlob` is optional and defaults to `.` (current directory)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-7` shows `root?: string | null;` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:24` shows `return path.resolve(this.readDir, g.root ?? '.');`
   - **Recommendation**: Add a note in the documentation that `root` is optional and defaults to the current directory

3. **Lambda Function Parameters Use Cryptic Names**
   - **Problem**: The callback signature `async (i, d) =>` uses abbreviated parameter names without explaining what `i` (IInquirer) and `d` (IDeterminism) represent
   - **Location**: Line 47
   - **Recommendation**: Use more descriptive parameter names or add inline comments: `async (inquirer, determinism) =>`

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 3     |

---

### developer/templates/tutorials/04-asking-questionsx

<!-- source: content/docs/developer/templates/tutorials/04-asking-questions.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/04-asking-questions.mdx

> Tutorial documentation for the IInquirer interface and question types. Contains significant inaccuracies regarding the IDeterminism interface methods.

### 🔴 Source Code Inaccuracies

1. **Documented: `d.uuid()` method in Complete Example** | **Actual: `IDeterminism` interface only has `get(key: string, origin: () => string): string` method** | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5` - The interface only defines `get(key: string, origin: () => string): string`. No `uuid()` method exists anywhere in the SDK (verified via grep search).

2. **Documented: `dateSelect()` returns `Date`** | **Actual: Returns `Promise<string>` in Node SDK** | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26` - `dateSelect(q: DateQ): Promise<string>` returns string, not Date. (Note: .NET SDK returns `Task<DateOnly>` as shown in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Inquirer.cs:17-18`)

3. **Documented: Line 191-192 shows `const uuid = d.uuid();`** | **Actual: No such method exists on IDeterminism** | Evidence: Comprehensive grep search of `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src` for `.uuid(`, `.timestamp(`, `.seq(` returned no matches.

### 🟡 Documentation Issues

1. **Problem: Complete Example uses non-existent `d.uuid()` method** | Location: Lines 191-192 ("Generate deterministic values" comment) and Line 209 | Fix: Either document the correct `d.get()` method usage or remove the uuid usage from the example. The correct pattern would be `d.get('uuid', () => crypto.randomUUID())` if a deterministic UUID is needed.

2. **Problem: Question Types table says `dateSelect()` returns `Date`** | Location: Line 80 | Fix: Update to indicate it returns `string` (ISO date string) in TypeScript/Node SDK. Consider adding a note about platform differences (.NET returns `DateOnly`).

3. **Problem: "What You Learned" section incomplete** | Location: Line 219 | Fix: Claims to teach "all question types" but only mentions "text, select, confirm, checkbox" - omits `password()` and `dateSelect()`. Either include all 6 types or rephrase to "basic question types".

### 🟠 Other Problems

1. **Problem: Documentation inconsistency across multiple files** | Recommendation: The `determinism.mdx`, `pin-determinism.mdx`, `full-example.mdx`, and this file all reference non-existent methods `d.uuid()`, `d.timestamp()`, and `d.seq()`. This suggests either: (a) the SDK was refactored and documentation was not updated, or (b) there's a separate enhanced interface not found in the searched paths. Recommend auditing all documentation referencing IDeterminism methods.

2. **Problem: Interface naming confusion** | Recommendation: The parameter is documented as `d` with interface `IDeterminism`, but some docs (e.g., `pin-determinism.mdx` line 44) refer to it as "IDefine". Recommend standardizing the interface name across all documentation.

### ✅ Verified Correct

1. SDK package name `@atomicloud/cyan-sdk` is correct - confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2`

2. GlobType enum values (`GlobType.Template`, `GlobType.Copy`) are correct - confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`

3. `StartTemplateWithLambda` function signature is correct - confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:140-143`

4. All IInquirer methods (`text`, `select`, `confirm`, `checkbox`, `password`, `dateSelect`) exist - confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:3-27`

5. All links verified to exist:
   - `/developer/templates/how-to` - `content/docs/developer/templates/how-to/index.mdx`
   - `/developer/templates/tutorials/full-example` - `content/docs/developer/templates/tutorials/full-example.mdx`
   - `/developer/templates/reference/sdk/inquirer` - `content/docs/developer/templates/reference/sdk/inquirer.mdx`

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### user/how-to/create-projectx

<!-- source: content/docs/user/how-to/create-project.mdx -->

# 📄 File: content/docs/user/how-to/create-project.mdx

> This documentation file describes the `cyanprint create` command with examples and workflow explanation. Overall the documentation is accurate but has some minor issues with template reference format and missing version specification in examples.

### 🔴 Source Code Inaccuracies

1. **Documented**: `cyanprint create atomi/nix-init` (line 15-16, 19-20)
   **Actual**: The template reference format should include a version: `<username>/<name>:<version>`. While version is optional (per `util.rs:21-27` where version parsing returns `None` if not provided), the source code in `main.rs:144-148` shows that when no version is provided, it displays `-1` as the version which may confuse users. The canonical format shown in `iridium/cyanprint/LLM.MD:119` is `username/template-name:version`.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/util.rs:13-28` - parse_ref_internal function handles optional version; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:144-148` - shows `-1` when no version provided

2. **Documented**: "CLI fetches template from registry" (line 24)
   **Actual**: The CLI retrieves template from registry via `registry.get_template()` which returns `TemplateVersionRes`. This is accurate.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:150` - `registry.get_template(u.clone(), n.clone(), v)`

### 🟡 Documentation Issues

1. **Problem**: Examples do not show version specification
   **Location**: Lines 14-20
   **Fix**: Add an example with version: `cyanprint create atomi/nix-init:1 my-project` to show the full template reference format

2. **Problem**: Missing documentation for the `-c, --coordinator-endpoint` option
   **Location**: The entire document lacks mention of the coordinator endpoint option
   **Fix**: Add an Options section similar to `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/user/reference/cli-commands.mdx:31-35` to document the `--coordinator-endpoint` option with its default value `http://coord.cyanprint.dev:9000`

3. **Problem**: "What Happens" section omits key workflow steps
   **Location**: Lines 22-27
   **Fix**: The workflow description is oversimplified. Based on `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/run.rs:41-128`, the actual workflow includes: target directory creation, template history check, automatic composition detection, and different execution paths for single templates vs compositions. Consider expanding or linking to detailed explanation.

4. **Problem**: Template reference format not explained
   **Location**: Lines 8-10 (command syntax)
   **Fix**: Add explanation of `<TEMPLATE_REF>` format: `<username>/<template-name>[:<version>]` where version is an integer. Reference: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/util.rs:13-28`

### 🟠 Other Problems

1. **Problem**: The example template `atomi/nix-init` cannot be verified to exist in the registry
   **Recommendation**: Either verify this template exists in the actual registry, or use a documented example template that is known to exist. The developer docs at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/surfaces/cli/02-create.md:37` use `atomicloud/starter:1` as an example.

2. **Problem**: Missing reference to environment variable `CYANPRINT_COORDINATOR`
   **Recommendation**: The source code at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:43` shows `env = "CYANPRINT_COORDINATOR"` for the coordinator endpoint. This should be documented for users who want to set a default coordinator.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 4     |
| 🟠       | 2     |

---

### user/how-to/installx

<!-- source: content/docs/user/how-to/install.mdx -->

# 📄 File: content/docs/user/how-to/install.mdx

> This file documents installation methods for CyanPrint CLI across multiple platforms. The documentation includes Nix, Homebrew, Scoop, APT, and YUM installation methods with version pinning examples.

### 🔴 Source Code Inaccuracies

1. **Scoop Installation for Windows - Deprecated Platform**

   - **Documented**: `scoop bucket add atomi https://github.com/AtomiCloud/scoop-bucket.git` and `scoop install atomi/cyanprint`
   - **Actual**: Windows support was deprecated in v1.7.0 (commit 4a72573). The goreleaser.yaml only builds for `linux` and `darwin` (macOS). The CI workflow (`.github/workflows/⚡reusable-build.yaml`) only targets Linux x86_64, Linux aarch64, MacOS x86_64, and MacOS aarch64. No Windows builds are produced.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Changelog.md:214` - "deprecate windows support"; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.goreleaser.yaml:16-21` - only lists `linux` and `darwin` under `goos`

2. **Description Claims 6 Platforms - Only 4 Are Actually Supported**

   - **Documented**: "Install CyanPrint CLI on 6 platforms" (description line 3)
   - **Actual**: Only 4 platforms are actively built and supported: Linux x86_64, Linux aarch64, macOS x86_64, macOS aarch64. Windows (Scoop) is deprecated and there is no evidence of a working Scoop bucket.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.github/workflows/⚡reusable-build.yaml:26-50` - build matrix only includes Linux and MacOS targets

3. **Version Pinning Example Uses Outdated Version**
   - **Documented**: Version pinning examples use `0.2.0` (lines 73, 76, 87, 98, 109, 120)
   - **Actual**: Current version is `2.6.0` as defined in the nix build configuration and changelog
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/nix/default.nix:9` - `version = "2.6.0"`; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Changelog.md:1` - "## [2.6.0]"

### 🟡 Documentation Issues

1. **Missing Deprecation Notice for Windows/Scoop**

   - **Problem**: The Scoop tab is presented without any warning that Windows is no longer supported. Users attempting to use Scoop will fail since no Windows binaries are published.
   - **Location**: Lines 34-39 (Scoop tab)
   - **Fix**: Either remove the Scoop tab entirely or add a clear deprecation notice stating that Windows support was deprecated in v1.7.0

2. **Version Example Too Old**

   - **Problem**: Using version `0.2.0` as an example is misleading as it's extremely outdated (current is 2.6.0, and 0.2.0 likely never existed publicly based on changelog starting at 1.0.0)
   - **Location**: Lines 73, 76, 87, 98, 109, 120
   - **Fix**: Update version examples to use a realistic recent version like `2.6.0` or use a placeholder like `2.x.x`

3. **Description Mismatch**
   - **Problem**: Description says "6 platforms" but Nix Shell and Nix Profile are both Nix (same platform, different installation methods), and Windows/Scoop is deprecated
   - **Location**: Line 3 (frontmatter description)
   - **Fix**: Update to "Install CyanPrint CLI on Linux and macOS" or "Install CyanPrint CLI via Nix, Homebrew, APT, or YUM"

### 🟠 Other Problems

1. **Inconsistent Tab Grouping**

   - **Problem**: The first Tabs component splits Nix into "Nix Shell" and "Nix Profile" (6 items), while the second Tabs component combines them into just "Nix" (5 items). This inconsistency is confusing.
   - **Recommendation**: Standardize the grouping approach across both tab sets. Either keep Nix Shell/Profile separate in both, or combine them in both.

2. **Homebrew Version Pinning Syntax May Not Work**
   - **Problem**: The documented `brew install AtomiCloud/tap/cyanprint@0.2.0` syntax for versioned installs may not work as expected. Homebrew versioned formulae require the formula to explicitly support versioning, which may not exist in the tap.
   - **Recommendation**: Verify that versioned formulae exist in the homebrew-tap repository, or add a note that version pinning via Homebrew may require checking available versions first.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### user/how-to/update-projectx

<!-- source: content/docs/user/how-to/update-project.mdx -->

# 📄 File: content/docs/user/how-to/update-project.mdx

> This is a minimal documentation page covering the `cyanprint update` command. The documentation is generally accurate but very brief and could benefit from more comprehensive information. No critical source code inaccuracies found.

### 🔴 Source Code Inaccuracies

None found. The documented commands and options match the source code implementation:

- `cyanprint update` command exists at `iridium/cyanprint/src/commands.rs:48-72`
- `-i, --interactive` flag exists with correct default value `false` at line 66-71
- Command implementation at `iridium/cyanprint/src/main.rs:192-227`
- 3-way merge mechanism confirmed in `iridium/docs/developer/surfaces/cli/03-update.md`

### 🟡 Documentation Issues

1. **Missing path argument documentation** | Location: CLI usage section | Fix: Document that `[path]` argument is optional (defaults to current directory `.`) - see `commands.rs:53-54` where `default_value = "."` is set

2. **Missing coordinator endpoint option** | Location: CLI usage section | Fix: Add `-c, --coordinator-endpoint` option documentation with default value `http://coord.cyanprint.dev:9000` - see `commands.rs:56-63`

3. **Missing CYANPRINT_COORDINATOR environment variable** | Location: CLI usage section | Fix: Document the `CYANPRINT_COORDINATOR` environment variable that can override the coordinator endpoint - see `commands.rs:61` (`env = "CYANPRINT_COORDINATOR"`)

4. **Brief/incomplete explanation** | Location: "How Updates Work" section | Fix: Expand with more details about what happens during update (reads `.cyan_state.yaml`, fetches latest templates, performs 3-way merge, writes merged files, cleans up sessions) - see `iridium/docs/developer/surfaces/cli/03-update.md` for comprehensive flow

5. **Missing state file reference** | Location: "How Updates Work" section | Fix: Mention that updates read from `.cyan_state.yaml` to determine template history and current versions - see `orchestrator.rs:39-41`

### 🟠 Other Problems

1. **Incomplete compared to developer docs** | The developer documentation at `iridium/docs/developer/surfaces/cli/03-update.md` contains significantly more detail (exit codes, flow diagrams, state file format, update detection behavior) that could be adapted for user documentation

2. **No troubleshooting information** | Recommendation: Add common issues and solutions (e.g., what happens if `.cyan_state.yaml` is missing, conflict resolution during 3-way merge)

3. **No examples section** | Recommendation: Add practical examples showing different update scenarios (basic update, interactive mode, updating a specific path)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 5     |
| 🟠       | 3     |

---

### contributor/architecture/overview

<!-- source: content/docs/contributor/architecture/overview.mdx -->

# 📄 File: content/docs/contributor/architecture/overview.mdx

> This documentation file provides a high-level overview of the CyanPrint system architecture. Verification against source code in argon, boron, helium, iridium, and zinc repositories revealed minor inaccuracies in CLI command naming and Next.js version specification.

### 🔴 Source Code Inaccuracies

1. **CLI Command Name** | Documented: `cyan print init my-project` | Actual: `cyanprint create <template_ref> [path]` | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:131` shows the command is `Commands::Create`, not a subcommand `print init`. The CLI binary is named `cyanprint` and uses subcommands `push`, `create`, `update`, and `daemon`.

2. **Next.js Version** | Documented: "Next.js 15" | Actual: Next.js 16.1.6 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/package.json:19` shows `"next": "16.1.6"`

### 🟡 Documentation Issues

1. **SDK Language Naming Inconsistency** | Problem: Documentation refers to ".NET SDK" but should be "C# SDK" for consistency with common naming conventions, or keep as ".NET" but note the table header says "C#" | Location: Line 72 shows ".NET SDK" in description column but the diagram (lines 32-35) uses "CS[.NET SDK]" | Fix: Either change table to say "C#" or update diagram label to match table description

2. **Missing CLI Alias Documentation** | Problem: The CLI has short aliases (p, c, u, d) that are not mentioned in the overview | Location: Lines 82-98 Data Flow section shows `cyan print init` command | Recommendation: Document that `create` has alias `c` and use correct command format `cyanprint create` or `cyanprint c`

3. **Incomplete SDK Language Reference** | Problem: Documentation mentions "TypeScript, Python, C#" but the Node SDK is TypeScript-based and could be clarified | Location: Line 72 - "Multi-language SDKs (TypeScript, Python, C#)" | Recommendation: Clarify that Node SDK uses TypeScript, and there's a separate .NET SDK for C#

### 🟠 Other Problems

1. **Repository Link Inconsistency** | Problem: The documentation uses GitHub links like `https://github.com/AtomiCloud/sulfone.iridium` but these appear to be monorepo paths within the sulfone directory structure, not independent GitHub repositories | Recommendation: Verify if these are actual public GitHub repos or internal monorepo paths, and update links accordingly

2. **Architecture Diagram Container Naming** | Problem: The high-level architecture diagram shows "P[Processor Container]" and "PL[Plugin Container]" but doesn't mention the Merger Container which is a key component in Boron's 3-stage pipeline | Location: Lines 12-50 Mermaid diagram | Recommendation: Consider adding Merger Container to the Remote Executor subgraph for completeness

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### developer/plugins/explanation/index

<!-- source: content/docs/developer/plugins/explanation/index.mdx -->

# 📄 File: content/docs/developer/plugins/explanation/index.mdx

> This is an index/navigation file that links to three sub-pages: what-are-plugins.mdx, plugins-vs-processors.mdx, and execution-order.mdx. The index itself contains no factual claims or code references - only navigation links. All factual verification must be done on the linked pages.

### 🔴 Source Code Inaccuracies

1. **Documented (plugins-vs-processors.mdx:47)**: `return { directory: input.writeDirectory };`
   **Actual**: The SDK's `CyanProcessorInput` uses `writeDir` not `writeDirectory`
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:13` defines `writeDir: string;` and the e2e test at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` uses `input.writeDir`

2. **Documented (what-are-plugins.mdx:109-116, plugins-vs-processors.mdx:71-84)**: Plugin code examples show destructuring `const { directory } = input;`
   **Actual**: Correct - The `CyanPluginInput` interface has `directory: string;`
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` - This is accurate

### 🟡 Documentation Issues

1. **Problem**: Inconsistent property naming in processor example
   **Location**: plugins-vs-processors.mdx:47
   **Fix**: Change `input.writeDirectory` to `input.writeDir` to match the actual SDK interface

2. **Problem**: Documentation does not explain the difference between `ProcessorInput` and `CyanProcessorInput` interfaces
   **Location**: plugins-vs-processors.mdx processor example section
   **Recommendation**: The SDK has two interfaces - `ProcessorInput` (internal, uses `readDirectory`/`writeDirectory`) and `CyanProcessorInput` (user-facing, uses `readDir`/`writeDir`). Documentation should clarify which one users receive in their lambda functions.

3. **Problem**: Code examples import from `@atomicloud/cyan-sdk` but don't show the `PluginOutput` type import
   **Location**: what-are-plugins.mdx:109, 124, 141
   **Fix**: The e2e tests show importing `PluginOutput` explicitly (e.g., `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';`). The documentation examples should be consistent.

### 🟠 Other Problems

1. **Problem**: The execution order documentation claims plugins run "after all files are written" but doesn't explain the coordinator's role
   **Recommendation**: Add reference to the iridium/cyancoordinator component which orchestrates the execution flow, as seen in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/template/executor.rs`

2. **Problem**: Documentation uses shell command syntax with bun's `$` template literal (`await $\`git -C ${directory} init\`.quiet();`) but doesn't explain this is a bun-specific feature
   **Location**: what-are-plugins.mdx:112-113, 128-129, 145-146
   **Recommendation**: Add a note that the `$` template literal is from bun's shell API, or show alternative approaches for non-bun environments

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### developer/plugins/explanation/plugins-vs-processors

<!-- source: content/docs/developer/plugins/explanation/plugins-vs-processors.mdx -->

# 📄 File: content/docs/developer/plugins/explanation/plugins-vs-processors.mdx

> Found 2 API inaccuracies in code examples. The Processor example uses incorrect property names, and the Plugin example uses a deprecated shell syntax pattern. Both examples deviate from actual source code usage.

### 🔴 Source Code Inaccuracies

1. **Documented**: Processor example uses `input.writeDirectory` (line 47) | **Actual**: Property is `input.writeDir` (no "tory") | Evidence: `helium/sdks/node/src/domain/core/cyan_script_model.ts:13` defines `writeDir: string;`
2. **Documented**: Processor example accesses file via `file.content` and `file.writeFile()` pattern (lines 41-44) | **Actual**: Correct but return should use `input.writeDir` not `input.writeDirectory` | Evidence: `iridium/e2e/processor1/index.ts:55` returns `{ directory: input.writeDir }`
3. **Documented**: Plugin example shows `await $`git -C ${directory} init`.quiet();` with bun shell syntax (lines 79-80) | **Actual**: Real plugins use Node.js `fs` module directly, not bun shell | Evidence: `iridium/e2e/plugin1/index.ts:1-22` uses `import fs from 'node:fs'` and `fs.writeFileSync()` without bun shell

### 🟡 Documentation Issues

1. **Problem**: Processor example property name mismatch | **Location**: Line 47 | **Fix**: Change `input.writeDirectory` to `input.writeDir`
2. **Problem**: Inconsistent property name in comparison table | **Location**: Line 18, 53, 54 | **Fix**: Table says "Full directory + shell" for Plugin access, but plugins actually receive `input.directory` (verified at `cyan_script_model.ts:19`)
3. **Problem**: Plugin example uses bun shell (`$` syntax) which may not be available in all environments | **Location**: Lines 73-84 | **Fix**: Consider using Node.js child_process or fs examples that match real implementation patterns

### 🟠 Other Problems

1. **Problem**: The SDK import `@atomicloud/cyan-sdk` is shown but the actual package structure in helium shows exports from `@atomicloud/cyan-sdk` - this is consistent, no issue.
2. **Recommendation**: The Plugin example showing bun shell syntax (`await $\`...\``) could be misleading since the actual plugin examples in iridium use Node.js `fs` module. Consider showing both approaches or clarifying that bun shell is optional.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 3     |
| 🟠       | 1     |

---

### developer/plugins/explanation/what-are-pluginsx

# File: content/docs/developer/plugins/explanation/what-are-plugins.mdx

> Documentation explaining what plugins are, their role in CyanPrint, how they work, and when to use them. Includes code examples and comparison with processors.

### Source Code Inaccuracies

1. **Type Name Mismatch**

   - **Documented**: `PluginInput` interface
   - **Actual**: `CyanPluginInput` type is exported from the SDK
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` exports `CyanPluginInput`, not `PluginInput`. The internal interface is `CyanPluginInput` at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21`

2. **Missing Import Statement in Code Examples**

   - **Documented**: Code examples use `$` template literal syntax without import
   - **Actual**: The `$` function is from Bun's shell API, not the SDK, and requires `import { $ } from 'bun';`
   - **Evidence**: All code examples in lines 108-151 use `$` syntax without showing the required import. The SDK package.json at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json` does not include `zx` or any shell library.

3. **Input Property Name Inconsistency**
   - **Documented**: Input receives `directory` property
   - **Actual**: Correct - but the internal domain type uses `directory` while the documentation shows destructuring correctly. No issue here, just confirming accuracy.

### Documentation Issues

1. **Missing Import in Code Examples**

   - **Problem**: All three code examples (Setup Plugin, Formatter Plugin, Build Plugin) use `$` syntax without importing it
   - **Location**: Lines 108-151
   - **Fix**: Add `import { $ } from 'bun';` to each example or add a note explaining that Bun shell is required

2. **Type Reference Inconsistency**

   - **Problem**: Documentation references `PluginInput` but SDK exports `CyanPluginInput`
   - **Location**: Input section (lines 48-50) and throughout code examples
   - **Fix**: Either update to use `CyanPluginInput` or add a note that `PluginInput` is an alias/simplified name for documentation purposes

3. **No Mention of Bun Dependency**
   - **Problem**: Code examples rely on Bun's shell API (`$`) but this dependency is not mentioned
   - **Location**: Throughout the "Common Plugin Patterns" section
   - **Fix**: Add a callout or note explaining that the `$` syntax requires Bun, and link to alternative approaches (Node.js child_process, execa) for non-Bun environments

### Other Problems

1. **Callout Claim About Processor Isolation**

   - **Problem**: Callout states "Plugins are the only component with shell access. Processors are isolated and cannot execute commands."
   - **Recommendation**: While this is the design intent, there's no technical enforcement visible in the SDK code. The processor interface at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:15-17` receives a `CyanFileHelper` but technically a processor could still import Node.js modules. Consider clarifying this is a "by design" constraint rather than a technical enforcement.

2. **Code Example Port Reference Missing**
   - **Problem**: Documentation doesn't mention that plugins run on port 5552
   - **Recommendation**: Consider adding this technical detail, as it's documented in the SDK source at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:65`

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 2     |
| Documentation Issues     | 3     |
| Other Problems           | 2     |

---

### developer/plugins/how-to/index

<!-- source: content/docs/developer/plugins/how-to/index.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/index.mdx

> This is a navigation index page for plugin how-to guides. The file itself is minimal and makes few factual claims. All four linked pages exist. However, there is a significant inconsistency in the SDK package naming across the documentation.

### 🔴 Source Code Inaccuracies

1. **SDK Package Name Inconsistency**

   - Documented: `@atomicloud/cyan-sdk` (in plugin how-to guides and SDK reference)
   - Actual: `@cyanprint/sdk` (documented in helium.mdx contributor repository page)
   - Evidence: `content/docs/contributor/repositories/helium.mdx:18` shows `@cyanprint/sdk` as the TypeScript SDK package, while all plugin documentation uses `@atomicloud/cyan-sdk`

2. **SDK Package Name in helium.mdx vs Developer Docs**
   - Documented: Two different package names for TypeScript SDK
   - Actual: Should be consistent across all documentation
   - Evidence:
     - `content/docs/contributor/repositories/helium.mdx:39-41`: `bun add @cyanprint/sdk`
     - `content/docs/developer/plugins/reference/sdk/index.mdx:13`: `bun add @atomicloud/cyan-sdk`
     - `content/docs/developer/templates/reference/sdk/index.mdx:13`: `npm install @atomicloud/cyan-sdk`

### 🟡 Documentation Issues

1. **Inconsistent SDK API Naming**

   - Problem: The helium.mdx documentation describes a different SDK API (`defineTemplate`, `input`, `output` from `@cyanprint/sdk`) than what's documented in the developer guides (`StartPluginWithLambda`, `StartTemplateWithLambda` from `@atomicloud/cyan-sdk`)
   - Location: `content/docs/contributor/repositories/helium.mdx:47-75` vs `content/docs/developer/plugins/how-to/run-commands.mdx:18`
   - Fix: Either update helium.mdx to reflect `@atomicloud/cyan-sdk` API or clarify if these are different SDKs for different purposes

2. **Missing import in Feature Flags example**

   - Problem: In `conditional-execution.mdx`, the Feature Flags example uses `fs.writeFile` and `path.join` but doesn't import `fs` or `path`
   - Location: `content/docs/developer/plugins/how-to/conditional-execution.mdx:120-123`
   - Fix: Add `import * as fs from 'fs/promises';` and `import * as path from 'path';` to the example

3. **Missing import in Using Defaults example**
   - Problem: In `conditional-execution.mdx`, the Using Defaults example uses `$` from bun but the import is not shown in the truncated example
   - Location: `content/docs/developer/plugins/how-to/conditional-execution.mdx:179-197`
   - Fix: Include the full imports at the top of the example or note that imports are assumed

### 🟠 Other Problems

1. **SDK Documentation Architecture Confusion**

   - Problem: The contributor documentation (helium.mdx) suggests the SDK (`@cyanprint/sdk`) provides template definition with `defineTemplate`, `input`, `output` APIs, but the developer documentation uses `@atomicloud/cyan-sdk` with `StartTemplateWithLambda`, `StartPluginWithLambda` APIs
   - Recommendation: Clarify whether these are:
     a) The same SDK with different API styles
     b) Different versions of the SDK
     c) Different SDKs for different use cases

2. **No Source Code Available for Verification**
   - Problem: The source paths (argon, boron, helium, iridium, zinc) referenced in the task are external GitHub repositories, not local source files
   - Recommendation: The documentation cannot be verified against actual SDK source code within this repository. External verification against https://github.com/AtomiCloud/sulfone.helium would be needed to confirm SDK package names and APIs

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### developer/plugins/indexx

# 📄 File: content/docs/developer/plugins/index.mdx

> Overview page for Plugin Development documentation. Describes plugin architecture, capabilities, and provides a quick example with learning path links.

### 🔴 Source Code Inaccuracies

1. **`PluginInput` type is not exported from SDK**

   - **Documented**: The Components table lists `PluginInput` as a component available from the system (line 41)
   - **Actual**: The SDK exports `CyanPluginInput`, not `PluginInput`. While `PluginInput` exists internally in `helium/sdks/node/src/domain/plugin/input.ts`, it is NOT exported from `main.ts`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:183-207` - The export block includes `CyanPluginInput` but not `PluginInput`

2. **Quick Example uses incorrect import for type annotation**
   - **Documented**: The quick example (lines 107-125) destructures `input` but doesn't explicitly import types. However, linked reference docs suggest importing `PluginInput`
   - **Actual**: Real plugins in the codebase use `PluginOutput` only and don't import `PluginInput`:
     ```ts
     import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk';
     ```
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/index.ts:1`

### 🟡 Documentation Issues

1. **Type naming inconsistency across documentation**

   - **Problem**: The index.mdx table mentions `PluginInput` and `PluginOutput` as components, but the actual exported type from the SDK is `CyanPluginInput`. This creates confusion because:
     - SDK exports: `CyanPluginInput`, `PluginOutput`
     - Documentation uses: `PluginInput`, `PluginOutput`
   - **Location**: Line 41 (Components table)
   - **Fix**: Either update documentation to use `CyanPluginInput` or request SDK to export `PluginInput` as an alias

2. **Linked reference docs perpetuate type naming error**

   - **Problem**: The referenced `/developer/plugins/reference/sdk/input-output.mdx` documents `PluginInput` interface but users cannot import it as shown
   - **Location**: Line 87 (link to PluginInput/Output reference)
   - **Fix**: Update reference docs to show `CyanPluginInput` as the actual type name, or note that it's the parameter type inferred from the lambda signature

3. **Linked types.mdx shows unimportable type**
   - **Problem**: The types.mdx shows `import { StartPluginWithLambda, type PluginInput, type PluginOutput }` but `PluginInput` cannot be imported
   - **Location**: Line 88 (link to Type Definitions)
   - **Fix**: Update to use `CyanPluginInput` or remove the import example

### 🟠 Other Problems

1. **Missing import statement in Quick Example**

   - **Problem**: The quick example (lines 107-125) doesn't show the `import { $ } from 'bun'` statement, but uses `$` for shell commands
   - **Recommendation**: Add the bun import to make the example complete and runnable:
     ```ts
     import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';
     import { $ } from 'bun';
     ```

2. **Port 5552 not documented in index**
   - **Problem**: While the reference docs mention port 5552, the overview doesn't mention that plugins run an HTTP server internally
   - **Recommendation**: Consider adding a brief note that plugins run an HTTP server on port 5552 for communication with CyanPrint

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### developer/plugins/reference/sdk/start-pluginx

<!-- source: content/docs/developer/plugins/reference/sdk/start-plugin.mdx -->

# 📄 File: content/docs/developer/plugins/reference/sdk/start-plugin.mdx

> This document describes the StartPluginWithLambda function for CyanPrint plugins. The documentation is generally accurate for the workflow and endpoint details, but contains a critical type naming inconsistency where it uses `PluginInput` instead of the actual exported type `CyanPluginInput`.

### 🔴 Source Code Inaccuracies

1. **Type name mismatch in function signature**

   - Documented: `handler: (input: PluginInput) => Promise<PluginOutput>`
   - Actual: `handler: (input: CyanPluginInput) => Promise<PluginOutput>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5` - `type LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>;`

2. **Exported type name is different**

   - Documented: Type `PluginInput` is available from `@atomicloud/cyan-sdk`
   - Actual: SDK exports `CyanPluginInput`, NOT `PluginInput`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` - exports `CyanPluginInput`, not `PluginInput`

3. **Related documentation files also incorrect**
   - Documented: The input-output.mdx and types.mdx files show importing `PluginInput` from SDK
   - Actual: These files show `import { type PluginInput } from '@atomicloud/cyan-sdk'` which would fail at runtime
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/developer/plugins/reference/sdk/types.mdx:70` shows import of non-existent `PluginInput` type

### 🟡 Documentation Issues

1. **Missing import example for types**

   - Problem: The basic usage example doesn't show how to import types if needed
   - Location: Lines 28-38 (Basic usage section)
   - Fix: Add example showing `import { StartPluginWithLambda, type CyanPluginInput, type PluginOutput } from '@atomicloud/cyan-sdk';` if type annotations are needed

2. **Inconsistent type naming convention**
   - Problem: Documentation uses `PluginInput` but SDK uses `CyanPluginInput` (Cyan prefix)
   - Location: Throughout the document (signature, parameters table)
   - Fix: Either update documentation to use `CyanPluginInput` or add a note explaining the type alias

### 🟠 Other Problems

1. **Cross-file consistency issue**

   - Problem: The types.mdx file shows importing `PluginInput` which doesn't exist in the SDK
   - Recommendation: Audit all SDK documentation files to ensure consistent type naming - either all use `CyanPluginInput` or SDK adds a type alias `PluginInput = CyanPluginInput`

2. **No type alias exists in SDK**
   - Problem: No `PluginInput` type alias exists in the SDK to provide a simpler name
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts:6` has a `PluginInput` but it's internal and not exported from main.ts
   - Recommendation: Consider adding `export type PluginInput = CyanPluginInput;` to the SDK for better developer experience

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 2     |
| 🟠       | 2     |

### Verified Accurate

- Port 5552 is correct (main.ts:65)
- POST /api/plug endpoint is correct (main.ts:68)
- `PluginOutput` type is correctly named and exported
- Handler function signature structure is correct (just type name differs)
- Return value requirement to return `{ directory }` is accurate
- Sequence diagram flow is accurate

---

### developer/processors/how-to/access-configx

<!-- source: content/docs/developer/processors/how-to/access-config.mdx -->

# 📄 File: content/docs/developer/processors/how-to/access-config.mdx

> Documentation describes accessing processor config from templates. Core API signatures are correct, but several code examples contain property name mismatches with actual SDK types.

### 🔴 Source Code Inaccuracies

1. **Documented property `input.writeDirectory`** | **Actual property is `input.writeDir`**

   - Documentation (lines 91, 131, 186): Uses `input.writeDirectory` in return statements
   - Actual SDK (`helium/sdks/node/src/domain/core/cyan_script_model.ts:12-13`): `CyanProcessorInput` has `writeDir`, not `writeDirectory`
   - Evidence: All iridium examples use `input.writeDir` (see `iridium/e2e/processor1/index.ts:55`, `iridium/e2e/processor2/index.ts:55`)

2. **Non-existent function `writeFileTo`**
   - Documentation (line 180): `writeFileTo(config.clientOptions.outputDir, clientCode);`
   - Actual: No such function exists in the SDK
   - Evidence: The SDK only provides `file.writeFile()` method on `VirtualFile` objects at `helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54`

### 🟡 Documentation Issues

1. **Missing 4th parameter `help` explanation in `i.select()` call**

   - Problem: Documentation shows `i.select()` with 4 parameters but doesn't explain the `help` parameter
   - Location: Lines 35-40 show `i.select('Output format:', ['json', 'yaml'], 'config.format', 'Choose format')` - the 4th param 'Choose format' appears to be `help` but is not labeled
   - Fix: Add explanation of the overloaded `select()` signatures or clarify parameter meanings
   - Evidence: `helium/sdks/node/src/domain/core/inquirer.ts:16-18` shows `select(q: string, options: string[], id: string, help?: string | null): Promise<string>`

2. **Example uses undefined helper functions**

   - Problem: The examples reference functions like `addDockerConfig`, `convertToYaml`, `generateTypes`, `removeComments`, `parseSchema`, `generateClient` that are not part of the SDK and not defined
   - Location: Lines 81-86, 120-126, 175-180
   - Fix: Either remove these function calls, replace with placeholder comments, or provide implementations

3. **Inconsistent return type annotation**
   - Problem: Real processor examples import and use explicit `Promise<ProcessorOutput>` return type, but documentation examples don't
   - Location: All `StartProcessorWithLambda` examples (lines 68-92, 106-132, 169-187)
   - Fix: Add explicit return type annotation for consistency with real code patterns
   - Evidence: `iridium/e2e/processor1/index.ts:19` uses `: Promise<ProcessorOutput>`

### 🟠 Other Problems

1. **Complex Config Example writes to arbitrary directory**

   - Problem: The example shows writing to `config.clientOptions.outputDir` using non-existent `writeFileTo` function. This pattern would bypass the CyanFileHelper system and could lead to files being written outside the expected output directory
   - Recommendation: Either remove this example or show the correct way to write additional files using the SDK's file handling mechanisms

2. **Template parameter naming differs from SDK type definitions**
   - Problem: Using `i` and `d` as parameter names works but is less readable than `inquirer` and `determinism`
   - Recommendation: Use descriptive parameter names matching the SDK types for better clarity (optional - shorthand is acceptable)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### developer/processors/how-to/resolve-all-filesx

<!-- source: content/docs/developer/processors/how-to/resolve-all-files.mdx -->

# 📄 File: content/docs/developer/processors/how-to/resolve-all-files.mdx

> Documentation for the `resolveAll()` method on CyanFileHelper, which loads all files matching the processor's globs into memory.

### 🔴 Source Code Inaccuracies

1. **Incorrect property name `input.writeDirectory`**

   - **Documented**: `return { directory: input.writeDirectory };`
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: The `CyanProcessorInput` interface in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` defines `writeDir`, not `writeDirectory`. Also confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/processor/lambda.ts:6` where `LambdaProcessorFn` uses `CyanProcessorInput` which has `writeDir`.

2. **Incorrect property name in Example: Variable Substitution**

   - **Documented**: `return { directory: input.writeDirectory };`
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: Same as above - `CyanProcessorInput.writeDir` is the correct property name.

3. **Incorrect property name in Example: Filter and Transform**
   - **Documented**: `return { directory: input.writeDirectory };`
   - **Actual**: `return { directory: input.writeDir };`
   - **Evidence**: Same as above - `CyanProcessorInput.writeDir` is the correct property name.

### 🟡 Documentation Issues

1. **Incomplete VirtualFile Properties table**

   - **Problem**: The documentation only lists `content` and `relative` properties, but `VirtualFile` has additional properties that may be useful.
   - **Location**: "VirtualFile Properties" table (lines 47-51)
   - **Fix**: Consider adding the following properties from `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-38`:
     - `baseRead: string` - Base read directory path
     - `baseWrite: string` - Base write directory path
     - `read: string` (getter) - Full read path (baseRead + relative)
     - `write: string` (getter) - Full write path (baseWrite + relative)

2. **Missing `get()` method reference in callout**
   - **Problem**: The callout mentions using `get()` for lazy loading but doesn't explain that `get()` returns `VirtualFileReference[]` (not `VirtualFile[]`), which requires calling `readFile()` to get the content.
   - **Location**: Callout at line 97-99
   - **Fix**: Clarify that `get()` returns references that need `readFile()` called to load content.

### 🟠 Other Problems

1. **No return type documentation for `resolveAll()`**

   - **Problem**: The documentation doesn't explicitly state that `resolveAll()` returns `VirtualFile[]` with the content already loaded.
   - **Recommendation**: Add explicit return type documentation to the Usage section.

2. **Implicit behavior about Copy-type globs**
   - **Problem**: The documentation doesn't mention that `resolveAll()` also handles Copy-type globs by copying them directly before returning Template-type files.
   - **Evidence**: In `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40`, `resolveAll()` filters Copy-type globs and calls `copy()` on them before reading Template-type files.
   - **Recommendation**: Document this side effect so users understand that Copy-type files are automatically handled.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 2     |
| 🟠       | 2     |

---

### user/explanation/3-way-mergex

<!-- source: content/docs/user/explanation/3-way-merge.mdx -->

# 📄 File: content/docs/user/explanation/3-way-merge.mdx

> Brief user-focused explanation of 3-way merge for template updates. The documentation is high-level and conceptually accurate but lacks detail about what actually happens during conflict resolution.

### 🔴 Source Code Inaccuracies

1. **"You'll be prompted to resolve them manually"**
   - **Documented**: "If conflicts occur, you'll be prompted to resolve them manually"
   - **Actual**: The source code shows that conflicts are NOT interactively prompted. Instead, conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) are left in the files, and the merged VFS with conflict markers is written to disk. Users must resolve conflicts after the update completes by editing the files.
   - **Evidence**: `iridium/cyancoordinator/src/fs/merger.rs:262-268` - When `repo.index()?.has_conflicts()` is true, the code only logs debug output and does NOT prompt the user. The files with conflict markers are included in the result VFS and written to disk via `read_vfs_from_dir()`.

### 🟡 Documentation Issues

1. **Oversimplified terminology**

   - **Problem**: The document uses "Yours" and "Theirs" but the actual codebase uses "current" (local) and "incoming" (new template). This differs from the developer documentation which uses consistent terminology.
   - **Location**: Lines 15-16
   - **Fix**: Consider aligning terminology with the developer docs (Base/Current/Incoming) or at least acknowledge the mapping.

2. **Missing conflict marker information**

   - **Problem**: Document states conflicts occur but doesn't explain what the user will see. Users need to know that conflict markers appear in their files.
   - **Location**: "Conflict Resolution" section
   - **Fix**: Add information about Git-style conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) being inserted into conflicting files.

3. **Missing practical guidance**

   - **Problem**: No guidance on how to actually resolve conflicts after they occur.
   - **Location**: "Conflict Resolution" section
   - **Fix**: Add a brief note explaining that users need to edit files containing conflict markers and remove the markers after deciding which changes to keep.

4. **Missing edge case information**
   - **Problem**: Doesn't mention that binary files or large reorganizations may not merge well.
   - **Location**: Entire document
   - **Fix**: Consider adding a "Limitations" section similar to the developer-facing 3-way-merge documentation.

### 🟠 Other Problems

1. **Inconsistent detail level with related documentation**

   - **Problem**: The developer documentation (`content/docs/developer/templates/explanation/3-way-merge.mdx`) is much more comprehensive and includes examples, conflict detection samples, and limitations. This user-facing doc is very minimal.
   - **Recommendation**: Consider expanding this document to include at least one concrete example of a conflict scenario and how to resolve it, similar to the developer version.

2. **Missing link to practical guidance**
   - **Problem**: The related links point to conceptual pages but not to any troubleshooting or conflict resolution guide.
   - **Recommendation**: Add a link or section about what to do when conflicts actually occur.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 4     |
| 🟠       | 2     |

### Verification Sources

**Verified Accurate Claims:**

1. **3-way merge concept** - Verified in `iridium/cyancoordinator/src/fs/merger.rs:134-139` - The `perform_git_merge` function takes `base`, `current`, and `incoming` parameters
2. **Base = Original template** - Verified in `iridium/docs/developer/algorithms/02-three-way-merge.md:16` - "Original template output"
3. **Yours/Current = User's modified files** - Verified in `merger.rs:137` - parameter named `current` with comment representing user changes
4. **Theirs/Incoming = New template version** - Verified in `merger.rs:138` - parameter named `incoming` representing "New template output"
5. **Automatic merge combining changes** - Verified in `merger.rs:255-259` - `repo.merge()` is called to combine changes
6. **Conflict detection** - Verified in `merger.rs:262-268` - `repo.index()?.has_conflicts()` check with conflict markers left in files

**Verified Inaccurate Claims:**

1. **"You'll be prompted to resolve them manually"** - The code at `merger.rs:262-268` shows no interactive prompting. Conflicts are left as markers in files, and users must manually edit files after the update command completes.

---

### user/explanation/template-lifecyclex

<!-- source: content/docs/user/explanation/template-lifecycle.mdx -->

# 📄 File: content/docs/user/explanation/template-lifecycle.mdx

> This document has multiple inaccuracies: it describes semantic versioning when the system uses simple integer versioning, and documents a deprecation feature that does not exist in the source code.

### 🔴 Source Code Inaccuracies

1. **Documented**: "Templates use semantic versioning (MAJOR.MINOR.PATCH)"

   - **Actual**: Templates use auto-incrementing integer version numbers (1, 2, 3, ...), not semantic versioning
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/docs/developer/concepts/04-version.md:3-7` explicitly states: "Previous documentation incorrectly described versions as semver-encoded. **Type**: `ulong` (simple integer)". Also confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/TemplateVersion.cs:32-33` where `Version` is `ulong`, not a semver string.

2. **Documented**: "MAJOR: Breaking changes, MINOR: New features, backward compatible, PATCH: Bug fixes"

   - **Actual**: Since the system uses integer versioning (1, 2, 3...), these semantic versioning categories do not apply. Version numbers simply auto-increment on each push.
   - **Evidence**: Same as above. The version is a monotonically increasing integer with no semantic meaning.

3. **Documented**: "Templates may be deprecated by their maintainers. Deprecated templates remain available but show a warning when used."
   - **Actual**: No deprecation functionality exists in the template registry models or CLI. The `Template`, `TemplatePrincipal`, `TemplateVersion`, and `TemplateVersionPrincipal` models have no `deprecated`, `is_deprecated`, or similar field. The only deprecation references in the codebase are for Swagger API versioning, not template deprecation.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Template.cs:1-56` shows no deprecation field. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/TemplateVersion.cs:1-57` shows no deprecation field. Grep for `deprecated|is_deprecated|IsDeprecated` in zinc only finds Swagger-related deprecation (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/StartUp/Services/Swagger/SwaggerConfig.cs:83-84`), not template deprecation.

### 🟡 Documentation Issues

1. **Problem**: The Versioning section provides semantic versioning guidance that cannot be followed since versions are auto-incremented integers

   - **Location**: Lines 9-14 (entire Versioning section)
   - **Fix**: Replace the Versioning section with accurate description of how versioning actually works:

   ```markdown
   ## Versioning

   Templates use auto-incrementing integer versions (1, 2, 3, ...).

   Each time you publish a template with `cyanprint push`, a new version is automatically created with the next integer. Version numbers have no semantic meaning - they simply track the order of publication.
   ```

2. **Problem**: The Deprecation section documents a non-existent feature

   - **Location**: Lines 22-24 (entire Deprecation section)
   - **Fix**: Remove the Deprecation section entirely, or replace with a note that deprecation is not currently supported:

   ```markdown
   ## Deprecation

   Template deprecation is not currently supported. To indicate a template is no longer maintained, update the template description or readme to note this.
   ```

3. **Problem**: The update command reference is correct (`cyanprint update`) but no detail about how "latest" is determined
   - **Location**: Line 18
   - **Fix**: Add clarification that "latest" means the highest integer version number available in the registry

### 🟠 Other Problems

1. **Problem**: This document is very brief (30 lines) and provides minimal value for users trying to understand template lifecycle
   - **Recommendation**: Consider expanding this document with:
     - How versions are created (via `cyanprint push`)
     - How to view available versions
     - How version selection works in interactive mode
     - Link to the state file format (`.cyan_state.yaml`)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 3     |
| 🟠       | 1     |

---

### contributor/repositories/index

<!-- source: content/docs/contributor/repositories/index.mdx -->

# 📄 File: content/docs/contributor/repositories/index.mdx

> The index page provides a high-level overview of all CyanPrint repositories. Cross-referencing against individual repository documentation reveals mostly consistent information with minor discrepancies.

### 🔴 Source Code Inaccuracies

1. **Argon Framework**: Documented as "React, Next.js" | Actual: Source documentation confirms React, Next.js, Tailwind CSS, and tRPC - Next.js is used but React is the primary framework (not React AND Next.js as separate frameworks) | index.mdx:82
2. **Helium Languages**: Documented as "TypeScript, Python, C#" | Actual: Source confirms all three languages with correct package names | No discrepancy

### 🟡 Documentation Issues

1. **Incomplete Tech Stack for Argon**: The table lists only "TypeScript, React" but the detailed Argon documentation also mentions Tailwind CSS and tRPC which are significant parts of the stack | index.mdx:41 | Add "Tailwind CSS, tRPC" to tech stack column
2. **Missing Framework Details for Iridium**: The table lists "Rust, Clap" but the detailed Iridium documentation also mentions Tokio and Reqwest which are important for async operations and API calls | index.mdx:38 | Consider adding "Tokio" to tech stack column
3. **Incomplete Tech Stack for Boron**: The table lists "Rust, Tokio" but the detailed Boron documentation also mentions Tonic (gRPC), Docker/bollard, and SQLx | index.mdx:39 | Consider adding "Tonic, SQLx" to tech stack column
4. **Incomplete Tech Stack for Zinc**: The table lists "Rust, Axum" but the detailed Zinc documentation also mentions SQLx, Tower, and JWT | index.mdx:40 | Consider adding "SQLx" to tech stack column

### 🟠 Other Problems

1. **Inconsistent Detail Level**: The tech stack column varies in detail - some entries list only 2 technologies while the source docs show 4-5 significant technologies. Consider standardizing to include the most important 3-4 technologies per repository.
2. **Mermaid Diagram Labeling**: The architecture diagram shows "Zinc<br/>Registry API" but the detailed docs refer to it as "Registry API server" - terminology is consistent enough but could be clearer.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 4     |
| 🟠       | 2     |

### Detailed Analysis

**Verified Accurate Claims:**

- All repository GitHub links are correct format (sulfone.{name})
- Repository purposes match detailed documentation
- Iridium: Rust with Clap confirmed
- Boron: Rust with Tokio confirmed
- Zinc: Rust with Axum confirmed
- Argon: TypeScript with React confirmed
- Helium: TypeScript, Python, C# confirmed
- All internal documentation links are properly formatted

**Minor Inconsistencies:**

- Tech stack columns in the overview table are abbreviated versions of the full tech stacks documented in individual repository pages. This is acceptable for an overview but could be more complete.

**Recommendations:**

1. Expand tech stack columns to include key infrastructure technologies (Tokio for async, SQLx for databases, tRPC for type-safe APIs)
2. Consider adding a "Key Dependencies" column or expanding the existing "Tech Stack" column to be more comprehensive

---

### developer/plugins/how-to/modify-filesx

# File: content/docs/developer/plugins/how-to/modify-files.mdx

> Documentation for modifying files in the generated directory using Cyan SDK plugins. Covers basic file operations (read, write, modify), common patterns (JSON updates, file creation, deletion), and using glob patterns.

### Source Code Inaccuracies

1. **SDK Package Name vs. Actual**

   - **Documented**: `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';`
   - **Actual**: Package name is correct. Verified at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2` - `"name": "@atomicloud/cyan-sdk"`
   - **Status**: Accurate

2. **CyanPluginInput Structure**

   - **Documented**: `const { directory } = input;` and `const { directory, config } = input;`
   - **Actual**: `CyanPluginInput` interface has `directory: string` and `config: unknown` fields
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21`
   - **Status**: Accurate

3. **PluginOutput Structure**

   - **Documented**: `return { directory };`
   - **Actual**: `PluginOutput` interface requires `directory: string`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/output.ts:1-3`
   - **Status**: Accurate

4. **StartPluginWithLambda Function Signature**

   - **Documented**: `StartPluginWithLambda(async (input) => { ... })`
   - **Actual**: Function signature is `StartPluginWithLambda(f: LambdaPluginFn): void` where `LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:82-85` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/lambda.ts:5`
   - **Status**: Accurate

5. **Glob Import**
   - **Documented**: `import { glob } from 'glob';`
   - **Actual**: The `glob` package is a dependency of `@atomicloud/cyan-sdk` (see package.json line 39: `"glob": "^11.0.0"`), but is NOT re-exported from the SDK. Users must install `glob` separately or use the SDK's internal `CyanFileHelper` class.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:169-181` shows exports, `glob` is not exported. The SDK uses it internally at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:6`
   - **Status**: Potentially misleading - the import works if users have `glob` installed separately, but it's not part of the SDK exports

### Documentation Issues

1. **Missing Return Type Annotation in Examples**

   - **Problem**: Code examples don't show explicit return type `Promise<PluginOutput>` which is required by the LambdaPluginFn type
   - **Location**: All code examples (lines 16-32, 36-45, 49-66, 72-94, 98-124, 128-170, 174-196, 202-228)
   - **Fix**: Consider adding explicit return types for TypeScript clarity, or note that TypeScript will infer them. The real plugin examples at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:5` use `: Promise<PluginOutput>`

2. **Missing Import for PluginOutput Type**

   - **Problem**: The "Using Glob Patterns" example (lines 202-228) doesn't show importing `PluginOutput` type, but the function implicitly returns it. For TypeScript users who want explicit typing, they would need `import { PluginOutput } from '@atomicloud/cyan-sdk';`
   - **Location**: Lines 202-228
   - **Fix**: Either add the type import or make the example consistent with other examples

3. **Inconsistent Import Statements**

   - **Problem**: First example shows full imports including `* as fs from 'fs/promises'` and `* as path from 'path'`, but subsequent examples omit these imports while using the same APIs
   - **Location**: Lines 36-45 (Write a File), 49-66 (Modify a File), etc.
   - **Fix**: Either show imports in every example or add a note that imports are assumed from previous examples

4. **Glob Package Dependency Not Clarified**
   - **Problem**: The glob example shows `import { glob } from 'glob';` but doesn't mention that `glob` is a separate package that needs to be installed
   - **Location**: Lines 198-228
   - **Fix**: Add a note that `npm install glob` or `bun add glob` is required, since `glob` is not exported from `@atomicloud/cyan-sdk`

### Other Problems

1. **Node.js fs/promises vs fs Consistency**

   - **Problem**: Documentation uses `import * as fs from 'fs/promises'` (async/await pattern with promises), but the actual plugin examples in the codebase at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts` use `import fs from 'node:fs'` with sync methods (`fs.writeFileSync`, `fs.mkdirSync`)
   - **Recommendation**: Document shows best practice (async), which is fine. Consider adding a note about both approaches being valid

2. **File Path Imports (Node 16+ style)**
   - **Problem**: Documentation uses `import * as fs from 'fs/promises'` and `import * as path from 'path'`, while actual examples use `import fs from 'node:fs'` and `import path from 'node:path'` (Node.js prefix style)
   - **Recommendation**: Consider using `node:` prefix style for consistency with modern Node.js conventions, or note that both styles work

## Summary

| Category                 | Count                        |
| ------------------------ | ---------------------------- |
| Source Code Inaccuracies | 0 critical (1 clarification) |
| Documentation Issues     | 4                            |
| Other Problems           | 2                            |

### Overall Assessment

The documentation is **technically accurate** regarding the Cyan SDK API. The core claims about:

- `StartPluginWithLambda` function
- `CyanPluginInput` with `directory` and `config` fields
- `PluginOutput` with `directory` field
- Package name `@atomicloud/cyan-sdk`

...are all verified as correct against the source code.

The main issues are documentation quality improvements:

1. Clarify that `glob` is a separate package dependency
2. Show consistent import statements across examples
3. Consider adding explicit return types for TypeScript clarity

---

### developer/templates/how-to/ask-confirmx

<!-- source: content/docs/developer/templates/how-to/ask-confirm.mdx -->

# 📄 File: content/docs/developer/templates/how-to/ask-confirm.mdx

> Documentation for the `i.confirm()` method for boolean yes/no questions. The API signatures and return types are accurate against the source code. Minor issues found with parameter naming and code examples.

### 🔴 Source Code Inaccuracies

1. **Parameter naming inconsistency in shorthand form comments** | Documented: `// Key` and `// Description` | Actual: IInquirer interface shows `id` and `help` as parameter names | `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:10`
   - Documentation shows: `i.confirm('Use TypeScript?', 'project.typescript', 'Add TypeScript config')` with comments `// Key` and `// Description`
   - Actual signature: `confirm(q: string, id: string, help?: string | null): Promise<boolean>;`
   - The 2nd parameter is `id` (not "Key"), 3rd is `help` (not "Description")

### 🟡 Documentation Issues

1. **Inconsistent comment style in shorthand example** | Lines 14-16 | Change `// Key` and `// Description` to `// id` and `// help` to match actual parameter names in the IInquirer interface

2. **Object form uses inconsistent property description** | Lines 27-28 | The example shows `desc: 'Add TypeScript configuration'` but there's no explanation that this maps to the `help` parameter in the shorthand form

3. **Link to Ask Select uses anchor that may not exist** | Line 119 | Link `/developer/templates/reference/sdk/inquirer#select` - The inquirer.mdx file has `### select()` heading but heading anchors in Fumadocs may be auto-generated differently

### 🟠 Other Problems

1. **No mention of `errorMessage` property** | Recommendation: The ConfirmQ interface supports an `errorMessage?: string | null` property (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:29`), which is not documented in the "Object Form (with default)" example. This property could be useful for customizing validation error messages.

2. **No mention that `validate` is not supported for ConfirmQ** | The ConfirmQ interface shows `validate?: null` indicating validation is not available for confirm questions, unlike other question types. This should be noted in the documentation.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### contributor/index

<!-- source: content/docs/contributor/index.mdx -->

# 📄 File: content/docs/contributor/index.mdx

> The documentation file provides an overview for contributors to the CyanPrint platform. It lists the main components with their repositories and purposes, and provides navigation links to other documentation sections. The document is largely accurate, with minor issues related to internal naming conventions.

### 🔴 Source Code Inaccuracies

1. **Argon internal naming inconsistency**
   - Documented: "Argon" as the Registry Web UI component
   - Actual: The argon repository's package.json shows the project name as "carbon" (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:2` - `"name": "carbon"`). The README also refers to it as "Sulfone Carbon" (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.MD:1` - "# Sulfone Carbon")
   - Note: The git remote correctly identifies it as `sulfone.argon`, suggesting "Carbon" is an internal code name while "Argon" is the public component name. This may cause confusion for contributors exploring the codebase.

### 🟡 Documentation Issues

1. **README title mismatch in argon**

   - Problem: The argon repository's README.MD is titled "Sulfone Carbon" instead of "Argon"
   - Location: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.MD:1`
   - Fix: Update the README title to clearly reference both names or standardize on "Argon"

2. **Missing README content in iridium**
   - Problem: The iridium repository README.MD references "sulfone-iridium" with a hyphen instead of a dot, inconsistent with the GitHub URL format `sulfone.iridium`
   - Location: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/README.MD:1` - "# CyanPrint (sulfone-iridium)"
   - Fix: Standardize naming convention to match the GitHub repository format (sulfone.iridium)

### 🟠 Other Problems

1. **Internal project name exposure**

   - Problem: The argon repository uses "carbon" as its internal package name while being documented as "argon" externally. Contributors cloning the repository may be confused when seeing "carbon" in package.json.
   - Recommendation: Either update the documentation to explain the carbon/argon naming relationship, or rename the package to match the public component name.

2. **Version number not documented**
   - Problem: The documentation does not mention current version numbers for any components, making it harder for contributors to verify they're working with the expected version.
   - Recommendation: Consider adding version information or links to releases for each component.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 2     |
| 🟠       | 2     |

---

### developer/basics/quickstartx

# 📄 File: content/docs/developer/basics/quickstart.mdx

> Minimal placeholder file containing only title, description, and heading for CyanPrint development quickstart. Contains virtually no substantive content to verify.

### 🔴 Source Code Inaccuracies

None identified - the documentation makes no specific technical claims that can be verified against source code.

### 🟡 Documentation Issues

1. **Empty/Placeholder Content**

   - **Problem**: The quickstart.mdx file is essentially empty, containing only frontmatter (title, description) and a single heading. It provides no actual quickstart guidance for CyanPrint development.
   - **Location**: Entire file (lines 1-9)
   - **Fix**: Populate with actual quickstart content. Based on source code analysis, a proper quickstart should cover:
     - Installing the CyanPrint CLI
     - Basic commands (`cyanprint create`, `cyanprint push`, `cyanprint update`, `cyanprint daemon`)
     - Creating a project from a template
     - Publishing a template

2. **Misleading Title/Description**
   - **Problem**: Title says "Quickstart" but there's no quickstart content. Description says "Quickstart guide for CyanPrint development" but the file has no development guidance.
   - **Location**: Lines 2-3 (frontmatter)
   - **Fix**: Either rename to indicate placeholder status (e.g., "Quickstart (Coming Soon)") or add substantive content.

### 🟠 Other Problems

1. **Missing Essential Quickstart Information**

   - **Problem**: A quickstart guide for CyanPrint development should minimally include:
     - CLI installation instructions
     - Command overview (the actual commands are: `push`, `create`, `update`, `daemon`)
     - Registry endpoint configuration (default: `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`)
     - Coordinator endpoint configuration (default: `http://coord.cyanprint.dev:9000`)
     - Authentication setup (`CYAN_TOKEN` environment variable)
   - **Recommendation**: Reference `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/modules/01-cyanprint.md` for accurate module information and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/surfaces/cli/` for CLI command details.

2. **File Structure Reference Gap**

   - **Problem**: No reference to the actual CyanPrint module structure that developers need to understand.
   - **Recommendation**: Include reference to the actual source structure:
     ```
     cyanprint/
     ├── src/
     │   ├── main.rs          # Entry point, command routing
     │   ├── commands.rs      # Clap CLI definitions
     │   ├── run.rs           # Template execution logic
     │   ├── update.rs        # Template update logic
     │   ├── coord.rs         # Coordinator daemon startup
     │   ├── util.rs          # Utility functions
     │   └── errors.rs        # Error types
     └── Cargo.toml
     ```

3. **Missing Command Reference**
   - **Problem**: No mention of the actual CLI commands available in CyanPrint.
   - **Recommendation**: Document the four main commands:
     - `cyanprint push` (alias `p`) - Publish templates, plugins, processors to registry
     - `cyanprint create` (alias `c`) - Create a project from a template
     - `cyanprint update` (alias `u`) - Update all templates to latest versions
     - `cyanprint daemon` (alias `d`) - Start coordinator service locally

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 3     |

**Note**: This file requires significant content development. It currently serves as a placeholder with no verifiable technical claims. The source code in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/` provides comprehensive material for creating a proper quickstart guide.

---

### developer/index

<!-- source: content/docs/developer/index.mdx -->

# 📄 File: content/docs/developer/index.mdx

> The documentation index provides a high-level overview of CyanPrint's extensible components. The claims are generally accurate, but there is a missing fourth artifact type (Resolver) that exists in the SDK but is not documented.

### 🔴 Source Code Inaccuracies

1. **Missing Resolver Artifact** | Documented: 3 artifacts (Templates, Processors, Plugins) | Actual: 4 artifacts (Templates, Processors, Plugins, Resolvers)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:145-166` shows `StartResolver` on port 5553 with `/api/resolve` endpoint
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:23` exports `ICyanResolver` interface
   - The Resolver is a first-class artifact in the SDK alongside Templates, Processors, and Plugins

### 🟡 Documentation Issues

1. **Incomplete Artifact List** | Location: Line 12-18 (table) | Fix: Add Resolver artifact to the table

   - The documentation states "CyanPrint has three extensible components called artifacts" but there are actually four
   - Missing entry: `**Resolvers** | Resolve dependencies and configurations | 5553`

2. **Missing Resolver Link** | Location: Lines 29-33 (Build Your Artifact section) | Fix: Add link to Resolvers documentation
   - Should add: `- [Resolvers](/developer/resolvers) - Build dependency resolvers for templates`
   - Note: The `/developer/resolvers` directory does not exist and would need to be created

### 🟠 Other Problems

1. **Inconsistent Artifact Count** | Recommendation: Either document the Resolver artifact or clarify if it's internal-only

   - The Resolver appears to be a user-facing SDK feature (exported from main.ts) but is completely absent from user documentation
   - If Resolvers are meant for internal use only, they should not be exported in the public SDK
   - If Resolvers are a user-facing feature, they need full documentation

2. **Architecture Documentation Gap** | Recommendation: Update `/developer/basics/introduction.mdx` and `/developer/basics/architecture.mdx` to include Resolver
   - The architecture page shows only Template, Processor, and Plugin containers
   - Should include Resolver container on port 5553 with `/api/resolve` endpoint

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 2     |
| 🟠       | 2     |

---

### developer/templates/explanation/processors-vs-pluginsx

<!-- source: content/docs/developer/templates/explanation/processors-vs-plugins.mdx -->

# 📄 File: content/docs/developer/templates/explanation/processors-vs-plugins.mdx

> Documentation explaining when to use processors vs plugins in CyanPrint templates. The document is conceptually accurate but has interface naming inaccuracies in the "Creating Custom" section.

### 🔴 Source Code Inaccuracies

1. Documented: "Implement `IProcessor` interface" (line 185) | Actual: The interface is named `ICyanProcessor` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:15-17` - `interface ICyanProcessor { process(input: CyanProcessorInput, fileHelper: CyanFileHelper): Promise<ProcessorOutput>; }`
2. Documented: "Implement `IPlugin` interface" (line 195) | Actual: The interface is named `ICyanPlugin` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:19-21` - `interface ICyanPlugin { plugin(input: CyanPluginInput): Promise<PluginOutput>; }`

### 🟡 Documentation Issues

1. Problem: Interface names are incorrect - missing "Cyan" prefix | Location: Lines 185 and 195 under "Creating Custom" section | Fix: Change "Implement `IProcessor` interface" to "Implement `ICyanProcessor` interface" and "Implement `IPlugin` interface" to "Implement `ICyanPlugin` interface"
2. Problem: The step-by-step instructions could be more specific | Location: Lines 183-186 and 193-197 | Fix: Update step 2 to read "Implement `ICyanProcessor` interface" and "Implement `ICyanPlugin` interface" respectively

### 🟠 Other Problems

1. Problem: The processor names `cyan/default`, `cyan/init-git`, and `cyan/npm-install` are used as examples throughout the document but their implementations are not found in the referenced source paths (argon, boron, helium, iridium, zinc) - these appear to be built-in or registry packages maintained separately | Recommendation: Consider adding a note that these are built-in processors/plugins provided by the CyanPrint platform, or link to where they can be found in a registry

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 2     |
| 🟠       | 1     |

---

### developer/templates/how-to/use-keysx

<!-- source: content/docs/developer/templates/how-to/use-keys.mdx -->

# 📄 File: content/docs/developer/templates/how-to/use-keys.mdx

> Documentation explaining how keys work for answer reuse across questions and templates, including namespacing conventions and cross-template key sharing. The documentation accurately describes the key mechanism implemented in the SDK, with a few documentation issues in the code examples.

### 🔴 Source Code Inaccuracies

(None found - all API signatures and key behavior claims are accurate)

### 🟡 Documentation Issues

1. **Problem**: The "Confirming Values" example (lines 124-134) has a logic error. Using the same key `'user.email'` for both `i.text()` and `i.confirm()` means the confirm call will retrieve the cached string answer, not prompt the user, and attempt to cast a string to boolean. The `confirm()` method expects a boolean answer in cache, not a string.
   **Location**: Lines 124-134
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:62-65` shows `confirm()` checks `isBoolAnswer(answer)` and would throw if given a string answer.
   **Fix**: Use a different key for the confirm question:

   ```ts
   const email = await i.text('Email?', 'user.email', 'Your email');
   const confirmed = await i.confirm(
     `Use ${email} for notifications?`,
     'user.email.confirm', // Different key - will prompt user
     'Confirm email',
   );
   ```

2. **Problem**: The "Step-by-Step Collection" example (lines 139-146) uses the same key for both `projectName` and `componentName`. The comment "Defaults to project name" is misleading - the value doesn't default, it's identical because they share the same key.
   **Location**: Lines 139-146
   **Fix**: Either use a different key pattern or clarify that this forces the same value:

   ```ts
   const projectName = await i.text('Project name?', 'project.name', '...');
   const componentName = await i.text(
     'Main component name?',
     'project.name', // Same key = identical value, no prompt
     'Uses project name (same as project name)',
   );
   // componentName === projectName (identical, not default)
   ```

3. **Problem**: In the "Intentional Sharing" section (lines 80-87), both code blocks declare `const name` which would be a variable shadowing issue in real code. While these represent separate templates, this may confuse readers.
   **Location**: Lines 82 and 85
   **Fix**: Add a comment explaining these are in separate templates, or use different variable names like `nameA` and `nameB`.

### 🟠 Other Problems

1. **Problem**: The documentation states "Every question has an `id` parameter" (line 14), but technically the `id` is a parameter in shorthand form and a property in object form.
   **Recommendation**: Clarify the distinction: "In shorthand form, the `id` is the second parameter. In object form, it's the `id` property."

2. **Problem**: Related documentation (`/developer/templates/reference/sdk/inquirer.mdx`) incorrectly states `dateSelect()` returns `Date` when it actually returns `string`.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:147-148` shows `dateSelect` returns string via `isStringAnswer()`.
   **Recommendation**: Fix the related documentation file.

## Verification Summary

### Verified Accurate Claims

1. **API Signature**: The shorthand form `i.text('message', 'id', 'help')` is correctly documented.

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:22`
   - `text(q: string, id: string, help?: string | null): Promise<string>;`

2. **Key Behavior**: The `id` parameter is used as a key for answer lookup.

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:15-21`

   ```ts
   private getAnswer(q: Question): Answer {
     if (!this.#answers[q.id]) {
       throw new OutOfAnswerException('', q);
     }
     return this.#answers[q.id];
   }
   ```

3. **Cross-Template Key Sharing**: Real-world evidence shows template2 using template1's key.

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template2/cyan/index.ts:4`

   ```ts
   const name = await i.text('What is your name?', 'ernest/template1/name');
   ```

4. **Namespacing Pattern**: The examples in iridium templates follow the namespacing convention documented (e.g., `'ernest/template1/color'`, `'ernest/template2/investmentType'`).

5. **Confirm Method Signature**: The `confirm()` method signature is accurate.

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:10`
   - `confirm(q: string, id: string, help?: string | null): Promise<boolean>;`

6. **Related Links**: All three related links exist and are valid.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 3     |
| 🟠       | 2     |

---

### user/how-to/browse-templatesx

<!-- source: content/docs/user/how-to/browse-templates.mdx -->

# 📄 File: content/docs/user/how-to/browse-templates.mdx

> A brief documentation page about template discovery via the web UI. The document claims template discovery is only available through the web UI at registry.cyanprint.dev, with no CLI search command.

### 🔴 Source Code Inaccuracies

1. **Incorrect Registry URL**
   - **Documented**: `registry.cyanprint.dev`
   - **Actual**: `cyanprint.dev` (with registry at `/registry` path)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/docs/developer/00-README.md:55` shows production URL as `https://cyanprint.dev`. The registry search functionality is implemented at `/registry` route in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte:1`. The subdomain `registry.cyanprint.dev` does not appear to be configured in the config files.

### 🟡 Documentation Issues

1. **Incomplete search capabilities description**

   - **Problem**: The document mentions searching by "name, username, or tags" but the actual web UI also supports searching for Plugins, Processors, and Resolvers - not just templates.
   - **Location**: Line 12: "Search by name, username, or tags"
   - **Fix**: Either clarify this page is specifically for templates, or expand the description to include all searchable resource types (Templates, Plugins, Processors, Resolvers). See `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte:26-45` for the full list of options.

2. **Missing mention of programmatic API access**
   - **Problem**: The document states there is "no CLI search command" but doesn't mention that a Search API exists for programmatic access.
   - **Location**: Line 8: "There is no CLI search command"
   - **Fix**: While correct that there's no CLI search, consider noting that developers can use the REST API directly. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:38-49` shows a `GET /api/v1/Template` Search endpoint.

### 🟠 Other Problems

1. **Potential confusion between API endpoint and Web UI URL**

   - **Problem**: The documentation references `registry.cyanprint.dev` but the actual API endpoint used by the CLI is `https://api.zinc.sulfone.raichu.cluster.atomi.cloud` (as seen in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:13-14`).
   - **Recommendation**: Clearly distinguish between the web UI URL (cyanprint.dev/registry) and the API endpoint for programmatic access.

2. **No CLI search command - verified as accurate**
   - **Problem**: None - the claim is accurate.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:28-98` shows only `Push`, `Create`, `Update`, and `Daemon` commands - no search command exists.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 2     |
| 🟠       | 2     |

---

### developer/basics/quickstart

<!-- source: content/docs/developer/basics/quickstart.mdx -->

# 📄 File: content/docs/developer/basics/quickstart.mdx

> This documentation file is essentially empty - containing only a title and a single sentence ("Quickstart guide for CyanPrint development"). No substantial factual claims, code references, or API descriptions exist to verify against source code.

### 🔴 Source Code Inaccuracies

None - No verifiable claims present in documentation.

### 🟡 Documentation Issues

1. **Problem: Stub/placeholder content** | Location: Entire file | Fix: This quickstart guide needs substantial content to be useful. Should include:
   - Prerequisites for CyanPrint development
   - Installation steps
   - Basic usage examples
   - Links to relevant SDK/API references in helium, boron, argon, iridium, and zinc projects

### 🟠 Other Problems

1. **Problem: Missing CyanPrint context** | Recommendation: Clarify what "CyanPrint development" refers to. Based on source paths (argon, boron, helium, iridium, zinc), this appears to be related to a templating system. The documentation should explain this relationship.

2. **Problem: No actionable content** | Recommendation: Add concrete getting started steps. The helium SDK (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/`) contains domain models for plugins, processors, and templates that could be documented.

3. **Problem: No links to related documentation** | Recommendation: Add cross-references to related developer documentation pages.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 1     |
| 🟠       | 3     |

---

### developer/plugins/how-to/modify-files

<!-- source: content/docs/developer/plugins/how-to/modify-files.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/modify-files.mdx

> Documentation for file modification operations in plugins. Generally accurate but has one minor inconsistency with the SDK's actual type naming.

### 🔴 Source Code Inaccuracies

1. **PluginInput vs CyanPluginInput** | Documented shows `PluginInput` | Actual SDK uses `CyanPluginInput` | `helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21`
   - The reference documentation at `/developer/plugins/reference/sdk/input-output` uses `PluginInput` as the interface name, but the actual SDK exports `CyanPluginInput` from `@atomicloud/cyan-sdk`
   - Actual interface:
     ```ts
     interface CyanPluginInput {
       directory: string;
       config: unknown;
     }
     ```

### 🟡 Documentation Issues

1. **Inconsistent type name across docs** | `/developer/plugins/reference/sdk/input-output.mdx:17-20` | Update to use `CyanPluginInput` to match SDK export

   - The SDK exports `CyanPluginInput`, not `PluginInput`. The documentation should use the actual exported type name for consistency.

2. **Glob import style** | Line 203 `import { glob } from 'glob';` | Consider noting that this is a third-party dependency
   - The `glob` package is listed as a dependency of the SDK (version ^11.0.0 in package.json), but plugins need to install it separately if they want to use it. The documentation should clarify this is a separate npm package, not part of the SDK exports.

### 🟠 Other Problems

1. **Missing explicit PluginOutput import** | Throughout all code examples | Consider showing explicit type import for better TypeScript practice
   - The actual e2e tests in iridium show `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk'` with explicit return typing `Promise<PluginOutput>`. The documentation examples could benefit from showing this pattern for better type safety.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 2     |
| 🟠       | 1     |

---

### developer/plugins/reference/indexx

<!-- source: content/docs/developer/plugins/reference/index.mdx -->

# 📄 File: content/docs/developer/plugins/reference/index.mdx

> This is a simple index/navigation page that lists links to plugin reference documentation. The file contains minimal content - just a title, description, and organized list of navigation links to sub-pages covering Project Setup and SDK Reference topics.

### 🔴 Source Code Inaccuracies

None identified for this specific index file. The file contains only navigation links without technical claims or code references that require verification against source code.

### 🟡 Documentation Issues

1. **Source path mismatch** | The task specified source paths `["../argon", "../boron", "../helium", "../iridium", "../zinc"]` but these paths point to contributor repository documentation (sulfone.argon, sulfone.boron, sulfone.helium, sulfone.iridium, sulfone.zinc) which describe platform components, not plugin SDK source code. | The source paths should point to actual SDK source code for verification. Based on previous fact-check analysis, the actual SDK source is in the helium repository at `helium/sdks/node/src/`.

### 🟠 Other Problems

1. **Minimal context on index page** | The index page provides only a list of links with brief descriptions. Users landing here have no overview of what the plugin reference covers or how it's organized. | Consider adding a brief introductory paragraph explaining the plugin reference organization (Project Setup files vs SDK Reference sections).

2. **All linked pages verified to exist** | The following linked documentation pages all exist:
   - `/developer/plugins/reference/project-structure` - project-structure.mdx exists
   - `/developer/plugins/reference/cyan-yaml` - cyan-yaml.mdx exists
   - `/developer/plugins/reference/dockerfile` - dockerfile.mdx exists
   - `/developer/plugins/reference/sdk/index` - sdk/index.mdx exists
   - `/developer/plugins/reference/sdk/start-plugin` - sdk/start-plugin.mdx exists
   - `/developer/plugins/reference/sdk/input-output` - sdk/input-output.mdx exists
   - `/developer/plugins/reference/sdk/types` - sdk/types.mdx exists

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 1     |
| 🟠       | 2     |

### Note on Related Findings

While this index file itself has no technical inaccuracies, the linked SDK reference pages (input-output.mdx, types.mdx, start-plugin.mdx) have documented issues with type naming. According to previous analysis:

- Documentation shows `PluginInput` type but SDK exports `CyanPluginInput`
- Code examples using `PluginInput` will fail at compile time

For detailed findings on those issues, see the fact-check reports for the individual SDK reference pages.

---

### developer/plugins/tutorials/indexx

<!-- source: content/docs/developer/plugins/tutorials/index.mdx -->

# 📄 File: content/docs/developer/plugins/tutorials/index.mdx

> Index page for plugin tutorials. Brief page with a single tutorial link and learning objectives. Minimal technical claims - all have been verified against source code in helium/sdks/node.

### 🔴 Source Code Inaccuracies

None identified. All documented claims match the source code.

### 🟡 Documentation Issues

1. **Missing Type Export Documentation**

   - **Problem**: The "What you'll learn" section mentions "Using `StartPluginWithLambda`" but the SDK exports `CyanPluginInput` (not `PluginInput`) as the actual type received by the lambda function. The domain layer has `PluginInput` but the SDK exports `CyanPluginInput` from `main.ts:193`.
   - **Location**: `index.mdx:17`
   - **Fix**: Consider noting that the lambda receives `CyanPluginInput` (structurally identical: `directory: string; config: unknown`).

2. **Missing SDK Export Reference**

   - **Problem**: The page doesn't mention that `PluginOutput` is also exported from the SDK and is the required return type.
   - **Location**: `index.mdx:14-19` (What you'll learn section)
   - **Fix**: Optional - add "Returning PluginOutput" to learning objectives.

3. **Minor Description Enhancement**
   - **Problem**: The tutorial description says "runs post-processing commands after file generation" which is accurate, but could be more specific (git init and dependency installation).
   - **Location**: `index.mdx:12`
   - **Fix**: Optional - description is accurate as-is.

### 🟠 Other Problems

None identified.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 3     |
| 🟠       | 0     |

### Verification Details

**Verified Claims:**

1. **`StartPluginWithLambda` function** - CONFIRMED

   - Source: `helium/sdks/node/src/main.ts:82-85`

   ```typescript
   function StartPluginWithLambda(f: LambdaPluginFn): void {
     const lambda = new LambdaPlugin(f);
     StartPlugin(lambda);
   }
   ```

2. **Package `@atomicloud/cyan-sdk`** - CONFIRMED

   - Source: `helium/sdks/node/package.json:2`

   ```json
   "name": "@atomicloud/cyan-sdk"
   ```

3. **Plugin input interface structure** - CONFIRMED

   - Source: `helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21`

   ```typescript
   interface CyanPluginInput {
     directory: string;
     config: unknown;
   }
   ```

   - Also exists as domain type: `helium/sdks/node/src/domain/plugin/input.ts:1-5`

4. **Plugin output interface structure** - CONFIRMED

   - Source: `helium/sdks/node/src/domain/plugin/output.ts:1-4`

   ```typescript
   interface PluginOutput {
     directory: string;
   }
   ```

5. **LambdaPluginFn type** - CONFIRMED

   - Source: `helium/sdks/node/src/api/plugin/lambda.ts:5`

   ```typescript
   type LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>;
   ```

6. **Port 5552 for plugins** - CONFIRMED

   - Source: `helium/sdks/node/src/main.ts:65`

7. **POST /api/plug endpoint** - CONFIRMED

   - Source: `helium/sdks/node/src/main.ts:68`

8. **SDK exports include StartPluginWithLambda and types** - CONFIRMED
   - Source: `helium/sdks/node/src/main.ts:168-207`
   - Exports: `StartPluginWithLambda`, `CyanPluginInput`, `PluginOutput`

---

### developer/indexx

# File: content/docs/developer/index.mdx

> Developer overview page for CyanPrint that introduces the three extensible artifacts: Templates, Processors, and Plugins. The page serves as a navigation hub linking to detailed documentation for each artifact type.

### Source Code Inaccuracies

None found. The documentation accurately reflects the source code:

- **Templates** - Correctly described as defining questions and file processing rules. Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/template/service.ts` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts` confirm templates use `IInquirer` interface for question handling and return a `Cyan` config.

- **Processors** - Correctly described as transforming files (templating, syntax). Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/processor/service.ts` shows `ProcessorService` handles file transformation with `CyanFileHelper` for read/write operations.

- **Plugins** - Correctly described as post-processing (run commands, file ops). Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/service.ts` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` confirm plugins receive a directory and can perform operations.

- **"artifacts" terminology** - Confirmed in source code at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/docs/developer/00-README.md:32` which explicitly states "Helium provides SDKs for building CyanPrint artifacts" and lists Templates, Processors, and Plugins.

- **SDK exports** - The documented function names (`StartTemplateWithLambda`, `StartProcessorWithLambda`, `StartPluginWithLambda`) are confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:169-177`.

### Documentation Issues

None found. All links in the documentation are valid:

1. `[Introduction](/developer/basics/introduction)` - File exists at `content/docs/developer/basics/introduction.mdx`
2. `[Architecture](/developer/basics/architecture)` - File exists at `content/docs/developer/basics/architecture.mdx`
3. `[Templates](/developer/templates)` - File exists at `content/docs/developer/templates/index.mdx`
4. `[Processors](/developer/processors)` - File exists at `content/docs/developer/processors/index.mdx`
5. `[Plugins](/developer/plugins)` - File exists at `content/docs/developer/plugins/index.mdx`

### Other Problems

None found. The documentation is accurate and well-structured.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 0     |
| Documentation Issues     | 0     |
| Other Problems           | 0     |

---
