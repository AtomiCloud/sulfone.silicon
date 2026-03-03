<!-- source: content/docs/developer/templates/reference/cyan-yaml.mdx -->
# 📄 File: content/docs/developer/templates/reference/cyan-yaml.mdx

> The documentation completely fabricates the cyan.yaml format. The actual format is fundamentally different from what is documented. The documented format uses NPM-like `name: myorg/my-template`, `version: 1.0.0`, and `compose` fields, while the actual format uses `username`, `name`, `processors`, `plugins`, and `templates` arrays as simple string references.

### 🔴 Source Code Inaccuracies

1. **`name` field format** | Documented: `myorg/my-template` format | Actual: Uses separate `username` and `name` fields | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:1-2` shows `username: ernest` and `name: template1` as separate fields

2. **`version` field** | Documented: Required field with semantic versioning (`version: 1.0.0`) | Actual: No version field exists in cyan.yaml; versions are auto-incrementing integers managed by the registry | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:1-24` shows CyanTemplateConfig struct has no version field

3. **`author` field** | Documented: Optional `author` field | Actual: No `author` field; uses `email` instead | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:13` shows `email` field, no author

4. **`license` field** | Documented: Optional `license` field | Actual: No `license` field exists | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:1-24` shows no license field

5. **`keywords` field** | Documented: Optional `keywords` array | Actual: Uses `tags` array instead | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:7` shows `tags: []`, not keywords

6. **`homepage` field** | Documented: Optional `homepage` URL | Actual: Uses `project` field instead | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:4` shows `project: https://google.com`

7. **`repository` field** | Documented: Object with `type` and `url` | Actual: Uses simple `source` string field | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:5` shows `source: https://google.com`

8. **`compose` field** | Documented: Array with `name`, `version`, and optional `condition` | Actual: Uses `templates` array with simple string references `username/name[:version]` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template4/cyan.yaml:11-13` shows `templates:\n  - ernest/template3:4`

9. **Version constraints in compose** | Documented: Supports `"1.0.0"`, `"^1.0.0"`, `">=1.0.0 <2.0.0"` | Actual: Uses integer version after colon (`username/name:4`) or versionless (`username/name`) | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md:50-52` states "Version is optional: `cyan/default` (versionless) or `atomi/typescript:3` (versioned)"

10. **Conditional composition** | Documented: `condition: ${usesDocker}` syntax | Actual: No conditional composition support | Evidence: No code found supporting conditionals in templates

11. **`plugins` field format** | Documented: Objects with `name` and `config` | Actual: Simple string array `['username/pluginname']` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:10` shows `plugins: ['ernest/plugin1']`

12. **Required fields** | Documented: `name` and `version` are required | Actual: `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme` are the actual fields; version not in yaml | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Template.cs:47-55` shows TemplateMetadata fields

13. **Version format** | Documented: Semantic versioning (MAJOR.MINOR.PATCH) | Actual: Auto-incrementing integers starting from 1 | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/docs/developer/concepts/04-version.md:6-19` states "Type: `ulong` (simple integer)" and explicitly notes "NOT Semantic versioning"

### 🟡 Documentation Issues

1. **Wrong identifier format** | Location: Lines 26-34 | Fix: Change from `name: myorg/my-template` to separate `username` and `name` fields

2. **Invented version field** | Location: Lines 37-47 | Fix: Remove the version field documentation entirely; explain versions are registry-managed integers

3. **Wrong optional fields** | Location: Lines 58-101 | Fix: Replace `author`, `license`, `keywords`, `homepage`, `repository` with actual fields: `email`, `tags`, `project`, `source`, `readme`

4. **Wrong compose section** | Location: Lines 103-131 | Fix: Rename `compose` to `templates` and update format to simple string arrays with optional `:version` suffix

5. **Wrong version constraint syntax** | Location: Lines 119-122 | Fix: Replace semver constraints with integer version syntax (`:3` for version 3)

6. **Wrong plugins section** | Location: Lines 133-146 | Fix: Update to show plugins as simple string array, not objects with config

7. **Fabricated complete example** | Location: Lines 148-190 | Fix: Replace with example matching actual format from e2e tests

### 🟠 Other Problems

1. **Documentation appears to be completely fabricated** | The documented format resembles NPM package.json or Cargo.toml but bears no resemblance to the actual cyan.yaml format used by the system. Recommend complete rewrite based on actual source code and existing examples.

2. **Confusion between cyan.yaml (template metadata) and Cyan object (runtime config)** | The documentation conflates two separate concepts. The cyan.yaml defines static template metadata, while the Cyan object returned by scripts defines runtime processor/plugin configuration. See `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md` for the correct explanation.

3. **Missing documentation for `processors` field** | The actual cyan.yaml has `processors` field for declaring processor dependencies (similar to templates/plugins), which is completely absent from the documentation.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 13 |
| 🟡 | 7 |
| 🟠 | 3 |
