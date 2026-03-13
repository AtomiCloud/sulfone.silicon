# Plan 1: Fix CLI Commands Reference

## Goal

Rewrite `content/docs/user/reference/cli-commands.mdx` to accurately reflect the full CLI as defined in `../iridium/cyanprint/src/commands.rs`.

## Source of Truth

`../iridium/cyanprint/src/commands.rs` — the Clap-based CLI definition.

## File to Modify

- `content/docs/user/reference/cli-commands.mdx`

## What's Wrong

1. **Daemon**: Single command `cyanprint daemon [VERSION]` → should be `daemon start [VERSION]` + `daemon stop`
2. **Missing build command**: `cyanprint build <TAG>` with --config, --platform, --builder, --no-cache, --dry-run, --folder
3. **Missing try command**: `try template` and `try group` subcommands
4. **Missing push resolver**: `push resolver` subcommand
5. **Missing --build flag**: On push template/plugin/processor/resolver
6. **Missing --force flag**: On update command
7. **Missing push flags**: --platform, --builder, --no-cache, --dry-run, --folder
8. **Aliases table**: Missing `build` (b) and `try` (t)

## Implementation

Read `../iridium/cyanprint/src/commands.rs` and rewrite the page with:

- Every command, subcommand, flag, default value, and environment variable
- Proper daemon start/stop sections
- Full build, try template, try group sections
- push resolver + --build flag on all push subcommands
- --force on update
- Complete aliases table

## Writing Guide

- Use `-c` flag on all bash code blocks (copyable)
- Use `<Callout type="warn">` for Docker prerequisite on daemon start (max 1-2 callouts)
- Use markdown tables for options/arguments
- Follow heading hierarchy: h2 for commands, h3 for subcommands, h4 for sections

## Fact-Check

Verify EVERY flag, default, and env var against `commands.rs`. Cross-reference:

- `../iridium/cyanprint/src/commands.rs` lines with `#[arg(...)]` attributes
- Default values, env vars, short/long flags

## Definition of Done

- [ ] All commands match commands.rs exactly
- [ ] `direnv exec . pls build` succeeds
- [ ] `direnv exec . pre-commit run -a` passes
