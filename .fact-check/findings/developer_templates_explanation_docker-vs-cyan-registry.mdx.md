# File: content/docs/developer/templates/explanation/docker-vs-cyan-registry.mdx

> This document explains the difference between Docker registries and CyanPrint registry for template publishing. Several inaccuracies were found regarding CLI commands, Dockerfile paths, and registry URLs.

### Source Code Inaccuracies

1. **Incorrect CLI command syntax for `push template`**
   - **Documented**: `cyanprint push template --token $CYAN_TOKEN myorg/my-template-blob 1.0.0 myorg/my-template 1.0.0`
   - **Actual**: `pls push template <blob_image> <blob_tag> <template_image> <template_tag>` with `--token` and `--config` flags
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:120-130` shows `PushCommands::Template` takes 4 positional arguments: `blob_image`, `blob_tag`, `template_image`, `template_tag`. The `--token` and `--config` flags are part of `PushArgs`, not inline options after the subcommand.

2. **Missing `--config` flag in push command**
   - **Documented**: Command shows `--token` only
   - **Actual**: The push command requires `--config cyan.yaml` (default: `cyan.yaml`) and `--token` flags
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:100-118` shows `PushArgs` struct with `config` and `token` fields.

3. **Non-existent `search` CLI command**
   - **Documented**: `cyanprint search nodejs`
   - **Actual**: No `search` command exists in the CLI
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:27-98` shows only `Push`, `Create`, `Update`, and `Daemon` commands. Template search is done via the web UI at registry.cyanprint.dev, not CLI. Additionally, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:38-49` confirms a Search API endpoint exists (`GET /api/v1/Template`) for programmatic access.

4. **Incorrect Dockerfile paths**
   - **Documented**: `-f cyan/template.Dockerfile` and `-f cyan/blob.Dockerfile`
   - **Actual**: The blob Dockerfile is at `./blob.Dockerfile` (root level), and the template Dockerfile is at `./cyan/Dockerfile`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:27` shows `-f "./blob.Dockerfile"` and line 35 shows `-f "./cyan/Dockerfile"`. The actual e2e templates have `blob.Dockerfile` at the project root and `Dockerfile` inside the `cyan/` directory.

5. **Incorrect CyanPrint Cloud registry URL**
   - **Documented**: `registry.cyanprint.io`
   - **Actual**: The actual registry endpoints are `https://api.zinc.sulfone.raichu.cluster.atomi.cloud` (API) and `registry.cyanprint.dev` (web UI)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:13` shows default registry as `https://api.zinc.sulfone.raichu.cluster.atomi.cloud`. Other docs reference `registry.cyanprint.dev` for the web UI.

