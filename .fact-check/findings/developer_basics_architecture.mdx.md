<!-- source: content/docs/developer/basics/architecture.mdx -->
# File: content/docs/developer/basics/architecture.mdx

> This document accurately describes the CyanPrint architecture with correct CLI name, ports, and endpoints. Found one missing artifact type (Resolver) and one minor inconsistency about Coordinator port usage.

### Source Code Inaccuracies
1. **Missing Resolver artifact type** | Documented: Only Template, Processor, Plugin, Merger containers in SDK Port Assignments table | Actual: There is a 5th artifact type "Resolver" on port 5553 with endpoint POST /api/resolve | helium/sdks/node/src/main.ts:145-166 shows `StartResolver` and `StartResolverWithLambda` functions with port 5553 and `/api/resolve` endpoint
2. **SDK Port Assignments table incomplete** | Documented: Template=5550, Processor=5551, Plugin=5552, Merger=9000, Coordinator=9000 | Actual: Resolver=5553 also exists as a valid SDK artifact type | helium/sdks/node/src/main.ts:147 shows `const port = 5553;` for Resolver

### Documentation Issues
1. **Component Overview table could mention Resolver** | Problem: The table lists only 4 components (Iridium CLI, Zinc API, Argon Web UI, Coordinator, Containers) but Resolver is an additional artifact type developers can create | Location: "Component Overview" table and "Container Communication" table | Fix: Add Resolver row to both tables with description "Resolves template references or configurations" and endpoint "POST /api/resolve"
2. **Merger row in SDK Port Assignments could be clarified** | Problem: The table lists Merger at port 9000 alongside Coordinator at 9000, which may cause confusion since the merger functionality runs inside the coordinator container | Location: "SDK Port Assignments" table | Fix: Add note clarifying that Merger endpoints are served by the Coordinator container internally, not as a separate SDK artifact

### Other Problems
1. **Argon Web UI shows resolvers but documentation omits them** | Problem: The Argon routes include `/resolvers/[user_id]/[resolver_id]/+page.ts` confirming Resolver is a supported artifact type in the registry UI | Recommendation: Update documentation to include Resolver as a first-class artifact type alongside Template, Processor, and Plugin
2. **Container Communication table missing Resolver** | Problem: The table shows Template, Processor, Plugin, Merger but Resolver is also a valid container type | Recommendation: Add row: "Resolver | Resolves template configurations | POST /api/resolve"

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 2 |
| Documentation Issues | 2 |
| Other Problems | 2 |
