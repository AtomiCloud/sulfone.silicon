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
|----------|-------|
| 🔴 | 0 |
| 🟡 | 2 |
| 🟠 | 1 |
