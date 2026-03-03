<!-- source: content/docs/developer/templates/how-to/compose-templates.mdx -->
# 📄 File: content/docs/developer/templates/how-to/compose-templates.mdx

> This document describes template composition using YAML configuration. The document contains significant inaccuracies regarding the YAML schema and feature support.

### 🔴 Source Code Inaccuracies

1. **Documented YAML key `compose` | Actual key is `templates`**
   - Documentation shows: `compose:` as the YAML key for template composition
   - Actual code: `templates:` is the correct key in `CyanTemplateFileConfig`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/template_config.rs:25` shows `pub templates: Vec<String>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template3/cyan.yaml:11-13` shows actual usage: `templates:\n  - ernest/template1\n  - ernest/template2`

2. **Documented template reference format uses `name` and `version` properties | Actual format is `username/name:version` string**
   - Documentation shows:
     ```yaml
     compose:
       - name: my-org/base-setup
         version: "1.0.0"
     ```
   - Actual code: Template references are simple strings in format `username/name:version`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/template_config.rs:25` shows `pub templates: Vec<String>` (array of strings, not objects)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template4/cyan.yaml:11-12` shows: `templates:\n  - ernest/template3:4`

3. **Documented version format uses semver strings | Actual version is an integer**
   - Documentation shows: `version: "1.0.0"`, `version: "2.0.0"`, etc.
   - Actual code: Version is parsed as `i64` (integer) after the colon
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:44` shows `pub version: Option<i64>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/mapper.rs:72-75` shows `v.parse::<i64>().ok()`

4. **Documented `condition` property for conditional composition | Feature does not exist**
   - Documentation shows:
     ```yaml
     compose:
       - name: features/typescript
         condition: ${usesTypescript}
     ```
   - Actual code: No `condition` property exists in `CyanTemplateFileConfig` or `CyanTemplateRef`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/models/template_config.rs:4-26` - no condition field
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/domain/config/template_config.rs:41-45` - CyanTemplateRef has only username, name, version

5. **Documented `name` property inside compose items | Actual uses inline reference format**
   - Documentation shows: `- name: my-org/base-setup`
   - Actual code: `- username/name:version` format directly as string
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/cli/mapper.rs:61-82` - `template_reference_mapper` parses string format `username/name:version`

### 🟡 Documentation Issues

1. **Incorrect YAML key throughout document | Multiple locations**
   - Problem: All YAML examples use `compose:` instead of `templates:`
   - Locations: Lines 16-23, 35-44, 50-60, 142-157
   - Fix: Replace `compose:` with `templates:` and reformat to string array syntax

2. **Incorrect template reference syntax | Multiple locations**
   - Problem: Examples show object syntax with `name` and `version` properties
   - Locations: Lines 18-22, 147-156
   - Fix: Use string format `- username/name:version` instead

3. **Semver version format not supported | Lines 19, 21, 147-156**
   - Problem: Documentation shows semver versions like `"1.0.0"`, `"2.0.0"`
   - Fix: Use integer versions like `:1`, `:2`, etc.

4. **Unsupported conditional composition feature | Lines 54-59**
   - Problem: Documentation describes `condition: ${usesTypescript}` feature that does not exist
   - Recommendation: Remove this section entirely or mark as planned feature

5. **Code example parameter order unclear | Lines 106-131**
   - Problem: Documentation shows `StartTemplateWithLambda(async (i, d) => {` but doesn't explain parameters
   - Actual: `LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts:6`

### 🟠 Other Problems

1. **Documentation may describe a planned or deprecated API**
   - Problem: The `compose` key and object-based syntax suggest this documentation may be describing a different version or planned feature
   - Recommendation: Verify with product team whether this describes a future API or should be completely rewritten to match current implementation

2. **Inconsistent naming conventions in examples**
   - Problem: Examples mix `my-org/`, `shared/`, `company/`, `base/`, `features/` prefixes without explaining the username/name convention
   - Recommendation: Use consistent `username/template-name:version` format throughout

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 5 |
| 🟠 | 2 |
