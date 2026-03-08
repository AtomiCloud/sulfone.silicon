<!-- source: content/docs/developer/processors/reference/project-structure.mdx -->
# 📄 File: content/docs/developer/processors/reference/project-structure.mdx

> Analysis of processor project structure documentation against SDK source (helium) and processor examples (iridium). Found critical API discrepancy and several documentation issues.

### 🔴 Source Code Inaccuracies

1. **Documented:** `input.writeDirectory` in code examples
   **Actual:** `input.writeDir` - the property is `writeDir`, not `writeDirectory`
   **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16`:
   ```ts
   interface CyanProcessorInput {
     readDir: string;
     writeDir: string;  // NOT writeDirectory
     globs: CyanGlob[];
     config: unknown;
   }
   ```
   Also confirmed in actual processor usage at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55`:
   ```ts
   return { directory: input.writeDir };
   ```

2. **Documented:** Dockerfile uses `FROM oven/bun:1.1.31`
   **Actual:** Real processors use `FROM oven/bun:1.0.11` and do not use `--frozen-lockfile`
   **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/Dockerfile:1-9`:
   ```dockerfile
   FROM oven/bun:1.0.11
   WORKDIR /app
   LABEL cyanprint.dev=true
   COPY package.json .
   COPY bun.lockb .
   RUN bun install
   COPY . .
   CMD ["bun", "run", "index.ts"]
   ```

3. **Documented:** `@atomicloud/cyan-sdk` version `^1.0.0`
   **Actual:** Real processors use `"latest"` and also don't include `@types/bun`
   **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/package.json:1-15`:
   ```json
   {
     "name": "processor",
     "module": "index.ts",
     "type": "module",
     "devDependencies": {
       "bun-types": "latest"
     },
     "peerDependencies": {
       "typescript": "^5.0.0"
     },
     "dependencies": {
       "@atomicloud/cyan-sdk": "latest",
       "eta": "^3.5.0"
     }
   }
   ```

4. **Documented:** cyan.yaml has `processor.inputs` section with input definitions
   **Actual:** Real processor cyan.yaml files don't have a `processor:` section at all - they use flat metadata
   **Evidence:** `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml:1-9`:
   ```yaml
   username: cyane2e
   name: processor1
   description: First processor
   project: https://google.com
   source: https://google.com
   email: cyane2e@atomi.cloud
   tags: []
   readme: README.MD
   ```

### 🟡 Documentation Issues

1. **Problem:** The code example shows a pattern with `forEach` that doesn't return the value from `writeFile()`, while actual processors use `.map().map()` chaining
   **Location:** Lines 36-44 in the code block
   **Fix:** Update to show more realistic usage pattern like:
   ```ts
   files
     .map(x => {
       x.content = transform(x.content);
       return x;
     })
     .map(x => x.writeFile());
   ```

2. **Problem:** package.json example includes `"version": "1.0.0"` and `"scripts"` section that real processors don't have
   **Location:** Lines 51-67
   **Fix:** Update to match actual processor package.json structure which uses `"module": "index.ts"` instead of scripts

3. **Problem:** tsconfig.json example differs significantly from actual processor configs
   **Location:** Lines 115-127
   **Fix:** Update to reflect actual tsconfig.json used by processors:
   ```json
   {
     "compilerOptions": {
       "lib": ["ESNext"],
       "module": "esnext",
       "target": "esnext",
       "moduleResolution": "bundler",
       "moduleDetection": "force",
       "allowImportingTsExtensions": true,
       "noEmit": true,
       "composite": true,
       "strict": true,
       "downlevelIteration": true,
       "skipLibCheck": true,
       "allowSyntheticDefaultImports": true,
       "forceConsistentCasingInFileNames": true,
       "allowJs": true,
       "types": ["bun-types"]
     }
   }
   ```

4. **Problem:** cyan.yaml example shows `name: myorg/my-processor` format but actual processors use separate `username` and `name` fields
   **Location:** Lines 96-109
   **Fix:** Update to show actual format with separate username/name fields

### 🟠 Other Problems

1. **Problem:** The cyan.yaml documented structure appears to be template-specific, not processor-specific. The documented `processor.inputs` section may not apply to standalone processors.
   **Recommendation:** Verify with the team what the correct cyan.yaml format should be for processors vs templates. If processors don't use `processor.inputs`, this section should be removed or clearly marked as conditional.

2. **Problem:** The Dockerfile example uses wildcard pattern `bun.lockb*` which is good for optionality, but the actual processors don't use `--frozen-lockfile`
   **Recommendation:** Keep the wildcard pattern but remove `--frozen-lockfile` or document when it should be used

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 4 |
| 🟠 | 2 |
