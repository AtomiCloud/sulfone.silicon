<!-- source: content/docs/developer/plugins/explanation/plugins-vs-processors.mdx -->
# 📄 File: content/docs/developer/plugins/explanation/plugins-vs-processors.mdx

> Documentation comparing plugins vs processors with code examples. All code examples and API references verified against source code in helium SDK and iridium e2e tests.

### 🔴 Source Code Inaccuracies
(none found)

### 🟡 Documentation Issues

1. **Incomplete SDK type import in processor example** | Lines 35-49 | The example uses `StartProcessorWithLambda` but doesn't show that `ProcessorOutput` type is also typically imported for explicit return typing (as seen in actual e2e/processor1/index.ts and e2e/processor2/index.ts). Consider adding explicit return type: `Promise<ProcessorOutput>` for clarity.

2. **Incomplete SDK type import in plugin example** | Lines 71-92 | The example uses `StartPluginWithLambda` but doesn't show that `PluginOutput` type is also typically imported for explicit return typing (as seen in actual e2e/plugin1/index.ts and e2e/plugin2/index.ts). Consider adding explicit return type: `Promise<PluginOutput>` for clarity.

3. **Minor discrepancy in template config example** | Lines 147-163 | The example shows `files: [{ root: 'templates', glob: '**/*', type: GlobType.Template }]` but the actual e2e templates use `root: 'template'` (singular) and also include the `exclude: []` property. While not technically incorrect, showing the complete pattern would be more accurate.

### 🟠 Other Problems

1. **Terminology: "CyanFileHelper" vs "fileHelper"** | Throughout | The documentation refers to `CyanFileHelper` as the API/class name but the parameter is named `fileHelper` (lowercase). This is correct but could be clarified with an explicit note that `fileHelper` is the instance of `CyanFileHelper` passed to the lambda.

2. **Execution order diagram could mention "copy" type files** | Lines 103-112 | The diagram shows processors transforming content but doesn't clarify that files with `GlobType.Copy` are copied directly without processing before the template files are resolved. The `resolveAll()` method in CyanFileHelper handles copy files first, then template files.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 3 |
| 🟠 | 2 |
