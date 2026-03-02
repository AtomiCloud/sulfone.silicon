# Sub-Plan: User Documentation (Phase 3 of 7)

## Goal

Create end-user documentation following Divio format. Users can get started in **1 minute**.

## Expected Files

| File                                 | Description                                                  | Links To                              |
| ------------------------------------ | ------------------------------------------------------------ | ------------------------------------- |
| `user/index.mdx`                     | Overview of user documentation                               | tutorials/get-started, how-to/install |
| **Tutorials**                        |                                                              |                                       |
| `tutorials/meta.json`                | Navigation for tutorials                                     | -                                     |
| `tutorials/get-started.mdx`          | Condensed 1-minute getting started (install + first project) | how-to/install, how-to/create-project |
| **How-to Guides**                    |                                                              |                                       |
| `how-to/meta.json`                   | Navigation for how-tos                                       | -                                     |
| `how-to/install.mdx`                 | Install CLI on 6 platforms, including version pinning        | reference/cli-commands                |
| `how-to/create-project.mdx`          | Create projects from templates                               | reference/cli-commands                |
| `how-to/update-project.mdx`          | Update existing projects                                     | explanation/3-way-merge               |
| `how-to/browse-templates.mdx`        | Find templates via registry web UI                           | reference/registry-ui                 |
| **Reference**                        |                                                              |                                       |
| `reference/meta.json`                | Navigation for reference                                     | -                                     |
| `reference/cli-commands.mdx`         | Complete CLI command reference                               | -                                     |
| `reference/registry-ui.mdx`          | Registry web UI documentation                                | -                                     |
| **Explanation**                      |                                                              |                                       |
| `explanation/meta.json`              | Navigation for explanation                                   | -                                     |
| `explanation/template-lifecycle.mdx` | Template versions, updates, deprecation                      | -                                     |
| `explanation/3-way-merge.mdx`        | How updates preserve local changes                           | how-to/update-project                 |

## Directory Structure

```
content/docs/user/
├── index.mdx
├── meta.json
├── tutorials/
│   ├── meta.json
│   └── get-started.mdx
├── how-to/
│   ├── meta.json
│   ├── install.mdx
│   ├── create-project.mdx
│   ├── update-project.mdx
│   └── browse-templates.mdx
├── reference/
│   ├── meta.json
│   ├── cli-commands.mdx
│   └── registry-ui.mdx
└── explanation/
    ├── meta.json
    ├── template-lifecycle.mdx
    └── 3-way-merge.mdx
```

## Content Strategy (Avoid Duplication)

| Content            | Location                      | Cross-references                                  |
| ------------------ | ----------------------------- | ------------------------------------------------- |
| Quick start        | `tutorials/get-started.mdx`   | Condensed version - links to detailed how-tos     |
| Full installation  | `how-to/install.mdx`          | Includes version pinning                          |
| CLI syntax         | `reference/cli-commands.mdx`  | Linked from tutorials and how-tos                 |
| Update mechanism   | `explanation/3-way-merge.mdx` | Explained once, linked from how-to/update-project |
| Template discovery | `how-to/browse-templates.mdx` | Web UI only (no CLI search)                       |

## Technical Approach

### Tutorials

#### `tutorials/get-started.mdx`

**Goal:** Get users to their first project in **1 minute**. Condensed version combining install + create.

````mdx
# Get Started

Create your first CyanPrint project in under a minute.

## 1. Install CLI

<Tabs groupId="installer" items={['Nix', 'Brew', 'Scoop', 'APT', 'YUM']} persist>
<Tab value="Nix">

