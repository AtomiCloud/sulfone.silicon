<!-- source: content/docs/developer/templates/reference/sdk/globbing.mdx -->
# 📄 File: content/docs/developer/templates/reference/sdk/globbing.mdx

> This document provides globbing pattern reference for templates. Several inaccuracies were found regarding GlobType enum values and unsupported features.

### 🔴 Source Code Inaccuracies
1. **GlobType.Ignore does not exist** | Documented: `GlobType.Ignore` with use case "Files to skip entirely" | Actual: Only `GlobType.Template` and `GlobType.Copy` exist | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4`:
   ```typescript
   enum GlobType {
     Template = 0,
     Copy = 1,
   }
   ```
   Same in Python SDK (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:6-9`), .NET SDK (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Cyan.cs:3-7`), and Iridium/Rust (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:4-7`).

2. **Python SDK has different enum values** | Documented: `GlobType.Template` = 0, `GlobType.Copy` = 1 (implicitly via Node SDK) | Actual: Python SDK uses `Template = 1`, `Copy = 2` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:6-9`:
   ```python
   @dataclass
   class GlobType(Enum):
       Template = 1
       Copy = 2
   ```
   Note: The `@dataclass` decorator on an Enum class is incorrect Python usage (enums should not be dataclasses), but this is a code bug, not documentation issue.

### 🟡 Documentation Issues
1. **Extglob syntax examples may not work universally** | Problem: Patterns like `**/*.ts?(x)` and `**/*.@(js|ts)?(x)` are documented, but the callout admits they "may not be supported in all versions" | Location: Lines 66-78 | Fix: Either remove these examples or clarify which SDK versions/platforms support them. The glob library v11 uses minimatch which supports extglob by default, but this should be tested and documented clearly.

2. **Inconsistent terminology** | Problem: The documentation uses "files" array in examples but doesn't explain that `CyanGlob` objects are configured per-processor within `CyanProcessor.files` | Location: Throughout the document | Fix: Add context that glob patterns are part of the `Cyan` configuration structure, not standalone configuration.

3. **Testing patterns section inaccurate** | Problem: The `find` command example `find templates -name "**/*.md"` is incorrect - `find` doesn't support `**` globbing in `-name` by default, and the syntax shown would look for literal `**` in filenames | Location: Lines 183-188 | Fix: Use correct commands like `find templates -name "*.md"` or use shell globbing with `ls templates/**/*.md`.

### 🟠 Other Problems
1. **Missing brace expansion syntax** | Problem: The pattern syntax table omits brace expansion `{a,b,c}` which is commonly used and supported by the glob library | Recommendation: Add `{a,b,c}` pattern to the syntax table (e.g., `*.{ts,tsx,js,jsx}`).

2. **No SDK-specific notes** | Problem: The document doesn't differentiate between SDKs (Node, Python, .NET) which have slightly different implementations | Recommendation: Add a section noting SDK-specific differences, particularly for Python which has different enum values and the field naming convention (`root` vs `Root`, etc.).

3. **Missing import statement in examples** | Problem: Code examples show `GlobType.Template` usage but do not show the required import statement | Recommendation: Add import example: `import { GlobType } from '@atomicloud/cyan-sdk';`.

4. **`root` property default not documented** | Problem: The documentation does not explain that the `root` property in `CyanGlob` defaults to `.` (current directory) when not specified | Recommendation: Document that `root` is optional and defaults to the read directory.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 3 |
| 🟠 | 4 |
