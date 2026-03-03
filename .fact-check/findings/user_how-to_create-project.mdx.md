<!-- source: content/docs/user/how-to/create-project.mdx -->
# 📄 File: content/docs/user/how-to/create-project.mdx

> This documentation file describes the `cyanprint create` command with examples and workflow explanation. Overall the documentation is accurate but has some minor issues with template reference format and missing version specification in examples.

### 🔴 Source Code Inaccuracies
1. **Documented**: `cyanprint create atomi/nix-init` (line 15-16, 19-20)
   **Actual**: The template reference format should include a version: `<username>/<name>:<version>`. While version is optional (per `util.rs:21-27` where version parsing returns `None` if not provided), the source code in `main.rs:144-148` shows that when no version is provided, it displays `-1` as the version which may confuse users. The canonical format shown in `iridium/cyanprint/LLM.MD:119` is `username/template-name:version`.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/util.rs:13-28` - parse_ref_internal function handles optional version; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:144-148` - shows `-1` when no version provided

2. **Documented**: "CLI fetches template from registry" (line 24)
   **Actual**: The CLI retrieves template from registry via `registry.get_template()` which returns `TemplateVersionRes`. This is accurate.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/main.rs:150` - `registry.get_template(u.clone(), n.clone(), v)`

### 🟡 Documentation Issues
1. **Problem**: Examples do not show version specification
   **Location**: Lines 14-20
   **Fix**: Add an example with version: `cyanprint create atomi/nix-init:1 my-project` to show the full template reference format

2. **Problem**: Missing documentation for the `-c, --coordinator-endpoint` option
   **Location**: The entire document lacks mention of the coordinator endpoint option
   **Fix**: Add an Options section similar to `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/user/reference/cli-commands.mdx:31-35` to document the `--coordinator-endpoint` option with its default value `http://coord.cyanprint.dev:9000`

3. **Problem**: "What Happens" section omits key workflow steps
   **Location**: Lines 22-27
   **Fix**: The workflow description is oversimplified. Based on `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/run.rs:41-128`, the actual workflow includes: target directory creation, template history check, automatic composition detection, and different execution paths for single templates vs compositions. Consider expanding or linking to detailed explanation.

4. **Problem**: Template reference format not explained
   **Location**: Lines 8-10 (command syntax)
   **Fix**: Add explanation of `<TEMPLATE_REF>` format: `<username>/<template-name>[:<version>]` where version is an integer. Reference: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/util.rs:13-28`

### 🟠 Other Problems
1. **Problem**: The example template `atomi/nix-init` cannot be verified to exist in the registry
   **Recommendation**: Either verify this template exists in the actual registry, or use a documented example template that is known to exist. The developer docs at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/docs/developer/surfaces/cli/02-create.md:37` use `atomicloud/starter:1` as an example.

2. **Problem**: Missing reference to environment variable `CYANPRINT_COORDINATOR`
   **Recommendation**: The source code at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:43` shows `env = "CYANPRINT_COORDINATOR"` for the coordinator endpoint. This should be documented for users who want to set a default coordinator.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 4 |
| 🟠 | 2 |
