<!-- source: content/docs/developer/processors/explanation/input-config.mdx -->
# File: content/docs/developer/processors/explanation/input-config.mdx

> Documentation about processor config input mechanism. Contains several inaccuracies related to API naming conventions and cyan.yaml schema that don't match the actual SDK implementation.

### Source Code Inaccuracies
1. **Template inquirer method signatures** | Documented: `i.text('Project name?', 'project.name', 'Enter name')` with 4th param as help text | Actual: `text(q: string, id: string, help?: string | null)` - the 3rd parameter IS the help text, not a separate "Enter name" placeholder. The signature is `(message, id, help?)`. | helium/sdks/node/src/domain/core/inquirer.ts:20-22

2. **Template inquirer.checkbox signature** | Documented: `i.checkbox('Features?', ['auth', 'api'], 'project.features', 'Select')` with 4 params | Actual: `checkbox(q: string, options: string[], id: string, help?: string | null)` - correct signature but documented usage implies different semantics. | helium/sdks/node/src/domain/core/inquirer.ts:4-6

3. **Template inquirer.select signature** | Documented: `i.select('Format?', ['json', 'yaml'], 'config.format', 'Choose')` | Actual: `select(q: string, options: string[], id: string, help?: string | null)` - correct but same issue as checkbox. | helium/sdks/node/src/domain/core/inquirer.ts:16-18

4. **Processor input.config type annotation** | Documented: "input.config is typed as unknown" | Actual: Confirmed correct - `config: unknown` in CyanProcessorInput interface. | helium/sdks/node/src/domain/core/cyan_script_model.ts:15

5. **Processor return value structure** | Documented: `return { directory: input.writeDir }` | Actual: Confirmed correct - `ProcessorOutput` has `directory: string` property, and `input.writeDir` is the correct property name. | helium/sdks/node/src/domain/processor/output.ts:1-5, helium/sdks/node/src/domain/core/cyan_script_model.ts:13

6. **fileHelper.resolveAll() method** | Documented: `const files = fileHelper.resolveAll()` returning files with `.content` and `.writeFile()` | Actual: Confirmed correct - returns `VirtualFile[]` with `content: string` property and `writeFile(): void` method. | helium/sdks/node/src/domain/core/fs/cyan_fs_helper.ts:33-40, helium/sdks/node/src/domain/core/fs/virtual_file.ts:32-55

7. **cyan.yaml processor.inputs section** | Documented: Shows `processor.inputs` array with name, type, required, enum, default, description, properties fields | Actual: No such structure exists. The cyan.yaml for processors only contains username, name, description, project, source, email, tags, readme. Config is NOT defined in processor's cyan.yaml. | iridium/e2e/processor1/cyan.yaml, content/docs/developer/processors/reference/cyan-yaml.mdx:60-64 (which explicitly states "The cyan.yaml file does not define processor configuration options")

### Documentation Issues
1. **Incorrect cyan.yaml schema** | Line 278-306 | The documentation shows a `processor.inputs` section in cyan.yaml with input definitions, but this doesn't exist in the actual processor cyan.yaml format. This contradicts the official cyan-yaml.mdx reference which states config is NOT defined in cyan.yaml. Remove the entire "Documentation" section (lines 276-306) or clearly mark it as aspirational/planned feature.

2. **Misleading inquirer example comments** | Lines 30-33 | The comments like `'Enter name'` as 4th parameter could mislead developers about what the parameter does. The 3rd/4th parameter is `help` text, not a placeholder. Clarify the parameter purpose in examples.

3. **Inconsistent link format** | Lines 310-312 | Links to `/docs/developer/processors/how-to/access-config` and others are correct per the instructions (starting from `/docs`).

### Other Problems
1. **Default value spread pattern may not work as intended** | Lines 163-169 | The pattern `const config: Config = { optional: true, withDefault: 10, ...(input.config as Partial<Config>) }` will NOT override defaults if input.config has `optional: false` or `withDefault: undefined`. The spread should come FIRST, then overrides: `{ ...(input.config as Partial<Config>), optional: input.config?.optional ?? true, withDefault: input.config?.withDefault ?? 10 }`. Recommend fixing this pattern.

2. **Config validation example incomplete** | Lines 194-218 | The validation function is defined but the example ends with `// Config is now validated // ...` without returning the required `ProcessorOutput`. Should show `return { directory: input.writeDir };` at the end.

## Summary
| Category | Count |
|----------|-------|
| Source Code Inaccuracies | 7 |
| Documentation Issues | 3 |
| Other Problems | 2 |
