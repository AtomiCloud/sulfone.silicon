<!-- source: content/docs/developer/templates/tutorials/01-blank-template.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/01-blank-template.mdx

> Verified the tutorial's claims against helium SDK source and ketone example templates. Found issues with Dockerfile naming convention, meta template reference, and blob.Dockerfile location.

### 🔴 Source Code Inaccuracies
1. **Meta template reference** | Documented: `cyanprint create cyan/new my-first-template` | Actual: Meta template is `atomi/cyan` not `cyan/new` | The ketone meta template at `/Users/erng/Workspace/atomi/runbook/platforms/ketone/cyan/cyan.yaml` shows `username: atomi` and `name: cyan`, making the reference `atomi/cyan`
2. **Project structure - Dockerfile naming** | Documented: `cyan/template.Dockerfile` | Actual: Varies - ketone templates use `cyan/template.Dockerfile`, iridium e2e tests use `cyan/Dockerfile` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/template.Dockerfile` exists, but `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile` uses different naming
3. **Project structure - blob.Dockerfile location** | Documented: `cyan/blob.Dockerfile` (inside cyan/ directory) | Actual: Varies - ketone uses `cyan/blob.Dockerfile`, iridium e2e uses root-level `blob.Dockerfile` | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/blob.Dockerfile` vs `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile`
4. **Root package.json** | Documented: Project structure includes root-level `package.json` alongside `cyan.yaml` | Actual: ketone templates have root `package.json`, iridium e2e tests do not | Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/package.json` exists, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/` has no root package.json

### 🟡 Documentation Issues
1. **Code block syntax highlighting** | Line 98: ````js a.js -cnb` | This appears to be an incorrect code fence language specifier - should likely be `bash` or `shell` for the docker/cyanprint commands
2. **Dockerfile naming convention unclear** | Project structure section shows `template.Dockerfile` but doesn't explain this is the template runner Dockerfile (vs blob.Dockerfile for creating tarballs) | Add clarification about purpose of each Dockerfile
3. **Template files directory naming** | Line 85-92: Shows `cyan/templates` as the directory but the documentation should clarify this is a convention and the `root` property determines the actual path | Add note that `root` is configurable

### 🟠 Other Problems
1. **Inconsistent project structure across repos** | The ketone examples and iridium e2e tests use different conventions for Dockerfile naming and location | Recommend standardizing documentation to show the recommended/canonical structure (likely the ketone pattern)
2. **Missing verification of `cyan/new` meta template** | Could not find evidence of a `cyan/new` template in the registry | Recommend verifying this template exists or updating to `atomi/cyan` which is the actual meta template in ketone

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 3 |
| 🟠 | 2 |
