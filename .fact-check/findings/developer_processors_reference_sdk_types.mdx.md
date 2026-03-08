<!-- source: content/docs/developer/processors/reference/sdk/types.mdx -->
# File: content/docs/developer/processors/reference/sdk/types.mdx

> Fact-check findings for processor SDK type definitions documentation. Unable to verify against source repositories (boron, iridium, zinc, helium, argon) as they are external to this documentation repository. Findings based on cross-referencing with spec files and related documentation files.

### Source Code Inaccuracies
(for each: Documented | Actual | file:line evidence)

1. **CyanProcessorInput property names** | Documented shows `readDir` and `writeDir` | Spec (phase-5, line 116-121) shows `readDirectory` and `writeDirectory` | `/spec/v1/CU-86et8z80y/plans/phase-5-developer-processors.md:116-125`

2. **ProcessorOutput return structure** | Documented shows `{ directory: string }` | Helium SDK reference shows `{ files: [] }` for TypeScript and `{ Files = new List<ProcessorFile>() }` for C# | `/content/docs/contributor/repositories/helium.mdx:144-147,307`

3. **LambdaProcessorFn type definition** | Documented shows `Promise<ProcessorOutput>` return type | Spec (task-spec.md, line 332) shows same pattern but the actual ProcessorOutput structure varies | `/spec/v1/CU-86et8z80y/task-spec.md:332-348`

### Documentation Issues
(for each: Problem | Location | Fix)

1. **Inconsistent property naming across docs** | Multiple files in `/content/docs/developer/processors/` use `readDir`/`writeDir` while spec files use `readDirectory`/`writeDirectory` | Cross-reference all processor docs and ensure consistency | Lines 22, 28, 214, 219

2. **Missing CyanGlob `root` property documentation** | The `root` property documentation says "Defaults to root of read directory" but doesn't clarify what value is used if omitted (null vs undefined vs empty string) | Line 81

3. **VirtualFileReference.readFile() return type** | Documented as returning `VirtualFile` but spec (file-helper.mdx line 303) shows it returns `VirtualFile` - needs verification against actual SDK | Line 180

4. **VirtualFileStream fs types** | Uses `fs.ReadStream` and `fs.WriteStream` without importing or specifying Node.js version compatibility | Line 191-193

5. **CyanFileHelper constructor shows private fields** | Documentation shows `private readonly _readDir` and `private readonly _writeDir` but these are implementation details that may not match SDK | Lines 206-208

6. **Missing readonly modifier in ProcessorOutput.directory** | Documented as `readonly directory: string` but this may not match actual SDK interface | Line 50

7. **GlobType enum values** | Documented as `Template = 0` and `Copy = 1` - matches spec but cannot verify against actual SDK source | Lines 59-70

### Other Problems
(for each: Problem | Recommendation)

1. **Source repositories not accessible** | The referenced source paths (`../boron`, `../iridium`, `../zinc`, `../helium`, `../argon`) are external repositories not included in this documentation repository. Cannot perform direct source code verification. | Recommend adding SDK type definition exports or a types reference package to this repo for verification purposes.

2. **Example Pattern section disclaimer unclear** | The section states "These are not SDK types, but examples" but some patterns (like error classes) may be confused with SDK-provided types | Add clearer visual distinction between SDK types and example patterns

3. **Type Guard Pattern section** | Shows example code that may not compile correctly - `isVariableConfig` uses `'vars' in config` but TypeScript may require type narrowing | Verify example compiles with strict TypeScript settings

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 3 |
| Documentation Issues | 7 |
| Other Problems | 3 |
