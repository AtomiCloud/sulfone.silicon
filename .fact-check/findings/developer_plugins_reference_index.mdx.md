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
|----------|-------|
| 🔴 | 0 |
| 🟡 | 2 |
| 🟠 | 1 |

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
