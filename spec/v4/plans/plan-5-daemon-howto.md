# Plan 5: Daemon How-To + Tutorial Updates

## Goal

Add daemon management docs and update tutorials to include daemon as prerequisite.

## Source of Truth

- CLI: `../iridium/cyanprint/src/commands.rs` (DaemonCommands enum)
- Implementation: `../iridium/cyanprint/src/coord.rs` (start pulls boron image, creates network, runs container; stop calls cleanup + removes container)
- Internal docs: `../iridium/docs/developer/surfaces/cli/04-daemon.md`

## Daemon Behavior (from coord.rs)

### `daemon start`

- Pulls `ghcr.io/atomicloud/sulfone.boron:<version>` Docker image
- Creates Docker network "cyanprint" if not exists
- Runs coordinator container: port mapping, network, REGISTRY env var
- Container name: `cyanprint-coordinator-<port>`
- Default version: "latest", default port: 9000

### `daemon stop`

- Calls DELETE `/cleanup` on coordinator
- Removes coordinator container

## Files to Create

- `content/docs/user/how-to/manage-daemon.mdx`

## Files to Modify

- `content/docs/user/how-to/meta.json` — Add "manage-daemon" + "test-locally" to pages
- `content/docs/user/tutorials/get-started.mdx` — Add daemon start as prerequisite step

## Writing Guide

- Use `<Steps>` for the start/stop workflow
- Use `<Callout type="warn">` for Docker prerequisite
- Use `-c` on all bash blocks
- Keep it simple — this is a user-facing page

## Definition of Done

- [ ] Daemon start/stop documented with examples
- [ ] Custom port and specific version examples
- [ ] get-started tutorial updated with daemon prerequisite
- [ ] meta.json updated
- [ ] Follows howtowrite.md
- [ ] `direnv exec . pls build` succeeds
- [ ] `direnv exec . pre-commit run -a` passes
