# Sub-Plan: Developer Processors (Phase 6 of 7)

## Goal

Create processor documentation explaining WHY processors exist, their stateless nature, and how to build custom file transformers.

## Expected Files

| File                                | Description                                                    | Links To                                              |
| ----------------------------------- | -------------------------------------------------------------- | ----------------------------------------------------- |
| `developer/processors/index.mdx`    | Overview of processor development                              | tutorials/first-processor, explanation/why-processors |
| **Tutorials**                       |                                                                |                                                       |
| `tutorials/meta.json`               | Navigation for tutorials                                       | -                                                     |
| `tutorials/first-processor.mdx`     | Create a basic processor that transforms files                 | reference/sdk/file-helper                             |
| **How-to Guides**                   |                                                                |                                                       |
| `how-to/meta.json`                  | Navigation for how-tos                                         | -                                                     |
| `how-to/resolve-all-files.mdx`      | Load all files into memory with resolveAll()                   | reference/sdk/file-helper                             |
| `how-to/lazy-load-files.mdx`        | Get file references without content using get()                | reference/sdk/file-helper                             |
| `how-to/stream-large-files.mdx`     | Stream large files with readAsStream()                         | reference/sdk/file-helper                             |
| `how-to/copy-files.mdx`             | Copy files directly without loading                            | reference/sdk/file-helper                             |
| `how-to/access-config.mdx`          | Access processor config from template                          | reference/sdk/input-output                            |
| `how-to/push-to-registry.mdx`       | Build and publish processor                                    | -                                                     |
| **Reference**                       |                                                                |                                                       |
| `reference/meta.json`               | Navigation for reference                                       | -                                                     |
| `reference/project-structure.mdx`   | Processor project structure                                    | -                                                     |
| `reference/cyan-yaml.mdx`           | cyan.yaml format for processors                                | -                                                     |
| `reference/dockerfile.mdx`          | Processor Dockerfile                                           | -                                                     |
| `reference/sdk/index.mdx`           | SDK overview                                                   | -                                                     |
| `reference/sdk/start-processor.mdx` | StartProcessorWithLambda API                                   | -                                                     |
| `reference/sdk/file-helper.mdx`     | CyanFileHelper API (resolveAll, read, get, readAsStream, copy) | -                                                     |
| `reference/sdk/input-output.mdx`    | ProcessorInput/ProcessorOutput interfaces                      | -                                                     |
| `reference/sdk/types.mdx`           | Type definitions                                               | -                                                     |
| **Explanation**                     |                                                                |                                                       |
| `explanation/meta.json`             | Navigation for explanation                                     | -                                                     |
| `explanation/why-processors.mdx`    | Why processors exist (different templating, custom logic)      | -                                                     |
| `explanation/stateless-nature.mdx`  | Processors are stateless                                       | -                                                     |
| `explanation/read-write-dirs.mdx`   | read_dir vs write_dir mechanics                                | reference/sdk/input-output                            |
| `explanation/memory-loading.mdx`    | All files loaded into memory implications                      | -                                                     |
| `explanation/input-config.mdx`      | Config structure from template                                 | -                                                     |

## Directory Structure

```
content/docs/developer/processors/
├── index.mdx
├── meta.json
├── tutorials/
│   ├── meta.json
│   └── first-processor.mdx
├── how-to/
│   ├── meta.json
│   ├── resolve-all-files.mdx
│   ├── lazy-load-files.mdx
│   ├── stream-large-files.mdx
│   ├── copy-files.mdx
│   ├── access-config.mdx
│   └── push-to-registry.mdx
├── reference/
│   ├── meta.json
│   ├── project-structure.mdx
│   ├── cyan-yaml.mdx
│   ├── dockerfile.mdx
│   └── sdk/
│       ├── meta.json
│       ├── index.mdx
│       ├── start-processor.mdx
│       ├── file-helper.mdx
│       ├── input-output.mdx
│       └── types.mdx
└── explanation/
    ├── meta.json
    ├── why-processors.mdx
    ├── stateless-nature.mdx
    ├── read-write-dirs.mdx
    ├── memory-loading.mdx
    └── input-config.mdx
```

## Content Strategy

| Content         | Location                          | Notes                                      |
| --------------- | --------------------------------- | ------------------------------------------ |
| Why processors  | `explanation/why-processors.mdx`  | Different templating engines, custom logic |
| CyanFileHelper  | `reference/sdk/file-helper.mdx`   | Core API for file operations               |
| Input/Output    | `reference/sdk/input-output.mdx`  | Processor contracts                        |
| Read/Write dirs | `explanation/read-write-dirs.mdx` | Path mechanics                             |

