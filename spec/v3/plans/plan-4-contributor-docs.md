# Plan 4: Contributor Docs Content Fixes

## Scope

Fix content issues in contributor documentation.

## Files to Modify

### 1. `content/docs/contributor/index.mdx`

- Replace all `task` commands with `pls`
- Use Taskfile commands only

### 2. `content/docs/contributor/development/setup.mdx`

**Major restructure:**

- Emphasize: nix + Taskfile (`pls`) for ALL workflows
- Change: Dependencies installation → `pls setup` only
- **REMOVE sections:**
  - Development workflow (unnecessary)
  - Linters section (use `pre-commit run -a` only)
  - Integration/unit tests (none exist)
  - Common issues section
  - IDE setups section
  - Good first issues section

**Keep:**

- Nix setup instructions
- Basic `pls` commands overview

### 3. `content/docs/contributor/architecture/execution-flow.mdx`

- Fix Phase 5: Clarify processors are mostly templaters; linters/validators/formatters belong in plugins stage

### 4. Repository Files (Overview Only)

Files to simplify:

- `content/docs/contributor/repositories/argon.mdx`
- `content/docs/contributor/repositories/boron.mdx`
- `content/docs/contributor/repositories/helium.mdx`
- `content/docs/contributor/repositories/iridium.mdx`
- `content/docs/contributor/repositories/zinc.mdx`
- `content/docs/contributor/repositories/index.mdx`

**Changes:**

- Remove detailed implementation details
- Keep high-level overview only
- Fix Argon: Remove carbon references
- Fix Zinc: Correct data model description

## Implementation Steps

### 1. Global Find/Replace

```bash
# Replace task commands with pls
# Be careful not to replace "task" in general text
```

### 2. Development Setup Rewrite

- Remove unnecessary sections
- Simplify to nix + pls workflow

### 3. Repository Simplification

- Extract key points for each repo
- Remove deep technical details
- Keep architecture overview

## Acceptance Criteria

- [ ] All `task` → `pls` replacements done
- [ ] Development setup simplified
- [ ] Repository docs are overviews only
- [ ] No carbon references in Argon
- [ ] Zinc data model corrected
- [ ] Phase 5 content clarified

## Estimated Effort

Medium - requires careful editing and content removal
