# Phase 2: User Documentation

## Source

- Ticket: CU-86et8z80y
- Commit: `docs: add user documentation`

## Objective

Create user documentation using Divio methodology for users who install and use templates.

## Files to Create/Modify

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

## Content Guidelines

### 01-getting-started.mdx (Tutorial)

- **Learning-oriented** - follow step by step
- Steps:
  1. Prerequisites (system requirements)
  2. Install the CLI
  3. Search for a template
  4. Run a template
  5. See the generated output
- Time estimate: 5-10 minutes

### 02-first-template.mdx (Tutorial)

- **Learning-oriented** - practical walkthrough
- Use a real example template from the registry
- Show the full workflow:
  1. Browse registry for template
  2. Run `cyanprint init` with template
  3. Answer prompts
  4. Explore generated files
- Include screenshots if possible (placeholder)

### 03-install-cli.mdx (How-to Guide)

- **Problem-oriented** - practical steps
- Platform-specific sections with tabs:
  - macOS (Homebrew, manual)
  - Linux (apt, yum, manual)
  - Windows (scoop, chocolatey, manual)
- Include verification steps

### 04-search-templates.mdx (How-to Guide)

- **Problem-oriented** - finding templates
- Methods:
  - CLI search: `cyanprint search`
  - Web registry browsing
  - Filtering by language, tags
- Tips for evaluating templates

### 05-update-templates.mdx (How-to Guide)

- **Problem-oriented** - keeping projects updated
- When to update
- How to re-run a template
- Handling merge conflicts

### 06-cli-commands.mdx (Reference)

- **Information-oriented** - complete listing
- Summarize commands from iridium docs:
  - `cyanprint init` - Initialize from template
  - `cyanprint search` - Search templates
  - `cyanprint login` - Authenticate
  - `cyanprint config` - Configuration
  - `cyanprint update` - Update CLI
- Include flags and options

### 07-registry.mdx (Reference)

- **Information-oriented** - web UI usage
- Features:
  - Browsing templates
  - Filtering and search
  - Template details page
  - Version history
- Screenshots (placeholders)

### 08-template-lifecycle.mdx (Explanation)

- **Understanding-oriented** - how it works
- Topics:
  - What happens when you run a template
  - Template versioning
  - Registry storage
  - Execution sandboxing
- High-level, no code

## Verification

After completion:

1. Run `direnv exec . pls build` to verify build succeeds
2. Check all internal links work
3. Verify tutorials are followable

## Definition of Done

- [ ] User index page updated
- [ ] Getting started tutorial created
- [ ] First template tutorial created
- [ ] CLI installation guide created
- [ ] Search templates guide created
- [ ] Update templates guide created
- [ ] CLI commands reference created
- [ ] Registry reference created
- [ ] Template lifecycle explanation created
- [ ] Build succeeds
