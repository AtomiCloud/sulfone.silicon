# Sub-Plan: Developer Plugins (Phase 7 of 7)

## Goal

Create plugin documentation based on actual SDK capabilities. Plugins handle post-processing after file generation.

## Expected Files

| File                                    | Description                                        | Links To                                             |
| --------------------------------------- | -------------------------------------------------- | ---------------------------------------------------- |
| `developer/plugins/index.mdx`           | Overview of plugin development                     | tutorials/first-plugin, explanation/what-are-plugins |
| **Tutorials**                           |                                                    |                                                      |
| `tutorials/meta.json`                   | Navigation for tutorials                           | -                                                    |
| `tutorials/first-plugin.mdx`            | Create a plugin that runs post-processing commands | reference/sdk/input-output                           |
| **How-to Guides**                       |                                                    |                                                      |
| `how-to/meta.json`                      | Navigation for how-tos                             | -                                                    |
| `how-to/run-commands.mdx`               | Run shell commands in generated directory          | -                                                    |
| `how-to/modify-files.mdx`               | Read and modify generated files                    | -                                                    |
| `how-to/conditional-execution.mdx`      | Run logic based on config                          | -                                                    |
| `how-to/push-to-registry.mdx`           | Build and publish plugin                           | -                                                    |
| **Reference**                           |                                                    |                                                      |
| `reference/meta.json`                   | Navigation for reference                           | -                                                    |
| `reference/project-structure.mdx`       | Plugin project structure                           | -                                                    |
| `reference/cyan-yaml.mdx`               | cyan.yaml format for plugins                       | -                                                    |
| `reference/dockerfile.mdx`              | Plugin Dockerfile                                  | -                                                    |
| `reference/sdk/index.mdx`               | SDK overview                                       | -                                                    |
| `reference/sdk/start-plugin.mdx`        | StartPluginWithLambda API                          | -                                                    |
| `reference/sdk/input-output.mdx`        | PluginInput/PluginOutput interfaces                | -                                                    |
| `reference/sdk/types.mdx`               | Type definitions                                   | -                                                    |
| **Explanation**                         |                                                    |                                                      |
| `explanation/meta.json`                 | Navigation for explanation                         | -                                                    |
| `explanation/what-are-plugins.mdx`      | What plugins are and when to use them              | -                                                    |
| `explanation/plugins-vs-processors.mdx` | Plugins vs Processors comparison                   | /developer/processors                                |
| `explanation/execution-order.mdx`       | Execution order in the pipeline                    | -                                                    |

## Directory Structure

```
content/docs/developer/plugins/
├── index.mdx
├── meta.json
├── tutorials/
│   ├── meta.json
│   └── first-plugin.mdx
├── how-to/
│   ├── meta.json
│   ├── run-commands.mdx
│   ├── modify-files.mdx
│   ├── conditional-execution.mdx
│   └── push-to-registry.mdx
├── reference/
│   ├── meta.json
│   ├── project-structure.mdx
│   ├── cyan-yaml.mdx
│   ├── dockerfile.mdx
│   └── sdk/
│       ├── meta.json
│       ├── index.mdx
│       ├── start-plugin.mdx
│       ├── input-output.mdx
│       └── types.mdx
└── explanation/
    ├── meta.json
    ├── what-are-plugins.mdx
    ├── plugins-vs-processors.mdx
    └── execution-order.mdx
```

## Plugin Capabilities (from SDK analysis)

Based on `../helium/sdks/node/src/domain/plugin/`:

```typescript
interface PluginInput {
  directory: string; // Path to generated files
  config: unknown; // Plugin-specific config from template
}

interface PluginOutput {
  directory: string; // Must return the directory path
}

interface ICyanPlugin {
  plugin(input: PluginPluginInput): Promise<PluginOutput>;
}
```

**Plugins receive:**

- `directory` - Path to the generated project files
- `config` - Custom configuration from the template

**Plugins can:**

- Run shell commands on the generated files
- Modify files in the directory
- Perform post-processing operations
- Execute build steps

## Content Strategy

| Content          | Location                           | Notes                                 |
| ---------------- | ---------------------------------- | ------------------------------------- |
| What plugins do  | `explanation/what-are-plugins.mdx` | Post-processing after file generation |
| Running commands | `how-to/run-commands.mdx`          | Common use case                       |
| Plugin API       | `reference/sdk/input-output.mdx`   | Simple interface                      |

## Technical Approach

### `index.mdx`

```mdx
# Plugin Development

Plugins run **after** file generation, enabling post-processing like running commands or modifying files.

## What Plugins Can Do

- Run shell commands (npm install, git init)
- Modify generated files
- Execute build steps
- Set up development environment

[Learn what plugins are →](/developer/plugins/explanation/what-are-plugins)

## Quick Links

- [First Plugin Tutorial](/developer/plugins/tutorials/first-plugin)
- [Plugin API Reference](/developer/plugins/reference/sdk/input-output)
```

### Tutorials

#### `tutorials/first-plugin.mdx`

````mdx
# Your First Plugin

Create a plugin that runs post-processing commands.

## Create Project

