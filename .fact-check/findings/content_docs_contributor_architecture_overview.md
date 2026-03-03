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
