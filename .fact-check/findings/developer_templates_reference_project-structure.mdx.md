<!-- source: content/docs/developer/templates/reference/project-structure.mdx -->
# 📄 File: content/docs/developer/templates/reference/project-structure.mdx

> This document describes the structure of CyanPrint template projects. The documentation has several inaccuracies compared to actual source code implementations found in the iridium and helium repositories.

### 🔴 Source Code Inaccuracies

1. **Directory structure: `cyan/templates/` vs `template/`**
   - Documented: `cyan/templates/` directory for source template files (lines 18-20, 36-40, 63-74)
   - Actual: Real templates use `template/` directory at root level (sibling to `cyan/`), not `cyan/templates/`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/` shows `template/` at root, not inside `cyan/`. Same for template2 and template3.

2. **Standard Structure Tree Inaccurate**
   - Documented: Shows `cyan/templates/` containing `README.md` and `package.json` (lines 12-23)
   - Actual: Template files are in separate `template/` directory at root, `package.json` is inside `cyan/`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/` structure: `blob.Dockerfile`, `cyan/`, `cyan.yaml`, `template/`

3. **Dockerfile naming: `template.Dockerfile` vs `Dockerfile`**
   - Documented: `template.Dockerfile` and `blob.Dockerfile` inside `cyan/` directory (lines 16-17, 33-35)
   - Actual: `Dockerfile` inside `cyan/` directory (not `template.Dockerfile`), `blob.Dockerfile` at root level
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile` exists, `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile` at root

4. **Dockerfile base image and commands**
   - Documented: `FROM node:20-alpine`, `CMD ["node", "index.ts"]` (lines 113, 125)
   - Actual: Uses `FROM oven/bun:1.1.31`, `CMD ["bun", "run", "index.ts"]`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile:1,8`

5. **Dockerfile COPY paths**
   - Documented: `COPY cyan/package.json ./` and `COPY cyan/ ./` (lines 118-122)
   - Actual: `COPY package.json .` and `COPY . .` (Dockerfile is already inside `cyan/`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile:4-7`

6. **blob.Dockerfile content**
   - Documented: Simple `FROM alpine:latest` with `COPY cyan/templates/ /templates/` (lines 132-136)
   - Actual: Multi-stage build with `FROM alpine:3.21`, tar compression, different COPY paths
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/blob.Dockerfile` shows complex multi-stage build with `tar -czvf`

7. **package.json location and structure**
   - Documented: `package.json` at root level with `"@atomicloud/cyan-sdk": "^1.0.0"` (lines 96-104)
   - Actual: `package.json` is inside `cyan/` directory, uses `"@atomicloud/cyan-sdk": "latest"` and Bun config with `"module": "index.ts"`, `"type": "module"`, `"bun-types": "latest"`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/package.json`

8. **index.ts function signature comment**
   - Documented: Comments show `// i: IInquirer` and `// d: IDefine` (lines 51-52)
   - Actual: SDK uses `IDeterminism`, not `IDefine`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/template/lambda.ts:6` and `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:3`

9. **cyan.yaml structure completely different**
   - Documented: Uses `name: myorg/my-template`, `version: 1.0.0`, `description`, `author`, `compose` fields (lines 80-90)
   - Actual: Uses `username`, `name` (separate), `description`, `project`, `source`, `email`, `tags`, `readme`, `processors`, `plugins`, `templates` fields - no `version`, `author`, or `compose`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan.yaml:1-11`

10. **compose field vs templates field**
    - Documented: Shows `compose:` field with template references (lines 87-89)
    - Actual: Real templates use `templates:` field, not `compose:`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template3/cyan.yaml:11-13`

11. **Generated output metadata file incorrect**
    - Documented: `.cyan/generation.json` (lines 173-184)
    - Actual: `.cyan_state.yaml` at root level, not `.cyan/generation.json`
    - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/sample/.cyan_state.yaml` shows YAML format with `active`, `history`, `answers`, `deterministic_states`

### 🟡 Documentation Issues

1. **Incorrect Code Example Comments - IDefine vs IDeterminism**
   - Problem: Comments say `// d: IDefine` but should be `IDeterminism`
   - Location: Lines 51-52
   - Fix: Change to `// i: IInquirer - ask questions` and `// d: IDeterminism - get deterministic values`

2. **Missing type imports in index.ts example**
   - Problem: Example only shows `import { StartTemplateWithLambda, GlobType }` but real templates also import `IInquirer` and `IDeterminism` types
   - Location: Lines 47-48
   - Fix: Add `import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';` or combine imports
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:1-2`

3. **GlobType not fully explained**
   - Problem: Mentions only `GlobType.Copy` for binary files (line 73), doesn't explain `GlobType.Template` vs `GlobType.Copy`
   - Location: Line 73
   - Fix: Explain both `GlobType.Template` (for text substitution) and `GlobType.Copy` (for binary files)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/cyanprompt/src/domain/models/cyan.rs:4-7`

4. **Missing LABEL in Dockerfile Example**
   - Problem: Real Dockerfiles include `LABEL cyanprint.dev=true` which is not shown
   - Location: Lines 112-126 (template.Dockerfile example)
   - Fix: Add `LABEL cyanprint.dev=true` to the Dockerfile example

5. **Missing bun.lockb in Dockerfile Example**
   - Problem: Real Dockerfiles copy `bun.lockb` for reproducible builds
   - Location: Lines 112-126
   - Fix: Add `COPY bun.lockb .` before `RUN bun install`

6. **blob.Dockerfile example misleading**
   - Problem: The example is overly simplified and doesn't match real multi-stage implementation
   - Location: Lines 129-136
   - Fix: Show realistic multi-stage build or clarify this is a simplified example

7. **Working directory in Dockerfile**
   - Problem: Documentation shows `WORKDIR /workspace` but real templates use `WORKDIR /app`
   - Location: Line 115
   - Fix: Update to `WORKDIR /app` to match real implementation

8. **Missing cyan.yaml fields documentation**
   - Problem: Key fields like `username`, `project`, `source`, `email`, `processors`, `plugins`, `templates` are not documented
   - Location: Lines 77-90
   - Fix: Document all actual cyan.yaml fields used in real templates

9. **Non-existent cyan.yaml fields shown**
   - Problem: Shows `author` and `version` fields which don't exist in real cyan.yaml
   - Location: Lines 83-84
   - Fix: Remove or replace with actual fields (`email` instead of `author`, no `version` at template level)

### 🟠 Other Problems

1. **Template vs templates Directory Confusion**
   - Problem: Documentation consistently uses `cyan/templates/` but actual implementation uses root-level `template/`
   - Recommendation: Update documentation to reflect actual `template/` directory at root level, or clarify if both patterns are supported

2. **File Organization Patterns Not Verified**
   - Problem: The "By Type" and "By Feature" organization patterns (lines 139-165) are theoretical suggestions not found in actual templates
   - Recommendation: Mark as recommendations/best practices rather than standard structure

3. **Missing index.ts imports for types**
   - Problem: Real templates import types separately: `import { IInquirer, IDeterminism } from '@atomicloud/cyan-sdk';`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:2`
   - Recommendation: Add type imports to the example for completeness

4. **Generated output section may be misplaced**
   - Problem: The "Generated Output" section (lines 167-184) describes user output, not template structure
   - Recommendation: Consider moving to a different page or clarifying this is output, not template structure

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 11 |
| 🟡 | 9 |
| 🟠 | 4 |
