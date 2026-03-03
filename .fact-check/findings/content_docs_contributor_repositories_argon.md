<!-- source: content/docs/contributor/repositories/argon.mdx -->

# 📄 File: content/docs/contributor/repositories/argon.mdx

> The documentation describes Argon as a Next.js-based web UI for CyanPrint templates using tRPC. The actual repository uses SvelteKit, not Next.js. There are significant inaccuracies in tech stack, architecture, and file structure claims. The package.json shows the project is named "carbon" not "argon".

### 🔴 Source Code Inaccuracies

1. **Framework**: Documented as "Next.js" | Actual: SvelteKit

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/svelte.config.js:1` - Uses `@sveltejs/kit` and `@sveltejs/adapter-auto`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:19` - Lists `@sveltejs/kit` as dependency

2. **Package Name**: Documented as "sulfone.argon" | Actual: "carbon"

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:2` - `"name": "carbon"`

3. **API Client**: Documented as "tRPC" | Actual: Swagger-generated HTTP client

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/api/core/Api.ts:3-9` - Generated via `swagger-typescript-api`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:29` - Uses `swagger-typescript-api`

4. **Key Files - prisma/ directory**: Documented as existing | Actual: Does not exist

   - Evidence: `prisma/` directory not found in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/`

5. **Key Files - src/server/ directory**: Documented as existing | Actual: Does not exist

   - Evidence: `src/server/` directory not found in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/`

6. **Key Files - src/app/ (Next.js App Router)**: Documented as existing | Actual: Uses SvelteKit routes at `src/routes/`

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/` - SvelteKit routing convention with `+page.svelte` and `+layout.svelte` files

7. **Page Structure - /search route**: Documented as `/search` | Actual: Search is at `/registry`

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/registry/+page.svelte` - Contains search functionality with `searchTerm` variable

8. **Page Structure - /user/login route**: Documented as existing | Actual: No `/user/` routes found

   - Evidence: `src/routes/user/` directory does not exist

9. **Page Structure - /user/profile route**: Documented as existing | Actual: Profile is at `/profile`, not `/user/profile`

   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/profile/+page.svelte`

10. **Page Structure - /templates/[id] route**: Documented as `/templates/[id]` | Actual: `/templates/[user_id]/[template_id]`

    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/routes/templates/[user_id]/[template_id]/+page.svelte`

11. **Page Structure - /templates/[id]/v/[version] route**: Documented as existing | Actual: No version route found

    - Evidence: No `/v/` or version route under templates

12. **Authentication**: Documented as "GitHub OAuth" | Actual: Descope OIDC

    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/hooks.server.ts:17-27` - Uses Descope OIDC provider, not GitHub

13. **Configuration Environment Variables**: Documented env vars `NEXT_PUBLIC_API_URL`, `ZINC_API_URL`, `GITHUB_CLIENT_ID`, `GITHUB_CLIENT_SECRET` | Actual: Uses `DESCOPE_ID`, `DESCOPE_SECRET`, `AUTH_SECRET`, `PUBLIC_LANDSCAPE`

    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/config/server/raichu.config.ts:2` - Uses `DESCOPE_ID`, `DESCOPE_SECRET`, `AUTH_SECRET`

14. **TemplateCard Component Props**: Documented props include `author`, `downloads` | Actual: Uses `userId`, `email`, no `downloads` on principal

    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/components/cards/template.svelte:8` - Uses `TemplatePrincipalResp` which has `userId`, `email` but not `author` or `downloads`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/lib/api/core/data-contracts.ts:315-326` - `TemplatePrincipalResp` has `userId`, `email` but not `author`

15. **SearchBar Component**: Documented as existing component | Actual: No `SearchBar` component found

    - Evidence: Grep for `SearchBar` returned no matches in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/src/`

16. **Build Commands**: Documented as `bun run test`, `bun run typecheck` | Actual: Uses `npm run test:integration && npm run test:unit`, `svelte-kit sync && svelte-check`

    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:9-14` - Scripts use different commands

17. **Storybook**: Documented to "Add Storybook stories for new components" | Actual: No Storybook configured
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/.storybook/` directory does not exist

### 🟡 Documentation Issues

1. **README Reference**: README identifies project as "Sulfone Carbon" not "Argon"

   - Location: First line of documentation
   - Fix: Verify project naming convention - documentation says "sulfone.argon" but README and package.json say "carbon"

2. **Architecture Diagram Inaccuracy**: Shows "Next.js Pages" and "tRPC Client" but actual implementation uses SvelteKit and swagger-generated HTTP client

   - Location: Architecture Mermaid diagram
   - Fix: Update diagram to show SvelteKit pages and HTTP client instead of tRPC

3. **Additional Routes Not Documented**: Documentation misses `/plugins/`, `/processors/`, `/resolvers/`, `/tokens/`, `/register/` routes
   - Location: Page Structure section
   - Fix: Add these routes to the page structure documentation

### 🟠 Other Problems

1. **Missing Information**: No documentation for:

   - Multi-landscape configuration (pichu, pikachu, raichu, lapras)
   - Error portal integration
   - API domain configuration

2. **Recommendation**: The entire documentation needs to be rewritten to reflect the actual SvelteKit implementation instead of Next.js. The tech stack table, key files, architecture diagram, page structure, building commands, and configuration sections are all incorrect.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 17    |
| 🟡       | 3     |
| 🟠       | 2     |
