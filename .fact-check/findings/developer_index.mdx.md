# File: content/docs/developer/index.mdx

> Developer overview page for CyanPrint that introduces the three extensible artifacts: Templates, Processors, and Plugins. The page serves as a navigation hub linking to detailed documentation for each artifact type.

### Source Code Inaccuracies

None found. The documentation accurately reflects the source code:

- **Templates** - Correctly described as defining questions and file processing rules. Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/template/service.ts` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts` confirm templates use `IInquirer` interface for question handling and return a `Cyan` config.

- **Processors** - Correctly described as transforming files (templating, syntax). Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/processor/service.ts` shows `ProcessorService` handles file transformation with `CyanFileHelper` for read/write operations.

- **Plugins** - Correctly described as post-processing (run commands, file ops). Source: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/service.ts` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts` confirm plugins receive a directory and can perform operations.

- **"artifacts" terminology** - Confirmed in source code at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/docs/developer/00-README.md:32` which explicitly states "Helium provides SDKs for building CyanPrint artifacts" and lists Templates, Processors, and Plugins.

- **SDK exports** - The documented function names (`StartTemplateWithLambda`, `StartProcessorWithLambda`, `StartPluginWithLambda`) are confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:169-177`.

### Documentation Issues

None found. All links in the documentation are valid:

1. `[Introduction](/developer/basics/introduction)` - File exists at `content/docs/developer/basics/introduction.mdx`
2. `[Architecture](/developer/basics/architecture)` - File exists at `content/docs/developer/basics/architecture.mdx`
3. `[Templates](/developer/templates)` - File exists at `content/docs/developer/templates/index.mdx`
4. `[Processors](/developer/processors)` - File exists at `content/docs/developer/processors/index.mdx`
5. `[Plugins](/developer/plugins)` - File exists at `content/docs/developer/plugins/index.mdx`

### Other Problems

None found. The documentation is accurate and well-structured.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 0 |
| Documentation Issues | 0 |
| Other Problems | 0 |
