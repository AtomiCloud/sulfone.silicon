# How to Write Documentation

This guide covers the available UI components and CodeHike features for writing CyanPrint documentation. Use these features thoughtfully to create clear, engaging content.

---

## Fumadocs UI Components

### Callout

Alert boxes for important information. Callout is a **default MDX component** — no import needed.

```mdx
<Callout type="info">General information</Callout>
<Callout type="warn">Warning message</Callout>
<Callout type="error">Error message</Callout>
<Callout type="success">Success message</Callout>
<Callout title="Custom Title" type="info">
  With custom title
</Callout>
```

**Types**: `info` (default), `warn`, `warning`, `error`, `success`, `idea`

**Props**:

| Prop    | Type      | Description                     |
| ------- | --------- | ------------------------------- |
| `type`  | string    | Callout variant (see above)     |
| `title` | ReactNode | Optional heading inside callout |
| `icon`  | ReactNode | Override the default type icon  |

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
<Step>

### First Step

Description of step 1

</Step>
<Step>

### Second Step

Description of step 2

</Step>
</Steps>
```

**Important**: Each `<Step>` must have its heading and content on **separate lines with blank lines** between the JSX tags and markdown content. MDX requires blank lines to parse markdown (headings, paragraphs) inside JSX components. Inline usage like `<Step>### Title</Step>` will not render correctly.

**Alternative** (no import): Use Tailwind classes `fd-steps` on a container div and `fd-step` on individual elements.

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

**Props (Tabs)**:

| Prop           | Type    | Description                                      |
| -------------- | ------- | ------------------------------------------------ |
| `items`        | array   | Tab labels                                       |
| `groupId`      | string  | Shares selection state across tabs with same ID  |
| `persist`      | boolean | Stores selection in localStorage (needs groupId) |
| `defaultIndex` | number  | Initial active tab by index                      |
| `defaultValue` | string  | Initial active tab by value                      |
| `updateAnchor` | boolean | Updates URL hash on tab selection                |

**Props (Tab)**:

| Prop    | Type   | Description                                   |
| ------- | ------ | --------------------------------------------- |
| `value` | string | Unique identifier (uses index if omitted)     |
| `id`    | string | HTML ID for URL linking (`#id` activates tab) |

**When to use**:

- Multi-language code examples (TypeScript/JavaScript)
- Package manager variants (npm/yarn/pnpm)
- Configuration options for different environments

---

### Accordion

Collapsible content sections. Built on Radix UI Accordion.

```mdx
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';

<Accordions type="single">
  <Accordion title="Expandable Section 1">Hidden content here</Accordion>
  <Accordion title="Expandable Section 2">More hidden content</Accordion>
</Accordions>
```

**Props (Accordions)**:

| Prop          | Type                           | Required | Description                           |
| ------------- | ------------------------------ | -------- | ------------------------------------- |
| `type`        | `"single"` \| `"multiple"`     | Yes      | One or multiple sections open at once |
| `disabled`    | boolean                        | No       | Disables all interaction              |
| `orientation` | `"vertical"` \| `"horizontal"` | No       | Layout direction (default: vertical)  |

**Props (Accordion)**:

| Prop       | Type    | Description                            |
| ---------- | ------- | -------------------------------------- |
| `title`    | string  | Header text                            |
| `value`    | string  | Unique identifier for the item         |
| `id`       | string  | Enables auto-open via URL hash (`#id`) |
| `disabled` | boolean | Prevents interaction with this item    |

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

**Props**:

| Component | Prop          | Type      | Description                |
| --------- | ------------- | --------- | -------------------------- |
| `File`    | `name`        | string    | Filename to display        |
| `File`    | `icon`        | ReactNode | Custom icon                |
| `Folder`  | `name`        | string    | Folder name                |
| `Folder`  | `defaultOpen` | boolean   | Open by default            |
| `Folder`  | `disabled`    | boolean   | Disable folder interaction |

**When to use**:

