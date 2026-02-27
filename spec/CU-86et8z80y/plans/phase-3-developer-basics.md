# Sub-Plan: Developer Basics (Phase 4 of 7)

## Goal

Create foundational developer documentation (intro, architecture) before diving into the 3 artifacts. No Divio segments - just basics and overview.

## Expected Files

| File                                | Description                                                 | Links To                                         |
| ----------------------------------- | ----------------------------------------------------------- | ------------------------------------------------ |
| `developer/index.mdx`               | Overview of developer documentation                         | basics/introduction, templates/index             |
| `developer/basics/meta.json`        | Navigation for basics                                       | -                                                |
| `developer/basics/introduction.mdx` | Introduction to CyanPrint development, 3 artifacts overview | templates/index, processors/index, plugins/index |
| `developer/basics/architecture.mdx` | System architecture with Mermaid diagrams                   | -                                                |

## Directory Structure

```
content/docs/developer/
├── index.mdx
├── meta.json
├── basics/
│   ├── meta.json
│   ├── introduction.mdx
│   └── architecture.mdx
├── templates/
│   └── ...
├── processors/
│   └── ...
└── plugins/
    └── ...
```

## Content Strategy

| Content             | Location                  | Notes               |
| ------------------- | ------------------------- | ------------------- |
| What is CyanPrint   | `basics/introduction.mdx` | High-level overview |
| System architecture | `basics/architecture.mdx` | Mermaid diagrams    |

## Technical Approach

### `basics/introduction.mdx`

```mdx
# Introduction to CyanPrint Development

CyanPrint is a template-based project generator with three extensible components:

## Three Artifacts

| Artifact       | Purpose                                         | SDK Port |
| -------------- | ----------------------------------------------- | -------- |
| **Templates**  | Define questions and file processing rules      | 5550     |
| **Processors** | Transform files (templating, syntax conversion) | 5551     |
| **Plugins**    | Post-processing (run commands, file operations) | 5552     |

## Choose Your Path

- [Create a Template](/developer/templates) - Build project scaffolds
- [Create a Processor](/developer/processors) - Build file transformers
- [Create a Plugin](/developer/plugins) - Build post-processors
```

### `basics/architecture.mdx`

````mdx
# Architecture Overview

## System Components

\```mermaid
graph TB
subgraph "User Machine"
CLI[Iridium CLI]
end

    subgraph "Remote Executor"
        COORD[Coordinator]
        T[Template Container]
        P[Processor Container]
        PL[Plugin Container]
    end

    subgraph "Registry"
        API[Zinc API]
        UI[Argon Web UI]
    end

    CLI --> API
    CLI --> COORD
    COORD --> T
    COORD --> P
    COORD --> PL
    UI --> API

\```

## Execution Flow

\```mermaid
sequenceDiagram
participant User
participant CLI
participant Registry
participant Coordinator
participant Template:5550
participant Processor:5551

    User->>CLI: cyanprint create atomi/template
    CLI->>Registry: GET /templates/atomi/template
    Registry-->>CLI: Image references
    CLI->>Coordinator: Start execution
    Coordinator->>Template: POST /api/template/init
    Template-->>Coordinator: Cyan config
    Coordinator->>Processor: POST /api/process
    Processor-->>Coordinator: Processed files
    Coordinator-->>CLI: Project files

\```

## Container Communication

| Container | Role                                     | Endpoints                                       |
| --------- | ---------------------------------------- | ----------------------------------------------- |
| Template  | Collects user input, returns Cyan config | POST /api/template/init, /api/template/validate |
| Processor | Reads files, transforms, writes output   | POST /api/process                               |
| Plugin    | Post-processing on generated files       | POST /api/plug                                  |

## Container Path Mechanics

\```mermaid
graph LR
A[Blob Image] -->|Extracts to| B[/workspace/cyanprint/]
B -->|read_dir| C[Processor]
C -->|write_dir| D[/workspace/output/]
\```

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
````

## Success Criteria

- [ ] Introduction explains 3 artifacts clearly
- [ ] Architecture has working Mermaid diagrams
- [ ] No overlap with detailed artifact docs
- [ ] Build succeeds
