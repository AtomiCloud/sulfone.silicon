# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build & Development Commands

This project uses Nix for reproducible development. Use `direnv exec .` prefix for all commands:

```bash
# Setup
direnv exec . pls setup      # or: direnv exec . bun i

# Development
direnv exec . pls dev        # or: direnv exec . bun run dev (starts with --turbo)

# Build
direnv exec . pls build      # or: direnv exec . bun run build
```

## Linting

Biome is used for TypeScript/JavaScript linting:

```bash
direnv exec . biome lint --write .
```

Pre-commit hooks run automatically on commit (Biome, treefmt, secrets scanning, shellcheck).

## Commit Message Convention

Uses Angular Conventional Commits format:

- Allowed types: `amend`, `build`, `ci`, `config`, `docs`, `feat`, `fix`, `perf`, `refactor`, `style`, `test`
- Example: `feat: add new documentation page`

## Architecture

This is a **Fumadocs** documentation site built on Next.js 15 with static export.

### Key Directories

- `content/docs/` - MDX documentation content (user and developer sections)
- `src/app/` - Next.js App Router pages
- `src/components/mdx/` - Custom MDX components (Code, Mermaid, annotations)
- `src/lib/source.ts` - Fumadocs source configuration

### MDX Features

Documentation supports:

- **CodeHike** - Enhanced code blocks with annotations (configured in `source.config.ts`)
- **KaTeX** - Math equations via `remark-math` and `rehype-katex`
- **Mermaid** - Diagrams rendered client-side
- **Admonitions** - Callout blocks via `remarkAdmonition`

### Custom Code Annotations

Located in `src/components/mdx/annotations/`:

- `diff.tsx` - Code diffs (+/-)
- `link.tsx` - Clickable code links
- `word-wrap.tsx` - Line wrapping
- `className.tsx` - Custom styling
