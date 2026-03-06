# Plan 5: Developer Docs Content Fixes

## Scope

Fix content issues in developer documentation.

## Files to Modify

### 1. `content/docs/developer/basics/introduction.mdx`

**Add resolvers clarification:**

Resolvers happen in 2 places:

1. **After processors** - Server-side resolution
2. **On client-side during layering:**
   - **Vertical layering** = dependency resolution
   - **Horizontal layering** = across multiple templates

### 2. `content/docs/developer/basics/architecture.mdx`

- Fix Mermaid diagrams (covered in Plan 2)
- Ensure diagram descriptions match fixed diagrams

### 3. Remove "Developer Basics" References

**Issue:** Link to non-existent "Developer Basics" section

**Files to check:**

- `content/docs/developer/plugins/index.mdx`
- `content/docs/developer/processors/index.mdx`
- `content/docs/developer/templates/index.mdx`

**Fix:**

- Remove broken "Developer Basics" links
- Replace with appropriate alternative or remove entirely

## Implementation Steps

### 1. Introduction Updates

- Add resolvers section with clear explanation
- Use proper formatting (bullet points, bold for emphasis)

### 2. Remove Broken References

```bash
grep -rn "Developer Basics" content/docs/developer/
```

- Remove or replace found references

## Acceptance Criteria

- [ ] Resolvers clarification added to introduction
- [ ] No broken "Developer Basics" links
- [ ] All developer docs render correctly

## Estimated Effort

Low - straightforward content updates
