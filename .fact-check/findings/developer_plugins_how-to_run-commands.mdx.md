<!-- source: content/docs/developer/plugins/how-to/run-commands.mdx -->
# 📄 File: content/docs/developer/plugins/how-to/run-commands.mdx

> This document covers running shell commands in plugins using Bun Shell and Node.js child_process. The SDK API references are accurate, but the timeout configurability claim lacks source evidence.

### 🔴 Source Code Inaccuracies
1. **Documented**: "The plugin timeout is configurable but has limits." | **Actual**: No evidence found in source code for configurable plugin timeouts. The only timeout found is a hardcoded 600-second HTTP client timeout in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyancoordinator/src/template/executor.rs:215` for HTTP requests, not specifically for plugins. | File: iridium/cyancoordinator/src/template/executor.rs:215

### 🟡 Documentation Issues
1. **Problem**: The callout warns about "long-running commands" and mentions "plugin timeout is configurable" without explaining how to configure it. | **Location**: Line 244-246 (Callout) | **Fix**: Either document how to configure the timeout, or remove the claim about configurability. If timeout is not actually configurable, rephrase to simply warn about timeout limits.
2. **Problem**: The `--if-present` flag callout mentions "npm version 7 or later" but doesn't mention that bun (the primary runtime used in examples) has different behavior. | **Location**: Line 240-242 | **Fix**: Add a note about bun's equivalent behavior or clarify that this applies only when using npm specifically.

### 🟠 Other Problems
1. **Problem**: No real-world plugin examples in the codebase demonstrate running shell commands with Bun Shell or child_process. | **Recommendation**: Consider adding a reference plugin in iridium/e2e that demonstrates command execution patterns for better validation.
2. **Problem**: The document uses `CyanPrint Bot` in the git config example (line 204), but the binary name is `cyanprint` (lowercase). While this is a human-readable name and not a CLI reference, consistency with branding could be improved. | **Recommendation**: Consider using consistent capitalization (e.g., "Cyanprint Bot" or "CyanPrint Bot") across all documentation.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 2 |
| 🟠 | 2 |
