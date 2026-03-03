<!-- source: content/docs/developer/plugins/explanation/plugins-vs-processors.mdx -->

# 📄 File: content/docs/developer/plugins/explanation/plugins-vs-processors.mdx

> Found 2 API inaccuracies in code examples. The Processor example uses incorrect property names, and the Plugin example uses a deprecated shell syntax pattern. Both examples deviate from actual source code usage.

### 🔴 Source Code Inaccuracies

1. **Documented**: Processor example uses `input.writeDirectory` (line 47) | **Actual**: Property is `input.writeDir` (no "tory") | Evidence: `helium/sdks/node/src/domain/core/cyan_script_model.ts:13` defines `writeDir: string;`
2. **Documented**: Processor example accesses file via `file.content` and `file.writeFile()` pattern (lines 41-44) | **Actual**: Correct but return should use `input.writeDir` not `input.writeDirectory` | Evidence: `iridium/e2e/processor1/index.ts:55` returns `{ directory: input.writeDir }`
3. **Documented**: Plugin example shows `await $`git -C ${directory} init`.quiet();` with bun shell syntax (lines 79-80) | **Actual**: Real plugins use Node.js `fs` module directly, not bun shell | Evidence: `iridium/e2e/plugin1/index.ts:1-22` uses `import fs from 'node:fs'` and `fs.writeFileSync()` without bun shell

### 🟡 Documentation Issues

1. **Problem**: Processor example property name mismatch | **Location**: Line 47 | **Fix**: Change `input.writeDirectory` to `input.writeDir`
2. **Problem**: Inconsistent property name in comparison table | **Location**: Line 18, 53, 54 | **Fix**: Table says "Full directory + shell" for Plugin access, but plugins actually receive `input.directory` (verified at `cyan_script_model.ts:19`)
3. **Problem**: Plugin example uses bun shell (`$` syntax) which may not be available in all environments | **Location**: Lines 73-84 | **Fix**: Consider using Node.js child_process or fs examples that match real implementation patterns

### 🟠 Other Problems

1. **Problem**: The SDK import `@atomicloud/cyan-sdk` is shown but the actual package structure in helium shows exports from `@atomicloud/cyan-sdk` - this is consistent, no issue.
2. **Recommendation**: The Plugin example showing bun shell syntax (`await $\`...\``) could be misleading since the actual plugin examples in iridium use Node.js `fs` module. Consider showing both approaches or clarifying that bun shell is optional.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 3     |
| 🟡       | 3     |
| 🟠       | 1     |
