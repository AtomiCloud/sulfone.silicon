<!-- source: content/docs/user/how-to/install.mdx -->
# 📄 File: content/docs/user/how-to/install.mdx

> Fact-check findings for the CyanPrint installation documentation page covering Nix, Brew, Scoop, APT, and YUM installation methods with version pinning.

### 🔴 Source Code Inaccuracies

1. **Scoop Installation Not Configured in Release**
   - Documented: `scoop bucket add cyanprint https://github.com/AtomiCloud/scoop-bucket` and `scoop install cyanprint`
   - Actual: The `.goreleaser.yaml` file (iridium/.goreleaser.yaml) only configures `brews` and `nfpms` (for deb/rpm/apk). There is NO `scoops` configuration section, meaning Scoop packages are not being built or published.
   - Evidence: iridium/.goreleaser.yaml lines 37-52 show brews config, lines 54-72 show nfpms config, but no scoop config exists.

2. **Version Example is Outdated**
   - Documented: Examples use version `2.6.0` for version pinning
   - Actual: Current version in source code is `2.7.0` (as of 2026-03-05). The 2.6.0 version was released on 2026-02-26.
   - Evidence: iridium/cyanprint/Cargo.toml line 3: `version = "2.7.0"`, iridium/nix/default.nix line 9: `version = "2.7.0"`, iridium/Changelog.md line 1 shows 2.7.0 release.

3. **APT Repository URL Case Mismatch**
   - Documented: `https://apt.fury.io/AtomiCloud/` (capital A and C)
   - Actual: The fury.sh script pushes to `https://${FURY_TOKEN}@push.fury.io/atomicloud/` (lowercase). The fury.io repository URLs are case-sensitive for the account name.
   - Evidence: iridium/scripts/fury.sh line 13: `curl -F package=@"$file" "https://${FURY_TOKEN}@push.fury.io/atomicloud/"`

4. **YUM Repository URL Case Mismatch**
   - Documented: `baseurl=https://yum.fury.io/atomicloud/` (lowercase)
   - Actual: This is consistent with fury.sh, but contradicts the APT documentation case. The fury.io account is `atomicloud` (lowercase) based on fury.sh.
   - Evidence: iridium/scripts/fury.sh line 13 shows `push.fury.io/atomicloud/`

### 🟡 Documentation Issues

1. **Inconsistent Repository URL Casing Between APT and YUM**
   - Problem: APT instructions use `AtomiCloud` (PascalCase) while YUM uses `atomicloud` (lowercase). Both should be lowercase `atomicloud` to match the fury.io account.
   - Location: Lines 43 (APT) and 54 (YUM)
   - Fix: Change APT URL from `https://apt.fury.io/AtomiCloud/` to `https://apt.fury.io/atomicloud/`

2. **Scoop Installation Section Should Be Removed or Marked Unavailable**
   - Problem: Scoop installation instructions exist but the release pipeline does not publish Scoop packages.
   - Location: Lines 31-36 (Install Latest) and Lines 88-96 (Pin to Specific Version)
   - Fix: Either add Scoop configuration to goreleaser.yaml or remove Scoop tabs from documentation.

3. **Version Pinning Syntax for Nix May Be Incorrect**
   - Problem: The documentation shows `github:AtomiCloud/sulfone.iridium/2.6.0` but Nix flake references typically use `v` prefix for tags (e.g., `v2.6.0`). The changelog shows tags with `v` prefix (e.g., `v2.7.0`, `v2.6.0`).
   - Location: Lines 70, 73
   - Fix: Update to `github:AtomiCloud/sulfone.iridium/v2.6.0` to match actual git tags

4. **Outdated Version Examples**
   - Problem: Version pinning examples reference 2.6.0 which is not the latest version (2.7.0 is current).
   - Location: Throughout the "Pin to Specific Version" section
   - Fix: Update examples to use a more current version or use a placeholder like `X.Y.Z`

### 🟠 Other Problems

1. **Brew Version Pinning May Not Work As Documented**
   - Problem: Homebrew versioned formula installation (`cyanprint@2.6.0`) requires the tap to publish versioned formulae. The goreleaser only publishes the latest version as `cyanprint`. Versioned installation may not be available.
   - Recommendation: Verify with `brew info AtomiCloud/tap/cyanprint` whether older versions are available, or note that only the latest version is typically available via Homebrew.

2. **No Verification Step After Installation**
   - Problem: Documentation doesn't include a step to verify the installation was successful.
   - Recommendation: Add `cyanprint --version` or `cyanprint --help` as a verification step.

3. **APT Repository Setup Missing GPG Key Configuration**
   - Problem: Using `[trusted=yes]` bypasses GPG signature verification. While this works, it's a security trade-off that should be noted.
   - Recommendation: Document this is for convenience and suggest proper GPG key setup if available.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 4 |
| 🟠 | 3 |
