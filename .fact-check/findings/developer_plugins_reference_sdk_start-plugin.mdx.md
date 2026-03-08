<!-- source: content/docs/developer/plugins/reference/sdk/start-plugin.mdx -->
# 📄 File: content/docs/developer/plugins/reference/sdk/start-plugin.mdx

> Documentation for StartPluginWithLambda function in the CyanPrint SDK. The document correctly describes the function signature and usage patterns. Minor discrepancies exist in type names between documented and exported types.

### 🔴 Source Code Inaccuracies
1. Documented: Type named `CyanPluginInput` in signature `(input: CyanPluginInput) => Promise<PluginOutput>` | Actual: The SDK exports both `CyanPluginInput` (from `cyan_script_model.ts`) AND a separate `PluginInput` type (from `domain/plugin/input.ts`), but only `CyanPluginInput` is exported from main.ts. However, both have identical structure `{ directory: string; config: unknown; }` | file: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/plugin/input.ts:1-4`

2. Documented: Response shows `PluginOutput` with `directory` field returned to CyanPrint | Actual: The internal `PluginOutput` type has `directory`, but the API response object sent back uses `outputDir` field (mapped via `PluginMapper.ToRes()` which converts `directory` to `outputDir`) | file: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/plugin/mapper.ts:14-18`

### 🟡 Documentation Issues
1. Problem: The cross-reference link text uses "PluginInput/Output" but the actual type is `CyanPluginInput` | Location: "Related" section, first link | Fix: Update the cross-reference page to clarify that `CyanPluginInput` is the exported type name used by `StartPluginWithLambda`

2. Problem: The "How It Works" section step 2 mentions "POST `/api/plug` with `PluginInput`" but the actual type should be `PluginReq` at the API boundary | Location: Line 89 | Fix: Clarify that the HTTP request uses `PluginReq` type which is mapped to `PluginInput` for internal processing

3. Problem: The documentation says `config: unknown` in the handler signature but the request type (`PluginReq`) actually defines `config: Record<string, unknown>` | Location: Parameters table, line 22 | Fix: Add a note that at the API boundary, config is `Record<string, unknown>` but appears as `unknown` in the handler

### 🟠 Other Problems
1. Problem: Inconsistency between type names - the SDK exports `CyanPluginInput` but the related input-output.mdx documents `PluginInput`. This could confuse users. | Recommendation: Standardize type naming across documentation - either use the exported name `CyanPluginInput` everywhere or note the aliasing

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 3 |
| 🟠 | 1 |
