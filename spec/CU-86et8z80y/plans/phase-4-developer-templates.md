# Sub-Plan: Developer Templates (Phase 5 of 7)

## Goal

Create comprehensive template documentation with Divio format. Include SDK reference within this section.

## Expected Files

| File                                      | Description                                         | Links To                                  |
| ----------------------------------------- | --------------------------------------------------- | ----------------------------------------- |
| `developer/templates/index.mdx`           | Overview of template development                    | tutorials/first-template, reference/sdk   |
| **Tutorials**                             |                                                     |                                           |
| `tutorials/meta.json`                     | Navigation for tutorials                            | -                                         |
| `tutorials/01-blank-template.mdx`         | Create blank template using meta template           | 02-adding-variables                       |
| `tutorials/02-adding-variables.mdx`       | Add var**name** variable substitution               | 03-changing-glob                          |
| `tutorials/03-changing-glob.mdx`          | Control which files are processed vs copied         | 04-asking-questions                       |
| `tutorials/04-asking-questions.mdx`       | Prompt user for input with IInquirer                | how-to/\*                                 |
| `tutorials/full-example.mdx`              | Complete template example with all features         | -                                         |
| **How-to Guides**                         |                                                     |                                           |
| `how-to/meta.json`                        | Navigation for how-tos                              | -                                         |
| `how-to/ask-checkbox.mdx`                 | Ask checkbox (multi-select) questions               | reference/sdk/inquirer                    |
| `how-to/ask-confirm.mdx`                  | Ask yes/no confirmation questions                   | reference/sdk/inquirer                    |
| `how-to/ask-password.mdx`                 | Ask hidden password input                           | reference/sdk/inquirer                    |
| `how-to/ask-date.mdx`                     | Ask for date selection                              | reference/sdk/inquirer                    |
| `how-to/default-values.mdx`               | Set default values for questions                    | reference/sdk/inquirer                    |
| `how-to/validate-input.mdx`               | Validate user input                                 | reference/sdk/inquirer                    |
| `how-to/use-keys.mdx`                     | Use keys for consistent answers (namespacing)       | reference/sdk/inquirer                    |
| `how-to/pin-determinism.mdx`              | Pin determinism for reproducibility                 | explanation/determinism                   |
| `how-to/compose-templates.mdx`            | Compose multiple templates                          | explanation/composition                   |
| `how-to/pass-images-binaries.mdx`         | Include images and binary files                     | -                                         |
| `how-to/push-to-registry.mdx`             | Build and publish template with buildx              | explanation/docker-vs-cyan-registry       |
| `how-to/conditional-files.mdx`            | Include files conditionally                         | -                                         |
| `how-to/use-custom-processor.mdx`         | Use a custom processor                              | /developer/processors                     |
| `how-to/add-plugins.mdx`                  | Add plugins to template                             | /developer/plugins                        |
| **Reference**                             |                                                     |                                           |
| `reference/meta.json`                     | Navigation for reference                            | -                                         |
| `reference/project-structure.mdx`         | Template project structure (cyan.yaml, Dockerfiles) | -                                         |
| `reference/cyan-yaml.mdx`                 | cyan.yaml format reference                          | -                                         |
| `reference/dockerfiles.mdx`               | template.Dockerfile and blob.Dockerfile             | -                                         |
| `reference/sdk/index.mdx`                 | SDK overview                                        | -                                         |
| `reference/sdk/inquirer.mdx`              | IInquirer API reference (shorthand + object forms)  | -                                         |
| `reference/sdk/cyan-config.mdx`           | Cyan config structure (processors, files, config)   | -                                         |
| `reference/sdk/globbing.mdx`              | Globbing patterns per SDK                           | -                                         |
| `reference/sdk/types.mdx`                 | Type definitions (GlobType, QuestionType)           | -                                         |
| **Explanation**                           |                                                     |                                           |
| `explanation/meta.json`                   | Navigation for explanation                          | -                                         |
| `explanation/cyan-object.mdx`             | Understanding the Cyan configuration object         | -                                         |
| `explanation/determinism.mdx`             | How determinism works (uuid, pin)                   | how-to/pin-determinism                    |
| `explanation/client-state.mdx`            | Managing client state across executions             | -                                         |
| `explanation/docker-vs-cyan-registry.mdx` | Docker registry vs CyanPrint registry               | how-to/push-to-registry                   |
| `explanation/processors-vs-plugins.mdx`   | When to use processors vs plugins                   | /developer/processors, /developer/plugins |
| `explanation/3-way-merge.mdx`             | How template updates work                           | -                                         |
| `explanation/container-paths.mdx`         | Container path mechanics (/workspace)               | -                                         |
| `explanation/default-processor.mdx`       | How cyan/default processor works (Eta templating)   | -                                         |

