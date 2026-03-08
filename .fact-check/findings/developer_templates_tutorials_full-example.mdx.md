<!-- source: content/docs/developer/templates/tutorials/full-example.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/full-example.mdx

> Comprehensive tutorial with significant API and structural inaccuracies. The `d.uuid()` method doesn't exist, `cyan.yaml` format differs from documented, `cyan/default` processor and `cyan/init-git` plugin may not exist in the codebase, and the Dockerfile naming conventions don't match real templates.

### 🔴 Source Code Inaccuracies

1. **d.uuid() method doesn't exist**
   - Documented: `const projectId = d.uuid();` (line 108)
   - Actual: The `IDeterminism` interface only has `get(key: string, origin: () => string): string` method
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/deterministic.ts:1-5`
   ```typescript
   interface IDeterminism {
     get(key: string, origin: () => string): string;
   }
   ```
   - Fix: Should be `const projectId = d.get('project-id', () => randomUUID());`

2. **cyan.yaml format differs from real templates**
   - Documented: `version: 1.0.0` and `author: Your Organization` fields (lines 277-281)
   - Actual: Real cyan.yaml uses `username`, `email`, `project`, `source`, and no `version` or `author` fields
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:1-11`
   ```yaml
   username: cyane2e
   name: template1
   description: Template1
   project: https://google.com
   source: https://google.com
   email: cyane2e@atomi.cloud
   tags: []
   readme: cyan/README.MD
   processors: ['cyane2e/processor1']
   plugins: ['cyane2e/plugin1']
   templates: []
   ```

3. **template.Dockerfile and blob.Dockerfile naming is incorrect**
   - Documented: `cyan/template.Dockerfile` and `cyan/blob.Dockerfile` (lines 28-30, 285-306)
   - Actual: Real templates use `cyan/Dockerfile` for script and `blob.Dockerfile` at root level
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile`

4. **template.Dockerfile content is incorrect**
   - Documented: Uses `CMD ["node", "index.js"]` with `COPY cyan/ ./` (lines 287-298)
   - Actual: Real templates use bun with `CMD ["bun", "run", "index.ts"]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile:1-9`
   ```dockerfile
   FROM oven/bun:1.1.31
   WORKDIR /app
   LABEL cyanprint.dev=true
   COPY package.json .
   COPY bun.lockb .
   RUN bun install
   COPY . .
   CMD ["bun", "run", "index.ts"]
   ```

5. **blob.Dockerfile content is incorrect**
   - Documented: Simple `COPY cyan/templates/ /templates/` (lines 300-306)
   - Actual: Complex multi-stage build with tar compression and specific CMD for extraction
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile:1-14`
   ```dockerfile
   FROM alpine:3.21 as base
   RUN apk add tar
   ...
   CMD [ "tar", "-xzf", "/cyanprint/artifact/cyan.tar.gz", "-C", "/workspace/cyanprint", "--strip-components=1" ]
   ```

6. **cyan/default processor existence unverified**
   - Documented: `name: 'cyan/default'` as default processor (line 186)
   - Actual: No `cyan/default` processor found in the source code. Spec files reference it, but actual implementation files use custom processors like `cyane2e/processor1`
   - Evidence: Grep for `cyan/default` in `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium` returns no matches in implementation code

7. **cyan/init-git plugin existence unverified**
   - Documented: Plugin `cyan/init-git` for git initialization (lines 216-223)
   - Actual: No `init-git` plugin found in the codebase
   - Evidence: Grep for `init-git` in source repos returns no implementation files

8. **docker buildx command line 324-334 shows wrong usage**
   - Documented: `docker buildx build --platform linux/amd64,linux/arm64 -f cyan/template.Dockerfile`
   - Actual: The publish script uses `-f "./cyan/Dockerfile"` and `-f "./blob.Dockerfile"` (different file paths), and uses `--$build_type` (load/push) not `--push`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/publish-template.sh:26-40`

### 🟡 Documentation Issues

1. **Object form for question validation - return type mismatch**
   - Problem: The `validate` function is shown returning `null` for valid input, but the type signature shows `string | null`
   - Location: Lines 51-62
   - Fix: This is correct per the type signature `validate?: (input: string) => string | null` in question.ts

2. **Missing import for randomUUID**
   - Problem: The corrected `d.get('project-id', () => randomUUID())` would require importing `randomUUID` from `node:crypto`
   - Location: Line 108 area
   - Fix: Add `import { randomUUID } from 'node:crypto';` to imports section

3. **Project structure shows incorrect directory layout**
   - Problem: Shows `cyan/templates/` but real templates have `template/` (singular) at root
   - Location: Lines 24-39
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:43-44` uses `root: 'template'`

4. **TextQ has both default and initial properties**
   - Problem: Documentation shows only `default` property but `TextQ` interface has both `default?: string | null` and `initial?: string | null`
   - Location: Line 61
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/question.ts:64-73`

5. **Testing commands use wrong file paths**
   - Problem: Commands reference `cyan/template.Dockerfile` but should be `cyan/Dockerfile`
   - Location: Lines 322-337
   - Fix: Update paths to match actual template structure

### 🟠 Other Problems

1. **Example is entirely hypothetical**
   - Problem: This is a synthetic "node-template" example that doesn't match any real template in the codebase
   - Recommendation: Consider using an actual template from the iridium e2e tests as a reference, or clearly mark this as a conceptual example

2. **No cyan.yaml version field**
   - Problem: Real cyan.yaml files don't have a `version` field at the top level, but documentation shows `version: 1.0.0`
   - Recommendation: Remove `version` from the example or clarify it's optional/deprecated

3. **Shorthand vs object form inconsistency**
   - Problem: Documentation shows mixing shorthand `i.text('msg', 'id', 'desc')` with object form but doesn't explain when to use which
   - Recommendation: Add explicit guidance on when to use each form

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 8 |
| 🟡 | 5 |
| 🟠 | 3 |
