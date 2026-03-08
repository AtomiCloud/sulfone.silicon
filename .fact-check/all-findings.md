<!-- source: content/docs/contributor/architecture/execution-flow.mdx -->

# File: content/docs/contributor/architecture/execution-flow.mdx

> Documentation accurately describes the CyanPrint execution flow with minor inaccuracies in error handling behavior and API endpoint format. The parallel execution via semaphore-based concurrency and tar.gz streaming output are correctly documented.

### Source Code Inaccuracies

1. **Error Handling for Processor Failure**

   - **Documented**: "Processor failed: Continue with remaining processors, warn user"
   - **Actual**: Processor failure returns an error and stops the merge pipeline entirely. The edge case documentation in boron states: "Processor fails: Returns error from that processor, stops merge"
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/features/03-merger-system.md:168` and `merger.go:300-304` shows that if `execProcessors()` returns errors, the merge stops with error return.

2. **API Endpoint Format for Template Resolution**

   - **Documented**: `GET api/v1/template/{template-ref}`
   - **Actual**: The Zinc registry API uses `/api/v1/template/slug/{username}/{name}` for template resolution by slug, not a single `{template-ref}` parameter
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/docs/developer/surfaces/api/01-template.md:93-94` shows the actual endpoint format.

3. **Plugin Execution Method Name**
   - **Documented**: "plug method called with directory and config"
   - **Actual**: While the endpoint is `/api/plug` and the service method is `plug()`, the `ICyanPlugin` interface method is `plugin()`, not `plug()`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:19-21` shows `plugin(input: CyanPluginInput): Promise<PluginOutput>` not `plug()`.

### Documentation Issues

1. **CLI Command Should Use `pls` Instead of `cyanprint` in Examples**

   - **Problem**: The Iridium CLI documentation uses `pls create` as the primary command format, but the execution-flow doc uses `cyanprint create`
   - **Location**: Lines 14, 39 in the document
   - **Fix**: Either use `pls create` consistently or clarify that `cyanprint` is the binary name while `pls` is an alias. Note: The Iridium docs show `pls create` as the usage format, suggesting this is the preferred user-facing command.

2. **Phase 6 Plugin Application Diagram Shows Sequential Execution Incorrectly**

   - **Problem**: The diagram shows plugins branching to different types (File Modifier, Content Generator, Validator) but then all leading to "plug method called". The actual implementation runs plugins sequentially, not in parallel branches
   - **Location**: Lines 135-145, the Mermaid diagram
   - **Fix**: Clarify that plugins run sequentially (one after another), not as parallel branches. The merger system docs confirm: "Plugins run sequentially - plugin 2 sees the result of plugin 1."

3. **Plugin Output Interface Missing `outputDir` Field in Documentation**

   - **Problem**: The PluginOutput interface documented in Helium shows `{ directory: string }` but the actual API response includes `outputDir` per the PluginRes type
   - **Location**: Phase 6 description
   - **Fix**: The internal `PluginOutput` type has `directory: string`, but the API response (`PluginRes`) returns `outputDir: string`. This distinction should be clarified if documenting the API response.

4. **Phase 5 Parallelism Limit Reference**
   - **Problem**: The diagram shows "Based on runtime.NumCPU" but Go code uses `rt.NumCPU()` which is the same, but the actual field is `ParallelismLimit` which is set to `rt.NumCPU()` at server initialization
   - **Location**: Line 116
   - **Fix**: Minor clarification - the parallelism is indeed based on `runtime.NumCPU()` but is stored in `ParallelismLimit` field of the DockerClient struct.

### Other Problems

1. **Output Streaming Protocol Mismatch**

   - **Problem**: The sequence diagram shows "Boron->CLI: Stream via HTTP REST (io.Copy)" but this describes internal implementation. The actual flow has the merger container generating the tar.gz, which Boron proxies to the CLI
   - **Recommendation**: Clarify that Boron acts as a proxy between the merger container and CLI for the streaming output.

2. **Missing Phase: Session Warming**
   - **Problem**: The execution flow omits the warming phase (`/executor/:sessionId/warm`) which pulls images and creates session volumes before execution
   - **Recommendation**: Consider adding an optional "Phase 0: Session Warm-up" for completeness, especially since the Iridium create command flow shows template warming as part of the process.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 3     |
| Documentation Issues     | 4     |
| Other Problems           | 2     |

<!-- source: content/docs/contributor/architecture/overview.mdx -->

# 📄 File: content/docs/contributor/architecture/overview.mdx

> This document provides an overview of the CyanPrint system architecture, describing components (Iridium, Boron, Zinc, Argon, Helium, Silicon) and their relationships. Most factual claims are accurate, but there are some minor issues.

### 🔴 Source Code Inaccuracies

1. **Documented:** "built with Next.js 16 and Fumadocs" (line 80)
   **Actual:** Next.js version is 16.1.6 (but still within the Next.js 16 family) - see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/package.json:19` which shows `"next": "16.1.6"`
   **Status:** Minor - the statement is technically accurate as "Next.js 16" is the major version

2. **Documented:** CLI command "cyanprint create <template_ref> my-project" (line 91)
   **Actual:** This is CORRECT - the binary is named `cyanprint` as confirmed by `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.goreleaser.yaml:22` which shows `binary: cyanprint`
   **Status:** ACCURATE

### 🟡 Documentation Issues

1. **Problem:** The document states Next.js 16 but doesn't specify the minor version
   **Location:** Line 80
   **Fix:** Consider specifying "Next.js 16.x" or the exact version, though the current statement is technically correct

2. **Problem:** The SDK naming in the document says "TypeScript/Node" but the actual SDK package is named `@atomicloud/cyan-sdk`
   **Location:** Line 73-74
   **Fix:** The naming "TypeScript SDK" is acceptable for user-facing documentation, though internally the package is `@atomicloud/cyan-sdk`. No change required.

### 🟠 Other Problems

1. **Problem:** The Mermaid diagram on line 50-51 shows dashed lines between TypeScript SDK and Python/.NET SDKs suggesting they depend on each other, which could be misleading
   **Recommendation:** Clarify that all three SDKs (TypeScript, Python, .NET) are independent implementations that share the same HTTP protocol, rather than the Python/.NET SDKs depending on the TypeScript SDK

2. **Problem:** The "Data Flow" sequence diagram shows "cyanprint create" which is correct, but the internal Iridium docs use "pls create" in examples
   **Location:** Line 91
   **Recommendation:** The document correctly uses `cyanprint` - this is accurate. No change needed.

## Summary

| Category | Count                                                                 |
| -------- | --------------------------------------------------------------------- |
| 🔴       | 0 (the Next.js 16 claim is technically accurate as the major version) |
| 🟡       | 2                                                                     |
| 🟠       | 2                                                                     |

## Verification Details

### Verified Accurate Claims:

- **Binary name:** `cyanprint` (confirmed in iridium/.goreleaser.yaml:22)
- **Iridium:** CLI tool written in Rust (confirmed via Cargo.toml)
- **Boron:** Execution coordinator (Go-based, confirmed via README.MD)
- **Zinc:** Registry API written in .NET 8 (confirmed via README.MD:3)
- **Argon:** Web UI written in SvelteKit (confirmed via README.md:3)
- **Helium SDKs:**
  - TypeScript/Node: `@atomicloud/cyan-sdk` v2.1.0 (confirmed via sdks/node/package.json:2)
  - Python: `cyanprintsdk` v2.1.0 (confirmed via sdks/python/pyproject.toml:2-3)
  - .NET: `AtomiCloud.CyanPrint` v2.1.0 (confirmed via sdks/dotnet/sulfone-helium/sulfone-helium.csproj:13-14)
- **Silicon:** Documentation site using Next.js 16.1.6 and Fumadocs (confirmed via package.json)
- **Repository links:** GitHub URLs are correctly formatted
- **Execution environment:** Container-based execution managed by Boron (confirmed via Boron source code)
- **Command syntax:** `cyanprint create <template_ref> my-project` is correct (confirmed via iridium docs)
<!-- source: content/docs/contributor/development/setup.mdx -->

# 📄 File: content/docs/contributor/development/setup.mdx

> This file documents the development setup for contributing to CyanPrint. It covers Nix-based development environment, common `pls` commands, and pre-commit hooks.

### 🔴 Source Code Inaccuracies

1. **Documented**: `pls test` - "Run tests (if available)"
   **Actual**: The `test` command does NOT exist in all repositories. It only exists in:

   - `argon` (as `pls test`)
   - `helium` (via included taskfile as `template:test` or `resolver:test`, not `pls test` directly)
   - `zinc` (as `stop:test`, not a test runner)
   - `boron` has NO test task
   - `iridium` has NO test task
     **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/Taskfile.yaml` has no `test` task. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/` grep search found no test task.

2. **Documented**: Pre-commit hooks handle "Code formatting (Biome, treefmt)"
   **Actual**: Biome is NOT used in all repositories. It's only used in `helium` and `argon`. The other repos use different linters:

   - `boron`: golangci-lint, treefmt
   - `iridium`: clippy (Rust), treefmt
   - `zinc`: dotnet-lint, treefmt
   - `helium`: biome, ruff, mypy, dotnet-lint, treefmt
   - `argon`: eslint, svelte-check, treefmt
     **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/nix/pre-commit.nix:34-42` shows golangci-lint, not Biome.

3. **Documented**: `pre-commit run -a` to run all checks manually
   **Actual**: The `pre-commit` command is NOT directly available in the PATH. Pre-commit hooks are managed via Nix's pre-commit-hooks.nix and run automatically via git hooks. The manual way to run checks would be `nix flake check` or direnv reload.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/nix/packages.nix` does not include pre-commit package.

### 🟡 Documentation Issues

1. **Problem**: Generic repository URL `sulfone.REPO_NAME` is vague
   **Location**: Line 26-27
   **Fix**: Clarify that contributors should replace `REPO_NAME` with the specific repository name (boron, iridium, zinc, helium, argon). Consider listing all available repositories.

2. **Problem**: `pls dev` command doesn't exist in all repositories
   **Location**: Common Commands table, line 56
   **Fix**: The `dev` command exists in `argon`, `zinc`, and is included in `helium` SDKs, but `boron` uses `pls run` and `iridium` has no dev command. Either document this per-repo or note the variation.

3. **Problem**: Pre-commit hooks description is incomplete
   **Location**: Lines 63-66
   **Fix**: List the actual hooks: treefmt (formatting), gitlint, shellcheck, secrets scanning (infisical), and language-specific linters (varies by repo: golangci-lint, clippy, dotnet-lint, ruff, mypy, biome, eslint, hadolint).

4. **Problem**: `direnv allow` step may not work as documented
   **Location**: Lines 32-36
   **Fix**: Some repos like `boron/.envrc:3` include `pls setup` which runs automatically. The documentation should note that `direnv allow` may trigger setup commands defined in .envrc.

### 🟠 Other Problems

1. **Problem**: Documentation suggests uniform `pls` commands across all repos, but the Taskfiles vary significantly between repositories.
   **Recommendation**: Create per-repo setup guides or add a note that available commands vary by repository. The common commands section should clarify which repos support which commands.

2. **Problem**: The `.envrc` files vary - some include `pls setup` (boron), some don't (iridium).
   **Recommendation**: Document that the first-time setup experience may differ slightly per repository based on .envrc contents.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 4     |
| 🟠       | 2     |

<!-- source: content/docs/contributor/index.mdx -->

# 📄 File: content/docs/contributor/index.mdx

> This is an index/overview page for the contributor documentation. It lists CyanPrint components with their repositories and purposes. All factual claims verified against source code.

### 🔴 Source Code Inaccuracies

(None found)

### 🟡 Documentation Issues

(None found)

### 🟠 Other Problems

(None found)

## Verification Details

**Component Table Verification:**

