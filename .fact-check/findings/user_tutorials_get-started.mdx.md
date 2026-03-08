<!-- source: content/docs/user/tutorials/get-started.mdx -->
# 📄 File: content/docs/user/tutorials/get-started.mdx

> This documentation file is a quick-start tutorial for CyanPrint. Most content is accurate, but there is one inconsistency between the APT URL in this file versus the install.mdx file.

### 🔴 Source Code Inaccuracies
(none found)

### 🟡 Documentation Issues
1. **APT URL inconsistency across documentation** | Problem: This file uses `https://apt.fury.io/atomicloud/` (line 33) while `content/docs/user/how-to/install.mdx` uses `https://apt.fury.io/AtomiCloud/` (line 43) - different casing | Location: Line 33 | Fix: Verify the correct Fury.io URL format (likely lowercase `atomicloud` based on Fury.io conventions) and ensure both files are consistent

### 🟠 Other Problems
(none found)

## Verification Details

### Verified Correct

1. **CLI binary name** | Documented: `cyanprint` | Actual: `cyanprint` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:4` shows `pub struct Cli` with command definitions; `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/LLM.MD:119` confirms usage pattern `cyanprint create username/template-name:version ./target-path`

2. **Create command syntax** | Documented: `cyanprint create atomi/nix-init my-project` | Actual: Correct | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:33-46` defines the `Create` subcommand with `template_ref` and optional `path` arguments

3. **Template reference format** | Documented: `atomi/nix-init:1` | Actual: Correct format `<username>/<name>:<version>` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/util.rs:13-35` shows `parse_ref_internal()` parses `<username>/<name>:<version>` format

4. **Template `atomi/nix-init` exists** | Documented: `atomi/nix-init` | Actual: Template exists | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan.yaml:1-2` shows `username: atomi` and `name: nix-init`

5. **Brew installation** | Documented: `brew install AtomiCloud/tap/cyanprint` | Actual: Correct | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/.goreleaser.yaml:37-52` configures brew distribution to `AtomiCloud/homebrew-tap` with name `cyanprint`

6. **Nix installation** | Documented: `nix shell github:AtomiCloud/sulfone.iridium` | Actual: Correct | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/flake.nix` exists and follows the standard flake output pattern; repo is `sulfone.iridium` under `AtomiCloud` org

7. **YUM installation** | Documented: `baseurl=https://yum.fury.io/atomicloud/` | Actual: Matches install.mdx | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/silicon.Adelphi-Liong-CU-86et8z80y-Si-Improve-Documentation-new/content/docs/user/how-to/install.mdx:54` uses the same URL

8. **Next Steps links** | All links verified to exist:
   - `/docs/user/how-to/install` - exists at `content/docs/user/how-to/install.mdx`
   - `/docs/user/how-to/create-project` - exists at `content/docs/user/how-to/create-project.mdx`
   - `/docs/user/how-to/browse-templates` - exists at `content/docs/user/how-to/browse-templates.mdx`

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 1 |
| 🟠 | 0 |