\```bash
nix shell github:AtomiCloud/sulfone.iridium
\```

</Tab>
<Tab value="Brew">

\```bash
brew install AtomiCloud/tap/cyanprint
\```

</Tab>
<Tab value="Scoop">

\```bash
scoop bucket add atomi https://github.com/AtomiCloud/scoop-bucket.git
scoop install atomi/cyanprint
\```

</Tab>
<Tab value="APT">

\```bash
sudo apt-add-repository "deb [trusted=yes] https://apt.fury.io/AtomiCloud/ /"
sudo apt update && sudo apt install cyanprint
\```

</Tab>
<Tab value="YUM">

\```bash
sudo sh -c 'echo "[fury]
name=AtomiCloud Repo
baseurl=https://yum.fury.io/atomicloud/
enabled=1
gpgcheck=0" > /etc/yum.repos.d/fury.repo'
yum install cyanprint
\```

</Tab>
</Tabs>

## 2. Create Project

\```bash
cyanprint create atomi/nix-init my-project
\```

Answer the prompts, and your project is ready!

## Next Steps

- [Full installation guide](/user/how-to/install) (pinning versions, more options)
- [Create more projects](/user/how-to/create-project)
- [Browse templates](/user/how-to/browse-templates)
````

### How-to Guides

#### `how-to/install.mdx`

````mdx
# Installation

## Install Latest

<Tabs groupId="installer" items={['Nix Shell', 'Nix Profile', 'Brew', 'Scoop', 'APT', 'YUM']} persist>
<Tab value="Nix Shell">

\```bash
nix shell github:AtomiCloud/sulfone.iridium
\```

</Tab>
<Tab value="Nix Profile">

\```bash
nix profile install github:AtomiCloud/sulfone.iridium
\```

</Tab>
<Tab value="Brew">

\```bash
brew install AtomiCloud/tap/cyanprint
\```

</Tab>
<Tab value="Scoop">

\```bash
scoop bucket add atomi https://github.com/AtomiCloud/scoop-bucket.git
scoop install atomi/cyanprint
\```

</Tab>
<Tab value="APT">

\```bash
sudo apt install software-properties-common -y
sudo apt-add-repository "deb [trusted=yes] https://apt.fury.io/AtomiCloud/ /" -y
sudo apt update -y
sudo apt install cyanprint
\```

</Tab>
<Tab value="YUM">

\```bash
sudo sh -c 'echo "[fury]
name=AtomiCloud Repo
baseurl=https://yum.fury.io/atomicloud/
enabled=1
gpgcheck=0" > /etc/yum.repos.d/fury.repo'
yum install cyanprint
\```

</Tab>
</Tabs>

## Pin to Specific Version

<Tabs groupId="installer" items={['Nix', 'Brew', 'Scoop', 'APT', 'YUM']} persist>
<Tab value="Nix">

\```bash

# Pin to specific tag/commit

nix shell github:AtomiCloud/sulfone.iridium/0.2.0

# Or with flake reference

nix profile install github:AtomiCloud/sulfone.iridium/0.2.0
\```

</Tab>
<Tab value="Brew">

\```bash

# List available versions

brew info AtomiCloud/tap/cyanprint

# Install specific version (if available)

brew install AtomiCloud/tap/cyanprint@0.2.0
\```

</Tab>
<Tab value="Scoop">

\```bash

# Check versions in bucket

scoop info atomi/cyanprint

# Install specific version

scoop install atomi/cyanprint@0.2.0
\```

</Tab>
<Tab value="APT">

\```bash

# List available versions

apt-cache madison cyanprint

# Install specific version

sudo apt install cyanprint=0.2.0
\```

</Tab>
<Tab value="YUM">

\```bash

# List available versions

yum --showduplicates list cyanprint

# Install specific version

yum install cyanprint-0.2.0
\```

</Tab>
</Tabs>
````

#### `how-to/create-project.mdx`

````mdx
# Create a Project

\```bash
cyanprint create <TEMPLATE_REF> [PATH]
\```

## Examples

\```bash

# Create in current directory

cyanprint create atomi/nix-init

# Create in specific directory

cyanprint create atomi/nix-init my-project
\```

## What Happens

1. CLI fetches template from registry
2. Coordinator runs the template
3. You answer questions interactively
4. Project files are generated

See [CLI Commands](/user/reference/cli-commands) for full command reference.
````

#### `how-to/update-project.mdx`

````mdx
# Update a Project

\```bash

# Update to latest versions

cyanprint update

# Interactive version selection

cyanprint update -i
\```

See [3-Way Merge](/user/explanation/3-way-merge) to understand how updates preserve your changes.
````

#### `how-to/browse-templates.mdx`

```mdx
# Browse Templates

**Template discovery is via the web UI only.** There is no CLI search command.

Visit [registry.cyanprint.dev](https://registry.cyanprint.dev) to:

- Search by name, username, or tags
- View template details and versions
- See usage statistics

See [Registry UI Reference](/user/reference/registry-ui).
```

### Reference

#### `reference/cli-commands.mdx`

````mdx
# CLI Commands Reference

## Global Options

| Flag                   | Description         |
| ---------------------- | ------------------- |
| `-r, --registry <URL>` | Registry endpoint   |
| `-d, --debug`          | Enable debug output |
| `-V, --version`        | Print version       |

## `cyanprint create`

\```bash
cyanprint create <TEMPLATE_REF> [PATH]
\```

| Argument         | Required | Description                               |
| ---------------- | -------- | ----------------------------------------- |
| `<TEMPLATE_REF>` | Yes      | Template reference (e.g., atomi/nix-init) |
| `[PATH]`         | No       | Output directory (default: .)             |

| Option                       | Default                         | Description     |
| ---------------------------- | ------------------------------- | --------------- |
| `-c, --coordinator-endpoint` | http://coord.cyanprint.dev:9000 | Coordinator URL |

## `cyanprint update`

\```bash
cyanprint update [PATH]
\```

| Option                       | Description                   |
| ---------------------------- | ----------------------------- |
| `-i, --interactive`          | Select versions interactively |
| `-c, --coordinator-endpoint` | Coordinator URL               |

## `cyanprint daemon`

\```bash
cyanprint daemon [VERSION]
\```

| Option       | Default | Description         |
| ------------ | ------- | ------------------- |
| `-p, --port` | 9000    | Port to host daemon |

## `cyanprint push`

\```bash

# Push template

cyanprint push template --token <TOKEN> <BLOB_IMG> <BLOB_TAG> <TEMPLATE_IMG> <TEMPLATE_TAG>

# Push processor

cyanprint push processor --token <TOKEN> <IMAGE> <TAG>

# Push plugin

cyanprint push plugin --token <TOKEN> <IMAGE> <TAG>
\```
````

### Explanation

#### `explanation/3-way-merge.mdx`

```mdx
# 3-Way Merge

When updating a project, CyanPrint uses a 3-way merge to preserve your customizations:

1. **Base**: Original template version you used
2. **Yours**: Your modified project files
3. **Theirs**: New template version

The merge combines your changes with template updates.

## Conflict Resolution

If conflicts occur, you'll be prompted to resolve them manually.
```

#### `explanation/template-lifecycle.mdx`

```mdx
# Template Lifecycle

## Versioning

Templates use semantic versioning (MAJOR.MINOR.PATCH).

- **MAJOR**: Breaking changes
- **MINOR**: New features, backward compatible
- **PATCH**: Bug fixes

## Deprecation

Templates may be deprecated by their maintainers. Deprecated templates remain available but show a warning.
```

## Success Criteria

- [ ] Getting started works in 1 minute
- [ ] Installation covers all 6 platforms with version pinning
- [ ] All CLI commands verified against source
- [ ] No content duplication (proper cross-references)
- [ ] Divio segments properly organized
- [ ] Build succeeds