## Directory Structure

```
content/docs/developer/templates/
├── index.mdx
├── meta.json
├── tutorials/
│   ├── meta.json
│   ├── 01-blank-template.mdx
│   ├── 02-adding-variables.mdx
│   ├── 03-changing-glob.mdx
│   ├── 04-asking-questions.mdx
│   └── full-example.mdx
├── how-to/
│   ├── meta.json
│   ├── ask-checkbox.mdx
│   ├── ask-confirm.mdx
│   ├── ask-password.mdx
│   ├── ask-date.mdx
│   ├── default-values.mdx
│   ├── validate-input.mdx
│   ├── use-keys.mdx
│   ├── pin-determinism.mdx
│   ├── compose-templates.mdx
│   ├── pass-images-binaries.mdx
│   ├── push-to-registry.mdx
│   ├── conditional-files.mdx
│   ├── use-custom-processor.mdx
│   └── add-plugins.mdx
├── reference/
│   ├── meta.json
│   ├── project-structure.mdx
│   ├── cyan-yaml.mdx
│   ├── dockerfiles.mdx
│   └── sdk/
│       ├── meta.json
│       ├── index.mdx
│       ├── inquirer.mdx
│       ├── cyan-config.mdx
│       ├── globbing.mdx
│       └── types.mdx
└── explanation/
    ├── meta.json
    ├── cyan-object.mdx
    ├── determinism.mdx
    ├── client-state.mdx
    ├── docker-vs-cyan-registry.mdx
    ├── processors-vs-plugins.mdx
    ├── 3-way-merge.mdx
    ├── container-paths.mdx
    └── default-processor.mdx
```

## Content Strategy (Avoid Duplication)

| Content           | Location                          | Cross-references                   |
| ----------------- | --------------------------------- | ---------------------------------- |
| IInquirer methods | `reference/sdk/inquirer.mdx`      | Linked from all how-to/ask-\*      |
| Validation        | `how-to/validate-input.mdx`       | Links to sdk/inquirer              |
| Default values    | `how-to/default-values.mdx`       | Links to sdk/inquirer              |
| Keys concept      | `how-to/use-keys.mdx`             | Explains namespacing               |
| Determinism       | `explanation/determinism.mdx`     | Linked from how-to/pin-determinism |
| Project structure | `reference/project-structure.mdx` | Linked from tutorials              |

## Technical Approach

### Tutorials (Progressive Complexity)

#### `tutorials/01-blank-template.mdx`

**Goal:** Create a template using the meta template.

````mdx
# Tutorial 1: Blank Template

Create a template using the meta template.

## Create Project

