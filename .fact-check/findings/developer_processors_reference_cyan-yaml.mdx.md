<!-- source: content/docs/developer/processors/reference/cyan-yaml.mdx -->
# 📄 File: content/docs/developer/processors/reference/cyan-yaml.mdx

> This documentation describes a cyan.yaml format that significantly differs from the actual implementation. The documented schema includes fields like `version`, `author`, `license`, `repository`, `keywords`, and `processor.inputs` that do not exist in the actual source code. The actual cyan.yaml schema for processors uses different fields: `username`, `name`, `description`, `project`, `source`, `email`, `tags`, and `readme`.

### 🔴 Source Code Inaccuracies

1. **Documented Required Field `name` format vs Actual**
   - Documented: `name` in "org/name format" (e.g., `myorg/my-processor`)
   - Actual: `name` is a simple string without org prefix (e.g., `processor1`, `dotnet-handlebar`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml:2` shows `name: processor1`

2. **Documented Required Field `version` Does Not Exist**
   - Documented: `version` is a required field (string, semantic version)
   - Actual: `version` field does not exist in processor cyan.yaml schema
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - `CyanProcessorFileConfig` struct has no `version` field

3. **Documented Optional Field `author` Does Not Exist**
   - Documented: `author` is an optional string field
   - Actual: `author` field does not exist; the schema uses `username` and `email` instead
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - No `author` field present

4. **Documented Optional Field `license` Does Not Exist**
   - Documented: `license` is an optional SPDX license identifier
   - Actual: `license` field does not exist in processor cyan.yaml schema
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - No `license` field

5. **Documented Optional Field `repository` Does Not Exist**
   - Documented: `repository` is an optional source repository URL
   - Actual: `repository` field does not exist; schema uses `project` and `source` fields instead
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - Has `project` and `source`, no `repository`

6. **Documented Optional Field `keywords` Does Not Exist**
   - Documented: `keywords` is an optional string array
   - Actual: `keywords` field does not exist; schema uses `tags` field instead
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - Has `tags: Vec<String>`, no `keywords`

7. **Documented `processor.inputs` Configuration Schema Does Not Exist**
   - Documented: Entire `processor.inputs` schema with `name`, `type`, `required`, `default`, `description`, `enum`, `properties`, `items` fields
   - Actual: No `processor` object or `inputs` array exists in cyan.yaml. Config is passed dynamically via templates at runtime, not defined in cyan.yaml
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - No `processor` field in struct

8. **Actual Required Fields Missing from Documentation**
   - Documented: Only `name` and `version` as required
   - Actual: `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme` are all required fields
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/processor_config.rs:4-20` - All fields are non-optional in Rust struct

9. **Code Example Uses Wrong Config Pattern**
   - Documented: `input.config` contains properties like `features`, `frontmatter`, `headingPrefix`, `formatting`
   - Actual: `input.config` is typed as `unknown` and is populated by template configuration, not cyan.yaml
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `CyanProcessorInput.config: unknown`

### 🟡 Documentation Issues

1. **Incorrect Example Organization Name**
   - Problem: Full example uses `atomicloud/markdown-processor` with org format
   - Location: Lines 88-89
   - Fix: Should use simple name like `markdown-processor` and include `username` field separately

2. **Missing Actual Fields from Documentation**
   - Problem: Documentation does not mention actual required fields: `username`, `project`, `source`, `email`, `readme`
   - Location: Required/Optional Fields tables (lines 23-37)
   - Fix: Add tables documenting the actual schema fields

3. **Misleading Config Documentation**
   - Problem: The entire "Processor Configuration Schema" section (lines 39-73) describes a non-existent feature
   - Location: Lines 39-73
   - Fix: Remove or clarify that config is defined in templates, not in processor's cyan.yaml

4. **Incorrect TypeScript Interface Example**
   - Problem: The `MarkdownConfig` interface example implies config is defined in cyan.yaml
   - Location: Lines 144-168
   - Fix: Clarify that config types are user-defined and passed from templates at runtime

5. **Incorrect Full Example Structure**
   - Problem: Full example shows `license: Apache-2.0`, `repository` URL, `keywords` array - none of which exist
   - Location: Lines 87-137
   - Fix: Update example to match actual schema with `username`, `project`, `source`, `email`, `tags`, `readme`

### 🟠 Other Problems

1. **Confusion Between Template and Processor cyan.yaml**
   - Problem: Template cyan.yaml includes `processors`, `plugins`, `templates` arrays for composition, but processor cyan.yaml is purely metadata
   - Recommendation: Clearly distinguish that processor cyan.yaml is only for registry metadata, not for defining processor behavior or configuration schema

2. **Config Schema Definition Location Unclear**
   - Problem: Documentation suggests defining config inputs in cyan.yaml, but config is actually defined when templates reference processors with config overrides
   - Recommendation: Document that processor config is defined at the template level, not in the processor's cyan.yaml

3. **Version Handling Not Documented**
   - Problem: Version is managed by the registry system (as `version_description` in requests), not in cyan.yaml
   - Recommendation: Explain that versioning is handled by the registry, not the yaml file

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 9 |
| 🟡 | 5 |
| 🟠 | 3 |
