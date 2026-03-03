<!-- source: content/docs/developer/processors/how-to/access-config.mdx -->
# 📄 File: content/docs/developer/processors/how-to/access-config.mdx

> Documentation describes accessing processor config from templates. Core API signatures are correct, but several code examples contain property name mismatches with actual SDK types.

### 🔴 Source Code Inaccuracies

1. **Documented property `input.writeDirectory`** | **Actual property is `input.writeDir`**
   - Documentation (lines 91, 131, 186): Uses `input.writeDirectory` in return statements
   - Actual SDK (`helium/sdks/node/src/domain/core/cyan_script_model.ts:12-13`): `CyanProcessorInput` has `writeDir`, not `writeDirectory`
   - Evidence: All iridium examples use `input.writeDir` (see `iridium/e2e/processor1/index.ts:55`, `iridium/e2e/processor2/index.ts:55`)

2. **Non-existent function `writeFileTo`**
   - Documentation (line 180): `writeFileTo(config.clientOptions.outputDir, clientCode);`
   - Actual: No such function exists in the SDK
   - Evidence: The SDK only provides `file.writeFile()` method on `VirtualFile` objects at `helium/sdks/node/src/domain/core/fs/virtual_file.ts:48-54`

### 🟡 Documentation Issues

1. **Missing 4th parameter `help` explanation in `i.select()` call**
   - Problem: Documentation shows `i.select()` with 4 parameters but doesn't explain the `help` parameter
   - Location: Lines 35-40 show `i.select('Output format:', ['json', 'yaml'], 'config.format', 'Choose format')` - the 4th param 'Choose format' appears to be `help` but is not labeled
   - Fix: Add explanation of the overloaded `select()` signatures or clarify parameter meanings
   - Evidence: `helium/sdks/node/src/domain/core/inquirer.ts:16-18` shows `select(q: string, options: string[], id: string, help?: string | null): Promise<string>`

2. **Example uses undefined helper functions**
   - Problem: The examples reference functions like `addDockerConfig`, `convertToYaml`, `generateTypes`, `removeComments`, `parseSchema`, `generateClient` that are not part of the SDK and not defined
   - Location: Lines 81-86, 120-126, 175-180
   - Fix: Either remove these function calls, replace with placeholder comments, or provide implementations

3. **Inconsistent return type annotation**
   - Problem: Real processor examples import and use explicit `Promise<ProcessorOutput>` return type, but documentation examples don't
   - Location: All `StartProcessorWithLambda` examples (lines 68-92, 106-132, 169-187)
   - Fix: Add explicit return type annotation for consistency with real code patterns
   - Evidence: `iridium/e2e/processor1/index.ts:19` uses `: Promise<ProcessorOutput>`

### 🟠 Other Problems

1. **Complex Config Example writes to arbitrary directory**
   - Problem: The example shows writing to `config.clientOptions.outputDir` using non-existent `writeFileTo` function. This pattern would bypass the CyanFileHelper system and could lead to files being written outside the expected output directory
   - Recommendation: Either remove this example or show the correct way to write additional files using the SDK's file handling mechanisms

2. **Template parameter naming differs from SDK type definitions**
   - Problem: Using `i` and `d` as parameter names works but is less readable than `inquirer` and `determinism`
   - Recommendation: Use descriptive parameter names matching the SDK types for better clarity (optional - shorthand is acceptable)

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 3 |
| 🟠 | 2 |
