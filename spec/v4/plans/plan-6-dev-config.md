# Plan 6: Dev Config

## Goal

Document the `dev:` section in cyan.yaml for dev mode testing with `cyanprint try template --dev`.

## Source of Truth

- Config model: `../iridium/cyanregistry/src/cli/models/dev_config.rs`
- Implementation: `../iridium/cyanprint/src/try_cmd.rs` (dev mode branch)

## Dev Config (from dev_config.rs)

```rust
pub struct DevConfig {
    pub template_url: String,  // URL of external template server
    pub blob_path: String,     // Path to blob directory
}
```

## How Dev Mode Works

1. Developer starts template server locally (e.g., `bun run index.ts` → listens on port 5550)
2. Adds `dev:` to cyan.yaml pointing to running server
3. `cyanprint try template --dev ./my-template ./output` reads dev config
4. Skips Docker build — connects to template_url directly, uses blob_path on disk
5. Much faster iteration

## Files to Create

- `content/docs/developer/templates/reference/dev-config.mdx`

## Files to Modify

- Link from template cyan-yaml reference page
- Cross-reference from dev-mode how-to (Plan 4)

## Writing Guide

- Use `<TypeTable>` for field documentation
- Use `-c` on YAML and bash code blocks
- Use `<Callout type="info">` to explain speed benefit

## Definition of Done

- [ ] Dev config YAML schema documented
- [ ] Both fields explained with examples
- [ ] Workflow guide included
- [ ] Follows howtowrite.md
- [ ] `direnv exec . pls build` succeeds
- [ ] `direnv exec . pre-commit run -a` passes
