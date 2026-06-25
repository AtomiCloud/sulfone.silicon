# Task Spec v3: Documentation Fixes

## Overview

Fix documentation issues identified in the v2 implementation, including broken links, Mermaid diagram errors, and content inaccuracies.

---

## 1. Broken Links (Critical - HIGH)

### Issue

All internal documentation links are broken due to missing `docs/` prefix in URLs.

### Fix Required

- Audit all MDX files for internal links
- Add `docs/` prefix to all internal documentation URLs
- Verify links resolve correctly

### Affected Files

- All MDX files in `content/docs/user/`
- All MDX files in `content/docs/contributor/`
- All MDX files in `content/docs/developer/`

---

## 2. User Docs Fixes

### 2.1 Install CLI (`content/docs/user/how-to/install.mdx`)

- **Add**: Scoop installation method (Windows)
- **Add**: Nix profile installation method (`nix profile install`)

### 2.2 Registry UI Reference (`content/docs/user/reference/registry-ui.mdx`)

- **Fix**: URL should be `cyanprint.dev`, NOT `registry.cyanprint.dev`

---

## 3. Contributor Section Fixes

### 3.1 Replace Task Commands with Pls

- **Issue**: All `task` commands should be `pls`
- **Fix**: Find and replace `task` with `pls` throughout contributor docs
- Users should use Taskfile with `pls` command, not raw commands

### 3.2 Repository Overviews (`content/docs/contributor/repositories/`)

For Iridium, Boron, Zinc, Argon, Helium:

- **Remove**: Detailed implementation details
- **Keep**: High-level overview only

### 3.3 Execution Flow (`content/docs/contributor/architecture/execution-flow.mdx`)

#### Mermaid Diagram Errors

```
Parse error on line 4: ... --> D[Call template(inquirer, determini
Expecting 'SQE', 'DOUBLECIRCLEEND', 'PE', '-)', 'STADIUMEND', got 'PS'
```

**Fix**: Rewrite Mermaid diagrams with correct syntax - avoid special characters in node labels

#### Phase 5 Content Fix

- **Current**: Mentions processors for linters/validators/formatters
- **Fix**: Clarify that processors are mostly templaters; linters/validators/formatters belong in plugins stage

### 3.4 Repository Details

- **Issue**: Repository details are incorrect
- **Fix**: Correct the repository descriptions

### 3.5 Zinc (`content/docs/contributor/repositories/zinc.mdx`)

- **Issue**: Data model is incorrect
- **Fix**: Correct the data model description

### 3.6 Argon (`content/docs/contributor/repositories/argon.mdx`)

- **Issue**: References carbon
- **Fix**: Remove carbon references - Argon is standalone

---

## 4. Development Setup Section (`content/docs/contributor/development/setup.mdx`)

### Changes Required

1. **Emphasize**: Use nix + Taskfile (`pls`) for ALL workflows
2. **Dependencies**: Installation is `pls setup` only
3. **Remove sections**:
   - Development workflow (unnecessary)
   - Linters section (use `pre-commit run -a` only)
   - Integration/unit tests (none exist)
   - Common issues section
   - IDE setups section
   - Good first issues section

---

## 5. Developer Section Fixes

### 5.1 Introduction (`content/docs/developer/basics/introduction.mdx`)

**Resolvers clarification**:

- Resolvers happen in 2 places:
  1. After processors
  2. On client-side during layering:
     - Vertical = dependency resolution
     - Horizontal = across multiple templates

### 5.2 Architecture (`content/docs/developer/basics/architecture.mdx`)

#### Mermaid Diagram Errors

Multiple errors:

```
Parse error on line 4: ... --> D[Call template(inquirer, determini
TypeError: can't access property "firstChild", element is null
Lexical error on line 6. Unrecognized text.
```

**Fix**: Rewrite all broken Mermaid diagrams with correct syntax

### 5.3 Templates Section

- **Issue**: References "Developer Basics" which doesn't exist
- **Fix**: Remove "Developer Basics" reference link

### 5.4 Codehike Issues

- **Issue**: Codehike syntax highlighting not working correctly, missing colors
- **Investigate**: Check source.config.ts and Codehike configuration
- **Fix**: Ensure proper syntax highlighting with colors

---

## 6. Mermaid Diagram Fixes (All Files)

### Common Errors

1. Parse error: Special characters in node labels
2. TypeError: Element null (likely malformed diagram)
3. Lexical error: Unrecognized text

### Fix Strategy

1. Search all MDX files for Mermaid code blocks
2. Validate syntax using Mermaid documentation
3. Rewrite problematic diagrams:
   - Use simple node labels (no special characters)
   - Escape or avoid parentheses, colons, etc.
   - Test rendering

---

## Priority Order

| Priority | Category                               | Effort          |
| -------- | -------------------------------------- | --------------- |
| 1        | Fix broken links (docs/ prefix)        | HIGH - Medium   |
| 2        | Fix Mermaid diagram syntax errors      | HIGH - High     |
| 3        | Content corrections (user docs)        | MEDIUM - Low    |
| 4        | Content corrections (contributor docs) | MEDIUM - Medium |
| 5        | Content corrections (developer docs)   | MEDIUM - Medium |
| 6        | Codehike syntax highlighting           | MEDIUM - Medium |

---

## Files to Modify

### User Docs

- `content/docs/user/how-to/install.mdx`
- `content/docs/user/reference/registry-ui.mdx`

### Contributor Docs

- `content/docs/contributor/index.mdx`
- `content/docs/contributor/architecture/execution-flow.mdx`
- `content/docs/contributor/development/setup.mdx`
- `content/docs/contributor/repositories/argon.mdx`
- `content/docs/contributor/repositories/boron.mdx`
- `content/docs/contributor/repositories/helium.mdx`
- `content/docs/contributor/repositories/iridium.mdx`
- `content/docs/contributor/repositories/zinc.mdx`
- `content/docs/contributor/repositories/index.mdx`

### Developer Docs

- `content/docs/developer/basics/introduction.mdx`
- `content/docs/developer/basics/architecture.mdx`
- All files with broken links to fix
