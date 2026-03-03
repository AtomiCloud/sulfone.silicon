<!-- source: content/docs/developer/templates/how-to/push-to-registry.mdx -->
# 📄 File: content/docs/developer/templates/how-to/push-to-registry.mdx

> This document describes how to build and push CyanPrint templates to a registry. Multiple inaccuracies were found regarding CLI command syntax, Dockerfile structure, and available CLI commands.

### 🔴 Source Code Inaccuracies

1. **Incorrect Dockerfile path for template image**
   - Documented: `-f cyan/template.Dockerfile`
   - Actual: `-f cyan/Dockerfile` (no "template." prefix in actual usage)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:35` uses `-f "./cyan/Dockerfile"`
   - Note: Some templates in ketone do use `template.Dockerfile` naming convention, but the e2e scripts use `Dockerfile`

2. **Incorrect Dockerfile path for blob image**
   - Documented: `-f cyan/blob.Dockerfile`
   - Actual: `-f blob.Dockerfile` (no "cyan/" prefix, blob is at repo root)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:27` uses `-f "./blob.Dockerfile"`

3. **CLI command argument order for `cyanprint push template`**
   - Documented: `cyanprint push template --token $CYAN_TOKEN myorg/my-template-blob 1.0.0 myorg/my-template 1.0.0`
   - Actual: `cyanprint push template <BLOB_IMAGE> <BLOB_TAG> <TEMPLATE_IMAGE> <TEMPLATE_TAG>` with positional arguments
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:122-130`:
     ```rust
     Template {
         blob_image: String,
         blob_tag: String,
         template_image: String,
         template_tag: String,
     }
     ```
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:39` shows: `cyanprint push template "$blob_image" "$tag" "$script_image" "$tag"`

4. **Verification commands `cyanprint list` and `cyanprint info` do not exist**
   - Documented: `cyanprint list myorg/` and `cyanprint info myorg/my-template:1.0.0`
   - Actual: These commands do not exist in the CLI. Available commands are: `push`, `create`, `update`, and `daemon`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:28-98` shows only `Push`, `Create`, `Update`, and `Daemon` subcommands

5. **Missing CLI flags documentation**
   - Documented: Commands only show `--token` flag
   - Actual: CLI has additional flags: `-c, --config` (default: `cyan.yaml`) and `-m, --message` (default: "No description")
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:105-117`

6. **blob.Dockerfile structure differs significantly**
   - Documented: Simple `FROM alpine:latest` with `COPY cyan/templates/ /templates/`
   - Actual: Multi-stage build with tar creation, specific extraction paths to `/workspace/cyanprint`, and `LABEL cyanprint.dev=true`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/blob.Dockerfile:1-14`

### 🟡 Documentation Issues

1. **Missing context about cyan.yaml configuration file**
   - Problem: The guide does not mention that a `cyan.yaml` configuration file is required in the working directory
   - Location: Step 3 "Register with CyanPrint" section
   - Fix: Add a prerequisite or note that `cyan.yaml` must exist (default path, configurable via `--config` flag)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:105-106`

2. **Inconsistent image naming in examples**
   - Problem: Documentation uses `myorg/my-template-blob` but actual examples use `$template-blob` and `$template-script`
   - Location: Steps 1 and 2 build commands
   - Fix: Clarify blob image vs template image naming conventions

3. **Missing CYAN_TOKEN environment variable documentation**
   - Problem: The `--token` flag's env var alternative is not documented
   - Location: Step 3 and CI/CD section
   - Fix: Note that `CYAN_TOKEN` env var can be used instead of `--token` flag
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:116` shows `env = "CYAN_TOKEN"`

4. **GitHub Actions example has incorrect cyanprint command syntax**
   - Problem: The GitHub Actions example may use incorrect argument order for `cyanprint push template`
   - Location: Lines 171-175
   - Fix: Verify argument order matches actual CLI: `<blob_image> <blob_tag> <template_image> <template_tag>`

5. **Registry verification section uses non-existent commands**
   - Problem: The "Verification" section documents commands that don't exist
   - Location: Lines 118-128
   - Fix: Remove or replace with actual verification method (registry web UI or API)

### 🟠 Other Problems

1. **No distinction between local testing and production publishing**
   - Problem: The guide shows `--push` flag but doesn't adequately explain the `--load` workflow for local testing
   - Recommendation: Add section: build with `--load` -> test locally -> push to Docker registry -> register with CyanPrint

2. **Missing prerequisite: docker buildx setup**
   - Problem: Multi-arch builds require buildx to be configured with `docker buildx create --use`
   - Recommendation: Add prerequisite step for buildx setup or link to Docker documentation

3. **No troubleshooting section**
   - Problem: No guidance for authentication errors, registry connectivity issues, or missing cyan.yaml
   - Recommendation: Add common error scenarios and solutions

4. **GitHub Actions example missing CYAN_TOKEN secret documentation**
   - Problem: The example references `${{ secrets.CYAN_TOKEN }}` without explaining setup
   - Recommendation: Document how to configure the CYAN_TOKEN secret in GitHub repository settings

5. **blob.Dockerfile documentation inconsistent with actual implementation**
   - Problem: The documented simple blob.Dockerfile doesn't match the actual multi-stage build with tar extraction
   - Recommendation: Either update examples to match actual implementation or document both approaches

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 6 |
| 🟡 | 5 |
| 🟠 | 5 |
