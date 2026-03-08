<!-- source: content/docs/developer/processors/explanation/why-processors.mdx -->
# 📄 File: content/docs/developer/processors/explanation/why-processors.mdx

> Documentation explaining why processors exist and when to use custom processors vs the default processor. Contains generally accurate information about the SDK, GlobType enum, and processor API usage.

### 🔴 Source Code Inaccuracies
(None found - all factual claims verified against source code)

### 🟡 Documentation Issues
1. Problem: The GlobType values callout only mentions Node and Python SDKs, omitting the .NET SDK | Location: Line 150 | Fix: Add mention of .NET SDK which uses `Template = 0, Copy = 1` (same as Node). The complete statement should be: "`GlobType.Template` (value `0` in Node SDK and .NET SDK, `1` in Python SDK) processes files through the templating engine."
2. Problem: The example code comments say "illustrative example" which is good, but `generateTypeScript`, `parseTypeScript`, `addDeprecationComments`, `printTypeScript`, and `removeDebugCode` are shown as user-defined functions without clarifying that these are conceptual examples | Location: Lines 65-134 | Fix: The existing comments are sufficient - "generateTypeScript is a user-defined function" and similar are already present.

### 🟠 Other Problems
1. Problem: The document references `cyan/default` processor as the default processor using Eta templating with `var__name__` syntax. The iridium/e2e/processor1 implementation confirms this behavior exists, but the actual `cyan/default` name appears to be a registry identifier rather than a source file in the referenced paths. | Recommendation: This is acceptable - the documentation accurately describes the behavior and the naming convention is consistent with how processors are referenced in templates (e.g., `cyane2e/processor1`).

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 2 |
| 🟠 | 1 |
