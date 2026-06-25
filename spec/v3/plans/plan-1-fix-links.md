# Plan 1: Fix Broken Links (docs/ prefix)

## Scope

Fix all internal documentation links that are missing the `docs/` prefix.

## Files to Modify

All MDX files in:

- `content/docs/user/`
- `content/docs/contributor/`
- `content/docs/developer/`

## Implementation Steps

### 1. Audit Links

Search for all internal links in MDX files:

```bash
grep -r "\[.*\](\/" content/docs/
```

### 2. Fix Pattern

- Links like `[Text](/developer/basics)` → `[Text](/docs/developer/basics)`
- Links like `[Text](/user/how-to/install)` → `[Text](/docs/user/how-to/install)`
- Links like `[Text](/contributor/repositories)` → `[Text](/docs/contributor/repositories)`

### 3. Verify

- Run `direnv exec . pls dev` and check links work
- Use browser to verify navigation

## Acceptance Criteria

- [ ] All internal links include `/docs/` prefix
- [ ] No 404 errors when navigating documentation
- [ ] Links resolve correctly in both dev and build

## Estimated Effort

Medium - requires careful search and replace across many files
