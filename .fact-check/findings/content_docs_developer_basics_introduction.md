<!-- source: content/docs/developer/basics/introduction.mdx -->

# 📄 File: content/docs/developer/basics/introduction.mdx

> The introduction document claims there are "three artifacts" in CyanPrint but the source code shows there are actually four. Additionally, the SDK port assignments are accurate for the three documented artifacts, but the fourth artifact (Resolver) is completely missing from the documentation.

### 🔴 Source Code Inaccuracies

1. **Documented**: "CyanPrint is a template-based project generator with three extensible components called **artifacts**" (line 8)

   - **Actual**: There are **four** artifacts: Templates, Processors, Plugins, and Resolvers
   - **Evidence**:
     - `helium/sdks/node/src/main.ts:145-166` - `StartResolver()` and `StartResolverWithLambda()` functions defined
     - `helium/sdks/node/src/domain/core/cyan_script.ts:23-25` - `ICyanResolver` interface defined alongside other artifact interfaces
     - `helium/spec/CU-86ewrbr69/v1/task-spec.md:14` - "Implement Resolver SDKs for Node.js, Python, and .NET that enable developers to create resolvers - stateless services on port 5553"
     - `helium/spec/CU-86ewrbr69/v1/task-spec.md:62` - Port table shows Resolver on port 5553

2. **Documented**: SDK Port table lists only three artifacts with ports 5550, 5551, 5552 (lines 12-16)

   - **Actual**: Missing Resolver artifact which runs on port 5553
   - **Evidence**:
     - `helium/sdks/node/src/main.ts:147` - `const port = 5553;` in `StartResolver()`
     - `helium/sdks/python/cyanprintsdk/main.py:185-212` - Python SDK has `start_resolver()` on port 5553
     - `helium/docker-compose.resolver.yaml:7-9` - Docker compose exposes port 5553 for resolvers

3. **Documented**: Processors purpose is "Transform files (templating, syntax conversion)" with examples like "Mustache templating, syntax conversion" (lines 16, 31)

   - **Actual**: No evidence of Mustache or syntax conversion in the codebase. Processors receive `CyanProcessorInput` with read/write directories and globs, and return a `ProcessorOutput` with just a directory path
   - **Evidence**:
     - `helium/sdks/node/src/domain/processor/service.ts:13-25` - Processor receives `readDirectory`, `writeDirectory`, `globs`, `config`
     - `helium/sdks/node/src/domain/processor/output.ts:1-5` - `ProcessorOutput` only contains `directory: string`
     - Grep search for "Mustache" in boron/iridium/helium returned no matches

4. **Documented**: Plugins purpose includes "Execute shell commands, Modify file permissions, Initialize git repositories, Install dependencies" (lines 38-41)
   - **Actual**: The `ICyanPlugin` interface only receives `directory` and `config`, with no specific SDK-level support for these operations listed
   - **Evidence**:
     - `helium/sdks/node/src/domain/plugin/input.ts:1-6` - `PluginInput` only has `directory: string` and `config: unknown`
     - `helium/sdks/node/src/domain/plugin/output.ts:1-5` - `PluginOutput` only has `directory: string`
     - The listed capabilities are implementation details, not SDK guarantees

### 🟡 Documentation Issues

1. **Problem**: Missing fourth artifact type (Resolver) completely from documentation

   - **Location**: Lines 10-16 (artifacts table) and lines 34-41 (Plugins section)
   - **Fix**: Add a new row to the table: `| **Resolvers** | Resolve file conflicts from layered templates | 5553 |` and add a Resolvers subsection explaining that resolvers receive multiple versions of the same file from different template layers and return merged content

2. **Problem**: The workflow diagram and description don't mention Resolvers

   - **Location**: Lines 43-55 (How They Work Together section)
   - **Fix**: Update the Mermaid diagram to include Resolver between Processor and Plugin, or add a note about optional Resolver step for layered templates

3. **Problem**: "Choose Your Path" section doesn't include Resolver development path

   - **Location**: Lines 57-61
   - **Fix**: Add `- [Create a Resolver](/developer/resolvers) - Build conflict resolvers`

4. **Problem**: Misleading examples for Processor transformations

   - **Location**: Line 31 - "Apply transformations (e.g., Mustache templating, syntax conversion)"
   - **Fix**: Remove specific examples like "Mustache templating" unless there's evidence in source code. Use more generic description like "Apply custom file transformations based on configuration"

5. **Problem**: Plugin capabilities listed are implementation possibilities, not SDK features
   - **Location**: Lines 38-41
   - **Fix**: Clarify that these are examples of what plugins CAN do, not built-in SDK capabilities. The SDK only provides the interface contract

### 🟠 Other Problems

1. **Problem**: Documentation title and description use "CyanPrint" but the project structure suggests "Sulfone" as the platform name with CyanPrint as a component

   - **Recommendation**: Ensure consistent naming conventions throughout documentation

2. **Problem**: The term "Cyan config" is used (line 53) but the actual type is `Cyan`

   - **Evidence**: `helium/sdks/node/src/domain/core/cyan.ts:24-27` - `interface Cyan { processors: CyanProcessor[]; plugins: CyanPlugin[]; }`
   - **Recommendation**: Use consistent terminology - either "Cyan object" or "Cyan configuration" but not "Cyan config"

3. **Problem**: No mention of Resolvers being part of the composition system for layered templates
   - **Recommendation**: Add context about when Resolvers are needed (when composing multiple templates that may have conflicting files)

## Summary

| Category | Count |
| -------- | ----- |
| 🔴       | 4     |
| 🟡       | 5     |
| 🟠       | 3     |
