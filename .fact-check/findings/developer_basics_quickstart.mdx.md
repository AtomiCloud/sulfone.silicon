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
|----------|-------|
| 🔴 | 3 |
| 🟡 | 3 |
| 🟠 | 2 |
