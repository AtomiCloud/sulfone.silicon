<!-- source: content/docs/developer/plugins/reference/sdk/index.mdx -->
# 📄 File: content/docs/developer/plugins/reference/sdk/index.mdx

> The Plugin SDK index page documents the `@atomicloud/cyan-sdk` package for plugin development. The claims are largely accurate, with minor documentation issues regarding type alias naming.

### 🔴 Source Code Inaccuracies
- Documented: `CyanPluginInput` has alias `PluginInput` | Actual: No alias exported; SDK exports `CyanPluginInput` only, while `PluginInput` is a separate internal domain type not exported from main.ts | helium/sdks/node/src/main.ts:193, helium/sdks/node/src/domain/plugin/input.ts:1

### 🟡 Documentation Issues
- Problem: The "Plugin vs Processor SDK" comparison table shows `CyanPluginInput` as Input type for plugins, but the "Key Components" table says `CyanPluginInput` has alias `PluginInput` | Location: Lines 22-27, 53-62 | Fix: Either export `PluginInput` as an alias from main.ts or remove the alias claim from the Key Components table

### 🟠 Other Problems
- None identified

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 1 |
| 🟠 | 0 |
