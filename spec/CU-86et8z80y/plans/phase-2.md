# Phase 2: User Documentation

## Source

- Ticket: CU-86et8z80y
- Commit: `docs: add user documentation`

## CRITICAL: Verify Against Actual CLI

Before writing ANY documentation:

1. Run `cyanprint --help` to verify commands
2. Run `cyanprint create --help` for create options
3. Run `cyanprint update --help` for update options
4. Check GitHub releases for actual installation methods

## Verified CLI Commands (DO NOT INVENT NEW ONES)

```
Commands:
  push    Publish a CyanPrint artifact
  create  Create a project from a CyanPrint template
  update  Update all templates in a project to their latest versions
  daemon  Starts the CyanPrint Coordinator locally daemon
```

**DO NOT document these (they don't exist):**

- NO `init` command - use `create` instead
- NO `search` command - use cyanprint.dev web UI
- NO `login` command
- NO `config` command
- NO `show` command
- NO `pin/unpin` commands

## Objective

Create user documentation using Divio methodology for users who install and use templates.

## Files to Create/Modify

| Action | File                                          | Type        | Description                                                              |
| ------ | --------------------------------------------- | ----------- | ------------------------------------------------------------------------ |
| UPDATE | `content/docs/user/index.mdx`                 | Overview    | Update from placeholder - overview of user docs                          |
| CREATE | `content/docs/user/00-getting-started.mdx`    | Tutorial    | Step-by-step: install CLI, browse cyanprint.dev, run `cyanprint create`  |
| CREATE | `content/docs/user/01-cli-installation.mdx`   | How-to      | Install via brew, scoop, nix, fury, cargo with ACTUAL COMMANDS           |
| CREATE | `content/docs/user/02-creating-projects.mdx`  | How-to      | Using `cyanprint create` with template refs (CAN USE MULTIPLE TEMPLATES) |
| CREATE | `content/docs/user/03-search-templates.mdx`   | How-to      | Browse cyanprint.dev (NOT a CLI command!)                                |
| CREATE | `content/docs/user/04-updating-projects.mdx`  | How-to      | Using `cyanprint update`, 3-way merge, `--interactive` mode              |
| CREATE | `content/docs/user/05-state-file.mdx`         | Reference   | `.cyan_state.yaml` format and purpose                                    |
| CREATE | `content/docs/user/06-registry-web.mdx`       | Reference   | Using the cyanprint.dev web registry                                     |
| CREATE | `content/docs/user/07-template-lifecycle.mdx` | Explanation | How templates are downloaded, executed in containers, files delivered    |

## Content Guidelines

### 00-getting-started.mdx (Tutorial)

- **Learning-oriented** - follow step by step
- Steps:
  1. Prerequisites (system requirements)
  2. Install the CLI (show one method, link to full installation guide)
  3. Browse cyanprint.dev for a template
  4. Run `cyanprint create user/template:version my-project`
  5. See the generated output
- Time estimate: 5-10 minutes
- **Registry URL**: https://cyanprint.dev

### 01-cli-installation.mdx (How-to Guide)

- **Problem-oriented** - practical installation steps
- Include ACTUAL COMMANDS for each method (verified from existing docs):

#### Nix Shell

```bash
nix shell github:AtomiCloud/sulfone.iridium
```

#### Nix Profile

```bash
nix profile install github:AtomiCloud/sulfone.iridium
```

#### Homebrew (macOS/Linux)

```bash
brew install AtomiCloud/tap/cyanprint
```

#### Scoop (Windows)

```bash
scoop bucket add atomi https://github.com/AtomiCloud/scoop-bucket.git
scoop install atomi/cyanprint
```

#### APT (Debian/Ubuntu)

```bash
sudo apt install software-properties-common -y
sudo apt-add-repository "deb [trusted=yes] https://apt.fury.io/AtomiCloud/ /" -y
sudo apt update -y
sudo apt install cyanprint
```

#### YUM (RHEL/Fedora)

```bash
sudo sh -c 'echo "[fury]
name=AtomiCloud Repo
baseurl=https://yum.fury.io/atomicloud/
enabled=1
gpgcheck=0" > /etc/yum.repos.d/fury.repo'
yum install cyanprint
```

#### Specific Version Installation

| Method      | Command                                                            |
| ----------- | ------------------------------------------------------------------ |
| Nix Shell   | `nix shell github:AtomiCloud/sulfone.iridium/v<version>`           |
| Nix Profile | `nix profile install github:AtomiCloud/sulfone.iridium/v<version>` |
| Brew        | `brew install AtomiCloud/tap/cyanprint@<version>`                  |
| Scoop       | `scoop install atomi/cyanprint@<version>`                          |
| APT         | `sudo apt install cyanprint=<version>`                             |
| YUM         | `yum install cyanprint-<version>`                                  |

- Include verification: `cyanprint --version`

### 02-creating-projects.mdx (How-to Guide)

- **Problem-oriented** - creating projects
- Template reference format: `<username>/<template_name>:<version>`
- Example: `cyanprint create atomicloud/nextjs-dashboard:1.0.0 my-project`
- **CAN USE MULTIPLE TEMPLATES** - show how to combine templates
- Options from `cyanprint create --help`:
  - `-c, --coordinator-endpoint` (default: http://coord.cyanprint.dev:9000)
- No Docker needed for users - hosted coordinator is used

### 03-search-templates.mdx (How-to Guide)

- **Problem-oriented** - finding templates
- **IMPORTANT**: NO CLI search command exists!
- Methods:
  - Browse https://cyanprint.dev web UI
  - Filter by tags, language, author
  - View template details and versions
- Tips for evaluating templates (stars, downloads, author)

### 04-updating-projects.mdx (How-to Guide)

- **Problem-oriented** - keeping projects updated
- Command: `cyanprint update [PATH]`
- Options from `cyanprint update --help`:
  - `-c, --coordinator-endpoint`
  - `-i, --interactive` - Enable interactive mode to select specific versions
- How 3-way merge works:
  - Compares: template v1, template v2, current project
  - Merges changes intelligently
- State file (`.cyan_state.yaml`) stores original answers

### 05-state-file.mdx (Reference)

- **Information-oriented** - state file format
- Location: `.cyan_state.yaml` in project root
- Contains:
  - Template references and versions used
  - Answers provided during template creation
  - Used for 3-way merge during updates

### 06-registry-web.mdx (Reference)

- **Information-oriented** - web UI usage
- URL: https://cyanprint.dev (NOT registry.cyanprint.dev)
- Features:
  - Browsing templates
  - Filtering and search
  - Template details page
  - Version history
- Screenshots (placeholders)

### 07-template-lifecycle.mdx (Explanation)

- **Understanding-oriented** - how it works
- Topics:
  - What happens when you run `cyanprint create`
  - Template is downloaded from registry
  - Coordinator plans execution
  - Boron runs template in Docker container
  - Files are delivered to output directory
- High-level, no code

## Verification

After completion:

1. Run `direnv exec . pls build` to verify build succeeds
2. **Check ALL links work** - especially cyanprint.dev
3. Run `direnv exec . pls dev` and verify dev server starts
4. Run `pre-commit run --all` to verify all checks pass
5. Confirm NO hallucinated CLI commands

## Definition of Done

- [ ] User index page updated
- [ ] Getting started tutorial created (correct CLI: `create`)
- [ ] CLI installation guide created (brew, scoop, nix, fury, cargo with actual commands)
- [ ] Creating projects guide created (template ref format, multiple templates OK)
- [ ] Search templates guide created (web UI only, NO CLI search)
- [ ] Update projects guide created (3-way merge, `--interactive`)
- [ ] State file reference created
- [ ] Registry web reference created
- [ ] Template lifecycle explanation created
- [ ] Build succeeds
- [ ] Dev server starts successfully
- [ ] All links verified
- [ ] All CLI commands verified against actual `--help` output
- [ ] pre-commit run --all passes
