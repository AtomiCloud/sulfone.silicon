<!-- source: content/docs/user/tutorials/get-started.mdx -->
# 📄 File: content/docs/user/tutorials/get-started.mdx

> Quick-start tutorial for creating a first CyanPrint project in under a minute. Documents installation via Nix, Brew, Scoop, APT, YUM and a simple project creation example using the `atomi/nix-init` template.

### 🔴 Source Code Inaccuracies

1. **Scoop Installation for Windows - Deprecated Platform**
   - **Documented**: `scoop bucket add atomi https://github.com/AtomiCloud/scoop-bucket.git` and `scoop install atomi/cyanprint` (lines 32-34)
   - **Actual**: Windows support was deprecated in v1.7.0. The goreleaser.yaml only builds for `linux` and `darwin` (macOS). No Windows binaries are produced, and there is no `scoops` section in goreleaser.yaml.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/Changelog.md:214` - "deprecate windows support"; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.goreleaser.yaml:16-21` - only lists `linux` and `darwin` under `goos`

2. **APT Repository URL Case Mismatch**
   - **Documented**: `https://apt.fury.io/AtomiCloud/` (capitalized "AtomiCloud") (line 40)
   - **Actual**: The fury.io push script pushes to `atomicloud` (lowercase). Fury.io repositories are case-sensitive.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/scripts/fury.sh:13` - `curl -F package=@"$file" "https://${FURY_TOKEN}@push.fury.io/atomicloud/"` (lowercase)

3. **YUM Repository URL is Correct**
   - **Documented**: `baseurl=https://yum.fury.io/atomicloud/` (lowercase) (line 50)
   - **Actual**: This matches the fury.sh script which pushes to `atomicloud/` (lowercase)
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/scripts/fury.sh:13` - correct lowercase used

### 🟡 Documentation Issues

1. **Scoop Tab Missing Deprecation Notice**
   - **Problem**: The Scoop tab is presented without any warning that Windows is no longer supported. Users attempting to use Scoop will fail since no Windows binaries are published.
   - **Location**: Lines 29-35 (Scoop tab)
   - **Fix**: Either remove the Scoop tab entirely or add a clear deprecation notice stating that Windows support was deprecated in v1.7.0

2. **Template Reference Example Omits Version**
   - **Problem**: The example `cyanprint create atomi/nix-init my-project` (line 62) omits the version component. While the CLI defaults to latest when version is omitted, new users may not understand the versioning system from this example alone.
   - **Location**: Line 62
   - **Fix**: Add a note explaining that version is optional and defaults to latest, or show both examples: `cyanprint create atomi/nix-init my-project` (latest) and `cyanprint create atomi/nix-init:1 my-project` (specific version)

3. **Inconsistent Tab Grouping vs install.mdx**
   - **Problem**: `get-started.mdx` uses `groupId="installer"` with items `['Nix', 'Brew', 'Scoop', 'APT', 'YUM']` (5 tabs), while `install.mdx` uses items `['Nix Shell', 'Nix Profile', 'Brew', 'Scoop', 'APT', 'YUM']` (6 tabs with Nix split into two). This inconsistency may confuse users navigating between pages.
   - **Location**: Line 14
   - **Fix**: Standardize the tab group structure across all documentation files

4. **APT Commands Simplified vs install.mdx**
   - **Problem**: `get-started.mdx` shows simpler APT commands without `software-properties-common` prerequisite and `-y` flags, while `install.mdx` includes them. This could cause issues for users on fresh systems.
   - **Location**: Lines 39-42
   - **Fix**: Either add the prerequisite step or add a note linking to the full installation guide

5. **Template Example Cannot Be Verified as Published**
   - **Problem**: While the template `atomi/nix-init` exists in the source repository (`/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan.yaml` with `username: atomi` and `name: nix-init`), there is no guarantee it is actually published to the production registry.
   - **Location**: Line 62
   - **Fix**: Verify the template is published to the registry, or add a troubleshooting note explaining what to do if a template is not found

### 🟠 Other Problems

1. **Missing Prerequisites Section**
   - **Problem**: The tutorial jumps straight to installation without mentioning prerequisites (e.g., Docker for the coordinator service, network access to registry.cyanprint.dev).
   - **Recommendation**: Add a brief "Prerequisites" section mentioning any system requirements like Docker or network connectivity.

2. **Homebrew Tap Name Should Be Verified**
   - **Problem**: Documentation shows `brew install AtomiCloud/tap/cyanprint` which should resolve to `AtomiCloud/homebrew-tap` repository. This appears correct based on goreleaser.yaml but should be verified.
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.goreleaser.yaml:48-52` shows `repository: { owner: AtomiCloud, name: homebrew-tap }`
   - **Recommendation**: Verify the homebrew-tap repository exists at github.com/AtomiCloud/homebrew-tap with the cyanprint formula

3. **No Windows Support Documented Anywhere**
   - **Problem**: The documentation implies cross-platform support with Scoop, but the actual CLI doesn't build for Windows. This affects both this file and install.mdx.
   - **Recommendation**: Either add Windows support (update goreleaser.yaml to include `windows` in `goos` and add a `scoops` section) or remove Windows-related installation instructions from all documentation

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 5 |
| 🟠 | 3 |
