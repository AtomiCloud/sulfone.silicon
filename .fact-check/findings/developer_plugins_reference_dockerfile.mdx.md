<!-- source: content/docs/developer/plugins/reference/dockerfile.mdx -->
# 📄 File: content/docs/developer/plugins/reference/dockerfile.mdx

> This document describes Dockerfile configuration for CyanPrint plugins. All major claims have been verified against source code and are accurate. A few minor issues were found with version recommendations and example completeness.

### 🔴 Source Code Inaccuracies
(for each: Documented | Actual | file:line evidence)

1. **Bun version `1.0.11`** | **No specific version requirement** | `iridium/e2e/plugin1/Dockerfile:1`, `iridium/e2e/plugin2/Dockerfile:1`
   - Documented: Examples use `oven/bun:1.0.11` as the base image
   - Actual: The e2e test plugins in the codebase do use `oven/bun:1.0.11`, but there is no enforced version requirement. This is just one valid choice. The documentation could note that newer Bun versions may be used.

### 🟡 Documentation Issues
(for each: Problem | Location | Fix)

1. **Entry point file name inconsistency** | Lines 31, 73, 76, 79, 111, 142, 160, 233 | The examples show `index.ts` or `index.js` as entry points but do not explain that this must match the SDK's `StartPlugin()` or `StartPluginWithLambda()` call. Consider adding a note that the entry file must import and call the SDK startup function.

2. **Missing `.dockerignore` example alignment** | Lines 165-195 | The comprehensive `.dockerignore` template differs from the minimal examples used in actual plugins. The actual `.dockerignore` files in `iridium/e2e/plugin1/.dockerignore` and `iridium/e2e/plugin2/.dockerignore` contain only: `node_modules`, `.idea`, `.vscode`. The documentation's comprehensive template is useful but should note that plugins typically need less.

3. **Multi-stage build complexity warning could be stronger** | Lines 114-116 | The callout mentions multi-stage builds add complexity, but could explicitly note that plugins using `@atomicloud/cyan-sdk` with its Express server may not benefit as much from bundling since the SDK needs to be resolved at runtime.

4. **No mention of SDK dependency requirement** | Throughout | The documentation shows `bun install` but does not mention that `@atomicloud/cyan-sdk` is required in `package.json` dependencies. The actual plugin examples show this dependency (`iridium/e2e/plugin1/package.json:12`).

### 🟠 Other Problems
(for each: Problem | Recommendation)

1. **Alpine compatibility not fully explained** | Line 205 mentions "May need musl compatibility" for Alpine, but does not explain what this means or when it becomes an issue. Consider adding a brief explanation or linking to Bun's Alpine compatibility documentation.

2. **Port configuration section could reference SDK** | Lines 238-247 accurately state port 5552 and `/api/plug` endpoint, but could reference that this is hardcoded in `@atomicloud/cyan-sdk` (`helium/sdks/node/src/main.ts:65`) for completeness.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 1 |
| 🟡 | 4 |
| 🟠 | 2 |

### Verified Claims
The following claims were verified as accurate:
- **Label `cyanprint.dev=true`**: Confirmed in `boron/docker_executor/docker.go:46,150,184,208,339,414,437`
- **Port 5552**: Confirmed in `helium/sdks/node/src/main.ts:65` and `boron/docker_executor/executor.go:182`
- **Endpoint `/api/plug`**: Confirmed in `boron/docker_executor/merger.go:223` and `helium/sdks/node/src/main.ts:68`
- **Bun base image usage**: Confirmed in `iridium/e2e/plugin1/Dockerfile:1`, `iridium/e2e/plugin2/Dockerfile:1`
- **Working directory `/app`**: Confirmed in actual plugin Dockerfiles
- **CMD with bun run**: Confirmed in actual plugin Dockerfiles