\```bash
cyanprint create cyan/new my-first-template
cd my-first-template
\```

This scaffolds a complete template project.

## Template Logic

`cyan/index.ts`:

\```ts
import { StartTemplateWithLambda, GlobType } from '@atomicloud/cyan-sdk';

StartTemplateWithLambda(async (i, d) => {
return {
processors: [{
name: 'cyan/default',
files: [{ root: 'templates', glob: '\*_/_', exclude: [], type: GlobType.Copy }],
config: { vars: {} }
}]
};
});
\```

## Template Files

\```bash
mkdir -p cyan/templates
echo "# My Project" > cyan/templates/README.md
\```

This template copies `templates/README.md` without any variable substitution.

**Next:** [Adding Variables](/developer/templates/tutorials/02-adding-variables)
````

#### `tutorials/02-adding-variables.mdx`

**Goal:** Add `var__name__` variable substitution.

````mdx
# Tutorial 2: Adding Variables

Add variable substitution using the default processor.

## Change to GlobType.Template

\```ts
files: [{ root: 'templates', glob: '\*_/_', exclude: [], type: GlobType.Template }]
\```

## Add Variables to Config

\```ts
config: { vars: { name: 'my-project' } }
\```

## Use Variables in Files

`cyan/templates/README.md`:

\```markdown

# var**name**

Welcome to var**name**!
\```

**Next:** [Changing Glob Patterns](/developer/templates/tutorials/03-changing-glob)
````

#### `tutorials/03-changing-glob.mdx`

**Goal:** Control which files are processed vs copied.

````mdx
# Tutorial 3: Changing Glob Patterns

Control which files are processed vs copied as-is.

## Multiple File Groups

\```ts
files: [
{ root: 'templates', glob: '**/\*.md', exclude: [], type: GlobType.Template },
{ root: 'templates', glob: '**/_.png', exclude: [], type: GlobType.Copy },
{ root: 'static', glob: '\*\*/_', exclude: [], type: GlobType.Copy }
]
\```

## Exclude Patterns

\```ts
exclude: ['**/test/**', '**/node_modules/**']
\```

See [Globbing Reference](/developer/templates/reference/sdk/globbing).

**Next:** [Asking Questions](/developer/templates/tutorials/04-asking-questions)
````

#### `tutorials/04-asking-questions.mdx`

**Goal:** Prompt user for input with keys concept.

````mdx
# Tutorial 4: Asking Questions

Collect user input to customize the generated project.

## Add Questions

\```ts
StartTemplateWithLambda(async (i, d) => {
const name = await i.text('Project name?', 'name', 'Enter project name');
const license = await i.select('License?', ['MIT', 'Apache-2.0', 'GPL-3.0'], 'license', 'Choose license');
const docker = await i.confirm('Add Docker?', 'docker', 'Include Dockerfile');

return {
processors: [{
name: 'cyan/default',
files: [{ root: 'templates', glob: '\*_/_', exclude: [], type: GlobType.Template }],
config: { vars: { name, license, docker } }
}]
};
});
\```

## Keys Concept

<CodeHike>
The `id` parameter (second argument) is the **key**. If multiple questions have the same key, they will receive the **same answer**.

\```ts
// Both questions get the same answer!
const name1 = await i.text('Project name?', 'name', '...');
const name2 = await i.text('Confirm name?', 'name', '...'); // Same key = same answer
\```

**Best practice:** Namespace your keys to avoid collisions:

\```ts
const projectName = await i.text('Project name?', 'my-template.project.name', '...');
\```

</CodeHike>

See [IInquirer Reference](/developer/templates/reference/sdk/inquirer) for all question types.

**Next:** See [How-to Guides](/developer/templates/how-to) for specific patterns.
````

### How-to Guides

#### `how-to/use-keys.mdx`

````mdx
# How to Use Keys

Keys control answer reuse across questions and templates.

## Same Key = Same Answer

\```ts
// These will always have the same value
const name1 = await i.text('Name?', 'project.name', '...');
const name2 = await i.confirm('Use "project.name"?', 'project.name', '...');
\```

## Namespace Your Keys

Prevent collisions with other templates:

\```ts
// Good: namespaced keys
const name = await i.text('Name?', 'my-template.name', '...');
const version = await i.text('Version?', 'my-template.version', '...');

// Bad: generic keys that might collide
const name = await i.text('Name?', 'name', '...');
\```

## Cross-Template Keys

If users compose multiple templates, namespaced keys prevent conflicts.
````

#### `how-to/push-to-registry.mdx`

````mdx
# How to Push to Registry

Build and publish your template.

## 1. Build with Buildx (Multi-Arch)

\```bash

# Build template image

docker buildx build --platform linux/amd64,linux/arm64 \
 -f cyan/template.Dockerfile \
 -t myorg/my-template:1.0.0 \
 --push .

# Build blob image

docker buildx build --platform linux/amd64,linux/arm64 \
 -f cyan/blob.Dockerfile \
 -t myorg/my-template-blob:1.0.0 \
 --push .
\```

The `--push` flag pushes immediately after build.

## 2. Register with CyanPrint

\```bash
cyanprint push template --token $CYAN_TOKEN \
 myorg/my-template-blob 1.0.0 \
 myorg/my-template 1.0.0
\```

See [Docker vs Cyan Registry](/developer/templates/explanation/docker-vs-cyan-registry).
````

#### `how-to/add-plugins.mdx`

````mdx
# How to Add Plugins

Plugins run post-processing after file generation.

## In cyan.yaml

\```yaml
plugins:

- name: myorg/init-git
  config:
  commitMessage: "Initial commit from template"
  \```

## Available Config

Pass any config your plugin needs:

\```yaml
plugins:

- name: myorg/setup-tooling
  config:
  installDeps: true
  runLint: true
  \```

See [Plugin Development](/developer/plugins) for creating custom plugins.
````

### Reference

#### `reference/sdk/inquirer.mdx`

````mdx
# IInquirer Reference

## Shorthand Forms (Recommended)

\```ts
// Text
const name = await i.text('Question?', 'id', 'Help text');

// Select (single)
const choice = await i.select('Question?', ['A', 'B', 'C'], 'id', 'Help text');

// Confirm (boolean)
const confirmed = await i.confirm('Question?', 'id', 'Help text');

// Checkbox (multiple)
const choices = await i.checkbox('Question?', ['A', 'B', 'C'], 'id', 'Help text');

// Password (hidden)
const secret = await i.password('Question?', 'id', 'Help text');

// Date
const date = await i.dateSelect('Question?', 'id', 'Help text');
\```

## Object Forms (with validation)

\```ts
const name = await i.text({
type: QuestionType.Text,
id: 'name',
message: 'Project name?',
desc: 'Enter name',
validate: (input) => input.length < 3 ? 'Must be 3+ chars' : null,
default: 'my-project'
});
\```

## QuestionType Enum

| Value | Type       |
| ----- | ---------- |
| 0     | Text       |
| 1     | DateSelect |
| 2     | Select     |
| 3     | Checkbox   |
| 4     | Password   |
| 5     | Confirm    |

## Keys

The `id` parameter is the **key**. Same key = same answer across all questions.

See [How to Use Keys](/developer/templates/how-to/use-keys) for namespacing best practices.
````

### Explanation

#### `explanation/default-processor.mdx`

````mdx
# Default Processor

The `cyan/default` processor uses **Eta templating**.

## Tag Syntax

Default tags: `var__` and `__`

\```markdown

# var**name**

Author: var**author**
\```

## Custom Tags

Configure in processor config:

\```ts
config: {
vars: { name: 'project', author: 'John' },
parser: { varSyntax: [['<%', '%>']] }
}
\```

## Config Structure

\```ts
{
vars: Record<string, any>, // Variables to substitute
parser: {
varSyntax: [[string, string]] // Custom tag pairs
}
}
\```
````

## Success Criteria

- [ ] Tutorial progression works (blank → variables → glob → questions)
- [ ] All how-to guides link to SDK reference
- [ ] SDK reference is complete and accurate
- [ ] Keys concept explained with namespacing
- [ ] Buildx multi-arch with --push documented
- [ ] Plugin how-to added
- [ ] No content duplication
- [ ] Build succeeds