## Processor Capabilities (VERIFIED from SDK)

Based on `helium/sdks/node/src/domain/core/fs/`:

```typescript
class CyanFileHelper {
  // Load ALL files with content into memory
  resolveAll(): VirtualFile[];

  // Load specific files with content
  read(glob: CyanGlob): VirtualFile[];

  // Get file references WITHOUT content (lazy)
  get(glob: CyanGlob): VirtualFileReference[];

  // Stream large files (for memory efficiency)
  readAsStream(glob: CyanGlob): VirtualFileStream[];

  // Copy files directly to output without loading
  copy(glob: CyanGlob): void;
}

interface VirtualFile {
  content: string;
  relative: string; // Path relative to read_dir
  writeFile(): void; // Write to write_dir
}

interface ProcessorInput {
  readDirectory: string; // /workspace/cyanprint/
  writeDirectory: string; // /workspace/output/
  globs: CyanGlob[];
  config: unknown; // From template's processor config
}

interface ProcessorOutput {
  directory: string; // Must be input.writeDirectory
}
```

## Technical Approach

### `index.mdx`

```mdx
# Processor Development

Processors transform template files. The default processor uses Eta templating, but you can create processors for any transformation.

## Why Create a Custom Processor?

- Different templating syntax (Jinja, Go templates, Mustache)
- Custom conditional logic (loops, if/else)
- Binary file transformations
- Multi-step processing pipelines

[Learn why processors exist →](/developer/processors/explanation/why-processors)

## Quick Links

- [First Processor Tutorial](/developer/processors/tutorials/first-processor)
- [CyanFileHelper API](/developer/processors/reference/sdk/file-helper)
```

### Tutorials

#### `tutorials/first-processor.mdx`

````mdx
# Your First Processor

Create a simple processor that transforms files.

## Create Project

