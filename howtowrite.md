# How to Write Documentation

This guide covers the available UI components and CodeHike features for writing CyanPrint documentation. Use these features thoughtfully to create clear, engaging content.

---

## Fumadocs UI Components

### Callout

Alert boxes for important information.

```mdx
import { Callout } from 'fumadocs-ui/components/callout';

<Callout type="info">General information</Callout>
<Callout type="warn">Warning message</Callout>
<Callout type="error">Error message</Callout>
<Callout type="success">Success message</Callout>
<Callout title="Custom Title" type="info">
  With custom title
</Callout>
```

**Types**: `info`, `warn`, `warning`, `error`, `success`, `idea`

**When to use**:

- Important notes that shouldn't be missed
- Warnings about potential issues
- Tips or best practices (use sparingly)

---

### Steps

Numbered step-by-step instructions with automatic numbering.

```mdx
import { Steps, Step } from 'fumadocs-ui/components/steps';

<Steps>
  <Step>### First Step Description of step 1</Step>
  <Step>### Second Step Description of step 2</Step>
</Steps>
```

**When to use**:

- Tutorials with sequential instructions
- Setup/installation guides
- Any process with 3+ ordered steps

**Note**: Each `<Step>` gets an auto-incrementing number displayed in a circle.

---

### Tabs

Switchable content tabs for multiple variants.

```mdx
import { Tabs, Tab } from 'fumadocs-ui/components/tabs';

<Tabs items={['npm', 'yarn', 'pnpm']}>
  <Tab value="npm">npm install cyanprint</Tab>
  <Tab value="yarn">yarn add cyanprint</Tab>
  <Tab value="pnpm">pnpm add cyanprint</Tab>
</Tabs>

<!-- With group persistence (syncs across pages) -->

<Tabs groupId="package-manager" items={['npm', 'yarn', 'pnpm']} persist>
  <Tab value="npm">npm install</Tab>
  <Tab value="yarn">yarn add</Tab>
  <Tab value="pnpm">pnpm add</Tab>
</Tabs>
```

**When to use**:

- Multi-language code examples (TypeScript/JavaScript)
- Package manager variants (npm/yarn/pnpm)
- Configuration options for different environments

---

### Accordion

Collapsible content sections.

```mdx
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

<Accordions type="single">
  <Accordion title="Expandable Section 1">Hidden content here</Accordion>
  <Accordion title="Expandable Section 2">More hidden content</Accordion>
</Accordions>
```

**When to use**:

- FAQ sections
- Optional deep-dives that may distract from main content
- Advanced configuration options

---

### Files

Display file/folder structure visually.

```mdx
import { Files, File, Folder } from 'fumadocs-ui/components/files';

<Files>
  <Folder name="src" defaultOpen>
    <File name="index.ts" />
    <File name="config.ts" />
    <Folder name="utils">
      <File name="helpers.ts" />
    </Folder>
  </Folder>
  <File name="package.json" />
</Files>
```

**When to use**:

- Showing project structure
- Explaining file organization
- Documenting expected output structure

---

### Cards

Link cards for navigation.

```mdx
import { Cards, Card } from 'fumadocs-ui/components/card';

<Cards>
  <Card href="/docs/get-started" title="Get Started">
    Quick introduction to CyanPrint
  </Card>
  <Card href="/docs/templates" title="Templates">
    Learn about template creation
  </Card>
</Cards>

<!-- With icon -->

import { RocketIcon } from 'lucide-react';

<Card icon={<RocketIcon />} href="/docs/quickstart" title="Quick Start">
  Launch your first project
</Card>
```

**When to use**:

- Index pages linking to subsections
- "Next steps" sections
- Related documentation links

---

### TypeTable

Display type/parameter information in a table format.

```mdx
import { TypeTable } from 'fumadocs-ui/components/type-table';

<TypeTable
  type={{
    name: {
      type: 'string',
      description: 'The name of the project',
      required: true,
    },
    version: {
      type: 'string',
      default: '"1.0.0"',
      description: 'Initial version',
    },
  }}
/>
```

**When to use**:

- API reference documentation
- Configuration option tables
- Type definitions

---

### Banner

Full-width banner for announcements.

