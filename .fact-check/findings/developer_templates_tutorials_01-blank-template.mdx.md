<!-- source: content/docs/developer/templates/tutorials/01-blank-template.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/01-blank-template.mdx

> Tutorial documenting how to create a blank template using the meta template. Contains minor inaccuracies in code examples and project structure description.

### 🔴 Source Code Inaccuracies

1. **Incorrect parameter type name**
   - Documented: `d` parameter described as `IDefine`
   - Actual: `IDeterminism`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:192` exports `IDeterminism`, and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5` defines the interface. All actual templates use `IDeterminism` (see `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:2-3`)

2. **Incorrect project structure - Dockerfile naming inconsistency**
   - Documented: `template.Dockerfile` in `cyan/` directory
   - Actual: Varies between projects - nix-init and workspace use `cyan/template.Dockerfile`, but the meta template (cyan/cyan) uses `cyan/Dockerfile`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/template.Dockerfile` exists, `/Users/erng/Workspace/atomi/runbook/platforms/ketone/cyan/cyan/Dockerfile` (not template.Dockerfile)

3. **Project structure lockfile naming inconsistency**
   - Documented: `bun.lockb`
   - Actual: nix-init uses `bun.lockb`, meta template uses `bun.lock`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/bun.lockb` vs `/Users/erng/Workspace/atomi/runbook/platforms/ketone/cyan/cyan/bun.lock`

4. **Missing package.json in cyan/ directory**
   - Documented: `package.json` at project root only
   - Actual: `package.json` exists in `cyan/` directory for templates (required for SDK dependencies)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/ketone/nix-init/cyan/package.json` exists

### 🟡 Documentation Issues

1. **Unverified CLI command for meta template**
   - Problem: The command `cyanprint create cyan/new my-first-template` references a meta template `cyan/new` - the registry name `cyan/new` could not be verified against actual published templates
   - Location: Line 26
   - Fix: Verify this meta template exists in the registry or provide alternative setup instructions

2. **Missing package.json in documented project structure**
   - Problem: The documented structure shows `package.json` only at root level, but actual templates have it inside `cyan/` directory
   - Location: Lines 41-49 (project structure diagram)
   - Fix: Add `package.json` to the `cyan/` directory in the structure diagram

3. **Incomplete table description for `d` parameter**
   - Problem: Table shows `d` as `IDefine - access deterministic values` but doesn't explain the interface methods
   - Location: Lines 73-80 (Understanding the Code table)
   - Fix: Update to `IDeterminism - access deterministic values via get(key, origin) method`

### 🟠 Other Problems

1. **Prerequisites missing Bun**
   - Problem: Prerequisites mention Docker, CyanPrint CLI, and Node.js 18+ but don't mention Bun which is the actual runtime used in Dockerfiles
   - Recommendation: Add Bun to prerequisites or clarify that Node.js is only for local development while Docker uses Bun

2. **Code example consistency**
   - Problem: The code example uses shorthand parameter form `(i, d)` while the task spec recommends explicit typing
   - Recommendation: Either add explicit types like `(i: IInquirer, d: IDeterminism)` or explain both forms are valid

3. **Template files directory naming ambiguity**
   - Problem: Documentation uses `templates/` (plural) in the mkdir command, but should clarify this is a user-defined directory name
   - Recommendation: Note that the directory name is configurable via the `root` property in the processor config

## Summary

| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 3 |
| 🟠 | 3 |
