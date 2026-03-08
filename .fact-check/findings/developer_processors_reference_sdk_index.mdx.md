<!-- source: content/docs/developer/processors/reference/sdk/index.mdx -->
# 📄 File: content/docs/developer/processors/reference/sdk/index.mdx

> The SDK overview document has several inaccuracies regarding type exports, interface names, and code examples.

### 🔴 Source Code Inaccuracies

1. **Documented**: `ProcessorInput` interface listed under "Interfaces" section
   **Actual**: SDK exports `CyanProcessorInput`, not `ProcessorInput`
   **Evidence**: `helium/sdks/node/src/main.ts:194` - exports `CyanProcessorInput`, not `ProcessorInput`. The `ProcessorInput` type exists in `helium/sdks/node/src/domain/processor/input.ts` but is NOT exported from the SDK.

2. **Documented**: `ProcessorOutput` listed under "Interfaces"
   **Actual**: `ProcessorOutput` is a type, not an interface
   **Evidence**: `helium/sdks/node/src/domain/processor/output.ts:1-5` - `interface ProcessorOutput` but exported as `export type { ProcessorOutput }` in main.ts:197

3. **Documented**: `VirtualFile`, `VirtualFileReference`, `VirtualFileStream` listed under "Types"
   **Actual**: These types are NOT exported from the SDK
   **Evidence**: `helium/sdks/node/src/main.ts:169-207` - The exports list does not include `VirtualFile`, `VirtualFileReference`, or `VirtualFileStream`. These are only internal classes in `helium/sdks/node/src/domain/core/fs/virtual_file.ts`.

4. **Documented**: Quick Start code uses `input.writeDirectory`
   **Actual**: Property name is `input.writeDir`
   **Evidence**: `helium/sdks/node/src/domain/core/cyan_script_model.ts:11-16` - `CyanProcessorInput` has `readDir` and `writeDir`, not `readDirectory`/`writeDirectory`. Also confirmed in actual usage: `iridium/e2e/processor1/index.ts:55` - `return { directory: input.writeDir };`

5. **Documented**: `CyanFileHelper` listed under "Interfaces"
   **Actual**: `CyanFileHelper` is exported as a class, not an interface type
   **Evidence**: `helium/sdks/node/src/main.ts:178` - `CyanFileHelper` is exported as a value (class), not a type.

### 🟡 Documentation Issues

1. **Problem**: Interfaces section heading is misleading
   **Location**: Lines 26-33
   **Fix**: Rename section to "Types" since most items are types, not interfaces. `CyanFileHelper` is a class (value export), `ProcessorInput` doesn't exist (should be `CyanProcessorInput`), and `ProcessorOutput` is a type alias.

2. **Problem**: Types section lists types that aren't exported
   **Location**: Lines 36-41
   **Fix**: Remove `VirtualFile`, `VirtualFileReference`, `VirtualFileStream` from the Types table as they are not exported from `@atomicloud/cyan-sdk`. Users access these through return types but cannot import them directly.

3. **Problem**: Quick Start code comment incorrectly describes input properties
   **Location**: Lines 49-52
   **Fix**: Change comments to match actual property names:
   - `//   - readDir: Source files location` (not readDirectory)
   - `//   - writeDir: Output location` (not writeDirectory)

### 🟠 Other Problems

1. **Problem**: The documentation describes `CyanFileHelper` as an interface in the "Interfaces" section, but it's actually a class that's instantiated internally by the SDK and passed to the processor. Users don't create instances directly.
   **Recommendation**: Move `CyanFileHelper` to a separate "Classes" section or clarify that it's provided by the SDK, not user-instantiated.

2. **Problem**: SDK Reference Sections links may be inconsistent with actual file paths
   **Location**: Lines 74-78
   **Recommendation**: Verify that all linked pages exist and have correct content matching the SDK exports.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 5 |
| 🟡 | 3 |
| 🟠 | 2 |
