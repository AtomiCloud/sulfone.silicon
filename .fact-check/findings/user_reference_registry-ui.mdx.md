<!-- source: content/docs/user/reference/registry-ui.mdx -->
# 📄 File: content/docs/user/reference/registry-ui.mdx

> This documentation describes the CyanPrint Registry UI but is incomplete and contains inaccuracies. It only describes template-related functionality, but the actual Registry UI supports searching and viewing templates, plugins, processors, AND resolvers. The documentation also misses key features like the Dependencies tab and provides incomplete descriptions of search capabilities.

### 🔴 Source Code Inaccuracies
1. **Documented: "Search for templates by: Template name, Author/username, Tags"**
   - **Actual: Search is a unified full-text search, NOT separate filters.** The search API uses a single `Search` parameter (line 59-61 in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte`) that performs a general search across multiple fields. There is no explicit option to filter specifically by template name, author/username, or tags as separate search modes.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte:59-62`

2. **Documented: Only "templates" can be searched**
   - **Actual: The Registry UI supports 4 resource types: Templates, Plugins, Processors, AND Resolvers.** The resource selector dropdown clearly shows all four options.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte:26-46` - options array includes "template", "plugin", "processor", and "resolver"

3. **Documented: Template details include "Usage statistics" and "Author information"**
   - **Actual: Template details page shows:**
     - Stars and downloads counts (not general "usage statistics") - lines 100-107
     - Username (in title as `username/template-name`) and email (not comprehensive "author information") - line 68, and line 29 in card component
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:68,100-107`

4. **Documented: "Browse all available versions of a template"**
   - **Actual: The versions tab shows Version number, Description, and Created At date with filtering capability.** The documentation is vague about what information is actually displayed.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:131-165`

### 🟡 Documentation Issues
1. **Problem: Documentation is severely incomplete - missing 3 resource types**
   - **Location:** Entire document, particularly "Features" section (lines 10-31)
   - **Fix:** Add sections documenting Plugins, Processors, and Resolvers which are all searchable in the Registry UI. Each has its own detail page route.

2. **Problem: Missing "Dependencies" tab documentation**
   - **Location:** Template Details section (lines 20-27)
   - **Fix:** The template details page has 3 tabs: Documentation (ReadMe), Versions, and Dependencies (line 114-117). The Dependencies tab shows resolvers, plugins, and processors used by the template. This should be documented.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:114-117,167-226`

3. **Problem: Template details section is incomplete**
   - **Location:** Lines 20-27
   - **Fix:** Add the following items that are actually displayed:
     - Project URL (link icon)
     - Source URL (code icon)
     - Stars count
     - Download count
     - Tags (displayed as badges)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:79-108`

4. **Problem: Search section is misleading**
   - **Location:** Lines 14-18 (Search section)
   - **Fix:** Update to clarify that the search bar performs a unified full-text search across template name, description, author username, and tags all at once - not as separate filter options.

5. **Problem: Version History section lacks detail**
   - **Location:** Lines 29-31
   - **Fix:** Document that each version displays: Version number, Description, Created At timestamp. Also note that versions can be filtered using a search box.
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte:140-161`

6. **Problem: Missing URL pattern documentation**
   - **Location:** Line 8 (URL mention)
   - **Fix:** Add documentation for URL patterns:
     - Registry search: `/registry`
     - Template details: `/templates/{user_id}/{template_id}`
     - Plugin details: `/plugins/{user_id}/{plugin_id}`
     - Processor details: `/processors/{user_id}/{processor_id}`
     - Resolver details: `/resolvers/{user_id}/{resolver_id}`

### 🟠 Other Problems
1. **Problem: No authentication requirements documented**
   - **Recommendation:** Document if/when authentication is required (e.g., for starring templates, managing tokens). The codebase has `/tokens` and `/profile` routes suggesting authenticated features.

2. **Problem: The registry URL `registry.cyanprint.dev` should be verified against configuration**
   - **Recommendation:** Verify this URL against configuration files in the argon codebase (e.g., check `config/shared/*.config.ts` files for environment-specific URLs)

3. **Problem: No screenshots or visual examples**
   - **Recommendation:** Add screenshots of the actual registry UI showing the search interface, resource type selector, and template detail page tabs

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 6 |
| 🟠 | 3 |
