<!-- source: content/docs/developer/templates/explanation/docker-vs-cyan-registry.mdx -->
# File: content/docs/developer/templates/explanation/docker-vs-cyan-registry.mdx

> Document comparing Docker Registry and CyanPrint Registry for template publishing. Contains several inaccuracies regarding CLI commands and registry URLs.

### Source Code Inaccuracies

1. **Non-existent CLI command `cyanprint search`**
   - Documented: `cyanprint search nodejs` (line 135)
   - Actual: No `search` command exists in the CLI. The commands.rs file only defines: `Push`, `Create`, `Update`, `Daemon` (iridium/cyanprint/src/commands.rs:28-98)
   - Evidence: The CLI does not have a search command. Template discovery is via web UI only at cyanprint.dev/registry

2. **Non-existent CLI command `cyanprint list`**
   - Documented: `cyanprint list myorg/` (referenced indirectly as a way to list templates)
   - Actual: No `list` command exists in the CLI
   - Evidence: iridium/cyanprint/src/commands.rs only defines Push, Create, Update, Daemon commands

3. **Non-existent CLI command `cyanprint info`**
   - Documented: `cyanprint info myorg/my-template:1.0.0` (referenced indirectly as a verification method)
   - Actual: No `info` command exists in the CLI
   - Evidence: iridium/cyanprint/src/commands.rs only defines Push, Create, Update, Daemon commands

4. **Incorrect CyanPrint Registry URL**
   - Documented: `registry.cyanprint.io` (line 147)
   - Actual: `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`
   - Evidence: iridium/cyanprint/src/commands.rs:13 - default_value = "https://api.zinc.sulfone.raichu.cluster.atomi.cloud"

### Documentation Issues

1. **Misleading CLI workflow example**
   - Problem: The "Using" section (lines 132-139) shows `cyanprint search nodejs` which does not exist
   - Location: Lines 132-139
   - Fix: Remove `cyanprint search` example. Replace with: "Visit cyanprint.dev/registry to search for templates" or use the API directly

2. **Non-existent registry URL reference**
   - Problem: Documents `registry.cyanprint.io` as "CyanPrint Cloud" but this URL does not exist in source code
   - Location: Lines 143-149 "CyanPrint Cloud" section
   - Fix: Update to use actual registry URL `https://api.zinc.sulfone.raichu.cluster.atomi.cloud` or remove specific URL and reference environment variable `CYANPRINT_REGISTRY`

3. **Inconsistent terminology for template images**
   - Problem: Documentation refers to "Template Image" and "Blob Image" but the actual CLI parameters use `template_image`/`template_tag` and `blob_image`/`blob_tag`. The e2e script uses different naming (`-script` suffix instead of no suffix)
   - Location: Lines 25-26, 113-129
   - Fix: Ensure terminology is consistent with actual code. The e2e/publish-template.sh uses `-blob` and `-script` suffixes

### Other Problems

1. **Missing `--token` flag position in push command**
   - Problem: The example shows `cyanprint push template --token $CYAN_TOKEN` but the actual CLI structure has `--token` as a global push option, not a subcommand option
   - Recommendation: Clarify that `--token` is a PushArgs option, not a template subcommand option. Correct usage: `cyanprint push --token $CYAN_TOKEN template ...`

2. **Dockerfile naming inconsistency**
   - Problem: Documentation references `cyan/template.Dockerfile` and `cyan/blob.Dockerfile` but the e2e script uses `./blob.Dockerfile` and `./cyan/Dockerfile`
   - Location: Lines 115-123
   - Recommendation: Verify correct Dockerfile paths and update examples to match actual project structure

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 4 |
| Documentation Issues | 3 |
| Other Problems | 2 |
