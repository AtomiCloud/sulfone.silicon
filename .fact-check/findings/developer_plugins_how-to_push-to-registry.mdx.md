<!-- source: content/docs/developer/plugins/how-to/push-to-registry.mdx -->
# 📄 File: content/docs/developer/plugins/how-to/push-to-registry.mdx

> This document covers pushing Docker images to container registries for plugins. While generally accurate for Docker workflows, it has several issues: a broken link to a non-existent "Plugin Registry" page, inaccurate versioning examples using semver-style tags instead of the actual auto-increment integer versions used by Zinc, and potentially misleading plugin reference syntax in YAML examples.

### 🔴 Source Code Inaccuracies
(for each: Documented | Actual | file:line evidence)

1. **Link to non-existent Plugin Registry page**: The document links to `/docs/developer/plugins/reference/registry` (line 224) which does not exist. The Plugin Reference index (`content/docs/developer/plugins/reference/index.mdx`) shows no such page. The actual plugin registry is documented in Zinc at `zinc/docs/developer/surfaces/api/03-plugin.md`.

2. **Versioning format in examples uses semver-style tags**: The document shows version tags like `:1.0.0`, `:2.0.0`, `:1.1.0`, `:1.0.1` (lines 52-53, 60-61, 110-122, 131, 134, 181-182). However, Zinc uses auto-incrementing `ulong` integers (v1, v2, v3), not semver. Source: `zinc/docs/developer/concepts/04-version.md:6-13` states: "Actual Version Format: Type: ulong (simple integer), Pattern: Auto-increment starting from 1" and "NOT (Previous Incorrect Docs): Semantic versioning - Versions are simple incrementing integers".

3. **Plugin reference in cyan.yaml uses incorrect syntax with versions**: The example at lines 129-136 shows:
   ```yaml
   plugins:
     - name: org/my-plugin:1.0.0  # Pinned version
       config: {}
   ```
   Actual plugin references in e2e tests use simple `username/plugin-name` format without version in the string. The version is a separate concern managed by the registry. Source: `iridium/e2e/template1/cyan.yaml:10` shows `plugins: ['cyane2e/plugin1']` and `iridium/e2e/template3/cyan.yaml:10` shows `plugins: [cyane2e/plugin1]`.

### 🟡 Documentation Issues
(for each: Problem | Location | Fix)

1. **Missing CyanPrint registry registration details**: The document states "You must also register your plugin with the CyanPrint registry (Zinc)" (lines 86-88, 215-216) but only defers to a non-existent page. Should document the actual API endpoint: `POST /api/v1/plugin/push/{username}` as shown in `zinc/docs/developer/surfaces/api/03-plugin.md:620-670`.

2. **Ambiguous version pinning statement**: Line 139 states "The system does not perform semantic version range matching (e.g., `org/plugin:1` will not resolve to the latest 1.x.x)". While technically correct that there's no semver matching, this implies semver-style tags like `:1` exist. Actually, Zinc uses integer version numbers resolved by `ORDER BY Version DESC` (see `zinc/docs/developer/algorithms/02-version-resolution.md:42-58`).

3. **Docker tag vs Registry version conflation**: The document conflates Docker image tags (e.g., `:1.0.0`) with Zinc registry versions (integers: 1, 2, 3). The `dockerTag` field in Zinc (see `zinc/docs/developer/surfaces/api/03-plugin.md:299`) stores the Docker tag as a string property, separate from the auto-increment version number. This distinction should be clarified.

4. **Incomplete plugin reference syntax**: The example at lines 129-136 shows `name: org/my-plugin:1.0.0` with `config: {}`. Real examples show plugins as simple strings without the `name:` and `config:` structure in the YAML array (see `iridium/e2e/template3/cyan.yaml:10`). However, the SDK does use `name` and `config` properties (see `iridium/e2e/template3/cyan/index.ts:56-59`), suggesting the YAML format and programmatic format differ.

### 🟠 Other Problems
(for each: Problem | Recommendation)

1. **No documentation of actual registry API usage**: The document describes Docker push workflows but not how to use the Zinc Push Plugin API (`POST /api/v1/plugin/push/{username}`) which creates/updates plugin metadata and creates a new version atomically. Consider adding API-based registration examples.

2. **GitHub Actions example incomplete**: The workflow (lines 148-183) only pushes to GHCR but doesn't show the subsequent step of registering with the CyanPrint registry. This could mislead users into thinking the Docker push alone is sufficient despite the warnings.

3. **Naming convention examples lack version scope guidance**: The document shows patterns like `org/plugin-name` but doesn't explain how versions relate to multiple Docker tags. Users might push both `:latest` and `:1.0.0` tags but need to understand that each registry version points to one specific `dockerImage:dockerTag` pair.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 4 |
| 🟠 | 3 |
