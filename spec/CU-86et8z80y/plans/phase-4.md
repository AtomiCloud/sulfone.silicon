# Phase 4: Developer Documentation - Processors

## Source

- Ticket: CU-86et8z80y
- Commit: `docs: add developer documentation - processors`

## CRITICAL: Verify Against Actual SDK Source Code

Before writing ANY documentation:

1. Read `../helium/sdks/node/src/main.ts` for SDK exports
2. Read `../helium/sdks/node/src/domain/` for processor interfaces
3. NEVER invent APIs - only document what actually exists
4. Verify against ALL files in `../helium/`, not just docs

## Verified SDK Exports (from ../helium/sdks/node/src/main.ts)

**Processor Entry Points:**

- `StartProcessor` / `StartProcessorWithLambda`

**Core Types:**

- `ICyanProcessor` - Processor interface
- `CyanFileHelper` - File utilities
- `CyanProcessorInput` - Input type

## CRITICAL: Multi-Language Tabs

ALL code examples MUST use Fumadocs Tabs with `groupId="sdk-language" persist`:

````mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

<Tabs groupId="sdk-language" items={['TypeScript', '.NET', 'Python']} persist>
  <Tab value="TypeScript">

```ts
import { StartProcessorWithLambda, CyanFileHelper } from '@atomicloud/cyan-sdk';

StartProcessorWithLambda(async input => {
  // Process files
  return { files: [] };
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

### Processors Section

| Action | File                                                       | Type      | Description                                               |
| ------ | ---------------------------------------------------------- | --------- | --------------------------------------------------------- |
| CREATE | `content/docs/developer/processors/meta.json`              | Config    | Navigation metadata                                       |
| CREATE | `content/docs/developer/processors/00-first-processor.mdx` | Tutorial  | Create a simple file processor - tabs                     |
| CREATE | `content/docs/developer/processors/01-file-operations.mdx` | How-to    | Reading, writing, transforming files - tabs               |
| CREATE | `content/docs/developer/processors/02-api-reference.mdx`   | Reference | ICyanProcessor, CyanFileHelper, CyanProcessorInput - tabs |

## Content Details

### 00-first-processor.mdx (Tutorial)

- **Goal**: Learn to create a basic processor
- **Content**:
  - What is a processor?
  - Processor vs template
  - Setting up a processor project
  - Processing files
- **Tabs for all 3 SDKs**

### 01-file-operations.mdx (How-to)

- **Goal**: Learn file manipulation in processors
- **Content**:
  - Reading files with CyanFileHelper
  - Writing files
  - Transforming content
  - Handling binary files
- **Tabs for all 3 SDKs**

### 02-api-reference.mdx (Reference)

- **Goal**: Complete API reference
- **Content**:
  - ICyanProcessor interface
  - CyanFileHelper methods
  - CyanProcessorInput type
  - Return types
- **Tabs for all 3 SDKs**

### Meta.json Format

```json
{
  "title": "Processors",
  "pages": ["00-first-processor", "01-file-operations", "02-api-reference"]
}
```

## Verification

After completion:

1. Run `direnv exec . pls build` to verify build succeeds
2. Test tab persistence across pages
3. Check all internal links
4. **Verify all API examples match actual SDK source code**
5. Run `pre-commit run --all`

## Definition of Done

- [ ] Processors section created (3 pages + meta.json)
- [ ] All code examples use tabs for multi-language
- [ ] All APIs verified against actual SDK source
- [ ] Build succeeds
- [ ] Tab functionality works
- [ ] All links verified
- [ ] pre-commit run --all passes
