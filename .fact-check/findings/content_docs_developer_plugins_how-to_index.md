<!-- source: content/docs/developer/plugins/how-to/index.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/index.mdx

> This is a navigation index page for plugin how-to guides. The file itself is minimal and makes few factual claims. All four linked pages exist. However, there is a significant inconsistency in the SDK package naming across the documentation.

### 🔴 Source Code Inaccuracies

1. **SDK Package Name Inconsistency**

   - Documented: `@atomicloud/cyan-sdk` (in plugin how-to guides and SDK reference)
   - Actual: `@cyanprint/sdk` (documented in helium.mdx contributor repository page)
   - Evidence: `content/docs/contributor/repositories/helium.mdx:18` shows `@cyanprint/sdk` as the TypeScript SDK package, while all plugin documentation uses `@atomicloud/cyan-sdk`

2. **SDK Package Name in helium.mdx vs Developer Docs**
   - Documented: Two different package names for TypeScript SDK
   - Actual: Should be consistent across all documentation
   - Evidence:
     - `content/docs/contributor/repositories/helium.mdx:39-41`: `bun add @cyanprint/sdk`
     - `content/docs/developer/plugins/reference/sdk/index.mdx:13`: `bun add @atomicloud/cyan-sdk`
     - `content/docs/developer/templates/reference/sdk/index.mdx:13`: `npm install @atomicloud/cyan-sdk`

### 🟡 Documentation Issues

1. **Inconsistent SDK API Naming**

   - Problem: The helium.mdx documentation describes a different SDK API (`defineTemplate`, `input`, `output` from `@cyanprint/sdk`) than what's documented in the developer guides (`StartPluginWithLambda`, `StartTemplateWithLambda` from `@atomicloud/cyan-sdk`)
   - Location: `content/docs/contributor/repositories/helium.mdx:47-75` vs `content/docs/developer/plugins/how-to/run-commands.mdx:18`
   - Fix: Either update helium.mdx to reflect `@atomicloud/cyan-sdk` API or clarify if these are different SDKs for different purposes

2. **Missing import in Feature Flags example**

   - Problem: In `conditional-execution.mdx`, the Feature Flags example uses `fs.writeFile` and `path.join` but doesn't import `fs` or `path`
   - Location: `content/docs/developer/plugins/how-to/conditional-execution.mdx:120-123`
   - Fix: Add `import * as fs from 'fs/promises';` and `import * as path from 'path';` to the example

3. **Missing import in Using Defaults example**
   - Problem: In `conditional-execution.mdx`, the Using Defaults example uses `$` from bun but the import is not shown in the truncated example
   - Location: `content/docs/developer/plugins/how-to/conditional-execution.mdx:179-197`
   - Fix: Include the full imports at the top of the example or note that imports are assumed

### 🟠 Other Problems

1. **SDK Documentation Architecture Confusion**

   - Problem: The contributor documentation (helium.mdx) suggests the SDK (`@cyanprint/sdk`) provides template definition with `defineTemplate`, `input`, `output` APIs, but the developer documentation uses `@atomicloud/cyan-sdk` with `StartTemplateWithLambda`, `StartPluginWithLambda` APIs
   - Recommendation: Clarify whether these are:
     a) The same SDK with different API styles
     b) Different versions of the SDK
     c) Different SDKs for different use cases

2. **No Source Code Available for Verification**
   - Problem: The source paths (argon, boron, helium, iridium, zinc) referenced in the task are external GitHub repositories, not local source files
   - Recommendation: The documentation cannot be verified against actual SDK source code within this repository. External verification against https://github.com/AtomiCloud/sulfone.helium would be needed to confirm SDK package names and APIs

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 2     |
| 🟡       | 3     |
| 🟠       | 2     |
