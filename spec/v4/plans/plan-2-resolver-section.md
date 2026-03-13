# Plan 2: Resolver Developer Section

## Goal

Create complete resolver documentation under `content/docs/developer/resolvers/` with Diataxis structure. All code in 3 languages.

## Source of Truth

- Node SDK: `../helium/sdks/node/src/domain/resolver/` and `../helium/sdks/node/src/main.ts` (StartResolverWithLambda, port 5553)
- Python SDK: `../helium/sdks/python/cyanprintsdk/api/resolver/fn.py` and `../helium/sdks/python/cyanprintsdk/main.py` (start_resolver_with_fn, port 5553)
- .NET SDK: `../helium/sdks/dotnet/sulfone-helium/Api/Resolver/Lambda.cs` and `../helium/sdks/dotnet/sulfone-helium/Server.cs` (CyanEngine.StartResolver, port 5553)
- E2E resolver: `../iridium/e2e/resolver1/index.ts` (JSON merger)
- E2E Python resolver: `../helium/sdks/python/resolver_test.py`
- E2E .NET resolver: `../helium/sdks/dotnet/sulfone-helium-resolver-api/Program.cs`
- Template usage: `../iridium/e2e/template-resolver-1-v1/cyan.yaml`
- Resolver Dockerfiles: `../iridium/e2e/resolver1/Dockerfile`, `../helium/sdks/python/resolver.Dockerfile`, `../helium/sdks/dotnet/resolver.Dockerfile`

## Types (verified from source)

**ResolverInput:** `config: Record<string, unknown>`, `files: ResolvedFile[]`
**ResolvedFile:** `path: string`, `content: string`, `origin: { template: string, layer: number }`
**ResolverOutput:** `path: string`, `content: string`

## cyan.yaml resolver usage (from `../iridium/e2e/template-resolver-1-v1/cyan.yaml`)

```yaml
resolvers:
  - resolver: cyane2e/resolver1:1
    config:
      arrayStrategy: 'concat'
    files:
      - c1.json
```

## Files to Create

```
content/docs/developer/resolvers/
├── index.mdx
├── meta.json
├── tutorials/
│   ├── meta.json
│   └── first-resolver.mdx
├── how-to/
│   ├── meta.json
│   ├── merge-json.mdx
│   ├── merge-text.mdx
│   └── push-to-registry.mdx
├── reference/
│   ├── meta.json
│   ├── project-structure.mdx
│   ├── cyan-yaml.mdx
│   ├── dockerfile.mdx
│   └── sdk/
│       ├── meta.json
│       ├── index.mdx
│       ├── start-resolver.mdx
│       └── input-output.mdx
└── explanation/
    ├── meta.json
    ├── what-are-resolvers.mdx
    └── resolvers-in-pipeline.mdx
```

## Files to Modify

- `content/docs/developer/meta.json` — Add "resolvers" to pages
- `content/docs/developer/index.mdx` — Remove "coming soon" for resolvers
- `content/docs/developer/basics/introduction.mdx` — Remove "coming soon"
- `content/docs/developer/basics/quickstart.mdx` — Remove "coming soon"

## Writing Guide

- Use `<Tabs items={['TypeScript', 'Python', 'C#']}>` for all code examples
- Use `<Steps>` in tutorials
- Use `<TypeTable>` for SDK type reference
- Use `<Files>` for project structure
- Use `<Cards>` for "Next Steps" navigation
- Use `-c` on all copyable code blocks
- Use filenames on code blocks (e.g., `ts index.ts -c`)

## Tutorial Workflow (first-resolver.mdx)

1. Create project manually
2. Write resolver logic (3 languages in tabs)
3. Create Dockerfile (3 languages in tabs)
4. Write cyan.yaml
5. Create test template referencing the resolver
6. `cyanprint try template ./test-template ./output`
7. Iterate and push when ready

## Definition of Done

- [ ] Full Diataxis structure created
- [ ] ALL code examples in 3 languages using Tabs
- [ ] Types match actual helium source for all 3 SDKs
- [ ] "Coming soon" labels removed
- [ ] developer/meta.json includes "resolvers"
- [ ] Follows howtowrite.md
- [ ] `direnv exec . pls build` succeeds
- [ ] `direnv exec . pre-commit run -a` passes
