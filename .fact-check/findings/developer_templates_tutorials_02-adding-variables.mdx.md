<!-- source: content/docs/developer/templates/tutorials/02-adding-variables.mdx -->
# 📄 File: content/docs/developer/templates/tutorials/02-adding-variables.mdx

> Tutorial covering variable substitution using GlobType.Template, defining variables in processor config, and using the var__name__ syntax with the default processor. The core concepts are accurate, but several details don't match the actual source code implementation.

### 🔴 Source Code Inaccuracies

1. **Dockerfile path mismatch**
   - **Documented**: `docker build -f cyan/template.Dockerfile -t my-first-template:dev .` (line 97)
   - **Actual**: Actual e2e templates use `cyan/Dockerfile`, not `cyan/template.Dockerfile`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/Dockerfile` exists as `Dockerfile`, not `template.Dockerfile`. The same pattern is seen in template2 and template3.

2. **Processor name `cyan/default` does not exist as an implemented processor**
   - **Documented**: Uses `name: 'cyan/default'` as the processor name (lines 64, 86)
   - **Actual**: No processor named `cyan/default` exists in the source code. Actual templates use specific processor names like `ernest/processor1`, `ernest/processor2`, or simple names like `hello`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:37` uses `name: 'ernest/processor1'`. `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/helium/sdks/node/template_test.ts:143` uses `name: 'hello'`. No `cyan/default` processor implementation found in any source path.

3. **Template directory path mismatch**
   - **Documented**: Uses `root: 'templates'` (line 18, 66) and `cyan/templates/README.md` (line 43)
   - **Actual**: Actual e2e templates use `root: 'template'` (singular) and place files in `template/` directory
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/cyan/index.ts:43` uses `root: 'template'`. The directory is `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/template/` not `templates/`

4. **Variable syntax table row 2 is misleading**
   - **Documented**: Table claims `var__author__` is for "Nested variable access" (line 87)
   - **Actual**: `var__author__` is simple variable substitution, not nested. Nested access would use dot notation like `var__user.name__`
   - **Evidence**: `/Users/erng/Workspace/atomi/runbook/platforms/sulfone/iridium/e2e/template1/template/profile.yaml:1-9` shows only flat variable substitution with no nested access

### 🟡 Documentation Issues

1. **Example code uses different project structure than actual templates**
   - **Problem**: The complete example shows `templates/` directory but actual e2e templates use `template/` (singular)
   - **Location**: Lines 43, 66, 83-84
   - **Fix**: Either update the documentation to use `template/` or note that the directory name is configurable

2. **Project structure example missing from this tutorial**
   - **Problem**: Unlike Tutorial 1, this tutorial doesn't show where to create the README.md file. It references `cyan/templates/README.md` without explaining the directory structure
   - **Location**: Line 43
   - **Fix**: Add a step showing how to create the templates directory and README.md file

3. **Ambiguous description of default processor**
   - **Problem**: The documentation states "the default processor uses `var__name__` syntax" but doesn't clarify that `cyan/default` is a conceptual reference to a processor pattern, not an actual registered processor
   - **Location**: Lines 41-42, 82-91
   - **Fix**: Clarify that `cyan/default` refers to the default processor pattern (Eta templating with var__ __ delimiters) that users implement, or reference an actual built-in processor if one exists

4. **Missing explanation of vars relationship to questions**
   - **Problem**: Tutorial shows hardcoded vars (`name: 'my-project'`) but doesn't explain that in real templates, vars typically come from user answers to questions (covered in Tutorial 4)
   - **Location**: Lines 29-36
   - **Fix**: Add a brief note that vars can be hardcoded for testing or dynamically set from user input

### 🟠 Other Problems

1. **Variable syntax table is incomplete**
   - **Problem**: The Variable Syntax table (lines 84-87) shows only `var__name__` and `var__author__` but doesn't explain other Eta features like conditionals or loops
   - **Recommendation**: Either expand the table to show more syntax options or link to full Eta documentation

2. **No explanation of how the var__ __ delimiter is configured**
   - **Problem**: The documentation doesn't explain that the delimiter is configurable in the processor config via `parser.varSyntax`
   - **Recommendation**: Add a note showing that the delimiter can be customized:
     ```ts
     config: {
       parser: { varSyntax: [['var__', '__']] },
       vars: { ... }
     }
     ```

3. **Test command may fail without proper setup**
   - **Problem**: The test command `cyanprint create my-first-template:dev ../test-output` assumes CyanPrint CLI is installed and configured, but prerequisites only mention it briefly in Tutorial 1
   - **Recommendation**: Add a brief reminder about CLI installation or link to setup instructions

## Summary
| Category | Count |
|----------|-------|
| 🔴 | 4 |
| 🟡 | 4 |
| 🟠 | 3 |
