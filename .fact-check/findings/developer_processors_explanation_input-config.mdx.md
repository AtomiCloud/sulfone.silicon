<!-- source: content/docs/developer/processors/explanation/input-config.mdx -->
# 📄 File: content/docs/developer/processors/explanation/input-config.mdx

> The documentation describes how configuration flows from templates to processors via `input.config`. The core concepts are accurate, but there are several API naming discrepancies between the documentation and the actual SDK implementation.

### 🔴 Source Code Inaccuracies
(for each: Documented | Actual | file:line evidence)

1. **input.writeDirectory** | **input.writeDir** | The documentation consistently uses `input.writeDirectory` but the actual SDK type is `writeDir`. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:13` shows `writeDir: string;` not `writeDirectory`. Also seen in actual processor implementations at `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:55` returning `{ directory: input.writeDir }`.

2. **input.readDirectory** | **input.readDir** | The documentation uses `input.readDirectory` but the actual SDK type is `readDir`. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan_script_model.ts:12` shows `readDir: string;` not `readDirectory`.

3. **GlobType.Template value** | **GlobType.Template = 0** | Documentation shows `type: GlobType.Template` in examples, which is correct, but the actual enum value is numeric (0). Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:1-4` shows `enum GlobType { Template = 0, Copy = 1 }`. While the usage is correct, developers should be aware of the underlying numeric values for debugging.

4. **i.text() parameter order** | **i.text(q, id, help?)** | Documentation at line 31 shows `i.text('Project name?', 'project.name', 'Enter name')` with 3 parameters. The actual API is `text(q: string, id: string, help?: string | null)`. The 3rd parameter `help` is optional - this is correctly shown but not explicitly documented as optional. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:22`.

5. **i.checkbox() parameter order** | **i.checkbox(q, options, id, help?)** | Documentation at line 32 shows `i.checkbox('Features?', ['auth', 'api'], 'project.features', 'Select')` but doesn't clarify that the signature is `checkbox(q: string, options: string[], id: string, help?: string | null)`. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:6`.

6. **i.select() parameter order** | **i.select(q, options, id, help?)** | Documentation at line 33 shows `i.select('Format?', ['json', 'yaml'], 'config.format', 'Choose')` - the API signature is `select(q: string, options: string[], id: string, help?: string | null)`. Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:18`.

### 🟡 Documentation Issues
(for each: Problem | Location | Fix)

1. **Inconsistent property naming across documentation** | Lines 90, 132, 176, etc. | The documentation uses `input.writeDirectory` and `input.readDirectory` throughout, but the actual SDK uses `input.writeDir` and `input.readDir`. This inconsistency appears in multiple code examples. Should update all instances to use the correct `writeDir` and `readDir` property names.

2. **CyanGlob type definition incomplete** | Lines 38, 96-110 | Documentation shows `CyanGlob` with `root` as required but the actual type has `root?: string | null` (optional). Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/cyan.ts:6-11` shows `root?: string | null;`. Also missing `type: GlobType` field which is required.

3. **Template callback parameters not documented** | Lines 29-51 | The template lambda signature `(i, d)` is used but the types aren't explained. Should clarify that `i` is `IInquirer` and `d` is `IDeterminism`.

4. **Processor callback fileHelper type not documented** | Lines 72-91 | The `fileHelper` parameter type `CyanFileHelper` should be explicitly mentioned in the function signature explanation.

5. **cyan.yaml processor.inputs not verified in actual code** | Lines 276-306 | The documentation shows an elaborate `processor.inputs` schema in `cyan.yaml` but actual processor `cyan.yaml` files in the codebase (e.g., `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/cyan.yaml`) only contain basic metadata like `username`, `name`, `description`, etc. The `processor.inputs` feature may be aspirational or from a different version.

6. **Related link inconsistency** | Line 310-312 | Links to `/developer/processors/how-to/access-config` and `/developer/processors/reference/cyan-yaml` and `/developer/processors/reference/sdk/input-output` - should verify these paths exist and are correct.

### 🟠 Other Problems
(for each: Problem | Recommendation)

1. **No mention of LambdaProcessorFn type** | The documentation could benefit from explicitly showing the type signature: `type LambdaProcessorFn = (i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>`. This would help TypeScript users understand the exact function signature.

2. **No mention of LambdaTemplateFn type** | Similarly, the template function type could be documented: `type LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>`.

3. **VirtualFile properties not documented** | The documentation shows `file.content` and `file.writeFile()` but doesn't explain the full `VirtualFile` interface which includes `baseRead`, `baseWrite`, `relative`, `read`, `write` properties.

4. **Default processor uses vars not mentioned** | The actual processor examples (processor1, processor2) use a `vars` config pattern with Eta templating, but this common pattern isn't referenced as the "default" behavior mentioned at line 224.

5. **Missing import statements** | Code examples don't show required imports like `import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk';` consistently across all examples.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 6 |
| 🟡 | 6 |
| 🟠 | 5 |
