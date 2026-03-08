<!-- source: content/docs/user/explanation/template-lifecycle.mdx -->
# 📄 File: content/docs/user/explanation/template-lifecycle.mdx

> Documentation accurately describes template versioning, updates, and deprecation status. All CLI commands correctly use `cyanprint`.

### 🔴 Source Code Inaccuracies
None found.

### 🟡 Documentation Issues
None found.

### 🟠 Other Problems
None found.

## Verification Details

**Versioning Claims Verified:**
- Auto-incrementing integer versions: **CONFIRMED**
  - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Repositories/TemplateRepository.cs:620-636`
  - Code shows `latest = db.TemplateVersions.Where(x => x.TemplateId == template.Id).Max(x => x.Version as ulong?) ?? 0;` followed by `Version = latest + 1`
- Version numbers have no semantic meaning: **CONFIRMED** (versions are simply `ulong` integers, not semver)

**CLI Commands Verified:**
- `cyanprint push`: **CONFIRMED** - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:29-30`
- `cyanprint update`: **CONFIRMED** - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprint/src/commands.rs:48-72`

**Updates Claims Verified:**
- "latest" refers to highest integer version: **CONFIRMED**
  - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/boron/docs/developer/algorithms/01-version-resolution.md:10` - "When no version is specified, it iterates from the latest version down"
  - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/zinc/App/Modules/Cyan/Data/Repositories/TemplateRepository.cs:543-545` - Uses `OrderByDescending(x => x.Version).FirstOrDefaultAsync()` to get latest

**Deprecation Claims Verified:**
- Template deprecation not currently supported: **CONFIRMED**
  - Searched Zinc codebase for "deprecat" - only found API version deprecation in Swagger config, not template deprecation

**Links Verified:**
- `/docs/user/how-to/update-project`: Valid internal link
- `/docs/user/explanation/3-way-merge`: Valid internal link

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 0 |
| 🟠 | 0 |
