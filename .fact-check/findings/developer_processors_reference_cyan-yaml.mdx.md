<!-- source: content/docs/developer/processors/reference/cyan-yaml.mdx -->
# 📄 File: content/docs/developer/processors/reference/cyan-yaml.mdx

> Documentation is accurate and matches source code. All field definitions, types, and descriptions are correct. The code example for `StartProcessorWithLambda` matches the SDK implementation. All related links are valid.

### 🔴 Source Code Inaccuracies
(none found)

### 🟡 Documentation Issues
1. **Example URL inconsistency** | "Full Example" section (line 43-54) | The example uses `atomicloud` as the username and `cyan-processor`/`markdown-processor` as source/project URLs. While these are example URLs, they don't match the actual e2e test files which use `cyane2e` as username and `https://google.com` for URLs. Consider using more realistic placeholder URLs or consistent naming.

### 🟠 Other Problems
1. **Empty tags array in source examples** | The actual processor yaml files in iridium/e2e have `tags: []` (empty array) rather than populated tags as shown in documentation examples. This is fine for examples but worth noting for consistency.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 1 |
| 🟠 | 1 |