```mdx
import { Banner } from 'fumadocs-ui/components/banner';

<Banner variant="normal">Important announcement text</Banner>

<Banner variant="rainbow">Special announcement with gradient</Banner>
```

**When to use**:

- Site-wide announcements (use very sparingly)
- Version release highlights
- Deprecation notices

---

## CodeHike Features

Enhanced code blocks with annotations. All code blocks support these features.

### Code Block Flags

Add flags after the language to enable features:

````mdx
```js filename.js -cnb
const code = 'here';
```
````

| Flag | Effect                                          |
| ---- | ----------------------------------------------- |
| `-c` | Add copy button                                 |
| `-n` | Show line numbers                               |
| `-b` | Add border (automatic with filename)            |
| `-w` | Word wrap long lines                            |
| `-a` | Enable token transitions (animations)           |
| `-p` | Use `!!` as annotation prefix instead of `// !` |

Combine flags: `-cnb` = copy + line numbers + border

---

### Mark (Highlight Lines)

Highlight specific lines or code spans.

````mdx
```js
function example() {
  // !mark
  return 'highlighted line';
}
```
````

````mdx
```js
// !mark(1) green - use color index 1
const a = 1;
// !mark(2) blue - use color index 2
const b = 2;
// !mark(gold) - use custom color
const c = 3;
// !mark[/const/] pink - highlight matching text
```
````

**Color indexes**: `0=green`, `1=teal`, `2=blue`, `3=purple`, `4=fuchsia`, `5=pink`

---

### Diff

Show code additions and removals.

````mdx
```js
function example() {
  // !diff -
  const old = 'removed';
  // !diff +
  const new = 'added';
}
```
````

**When to use**:

- Showing before/after code changes
- Documenting migration steps
- Explaining code modifications

---

### Link

Make code clickable.

````mdx
```js
// !link[/fetch/] https://developer.mozilla.org/en-US/docs/Web/API/fetch
const data = await fetch('/api');
```
````

**When to use**:

- Linking to API documentation
- Referencing related code files
- External documentation links

---

### Callout (Code Annotations)

Add callout bubbles inside code.

````mdx
```js
const config = loadConfig();
// !callout[/loadConfig/] This loads from cyan.yaml
```
````

**When to use**:

- Explaining specific code lines
- Adding context without breaking code flow
- Highlighting important implementation details

---

### ClassName

Add custom CSS classes.

````mdx
```js
// !className line-through opacity-50
const deprecated = true;
// !className[/deprecated/] bg-red-100 px-1 rounded
```
````

**When to use**:

- Styling deprecated code
- Visual emphasis (use sparingly)

---

## Other Features

### Mermaid Diagrams

Render diagrams client-side.

```mdx
<Mermaid
  chart="
graph TD;
  A[Start] --> B[Process];
  B --> C[End];
"
/>
```

**When to use**:

- Architecture overviews
- Flow charts
- Sequence diagrams

---

### KaTeX Math

Mathematical equations.

````mdx
```math
E = mc^2
```

Inline math: $x^2 + y^2 = z^2$
````

---

### TOC Control

Control table of contents visibility.

```mdx
# Heading [!toc]

Hidden from TOC but visible on page.

# Heading [toc]

Visible in TOC only (not on page).

# Heading [#custom-slug]

Custom anchor slug.
```

---

## Best Practices

### Use Features in Moderation

1. **Callouts**: Max 1-2 per page unless it's a reference page
2. **CodeHike annotations**: Use when they add clarity, not decoration
3. **Steps**: Only for sequential processes; use lists otherwise
4. **Tabs**: When content is truly equivalent across tabs
5. **Cards**: For navigation, not content display

### Code Blocks

- Use filenames when showing project files
- Use `-c` (copy button) for copyable code
- Use `-n` (line numbers) only when referencing specific lines
- Use diff annotations for showing changes, not for decoration

### Structure

- Start with clear introduction
- Use heading hierarchy (h1 → h2 → h3, don't skip)
- Keep sections focused and concise
- Link to related pages instead of duplicating content

### Avoid

- Over-annotating every code block
- Nested components (e.g., Steps inside Tabs)
- Multiple Callouts in a row
- Cards for single links (use markdown links instead)
