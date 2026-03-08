<!-- source: content/docs/contributor/architecture/overview.mdx -->
# 📄 File: content/docs/contributor/architecture/overview.mdx

> This document provides an overview of the CyanPrint system architecture, describing components (Iridium, Boron, Zinc, Argon, Helium, Silicon) and their relationships. Most factual claims are accurate, but there are some minor issues.

### 🔴 Source Code Inaccuracies
1. **Documented:** "built with Next.js 16 and Fumadocs" (line 80)
   **Actual:** Next.js version is 16.1.6 (but still within the Next.js 16 family) - see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/package.json:19` which shows `"next": "16.1.6"`
   **Status:** Minor - the statement is technically accurate as "Next.js 16" is the major version

2. **Documented:** CLI command "cyanprint create <template_ref> my-project" (line 91)
   **Actual:** This is CORRECT - the binary is named `cyanprint` as confirmed by `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.goreleaser.yaml:22` which shows `binary: cyanprint`
   **Status:** ACCURATE

### 🟡 Documentation Issues
1. **Problem:** The document states Next.js 16 but doesn't specify the minor version
   **Location:** Line 80
   **Fix:** Consider specifying "Next.js 16.x" or the exact version, though the current statement is technically correct

2. **Problem:** The SDK naming in the document says "TypeScript/Node" but the actual SDK package is named `@atomicloud/cyan-sdk`
   **Location:** Line 73-74
   **Fix:** The naming "TypeScript SDK" is acceptable for user-facing documentation, though internally the package is `@atomicloud/cyan-sdk`. No change required.

### 🟠 Other Problems
1. **Problem:** The Mermaid diagram on line 50-51 shows dashed lines between TypeScript SDK and Python/.NET SDKs suggesting they depend on each other, which could be misleading
   **Recommendation:** Clarify that all three SDKs (TypeScript, Python, .NET) are independent implementations that share the same HTTP protocol, rather than the Python/.NET SDKs depending on the TypeScript SDK

2. **Problem:** The "Data Flow" sequence diagram shows "cyanprint create" which is correct, but the internal Iridium docs use "pls create" in examples
   **Location:** Line 91
   **Recommendation:** The document correctly uses `cyanprint` - this is accurate. No change needed.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 (the Next.js 16 claim is technically accurate as the major version) |
| 🟡 | 2 |
| 🟠 | 2 |

## Verification Details

### Verified Accurate Claims:
- **Binary name:** `cyanprint` (confirmed in iridium/.goreleaser.yaml:22)
- **Iridium:** CLI tool written in Rust (confirmed via Cargo.toml)
- **Boron:** Execution coordinator (Go-based, confirmed via README.MD)
- **Zinc:** Registry API written in .NET 8 (confirmed via README.MD:3)
- **Argon:** Web UI written in SvelteKit (confirmed via README.md:3)
- **Helium SDKs:**
  - TypeScript/Node: `@atomicloud/cyan-sdk` v2.1.0 (confirmed via sdks/node/package.json:2)
  - Python: `cyanprintsdk` v2.1.0 (confirmed via sdks/python/pyproject.toml:2-3)
  - .NET: `AtomiCloud.CyanPrint` v2.1.0 (confirmed via sdks/dotnet/sulfone-helium/sulfone-helium.csproj:13-14)
- **Silicon:** Documentation site using Next.js 16.1.6 and Fumadocs (confirmed via package.json)
- **Repository links:** GitHub URLs are correctly formatted
- **Execution environment:** Container-based execution managed by Boron (confirmed via Boron source code)
- **Command syntax:** `cyanprint create <template_ref> my-project` is correct (confirmed via iridium docs)
