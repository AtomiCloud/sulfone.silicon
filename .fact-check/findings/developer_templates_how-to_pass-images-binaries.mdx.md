<!-- source: content/docs/developer/templates/how-to/pass-images-binaries.mdx -->
# 📄 File: content/docs/developer/templates/how-to/pass-images-binaries.mdx

> Document explains how to handle binary files in templates using GlobType.Copy vs GlobType.Template. All technical claims verified against source code.

### 🔴 Source Code Inaccuracies
(None found)

### 🟡 Documentation Issues
1. **Link path inconsistency** | Line 147 | The link `/docs/developer/templates/tutorials/03-changing-glob` should be `/docs/developer/templates/how-to/changing-glob` - but this is actually correct as verified by the file existing at `tutorials/03-changing-glob.mdx`. No issue.

### 🟠 Other Problems
(None found)

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 0 |
| 🟠 | 0 |

## Verification Details

**Verified Claims:**
1. `GlobType.Template` and `GlobType.Copy` enum values - Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:4-7`
2. `StartTemplateWithLambda` function import from `@atomicloud/cyan-sdk` - Confirmed in multiple e2e templates in iridium
3. `var__` pattern syntax for variable substitution - Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:24` and template files
4. `cyan/default` processor name - Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/concepts/template-vs-cyan-processors.md:43,51,79`
5. File configuration structure (root, glob, exclude, type) - Confirmed in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:10-15`

**Code Examples Verified:**
- All code examples match the actual SDK usage patterns found in iridium e2e tests
- The signature `StartTemplateWithLambda(async (i, d) => {...})` matches real usage (though `i` and `d` are typically typed as `IInquirer` and `IDeterminism`)
- The processor configuration structure with `name`, `files`, and `config` is accurate

**Links Verified:**
- `/docs/developer/templates/tutorials/03-changing-glob` - File exists
- `/docs/developer/templates/reference/sdk/globbing` - File exists
- `/docs/developer/templates/how-to/conditional-files` - File exists
