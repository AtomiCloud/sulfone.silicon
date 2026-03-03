# File: content/docs/developer/plugins/how-to/push-to-registry.mdx

> Documentation for building and publishing plugins to container registries. Covers Docker tagging, pushing to registries (Docker Hub, GHCR, private), naming conventions, versioning, and CI/CD automation.

### Source Code Inaccuracies

1. **Documented CLI syntax for push command is incorrect**
   - **Documented**: The documentation suggests using `pls push plugin --image registry/user/plugin:latest --tag latest` with `--image` and `--tag` flags
   - **Actual**: The CLI uses positional arguments, not flags. The correct syntax is `pls push plugin <image> <tag>` where image and tag are positional arguments
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:133-137` shows `Plugin { image: String, tag: String }` as positional arguments. Also confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-plugin.sh:29` which uses `cyanprint push plugin "$DOCKER_USERNAME/$plugin" "$tag"` with positional arguments

2. **Documented GitHub Actions workflow uses incorrect CLI flags**
   - **Documented**: `--template-image`, `--template-tag`, `--blob-image`, `--blob-tag` flags in GitHub Actions example
   - **Actual**: The CLI uses positional arguments, not these flags. For templates, it should be `pls push template <blob_image> <blob_tag> <template_image> <template_tag>`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:122-130` shows `Template { blob_image: String, blob_tag: String, template_image: String, template_tag: String }` as positional arguments

3. **Missing documentation about registry push flow**
   - **Documented**: The documentation describes using raw Docker commands to push images directly to registries
   - **Actual**: CyanPrint has its own registry API (`POST /api/v1/plugin/push/{username}`) that must be used to register plugin metadata and Docker image references with the Zinc registry. The `cyanprint push plugin` command handles this automatically by reading the `cyan.yaml` configuration
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanregistry/src/http/client.rs:77-92` shows `push_plugin_internal` calls `/api/v1/Plugin/push/{username}` endpoint. Also `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/docs/developer/surfaces/api/03-plugin.md:620-670` documents the Push Plugin API

4. **Naming convention recommendation conflicts with actual system**
   - **Documented**: Suggests using `cyan-plugin-` prefix for Docker images
   - **Actual**: The system uses internal naming like `cyan-plugin-<uuid>-<session>` for container names, but the Docker image reference (`dockerReference` and `dockerTag`) is stored as provided and doesn't require any specific prefix
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/models.go:103-127` shows `RegistryPluginVersionPrincipalRes` stores `DockerReference` and `DockerTag` as provided. Container naming in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/features/01-session-management.md:90` shows `cyan-plugin-<uuid>-<session>` pattern

5. **Using in Templates section has incorrect YAML format**
   - **Documented**: Shows plugins configured as `plugins: - name: org/my-plugin:1.0.0 config: {}`
   - **Actual**: In `cyan.yaml`, plugins are declared as simple string arrays: `plugins: ['username/plugin-name']` or `plugins: ['username/plugin-name:version']`. The `name` and `config` structure is for the runtime Cyan object returned by the template script, not the `cyan.yaml` configuration
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md:43-46` shows `plugins: ['atomi/formatter']` format for cyan.yaml. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docker_executor/model.go:10-13` shows `CyanPluginReq` with `name` and `config` is for runtime requests

### Documentation Issues

1. **Missing prerequisite: CyanPrint CLI and registry account**
   - **Problem**: Documentation lists Docker and registry access as prerequisites but doesn't mention the need for the CyanPrint CLI (`cyanprint` or `pls`) or a Zinc registry account with API token
   - **Location**: Prerequisites section (lines 14-18)
   - **Fix**: Add "CyanPrint CLI installed" and "Zinc registry account with API token (set via CYAN_TOKEN environment variable)" to prerequisites

2. **Missing step: Register with Zinc registry**
   - **Problem**: Documentation only covers Docker push, but plugins must also be registered with the Zinc registry via `cyanprint push plugin` for the system to discover and use them
   - **Location**: Build and Push section (lines 20-83)
   - **Fix**: Add a step explaining that after Docker push, you must run `cyanprint push plugin` to register the plugin with the Zinc registry

3. **Incorrect CLI usage examples throughout**
   - **Problem**: All CLI examples use `--image` and `--tag` flags which don't exist
   - **Location**: Lines 94-99 (push plugin example) and lines 45-52 (push template example in docs/iridium reference)
   - **Fix**: Update to use positional arguments: `cyanprint push plugin <image> <tag>` and `cyanprint push template <blob_image> <blob_tag> <template_image> <template_tag>`

4. **Missing documentation about cyan.yaml format for plugins**
   - **Problem**: Documentation doesn't explain the required `cyan.yaml` format for plugins
   - **Location**: Missing from entire document
   - **Fix**: Add section explaining that plugins need a `cyan.yaml` with fields like `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`

5. **Related links may be broken or incorrect**
   - **Problem**: Links to `/developer/plugins/reference/dockerfile` and `/developer/plugins/tutorials/first-plugin` - need verification these exist
   - **Location**: Related section (lines 234-238)
   - **Fix**: Verify links exist and are correct

### Other Problems

1. **Documentation describes generic Docker workflow instead of CyanPrint-specific workflow**
   - **Problem**: The entire document is written as generic Docker documentation rather than CyanPrint-specific plugin publishing. It should focus on the CyanPrint CLI and registry workflow
   - **Recommendation**: Rewrite to focus on: 1) Create plugin with cyan.yaml, 2) Build Docker image, 3) Push Docker image to registry, 4) Run `cyanprint push plugin` to register with Zinc

2. **Versioning section doesn't match actual version system**
   - **Problem**: Documentation describes semantic versioning with tags like `:1.0.0`, but the actual system uses integer version numbers that auto-increment
   - **Recommendation**: Update to explain that the Zinc registry assigns integer version numbers (1, 2, 3...) automatically when you push, and `dockerTag` is separate from the logical version

3. **GitHub Actions example incomplete**
   - **Problem**: The GitHub Actions workflow only shows Docker build/push, missing the crucial `cyanprint push plugin` step to register with Zinc
   - **Recommendation**: Add step that runs `cyanprint push plugin` after Docker push, with proper token handling

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 5 |
| Documentation Issues | 5 |
| Other Problems | 3 |
