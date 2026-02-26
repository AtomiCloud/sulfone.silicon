---
name: divio-docs
description: Document codebase features using the Divio methodology. Starts by identifying features from source code, then generates Tutorials, How-to guides, Reference docs, and Explanations. Use when documenting a codebase, creating comprehensive docs, or using /divio-docs.
---

# Divio Documentation Skill

Systematically document codebase features using the [Divio documentation system](https://diataxis.fr/), which organizes documentation into four distinct types based on user needs.

## When to Use

- Documenting a new or existing codebase
- Creating comprehensive documentation from source code
- User runs `/divio-docs`
- Reorganizing scattered documentation into a proper structure

## Overview

The Divio method identifies four documentation types:

| Type             | Purpose         | Orientation        | Analogy        |
| ---------------- | --------------- | ------------------ | -------------- |
| **Tutorial**     | Learning        | Getting started    | Cooking lesson |
| **How-to Guide** | Problem-solving | Achieving a goal   | Recipe         |
| **Reference**    | Information     | Looking up details | Encyclopedia   |
| **Explanation**  | Understanding   | Context & why      | Article        |

---

## Instructions

### Step 1: Identify Source Features

Scan the codebase to identify all features that need documentation.

**What to look for:**

- Entry points (main functions, CLI commands, API endpoints)
- Public APIs and exported functions/classes
- Configuration options and their effects
- User-facing features and workflows
- Integration points with external systems
- Key abstractions and data models

**Actions:**

1. Use `Glob` to find source files in key directories
2. Use `Grep` to find exported/public symbols
3. Read key files to understand feature scope
4. List all identified features with brief descriptions

**Output:** A prioritized list of features to document.

---

### Step 2: Analyze Feature Characteristics

For each identified feature, determine which documentation types are needed.

**Questions to ask:**

- Is this feature for beginners? → Tutorial
- Does this solve a specific problem? → How-to guide
- Are there many options/parameters? → Reference
- Is the architecture non-obvious? → Explanation

**Documentation Type Decision Matrix:**

| Feature Characteristic | Documentation Type |
| ---------------------- | ------------------ |
| New user onboarding    | Tutorial           |
| Common task/workflow   | How-to guide       |
| API with parameters    | Reference          |
| Complex logic/design   | Explanation        |
| Configuration options  | Reference          |
| Integration scenario   | How-to guide       |
| Core concepts          | Explanation        |

---

### Step 3: Generate Tutorials

**Characteristics:**

- Learning-oriented (not problem-oriented)
- Step-by-step with expected outcomes
- Assumes no prior knowledge
- Minimum viable steps to success
- Repeatable and reliable

**Template:**

```markdown
# Tutorial: {Feature Name}

## What You'll Learn

- {Learning objective 1}
- {Learning objective 2}

## Prerequisites

- {Required setup/knowledge}

## Steps

### 1. {First Step}

{Clear instruction with expected result}

### 2. {Second Step}

{Clear instruction with expected result}

## What's Next?

{Link to how-to guides for practical use}
```

---

### Step 4: Generate How-to Guides

**Characteristics:**

- Problem-oriented (not learning-oriented)
- Assumes basic familiarity
- Steps to achieve a specific goal
- Practical and realistic
- Flexible (adaptable to user's situation)

**Template:**

```markdown
# How-to: {Goal/Task}

## Goal

{What the user will achieve}

## Prerequisites

- {Required setup/knowledge}

## Steps

1. {Action step 1}
2. {Action step 2}
3. {Action step 3}

## Troubleshooting

- {Common issue} → {Solution}
```

---

### Step 5: Generate Reference Documentation

**Characteristics:**

- Information-oriented
- Structured and consistent
- Complete and accurate
- Few opinions, just facts
- Organized for lookup

**Template:**

````markdown
# Reference: {API/Feature Name}

## Overview

{Brief description}

## Properties/Parameters

### `{name}`

- **Type:** `{type}`
- **Required/Optional**
- **Default:** `{default}`
- **Description:** {What it does}

## Methods/Functions

### `{methodName}({params})`

- **Returns:** `{return type}`
- **Description:** {What it does}

## Examples

```{language}
{code example}
```
````

````

---

### Step 6: Generate Explanations

**Characteristics:**
- Understanding-oriented
- Provides context and background
- Explains "why" not "how"
- Discusses alternatives and trade-offs
- Can be opinionated

**Template:**
```markdown
# Explanation: {Topic/Concept}

## Context
{Why this exists and what problem it solves}

## How It Works
{Conceptual overview without step-by-step}

## Design Decisions
- {Decision 1}: {Rationale}
- {Decision 2}: {Rationale}

## Alternatives Considered
- {Alternative}: {Why not chosen}

## Related Concepts
- {Links to related explanations}
````

---

### Step 7: Organize Documentation

Create a documentation structure that separates the four types:

```
docs/
├── tutorials/           # Learning-oriented
│   ├── getting-started.mdx
│   └── first-feature.mdx
├── how-to/             # Problem-oriented
│   ├── deploy-to-production.mdx
│   └── configure-auth.mdx
├── reference/          # Information-oriented
│   ├── api.mdx
│   └── configuration.mdx
└── explanation/        # Understanding-oriented
    ├── architecture.mdx
    └── design-decisions.mdx
```

---

## Quality Checklist

Before finalizing documentation, verify:

- [ ] **Tutorials**: Can a beginner follow this successfully?
- [ ] **How-to guides**: Does this solve a real problem?
- [ ] **Reference**: Is this complete and accurate?
- [ ] **Explanation**: Does this help understand the "why"?
- [ ] **Cross-links**: Are the four types properly linked to each other?

---

## Reference

For more information on the Divio documentation system:

- [Diátaxis Framework](https://diataxis.fr/)
- [Divio's Documentation System](https://documentation.divio.com/)

## Examples

See [examples.md](examples.md) for concrete examples of each documentation type.
