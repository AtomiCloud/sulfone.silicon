<!-- source: content/docs/developer/plugins/reference/cyan-yaml.mdx -->
# 📄 File: content/docs/developer/plugins/reference/cyan-yaml.mdx

> Document accurately describes the plugin cyan.yaml configuration schema. All documented fields match the source code definitions in iridium and zinc.

### 🔴 Source Code Inaccuracies
None found. All documented fields (`username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`) match the source code:
- `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/plugin_config.rs` defines `CyanPluginFileConfig` with exact same 8 fields
- `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/cyan.yaml` confirm field names in practice
- `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Plugin.cs` confirms registry metadata fields

### 🟡 Documentation Issues

1. **Plugin reference format uses list syntax, but e2e tests show flow-style arrays**
   - Location: "Usage in Templates" section (lines 74-79)
   - Documented:
     ```yaml
     plugins:
       - atomi/setup-plugin:1
       - atomi/formatter
     ```
   - E2E tests use flow-style: `plugins: ['cyane2e/plugin1']` (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml`)
   - Fix: Both styles are valid YAML; no fix needed, just noting the variation

### 🟠 Other Problems

1. **Version format in example uses `:1` but documentation implies integer**
   - Location: "Usage in Templates" and "Versioning" sections
   - The examples show `atomi/setup-plugin:1` and `atomi/setup-plugin:3`
   - Source code confirms version is `Option<i64>` in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs` line 37
   - Documentation is accurate; just noting for completeness

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 1 (minor - YAML style variation, not an error) |
| 🟠 | 1 (informational note) |
