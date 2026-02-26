# Phase 5: Developer Documentation - Plugins

## Source

- Ticket: CU-86et8z80y
- Commit: `docs: add developer documentation - plugins and SDK reference`

## CRITICAL: Verify Against Actual SDK Source Code

Before writing ANY documentation:

1. Read `../helium/sdks/node/src/main.ts` for SDK exports
2. Read `../helium/sdks/node/src/domain/` for plugin interfaces
3. NEVER invent APIs - only document what actually exists
4. Verify against ALL files in `../helium/`, not just docs

## Verified SDK Exports (from ../helium/sdks/node/src/main.ts)

**Plugin Entry Points:**

- `StartPlugin` / `StartPluginWithLambda`

**Core Types:**

- `ICyanPlugin` - Plugin interface
- `CyanPluginInput` - Input type
- `PluginOutput` - Output type

## CRITICAL: Multi-Language Tabs

ALL code examples MUST use Fumadocs Tabs with `groupId="sdk-language" persist`:

````mdx
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

<Tabs groupId="sdk-language" items={['TypeScript', '.NET', 'Python']} persist>
  <Tab value="TypeScript">

```ts
import { StartPluginWithLambda } from '@atomicloud/cyan-sdk';

StartPluginWithLambda(async input => {
  // Plugin logic
  return { data: {} };
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

### Plugins Section

| Action | File                                                  | Type      | Description                                       |
| ------ | ----------------------------------------------------- | --------- | ------------------------------------------------- |
| CREATE | `content/docs/developer/plugins/meta.json`            | Config    | Navigation metadata                               |
| CREATE | `content/docs/developer/plugins/00-first-plugin.mdx`  | Tutorial  | Create a simple plugin - tabs                     |
| CREATE | `content/docs/developer/plugins/01-api-reference.mdx` | Reference | ICyanPlugin, CyanPluginInput, PluginOutput - tabs |

### SDK Reference Section

| Action | File                                           | Type      | Description                                             |
| ------ | ---------------------------------------------- | --------- | ------------------------------------------------------- |
| CREATE | `content/docs/developer/sdk/meta.json`         | Config    | Navigation metadata                                     |
| CREATE | `content/docs/developer/sdk/00-typescript.mdx` | Reference | TypeScript SDK full API - read ../helium/sdks/node/src/ |
| CREATE | `content/docs/developer/sdk/01-dotnet.mdx`     | Reference | .NET SDK full API - read ../helium/sulfone-helium/      |
| CREATE | `content/docs/developer/sdk/02-python.mdx`     | Reference | Python SDK full API - read ../helium/cyanprintsdk/      |

## Content Details

### 00-first-plugin.mdx (Tutorial)

- **Goal**: Learn to create a basic plugin
- **Content**:
  - What is a plugin?
  - Plugin vs processor vs template
  - Setting up a plugin project
  - Plugin lifecycle
- **Tabs for all 3 SDKs**

### 01-api-reference.mdx (Reference)

- **Goal**: Complete API reference
- **Content**:
  - ICyanPlugin interface
  - CyanPluginInput type
  - PluginOutput type
- **Tabs for all 3 SDKs**

### SDK Reference Pages

Each SDK reference page should include:

- **Installation**: How to install the SDK
- **Entry Points**: StartTemplate, StartProcessor, StartPlugin
- **Core Types**: IInquirer, IDeterminism, Cyan, CyanFileHelper
- **Complete API**: All methods and types with examples

### Meta.json Format

```json
// content/docs/developer/plugins/meta.json
{
  "title": "Plugins",
  "pages": ["00-first-plugin", "01-api-reference"]
}

// content/docs/developer/sdk/meta.json
{
  "title": "SDK Reference",
  "pages": ["00-typescript", "01-dotnet", "02-python"]
}
```

## Verification

After completion:

1. Run `direnv exec . pls build` to verify build succeeds
2. Run `direnv exec . pls dev` and verify dev server starts
3. Test tab persistence across pages
4. Check all internal links
5. **Verify all API examples match actual SDK source code**
6. Run `pre-commit run --all`

## Definition of Done

- [ ] Plugins section created (2 pages + meta.json)
- [ ] SDK reference created (3 pages + meta.json)
- [ ] All code examples use tabs for multi-language
- [ ] All APIs verified against actual SDK source
- [ ] Build succeeds
- [ ] Dev server starts successfully
- [ ] Tab functionality works
- [ ] All links verified
- [ ] pre-commit run --all passes
