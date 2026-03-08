<!-- source: content/docs/developer/templates/reference/cyan-yaml.mdx -->
# 📄 File: content/docs/developer/templates/reference/cyan-yaml.mdx

> This page documents the cyan.yaml format for templates. Most field definitions are accurate, but the `readme` example shows lowercase `README.md` while actual source code uses uppercase `README.MD`. The field structure matches the Rust struct definitions.

### 🔴 Source Code Inaccuracies

1. **Documented:** `readme: README.md` (lowercase extension) | **Actual:** Source code uses `readme: README.MD` (uppercase extension) | **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template4/cyan.yaml:8`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:8`, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml:8` all use `readme: README.MD`. Note: `cyan.temp.yaml:10` shows lowercase but this appears to be an exception.

### 🟡 Documentation Issues

1. **Problem:** Plugin example names may not match actual registry plugins | **Location:** Lines 124-127 show `cyan/init-git` and `cyan/npm-install` | **Fix:** These appear to be example/hypothetical plugin names. Verify if these actually exist in the registry, or clarify that these are example names only. The actual e2e test plugins use different naming (e.g., `cyane2e/plugin1`, `cyane2e/plugin2`).

2. **Problem:** `readme` field example inconsistency across documentation | **Location:** Lines 98-102 show `readme: README.md` | **Fix:** Should use `readme: README.MD` (uppercase) to match actual source code, or clarify that both extensions are valid.

3. **Problem:** Complete Example section (lines 162-196) shows `readme: README.md` | **Location:** Line 172 | **Fix:** Change to `readme: README.MD` to be consistent with actual source code.

### 🟠 Other Problems

1. **Problem:** No mention of common `readme` path patterns | **Recommendation:** Actual templates use different readme paths: `README.MD` (root), `cyan/README.MD` (subdirectory). Consider documenting both patterns.

2. **Problem:** Field order in documentation differs from actual YAML files | **Recommendation:** The documentation shows `username, name, description, project, source, email, tags, readme, processors, plugins, templates`. Actual files follow the same order. This is fine but worth noting that order doesn't matter in YAML.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 3 |
| 🟠 | 2 |
