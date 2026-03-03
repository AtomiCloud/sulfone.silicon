<!-- source: content/docs/user/how-to/install.mdx -->
# 📄 File: content/docs/user/how-to/install.mdx

> This file documents installation methods for CyanPrint CLI across multiple platforms. The documentation includes Nix, Homebrew, Scoop, APT, and YUM installation methods with version pinning examples.

### 🔴 Source Code Inaccuracies

1. **Scoop Installation for Windows - Deprecated Platform**
   - **Documented**: `scoop bucket add atomi https://github.com/AtomiCloud/scoop-bucket.git` and `scoop install atomi/cyanprint`
   - **Actual**: Windows support was deprecated in v1.7.0 (commit 4a72573). The goreleaser.yaml only builds for `linux` and `darwin` (macOS). The CI workflow (`.github/workflows/⚡reusable-build.yaml`) only targets Linux x86_64, Linux aarch64, MacOS x86_64, and MacOS aarch64. No Windows builds are produced.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Changelog.md:214` - "deprecate windows support"; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.goreleaser.yaml:16-21` - only lists `linux` and `darwin` under `goos`

2. **Description Claims 6 Platforms - Only 4 Are Actually Supported**
   - **Documented**: "Install CyanPrint CLI on 6 platforms" (description line 3)
   - **Actual**: Only 4 platforms are actively built and supported: Linux x86_64, Linux aarch64, macOS x86_64, macOS aarch64. Windows (Scoop) is deprecated and there is no evidence of a working Scoop bucket.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.github/workflows/⚡reusable-build.yaml:26-50` - build matrix only includes Linux and MacOS targets

3. **Version Pinning Example Uses Outdated Version**
   - **Documented**: Version pinning examples use `0.2.0` (lines 73, 76, 87, 98, 109, 120)
   - **Actual**: Current version is `2.6.0` as defined in the nix build configuration and changelog
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/nix/default.nix:9` - `version = "2.6.0"`; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Changelog.md:1` - "## [2.6.0]"

### 🟡 Documentation Issues

1. **Missing Deprecation Notice for Windows/Scoop**
   - **Problem**: The Scoop tab is presented without any warning that Windows is no longer supported. Users attempting to use Scoop will fail since no Windows binaries are published.
   - **Location**: Lines 34-39 (Scoop tab)
   - **Fix**: Either remove the Scoop tab entirely or add a clear deprecation notice stating that Windows support was deprecated in v1.7.0

2. **Version Example Too Old**
   - **Problem**: Using version `0.2.0` as an example is misleading as it's extremely outdated (current is 2.6.0, and 0.2.0 likely never existed publicly based on changelog starting at 1.0.0)
   - **Location**: Lines 73, 76, 87, 98, 109, 120
   - **Fix**: Update version examples to use a realistic recent version like `2.6.0` or use a placeholder like `2.x.x`

3. **Description Mismatch**
   - **Problem**: Description says "6 platforms" but Nix Shell and Nix Profile are both Nix (same platform, different installation methods), and Windows/Scoop is deprecated
   - **Location**: Line 3 (frontmatter description)
   - **Fix**: Update to "Install CyanPrint CLI on Linux and macOS" or "Install CyanPrint CLI via Nix, Homebrew, APT, or YUM"

### 🟠 Other Problems

1. **Inconsistent Tab Grouping**
   - **Problem**: The first Tabs component splits Nix into "Nix Shell" and "Nix Profile" (6 items), while the second Tabs component combines them into just "Nix" (5 items). This inconsistency is confusing.
   - **Recommendation**: Standardize the grouping approach across both tab sets. Either keep Nix Shell/Profile separate in both, or combine them in both.

2. **Homebrew Version Pinning Syntax May Not Work**
   - **Problem**: The documented `brew install AtomiCloud/tap/cyanprint@0.2.0` syntax for versioned installs may not work as expected. Homebrew versioned formulae require the formula to explicitly support versioning, which may not exist in the tap.
   - **Recommendation**: Verify that versioned formulae exist in the homebrew-tap repository, or add a note that version pinning via Homebrew may require checking available versions first.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 3 |
| 🟠 | 2 |
