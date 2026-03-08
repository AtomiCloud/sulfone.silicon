<!-- source: content/docs/developer/templates/how-to/conditional-files.mdx -->
# File: content/docs/developer/templates/how-to/conditional-files.mdx

> This how-to guide explains conditional file inclusion in templates. The code examples and API usage are accurate, but there is one significant inaccuracy regarding root path explanation.

### Source Code Inaccuracies
1. **Incorrect explanation of root paths** | Documented: "Note that `root` paths are relative to the `cyan/` directory in your template package" (line 125) | Actual: The `root` property specifies paths **inside the container**, not relative to the `cyan/` directory in the source package. According to `container-paths.mdx` (lines 38-48), `root` refers to container paths that are populated by the blob.Dockerfile's COPY commands. The blob.Dockerfile copies files FROM `cyan/templates/` TO `/templates/` (or similar) in the container, and the `root` property references those container paths. | Evidence: content/docs/developer/templates/explanation/container-paths.mdx:38-48, 52-68

### Documentation Issues
1. **Inconsistency in directory structure convention** | Lines 127-151 | The document shows `cyan/templates/` (plural) but `project-structure.mdx` uses `template/` (singular) at root level, while `02-adding-variables.mdx` also uses `template/` (singular). The code examples use `root: 'templates/base'` etc., but the note says paths are relative to `cyan/` directory, which conflicts with container-paths.mdx. | Fix: Update the directory structure note to clarify that: (1) template files can be organized in any directory structure in the source repo, (2) the blob.Dockerfile controls where they end up in the container, and (3) `root` references the container path, not the source path.

2. **Directory structure example may not match actual root values** | Lines 127-151 | Shows `cyan/templates/base/`, `cyan/templates/typescript/`, etc., but the code examples use `root: 'templates/base'`. If using standard blob.Dockerfile that copies `cyan/templates/` to `/templates/`, the root should be `/templates/base` or `templates/base` (relative to /workspace), not referencing the `cyan/` source directory. | Fix: Remove the mention of `cyan/` directory and show the container directory structure instead.

### Other Problems
1. **Code examples use relative paths but container-paths.mdx recommends absolute** | Lines 18, 22, 66, 76-81, etc. | All examples use `root: 'templates/base'` (relative) but container-paths.mdx:106-108 recommends using absolute paths like `/templates` to avoid confusion. This is not wrong per se, but creates inconsistency across documentation. | Recommendation: Either update all examples to use absolute paths (`/templates/base`) for consistency with container-paths.mdx, or add a note explaining that relative paths work but absolute paths are clearer.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 1 |
| Documentation Issues | 2 |
| Other Problems | 1 |
