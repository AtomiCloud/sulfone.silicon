# Fact-Check: Focused Fix List

> After analyzing all 105 findings, these are the common threads that need fixing.

## Clarification: Command Context

| Context                   | Command                | When to Use                                               |
| ------------------------- | ---------------------- | --------------------------------------------------------- |
| **User-facing (release)** | `cyanprint create`     | End users running the distributed binary                  |
| **Developer workflow**    | `pls <task>`           | Contributors in any repo (alias for `task`)               |
| **Iridium development**   | `pls run -- -- create` | Running Iridium's main task (equiv to `cyanprint create`) |

**Rule of thumb:**

- User docs → use `cyanprint`
- Contributor docs → use `pls`
- Both are correct in their context

---

## HIGH Priority Fixes

### 1. Type Name: `CyanConfig` → `Cyan`

**Verified:** The SDK exports `Cyan`, not `CyanConfig`

```typescript
// helium/sdks/node/src/domain/core/cyan.ts:24
interface Cyan {
  globs: CyanGlob[];
  plugins?: CyanPlugin[];
  processors?: CyanProcessor[];
}
```

**Files to fix:**

- [ ] `content/docs/developer/processors/how-to/access-config.mdx`
- [ ] `content/docs/developer/processors/reference/sdk/types.mdx`
- [ ] `content/docs/developer/templates/reference/sdk/types.mdx`
- [ ] Any other files mentioning `CyanConfig`

**Fix:** Replace `CyanConfig` with `Cyan` in all references.

---

### 2. `files` Field: Object → Array

**Verified:** `files` is `CyanGlob[]`, not an object

```typescript
// helium/sdks/node/src/domain/core/cyan.ts:20
interface CyanProcessor {
  files: CyanGlob[];  // <-- Array, not object
  ...
}
```

**Incorrect:**

```typescript
files: { glob: '**/*', type: GlobType.Template }
```

**Correct:**

```typescript
files: [{ glob: '**/*', exclude: [], type: GlobType.Template }];
```

**Files to fix:**

- [ ] `content/docs/developer/processors/how-to/*.mdx`
- [ ] `content/docs/developer/templates/how-to/*.mdx`
- [ ] Code examples in processor/plugin docs

---

### 3. CyanFileHelper Method Signatures

**Verified signatures:**

```typescript
class CyanFileHelper {
  resolveAll(): VirtualFile[]; // NO parameter
  read(g: CyanGlob): VirtualFile[]; // CyanGlob param
  get(g: CyanGlob): VirtualFileReference[]; // CyanGlob param
  readAsStream(g: CyanGlob): VirtualFileStream[]; // CyanGlob param
  copy(copy: CyanGlob): void; // CyanGlob param
}
```

**Incorrect in docs:**

```typescript
fileHelper.read(); // Missing CyanGlob param
fileHelper.get(); // Missing CyanGlob param
fileHelper.readAsStream(); // Missing CyanGlob param
fileHelper.copy(); // Missing CyanGlob param
```

**Correct:**

```typescript
fileHelper.read({ glob: '**/*', exclude: [], type: GlobType.Template, root: '.' });
fileHelper.get({ glob: '**/*', exclude: [], type: GlobType.Template, root: '.' });
fileHelper.readAsStream({ glob: '*.csv', exclude: [], type: GlobType.Template, root: '.' });
fileHelper.copy({ glob: 'assets/**/*', exclude: [], type: GlobType.Copy, root: '.' });
```

**Files to fix:**

- [ ] `content/docs/developer/processors/reference/sdk/file-helper.mdx`
- [ ] `content/docs/developer/processors/how-to/lazy-load-files.mdx`
- [ ] `content/docs/developer/processors/how-to/copy-files.mdx`
- [ ] `content/docs/developer/processors/how-to/stream-large-files.mdx`

---

## MEDIUM Priority Fixes

### 4. Python SDK GlobType Values Differ

**Not a bug - just needs documentation:**

| SDK     | Template | Copy |
| ------- | -------- | ---- |
| Node.js | 0        | 1    |
| .NET    | 0        | 1    |
| Python  | 1        | 2    |

**Fix:** Add a note in SDK documentation that Python uses different enum values.

---

### 5. `npm` → `bun` in Contributor Docs

**Files affected:**

- `content/docs/contributor/repositories/argon.mdx`
- `content/docs/contributor/development/setup.mdx`

**Fix:** Replace `npm install` → `bun i`, `npm run dev` → `bun run dev`, etc.

---

### 6. API Endpoint Documentation

Some endpoints are oversimplified. Verify against actual Zinc API:

| Documented                          | Actual                                                    |
| ----------------------------------- | --------------------------------------------------------- |
| `GET /api/v1/template/{ref}`        | `GET /api/v1/template/slug/{username}/{name}`             |
| `POST /{entity}/like/{user}/{name}` | `POST /{entity}/slug/{user}/{name}/like/{likerId}/{bool}` |

**Files to verify:**

- [ ] `content/docs/developer/templates/how-to/push-to-registry.mdx`
- [ ] `content/docs/developer/plugins/how-to/push-to-registry.mdx`

---

## FALSE POSITIVES (No Fix Needed)

### `pls` vs `cyanprint` in different contexts

This is **NOT a bug**:

- User docs using `cyanprint` → Correct
- Contributor docs using `pls` → Correct (it's the dev workflow)

The agents flagged these as inconsistencies, but they're contextually correct.

---

## Summary

| Issue                     | Priority | Estimated Files | Verification Status            |
| ------------------------- | -------- | --------------- | ------------------------------ |
| `CyanConfig` → `Cyan`     | HIGH     | ~5              | ✅ Verified in SDK             |
| `files: {}` → `files: []` | HIGH     | ~10             | ✅ Verified in SDK             |
| Method signatures         | HIGH     | ~5              | ✅ Verified in SDK             |
| Python GlobType           | MEDIUM   | 1-2             | ✅ Verified - intentional diff |
| npm → bun                 | MEDIUM   | ~3              | ✅ Verified in Taskfiles       |
| API endpoints             | MEDIUM   | ~4              | ⚠️ Needs verification          |

---

## Next Steps

1. Run `/fact-fix` to apply corrections
2. Focus on HIGH priority items first
3. Manually review API endpoint docs before fixing
