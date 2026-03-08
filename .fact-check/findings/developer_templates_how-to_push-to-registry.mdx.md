<!-- source: content/docs/developer/templates/how-to/push-to-registry.mdx -->
# File: content/docs/developer/templates/how-to/push-to-registry.mdx

> Documentation for building and publishing templates to a registry. Contains several CLI command inaccuracies and Dockerfile path inconsistencies.

### Source Code Inaccuracies

1. **Incorrect Dockerfile path for template**
   - Documented: `cyan/template.Dockerfile` (lines 27, 65, 76, 160)
   - Actual: `cyan/Dockerfile` (the template Dockerfile is simply named `Dockerfile` inside the `cyan/` directory)
   - Evidence: content/docs/developer/templates/reference/dockerfiles.mdx:16 - "| `Dockerfile` | Executes template logic | `cyan/Dockerfile` |"

2. **Incorrect Dockerfile path for blob**
   - Documented: `cyan/blob.Dockerfile` (lines 40, 167)
   - Actual: `blob.Dockerfile` (located at project root, not inside `cyan/` directory)
   - Evidence: content/docs/developer/templates/reference/dockerfiles.mdx:17 - "| `blob.Dockerfile` | Stores source files | Project root |"

3. **Non-existent CLI command `cyanprint list`**
   - Documented: `cyanprint list myorg/` (line 124)
   - Actual: No `list` command exists in the CLI. The available commands are: `create`, `update`, `daemon`, `push`
   - Evidence: content/docs/user/reference/cli-commands.mdx - only documents `create`, `update`, `daemon`, `push` commands

4. **Non-existent CLI command `cyanprint info`**
   - Documented: `cyanprint info myorg/my-template:1.0.0` (line 127)
   - Actual: No `info` command exists in the CLI
   - Evidence: content/docs/user/reference/cli-commands.mdx - no `info` command documented

5. **Incorrect `--token` flag position in push command**
   - Documented: `cyanprint push template --token $CYAN_TOKEN` (lines 50, 173)
   - Actual: `cyanprint push --token $CYAN_TOKEN template` (`--token` is a global push option, not a template subcommand option)
   - Evidence: content/docs/user/reference/cli-commands.mdx:133 - `cyanprint push --token <TOKEN> template <BLOB_IMAGE> <BLOB_TAG> <TEMPLATE_IMAGE> <TEMPLATE_TAG>`

### Documentation Issues

1. **Missing Docker build context clarification**
   - Problem: The documentation shows `docker buildx build -f cyan/template.Dockerfile ... .` but doesn't clarify that the template Dockerfile should be built from within the `cyan/` directory for the `COPY` paths to work correctly
   - Location: Lines 25-31, 63-68, 74-79
   - Fix: Either use `cd cyan && docker buildx build -t ... .` or add a note that when using `-f cyan/Dockerfile` from root, the build context must include the necessary files

2. **Inconsistent blob build context**
   - Problem: The blob.Dockerfile uses `COPY . ./` which copies from the build context. If built from the wrong directory, it won't include the template files correctly
   - Location: Lines 38-43
   - Fix: Clarify that blob.Dockerfile must be built from project root with `docker buildx build -f blob.Dockerfile ... .`

3. **Misleading verification section**
   - Problem: The verification section (lines 118-128) documents commands that don't exist (`cyanprint list` and `cyanprint info`)
   - Location: Lines 118-128
   - Fix: Remove this section or replace with alternative verification methods (e.g., checking the registry web UI or using Docker commands to inspect images)

### Other Problems

1. **Incomplete CI/CD example context**
   - Problem: The GitHub Actions example assumes the workflow runs from repo root with correct file structure, but doesn't show the required directory structure
   - Recommendation: Add a brief note about the expected project structure or link to project-structure documentation

2. **Missing prerequisite for CYAN_TOKEN**
   - Problem: Documentation mentions `$CYAN_TOKEN` but doesn't explain how to obtain it
   - Recommendation: Add a note or link explaining how to get an authentication token for the CyanPrint registry

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 5 |
| Documentation Issues | 3 |
| Other Problems | 2 |
