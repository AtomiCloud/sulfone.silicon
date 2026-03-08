<!-- source: content/docs/user/how-to/browse-templates.mdx -->
# 📄 File: content/docs/user/how-to/browse-templates.mdx

> This is a short guide document about browsing templates via the web UI. It correctly states that there is no CLI search command and directs users to the web UI. However, it contains a broken link to a non-existent API reference page.

### 🔴 Source Code Inaccuracies
1. **Broken link to API reference** | Documented: Link to `/docs/user/reference/api` for programmatic access | Actual: No `api.mdx` file exists in `content/docs/user/reference/` - only `cli-commands.mdx` and `registry-ui.mdx` are defined in `meta.json` | Evidence: `content/docs/user/reference/meta.json` lists only `["cli-commands", "registry-ui"]`

### 🟡 Documentation Issues
1. **Missing API documentation** | Location: Line 17 `[REST API](/docs/user/reference/api)` | Fix: Either create an `api.mdx` page documenting the REST API endpoints (like `GET /api/v1/template` for search), or remove/bypass this link if the API is not intended for direct user access

### 🟠 Other Problems
1. **No evidence of Resolvers in browse list** | The document mentions "Browse Templates, Plugins, Processors, and Resolvers" but this should be verified against the actual Argon (frontend) implementation | Recommendation: Verify the Argon UI actually has a Resolvers tab in the browse page

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 1 |
| 🟠 | 1 |
