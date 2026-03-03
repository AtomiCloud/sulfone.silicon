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
|----------|-------|
| 🔴 | 3 |
| 🟡 | 4 |
| 🟠 | 3 |
