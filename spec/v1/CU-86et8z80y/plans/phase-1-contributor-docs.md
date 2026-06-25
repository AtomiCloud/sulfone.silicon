# Sub-Plan: Contributor Documentation (Phase 2 of 7)

## Goal

Create documentation for contributors developing the CyanPrint platform. No Divio format - organized by content type.

## Expected Files

| File                                           | Description                               | Links To                     |
| ---------------------------------------------- | ----------------------------------------- | ---------------------------- |
| `contributor/index.mdx`                        | Overview of contributing to CyanPrint     | architecture/, repositories/ |
| `contributor/meta.json`                        | Navigation for contributor section        | -                            |
| **Architecture**                               |                                           |                              |
| `contributor/architecture/meta.json`           | Navigation for architecture               | -                            |
| `contributor/architecture/overview.mdx`        | System architecture with Mermaid diagrams | -                            |
| `contributor/architecture/execution-flow.mdx`  | How templates execute through containers  | -                            |
| **Repositories**                               |                                           |                              |
| `contributor/repositories/meta.json`           | Navigation for repository index           | -                            |
| `contributor/repositories/index.mdx`           | Index of all CyanPrint repositories       | -                            |
| `contributor/repositories/sulfone-iridium.mdx` | CLI repository (Rust, Clap)               | -                            |
| `contributor/repositories/sulfone-boron.mdx`   | Executor repository                       | -                            |
| `contributor/repositories/sulfone-zinc.mdx`    | Registry API repository                   | -                            |
| `contributor/repositories/sulfone-argon.mdx`   | Registry Web UI repository                | -                            |
| `contributor/repositories/sulfone-helium.mdx`  | SDKs repository (TypeScript, Python, C#)  | -                            |
| **Development**                                |                                           |                              |
| `contributor/development/meta.json`            | Navigation for development                | -                            |
| `contributor/development/setup.mdx`            | Development environment setup guide       | -                            |

## Directory Structure

```
content/docs/contributor/
├── index.mdx
├── meta.json
├── architecture/
│   ├── meta.json
│   ├── overview.mdx
│   └── execution-flow.mdx
├── repositories/
│   ├── meta.json
│   ├── index.mdx
│   ├── sulfone-iridium.mdx
│   ├── sulfone-boron.mdx
│   ├── sulfone-zinc.mdx
│   ├── sulfone-argon.mdx
│   └── sulfone-helium.mdx
└── development/
    ├── meta.json
    └── setup.mdx
```

## Repository Index

| Repo    | GitHub                                        | Tech Stack             |
| ------- | --------------------------------------------- | ---------------------- |
| Iridium | https://github.com/AtomiCloud/sulfone.iridium | Rust, Clap             |
| Boron   | https://github.com/AtomiCloud/sulfone.boron   | (Check repo)           |
| Zinc    | https://github.com/AtomiCloud/sulfone.zinc    | (Check repo)           |
| Argon   | https://github.com/AtomiCloud/sulfone.argon   | (Check repo)           |
| Helium  | https://github.com/AtomiCloud/sulfone.helium  | TypeScript, Python, C# |
| Silicon | https://github.com/AtomiCloud/sulfone.silicon | Next.js, Fumadocs      |

## Content Strategy

| Content             | Location                          | Notes                               |
| ------------------- | --------------------------------- | ----------------------------------- |
| System overview     | `architecture/overview.mdx`       | Mermaid diagrams of components      |
| Container execution | `architecture/execution-flow.mdx` | How templates/processores execute   |
| Repository index    | `repositories/index.mdx`          | Links to all repos with tech stacks |
| Dev setup           | `development/setup.mdx`           | How to set up dev environment       |

## Technical Approach

### `architecture/overview.mdx`

````mdx
# Architecture Overview

## System Components

\```mermaid
graph TB
subgraph "User Machine"
CLI[Iridium CLI]
end

    subgraph "Remote Executor"
        COORD[Boron Coordinator]
        T[Template Container]
        P[Processor Container]
        PL[Plugin Container]
    end

    subgraph "Registry"
        API[Zinc API]
        UI[Argon Web UI]
    end

    subgraph "SDKs"
        TS[TypeScript SDK]
        PY[Python SDK]
        CS[.NET SDK]
    end

    CLI --> API
    CLI --> COORD
    COORD --> T
    COORD --> P
    COORD --> PL
    UI --> API
    T --> TS
    P --> TS
    PL --> TS

\```

## Components

| Component | Repository      | Description           |
| --------- | --------------- | --------------------- |
| Iridium   | sulfone.iridium | CLI tool              |
| Boron     | sulfone.boron   | Execution coordinator |
| Zinc      | sulfone.zinc    | Registry API          |
| Argon     | sulfone.argon   | Registry Web UI       |
| Helium    | sulfone.helium  | SDKs (TS, Python, C#) |
| Silicon   | sulfone.silicon | Documentation site    |
````

### `repositories/sulfone-iridium.mdx`

````mdx
# sulfone.iridium

The CyanPrint CLI.

## Tech Stack

- Rust
- Clap (CLI framework)

## Key Files

- `src/commands/` - CLI commands
- `src/main.rs` - Entry point

## Building

\```bash
cargo build --release
\```
````

## Success Criteria

- [ ] Architecture overview with Mermaid diagrams
- [ ] All repositories documented with GitHub links
- [ ] Development setup guide
- [ ] Build succeeds
