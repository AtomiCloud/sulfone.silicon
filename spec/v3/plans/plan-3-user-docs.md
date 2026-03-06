# Plan 3: User Docs Content Fixes

## Scope

Fix content issues in user documentation.

## Files to Modify

### 1. `content/docs/user/how-to/install.mdx`

**Add installation methods:**

- Scoop (Windows)
- Nix profile

**Content to add:**

````mdx
### Scoop (Windows)

```bash
scoop bucket add cyanprint https://github.com/cyanprint/scoop-bucket
scoop install cyanprint
```
````

### Nix Profile

```bash
nix profile install github:cyanprint/cyanprint
```

```

### 2. `content/docs/user/reference/registry-ui.mdx`
**Fix URL:**
- Change `registry.cyanprint.dev` → `cyanprint.dev`

## Implementation Steps

### 1. Install CLI
- Add Scoop section after existing Windows method
- Add Nix profile section after existing installation methods
- Maintain consistent formatting with existing sections

### 2. Registry UI
- Find and replace `registry.cyanprint.dev` with `cyanprint.dev`
- Update any URLs in examples/screenshots

## Acceptance Criteria
- [ ] Scoop installation method documented
- [ ] Nix profile installation method documented
- [ ] Registry URL corrected to cyanprint.dev
- [ ] All links work correctly

## Estimated Effort
Low - straightforward content additions and URL fix
```