6. **Non-existent `list` and `info` CLI commands**
   - **Documented** (in related push-to-registry.mdx): `cyanprint list myorg/` and `cyanprint info myorg/my-template:1.0.0`
   - **Actual**: No `list` or `info` commands exist in the CLI
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:27-98` shows only `Push`, `Create`, `Update`, and `Daemon` commands.

7. **Metadata fields in CyanPrint registry incomplete description**
   - **Documented**: "Template metadata - Name, version, description" and "Image references - Links to Docker images"
   - **Actual**: The actual stored fields include `BlobDockerReference`, `BlobDockerTag`, `TemplateDockerReference`, `TemplateDockerTag` for templates, and `DockerReference`, `DockerTag` for plugins/processors. Also includes `Processors`, `Plugins`, `Templates`, and `Resolvers` arrays for composition.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/TemplateVersion.cs:47-56` shows the full property structure. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/models.go:11-16` shows the `PropertyRes` structure used by the executor.

### Documentation Issues

1. **Inconsistent CLI binary name**
   - **Problem**: Documentation uses `cyanprint` but the actual CLI alias is `pls`
   - **Location**: Throughout the document (lines 77-79, 126-128, 135-138, 167-172)
   - **Fix**: Either clarify that `cyanprint` is the full command while `pls` is the alias used in development, or consistently use `pls` which is the documented task runner alias per `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/LLM.MD:17-18`

2. **Misleading "Direct Docker Usage" section**
   - **Problem**: The section suggests using Docker image references directly with `cyanprint create`, but this capability is not documented in the CLI source
   - **Location**: Lines 163-178
   - **Fix**: Verify if direct Docker image references are supported. The CLI appears to only support `<username>/<name>:<version>` format per `parse_ref()` function.

3. **Missing documentation of default values**
   - **Problem**: Document doesn't mention default values for `--config` (`cyan.yaml`) and `--message` (`"No description"`)
   - **Location**: Registration section (lines 76-80)
   - **Fix**: Add note about default values or show full command syntax

4. **Workflow section Dockerfile path inconsistency**
   - **Problem**: The Workflow section (lines 113-129) uses `cyan/template.Dockerfile` and `cyan/blob.Dockerfile` but the actual paths are `./cyan/Dockerfile` and `./blob.Dockerfile`
   - **Location**: Lines 116-122
   - **Fix**: Update to correct Dockerfile paths: `-f ./cyan/Dockerfile` and `-f ./blob.Dockerfile`

### Other Problems

1. **Template image naming inconsistency**
   - **Problem**: Documentation refers to "template image" but the e2e tests use "script image" terminology
   - **Recommendation**: Clarify terminology - is it "template image" or "script image"? The e2e script at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:32` uses `script_image` variable name.

2. **Registry URL confusion**
   - **Problem**: Multiple registry URLs are referenced across documentation (`registry.cyanprint.io`, `registry.cyanprint.dev`, `api.zinc.sulfone.raichu.cluster.atomi.cloud`)
   - **Recommendation**: Clearly distinguish between the web UI URL (`registry.cyanprint.dev`), API endpoint (`api.zinc.sulfone.raichu.cluster.atomi.cloud`), and any public-facing marketing URL.

3. **Missing search alternative**
   - **Problem**: Since `cyanprint search` doesn't exist as a CLI command, users need to know how to search for templates
   - **Recommendation**: Document that template search is available via the web UI at registry.cyanprint.dev, as confirmed by `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/docs/developer/features/05-registry-search.md`

4. **Mermaid diagram accuracy**
   - **Problem**: The workflow diagram (lines 96-104) shows "User Searches Registry" step but CLI search doesn't exist. The actual workflow would be "User browses registry via web UI"
   - **Recommendation**: Update the Mermaid diagram to accurately reflect that search is done via web UI, not CLI

5. **Configurable registry endpoint not documented**
   - **Problem**: The boron server accepts a `--registry` flag (line 51 in main.go), indicating the registry endpoint is configurable, but this isn't mentioned in the document
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/main.go:45-52` shows `--registry` flag
   - **Recommendation**: Document that the registry endpoint is configurable for self-hosted deployments

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 7 |
| Documentation Issues | 4 |
| Other Problems | 5 |

### Additional Verification from Source Code

**Verified from zinc (registry backend):**
- Two-image architecture (template + blob): Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/Domain/Model/TemplateVersion.cs:47-56` showing `BlobDockerReference`, `BlobDockerTag`, `TemplateDockerReference`, `TemplateDockerTag`
- Search API exists: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:38-49` has Search endpoint
- Push endpoint exists: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/API/V1/Controllers/TemplateController.cs:360-405` has Push endpoint

**Verified from boron (executor/coordinator):**
- Registry client resolves processors/plugins: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/registry.go` has `getProcessorVersion`, `getPluginVersion` functions
- Template version model matches: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/models.go:3-55` shows `TemplateVersionRes`, `PropertyRes`
- Configurable registry: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/main.go:45-52` shows `--registry` flag
- Internal container path `/workspace/cyanprint`: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/docker.go:216`
