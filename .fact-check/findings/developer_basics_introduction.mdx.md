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
|----------|-------|
| 🔴 | 0 |
| 🟡 | 2 |
| 🟠 | 2 |
