# Phase 3: Developer Documentation - Templates

## Source

- Ticket: CU-86et8z80y
- Commit: `docs: add developer documentation - templates`

## CRITICAL: Verify Against Actual SDK Source Code

Before writing ANY documentation:

1. Read `../helium/sdks/node/src/main.ts` for SDK exports
2. Read `../helium/sdks/node/src/domain/core/inquirer.ts` for IInquirer interface
3. Read `../iridium/docs/developer/` for CLI documentation
4. NEVER invent APIs - only document what actually exists
5. Verify against ALL files in `../helium/`, `../iridium/`, not just docs

## Verified SDK Exports (from ../helium/sdks/node/src/main.ts)

**Entry Points:**

- `StartTemplate` / `StartTemplateWithLambda`
- `StartProcessor` / `StartProcessorWithLambda`
- `StartPlugin` / `StartPluginWithLambda`

**Core Types:**

- `IInquirer` - User prompts (text, select, checkbox, confirm, password, dateSelect)
- `IDeterminism` - Deterministic random values
- `Cyan` - File operations
- `CyanFileHelper` - File utilities
- `CyanGlob` - Glob patterns

## CRITICAL: Multi-Language Tabs

ALL code examples MUST use Fumadocs Tabs with `groupId="sdk-language" persist`:

````mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

<Tabs groupId="sdk-language" items={['TypeScript', '.NET', 'Python']} persist>
  <Tab value="TypeScript">

```ts
import { StartTemplateWithLambda } from '@atomicloud/cyan-sdk';

StartTemplateWithLambda(async (inquirer, determinism) => {
  const name = await inquirer.text({ message: 'Project name?', name: 'name' });
  return { processors: [{ name: 'main', files: [], config: { name } }] };
});
```
````

  </Tab>
  <Tab value=".NET">

```csharp
// .NET SDK example - verify from ../helium/sulfone-helium/
```

  </Tab>
  <Tab value="Python">

```python
# Python SDK example - verify from ../helium/cyanprintsdk/
```

  </Tab>
</Tabs>
```

## Files to Create/Modify

### Developer Overview

| Action | File                                     | Type        | Description                                                          |
| ------ | ---------------------------------------- | ----------- | -------------------------------------------------------------------- |
| UPDATE | `content/docs/developer/index.mdx`       | Overview    | Update from placeholder - overview of 3 artifact types               |
| CREATE | `content/docs/developer/00-concepts.mdx` | Explanation | Core concepts: Cyan object, globs, inquirer, determinism - with tabs |

### Templates Section

| Action | File                                                           | Type        | Description                                                                 |
| ------ | -------------------------------------------------------------- | ----------- | --------------------------------------------------------------------------- |
| CREATE | `content/docs/developer/templates/meta.json`                   | Config      | Navigation metadata                                                         |
| CREATE | `content/docs/developer/templates/00-glob-and-copy.mdx`        | Tutorial    | Basic glob patterns and file copying - no templating yet                    |
| CREATE | `content/docs/developer/templates/01-default-processor.mdx`    | Tutorial    | Using the default processor with Eta templating - tabs for all SDKs         |
| CREATE | `content/docs/developer/templates/02-adding-interaction.mdx`   | Tutorial    | Adding user interaction with IInquirer - tabs                               |
| CREATE | `content/docs/developer/templates/03-inquirer-methods.mdx`     | Reference   | IInquirer API: text, select, checkbox, confirm, password, dateSelect - tabs |
| CREATE | `content/docs/developer/templates/04-randomness.mdx`           | How-to      | Working with randomness using IDeterminism - tabs                           |
| CREATE | `content/docs/developer/templates/05-shared-answers.mdx`       | How-to      | Making multiple templates share the same answers - tabs                     |
| CREATE | `content/docs/developer/templates/06-multiple-templates.mdx`   | How-to      | Using multiple templates together (composition) - tabs                      |
| CREATE | `content/docs/developer/templates/07-plugins-in-templates.mdx` | How-to      | Using plugins when writing templates - tabs                                 |
| CREATE | `content/docs/developer/templates/08-testing.mdx`              | How-to      | Testing templates locally                                                   |
| CREATE | `content/docs/developer/templates/09-publishing.mdx`           | How-to      | Publishing with `cyanprint push`                                            |
| CREATE | `content/docs/developer/templates/10-api-reference.mdx`        | Reference   | ICyanTemplate, IInquirer, IDeterminism interfaces - tabs                    |
| CREATE | `content/docs/developer/templates/11-lifecycle.mdx`            | Explanation | How templates are executed in containers                                    |
| CREATE | `content/docs/developer/templates/12-best-practices.mdx`       | Explanation | Template design patterns                                                    |

## Content Details

### IInquirer Methods (verified from ../helium/sdks/node/src/domain/core/inquirer.ts)

| Method         | Return Type         | Description                   |
| -------------- | ------------------- | ----------------------------- |
| `text()`       | `Promise<string>`   | Text input                    |
| `select()`     | `Promise<string>`   | Single selection from list    |
| `checkbox()`   | `Promise<string[]>` | Multiple selections from list |
| `confirm()`    | `Promise<boolean>`  | Yes/no confirmation           |
| `password()`   | `Promise<string>`   | Masked password input         |
| `dateSelect()` | `Promise<string>`   | Date picker                   |

### Templates Tutorials (Divio Learning-oriented)

#### 00-glob-and-copy.mdx

- **Goal**: Learn basic file operations without templating
- **Content**:
  - What is a template?
  - Setting up a template project
  - Glob patterns for file matching
  - Simple copy operation
- Concept-focused, minimal code

#### 01-default-processor.mdx

- **Goal**: Learn templating with the default processor
- **Reference**: https://github.com/AtomiCloud/ketone.default-processor
- **Content**:
  - What is a processor?
  - The default processor (ketone.default-processor)
  - Eta templating syntax: `var__` and `__` tags
  - Configuring the processor
- **Tabs for all 3 SDKs**

#### 02-adding-interaction.mdx

- **Goal**: Learn to ask users questions
- **Content**:
  - What is IInquirer?
  - Adding questions to your template
  - Using answers in templates
- **Tabs for all 3 SDKs**

### Meta.json Format

```json
{
  "title": "Templates",
  "pages": ["00-glob-and-copy", "01-default-processor", "02-adding-interaction"]
}
```

Use pages array for explicit ordering with 00-, 01- prefixes.

## Verification

After completion:

1. Run `direnv exec . pls build` to verify build succeeds
2. Test tab persistence across pages
3. Verify CodeHike annotations work
4. Check all internal links
5. **Verify all API examples match actual SDK source code**
6. Run `pre-commit run --all`

## Definition of Done

- [ ] Developer index page updated
- [ ] Core concepts page created with tabs
- [ ] Templates section created (13 pages + meta.json)
- [ ] All code examples use tabs for multi-language
- [ ] All APIs verified against actual SDK source
- [ ] Build succeeds
- [ ] Tab functionality works
- [ ] All links verified
- [ ] pre-commit run --all passes
