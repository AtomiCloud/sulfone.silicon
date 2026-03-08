<!-- source: content/docs/contributor/index.mdx -->
# 📄 File: content/docs/contributor/index.mdx

> This is an index/overview page for the contributor documentation. It lists CyanPrint components with their repositories and purposes. All factual claims verified against source code.

### 🔴 Source Code Inaccuracies
(None found)

### 🟡 Documentation Issues
(None found)

### 🟠 Other Problems
(None found)

## Verification Details

**Component Table Verification:**

| Component | Claimed Purpose | Verified | Evidence |
|-----------|-----------------|----------|----------|
| Iridium | Command-line interface | ✅ | `/iridium/cyanprint/src/main.rs:24` contains `fn main()` for CLI binary |
| Boron | Execution coordinator | ✅ | `/boron/main.go` and `/boron/server.go` show Docker executor with `/executor/:sessionId` endpoints |
| Zinc | Registry API | ✅ | `/zinc/Domain/Model/Template.cs`, `/zinc/Domain/Service/TemplateService.cs` contain template/registry domain models |
| Argon | Registry Web UI (internally named "carbon") | ✅ | `/argon/package.json:2` has `"name": "carbon"`, `/argon/README.md:1` says `# Sulfone Carbon` |
| Helium | SDKs (TypeScript, Python, C#) | ✅ | `/helium/sdks/node/` (TypeScript), `/helium/sdks/python/` (Python), `/helium/sdks/dotnet/` (C#) directories exist |
| Silicon | Documentation site | ✅ | Current repository is the documentation site |

**GitHub URLs Verification:**

All GitHub URLs follow the pattern `https://github.com/AtomiCloud/sulfone.<name>` and match the git remote URLs:
- `github-atomi:AtomiCloud/sulfone.iridium.git` ✅
- `github-atomi:AtomiCloud/sulfone.boron.git` ✅
- `github-atomi:AtomiCloud/sulfone.zinc.git` ✅
- `github-atomi:AtomiCloud/sulfone.argon.git` ✅
- `github-atomi:AtomiCloud/sulfone.helium.git` ✅

**Internal Links Verification:**

All internal links point to existing files:
- `/docs/contributor/architecture/overview` → `content/docs/contributor/architecture/overview.mdx` ✅
- `/docs/contributor/repositories` → `content/docs/contributor/repositories/index.mdx` ✅
- `/docs/contributor/development/setup` → `content/docs/contributor/development/setup.mdx` ✅

**Binary Name Check:**

No CLI commands are referenced in this file (no `cyan` or `cyanprint` commands mentioned).

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 0 |
| 🟠 | 0 |
