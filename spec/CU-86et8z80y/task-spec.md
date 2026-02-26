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

## Acceptance Criteria

### Phase 1: Contributor Documentation

- [ ] Architecture overview page with Mermaid diagram showing platform components
- [ ] Repository index page with summaries for all 5 repos (zinc, argon, iridium, boron, helium)
- [ ] Existing files renamed with consistent numbering

### Phase 2: User Documentation

- [ ] Getting started tutorial (install CLI, find template, run it)
- [ ] First template walkthrough tutorial
- [ ] How-to guides for CLI installation, search, updates
- [ ] CLI command reference (summarized from iridium docs)
- [ ] Registry usage guide
- [ ] Template lifecycle explanation

### Phase 3: Developer Documentation

- [ ] Core concepts page (Cyan object, globs, inquirer, determinism)
- [ ] Templates section (9 pages) with multi-language tabs
- [ ] Processors section (3 pages) with multi-language tabs
- [ ] Plugins section (2 pages) with multi-language tabs
- [ ] SDK reference pages for TypeScript, .NET, and Python

## Definition of Done

- [ ] All acceptance criteria met
- [ ] Build succeeds: `direnv exec . pls build`
- [ ] Dev server works: `direnv exec . pls dev`
- [ ] Tab functionality works (language tabs persist across pages)
- [ ] Mermaid diagrams render correctly
- [ ] CodeHike annotations work in code blocks
- [ ] Ticket ID included in commit messages
- [ ] PR created with all 3 phases

## Out of Scope

- Writing documentation for individual repositories (link to existing docs instead)
- API documentation beyond SDK interfaces
- Video tutorials
- Interactive playgrounds

## Technical Constraints

- **Framework**: Fumadocs on Next.js 15 with static export
- **Content location**: `content/docs/` with MDX files
- **Code examples**: Use `<Tabs groupId="sdk-language" persist>` for all multi-language examples
- **Diagrams**: Use Mermaid for architecture diagrams
- **Code highlighting**: CodeHike with annotations
- **Languages**: TypeScript, .NET, Python SDK examples in all developer tutorials

## Context

### Platform Architecture

```text
┌─────────────────────────────────────────────────────────────────┐
│                     CYANPRINT PLATFORM                          │
├─────────────────────────────────────────────────────────────────┤
│  Argon (Web UI) ──→ Zinc (Registry API) ──→ Storage/DB         │
│                              ↑                                   │
│  Iridium (CLI) ───────────────┘                                  │
│       │                                                          │
│       └──→ Coordinator ──→ Boron (Docker Executor)              │
│                                    │                             │
│  Helium SDK ◄──────────────────────┘                             │
│  (Templates/Processors/Plugins)                                  │
└─────────────────────────────────────────────────────────────────┘
```

### Repositories

| Repo        | Language       | Purpose                                             |
| ----------- | -------------- | --------------------------------------------------- |
| **zinc**    | .NET 8         | Registry API (PostgreSQL, Redis, MinIO)             |
| **argon**   | SvelteKit      | Registry Web UI                                     |
| **iridium** | Rust           | Main CLI (cyanprint, coordinator, prompt, registry) |
| **boron**   | Docker         | Isolated template execution                         |
| **helium**  | TS/.NET/Python | SDKs for templates, processors, plugins             |

### Key Patterns

**Tabs for Multi-Language Examples:**

```mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

<Tabs groupId="sdk-language" items={['TypeScript', '.NET', 'Python']} persist>
  <Tab value="TypeScript">// TypeScript code</Tab>
  <Tab value=".NET">// C# code</Tab>
  <Tab value="Python">// Python code</Tab>
</Tabs>
```

**Mermaid Architecture Diagrams:**

```mdx
<Mermaid
  chart={`
graph TD
    A[User] --> B[Iridium CLI]
    B --> C[Zinc Registry]
`}
/>
```

### References

- Helium SDK TypeScript: `../helium/packages/cyan-sdk/`
- Helium SDK .NET: `../helium/sulfone-helium/`
- Helium SDK Python: `../helium/cyanprintsdk/`
- Iridium CLI docs: `../iridium/docs/developer/`
- Zinc README: `../zinc/README.md`
- Argon README: `../argon/README.md`
- Boron README: `../boron/README.md`

## Files to Create/Modify

### Phase 1: Contributor Documentation (Commit: `docs: add contributor architecture and repository index`)

| Action | File                                                    | Type        | Description                                                             |
| ------ | ------------------------------------------------------- | ----------- | ----------------------------------------------------------------------- |
| CREATE | `content/docs/contributor/01-architecture.mdx`          | Explanation | Platform architecture with Mermaid diagram, data flow, key technologies |
| CREATE | `content/docs/contributor/02-repositories.mdx`          | Reference   | Index of all 5 repos with summaries, tech stacks, links to docs         |
| RENAME | `02_CommitConventions.md` → `03-commit-conventions.mdx` | Reference   | (existing file, just rename)                                            |
| RENAME | `03_Changelog.md` → `04-changelog.mdx`                  | Reference   | (existing file, just rename)                                            |

### Phase 2: User Documentation (Commit: `docs: add user documentation`)

