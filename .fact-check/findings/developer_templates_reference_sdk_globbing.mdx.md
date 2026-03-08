<!-- source: content/docs/developer/templates/reference/sdk/globbing.mdx -->
# File: content/docs/developer/templates/reference/sdk/globbing.mdx

> Documentation for glob patterns in templates. Mostly accurate with one minor technical correction needed for the extglob callout and verification of Python SDK note.

### Source Code Inaccuracies
1. Documented: "The Node SDK uses `minimatch` which supports these by default" (line 84) | Actual: The Node SDK uses the `glob` package (v11.0.0) which internally uses `minimatch`. While this is technically true, it's more accurate to say the SDK uses the `glob` package. | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/package.json:39` shows `"glob": "^11.0.0"` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:6` shows `import { glob } from 'glob';`

2. Documented: ".NET SDK uses 0 and 1 like Node" (implied comparison in Python SDK Note at line 150) | Actual: The .NET SDK also uses 0 for Template and 1 for Copy (C# enums are 0-indexed by default). | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/dotnet/sulfone-helium/Domain/Core/Cyan.cs:3-7` shows enum without explicit values, defaulting to 0 and 1.

### Documentation Issues
1. Problem: The Python SDK Note (lines 149-151) correctly states Python uses 1 and 2 instead of 0 and 1, but could be clearer about which SDKs use which values. | Location: Line 149-151 | Fix: The note is factually correct - Python SDK does use `GlobType.Template = 1` and `GlobType.Copy = 2` as verified in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/python/cyanprintsdk/domain/core/cyan.py:7-9`. No change needed.

2. Problem: The CyanGlob interface documentation mentions `root` defaults to `.` but the interface shows it as optional. | Location: Line 93 | Fix: This is correctly documented. The source code at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:7` shows `root?: string | null;` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:24` shows the default: `return path.resolve(this.readDir, g.root ?? '.');` - No change needed.

### Other Problems
1. Problem: The extglob patterns `?(x)` and `@(a|b)` documentation could be confusing as these are advanced features that may not work identically across all glob implementations. | Recommendation: Consider adding a note that these patterns depend on the glob library's specific implementation and users should test their patterns.

## Summary
| Category | Count |
|----------|-------|
| | 2 |
| | 2 |
| | 1 |