| Component | Claimed Purpose                             | Verified | Evidence                                                                                                            |
| --------- | ------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------- |
| Iridium   | Command-line interface                      | ✅       | `/iridium/cyanprint/src/main.rs:24` contains `fn main()` for CLI binary                                             |
| Boron     | Execution coordinator                       | ✅       | `/boron/main.go` and `/boron/server.go` show Docker executor with `/executor/:sessionId` endpoints                  |
| Zinc      | Registry API                                | ✅       | `/zinc/Domain/Model/Template.cs`, `/zinc/Domain/Service/TemplateService.cs` contain template/registry domain models |
| Argon     | Registry Web UI (internally named "carbon") | ✅       | `/argon/package.json:2` has `"name": "carbon"`, `/argon/README.md:1` says `# Sulfone Carbon`                        |
| Helium    | SDKs (TypeScript, Python, C#)               | ✅       | `/helium/sdks/node/` (TypeScript), `/helium/sdks/python/` (Python), `/helium/sdks/dotnet/` (C#) directories exist   |
| Silicon   | Documentation site                          | ✅       | Current repository is the documentation site                                                                        |

**GitHub URLs Verification:**

All GitHub URLs follow the pattern `https://github.com/AtomiCloud/sulfone.<name>` and match the git remote URLs:

- `github-atomi:AtomiCloud/sulfone.iridium.git` ✅
- `github-atomi:AtomiCloud/sulfone.boron.git` ✅
- `github-atomi:AtomiCloud/sulfone.zinc.git` ✅
- `github-atomi:AtomiCloud/sulfone.argon.git` ✅
- `github-atomi:AtomiCloud/sulfone.helium.git` ✅

**Internal Links Verification:**

All internal links point to existing files:

- `/docs/contributor/architecture/overview` → `content/docs/contributor/architecture/overview.mdx` ✅
- `/docs/contributor/repositories` → `content/docs/contributor/repositories/index.mdx` ✅
- `/docs/contributor/development/setup` → `content/docs/contributor/development/setup.mdx` ✅

**Binary Name Check:**

No CLI commands are referenced in this file (no `cyan` or `cyanprint` commands mentioned).

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 0     |
| 🟠       | 0     |

<!-- source: content/docs/contributor/repositories/argon.mdx -->

# 📄 File: content/docs/contributor/repositories/argon.mdx

> Fact-check for Argon repository documentation. Verified against source code in /Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon. Tech stack is correctly documented as Svelte/SvelteKit, not React/Next.js (though index.mdx has an error). Key files, page structure, and component structure are accurate.

### 🔴 Source Code Inaccuracies

1. **Documented**: `npm install` | **Actual**: Project uses Bun (`bun i`) as shown in Taskfile.yaml:16 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml:16`
2. **Documented**: `npm run dev` | **Actual**: Project uses Bun (`bun run dev`) as shown in Taskfile.yaml:27 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml:27`
3. **Documented**: `npm run build` | **Actual**: Project uses Bun (`bun run build`) as shown in Taskfile.yaml:32 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml:32`
4. **Documented**: `npm run test:integration && npm run test:unit` | **Actual**: Project uses Bun (`bun run test`) which internally runs the test commands as shown in Taskfile.yaml:42 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml:42`
5. **Documented**: `npm run check` | **Actual**: Project uses Bun (`bun run check`) per package.json:10 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:10`
6. **Documented**: TemplateCard component example shows `userId: "user-123"` | **Actual**: The actual `TemplatePrincipalResp` interface uses `userId?: string | null` (optional, not required) and the component access `template.userId` directly | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/api/core/data-contracts.ts:315-326`

### 🟡 Documentation Issues

1. **Problem**: Example code for TemplateCard uses `name`, `description`, `userId`, `email`, `tags` as if they are required fields | **Location**: Lines 124-134 | **Fix**: Note that these are optional fields (`?` in TypeScript) or show realistic example with optional handling
2. **Problem**: The `index.mdx` file at `/content/docs/contributor/repositories/index.mdx:41,82` incorrectly lists Argon as using "TypeScript, React, Tailwind CSS, tRPC" and "Framework: React, Next.js" | **Location**: Cross-reference issue | **Fix**: Update index.mdx to correctly show "TypeScript, Svelte, SvelteKit, Tailwind CSS" and "Framework: SvelteKit"
3. **Problem**: The configuration section mentions `PUBLIC_LANDSCAPE=raichu` as the example, but the default in Taskfile.yaml:10 is `lapras` | **Location**: Line 115 | **Fix**: Either update example to show `lapras` as default or note that different landscapes have different defaults

### 🟠 Other Problems

1. **Problem**: The documentation mentions "usage analytics" as a feature but no evidence of analytics implementation was found in the source code | **Recommendation**: Either remove this feature claim or verify/add analytics implementation
2. **Problem**: The architecture diagram shows "API Endpoints" as an intermediate layer between HTTP Client and Zinc REST API, but the actual architecture uses direct API calls from the swagger-typescript-api generated client to Zinc | **Recommendation**: Simplify the diagram to show direct connection from "Swagger HTTP Client" to "Zinc REST API"
3. **Problem**: The search example code (lines 140-146) shows basic HTML input but actual implementation is more sophisticated with resource type selection and async search | **Recommendation**: Either simplify the description or update the example to be more realistic

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 3     |
| 🟠       | 3     |

<!-- source: content/docs/contributor/repositories/boron.mdx -->

# 📄 File: content/docs/contributor/repositories/boron.mdx

> Documentation for the Boron execution coordinator. Most technical claims are accurate but there are some minor discrepancies in Go version format, API endpoint behavior, and the CLI command structure.

### 🔴 Source Code Inaccuracies

1. **Go Version Format**

   - Documented: `Go 1.24`
   - Actual: `go 1.24.0` (with toolchain `go1.24.3`)
   - Evidence: `go.mod:3` - `go 1.24.0`

2. **CLI Command Structure**

   - Documented: `boron --registry <zinc-registry-endpoint>`
   - Actual: `sulfone-boron start --registry <zinc-registry-endpoint>` (uses subcommands)
   - Evidence: `main.go:18` - app name is `sulfone-boron`, `main.go:42-55` - registry flag is under `start` command

3. **Run Command**
   - Documented: `go run . --registry <registry-endpoint>`
   - Actual: `go run . start --registry <registry-endpoint>` (requires `start` subcommand)
   - Evidence: `main.go:42-55` - the `--registry` flag is defined under the `start` command

### 🟡 Documentation Issues

1. **Missing CLI Commands** | Location: Configuration section | Fix: Document all available CLI commands: `s` (image list), `start` (run server), `setup` (enforce network)

2. **Missing API Endpoint Details** | Location: API section | Fix: The `/merge/:sessionId` endpoint accepts `MergeReq` body with `fromDirs`, `toDir`, and `template` fields; the `/zip` endpoint accepts `ZipReq` with `target_dir` field

3. **Incomplete Container Types Description** | Location: Container Types section | Fix: Document that Template containers use port 5550, Processors use 5551, Plugins use 5552, and Mergers use 9000

4. **Default Registry Value** | Location: Configuration section | Fix: Document the default registry value `https://api.zinc.sulfone.raichu.cluster.atomi.cloud` which is set in `main.go:47`

5. **Health Check Timeout** | Location: Container Lifecycle section | Fix: Document that health checks use 60 maximum attempts with 1-second intervals

6. **Volume Paths** | Location: Volume Management section | Fix: Document that volumes are mounted at `/workspace/cyanprint` (read) and `/workspace/area` (write)

### 🟠 Other Problems

1. **Incomplete Architecture Diagram** | The diagram shows "Warm Container Pool" but the actual implementation does not maintain a warm pool - containers are created on demand. Consider updating the diagram to reflect actual behavior.

2. **Missing Setup Command Documentation** | The `setup` command enforces network creation but is not documented. It's a prerequisite step before running the server.

3. **Network Name** | The Docker network is named `cyanprint` (constant in `docker.go:24`), which should be mentioned in the Architecture section.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 6     |
| 🟠       | 3     |

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
| -------- | ----- |
| 🔴       | 12    |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/contributor/repositories/index.mdx -->

# 📄 File: content/docs/contributor/repositories/index.mdx

> Index page listing all CyanPrint repositories with tech stack overview and links to detailed documentation.

### 🔴 Source Code Inaccuracies

1. **Boron Tech Stack** | Documented: "Rust, Tokio, Tonic, SQLx" | Actual: "Go 1.24, Gin, urfave/cli, Docker" | boron.mdx:16-22
2. **Zinc Tech Stack** | Documented: "Rust, Axum, SQLx" | Actual: "F#/.NET 8, ASP.NET Core with Kestrel, Entity Framework Core" | zinc.mdx:16-21
3. **Argon Tech Stack** | Documented: "TypeScript, React, Tailwind CSS, tRPC" | Actual: "TypeScript, Svelte, SvelteKit, Tailwind CSS, swagger-typescript-api" | argon.mdx:16-22
4. **Argon Framework** | Documented: "React, Next.js" in Repository Details section | Actual: "Svelte, SvelteKit" | argon.mdx:19-20

### 🟡 Documentation Issues

1. **Inconsistent Framework naming** | The Repository Details section for Argon says "React, Next.js" but the Tech Stack table says "React" - both are incorrect per argon.mdx | Line 82-83 | Update to "Svelte, SvelteKit"
2. **Iridium Framework** | Table says "Clap" which is correct but could be clearer as "Clap (CLI framework)" for consistency | Line 38 | Consider more descriptive naming

### 🟠 Other Problems

1. **Helium SDK package name inconsistency** | Index says "SDKs for template development" but helium.mdx shows different package names per language (@atomicloud/cyan-sdk, cyanprintsdk, AtomiCloud.CyanPrint) | Consider adding package names for clarity
2. **Link to development setup** | The link `/docs/contributor/development/setup` is correct and the page exists | No action needed

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 2     |
| 🟠       | 1     |

<!-- source: content/docs/contributor/repositories/iridium.mdx -->

# 📄 File: content/docs/contributor/repositories/iridium.mdx

> Fact-check findings for Iridium documentation. Most structural claims are accurate, but push command syntax is significantly wrong. The binary name `cyanprint` is correctly used throughout.

### 🔴 Source Code Inaccuracies

1. **Push command syntax for template is incorrect**

   - Documented: `cyanprint push template <path>`
   - Actual: `cyanprint push template <blob_image> <blob_tag> <template_image> <template_tag> --config <path> --token <token> [--message <msg>]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:122-130` - Template subcommand requires `blob_image`, `blob_tag`, `template_image`, `template_tag` as positional arguments, not a single path.

2. **Push command syntax for group is incomplete**

   - Documented: `cyanprint push group <path>`
   - Actual: `cyanprint push group --config <path> --token <token> [--message <msg>]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:131-132` - Group subcommand takes no positional arguments. Config path is provided via `--config` flag (from PushArgs).

3. **Push command syntax for plugin is incorrect**

   - Documented: `cyanprint push plugin <path>`
   - Actual: `cyanprint push plugin <image> <tag> --config <path> --token <token> [--message <msg>]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:133-137` - Plugin subcommand requires `image` and `tag` as positional arguments.

4. **Push command syntax for processor is incorrect**

   - Documented: `cyanprint push processor <path>`
   - Actual: `cyanprint push processor <image> <tag> --config <path> --token <token> [--message <msg>]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:138-142` - Processor subcommand requires `image` and `tag` as positional arguments.

5. **Daemon command missing --registry flag in documentation**
   - Documented: `cyanprint daemon`
   - Actual: `cyanprint daemon [version] [--port <port>] [--registry <url>]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:74-97` - Daemon command has optional `version` (default: "latest"), `--port` (default: 9000), and `--registry` flags.

### 🟡 Documentation Issues

1. **Missing required --token flag for push commands**

   - Problem: The push commands require `--token` (or `CYAN_TOKEN` env var) but this is not shown in the examples.
   - Location: Lines 67-71 (Push command examples)
   - Fix: Add `--token <token>` or mention `CYAN_TOKEN` environment variable requirement.

2. **Missing --config flag documentation**

   - Problem: Push commands use `--config` flag (default: "cyan.yaml") but documentation shows positional path argument.
   - Location: Lines 67-71
   - Fix: Update examples to show `--config cyan.yaml` syntax instead of positional `<path>`.

3. **Inaccurate key file path for update submodules**
   - Problem: Documentation lists `cyanprint/src/update.rs` AND `cyanprint/src/update/` as separate entries, but `update.rs` is a thin wrapper that re-exports from `update/` submodules. The actual implementation is in `update/orchestrator.rs`, `update/spec.rs`, `update/version_manager.rs`, `update/operator_factory.rs`.
   - Location: Lines 43-47 (Key Files table)
   - Fix: Either merge these entries or be more specific about what each contains.

### 🟠 Other Problems

1. **Crate descriptions could be more precise**

   - Problem: The crate purpose descriptions are accurate but could be more specific. `cyancoordinator` is described as "Coordinator client for Boron communication" but it also handles file system operations (VFS, unpacking, merging, writing).
   - Recommendation: Expand the description to mention file system operations, or add a note about the crate's broader scope.

2. **Tech stack table is missing some dependencies**
   - Problem: The tech stack table lists major dependencies but omits others that are significant (e.g., `serde`, `serde_json`, `serde_yaml` for serialization, `chrono` for datetime handling, `uuid` for session IDs, `futures`/`futures-util`).
   - Recommendation: Consider adding a "Key Dependencies" note or expand the table with additional important crates.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/contributor/repositories/zinc.mdx -->

# 📄 File: content/docs/contributor/repositories/zinc.mdx

> The documentation for Zinc (registry API) is generally accurate but contains several inaccuracies regarding API endpoints, configuration structure, build commands, and Like endpoint signatures. Key files and tech stack are correctly documented.

### 🔴 Source Code Inaccuracies

1. **Like Endpoint Signature** | Documented: `POST /api/v{version}/{entityType}/like/{username}/{name}` | Actual: `POST /api/v{version}/{entityType}/slug/{username}/{name}/like/{likerId}/{like:bool}` (e.g., line 119 in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs`)

2. **Token Get by ID Endpoint** | Documented: `GET /api/v{version}/user/{userId}/tokens/{tokenId}` | Actual: No such endpoint exists - only list, create, update, revoke, and delete endpoints are available (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Users/API/V1/UserController.cs`)

3. **Token Update Endpoint** | Documented: `PUT /api/v{version}/user/{userId}/tokens/{tokenId}` | Actual: Correct, but there is also an undocumented `POST /api/v{version}/user/{userId}/tokens/{tokenId}/revoke` endpoint

4. **Token Delete Method** | Documented: `DELETE /api/v{version}/user/{userId}/tokens/{tokenId}` | Actual: Correct, this endpoint exists

5. **User Me Endpoint** | Documented: `GET /api/v{version}/user/Me` | Actual: The route is `GET /api/v{version}/user/Me` (case-sensitive "Me") - this is accurate but the documented path shows it correctly

6. **Configuration Kestrel URL** | Documented: `Url: "http://0.0.0.0:8080"` | Actual: `Url: http://+:9001` (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml` line 6)

7. **Configuration Database Structure** | Documented: `Database.MAIN.Host`, `Database.MAIN.Port`, `Database.MAIN.UserId`, `Database.MAIN.Password` | Actual: Uses `Database.Main.Host`, `Database.Main.Port`, `Database.Main.User`, `Database.Main.Password` (note: `User` not `UserId`) (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml` lines 141-148)

8. **Configuration Auth Domain** | Documented: `Domain: "api.descope.com/YOUR_PROJECT_ID"` | Actual: `Domain: sulfone` (local auth, not Descope-specific) (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml` line 182)

9. **Configuration EFCore Setting** | Documented: `EFCore.Enabled: true` | Actual: No such top-level `EFCore` key exists in configuration; EF Core settings are under `Trace.Instrument.EFCore.Enabled` (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Config/settings.example.yaml` lines 51-55)

10. **Build Commands** | Documented: `pls setup`, `pls start` | Actual: Taskfile shows `task setup` (runs `dotnet restore --use-lock-file`, `dotnet tool restore`, `./scripts/local/secrets.sh`), no `start` task exists - use `task dev` for development (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Taskfile.yml` lines 31-52)

### 🟡 Documentation Issues

1. **Incomplete Like Endpoint Documentation** | Location: "Likes (Social Features)" section | Fix: The Like endpoint requires `{likerId}` and `{like}` boolean parameters, not just `{username}/{name}`. The full pattern is `/slug/{username}/{name}/like/{likerId}/{like}`

2. **Missing Token Endpoints** | Location: "Token Management" section | Fix: Add the `POST /api/v{version}/user/{userId}/tokens/{tokenId}/revoke` endpoint for revoking tokens

3. **Missing Version Endpoints by ID** | Location: Template/Plugin/Processor/Resolver sections | Fix: Each entity type has an undocumented `GET /api/v{version}/{entity}/versions/{versionId:guid}` endpoint to get a specific version by its GUID

4. **Auth Configuration Misleading** | Location: "Configuration" section | Fix: The example configuration shows Descope-style domain but actual config uses local auth settings. Either update the example to reflect actual config structure or clarify that this is a placeholder

5. **Missing Configuration Sections** | Location: "Configuration" section | Fix: Configuration includes many more settings (Logging, Trace, Metrics, Swagger, Cors, ErrorPortal, BlockStorage, Cache, HttpClient) that are not documented

6. **Build Section Uses Wrong Tool Name** | Location: "Building" section | Fix: Change `pls setup` to `task setup` and `pls start` to `task dev` (or clarify that `pls` is the project alias for `task`)

### 🟠 Other Problems

1. **Language Discrepancy** | The tech stack table says "F#/.NET 8" but the codebase is entirely C# (`.cs` files), not F# (`.fs` files). No F# files were found in the repository. Recommend correcting to "C#/.NET 8".

2. **Key Files Path Inaccuracy** | `App/Modules/Users/API/Auth/` is listed but actual auth-related files are in `App/Modules/Users/API/V1/` (UserController.cs) and `App/Modules/Users/API/Auth/ApiKeyAuthenticationOptions.cs`. The path is partially correct but the main auth logic is in the controllers.

3. **Architecture Diagram Client Names** | The diagram shows "Iridium CLI" and "Argon Web UI" as clients but doesn't mention that other services may also call the API. Consider adding any internal service consumers if applicable.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 10    |
| 🟡       | 6     |
| 🟠       | 3     |

<!-- source: content/docs/developer/basics/architecture.mdx -->

# File: content/docs/developer/basics/architecture.mdx

> This document accurately describes the CyanPrint architecture with correct CLI name, ports, and endpoints. Found one missing artifact type (Resolver) and one minor inconsistency about Coordinator port usage.

### Source Code Inaccuracies

1. **Missing Resolver artifact type** | Documented: Only Template, Processor, Plugin, Merger containers in SDK Port Assignments table | Actual: There is a 5th artifact type "Resolver" on port 5553 with endpoint POST /api/resolve | helium/sdks/node/src/main.ts:145-166 shows `StartResolver` and `StartResolverWithLambda` functions with port 5553 and `/api/resolve` endpoint
2. **SDK Port Assignments table incomplete** | Documented: Template=5550, Processor=5551, Plugin=5552, Merger=9000, Coordinator=9000 | Actual: Resolver=5553 also exists as a valid SDK artifact type | helium/sdks/node/src/main.ts:147 shows `const port = 5553;` for Resolver

### Documentation Issues

1. **Component Overview table could mention Resolver** | Problem: The table lists only 4 components (Iridium CLI, Zinc API, Argon Web UI, Coordinator, Containers) but Resolver is an additional artifact type developers can create | Location: "Component Overview" table and "Container Communication" table | Fix: Add Resolver row to both tables with description "Resolves template references or configurations" and endpoint "POST /api/resolve"
2. **Merger row in SDK Port Assignments could be clarified** | Problem: The table lists Merger at port 9000 alongside Coordinator at 9000, which may cause confusion since the merger functionality runs inside the coordinator container | Location: "SDK Port Assignments" table | Fix: Add note clarifying that Merger endpoints are served by the Coordinator container internally, not as a separate SDK artifact

### Other Problems

1. **Argon Web UI shows resolvers but documentation omits them** | Problem: The Argon routes include `/resolvers/[user_id]/[resolver_id]/+page.ts` confirming Resolver is a supported artifact type in the registry UI | Recommendation: Update documentation to include Resolver as a first-class artifact type alongside Template, Processor, and Plugin
2. **Container Communication table missing Resolver** | Problem: The table shows Template, Processor, Plugin, Merger but Resolver is also a valid container type | Recommendation: Add row: "Resolver | Resolves template configurations | POST /api/resolve"

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 2     |
| Documentation Issues     | 2     |
| Other Problems           | 2     |

<!-- source: content/docs/developer/basics/introduction.mdx -->

# 📄 File: content/docs/developer/basics/introduction.mdx

> The introduction document describes the four CyanPrint artifacts (Templates, Processors, Resolvers, Plugins) with their SDK ports and execution flow. The SDK port assignments are verified as correct against the Helium SDK source code. The main issue is a broken link to the resolvers documentation section.

### 🔴 Source Code Inaccuracies

None found. The SDK port assignments are verified:

- Template: 5550 - `helium/sdks/node/src/main.ts:112`, `helium/sdks/python/cyanprintsdk/main.py:178`, `helium/sdks/dotnet/Taskfile.yaml:17`
- Processor: 5551 - `helium/sdks/node/src/main.ts:89`, `helium/sdks/python/cyanprintsdk/main.py:119`, `helium/sdks/dotnet/Taskfile.yaml:25`
- Resolver: 5553 - `helium/sdks/node/src/main.ts:147`, `helium/sdks/python/cyanprintsdk/main.py:212`, `helium/sdks/dotnet/sulfone-helium/Server.cs:182`
- Plugin: 5552 - `helium/sdks/node/src/main.ts:65`, `helium/sdks/python/cyanprintsdk/main.py:84`, `helium/sdks/dotnet/sulfone-helium-plugin-api/Dockerfile:17`

### 🟡 Documentation Issues

1. **Broken link to Resolvers documentation**

   - Documented: Link to `/docs/developer/resolvers` in "Choose Your Path" section (line 81)
   - Location: Line 81: `- [Create a Resolver](/docs/developer/resolvers) - Build conflict resolvers`
   - Actual: The `/docs/developer/resolvers` path does not exist. The meta.json at `/content/docs/developer/meta.json` only lists `["index", "basics", "templates", "processors", "plugins"]` - no resolvers section.
   - Fix: Either create the resolvers documentation section OR remove/hide the resolvers link until documentation is available. The Resolver SDK exists (Helium v2.1.0, 2026-03-02) but documentation has not been written.

2. **Inconsistent documentation coverage across artifacts**
   - Problem: The developer index page (index.mdx) also lists Resolvers in the table but does not link to them in "Build Your Artifact" section
   - Location: `/content/docs/developer/index.mdx` lines 14-19 and 32-34
   - Fix: Ensure consistency - either add resolvers link to index.mdx when documentation exists, or acknowledge it as a planned feature

### 🟠 Other Problems

1. **Execution flow may be incomplete for resolvers**

   - Problem: The Mermaid diagram and "How They Work Together" section show Resolver as an optional step (step 3), but the resolver execution points described (lines 46-50) mention "server-side resolution during template execution" and "client-side during layering". This distinction is technically correct but may need clarification about when resolvers actually execute in the current implementation.
   - Recommendation: Verify if resolvers are fully integrated into Boron/Iridium execution pipeline, as no references to port 5553 were found in those codebases. The SDK exists but orchestration support may be incomplete.

2. **Missing cyanprint binary references**
   - Problem: The document doesn't reference any CLI commands, which is appropriate for an introduction page
   - Note: No `cyanprint` vs `cyan` issues as there are no CLI commands in this document

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 2     |

<!-- source: content/docs/developer/basics/quickstart.mdx -->

# 📄 File: content/docs/developer/basics/quickstart.mdx

> Fact-check findings for the Developer Quickstart documentation page. The document has a significant inconsistency with the artifact count (says 3 but there are 4) and uses a meta template reference that cannot be verified in the source code.

### 🔴 Source Code Inaccuracies

1. **Documented**: "CyanPrint has three extensible components called **artifacts**" (line 20) | **Actual**: CyanPrint has **four** extensible artifacts: Templates, Processors, Resolvers, and Plugins | Evidence: `content/docs/developer/basics/introduction.mdx:8-17` lists all four artifacts with SDK ports; `content/docs/developer/index.mdx:12-19` also lists four artifacts; `zinc/docs/developer/surfaces/api/01-template.md:356-367` shows resolvers in template version response

2. **Documented**: Quickstart table lists only Templates, Processors, and Plugins (lines 22-26) | **Actual**: The Resolvers artifact is missing from the table | Evidence: `content/docs/developer/basics/introduction.mdx:16` shows Resolvers with SDK port 5553; Zinc API documentation (`zinc/docs/developer/surfaces/api/01-template.md:437-446`) shows resolvers are part of template version creation

3. **Documented**: Link to "the four artifacts" at `/docs/developer/basics/introduction` (line 40) | **Actual**: The link is correct but contradicts the "three extensible components" claim in this document | Evidence: Same document at line 20 says "three" while link target confirms "four"

### 🟡 Documentation Issues

1. **Problem**: Missing Resolvers link in "What Do You Want to Build?" table | **Location**: Lines 22-26 | **Fix**: Add Resolvers row: `| **Resolvers** | Resolve file conflicts from layered templates | [Resolver Tutorial](/docs/developer/resolvers/tutorials/first-resolver) |` - Note: This tutorial page may not exist yet and needs to be created

2. **Problem**: Meta template reference `cyan/new` cannot be verified in source code | **Location**: Line 33 | **Fix**: The command `cyanprint create cyan/new my-first-template` appears throughout the documentation but no `cyan/new` template exists in the searched source paths (boron, iridium, zinc, helium, argon). This may be a placeholder or a template expected to exist in a production registry. Consider either: (a) adding a note that this template must be published first, or (b) providing an alternative local development path

3. **Problem**: "Next Steps" section links to `/docs/developer/basics/introduction` for "the four artifacts" but this document only shows three | **Location**: Line 40 | **Fix**: Either update line 20 to say "four extensible components" and add Resolvers to the table, or update the link text to match the actual content

### 🟠 Other Problems

1. **Problem**: Node.js 18+ requirement may not be accurate for all scenarios | **Recommendation**: The helium SDK Dockerfile (`helium/sdks/node/template.Dockerfile:1`) uses `oven/bun:1.0.30`, not Node.js. For local development, Node.js may be needed, but the containers use Bun. Consider clarifying: "Node.js 18+ for local development (containers use Bun)"

2. **Problem**: Inconsistency between developer index and quickstart on what developers can build | **Recommendation**: The developer index at `content/docs/developer/index.mdx:30-34` lists only Templates, Processors, and Plugins under "Build Your Artifact" section, omitting Resolvers despite listing it as an artifact type. This creates confusion about whether Resolvers are a first-class artifact that developers should build

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/index.mdx -->

# 📄 File: content/docs/developer/index.mdx

> Overview page for developer documentation describing CyanPrint's four extensible artifact types.

### 🔴 Source Code Inaccuracies

1. Documented: "Resolvers - Resolve file conflicts from layered templates" | Actual: The documentation mentions Resolvers in the table but does not provide a link to Resolver documentation in the "Build Your Artifact" section | Location: Line 18 (table) vs Lines 32-34 (Build Your Artifact section) | Evidence: helium/sdks/node/src/main.ts:145-166 shows `StartResolver` and `StartResolverWithLambda` functions on port 5553 with `/api/resolve` endpoint, confirming Resolver is a full artifact type like Templates/Processors/Plugins

### 🟡 Documentation Issues

1. Missing link for Resolvers | Problem: The "Build Your Artifact" section lists only Templates, Processors, and Plugins but not Resolvers, despite Resolvers being listed as an artifact type in the table | Location: Lines 32-34 | Fix: Add `- [Resolvers](/docs/developer/resolvers) - Build file conflict resolvers for layered templates` to the "Build Your Artifact" section
2. Inconsistent artifact count | Problem: The page states there are "four extensible components called artifacts" but only provides paths for three of them | Location: Line 12 and Lines 30-35 | Fix: Either add the Resolver documentation path or clarify if Resolver documentation is pending

### 🟠 Other Problems

1. Incomplete documentation coverage | Problem: Resolver artifact type exists in codebase but lacks a corresponding documentation section link | Recommendation: Create a `/docs/developer/resolvers` section or add a note that Resolver documentation is coming soon

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 2     |
| 🟠       | 1     |

<!-- source: content/docs/developer/plugins/explanation/execution-order.mdx -->

# 📄 File: content/docs/developer/plugins/explanation/execution-order.mdx

> This document describes the execution order of processors and plugins in the CyanPrint pipeline. The general flow is accurate (processors run in parallel, plugins run sequentially), but there are some inaccuracies in type names and API details.

### 🔴 Source Code Inaccuracies

1. **Type Name Error** | Documented: `CyanConfig` | Actual: `Cyan` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:24-27` - The interface is named `Cyan`, not `CyanConfig`. Also confirmed in exports at `main.ts:195`.

2. **CyanFileHelper Method Signature** | Documented: `read()` (no parameters) | Actual: `read(g: CyanGlob)` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:73-75` - The `read()` method requires a `CyanGlob` parameter.

3. **CyanFileHelper Method Signature** | Documented: `get()` (no parameters) | Actual: `get(g: CyanGlob)` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:60-71` - The `get()` method requires a `CyanGlob` parameter.

4. **CyanFileHelper Method Signature** | Documented: `copy()` described as a general file copy method | Actual: `copy(copy: CyanGlob)` - internal method | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:77-93` - The `copy()` method takes a `CyanGlob` and is used internally for files with `GlobType.Copy`.

5. **CyanFileHelper Method Signature** | Documented: `readAsStream()` (no parameters) | Actual: `readAsStream(g: CyanGlob)` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:42-58` - The `readAsStream()` method requires a `CyanGlob` parameter.

6. **Processor files field representation** | Documented: `files: { /* CyanGlob configuration */ }` (object) | Actual: `files: CyanGlob[]` (array) | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:18-22` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:40-47` - The `files` field is an array of `CyanGlob` objects, not a single object.

### 🟡 Documentation Issues

1. **Incomplete CyanFileHelper API description** | Location: Phase 2, step 2 | Fix: The methods listed (`resolveAll()`, `read()`, `get()`, `copy()`, `readAsStream()`) should clearly indicate that only `resolveAll()` takes no parameters, while all others require a `CyanGlob` argument. Consider showing the actual method signatures.

2. **Ambiguous return type for template function** | Location: Phase 1, code example line 40 | Fix: The comment says "returns `CyanConfig`" but should say "returns `Cyan`" to match the actual SDK type.

3. **Missing GlobType import** | Location: Phase 1, code example | Fix: The code example uses `/* CyanGlob configuration */` but to create valid `CyanGlob` objects, developers need `GlobType` enum. The import should include `GlobType` for complete examples (as shown in actual templates at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:1`).

4. **Example pipeline uses incorrect files structure** | Location: Example Pipeline section, lines 143-145 | Fix: The `files` property should be an array `files: [{ include: [...], exclude: [...] }]` not an object. Also, `CyanGlob` uses `glob` and `exclude` properties, not `include` and `exclude`. See actual structure at `cyan.ts:6-11`.

### 🟠 Other Problems

1. **No CLI commands to verify** | This document focuses on architecture and execution flow. No CLI commands are mentioned, so no `cyanprint` vs `cyan` issues.

2. **Error handling description needs verification** | Location: Error Handling section | The documentation states "Processors execute in parallel; if one fails, others continue running" - this appears accurate based on the goroutine implementation in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/merger.go:102-177` where errors are collected via channels without cancellation. However, the statement "After parallel execution completes, the pipeline returns any errors and stops" is accurate - see `merger.go:300-304`.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 4     |
| 🟠       | 2     |

<!-- source: content/docs/developer/plugins/explanation/index.mdx -->

# 📄 File: content/docs/developer/plugins/explanation/index.mdx

> This is an index/navigation page listing three sub-pages for Plugin Explanation documentation. The file contains only frontmatter metadata and three internal links - no code, CLI commands, or API references to verify against source code.

### 🔴 Source Code Inaccuracies

(None - this file contains no code, CLI commands, or API references)

### 🟡 Documentation Issues

(None - all links are correctly formatted and target existing files)

### 🟠 Other Problems

(None)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 0     |
| 🟠       | 0     |

---

## Verification Details

### Links Verified

| Link                                                        | Target File                 | Status    |
| ----------------------------------------------------------- | --------------------------- | --------- |
| `/docs/developer/plugins/explanation/what-are-plugins`      | `what-are-plugins.mdx`      | ✅ Exists |
| `/docs/developer/plugins/explanation/plugins-vs-processors` | `plugins-vs-processors.mdx` | ✅ Exists |
| `/docs/developer/plugins/explanation/execution-order`       | `execution-order.mdx`       | ✅ Exists |

### Content Analysis

- **Title**: "Plugin Explanation" - appropriate for index page
- **Description**: "Conceptual documentation for CyanPrint plugins" - accurate description
- **Structure**: Standard Fumadocs index page with list of child pages
- **No CLI commands**: Correctly, there are no CLI commands in this index file
- **No code examples**: Correctly, this is an index/navigation file only
<!-- source: content/docs/developer/plugins/explanation/plugins-vs-processors.mdx -->

# 📄 File: content/docs/developer/plugins/explanation/plugins-vs-processors.mdx

> Documentation comparing plugins vs processors with code examples. All code examples and API references verified against source code in helium SDK and iridium e2e tests.

### 🔴 Source Code Inaccuracies

(none found)

### 🟡 Documentation Issues

1. **Incomplete SDK type import in processor example** | Lines 35-49 | The example uses `StartProcessorWithLambda` but doesn't show that `ProcessorOutput` type is also typically imported for explicit return typing (as seen in actual e2e/processor1/index.ts and e2e/processor2/index.ts). Consider adding explicit return type: `Promise<ProcessorOutput>` for clarity.

2. **Incomplete SDK type import in plugin example** | Lines 71-92 | The example uses `StartPluginWithLambda` but doesn't show that `PluginOutput` type is also typically imported for explicit return typing (as seen in actual e2e/plugin1/index.ts and e2e/plugin2/index.ts). Consider adding explicit return type: `Promise<PluginOutput>` for clarity.

3. **Minor discrepancy in template config example** | Lines 147-163 | The example shows `files: [{ root: 'templates', glob: '**/*', type: GlobType.Template }]` but the actual e2e templates use `root: 'template'` (singular) and also include the `exclude: []` property. While not technically incorrect, showing the complete pattern would be more accurate.

### 🟠 Other Problems

1. **Terminology: "CyanFileHelper" vs "fileHelper"** | Throughout | The documentation refers to `CyanFileHelper` as the API/class name but the parameter is named `fileHelper` (lowercase). This is correct but could be clarified with an explicit note that `fileHelper` is the instance of `CyanFileHelper` passed to the lambda.

2. **Execution order diagram could mention "copy" type files** | Lines 103-112 | The diagram shows processors transforming content but doesn't clarify that files with `GlobType.Copy` are copied directly without processing before the template files are resolved. The `resolveAll()` method in CyanFileHelper handles copy files first, then template files.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/plugins/explanation/what-are-plugins.mdx -->

# File: content/docs/developer/plugins/explanation/what-are-plugins.mdx

> Documentation explains plugin architecture, input/output types, and usage patterns. Several inaccuracies found in code examples and technical claims.

### Source Code Inaccuracies

1. **Import from 'bun' is not used in actual codebase**

   - Documented: `import { $ } from 'bun';`
   - Actual: Real plugins (iridium/e2e/plugin1, plugin2) use `import fs from 'node:fs'` and `import path from 'node:path'` for file operations. No shell template literal API exists in the SDK.
   - Evidence: /Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/index.ts:1-4 shows `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk'; import fs from 'node:fs'; import path from 'node:path';`

2. **Shell command examples use non-standard API**

   - Documented: `await $`git -C ${directory} init`.quiet();` and `await $`cd ${directory} && npm install`.quiet();`
   - Actual: The SDK does not provide a shell API. Bun's `$` template literal is a Bun-specific feature, but actual plugins use Node.js fs/path modules directly.
   - Evidence: Grep search across helium and iridium directories found no usage of `from 'bun'` in actual source code.

3. **Claim about "only component with shell access" is misleading**
   - Documented: "Plugins are the only component with shell access. Processors are isolated and cannot execute commands."
   - Actual: Neither plugins nor processors have explicit shell access in the SDK. Both receive directory paths and can technically execute shell commands using Node.js APIs (child_process). The isolation is conceptual/design-based, not technically enforced by the SDK.
   - Evidence: /Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts:1-6 shows PluginInput only has `directory` and `config` - no shell API provided.

### Documentation Issues

1. **Examples use Bun-specific shell API that isn't part of @atomicloud/cyan-sdk**

   - Problem: All three code examples (Setup Plugin, Formatter Plugin, Build Plugin) use `import { $ } from 'bun'` which is not part of the SDK
   - Location: Lines 108-121, 127-142, 148-163
   - Fix: Replace with Node.js `child_process` examples or `node:fs` operations, or clearly document that Bun runtime is required for shell operations

2. **"config" property usage is ambiguous in examples**
   - Problem: Examples cast `config` to custom types without explaining the type structure
   - Location: Lines 134, 155 - `const cfg = config as { formatter?: string };`
   - Fix: Add explanation of how config is passed from the template's cyan.yaml

### Other Problems

1. **Missing explanation of how shell operations work in containerized environment**

   - Problem: Documentation doesn't explain whether shell commands (like `git init`, `npm install`) actually work when plugins run in containers
   - Recommendation: Clarify the runtime environment and whether tools like git/npm are available

2. **Design philosophy section could be more specific**
   - Problem: "Simple - Minimal API, just receive directory and return it" doesn't explain what operations are actually available
   - Recommendation: Link to relevant SDK reference documentation for available APIs

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 3     |
| Documentation Issues     | 2     |
| Other Problems           | 2     |

<!-- source: content/docs/developer/plugins/how-to/conditional-execution.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/conditional-execution.mdx

> This page documents plugin conditional execution patterns using config. The plugin code examples are correct, but the Template Configuration section has a significant error showing the wrong function signature.

### 🔴 Source Code Inaccuracies

1. **Template function signature is wrong**

   - Documented: `export default async function (input: CyanPluginInput): Promise<Cyan>`
   - Actual: `async (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>`
   - Evidence: `../helium/sdks/node/src/api/template/lambda.ts:6` - `type LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>;`
   - Also confirmed in `../iridium/e2e/template1/cyan/index.ts:3` - `StartTemplateWithLambda(async (i: IInquirer, d: IDeterminism) => {`

2. **Wrong type used in template example**
   - Documented: Uses `CyanPluginInput` for template function parameter
   - Actual: Templates use `IInquirer` and `IDeterminism` parameters; `CyanPluginInput` is only for plugins
   - Evidence: `../helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` - `CyanPluginInput` has `{ directory, config }` fields which don't match template inputs

### 🟡 Documentation Issues

1. **Template Configuration example needs complete rewrite**

   - Problem: The entire "Template Configuration" section (lines 61-88) shows incorrect template code that wouldn't compile
   - Location: Lines 65-88 (the code block)
   - Fix: Replace with correct pattern showing `StartTemplateWithLambda(async (i: IInquirer, d: IDeterminism) => { ... })` with inquirer prompts and return of `Cyan` object

2. **Import example in Template Configuration is misleading**
   - Problem: Shows `import type { Cyan } from '@atomicloud/cyan-sdk';` but the function signature is wrong
   - Location: Line 66
   - Fix: Add `IInquirer` and `IDeterminism` imports which are actually needed for templates

### 🟠 Other Problems

1. **Link text refers to wrong type name**
   - Problem: The related link at line 215 references `CyanPluginInput` in the title, but the linked page uses `PluginInput`
   - Location: Line 215
   - Recommendation: Verify which type name is correct and ensure consistency across documentation

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 2     |
| 🟠       | 1     |

<!-- source: content/docs/developer/plugins/how-to/index.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/index.mdx

> This is an index page listing four how-to guides for plugins. The page provides brief descriptions and links to detailed guides for command execution, file operations, conditional execution, and publishing to registry.

### 🔴 Source Code Inaccuracies

None - This index page contains no code references or API descriptions that require source code verification.

### 🟡 Documentation Issues

1. **Source paths not available** | Task mentions source paths: `../boron,../iridium,../zinc,../helium,../argon` | These external repositories do not exist within this documentation repository. Cannot verify claims against source code.

### 🟠 Other Problems

1. **Links use correct format** | All four links use the `/docs/developer/plugins/how-to/<slug>` format | The linked files exist and are accessible. No broken links detected.
2. **Binary naming** | No CLI commands in this index page | No issues with `cyanprint` vs `cyan` naming since no commands are present.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 1     |
| 🟠       | 2     |

<!-- source: content/docs/developer/plugins/how-to/modify-files.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/modify-files.mdx

> Documentation for modifying files in plugins using Node.js fs module and glob patterns. Overall accuracy is good with minor issues around type naming consistency and glob import style.

### 🔴 Source Code Inaccuracies

1. **Documented**: Import statement uses `import { StartPluginWithLambda, PluginOutput } from '@atomicloud/cyan-sdk';`
   **Actual**: The correct import should include `CyanPluginInput` type instead of inline `input` type, and the actual function signature uses `CyanPluginInput` not an implicit input type. The SDK exports both `CyanPluginInput` and `PluginOutput` types.
   **Evidence**: helium/sdks/node/src/main.ts:183-207 shows exports include `CyanPluginInput` and `PluginOutput`; helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21 defines `CyanPluginInput`

2. **Documented**: `const { directory } = input;` with input typed implicitly
   **Actual**: The input parameter to the lambda function is of type `CyanPluginInput`, which is exported from the SDK. Documentation should be consistent about this type name.
   **Evidence**: helium/sdks/node/src/api/plugin/lambda.ts:5 shows `type LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>;`

3. **Documented**: `const { directory, config } = input;` with `const cfg = config as { author?: string };`
   **Actual**: This is correct, but the input type should be explicitly `CyanPluginInput` for clarity and consistency with the SDK.
   **Evidence**: helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21

### 🟡 Documentation Issues

1. **Problem**: Inconsistent type naming - the documentation sometimes uses implicit typing for `input` instead of explicitly showing `CyanPluginInput`
   **Location**: Throughout the document (lines 21, 37, 50, 73, 99, 129, 175, 205)
   **Fix**: Add explicit type annotations like `async (input: CyanPluginInput)` in at least the first example for clarity, and show import of `CyanPluginInput` type

2. **Problem**: The glob import example shows `import { glob } from 'glob';` but the SDK already includes glob as a dependency (version ^11.0.0)
   **Location**: Line 200 says "install separately: `npm install glob`" and line 203
   **Fix**: While this is technically correct that plugins need to install it in their own package.json, clarify that the SDK uses glob internally but plugin authors should install it in their plugin project

3. **Problem**: The glob example uses named import `{ glob }` but glob v11+ supports both default and named exports
   **Location**: Line 203
   **Fix**: Verify this matches glob v11 API - the SDK itself uses `import { glob } from 'glob';` at helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:6, so this is correct

4. **Problem**: Missing import statement for `path` and `fs/promises` in some examples
   **Location**: Lines 36-44 (Write a File example) and lines 49-65 (Modify a File example) don't show imports
   **Fix**: Either add imports to each example or clearly state that imports from first example apply

5. **Problem**: The "Using Glob Patterns" section header could mention this is an external package
   **Location**: Line 198
   **Fix**: Already noted in text, but could be clearer that glob is not part of the SDK itself

### 🟠 Other Problems

1. **Problem**: Code examples use `fs/promises` import but real plugin examples in iridium use synchronous `fs` module
   **Recommendation**: The async `fs/promises` approach shown in documentation is valid and often preferred. However, showing both async and sync approaches might be helpful since actual plugins (iridium/e2e/plugin1, plugin2) use synchronous `fs` operations

2. **Problem**: No error handling examples for file operations
   **Recommendation**: Consider adding a brief example showing try/catch for file operations, especially for cases where files might not exist or have permission issues

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 5     |
| 🟠       | 2     |

<!-- source: content/docs/developer/plugins/how-to/push-to-registry.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/push-to-registry.mdx

> This document covers pushing Docker images to container registries for plugins. While generally accurate for Docker workflows, it has several issues: a broken link to a non-existent "Plugin Registry" page, inaccurate versioning examples using semver-style tags instead of the actual auto-increment integer versions used by Zinc, and potentially misleading plugin reference syntax in YAML examples.

### 🔴 Source Code Inaccuracies

(for each: Documented | Actual | file:line evidence)

1. **Link to non-existent Plugin Registry page**: The document links to `/docs/developer/plugins/reference/registry` (line 224) which does not exist. The Plugin Reference index (`content/docs/developer/plugins/reference/index.mdx`) shows no such page. The actual plugin registry is documented in Zinc at `zinc/docs/developer/surfaces/api/03-plugin.md`.

2. **Versioning format in examples uses semver-style tags**: The document shows version tags like `:1.0.0`, `:2.0.0`, `:1.1.0`, `:1.0.1` (lines 52-53, 60-61, 110-122, 131, 134, 181-182). However, Zinc uses auto-incrementing `ulong` integers (v1, v2, v3), not semver. Source: `zinc/docs/developer/concepts/04-version.md:6-13` states: "Actual Version Format: Type: ulong (simple integer), Pattern: Auto-increment starting from 1" and "NOT (Previous Incorrect Docs): Semantic versioning - Versions are simple incrementing integers".

3. **Plugin reference in cyan.yaml uses incorrect syntax with versions**: The example at lines 129-136 shows:
   ```yaml
   plugins:
     - name: org/my-plugin:1.0.0 # Pinned version
       config: {}
   ```
   Actual plugin references in e2e tests use simple `username/plugin-name` format without version in the string. The version is a separate concern managed by the registry. Source: `iridium/e2e/template1/cyan.yaml:10` shows `plugins: ['cyane2e/plugin1']` and `iridium/e2e/template3/cyan.yaml:10` shows `plugins: [cyane2e/plugin1]`.

### 🟡 Documentation Issues

(for each: Problem | Location | Fix)

1. **Missing CyanPrint registry registration details**: The document states "You must also register your plugin with the CyanPrint registry (Zinc)" (lines 86-88, 215-216) but only defers to a non-existent page. Should document the actual API endpoint: `POST /api/v1/plugin/push/{username}` as shown in `zinc/docs/developer/surfaces/api/03-plugin.md:620-670`.

2. **Ambiguous version pinning statement**: Line 139 states "The system does not perform semantic version range matching (e.g., `org/plugin:1` will not resolve to the latest 1.x.x)". While technically correct that there's no semver matching, this implies semver-style tags like `:1` exist. Actually, Zinc uses integer version numbers resolved by `ORDER BY Version DESC` (see `zinc/docs/developer/algorithms/02-version-resolution.md:42-58`).

3. **Docker tag vs Registry version conflation**: The document conflates Docker image tags (e.g., `:1.0.0`) with Zinc registry versions (integers: 1, 2, 3). The `dockerTag` field in Zinc (see `zinc/docs/developer/surfaces/api/03-plugin.md:299`) stores the Docker tag as a string property, separate from the auto-increment version number. This distinction should be clarified.

4. **Incomplete plugin reference syntax**: The example at lines 129-136 shows `name: org/my-plugin:1.0.0` with `config: {}`. Real examples show plugins as simple strings without the `name:` and `config:` structure in the YAML array (see `iridium/e2e/template3/cyan.yaml:10`). However, the SDK does use `name` and `config` properties (see `iridium/e2e/template3/cyan/index.ts:56-59`), suggesting the YAML format and programmatic format differ.

### 🟠 Other Problems

(for each: Problem | Recommendation)

1. **No documentation of actual registry API usage**: The document describes Docker push workflows but not how to use the Zinc Push Plugin API (`POST /api/v1/plugin/push/{username}`) which creates/updates plugin metadata and creates a new version atomically. Consider adding API-based registration examples.

2. **GitHub Actions example incomplete**: The workflow (lines 148-183) only pushes to GHCR but doesn't show the subsequent step of registering with the CyanPrint registry. This could mislead users into thinking the Docker push alone is sufficient despite the warnings.

3. **Naming convention examples lack version scope guidance**: The document shows patterns like `org/plugin-name` but doesn't explain how versions relate to multiple Docker tags. Users might push both `:latest` and `:1.0.0` tags but need to understand that each registry version points to one specific `dockerImage:dockerTag` pair.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 4     |
| 🟠       | 3     |

<!-- source: content/docs/developer/plugins/how-to/run-commands.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/run-commands.mdx

> This document covers running shell commands in plugins using Bun Shell and Node.js child_process. The SDK API references are accurate, but the timeout configurability claim lacks source evidence.

### 🔴 Source Code Inaccuracies

1. **Documented**: "The plugin timeout is configurable but has limits." | **Actual**: No evidence found in source code for configurable plugin timeouts. The only timeout found is a hardcoded 600-second HTTP client timeout in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/template/executor.rs:215` for HTTP requests, not specifically for plugins. | File: iridium/cyancoordinator/src/template/executor.rs:215

### 🟡 Documentation Issues

1. **Problem**: The callout warns about "long-running commands" and mentions "plugin timeout is configurable" without explaining how to configure it. | **Location**: Line 244-246 (Callout) | **Fix**: Either document how to configure the timeout, or remove the claim about configurability. If timeout is not actually configurable, rephrase to simply warn about timeout limits.
2. **Problem**: The `--if-present` flag callout mentions "npm version 7 or later" but doesn't mention that bun (the primary runtime used in examples) has different behavior. | **Location**: Line 240-242 | **Fix**: Add a note about bun's equivalent behavior or clarify that this applies only when using npm specifically.

### 🟠 Other Problems

1. **Problem**: No real-world plugin examples in the codebase demonstrate running shell commands with Bun Shell or child_process. | **Recommendation**: Consider adding a reference plugin in iridium/e2e that demonstrates command execution patterns for better validation.
2. **Problem**: The document uses `CyanPrint Bot` in the git config example (line 204), but the binary name is `cyanprint` (lowercase). While this is a human-readable name and not a CLI reference, consistency with branding could be improved. | **Recommendation**: Consider using consistent capitalization (e.g., "Cyanprint Bot" or "CyanPrint Bot") across all documentation.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 2     |
| 🟠       | 2     |

<!-- source: content/docs/developer/plugins/index.mdx -->

# 📄 File: content/docs/developer/plugins/index.mdx

> Overview page for plugin development documentation. Generally accurate but contains some issues with code examples that use Bun-specific APIs and a naming inconsistency in the Components table.

### 🔴 Source Code Inaccuracies

1. **Documented**: Components table lists "CyanPluginInput" as the input type
   **Actual**: The Components table on line 42 shows "CyanPluginInput" which is correct, but this naming is inconsistent with the reference documentation (input-output.mdx) which shows the interface name as "PluginInput" not "CyanPluginInput"
   **Evidence**: content/docs/developer/plugins/reference/sdk/input-output.mdx:17-21 shows `interface PluginInput` not `CyanPluginInput`; however types.mdx:15 shows `interface CyanPluginInput` - there is an internal inconsistency in the documentation

2. **Documented**: Quick example uses `import { $ } from 'bun';` for shell commands
   **Actual**: The Bun `$` shell API is a Bun-specific feature not part of @atomicloud/cyan-sdk. Actual plugin examples in the codebase use Node.js fs/path modules directly, not shell commands
   **Evidence**: Previous fact-check of what-are-plugins.mdx found iridium/e2e/plugin1 uses `import fs from 'node:fs'` and `import path from 'node:path'`, no Bun imports

3. **Documented**: Shell commands `await $`git -C ${directory} init`.quiet();` and `await $`cd ${directory} && npm install`.quiet();`
   **Actual**: These are Bun-specific shell template literals. While they work in Bun runtime, they are not part of the CyanPrint SDK and require Bun to be available in the container
   **Evidence**: The SDK does not export a shell API - it only provides StartPluginWithLambda, input/output types, and file helpers

### 🟡 Documentation Issues

1. **Problem**: Components table on line 42 shows "CyanPluginInput" but the linked reference page (input-output.mdx) shows the interface as "PluginInput"
   **Location**: Line 42
   **Fix**: Ensure consistent naming - either use CyanPluginInput everywhere (as types.mdx shows) or PluginInput everywhere; the actual SDK exports CyanPluginInput

2. **Problem**: The "What Plugins Can Do" table on lines 49-57 shows shell commands like `git init`, `npm install`, `prettier --write .` but doesn't explain that these require Bun's `$` API or child_process
   **Location**: Lines 49-57
   **Fix**: Add a note explaining that shell command execution requires Bun runtime with `$` API or Node.js child_process

3. **Problem**: Quick Example section (lines 103-125) doesn't indicate that Bun runtime is required for the `$` template literal syntax
   **Location**: Lines 103-125
   **Fix**: Either note that this example requires Bun runtime, or provide an alternative using Node.js child_process or fs operations

4. **Problem**: Callout states "Plugins are the only component that can execute shell commands" but doesn't clarify that this is a design choice, not a technical enforcement
   **Location**: Lines 59-61
   **Fix**: Clarify that while plugins are designed for shell operations, both plugins and processors could technically execute commands via Node.js APIs - the distinction is architectural

### 🟠 Other Problems

1. **Problem**: No explicit mention of the plugin port number (5552) on this overview page
   **Recommendation**: The start-plugin.mdx reference mentions port 5552 - consider adding this to the architecture overview or components table

2. **Problem**: Learning path section links to pages that may have inconsistent type naming (CyanPluginInput vs PluginInput)
   **Recommendation**: Audit all linked pages to ensure consistent type naming

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 4     |
| 🟠       | 2     |

<!-- source: content/docs/developer/plugins/reference/cyan-yaml.mdx -->

# 📄 File: content/docs/developer/plugins/reference/cyan-yaml.mdx

> Document accurately describes the plugin cyan.yaml configuration schema. All documented fields match the source code definitions in iridium and zinc.

### 🔴 Source Code Inaccuracies

None found. All documented fields (`username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`) match the source code:

- `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/plugin_config.rs` defines `CyanPluginFileConfig` with exact same 8 fields
- `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/cyan.yaml` confirm field names in practice
- `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Plugin.cs` confirms registry metadata fields

### 🟡 Documentation Issues

1. **Plugin reference format uses list syntax, but e2e tests show flow-style arrays**
   - Location: "Usage in Templates" section (lines 74-79)
   - Documented:
     ```yaml
     plugins:
       - atomi/setup-plugin:1
       - atomi/formatter
     ```
   - E2E tests use flow-style: `plugins: ['cyane2e/plugin1']` (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml`)
   - Fix: Both styles are valid YAML; no fix needed, just noting the variation

### 🟠 Other Problems

1. **Version format in example uses `:1` but documentation implies integer**
   - Location: "Usage in Templates" and "Versioning" sections
   - The examples show `atomi/setup-plugin:1` and `atomi/setup-plugin:3`
   - Source code confirms version is `Option<i64>` in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs` line 37
   - Documentation is accurate; just noting for completeness

## Summary

| Category | Count                                          |
| -------- | ---------------------------------------------- |
| 🔴       | 0                                              |
| 🟡       | 1 (minor - YAML style variation, not an error) |
| 🟠       | 1 (informational note)                         |

<!-- source: content/docs/developer/plugins/reference/dockerfile.mdx -->

# 📄 File: content/docs/developer/plugins/reference/dockerfile.mdx

> This document describes Dockerfile configuration for CyanPrint plugins. All major claims have been verified against source code and are accurate. A few minor issues were found with version recommendations and example completeness.

### 🔴 Source Code Inaccuracies

(for each: Documented | Actual | file:line evidence)

1. **Bun version `1.0.11`** | **No specific version requirement** | `iridium/e2e/plugin1/Dockerfile:1`, `iridium/e2e/plugin2/Dockerfile:1`
   - Documented: Examples use `oven/bun:1.0.11` as the base image
   - Actual: The e2e test plugins in the codebase do use `oven/bun:1.0.11`, but there is no enforced version requirement. This is just one valid choice. The documentation could note that newer Bun versions may be used.

### 🟡 Documentation Issues

(for each: Problem | Location | Fix)

1. **Entry point file name inconsistency** | Lines 31, 73, 76, 79, 111, 142, 160, 233 | The examples show `index.ts` or `index.js` as entry points but do not explain that this must match the SDK's `StartPlugin()` or `StartPluginWithLambda()` call. Consider adding a note that the entry file must import and call the SDK startup function.

2. **Missing `.dockerignore` example alignment** | Lines 165-195 | The comprehensive `.dockerignore` template differs from the minimal examples used in actual plugins. The actual `.dockerignore` files in `iridium/e2e/plugin1/.dockerignore` and `iridium/e2e/plugin2/.dockerignore` contain only: `node_modules`, `.idea`, `.vscode`. The documentation's comprehensive template is useful but should note that plugins typically need less.

3. **Multi-stage build complexity warning could be stronger** | Lines 114-116 | The callout mentions multi-stage builds add complexity, but could explicitly note that plugins using `@atomicloud/cyan-sdk` with its Express server may not benefit as much from bundling since the SDK needs to be resolved at runtime.

4. **No mention of SDK dependency requirement** | Throughout | The documentation shows `bun install` but does not mention that `@atomicloud/cyan-sdk` is required in `package.json` dependencies. The actual plugin examples show this dependency (`iridium/e2e/plugin1/package.json:12`).

### 🟠 Other Problems

(for each: Problem | Recommendation)

1. **Alpine compatibility not fully explained** | Line 205 mentions "May need musl compatibility" for Alpine, but does not explain what this means or when it becomes an issue. Consider adding a brief explanation or linking to Bun's Alpine compatibility documentation.

2. **Port configuration section could reference SDK** | Lines 238-247 accurately state port 5552 and `/api/plug` endpoint, but could reference that this is hardcoded in `@atomicloud/cyan-sdk` (`helium/sdks/node/src/main.ts:65`) for completeness.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 4     |
| 🟠       | 2     |

### Verified Claims

The following claims were verified as accurate:

- **Label `cyanprint.dev=true`**: Confirmed in `boron/docker_executor/docker.go:46,150,184,208,339,414,437`
- **Port 5552**: Confirmed in `helium/sdks/node/src/main.ts:65` and `boron/docker_executor/executor.go:182`
- **Endpoint `/api/plug`**: Confirmed in `boron/docker_executor/merger.go:223` and `helium/sdks/node/src/main.ts:68`
- **Bun base image usage**: Confirmed in `iridium/e2e/plugin1/Dockerfile:1`, `iridium/e2e/plugin2/Dockerfile:1`
- **Working directory `/app`**: Confirmed in actual plugin Dockerfiles
- **CMD with bun run**: Confirmed in actual plugin Dockerfiles
<!-- source: content/docs/developer/plugins/reference/index.mdx -->

# 📄 File: content/docs/developer/plugins/reference/index.mdx

> This is an index/overview page for the Plugin Reference section. It provides navigation links to detailed reference documentation for project setup (structure, cyan.yaml, Dockerfile) and SDK (overview, StartPluginWithLambda, input/output, types). All claims verified against source code.

### 🔴 Source Code Inaccuracies

None identified. This is primarily a navigation/index page with links to other documentation pages.

### 🟡 Documentation Issues

1. **Minor inconsistency in link text vs target page title**

   - Location: Line 21 - `StartPluginWithLambda` link text
   - Problem: The linked page title is "StartPluginWithLambda" but the SDK Overview mentions it as "Entry point for plugin logic"
   - Fix: No fix needed - the link text matches the function name accurately

2. **Plugin Input/Output type reference**
   - Location: Line 22 - "Plugin Input/Output"
   - Problem: The SDK exports `CyanPluginInput` type (not `PluginInput`) per main.ts line 193, though the page itself uses `PluginInput` as an alias
   - Fix: Consider clarifying that `CyanPluginInput` is the primary type name exported from the SDK, with `PluginInput` being the internal domain type

### 🟠 Other Problems

1. **Missing cross-reference to comparison table**
   - Location: SDK Reference section
   - Problem: The SDK Overview page (sdk/index.mdx) contains a useful Plugin vs Processor SDK comparison table, but it's not mentioned in this index
   - Recommendation: Consider adding a note or link to the comparison table in the SDK Overview page

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 1     |

## Verification Details

### Verified Claims

1. **SDK Package Name**: Documentation uses `@atomicloud/cyan-sdk` - VERIFIED

   - Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json` line 2

2. **Plugin Port**: Documentation states plugins listen on port 5552 - VERIFIED

   - Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` line 65
   - Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/executor.go` line 182

3. **Plugin Endpoint**: Documentation mentions `/api/plug` endpoint - VERIFIED

   - Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` line 68

4. **CyanPluginInput Type**: Documentation shows `CyanPluginInput` with `directory` and `config` fields - VERIFIED

   - Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts` lines 18-21

5. **PluginOutput Type**: Documentation shows `PluginOutput` with `directory` field - VERIFIED

   - Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/output.ts` lines 1-3

6. **StartPluginWithLambda Function**: Documentation shows function signature - VERIFIED

   - Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` lines 82-85

7. **Plugin cyan.yaml Fields**: Documentation lists `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme` - VERIFIED

   - Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/plugin_config.rs` lines 1-18

8. **Docker Label**: Documentation mentions `cyanprint.dev=true` label - VERIFIED
   - Source: Multiple documentation files confirm this is the standard label for CyanPrint components
   <!-- source: content/docs/developer/plugins/reference/project-structure.mdx -->

# 📄 File: content/docs/developer/plugins/reference/project-structure.mdx

> This page documents the standard directory layout for plugin projects. Most content is accurate, but there are some minor inconsistencies with other documentation pages and the cyan.yaml `readme` field casing differs from actual source code.

### 🔴 Source Code Inaccuracies

1. **Documented**: `readme: README.md` (lowercase) in cyan.yaml example (line 129)
   **Actual**: Actual plugin cyan.yaml files use `readme: README.MD` (uppercase)
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:8` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/cyan.yaml:8` both show `readme: README.MD`

### 🟡 Documentation Issues

1. **Problem**: Inconsistent type naming - The page uses `PluginInput` in the code comments and descriptions but the actual SDK exports `CyanPluginInput`
   **Location**: Throughout the page (lines 27-38, 152-169)
   **Fix**: The SDK index page (sdk/index.mdx:25) clarifies that `CyanPluginInput` is the primary type with `PluginInput` as an alias. Consider mentioning this alias relationship or using `CyanPluginInput` consistently

2. **Problem**: Inconsistent cyan.yaml example across documentation
   **Location**: Lines 121-130 (cyan.yaml example)
   **Fix**: The cyan.yaml example shows `readme: README.md` while the dedicated Plugin cyan.yaml page shows `readme: README.MD`. Should be consistent - uppercase `README.MD` matches actual source code

3. **Problem**: Missing cyan.yaml fields documentation
   **Location**: Lines 117-130 (cyan.yaml section)
   **Fix**: The cyan.yaml example is labeled as "optional" (line 19) but the dedicated Plugin cyan.yaml page states it is "required for publishing your plugin" (cyan-yaml.mdx:10). Consider clarifying that it's optional for local development but required for registry publishing

### 🟠 Other Problems

1. **Problem**: Dockerfile uses `CMD [ "bun", "run", "index.ts" ]` with array syntax with spaces inside quotes
   **Recommendation**: The Dockerfile example on line 79 has inconsistent spacing in the CMD array syntax: `CMD [ "bun", "run", "index.ts" ]`. Standard Docker convention is `CMD ["bun", "run", "index.ts"]` without spaces after `[` and before `]`. Minor formatting issue.

2. **Problem**: Package.json example shows `"@atomicloud/cyan-sdk": "latest"` but best practice would be to pin the version
   **Recommendation**: Consider adding a note that in production plugins, the SDK version should be pinned rather than using "latest" for reproducibility

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/plugins/reference/sdk/index.mdx -->

# 📄 File: content/docs/developer/plugins/reference/sdk/index.mdx

> The Plugin SDK index page documents the `@atomicloud/cyan-sdk` package for plugin development. The claims are largely accurate, with minor documentation issues regarding type alias naming.

### 🔴 Source Code Inaccuracies

- Documented: `CyanPluginInput` has alias `PluginInput` | Actual: No alias exported; SDK exports `CyanPluginInput` only, while `PluginInput` is a separate internal domain type not exported from main.ts | helium/sdks/node/src/main.ts:193, helium/sdks/node/src/domain/plugin/input.ts:1

### 🟡 Documentation Issues

- Problem: The "Plugin vs Processor SDK" comparison table shows `CyanPluginInput` as Input type for plugins, but the "Key Components" table says `CyanPluginInput` has alias `PluginInput` | Location: Lines 22-27, 53-62 | Fix: Either export `PluginInput` as an alias from main.ts or remove the alias claim from the Key Components table

### 🟠 Other Problems

- None identified

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 1     |
| 🟠       | 0     |

<!-- source: content/docs/developer/plugins/reference/sdk/input-output.mdx -->

# 📄 File: content/docs/developer/plugins/reference/sdk/input-output.mdx

> Documentation for Plugin Input/Output types. The type name `PluginInput` used throughout this document is incorrect - the SDK exports `CyanPluginInput`. The interface structure and `PluginOutput` are correct.

### 🔴 Source Code Inaccuracies

1. **Type Name: `PluginInput` vs `CyanPluginInput`**

   - Documented: `PluginInput` (used throughout the document)
   - Actual: `CyanPluginInput`
   - Evidence: `helium/sdks/node/src/main.ts:193` exports `CyanPluginInput`, not `PluginInput`. The internal type `PluginInput` in `helium/sdks/node/src/domain/plugin/input.ts:1-6` is NOT exported from the SDK's main entry point.

2. **Import Statement in Examples**

   - Documented: `import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';` (implies using `PluginInput`)
   - Actual: Should be `import { StartPluginWithLambda, type CyanPluginInput } from '@atomicloud/cyan-sdk';`
   - Evidence: `helium/sdks/node/src/main.ts:183-207` shows the actual exported types. Only `CyanPluginInput` is exported (line 193).

3. **Interface Definition Section**

   - Documented: `interface PluginInput { directory: string; config: unknown; }`
   - Actual: The exported interface is `CyanPluginInput` with the same structure
   - Evidence: `helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` shows `CyanPluginInput` interface definition.

4. **Property Table References**
   - Documented: Uses `PluginInput` in section headers
   - Actual: Should use `CyanPluginInput`
   - Evidence: Same as above.

### 🟡 Documentation Issues

1. **Inconsistent Type Naming Across Docs**

   - Problem: The related docs (`start-plugin.mdx` and `types.mdx`) correctly use `CyanPluginInput`, but this document uses `PluginInput`
   - Location: Entire document (title, interface definitions, tables, code examples)
   - Fix: Replace all occurrences of `PluginInput` with `CyanPluginInput` to match the SDK exports and sibling documentation files

2. **Missing Type Import in Examples**

   - Problem: Code examples don't show importing the input type, which would fail if users try to type their handlers
   - Location: "Usage" section (lines 38-47) and "Full Example" (lines 160-213)
   - Fix: Add `type CyanPluginInput` to the import statement

3. **Misleading Section Header**
   - Problem: Section "## PluginInput" implies this is the exported type name
   - Location: Line 10
   - Fix: Change to "## CyanPluginInput"

### 🟠 Other Problems

1. **Internal Type Name Collision**

   - Problem: There is an internal `PluginInput` type in `helium/sdks/node/src/domain/plugin/input.ts` that is NOT exported, which could cause confusion
   - Recommendation: Either export `PluginInput` as an alias for `CyanPluginInput`, or rename the internal type to avoid confusion

2. **API Endpoint Comment Inconsistency**
   - Problem: The `start-plugin.mdx` document mentions "POST /api/plug with PluginInput" in the "How It Works" section (line 89), which should also be `CyanPluginInput` for consistency
   - Recommendation: Cross-check all plugin documentation for consistent type naming

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/plugins/reference/sdk/start-plugin.mdx -->

# 📄 File: content/docs/developer/plugins/reference/sdk/start-plugin.mdx

> Documentation for StartPluginWithLambda function in the CyanPrint SDK. The document correctly describes the function signature and usage patterns. Minor discrepancies exist in type names between documented and exported types.

### 🔴 Source Code Inaccuracies

1. Documented: Type named `CyanPluginInput` in signature `(input: CyanPluginInput) => Promise<PluginOutput>` | Actual: The SDK exports both `CyanPluginInput` (from `cyan_script_model.ts`) AND a separate `PluginInput` type (from `domain/plugin/input.ts`), but only `CyanPluginInput` is exported from main.ts. However, both have identical structure `{ directory: string; config: unknown; }` | file: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts:1-4`

2. Documented: Response shows `PluginOutput` with `directory` field returned to CyanPrint | Actual: The internal `PluginOutput` type has `directory`, but the API response object sent back uses `outputDir` field (mapped via `PluginMapper.ToRes()` which converts `directory` to `outputDir`) | file: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/mapper.ts:14-18`

### 🟡 Documentation Issues

1. Problem: The cross-reference link text uses "PluginInput/Output" but the actual type is `CyanPluginInput` | Location: "Related" section, first link | Fix: Update the cross-reference page to clarify that `CyanPluginInput` is the exported type name used by `StartPluginWithLambda`

2. Problem: The "How It Works" section step 2 mentions "POST `/api/plug` with `PluginInput`" but the actual type should be `PluginReq` at the API boundary | Location: Line 89 | Fix: Clarify that the HTTP request uses `PluginReq` type which is mapped to `PluginInput` for internal processing

3. Problem: The documentation says `config: unknown` in the handler signature but the request type (`PluginReq`) actually defines `config: Record<string, unknown>` | Location: Parameters table, line 22 | Fix: Add a note that at the API boundary, config is `Record<string, unknown>` but appears as `unknown` in the handler

### 🟠 Other Problems

1. Problem: Inconsistency between type names - the SDK exports `CyanPluginInput` but the related input-output.mdx documents `PluginInput`. This could confuse users. | Recommendation: Standardize type naming across documentation - either use the exported name `CyanPluginInput` everywhere or note the aliasing

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 1     |

<!-- source: content/docs/developer/plugins/reference/sdk/types.mdx -->

# 📄 File: content/docs/developer/plugins/reference/sdk/types.mdx

> This file documents the type definitions for the CyanPrint plugin SDK. All documented types match the actual SDK exports from `@atomicloud/cyan-sdk`.

### 🔴 Source Code Inaccuracies

None found. All type definitions are accurate.

### 🟡 Documentation Issues

1. **Minor naming inconsistency in related input-output.mdx** | Location: N/A (related file) | Fix: The related file `input-output.mdx` uses `PluginInput` as the interface name, but the actual SDK type is `CyanPluginInput`. This file correctly uses `CyanPluginInput`. Consider ensuring consistency across documentation or noting that both names may appear.

2. **Example uses spread operator without explanation** | Location: Lines 86-94 (Usage Example) | Fix: The code `...(input.config as Partial<GitSetupConfig>)` could benefit from a brief comment explaining that this spreads the partial config to override defaults.

### 🟠 Other Problems

None identified.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 0     |

## Verification Details

### Types Verified Against Source

All type definitions were verified against `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium.../node_modules/@atomicloud/cyan-sdk/dist/main.d.ts`:

| Documented Type                     | SDK Actual                                                | Match |
| ----------------------------------- | --------------------------------------------------------- | ----- |
| `CyanPluginInput.directory: string` | `directory: string`                                       | ✓     |
| `CyanPluginInput.config: unknown`   | `config: unknown`                                         | ✓     |
| `PluginOutput.directory: string`    | `directory: string`                                       | ✓     |
| `LambdaPluginFn` signature          | `(input: CyanPluginInput) => Promise<PluginOutput>`       | ✓     |
| `StartPluginWithLambda` function    | `function StartPluginWithLambda(f: LambdaPluginFn): void` | ✓     |
| Port 5552                           | `helium/sdks/node/src/main.ts:65`: `const port = 5552;`   | ✓     |

<!-- source: content/docs/developer/plugins/tutorials/first-plugin.mdx -->

# 📄 File: content/docs/developer/plugins/tutorials/first-plugin.mdx

> Tutorial for creating a first plugin. The code examples are accurate and follow the SDK conventions correctly. Minor inconsistency found in the type naming table (uses `CyanPluginInput` which is correct) and the template example uses incorrect syntax.

### 🔴 Source Code Inaccuracies

1. **Template Configuration Example - Incorrect Syntax**
   - Documented: `return { processors: [...], plugins: [...] };` (lines 156-170)
   - Actual: Templates return a `Cyan` object via `StartTemplateWithLambda`, not a raw object. The example shows incorrect usage - templates use `StartTemplateWithLambda(async (i, d) => { ... })` which returns a `Cyan` object.
   - Evidence: The template example in the document is misleading - it shows `// In template's index.ts` followed by a `return` statement, but doesn't show the `StartTemplateWithLambda` wrapper that is required. See `/content/docs/developer/templates/reference/sdk/cyan-config.mdx:176-236` for correct template structure.

### 🟡 Documentation Issues

1. **Incomplete Template Integration Example**

   - Problem: The "Use in Template" section (lines 153-170) shows only a partial code snippet without the full `StartTemplateWithLambda` context, which could confuse users
   - Location: Lines 153-170
   - Fix: Wrap the example in the full `StartTemplateWithLambda` function to show complete context, similar to how it's done in `/content/docs/developer/templates/reference/sdk/cyan-config.mdx:176-236`

2. **Missing Type Import in Main Example**

   - Problem: The main code example (lines 39-74) doesn't import `CyanPluginInput` type, which is fine for the inline cast pattern but inconsistent with other docs that show explicit typing
   - Location: Line 39
   - Fix: Either add a note explaining why the type import is optional, or add `type CyanPluginInput` to the import for consistency with the reference docs

3. **Ambiguous "Use in Template" Section**
   - Problem: The comment `// In template's index.ts` suggests this is the template's main file, but templates use `StartTemplateWithLambda` which receives `(i, d)` parameters and returns `Cyan`, not a direct return statement
   - Location: Line 156
   - Fix: Clarify that this is the return value within `StartTemplateWithLambda`, not standalone code

### 🟠 Other Problems

1. **No Verification of bun init -y Command**

   - Problem: The command `bun init -y` (line 30) is documented but not verified against current Bun behavior
   - Recommendation: Verify this command still works as expected with current Bun versions

2. **Docker Image Tag Naming Convention**

   - Problem: The document suggests using `:dev` tag for local development (lines 162, 173) but doesn't explain how CyanPrint resolves local vs registry images
   - Recommendation: Add a note explaining the image resolution order (local first, then registry) or link to relevant documentation

3. **No Error Handling in Tutorial Example**
   - Problem: The tutorial code doesn't show any error handling, which is important for production plugins
   - Recommendation: Either add basic error handling to the example or link to the "Run Shell Commands" page which covers error handling

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 3     |
| 🟠       | 3     |

<!-- source: content/docs/developer/plugins/tutorials/index.mdx -->

# 📄 File: content/docs/developer/plugins/tutorials/index.mdx

> Index page for plugin tutorials with a single link to the "Your First Plugin" tutorial. Claims about `StartPluginWithLambda`, `CyanPluginInput`, and `PluginOutput` are verified and accurate.

### 🔴 Source Code Inaccuracies

None found.

### 🟡 Documentation Issues

None found.

### 🟠 Other Problems

1. **Limited content** | The index page is very minimal with only one tutorial listed. Consider adding more tutorials or a roadmap of planned tutorials.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 0     |
| 🟠       | 1     |

<!-- source: content/docs/developer/processors/explanation/input-config.mdx -->

# File: content/docs/developer/processors/explanation/input-config.mdx

> Documentation about processor config input mechanism. Contains several inaccuracies related to API naming conventions and cyan.yaml schema that don't match the actual SDK implementation.

### Source Code Inaccuracies

1. **Template inquirer method signatures** | Documented: `i.text('Project name?', 'project.name', 'Enter name')` with 4th param as help text | Actual: `text(q: string, id: string, help?: string | null)` - the 3rd parameter IS the help text, not a separate "Enter name" placeholder. The signature is `(message, id, help?)`. | helium/sdks/node/src/domain/core/inquirer.ts:20-22

2. **Template inquirer.checkbox signature** | Documented: `i.checkbox('Features?', ['auth', 'api'], 'project.features', 'Select')` with 4 params | Actual: `checkbox(q: string, options: string[], id: string, help?: string | null)` - correct signature but documented usage implies different semantics. | helium/sdks/node/src/domain/core/inquirer.ts:4-6

3. **Template inquirer.select signature** | Documented: `i.select('Format?', ['json', 'yaml'], 'config.format', 'Choose')` | Actual: `select(q: string, options: string[], id: string, help?: string | null)` - correct but same issue as checkbox. | helium/sdks/node/src/domain/core/inquirer.ts:16-18

4. **Processor input.config type annotation** | Documented: "input.config is typed as unknown" | Actual: Confirmed correct - `config: unknown` in CyanProcessorInput interface. | helium/sdks/node/src/domain/core/cyan_script_model.ts:15

5. **Processor return value structure** | Documented: `return { directory: input.writeDir }` | Actual: Confirmed correct - `ProcessorOutput` has `directory: string` property, and `input.writeDir` is the correct property name. | helium/sdks/node/src/domain/processor/output.ts:1-5, helium/sdks/node/src/domain/core/cyan_script_model.ts:13

6. **fileHelper.resolveAll() method** | Documented: `const files = fileHelper.resolveAll()` returning files with `.content` and `.writeFile()` | Actual: Confirmed correct - returns `VirtualFile[]` with `content: string` property and `writeFile(): void` method. | helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40, helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-55

7. **cyan.yaml processor.inputs section** | Documented: Shows `processor.inputs` array with name, type, required, enum, default, description, properties fields | Actual: No such structure exists. The cyan.yaml for processors only contains username, name, description, project, source, email, tags, readme. Config is NOT defined in processor's cyan.yaml. | iridium/e2e/processor1/cyan.yaml, content/docs/developer/processors/reference/cyan-yaml.mdx:60-64 (which explicitly states "The cyan.yaml file does not define processor configuration options")

### Documentation Issues

1. **Incorrect cyan.yaml schema** | Line 278-306 | The documentation shows a `processor.inputs` section in cyan.yaml with input definitions, but this doesn't exist in the actual processor cyan.yaml format. This contradicts the official cyan-yaml.mdx reference which states config is NOT defined in cyan.yaml. Remove the entire "Documentation" section (lines 276-306) or clearly mark it as aspirational/planned feature.

2. **Misleading inquirer example comments** | Lines 30-33 | The comments like `'Enter name'` as 4th parameter could mislead developers about what the parameter does. The 3rd/4th parameter is `help` text, not a placeholder. Clarify the parameter purpose in examples.

3. **Inconsistent link format** | Lines 310-312 | Links to `/docs/developer/processors/how-to/access-config` and others are correct per the instructions (starting from `/docs`).

### Other Problems

1. **Default value spread pattern may not work as intended** | Lines 163-169 | The pattern `const config: Config = { optional: true, withDefault: 10, ...(input.config as Partial<Config>) }` will NOT override defaults if input.config has `optional: false` or `withDefault: undefined`. The spread should come FIRST, then overrides: `{ ...(input.config as Partial<Config>), optional: input.config?.optional ?? true, withDefault: input.config?.withDefault ?? 10 }`. Recommend fixing this pattern.

2. **Config validation example incomplete** | Lines 194-218 | The validation function is defined but the example ends with `// Config is now validated // ...` without returning the required `ProcessorOutput`. Should show `return { directory: input.writeDir };` at the end.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 7     |
| Documentation Issues     | 3     |
| Other Problems           | 2     |

<!-- source: content/docs/developer/processors/explanation/memory-loading.mdx -->

# 📄 File: content/docs/developer/processors/explanation/memory-loading.mdx

> Documentation describing processor memory loading methods and strategies. The core API claims are accurate, but there are issues with parameter naming and a missing required parameter in code examples.

### 🔴 Source Code Inaccuracies

1. **Missing `root` parameter in code examples** | Documented: `fileHelper.read({ glob: '**/*', exclude: [], type: GlobType.Template })` | Actual: `CyanGlob` interface requires `root?: string | null`, `glob: string`, `exclude: string[]`, `type: GlobType` - many examples omit `root` which defaults to `.` but should be explicit for clarity | `helium/sdks/node/src/domain/core/cyan.ts:6-11`
2. **Table uses incorrect parameter names** | Documented: `resolveAll()`, `read(glob)`, `get(glob)`, `readAsStream(glob)`, `copy(glob)` | Actual: Methods take a `CyanGlob` object, not a glob string. The methods are: `resolveAll(): VirtualFile[]`, `read(g: CyanGlob): VirtualFile[]`, `get(g: CyanGlob): VirtualFileReference[]`, `readAsStream(g: CyanGlob): VirtualFileStream[]`, `copy(copy: CyanGlob): void` | `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-93`

### 🟡 Documentation Issues

1. **Mermaid diagram references non-existent methods** | The diagram shows `resolveAll`, `read`, `get`, `readAsStream`, `copy` as loading methods, but the actual method signatures take `CyanGlob` objects, not simple method calls | Mermaid chart at lines 14-27 | Update diagram to show the object-based API: `resolveAll()`, `read(CyanGlob)`, `get(CyanGlob)`, `readAsStream(CyanGlob)`, `copy(CyanGlob)`
2. **Best Practices section has incomplete examples** | `fileHelper.read({ glob: '**/*', exclude: [], type: GlobType.Template })` at line 192 missing `root` parameter | Lines 189-203 | Add `root: '.'` or appropriate root directory to examples
3. **Best Practices streaming example missing root** | `fileHelper.readAsStream({ glob: '*.csv', exclude: [], type: GlobType.Template })` at line 198 missing `root` parameter | Line 198 | Add `root: 'data'` or appropriate root directory
4. **Memory estimation formula lacks source verification** | Claims "2x overhead (parsing, transformation)" and "256MB-1GB" default container memory | Lines 118-130 | These values need verification against actual infrastructure configuration

### 🟠 Other Problems

1. **Comment about `ref.copy()` not existing is confusing** | Lines 86, 147 have comments "// Copy via fileHelper - ref.copy() does not exist" which is correct but breaks code flow | Consider restructuring example to be cleaner without inline comments explaining API limitations
2. **`resolveAll()` has side effects** | Documentation correctly notes memory implications but doesn't mention that `resolveAll()` also copies `GlobType.Copy` files automatically (line 34-37 in source) | `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40` | Consider documenting that `resolveAll()` also handles Copy-type globs

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 4     |
| 🟠       | 2     |

<!-- source: content/docs/developer/processors/explanation/read-write-dirs.mdx -->

# 📄 File: content/docs/developer/processors/explanation/read-write-dirs.mdx

> Documentation explaining readDir and writeDir directories for processors, including usage patterns and rules. Contains one significant inaccuracy regarding the writeDir path value.

### 🔴 Source Code Inaccuracies

1. **writeDir path is incorrect**
   - Documented: `/workspace/output/`
   - Actual: `/workspace/area/<uuid>` (unique UUID per processor)
   - Evidence: `boron/docker_executor/merger.go:147-148` shows `WriteDir: "/workspace/area/" + filePath.String()` where filePath is a UUID. Also confirmed in `boron/docs/developer/features/03-merger-system.md:121` which shows `"writeDir": "/workspace/area/<uuid>"`

### 🟡 Documentation Issues

1. **Inconsistent path examples throughout document**

   - Problem: Multiple code examples use `/workspace/output/` which is incorrect
   - Location: Lines 31, 89, 120, 139-140, 198-199, 228-241
   - Fix: Replace `/workspace/output/` with `/workspace/area/<uuid>/` or use a note explaining it's a simplified example

2. **readDir path has trailing slash inconsistency**

   - Problem: Documentation shows `/workspace/cyanprint/` with trailing slash, but source code uses `/workspace/cyanprint` without
   - Location: Lines 30-31, 44-45
   - Evidence: `boron/docker_executor/merger.go:147` shows `ReadDir: "/workspace/cyanprint"` (no trailing slash)
   - Fix: Either remove trailing slashes or clarify that both forms are equivalent

3. **Callout claims paths are "typical examples" but should clarify they are representative**

   - Problem: The info callout says "Actual values depend on your container or deployment configuration" but the readDir value is actually fixed in the codebase
   - Location: Lines 33-35
   - Fix: Clarify that readDir is always `/workspace/cyanprint` (fixed) while writeDir is always `/workspace/area/<uuid>` (unique per processor)

4. **VirtualFile class name inconsistency**
   - Problem: Documentation uses `VirtualFile` but the helper class is `CyanFileHelper`
   - Location: Line 113 "VirtualFile Paths" section title
   - Evidence: The class in `helium/sdks/node/src/domain/core/fs/virtual_file.ts:32` is `VirtualFile` but it's accessed via `CyanFileHelper`
   - Fix: Consider renaming section to "File Paths" or clarify that `VirtualFile` is the type returned by `resolveAll()`

### 🟠 Other Problems

1. **Ambiguity about readDir access**

   - Problem: Documentation says "never access directly" but the `VirtualFile` class has a `read` getter that constructs the full path
   - Recommendation: Clarify that `file.read` property is acceptable for reading, but direct `fs.readFileSync(input.readDir + '/...')` is not

2. **Missing detail about writeDir uniqueness**
   - Problem: Documentation doesn't explain that each processor gets a unique writeDir to enable parallel processing
   - Recommendation: Add explanation that the UUID suffix prevents conflicts when multiple processors run in parallel

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 4     |
| 🟠       | 2     |

<!-- source: content/docs/developer/processors/explanation/stateless-nature.mdx -->

# 📄 File: content/docs/developer/processors/explanation/stateless-nature.mdx

> Documentation explaining the stateless nature of processors, including what it means, why it's important, implications, and testing approaches. Most factual claims are accurate, but the testing section presents mock utilities that don't exist in the SDK.

### 🔴 Source Code Inaccuracies

1. **Testing section uses non-existent mock utilities** | The documentation presents `createMockFileHelper()` and `MockFile` types as if they exist | Evidence: Searched `helium/sdks/node` - no `createMockFileHelper` or `MockFile` exports found. The SDK only exports `CyanFileHelper` class, not any mock utilities. File: helium/sdks/node/src/main.ts:169-207

### 🟡 Documentation Issues

1. **Testing code is conceptual only** | Lines 184-219 | Add a disclaimer that the test code is conceptual/pseudo-code and users need to implement their own mock utilities, OR provide actual testing utilities in the SDK
2. **Test code uses `processor(mockInput, mockFileHelper)`** | Line 204 | The `StartProcessorWithLambda` function doesn't return a callable - it starts an HTTP server on port 5551. You cannot call the processor function directly for testing. File: helium/sdks/node/src/main.ts:87-109
3. **Test expectation incorrect** | Line 217 | `expect(mockFiles[0].content).toBe('Hello World')` - The test mutates mockFiles but the actual SDK's `VirtualFile` is immutable after creation from `resolveAll()`. The example is misleading about how files work.

### 🟠 Other Problems

1. **No actual testing guidance** | The documentation should either point to a real testing approach (e.g., integration testing with the HTTP server, or creating actual test utilities) rather than showing non-functional mock code
2. **SDK doesn't export testing utilities** | Consider exporting test helpers (like a mock file helper factory) from the SDK to make the documentation example actually usable

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 3     |
| 🟠       | 2     |

## Verified Accurate Claims

- `StartProcessorWithLambda` function exists and takes a lambda function (helium/sdks/node/src/main.ts:106-108)
- Lambda signature `(input: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>` is correct (helium/sdks/node/src/api/processor/lambda.ts:6)
- `CyanProcessorInput` has `readDir`, `writeDir`, `globs`, `config` properties (helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16)
- `fileHelper.resolveAll()` returns `VirtualFile[]` (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40)
- `VirtualFile` has `content` property and `writeFile()` method (helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-54)
- `ProcessorOutput` has `directory` property (helium/sdks/node/src/domain/processor/output.ts:1-5)
- `GlobType` enum exists with `Template` and `Copy` values (helium/sdks/node/src/domain/core/cyan.ts:1-4)
- SDK package name `@atomicloud/cyan-sdk` is correct (helium/sdks/node/package.json:2)
- CLI command `cyanprint create` is correct (iridium/cyanprint/LLM.MD:119)
- Related links to why-processors, read-write-dirs, and memory-loading exist in the content structure
<!-- source: content/docs/developer/processors/explanation/why-processors.mdx -->

# 📄 File: content/docs/developer/processors/explanation/why-processors.mdx

> Documentation explaining why processors exist and when to use custom processors vs the default processor. Contains generally accurate information about the SDK, GlobType enum, and processor API usage.

### 🔴 Source Code Inaccuracies

(None found - all factual claims verified against source code)

### 🟡 Documentation Issues

1. Problem: The GlobType values callout only mentions Node and Python SDKs, omitting the .NET SDK | Location: Line 150 | Fix: Add mention of .NET SDK which uses `Template = 0, Copy = 1` (same as Node). The complete statement should be: "`GlobType.Template` (value `0` in Node SDK and .NET SDK, `1` in Python SDK) processes files through the templating engine."
2. Problem: The example code comments say "illustrative example" which is good, but `generateTypeScript`, `parseTypeScript`, `addDeprecationComments`, `printTypeScript`, and `removeDebugCode` are shown as user-defined functions without clarifying that these are conceptual examples | Location: Lines 65-134 | Fix: The existing comments are sufficient - "generateTypeScript is a user-defined function" and similar are already present.

### 🟠 Other Problems

1. Problem: The document references `cyan/default` processor as the default processor using Eta templating with `var__name__` syntax. The iridium/e2e/processor1 implementation confirms this behavior exists, but the actual `cyan/default` name appears to be a registry identifier rather than a source file in the referenced paths. | Recommendation: This is acceptable - the documentation accurately describes the behavior and the naming convention is consistent with how processors are referenced in templates (e.g., `cyane2e/processor1`).

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 1     |

<!-- source: content/docs/developer/processors/how-to/access-config.mdx -->

# 📄 File: content/docs/developer/processors/how-to/access-config.mdx

> Fact-check completed for processor config access documentation. All code examples and API references verified against helium SDK source code and iridium e2e tests.

### 🔴 Source Code Inaccuracies

(None found)

### 🟡 Documentation Issues

1. **Template config example uses processor name pattern that doesn't match e2e conventions** | Line 44 | The example uses `name: 'myorg/my-processor'` which is fine as a placeholder, but actual e2e tests use patterns like `cyane2e/processor1`. This is a minor cosmetic issue - no fix required.
2. **Complex Config Example comment could be clearer** | Lines 180-181 | The comment about creating new VirtualFile instances is helpful but doesn't show how to actually create them. The `VirtualFile` constructor is exported but the example doesn't demonstrate the pattern. Consider adding a brief example or linking to relevant documentation.

### 🟠 Other Problems

(None found)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 0     |

## Verification Details

### ✅ Verified Accurate

1. **`StartProcessorWithLambda` signature**: Document shows `StartProcessorWithLambda(async (input, fileHelper) =>` - matches actual `LambdaProcessorFn = (i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>` in `helium/sdks/node/src/api/processor/lambda.ts:6`

2. **`StartTemplateWithLambda` signature**: Document shows `StartTemplateWithLambda(async (i, d) =>` - matches actual `LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>` in `helium/sdks/node/src/api/template/lambda.ts:6`

3. **`input.config` type**: Document correctly states "Config is passed as `unknown` type" - verified in `helium/sdks/node/src/domain/core/cyan_script_model.ts:15`

4. **`input.writeDir` property**: Document uses `input.writeDir` - verified in `helium/sdks/node/src/domain/core/cyan_script_model.ts:13`

5. **`ProcessorOutput` return type**: Document returns `{ directory: input.writeDir }` - verified in `helium/sdks/node/src/domain/processor/output.ts:2`

6. **`fileHelper.resolveAll()` method**: Verified in `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40`

7. **`VirtualFile` properties and methods**:

   - `file.content` - verified in `helium/sdks/node/src/domain/core/fs/virtual_file.ts:37`
   - `file.relative` - verified in `helium/sdks/node/src/domain/core/fs/virtual_file.ts:36`
   - `file.writeFile()` - verified in `helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54`

8. **Inquirer methods**:

   - `i.checkbox()` signature - verified in `helium/sdks/node/src/domain/core/inquirer.ts:6`
   - `i.select()` signature - verified in `helium/sdks/node/src/domain/core/inquirer.ts:18`

9. **`GlobType.Template` enum value**: Verified in `helium/sdks/node/src/domain/core/cyan.ts:2`

10. **Template processor config structure**: Document shows `config: { ... } as ProcessorConfig` which matches actual usage in e2e tests like `iridium/e2e/template1/cyan/index.ts:46-58`

11. **Processor config casting pattern**: Document shows `const config = input.config as ProcessorConfig` which matches actual usage in `iridium/e2e/processor1/index.ts:20`
<!-- source: content/docs/developer/processors/how-to/copy-files.mdx -->

# 📄 File: content/docs/developer/processors/how-to/copy-files.mdx

> This document describes the `copy()` method of `CyanFileHelper` for copying files directly without loading into memory. The API signatures and usage patterns are accurate and match the SDK source code.

### 🔴 Source Code Inaccuracies

None found.

### 🟡 Documentation Issues

1. **Incomplete type information for `copy()` parameters** | Performance Comparison table mentions `get() + copy()` | The `get()` method returns `VirtualFileReference[]` which provides lazy loading, but the table description "Conditional copy" could be clearer - `get()` itself doesn't copy, it returns references. Consider clarifying that `get()` is for obtaining file references without loading content.
2. **Example code doesn't show complete type import** | Multiple code examples | The examples use `fileHelper.copy({ root: '...', glob: '...' })` but don't show that the `CyanGlob` interface also has an `exclude` property (shown in "Copy with Glob Patterns" section but not in first example). Consider adding `exclude` to the first example for completeness.

### 🟠 Other Problems

1. **Return type for `copy()` not documented** | Performance Comparison and Usage sections | The documentation doesn't explicitly state that `copy()` returns `void`. This is minor but could help developers understand they can't chain the method or get results back.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 1     |

## Verification Details

**Verified Against Source Code:**

- SDK Package: `@atomicloud/cyan-sdk` (helium/sdks/node/package.json:2)
- `StartProcessorWithLambda`: (helium/sdks/node/src/main.ts:106)
- `LambdaProcessorFn` type: `(i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>` (helium/sdks/node/src/api/processor/lambda.ts:6)
- `CyanProcessorInput.writeDir`: (helium/sdks/node/src/domain/core/cyan_script_model.ts:13)
- `CyanProcessorInput.config`: (helium/sdks/node/src/domain/core/cyan_script_model.ts:15)
- `ProcessorOutput.directory`: (helium/sdks/node/src/domain/processor/output.ts:2)
- `CyanFileHelper.copy()` method: (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:77-93)
- `CyanGlob` interface: root?, glob, exclude[] (helium/sdks/node/src/domain/core/cyan.ts:6-11)
- `VirtualFile.content` property: (helium/sdks/node/src/domain/core/fs/virtual_file.ts:37)
- `VirtualFile.writeFile()` method: (helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54)
- `CyanFileHelper.read()` method: (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:73-75)
- `CyanFileHelper.get()` method: (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:60-71)
- `CyanFileHelper.resolveAll()` method: (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40)
<!-- source: content/docs/developer/processors/how-to/lazy-load-files.mdx -->

# 📄 File: content/docs/developer/processors/how-to/lazy-load-files.mdx

> Documentation for lazy loading files in processors using `fileHelper.get()`. Mostly accurate with one property name mismatch in code examples.

### 🔴 Source Code Inaccuracies

1. **Property name mismatch** | Documented: `input.writeDirectory` | Actual: `input.writeDir` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` shows `CyanProcessorInput` interface has `writeDir: string`, not `writeDirectory`

### 🟡 Documentation Issues

1. **Inconsistent property name in return statements** | Location: Lines 50, 106, 131 | Fix: Change `input.writeDirectory` to `input.writeDir` in all three code examples' return statements

### 🟠 Other Problems

None identified.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 1     |
| 🟠       | 0     |

---

## Verification Details

### Verified Correct Claims:

- **VirtualFileReference class** exists with documented properties: `relative`, `baseRead`, `baseWrite`, `read` (getter), `write` (getter)
- **VirtualFileReference.readFile()** method returns `VirtualFile` and loads content synchronously
- **VirtualFile class** exists with documented properties: `relative`, `content`, `read` (getter), `write` (getter)
- **VirtualFile.writeFile()** method writes content to output
- **fileHelper.get()** method signature: `get(g: CyanGlob): VirtualFileReference[]`
- **fileHelper.copy()** method exists and copies files without loading content
- **fileHelper.readAsStream()** method exists for streaming large files (referenced in callout)
- **StartProcessorWithLambda** import from `@atomicloud/cyan-sdk` is correct
- **LambdaProcessorFn** signature: `(i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>`

### Source Code Evidence:

- VirtualFileReference/VirtualFile: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts`
- CyanFileHelper: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts`
- CyanProcessorInput: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts`
- SDK exports: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts`
- Package name: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json` - `@atomicloud/cyan-sdk`
<!-- source: content/docs/developer/processors/how-to/push-to-registry.mdx -->

# 📄 File: content/docs/developer/processors/how-to/push-to-registry.mdx

> This document describes the process of pushing processors to container registries and registering them with Zinc. The API endpoint reference and CLI command documentation are accurate. Several minor issues were found.

### 🔴 Source Code Inaccuracies

None found.

### 🟡 Documentation Issues

1. **Missing CLI Command for Registration** | Line 141 | The document references the Zinc API endpoint `POST /api/v1/processor/push/{username}` but does not mention that users should use `cyanprint push processor <IMAGE> <TAG>` CLI command (documented in CLI reference) which is the primary way to register processors. The current text only says "refer to the Zinc Registry API documentation" which is a contributor-level doc, not a developer guide.

2. **Inconsistent API Version Format** | Line 141 | The document shows `/api/v1/processor/push/{username}` while the Zinc documentation uses `/api/v{version}/processor/push/{username}`. Both are correct, but for consistency with other API references, should use the same format or clarify that `v1` is the current version.

3. **Code Example Missing Import** | Lines 116-124 | The TypeScript code example shows `GlobType.Template` but doesn't show the import statement. Should include `import { GlobType } from '@atomicloud/cyan-sdk';` for completeness, consistent with other documentation examples.

### 🟠 Other Problems

1. **Terminology Confusion** | Lines 11, 69, 109, 132 | The document uses both "CyanPrint registry (Zinc)" and just "Zinc" interchangeably. For new users, this could be confusing. Recommend standardizing on one term (e.g., always use "Zinc registry" or "CyanPrint registry").

2. **Missing Step for CLI Authentication** | Prerequisites section (Line 13-18) | The prerequisites mention "Docker installed and logged in" but don't mention that users need a CyanPrint authentication token (`CYAN_TOKEN` or `--token`) to push to the registry. This is documented in the CLI commands reference but should be mentioned here as well.

3. **Incomplete CI/CD Example** | Lines 195-197 | The warning correctly states that Docker push alone is insufficient, but doesn't show how to add the `cyanprint push processor` command to the GitHub Actions workflow. This leaves developers without a complete CI/CD solution.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 3     |
| 🟠       | 3     |

<!-- source: content/docs/developer/processors/how-to/resolve-all-files.mdx -->

# File: content/docs/developer/processors/how-to/resolve-all-files.mdx

> Documentation for `resolveAll()` method on CyanFileHelper. The documented API, properties, methods, and code examples were verified against the actual SDK implementation in helium/sdks/node. All factual claims are accurate.

### Source Code Inaccuracies

(for each: Documented | Actual | file:line evidence)

None found. All documented APIs match the actual SDK implementation:

- `resolveAll()` method exists on CyanFileHelper class (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33)
- VirtualFile class has documented properties: `baseRead`, `baseWrite`, `relative`, `content` (helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-38)
- VirtualFile class has documented getters: `read`, `write` (helium/sdks/node/src/domain/core/fs/virtual_file.ts:40-46)
- VirtualFile class has documented method: `writeFile()` (helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54)
- `StartProcessorWithLambda` is correctly exported from `@atomicloud/cyan-sdk` (helium/sdks/node/src/main.ts:106, 170)
- Return type `{ directory: input.writeDir }` matches `ProcessorOutput` interface (helium/sdks/node/src/domain/processor/output.ts:1-5)

### Documentation Issues

(for each: Problem | Location | Fix)

1. **Incomplete property table** | VirtualFile Properties table (lines 49-56) | The table is missing `baseRead` and `baseWrite` properties which are public properties on the VirtualFile class. These are important because they are the source for the `read` and `write` getters.

### Other Problems

(for each: Problem | Recommendation)

1. **Minor comment accuracy** | Line 31 comment states "Copy-type globs are automatically handled - files are copied directly" | While accurate, this could be clearer: Copy-type globs are processed first and copied to output, then only Template-type globs are returned as VirtualFile[]. The implementation at cyan_fs_helper.ts:34-39 shows this two-phase behavior.

2. **Related link path** | Line 111 references `/docs/developer/processors/reference/sdk/file-helper` | This is correct per the instructions that links starting from `/docs` are correct.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 0     |
| Documentation Issues     | 1     |
| Other Problems           | 2     |

<!-- source: content/docs/developer/processors/how-to/stream-large-files.mdx -->

# 📄 File: content/docs/developer/processors/how-to/stream-large-files.mdx

> Document describes `readAsStream()` method for streaming large files. The API and usage patterns are mostly accurate, but there are some minor issues with the return type description and table formatting.

### 🔴 Source Code Inaccuracies

1. **VirtualFileStream properties type** | Documented as `fs.ReadStream` and `fs.WriteStream` | Actual: Uses `fs.ReadStream` and `fs.WriteStream` from 'node:fs' | Evidence: `helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-8` shows `public reader: fs.ReadStream, public writer: fs.WriteStream` - this is CORRECT

2. **VirtualFileStream not exported from SDK** | Documented as if users can use `VirtualFileStream` type directly | Actual: `VirtualFileStream` is NOT exported from `@atomicloud/cyan-sdk` main.ts | Evidence: `helium/sdks/node/src/main.ts` exports only `CyanFileHelper, GlobType, QuestionType` and various types - `VirtualFileStream` is defined in `virtual_file.ts` but not re-exported from main.ts

### 🟡 Documentation Issues

1. **Missing type import for VirtualFileStream** | The table documents VirtualFileStream properties but users cannot import this type from `@atomicloud/cyan-sdk` | Add note that the type is inferred from return of `readAsStream()` or consider exporting it from the SDK

2. **Incomplete type signature** | The table uses `fs.ReadStream` and `fs.WriteStream` but doesn't show that users need to import `fs` from Node.js to use proper typing | Recommend using `NodeJS.ReadableStream` and `NodeJS.WritableStream` or noting these are Node.js stream types

3. **Minor inconsistency in glob usage** | Code example uses `glob: '**/*'` which would match all files including directories, but the actual implementation uses `nodir: true` option | Evidence: `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:44-49` shows `nodir: true` - documentation could clarify this filters out directories

### 🟠 Other Problems

1. **Writer usage pattern** | The examples show `writer.write(processed)` but the actual `fs.WriteStream` may need encoding specification for strings | Recommend adding encoding parameter like `writer.write(processed, 'utf-8')` for text data

2. **Error handling not mentioned** | No discussion of error handling for stream operations which can fail | Consider adding guidance on handling stream errors with `.on('error', ...)` events

3. **Stream closing in error cases** | Examples don't show proper cleanup if an error occurs mid-stream | Recommend adding `.destroy()` or try/finally patterns for proper resource cleanup

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 3     |

<!-- source: content/docs/developer/processors/index.mdx -->

# 📄 File: content/docs/developer/processors/index.mdx

> Index page for Processor Development documentation. The page provides an overview of processors, their architecture, learning paths, and a quick example. Most claims are accurate against the source code.

### 🔴 Source Code Inaccuracies

(None found)

### 🟡 Documentation Issues

1. **Quick Example is simplified but may mislead about production patterns**

   - Location: Lines 121-134 (Quick Example code block)
   - Problem: The example uses `forEach` with side effects (`file.writeFile()` inside the loop) which works but is not the typical pattern seen in real processors (e.g., iridium/e2e/processor1/index.ts uses `.map().map()` chain)
   - Fix: Consider aligning with the actual default processor pattern using `.map()` chains for consistency with real implementations, or add a note that this is a simplified example

2. **Mermaid diagram shows simplified flow**

   - Location: Lines 24-37
   - Problem: The diagram shows `D --> E[resolveAll]` but doesn't show that `resolveAll()` also internally calls `copy()` for Copy-type globs before returning template files
   - Recommendation: Either note this is a simplified view or add the copy step to the diagram

3. **ProcessorOutput not explicitly imported in Quick Example**
   - Location: Lines 121-134
   - Problem: The example returns `{ directory: input.writeDir }` without showing the `ProcessorOutput` type. While TypeScript can infer this, production code (as seen in iridium/e2e/processor1/index.ts:1) explicitly imports and uses the type
   - Recommendation: Consider adding explicit return type annotation for completeness: `StartProcessorWithLambda(async (input, fileHelper): Promise<ProcessorOutput> => {`

### 🟠 Other Problems

1. **Eta templating syntax reference is correct but not linked to detailed docs**

   - Location: Line 52 ("The default processor uses Eta with `var__name__` syntax")
   - Evidence: iridium/e2e/processor1/index.ts:24 confirms `tags: ['var__', '__']`
   - Recommendation: Consider linking to the Templates section where Eta syntax is explained in detail

2. **Components table describes types but not their full structure**
   - Location: Lines 41-46
   - Problem: The table lists component names but doesn't show their full type definitions which could help developers understand the API better
   - Evidence: CyanProcessorInput (cyan_script_model.ts:11-16) has `{ readDir, writeDir, globs, config }` - the table says "Config, globs, directories" which is accurate but brief

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/processors/reference/cyan-yaml.mdx -->

# 📄 File: content/docs/developer/processors/reference/cyan-yaml.mdx

> Documentation is accurate and matches source code. All field definitions, types, and descriptions are correct. The code example for `StartProcessorWithLambda` matches the SDK implementation. All related links are valid.

### 🔴 Source Code Inaccuracies

(none found)

### 🟡 Documentation Issues

1. **Example URL inconsistency** | "Full Example" section (line 43-54) | The example uses `atomicloud` as the username and `cyan-processor`/`markdown-processor` as source/project URLs. While these are example URLs, they don't match the actual e2e test files which use `cyane2e` as username and `https://google.com` for URLs. Consider using more realistic placeholder URLs or consistent naming.

### 🟠 Other Problems

1. **Empty tags array in source examples** | The actual processor yaml files in iridium/e2e have `tags: []` (empty array) rather than populated tags as shown in documentation examples. This is fine for examples but worth noting for consistency.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 1     |
| 🟠       | 1     |

<!-- source: content/docs/developer/processors/reference/dockerfile.mdx -->

# 📄 File: content/docs/developer/processors/reference/dockerfile.mdx

> Document covers Dockerfile patterns for processor containers. Most patterns are accurate, but Bun version examples are outdated compared to actual codebase. The .NET port configuration statement is misleading - .NET SDK does not automatically configure port 5551, it relies on the ASPNETCORE_URLS environment variable.

### 🔴 Source Code Inaccuracies

1. **Bun version examples outdated**

   - Documented: `FROM oven/bun:1.3.8` and "Current stable versions include `1.3.8` and later"
   - Actual: Source code Dockerfiles use `oven/bun:1.0.11` (iridium/e2e/processor1, processor2, plugin1) and `oven/bun:1.1.31` (iridium/e2e/template1, template2, template3)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:1` uses `FROM oven/bun:1.0.11`

2. **.NET SDK port claim is misleading**

   - Documented: ".NET SDK: Requires explicit configuration: `ENV ASPNETCORE_URLS=http://+:5551`"
   - Actual: The .NET SDK `StartProcessor` method does NOT set any port - it just calls `app.Run()` without a URL, relying entirely on external configuration (like ASPNETCORE_URLS environment variable). The SDK itself does not automatically listen on 5551.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Server.cs:96` - `app.Run()` with no URL parameter for processor, contrasted with `app.Run("http://0.0.0.0:5553")` for resolver (line 182)

3. **Python version example may be outdated**
   - Documented: `FROM python:3.12.12`
   - Actual: No Python Dockerfile examples found in the source repositories to verify this version
   - Evidence: No Dockerfile with Python base image found in boron, iridium, zinc, helium, or argon repos

### 🟡 Documentation Issues

1. **Version pinning recommendation inconsistent with examples**

   - Problem: The doc recommends `oven/bun:1.3.8` but none of the actual project Dockerfiles use this version
   - Location: Lines 15, 146, 158, 208, 275, 291
   - Fix: Update to match actual versions in use (e.g., `1.1.31` or later) or note that these are example versions

2. **.dockerignore example suggests excluding bun.lockb**

   - Problem: The `.dockerignore` example includes `bun.lockb` but the Dockerfile best practices section says to include lockfile
   - Location: Lines 236-243
   - Fix: Remove `bun.lockb` from the `.dockerignore` example or clarify the distinction

3. **Multi-stage build example copies node_modules incorrectly**
   - Problem: `COPY --from=builder /app/node_modules ./node_modules` suggests copying node_modules from builder, but the builder stage runs `bun build` which creates a bundled output - typically you wouldn't need node_modules in this case
   - Location: Lines 164-166
   - Fix: Either remove the node_modules copy (if truly bundled) or clarify when it's needed

### 🟠 Other Problems

1. **Missing LABEL example for cyanprint.name**

   - Problem: The boron Dockerfile uses `LABEL cyanprint.name="sulfone-boron"` but this is not documented as a recommended label
   - Recommendation: Consider documenting additional useful labels like `cyanprint.name` for better container identification

2. **Inconsistent spacing in CMD examples**

   - Problem: Some CMD examples have spaces inside brackets `[ "bun", ... ]` while others don't `["bun", ...]`
   - Recommendation: Standardize formatting throughout the document

3. **No alpine variant used in minimal example**
   - Problem: The "Minimal Dockerfile" uses `oven/bun:1.3.8` (non-alpine) but multi-stage example uses `-alpine` variant
   - Recommendation: Consider recommending `-alpine` variants for smaller image sizes in all examples

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 3     |
| 🟠       | 3     |

<!-- source: content/docs/developer/processors/reference/project-structure.mdx -->

# 📄 File: content/docs/developer/processors/reference/project-structure.mdx

> Analysis of processor project structure documentation against SDK source (helium) and processor examples (iridium). Found critical API discrepancy and several documentation issues.

### 🔴 Source Code Inaccuracies

1. **Documented:** `input.writeDirectory` in code examples
   **Actual:** `input.writeDir` - the property is `writeDir`, not `writeDirectory`
   **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16`:

   ```ts
   interface CyanProcessorInput {
     readDir: string;
     writeDir: string; // NOT writeDirectory
     globs: CyanGlob[];
     config: unknown;
   }
   ```

   Also confirmed in actual processor usage at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55`:

   ```ts
   return { directory: input.writeDir };
   ```

2. **Documented:** Dockerfile uses `FROM oven/bun:1.1.31`
   **Actual:** Real processors use `FROM oven/bun:1.0.11` and do not use `--frozen-lockfile`
   **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:1-9`:

   ```dockerfile
   FROM oven/bun:1.0.11
   WORKDIR /app
   LABEL cyanprint.dev=true
   COPY package.json .
   COPY bun.lockb .
   RUN bun install
   COPY . .
   CMD ["bun", "run", "index.ts"]
   ```

3. **Documented:** `@atomicloud/cyan-sdk` version `^1.0.0`
   **Actual:** Real processors use `"latest"` and also don't include `@types/bun`
   **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/package.json:1-15`:

   ```json
   {
     "name": "processor",
     "module": "index.ts",
     "type": "module",
     "devDependencies": {
       "bun-types": "latest"
     },
     "peerDependencies": {
       "typescript": "^5.0.0"
     },
     "dependencies": {
       "@atomicloud/cyan-sdk": "latest",
       "eta": "^3.5.0"
     }
   }
   ```

4. **Documented:** cyan.yaml has `processor.inputs` section with input definitions
   **Actual:** Real processor cyan.yaml files don't have a `processor:` section at all - they use flat metadata
   **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml:1-9`:
   ```yaml
   username: cyane2e
   name: processor1
   description: First processor
   project: https://google.com
   source: https://google.com
   email: cyane2e@atomi.cloud
   tags: []
   readme: README.MD
   ```

### 🟡 Documentation Issues

1. **Problem:** The code example shows a pattern with `forEach` that doesn't return the value from `writeFile()`, while actual processors use `.map().map()` chaining
   **Location:** Lines 36-44 in the code block
   **Fix:** Update to show more realistic usage pattern like:

   ```ts
   files
     .map(x => {
       x.content = transform(x.content);
       return x;
     })
     .map(x => x.writeFile());
   ```

2. **Problem:** package.json example includes `"version": "1.0.0"` and `"scripts"` section that real processors don't have
   **Location:** Lines 51-67
   **Fix:** Update to match actual processor package.json structure which uses `"module": "index.ts"` instead of scripts

3. **Problem:** tsconfig.json example differs significantly from actual processor configs
   **Location:** Lines 115-127
   **Fix:** Update to reflect actual tsconfig.json used by processors:

   ```json
   {
     "compilerOptions": {
       "lib": ["ESNext"],
       "module": "esnext",
       "target": "esnext",
       "moduleResolution": "bundler",
       "moduleDetection": "force",
       "allowImportingTsExtensions": true,
       "noEmit": true,
       "composite": true,
       "strict": true,
       "downlevelIteration": true,
       "skipLibCheck": true,
       "allowSyntheticDefaultImports": true,
       "forceConsistentCasingInFileNames": true,
       "allowJs": true,
       "types": ["bun-types"]
     }
   }
   ```

4. **Problem:** cyan.yaml example shows `name: myorg/my-processor` format but actual processors use separate `username` and `name` fields
   **Location:** Lines 96-109
   **Fix:** Update to show actual format with separate username/name fields

### 🟠 Other Problems

1. **Problem:** The cyan.yaml documented structure appears to be template-specific, not processor-specific. The documented `processor.inputs` section may not apply to standalone processors.
   **Recommendation:** Verify with the team what the correct cyan.yaml format should be for processors vs templates. If processors don't use `processor.inputs`, this section should be removed or clearly marked as conditional.

2. **Problem:** The Dockerfile example uses wildcard pattern `bun.lockb*` which is good for optionality, but the actual processors don't use `--frozen-lockfile`
   **Recommendation:** Keep the wildcard pattern but remove `--frozen-lockfile` or document when it should be used

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 4     |
| 🟠       | 2     |

<!-- source: content/docs/developer/processors/reference/sdk/file-helper.mdx -->

# 📄 File: content/docs/developer/processors/reference/sdk/file-helper.mdx

> Documentation for CyanFileHelper API covering file operations for processors. The documentation is mostly accurate but contains a significant inaccuracy regarding VirtualFileStream type descriptions in the properties table, which incorrectly shows Node.js types for a cross-SDK API section.

### 🔴 Source Code Inaccuracies

1. **VirtualFileStream Properties Type Incorrect** | Documented: `fs.ReadStream` and `fs.WriteStream` (Node.js-specific types) | Actual: In .NET SDK, uses `StreamReader` and `StreamWriter`; In Node.js SDK, uses `fs.ReadStream` and `fs.WriteStream` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/FileSystem/VirtualFileStream.cs:3` shows `public record VirtualFileStream(StreamReader Reader, StreamWriter Writer);` while Node.js at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts:4-8` shows `public reader: fs.ReadStream, public writer: fs.WriteStream`

2. **Python GlobType Values Different** | Documented: `GlobType.Template = 0, GlobType.Copy = 1` | Actual: Python SDK uses `GlobType.Template = 1, GlobType.Copy = 2` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:7-9` shows `class GlobType(Enum): Template = 1, Copy = 2` while Node.js at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `enum GlobType { Template = 0, Copy = 1 }`

### 🟡 Documentation Issues

1. **VirtualFileStream Properties Table SDK-Specific** | Problem: The VirtualFileStream properties table shows `fs.ReadStream`/`fs.WriteStream` which are Node.js-specific types, but the section intro mentions both Node.js and .NET SDKs | Location: Lines 313-316 (VirtualFileStream Properties table) | Fix: Either split the documentation by SDK or clarify that types differ by platform (Node.js: `fs.ReadStream`/`fs.WriteStream`, .NET: `StreamReader`/`StreamWriter`)

2. **CyanGlob Type Description Could Be Clearer** | Problem: The `root` property description says "optional, defaults to '.'" but doesn't mention it can also be `null` | Location: Line 91 (`root?: string | null;  // Base directory (optional, defaults to '.')`) | Fix: Update comment to `// Base directory (optional, defaults to '.' or null)`

3. **Code Example Uses Node.js-specific Type** | Problem: The `readAsStream()` usage example shows Node.js stream events but the intro mentions both Node.js and .NET SDKs support this | Location: Lines 199-225 (Usage example) | Fix: Either label the example as "Node.js Example" or provide separate examples for each SDK

### 🟠 Other Problems

1. **Python SDK GlobType Inconsistency** | Problem: The Python SDK uses different enum values (1/2) vs Node.js/.NET (0/1), which could cause confusion for developers working across SDKs | Recommendation: Either document the SDK-specific values explicitly or (ideally) align the Python SDK with the other SDKs

2. **Missing .NET Streaming Example** | Problem: The `readAsStream()` section only shows a Node.js example with event-based streaming, but .NET developers would need different code using `StreamReader`/`StreamWriter` | Recommendation: Add a .NET-specific example showing how to use `StreamReader.ReadLineAsync()` or similar patterns

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/processors/reference/sdk/index.mdx -->

# 📄 File: content/docs/developer/processors/reference/sdk/index.mdx

> The SDK overview document has several inaccuracies regarding type exports, interface names, and code examples.

### 🔴 Source Code Inaccuracies

1. **Documented**: `ProcessorInput` interface listed under "Interfaces" section
   **Actual**: SDK exports `CyanProcessorInput`, not `ProcessorInput`
   **Evidence**: `helium/sdks/node/src/main.ts:194` - exports `CyanProcessorInput`, not `ProcessorInput`. The `ProcessorInput` type exists in `helium/sdks/node/src/domain/processor/input.ts` but is NOT exported from the SDK.

2. **Documented**: `ProcessorOutput` listed under "Interfaces"
   **Actual**: `ProcessorOutput` is a type, not an interface
   **Evidence**: `helium/sdks/node/src/domain/processor/output.ts:1-5` - `interface ProcessorOutput` but exported as `export type { ProcessorOutput }` in main.ts:197

3. **Documented**: `VirtualFile`, `VirtualFileReference`, `VirtualFileStream` listed under "Types"
   **Actual**: These types are NOT exported from the SDK
   **Evidence**: `helium/sdks/node/src/main.ts:169-207` - The exports list does not include `VirtualFile`, `VirtualFileReference`, or `VirtualFileStream`. These are only internal classes in `helium/sdks/node/src/domain/core/fs/virtual_file.ts`.

4. **Documented**: Quick Start code uses `input.writeDirectory`
   **Actual**: Property name is `input.writeDir`
   **Evidence**: `helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `CyanProcessorInput` has `readDir` and `writeDir`, not `readDirectory`/`writeDirectory`. Also confirmed in actual usage: `iridium/e2e/processor1/index.ts:55` - `return { directory: input.writeDir };`

5. **Documented**: `CyanFileHelper` listed under "Interfaces"
   **Actual**: `CyanFileHelper` is exported as a class, not an interface type
   **Evidence**: `helium/sdks/node/src/main.ts:178` - `CyanFileHelper` is exported as a value (class), not a type.

### 🟡 Documentation Issues

1. **Problem**: Interfaces section heading is misleading
   **Location**: Lines 26-33
   **Fix**: Rename section to "Types" since most items are types, not interfaces. `CyanFileHelper` is a class (value export), `ProcessorInput` doesn't exist (should be `CyanProcessorInput`), and `ProcessorOutput` is a type alias.

2. **Problem**: Types section lists types that aren't exported
   **Location**: Lines 36-41
   **Fix**: Remove `VirtualFile`, `VirtualFileReference`, `VirtualFileStream` from the Types table as they are not exported from `@atomicloud/cyan-sdk`. Users access these through return types but cannot import them directly.

3. **Problem**: Quick Start code comment incorrectly describes input properties
   **Location**: Lines 49-52
   **Fix**: Change comments to match actual property names:
   - `//   - readDir: Source files location` (not readDirectory)
   - `//   - writeDir: Output location` (not writeDirectory)

### 🟠 Other Problems

1. **Problem**: The documentation describes `CyanFileHelper` as an interface in the "Interfaces" section, but it's actually a class that's instantiated internally by the SDK and passed to the processor. Users don't create instances directly.
   **Recommendation**: Move `CyanFileHelper` to a separate "Classes" section or clarify that it's provided by the SDK, not user-instantiated.

2. **Problem**: SDK Reference Sections links may be inconsistent with actual file paths
   **Location**: Lines 74-78
   **Recommendation**: Verify that all linked pages exist and have correct content matching the SDK exports.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/processors/reference/sdk/input-output.mdx -->

# File: content/docs/developer/processors/reference/sdk/input-output.mdx

> Documentation for Processor Input/Output type definitions. The documentation is largely accurate and matches the SDK types. A minor issue exists with Python SDK GlobType values differing from Node.js, and the file-helper.mdx sibling document contains an inconsistency that should be noted.

### Source Code Inaccuracies

1. **GlobType enum values Python SDK inconsistency** | Documented: `GlobType.Template = 0, GlobType.Copy = 1` | Actual: Node.js/.NET use 0/1, but Python SDK uses `GlobType.Template = 1, GlobType.Copy = 2` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:7-9` shows `class GlobType(Enum): Template = 1, Copy = 2` while Node.js at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `enum GlobType { Template = 0, Copy = 1 }`

### Documentation Issues

1. **Cross-SDK GlobType values not documented** | Problem: The documentation presents GlobType enum values (0/1) as universal, but Python SDK uses different values (1/2) | Location: Lines 144-157 (GlobType section) | Fix: Add a note that Python SDK uses different enum values, or document this as Node.js/.NET specific

2. **Sibling document uses wrong property name** | Problem: The related file-helper.mdx uses `input.writeDirectory` instead of `input.writeDir` in the Best Practices section | Location: file-helper.mdx:376 | Fix: Change `return { directory: input.writeDirectory };` to `return { directory: input.writeDir };` in file-helper.mdx

### Other Problems

1. **No type import shown in examples** | Problem: The code examples use types like `CyanGlob` and `GlobType` without showing the import, which may confuse users | Recommendation: Either show the import statement or link to where types are imported from (already done in some examples but not all)

## Summary

| Category | Count |
| -------- | ----- |
| Red      | 1     |
| Yellow   | 2     |
| Orange   | 1     |

## Verified Accurate Claims

- `CyanProcessorInput` interface has `readDir`, `writeDir`, `globs`, `config` properties (helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16)
- `ProcessorOutput` interface has `directory` property (helium/sdks/node/src/domain/processor/output.ts:1-5)
- `CyanGlob` interface has `root`, `glob`, `exclude`, `type` properties (helium/sdks/node/src/domain/core/cyan.ts and cyan_script_model.ts)
- GlobType enum exists with `Template` and `Copy` values in Node.js SDK (helium/sdks/node/src/domain/core/cyan.ts:1-4)
- `StartProcessorWithLambda` function signature is correct (helium/sdks/node/src/main.ts:106-108, helium/sdks/node/src/api/processor/lambda.ts:6)
- `config` property is typed as `unknown` requiring type casting
- Typical values for readDir (`/workspace/cyanprint/`) and writeDir (`/workspace/output/`) are correct
- SDK package name `@atomicloud/cyan-sdk` is correct (helium/sdks/node/package.json:2)
- Related links to StartProcessorWithLambda, CyanFileHelper, and Types are valid
<!-- source: content/docs/developer/processors/reference/sdk/start-processor.mdx -->

# 📄 File: content/docs/developer/processors/reference/sdk/start-processor.mdx

> Documentation for the StartProcessorWithLambda entry point is accurate and aligns with source code. The function signature, parameters, return types, and code examples are all correct. Minor issue: one related document (file-helper.mdx) has an inconsistent property name in an example.

### 🔴 Source Code Inaccuracies

(none found)

### 🟡 Documentation Issues

1. **Inconsistent property name in related file** | Documented: `input.writeDir` | Actual: Related file `file-helper.mdx` uses `input.writeDirectory` in example (line 376) | Location: `file-helper.mdx` line 376 | Fix: Change `input.writeDirectory` to `input.writeDir` in file-helper.mdx to match the actual `CyanProcessorInput` interface

### 🟠 Other Problems

(none)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 1     |
| 🟠       | 0     |

## Verified Accurate Claims

- `StartProcessorWithLambda` function exists (helium/sdks/node/src/main.ts:106-108)
- Function signature `(handler: LambdaProcessorFn) => void` is correct
- Lambda type `LambdaProcessorFn = (input: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>` is correct (helium/sdks/node/src/api/processor/lambda.ts:6)
- `CyanProcessorInput` has `readDir`, `writeDir`, `globs`, `config` properties (helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16)
- `ProcessorOutput` has `directory` property (helium/sdks/node/src/domain/processor/output.ts:1-5)
- `fileHelper.resolveAll()` returns `VirtualFile[]` (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40)
- `VirtualFile` has `content`, `relative` properties and `writeFile()` method (helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-54)
- `fileHelper.read(glob)`, `fileHelper.copy(glob)` methods exist (helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts)
- `CyanGlob` interface with `root`, `glob`, `exclude`, `type` properties is correct
- SDK package name `@atomicloud/cyan-sdk` is correct (helium/sdks/node/package.json:2)
- Typical directory paths `/workspace/cyanprint/` and `/workspace/output/` are correct defaults
- Related links are valid internal documentation links
<!-- source: content/docs/developer/processors/reference/sdk/types.mdx -->

# File: content/docs/developer/processors/reference/sdk/types.mdx

> Fact-check findings for processor SDK type definitions documentation. Unable to verify against source repositories (boron, iridium, zinc, helium, argon) as they are external to this documentation repository. Findings based on cross-referencing with spec files and related documentation files.

### Source Code Inaccuracies

(for each: Documented | Actual | file:line evidence)

1. **CyanProcessorInput property names** | Documented shows `readDir` and `writeDir` | Spec (phase-5, line 116-121) shows `readDirectory` and `writeDirectory` | `/spec/v1/CU-86et8z80y/plans/phase-5-developer-processors.md:116-125`

2. **ProcessorOutput return structure** | Documented shows `{ directory: string }` | Helium SDK reference shows `{ files: [] }` for TypeScript and `{ Files = new List<ProcessorFile>() }` for C# | `/content/docs/contributor/repositories/helium.mdx:144-147,307`

3. **LambdaProcessorFn type definition** | Documented shows `Promise<ProcessorOutput>` return type | Spec (task-spec.md, line 332) shows same pattern but the actual ProcessorOutput structure varies | `/spec/v1/CU-86et8z80y/task-spec.md:332-348`

### Documentation Issues

(for each: Problem | Location | Fix)

1. **Inconsistent property naming across docs** | Multiple files in `/content/docs/developer/processors/` use `readDir`/`writeDir` while spec files use `readDirectory`/`writeDirectory` | Cross-reference all processor docs and ensure consistency | Lines 22, 28, 214, 219

2. **Missing CyanGlob `root` property documentation** | The `root` property documentation says "Defaults to root of read directory" but doesn't clarify what value is used if omitted (null vs undefined vs empty string) | Line 81

3. **VirtualFileReference.readFile() return type** | Documented as returning `VirtualFile` but spec (file-helper.mdx line 303) shows it returns `VirtualFile` - needs verification against actual SDK | Line 180

4. **VirtualFileStream fs types** | Uses `fs.ReadStream` and `fs.WriteStream` without importing or specifying Node.js version compatibility | Line 191-193

5. **CyanFileHelper constructor shows private fields** | Documentation shows `private readonly _readDir` and `private readonly _writeDir` but these are implementation details that may not match SDK | Lines 206-208

6. **Missing readonly modifier in ProcessorOutput.directory** | Documented as `readonly directory: string` but this may not match actual SDK interface | Line 50

7. **GlobType enum values** | Documented as `Template = 0` and `Copy = 1` - matches spec but cannot verify against actual SDK source | Lines 59-70

### Other Problems

(for each: Problem | Recommendation)

1. **Source repositories not accessible** | The referenced source paths (`../boron`, `../iridium`, `../zinc`, `../helium`, `../argon`) are external repositories not included in this documentation repository. Cannot perform direct source code verification. | Recommend adding SDK type definition exports or a types reference package to this repo for verification purposes.

2. **Example Pattern section disclaimer unclear** | The section states "These are not SDK types, but examples" but some patterns (like error classes) may be confused with SDK-provided types | Add clearer visual distinction between SDK types and example patterns

3. **Type Guard Pattern section** | Shows example code that may not compile correctly - `isVariableConfig` uses `'vars' in config` but TypeScript may require type narrowing | Verify example compiles with strict TypeScript settings

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 3     |
| Documentation Issues     | 7     |
| Other Problems           | 3     |

<!-- source: content/docs/developer/processors/tutorials/first-processor.mdx -->

# File: content/docs/developer/processors/tutorials/first-processor.mdx

> Tutorial for creating a first processor - API and code samples verified against helium SDK and iridium examples. Minor issues found with input type naming and Dockerfile version.

### Source Code Inaccuracies

1. **Input Type Name** | Documented: `ProcessorInput` | Actual: `CyanProcessorInput` | helium/sdks/node/src/domain/core/cyan_script_model.ts:11 - The SDK type is `CyanProcessorInput` with properties `readDir`, `writeDir`, `globs`, `config`. The documented `ProcessorInput` is an internal type in helium/sdks/node/src/domain/processor/input.ts.

2. **Input Property Names** | Documented: `input.writeDirectory` (line 55) | Actual: `input.writeDir` | helium/sdks/node/src/domain/core/cyan_script_model.ts:13 and iridium/e2e/processor1/index.ts:55 - The actual property is `writeDir`, not `writeDirectory`.

3. **Dockerfile Bun Version** | Documented: `oven/bun:1.1.31` | Actual: `oven/bun:1.0.11` in examples | iridium/e2e/processor1/Dockerfile:1 and iridium/e2e/processor2/Dockerfile:1 - The example Dockerfiles use 1.0.11. Note: 1.1.31 may be intentional as a newer recommended version, but this is inconsistent with actual e2e tests.

4. **Bun.lockb Copy Pattern** | Documented: `COPY package.json bun.lockb* ./` (with wildcard) | Actual: `COPY bun.lockb .` (without wildcard) | iridium/e2e/processor1/Dockerfile:5 - The wildcard pattern is a valid improvement for optional lockfile, but differs from actual examples.

### Documentation Issues

1. **Inconsistent Input Property Reference** | Location: Line 55 code example `return { directory: input.writeDirectory };` | Fix: Change to `return { directory: input.writeDir };` to match the actual SDK type `CyanProcessorInput`.

2. **Type Name Mismatch in Table** | Location: Line 92 table `ProcessorInput` | Fix: Change to `CyanProcessorInput` to match the exported SDK type, or clarify that this is the conceptual name.

3. **Missing ProcessorInput Import** | Location: Code example at line 38-56 | Fix: The code example doesn't import `ProcessorInput` but references it conceptually. The actual SDK exports `CyanProcessorInput` type, not `ProcessorInput`. Consider either showing the import or adjusting the table to use correct type name.

### Other Problems

1. **Processor Return Directory Property** | Recommendation: The documentation shows `return { directory: input.writeDirectory }` but real examples use `return { directory: input.writeDir }`. Ensure consistency with SDK - the `ProcessorOutput` interface only requires a `directory` property, which should point to the write directory.

2. **Template Test Code Example** | Location: Lines 132-141 | The example shows an inline comment `// In template's index.ts` but the actual format would use `StartTemplateWithLambda`. Consider providing a more complete example or linking to the template tutorials for context.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 4     |
| Documentation Issues     | 3     |
| Other Problems           | 2     |

<!-- source: content/docs/developer/templates/explanation/3-way-merge.mdx -->

# 📄 File: content/docs/developer/templates/explanation/3-way-merge.mdx

> This document describes 3-way merge for template updates. The concept exists in the codebase but several implementation details are inaccurate.

### 🔴 Source Code Inaccuracies

1. **Directory Structure** | Documented: `.cyan/generation.json` and `.cyan/base/` | Actual: `.cyan_state.yaml` (single YAML file, no separate base directory) | iridium/docs/developer/features/04-state-persistence.md:75-89

2. **Update Command - Version Argument** | Documented: `cyanprint update ./my-project myorg/template:2.0.0` (supports specifying template reference) | Actual: `cyanprint update [path]` - no template reference argument supported | iridium/cyanprint/src/commands.rs:52-72

3. **Update Command - Dry Run** | Documented: `cyanprint update ./my-project --dry-run` | Actual: `--dry-run` option does not exist in the CLI | iridium/cyanprint/src/commands.rs:52-72 (no dry-run flag defined)

4. **Merge Algorithm Flow** | Documented: "Compare Base vs Ours" then "Compare Base vs Theirs" decision tree | Actual: Uses git2 library to create temporary git repository with three branches (base, current, incoming) and performs a real git merge | iridium/cyancoordinator/src/fs/merger.rs:134-300

5. **Base Files Storage** | Documented: Base files stored in `.cyan/base/` directory | Actual: Base VFS is regenerated from stored answers/deterministic_states in `.cyan_state.yaml`, not persisted as files | iridium/docs/developer/features/04-state-persistence.md:77-89

6. **Command Name** | Documented: Uses `cyanprint` | Actual: Correct - binary is `cyanprint` | iridium/cyanprint/src/main.rs confirms this

### 🟡 Documentation Issues

1. **Misleading Directory Tree** | The `.cyan/` directory structure shown at lines 43-49 does not match actual implementation. The state is stored in `.cyan_state.yaml`, not in a `.cyan/` directory with `generation.json` and `base/` subdirectory. | Lines 43-49 | Replace with `.cyan_state.yaml` file structure showing templates, history, answers, and deterministic_states

2. **Missing CLI Command Prefix** | The update command examples use `cyanprint update` which is correct, but the source documentation in iridium uses `pls update`. The document correctly uses `cyanprint`. | N/A | No change needed, but ensure consistency

3. **Update Process Steps Incomplete** | The documented 5-step update process (Read base, Read ours, Generate theirs, Merge, Report conflicts) is simplified. The actual process includes: BUILD specs, MAP (execute templates), LAYER (merge VFS), MERGE (3-way with local), WRITE | Lines 52-57 | Update to reflect actual batch_process flow: PHASE 1 BUILD -> PHASE 2-4 BATCH PROCESS (MAP -> LAYER -> MERGE+WRITE)

4. **Conflict Marker Format** | Documented: Uses `<<<<<<< OURS` and `>>>>>>> THEIRS` | Actual: Git2 standard conflict markers are used, which are `<<<<<<<`, `=======`, `>>>>>>>` (the labels may differ) | iridium/cyancoordinator/src/fs/merger.rs:262-268

### 🟠 Other Problems

1. **Terminology Mismatch** | The document uses "Ours/Theirs" terminology while the codebase uses "current/incoming". Consider aligning terminology or noting the equivalence. | Recommendation: Add a note clarifying that "Ours" = "current/local" and "Theirs" = "incoming"

2. **Missing Rename Detection Feature** | The actual merger supports configurable rename detection with similarity threshold (0-100), which is not mentioned in the documentation. | iridium/cyancoordinator/src/fs/merger.rs:231-233 | Recommendation: Document the rename detection capability

3. **Fast-Forward Case Not Documented** | The merge algorithm handles three cases: up-to-date, fast-forward, and normal merge. Only normal merge with conflicts is documented. | iridium/cyancoordinator/src/fs/merger.rs:242-299 | Recommendation: Document all three merge scenarios

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 6     |
| 🟡       | 4     |
| 🟠       | 3     |

<!-- source: content/docs/developer/templates/explanation/client-state.mdx -->

# File: content/docs/developer/templates/explanation/client-state.mdx

> This document describes client state management but contains critical inconsistencies with other documentation files regarding the state file location, format, and command syntax.

### Source Code Inaccuracies

1. **State file location and format** | Documented: `.cyan/generation.json` (lines 12-29, 62) | Actual: `.cyan_state.yaml` | Evidence: `content/docs/user/reference/cli-commands.mdx:60` states "This command uses the `.cyan_state.yaml` file"; `content/docs/user/how-to/update-project.mdx:27` states "Loads `.cyan_state.yaml`"; `content/docs/developer/templates/reference/project-structure.mdx:194` shows `.cyan_state.yaml` as the output file

2. **State file JSON structure** | Documented: JSON format with `version`, `template`, `pin`, `answers`, `generated` fields (lines 14-28) | Actual: YAML format with different structure | Evidence: `content/docs/developer/templates/explanation/determinism.mdx:48-61` shows the actual YAML structure with `templates:` containing `active`, `history`, `answers`, and `deterministic_states` fields

3. **Template state field structure** | Documented: `template.registry` field (line 83-84) | Actual: Not present in the actual state structure | Evidence: `content/docs/developer/templates/explanation/determinism.mdx:48-61` shows no `registry` field within template info

4. **Pin storage location** | Documented: Top-level `pin` field in state (lines 88-93) | Actual: `deterministic_states` nested under template history | Evidence: `content/docs/developer/templates/explanation/determinism.mdx:58-60` shows `deterministic_states` as nested object within history entries

5. **Command `cyanprint regenerate`** | Documented: `cyanprint regenerate ./my-project` (line 42) | Actual: No `regenerate` command exists | Evidence: `content/docs/user/reference/cli-commands.mdx` lists only `create`, `update`, `daemon`, `push` commands; `content/docs/contributor/repositories/iridium.mdx:53-78` lists same commands without `regenerate`

6. **`cyanprint update` with template argument** | Documented: `cyanprint update ./my-project myorg/template:2.0.0` (line 54) | Actual: Update command does not accept a template reference argument | Evidence: `content/docs/user/reference/cli-commands.mdx:63` shows `cyanprint update [PATH]` with no template argument; `content/docs/contributor/repositories/iridium.mdx:61` shows same

### Documentation Issues

1. **Inconsistent state file location across docs** | Problem: This document uses `.cyan/generation.json` while 3-way-merge.mdx uses `.cyan/` directory (lines 44-48) with `generation.json` AND `base/` subdirectory, while CLI reference and update-project docs use `.cyan_state.yaml` | Location: Lines 12, 62, 190 | Fix: Standardize to actual format (`.cyan_state.yaml`) across all documentation

2. **Inconsistent directory structure for base files** | Problem: This document doesn't mention the `.cyan/base/` directory for storing original generated files, but 3-way-merge.mdx does (lines 44-48) | Location: State Structure section | Fix: Either clarify that `.cyan/base/` exists separately or document the complete state structure

3. **State lifecycle diagram inaccurate** | Problem: Mermaid diagram (lines 117-132) shows `F[Write .cyan/generation.json]` which is incorrect file name | Location: Lines 117-132 | Fix: Update to show `.cyan_state.yaml`

4. **Missing reference to deterministic_states** | Problem: Document mentions `pin` field but doesn't explain the `deterministic_states` structure that actually stores deterministic values | Location: Pin section (lines 88-93) | Fix: Reference the actual deterministic_states mechanism or clarify relationship

5. **Registry field in template example** | Problem: Example shows `registry` field in template object (line 83-84) which doesn't appear in actual state file structure | Location: Lines 79-85 | Fix: Remove or verify this field exists

6. **Command examples in Mermaid use incorrect command** | Problem: Diagram shows `cyanprint create` and `cyanprint update` flow but refers to non-existent regenerate flow | Location: Lines 117-132 | Fix: Verify and update command flow to match actual CLI behavior

### Other Problems

1. **Confusion between two state mechanisms** | Problem: The documentation appears to conflate two different state storage mechanisms - `.cyan/generation.json` (this doc) vs `.cyan_state.yaml` (other docs) vs `.cyan/base/` (3-way-merge). This creates confusion about what actually exists. | Recommendation: Audit all documentation to establish canonical state file format and location, then update all references consistently

2. **Missing cross-reference to actual state file docs** | Problem: This document should cross-reference the determinism.mdx which shows the actual `.cyan_state.yaml` structure | Recommendation: Add explicit link to determinism.mdx or merge content

3. **Key storage explanation inconsistent with actual behavior** | Problem: States that answers are stored "by key" (line 97) but doesn't clarify that keys are actually stored in `answers` object within `history` array under template name | Recommendation: Update to match actual YAML structure from determinism.mdx

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 6     |
| Documentation Issues     | 6     |
| Other Problems           | 3     |

<!-- source: content/docs/developer/templates/explanation/container-paths.mdx -->

# 📄 File: content/docs/developer/templates/explanation/container-paths.mdx

> Document describes container paths but contains significant inaccuracies about actual container structure, volume mounts, and working directories.

### 🔴 Source Code Inaccuracies

1. **Container Structure - Wrong Paths**

   - Documented: `/workspace/` with `(output)` subdirectory, `/templates/` for template source, `/cyan/index.ts` for template code
   - Actual: Template files are at `/workspace/cyanprint/`, output work area is at `/workspace/area/`
   - Evidence: `boron/docker_executor/docker.go:216` - volume mounted at `/workspace/cyanprint`; `boron/docker_executor/docker.go:353` - session volume at `/workspace/area`; `boron/docker_executor/merger.go:147` - `ReadDir: "/workspace/cyanprint"`

2. **WORKDIR Statement**

   - Documented: `WORKDIR /workspace`
   - Actual: While the WORKDIR is `/workspace`, the actual template files are under `/workspace/cyanprint/`, not directly in `/workspace/`
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:13` - `WORKDIR /workspace` but the blob extracts to `/workspace/cyanprint` (line 14)

3. **Template Source Path**

   - Documented: `/templates/` is where template source files are placed (from blob)
   - Actual: Template files are placed at `/workspace/cyanprint/` not `/templates/`
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:14` - `CMD [ "tar", "-xzf", "/cyanprint/artifact/cyan.tar.gz", "-C", "/workspace/cyanprint", "--strip-components=1" ]`

4. **Output Path Mapping**

   - Documented: User output directory maps to `/workspace/output`
   - Actual: User output maps to `/workspace/area/` (with UUID subdirectories for processor isolation)
   - Evidence: `boron/docker_executor/docker.go:352-354` - write volume mounted at `/workspace/area`; `boron/docker_executor/merger.go:148` - `WriteDir: "/workspace/area/" + filePath.String()`

5. **Blob Dockerfile Example**

   - Documented: `COPY cyan/templates/ /templates/`
   - Actual: The blob.Dockerfile creates a tarball and extracts to `/workspace/cyanprint/`
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:8,12,14` - creates `/cyanprint/artifact/cyan.tar.gz` and extracts to `/workspace/cyanprint`

6. **root Property Documentation**

   - Documented: `root: 'templates'` -> `/templates/` in container, or simply 'templates' (relative to /workspace)
   - Actual: The `root` property is relative to the `readDir` which is `/workspace/cyanprint/`. In real templates, `root: 'template'` resolves to `/workspace/cyanprint/template/`
   - Evidence: `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:23-24` - `return path.resolve(this.readDir, g.root ?? '.')`; `boron/docker_executor/merger.go:147` - `ReadDir: "/workspace/cyanprint"`

7. **Path Summary Table**

   - Documented: `/workspace/output` as generated files location
   - Actual: `/workspace/area` is the work area (not `/workspace/output`)
   - Evidence: `boron/docker_executor/docker.go:353` - Target: `/workspace/area`

8. **Container Structure Diagram**
   - Documented: Shows `cyan/` directory with `index.ts` at root level
   - Actual: Template code (index.ts) is in the blob image and gets extracted to `/workspace/cyanprint/`, and the template container serves the config via HTTP API (port 5550)
   - Evidence: `helium/sdks/node/src/main.ts:112` - Template server runs on port 5550; blob extracts to `/workspace/cyanprint`

### 🟡 Documentation Issues

1. **Missing Dual Volume Architecture**

   - Problem: Documentation doesn't explain the read-only vs read-write volume separation
   - Location: Container Structure section
   - Fix: Add explanation that processors get `/workspace/cyanprint` (read-only) and `/workspace/area/<uuid>` (read-write)

2. **Incorrect Path Resolution Explanation**

   - Problem: Says relative paths resolve from `/workspace` but they actually resolve from `readDir` (which is `/workspace/cyanprint`)
   - Location: "Relative Paths" section
   - Fix: Change "Relative paths are resolved from `/workspace`" to "Relative paths are resolved from the read directory (`/workspace/cyanprint` for processors)"

3. **Outdated blob.Dockerfile Example**

   - Problem: Example shows simple COPY but actual implementation uses tar archives
   - Location: "Blob Image Paths" section
   - Fix: Update example to show actual tar-based blob structure used in production

4. **Missing Processor Isolation Context**

   - Problem: Doesn't mention that each processor writes to a unique UUID subdirectory under `/workspace/area/`
   - Location: Output Path section
   - Fix: Explain that processor outputs are isolated by UUID for safe parallel execution

5. **Ambiguous cyan/ Directory**
   - Problem: Shows `cyan/index.ts` in container structure but this is the SDK entry point, not a container path
   - Location: Container Structure diagram
   - Fix: Remove `cyan/index.ts` from container structure or clarify it's the development structure, not runtime container path

### 🟠 Other Problems

1. **Confusing Templates vs Cyanprint Terminology**

   - Problem: Documentation uses `/templates/` as a path but the actual path is `/workspace/cyanprint/`
   - Recommendation: Either update all references to use `/workspace/cyanprint/` or clearly explain that "cyanprint" is the internal name for the template volume

2. **Missing Plugin Volume Mount Info**

   - Problem: Documentation doesn't explain that plugins only get `/workspace/area` (no `/workspace/cyanprint`)
   - Recommendation: Add a note about different container types having different volume mounts

3. **Debugging Commands Need Update**
   - Problem: `ls -la /templates` won't work since templates are at `/workspace/cyanprint`
   - Location: "Debugging Paths" section
   - Recommendation: Change to `ls -la /workspace/cyanprint`

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 8     |
| 🟡       | 5     |
| 🟠       | 3     |

<!-- source: content/docs/developer/templates/explanation/cyan-object.mdx -->

# 📄 File: content/docs/developer/templates/explanation/cyan-object.mdx

> Documentation about the Cyan configuration object returned by templates. Overall accurate but contains minor issues with plugin names that may not exist and example code parameter ordering.

### 🔴 Source Code Inaccuracies

1. **i.text parameter order**: Documented: `await i.text('Name?', 'project.name', '...')` | Actual: `i.text(q: string, id: string, help?: string | null)` - The first parameter is the question message, second is id, third is optional help text. The document example shows the correct order but the third parameter '...' is vague and should probably be a more meaningful help text or omitted.

   - Evidence: helium/sdks/node/src/domain/core/inquirer.ts:20-22

2. **Plugin names cyan/init-git and cyan/npm-install**: Documented: Plugin examples use `cyan/init-git` and `cyan/npm-install` | Actual: No source code evidence found for these plugins existing in any repository (boron, iridium, zinc, helium, argon). These appear to be example/placeholder names.
   - Evidence: Grep searches across all source paths found no matches for these plugin implementations

### 🟡 Documentation Issues

1. **Vague third parameter in example**: Problem: The example `await i.text('Name?', 'project.name', '...')` uses '...' as the third parameter without explaining what it represents | Location: Line 160 | Fix: Either remove the third parameter or replace with a meaningful help text example like 'Enter the project name'

2. **Plugin names are examples**: Problem: The plugin names `cyan/init-git` and `cyan/npm-install` are used as if they are real plugins, but no evidence exists they are implemented | Location: Lines 195-196 | Fix: Add a note clarifying these are example plugin names (similar to what's done in content/docs/developer/templates/reference/sdk/cyan-config.mdx:119)

### 🟠 Other Problems

1. **Missing import in example code**: The code example at lines 157-175 imports `StartTemplateWithLambda` and `GlobType` but the GlobType isn't used in the example. Consider removing unused imports or showing a fuller example that uses GlobType.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 2     |
| 🟠       | 1     |

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
| -------- | ----- |
| Red      | 2     |
| Yellow   | 4     |
| Orange   | 3     |

<!-- source: content/docs/developer/templates/explanation/determinism.mdx -->

# 📄 File: content/docs/developer/templates/explanation/determinism.mdx

> Documentation explaining determinism in CyanPrint templates. The document correctly describes the `IDeterminism` interface with `d.get(key, origin)` pattern and the `.cyan_state.yaml` state file format. However, there are inconsistencies with other documentation files and the CLI command reference.

### 🔴 Source Code Inaccuracies

1. **Update command syntax with template reference** | Documented: `cyanprint update ./my-project myorg/template:2.0.0` (line 37) | Actual: CLI reference shows `cyanprint update [PATH]` without template reference argument | Evidence: `content/docs/user/reference/cli-commands.mdx:62-64` shows only `cyanprint update [PATH]` with no template reference; `content/docs/user/how-to/update-project.mdx:9-17` shows only path argument, no template reference

### 🟡 Documentation Issues

1. **Cross-document inconsistency with pin-determinism.mdx** | Problem: This document correctly shows `d.get(key, origin)` pattern, but `content/docs/developer/templates/how-to/pin-determinism.mdx` documents non-existent methods `d.uuid()`, `d.timestamp()`, `d.seq()` (lines 17-18, 47-53, 60-78) | Location: Lines 65-77 | Fix: The pin-determinism.mdx file needs to be updated to use the correct `d.get(key, origin)` pattern, or the SDK needs to document these methods if they exist

2. **Cross-document inconsistency with 3-way-merge.mdx** | Problem: `content/docs/developer/templates/explanation/3-way-merge.mdx` uses `d.uuid()` method (lines 169, 172) which is not documented in SDK types | Location: This document is consistent with SDK but inconsistent with sibling docs | Fix: Update 3-way-merge.mdx to use `d.get('key', () => crypto.randomUUID())` pattern

3. **Update command dry-run option not documented in CLI reference** | Problem: This document and 3-way-merge.mdx show `cyanprint update ./my-project --dry-run` but CLI reference doesn't document this option | Location: Line 190 in 3-way-merge.mdx | Fix: Either add `--dry-run` to CLI reference or remove from example

4. **State file format differs from 3-way-merge.mdx** | Problem: This document correctly shows `.cyan_state.yaml` format (line 49), but 3-way-merge.mdx shows `.cyan/generation.json` and `.cyan/base/` directory (lines 43-49) | Location: Line 49 | Fix: Update 3-way-merge.mdx to use correct `.cyan_state.yaml` format

### 🟠 Other Problems

1. **Related link to pin-determinism may confuse readers** | Problem: The "Pin Determinism" how-to guide linked at line 212 uses completely different API (`d.uuid()`, `d.timestamp()`, `d.seq()`) which contradicts this document's `d.get()` pattern | Recommendation: Either update pin-determinism.mdx to match this document's API or add a note explaining version differences

2. **Mermaid diagram uses internal term** | Problem: Diagram references "deterministic_states" but doesn't explain what it is before the diagram | Location: Lines 167-174 | Recommendation: The diagram is technically correct but could be clearer by referencing the earlier YAML example

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 4     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/explanation/docker-vs-cyan-registry.mdx -->

# File: content/docs/developer/templates/explanation/docker-vs-cyan-registry.mdx

> Document comparing Docker Registry and CyanPrint Registry for template publishing. Contains several inaccuracies regarding CLI commands and registry URLs.

### Source Code Inaccuracies

1. **Non-existent CLI command `cyanprint search`**

   - Documented: `cyanprint search nodejs` (line 135)
   - Actual: No `search` command exists in the CLI. The commands.rs file only defines: `Push`, `Create`, `Update`, `Daemon` (iridium/cyanprint/src/commands.rs:28-98)
   - Evidence: The CLI does not have a search command. Template discovery is via web UI only at cyanprint.dev/registry

2. **Non-existent CLI command `cyanprint list`**

   - Documented: `cyanprint list myorg/` (referenced indirectly as a way to list templates)
   - Actual: No `list` command exists in the CLI
   - Evidence: iridium/cyanprint/src/commands.rs only defines Push, Create, Update, Daemon commands

3. **Non-existent CLI command `cyanprint info`**

   - Documented: `cyanprint info myorg/my-template:1.0.0` (referenced indirectly as a verification method)
   - Actual: No `info` command exists in the CLI
   - Evidence: iridium/cyanprint/src/commands.rs only defines Push, Create, Update, Daemon commands

4. **Incorrect CyanPrint Registry URL**
   - Documented: `registry.cyanprint.io` (line 147)
   - Actual: `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`
   - Evidence: iridium/cyanprint/src/commands.rs:13 - default_value = "https://api.zinc.sulfone.raichu.cluster.atomi.cloud"

### Documentation Issues

1. **Misleading CLI workflow example**

   - Problem: The "Using" section (lines 132-139) shows `cyanprint search nodejs` which does not exist
   - Location: Lines 132-139
   - Fix: Remove `cyanprint search` example. Replace with: "Visit cyanprint.dev/registry to search for templates" or use the API directly

2. **Non-existent registry URL reference**

   - Problem: Documents `registry.cyanprint.io` as "CyanPrint Cloud" but this URL does not exist in source code
   - Location: Lines 143-149 "CyanPrint Cloud" section
   - Fix: Update to use actual registry URL `https://api.zinc.sulfone.raichu.cluster.atomi.cloud` or remove specific URL and reference environment variable `CYANPRINT_REGISTRY`

3. **Inconsistent terminology for template images**
   - Problem: Documentation refers to "Template Image" and "Blob Image" but the actual CLI parameters use `template_image`/`template_tag` and `blob_image`/`blob_tag`. The e2e script uses different naming (`-script` suffix instead of no suffix)
   - Location: Lines 25-26, 113-129
   - Fix: Ensure terminology is consistent with actual code. The e2e/publish-template.sh uses `-blob` and `-script` suffixes

### Other Problems

1. **Missing `--token` flag position in push command**

   - Problem: The example shows `cyanprint push template --token $CYAN_TOKEN` but the actual CLI structure has `--token` as a global push option, not a subcommand option
   - Recommendation: Clarify that `--token` is a PushArgs option, not a template subcommand option. Correct usage: `cyanprint push --token $CYAN_TOKEN template ...`

2. **Dockerfile naming inconsistency**
   - Problem: Documentation references `cyan/template.Dockerfile` and `cyan/blob.Dockerfile` but the e2e script uses `./blob.Dockerfile` and `./cyan/Dockerfile`
   - Location: Lines 115-123
   - Recommendation: Verify correct Dockerfile paths and update examples to match actual project structure

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 4     |
| Documentation Issues     | 3     |
| Other Problems           | 2     |

<!-- source: content/docs/developer/templates/explanation/index.mdx -->

# File: content/docs/developer/templates/explanation/index.mdx

> This is an index page providing an overview of template explanation topics with links to detailed pages. The page serves as a navigation hub for conceptual documentation about CyanPrint templates.

### Source Code Inaccuracies

(None found - all claims verified against source code)

### Documentation Issues

(None found - the page is an index with navigation links, all of which resolve to existing files)

### Other Problems

(None found)

## Verification Details

**Verified Claims:**

1. **`var__name__` syntax** (line 48-50): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:24` - The default processor uses Eta templating with `tags: ['var__', '__']` as the default delimiters.

2. **3-way merge** (line 54): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/algorithms/02-three-way-merge.md` and implementation in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/fs/merger.rs` - The system uses git2 library for Git-like 3-way merge combining base, current, and incoming states.

3. **Determinism/Pin system** (line 58): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/concepts/04-deterministic-states.md` - Deterministic states are stored alongside answers in `.cyan_state.yaml` and enable reproducible generation.

4. **Processors vs Plugins** (line 62): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/features/06-plugin-lifecycle.md` - Processors transform files during generation, plugins execute sequential post-generation actions.

5. **Client State** (line 21): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/state/services.rs` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/operations/composition/state.rs` - State is managed via `CompositionState` struct with `shared_answers` and `shared_deterministic_states`.

6. **All linked pages exist**: Verified all 9 links resolve to existing `.mdx` files in the same directory.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 0     |
| Documentation Issues     | 0     |
| Other Problems           | 0     |

<!-- source: content/docs/developer/templates/explanation/processors-vs-plugins.mdx -->

# File: content/docs/developer/templates/explanation/processors-vs-plugins.mdx

> Documentation explains the conceptual difference between processors and plugins in CyanPrint. Most content is accurate but interface names are incorrect and plugin names are examples not actual implementations.

### Source Code Inaccuracies

1. **Interface names incorrect**: Documented says "Implement `IProcessor` interface" and "Implement `IPlugin` interface" (lines 184, 195) | Actual: Interfaces are `ICyanProcessor` and `ICyanPlugin` | helium/sdks/node/src/domain/core/cyan_script.ts:15-21
2. **Plugin names are examples, not actual plugins**: Documented shows `cyan/init-git` and `cyan/npm-install` as real plugin names (lines 103, 107, 161, 172) | Actual: No source code evidence these plugins exist; only test plugins `plugin1` and `plugin2` found in iridium/e2e | iridium/e2e/plugin1/cyan.yaml, iridium/e2e/plugin2/cyan.yaml

### Documentation Issues

1. **Missing clarification for example plugins**: Problem: Plugin names used throughout as if real but no implementation exists | Location: Lines 96-112, 156-175 | Fix: Add a note similar to content/docs/developer/templates/reference/sdk/cyan-config.mdx:119 clarifying "The plugin names shown (e.g., `cyan/init-git`, `cyan/npm-install`) are examples. Actual plugin names depend on your Cyan registry configuration."
2. **Interface names need correction**: Problem: Wrong interface names referenced | Location: Lines 184, 195 | Fix: Change `IProcessor` to `ICyanProcessor` and `IPlugin` to `ICyanPlugin`
3. **Link text could be more specific**: Problem: Link text says "Processor Development" and "Plugin Development" but links to index pages | Location: Lines 188, 199, 216-217 | Fix: Consider making link text clearer or ensure target pages exist and are appropriate

### Other Problems

1. **Mermaid diagram shows linear plugin execution**: Problem: The diagram at lines 89-94 shows plugins executing sequentially (Plugin 1 -> Plugin 2 -> Plugin 3) | Recommendation: This is accurate per the execution order documentation; no fix needed but could reference the execution order docs for more detail

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 2     |
| Documentation Issues     | 3     |
| Other Problems           | 1     |

<!-- source: content/docs/developer/templates/how-to/add-plugins.mdx -->

# 📄 File: content/docs/developer/templates/how-to/add-plugins.mdx

> How-to guide for adding plugins to templates. The code examples use correct TypeScript/JavaScript syntax and the interface definitions (CyanPlugin with name and config) match the SDK. However, the specific plugin names (cyan/init-git, cyan/npm-install) cannot be verified against source code - they appear to be example/hypothetical plugins rather than confirmed built-in plugins.

### 🔴 Source Code Inaccuracies

1. **Plugin names `cyan/init-git` and `cyan/npm-install` cannot be verified**

   - Documented: `cyan/init-git` and `cyan/npm-install` as "available plugins"
   - Actual: No evidence found in source code (helium, iridium, zinc, boron, argon) that these plugins exist as built-in or official plugins
   - Evidence: Searched all source directories; the SDK exports types but no plugin registry or built-in plugins found. The iridium registry stores plugin metadata (username, name, version) but no actual plugin implementations.

2. **Config options for init-git plugin are unverified**

   - Documented: `commitMessage` and `branch` config options for `cyan/init-git`
   - Actual: Cannot verify these config options exist; no plugin implementation found
   - Evidence: No init-git plugin source code found in any of the source paths

3. **Config options for npm-install plugin are unverified**
   - Documented: `packageManager` (npm, yarn, pnpm, bun) and `dev` config options for `cyan/npm-install`
   - Actual: Cannot verify these config options exist; no plugin implementation found
   - Evidence: No npm-install plugin source code found in any of the source paths

### 🟡 Documentation Issues

1. **Misleading presentation of example plugins as "Available Plugins"**

   - Problem: The section header "Available Plugins" implies these are real, available plugins in the Cyan ecosystem. The plugins listed (cyan/init-git, cyan/npm-install) appear to be example/hypothetical plugins.
   - Location: Lines 50-75 (Available Plugins section)
   - Fix: Change section title to "Example Plugins" or add a disclaimer that these are examples. Alternatively, add a note explaining that plugin names and config options depend on your Cyan registry configuration.

2. **Link to Plugin Development is broken**

   - Problem: The Callout at line 205 links to `/docs/developer/plugins` which should be correct based on the instructions
   - Location: Line 205-206
   - Fix: Link appears correct per instructions, but should verify the actual path exists

3. **"Custom Plugins" section shows hypothetical plugin**

   - Problem: The example `myorg/setup-tooling` plugin with config options like `installDeps`, `runLint`, `runFormat` is presented as if it's a real plugin pattern
   - Location: Lines 77-87
   - Fix: Clarify this is a hypothetical example showing the structure for any custom plugin

4. **YAML vs TypeScript inconsistency in plugin declaration**
   - Problem: Documentation shows plugins can be declared in both cyan.yaml (lines 27-32) and in TypeScript template code (lines 36-48). However, the cyan.yaml reference in templates/reference/cyan-yaml.mdx shows plugins as simple string references (e.g., `- cyan/init-git`), not objects with config.
   - Location: Lines 27-32 show plugins with config in YAML; compare with cyan-yaml.mdx which shows simple string format
   - Fix: Clarify that cyan.yaml declares plugin dependencies (just the plugin reference), while the TypeScript code provides the runtime config. Or verify if both patterns are valid.

### 🟠 Other Problems

1. **No verification possible for plugin execution order guarantees**

   - Problem: The documentation implies plugins execute in order (comments say "First:", "Second:", "Third:"), but no source code verification was possible for this behavior
   - Recommendation: This is consistent with other documentation (execution-order.mdx confirms sequential execution), so likely accurate

2. **Callout mentions "Plugin Development" link without clarification**
   - Problem: The callout says "See Plugin Development for creating custom plugins" but doesn't clarify that creating custom plugins requires implementing the IPlugin interface and publishing to a registry
   - Recommendation: Consider adding a brief note about what plugin development entails

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 4     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/how-to/ask-checkbox.mdx -->

# 📄 File: content/docs/developer/templates/how-to/ask-checkbox.mdx

> This how-to guide documents checkbox questions but contains significant inaccuracies. The documentation claims that `CheckboxQ` supports `default` and `validate` properties, but the actual SDK implementation does not support these features.

### 🔴 Source Code Inaccuracies

1. **Documented**: `CheckboxQ` has `default: ['ESLint']` property | **Actual**: `CheckboxQ` does NOT have a `default` property | Evidence: `helium/sdks/node/src/domain/core/question.ts:11-19` - `CheckboxQ` interface only has `type`, `id`, `message`, `desc`, `validate`, and `options`. No `default` field exists. Python SDK (`helium/sdks/python/cyanprintsdk/domain/core/question.py:7-14`) also confirms no `default` property.

2. **Documented**: `CheckboxQ` has `validate: (selected) => { ... }` function property | **Actual**: `CheckboxQ` has `validate?: null` (explicitly null, not a function) | Evidence: `helium/sdks/node/src/domain/core/question.ts:16` - `validate?: null`. Python SDK (`helium/sdks/python/cyanprintsdk/domain/core/question.py:12`) shows `validate: None = None`. The comment on line 13 indicates validation was considered but not implemented.

3. **Documented**: "With Defaults" code example shows `default: ['ESLint', 'Prettier']` | **Actual**: This property does not exist on CheckboxQ | Evidence: Same as above - no `default` property in any SDK implementation.

4. **Documented**: "With Validation" code example shows custom `validate` function for checkbox | **Actual**: Checkbox validation is not supported | Evidence: Same as above - `validate` is typed as `null`, not a function.

### 🟡 Documentation Issues

1. **Problem**: Documentation contradicts the official IInquirer Reference page | **Location**: Entire file | **Fix**: The IInquirer reference (`content/docs/developer/templates/reference/sdk/inquirer.mdx:270-272`) correctly states: "Select, Checkbox, and Confirm do not support custom validation functions. Select and Checkbox also do not support default values." This how-to guide should be updated to match.

2. **Problem**: Misleading code examples | **Location**: Lines 24-37 (Object Form with options), Lines 92-106 (With Validation), Lines 111-119 (With Defaults) | **Fix**: Remove examples showing `default` and `validate` for checkbox. Replace with accurate examples.

3. **Problem**: Missing limitation documentation | **Location**: Entire file | **Fix**: Add a clear callout/warning explaining that checkbox questions do not support `default` values or custom `validate` functions.

### 🟠 Other Problems

1. **Problem**: The type definition reference link points to correct documentation, but this creates inconsistency | **Recommendation**: Either update this how-to to match the reference documentation, or if checkbox default/validation support is planned, clearly mark these as "coming soon" features.

2. **Problem**: Shorthand form parameter name inconsistency | **Recommendation**: The shorthand form uses `help` in the IInquirer interface (`helium/sdks/node/src/domain/core/inquirer.ts:6`) but the documentation and object form use `desc`. This is consistent across the docs but developers should be aware of this mapping.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/how-to/ask-confirm.mdx -->

# 📄 File: content/docs/developer/templates/how-to/ask-confirm.mdx

> Documentation for using confirm questions in Cyanprint templates. Covers the shorthand and object forms of the `i.confirm()` method, return type, and common patterns.

### 🔴 Source Code Inaccuracies

1. **Shorthand form signature mismatch** | Documented: `i.confirm('Message', 'project.typescript', 'Add TypeScript config')` (message, key, description) | Actual: `confirm(q: string, id: string, help?: string | null)` (message, id, help) | helium/sdks/node/src/domain/core/inquirer.ts:10 and helium/sdks/node/src/domain/service/stateless_inquirer.ts:48-60

   - The documentation uses the comment "Key" for the second parameter, which matches the actual `id` parameter, but the third parameter comment says "Description" when the actual parameter is named `help` (help text). While functionally equivalent, the naming differs.

2. **Related link - "Ask Select" page does not exist** | Documented: `[Ask Select](/docs/developer/templates/reference/sdk/inquirer#select)` | Actual: No dedicated "Ask Select" how-to page exists. The link correctly points to the fragment on the inquirer reference page, but the label implies a separate how-to guide that doesn't exist.

### 🟡 Documentation Issues

1. **Inconsistent comment naming in shorthand form** | Problem: Line 16 says `// Key` for the `id` parameter, which is correct, but could be clearer as `// id (key)` for consistency with the reference documentation. | Location: Line 16 | Fix: Change comment to `// id (key)` for consistency.

2. **Object form property naming** | Problem: The documentation uses `desc` property in the object form which is correct per source (`desc?: string | null`), but doesn't mention that `errorMessage` is also available for ConfirmQ. | Location: Object form examples (lines 24-30, 106-112) | Recommendation: Consider mentioning `errorMessage` property for completeness, though not strictly necessary for a how-to guide.

### 🟠 Other Problems

1. **Example uses `files.push()` pattern which may be confusing** | The "In Template Logic" example (lines 37-51) uses `files.push()` which isn't standard Cyan template API - templates typically return a `Cyan` object with `processors` array containing `files`. | Recommendation: The example at lines 56-80 showing the full return structure is better; consider removing or clarifying the `files.push()` example.

2. **GlobType.Template and GlobType.Copy usage not explained** | The examples use `GlobType.Template` and `GlobType.Copy` without explaining the difference in this how-to guide. | Recommendation: Add a brief note or link to documentation about GlobType differences.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 2     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/how-to/ask-date.mdx -->

# 📄 File: content/docs/developer/templates/how-to/ask-date.mdx

> Documentation for using dateSelect questions in templates. Contains significant inaccuracies regarding the return type of dateSelect.

### 🔴 Source Code Inaccuracies

1. **Return type of dateSelect**

   - Documented: Returns `Date` object (line 18: `// Returns: Date object`)
   - Actual: Returns `string`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:24-26` shows `dateSelect(q: DateQ): Promise<string>` and `dateSelect(q: string, id: string, help?: string | null): Promise<string>`

2. **Date method usage on result**

   - Documented: Using Date methods like `.toISOString()`, `.getTime()`, `.getFullYear()`, `.getMonth()` on the returned value (lines 41, 47-48, 71, 125-126)
   - Actual: The returned value is a string, not a Date object, so these methods would fail
   - Evidence: Same as above - return type is `Promise<string>`

3. **Validation function parameter type**

   - Documented: `validate: (date) => { if (date < new Date()) {...} }` treating parameter as Date (lines 107-112)
   - Actual: `validate?: (input: string) => string | null` - the parameter is a string
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:37`

4. **Date calculations using .getTime()**

   - Documented: `endDate.getTime() - startDate.getTime()` (line 71)
   - Actual: Since the return type is string, you must convert to Date first
   - Evidence: Test file shows proper usage: `const date = new Date(x)` then operations on the Date object

5. **Date formatting using .toISOString()**
   - Documented: `deadline.toISOString().split('T')[0]` (line 41)
   - Actual: Result is already a string; cannot call .toISOString() on it
   - Evidence: Return type is `Promise<string>`

### 🟡 Documentation Issues

1. **Missing conversion step** | Throughout document | Should show that string result needs to be converted to Date for manipulations: `const date = new Date(dateString)`

2. **Incorrect code examples** | Lines 37-51, 66-80, 86-97, 101-114, 118-135 | All code examples assume Date return type but should work with string

### 🟠 Other Problems

1. **Inconsistency with test file** | The actual test file (`template_test.ts`) shows the correct pattern: validation receives a string and converts it to Date with `new Date(x)`. The documentation should follow this pattern.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 5     |
| 🟡       | 2     |
| 🟠       | 1     |

<!-- source: content/docs/developer/templates/how-to/ask-password.mdx -->

# 📄 File: content/docs/developer/templates/how-to/ask-password.mdx

> Documentation for asking password questions with hidden input. The code examples and API usage are generally accurate, but there is a minor issue with the `confirmation` property description.

### 🔴 Source Code Inaccuracies

1. **confirmation property type** | Documented as `confirmation: true` (implied boolean) which is correct in this file, but the linked [IInquirer Reference](/docs/developer/templates/reference/sdk/inquirer) table incorrectly states `confirmation` is type `string` with description "Confirmation prompt text" | Actual: `confirmation?: boolean | null` - it's a boolean flag, not a string. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:51`

### 🟡 Documentation Issues

1. **Inconsistent confirmation documentation across files** | The `ask-password.mdx` file correctly shows `confirmation: true` as a boolean, but the linked `inquirer.mdx` reference incorrectly documents it as `string` type in the Type-Specific Properties table (line 266) | Location: `content/docs/developer/templates/reference/sdk/inquirer.mdx:266` | Fix: Change table entry from `| confirmation | string | Password | Confirmation prompt text |` to `| confirmation | boolean | Password | Enable password confirmation prompt |`

### 🟠 Other Problems

(None found)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 1     |
| 🟠       | 0     |

<!-- source: content/docs/developer/templates/how-to/compose-templates.mdx -->

# File: content/docs/developer/templates/how-to/compose-templates.mdx

> Documentation for template composition feature. The document accurately describes the `templates` key in cyan.yaml, key namespacing patterns, and SDK usage. All SDK imports, function signatures, and CLI references are correct.

### Source Code Inaccuracies

(for each: Documented | Actual | file:line evidence)

None found. All documented APIs and patterns match the SDK and configuration format:

- `templates` key in cyan.yaml is valid (cyan-yaml.mdx lines 134-148, task-spec.md line 104)
- `StartTemplateWithLambda` is correctly exported from `@atomicloud/cyan-sdk` (SDK index.mdx line 22, task-spec.md line 159)
- `GlobType` enum is correctly documented (types.mdx lines 12-21, values: Template = 0, Copy = 1)
- `i.text(q, id, help)` shorthand form is correct (inquirer.mdx lines 39-48)
- `cyan/default` processor name is correct (used throughout SDK docs)
- The return type with `processors` and `plugins` arrays matches the `Cyan` interface (types.mdx lines 68-76)

### Documentation Issues

(for each: Problem | Location | Fix)

1. **Missing `plugins` property in return object** | Lines 112-125 (Composition in Code example) | The code example returns only `{ processors: [...] }` but the `Cyan` interface requires both `processors` and `plugins`. The `plugins` property is missing. Add `plugins: []` to the return object for completeness.

2. **File conflict handling described but not implemented in example** | Lines 89-95 (File Conflicts section) | The section describes three strategies (Override, Merge, Fail) but provides no code example showing how to handle these. Consider adding a brief code example or noting that override is the default behavior.

### Other Problems

(for each: Problem | Recommendation)

1. **Code example line 106-109 uses shorthand form with unconventional argument names** | The `i.text()` call uses `'Project name from base?', 'base-template.project.name', '...'` where `'...'` is a placeholder. While valid, this could be clearer. Consider using a proper description like `'Name from base template'` instead of `'...'`.

2. **Microservice example version numbers are inconsistent** | Lines 139-146 | The example shows version numbers like `company/node-base:2`, `company/docker:3`, etc. without context. Consider noting that versions are auto-incrementing registry integers, not semantic versions (as documented in cyan-yaml.mdx lines 150-158).

3. **Missing link verification note** | All related links were verified:
   - `/docs/developer/templates/how-to/use-keys` - EXISTS (use-keys.mdx)
   - `/docs/developer/templates/explanation/3-way-merge` - EXISTS (3-way-merge.mdx)
   - `/docs/developer/templates/explanation/docker-vs-cyan-registry` - EXISTS (per explanation/index.mdx line 27)

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 0     |
| Documentation Issues     | 2     |
| Other Problems           | 3     |

<!-- source: content/docs/developer/templates/how-to/conditional-files.mdx -->

# File: content/docs/developer/templates/how-to/conditional-files.mdx

> This how-to guide explains conditional file inclusion in templates. The code examples and API usage are accurate, but there is one significant inaccuracy regarding root path explanation.

### Source Code Inaccuracies

1. **Incorrect explanation of root paths** | Documented: "Note that `root` paths are relative to the `cyan/` directory in your template package" (line 125) | Actual: The `root` property specifies paths **inside the container**, not relative to the `cyan/` directory in the source package. According to `container-paths.mdx` (lines 38-48), `root` refers to container paths that are populated by the blob.Dockerfile's COPY commands. The blob.Dockerfile copies files FROM `cyan/templates/` TO `/templates/` (or similar) in the container, and the `root` property references those container paths. | Evidence: content/docs/developer/templates/explanation/container-paths.mdx:38-48, 52-68

### Documentation Issues

1. **Inconsistency in directory structure convention** | Lines 127-151 | The document shows `cyan/templates/` (plural) but `project-structure.mdx` uses `template/` (singular) at root level, while `02-adding-variables.mdx` also uses `template/` (singular). The code examples use `root: 'templates/base'` etc., but the note says paths are relative to `cyan/` directory, which conflicts with container-paths.mdx. | Fix: Update the directory structure note to clarify that: (1) template files can be organized in any directory structure in the source repo, (2) the blob.Dockerfile controls where they end up in the container, and (3) `root` references the container path, not the source path.

2. **Directory structure example may not match actual root values** | Lines 127-151 | Shows `cyan/templates/base/`, `cyan/templates/typescript/`, etc., but the code examples use `root: 'templates/base'`. If using standard blob.Dockerfile that copies `cyan/templates/` to `/templates/`, the root should be `/templates/base` or `templates/base` (relative to /workspace), not referencing the `cyan/` source directory. | Fix: Remove the mention of `cyan/` directory and show the container directory structure instead.

### Other Problems

1. **Code examples use relative paths but container-paths.mdx recommends absolute** | Lines 18, 22, 66, 76-81, etc. | All examples use `root: 'templates/base'` (relative) but container-paths.mdx:106-108 recommends using absolute paths like `/templates` to avoid confusion. This is not wrong per se, but creates inconsistency across documentation. | Recommendation: Either update all examples to use absolute paths (`/templates/base`) for consistency with container-paths.mdx, or add a note explaining that relative paths work but absolute paths are clearer.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 1     |
| Documentation Issues     | 2     |
| Other Problems           | 1     |

<!-- source: content/docs/developer/templates/how-to/default-values.mdx -->

# 📄 File: content/docs/developer/templates/how-to/default-values.mdx

> This document describes how to set default values for question types. Multiple cross-document inconsistencies were found regarding which types support defaults, and the return type of `dateSelect()`.

### 🔴 Source Code Inaccuracies

1. **Checkbox `default` support contradiction**

   - Documented: Line 87 states "`select()` and `checkbox()` question types do **not** support the `default` property"
   - Actual: `content/docs/developer/templates/how-to/ask-checkbox.mdx` lines 31 and 117 show `checkbox()` WITH `default` property: `default: ['ESLint']` and `default: ['ESLint', 'Prettier']`
   - Evidence: The reference docs in `types.mdx` lines 206-213 show `CheckboxQ` interface WITHOUT `default` property, and `inquirer.mdx` line 271 confirms "Select and Checkbox also do not support default values"
   - The `ask-checkbox.mdx` documentation is incorrect and should be fixed, OR the `default-values.mdx` statement is incorrect and needs updating

2. **Checkbox `validate` support contradiction**
   - Documented: Line 171 states "Only `text()`, `confirm()`, and `dateSelect()` support defaults; `select()` and `checkbox()` do not"
   - Actual: `ask-checkbox.mdx` lines 32-36 and 99-105 show `checkbox()` WITH `validate` property
   - Evidence: `types.mdx` lines 206-213 show `CheckboxQ` interface with `validate?: null`, meaning validate is NOT supported. `inquirer.mdx` line 271 confirms "Select, Checkbox, and Confirm do not support custom validation functions"
   - The `ask-checkbox.mdx` documentation is incorrect about validate support

### 🟡 Documentation Issues

1. **`dateSelect()` return type inconsistency**

   - Problem: `default-values.mdx` line 83 states "startDate is a string, e.g., '2024-01-15'", but `ask-date.mdx` line 18 states "// Returns: Date object" and shows code calling `.toISOString()` on the result (lines 41, 75-76)
   - Location: Lines 73-84 and 116
   - Fix: Need to reconcile with `ask-date.mdx` which says return type is Date. The `inquirer.mdx` line 227 confirms "dateSelect() returns a string in ISO date format". The `default-values.mdx` documentation appears correct; `ask-date.mdx` needs fixing.

2. **Shorthand form comment is misleading**

   - Problem: Line 15 shows "Shorthand - no default support" but this could be clearer - shorthand forms simply don't have a parameter for default, they don't actively prevent defaults
   - Location: Lines 14-17
   - Fix: Clarify that shorthand forms don't have a parameter for default values; use object form to specify defaults

3. **Missing return type annotation for Confirm**
   - Problem: Line 67 shows confirm example without return type annotation, making it less clear what the default returns
   - Location: Lines 61-69
   - Fix: Add comment showing return type, e.g., "// Returns: boolean"

### 🟠 Other Problems

1. **Inconsistent code style for return type comments**

   - Problem: Some examples show return type comments (lines 83, 116), others do not (lines 67)
   - Recommendation: Be consistent about showing return types in code examples

2. **Best Practices section could be clearer about validate support**
   - Problem: Line 171 states limits on default support but doesn't mention validate support limits which is related
   - Recommendation: Add note about validate function support: only `text()`, `password()`, and `dateSelect()` support custom validation

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/how-to/index.mdx -->

# 📄 File: content/docs/developer/templates/how-to/index.mdx

> This is an index/navigation page that lists and categorizes the how-to guides for template development. All linked pages exist and are properly organized. No CLI commands, code references, or API descriptions requiring source code verification were found.

### 🔴 Source Code Inaccuracies

None - This index page contains only navigation links and descriptions, no code or CLI commands to verify.

### 🟡 Documentation Issues

None - All linked guides exist and the descriptions accurately reflect their content.

### 🟠 Other Problems

None - The index page is well-organized with clear categories (Question Types, Input Handling, Template Features, Extensions, Publishing) and includes a useful Quick Reference table.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 0     |
| 🟠       | 0     |

<!-- source: content/docs/developer/templates/how-to/pass-images-binaries.mdx -->

# 📄 File: content/docs/developer/templates/how-to/pass-images-binaries.mdx

> Document explains how to handle binary files in templates using GlobType.Copy vs GlobType.Template. All technical claims verified against source code.

### 🔴 Source Code Inaccuracies

(None found)

### 🟡 Documentation Issues

1. **Link path inconsistency** | Line 147 | The link `/docs/developer/templates/tutorials/03-changing-glob` should be `/docs/developer/templates/how-to/changing-glob` - but this is actually correct as verified by the file existing at `tutorials/03-changing-glob.mdx`. No issue.

### 🟠 Other Problems

(None found)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 0     |
| 🟠       | 0     |

## Verification Details

**Verified Claims:**

1. `GlobType.Template` and `GlobType.Copy` enum values - Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:4-7`
2. `StartTemplateWithLambda` function import from `@atomicloud/cyan-sdk` - Confirmed in multiple e2e templates in iridium
3. `var__` pattern syntax for variable substitution - Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:24` and template files
4. `cyan/default` processor name - Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md:43,51,79`
5. File configuration structure (root, glob, exclude, type) - Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:10-15`

**Code Examples Verified:**

- All code examples match the actual SDK usage patterns found in iridium e2e tests
- The signature `StartTemplateWithLambda(async (i, d) => {...})` matches real usage (though `i` and `d` are typically typed as `IInquirer` and `IDeterminism`)
- The processor configuration structure with `name`, `files`, and `config` is accurate

**Links Verified:**

- `/docs/developer/templates/tutorials/03-changing-glob` - File exists
- `/docs/developer/templates/reference/sdk/globbing` - File exists
- `/docs/developer/templates/how-to/conditional-files` - File exists
<!-- source: content/docs/developer/templates/how-to/pin-determinism.mdx -->

# File: content/docs/developer/templates/how-to/pin-determinism.mdx

> This document documents API methods (`d.uuid()`, `d.timestamp()`, `d.seq()`) that do not exist in the SDK. The actual IDeterminism interface only provides `d.get(key, origin)`. Additionally, there are state file inconsistencies.

### Source Code Inaccuracies

1. **Non-existent method `d.uuid()`** | Documented: `d.uuid()` returns deterministic UUID (lines 17, 49, 61, 95) | Actual: IDeterminism interface only has `get(key: string, origin: () => string): string` | Evidence: content/docs/developer/templates/reference/sdk/types.mdx lines 149-156 shows the actual interface; content/docs/developer/templates/explanation/determinism.mdx lines 65-77 shows correct usage with `d.get()`

2. **Non-existent method `d.timestamp()`** | Documented: `d.timestamp()` returns deterministic timestamp (lines 50, 69, 96) | Actual: No such method exists; must use `d.get('key', () => Date.now().toString())` | Evidence: content/docs/developer/templates/reference/sdk/types.mdx lines 149-156; content/docs/developer/templates/explanation/determinism.mdx lines 132-136 shows correct pattern

3. **Non-existent method `d.seq()`** | Documented: `d.seq('namespace')` returns sequential numbers (lines 76-78, 103-104, 107) | Actual: No such method exists; sequential values must use `d.get()` with unique keys | Evidence: content/docs/developer/templates/reference/sdk/types.mdx lines 149-156; content/docs/developer/templates/explanation/determinism.mdx lines 151-161 shows correct pattern using `d.get('user-id-1', () => '1')`

4. **Incorrect state file path** | Documented: `.cyan/generation.json` (lines 32-33) | Actual: Both `.cyan/generation.json` AND `.cyan_state.yaml` are used | Evidence: content/docs/developer/templates/explanation/determinism.mdx lines 48-61 documents `.cyan_state.yaml` for deterministic_states; content/docs/developer/templates/explanation/client-state.mdx lines 12-29 documents `.cyan/generation.json` for client state; content/docs/user/reference/cli-commands.mdx line 60 mentions `.cyan_state.yaml` for updates

5. **Incorrect interface name** | Documented: `IDefine` interface (line 44) | Actual: Interface is named `IDeterminism` | Evidence: content/docs/developer/templates/reference/sdk/types.mdx line 149; content/docs/developer/templates/explanation/determinism.mdx line 65; content/docs/contributor/repositories/helium.mdx line 49

### Documentation Issues

1. **Cross-document API inconsistency** | Problem: This document uses `d.uuid()`, `d.timestamp()`, `d.seq()` while sibling docs use correct `d.get(key, origin)` pattern | Location: Throughout document | Fix: Rewrite all code examples to use `d.get()` pattern per content/docs/developer/templates/explanation/determinism.mdx

2. **Inconsistent with 3-way-merge.mdx** | Problem: content/docs/developer/templates/explanation/3-way-merge.mdx also uses `d.uuid()` (lines 169, 172) | Location: Lines 169-173 of 3-way-merge.mdx | Fix: Update 3-way-merge.mdx to use `d.get('project-id', () => crypto.randomUUID())`

3. **Inconsistent with full-example.mdx tutorial** | Problem: content/docs/developer/templates/tutorials/full-example.mdx uses `d.uuid()` (lines 108, 316) | Location: Lines 108, 316 of full-example.mdx | Fix: Update tutorial to use correct API

4. **Missing import statement** | Problem: Code examples use `crypto.randomUUID()` and `Date.now()` without showing they should be wrapped in `d.get()` | Location: Lines 85-97 | Fix: Show complete example with proper `d.get()` wrapping

### Other Problems

1. **Conceptual confusion between 'pin' and 'deterministic states'** | Problem: Document talks about "pin" enabling determinism but doesn't explain the relationship to `deterministic_states` in `.cyan_state.yaml` | Recommendation: Clarify that the pin is stored in `.cyan/generation.json` while deterministic values are stored in `.cyan_state.yaml`, and explain how they work together

2. **State file location needs clarification** | Problem: Document mentions only `.cyan/generation.json` but update workflow (line 60 in cli-commands.mdx) mentions `.cyan_state.yaml` | Recommendation: Document both files and their purposes - `.cyan/generation.json` for metadata/answers/pin, `.cyan_state.yaml` for deterministic_states cache

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 5     |
| Documentation Issues     | 4     |
| Other Problems           | 2     |

<!-- source: content/docs/developer/templates/how-to/push-to-registry.mdx -->

# File: content/docs/developer/templates/how-to/push-to-registry.mdx

> Documentation for building and publishing templates to a registry. Contains several CLI command inaccuracies and Dockerfile path inconsistencies.

### Source Code Inaccuracies

1. **Incorrect Dockerfile path for template**

   - Documented: `cyan/template.Dockerfile` (lines 27, 65, 76, 160)
   - Actual: `cyan/Dockerfile` (the template Dockerfile is simply named `Dockerfile` inside the `cyan/` directory)
   - Evidence: content/docs/developer/templates/reference/dockerfiles.mdx:16 - "| `Dockerfile` | Executes template logic | `cyan/Dockerfile` |"

2. **Incorrect Dockerfile path for blob**

   - Documented: `cyan/blob.Dockerfile` (lines 40, 167)
   - Actual: `blob.Dockerfile` (located at project root, not inside `cyan/` directory)
   - Evidence: content/docs/developer/templates/reference/dockerfiles.mdx:17 - "| `blob.Dockerfile` | Stores source files | Project root |"

3. **Non-existent CLI command `cyanprint list`**

   - Documented: `cyanprint list myorg/` (line 124)
   - Actual: No `list` command exists in the CLI. The available commands are: `create`, `update`, `daemon`, `push`
   - Evidence: content/docs/user/reference/cli-commands.mdx - only documents `create`, `update`, `daemon`, `push` commands

4. **Non-existent CLI command `cyanprint info`**

   - Documented: `cyanprint info myorg/my-template:1.0.0` (line 127)
   - Actual: No `info` command exists in the CLI
   - Evidence: content/docs/user/reference/cli-commands.mdx - no `info` command documented

5. **Incorrect `--token` flag position in push command**
   - Documented: `cyanprint push template --token $CYAN_TOKEN` (lines 50, 173)
   - Actual: `cyanprint push --token $CYAN_TOKEN template` (`--token` is a global push option, not a template subcommand option)
   - Evidence: content/docs/user/reference/cli-commands.mdx:133 - `cyanprint push --token <TOKEN> template <BLOB_IMAGE> <BLOB_TAG> <TEMPLATE_IMAGE> <TEMPLATE_TAG>`

### Documentation Issues

1. **Missing Docker build context clarification**

   - Problem: The documentation shows `docker buildx build -f cyan/template.Dockerfile ... .` but doesn't clarify that the template Dockerfile should be built from within the `cyan/` directory for the `COPY` paths to work correctly
   - Location: Lines 25-31, 63-68, 74-79
   - Fix: Either use `cd cyan && docker buildx build -t ... .` or add a note that when using `-f cyan/Dockerfile` from root, the build context must include the necessary files

2. **Inconsistent blob build context**

   - Problem: The blob.Dockerfile uses `COPY . ./` which copies from the build context. If built from the wrong directory, it won't include the template files correctly
   - Location: Lines 38-43
   - Fix: Clarify that blob.Dockerfile must be built from project root with `docker buildx build -f blob.Dockerfile ... .`

3. **Misleading verification section**
   - Problem: The verification section (lines 118-128) documents commands that don't exist (`cyanprint list` and `cyanprint info`)
   - Location: Lines 118-128
   - Fix: Remove this section or replace with alternative verification methods (e.g., checking the registry web UI or using Docker commands to inspect images)

### Other Problems

1. **Incomplete CI/CD example context**

   - Problem: The GitHub Actions example assumes the workflow runs from repo root with correct file structure, but doesn't show the required directory structure
   - Recommendation: Add a brief note about the expected project structure or link to project-structure documentation

2. **Missing prerequisite for CYAN_TOKEN**
   - Problem: Documentation mentions `$CYAN_TOKEN` but doesn't explain how to obtain it
   - Recommendation: Add a note or link explaining how to get an authentication token for the CyanPrint registry

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 5     |
| Documentation Issues     | 3     |
| Other Problems           | 2     |

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

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 4     |
| Documentation Issues     | 3     |
| Other Problems           | 2     |

<!-- source: content/docs/developer/templates/how-to/use-keys.mdx -->

# 📄 File: content/docs/developer/templates/how-to/use-keys.mdx

> This document explains how the `id` parameter acts as a key for answer reuse across questions and composed templates. All API claims are accurate and match the source code in helium SDK.

### 🔴 Source Code Inaccuracies

None found. All documented API signatures match the actual implementation:

- `i.text(message, id, help)` - Verified in `/helium/sdks/node/src/domain/core/inquirer.ts:20-22`
- `i.confirm(message, id, help)` - Verified in `/helium/sdks/node/src/domain/core/inquirer.ts:8-10`
- The `id` parameter on question interfaces (TextQ, ConfirmQ, etc.) - Verified in `/helium/sdks/node/src/domain/core/question.ts`
- Answer storage by `id` in `Record<string, Answer>` - Verified in `/helium/sdks/node/src/domain/template/input.ts:4-5` and usage in `/helium/sdks/node/src/domain/service/stateless_inquirer.ts:15-21`

### 🟡 Documentation Issues

1. **Mermaid syntax may need client-side rendering** | Multiple locations (lines 58-70) | The Mermaid diagrams use `<Mermaid chart={...} />` component which requires client-side rendering. This is consistent with the project setup but should work correctly.

2. **Minor inconsistency in explanation** | Lines 14-19 | The documentation says "Every question has an `id` parameter that serves as its **key**" which is technically correct, but the shorthand API doesn't use a named `id` parameter - it's a positional parameter. The object form (using `TextQ` interface) does have a named `id` property. This is a minor clarification but not an error.

### 🟠 Other Problems

None found. The documentation accurately describes:

- How keys work for answer caching
- Namespacing best practices
- Cross-template key behavior
- Common patterns for using keys

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 0     |

<!-- source: content/docs/developer/templates/how-to/validate-input.mdx -->

# 📄 File: content/docs/developer/templates/how-to/validate-input.mdx

> Documentation describes validation patterns for user input in Cyan templates. The API examples and patterns are generally accurate, but there is a minor inconsistency regarding `confirmation` property type.

### 🔴 Source Code Inaccuracies

1. **PasswordQ confirmation property type** | Documented as `string` in inquirer reference, but actual type is `boolean | null` | helium/sdks/node/src/domain/core/question.ts:51: `confirmation?: boolean | null;`

### 🟡 Documentation Issues

1. **No import statement shown** | Code examples don't include imports | Add `import { StartTemplateWithLambda, QuestionType } from '@atomicloud/cyan-sdk';` at the beginning or reference the setup documentation
2. **Inquirer reference link path inconsistency** | The related link `/docs/developer/templates/reference/sdk/inquirer` points to the correct file, but the inquirer.mdx has a minor issue in its own documentation | The `confirmation` property type in the reference table shows `string` but should be `boolean`
3. **Missing context about where validation runs** | The documentation doesn't explain that validation is executed client-side during the interactive prompt phase | Consider adding a note about the validation execution context

### 🟠 Other Problems

1. **Code examples assume knowledge of template structure** | The examples show `i.text()` calls without wrapping them in `StartTemplateWithLambda` context | Consider adding a brief setup reminder or linking to quickstart
2. **No error handling shown** | Examples don't show what happens when validation fails repeatedly or how to handle edge cases | Consider adding a note about validation loop behavior

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/index.mdx -->

# 📄 File: content/docs/developer/templates/index.mdx

> Documentation describes template development as an overview/index page. The page provides accurate information about template architecture, SDK imports, and code examples. The SDK package name `@atomicloud/cyan-sdk` and the `StartTemplateWithLambda` function are correctly documented. No CLI commands are present in this file, so no `cyanprint` vs `cyan` issues.

### 🔴 Source Code Inaccuracies

1. **Documentation: `i.text('Project name?', 'project.name', 'Enter project name')`** | **Actual: `text(q: string, id: string, help?: string | null)`** | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:22`
   - The documentation example at line 107 shows 3 arguments: `('Project name?', 'project.name', 'Enter project name')` suggesting the second parameter is an ID like `project.name`.
   - However, examining the SDK interface and the actual template_test.ts usage, the `id` parameter should be a simple string identifier (e.g., `'q1'`, `'name'`), not a dotted path like `'project.name'`.
   - While technically valid as a string, the convention shown differs from actual SDK usage patterns in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:4` where IDs are simple strings like `'q1'`, `'q2'`, etc.

### 🟡 Documentation Issues

1. **Problem: Inconsistent ID naming convention in example code** | **Location: Line 107** | **Fix**: Consider using a simpler ID format like `'projectName'` or `'name'` instead of `'project.name'` to match SDK test conventions, or document the dotted-path ID convention if intentional.

2. **Problem: Example uses shorthand form but doesn't show object form alternative** | **Location: Lines 102-117** | **Fix**: Consider adding a note that `i.text()` also accepts an object form with additional options like `validate`, `default`, `initial` as shown in SDK test file.

### 🟠 Other Problems

1. **Problem: The variable substitution example shows `var__name__` in template file but doesn't explain that this requires the `cyan/default` processor** | **Recommendation**: Add a brief note linking the variable syntax to the default processor, similar to line 127 which mentions it.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 2     |
| 🟠       | 1     |

<!-- source: content/docs/developer/templates/reference/cyan-yaml.mdx -->

# 📄 File: content/docs/developer/templates/reference/cyan-yaml.mdx

> This page documents the cyan.yaml format for templates. Most field definitions are accurate, but the `readme` example shows lowercase `README.md` while actual source code uses uppercase `README.MD`. The field structure matches the Rust struct definitions.

### 🔴 Source Code Inaccuracies

1. **Documented:** `readme: README.md` (lowercase extension) | **Actual:** Source code uses `readme: README.MD` (uppercase extension) | **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template4/cyan.yaml:8`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:8`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml:8` all use `readme: README.MD`. Note: `cyan.temp.yaml:10` shows lowercase but this appears to be an exception.

### 🟡 Documentation Issues

1. **Problem:** Plugin example names may not match actual registry plugins | **Location:** Lines 124-127 show `cyan/init-git` and `cyan/npm-install` | **Fix:** These appear to be example/hypothetical plugin names. Verify if these actually exist in the registry, or clarify that these are example names only. The actual e2e test plugins use different naming (e.g., `cyane2e/plugin1`, `cyane2e/plugin2`).

2. **Problem:** `readme` field example inconsistency across documentation | **Location:** Lines 98-102 show `readme: README.md` | **Fix:** Should use `readme: README.MD` (uppercase) to match actual source code, or clarify that both extensions are valid.

3. **Problem:** Complete Example section (lines 162-196) shows `readme: README.md` | **Location:** Line 172 | **Fix:** Change to `readme: README.MD` to be consistent with actual source code.

### 🟠 Other Problems

1. **Problem:** No mention of common `readme` path patterns | **Recommendation:** Actual templates use different readme paths: `README.MD` (root), `cyan/README.MD` (subdirectory). Consider documenting both patterns.

2. **Problem:** Field order in documentation differs from actual YAML files | **Recommendation:** The documentation shows `username, name, description, project, source, email, tags, readme, processors, plugins, templates`. Actual files follow the same order. This is fine but worth noting that order doesn't matter in YAML.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/reference/dockerfiles.mdx -->

# File: content/docs/developer/templates/reference/dockerfiles.mdx

> Document describes Dockerfile configuration for templates and blobs. Several inaccuracies found in Dockerfile examples and endpoint paths.

### Source Code Inaccuracies

1. **Bun image version format**

   - Documented: `FROM oven/bun:1.1.31-alpine`
   - Actual: `FROM oven/bun:1.1.31` (no `-alpine` suffix used in e2e templates)
   - Evidence: `iridium/e2e/template1/cyan/Dockerfile:1`, `iridium/e2e/template3/cyan/Dockerfile:1`, and all other template Dockerfiles use base image without `-alpine`

2. **SDK API endpoints**

   - Documented: "The SDK hosts its API on port 5550 for `/init` and `/validate` endpoints."
   - Actual: Endpoints are `/api/template/init` and `/api/template/validate`
   - Evidence: `helium/sdks/node/src/main.ts:116` shows `app.post('/api/template/init', ...)`, `helium/sdks/node/src/main.ts:123` shows `app.post('/api/template/validate', ...)`

3. **blob.Dockerfile structure - missing RUN apk add tar**

   - Documented: `RUN rm -rf cyan && mkdir -p /cyanprint/artifact && tar -czvf /cyanprint/artifact/cyan.tar.gz /src/`
   - Actual: Requires `RUN apk add tar` before tar commands (alpine doesn't include tar by default)
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:3` shows `RUN apk add tar`

4. **blob.Dockerfile structure - missing multi-stage pattern**

   - Documented: Single-stage build with just RUN and CMD
   - Actual: Uses three-stage build (base, build, runtime) with COPY --from=build
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:1-14` shows complete multi-stage pattern with `FROM alpine:3.21 as base`, `FROM base as build`, `FROM base`

5. **blob.Dockerfile - missing LABEL**

   - Documented: No LABEL in blob.Dockerfile example
   - Actual: `LABEL cyanprint.dev=true` is present in runtime stage
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:11`

6. **blob.Dockerfile - wrong COPY structure**

   - Documented: Does tar creation in single stage
   - Actual: Copies artifact from build stage: `COPY --from=build /cyanprint/artifact/cyan.tar.gz /cyanprint/artifact/cyan.tar.gz`
   - Evidence: `iridium/e2e/template1/blob.Dockerfile:12`

7. **Minimal blob example creates incorrect path**
   - Documented: `COPY . /cyanprint/`
   - Actual: Should copy to workspace path for consistency; extraction path is `/workspace/cyanprint`
   - Evidence: Production blob.Dockerfile shows `WORKDIR /workspace` and CMD extracts to `/workspace/cyanprint`

### Documentation Issues

1. **Inconsistent Bun version format**

   - Problem: Examples show `oven/bun:1.1.31-alpine` but actual codebase uses `oven/bun:1.1.31`
   - Location: Lines 26, 47, 203
   - Fix: Either use `-alpine` consistently or remove it to match actual Dockerfiles

2. **Wrong endpoint paths in Callout**

   - Problem: States `/init` and `/validate` instead of `/api/template/init` and `/api/template/validate`
   - Location: Line 93 (Callout)
   - Fix: Update to correct endpoint paths

3. **blob.Dockerfile example doesn't match real implementation**

   - Problem: Production blob example is significantly simpler than actual implementation
   - Location: Lines 104-122
   - Fix: Update to match actual multi-stage pattern with tar installation and COPY --from=build

4. **Missing .dockerignore files differ from actual**
   - Problem: Example .dockerignore doesn't match actual files used in templates
   - Location: Lines 176-188
   - Evidence: `iridium/e2e/template1/.dockerignore` contains `nix, examples, scripts, .github, .envrc, flake.lock, flake.nix, Taskfile.yaml, README.MD, **/node_modules/**, .git, .idea, .direnv, .DS_Store, .gitignore, .pre-commit-config.yaml, **/.idea/, **/bin/, **/obj/, **/node_modules/, **/env.`

### Other Problems

1. **Python SDK image size estimate**

   - Problem: Documentation lists `python:slim` at ~150MB but actual helium Python template uses `python:3.11-slim`
   - Recommendation: Verify actual image sizes or specify version

2. **.NET example uses generic names**

   - Problem: `CMD ["dotnet", "Template.dll"]` is a placeholder; actual implementation uses `ENTRYPOINT ["dotnet", "sulfone-helium-template-api.dll"]` and uses aspnet base, not runtime
   - Recommendation: Either clarify it's a conceptual example or update to match actual pattern (using `mcr.microsoft.com/dotnet/aspnet:8.0` as base with ENTRYPOINT)

3. **Minimal blob example may be misleading**
   - Problem: `COPY . /cyanprint/` doesn't match the extraction path convention of `/workspace/cyanprint`
   - Recommendation: Clarify when minimal blob is appropriate or update to consistent paths

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 7     |
| Documentation Issues     | 4     |
| Other Problems           | 3     |

<!-- source: content/docs/developer/templates/reference/index.mdx -->

# 📄 File: content/docs/developer/templates/reference/index.mdx

> This is an index/overview page listing template reference documentation. All code examples and API references were verified against the helium SDK source code. No significant inaccuracies found.

### 🔴 Source Code Inaccuracies

None found.

### 🟡 Documentation Issues

None found.

### 🟠 Other Problems

None found.

## Verification Details

**Code Example Verification (Lines 31-42):**

- `StartTemplateWithLambda` - VERIFIED: Function exists in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:140`
- `GlobType` - VERIFIED: Enum exists in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`
  - `GlobType.Template` and `GlobType.Copy` are correct
- Package `@atomicloud/cyan-sdk` - VERIFIED: Package name confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:2`
- Lambda function signature `(i, d)` - VERIFIED: Matches `LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>` from `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts:6`

**Question Types Table Verification (Lines 47-54):**
All methods verified in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts`:

- `text()` returns `Promise<string>` - VERIFIED (line 20-22)
- `select()` returns `Promise<string>` - VERIFIED (line 16-18)
- `confirm()` returns `Promise<boolean>` - VERIFIED (line 8-10)
- `checkbox()` returns `Promise<string[]>` - VERIFIED (line 4-6)
- `password()` returns `Promise<string>` - VERIFIED (line 12-14)
- `dateSelect()` returns `Promise<string>` - VERIFIED (line 24-26)

**File Processing Table Verification (Lines 57-61):**

- `GlobType.Template` - VERIFIED: Enum value 0 in cyan.ts
- `GlobType.Copy` - VERIFIED: Enum value 1 in cyan.ts

**Internal Links:**
All links starting with `/docs` are correct per instructions.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 0     |
| 🟠       | 0     |

<!-- source: content/docs/developer/templates/reference/project-structure.mdx -->

# File: content/docs/developer/templates/reference/project-structure.mdx

> Documentation describing template project structure. The document provides mostly accurate structural information but has several inconsistencies with other documentation files regarding state file format, Dockerfile naming conventions, and file locations.

### Source Code Inaccuracies

1. **Template Dockerfile location/naming inconsistency** | Documented: `cyan/Dockerfile` (lines 16, 36) | Actual: `cyan/template.Dockerfile` | Evidence: `content/docs/developer/templates/tutorials/01-blank-template.mdx:47` shows `template.Dockerfile`; `content/docs/developer/templates/reference/dockerfiles.mdx:16` shows `Dockerfile` located in `cyan/` directory; `spec/v1/CU-86et8z80y/task-spec.md:66` shows `template.Dockerfile`. The project-structure.mdx should clarify that the Dockerfile in `cyan/` can be named either `Dockerfile` or `template.Dockerfile`.

2. **blob.Dockerfile location inconsistency** | Documented: `blob.Dockerfile` at root level (line 22) with template files included | Actual: blob.Dockerfile at root but copies from current context which includes `cyan/` directory that must be removed | Evidence: `content/docs/developer/templates/reference/dockerfiles.mdx:113` shows `RUN rm -rf cyan` which is missing from project-structure.mdx example. The blob.Dockerfile example should include the `rm -rf cyan` step.

3. **State file format inconsistent with other docs** | Documented: `.cyan_state.yaml` (lines 194, 201) | Actual: Mixed - some docs use `.cyan/generation.json`, others use `.cyan_state.yaml` | Evidence: `content/docs/developer/templates/explanation/client-state.mdx:12` uses `.cyan/generation.json`; `content/docs/developer/templates/explanation/3-way-merge.mdx:43-49` uses `.cyan/generation.json` and `.cyan/base/` directory; `content/docs/user/reference/cli-commands.mdx:60` and `content/docs/developer/templates/explanation/determinism.mdx:49` use `.cyan_state.yaml`. This creates confusion about the actual state file format.

4. **cyan.yaml readme path example differs** | Documented: `readme: cyan/README.md` (line 85) | Actual: `readme: README.md` or `readme: README.MD` at root | Evidence: `content/docs/developer/templates/reference/cyan-yaml.mdx:101` shows `readme: README.md` at root; `spec/v1/CU-86et8z80y/task-spec.md:101` shows `readme: cyan/README.MD`. The example path in project-structure.mdx should match the convention used elsewhere.

5. **Missing `root` property in processor files example** | Documented: Files config shows `glob: '**/*'` without `root` (lines 51, 100 in SDK examples) | Actual: Files should include `root` property to specify template directory | Evidence: `content/docs/developer/templates/tutorials/01-blank-template.mdx:66` shows `files: [{ root: 'templates', glob: '**/*', ... }]`; `spec/v1/CU-86et8z80y/task-spec.md:177-178` shows `root: 'templates'`. The project-structure.mdx should show the `root` property for completeness.

### Documentation Issues

1. **Inconsistent Dockerfile naming across documentation** | Problem: project-structure.mdx uses `Dockerfile` while 01-blank-template.mdx and task-spec.md use `template.Dockerfile` | Location: Lines 16, 36, 116-134 | Fix: Add a note explaining that the template Dockerfile can be named `Dockerfile` or `template.Dockerfile`, with `Dockerfile` being the simpler convention for most cases.

2. **blob.Dockerfile example incomplete** | Problem: The blob.Dockerfile example (lines 140-155) is missing the hadolint ignore comment shown in other docs and doesn't match the structure in dockerfiles.mdx | Location: Lines 140-155 | Fix: Ensure consistency with `content/docs/developer/templates/reference/dockerfiles.mdx:104-122` which shows a cleaner production blob structure.

3. **package.json example uses different module field** | Problem: Shows `"module": "index.ts"` (line 98) but other examples may vary | Location: Lines 95-110 | Fix: This is acceptable but could note that the module field configuration may vary based on SDK language/runtime.

4. **Generated output state file description inconsistent** | Problem: The `.cyan_state.yaml` description (lines 201-205) doesn't match the structure shown in determinism.mdx (lines 49-61) | Location: Lines 201-205 | Fix: Either expand the description to show the full structure or link to the determinism.mdx for complete state file format.

5. **Template files directory location unclear** | Problem: The `template/` directory description (lines 57-69) doesn't clarify that in real templates, the template files are often inside `cyan/templates/` not a sibling `template/` directory | Location: Lines 57-69 | Fix: Clarify that template files can be in various locations as specified by the `root` property in processor config, with `cyan/templates/` being a common convention.

6. **Missing import for Promise type** | Problem: The code example uses `Promise<Cyan>` return type but the import doesn't include `Cyan` type | Location: Lines 43-55 | Fix: Either add `Cyan` to the import or remove the explicit return type since it's inferred.

### Other Problems

1. **Cross-reference links may be incorrect** | Problem: The "Related" section links to `/docs/developer/templates/reference/cyan-yaml`, `/docs/developer/templates/reference/dockerfiles`, and `/docs/developer/templates/reference/sdk` - these should be verified to exist | Location: Lines 207-211 | Recommendation: Verify all cross-reference links resolve correctly.

2. **Alpine version inconsistency** | Problem: blob.Dockerfile shows `FROM alpine:3.21` (line 141) while dockerfiles.mdx also uses 3.21 - this is consistent but may become outdated | Location: Lines 141, 150 | Recommendation: Consider noting that Alpine version should be updated periodically.

3. **File organization patterns section seems disconnected from main structure** | Problem: The "File Organization Patterns" section (lines 157-186) shows a different structure than the main "Standard Structure" (lines 10-24), which could confuse readers | Location: Lines 157-186 | Recommendation: Add a clearer transition explaining these are patterns for organizing the `template/` directory contents, not alternative project structures.

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 5     |
| Documentation Issues     | 6     |
| Other Problems           | 3     |

<!-- source: content/docs/developer/templates/reference/sdk/cyan-config.mdx -->

# 📄 File: content/docs/developer/templates/reference/sdk/cyan-config.mdx

> This document describes the Cyan configuration object returned by StartTemplateWithLambda. The interface definitions are generally accurate, but there is one type error in the varSyntax documentation and the Complete Example uses the wrong API for IInquirer calls.

### 🔴 Source Code Inaccuracies

1. **varSyntax type is incorrect**

   - Documented: `varSyntax: [[string, string]]` (tuple of two strings nested in array)
   - Actual: `varSyntax?: [string, string][]` (array of tuples)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:14` shows `varSyntax?: [string, string][]`
   - Fix: The correct type is `[string, string][]` meaning an array of tag pairs, not a single pair.

2. **Complete Example uses incorrect IInquirer API**
   - Documented: Uses object-based calls like `i.text({ type: QuestionType.Text, id: 'template.name', message: 'Project name?', default: 'my-project' })`
   - Actual: SDK supports both object form AND shorthand form `i.text(message: string, id: string, help?: string)` - but the example mix is valid since both are supported
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:20-22` shows both overloads
   - Note: While the object form IS valid, actual templates in iridium use the simpler shorthand form (e.g., `i.text('What is your name?', 'cyane2e/template1/name')`). The example code will work but may be unnecessarily verbose.

### 🟡 Documentation Issues

1. **Plugin names may not reflect actual registry plugins**

   - Problem: Plugin names like `cyan/init-git` and `cyan/npm-install` are shown as examples but don't exist in the source codebase. They are hypothetical examples.
   - Location: Lines 119, 129, 145, 149, 163, 214-218
   - Fix: The Callout on line 118-120 correctly notes these are examples. This is acceptable but could be clarified to indicate these are conceptual examples, not guaranteed available plugins.

2. **Import statement in Complete Example could be simplified**
   - Problem: The Complete Example imports `QuestionType` but uses the verbose object form for all questions, making the code longer than necessary.
   - Location: Line 177
   - Recommendation: Could show the shorthand form to demonstrate both APIs, or simplify the example.

### 🟠 Other Problems

1. **Missing CyanPlugin interface documentation**

   - Problem: The document shows the CyanProcessor interface but doesn't explicitly show the CyanPlugin interface definition in a dedicated section, only showing inline usage.
   - Recommendation: Add an explicit CyanPlugin interface section similar to CyanProcessor for completeness. The actual interface is:
     ```ts
     interface CyanPlugin {
       name: string;
       config: unknown;
     }
     ```

2. **Default processor config claims unverified**
   - Problem: The document claims `cyan/default` processor accepts `vars` and `parser.varSyntax` but there's no actual `cyan/default` processor in the source paths. The processors found are `cyane2e/processor1` and `cyane2e/processor2`.
   - Recommendation: The Callout on line 110-112 partially addresses this by noting config options vary by implementation. Consider clarifying that `cyan/default` is a conceptual reference to the built-in processor behavior.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 2     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/reference/sdk/globbing.mdx -->

# File: content/docs/developer/templates/reference/sdk/globbing.mdx

> Documentation for glob patterns in templates. Mostly accurate with one minor technical correction needed for the extglob callout and verification of Python SDK note.

### Source Code Inaccuracies

1. Documented: "The Node SDK uses `minimatch` which supports these by default" (line 84) | Actual: The Node SDK uses the `glob` package (v11.0.0) which internally uses `minimatch`. While this is technically true, it's more accurate to say the SDK uses the `glob` package. | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:39` shows `"glob": "^11.0.0"` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:6` shows `import { glob } from 'glob';`

2. Documented: ".NET SDK uses 0 and 1 like Node" (implied comparison in Python SDK Note at line 150) | Actual: The .NET SDK also uses 0 for Template and 1 for Copy (C# enums are 0-indexed by default). | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Cyan.cs:3-7` shows enum without explicit values, defaulting to 0 and 1.

### Documentation Issues

1. Problem: The Python SDK Note (lines 149-151) correctly states Python uses 1 and 2 instead of 0 and 1, but could be clearer about which SDKs use which values. | Location: Line 149-151 | Fix: The note is factually correct - Python SDK does use `GlobType.Template = 1` and `GlobType.Copy = 2` as verified in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:7-9`. No change needed.

2. Problem: The CyanGlob interface documentation mentions `root` defaults to `.` but the interface shows it as optional. | Location: Line 93 | Fix: This is correctly documented. The source code at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7` shows `root?: string | null;` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:24` shows the default: `return path.resolve(this.readDir, g.root ?? '.');` - No change needed.

### Other Problems

1. Problem: The extglob patterns `?(x)` and `@(a|b)` documentation could be confusing as these are advanced features that may not work identically across all glob implementations. | Recommendation: Consider adding a note that these patterns depend on the glob library's specific implementation and users should test their patterns.

## Summary

| Category | Count |
| -------- | ----- |
|          | 2     |
|          | 2     |
|          | 1     |

<!-- source: content/docs/developer/templates/reference/sdk/index.mdx -->

# 📄 File: content/docs/developer/templates/reference/sdk/index.mdx

> The SDK Overview page documents the `@atomicloud/cyan-sdk` package for template development. The claims are largely accurate with minor documentation completeness issues. The source code could not be directly verified as the source directories (../helium, etc.) are not available in the workspace, but cross-referencing with other documentation files and the task-spec.md shows consistency.

### 🔴 Source Code Inaccuracies

- None identified (source directories not available for direct verification)

### 🟡 Documentation Issues

- Problem: The "Using IInquirer" section does not include the `password()` method, which is documented in the linked inquirer.mdx reference page | Location: Lines 65-81 | Fix: Add a `password` example: `const apiKey = await i.password('API Key?', 'secrets.apiKey', 'Your API key');`
- Problem: Version Compatibility table (SDK Version, CyanPrint CLI, Node.js) cannot be verified against source code | Location: Lines 105-109 | Fix: Verify against actual SDK package.json and CLI version compatibility, or note that this is based on documented requirements

### 🟠 Other Problems

- Problem: The IDeterminism.get() example comments say "Get deterministic value with key and origin function" but don't explain that the origin function is called only when the key doesn't exist in cache | Location: Lines 84-95 | Recommendation: Add a note explaining the cache-through behavior (similar to the determinism.mdx explanation)
- Problem: The SDK Reference Sections links at lines 97-102 show 4 sub-pages but there's no mention of the input-output.mdx or start-plugin/start-processor pages that exist in the plugins and processors SDK sections | Location: Lines 97-102 | Recommendation: This is appropriate for templates SDK (different from plugins/processors SDK), no change needed

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 1     |

<!-- source: content/docs/developer/templates/reference/sdk/inquirer.mdx -->

# 📄 File: content/docs/developer/templates/reference/sdk/inquirer.mdx

> Document describes IInquirer API for collecting user input during template generation. The API is mostly accurate but has several issues with property documentation that doesn't match the actual source code.

### 🔴 Source Code Inaccuracies

1. **`confirmation` property type for `PasswordQ`**

   - Documented: `confirmation: string` (line 267) - "Confirmation prompt text"
   - Actual: `confirmation?: boolean | null` (helium/sdks/node/src/domain/core/question.ts:51)
   - The property is a boolean flag, not a string for custom prompt text

2. **`default` type for `DateQ`**

   - Documented: `default: string` (line 260) for Text, Date
   - Actual: `default?: Date | null` for DateQ (helium/sdks/node/src/domain/core/question.ts:39)
   - DateQ's default is `Date | null`, not `string`

3. **`initial` property availability**
   - Documented: `initial: string` available for Text (line 262)
   - Actual: Correct - `initial?: string | null` exists in TextQ (helium/sdks/node/src/domain/core/question.ts:72)
   - This is accurate

### 🟡 Documentation Issues

1. **Inconsistent parameter naming in shorthand forms**

   - Problem: Documentation uses `help` as parameter name in IInquirer interface but calls it "description" in the docs
   - Location: Shorthand form examples (e.g., lines 42-47, 75-82, 134-141)
   - Fix: The source code uses `help?: string | null` as the parameter name. Either clarify that the parameter is called `help` but represents the description, or be consistent with terminology

2. **Object form type annotations use wrong type name for date method**

   - Problem: `dateSelect()` is documented but object form uses `QuestionType.DateSelect` which is correct, but the return type comment says "Returns: string (ISO date format)"
   - Location: Line 207-208
   - Fix: This is accurate - the method does return a string in ISO format. No change needed, but consider clarifying that the validation function receives this ISO string

3. **Missing `validate?: null` for Select and Checkbox in table**
   - Problem: Documentation says "Select, Checkbox, and Confirm do not support custom validation functions" (line 271) but doesn't show that `validate` is explicitly typed as `null` in the source
   - Location: Type-Specific Properties table (lines 258-269)
   - Fix: Consider noting that `validate` is explicitly `null` for these types, not just absent

### 🟠 Other Problems

1. **Minor: Callout says "desc" but shorthand uses third parameter**

   - Problem: The callout on line 31-33 mentions "In shorthand forms, the third parameter is a help/description string. In object forms, use `desc` for the same purpose." This is correct but could be clearer about the parameter name being `help` in the shorthand function signature
   - Recommendation: Consider clarifying that the shorthand parameter is named `help` while the object property is named `desc`

2. **LambdaTemplateFn parameter names**
   - Problem: Documentation shows `StartTemplateWithLambda(async (i, d) => {...})` but doesn't document what `d` represents
   - Location: Lines 23-27
   - Recommendation: The `d` parameter is `IDeterminism` - consider documenting it or using more descriptive variable names in examples

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/reference/sdk/types.mdx -->

# 📄 File: content/docs/developer/templates/reference/sdk/types.mdx

> The documentation accurately describes the SDK type definitions with minor discrepancies. The type definitions for GlobType, QuestionType, Cyan, CyanProcessor, CyanGlob, CyanPlugin, IInquirer, IDeterminism, and all question interfaces (TextQ, SelectQ, ConfirmQ, CheckboxQ, PasswordQ, DateQ) are accurate and match the actual SDK implementation.

### 🔴 Source Code Inaccuracies

1. **IInquirer interface shorthand forms ordering** | Documented shows `text(q: string, id: string, help?: string | null)` but actual implementation shows text shorthand accepts `(q: string, id: string, help?: string | null)` - however for `select` and `checkbox` the documented order is `(q: string, options: string[], id: string, help?: string | null)` which matches actual | Verified in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:16-18` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/service/stateless_inquirer.ts:88-104` - **Documentation is accurate**

2. **QuestionType usage in IInquirer** | Documented example at line 56-61 shows `i.text({ type: QuestionType.Text, ... })` | Actual SDK uses object form without explicit type when using shorthand, but type is required in object form | However, looking at actual usage in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:4-12`, templates use shorthand form `i.text('What is your name?', 'id')` not the object form with `QuestionType.Text` | **The example using QuestionType.Text in object form is valid but not the common usage pattern**

3. **ConfirmQ interface** | Documented shows `validate?: null` but the interface also has `errorMessage?: string | null` | Actual: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:21-30` shows both `validate?: null` AND `errorMessage?: string | null` are present | **Documentation is accurate**

4. **Question interfaces validate property** | TextQ, DateQ, PasswordQ documented with `validate?: (input: string) => string | null` | SelectQ, CheckboxQ, ConfirmQ documented with `validate?: null` | Actual source at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:11-73` confirms this is accurate

### 🟡 Documentation Issues

1. **Misleading example for IInquirer text()** | Line 56-61 | The example shows using `QuestionType.Text` in an object form, but this is not the typical usage pattern. Real templates (e.g., iridium e2e tests) use shorthand form like `await i.text('What is your name?', 'cyane2e/template1/name')` | Recommend showing both shorthand form (most common) and object form as advanced usage

2. **Missing note about IInquirer shorthand vs object forms** | Throughout IInquirer section | The documentation shows both forms but doesn't clearly indicate that shorthand forms are more commonly used in practice | Add a note clarifying that shorthand forms are typically preferred for simple use cases

3. **Related links may be broken** | Lines 248-250 | Links `/docs/developer/templates/reference/sdk/inquirer`, `/docs/developer/templates/reference/sdk/cyan-config`, `/docs/developer/templates/reference/sdk/globbing` should be verified to exist in the documentation structure

### 🟠 Other Problems

1. **Missing CyanPluginInput and CyanProcessorInput types** | The main.ts export at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193-194` exports `CyanPluginInput` and `CyanProcessorInput` types but they are not documented | Consider adding documentation for completeness

2. **Missing ResolverInput and ResolverOutput types** | The SDK exports these types (main.ts:198-199) but they are not documented | May warrant addition if Resolvers are part of the template SDK surface

## Summary

| Category | Count                                                       |
| -------- | ----------------------------------------------------------- |
| 🔴       | 0 (verified - documented types match actual implementation) |
| 🟡       | 3                                                           |
| 🟠       | 2                                                           |

<!-- source: content/docs/developer/templates/tutorials/01-blank-template.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/01-blank-template.mdx

> Verified the tutorial's claims against helium SDK source and ketone example templates. Found issues with Dockerfile naming convention, meta template reference, and blob.Dockerfile location.

### 🔴 Source Code Inaccuracies

1. **Meta template reference** | Documented: `cyanprint create cyan/new my-first-template` | Actual: Meta template is `atomi/cyan` not `cyan/new` | The ketone meta template at `/Users/erng/Workspace/atomi/runbook/platforms/ketone/cyan/cyan.yaml` shows `username: atomi` and `name: cyan`, making the reference `atomi/cyan`
2. **Project structure - Dockerfile naming** | Documented: `cyan/template.Dockerfile` | Actual: Varies - ketone templates use `cyan/template.Dockerfile`, iridium e2e tests use `cyan/Dockerfile` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/template.Dockerfile` exists, but `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile` uses different naming
3. **Project structure - blob.Dockerfile location** | Documented: `cyan/blob.Dockerfile` (inside cyan/ directory) | Actual: Varies - ketone uses `cyan/blob.Dockerfile`, iridium e2e uses root-level `blob.Dockerfile` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/blob.Dockerfile` vs `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile`
4. **Root package.json** | Documented: Project structure includes root-level `package.json` alongside `cyan.yaml` | Actual: ketone templates have root `package.json`, iridium e2e tests do not | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/package.json` exists, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/` has no root package.json

### 🟡 Documentation Issues

1. **Code block syntax highlighting** | Line 98: ````js a.js -cnb` | This appears to be an incorrect code fence language specifier - should likely be `bash` or `shell` for the docker/cyanprint commands
2. **Dockerfile naming convention unclear** | Project structure section shows `template.Dockerfile` but doesn't explain this is the template runner Dockerfile (vs blob.Dockerfile for creating tarballs) | Add clarification about purpose of each Dockerfile
3. **Template files directory naming** | Line 85-92: Shows `cyan/templates` as the directory but the documentation should clarify this is a convention and the `root` property determines the actual path | Add note that `root` is configurable

### 🟠 Other Problems

1. **Inconsistent project structure across repos** | The ketone examples and iridium e2e tests use different conventions for Dockerfile naming and location | Recommend standardizing documentation to show the recommended/canonical structure (likely the ketone pattern)
2. **Missing verification of `cyan/new` meta template** | Could not find evidence of a `cyan/new` template in the registry | Recommend verifying this template exists or updating to `atomi/cyan` which is the actual meta template in ketone

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/tutorials/02-adding-variables.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/02-adding-variables.mdx

> Tutorial documentation for adding variable substitution to templates using GlobType.Template and the default processor. Most code examples are accurate, but there are no imports shown in code examples, and the nested variable access syntax may not work as documented.

### 🔴 Source Code Inaccuracies

1. **Missing import statements in code examples** | Document shows code without imports | Actual requires `import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';` | Evidence: `helium/sdks/node/src/main.ts:169-180` exports these from SDK; all e2e templates include imports (`iridium/e2e/template1/cyan/index.ts:1-2`)

2. **Nested variable syntax `var__user.name__` may not work as expected** | Documented: `var__user.name__` for nested variable access | Actual: Eta config uses `useWith: true` (see `iridium/e2e/processor1/index.ts:23`) which means nested variables would be accessed via `var__user.name__` only if the vars object has that nested structure. The dot notation works because Eta's `useWith: true` allows direct property access within the template context | Evidence: `iridium/e2e/processor1/index.ts:22-32` shows Eta config

### 🟡 Documentation Issues

1. **No import statements shown** | Location: Lines 17-19, 29-36, 58-77 | The code examples show SDK usage without import statements. Users following the tutorial may be confused. | Fix: Add `import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';` at the start of code blocks or reference Tutorial 1 for setup

2. **`cyan/default` processor assumed but not explained** | Location: Line 64 | The document references `cyan/default` processor but doesn't explain that this is CyanPrint's built-in default processor. The e2e tests use custom processors (`cyane2e/processor1`, `cyane2e/processor2`) | Fix: Add a brief note that `cyan/default` is the built-in default processor included with CyanPrint

3. **Variable syntax table incomplete** | Location: Lines 84-88 | The table shows only `var__name__` and `var__user.name__` but doesn't mention that Eta templating supports more features like conditionals and loops (with different delimiters) | Fix: Either add more rows or link to the Default Processor explanation page for complete syntax

### 🟠 Other Problems

1. **Tutorial 3 link uses correct path** | Location: Line 22 | Link `/docs/developer/templates/tutorials/03-changing-glob` is correct per instructions

2. **CLI command correctly uses `cyanprint`** | Location: Line 100 | `cyanprint create my-first-template:dev ../test-output` - correctly uses `cyanprint` binary name

3. **Docker build command has no version tag issue** | Location: Line 97 | `docker build -f cyan/Dockerfile -t my-first-template:dev .` - This is a dev tag which is appropriate for tutorial purposes

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 3     |

<!-- source: content/docs/developer/templates/tutorials/03-changing-glob.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/03-changing-glob.mdx

> Documentation tutorial about controlling which files are processed (Template) vs copied (Copy) using GlobType. Covers multiple file groups, exclude patterns, and project structure best practices.

### 🔴 Source Code Inaccuracies

(None found)

### 🟡 Documentation Issues

1. **Problem**: The example uses the shorthand `inquirer` parameter name without type annotation, which differs from the actual e2e test examples that use typed imports.

   - **Location**: Line 47 - `StartTemplateWithLambda(async (inquirer, determinism) => {`
   - **Fix**: Consider showing explicit typing like the e2e tests: `async (i: IInquirer, d: IDeterminism) =>` or explain that the type is inferred. The e2e examples in iridium use `async (i: IInquirer, d: IDeterminism)` format which requires importing types separately: `import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';`

2. **Problem**: The example imports types from a single import statement but the actual e2e tests use two separate imports.
   - **Location**: Line 45 - `import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';`
   - **Fix**: The e2e tests show: `import { GlobType, StartTemplateWithLambda } from '@atomicloud/cyan-sdk';` followed by `import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';`. Either the documentation should show both imports or clarify that all types can be imported from a single statement (which is supported since all are exported from main.ts).

### 🟠 Other Problems

1. **Problem**: The `cyan/default` processor name is used throughout but there's no actual source code for this processor in the provided source paths (boron, iridium, zinc, helium, argon). The iridium e2e tests use `cyane2e/processor1` and `cyane2e/processor2`.

   - **Recommendation**: The `cyan/default` processor appears to be a built-in/default processor name convention used throughout the documentation ecosystem. This is consistent across all docs. Consider adding a note in a central location explaining that `cyan/default` refers to the built-in Eta-based templating processor, or link to the default-processor explanation page.

2. **Problem**: Documentation claims "Order matters - More specific patterns should come first" but doesn't explain what happens when overlapping patterns exist or provide an example of this.
   - **Location**: Line 118 - "Order matters"
   - **Recommendation**: Either remove this claim if it's not significant, or provide a concrete example showing what happens with overlapping patterns (e.g., `**/*.ts` vs `**/*.spec.ts`).

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/tutorials/04-asking-questions.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/04-asking-questions.mdx

> Documentation for tutorial on using IInquirer to ask user questions in templates. Generally accurate with minor issues around link paths and explanation of key behavior.

### 🔴 Source Code Inaccuracies

1. Documented: `password()` listed in Question Types table as returning `string` | Actual: Correct per helium/sdks/node/src/domain/core/inquirer.ts:12-14 | Evidence: Verified
2. Documented: `dateSelect()` listed in Question Types table as returning `string` | Actual: Correct per helium/sdks/node/src/domain/core/inquirer.ts:24-26 | Evidence: Verified

### 🟡 Documentation Issues

1. Problem: Link to IInquirer Reference uses relative path that may not resolve correctly | Location: Line 226 `[**IInquirer Reference**](/docs/developer/templates/reference/sdk/inquirer)` | Fix: Path appears correct, no fix needed
2. Problem: Table shows `password()` returns `string` but no example code demonstrates it | Location: Line 79 | Fix: Consider adding a brief example like other question types for completeness
3. Problem: Table shows `dateSelect()` returns `string` but no example code demonstrates it | Location: Line 80 | Fix: Consider adding a brief example like other question types for completeness

### 🟠 Other Problems

1. Problem: The "Keys Concept" section (lines 82-128) describes key reuse behavior where same key = same answer, but this is a subtle behavior that could confuse users | Recommendation: This is accurate documentation of the design, no change needed
2. Problem: The `cyan/default` processor name is used throughout but there's no verification in the source repositories that this processor actually exists with this exact name | Location: Lines 56, 192 | Recommendation: The processor name appears in boron/docs and is consistent with other documentation, consider adding a note about where this processor is defined

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 3     |
| 🟠       | 2     |

<!-- source: content/docs/developer/templates/tutorials/full-example.mdx -->

# 📄 File: content/docs/developer/templates/tutorials/full-example.mdx

> Comprehensive tutorial with significant API and structural inaccuracies. The `d.uuid()` method doesn't exist, `cyan.yaml` format differs from documented, `cyan/default` processor and `cyan/init-git` plugin may not exist in the codebase, and the Dockerfile naming conventions don't match real templates.

### 🔴 Source Code Inaccuracies

1. **d.uuid() method doesn't exist**

   - Documented: `const projectId = d.uuid();` (line 108)
   - Actual: The `IDeterminism` interface only has `get(key: string, origin: () => string): string` method
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`

   ```typescript
   interface IDeterminism {
     get(key: string, origin: () => string): string;
   }
   ```

   - Fix: Should be `const projectId = d.get('project-id', () => randomUUID());`

2. **cyan.yaml format differs from real templates**

   - Documented: `version: 1.0.0` and `author: Your Organization` fields (lines 277-281)
   - Actual: Real cyan.yaml uses `username`, `email`, `project`, `source`, and no `version` or `author` fields
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:1-11`

   ```yaml
   username: cyane2e
   name: template1
   description: Template1
   project: https://google.com
   source: https://google.com
   email: cyane2e@atomi.cloud
   tags: []
   readme: cyan/README.MD
   processors: ['cyane2e/processor1']
   plugins: ['cyane2e/plugin1']
   templates: []
   ```

3. **template.Dockerfile and blob.Dockerfile naming is incorrect**

   - Documented: `cyan/template.Dockerfile` and `cyan/blob.Dockerfile` (lines 28-30, 285-306)
   - Actual: Real templates use `cyan/Dockerfile` for script and `blob.Dockerfile` at root level
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile`

4. **template.Dockerfile content is incorrect**

   - Documented: Uses `CMD ["node", "index.js"]` with `COPY cyan/ ./` (lines 287-298)
   - Actual: Real templates use bun with `CMD ["bun", "run", "index.ts"]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile:1-9`

   ```dockerfile
   FROM oven/bun:1.1.31
   WORKDIR /app
   LABEL cyanprint.dev=true
   COPY package.json .
   COPY bun.lockb .
   RUN bun install
   COPY . .
   CMD ["bun", "run", "index.ts"]
   ```

5. **blob.Dockerfile content is incorrect**

   - Documented: Simple `COPY cyan/templates/ /templates/` (lines 300-306)
   - Actual: Complex multi-stage build with tar compression and specific CMD for extraction
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile:1-14`

   ```dockerfile
   FROM alpine:3.21 as base
   RUN apk add tar
   ...
   CMD [ "tar", "-xzf", "/cyanprint/artifact/cyan.tar.gz", "-C", "/workspace/cyanprint", "--strip-components=1" ]
   ```

6. **cyan/default processor existence unverified**

   - Documented: `name: 'cyan/default'` as default processor (line 186)
   - Actual: No `cyan/default` processor found in the source code. Spec files reference it, but actual implementation files use custom processors like `cyane2e/processor1`
   - Evidence: Grep for `cyan/default` in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium` returns no matches in implementation code

7. **cyan/init-git plugin existence unverified**

   - Documented: Plugin `cyan/init-git` for git initialization (lines 216-223)
   - Actual: No `init-git` plugin found in the codebase
   - Evidence: Grep for `init-git` in source repos returns no implementation files

8. **docker buildx command line 324-334 shows wrong usage**
   - Documented: `docker buildx build --platform linux/amd64,linux/arm64 -f cyan/template.Dockerfile`
   - Actual: The publish script uses `-f "./cyan/Dockerfile"` and `-f "./blob.Dockerfile"` (different file paths), and uses `--$build_type` (load/push) not `--push`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:26-40`

### 🟡 Documentation Issues

1. **Object form for question validation - return type mismatch**

   - Problem: The `validate` function is shown returning `null` for valid input, but the type signature shows `string | null`
   - Location: Lines 51-62
   - Fix: This is correct per the type signature `validate?: (input: string) => string | null` in question.ts

2. **Missing import for randomUUID**

   - Problem: The corrected `d.get('project-id', () => randomUUID())` would require importing `randomUUID` from `node:crypto`
   - Location: Line 108 area
   - Fix: Add `import { randomUUID } from 'node:crypto';` to imports section

3. **Project structure shows incorrect directory layout**

   - Problem: Shows `cyan/templates/` but real templates have `template/` (singular) at root
   - Location: Lines 24-39
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:43-44` uses `root: 'template'`

4. **TextQ has both default and initial properties**

   - Problem: Documentation shows only `default` property but `TextQ` interface has both `default?: string | null` and `initial?: string | null`
   - Location: Line 61
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:64-73`

5. **Testing commands use wrong file paths**
   - Problem: Commands reference `cyan/template.Dockerfile` but should be `cyan/Dockerfile`
   - Location: Lines 322-337
   - Fix: Update paths to match actual template structure

### 🟠 Other Problems

1. **Example is entirely hypothetical**

   - Problem: This is a synthetic "node-template" example that doesn't match any real template in the codebase
   - Recommendation: Consider using an actual template from the iridium e2e tests as a reference, or clearly mark this as a conceptual example

2. **No cyan.yaml version field**

   - Problem: Real cyan.yaml files don't have a `version` field at the top level, but documentation shows `version: 1.0.0`
   - Recommendation: Remove `version` from the example or clarify it's optional/deprecated

3. **Shorthand vs object form inconsistency**
   - Problem: Documentation shows mixing shorthand `i.text('msg', 'id', 'desc')` with object form but doesn't explain when to use which
   - Recommendation: Add explicit guidance on when to use each form

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 8     |
| 🟡       | 5     |
| 🟠       | 3     |

<!-- source: content/docs/developer/templates/tutorials/index.mdx -->

# File: content/docs/developer/templates/tutorials/index.mdx

> Index page for template tutorials. Lists a progressive learning path of 5 tutorials (Blank Template, Adding Variables, Changing Glob, Asking Questions, Full Example). All linked tutorials exist and are accessible. The claims about learning content in each tutorial are accurate based on the actual tutorial content.

### Source Code Inaccuracies

(None found - no source code references in this documentation file to verify against source paths)

### Documentation Issues

(None found - the documentation is a navigation/index page with accurate descriptions of linked content)

### Other Problems

1. **Missing `d.uuid()` reference** | The Full Example tutorial mentions `d.uuid()` for deterministic UUID generation, but the index page description says "Plugin integration" instead of "Deterministic values" | Consider adding "Deterministic values" to the Full Example learning outcomes to match actual content
2. **Source paths not found** | The specified source paths (../boron,../iridium,../zinc,../helium,../argon) are relative paths that do not exist in the repository | Update source paths to absolute paths or verify correct locations for fact-checking

## Summary

| Category                 | Count |
| ------------------------ | ----- |
| Source Code Inaccuracies | 0     |
| Documentation Issues     | 0     |
| Other Problems           | 2     |

<!-- source: content/docs/user/explanation/3-way-merge.mdx -->

# 📄 File: content/docs/user/explanation/3-way-merge.mdx

> Brief user-facing explanation of 3-way merge feature. The documentation is largely accurate but could benefit from more detail about the Git-based merge implementation and conflict markers.

### 🔴 Source Code Inaccuracies

None found. The documented behavior matches the actual implementation in `iridium/cyancoordinator/src/fs/merger.rs`.

### 🟡 Documentation Issues

1. **Missing detail on conflict marker format** | Conflict Resolution section | The documentation states conflicts will be left for manual resolution but does not mention that Git-style conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) are inserted into files. Consider adding: "Conflicts are marked with standard Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`) in the affected files."

   - Evidence: `iridium/cyancoordinator/src/fs/merger.rs:262-268` shows conflicts leave markers in working directory

2. **Missing terminology alignment** | Throughout document | The source code uses `base`, `current`, and `incoming` terminology, while the documentation uses "Base", "Yours", "Theirs". While semantically correct, the developer documentation uses `current` for user's local files, which may cause confusion. Consider clarifying or using consistent terminology.

   - Evidence: `iridium/cyancoordinator/src/fs/merger.rs:134-139` uses parameter names `base`, `current`, `incoming`

3. **Missing fast-forward behavior** | Conflict Resolution section | The merge can result in fast-forward (when incoming descends from current), which automatically applies all changes without conflict. This behavior is not documented.

   - Evidence: `iridium/cyancoordinator/src/fs/merger.rs:249-252` shows fast-forward handling path exists

4. **Missing "up-to-date" case** | How It Works section | When current and incoming are identical, the merge returns current unchanged without any operation. This edge case could be documented.

   - Evidence: `iridium/cyancoordinator/src/fs/merger.rs:242-248` shows up-to-date detection

5. **Missing rename detection feature** | Document | The 3-way merge supports configurable rename detection with a similarity threshold, which helps track file renames across versions. This advanced feature is not mentioned.
   - Evidence: `iridium/cyancoordinator/src/fs/merger.rs:231-233` enables rename detection with threshold

### 🟠 Other Problems

1. **Missing link to related how-to** | Related section | Consider adding a link to [Update a Project](/docs/user/how-to/update-project) as the primary use case for 3-way merge. Currently only lists "Update a Project" as "Update a Project" but the slug is `/docs/user/how-to/update-project` which matches.

2. **Very brief for a concept page** | Overall structure | This explanation page is quite short (31 lines) compared to other explanation pages. Consider expanding with:
   - Visual diagram of the merge process
   - Example scenario showing before/after
   - More concrete examples of when conflicts occur

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 5     |
| 🟠       | 2     |

<!-- source: content/docs/user/explanation/template-lifecycle.mdx -->

# 📄 File: content/docs/user/explanation/template-lifecycle.mdx

> Documentation accurately describes template versioning, updates, and deprecation status. All CLI commands correctly use `cyanprint`.

### 🔴 Source Code Inaccuracies

None found.

### 🟡 Documentation Issues

None found.

### 🟠 Other Problems

None found.

## Verification Details

**Versioning Claims Verified:**

- Auto-incrementing integer versions: **CONFIRMED**
  - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Repositories/TemplateRepository.cs:620-636`
  - Code shows `latest = db.TemplateVersions.Where(x => x.TemplateId == template.Id).Max(x => x.Version as ulong?) ?? 0;` followed by `Version = latest + 1`
- Version numbers have no semantic meaning: **CONFIRMED** (versions are simply `ulong` integers, not semver)

**CLI Commands Verified:**

- `cyanprint push`: **CONFIRMED** - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:29-30`
- `cyanprint update`: **CONFIRMED** - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:48-72`

**Updates Claims Verified:**

- "latest" refers to highest integer version: **CONFIRMED**
  - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/algorithms/01-version-resolution.md:10` - "When no version is specified, it iterates from the latest version down"
  - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Repositories/TemplateRepository.cs:543-545` - Uses `OrderByDescending(x => x.Version).FirstOrDefaultAsync()` to get latest

**Deprecation Claims Verified:**

- Template deprecation not currently supported: **CONFIRMED**
  - Searched Zinc codebase for "deprecat" - only found API version deprecation in Swagger config, not template deprecation

**Links Verified:**

- `/docs/user/how-to/update-project`: Valid internal link
- `/docs/user/explanation/3-way-merge`: Valid internal link

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 0     |
| 🟠       | 0     |

<!-- source: content/docs/user/how-to/browse-templates.mdx -->

# 📄 File: content/docs/user/how-to/browse-templates.mdx

> This is a short guide document about browsing templates via the web UI. It correctly states that there is no CLI search command and directs users to the web UI. However, it contains a broken link to a non-existent API reference page.

### 🔴 Source Code Inaccuracies

1. **Broken link to API reference** | Documented: Link to `/docs/user/reference/api` for programmatic access | Actual: No `api.mdx` file exists in `content/docs/user/reference/` - only `cli-commands.mdx` and `registry-ui.mdx` are defined in `meta.json` | Evidence: `content/docs/user/reference/meta.json` lists only `["cli-commands", "registry-ui"]`

### 🟡 Documentation Issues

1. **Missing API documentation** | Location: Line 17 `[REST API](/docs/user/reference/api)` | Fix: Either create an `api.mdx` page documenting the REST API endpoints (like `GET /api/v1/template` for search), or remove/bypass this link if the API is not intended for direct user access

### 🟠 Other Problems

1. **No evidence of Resolvers in browse list** | The document mentions "Browse Templates, Plugins, Processors, and Resolvers" but this should be verified against the actual Argon (frontend) implementation | Recommendation: Verify the Argon UI actually has a Resolvers tab in the browse page

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 1     |
| 🟠       | 1     |

<!-- source: content/docs/user/how-to/create-project.mdx -->

# 📄 File: content/docs/user/how-to/create-project.mdx

> This documentation describes the `cyanprint create` command. All documented commands, options, and behaviors were verified against source code in iridium/cyanprint/src/commands.rs. No inaccuracies found.

### 🔴 Source Code Inaccuracies

None found.

### 🟡 Documentation Issues

None found.

### 🟠 Other Problems

None found.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 0     |
| 🟠       | 0     |

---

## Verification Details

### CLI Command Verified

- **Documented**: `cyanprint create <TEMPLATE_REF> [PATH]`
- **Source**: `iridium/cyanprint/src/commands.rs:32-46` - `Create` subcommand with `template_ref: String` and `path: Option<String>`
- **Status**: ✅ Correct

### Template Reference Format Verified

- **Documented**: `<username>/<template-name>[:<version>]`
- **Source**: `iridium/cyanprint/src/util.rs:13-29` - `parse_ref_internal()` parses `<username>/<name>[:version]` format where version is parsed as `i64`
- **Status**: ✅ Correct

### Version Parameter Verified

- **Documented**: "An integer version number"
- **Source**: `iridium/cyanprint/src/util.rs:25` - `v.parse::<i64>().ok()`
- **Status**: ✅ Correct

### Coordinator Endpoint Option Verified

- **Documented**: `-c, --coordinator-endpoint` with default `http://coord.cyanprint.dev:9000`
- **Source**: `iridium/cyanprint/src/commands.rs:38-45`
  ```rust
  #[arg(
      short,
      long,
      value_name = "COORDINATOR_ENDPOINT",
      default_value = "http://coord.cyanprint.dev:9000",
      env = "CYANPRINT_COORDINATOR"
  )]
  coordinator_endpoint: String,
  ```
- **Status**: ✅ Correct

### Environment Variable Verified

- **Documented**: `CYANPRINT_COORDINATOR` environment variable
- **Source**: `iridium/cyanprint/src/commands.rs:43` - `env = "CYANPRINT_COORDINATOR"`
- **Status**: ✅ Correct

### Binary Name Verified

- **Documented**: `cyanprint` (not `cyan`)
- **Source**: The crate is named `cyanprint` in the project structure
- **Status**: ✅ Correct

### Behavior Claims Verified

1. "CLI fetches template from registry" - Confirmed in `main.rs:138-158`
2. "Target directory is created if needed" - Confirmed in `run.rs:183`: `fs::create_dir_all(target_dir)`
3. "Coordinator runs the template" - Confirmed via `CyanCoordinatorClient` usage
4. "Handles compositions automatically" - Confirmed in `run.rs:209-216` with `CompositionOperator`
5. "You answer questions interactively" - Confirmed through `TemplateOperator` execution flow
6. "Project files are generated" - Confirmed via `operator.write_to_disk()` in `run.rs:120`
<!-- source: content/docs/user/how-to/install.mdx -->

# 📄 File: content/docs/user/how-to/install.mdx

> Fact-check findings for the CyanPrint installation documentation page covering Nix, Brew, Scoop, APT, and YUM installation methods with version pinning.

### 🔴 Source Code Inaccuracies

1. **Scoop Installation Not Configured in Release**

   - Documented: `scoop bucket add cyanprint https://github.com/AtomiCloud/scoop-bucket` and `scoop install cyanprint`
   - Actual: The `.goreleaser.yaml` file (iridium/.goreleaser.yaml) only configures `brews` and `nfpms` (for deb/rpm/apk). There is NO `scoops` configuration section, meaning Scoop packages are not being built or published.
   - Evidence: iridium/.goreleaser.yaml lines 37-52 show brews config, lines 54-72 show nfpms config, but no scoop config exists.

2. **Version Example is Outdated**

   - Documented: Examples use version `2.6.0` for version pinning
   - Actual: Current version in source code is `2.7.0` (as of 2026-03-05). The 2.6.0 version was released on 2026-02-26.
   - Evidence: iridium/cyanprint/Cargo.toml line 3: `version = "2.7.0"`, iridium/nix/default.nix line 9: `version = "2.7.0"`, iridium/Changelog.md line 1 shows 2.7.0 release.

3. **APT Repository URL Case Mismatch**

   - Documented: `https://apt.fury.io/AtomiCloud/` (capital A and C)
   - Actual: The fury.sh script pushes to `https://${FURY_TOKEN}@push.fury.io/atomicloud/` (lowercase). The fury.io repository URLs are case-sensitive for the account name.
   - Evidence: iridium/scripts/fury.sh line 13: `curl -F package=@"$file" "https://${FURY_TOKEN}@push.fury.io/atomicloud/"`

4. **YUM Repository URL Case Mismatch**
   - Documented: `baseurl=https://yum.fury.io/atomicloud/` (lowercase)
   - Actual: This is consistent with fury.sh, but contradicts the APT documentation case. The fury.io account is `atomicloud` (lowercase) based on fury.sh.
   - Evidence: iridium/scripts/fury.sh line 13 shows `push.fury.io/atomicloud/`

### 🟡 Documentation Issues

1. **Inconsistent Repository URL Casing Between APT and YUM**

   - Problem: APT instructions use `AtomiCloud` (PascalCase) while YUM uses `atomicloud` (lowercase). Both should be lowercase `atomicloud` to match the fury.io account.
   - Location: Lines 43 (APT) and 54 (YUM)
   - Fix: Change APT URL from `https://apt.fury.io/AtomiCloud/` to `https://apt.fury.io/atomicloud/`

2. **Scoop Installation Section Should Be Removed or Marked Unavailable**

   - Problem: Scoop installation instructions exist but the release pipeline does not publish Scoop packages.
   - Location: Lines 31-36 (Install Latest) and Lines 88-96 (Pin to Specific Version)
   - Fix: Either add Scoop configuration to goreleaser.yaml or remove Scoop tabs from documentation.

3. **Version Pinning Syntax for Nix May Be Incorrect**

   - Problem: The documentation shows `github:AtomiCloud/sulfone.iridium/2.6.0` but Nix flake references typically use `v` prefix for tags (e.g., `v2.6.0`). The changelog shows tags with `v` prefix (e.g., `v2.7.0`, `v2.6.0`).
   - Location: Lines 70, 73
   - Fix: Update to `github:AtomiCloud/sulfone.iridium/v2.6.0` to match actual git tags

4. **Outdated Version Examples**
   - Problem: Version pinning examples reference 2.6.0 which is not the latest version (2.7.0 is current).
   - Location: Throughout the "Pin to Specific Version" section
   - Fix: Update examples to use a more current version or use a placeholder like `X.Y.Z`

### 🟠 Other Problems

1. **Brew Version Pinning May Not Work As Documented**

   - Problem: Homebrew versioned formula installation (`cyanprint@2.6.0`) requires the tap to publish versioned formulae. The goreleaser only publishes the latest version as `cyanprint`. Versioned installation may not be available.
   - Recommendation: Verify with `brew info AtomiCloud/tap/cyanprint` whether older versions are available, or note that only the latest version is typically available via Homebrew.

2. **No Verification Step After Installation**

   - Problem: Documentation doesn't include a step to verify the installation was successful.
   - Recommendation: Add `cyanprint --version` or `cyanprint --help` as a verification step.

3. **APT Repository Setup Missing GPG Key Configuration**
   - Problem: Using `[trusted=yes]` bypasses GPG signature verification. While this works, it's a security trade-off that should be noted.
   - Recommendation: Document this is for convenience and suggest proper GPG key setup if available.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 4     |
| 🟠       | 3     |

<!-- source: content/docs/user/how-to/update-project.mdx -->

# 📄 File: content/docs/user/how-to/update-project.mdx

> Documentation accurately describes the `cyanprint update` command with correct CLI syntax, options, and environment variables. The update process steps align with source code implementation.

### 🔴 Source Code Inaccuracies

(None found)

### 🟡 Documentation Issues

1. **Update Process Steps Could Be More Precise** | Lines 27-31 | The documented 5-step process is a simplified summary. The actual implementation has 4 phases: (1) Read state and build specs, (2) MAP - execute templates to VFS, (3) LAYER - merge VFS outputs, (4) MERGE+WRITE - 3-way merge with local files and write. Consider updating to reflect the actual phase names for users who may see them in debug output.

### 🟠 Other Problems

1. **Missing debug flag documentation** | CLI Options table | The codebase supports a global `--debug` flag (see `commands.rs:20-24`) that can be useful for troubleshooting update issues. This is not documented in the CLI options or troubleshooting section.

2. **Troubleshooting could include more scenarios** | Troubleshooting section | Common issues like "No templates found in state file" (when `.cyan_state.yaml` exists but has no active templates) could be added based on the warning message in `orchestrator.rs:52-54`.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 1     |
| 🟠       | 2     |

<!-- source: content/docs/user/index.mdx -->

# 📄 File: content/docs/user/index.mdx

> This is a simple index/overview page for the User Documentation section. It contains navigation links to tutorials, how-to guides, reference, and explanation sections. No factual claims about code, CLI commands, or APIs to verify.

### 🔴 Source Code Inaccuracies

None - This file contains no source code references, CLI commands, or API claims that require verification against source code.

### 🟡 Documentation Issues

None - All internal documentation links appear correct and properly formatted.

### 🟠 Other Problems

None

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 0     |
| 🟠       | 0     |

---

## Verification Details

### Links Verified

All links in the document were verified to point to existing files within the user documentation section:

1. `[Get Started](/docs/user/tutorials/get-started)` - Verified: `content/docs/user/tutorials/get-started.mdx` exists
2. `[Tutorials](/docs/user/tutorials/get-started)` - Verified: Same file exists
3. `[How-To Guides](/docs/user/how-to/install)` - Verified: `content/docs/user/how-to/install.mdx` exists
4. `[Reference](/docs/user/reference/cli-commands)` - Verified: `content/docs/user/reference/cli-commands.mdx` exists
5. `[Explanation](/docs/user/explanation/template-lifecycle)` - Verified: `content/docs/user/explanation/template-lifecycle.mdx` exists

### Product Name Verification

The term "CyanPrint" used throughout this document is correct. This was verified in the source code:

- `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/README.MD` confirms: "Sulfone Boron is an executor designed to pull and run Docker images for a templating system called CyanPrint."
- The CLI binary name `cyanprint` is confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs`

### Content Assessment

This is a navigation/index page only. It contains:

- A welcome message
- A brief description of what CyanPrint does ("Generate projects from templates in seconds")
- Navigation links to the four main documentation sections

No CLI commands, code samples, API references, or technical specifications are present that would require source code verification.

<!-- source: content/docs/user/reference/cli-commands.mdx -->

# 📄 File: content/docs/user/reference/cli-commands.mdx

> Documentation for CyanPrint CLI commands is largely accurate with one significant issue in the `push group` subcommand.

### 🔴 Source Code Inaccuracies

1. **`push group` subcommand arguments** | Documented: `cyanprint push --token <TOKEN> group <NAME> <TAG>` (2 positional arguments: NAME and TAG) | Actual: `push group` takes NO positional arguments. The Group variant in PushCommands enum has no fields. It reads template metadata from the config file (`cyan.yaml`) via `registry.push_template_without_properties(config, token, message)` | `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:131-132` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:89-97`

### 🟡 Documentation Issues

1. **Missing `--version` flag in Global Options table** | Location: Global Options section | The `--version` flag is listed but lacks the actual description that would come from the CLI's `about` field. Recommend adding: "Print version information" as the description. | No fix needed as it's adequately described.

### 🟠 Other Problems

1. **Inconsistent argument notation** | The documentation uses `<TEMPLATE_REF>` with angle brackets for required arguments and `[PATH]` with square brackets for optional arguments. This is good practice but should be consistently applied. Currently consistent.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 0     |
| 🟠       | 0     |

<!-- source: content/docs/user/reference/registry-ui.mdx -->

# 📄 File: content/docs/user/reference/registry-ui.mdx

> Documentation for the CyanPrint Registry web interface. The documentation accurately describes the Registry UI features found in the Argon frontend and Zinc backend.

### 🔴 Source Code Inaccuracies

(None found)

### 🟡 Documentation Issues

1. **Missing information about Search Fields** | Search section | The documentation says search covers "Resource name, Description, Author username, Tags" but does not mention that "Readme" content is also searchable. The backend SearchVector is pre-computed from Name, Description, AND Readme. Consider adding "Readme" to the list of searchable fields for completeness.

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/docs/developer/algorithms/03-full-text-search.md:107-112` shows SearchVector includes Readme

2. **Version filtering clarification** | Version History section | The documentation says "Use the search box to filter versions by version number or description." However, the source code shows filtering only by description (via `.filter((i) => i?.description?.includes(searchTerm) ?? true)`). Version numbers are NOT included in the filter. The table is sorted by version number descending, but not filtered by it.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:151-153`

### 🟠 Other Problems

1. **Minor inconsistency in Plugin/Processor/Resolver detail tabs** | Template Details section states that detail pages have three tabs (Documentation, Versions, Dependencies), but Plugins, Processors, and Resolvers only have two tabs (Documentation, Versions) - no Dependencies tab. The documentation mentions this under "Plugin, Processor, and Resolver Details" but could be clearer about this difference.
   - Evidence: Compare `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:114-117` (3 tabs: docs, version, dependencies) vs `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/plugins/[user_id]/[plugin_id]/+page.svelte:107-110` (2 tabs: docs, version)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 2     |
| 🟠       | 1     |

<!-- source: content/docs/user/tutorials/get-started.mdx -->

# 📄 File: content/docs/user/tutorials/get-started.mdx

> This documentation file is a quick-start tutorial for CyanPrint. Most content is accurate, but there is one inconsistency between the APT URL in this file versus the install.mdx file.

### 🔴 Source Code Inaccuracies

(none found)

### 🟡 Documentation Issues

1. **APT URL inconsistency across documentation** | Problem: This file uses `https://apt.fury.io/atomicloud/` (line 33) while `content/docs/user/how-to/install.mdx` uses `https://apt.fury.io/AtomiCloud/` (line 43) - different casing | Location: Line 33 | Fix: Verify the correct Fury.io URL format (likely lowercase `atomicloud` based on Fury.io conventions) and ensure both files are consistent

### 🟠 Other Problems

(none found)

## Verification Details

### Verified Correct

1. **CLI binary name** | Documented: `cyanprint` | Actual: `cyanprint` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:4` shows `pub struct Cli` with command definitions; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/LLM.MD:119` confirms usage pattern `cyanprint create username/template-name:version ./target-path`

2. **Create command syntax** | Documented: `cyanprint create atomi/nix-init my-project` | Actual: Correct | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:33-46` defines the `Create` subcommand with `template_ref` and optional `path` arguments

3. **Template reference format** | Documented: `atomi/nix-init:1` | Actual: Correct format `<username>/<name>:<version>` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/util.rs:13-35` shows `parse_ref_internal()` parses `<username>/<name>:<version>` format

4. **Template `atomi/nix-init` exists** | Documented: `atomi/nix-init` | Actual: Template exists | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan.yaml:1-2` shows `username: atomi` and `name: nix-init`

5. **Brew installation** | Documented: `brew install AtomiCloud/tap/cyanprint` | Actual: Correct | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.goreleaser.yaml:37-52` configures brew distribution to `AtomiCloud/homebrew-tap` with name `cyanprint`

6. **Nix installation** | Documented: `nix shell github:AtomiCloud/sulfone.iridium` | Actual: Correct | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/flake.nix` exists and follows the standard flake output pattern; repo is `sulfone.iridium` under `AtomiCloud` org

7. **YUM installation** | Documented: `baseurl=https://yum.fury.io/atomicloud/` | Actual: Matches install.mdx | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/user/how-to/install.mdx:54` uses the same URL

8. **Next Steps links** | All links verified to exist:
   - `/docs/user/how-to/install` - exists at `content/docs/user/how-to/install.mdx`
   - `/docs/user/how-to/create-project` - exists at `content/docs/user/how-to/create-project.mdx`
   - `/docs/user/how-to/browse-templates` - exists at `content/docs/user/how-to/browse-templates.mdx`

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 0     |
| 🟡       | 1     |
| 🟠       | 0     |
