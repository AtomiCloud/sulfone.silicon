<!-- source: content/docs/contributor/index.mdx -->

# 📄 File: content/docs/contributor/index.mdx

> The documentation file provides an overview for contributors to the CyanPrint platform. It lists the main components with their repositories and purposes, and provides navigation links to other documentation sections. The document is largely accurate, with minor issues related to internal naming conventions.

### 🔴 Source Code Inaccuracies

1. **Argon internal naming inconsistency**
   - Documented: "Argon" as the Registry Web UI component
   - Actual: The argon repository's package.json shows the project name as "carbon" (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/package.json:2` - `"name": "carbon"`). The README also refers to it as "Sulfone Carbon" (`/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.MD:1` - "# Sulfone Carbon")
   - Note: The git remote correctly identifies it as `sulfone.argon`, suggesting "Carbon" is an internal code name while "Argon" is the public component name. This may cause confusion for contributors exploring the codebase.

### 🟡 Documentation Issues

1. **README title mismatch in argon**

   - Problem: The argon repository's README.MD is titled "Sulfone Carbon" instead of "Argon"
   - Location: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/argon/README.MD:1`
   - Fix: Update the README title to clearly reference both names or standardize on "Argon"

2. **Missing README content in iridium**
   - Problem: The iridium repository README.MD references "sulfone-iridium" with a hyphen instead of a dot, inconsistent with the GitHub URL format `sulfone.iridium`
   - Location: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/README.MD:1` - "# CyanPrint (sulfone-iridium)"
   - Fix: Standardize naming convention to match the GitHub repository format (sulfone.iridium)

### 🟠 Other Problems

1. **Internal project name exposure**

   - Problem: The argon repository uses "carbon" as its internal package name while being documented as "argon" externally. Contributors cloning the repository may be confused when seeing "carbon" in package.json.
   - Recommendation: Either update the documentation to explain the carbon/argon naming relationship, or rename the package to match the public component name.

2. **Version number not documented**
   - Problem: The documentation does not mention current version numbers for any components, making it harder for contributors to verify they're working with the expected version.
   - Recommendation: Consider adding version information or links to releases for each component.

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 1     |
| 🟡       | 2     |
| 🟠       | 2     |
