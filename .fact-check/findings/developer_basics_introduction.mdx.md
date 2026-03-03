# File: content/docs/developer/basics/introduction.mdx

> This document introduces CyanPrint development and describes the three artifact types: Templates, Processors, and Plugins. It includes a table with artifact names, purposes, and SDK ports, followed by brief descriptions of each artifact and a workflow diagram.

### Source Code Inaccuracies

1. **Missing Resolver Artifact**
   - **Documented**: Only three artifacts (Templates, Processors, Plugins) are listed
   - **Actual**: There is a fourth artifact type called "Resolver" with SDK port 5553
   - **Evidence**:
     - `helium/sdks/python/cyanprintsdk/main.py:84` - Plugin runs on port 5552
     - `helium/sdks/python/cyanprintsdk/main.py:119` - Processor runs on port 5551
     - `helium/sdks/python/cyanprintsdk/main.py:178` - Template runs on port 5550
     - `helium/sdks/python/cyanprintsdk/main.py:212` - Resolver runs on port 5553
     - `helium/sdks/node/src/main.ts:65` - Plugin port 5552
     - `helium/sdks/node/src/main.ts:89` - Processor port 5551
     - `helium/sdks/node/src/main.ts:112` - Template port 5550
     - `helium/sdks/node/src/main.ts:147` - Resolver port 5553
     - `helium/sdks/dotnet/sulfone-helium/Server.cs:182` - Resolver explicitly runs on `http://0.0.0.0:5553`
     - `helium/sdks/node/src/domain/core/cyan_script.ts:23-25` - `ICyanResolver` interface defined alongside other artifact interfaces
     - `zinc/docs/developer/surfaces/api/06-resolver.md` - Full Resolver API documentation exists in Zinc registry

### Documentation Issues

1. **Incomplete Artifact Table**
   - **Problem**: The table in "The Three Artifacts" section only lists three artifacts but source code shows four
   - **Location**: Lines 12-16 (artifact table)
   - **Fix**: Add Resolver row: `| **Resolvers** | Resolve template dependencies dynamically | 5553 |`

2. **Missing Resolver Section**
   - **Problem**: No description section for Resolvers like there is for Templates, Processors, and Plugins
   - **Location**: After line 41 (after Plugins section)
   - **Fix**: Add a "### Resolvers" section explaining their purpose (resolving template dependencies dynamically)

3. **Missing Resolver in "How They Work Together" Diagram**
   - **Problem**: The workflow diagram and numbered steps don't include Resolvers
   - **Location**: Lines 45-55
   - **Fix**: Consider whether Resolvers should be part of the workflow documentation or clarify that they are a separate/optional component

4. **Missing Resolver Link in "Choose Your Path"**
   - **Problem**: No link to Resolver documentation in the navigation section
   - **Location**: Lines 57-61
   - **Fix**: Add `- [Create a Resolver](/developer/resolvers) - Build dependency resolvers` (if Resolver docs exist)

5. **Inconsistent Title Count**
   - **Problem**: Section title says "The Three Artifacts" but source code shows four artifacts
   - **Location**: Line 10
   - **Fix**: Change to "The Four Artifacts" or "CyanPrint Artifacts" if Resolver is considered a primary artifact

### Other Problems

1. **Ambiguous Column Header "SDK Port"**
   - **Problem**: The column header "SDK Port" may be confusing - it's the port that each artifact type's server listens on when running in a container
   - **Recommendation**: Consider renaming to "Default Port" or "Container Port" for clarity

2. **Resolver Status Unclear**
   - **Problem**: The Resolver artifact is fully implemented in the SDK (Python, Node, .NET) and has API documentation in Zinc, but is not mentioned in this introduction document
   - **Recommendation**: Clarify whether Resolvers are:
     - A fourth primary artifact that should be documented
     - An internal/advanced feature that doesn't need introduction coverage
     - An experimental feature in development

## Summary

| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 1 |
| Documentation Issues | 5 |
| Other Problems | 2 |
