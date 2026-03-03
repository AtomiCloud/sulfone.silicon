<!-- source: content/docs/developer/templates/explanation/processors-vs-plugins.mdx -->
# 📄 File: content/docs/developer/templates/explanation/processors-vs-plugins.mdx

> Documentation explaining when to use processors vs plugins in CyanPrint templates. The document is conceptually accurate but has interface naming inaccuracies in the "Creating Custom" section.

### 🔴 Source Code Inaccuracies
1. Documented: "Implement `IProcessor` interface" (line 185) | Actual: The interface is named `ICyanProcessor` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:15-17` - `interface ICyanProcessor { process(input: CyanProcessorInput, fileHelper: CyanFileHelper): Promise<ProcessorOutput>; }`
2. Documented: "Implement `IPlugin` interface" (line 195) | Actual: The interface is named `ICyanPlugin` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script.ts:19-21` - `interface ICyanPlugin { plugin(input: CyanPluginInput): Promise<PluginOutput>; }`

### 🟡 Documentation Issues
1. Problem: Interface names are incorrect - missing "Cyan" prefix | Location: Lines 185 and 195 under "Creating Custom" section | Fix: Change "Implement `IProcessor` interface" to "Implement `ICyanProcessor` interface" and "Implement `IPlugin` interface" to "Implement `ICyanPlugin` interface"
2. Problem: The step-by-step instructions could be more specific | Location: Lines 183-186 and 193-197 | Fix: Update step 2 to read "Implement `ICyanProcessor` interface" and "Implement `ICyanPlugin` interface" respectively

### 🟠 Other Problems
1. Problem: The processor names `cyan/default`, `cyan/init-git`, and `cyan/npm-install` are used as examples throughout the document but their implementations are not found in the referenced source paths (argon, boron, helium, iridium, zinc) - these appear to be built-in or registry packages maintained separately | Recommendation: Consider adding a note that these are built-in processors/plugins provided by the CyanPrint platform, or link to where they can be found in a registry

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 2 |
| 🟠 | 1 |
