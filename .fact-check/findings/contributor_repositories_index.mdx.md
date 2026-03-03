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
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 4 |
| Documentation Issues | 2 |
| Other Problems | 2 |
