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
|----------|-------|
| 🔴 | 1 |
| 🟡 | 2 |
| 🟠 | 2 |
