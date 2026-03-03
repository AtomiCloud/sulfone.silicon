# File: content/docs/contributor/repositories/argon.mdx

> Documentation for Argon, described as a Next.js/React/tRPC-based web UI for the CyanPrint registry. This documentation claims it provides a visual interface to browse, search, and manage CyanPrint templates.

### Source Code Inaccuracies

1. **Tech Stack - Framework**
   - **Documented**: React (UI framework), Next.js (Full-stack framework)
   - **Actual**: SvelteKit with Svelte components
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:6-7` shows `"dev": "vite dev"` and uses `@sveltejs/kit`, `svelte` dependencies. No React or Next.js present.

2. **Tech Stack - tRPC**
   - **Documented**: tRPC (Type-safe API client)
   - **Actual**: OpenAPI-generated HTTP client using `swagger-typescript-api`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:29` includes `"swagger-typescript-api": "^13.0.3"`. The API client at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/api/core/Api.ts` is auto-generated from Swagger/OpenAPI spec, not tRPC.

3. **Project Name**
   - **Documented**: sulfone.argon
   - **Actual**: The package.json shows `"name": "carbon"` and README shows "Sulfone Carbon"
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:2` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.md:1`

4. **Key Files - Directory Structure**
   - **Documented**: `src/app/` (Next.js App Router pages), `src/server/` (Server-side code), `prisma/` (Database schema)
   - **Actual**: Uses SvelteKit routes at `src/routes/`, no `src/app/` directory, no `src/server/` directory, no Prisma
   - **Evidence**: Directory listing shows routes at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/`. No `prisma/` folder found via glob search. Server config is at `src/config/server/` not `src/server/`.

5. **Architecture Diagram**
   - **Documented**: Shows "Next.js Pages", "React Components", "tRPC Client", "tRPC Routers"
   - **Actual**: Should show SvelteKit routes, Svelte components, and OpenAPI HTTP client
   - **Evidence**: The entire codebase uses SvelteKit patterns with `.svelte` files, SvelteKit auth (`@auth/sveltekit`), and generated API client.

6. **Building Commands**
   - **Documented**: `bun run dev`, `bun run build`, `bun run test`, `bun run typecheck`
   - **Actual**: Uses `pls dev`, `pls build` via Taskfile, no `typecheck` script
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/Taskfile.yaml:24-42` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:5-14` shows scripts like `"dev": "vite dev"` and `"check": "svelte-kit sync && svelte-check"`, not `typecheck`.

7. **Configuration - Environment Variables**
   - **Documented**: `NEXT_PUBLIC_API_URL`, `ZINC_API_URL`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET`
   - **Actual**: No Next.js env vars (those are Next.js-specific). Uses Descope OIDC for auth, not GitHub OAuth directly. Config loaded from `src/config/` files.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/hooks.server.ts:17-26` shows Descope OIDC provider, not GitHub OAuth. No `NEXT_PUBLIC_*` or `ZINC_API_URL` found in codebase.

8. **Key Components - TemplateCard**
   - **Documented**: React component `<TemplateCard>` with JSX syntax
   - **Actual**: Svelte component at `src/lib/components/cards/template.svelte`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/components/cards/template.svelte` is a Svelte file using Svelte syntax (`<script lang="ts">`, `export let template`)

9. **Key Components - SearchBar**
   - **Documented**: React component `<SearchBar>` with autocomplete
   - **Actual**: No dedicated SearchBar component; search is inline in `registry/+page.svelte` using basic Input component without autocomplete
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte:128` uses `<Input>` with simple `bind:value={searchTerm}`. No autocomplete functionality.

10. **Authentication**
    - **Documented**: GitHub OAuth authentication
    - **Actual**: Descope OIDC authentication
    - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/hooks.server.ts:17-25` shows `id: 'descope'` provider with OIDC.

11. **Features - Category Navigation**
    - **Documented**: "Category-based navigation"
    - **Actual**: No category-based navigation found; search filters by resource type (template/plugin/processor)
    - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte:24-40` shows resource type selector (Template/Plugin/Processor), not categories.

12. **Page Structure - Routes**
    - **Documented**: `/templates/[id]`, `/templates/[id]/v/[version]`, `/search`, `/user/login`, `/user/profile`
    - **Actual**: Routes are `/templates/[user_id]/[template_id]`, no `/search` route (search is on `/registry`), no `/user/login` or `/user/profile` (has `/profile` and `/register`)
    - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/` shows actual routes: `templates/[user_id]/[template_id]`, `registry`, `profile`, `register`, `tokens`.

### Documentation Issues

1. **Component Example Syntax**
   - **Problem**: Documentation shows JSX/TSX syntax for components
   - **Location**: "Key Components" section (lines 122-143)
   - **Fix**: Update to show Svelte component syntax

2. **Storybook Mention**
   - **Problem**: Documentation mentions "Add Storybook stories for new components"
   - **Location**: "Contributing" section (line 152)
   - **Fix**: Remove Storybook reference - no Storybook configuration found in the repository

3. **React Best Practices**
   - **Problem**: Documentation says "Follow React best practices and hooks patterns"
   - **Location**: "Contributing" section (line 149)
   - **Fix**: Update to "Follow Svelte best practices"

4. **Type Checking Command**
   - **Problem**: Documents `bun run typecheck` which doesn't exist
   - **Location**: "Building" section (lines 102-103)
   - **Fix**: Change to `bun run check` or `pls check` (via Taskfile)

### Other Problems

1. **Name Confusion**
   - **Problem**: Documentation refers to "Argon" but package.json shows name "carbon" and README says "Sulfone Carbon"
   - **Recommendation**: Clarify whether this is Argon or Carbon, or if names are used interchangeably for different environments

2. **Stale/Incorrect Documentation**
   - **Problem**: This appears to be documentation for a completely different project (Next.js/React/tRPC) than what exists (SvelteKit)
   - **Recommendation**: Documentation needs complete rewrite to match actual SvelteKit implementation

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 12 |
| Documentation Issues | 4 |
| Other Problems | 2 |
