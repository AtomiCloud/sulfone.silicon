<!-- source: content/docs/developer/processors/how-to/push-to-registry.mdx -->
# 📄 File: content/docs/developer/processors/how-to/push-to-registry.mdx

> Documentation for publishing processors to registries. The document describes Docker registry operations but the actual AtomiCloud system uses the Zinc registry (a custom entity registry) combined with Docker image references. Contains several significant inaccuracies regarding the registry workflow and data structures.

### 🔴 Source Code Inaccuracies

1. **Documented**: "Publish your processor to a Docker registry so others can use it in their templates."
   **Actual**: Processors are registered in the Zinc registry, not directly published to Docker registries. The Zinc registry stores metadata including `dockerImage` and `dockerTag` fields that reference Docker images.
   **Evidence**: `zinc/docs/developer/surfaces/api/02-processor.md:485-524` - Shows POST `/api/v1/processor/slug/{username}/{name}/versions` endpoint with `dockerImage` and `dockerTag` fields as separate properties

2. **Documented**: Version format using semantic versioning like `1.0.0`, `1.2.3`
   **Actual**: The version resolution system uses auto-incremented integer version numbers (1, 2, 3, etc.), not semantic versioning strings. The registry returns `version: 1`, `version: 2`, etc.
   **Evidence**: `zinc/docs/developer/surfaces/api/02-processor.md:376-384` shows `"version": 1` as integer; `boron/docker_executor/registry.go:150-201` shows integer version handling

3. **Documented**: The "Use in Templates" code example shows `type: GlobType.Template`
   **Actual**: The `CyanGlobReq` struct uses a `Type string` field (plain string), not a `GlobType.Template` enum access pattern.
   **Evidence**: `boron/docker_executor/model.go:3-8` - Shows `CyanGlobReq` struct with `Type string` field

4. **Documented**: `cyan.yaml` with `processor.inputs[]` and `processor.configSchema` sections
   **Actual**: The actual template `cyan.yaml` format uses simple string arrays: `processors: ['cyan/default', 'atomi/typescript:3']`. No nested `processor` object with `inputs` or `configSchema` exists.
   **Evidence**: `boron/docs/developer/concepts/template-vs-cyan-processors.md:34-46` shows actual format with string arrays

5. **Documented**: `name: myorg/my-processor` format in cyan.yaml
   **Actual**: The actual config uses separate `username` and `name` fields in the registry config.
   **Evidence**: `boron/docs/developer/concepts/template-vs-cyan-processors.md:35-36` shows `username: atomi` and `name: shared` as separate fields

6. **Documented**: `author` and `license` fields in cyan.yaml
   **Actual**: These fields do not exist in the actual processor config structure.
   **Evidence**: `boron/docs/developer/concepts/template-vs-cyan-processors.md:34-46` shows actual fields: `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`

### 🟡 Documentation Issues

1. **Problem**: The documentation describes Docker CLI operations (docker tag, docker push) but the actual system requires using the Zinc registry API to register processor metadata.
   **Location**: Entire "Publish Process" section (lines 19-68)
   **Fix**: Document the two-step process: (1) Push Docker image to container registry, (2) Register processor with Zinc registry via API or CLI. Reference `POST /api/v1/processor/slug/{username}/{name}/versions`

2. **Problem**: The `cyan.yaml` example includes a `processor` section with `inputs` and `configSchema` that doesn't match the actual format.
   **Location**: "Creating cyan.yaml" section (lines 101-133)
   **Fix**: Update to match the actual format which uses simple string arrays for `processors`, `plugins`, `templates` and metadata fields like `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme`

3. **Problem**: The naming conventions table suggests Docker registry naming patterns, but the actual system uses `username/name` format for Zinc registry references with separate `dockerImage`/`dockerTag` fields.
   **Location**: "Naming Conventions" section (lines 71-99)
   **Fix**: Document the Zinc registry reference format: `username/name` or `username/name:version` where version is an integer

4. **Problem**: The "Use in Templates" example structure doesn't accurately show the CyanProcessorReq structure.
   **Location**: Lines 57-67
   **Fix**: Show correct structure: `{ name: 'username/name:version', config: {...}, files: [{ root: 'templates', glob: '**/*', exclude: [], type: 'template' }] }`

5. **Problem**: The GitHub Actions CI/CD example only shows Docker push, missing the registry registration step.
   **Location**: "CI/CD Integration" section (lines 135-176)
   **Fix**: Add step to call Zinc registry API (`POST /api/v1/processor/push/{username}`) after Docker push

6. **Problem**: Version tags section shows semver format but registry uses integers.
   **Location**: "Version Tags" section (lines 83-99)
   **Fix**: Clarify that Docker tags can use any format (semver recommended) but Zinc registry versions are auto-incremented integers

### 🟠 Other Problems

1. **Problem**: The documentation conflates "Docker registry" with "Zinc registry" which are two different concepts. The Zinc registry is an entity registry that stores metadata about processors, including Docker image references (`dockerReference` and `dockerTag`).
   **Recommendation**: Add a clear distinction section explaining: (1) Docker registry stores actual container images, (2) Zinc registry stores processor metadata and points to Docker images

2. **Problem**: Missing documentation about the version resolution system that validates processor requests against template definitions at runtime.
   **Recommendation**: Add a note that processor versions must be declared in the template's `cyan.yaml` and are validated against the template's pinned versions during execution. Reference `boron/docs/developer/features/02-version-resolution.md`

3. **Problem**: The "Best Practices" section is generic Docker advice without CyanPrint-specific guidance.
   **Recommendation**: Add CyanPrint-specific best practices such as: using correct `dockerReference`/`dockerTag` format, declaring processors in template cyan.yaml, understanding version pinning behavior

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 6 |
| 🟡 | 6 |
| 🟠 | 3 |
