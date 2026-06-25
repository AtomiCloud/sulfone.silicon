# Plan 3: Build Config Documentation

## Goal

Document the `build:` section in cyan.yaml that configures Docker buildx builds.

## Source of Truth

- Config model: `../iridium/cyanregistry/src/cli/models/build_config.rs`
- Build command: `../iridium/cyanprint/src/commands.rs` (Build variant)
- Internal docs: `../iridium/docs/developer/surfaces/cli/05-build.md`
- E2E example: `../iridium/e2e/template3/cyan.yaml` (has build: section)

## Build Config (from build_config.rs)

```rust
pub struct BuildConfig {
    pub registry: Option<String>,
    pub platforms: Option<Vec<String>>,
    pub images: Option<ImagesConfig>,
}
pub struct ImagesConfig {
    pub template: Option<ImageConfig>,
    pub blob: Option<ImageConfig>,
    pub processor: Option<ImageConfig>,
    pub plugin: Option<ImageConfig>,
    pub resolver: Option<ImageConfig>,
}
pub struct ImageConfig {
    pub image: Option<String>,
    pub dockerfile: String,
    pub context: String,
}
```

## E2E Example (from template3/cyan.yaml)

```yaml
build:
  registry: kirinnee
  platforms:
    - linux/amd64
  images:
    template:
      image: template3
      dockerfile: cyan/Dockerfile
      context: ./cyan
    blob:
      image: blob3
      dockerfile: blob.Dockerfile
      context: .
```

## Files to Create

- `content/docs/developer/templates/reference/build-config.mdx` — Full build config reference

## Files to Modify

- Link from existing cyan-yaml reference pages in templates/processors/plugins/resolvers

## Writing Guide

- Use `<TypeTable>` for field documentation
- Use `-c` on YAML code blocks
- Use `<Callout>` for relationship between `build` command and config
- Show examples for different artifact types

## Definition of Done

- [ ] Build config YAML schema documented with all fields from BuildConfig struct
- [ ] Multi-platform example included
- [ ] Relationship between `cyanprint build` and `cyanprint push --build` explained
- [ ] Follows howtowrite.md
- [ ] `direnv exec . pls build` succeeds
- [ ] `direnv exec . pre-commit run -a` passes