\```bash
mkdir my-processor
cd my-processor
bun init
bun add @atomicloud/cyan-sdk
\```

## Create Processor Logic

`index.ts`:

\```ts
import { StartProcessorWithLambda } from '@atomicloud/cyan-sdk';

StartProcessorWithLambda(async (input, fileHelper) => {
const files = fileHelper.resolveAll();

files.forEach(file => {
// Transform content
file.content = file.content.toUpperCase();
file.writeFile();
});

return { directory: input.writeDirectory };
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

See [CyanFileHelper API](/developer/processors/reference/sdk/file-helper).
````

### How-to Guides

#### `how-to/resolve-all-files.mdx`

````mdx
# Resolve All Files

Load all files into memory with full content.

\```ts
StartProcessorWithLambda(async (input, fileHelper) => {
const files = fileHelper.resolveAll();

files.forEach(file => {
console.log(file.relative); // Path relative to read_dir
console.log(file.content); // Full file content
file.writeFile(); // Write to write_dir
});

return { directory: input.writeDirectory };
});
\```

**Best for:** Small to medium files where you need full content.

**Avoid with:** Very large files (use streaming instead).
````

#### `how-to/lazy-load-files.mdx`

````mdx
# Lazy Load Files

Get file references without loading content.

\```ts
StartProcessorWithLambda(async (input, fileHelper) => {
const refs = fileHelper.get({ root: 'templates', glob: '\*_/_' });

refs.forEach(ref => {
console.log(ref.relative); // Path available
// ref.content NOT available - must load explicitly

    // Load content when needed
    const content = await ref.load();

});

return { directory: input.writeDirectory };
});
\```

**Best for:** Conditional processing where you may not need all files.
````

#### `how-to/stream-large-files.mdx`

````mdx
# Stream Large Files

Stream files for memory efficiency.

\```ts
StartProcessorWithLambda(async (input, fileHelper) => {
const streams = fileHelper.readAsStream({ root: 'assets', glob: '\*_/_' });

for await (const stream of streams) {
// Process chunk by chunk
let content = '';
for await (const chunk of stream.read()) {
content += chunk;
}
// ... process content
}

return { directory: input.writeDirectory };
});
\```

**Best for:** Large binary files or when memory is constrained.
````

#### `how-to/copy-files.mdx`

````mdx
# Copy Files Directly

Copy files without loading into memory.

\```ts
StartProcessorWithLambda(async (input, fileHelper) => {
// Process some files
const textFiles = fileHelper.read({ root: 'templates', glob: '\*_/_.md' });
textFiles.forEach(f => {
f.content = processContent(f.content);
f.writeFile();
});

// Copy others directly
fileHelper.copy({ root: 'static', glob: '\*_/_' });

return { directory: input.writeDirectory };
});
\```

**Best for:** Static assets that don't need transformation.
````

#### `how-to/access-config.mdx`

````mdx
# Access Processor Config

Access config passed from template.

Template defines:

\```ts
processors: [{
name: 'myorg/my-processor',
files: [...],
config: {
customSetting: true,
features: ['docker', 'ci']
}
}]
\```

In processor:

\```ts
interface MyConfig {
customSetting: boolean;
features: string[];
}

StartProcessorWithLambda(async (input, fileHelper) => {
const cfg = input.config as MyConfig;

if (cfg.customSetting) {
// ...
}
});
\```
````

### Reference

#### `reference/sdk/file-helper.mdx`

````mdx
# CyanFileHelper API

## Methods

### `resolveAll()`

Load all files matching the processor's globs.

\```ts
const files = fileHelper.resolveAll();
// files: VirtualFile[]
\```

### `read(glob: CyanGlob)`

Load specific files with content.

\```ts
const files = fileHelper.read({ root: 'templates', glob: '\*_/_.md' });
\```

### `get(glob: CyanGlob)`

Get file references without content (lazy).

\```ts
const refs = fileHelper.get({ root: 'templates', glob: '\*_/_' });
// refs: VirtualFileReference[]
\```

### `readAsStream(glob: CyanGlob)`

Stream files for large content.

\```ts
const streams = fileHelper.readAsStream({ root: 'assets', glob: '\*_/_' });
// streams: VirtualFileStream[]
\```

### `copy(glob: CyanGlob)`

Copy files directly without loading.

\```ts
fileHelper.copy({ root: 'static', glob: '\*_/_' });
\```

## VirtualFile

| Property   | Type   | Description               |
| ---------- | ------ | ------------------------- |
| `content`  | string | File contents             |
| `relative` | string | Path relative to read_dir |

| Method        | Description             |
| ------------- | ----------------------- |
| `writeFile()` | Write file to write_dir |
````

#### `reference/sdk/input-output.mdx`

````mdx
# Processor Input/Output

## ProcessorInput

\```ts
interface ProcessorInput {
readDirectory: string; // /workspace/cyanprint/
writeDirectory: string; // /workspace/output/
globs: CyanGlob[];
config: unknown; // From template's processor config
}
\```

## ProcessorOutput

\```ts
interface ProcessorOutput {
directory: string; // Must be input.writeDirectory
}
\```
````

### Explanation

#### `explanation/why-processors.mdx`

```mdx
# Why Processors Exist

The default processor uses Eta templating with `var__` tags. But you might need:

## Different Templating Engines

| Engine       | Use Case             |
| ------------ | -------------------- |
| Eta          | Default, lightweight |
| Jinja        | Python-style syntax  |
| Go templates | Helm/Kubernetes      |
| Mustache     | Logic-less templates |

## Custom Logic

- Loops and conditionals
- File filtering
- Path transformations
- Binary file handling

## Processing Pipelines

Chain multiple processors for complex transformations.
```

#### `explanation/stateless-nature.mdx`

```mdx
# Stateless Nature

Processors are **stateless**. They only access files through `CyanFileHelper`.

## Implications

- No database connections
- No file system access outside read/write dirs
- No network calls (unless explicitly coded)
- Same input → same output

## Why?

Ensures reproducibility and security in containerized execution.
```

#### `explanation/read-write-dirs.mdx`

```mdx
# Read and Write Directories

## readDirectory (`/workspace/cyanprint/`)

Contains files from the blob image. Read-only access through `CyanFileHelper`.

## writeDirectory (`/workspace/output/`)

Where processed files are written. Use `file.writeFile()` to write here.

## Important

Never access `/workspace` directly. Always use the provided paths from `input`.
```

#### `explanation/memory-loading.mdx`

```mdx
# Memory Loading

**All files are loaded into memory** when using `resolveAll()`.

## Implications

- Fast processing
- No streaming (entire file must fit in memory)
- Be cautious with large binary files

## Best Practices

- Use `get()` for lazy loading
- Use `readAsStream()` for large files
- Use `copy()` for static files
```

## Success Criteria

- [ ] Explains WHY processors exist
- [ ] Documents stateless nature
- [ ] Covers memory loading implications
- [ ] SDK reference covers all CyanFileHelper methods
- [ ] No content duplication
- [ ] Build succeeds
