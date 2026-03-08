<!-- source: content/docs/developer/processors/index.mdx -->
# 📄 File: content/docs/developer/processors/index.mdx

> Index page for Processor Development documentation. The page provides an overview of processors, their architecture, learning paths, and a quick example. Most claims are accurate against the source code.

### 🔴 Source Code Inaccuracies
(None found)

### 🟡 Documentation Issues
1. **Quick Example is simplified but may mislead about production patterns**
   - Location: Lines 121-134 (Quick Example code block)
   - Problem: The example uses `forEach` with side effects (`file.writeFile()` inside the loop) which works but is not the typical pattern seen in real processors (e.g., iridium/e2e/processor1/index.ts uses `.map().map()` chain)
   - Fix: Consider aligning with the actual default processor pattern using `.map()` chains for consistency with real implementations, or add a note that this is a simplified example

2. **Mermaid diagram shows simplified flow**
   - Location: Lines 24-37
   - Problem: The diagram shows `D --> E[resolveAll]` but doesn't show that `resolveAll()` also internally calls `copy()` for Copy-type globs before returning template files
   - Recommendation: Either note this is a simplified view or add the copy step to the diagram

3. **ProcessorOutput not explicitly imported in Quick Example**
   - Location: Lines 121-134
   - Problem: The example returns `{ directory: input.writeDir }` without showing the `ProcessorOutput` type. While TypeScript can infer this, production code (as seen in iridium/e2e/processor1/index.ts:1) explicitly imports and uses the type
   - Recommendation: Consider adding explicit return type annotation for completeness: `StartProcessorWithLambda(async (input, fileHelper): Promise<ProcessorOutput> => {`

### 🟠 Other Problems
1. **Eta templating syntax reference is correct but not linked to detailed docs**
   - Location: Line 52 ("The default processor uses Eta with `var__name__` syntax")
   - Evidence: iridium/e2e/processor1/index.ts:24 confirms `tags: ['var__', '__']`
   - Recommendation: Consider linking to the Templates section where Eta syntax is explained in detail

2. **Components table describes types but not their full structure**
   - Location: Lines 41-46
   - Problem: The table lists component names but doesn't show their full type definitions which could help developers understand the API better
   - Evidence: CyanProcessorInput (cyan_script_model.ts:11-16) has `{ readDir, writeDir, globs, config }` - the table says "Config, globs, directories" which is accurate but brief

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 0 |
| 🟡 | 3 |
| 🟠 | 2 |
