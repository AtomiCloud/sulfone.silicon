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

Use Divio documentation system for Users and Developers. Use Fumadocs MDX with CodeHike and Tabs for multi-language code examples.

---

## CRITICAL REQUIREMENT: NO HALLUCINATIONS

**ALL documentation MUST be cross-verified against actual code and CLI.**

Before writing ANY documentation:

1. **Run actual CLI commands** to verify syntax:

   - `cyanprint --help` - list commands
   - `cyanprint create --help` - create options
   - `cyanprint update --help` - update options
   - `cyanprint push --help` - push options
   - `cyanprint daemon --help` - daemon options

2. **Read actual source code** from `../` repos:

   - `../iridium/` - CLI source and docs
   - `../helium/sdks/node/src/` - TypeScript SDK
   - `../helium/sulfone-helium/` - .NET SDK
   - `../helium/cyanprintsdk/` - Python SDK

3. **Check actual GitHub releases** for installation artifacts:

   - https://github.com/AtomiCloud/hydrogen.iridium/releases

4. **Verify URLs exist** before linking to them:
   - Registry: https://cyanprint.dev (NOT registry.cyanprint.dev)
   - Coordinator: http://coord.cyanprint.dev:9000

---

## Verified Facts (DO NOT CHANGE WITHOUT RE-VERIFICATION)

### CLI Commands (verified via `cyanprint --help`)

```
Commands:
  push    Publish a CyanPrint artifact
  create  Create a project from a CyanPrint template
  update  Update all templates in a project to their latest versions
  daemon  Starts the CyanPrint Coordinator locally daemon
```

**DO NOT document commands that don't exist:**

- NO `init` command - use `create` instead
- NO `login` command
- NO `config` command
- NO `search` command - use https://cyanprint.dev web UI
- NO `show` command
- NO `pin` / `unpin` commands
- NO `abort` / `continue` commands

### Template Reference Format (verified via `cyanprint create --help`)

```
Usage: cyanprint create [OPTIONS] <TEMPLATE_REF> [PATH]

TEMPLATE_REF format: <username>/<template_name>:<version>
Example: atomicloud/nextjs-dashboard:1.0.0
```

### Update Command (verified via `cyanprint update --help`)

```
Usage: cyanprint update [OPTIONS] [PATH]

Options:
  -c, --coordinator-endpoint <COORDINATOR_ENDPOINT>
  -i, --interactive    Enable interactive mode to select specific versions
```

Update behavior:

- Re-runs templates with same answers from state file
- Performs 3-way merge (template v1, template v2, current project)
- Use `--interactive` to modify answers before updating

### State File

Location: `.cyan_state.yaml` in project root

Contains:

- Template references and versions used
- Answers provided during template creation
- Used for 3-way merge during updates

### Registry URL

