<!-- source: content/docs/developer/processors/reference/sdk/input-output.mdx -->
# File: content/docs/developer/processors/reference/sdk/input-output.mdx

> Documentation for Processor Input/Output type definitions. The documentation is largely accurate and matches the SDK types. A minor issue exists with Python SDK GlobType values differing from Node.js, and the file-helper.mdx sibling document contains an inconsistency that should be noted.

### Source Code Inaccuracies
1. **GlobType enum values Python SDK inconsistency** | Documented: `GlobType.Template = 0, GlobType.Copy = 1` | Actual: Node.js/.NET use 0/1, but Python SDK uses `GlobType.Template = 1, GlobType.Copy = 2` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:7-9` shows `class GlobType(Enum): Template = 1, Copy = 2` while Node.js at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `enum GlobType { Template = 0, Copy = 1 }`

### Documentation Issues
1. **Cross-SDK GlobType values not documented** | Problem: The documentation presents GlobType enum values (0/1) as universal, but Python SDK uses different values (1/2) | Location: Lines 144-157 (GlobType section) | Fix: Add a note that Python SDK uses different enum values, or document this as Node.js/.NET specific

2. **Sibling document uses wrong property name** | Problem: The related file-helper.mdx uses `input.writeDirectory` instead of `input.writeDir` in the Best Practices section | Location: file-helper.mdx:376 | Fix: Change `return { directory: input.writeDirectory };` to `return { directory: input.writeDir };` in file-helper.mdx

### Other Problems
1. **No type import shown in examples** | Problem: The code examples use types like `CyanGlob` and `GlobType` without showing the import, which may confuse users | Recommendation: Either show the import statement or link to where types are imported from (already done in some examples but not all)

## Summary
| Category | Count |
|----------|-------|
| Red | 1 |
| Yellow | 2 |
| Orange | 1 |

## Verified Accurate Claims
- `CyanProcessorInput` interface has `readDir`, `writeDir`, `globs`, `config` properties (helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16)
- `ProcessorOutput` interface has `directory` property (helium/sdks/node/src/domain/processor/output.ts:1-5)
- `CyanGlob` interface has `root`, `glob`, `exclude`, `type` properties (helium/sdks/node/src/domain/core/cyan.ts and cyan_script_model.ts)
- GlobType enum exists with `Template` and `Copy` values in Node.js SDK (helium/sdks/node/src/domain/core/cyan.ts:1-4)
- `StartProcessorWithLambda` function signature is correct (helium/sdks/node/src/main.ts:106-108, helium/sdks/node/src/api/processor/lambda.ts:6)
- `config` property is typed as `unknown` requiring type casting
- Typical values for readDir (`/workspace/cyanprint/`) and writeDir (`/workspace/output/`) are correct
- SDK package name `@atomicloud/cyan-sdk` is correct (helium/sdks/node/package.json:2)
- Related links to StartProcessorWithLambda, CyanFileHelper, and Types are valid