- Showing project structure
- Explaining file organization
- Documenting expected output structure

---

### Cards

Link cards for navigation. Card is a **default MDX component** — no import needed for basic use.

```mdx
<Cards>
  <Card href="/docs/get-started" title="Get Started">
    Quick introduction to CyanPrint
  </Card>
  <Card href="/docs/templates" title="Templates">
    Learn about template creation
  </Card>
</Cards>

<!-- With icon (icon library import needed) -->

import { RocketIcon } from 'lucide-react';

<Card icon={<RocketIcon />} href="/docs/quickstart" title="Quick Start">
  Launch your first project
</Card>
```

**Props (Card)**:

| Prop          | Type      | Description                            |
| ------------- | --------- | -------------------------------------- |
| `title`       | ReactNode | Card heading (required)                |
| `href`        | string    | Makes card clickable (optional)        |
| `icon`        | ReactNode | Icon displayed before title (optional) |
| `description` | ReactNode | Card description text (optional)       |
| `external`    | boolean   | Whether the link is external           |

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

**Type entry fields**:

| Field                 | Type      | Description                          |
| --------------------- | --------- | ------------------------------------ |
| `type`                | ReactNode | Type signature (short)               |
| `description`         | ReactNode | Field description                    |
| `default`             | ReactNode | Default value                        |
| `required`            | boolean   | Marks field as required              |
| `deprecated`          | boolean   | Marks field as deprecated            |
| `typeDescription`     | ReactNode | Full type signature                  |
| `typeDescriptionLink` | string    | Link for the type                    |
| `parameters`          | array     | Parameter info if type is a function |
| `returns`             | ReactNode | Return type documentation            |

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

<!-- Closeable banner (persists dismissal) -->

<Banner id="v2-release">Version 2.0 is here!</Banner>
```

**Props**:

| Prop            | Type    | Description                                       |
| --------------- | ------- | ------------------------------------------------- |
| `variant`       | string  | `"normal"` (default) or `"rainbow"` for gradient  |
| `id`            | string  | Enables persistent close button                   |
| `changeLayout`  | boolean | Whether to adjust Fumadocs layout (default: true) |
| `height`        | string  | Banner height (default: `"3rem"`)                 |
| `rainbowColors` | array   | Custom rgba colors for rainbow variant            |

**When to use**:

- Site-wide announcements (use very sparingly)
- Version release highlights
- Deprecation notices

---

## CodeHike Features

Enhanced code blocks with annotations. All code blocks are processed by CodeHike (v1.x).

### Code Block Flags

These are **custom flags implemented in this project** (not standard CodeHike). Add flags after the language to enable features:

````mdx
```js filename.js -cnb
const code = 'here';
```
````

| Flag | Effect                                          |
| ---- | ----------------------------------------------- |
| `-c` | Add copy button                                 |
| `-n` | Show line numbers                               |
| `-b` | Add border (automatic when filename is present) |
| `-w` | Word wrap long lines                            |
| `-a` | Enable token transitions (animations)           |
| `-p` | Use `!!` as annotation prefix instead of `// !` |

Combine flags: `-cnb` = copy + line numbers + border

**Filename behavior**: When a filename is provided (e.g., `filename.js`), the code block automatically gets a titled header with border, icon, and the filename displayed. The `-b` flag is only needed for untitled bordered blocks.

---

### Mark (Highlight Lines)

Highlight specific lines or code spans. Uses `// !` comment prefix (language-dependent: `# !` in Python, etc.).

**Basic mark** (highlights the next line):

````mdx
```js
function example() {
  // !mark
  return 'highlighted line';
}
```
````

**Multi-line mark with color**:

````mdx
```js
// !mark(1:3) pink
const a = 1;
const b = 2;
const c = 3;
```
````

The `(1:3)` means "mark lines 1 through 3 starting from the next line". The word after is the color query.

**Color by index** (pass a number as the query):

