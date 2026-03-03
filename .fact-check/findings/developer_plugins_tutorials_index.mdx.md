<!-- source: content/docs/developer/plugins/tutorials/index.mdx -->
# 📄 File: content/docs/developer/plugins/tutorials/index.mdx

> Index page for plugin tutorials. Brief page with a single tutorial link and learning objectives. Minimal technical claims - all have been verified against source code in helium/sdks/node.

### 🔴 Source Code Inaccuracies
None identified. All documented claims match the source code.

### 🟡 Documentation Issues

1. **Missing Type Export Documentation**
   - **Problem**: The "What you'll learn" section mentions "Using `StartPluginWithLambda`" but the SDK exports `CyanPluginInput` (not `PluginInput`) as the actual type received by the lambda function. The domain layer has `PluginInput` but the SDK exports `CyanPluginInput` from `main.ts:193`.
   - **Location**: `index.mdx:17`
   - **Fix**: Consider noting that the lambda receives `CyanPluginInput` (structurally identical: `directory: string; config: unknown`).

2. **Missing SDK Export Reference**
   - **Problem**: The page doesn't mention that `PluginOutput` is also exported from the SDK and is the required return type.
   - **Location**: `index.mdx:14-19` (What you'll learn section)
   - **Fix**: Optional - add "Returning PluginOutput" to learning objectives.

3. **Minor Description Enhancement**
   - **Problem**: The tutorial description says "runs post-processing commands after file generation" which is accurate, but could be more specific (git init and dependency installation).
   - **Location**: `index.mdx:12`
   - **Fix**: Optional - description is accurate as-is.

### 🟠 Other Problems
None identified.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 3 |
| 🟠 | 0 |

### Verification Details

**Verified Claims:**

1. **`StartPluginWithLambda` function** - CONFIRMED
   - Source: `helium/sdks/node/src/main.ts:82-85`
   ```typescript
   function StartPluginWithLambda(f: LambdaPluginFn): void {
     const lambda = new LambdaPlugin(f);
     StartPlugin(lambda);
   }
   ```

2. **Package `@atomicloud/cyan-sdk`** - CONFIRMED
   - Source: `helium/sdks/node/package.json:2`
   ```json
   "name": "@atomicloud/cyan-sdk"
   ```

3. **Plugin input interface structure** - CONFIRMED
   - Source: `helium/sdks/node/src/domain/core/cyan_script_model.ts:18-21`
   ```typescript
   interface CyanPluginInput {
     directory: string;
     config: unknown;
   }
   ```
   - Also exists as domain type: `helium/sdks/node/src/domain/plugin/input.ts:1-5`

4. **Plugin output interface structure** - CONFIRMED
   - Source: `helium/sdks/node/src/domain/plugin/output.ts:1-4`
   ```typescript
   interface PluginOutput {
     directory: string;
   }
   ```

5. **LambdaPluginFn type** - CONFIRMED
   - Source: `helium/sdks/node/src/api/plugin/lambda.ts:5`
   ```typescript
   type LambdaPluginFn = (input: CyanPluginInput) => Promise<PluginOutput>;
   ```

6. **Port 5552 for plugins** - CONFIRMED
   - Source: `helium/sdks/node/src/main.ts:65`

7. **POST /api/plug endpoint** - CONFIRMED
   - Source: `helium/sdks/node/src/main.ts:68`

8. **SDK exports include StartPluginWithLambda and types** - CONFIRMED
   - Source: `helium/sdks/node/src/main.ts:168-207`
   - Exports: `StartPluginWithLambda`, `CyanPluginInput`, `PluginOutput`
