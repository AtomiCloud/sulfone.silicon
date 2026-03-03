# File: content/docs/developer/plugins/explanation/what-are-plugins.mdx

> Documentation explaining what plugins are, their role in CyanPrint, how they work, and when to use them. Includes code examples and comparison with processors.

### Source Code Inaccuracies

1. **Type Name Mismatch**
   - **Documented**: `PluginInput` interface
   - **Actual**: `CyanPluginInput` type is exported from the SDK
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193` exports `CyanPluginInput`, not `PluginInput`. The internal interface is `CyanPluginInput` at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21`

2. **Missing Import Statement in Code Examples**
   - **Documented**: Code examples use `$` template literal syntax without import
   - **Actual**: The `$` function is from Bun's shell API, not the SDK, and requires `import { $ } from 'bun';`
   - **Evidence**: All code examples in lines 108-151 use `$` syntax without showing the required import. The SDK package.json at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json` does not include `zx` or any shell library.

3. **Input Property Name Inconsistency**
   - **Documented**: Input receives `directory` property
   - **Actual**: Correct - but the internal domain type uses `directory` while the documentation shows destructuring correctly. No issue here, just confirming accuracy.

### Documentation Issues

1. **Missing Import in Code Examples**
   - **Problem**: All three code examples (Setup Plugin, Formatter Plugin, Build Plugin) use `$` syntax without importing it
   - **Location**: Lines 108-151
   - **Fix**: Add `import { $ } from 'bun';` to each example or add a note explaining that Bun shell is required

2. **Type Reference Inconsistency**
   - **Problem**: Documentation references `PluginInput` but SDK exports `CyanPluginInput`
   - **Location**: Input section (lines 48-50) and throughout code examples
   - **Fix**: Either update to use `CyanPluginInput` or add a note that `PluginInput` is an alias/simplified name for documentation purposes

3. **No Mention of Bun Dependency**
   - **Problem**: Code examples rely on Bun's shell API (`$`) but this dependency is not mentioned
   - **Location**: Throughout the "Common Plugin Patterns" section
   - **Fix**: Add a callout or note explaining that the `$` syntax requires Bun, and link to alternative approaches (Node.js child_process, execa) for non-Bun environments

### Other Problems

1. **Callout Claim About Processor Isolation**
   - **Problem**: Callout states "Plugins are the only component with shell access. Processors are isolated and cannot execute commands."
   - **Recommendation**: While this is the design intent, there's no technical enforcement visible in the SDK code. The processor interface at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:15-17` receives a `CyanFileHelper` but technically a processor could still import Node.js modules. Consider clarifying this is a "by design" constraint rather than a technical enforcement.

2. **Code Example Port Reference Missing**
   - **Problem**: Documentation doesn't mention that plugins run on port 5552
   - **Recommendation**: Consider adding this technical detail, as it's documented in the SDK source at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:65`

## Summary

| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 2 |
| Documentation Issues | 3 |
| Other Problems | 2 |
