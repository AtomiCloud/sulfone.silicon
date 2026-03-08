<!-- source: content/docs/developer/templates/reference/sdk/cyan-config.mdx -->
# 📄 File: content/docs/developer/templates/reference/sdk/cyan-config.mdx

> This document describes the Cyan configuration object returned by StartTemplateWithLambda. The interface definitions are generally accurate, but there is one type error in the varSyntax documentation and the Complete Example uses the wrong API for IInquirer calls.

### 🔴 Source Code Inaccuracies

1. **varSyntax type is incorrect**
   - Documented: `varSyntax: [[string, string]]` (tuple of two strings nested in array)
   - Actual: `varSyntax?: [string, string][]` (array of tuples)
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/processor1/index.ts:14` shows `varSyntax?: [string, string][]`
   - Fix: The correct type is `[string, string][]` meaning an array of tag pairs, not a single pair.

2. **Complete Example uses incorrect IInquirer API**
   - Documented: Uses object-based calls like `i.text({ type: QuestionType.Text, id: 'template.name', message: 'Project name?', default: 'my-project' })`
   - Actual: SDK supports both object form AND shorthand form `i.text(message: string, id: string, help?: string)` - but the example mix is valid since both are supported
   - Evidence: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/src/domain/core/inquirer.ts:20-22` shows both overloads
   - Note: While the object form IS valid, actual templates in iridium use the simpler shorthand form (e.g., `i.text('What is your name?', 'cyane2e/template1/name')`). The example code will work but may be unnecessarily verbose.

### 🟡 Documentation Issues

1. **Plugin names may not reflect actual registry plugins**
   - Problem: Plugin names like `cyan/init-git` and `cyan/npm-install` are shown as examples but don't exist in the source codebase. They are hypothetical examples.
   - Location: Lines 119, 129, 145, 149, 163, 214-218
   - Fix: The Callout on line 118-120 correctly notes these are examples. This is acceptable but could be clarified to indicate these are conceptual examples, not guaranteed available plugins.

2. **Import statement in Complete Example could be simplified**
   - Problem: The Complete Example imports `QuestionType` but uses the verbose object form for all questions, making the code longer than necessary.
   - Location: Line 177
   - Recommendation: Could show the shorthand form to demonstrate both APIs, or simplify the example.

### 🟠 Other Problems

1. **Missing CyanPlugin interface documentation**
   - Problem: The document shows the CyanProcessor interface but doesn't explicitly show the CyanPlugin interface definition in a dedicated section, only showing inline usage.
   - Recommendation: Add an explicit CyanPlugin interface section similar to CyanProcessor for completeness. The actual interface is:
     ```ts
     interface CyanPlugin {
       name: string;
       config: unknown;
     }
     ```

2. **Default processor config claims unverified**
   - Problem: The document claims `cyan/default` processor accepts `vars` and `parser.varSyntax` but there's no actual `cyan/default` processor in the source paths. The processors found are `cyane2e/processor1` and `cyane2e/processor2`.
   - Recommendation: The Callout on line 110-112 partially addresses this by noting config options vary by implementation. Consider clarifying that `cyan/default` is a conceptual reference to the built-in processor behavior.

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 2 |
| 🟡 | 2 |
| 🟠 | 2 |
