<!-- source: content/docs/user/explanation/template-lifecycle.mdx -->
# 📄 File: content/docs/user/explanation/template-lifecycle.mdx

> This document has multiple inaccuracies: it describes semantic versioning when the system uses simple integer versioning, and documents a deprecation feature that does not exist in the source code.

### 🔴 Source Code Inaccuracies

1. **Documented**: "Templates use semantic versioning (MAJOR.MINOR.PATCH)"
   - **Actual**: Templates use auto-incrementing integer version numbers (1, 2, 3, ...), not semantic versioning
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/docs/developer/concepts/04-version.md:3-7` explicitly states: "Previous documentation incorrectly described versions as semver-encoded. **Type**: `ulong` (simple integer)". Also confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/TemplateVersion.cs:32-33` where `Version` is `ulong`, not a semver string.

2. **Documented**: "MAJOR: Breaking changes, MINOR: New features, backward compatible, PATCH: Bug fixes"
   - **Actual**: Since the system uses integer versioning (1, 2, 3...), these semantic versioning categories do not apply. Version numbers simply auto-increment on each push.
   - **Evidence**: Same as above. The version is a monotonically increasing integer with no semantic meaning.

3. **Documented**: "Templates may be deprecated by their maintainers. Deprecated templates remain available but show a warning when used."
   - **Actual**: No deprecation functionality exists in the template registry models or CLI. The `Template`, `TemplatePrincipal`, `TemplateVersion`, and `TemplateVersionPrincipal` models have no `deprecated`, `is_deprecated`, or similar field. The only deprecation references in the codebase are for Swagger API versioning, not template deprecation.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Template.cs:1-56` shows no deprecation field. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/TemplateVersion.cs:1-57` shows no deprecation field. Grep for `deprecated|is_deprecated|IsDeprecated` in zinc only finds Swagger-related deprecation (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/StartUp/Services/Swagger/SwaggerConfig.cs:83-84`), not template deprecation.

### 🟡 Documentation Issues

1. **Problem**: The Versioning section provides semantic versioning guidance that cannot be followed since versions are auto-incremented integers
   - **Location**: Lines 9-14 (entire Versioning section)
   - **Fix**: Replace the Versioning section with accurate description of how versioning actually works:
   ```markdown
   ## Versioning

   Templates use auto-incrementing integer versions (1, 2, 3, ...).

   Each time you publish a template with `cyanprint push`, a new version is automatically created with the next integer. Version numbers have no semantic meaning - they simply track the order of publication.
   ```

2. **Problem**: The Deprecation section documents a non-existent feature
   - **Location**: Lines 22-24 (entire Deprecation section)
   - **Fix**: Remove the Deprecation section entirely, or replace with a note that deprecation is not currently supported:
   ```markdown
   ## Deprecation

   Template deprecation is not currently supported. To indicate a template is no longer maintained, update the template description or readme to note this.
   ```

3. **Problem**: The update command reference is correct (`cyanprint update`) but no detail about how "latest" is determined
   - **Location**: Line 18
   - **Fix**: Add clarification that "latest" means the highest integer version number available in the registry

### 🟠 Other Problems

1. **Problem**: This document is very brief (30 lines) and provides minimal value for users trying to understand template lifecycle
   - **Recommendation**: Consider expanding this document with:
     - How versions are created (via `cyanprint push`)
     - How to view available versions
     - How version selection works in interactive mode
     - Link to the state file format (`.cyan_state.yaml`)

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 3 |
| 🟠 | 1 |
