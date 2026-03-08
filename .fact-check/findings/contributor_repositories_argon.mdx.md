<!-- source: content/docs/contributor/repositories/argon.mdx -->
# 📄 File: content/docs/contributor/repositories/argon.mdx

> Fact-check for Argon repository documentation. Verified against source code in /Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon. Tech stack is correctly documented as Svelte/SvelteKit, not React/Next.js (though index.mdx has an error). Key files, page structure, and component structure are accurate.

### 🔴 Source Code Inaccuracies
1. **Documented**: `npm install` | **Actual**: Project uses Bun (`bun i`) as shown in Taskfile.yaml:16 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml:16`
2. **Documented**: `npm run dev` | **Actual**: Project uses Bun (`bun run dev`) as shown in Taskfile.yaml:27 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml:27`
3. **Documented**: `npm run build` | **Actual**: Project uses Bun (`bun run build`) as shown in Taskfile.yaml:32 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml:32`
4. **Documented**: `npm run test:integration && npm run test:unit` | **Actual**: Project uses Bun (`bun run test`) which internally runs the test commands as shown in Taskfile.yaml:42 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml:42`
5. **Documented**: `npm run check` | **Actual**: Project uses Bun (`bun run check`) per package.json:10 | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:10`
6. **Documented**: TemplateCard component example shows `userId: "user-123"` | **Actual**: The actual `TemplatePrincipalResp` interface uses `userId?: string | null` (optional, not required) and the component access `template.userId` directly | File: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/api/core/data-contracts.ts:315-326`

### 🟡 Documentation Issues
1. **Problem**: Example code for TemplateCard uses `name`, `description`, `userId`, `email`, `tags` as if they are required fields | **Location**: Lines 124-134 | **Fix**: Note that these are optional fields (`?` in TypeScript) or show realistic example with optional handling
2. **Problem**: The `index.mdx` file at `/content/docs/contributor/repositories/index.mdx:41,82` incorrectly lists Argon as using "TypeScript, React, Tailwind CSS, tRPC" and "Framework: React, Next.js" | **Location**: Cross-reference issue | **Fix**: Update index.mdx to correctly show "TypeScript, Svelte, SvelteKit, Tailwind CSS" and "Framework: SvelteKit"
3. **Problem**: The configuration section mentions `PUBLIC_LANDSCAPE=raichu` as the example, but the default in Taskfile.yaml:10 is `lapras` | **Location**: Line 115 | **Fix**: Either update example to show `lapras` as default or note that different landscapes have different defaults

### 🟠 Other Problems
1. **Problem**: The documentation mentions "usage analytics" as a feature but no evidence of analytics implementation was found in the source code | **Recommendation**: Either remove this feature claim or verify/add analytics implementation
2. **Problem**: The architecture diagram shows "API Endpoints" as an intermediate layer between HTTP Client and Zinc REST API, but the actual architecture uses direct API calls from the swagger-typescript-api generated client to Zinc | **Recommendation**: Simplify the diagram to show direct connection from "Swagger HTTP Client" to "Zinc REST API"
3. **Problem**: The search example code (lines 140-146) shows basic HTML input but actual implementation is more sophisticated with resource type selection and async search | **Recommendation**: Either simplify the description or update the example to be more realistic

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 6 |
| 🟡 | 3 |
| 🟠 | 3 |