- **Web UI**: https://cyanprint.dev
- **NOT** registry.cyanprint.dev (doesn't exist)

### Coordinator

- **Hosted endpoint**: http://coord.cyanprint.dev:9000 (default)
- Users do NOT need Docker for normal usage
- `daemon` command only needed for local development/testing

### Installation Methods (from GitHub releases)

From https://github.com/AtomiCloud/hydrogen.iridium/releases:

| Platform    | Artifact                          |
| ----------- | --------------------------------- |
| Linux (x64) | `.tar.gz`, `.deb`, `.rpm`, `.apk` |
| Linux (arm) | `.tar.gz`, `.deb`, `.rpm`, `.apk` |
| macOS (x64) | `.tar.gz`                         |
| macOS (arm) | `.tar.gz`                         |
| Windows     | `.tar.gz`                         |
| Arch Linux  | `.pkg.tar.zst`                    |
| From source | `cargo install` from crates.io    |

### SDK Exports (verified from `../helium/sdks/node/src/main.ts`)

**Entry Points:**

- `StartTemplate` / `StartTemplateWithLambda`
- `StartProcessor` / `StartProcessorWithLambda`
- `StartPlugin` / `StartPluginWithLambda`

**Core Types:**

- `IInquirer` - User prompts
- `IDeterminism` - Deterministic random values
- `Cyan` - File operations
- `CyanFileHelper` - File utilities
- `CyanGlob` - Glob patterns

### IInquirer Methods (verified from `../helium/sdks/node/src/domain/core/inquirer.ts`)

| Method         | Return Type         | Description                   |
| -------------- | ------------------- | ----------------------------- |
| `text()`       | `Promise<string>`   | Text input                    |
| `select()`     | `Promise<string>`   | Single selection from list    |
| `checkbox()`   | `Promise<string[]>` | Multiple selections from list |
| `confirm()`    | `Promise<boolean>`  | Yes/no confirmation           |
| `password()`   | `Promise<string>`   | Masked password input         |
| `dateSelect()` | `Promise<string>`   | Date picker                   |

---

## Acceptance Criteria

### Phase 1: Contributor Documentation

- [ ] Architecture overview page with Mermaid diagram showing platform components
- [ ] Repository index page with summaries for all 5 repos (zinc, argon, iridium, boron, helium)
- [ ] Existing files renamed with consistent numbering

### Phase 2: User Documentation

- [ ] Getting started tutorial (install CLI, find template on cyanprint.dev, run `create`)
- [ ] First template walkthrough tutorial
- [ ] How-to guides for CLI installation (all platforms from releases)
- [ ] Update guide (3-way merge, interactive mode)
- [ ] Registry usage guide (cyanprint.dev web UI)
- [ ] Template lifecycle explanation

### Phase 3: Developer Documentation

- [ ] Core concepts page (Cyan object, globs, inquirer, determinism)
- [ ] Templates section with multi-language tabs
- [ ] Processors section with multi-language tabs
- [ ] Plugins section with multi-language tabs
- [ ] SDK reference pages for TypeScript, .NET, and Python

---

## Definition of Done

- [ ] All acceptance criteria met
- [ ] **ALL documentation cross-verified against actual CLI and source code**
- [ ] **ALL links verified to exist and be correct**
- [ ] Build succeeds: `direnv exec . pls build`
- [ ] Dev server works: `direnv exec . pls dev`
- [ ] Tab functionality works (language tabs persist across pages)
- [ ] Mermaid diagrams render correctly
- [ ] CodeHike annotations work in code blocks
- [ ] Ticket ID included in commit messages
- [ ] PR created with all 3 phases

---

## Files to Create/Modify

### Phase 1: Contributor Documentation

| File                                                            | Type        | Description                                                             |
| --------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------- |
| `content/docs/contributor/00-architecture.mdx`                  | Explanation | Platform architecture with Mermaid diagram, data flow, key technologies |
| `content/docs/contributor/01-repositories.mdx`                  | Reference   | Index of all 5 repos with summaries, tech stacks, links to docs         |
| Rename: `02_CommitConventions.md` → `02-commit-conventions.mdx` | Reference   | (existing file, rename)                                                 |
| Rename: `03_Changelog.md` → `03-changelog.mdx`                  | Reference   | (existing file, rename)                                                 |

### Phase 2: User Documentation

Use `meta.json` for ordering with proper page structure.

| File                                          | Type        | Description                                                                           |
| --------------------------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| `content/docs/user/index.mdx`                 | Overview    | Update from placeholder - overview of user docs                                       |
| `content/docs/user/00-getting-started.mdx`    | Tutorial    | Step-by-step: install CLI, browse cyanprint.dev, run `cyanprint create`               |
| `content/docs/user/01-cli-installation.mdx`   | How-to      | Platform-specific CLI installation (tar.gz, deb, rpm, apk, pkg.tar.zst from releases) |
| `content/docs/user/02-creating-projects.mdx`  | How-to      | Using `cyanprint create` with template references (`user/template:version`)           |
| `content/docs/user/03-search-templates.mdx`   | How-to      | Browsing and searching templates on cyanprint.dev (NOT a CLI command!)                |
| `content/docs/user/04-updating-projects.mdx`  | How-to      | Using `cyanprint update`, 3-way merge, `--interactive` mode                           |
| `content/docs/user/05-state-file.mdx`         | Reference   | `.cyan_state.yaml` format and purpose                                                 |
| `content/docs/user/06-registry-web.mdx`       | Reference   | Using the cyanprint.dev web registry                                                  |
| `content/docs/user/07-template-lifecycle.mdx` | Explanation | How templates are downloaded, executed in containers, files delivered                 |

### Phase 3: Developer Documentation

Use `meta.json` for ordering in each subdirectory.

#### Developer Overview

| File                                     | Type        | Description                                                  |
| ---------------------------------------- | ----------- | ------------------------------------------------------------ |
| `content/docs/developer/index.mdx`       | Overview    | Overview of 3 artifact types: templates, processors, plugins |
| `content/docs/developer/00-concepts.mdx` | Explanation | Core concepts: Cyan object, globs, inquirer, determinism     |

#### Templates Section (`content/docs/developer/templates/`)

| File                          | Type        | Description                                                                 |
| ----------------------------- | ----------- | --------------------------------------------------------------------------- |
| `meta.json`                   | Config      | Navigation metadata                                                         |
| `00-glob-and-copy.mdx`        | Tutorial    | Basic glob patterns and file copying - no templating                        |
| `01-default-processor.mdx`    | Tutorial    | Using the default processor with Eta templating                             |
| `02-adding-interaction.mdx`   | Tutorial    | Adding user interaction with IInquirer                                      |
| `03-inquirer-methods.mdx`     | Reference   | IInquirer API: text, select, checkbox, confirm, password, dateSelect - tabs |
| `04-randomness.mdx`           | How-to      | Working with randomness using IDeterminism                                  |
| `05-shared-answers.mdx`       | How-to      | Making multiple templates share the same answers                            |
| `06-multiple-templates.mdx`   | How-to      | Using multiple templates together (composition)                             |
| `07-plugins-in-templates.mdx` | How-to      | Using plugins when writing templates                                        |
| `08-testing.mdx`              | How-to      | Testing templates locally                                                   |
| `09-publishing.mdx`           | How-to      | Publishing to registry with `cyanprint push`                                |
| `10-api-reference.mdx`        | Reference   | ICyanTemplate, IInquirer, IDeterminism interfaces - tabs                    |
| `11-lifecycle.mdx`            | Explanation | How templates are executed in containers                                    |
| `12-best-practices.mdx`       | Explanation | Template design patterns                                                    |

#### Processors Section (`content/docs/developer/processors/`)

| File                     | Type      | Description                                               |
| ------------------------ | --------- | --------------------------------------------------------- |
| `meta.json`              | Config    | Navigation metadata                                       |
| `00-first-processor.mdx` | Tutorial  | Create a simple file processor - tabs                     |
| `01-file-operations.mdx` | How-to    | Reading, writing, transforming files - tabs               |
| `02-api-reference.mdx`   | Reference | ICyanProcessor, CyanFileHelper, CyanProcessorInput - tabs |

#### Plugins Section (`content/docs/developer/plugins/`)

| File                   | Type      | Description                                       |
| ---------------------- | --------- | ------------------------------------------------- |
| `meta.json`            | Config    | Navigation metadata                               |
| `00-first-plugin.mdx`  | Tutorial  | Create a simple plugin - tabs                     |
| `01-api-reference.mdx` | Reference | ICyanPlugin, CyanPluginInput, PluginOutput - tabs |

#### SDK Reference Section (`content/docs/developer/sdk/`)

| File                | Type      | Description                                     |
| ------------------- | --------- | ----------------------------------------------- |
| `meta.json`         | Config    | Navigation metadata                             |
| `00-typescript.mdx` | Reference | TypeScript SDK full API reference with examples |
| `01-dotnet.mdx`     | Reference | .NET SDK full API reference with examples       |
| `02-python.mdx`     | Reference | Python SDK full API reference with examples     |

---

## Technical Constraints

- **Framework**: Fumadocs on Next.js 15 with static export
- **Content location**: `content/docs/` with MDX files
- **File ordering**: Use `meta.json` files with `pages` array, files named with `00-`, `01-` prefixes
- **Code examples**: Use `<Tabs groupId="sdk-language" persist>` for all multi-language examples
- **Diagrams**: Use Mermaid for architecture diagrams
- **Code highlighting**: CodeHike with annotations
- **Languages**: TypeScript, .NET, Python SDK examples in all developer tutorials

---

## Key Patterns

### Tabs for Multi-Language Examples

````mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

<Tabs groupId="sdk-language" items={['TypeScript', '.NET', 'Python']} persist>
  <Tab value="TypeScript">

```ts
import { StartTemplateWithLambda } from '@atomicloud/cyan-sdk';

StartTemplateWithLambda(async (inquirer, determinism) => {
  const name = await inquirer.text({ message: 'Project name?', name: 'name' });
  return { processors: [{ name: 'main', files: [], config: { name } }] };
});
```
````

  </Tab>
  <Tab value=".NET">

```csharp
// .NET SDK example
```

  </Tab>
  <Tab value="Python">

```python
# Python SDK example
```

  </Tab>
</Tabs>
```

### Mermaid Architecture Diagrams

```mdx
<Mermaid
  chart={`
graph TD
    A[User] --> B[cyanprint CLI]
    B --> C[cyanprint.dev Registry]
    B --> D[Coordinator]
    D --> E[Boron Executor]
`}
/>
```

---

## References

**READ THESE BEFORE WRITING:**

- `../iridium/docs/developer/` - CLI documentation
- `../iridium/docs/developer/surfaces/cli/` - CLI command docs
- `../helium/sdks/node/src/` - TypeScript SDK source
- `../helium/sdks/node/src/main.ts` - SDK exports
- `../helium/sdks/node/src/domain/core/inquirer.ts` - IInquirer interface
- `../zinc/README.md` - Registry API
- `../argon/README.md` - Registry frontend
- `../boron/README.md` - Executor