````mdx
```js
// !mark 0
const green = 'color index 0';
// !mark 1
const teal = 'color index 1';
// !mark 2
const blue = 'color index 2';
```
````

**Color indexes**: `0` = green (#22c55e), `1` = teal (#14b8a6), `2` = blue (#0ea5e9), `3` = purple (#8b5cf6), `4` = fuchsia (#d946ef), `5` = pink (#ec4899)

**CSS color names** (pass any valid CSS color name or hex):

````mdx
```js
// !mark gold
const custom = 'uses CSS gold color';
// !mark #ff6347
const hex = 'uses hex color';
```
````

**Inline mark** (highlight specific tokens using regex):

````mdx
```js
// !mark[/const/] pink
const a = 1;
```
````

**Mark syntax summary**:

| Syntax                   | Effect                                 |
| ------------------------ | -------------------------------------- |
| `// !mark`               | Highlight next line (default green)    |
| `// !mark gold`          | Highlight next line with CSS color     |
| `// !mark 2`             | Highlight next line with color index 2 |
| `// !mark(1:3)`          | Highlight next 3 lines (default green) |
| `// !mark(1:3) pink`     | Highlight next 3 lines with CSS color  |
| `// !mark[/regex/] pink` | Highlight matching tokens with color   |

---

### Diff

Show code additions and removals. Automatically adds `+`/`-` indicators and red/green background highlighting.

````mdx
```js
function example() {
  // !diff -
  const old = 'removed';
  // !diff +
  const updated = 'added';
}
```
````

**When to use**:

- Showing before/after code changes
- Documenting migration steps
- Explaining code modifications

---

### Link

Make code tokens clickable. Uses inline annotation with regex to target tokens.

````mdx
```js
// !link[/fetch/] https://developer.mozilla.org/en-US/docs/Web/API/fetch
const data = await fetch('/api');
```
````

**Autolink multiple URLs** using global regex:

````mdx
```js
// !link[/"(http.*?)"/gm]
const links = ['https://codehike.org', 'https://github.com/code-hike'];
```
````

**When to use**:

- Linking to API documentation
- Referencing related code files
- External documentation links

---

### Callout (Code Annotations)

Add callout bubbles inside code. The callout points to the matched token with an arrow.

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

Add custom CSS classes to lines or tokens. Uses Tailwind utility classes.

````mdx
```js
// !className line-through opacity-50
const deprecated = true;
// !className[/deprecated/] bg-red-100 px-1 rounded
```
````

| Syntax                           | Effect                           |
| -------------------------------- | -------------------------------- |
| `// !className classes`          | Apply classes to the entire line |
| `// !className[/regex/] classes` | Apply classes to matching tokens |

**When to use**:

- Styling deprecated code
- Visual emphasis (use sparingly)

---

## Annotation Syntax Reference

All CodeHike annotations use the comment syntax of the language:

| Language           | Block annotation       | Inline annotation               |
| ------------------ | ---------------------- | ------------------------------- |
| JS/TS/CSS/Java     | `// !name query`       | `// !name[/regex/] query`       |
| Python/Ruby/YAML   | `# !name query`        | `# !name[/regex/] query`        |
| HTML               | `<!-- !name query -->` | `<!-- !name[/regex/] query -->` |
| JSON (use `jsonc`) | `// !name query`       | `// !name[/regex/] query`       |

**Block range syntax**: `// !name(startLine:endLine) query` — line numbers are relative to the comment.

**With `-p` flag**: Use `!!` prefix instead of `// !` (e.g., `!! mark` instead of `// !mark`).

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

- Use filenames when showing project files (adds titled header automatically)
- Use `-c` (copy button) for copyable code
- Use `-n` (line numbers) only when referencing specific lines
- Use diff annotations for showing changes, not for decoration
- Default annotation prefix is `// !` — only use `-p` flag (for `!!` prefix) when code already contains `// !` comments

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
- `// !mark(gold)` — don't put color names inside parentheses; parens are for line ranges only
