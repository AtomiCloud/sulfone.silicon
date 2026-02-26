# Phase 3: Developer Documentation

## Source

- Ticket: CU-86et8z80y
- Commit: `docs: add developer documentation`

## Objective

Create comprehensive developer documentation for creating templates, processors, and plugins using the Helium SDK.

## CRITICAL: Multi-Language Tabs

ALL code examples MUST use Fumadocs Tabs with `groupId="sdk-language" persist`:

````mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

<Tabs groupId="sdk-language" items={['TypeScript', '.NET', 'Python']} persist>
  <Tab value="TypeScript">

```ts
// TypeScript code
```
````

  </Tab>
  <Tab value=".NET">

```csharp
// C# code
```

  </Tab>
  <Tab value="Python">

```python
# Python code
```

  </Tab>
</Tabs>
```

## Files to Create/Modify

### Developer Overview

| Action | File                                     | Type        | Description                                              |
| ------ | ---------------------------------------- | ----------- | -------------------------------------------------------- |
| UPDATE | `content/docs/developer/index.mdx`       | Overview    | Update from placeholder - overview of 3 artifact types   |
| CREATE | `content/docs/developer/01-concepts.mdx` | Explanation | Core concepts: Cyan object, globs, inquirer, determinism |

### Templates Section

| Action | File                                                           | Type        | Description                                                                           |
| ------ | -------------------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------- |
| CREATE | `content/docs/developer/templates/meta.json`                   | Config      | Navigation metadata                                                                   |
| CREATE | `content/docs/developer/templates/01-glob-and-copy.mdx`        | Tutorial    | Basic glob patterns and file copying - no templating yet                              |
| CREATE | `content/docs/developer/templates/02-default-processor.mdx`    | Tutorial    | Using the default processor with Eta templating (reference: ketone.default-processor) |
| CREATE | `content/docs/developer/templates/03-adding-interaction.mdx`   | Tutorial    | Adding user interaction (questions and answers)                                       |
| CREATE | `content/docs/developer/templates/04-inquirer-methods.mdx`     | Reference   | Inquirer API: text, select, checkbox, confirm, password, date methods                 |
| CREATE | `content/docs/developer/templates/05-randomness.mdx`           | How-to      | Working with randomness/interdeterministic values using determinism                   |
| CREATE | `content/docs/developer/templates/06-shared-answers.mdx`       | How-to      | Making multiple templates share the same answers (no re-prompting)                    |
| CREATE | `content/docs/developer/templates/07-multiple-templates.mdx`   | How-to      | Using multiple templates together (template composition)                              |
| CREATE | `content/docs/developer/templates/08-plugins-in-templates.mdx` | How-to      | Using plugins when writing templates                                                  |
| CREATE | `content/docs/developer/templates/09-testing.mdx`              | How-to      | Testing templates locally                                                             |
| CREATE | `content/docs/developer/templates/10-publishing.mdx`           | How-to      | Publishing to registry                                                                |
| CREATE | `content/docs/developer/templates/11-api-reference.mdx`        | Reference   | ICyanTemplate, IInquirer, IDeterminism interfaces                                     |
| CREATE | `content/docs/developer/templates/12-lifecycle.mdx`            | Explanation | How templates are executed                                                            |
| CREATE | `content/docs/developer/templates/13-best-practices.mdx`       | Explanation | Template design patterns                                                              |

### Processors Section

| Action | File                                                       | Type      | Description                                        |
| ------ | ---------------------------------------------------------- | --------- | -------------------------------------------------- |
| CREATE | `content/docs/developer/processors/meta.json`              | Config    | Navigation metadata                                |
| CREATE | `content/docs/developer/processors/01-first-processor.mdx` | Tutorial  | Create a simple file processor                     |
| CREATE | `content/docs/developer/processors/02-file-operations.mdx` | How-to    | Reading, writing, transforming files               |
| CREATE | `content/docs/developer/processors/03-api-reference.mdx`   | Reference | ICyanProcessor, CyanFileHelper, CyanProcessorInput |

### Plugins Section

| Action | File                                                  | Type      | Description                                |
| ------ | ----------------------------------------------------- | --------- | ------------------------------------------ |
| CREATE | `content/docs/developer/plugins/meta.json`            | Config    | Navigation metadata                        |
| CREATE | `content/docs/developer/plugins/01-first-plugin.mdx`  | Tutorial  | Create a simple plugin                     |
| CREATE | `content/docs/developer/plugins/02-api-reference.mdx` | Reference | ICyanPlugin, CyanPluginInput, PluginOutput |

### SDK Reference

| Action | File                                        | Type      | Description                       |
| ------ | ------------------------------------------- | --------- | --------------------------------- |
| CREATE | `content/docs/developer/sdk/meta.json`      | Config    | Navigation metadata               |
| CREATE | `content/docs/developer/sdk/typescript.mdx` | Reference | TypeScript SDK full API reference |
| CREATE | `content/docs/developer/sdk/dotnet.mdx`     | Reference | .NET SDK full API reference       |
| CREATE | `content/docs/developer/sdk/python.mdx`     | Reference | Python SDK full API reference     |

## Content Details

### Templates Tutorials (Divio Learning-oriented)

#### 01-glob-and-copy.mdx

- **Goal**: Learn basic file operations without templating
- **Content**:
  - What is a template?
  - Setting up a template project
  - Glob patterns for file matching
  - Simple copy operation
- **No tabs needed** - just explain the concept, code examples are minimal

#### 02-default-processor.mdx

- **Goal**: Learn templating with the default processor
- **Reference**: https://github.com/AtomiCloud/ketone.default-processor
- **Content**:
  - What is a processor?
  - The default processor (ketone.default-processor)
  - Eta templating syntax: `var__` and `__` tags
  - Configuring the processor
- **Tabs for all 3 SDKs** - show configuration in each language

#### 03-adding-interaction.mdx

- **Goal**: Learn to ask users questions
- **Content**:
  - What is Inquirer?
  - Adding questions to your template
  - Using answers in templates
- **Tabs for all 3 SDKs** - show inquirer usage in each language

### Reference: ketone.default-processor

The default processor uses Eta templating:

- Variable syntax: `var__variableName__`
- Configuration:
  ```json
  {
    "vars": {
      "name": "string",
      "version": "string"
    },
    "parser": {
      "prefix": "var__",
      "suffix": "__"
    }
  }
  ```

### Meta.json Format

```json
{
  "title": "Section Title",
  "description": "Section description",
  "icon": "IconName"
}
```

Common icons: Code, FileCode, Puzzle, BookOpen

## Verification

After completion:

1. Run `direnv exec . pls build` to verify build succeeds
2. Test tab persistence across pages
3. Verify CodeHike annotations work
4. Check all internal links

## Definition of Done

- [ ] Developer index page updated
- [ ] Core concepts page created
- [ ] Templates section created (13 pages + meta.json)
- [ ] Processors section created (3 pages + meta.json)
- [ ] Plugins section created (2 pages + meta.json)
- [ ] SDK reference created (3 pages + meta.json)
- [ ] All code examples use tabs for multi-language
- [ ] Build succeeds
- [ ] Tab functionality works
