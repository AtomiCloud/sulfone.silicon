# Task Specification: [Si] Document the whole CyanPrint (CU-86et8z80y)

## Source

- Ticket: CU-86et8z80y
- System: ClickUp
- URL: https://app.clickup.com/t/86et8z80y

## Objective

Create comprehensive documentation for the CyanPrint platform with 3 audience segments:

1. **Users** - Install and use templates (minimal knowledge needed)
2. **Developers** - Create templates, processors, and plugins using the Helium SDK
3. **Contributors** - Develop the CyanPrint platform itself

Use Divio documentation system. Group by doc type (tutorials, how-to, reference, explanation) within each audience section. Use Fumadocs MDX with CodeHike and Tabs for multi-language code examples.

---

## CRITICAL REQUIREMENT: NO HALLUCINATIONS

**ALL documentation MUST be cross-verified against actual code and CLI.**

### Directories to Verify Against

| Directory                | Purpose                      |
| ------------------------ | ---------------------------- |
| `../zinc/`               | Registry API                 |
| `../argon/`              | Registry Web UI              |
| `../iridium/`            | CLI source                   |
| `../boron/`              | Executor                     |
| `../helium/`             | SDKs                         |
| `../helium/sdks/node/`   | TypeScript SDK               |
| `../helium/sdks/dotnet/` | .NET SDK                     |
| `../helium/sdks/python/` | Python SDK                   |
| `../../ketone/`          | Example templates/processors |

### Example Projects (from ketone/)

| Project                            | Type          | Description                      |
| ---------------------------------- | ------------- | -------------------------------- |
| `ketone/nix-init/`                 | Template      | Nix flake project initializer    |
| `ketone/workspace/`                | Template      | Workspace with CI, Docker, Helm  |
| `ketone/ketone.default-processor/` | Processor     | Default Eta templating processor |
| `ketone/cyan/`                     | Meta Template | Template for creating templates  |

### Before writing ANY documentation:

1. Run actual CLI commands (`cyanprint --help`, `cyanprint create --help`, etc.)
2. Read actual source code from the directories above
3. Verify URLs exist before linking
4. Give examples in ALL 3 SDK languages (TypeScript, Python, C#)

---

## CyanPrint Architecture (VERIFIED)

### Template Structure

```
template-repo/
├── cyan.yaml              # Metadata: username, name, description, processors, plugins
├── cyan/
│   ├── index.ts           # Template logic (StartTemplateWithLambda)
│   ├── template.Dockerfile    # Runs template (bun + index.ts)
│   ├── blob.Dockerfile        # Creates tarball of template files
│   ├── package.json       # Dependencies (@atomicloud/cyan-sdk)
│   ├── bun.lockb          # Lockfile
│   ├── templates/         # Files to process (with var__ __ tags)
│   └── functions/         # Helper functions (optional)
├── .github/workflows/     # CI: builds images, pushes to registry
│   ├── cd.yaml            # Build template + blob images, push
│   ├── ci.yaml            # Lint, test
│   └── ⚡reusable-cyanprint.yaml  # Reusable workflow
└── scripts/
    └── publish.sh         # cyanprint push template <blob> <ver> <template> <ver>
```

### Processor Structure

```
processor-repo/
├── cyan.yaml              # Metadata: username, name, description
├── Dockerfile             # Runs processor (bun + index.ts)
├── index.ts               # Processor logic (StartProcessorWithLambda)
├── package.json           # Dependencies
└── bun.lockb              # Lockfile
```

### cyan.yaml Format (Template)

```yaml
username: atomi
name: nix-init
description: CyanPrint Template to initialize Nix Flake project
project: https://github.com/AtomiCloud/ketone.nix-init
source: https://github.com/AtomiCloud/ketone.nix-init.git
email: admin@atomi.cloud
tags: ['atomi']
readme: cyan/README.MD
processors: ['cyan/default'] # List of processors to use
plugins: []
templates: [] # Nested templates (composition)
```

### cyan.yaml Format (Processor)

```yaml
username: cyan
name: default
description: CyanPrint's default shipped processor
project: https://github.com/AtomiCloud/ketone.default-processor
source: https://github.com/AtomiCloud/ketone.default-processor
email: ernest@atomi.cloud
tags:
  - default
  - cyanprint
readme: README.MD
```

### Default Processor (cyan/default)

The default processor uses **Eta templating engine**:

```typescript
// Configurable tag syntax
const varEtaConfig = {
  tags: ['var__', '__'], // Default tags
  // Can be customized via parser.varSyntax
};

// Example template file:
// Project name: var__name__
// Author: var__author__
```

**Config structure**

```typescript
{
  vars: { name: 'my-project', author: 'John' },
  parser: {
    varSyntax: [['var__', '__']]  // Can use custom tags
  }
}
```

### CI/CD Flow

1. On tag `v*.*.*`:
   - Build `template.Dockerfile` → template image
   - Build `blob.Dockerfile` → blob image (tarball of files)
   - Run `cyanprint push template --token <TOKEN> <blob_image> <blob_tag> <template_image> <template_tag>`

### Template Logic (index.ts)

```typescript
import { StartTemplateWithLambda, GlobType, type Cyan, type IInquirer, type IDeterminism } from '@atomicloud/cyan-sdk';

StartTemplateWithLambda(async (i: IInquirer, d: IDeterminism): Promise<Cyan> => {
  // Ask user questions
  const name = await i.text({
    message: 'Project name?',
    id: 'project-name',
    type: QuestionType.Text,
    desc: 'The name of the project',
  });

  // Return Cyan configuration
  return {
    processors: [
      {
        name: 'cyan/default',
        files: [
          {
            root: 'templates',
            glob: '**/*',
            exclude: [],
            type: GlobType.Template, // Process with Eta
          },
          {
            root: 'static',
            glob: '**/*',
            type: GlobType.Copy, // Copy as-is
          },
        ],
        config: {
          vars: { name },
          parser: { varSyntax: [['var__', '__']] },
        },
      },
    ],
  };
});
```

### IInquirer Methods (VERIFIED from SDK source)

```typescript
// Shorthand forms (recommended):
const name = await i.text('Project name?', 'project-name', 'Enter the project name');
const runtime = await i.select('Choose runtime?', ['Bun', '.NET', 'Go'], 'runtime', 'Select runtime');
const docker = await i.confirm('Enable Docker?', 'enable-docker', 'Add Docker support');
const features = await i.checkbox('Select features?', ['ESLint', 'Prettier'], 'features', 'Choose features');
const apiKey = await i.password('API Key?', 'api-key', 'Enter your API key');
const date = await i.dateSelect('Start date?', 'start-date', 'Project start date');

// Object forms (for validation):
const name = await i.text({
  type: QuestionType.Text,
  id: 'project-name',
  message: 'Project name?',
  desc: 'Enter a valid project name',
  validate: input => (input.length < 3 ? 'Must be 3+ chars' : null),
});
```

### Keys Concept (CRITICAL)

The `id` parameter is the **key**. If multiple questions have the same key, they will receive the **same answer**:

```typescript
// Both questions get the same answer!
const name1 = await i.text('Project name?', 'name', '...');
const name2 = await i.text('Confirm name?', 'name', '...'); // Same key = same answer
```

**Best practice:** Namespace your keys to avoid collisions:

```typescript
const projectName = await i.text('Project name?', 'my-template.project.name', '...');
```

### QuestionType Enum

| Value | Type       |
| ----- | ---------- |
| 0     | Text       |
| 1     | DateSelect |
| 2     | Select     |
| 3     | Checkbox   |
| 4     | Password   |
| 5     | Confirm    |

### GlobType Enum

- `GlobType.Template` (0) - Files processed by processor (Eta templating)
- `GlobType.Copy` (1) - Files copied as-is without modification

---

## Container Path Mechanics (CRITICAL)

### Execution Flow

```
BLOB IMAGE                    TEMPLATE IMAGE              PROCESSOR IMAGE
┌──────────────┐              ┌──────────────┐            ┌──────────────┐
│ Extracts     │              │ SDK on :5550 │            │ read_dir     │
│ tarball to   │──────────────│ /init        │────────────│/workspace/  │
│ /workspace/  │              │ /validate    │            │ cyanprint/   │
│ cyanprint/   │              └──────────────┘            │ write_dir    │
└──────────────┘            └──────────────┘
```

### Critical Paths

| Path                   | Owner       | Warning                                           |
| ---------------------- | ----------- | ------------------------------------------------- |
| `/workspace`           | Coordinator | **WILL BE OVERRIDDEN** - never store files here   |
| `/workspace/cyanprint` | Blob        | Extraction target; becomes processor's `read_dir` |

### SDK Port Assignments

| Artifact  | Port | Endpoints                                       |
| --------- | ---- | ----------------------------------------------- |
| Template  | 5550 | POST /api/template/init, /api/template/validate |
| Processor | 5551 | POST /api/process                               |
| Plugin    | 5552 | POST /api/plug                                  |

### Blob Dockerfile Requirements

```dockerfile
# Build context is REPO ROOT (.), NOT ./cyan/
# This is controlled by CI/CD workflow defaults

FROM alpine:3.21 as base
RUN apk add tar
FROM base as build
WORKDIR /src
COPY . .                    # Copies entire repo (filtered by .dockerignore)
RUN rm -rf cyan             # CRITICAL: Remove cyan/ directory before tarring
RUN mkdir -p /cyanprint/artifact
RUN tar -czvf /cyanprint/artifact/cyan.tar.gz / /src/
FROM base
LABEL cyanprint.dev=true
COPY --from=build /cyanprint/artifact/cyan.tar.gz /cyanprint/artifact/cyan.tar.gz
WORKDIR /workspace
CMD [ "tar", "-xzf", "/cyanprint/artifact/cyan.tar.gz", "-C", "/workspace/cyanprint", "--strip-components=1" ]
```

**Key Points**

- **Build context**: Repo root (`.`), NOT `./cyan/`
- **Must**: Remove `cyan/` directory before creating tarball
- **Must**: Extract to `/workspace/cyanprint/`
- **`.dockerignore`**: Controls what enters the blob (exclude `nix/`, `.github/`, `node_modules/`, etc.)

### Template Dockerfile Requirements

```dockerfile
FROM oven/bun:1.1.31
WORKDIR /app
LABEL cyanprint.dev=true
COPY package.json .
COPY bun.lockb .
RUN bun install
COPY . .
CMD [ "bun", "run", "index.ts" ]   # SDK hosts API on port 5550
```

**Key Points**

- **Must**: Host API on port 5550
- **SDK**: `StartTemplateWithLambda` handles `/init`, `/validate` automatically
- **Reads**: Blob files from `/workspace/cyanprint/`

### Processor Container

```typescript
StartProcessorWithLambda(async (input, fileHelper): Promise<ProcessorOutput> => {
  // fileHelper resolves files from read_dir (/workspace/cyanprint/)
  const files = fileHelper.resolveAll();

  // Each file has:
  // - content: string (file contents)
  // - relative: string (path relative to read_dir)
  // - writeFile(): writes to write_dir

  files.map(f => {
    f.content = processContent(f.content);
    f.writeFile(); // Writes to write_dir
  });

  return { directory: input.writeDir };
});
```

### CyanFileHelper Methods (VERIFIED from SDK)

```typescript
class CyanFileHelper {
  // Load ALL files with content into memory
  resolveAll(): VirtualFile[];

  // Load specific files with content
  read(glob: CyanGlob): VirtualFile[];

  // Get file references WITHOUT content (lazy loading)
  get(glob: CyanGlob): VirtualFileReference[];

  // Stream large files (for memory efficiency)
  readAsStream(glob: CyanGlob): VirtualFileStream[];

  // Copy files directly to output without loading
  copy(glob: CyanGlob): void;
}
```

**Best practices:**

- Use `resolveAll()` for small to medium files
- Use `get()` for lazy loading when you may not need all files
- Use `readAsStream()` for large binary files
- Use `copy()` for static files that don't need transformation

### Path References in index.ts

Paths in `files[].root` are relative to `/workspace/cyanprint/` (blob extraction point):

```typescript
files: [
  {
    root: 'templates', // → /workspace/cyanprint/templates/
    glob: '**/*',
    type: GlobType.Template,
  },
  {
    root: 'additional/bun', // → /workspace/cyanprint/additional/bun/
    glob: '**/*',
    type: GlobType.Template,
  },
];
```

### Publishing Workflow

**Recommended: Use buildx with multi-arch and --push flag:**

```bash
# Build and push template image (multi-arch)
docker buildx build --platform linux/amd64,linux/arm64 \
  -f cyan/template.Dockerfile \
  -t myorg/my-template:1.0.0 \
  --push .

# Build and push blob image (multi-arch)
docker buildx build --platform linux/amd64,linux/arm64 \
  -f cyan/blob.Dockerfile \
  -t myorg/my-template-blob:1.0.0 \
  --push .

# Register with CyanPrint
cyanprint push template --token $CYAN_TOKEN \
  myorg/my-template-blob 1.0.0 \
  myorg/my-template 1.0.0
```

### Meta Template

Use the meta template to scaffold new templates:

```bash
cyanprint create cyan/new my-first-template
```

This creates a complete template project structure with all necessary files.

### CLI Commands (VERIFIED from source)

```
cyanprint create <TEMPLATE_REF> [PATH]           # Create project from template
cyanprint update [PATH]                          # Update project to latest versions
cyanprint update -i                              # Interactive version selection
cyanprint daemon [VERSION]                       # Start local coordinator

cyanprint push template --token <TOKEN> <BLOB_IMG> <BLOB_TAG> <TEMPLATE_IMG> <TEMPLATE_TAG>
cyanprint push processor --token <TOKEN> <IMAGE> <TAG>
cyanprint push plugin --token <TOKEN> <IMAGE> <TAG>
```

---

## Sub-Plans

This task is split into 7 sub-plans for manageable implementation:

| Phase | Name                 | File                                                                           | Description                                                |
| ----- | -------------------- | ------------------------------------------------------------------------------ | ---------------------------------------------------------- |
| 1     | Repo Setup           | [plans/phase-0-repo-setup.md](plans/phase-0-repo-setup.md)                     | Infrastructure, directory structure with Divio segments    |
| 2     | Contributor Docs     | [plans/phase-1-contributor-docs.md](plans/phase-1-contributor-docs.md)         | Architecture, repository index (no Divio format)           |
| 3     | User Docs            | [plans/phase-2-user-docs.md](plans/phase-2-user-docs.md)                       | 1-minute start, installation, CLI reference (Divio format) |
| 4     | Developer Basics     | [plans/phase-3-developer-basics.md](plans/phase-3-developer-basics.md)         | Intro, architecture, quickstart (before 3 artifacts)       |
| 5     | Developer Templates  | [plans/phase-4-developer-templates.md](plans/phase-4-developer-templates.md)   | Templates with SDK reference inside (Divio format)         |
| 6     | Developer Processors | [plans/phase-5-developer-processors.md](plans/phase-5-developer-processors.md) | Processors with SDK reference inside (Divio format)        |
| 7     | Developer Plugins    | [plans/phase-6-developer-plugins.md](plans/phase-6-developer-plugins.md)       | Plugins with SDK reference inside (Divio format)           |

### Phase Overview

1. **Repo Setup** - Create directory structure with Divio segments (tutorials/, how-to/, reference/, explanation/)
2. **Contributor Docs** - Architecture diagrams, repository index, development setup (no Divio format)
3. **User Docs** - 1-minute getting started, installation with version pinning, CLI commands (Divio format)
4. **Developer Basics** - Introduction to 3 artifacts, architecture, quickstart using meta template (no Divio segments)
5. **Developer Templates** - Progressive tutorials, extensive how-tos (including keys, buildx), SDK reference (Divio format)
6. **Developer Processors** - Why processors, CyanFileHelper methods, stateless nature, SDK reference (Divio format)
7. **Developer Plugins** - Post-processing, running commands, SDK reference (Divio format)

### Key Structural Decisions

- **User docs**: 1-minute condensed start, installation includes version pinning
- **Developer basics**: Overview only, no Divio segments
- **Developer docs**: Divio format per artifact (templates/, processors/, plugins/)
- **SDK reference**: Inside each artifact section, not separate
- **No duplication**: Content linked via cross-references
- **Meta template**: Use `cyanprint create cyan/new` to scaffold templates
- **Buildx**: Recommend multi-arch builds with `--push` flag

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] ALL documentation cross-verified against actual CLI and source code
- [ ] ALL links verified (use browser MCP)
- [ ] ALL SDK examples in 3 languages (TypeScript, Python, C#)
- [ ] Build succeeds: `direnv exec . pls build`
- [ ] Dev server works: `direnv exec . pls dev`
- [ ] Pre-commit passes: `pre-commit run --all`
- [ ] Mermaid diagrams render correctly
- [ ] Mobile-friendly layout
- [ ] Tab functionality works (language tabs persist)
- [ ] CodeHike used to enrich docs experience ONLY when necessary
- [ ] Ticket ID included in commit messages

---

## Key Patterns

### Tabs for Multi-Language Examples (ALWAYS all 3 languages)

````mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

<Tabs groupId="sdk-language" items={['TypeScript', 'Python', 'C#']} persist>
  <Tab value="TypeScript">

```ts
import { StartTemplateWithLambda } from '@atomicloud/cyan-sdk';
```
````

  </Tab>
  <Tab value="Python">

```python
from cyanprintsdk import StartTemplateWithLambda
```

  </Tab>
  <Tab value="C#">

```csharp
using AtomiCloud.Cyan.SDK;
```

  </Tab>
</Tabs>
```

### Globbing Reference (Per SDK)

Each SDK handles globbing with its native library
| SDK | Library | Source File |
| --------- | ------------------------------------ | -------------------------------------------------------- |
| TypeScript | `glob` npm package | `sdks/node/src/domain/core/fs/cyan_fs_helper.ts` |
| Python | Built-in `glob` module | `sdks/python/cyanprintsdk/domain/core/fs/cyan_fs_helper.py` |
| .NET | `Microsoft.Extensions.FileSystemGlobbing` | `sdks/dotnet/sulfone-helium/Domain/Core/FileSystem/CyanFileHelper.cs` |

Common patterns

- `**/*` - All files recursively
- `**/.*` - Hidden files
- `**/*.ts` - All TypeScript files
- Exclude: `exclude: ['**/test/**', '**/node_modules/**']`

### Divio Doc Type Explanation

Each audience section should have a `how-to-use.mdx` explaining

- **Tutorials**: Learning-oriented, follow step-by-step
- **How-to Guides**: Problem-oriented, practical steps
- **Reference**: Information-oriented, complete listing
- **Explanation**: Understanding-oriented, why and how

---

## References

- `../iridium/docs/developer/` - CLI documentation
- `../helium/sdks/node/src/` - TypeScript SDK source
- `../helium/sdks/dotnet/` - .NET SDK source
- `../helium/sdks/python/` - Python SDK source
- `../helium/docs/developer/concepts/04-globtype.md` - GlobType concept
- `../../ketone/nix-init/` - Example template
- `../../ketone/workspace/` - Complex template with conditional files
- `../../ketone/ketone.default-processor/` - Default processor source
- `../../ketone/cyan/` - Meta template for creating templates
