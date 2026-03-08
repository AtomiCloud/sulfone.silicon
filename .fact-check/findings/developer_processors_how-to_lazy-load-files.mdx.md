<!-- source: content/docs/developer/processors/how-to/lazy-load-files.mdx -->
# 📄 File: content/docs/developer/processors/how-to/lazy-load-files.mdx

> Documentation for lazy loading files in processors using `fileHelper.get()`. Mostly accurate with one property name mismatch in code examples.

### 🔴 Source Code Inaccuracies
1. **Property name mismatch** | Documented: `input.writeDirectory` | Actual: `input.writeDir` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` shows `CyanProcessorInput` interface has `writeDir: string`, not `writeDirectory`

### 🟡 Documentation Issues
1. **Inconsistent property name in return statements** | Location: Lines 50, 106, 131 | Fix: Change `input.writeDirectory` to `input.writeDir` in all three code examples' return statements

### 🟠 Other Problems
None identified.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 1 |
| 🟠 | 0 |

---

## Verification Details

### Verified Correct Claims:
- **VirtualFileReference class** exists with documented properties: `relative`, `baseRead`, `baseWrite`, `read` (getter), `write` (getter)
- **VirtualFileReference.readFile()** method returns `VirtualFile` and loads content synchronously
- **VirtualFile class** exists with documented properties: `relative`, `content`, `read` (getter), `write` (getter)
- **VirtualFile.writeFile()** method writes content to output
- **fileHelper.get()** method signature: `get(g: CyanGlob): VirtualFileReference[]`
- **fileHelper.copy()** method exists and copies files without loading content
- **fileHelper.readAsStream()** method exists for streaming large files (referenced in callout)
- **StartProcessorWithLambda** import from `@atomicloud/cyan-sdk` is correct
- **LambdaProcessorFn** signature: `(i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>`

### Source Code Evidence:
- VirtualFileReference/VirtualFile: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/virtual_file.ts`
- CyanFileHelper: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts`
- CyanProcessorInput: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts`
- SDK exports: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts`
- Package name: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json` - `@atomicloud/cyan-sdk`
