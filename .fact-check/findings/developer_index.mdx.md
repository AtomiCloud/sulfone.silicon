<!-- source: content/docs/developer/index.mdx -->
# 📄 File: content/docs/developer/index.mdx

> Overview page for developer documentation describing CyanPrint's four extensible artifact types.

### 🔴 Source Code Inaccuracies
1. Documented: "Resolvers - Resolve file conflicts from layered templates" | Actual: The documentation mentions Resolvers in the table but does not provide a link to Resolver documentation in the "Build Your Artifact" section | Location: Line 18 (table) vs Lines 32-34 (Build Your Artifact section) | Evidence: helium/sdks/node/src/main.ts:145-166 shows `StartResolver` and `StartResolverWithLambda` functions on port 5553 with `/api/resolve` endpoint, confirming Resolver is a full artifact type like Templates/Processors/Plugins

### 🟡 Documentation Issues
1. Missing link for Resolvers | Problem: The "Build Your Artifact" section lists only Templates, Processors, and Plugins but not Resolvers, despite Resolvers being listed as an artifact type in the table | Location: Lines 32-34 | Fix: Add `- [Resolvers](/docs/developer/resolvers) - Build file conflict resolvers for layered templates` to the "Build Your Artifact" section
2. Inconsistent artifact count | Problem: The page states there are "four extensible components called artifacts" but only provides paths for three of them | Location: Line 12 and Lines 30-35 | Fix: Either add the Resolver documentation path or clarify if Resolver documentation is pending

### 🟠 Other Problems
1. Incomplete documentation coverage | Problem: Resolver artifact type exists in codebase but lacks a corresponding documentation section link | Recommendation: Create a `/docs/developer/resolvers` section or add a note that Resolver documentation is coming soon

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 2 |
| 🟠 | 1 |