| Action | File                                          | Type        | Description                                                |
| ------ | --------------------------------------------- | ----------- | ---------------------------------------------------------- |
| UPDATE | `content/docs/user/index.mdx`                 | Overview    | Update from placeholder - overview of user docs            |
| CREATE | `content/docs/user/01-getting-started.mdx`    | Tutorial    | Step-by-step: install CLI, find template, run it           |
| CREATE | `content/docs/user/02-first-template.mdx`     | Tutorial    | Walk through creating a project from a template            |
| CREATE | `content/docs/user/03-install-cli.mdx`        | How-to      | Platform-specific CLI installation (macOS, Linux, Windows) |
| CREATE | `content/docs/user/04-search-templates.mdx`   | How-to      | Using registry search, filtering, browsing                 |
| CREATE | `content/docs/user/05-update-templates.mdx`   | How-to      | Updating projects when templates change                    |
| CREATE | `content/docs/user/06-cli-commands.mdx`       | Reference   | Summarized CLI command reference (from iridium docs)       |
| CREATE | `content/docs/user/07-registry.mdx`           | Reference   | Using the web registry (Argon)                             |
| CREATE | `content/docs/user/08-template-lifecycle.mdx` | Explanation | How templates work (high-level)                            |

### Phase 3: Developer Documentation (Commit: `docs: add developer documentation`)

| Action | File                                                           | Type        | Description                                                                                           |
| ------ | -------------------------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------- |
| UPDATE | `content/docs/developer/index.mdx`                             | Overview    | Update from placeholder - overview of 3 artifact types                                                |
| CREATE | `content/docs/developer/01-concepts.mdx`                       | Explanation | Core concepts: Cyan object, globs, inquirer, determinism (with tabs)                                  |
| CREATE | `content/docs/developer/templates/meta.json`                   | Config      | Navigation metadata for templates section                                                             |
| CREATE | `content/docs/developer/templates/01-glob-and-copy.mdx`        | Tutorial    | **Tutorial 1:** Basic glob patterns and file copying - no templating yet                              |
| CREATE | `content/docs/developer/templates/02-default-processor.mdx`    | Tutorial    | **Tutorial 2:** Using the default processor with Eta templating (reference: ketone.default-processor) |
| CREATE | `content/docs/developer/templates/03-adding-interaction.mdx`   | Tutorial    | **Tutorial 3:** Adding user interaction (questions and answers)                                       |
| CREATE | `content/docs/developer/templates/04-inquirer-methods.mdx`     | Reference   | Inquirer API: text, select, checkbox, confirm, password, date methods - tabs                          |
| CREATE | `content/docs/developer/templates/05-randomness.mdx`           | How-to      | Working with randomness/interdeterministic values using determinism                                   |
| CREATE | `content/docs/developer/templates/06-shared-answers.mdx`       | How-to      | Making multiple templates share the same answers (no re-prompting)                                    |
| CREATE | `content/docs/developer/templates/07-multiple-templates.mdx`   | How-to      | Using multiple templates together (template composition)                                              |
| CREATE | `content/docs/developer/templates/08-plugins-in-templates.mdx` | How-to      | Using plugins when writing templates                                                                  |
| CREATE | `content/docs/developer/templates/09-testing.mdx`              | How-to      | Testing templates locally                                                                             |
| CREATE | `content/docs/developer/templates/10-publishing.mdx`           | How-to      | Publishing to registry                                                                                |
| CREATE | `content/docs/developer/templates/11-api-reference.mdx`        | Reference   | ICyanTemplate, IInquirer, IDeterminism interfaces - tabs                                              |
| CREATE | `content/docs/developer/templates/12-lifecycle.mdx`            | Explanation | How templates are executed                                                                            |
| CREATE | `content/docs/developer/templates/13-best-practices.mdx`       | Explanation | Template design patterns                                                                              |
| CREATE | `content/docs/developer/processors/meta.json`                  | Config      | Navigation metadata for processors section                                                            |
| CREATE | `content/docs/developer/processors/01-first-processor.mdx`     | Tutorial    | Create a simple file processor - tabs                                                                 |
| CREATE | `content/docs/developer/processors/02-file-operations.mdx`     | How-to      | Reading, writing, transforming files - tabs                                                           |
| CREATE | `content/docs/developer/processors/03-api-reference.mdx`       | Reference   | ICyanProcessor, CyanFileHelper, CyanProcessorInput - tabs                                             |
| CREATE | `content/docs/developer/plugins/meta.json`                     | Config      | Navigation metadata for plugins section                                                               |
| CREATE | `content/docs/developer/plugins/01-first-plugin.mdx`           | Tutorial    | Create a simple plugin - tabs                                                                         |
| CREATE | `content/docs/developer/plugins/02-api-reference.mdx`          | Reference   | ICyanPlugin, CyanPluginInput, PluginOutput - tabs                                                     |
| CREATE | `content/docs/developer/sdk/meta.json`                         | Config      | Navigation metadata for SDK section                                                                   |
| CREATE | `content/docs/developer/sdk/typescript.mdx`                    | Reference   | TypeScript SDK full API reference with examples                                                       |
| CREATE | `content/docs/developer/sdk/dotnet.mdx`                        | Reference   | .NET SDK full API reference with examples                                                             |
| CREATE | `content/docs/developer/sdk/python.mdx`                        | Reference   | Python SDK full API reference with examples                                                           |

### Summary

| Phase                 | Create | Update | Rename | Total  |
| --------------------- | ------ | ------ | ------ | ------ |
| Phase 1 (Contributor) | 2      | 0      | 2      | 4      |
| Phase 2 (User)        | 8      | 1      | 0      | 9      |
| Phase 3 (Developer)   | 21     | 1      | 0      | 22     |
| **Total**             | **31** | **2**  | **2**  | **35** |
