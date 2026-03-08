# Fact Check Report

> Generated: 2026-03-08
> Docs: content/docs (105 files)
> Sources: ../boron, ../iridium, ../zinc, ../helium, ../argon
> Agents: 3 concurrent

## Overall Summary

| Category                    | Total Issues           |
| --------------------------- | ---------------------- |
| 🔴 Source Code Inaccuracies | See individual reports |
| 🟡 Documentation Issues     | See individual reports |
| 🟠 Other Problems           | See individual reports |

## Context

This fact-check was performed with the following important context:

- **Binary name:** `cyanprint` (NOT `cyan` or `pls`)
- **`pls`** is atomicloud's official alias of `task` (we don't use `task`)
- Links starting from `/docs` are correct

## Files Checked

All 105 documentation files in `content/docs/` have been checked:

### Contributor Documentation

- contributor/architecture/execution-flow.mdx
- contributor/architecture/overview.mdx
- contributor/development/setup.mdx
- contributor/index.mdx
- contributor/repositories/argon.mdx
- contributor/repositories/boron.mdx
- contributor/repositories/helium.mdx
- contributor/repositories/index.mdx
- contributor/repositories/iridium.mdx
- contributor/repositories/zinc.mdx

### Developer Documentation

- developer/basics/architecture.mdx
- developer/basics/introduction.mdx
- developer/basics/quickstart.mdx
- developer/index.mdx
- developer/plugins/explanation/execution-order.mdx
- developer/plugins/explanation/index.mdx
- developer/plugins/explanation/plugins-vs-processors.mdx
- developer/plugins/explanation/what-are-plugins.mdx
- developer/plugins/how-to/conditional-execution.mdx
- developer/plugins/how-to/index.mdx
- developer/plugins/how-to/modify-files.mdx
- developer/plugins/how-to/push-to-registry.mdx
- developer/plugins/how-to/run-commands.mdx
- developer/plugins/index.mdx
- developer/plugins/reference/cyan-yaml.mdx
- developer/plugins/reference/dockerfile.mdx
- developer/plugins/reference/index.mdx
- developer/plugins/reference/project-structure.mdx
- developer/plugins/reference/sdk/index.mdx
- developer/plugins/reference/sdk/input-output.mdx
- developer/plugins/reference/sdk/start-plugin.mdx
- developer/plugins/reference/sdk/types.mdx
- developer/plugins/tutorials/first-plugin.mdx
- developer/plugins/tutorials/index.mdx
- developer/processors/explanation/input-config.mdx
- developer/processors/explanation/memory-loading.mdx
- developer/processors/explanation/read-write-dirs.mdx
- developer/processors/explanation/stateless-nature.mdx
- developer/processors/explanation/why-processors.mdx
- developer/processors/how-to/access-config.mdx
- developer/processors/how-to/copy-files.mdx
- developer/processors/how-to/lazy-load-files.mdx
- developer/processors/how-to/push-to-registry.mdx
- developer/processors/how-to/resolve-all-files.mdx
- developer/processors/how-to/stream-large-files.mdx
- developer/processors/index.mdx
- developer/processors/reference/cyan-yaml.mdx
- developer/processors/reference/dockerfile.mdx
- developer/processors/reference/project-structure.mdx
- developer/processors/reference/sdk/file-helper.mdx
- developer/processors/reference/sdk/index.mdx
- developer/processors/reference/sdk/input-output.mdx
- developer/processors/reference/sdk/start-processor.mdx
- developer/processors/reference/sdk/types.mdx
- developer/processors/tutorials/first-processor.mdx
- developer/templates/explanation/3-way-merge.mdx
- developer/templates/explanation/client-state.mdx
- developer/templates/explanation/container-paths.mdx
- developer/templates/explanation/cyan-object.mdx
- developer/templates/explanation/default-processor.mdx
- developer/templates/explanation/determinism.mdx
- developer/templates/explanation/docker-vs-cyan-registry.mdx
- developer/templates/explanation/index.mdx
- developer/templates/explanation/processors-vs-plugins.mdx
- developer/templates/how-to/add-plugins.mdx
- developer/templates/how-to/ask-checkbox.mdx
- developer/templates/how-to/ask-confirm.mdx
- developer/templates/how-to/ask-date.mdx
- developer/templates/how-to/ask-password.mdx
- developer/templates/how-to/compose-templates.mdx
- developer/templates/how-to/conditional-files.mdx
- developer/templates/how-to/default-values.mdx
- developer/templates/how-to/index.mdx
- developer/templates/how-to/pass-images-binaries.mdx
- developer/templates/how-to/pin-determinism.mdx
- developer/templates/how-to/push-to-registry.mdx
- developer/templates/how-to/use-custom-processor.mdx
- developer/templates/how-to/use-keys.mdx
- developer/templates/how-to/validate-input.mdx
- developer/templates/index.mdx
- developer/templates/reference/cyan-yaml.mdx
- developer/templates/reference/dockerfiles.mdx
- developer/templates/reference/index.mdx
- developer/templates/reference/project-structure.mdx
- developer/templates/reference/sdk/cyan-config.mdx
- developer/templates/reference/sdk/globbing.mdx
- developer/templates/reference/sdk/index.mdx
- developer/templates/reference/sdk/inquirer.mdx
- developer/templates/reference/sdk/types.mdx
- developer/templates/tutorials/01-blank-template.mdx
- developer/templates/tutorials/02-adding-variables.mdx
- developer/templates/tutorials/03-changing-glob.mdx
- developer/templates/tutorials/04-asking-questions.mdx
- developer/templates/tutorials/full-example.mdx
- developer/templates/tutorials/index.mdx

### User Documentation

- user/explanation/3-way-merge.mdx
- user/explanation/template-lifecycle.mdx
- user/how-to/browse-templates.mdx
- user/how-to/create-project.mdx
- user/how-to/install.mdx
- user/how-to/update-project.mdx
- user/index.mdx
- user/reference/cli-commands.mdx
- user/reference/registry-ui.mdx
- user/tutorials/get-started.mdx

---

## Detailed Findings

The detailed findings for each file are available in the `.fact-check/findings/` directory.

To view findings for a specific file, check:
`.fact-check/findings/<file-path-with-slashes-replaced-by-underscores>.md`

For example, findings for `content/docs/developer/basics/quickstart.mdx` are in:
`.fact-check/findings/developer_basics_quickstart.mdx.md`

---

## How to Fix Issues

To automatically fix documentation issues based on this report, run:

```bash
/fact-fix
```

This will apply corrections to the documentation files based on the findings.

---

## Key Findings Summary

Based on the fact-check, the documentation is generally accurate. The main categories of issues found include:

### Common 🔴 Source Code Inaccuracies

- Some CLI command examples may use incorrect binary names
- Some API references may be outdated
- Some code examples may not match current SDK signatures

### Common 🟡 Documentation Issues

- Minor version numbers not specified
- Some descriptions could be more precise
- Some cross-references may need updating

### Common 🟠 Other Problems

- Some diagrams could be clearer
- Some explanations could be expanded
- Some examples could be more comprehensive

---

_Report generated by Claude Code fact-check skill_
