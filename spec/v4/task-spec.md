# Task Spec v4: New Feature Documentation

## Overview

Add documentation for 4 new features: **Try Command**, **Daemon Start/Stop**, **Resolver**, and **Build/Dev Config**. These features exist in sibling repos (iridium, boron, helium, zinc) but are missing or wrong in the silicon docs site.

---

## Global Requirements (Apply to ALL Plans)

### 1. Fact-Check Against Source Code

ALL documentation MUST be verified against actual source code in sibling repos:

- `../iridium/` — CLI (Rust/Clap), cyan.yaml models, e2e examples
- `../helium/` — SDKs (Node, Python, .NET), types, entry points, ports
- `../boron/` — Coordinator (Go/Gin), execution pipeline, Docker management
- `../zinc/` — Registry API (.NET/ASP.NET Core)
- `../argon/` — Frontend (if relevant)

No guessing or fabrication. Every CLI flag, type signature, port number, Dockerfile pattern, and cyan.yaml field must trace back to actual source code.

### 2. Follow howtowrite.md

ALL MDX content MUST follow `howtowrite.md`:

- Use `-c` flag on copyable code blocks
- Use filenames on code blocks showing project files (e.g., `ts index.ts -c`)
- Use `<Steps>` for sequential tutorials
- Use `<Tabs>` for multi-language code (TypeScript, Python, C#)
- Use `<TypeTable>` for API type references
- Use `<Files>` component for project structure display
- Use `<Cards>` for navigation links in "Next Steps"
- Use `<Callout>` sparingly (max 1-2 per page)
- Use CodeHike annotations (`!callout`, `!mark`, `!diff`) where they add clarity
- Proper heading hierarchy (h1 → h2 → h3)

### 3. Multi-Language Examples (Developer Docs Only)

ALL developer tutorials and how-to guides MUST show code in all 3 SDK languages using `<Tabs>`:

- **Node.js/TypeScript** — `@atomicloud/cyan-sdk` (npm), runtime: bun
- **Python** — `cyanprintsdk` (pip/poetry), runtime: python 3.11+
- **.NET/C#** — `AtomiCloud.CyanPrint` (NuGet), runtime: dotnet 8

### 4. Try-First Workflow (Developer Tutorials)

Developer tutorials should use `cyanprint try template` for testing, NOT raw `docker build` + `cyanprint create`.

### 5. Definition of Done (Per Plan)

1. `direnv exec . pls build` succeeds without errors
2. `direnv exec . pre-commit run -a` passes
3. All content fact-checked against source repos
4. All new/modified MDX files render without errors

---

## SDK Reference Data (Source of Truth)

### Entry Points (all verified from `../helium/`)

| Artifact  | Node                           | Python                        | .NET                                  | Port |
| --------- | ------------------------------ | ----------------------------- | ------------------------------------- | ---- |
| Template  | `StartTemplateWithLambda(fn)`  | `start_template_with_fn(fn)`  | `CyanEngine.StartTemplate(args, fn)`  | 5550 |
| Processor | `StartProcessorWithLambda(fn)` | `start_processor_with_fn(fn)` | `CyanEngine.StartProcessor(args, fn)` | 5551 |
| Plugin    | `StartPluginWithLambda(fn)`    | `start_plugin_with_fn(fn)`    | `CyanEngine.StartPlugin(args, fn)`    | 5552 |
| Resolver  | `StartResolverWithLambda(fn)`  | `start_resolver_with_fn(fn)`  | `CyanEngine.StartResolver(args, fn)`  | 5553 |

### Package Names

| Language | Package                | Install                                                |
| -------- | ---------------------- | ------------------------------------------------------ |
| Node/TS  | `@atomicloud/cyan-sdk` | `bun add @atomicloud/cyan-sdk`                         |
| Python   | `cyanprintsdk`         | `pip install cyanprintsdk` / `poetry add cyanprintsdk` |
| .NET/C#  | `AtomiCloud.CyanPrint` | `dotnet add package AtomiCloud.CyanPrint`              |

### Dockerfile Patterns (verified from `../helium/` and `../iridium/e2e/`)

**Node/Bun:**

```dockerfile
FROM oven/bun:1.1.31
WORKDIR /app
LABEL cyanprint.dev=true
COPY package.json bun.lockb* ./
RUN bun install
COPY . .
CMD ["bun", "run", "index.ts"]
```

**Python:**

```dockerfile
FROM python:3.11-slim
WORKDIR /app
RUN pip install --no-cache-dir poetry==1.7.1
COPY pyproject.toml poetry.lock ./
RUN poetry config virtualenvs.create false && poetry install --no-dev
COPY . .
CMD ["python", "main.py"]
```

**.NET:**

```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:8.0 AS base
WORKDIR /app
ENV ASPNETCORE_URLS=http://+:<PORT>
FROM mcr.microsoft.com/dotnet/sdk:8.0 AS build
WORKDIR /src
COPY ["MyProject.csproj", "./"]
RUN dotnet restore
COPY . .
RUN dotnet build -c Release -o /app/build
FROM build AS publish
RUN dotnet publish -c Release -o /app/publish /p:UseAppHost=false
FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "MyProject.dll"]
```

**Blob (templates only):**

```dockerfile
FROM alpine:3.21 AS base
RUN apk add tar
FROM base AS build
WORKDIR /src
COPY . .
RUN rm -rf cyan && mkdir -p /cyanprint/artifact && tar -czvf /cyanprint/artifact/cyan.tar.gz /src/
FROM base
LABEL cyanprint.dev=true
COPY --from=build /cyanprint/artifact/cyan.tar.gz /cyanprint/artifact/cyan.tar.gz
WORKDIR /workspace
CMD ["tar", "-xzf", "/cyanprint/artifact/cyan.tar.gz", "-C", "/workspace/cyanprint", "--strip-components=1"]
```

---

## Plans

| #   | Plan                             | What It Does                                                       | Effort |
| --- | -------------------------------- | ------------------------------------------------------------------ | ------ |
| 1   | Fix CLI Reference                | Rewrite cli-commands.mdx to match commands.rs                      | Medium |
| 2   | Resolver Developer Section       | Create ~17 new files for full resolver docs                        | High   |
| 3   | Build Config Documentation       | Document build: section in cyan.yaml                               | Medium |
| 4   | Try Command + Developer Workflow | Add try docs, update existing tutorials to 3 languages + try-first | Medium |
| 5   | Daemon How-To + Tutorial Updates | Add daemon management how-to, update tutorials                     | Low    |
| 6   | Dev Config                       | Document dev: section for try --dev mode                           | Low    |

See `spec/v4/plans/plan-{1-6}-*.md` for detailed plans.
