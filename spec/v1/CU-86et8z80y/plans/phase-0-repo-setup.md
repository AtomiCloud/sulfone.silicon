# Sub-Plan: Repo Setup (Phase 1 of 7)

## Goal

Set up the documentation site infrastructure: verify Mermaid/CodeHike/Tabs work, create directory structure for all 3 audiences with Divio segments.

## Expected Files

| File                                 | Description                       | Links To                                                  |
| ------------------------------------ | --------------------------------- | --------------------------------------------------------- |
| `content/docs/meta.json`             | Root navigation configuration     | -                                                         |
| **User Section**                     |                                   |                                                           |
| `user/meta.json`                     | User section navigation           | tutorials/, how-to/, reference/, explanation/             |
| `user/tutorials/meta.json`           | Tutorial navigation               | get-started                                               |
| `user/how-to/meta.json`              | How-to guide navigation           | install, create-project, update-project, browse-templates |
| `user/reference/meta.json`           | Reference navigation              | cli-commands, registry-ui                                 |
| `user/explanation/meta.json`         | Explanation navigation            | template-lifecycle, 3-way-merge                           |
| **Developer Section**                |                                   |                                                           |
| `developer/meta.json`                | Developer section navigation      | basics/, templates/, processors/, plugins/                |
| `developer/basics/meta.json`         | Basics navigation                 | introduction, architecture, quickstart                    |
| `developer/templates/meta.json`      | Templates section navigation      | tutorials/, how-to/, reference/, explanation/             |
| `developer/processors/meta.json`     | Processors section navigation     | tutorials/, how-to/, reference/, explanation/             |
| `developer/plugins/meta.json`        | Plugins section navigation        | tutorials/, how-to/, reference/, explanation/             |
| **Contributor Section**              |                                   |                                                           |
| `contributor/meta.json`              | Contributor navigation (no Divio) | architecture/, repositories/, development/                |
| `contributor/architecture/meta.json` | Architecture navigation           | overview, execution-flow                                  |
| `contributor/repositories/meta.json` | Repository index navigation       | iridium, boron, zinc, argon, helium                       |
| `contributor/development/meta.json`  | Development navigation            | setup                                                     |

## Directory Structure

```
content/docs/
├── meta.json                              # Root navigation
├── user/
│   ├── meta.json                          # User nav (tutorials, how-to, reference, explanation)
│   ├── tutorials/meta.json
│   ├── how-to/meta.json
│   ├── reference/meta.json
│   └── explanation/meta.json
├── developer/
│   ├── meta.json                          # Developer nav (basics, templates, processors, plugins)
│   ├── basics/meta.json                   # Intro, architecture, quickstart
│   ├── templates/
│   │   └── meta.json                      # (tutorials, how-to, reference, explanation)
│   ├── processors/
│   │   └── meta.json                      # (tutorials, how-to, reference, explanation)
│   └── plugins/
│       └── meta.json                      # (tutorials, how-to, reference, explanation)
└── contributor/
    └── meta.json                          # Contributor nav (no Divio format)
```

## Scope

### In Scope

- Verify Mermaid, CodeHike, Tab components
- Create all meta.json navigation files
- Create directory structure for all audiences
- Verify mobile layout

### Out of Scope

- Writing actual documentation content

## Technical Approach

### Step 1: Verify Current Setup

Check existing configuration in `source.config.ts`:

- CodeHike ✅
- KaTeX ✅
- Admonitions ✅
- Mermaid (verify/add)

### Step 2: Create Directory Structure

```
content/docs/
├── meta.json
├── user/
│   ├── meta.json
│   ├── index.mdx
│   ├── tutorials/
│   │   ├── meta.json
│   │   └── get-started.mdx
│   ├── how-to/
│   │   ├── meta.json
│   │   ├── install.mdx
│   │   ├── create-project.mdx
│   │   ├── update-project.mdx
│   │   └── browse-templates.mdx
│   ├── reference/
│   │   ├── meta.json
│   │   ├── cli-commands.mdx
│   │   └── registry-ui.mdx
│   └── explanation/
│       ├── meta.json
│       ├── template-lifecycle.mdx
│       └── 3-way-merge.mdx
├── developer/
│   ├── meta.json
│   ├── index.mdx
│   ├── basics/
│   │   ├── meta.json
│   │   ├── introduction.mdx
│   │   ├── architecture.mdx
│   │   └── quickstart.mdx
│   ├── templates/
│   │   ├── meta.json
│   │   ├── tutorials/
│   │   ├── how-to/
│   │   ├── reference/
│   │   └── explanation/
│   ├── processors/
│   │   ├── meta.json
│   │   ├── tutorials/
│   │   ├── how-to/
│   │   ├── reference/
│   │   └── explanation/
│   └── plugins/
│       ├── meta.json
│       ├── tutorials/
│       ├── how-to/
│       ├── reference/
│       └── explanation/
└── contributor/
    ├── meta.json
    ├── index.mdx
    ├── architecture/
    ├── repositories/
    └── development/
```

### Step 3: Create Meta Files

Root `meta.json`:

```json
{
  "title": "CyanPrint Documentation",
  "pages": ["user/index", "developer/index", "contributor/index"]
}
```

User `meta.json`:

```json
{
  "title": "Users",
  "pages": ["index", "tutorials/index", "how-to/index", "reference/index", "explanation/index"]
}
```

Developer `meta.json`:

```json
{
  "title": "Developers",
  "pages": ["index", "basics/index", "templates/index", "processors/index", "plugins/index"]
}
```

## Success Criteria

- [ ] `direnv exec . pls build` succeeds
- [ ] All meta.json files created
- [ ] Directory structure matches plan
- [ ] Mermaid renders (or documented as issue)
- [ ] Tabs work with `persist` prop
- [ ] Mobile layout responsive
