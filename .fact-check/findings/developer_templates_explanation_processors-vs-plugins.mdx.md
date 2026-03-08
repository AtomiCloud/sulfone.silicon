<!-- source: content/docs/developer/templates/explanation/processors-vs-plugins.mdx -->
# File: content/docs/developer/templates/explanation/processors-vs-plugins.mdx

> Documentation explains the conceptual difference between processors and plugins in CyanPrint. Most content is accurate but interface names are incorrect and plugin names are examples not actual implementations.

### Source Code Inaccuracies
1. **Interface names incorrect**: Documented says "Implement `IProcessor` interface" and "Implement `IPlugin` interface" (lines 184, 195) | Actual: Interfaces are `ICyanProcessor` and `ICyanPlugin` | helium/sdks/node/src/domain/core/cyan_script.ts:15-21
2. **Plugin names are examples, not actual plugins**: Documented shows `cyan/init-git` and `cyan/npm-install` as real plugin names (lines 103, 107, 161, 172) | Actual: No source code evidence these plugins exist; only test plugins `plugin1` and `plugin2` found in iridium/e2e | iridium/e2e/plugin1/cyan.yaml, iridium/e2e/plugin2/cyan.yaml

### Documentation Issues
1. **Missing clarification for example plugins**: Problem: Plugin names used throughout as if real but no implementation exists | Location: Lines 96-112, 156-175 | Fix: Add a note similar to content/docs/developer/templates/reference/sdk/cyan-config.mdx:119 clarifying "The plugin names shown (e.g., `cyan/init-git`, `cyan/npm-install`) are examples. Actual plugin names depend on your Cyan registry configuration."
2. **Interface names need correction**: Problem: Wrong interface names referenced | Location: Lines 184, 195 | Fix: Change `IProcessor` to `ICyanProcessor` and `IPlugin` to `ICyanPlugin`
3. **Link text could be more specific**: Problem: Link text says "Processor Development" and "Plugin Development" but links to index pages | Location: Lines 188, 199, 216-217 | Fix: Consider making link text clearer or ensure target pages exist and are appropriate

### Other Problems
1. **Mermaid diagram shows linear plugin execution**: Problem: The diagram at lines 89-94 shows plugins executing sequentially (Plugin 1 -> Plugin 2 -> Plugin 3) | Recommendation: This is accurate per the execution order documentation; no fix needed but could reference the execution order docs for more detail

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 2 |
| Documentation Issues | 3 |
| Other Problems | 1 |
