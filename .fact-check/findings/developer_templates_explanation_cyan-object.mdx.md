<!-- source: content/docs/developer/templates/explanation/cyan-object.mdx -->
# 📄 File: content/docs/developer/templates/explanation/cyan-object.mdx

> Documentation about the Cyan configuration object returned by templates. Overall accurate but contains minor issues with plugin names that may not exist and example code parameter ordering.

### 🔴 Source Code Inaccuracies
1. **i.text parameter order**: Documented: `await i.text('Name?', 'project.name', '...')` | Actual: `i.text(q: string, id: string, help?: string | null)` - The first parameter is the question message, second is id, third is optional help text. The document example shows the correct order but the third parameter '...' is vague and should probably be a more meaningful help text or omitted.
   - Evidence: helium/sdks/node/src/domain/core/inquirer.ts:20-22

2. **Plugin names cyan/init-git and cyan/npm-install**: Documented: Plugin examples use `cyan/init-git` and `cyan/npm-install` | Actual: No source code evidence found for these plugins existing in any repository (boron, iridium, zinc, helium, argon). These appear to be example/placeholder names.
   - Evidence: Grep searches across all source paths found no matches for these plugin implementations

### 🟡 Documentation Issues
1. **Vague third parameter in example**: Problem: The example `await i.text('Name?', 'project.name', '...')` uses '...' as the third parameter without explaining what it represents | Location: Line 160 | Fix: Either remove the third parameter or replace with a meaningful help text example like 'Enter the project name'

2. **Plugin names are examples**: Problem: The plugin names `cyan/init-git` and `cyan/npm-install` are used as if they are real plugins, but no evidence exists they are implemented | Location: Lines 195-196 | Fix: Add a note clarifying these are example plugin names (similar to what's done in content/docs/developer/templates/reference/sdk/cyan-config.mdx:119)

### 🟠 Other Problems
1. **Missing import in example code**: The code example at lines 157-175 imports `StartTemplateWithLambda` and `GlobType` but the GlobType isn't used in the example. Consider removing unused imports or showing a fuller example that uses GlobType.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 2 |
| 🟠 | 1 |
