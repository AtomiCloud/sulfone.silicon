<!-- source: content/docs/developer/plugins/reference/index.mdx -->
# 📄 File: content/docs/developer/plugins/reference/index.mdx

> This is a simple index/navigation page that lists links to plugin reference documentation. The file contains minimal content - just a title, description, and organized list of navigation links to sub-pages covering Project Setup and SDK Reference topics.

### 🔴 Source Code Inaccuracies
None identified for this specific index file. The file contains only navigation links without technical claims or code references that require verification against source code.

### 🟡 Documentation Issues
1. **Source path mismatch** | The task specified source paths `["../argon", "../boron", "../helium", "../iridium", "../zinc"]` but these paths point to contributor repository documentation (sulfone.argon, sulfone.boron, sulfone.helium, sulfone.iridium, sulfone.zinc) which describe platform components, not plugin SDK source code. | The source paths should point to actual SDK source code for verification. Based on previous fact-check analysis, the actual SDK source is in the helium repository at `helium/sdks/node/src/`.

### 🟠 Other Problems
1. **Minimal context on index page** | The index page provides only a list of links with brief descriptions. Users landing here have no overview of what the plugin reference covers or how it's organized. | Consider adding a brief introductory paragraph explaining the plugin reference organization (Project Setup files vs SDK Reference sections).

2. **All linked pages verified to exist** | The following linked documentation pages all exist:
   - `/developer/plugins/reference/project-structure` - project-structure.mdx exists
   - `/developer/plugins/reference/cyan-yaml` - cyan-yaml.mdx exists
   - `/developer/plugins/reference/dockerfile` - dockerfile.mdx exists
   - `/developer/plugins/reference/sdk/index` - sdk/index.mdx exists
   - `/developer/plugins/reference/sdk/start-plugin` - sdk/start-plugin.mdx exists
   - `/developer/plugins/reference/sdk/input-output` - sdk/input-output.mdx exists
   - `/developer/plugins/reference/sdk/types` - sdk/types.mdx exists

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 1 |
| 🟠 | 2 |

### Note on Related Findings
While this index file itself has no technical inaccuracies, the linked SDK reference pages (input-output.mdx, types.mdx, start-plugin.mdx) have documented issues with type naming. According to previous analysis:
- Documentation shows `PluginInput` type but SDK exports `CyanPluginInput`
- Code examples using `PluginInput` will fail at compile time

For detailed findings on those issues, see the fact-check reports for the individual SDK reference pages.
