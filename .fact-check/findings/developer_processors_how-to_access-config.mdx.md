<!-- source: content/docs/developer/processors/how-to/access-config.mdx -->
# 📄 File: content/docs/developer/processors/how-to/access-config.mdx

> Fact-check completed for processor config access documentation. All code examples and API references verified against helium SDK source code and iridium e2e tests.

### 🔴 Source Code Inaccuracies
(None found)

### 🟡 Documentation Issues
1. **Template config example uses processor name pattern that doesn't match e2e conventions** | Line 44 | The example uses `name: 'myorg/my-processor'` which is fine as a placeholder, but actual e2e tests use patterns like `cyane2e/processor1`. This is a minor cosmetic issue - no fix required.
2. **Complex Config Example comment could be clearer** | Lines 180-181 | The comment about creating new VirtualFile instances is helpful but doesn't show how to actually create them. The `VirtualFile` constructor is exported but the example doesn't demonstrate the pattern. Consider adding a brief example or linking to relevant documentation.

### 🟠 Other Problems
(None found)

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 2 |
| 🟠 | 0 |

## Verification Details

### ✅ Verified Accurate
1. **`StartProcessorWithLambda` signature**: Document shows `StartProcessorWithLambda(async (input, fileHelper) =>` - matches actual `LambdaProcessorFn = (i: CyanProcessorInput, fileHelper: CyanFileHelper) => Promise<ProcessorOutput>` in `helium/sdks/node/src/api/processor/lambda.ts:6`

2. **`StartTemplateWithLambda` signature**: Document shows `StartTemplateWithLambda(async (i, d) =>` - matches actual `LambdaTemplateFn = (inquirer: IInquirer, determinism: IDeterminism) => Promise<Cyan>` in `helium/sdks/node/src/api/template/lambda.ts:6`

3. **`input.config` type**: Document correctly states "Config is passed as `unknown` type" - verified in `helium/sdks/node/src/domain/core/cyan_script_model.ts:15`

4. **`input.writeDir` property**: Document uses `input.writeDir` - verified in `helium/sdks/node/src/domain/core/cyan_script_model.ts:13`

5. **`ProcessorOutput` return type**: Document returns `{ directory: input.writeDir }` - verified in `helium/sdks/node/src/domain/processor/output.ts:2`

6. **`fileHelper.resolveAll()` method**: Verified in `helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40`

7. **`VirtualFile` properties and methods**:
   - `file.content` - verified in `helium/sdks/node/src/domain/core/fs/virtual_file.ts:37`
   - `file.relative` - verified in `helium/sdks/node/src/domain/core/fs/virtual_file.ts:36`
   - `file.writeFile()` - verified in `helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54`

8. **Inquirer methods**:
   - `i.checkbox()` signature - verified in `helium/sdks/node/src/domain/core/inquirer.ts:6`
   - `i.select()` signature - verified in `helium/sdks/node/src/domain/core/inquirer.ts:18`

9. **`GlobType.Template` enum value**: Verified in `helium/sdks/node/src/domain/core/cyan.ts:2`

10. **Template processor config structure**: Document shows `config: { ... } as ProcessorConfig` which matches actual usage in e2e tests like `iridium/e2e/template1/cyan/index.ts:46-58`

11. **Processor config casting pattern**: Document shows `const config = input.config as ProcessorConfig` which matches actual usage in `iridium/e2e/processor1/index.ts:20`
