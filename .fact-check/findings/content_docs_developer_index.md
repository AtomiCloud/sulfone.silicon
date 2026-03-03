<!-- source: content/docs/developer/index.mdx -->

# 📄 File: content/docs/developer/index.mdx

> The documentation index provides a high-level overview of CyanPrint's extensible components. The claims are generally accurate, but there is a missing fourth artifact type (Resolver) that exists in the SDK but is not documented.

### 🔴 Source Code Inaccuracies

1. **Missing Resolver Artifact** | Documented: 3 artifacts (Templates, Processors, Plugins) | Actual: 4 artifacts (Templates, Processors, Plugins, Resolvers)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:145-166` shows `StartResolver` on port 5553 with `/api/resolve` endpoint
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:23` exports `ICyanResolver` interface
   - The Resolver is a first-class artifact in the SDK alongside Templates, Processors, and Plugins

### 🟡 Documentation Issues

1. **Incomplete Artifact List** | Location: Line 12-18 (table) | Fix: Add Resolver artifact to the table

   - The documentation states "CyanPrint has three extensible components called artifacts" but there are actually four
   - Missing entry: `**Resolvers** | Resolve dependencies and configurations | 5553`

2. **Missing Resolver Link** | Location: Lines 29-33 (Build Your Artifact section) | Fix: Add link to Resolvers documentation
   - Should add: `- [Resolvers](/developer/resolvers) - Build dependency resolvers for templates`
   - Note: The `/developer/resolvers` directory does not exist and would need to be created

### 🟠 Other Problems

1. **Inconsistent Artifact Count** | Recommendation: Either document the Resolver artifact or clarify if it's internal-only

   - The Resolver appears to be a user-facing SDK feature (exported from main.ts) but is completely absent from user documentation
   - If Resolvers are meant for internal use only, they should not be exported in the public SDK
   - If Resolvers are a user-facing feature, they need full documentation

2. **Architecture Documentation Gap** | Recommendation: Update `/developer/basics/introduction.mdx` and `/developer/basics/architecture.mdx` to include Resolver
   - The architecture page shows only Template, Processor, and Plugin containers
   - Should include Resolver container on port 5553 with `/api/resolve` endpoint

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 2     |
| 🟠       | 2     |
