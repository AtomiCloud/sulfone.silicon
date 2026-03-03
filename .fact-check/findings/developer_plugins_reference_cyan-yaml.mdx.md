<!-- source: content/docs/developer/plugins/reference/cyan-yaml.mdx -->
# 📄 File: content/docs/developer/plugins/reference/cyan-yaml.mdx

> This documentation describes a cyan.yaml schema that is **completely different** from the actual implementation. The documented properties, types, and structure do not match the source code.

### 🔴 Source Code Inaccuracies

1. **Documented: `name: org/my-plugin` (org/name format)**
   **Actual: `username` and `name` are separate fields**
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs:4-6`
   ```rust
   pub struct CyanPluginFileConfig {
       pub username: String,
       pub name: String,
   ```
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:1-2`
   ```yaml
   username: ernest
   name: plugin1
   ```

2. **Documented: `version: 1.0.0` as a required property**
   **Actual: No `version` field exists in plugin cyan.yaml**
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs` - no `version` field
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml` - no `version` field
   - Versions are managed by the registry, not declared in cyan.yaml

3. **Documented: `author: Your Name` as a property**
   **Actual: No `author` field exists - uses `username` and `email` instead**
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs` - no `author` field
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Plugin.cs:53-61` - PluginMetadata has no `author` field

4. **Documented: `license: MIT` as a property**
   **Actual: No `license` field exists in the schema**
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs` - no `license` field
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/Plugin.cs:53-61` - PluginMetadata has no `license` field

5. **Documented: `repository: https://...` as a property**
   **Actual: Uses `source` and `project` fields instead**
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs:9-11`
   ```rust
   pub project: String,
   pub source: String,
   ```
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:4-5`
   ```yaml
   project: https://atomi.cloud
   source: https://atomi.cloud
   ```

6. **Documented: `keywords: string[]` as a property**
   **Actual: Uses `tags: string[]` instead**
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs:15`
   ```rust
   pub tags: Vec<String>,
   ```
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:7`
   ```yaml
   tags: []
   ```

7. **Documented: `config: object` with config schema definition**
   **Actual: No `config` field exists in plugin cyan.yaml**
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/plugin_config.rs` - no `config` field
   - Config is passed at runtime by templates, not defined in plugin metadata

8. **Documented: Plugin name format `org/name:version` in templates**
   **Actual: Plugin reference format is `username/name[:version]`**
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:34-38`
   ```rust
   pub struct CyanPluginRef {
       pub username: String,
       pub name: String,
       pub version: Option<i64>,
   }
   ```
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md:49-51`
   ```yaml
   plugins: ['atomi/formatter']
   ```

9. **Documented: Required properties `name` and `version`**
   **Actual: Required properties are `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`**
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Validators/PluginValidator.cs:16-28` - CreatePluginReqValidator requires Name, Project, Source, Email, Tags, Description, Readme

### 🟡 Documentation Issues

1. **Problem: The "Properties" table lists incorrect fields**
   **Location**: Lines 22-31
   **Fix**: Replace with actual schema:
   | Property | Type | Required | Description |
   |----------|------|----------|-------------|
   | `username` | `string` | Yes | Owner username |
   | `name` | `string` | Yes | Plugin name |
   | `description` | `string` | Yes | Brief description |
   | `project` | `string` | Yes | Project URL |
   | `source` | `string` | Yes | Source repository URL |
   | `email` | `string` | Yes | Contact email |
   | `tags` | `string[]` | Yes | Search tags |
   | `readme` | `string` | Yes | Path to README file |

2. **Problem: "Basic Structure" example uses wrong format**
   **Location**: Lines 12-18
   **Fix**: Replace with actual format:
   ```yaml
   username: atomi
   name: my-plugin
   description: A plugin that performs post-processing operations
   project: https://github.com/atomi/my-plugin
   source: https://github.com/atomi/my-plugin.git
   email: admin@atomi.cloud
   tags: [formatting, post-process]
   readme: README.MD
   ```

3. **Problem: "Full Example" shows completely wrong structure**
   **Location**: Lines 35-68
   **Fix**: Remove `version`, `author`, `license`, `repository`, `keywords`, `config` sections and use actual fields

4. **Problem: "Config Schema" section describes non-existent feature**
   **Location**: Lines 70-102
   **Fix**: Remove entirely - plugins don't define config schemas in cyan.yaml. Config is passed by templates at runtime.

5. **Problem: "Usage in Templates" section uses wrong reference format**
   **Location**: Lines 104-117
   **Fix**: Update to use `username/name` format and remove `config` block:
   ```yaml
   # In template's cyan.yaml
   plugins:
     - atomi/setup-plugin:1
   ```

6. **Problem: "Versioning Best Practices" section is misleading**
   **Location**: Lines 119-133
   **Fix**: Version is specified as integer after colon (e.g., `username/name:3`), not semantic version strings. The `version` field shown in examples does not exist in plugin cyan.yaml.

7. **Problem: Missing required `readme` field in all examples**
   **Location**: Throughout document
   **Fix**: Add `readme: README.MD` or similar to all examples

### 🟠 Other Problems

1. **Problem: Documentation appears to describe a different system entirely**
   **Recommendation**: This document needs a complete rewrite based on the actual cyan.yaml schema found in iridium/cyanregistry/src/cli/models/plugin_config.rs. Consider reviewing existing working examples in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin2/cyan.yaml`.

2. **Problem: Documentation conflates plugin metadata with plugin configuration**
   **Recommendation**: Clarify that cyan.yaml only contains metadata (for registry/discovery). Runtime config is provided by the template script when invoking plugins.

3. **Problem: The document title says "Plugin cyan.yaml" but the content could confuse users with the template cyan.yaml**
   **Recommendation**: Add a note distinguishing plugin cyan.yaml from template cyan.yaml. Templates have additional fields (`processors`, `plugins`, `templates` arrays) that plugins don't have.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 9 |
| 🟡 | 7 |
| 🟠 | 3 |