\```bash
mkdir my-plugin
cd my-plugin
bun init
bun add @atomicloud/cyan-sdk
\```

## Create Plugin Logic

`index.ts`:

\```ts
import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';
import { $ } from 'bun';

StartPluginWithLambda(async (input) => {
const { directory, config } = input;

// Run commands in the generated directory
await $`cd ${directory} && git init`.quiet();

if (config.installDeps) {
await $`cd ${directory} && npm install`.quiet();
}

return { directory };
});
\```

## Create Dockerfile

\```dockerfile
FROM oven/bun:1.1.31
WORKDIR /app
LABEL cyanprint.dev=true
COPY package.json bun.lockb ./
RUN bun install
COPY . .
CMD ["bun", "run", "index.ts"]
\```

See [Plugin API Reference](/developer/plugins/reference/sdk/input-output).
````

### How-to Guides

#### `how-to/run-commands.mdx`

````mdx
# Run Shell Commands

Execute commands in the generated project directory.

## Using Bun Shell

\```ts
import { $ } from 'bun';

StartPluginWithLambda(async (input) => {
const { directory } = input;

// Run git init
await $`cd ${directory} && git init`;

// Run npm install
await $`cd ${directory} && npm install`;

return { directory };
});
\```

## Using Node.js child_process

\```ts
import { exec } from 'child_process';
import { promisify } from 'util';

const execAsync = promisify(exec);

StartPluginWithLambda(async (input) => {
const { directory } = input;

await execAsync('git init', { cwd: directory });

return { directory };
});
\```
````

#### `how-to/modify-files.mdx`

````mdx
# Modify Generated Files

Read and modify files in the generated directory.

\```ts
import _ as fs from 'fs/promises';
import _ as path from 'path';

StartPluginWithLambda(async (input) => {
const { directory } = input;

// Read a file
const readmePath = path.join(directory, 'README.md');
const content = await fs.readFile(readmePath, 'utf-8');

// Modify and write back
const updated = content + '\n\n## Generated by CyanPrint';
await fs.writeFile(readmePath, updated);

return { directory };
});
\```
````

#### `how-to/conditional-execution.mdx`

````mdx
# Conditional Execution

Run plugin logic based on config.

\```ts
StartPluginWithLambda(async (input) => {
const { directory, config } = input;
const cfg = config as { git?: boolean; deps?: boolean };

if (cfg.git) {
await $`cd ${directory} && git init`;
}

if (cfg.deps) {
await $`cd ${directory} && npm install`;
}

return { directory };
});
\```

In your template's `cyan.yaml`:

\```yaml
plugins:

- name: myorg/my-plugin
  config:
  git: true
  deps: false
  \```
````

### Reference

#### `reference/sdk/input-output.mdx`

````mdx
# Plugin Input/Output

## PluginInput

\```ts
interface PluginInput {
directory: string; // Path to generated project files
config: unknown; // Plugin config from template
}
\```

## PluginOutput

\```ts
interface PluginOutput {
directory: string; // Must return the same directory
}
\```

## Example

\```ts
StartPluginWithLambda(async (input) => {
const { directory, config } = input;

// Access directory: /workspace/output/
// Access config: whatever the template defined

return { directory };
});
\```
````

#### `reference/sdk/start-plugin.mdx`

````mdx
# StartPluginWithLambda

Register a plugin function.

\```ts
import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';

StartPluginWithLambda(async (input) => {
// Plugin logic here
return { directory: input.directory };
});
\```

## Port

Plugins listen on port **5552** and handle:

- POST `/api/plug` - Execute plugin logic
````

### Explanation

#### `explanation/what-are-plugins.mdx`

```mdx
# What Are Plugins?

Plugins run **after** all processors have completed file generation.

## Execution Order

1. Template collects user input
2. Processors transform files
3. **Plugins run post-processing**

## Common Use Cases

| Use Case             | Example                      |
| -------------------- | ---------------------------- |
| Initialize git       | `git init`                   |
| Install dependencies | `npm install`, `bun install` |
| Run formatters       | `prettier --write .`         |
| Set up hooks         | `husky install`              |
| Create symlinks      | Link config files            |

## Key Difference from Processors

- **Processors**: Transform file content
- **Plugins**: Run commands and operations on generated files
```

#### `explanation/plugins-vs-processors.mdx`

```mdx
# Plugins vs Processors

## Processors

- Transform file **content**
- Have access to `CyanFileHelper`
- Process individual files
- Run during file generation

## Plugins

- Run **commands** and operations
- Access the entire directory
- Post-processing after generation
- Run after all processors complete

## When to Use Which?

| Need                           | Use       |
| ------------------------------ | --------- |
| Template variable substitution | Processor |
| Run npm install                | Plugin    |
| Transform file syntax          | Processor |
| Initialize git repo            | Plugin    |
| Both                           | Both!     |
```

#### `explanation/execution-order.mdx`

````mdx
# Execution Order

\```mermaid
graph LR
A[Template] --> B[Processor 1]
B --> C[Processor 2]
C --> D[Plugin 1]
D --> E[Plugin 2]
E --> F[Output]
\```

## Sequence

1. Template returns Cyan config
2. Processors run in order (transform files)
3. Plugins run in order (post-processing)
4. Final output delivered to user
````

## Success Criteria

- [ ] Explains plugin capabilities clearly
- [ ] Documents how to run commands
- [ ] SDK reference complete
- [ ] Explains plugins vs processors
- [ ] No content duplication
- [ ] Build succeeds
