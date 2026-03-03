<!-- source: content/docs/developer/plugins/how-to/modify-files.mdx -->

# 📄 File: content/docs/developer/plugins/how-to/modify-files.mdx

> Documentation for file modification operations in plugins. Generally accurate but has one minor inconsistency with the SDK's actual type naming.

### 🔴 Source Code Inaccuracies

1. **PluginInput vs CyanPluginInput** | Documented shows `PluginInput` | Actual SDK uses `CyanPluginInput` | `helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21`
   - The reference documentation at `/developer/plugins/reference/sdk/input-output` uses `PluginInput` as the interface name, but the actual SDK exports `CyanPluginInput` from `@atomicloud/cyan-sdk`
   - Actual interface:
     ```ts
     interface CyanPluginInput {
       directory: string;
       config: unknown;
     }
     ```

### 🟡 Documentation Issues

1. **Inconsistent type name across docs** | `/developer/plugins/reference/sdk/input-output.mdx:17-20` | Update to use `CyanPluginInput` to match SDK export

   - The SDK exports `CyanPluginInput`, not `PluginInput`. The documentation should use the actual exported type name for consistency.

2. **Glob import style** | Line 203 `import { glob } from 'glob';` | Consider noting that this is a third-party dependency
   - The `glob` package is listed as a dependency of the SDK (version ^11.0.0 in package.json), but plugins need to install it separately if they want to use it. The documentation should clarify this is a separate npm package, not part of the SDK exports.

### 🟠 Other Problems

1. **Missing explicit PluginOutput import** | Throughout all code examples | Consider showing explicit type import for better TypeScript practice
   - The actual e2e tests in iridium show `import { PluginOutput, StartPluginWithLambda } from '@atomicloud/cyan-sdk'` with explicit return typing `Promise<PluginOutput>`. The documentation examples could benefit from showing this pattern for better type safety.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 2     |
| 🟠       | 1     |
