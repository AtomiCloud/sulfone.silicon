# Plan 4: Try Command + Developer Workflow

## Goal

Document the `try` command and update ALL existing developer tutorials to use try-first workflow with 3-language examples.

## Key Insight

With `try`, developers write a template from scratch and test immediately — no registry needed:

1. Write code (cyan.yaml + Dockerfile + template logic)
2. `cyanprint try template ./my-template ./output` — auto-builds and tests
3. Change code, try again
4. `cyanprint push` only when ready

## Source of Truth

- CLI: `../iridium/cyanprint/src/commands.rs` (TryCommands enum)
- Implementation: `../iridium/cyanprint/src/try_cmd.rs` (normal + dev mode)
- Coordinator: `../boron/server.go` lines 161-290 (try endpoint)
- E2E examples: `../iridium/e2e/template1/` (template structure)
- Node SDK: `../helium/sdks/node/src/main.ts`
- Python SDK: `../helium/sdks/python/cyanprintsdk/main.py`, `../helium/sdks/python/template_test.py`
- .NET SDK: `../helium/sdks/dotnet/sulfone-helium-template-api/Program.cs`

## Files to Create

- `content/docs/user/how-to/test-locally.mdx` — User guide
- `content/docs/developer/templates/how-to/test-locally.mdx` — Developer guide
- `content/docs/developer/templates/how-to/dev-mode.mdx` — Dev mode guide

## Files to Modify

- `content/docs/developer/templates/tutorials/01-blank-template.mdx` — Replace `cyanprint create cyan/new` + `docker build` with manual setup + `cyanprint try template`. Add Python and .NET examples.
- `content/docs/developer/processors/tutorials/first-processor.mdx` — Add Python and .NET examples. Update test section to use try.
- `content/docs/developer/plugins/tutorials/first-plugin.mdx` — Add Python and .NET examples. Update test section to use try.
- `content/docs/user/how-to/meta.json` — Add "test-locally"

## Writing Guide

- Use `<Tabs items={['TypeScript', 'Python', 'C#']}>` for all code
- Use `<Steps>` for tutorial sequences
- Use `<Files>` for project structure
- Use `-c` on bash and code blocks
- Use `<Callout type="info">` for tips about dev mode

## Definition of Done

- [ ] Blank template tutorial uses try-first workflow + 3 languages
- [ ] Processor tutorial has 3 languages + try workflow
- [ ] Plugin tutorial has 3 languages + try workflow
- [ ] User how-to for test-locally created
- [ ] All code verified against helium SDK source
- [ ] Follows howtowrite.md
- [ ] `direnv exec . pls build` succeeds
- [ ] `direnv exec . pre-commit run -a` passes
