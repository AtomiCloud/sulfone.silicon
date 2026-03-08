<!-- source: content/docs/developer/processors/how-to/push-to-registry.mdx -->
# 📄 File: content/docs/developer/processors/how-to/push-to-registry.mdx

> This document describes the process of pushing processors to container registries and registering them with Zinc. The API endpoint reference and CLI command documentation are accurate. Several minor issues were found.

### 🔴 Source Code Inaccuracies
None found.

### 🟡 Documentation Issues

1. **Missing CLI Command for Registration** | Line 141 | The document references the Zinc API endpoint `POST /api/v1/processor/push/{username}` but does not mention that users should use `cyanprint push processor <IMAGE> <TAG>` CLI command (documented in CLI reference) which is the primary way to register processors. The current text only says "refer to the Zinc Registry API documentation" which is a contributor-level doc, not a developer guide.

2. **Inconsistent API Version Format** | Line 141 | The document shows `/api/v1/processor/push/{username}` while the Zinc documentation uses `/api/v{version}/processor/push/{username}`. Both are correct, but for consistency with other API references, should use the same format or clarify that `v1` is the current version.

3. **Code Example Missing Import** | Lines 116-124 | The TypeScript code example shows `GlobType.Template` but doesn't show the import statement. Should include `import { GlobType } from '@atomicloud/cyan-sdk';` for completeness, consistent with other documentation examples.

### 🟠 Other Problems

1. **Terminology Confusion** | Lines 11, 69, 109, 132 | The document uses both "CyanPrint registry (Zinc)" and just "Zinc" interchangeably. For new users, this could be confusing. Recommend standardizing on one term (e.g., always use "Zinc registry" or "CyanPrint registry").

2. **Missing Step for CLI Authentication** | Prerequisites section (Line 13-18) | The prerequisites mention "Docker installed and logged in" but don't mention that users need a CyanPrint authentication token (`CYAN_TOKEN` or `--token`) to push to the registry. This is documented in the CLI commands reference but should be mentioned here as well.

3. **Incomplete CI/CD Example** | Lines 195-197 | The warning correctly states that Docker push alone is insufficient, but doesn't show how to add the `cyanprint push processor` command to the GitHub Actions workflow. This leaves developers without a complete CI/CD solution.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 3 |
| 🟠 | 3 |
