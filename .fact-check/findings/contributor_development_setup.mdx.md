<!-- source: content/docs/contributor/development/setup.mdx -->
# 📄 File: content/docs/contributor/development/setup.mdx

> This file documents the development setup for contributing to CyanPrint. It covers Nix-based development environment, common `pls` commands, and pre-commit hooks.

### 🔴 Source Code Inaccuracies

1. **Documented**: `pls test` - "Run tests (if available)"
   **Actual**: The `test` command does NOT exist in all repositories. It only exists in:
   - `argon` (as `pls test`)
   - `helium` (via included taskfile as `template:test` or `resolver:test`, not `pls test` directly)
   - `zinc` (as `stop:test`, not a test runner)
   - `boron` has NO test task
   - `iridium` has NO test task
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/Taskfile.yaml` has no `test` task. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/` grep search found no test task.

2. **Documented**: Pre-commit hooks handle "Code formatting (Biome, treefmt)"
   **Actual**: Biome is NOT used in all repositories. It's only used in `helium` and `argon`. The other repos use different linters:
   - `boron`: golangci-lint, treefmt
   - `iridium`: clippy (Rust), treefmt
   - `zinc`: dotnet-lint, treefmt
   - `helium`: biome, ruff, mypy, dotnet-lint, treefmt
   - `argon`: eslint, svelte-check, treefmt
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/nix/pre-commit.nix:34-42` shows golangci-lint, not Biome.

3. **Documented**: `pre-commit run -a` to run all checks manually
   **Actual**: The `pre-commit` command is NOT directly available in the PATH. Pre-commit hooks are managed via Nix's pre-commit-hooks.nix and run automatically via git hooks. The manual way to run checks would be `nix flake check` or direnv reload.
   **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/nix/packages.nix` does not include pre-commit package.

### 🟡 Documentation Issues

1. **Problem**: Generic repository URL `sulfone.REPO_NAME` is vague
   **Location**: Line 26-27
   **Fix**: Clarify that contributors should replace `REPO_NAME` with the specific repository name (boron, iridium, zinc, helium, argon). Consider listing all available repositories.

2. **Problem**: `pls dev` command doesn't exist in all repositories
   **Location**: Common Commands table, line 56
   **Fix**: The `dev` command exists in `argon`, `zinc`, and is included in `helium` SDKs, but `boron` uses `pls run` and `iridium` has no dev command. Either document this per-repo or note the variation.

3. **Problem**: Pre-commit hooks description is incomplete
   **Location**: Lines 63-66
   **Fix**: List the actual hooks: treefmt (formatting), gitlint, shellcheck, secrets scanning (infisical), and language-specific linters (varies by repo: golangci-lint, clippy, dotnet-lint, ruff, mypy, biome, eslint, hadolint).

4. **Problem**: `direnv allow` step may not work as documented
   **Location**: Lines 32-36
   **Fix**: Some repos like `boron/.envrc:3` include `pls setup` which runs automatically. The documentation should note that `direnv allow` may trigger setup commands defined in .envrc.

### 🟠 Other Problems

1. **Problem**: Documentation suggests uniform `pls` commands across all repos, but the Taskfiles vary significantly between repositories.
   **Recommendation**: Create per-repo setup guides or add a note that available commands vary by repository. The common commands section should clarify which repos support which commands.

2. **Problem**: The `.envrc` files vary - some include `pls setup` (boron), some don't (iridium).
   **Recommendation**: Document that the first-time setup experience may differ slightly per repository based on .envrc contents.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 3 |
| 🟡 | 4 |
| 🟠 | 2 |
