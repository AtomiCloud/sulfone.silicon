<!-- source: content/docs/developer/plugins/reference/project-structure.mdx -->
# 📄 File: content/docs/developer/plugins/reference/project-structure.mdx

> Documentation describes the standard directory layout for CyanPrint plugin projects. The document covers required files (index.ts, package.json, Dockerfile) and optional files (.dockerignore, README.md, cyan.yaml). Analysis verified against actual plugin implementations in iridium/e2e/ directory.

### 🔴 Source Code Inaccuracies
1. **Dockerfile Bun version mismatch**
   - Documented: `FROM oven/bun:1.1.31`
   - Actual: Most plugin Dockerfiles use `oven/bun:1.0.11` (plugin1, plugin2, processor1, processor2), while template1/cyan uses `oven/bun:1.1.31`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:1:FROM oven/bun:1.0.11`

2. **Dockerfile COPY command syntax**
   - Documented: `COPY package.json bun.lockb* ./`
   - Actual: All Dockerfiles use separate COPY commands without glob pattern: `COPY package.json .` followed by `COPY bun.lockb .`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/Dockerfile:4:COPY package.json .` and line 5: `COPY bun.lockb .`

3. **package.json structure differs**
   - Documented: `"dependencies": { "@atomicloud/cyan-sdk": "^1.0.0" }`
   - Actual: All plugins use `"@atomicloud/cyan-sdk": "latest"` not a pinned version
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/package.json:12:"@atomicloud/cyan-sdk": "latest"`

4. **package.json missing "module" field in documentation**
   - Documented: Shows only "name", "version", "type", "dependencies" fields
   - Actual: All plugins include `"module": "index.ts"` field
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/package.json:3:"module": "index.ts"`

5. **package.json missing devDependencies and peerDependencies**
   - Documented: Does not show devDependencies or peerDependencies
   - Actual: All plugins include `devDependencies: { "bun-types": "latest" }` and `peerDependencies: { "typescript": "^5.0.0" }`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/package.json:5-10`

6. **cyan.yaml structure differs significantly**
   - Documented: Shows `name: org/my-plugin`, `version: 1.0.0`, `description`, `author`
   - Actual: Uses `username`, `name`, `description`, `project`, `source`, `email`, `tags`, `readme` fields - no `version` or `author` fields
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/cyan.yaml:1-8`

7. **.dockerignore content differs**
   - Documented: Shows `.git`, `.gitignore`, `*.md`, `.env`, `.env.*`, `.DS_Store`
   - Actual: Only contains `node_modules`, `.idea`, `.vscode`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/plugin1/.dockerignore:1-3`

### 🟡 Documentation Issues
1. **Plugin vs Template/Processor distinction unclear**
   - Problem: The document is titled "Plugin Project Structure" but shows `StartPluginWithLambda` while actual codebase has three types: `StartPluginWithLambda`, `StartProcessorWithLambda`, and `StartTemplateWithLambda`
   - Location: Throughout the document
   - Fix: Clarify that this is specifically for plugins, and create separate docs for processors and templates

2. **Missing tsconfig.json in project structure**
   - Problem: Directory tree shows `index.ts`, `package.json`, `bun.lockb`, `Dockerfile`, `.dockerignore`, `cyan.yaml`, `README.md` but all actual plugins include `tsconfig.json` and `.gitignore`
   - Location: Lines 10-19 (directory tree)
   - Fix: Add `tsconfig.json` and `.gitignore` to the project structure

3. **PluginOutput type not shown in basic example**
   - Problem: The basic index.ts example doesn't import or use `PluginOutput` type, but actual plugins explicitly type the return: `Promise<PluginOutput>`
   - Location: Lines 27-36 (basic index.ts example)
   - Fix: Either show the type import or explain it's optional

### 🟠 Other Problems
1. **Version pinning inconsistency**
   - Problem: Documentation shows pinned version `^1.0.0` for SDK, but actual implementations use `latest`. This could lead to reproducibility issues.
   - Recommendation: Document best practices for version pinning vs using `latest`

2. **No mention of bun.lockb requirement**
   - Problem: Dockerfile copies `bun.lockb` but documentation doesn't explain the importance of committing this file for reproducible builds
   - Recommendation: Add note about committing bun.lockb for reproducible builds

3. **Missing .gitignore in documentation**
   - Problem: All actual plugins include a `.gitignore` file (typically 2.2k in size) but it's not mentioned in the documentation
   - Recommendation: Add `.gitignore` to the required/optional files section

4. **Dockerfile CMD format inconsistency**
   - Problem: Documentation shows `CMD ["bun", "run", "index.ts"]` with commas, but some actual Dockerfiles have slightly different spacing/formatting
   - Recommendation: Standardize Dockerfile formatting in documentation

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 7 |
| 🟡 | 3 |
| 🟠 | 4 |
