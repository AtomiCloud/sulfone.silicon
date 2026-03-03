<!-- source: content/docs/developer/processors/reference/sdk/input-output.mdx -->
# 📄 File: content/docs/developer/processors/reference/sdk/input-output.mdx

> Documentation for Processor Input/Output types, but contains significant inaccuracies: the documented `ProcessorInput` interface is not the type actually passed to lambda functions, and `CyanGlob` is missing the required `type` property.

### 🔴 Source Code Inaccuracies

1. **ProcessorInput property names are incorrect**
   - Documented: `readDirectory`, `writeDirectory`
   - Actual: `readDir`, `writeDir` (on `CyanProcessorInput`)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16`
   ```ts
   interface CyanProcessorInput {
     readDir: string;
     writeDir: string;
     globs: CyanGlob[];
     config: unknown;
   }
   ```

2. **ProcessorInput is not the type passed to lambda functions**
   - Documented: `ProcessorInput` is the input type
   - Actual: `CyanProcessorInput` is the type passed to `LambdaProcessorFn`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/api/processor/lambda.ts:6`
   ```ts
   type LambdaProcessorFn = (i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>;
   ```

3. **ProcessorInput is not exported from SDK**
   - Documented: Implied that `ProcessorInput` is the public API
   - Actual: SDK exports `CyanProcessorInput`, not `ProcessorInput`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/main.ts:193-194` shows exports include `CyanProcessorInput` but not `ProcessorInput`

4. **CyanGlob.root is optional, not required**
   - Documented: `root` marked as Required (Yes)
   - Actual: `root?: string | null` (optional)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11`
   ```ts
   interface CyanGlob {
     root?: string | null;  // optional
     glob: string;
     exclude: string[];
     type: GlobType;
   }
   ```

5. **CyanGlob.exclude is required, not optional**
   - Documented: `exclude?: string[]` (Required: No)
   - Actual: `exclude: string[]` (required)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:9`

6. **CyanGlob missing required `type` property**
   - Documented: Only `root`, `glob`, `exclude?`
   - Actual: Also includes required `type: GlobType`
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:10`

7. **Usage examples use wrong property names**
   - Documented: `input.readDirectory`, `input.writeDirectory`
   - Actual: Should be `input.readDir`, `input.writeDir`
   - Evidence: All code examples in lines 43-53, 77-84, 161-172, 211-244 reference incorrect property names

### 🟡 Documentation Issues

1. **Missing GlobType enum documentation**
   - Problem: The `CyanGlob.type` property requires a `GlobType` enum value (Template=0, Copy=1) but this is not documented
   - Location: CyanGlob section (lines 88-143)
   - Fix: Add documentation for the `type` property and `GlobType` enum

2. **Interface name inconsistency**
   - Problem: Documentation refers to `ProcessorInput` but the actual exported type users receive is `CyanProcessorInput`
   - Location: Throughout the document (title, definitions, examples)
   - Fix: Update to use `CyanProcessorInput` or clarify the distinction

3. **CyanGlob examples missing required properties**
   - Problem: All CyanGlob examples omit the required `type` property and show `exclude` as optional when it's required
   - Location: Lines 112-131
   - Fix: Add `type: GlobType.Template` to examples and include `exclude: []` when no exclusions needed

4. **Full Example will not compile**
   - Problem: The full example code uses `input.readDirectory` and `input.writeDirectory` which don't exist on `CyanProcessorInput`
   - Location: Lines 199-245
   - Fix: Change to `input.readDir` and `input.writeDir`

5. **Typical Values table uses wrong property names**
   - Problem: Table shows `readDirectory` and `writeDirectory` as property names
   - Location: Lines 36-40
   - Fix: Update to `readDir` and `writeDir`

### 🟠 Other Problems

1. **Internal vs Public API confusion**
   - Problem: The `ProcessorInput` type exists internally (`/helium/sdks/node/src/domain/processor/input.ts`) with `readDirectory`/`writeDirectory`, but is not exported. The public API uses `CyanProcessorInput` with `readDir`/`writeDir`.
   - Recommendation: Document only the public API types, or clearly mark internal types

2. **SDK package name should be verified**
   - Problem: Documentation shows `import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk'` - this should be verified against the actual published package name
   - Recommendation: Confirm the npm package name matches what's published

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 7 |
| 🟡 | 5 |
| 🟠 | 2 |
