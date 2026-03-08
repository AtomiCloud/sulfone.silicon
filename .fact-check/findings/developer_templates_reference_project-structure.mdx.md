<!-- source: content/docs/developer/templates/reference/project-structure.mdx -->
# File: content/docs/developer/templates/reference/project-structure.mdx

> Documentation describing template project structure. The document provides mostly accurate structural information but has several inconsistencies with other documentation files regarding state file format, Dockerfile naming conventions, and file locations.

### Source Code Inaccuracies

1. **Template Dockerfile location/naming inconsistency** | Documented: `cyan/Dockerfile` (lines 16, 36) | Actual: `cyan/template.Dockerfile` | Evidence: `content/docs/developer/templates/tutorials/01-blank-template.mdx:47` shows `template.Dockerfile`; `content/docs/developer/templates/reference/dockerfiles.mdx:16` shows `Dockerfile` located in `cyan/` directory; `spec/v1/CU-86et8z80y/task-spec.md:66` shows `template.Dockerfile`. The project-structure.mdx should clarify that the Dockerfile in `cyan/` can be named either `Dockerfile` or `template.Dockerfile`.

2. **blob.Dockerfile location inconsistency** | Documented: `blob.Dockerfile` at root level (line 22) with template files included | Actual: blob.Dockerfile at root but copies from current context which includes `cyan/` directory that must be removed | Evidence: `content/docs/developer/templates/reference/dockerfiles.mdx:113` shows `RUN rm -rf cyan` which is missing from project-structure.mdx example. The blob.Dockerfile example should include the `rm -rf cyan` step.

3. **State file format inconsistent with other docs** | Documented: `.cyan_state.yaml` (lines 194, 201) | Actual: Mixed - some docs use `.cyan/generation.json`, others use `.cyan_state.yaml` | Evidence: `content/docs/developer/templates/explanation/client-state.mdx:12` uses `.cyan/generation.json`; `content/docs/developer/templates/explanation/3-way-merge.mdx:43-49` uses `.cyan/generation.json` and `.cyan/base/` directory; `content/docs/user/reference/cli-commands.mdx:60` and `content/docs/developer/templates/explanation/determinism.mdx:49` use `.cyan_state.yaml`. This creates confusion about the actual state file format.

4. **cyan.yaml readme path example differs** | Documented: `readme: cyan/README.md` (line 85) | Actual: `readme: README.md` or `readme: README.MD` at root | Evidence: `content/docs/developer/templates/reference/cyan-yaml.mdx:101` shows `readme: README.md` at root; `spec/v1/CU-86et8z80y/task-spec.md:101` shows `readme: cyan/README.MD`. The example path in project-structure.mdx should match the convention used elsewhere.

5. **Missing `root` property in processor files example** | Documented: Files config shows `glob: '**/*'` without `root` (lines 51, 100 in SDK examples) | Actual: Files should include `root` property to specify template directory | Evidence: `content/docs/developer/templates/tutorials/01-blank-template.mdx:66` shows `files: [{ root: 'templates', glob: '**/*', ... }]`; `spec/v1/CU-86et8z80y/task-spec.md:177-178` shows `root: 'templates'`. The project-structure.mdx should show the `root` property for completeness.

### Documentation Issues

1. **Inconsistent Dockerfile naming across documentation** | Problem: project-structure.mdx uses `Dockerfile` while 01-blank-template.mdx and task-spec.md use `template.Dockerfile` | Location: Lines 16, 36, 116-134 | Fix: Add a note explaining that the template Dockerfile can be named `Dockerfile` or `template.Dockerfile`, with `Dockerfile` being the simpler convention for most cases.

2. **blob.Dockerfile example incomplete** | Problem: The blob.Dockerfile example (lines 140-155) is missing the hadolint ignore comment shown in other docs and doesn't match the structure in dockerfiles.mdx | Location: Lines 140-155 | Fix: Ensure consistency with `content/docs/developer/templates/reference/dockerfiles.mdx:104-122` which shows a cleaner production blob structure.

3. **package.json example uses different module field** | Problem: Shows `"module": "index.ts"` (line 98) but other examples may vary | Location: Lines 95-110 | Fix: This is acceptable but could note that the module field configuration may vary based on SDK language/runtime.

4. **Generated output state file description inconsistent** | Problem: The `.cyan_state.yaml` description (lines 201-205) doesn't match the structure shown in determinism.mdx (lines 49-61) | Location: Lines 201-205 | Fix: Either expand the description to show the full structure or link to the determinism.mdx for complete state file format.

5. **Template files directory location unclear** | Problem: The `template/` directory description (lines 57-69) doesn't clarify that in real templates, the template files are often inside `cyan/templates/` not a sibling `template/` directory | Location: Lines 57-69 | Fix: Clarify that template files can be in various locations as specified by the `root` property in processor config, with `cyan/templates/` being a common convention.

6. **Missing import for Promise type** | Problem: The code example uses `Promise<Cyan>` return type but the import doesn't include `Cyan` type | Location: Lines 43-55 | Fix: Either add `Cyan` to the import or remove the explicit return type since it's inferred.

### Other Problems

1. **Cross-reference links may be incorrect** | Problem: The "Related" section links to `/docs/developer/templates/reference/cyan-yaml`, `/docs/developer/templates/reference/dockerfiles`, and `/docs/developer/templates/reference/sdk` - these should be verified to exist | Location: Lines 207-211 | Recommendation: Verify all cross-reference links resolve correctly.

2. **Alpine version inconsistency** | Problem: blob.Dockerfile shows `FROM alpine:3.21` (line 141) while dockerfiles.mdx also uses 3.21 - this is consistent but may become outdated | Location: Lines 141, 150 | Recommendation: Consider noting that Alpine version should be updated periodically.

3. **File organization patterns section seems disconnected from main structure** | Problem: The "File Organization Patterns" section (lines 157-186) shows a different structure than the main "Standard Structure" (lines 10-24), which could confuse readers | Location: Lines 157-186 | Recommendation: Add a clearer transition explaining these are patterns for organizing the `template/` directory contents, not alternative project structures.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 5 |
| Documentation Issues | 6 |
| Other Problems | 3 |
